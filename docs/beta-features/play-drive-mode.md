---
sidebar_position: 2
---

# Play & Drive Mode

**Play mode** turns your static 3D street design into a live, moving scene: press **Start** and the scene comes alive — vehicles and pedestrians animate, and if you've added a driveable vehicle you can **get behind the wheel and drive it** through your own design with WASD or a gamepad.

It's built for design review and storytelling. You can walk (or drive) a stakeholder through a proposed street, show what traffic feels like at street level, and get an intuitive sense of a design that a top-down plan can't convey.

:::info Beta feature
Play & Drive mode is available to use today. The driving simulation, timing, and camera work end to end; the surrounding UI and the set of "playable" features are still growing, so details may change between releases.
:::

## The Play lifecycle

Play mode is **presentation-only**. Nothing about a play session is written back to your scene — no positions, no simulation state, no markers persist — so:

- **anyone can Start it**, even on a scene they can't edit (no edit permission required);
- **you can't break your design** by playing it — Stop returns everything exactly as it was.

The controls are:

| Control | What it does |
| --- | --- |
| **Start** | Begin the play session — the simulation clock starts at zero and every play feature springs to life. |
| **Pause / Resume** | Freeze and un-freeze the simulation in place. |
| **Reset** | Restart the current session from the top — actors jump back to their spawn points and the clock zeroes, without leaving play mode. |
| **Stop** | End the session and return to editing (or to the idle viewer, depending on where you started from). |

Under the hood, everything is driven by a single deterministic **simulation clock**. Because features position their actors as a pure function of that clock, a play session looks the same every time and at the same moment on any machine. When the physics simulation is running, the clock advances one step per completed physics sub-step — so on a slow computer you get true, smooth slow-motion rather than a stuttering scene that falls behind.

## What plays

Play mode is a shared stage that several features perform on, independently:

- **Driving simulation** — drive a vehicle you've added (see below).
- **Street traffic** — the vehicles and people you placed on a Managed Street animate along their lanes.
- **[Traffic Replay](/docs/beta-features/traffic-replay)** — real anonymized sensor counts play back as animated street users.
- **Race mode** — an optional finish gate, crash markers, and saved best times turn a drive into a time trial.

You'll only see the **Start** button when the scene actually contains something playable (a driveable vehicle, a managed street with traffic, or a replay layer). An empty scene has nothing to play, so the control stays hidden.

## Drive mode

Drive mode lets you pilot a physically-simulated vehicle around your scene in real time. The car has real suspension, grip, and momentum — it leans into turns, mounts curbs (or can't, depending on the vehicle), and bumps into buildings.

### Add a driveable vehicle

From **Add Layer**, pick one of the driveable vehicles:

| Vehicle | Feel |
| --- | --- |
| **Driveable Taxi** | A full-size sedan (~Camry-sized) with real-car physics. Mounts standard curbs with momentum and reaches real-world speeds. |
| **Driveable Tuk-tuk** | A small three-wheeler. Nimble; can mount curbs at speed. |
| **Driveable Delivery Robot** | A small sidewalk bot (~Starship / Serve-sized) with a procedural body and bouncing antenna. Like the real thing, it **can't** climb standard 6-inch curbs. |

Adding one drops the vehicle into your scene as its own layer. You can add a driveable vehicle to any scene — a Managed Street, a geospatial scene, or a bare street template.

### Drive it

Press **Start**. The first time you do this in a session there's a brief pause while the physics engine loads, then you take control of the car.

| Input | Action |
| --- | --- |
| **W / A / S / D** or **arrow keys** | Accelerate, steer, reverse |
| **Space** | Brake |
| **R** | Reset the car to its spawn point |
| **C** | Cycle the camera: **top-down → chase → first-person** |

A **gamepad** works too: right/left triggers for throttle and reverse, B to brake, left stick to steer, the right stick to orbit and zoom the chase camera, Y to reset, X to change camera, Start to pause, Back to stop.

### Tune the vehicle

Two places let you change how the car behaves:

- **Properties panel** (select the vehicle layer): pick a **Vehicle Preset** to swap the whole mesh + physics package in one click, or hand-tune **Engine Force**, **Brake Force**, and **Steer Angle**. These settings save with the scene.
- **Drive controls panel** (top-right, appears while driving): the same three sliders, live — drag them mid-drive and feel the change immediately. It also shows a **Wall / Sim** clock readout so you can see the deterministic sim time next to real elapsed time.

### Race mode

Add a **race finish gate** and drive mode becomes a time trial:

- your run is timed on the simulation clock;
- every collision drops a **crash marker** at the point of impact and adds a **1-second penalty**;
- crossing the gate records your time, and your **best time per course** is saved locally so you can try to beat it.

Crash markers and best-time state are session-only in the scene (markers are stripped on Stop/Reset) — nothing pollutes your saved design.

## Tips

- **Match your street to reality.** Vehicle speed and how a drive *feels* depend on your street's real dimensions — set segment widths and lengths to the true values for a believable result.
- **Curbs matter.** If you're studying whether a delivery robot or a car can access a space, the preset you choose reflects real curb-climbing ability — the delivery robot deliberately can't mount a standard curb.
- **It's a presentation, not a save.** Play mode is the right tool for a live demo or a screen recording; use the viewer's video export to capture a drive-through for a case study.
