---
sidebar_position: 4
---

# Managed Street JSON Format

This document describes the JSON format for defining streets in the 3DStreet system. Third parties can use this format to create compatible street definitions.

## Top-Level Structure

```javascript
{
  name: string,           // Name of the street configuration
  width: number,          // Total width in meters
  length: number,         // Length of street in meters
  segments: Segment[]     // Array of segment definitions
}
```

## Segment Structure

Each segment represents a distinct part of the street and is defined as follows:

```javascript
{
  name: string,          // Display name of the segment
  type: SegmentType,     // Type of segment
  surface: SurfaceType,  // Surface material
  color: string,         // Hex color code
  elevation: number,     // Vertical offset in meters (0 = road level, 0.15 = curb height)
  width: number,         // Width in meters
  direction: Direction,  // Traffic direction
  variant?: string,      // Optional preset variant (for boundary segments)
  side?: "left" | "right", // Optional side orientation (for boundary segments)
  floors?: number,       // Optional building height in floors (boundary metadata)
  slope?: boolean,       // Optional tilted surface (see Slope below)
  slopeStart?: number,   // Elevation in meters at the segment's start (-x) edge
  slopeEnd?: number,     // Elevation in meters at the segment's end (+x) edge
  generated: Generated   // Optional generated content
}
```

### Segment Types
- `drive-lane`: Standard driving lane
- `bus-lane`: Dedicated bus lane
- `bike-lane`: Dedicated bicycle lane
- `sidewalk`: Pedestrian walkway
- `parking-lane`: Parking area
- `divider`: Street divider/median
- `grass`: Grass area
- `rail`: Railway track
- `boundary`: Adjacent land use flanking the street (buildings, waterfront, fences, parking lots) with configurable variants

### Elevation

`elevation` is the vertical offset of the segment surface in **meters**, matching Streetmix schema v33+ units:

- `0`: road level (default)
- `0.15`: standard curb / sidewalk height

Negative elevations (below road level) are intentionally unsupported: values are clamped to `0` at render time.

:::note Deprecated: `level`
Older street JSON used an integer `level` field (-1 to 2) representing curb-height steps. This field is **deprecated but still accepted**: when a segment has `level` and no `elevation`, it is converted at load time using `1 level == 0.15 m` (e.g. `level: 1` → `elevation: 0.15`). New definitions should use `elevation`.
:::

### Slope

Segments imported from Streetmix/Coastmix (schema v34) may carry a tilted surface, e.g. a beach or embankment sloping down toward water:

```javascript
{
  slope: true,
  slopeStart: 0.45,  // meters, at the segment's start (-x) edge
  slopeEnd: 0        // meters, at the segment's end (+x) edge
}
```

When `slope` is `true`, the segment surface interpolates from `slopeStart` to `slopeEnd` across its width and the flat `elevation` value is ignored. Generated content (clones, pedestrians, etc.) currently sits at the mean of the two elevations. There is no editor UI for authoring slopes yet; the fields round-trip through import and save.

### Surface Types
- `asphalt`: Standard road surface
- `concrete`: Concrete surface
- `grass`: Grass surface
- `sidewalk`: Sidewalk texture
- `gravel`: Gravel surface
- `sand`: Sandy surface
- `cracked-asphalt`: Weathered asphalt surface
- `parking-lot`: Parking lot surface
- `water`: Animated water surface with normals
- `hatched`: Hatched pattern
- `planting-strip`: Planted area
- `none`: No surface
- `solid`: Solid color surface

### Direction Options
- `none` (default): No travel direction. Generated content is absolutely oriented via its own `facing` value (e.g. side-oriented lamps, benches, bike racks, and sideways/angled parked cars). Used for sidewalks and dividers.
- `inbound`: Traffic flowing inward. Direction-following content (drive-lane vehicles, parallel-parked cars, lane stencils) orients to this direction.
- `outbound`: Traffic flowing outward.

When omitted, `direction` resolves to `none`. Only segments whose content should follow traffic flow need to set `inbound` or `outbound`.

## Boundary Segments

A `boundary` segment represents the land use adjacent to the street: buildings, a waterfront edge, fences, or parking lots. Boundaries use `side: "left" | "right"` to indicate which edge of the street they flank, and a `variant` to pick a preset appearance.

:::note Deprecated: `type: "building"`
`boundary` was previously named `building`. The old type value is **deprecated but still accepted**; it is renamed to `boundary` at load time. New definitions should use `boundary`.
:::

### Boundary Variants
When using `type: "boundary"`, the `variant` property provides preset configurations:

- `brownstone`: Urban mixed-use buildings (4-5 floors)
- `suburban`: Single-family houses on grass
- `arcade`: Commercial arcade-style buildings
- `water`: Seawall with animated water surface
- `grass`: Fence boundary with grass
- `parking`: Fence boundary with parking lot
- `sp-mixeduse`: StreetPlan mixed-use buildings (2-3 floors)
- `sp-residential`: StreetPlan single-family homes and townhouses
- `sp-big-box`: Big box stores, parking structures, government buildings
- `custom`: User-defined (preserves custom modifications)

### Floors

Boundary segments may carry a `floors` integer, the building height in floors from the imported source (e.g. the Streetmix boundary object). This is currently metadata only: it is preserved on import and save but does not yet drive the height of the generated building models. `0` (or omitted) means unspecified.

### Boundaries and street layout

The **travelled way** (all non-boundary segments) is the only input to street layout. Centering, the ground plane, and segment labels ignore boundary segments entirely. Boundaries render just outside the travelled way's edges according to their `side`, regardless of their position in the `segments` array or their visibility. Toggling boundary visibility (via the `managed-street` component's `showBoundaries` property) never moves the street.

