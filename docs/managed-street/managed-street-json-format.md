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
  level: number,         // Vertical offset (-1, 0, 1, 2)
  width: number,         // Width in meters
  direction: Direction,  // Traffic direction
  variant?: string,      // Optional preset variant (for building segments)
  side?: "left" | "right", // Optional side orientation (for building segments)
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
- `building`: Building segment with configurable variants

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
- `none`: No direction (for sidewalks, dividers)
- `inbound`: Traffic flowing inward
- `outbound`: Traffic flowing outward

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
  level: 0,
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
  level: 1,
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

### Building Segment with Variant
```javascript
{
  name: "Mixed-Use Buildings",
  type: "building",
  surface: "sidewalk",
  color: "#ffffff",
  level: 1,
  width: 10,
  variant: "sp-mixeduse",
  side: "right",
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

### Building Variants
When using `type: "building"`, the `variant` property provides preset configurations:

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

## Managed Street JSON Examples

These are the default street definitions in Managed Street JSON used in the 3DStreet Editor Add Layer Panel.

* [https://github.com/3DStreet/3dstreet/blob/main/src/editor/components/components/AddLayerPanel/defaultStreets.js](https://github.com/3DStreet/3dstreet/blob/main/src/editor/components/components/AddLayerPanel/defaultStreets.js)

## Notes

- All measurements should be in meters
- Colors should be in hex format (e.g., "#ffffff")
- Level values represent curb heights: -1 (below grade), 0 (at grade), 1 (curb height), 2 (elevated)
- When using random mode for clones, both spacing and count should be specified
- For fixed mode clones, only spacing is required
- Cyclic offsets should be between 0 and 1, representing percentage of pattern offset