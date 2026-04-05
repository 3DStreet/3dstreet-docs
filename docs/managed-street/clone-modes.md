---
sidebar_position: 3.5
---

# Clone Mode Reference

The `street-generated-clones` component places 3D models along the Z-axis (length) of a street segment. The segment extends from `+length/2` to `-length/2`. Four placement modes are available, each designed for different use cases.

## `mode: "fixed"` — Fill Every Grid Slot

Places a clone at every slot in an evenly-spaced grid along the segment. The number of clones is determined automatically: `numClones = floor(length / spacing)`. The `cycleOffset` property (0–1, default 0.5) shifts the starting position as a fraction of `spacing`.

Models are placed at their centerpoint regardless of model dimensions. When `modelsArray` contains multiple entries, each clone gets a **randomly selected** model (using seeded RNG) — so despite the name "fixed," only the *positions* are fixed. Model selection is random, the same as `random` mode.

> **`fixed` vs `random`:** These two modes share the same underlying grid. `fixed` fills *every* grid slot. `random` fills only a *subset* — it shuffles the same grid and takes the first `count` positions. Both randomly select which model to place from `modelsArray`. See [How `fixed` and `random` relate](#how-fixed-and-random-relate) for details.

```
spacing = 15m, cycleOffset = 0.5
Segment (length = 60m):
|                                                            |
+------------------------------------------------------------+
|       X             X             X             X          |
|       ^             ^             ^             ^          |
|    7.5m from     22.5m         37.5m         52.5m        |
|    start                                                   |
+------------------------------------------------------------+

X = model centerpoint
Slot size is always `spacing`, regardless of model size.
Models may overlap if model width > spacing.
Models may have gaps if model width < spacing.

Example with mixed model sizes (same fixed spacing):
+------------------------------------------------------------+
|    [=====]       [==]        [=========]       [===]       |
|       X           X              X               X         |
+------------------------------------------------------------+
     ←15m→       ←15m→         ←15m→           ←15m→
     Note: models are centered on X, gaps/overlaps vary
```

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| spacing | number | - | Distance between model centerpoints in meters |
| cycleOffset | number | 0.5 | Starting offset as a fraction of `spacing` (0–1) |

### Use case

Regularly spaced objects like street trees, lamp posts, bollards — objects where uniform centerpoint distance matters more than edge-to-edge tiling.

### Example

```javascript
{
  mode: "fixed",
  modelsArray: "tree3",
  spacing: 15
}
```

---

## `mode: "random"` — Fill Some Grid Slots

Creates the same evenly-spaced grid as `fixed` mode, then **shuffles** the grid using a seeded Fisher-Yates shuffle and takes the first `count` positions. The result is a sparse, irregular distribution with a guaranteed minimum separation between clones.

- Positions are randomly selected from the grid, so minimum distance is always `>= spacing`
- Model dimensions are not considered — placement is by centerpoint only
- Model selection from `modelsArray` is random per clone (same as `fixed` mode)

```
spacing = 10m, count = 3, length = 60m
Grid positions (7 slots):
|  -25   -15    -5     5    15    25    35  |
+--------------------------------------------+
|   o     o     o     o     o     o     o   |  o = grid slot
+--------------------------------------------+

After shuffle, pick first 3:
+--------------------------------------------+
|         X                 X          X     |  X = placed clone
+--------------------------------------------+
        -15                 5         25
```

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| spacing | number | - | Grid interval / minimum distance between centerpoints |
| count | number | - | How many clones to place from the grid |
| seed | number | - | Seed for deterministic random results |

### Use case

Scattered objects like parked cars, pedestrians, random vegetation — things that should appear irregularly distributed with guaranteed minimum separation.

### Example

```javascript
{
  mode: "random",
  modelsArray: "sedan-rig, box-truck-rig, self-driving-waymo-car, suv-rig, motorbike",
  spacing: 7.3,
  count: 4
}
```

---

## `mode: "single"` — One Clone

Places exactly one model. Position is controlled by the `justify` property.

```
justify = "start":
+------------------------------------------------------------+
| X←padding                                                  |
+------------------------------------------------------------+

justify = "middle" (default):
+------------------------------------------------------------+
|                            X                               |
+------------------------------------------------------------+

justify = "end":
+------------------------------------------------------------+
|                                              padding→X     |
+------------------------------------------------------------+
```

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| justify | string | "middle" | Position along the segment: `start`, `middle`, or `end` |
| padding | number | 4 | Distance from the edge in meters (used with `start` and `end`) |

### Use case

Placing a single landmark, sign, or feature element on a segment.

### Example

```javascript
{
  mode: "single",
  modelsArray: "bus-stop",
  justify: "start",
  padding: 4
}
```

---

## `mode: "fit"` — Dimension-Aware Tiling

The only mode that uses model dimensions. Uses a lookup table of known widths (Z-axis extent) and depths (X-axis extent) for supported model IDs. Models are tiled **end-to-end** along the segment with no overlaps or irregular gaps:

1. Start at `+length/2`
2. Look up the next model's width from the table (default 10m if unknown)
3. Check if it fits in the remaining space
4. Place it so its edge (not center) aligns with the previous model's edge + `spacing` gap
5. Advance by `modelWidth + spacing`
6. Cycle through `modelsArray` sequentially (index % length)

Unlike `fixed` and `random`, model selection is **sequential** — models cycle through `modelsArray` in order rather than being randomly picked.

The `justifyWidth` property aligns models along the X-axis (cross-street direction) using their depth:
- `left`: model's right edge aligns with segment's left edge
- `right`: model's left edge aligns with segment's right edge
- `center`: uses `positionX` as-is

```
modelsArray = [A (8m wide), B (12m wide), C (6m wide)], spacing = 1m

+------------------------------------------------------------+
|[==A==] [====B====] [=C=] [==A==] [====B====] [=C=]        |
+------------------------------------------------------------+
 ← 8m →1← 12m    →1←6m→1← 8m →1← 12m    →1←6m→
         ↑ spacing gaps

Edge-to-edge tiling: each model's edges touch the gap,
not centered on uniform grid points. No overlap, no uneven gaps.

justifyWidth effect (cross-section, X-axis):
               Segment Width
         ←─────────────────────→
left:    |[Model]               |  model hugs left edge
center:  |      [Model]        |  model centered
right:   |               [Model]|  model hugs right edge
```

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| modelsArray | string | - | Comma-separated model names, cycled sequentially |
| spacing | number | - | Gap between model edges in meters (not centerpoint distance) |
| justifyWidth | string | "center" | Cross-street alignment: `left`, `center`, or `right` |

### Use case

Buildings, walls, fences, seawalls — anything that should tile seamlessly along a street edge with no overlaps or irregular gaps.

### Examples

```javascript
// Buildings tiled along a street edge
{
  mode: "fit",
  modelsArray: "SM3D_Bld_Mixed_4fl, SM3D_Bld_Mixed_5fl, SM3D_Bld_Mixed_4fl_2",
  spacing: 0,
  justifyWidth: "left",
  facing: 270
}

// Fence sections tiled end-to-end
{
  mode: "fit",
  modelsArray: "fence",
  spacing: 0
}
```

---

## Mode Comparison

| | Dimension-Aware? | Position Method | Model Selection | Spacing Meaning |
|---|---|---|---|---|
| **fixed** | No | Regular grid | Random\* | Centerpoint distance |
| **random** | No | Shuffled grid | Random\* | Min centerpoint distance |
| **single** | No | `justify` prop | First | N/A |
| **fit** | Yes | Edge-to-edge | Sequential | Gap between edges |

\* When `modelsArray` has multiple entries and RNG is active.

## Common Properties (All Modes)

These properties are available across all clone modes:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| mode | string | - | Clone placement mode: `fixed`, `random`, `single`, or `fit` |
| modelsArray | string | - | Comma-separated list of model short-names |
| facing | number | 0 | Y-axis rotation in degrees |
| randomFacing | boolean | false | Apply random rotation to each clone |
| positionX | number | 0 | X-axis offset from segment center |
| positionY | number | 0 | Y-axis (vertical) offset |

## How `fixed` and `random` Relate

These two modes are closely related — they share the same underlying grid mechanism:

| | `fixed` | `random` |
|---|---|---|
| **Slots filled** | All of them | A subset (`count` out of total) |
| **Position order** | Sequential (slot 0, 1, 2...) | Shuffled (random grid positions) |
| **Starting offset** | Controlled by `cycleOffset` | Starts at `-length/2 + spacing/2` (no `cycleOffset`) |
| **Model selection** | Random from `modelsArray` | Random from `modelsArray` |

If you set `count` equal to the total number of grid slots, `random` would place the same number of clones as `fixed` — just in shuffled positions and without `cycleOffset` support.

A simple way to think about it:
- **`fixed`** = fill every grid slot
- **`random`** = fill some grid slots (randomly chosen)

Both modes randomly select *which model* goes in each slot from `modelsArray`. Neither mode is aware of model dimensions.

## Choosing the Right Mode

- **Street trees, lamp posts, bollards** at regular intervals: use `fixed`
- **Vehicles, pedestrians, scattered objects** with irregular placement: use `random`
- **A single sign, landmark, or bus stop**: use `single`
- **Buildings, walls, fences, seawalls** that need to tile without gaps: use `fit`
