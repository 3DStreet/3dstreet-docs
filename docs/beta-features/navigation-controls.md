---
sidebar_position: 3
---

# Navigation Controls

3DStreet is rolling out a new camera-control system that makes moving around a scene feel like **Google Maps and Street View as one integrated tool**: tilt smoothly all the way from a top-down map view down to eye level on the sidewalk, zoom toward whatever is under your cursor, and double-click anything to fly to a good view of it.

You choose which control scheme you want from **View → Navigation Controls**.

:::info Beta feature
The new controls are a working prototype and are becoming the default, but they're still being refined — a few behaviors are rough around the edges. If anything feels off, you can switch back to **Legacy** at any time from the same menu.
:::

## Choosing a scheme

Open the **View** menu and pick **Navigation Controls**. There are three options:

| Scheme | What you get |
| --- | --- |
| **Legacy** | The classic 3DStreet editor camera. Choose this if you prefer the original controls or hit a snag with the new ones. |
| **Standard** | The new controls, elevated ("map / drone") half only: cursor-anchored zoom, map-style drag, the compass, drone view, and double-click framing. A safe, polished default. |
| **Experimental** | Everything in Standard **plus** the street-level features: the smooth "swoop" down to eye level, first-person **WASD flight**, and double-click-to-teleport onto a lane. The fullest preview of where navigation is heading. |

Switching schemes **saves your choice and reloads the editor** (the controls are set up when the page loads), so expect a quick refresh when you change it. Your selection is remembered for next time.

## How the new controls work

Everything keys off **tilt** — how far down the camera is looking. There are two "regimes," and the controls adapt automatically as you cross between them:

- **Map mode** (looking down, like a map) — dragging trucks and dollies across the ground plane; Shift-drag orbits the point under your cursor while keeping it framed; the wheel zooms toward the cursor.
- **Street mode** (looking level, at eye height) — dragging moves you horizontally and vertically; Shift-drag is a first-person look-around; the toolbars turn into full-width black strips (a letterbox) to signal you've dropped to street level.

You don't switch these manually — they follow where you point the camera.

### The main moves

- **Left-drag** — move across the scene (the exact motion depends on the regime, as above).
- **Shift + left-drag** — rotate: orbit what you're pointing at (map mode) or look around from where you stand (street mode). You can hold or release Shift mid-drag to switch between the two.
- **Mouse wheel** — zoom. High up, it's a cursor-anchored zoom (the point under your cursor stays put, just like Google Maps). Keep scrolling down and it becomes the **swoop**: a single continuous gesture that glides you from bird's-eye all the way to street level, then reverses on the way back up. (Ctrl+wheel or a trackpad pinch does a plain fixed-tilt zoom instead.)
- **Double-click anything** — fly to a good view of it. The heading snaps to the nearest compass direction, and a double-click never *raises* the camera — it descends or holds. Double-click a lane to drop to eye level there, a building to frame it, or an object to frame it at its size.

### On-screen helpers

- **Compass** — click the compass body to animate to a top-down view while keeping your heading; click again to align north. The side arrows turn your heading by 90°. (There's no separate "Plan View" button — it's folded into the compass.)
- **Context view button** — an always-visible toolbar button whose icon shows the one useful move for where you are right now: **Daylight** (pop up out of a building or terrain you're stuck inside), **Street view** (swoop down to the surface), or **Drone view** (rise to an angled survey from above). The **Space bar** does the same thing as this button.

### Buildings are solid

A guiding rule of the new system: the camera stays **out of solid geometry**. Buildings are treated as solid, and the camera rests just above whatever surface is beneath it — so a swoop lands on a rooftop rather than dropping you inside the building's footprint. If you ever do end up inside something, nothing moves on its own; just press the context button (or Space) to pop back out into the open.

## Which should I use?

- Want the most familiar experience, or troubleshooting? → **Legacy**.
- Want the new feel without surprises? → **Standard** (the recommended default).
- Want to try street-level walk-throughs and WASD flight, and don't mind occasional rough edges? → **Experimental**.

You can change your mind anytime from **View → Navigation Controls**.
