---
sidebar_position: 1
---

# Traffic Replay from Sensor Data

Traffic Replay turns **real roadside-sensor counts** into an animated, playable 3D scene. Instead of the synthetic crowd that 3DStreet's normal traffic feature spawns, a Traffic Replay layer plays back the actual street users a sensor detected — people, bikes, cars, buses — at the times, directions, and speeds they were measured, moving across the street you designed.

It was built as an integration with **[Roadway Biome](https://roadwaybiome.com)**, the open-source traffic monitor: a roadside device (camera doing on-device object detection + radar for speed) records who passes and how fast, and 3DStreet replays that record as a design-review visualization.

:::info Beta feature
Traffic Replay ships as **"(Beta) Traffic Replay from Sensor Data"** in the Add Layer panel. The playback engine and the data pipeline are verified end to end; the in-app SQLite→manifest conversion is a fast-follow (today the conversion is a one-line command-line step, described below).
:::

## What it looks like

You link a Traffic Replay layer to a **managed street** in your scene, press **Start** (Play), and the recorded street users animate onto the correct lanes by mode:

- **people** walk the sidewalks,
- **bikes** ride the bike lanes,
- **cars / motorcycles / buses** travel the drive/bus lanes,

each entering when it was actually detected, heading in its measured direction (inbound / outbound), at its measured speed. A running tally of counts-by-mode is emitted while it plays, so the scene doubles as a live count visualization.

Because the whole thing is presentation-only (nothing is written to the scene while it plays), anyone can Start it — no edit permission required.

## Accessing the demo

There are two ways in: the product path (Add Layer card), and a zero-click developer demo.

### Product path — Add Layer card

In the Editor:

1. **Add Layer → "(Beta) Traffic Replay from Sensor Data"**.
2. Pick a pre-converted replay manifest (`.json`) from disk. This creates a standalone **Traffic Replay** layer (its own entry in the Layers list) and opens its sidebar.
3. In the sidebar:
   - the top card shows the **manifest summary** (street-user count + mode mix, e.g. `261 street users · busiest-hour` / `person 179 · bicycle 58 · car 21 · motorcycle 3`);
   - **Link a street** — a dropdown of the managed streets in your scene, or **Create a street to replay onto** if you don't have one yet;
   - tune **Playback speed** (`1×` = real time, `60×` = a minute per second), **Loop**, and **Hide synthetic traffic**;
   - **Place scene at sensor location** — drops the scene at the sensor's real-world lat/lon (from the manifest) so you have map context to align your street against the real road.
4. Press **Start** and watch.

The layer is fully **self-contained and persistent**: the manifest is inlined into the saved scene (the same way a Managed Street stores its `json-blob`), so a saved scene round-trips and is shareable via the normal cloud-scene link — no external hosting, no URL parameters, no re-import.

### Developer quick demo (no clicks)

Running the app locally, append `?replay=sample` to the URL to auto-build a street carrying a bundled sample manifest, then press Start:

```
npm start
# then open:
http://localhost:3333/?replay=sample   # busiest MINUTE — dense at real time (~50 users, a pedestrian rush)
http://localhost:3333/?replay=hour      # busiest HOUR — full mode mix, but sparse at real time
```

Extra params: `&scale=N` sets playback speed (default `1×`), `&maps=mapbox2d|osm3d|none` picks the basemap. This path is dev-only scaffolding — it builds throwaway entities and is **not** meant for scenes you intend to save. Use the Add Layer card for anything real.

## How the demo was prepared: SQLite → replay

The sample demo comes from a real ~25-day Roadway Biome capture in SW Portland, OR. Here's the whole pipeline, from raw device dump to something the scene plays.

### 1. The raw dump (SQLite)

A Roadway Biome device stores its detections in a SQLite database. The table that matters is **`events`** — one row per object the camera tracked crossing its field of view, corroborated by radar. The sample dump has ~19,700 such rows. Each row carries:

| From the sensor | Meaning | Used in replay? |
| --- | --- | --- |
| `label` | mode: person / bicycle / car / motorcycle / bus / dog | ✅ → which 3D model |
| `direction_calc` | inbound / outbound along the street | ✅ → travel direction |
| `speed_calc` | radar speed, signed mph | ✅ → speed |
| `start_time` / `end_time` | unix seconds, entered / left the detection zone | ✅ → schedule + duration |
| `id`, `camera`, `frame_time`, detector scores, bounding boxes, zones… | device internals | ❌ dropped |

Notably, this sensor stores **no PII to begin with** — no plates, no faces, no images ever land in the database.

### 2. Convert to an anonymized "replay manifest" (JSON)

A small command-line converter — [`scripts/tmd-replay/tmd-to-replay.mjs`](https://github.com/3DStreet/3dstreet/blob/main/scripts/tmd-replay/tmd-to-replay.mjs) in the 3DStreet repo — reads the `events` table and writes a compact JSON **manifest**:

```bash
node scripts/tmd-replay/tmd-to-replay.mjs path/to/capture.sqlite \
  --window busiest-hour --pretty --out my-replay.json
```

You can point `--window` at the `busiest-minute`, `busiest-hour`, `busiest-day`, `all`, or an explicit `--start`/`--end` range. (A companion `introspect.mjs` prints the dump's schema, mode mix, and hourly histogram so you can see where the interesting windows are before converting.)

The resulting manifest looks like this:

```jsonc
{
  "meta": {
    "source": "capture.sqlite",
    "deployment": { "lat": 45.464152, "lon": -122.66961, "bearing": "w" },
    "speedUnit": "mph",
    "window": { "label": "busiest-hour", "durationSec": 3600 },
    "countsByMode": { "person": 179, "bicycle": 58, "car": 21, "motorcycle": 3 }
  },
  "agents": [
    { "t": 0,    "mode": "person",  "dir": "inbound",  "speed": 15, "dur": 6.74 },
    { "t": 42.3, "mode": "bicycle", "dir": "outbound", "speed": 6,  "dur": 10.01 }
    // ... sorted by t
  ]
}
```

Each **agent** is one recorded trip: `t` is seconds since the window started (relative, never a wall-clock time), `mode` picks the model, `dir` is direction, `speed` is `|radar speed|` in mph.

### 3. Anonymization is built into the conversion

The intent is to show **aggregate flow by mode**, never an individual, so the converter enforces it:

- **Time is re-based.** Every timestamp becomes a relative offset from the window start — no individual's wall-clock crossing time ships to the client.
- **Identifiers are dropped.** The event `id` (which embeds a precise timestamp that could be joined back to raw device logs or video), camera name, frame times, detector scores, bounding boxes, and zones are all discarded.
- **Only mode / direction / speed / duration are kept.** The richest thing a viewer can read off a replayed agent is *which mode it is* — exactly the intended disclosure.

The result is safe to embed in a public, shareable scene.

## How future datasets are prepared

The workflow for any new Roadway Biome capture is the same three steps:

1. **Get the SQLite dump** off the device for the location and window you care about.
2. **Convert it** to a manifest with `tmd-to-replay.mjs` (pick your window).
3. **Import it** via **Add Layer → "(Beta) Traffic Replay from Sensor Data"**, link it to a managed street matching that location's cross-section, and Start.

The Add Layer card is the "data input" for this feature. Today it accepts the **pre-converted JSON manifest**; in-browser `.sqlite` conversion (so you could drop the raw device file straight in) is the planned next iteration. The manifest format is intentionally simple and generic — any source that can emit `{ t, mode, dir, speed }` agents can be replayed, not just Roadway Biome dumps.

### Try it yourself — download a sample manifest

The 3DStreet repo ships two ready-made sample manifests you can **download and import today** to see the format and the result. Open either link, click **Download raw file** on GitHub to save the `.json`, then bring it in via **Add Layer → "(Beta) Traffic Replay from Sensor Data"** and link it to a street:

- [**sample-waterleaf-busiest-minute.json**](https://github.com/3DStreet/3dstreet/blob/main/scripts/tmd-replay/sample-waterleaf-busiest-minute.json) — the busiest minute (50 street users, a pedestrian rush; dense at real time — the best quick demo).
- [**sample-waterleaf-busiest-hour.json**](https://github.com/3DStreet/3dstreet/blob/main/scripts/tmd-replay/sample-waterleaf-busiest-hour.json) — the busiest hour (261 street users, full mode mix; sparse at real time).

Both live in [`scripts/tmd-replay/`](https://github.com/3DStreet/3dstreet/tree/main/scripts/tmd-replay) alongside the converter and a [`README.md`](https://github.com/3DStreet/3dstreet/blob/main/scripts/tmd-replay/README.md) documenting the pipeline in full.

## Limitations — what the sensor knows vs. what 3DStreet infers

This is the most important thing to understand about the visualization, and the honest answer is a mix.

**The sensor genuinely knows, per street user:**

- **mode** (person / bike / car / …),
- **direction** of travel (inbound / outbound),
- **speed** (from radar),
- **when** it entered and how long it stayed in the detection zone.

Those four things are real measurements, and the replay is faithful to them: the right *number* of the right *mode* enter at the right *times* going the right *way* at the right *speed*.

**3DStreet infers everything else from the street you designed — it is not in the data:**

- **Which lane** an agent uses is chosen by mode (car → drive lane, bike → bike lane, person → sidewalk), not measured. The sensor reports "a car, inbound," not "a car in the second lane from the curb."
- **Lateral position within the lane** is the model's default, not measured.
- **How far it travels and how long it's on screen as it crosses** come from **your street's length**, not the data. The dump has no street geometry at all — no length, no lane widths, not even the detection-zone distance. Agents traverse whatever length your managed-street segments have. Set your street's length to match the real block and the replay will match it.
- **Speed outliers are clamped** to plausible per-mode ranges at render time (a "person" radar-tagged at 25 mph is a co-incident vehicle reading, capped to a brisk walk). The manifest stays faithful; only the on-screen motion is clamped.

So: the **counts, modes, directions, speeds, and timing are real**; the **exact placement on the roadway is a plausible reconstruction** driven by your street design. The "how many on screen at once" figure is genuine **concurrency** derived from the event timings — that part is data, not guesswork.

**Other current limitations:**

- **Linear corridor, not intersections.** Replay animates along a single managed-street cross-section. It does not model turning movements through an intersection (managed-street has no intersection equivalent yet). Multi-leg junctions are approximated by replaying each approach as its own street.
- **Visual only.** Replay agents have no physics bodies — they're for watching and tallying flow, not for driving into during the driving simulation.
- **One sensor = one street.** Each manifest reflects one sensor's field of view. A corridor with several sensors is several layers.

## Creating a new traffic replay visualization

To build a fresh visualization for a specific location (for example, a proposed plaza or a corridor a partner wants to study), the recipe is:

1. **Design the location as a managed street.** Recreate the real cross-section — number of lanes, sidewalks, bike lanes, widths — and set the **segment length to the real block length** so travel timing and on-screen concurrency read correctly. For a "before / after" comparison (e.g. existing layout vs. a proposed plaza), build both as separate scenes or layers.
2. **Place the scene at the real coordinates.** Use the Geo feature (or the sidebar's **Place scene at sensor location** if a manifest carries deployment coordinates) so the street sits on the real map, then move/rotate the managed street to align with the actual road. Alignment persists with the save.
3. **Bring in the activity data.** Two options:
   - **Real replay** — if a Roadway Biome (or compatible) capture exists for that spot, convert the dump to a manifest (`tmd-to-replay.mjs`), import it via the Add Layer card, and link it to your street. Even a short window (e.g. the busiest 10–60 seconds) makes a compelling clip.
   - **Synthetic traffic** — if no sensor data exists yet, the standard managed-street traffic feature can populate plausible flow so you still have motion to show.
4. **Tune and record.** Set playback speed and loop, press **Start**, and capture the result (screenshot or the viewer's video export) for your case study or showcase.

For a **multi-leg intersection**, model the junction's approaches as managed streets and apply a replay (or synthetic traffic) per approach — remember that turning movements through the junction itself aren't modeled yet, so frame the visualization around the approach flows and the streetscape design rather than turn-by-turn routing.

:::tip Anonymized and shareable
Because a replay is anonymized by construction and inlined into the saved scene, a finished visualization can be shared with a partner or embedded in a public showcase using the normal cloud-scene link — no data-handling caveats, no external files to host.
:::