By convention, keep boundary segments at the ends of the `segments` array (left boundary first, right boundary last) for a tidy scene graph, but their array position does not affect rendering.

## Generated Content

The `generated` object can contain multiple types of generated content:

### Clones
Generates repeated 3D models along the segment.

```javascript
clones: [{
  mode: "random" | "fixed" | "single" | "fit",
  modelsArray: string,     // Comma-separated list of model names
  spacing: number,         // Distance between models in meters
  count?: number,          // Number of models (for random mode)
  facing?: number,         // Rotation in degrees
  randomFacing?: boolean,  // Random rotation
  cycleOffset?: number,    // Offset in the repeating pattern (0-1, for fixed mode)
  justifyWidth?: "left" | "center" | "right", // Horizontal alignment (for fit mode)
  positionX?: number,      // X-axis offset
  positionY?: number,      // Y-axis offset
}]
```

#### Clone Modes
- **`random`**: Randomly places `count` models with minimum `spacing` between them
- **`fixed`**: Places models at regular `spacing` intervals with optional `cycleOffset`
- **`single`**: Places a single model (use `justify` property for position)
- **`fit`**: Intelligently places models based on their actual dimensions, fitting them end-to-end along the segment. Ideal for buildings.

Common model arrays:
- Vehicles: `"sedan-rig, box-truck-rig, self-driving-waymo-car, suv-rig, motorbike"`
- Buses: `"bus"`
- Cyclists: `"cyclist-cargo, cyclist1, cyclist2, cyclist3, cyclist-dutch, cyclist-kid, ElectricScooter_1"`
- Static: `"tree3, lamp-modern, flowers1"`
- Buildings: `"SM3D_Bld_Mixed_4fl, SM3D_Bld_Mixed_5fl"` (use with fit mode)

### Stencils
Adds road markings and symbols.

```javascript
stencil: [{
  modelsArray: string,    // Stencil model names
  spacing: number,        // Distance between stencils
  padding?: number,       // Edge padding
  cycleOffset?: number,   // Pattern offset (0-1)
  direction?: Direction,  // Stencil orientation
  stencilHeight?: number // Height of stencil
}]
```

Stencil Types:

- Arrows: `"left, right, both, straight, left-straight, right-straight, all"`
- Parking: `"parking-t, perpendicular-stalls, solid-stripe"`
- Word stencils: `"word-only, word-taxi, word-bus, word-lane, word-only-small, word-yield, word-slow, word-xing, word-stop, word-loading-small"`
- Other: `"sharrow, bike-arrow, hash-left, hash-right, hash-chevron"`

### Pedestrians
Adds pedestrian models with specified density.

```javascript
pedestrians: [{
  density: "normal" | "dense"
}]
```

### Striping
Adds road stripes and lane markings.

```javascript
striping: [{
  striping: string,       // Stripe pattern type
  side?: "left" | "right" // Side of segment
}]
```

Striping Types:
- `"none"`
- `"solid-stripe"`
- `"dashed-stripe"`
- `"short-dashed-stripe"`
- `"short-dashed-stripe-yellow"`
- `"solid-doubleyellow"`
- `"solid-dashed"`
- `"solid-dashed-yellow"`
- `"solid-dashed-yellow-mirror"`

## Example Segments

### Basic Drive Lane
```javascript
{
  name: "Drive Lane",
  type: "drive-lane",
  surface: "asphalt",
  color: "#ffffff",
  elevation: 0,
  width: 3.048,
  direction: "inbound",
  generated: {
    clones: [{
      mode: "random",
      modelsArray: "sedan-rig, box-truck-rig, self-driving-waymo-car, suv-rig, motorbike",
      spacing: 7.3,
      count: 4
    }]
  }
}
```

### Sidewalk with Trees
```javascript
{
  name: "Tree Planting Strip",
  type: "sidewalk",
  surface: "sidewalk",
  color: "#ffffff",
  elevation: 0.15,
  width: 0.914,
  direction: "none",
  generated: {
    clones: [{
      mode: "fixed",
      modelsArray: "tree3",
      spacing: 15
    }]
  }
}
```

### Boundary Segment with Variant
```javascript
{
  name: "Mixed-Use Buildings",
  type: "boundary",
  surface: "sidewalk",
  color: "#ffffff",
  elevation: 0.15,
  width: 10,
  variant: "sp-mixeduse",
  side: "right",
  floors: 3,
  generated: {
    clones: [{
      mode: "fit",
      modelsArray: "sp-prop-mixeduse-2L-29ft, sp-prop-mixeduse-3L-22ft",
      spacing: 0,
      justifyWidth: "left",
      facing: 270
    }]
  }
}
```

## Managed Street JSON Examples

These are the default street definitions in Managed Street JSON used in the 3DStreet Editor Add Layer Panel.

* [https://github.com/3DStreet/3dstreet/blob/main/src/editor/components/components/AddLayerPanel/defaultStreets.js](https://github.com/3DStreet/3dstreet/blob/main/src/editor/components/components/AddLayerPanel/defaultStreets.js)

## Notes

- All measurements are in meters, including `elevation` (0 = road level, 0.15 = curb/sidewalk height)
- Colors should be in hex format (e.g., "#ffffff")
- Deprecated fields `level` (integer curb steps) and `type: "building"` are still accepted and migrated at load time; new definitions should use `elevation` and `type: "boundary"`
- When using random mode for clones, both spacing and count should be specified
- For fixed mode clones, only spacing is required
- Cyclic offsets should be between 0 and 1, representing percentage of pattern offset
