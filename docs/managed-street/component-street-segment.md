---
sidebar_position: 3
---

# `street-segment` Component

The `street-segment` component creates and manages individual street segments in a 3D environment. Each segment represents a distinct part of the street (e.g., drive lanes, bike lanes, sidewalks) with specific properties and behaviors.

## User Interface

A custom sidebar in 3DStreet Editor allows users to edit a subset of `street-segment` properties and associated generated components.

![Street Segment Sidebar](/img/docs/managed-street/street-segment-ui-sidebar.png)

## Properties

| Property   | Type   | Default  | Description |
|------------|--------|----------|-------------|
| type       | string | -        | Type of street segment. Must be one of: 'drive-lane', 'bus-lane', 'bike-lane', 'sidewalk', 'parking-lane', 'divider', 'grass', 'rail', 'boundary' |
| width      | number | -        | Width of the segment in meters |
| length     | number | -        | Length of the segment in meters |
| elevation  | number | 0        | Vertical offset of the segment surface in meters (0 = road level, 0.15 = curb/sidewalk height). Minimum 0; negative elevations are unsupported. Shown as "Elevation (m)" in the editor sidebar. Replaces the deprecated integer `level` property (migrated at load time, 1 level == 0.15 m) |
| floors     | int    | 0        | Boundary building height in floors, carried over from the imported source (Streetmix boundary object). Metadata only for now; it does not yet drive generated building model height. 0 = unspecified |
| slope      | boolean| false    | Tilt the segment surface between two elevations across its width (Coastmix schema v34). When true, the surface interpolates from `slopeStart` to `slopeEnd` and `elevation` is ignored |
| slopeStart | number | 0        | Elevation in meters at the segment's start edge (local -x, toward the previous segment) when slope is on. Minimum 0 |
| slopeEnd   | number | 0        | Elevation in meters at the segment's end edge (local +x) when slope is on. Minimum 0 |
| direction  | string | 'none'   | Direction of traffic flow: 'none', 'inbound', or 'outbound'. Defaults to 'none' (no travel direction); generated content follows the segment direction only when set to 'inbound' or 'outbound' |
| surface    | string | 'asphalt'| Surface material type. One of: 'asphalt', 'concrete', 'grass', 'sidewalk', 'gravel', 'sand', 'cracked-asphalt', 'parking-lot', 'water', 'none', 'solid' |
| color      | color  | -        | Color of the segment surface |
| variant    | string | 'custom' | Preset configuration for boundary segments ("Boundary Variant" in the editor sidebar). One of: 'brownstone', 'suburban', 'arcade', 'water', 'grass', 'parking', 'sp-mixeduse', 'sp-residential', 'sp-big-box', 'custom' |
| side       | string | 'right'  | Which side of the street the boundary flanks ('left' or 'right'). Used with boundary segments |

## Segment Types

The component includes several predefined segment types with specific configurations. These are intended to be used as a starting point for creating custom segment types.

### Drive Lane
```javascript
{
  type: 'drive-lane',
  color: white,
  surface: 'asphalt',
  elevation: 0,
  generated: {
    clones: [{
      mode: 'random',
      modelsArray: 'sedan-rig, box-truck-rig, self-driving-waymo-car, suv-rig, motorbike',
      spacing: 7.3,
      count: 4
    }]
  }
}
```

### Bus Lane
```javascript
{
  type: 'bus-lane',
  surface: 'asphalt',
  color: red,
  elevation: 0,
  generated: {
    clones: [{ mode: 'random', modelsArray: 'bus', spacing: 15, count: 1 }],
    stencil: [{ modelsArray: 'word-only, word-taxi, word-bus', spacing: 40, padding: 10 }]
  }
}
```

### Bike Lane
```javascript
{
  type: 'bike-lane',
  color: green,
  surface: 'asphalt',
  elevation: 0,
  generated: {
    stencil: [{ modelsArray: 'bike-arrow', cycleOffset: 0.3, spacing: 20 }],
    clones: [{
      mode: 'random',
      modelsArray: 'cyclist-cargo, cyclist1, cyclist2, cyclist3, cyclist-dutch, cyclist-kid, ElectricScooter_1',
      spacing: 2.03,
      count: 4
    }]
  }
}
```

### Boundary
The `boundary` segment type represents adjacent land use flanking the street: buildings, waterfront, fences, or parking lots. Building variants use the `fit` clone mode to place buildings continuously along the segment, aligned based on the `side` property.

Boundary segments never affect street layout: the travelled way (all non-boundary segments) is the only input to centering, ground, and labels. Boundaries render just outside the travelled way's edges by their `side`, regardless of their position in the scene graph.

:::note
This type was previously named `building`. The old value is deprecated but still accepted; it is renamed to `boundary` when loading older scenes and JSON blobs.
:::

```javascript
{
  type: 'boundary',
  surface: 'cracked-asphalt',
  elevation: 0.15,
  generated: {
    clones: [{
      mode: 'fit',
      spacing: 0
    }]
  }
}
```

#### Boundary Variants

The boundary segment supports multiple preset variants via the `variant` property ("Boundary Variant" in the editor sidebar). Each variant defines a specific collection of building models and surface type:

| Variant | Buildings | Surface | Description |
|---------|-----------|---------|-------------|
| brownstone | Mixed 4-5 floor buildings | cracked-asphalt | Urban mixed-use buildings |
| suburban | Single-family houses | grass | Suburban residential homes |
| arcade | Arched buildings | sidewalk | Commercial arcade-style buildings |
| water | Seawall | water | Waterfront edge with animated water |
| grass | Fence | grass | Grass boundary with fencing |
| parking | Fence | parking-lot | Parking lot boundary with fencing |
| sp-mixeduse | StreetPlan mixed-use 2-3 floors | sidewalk | Mixed-use commercial/residential buildings |
| sp-residential | StreetPlan single-family & townhouses | grass | Residential buildings and townhomes |
| sp-big-box | Big box stores, parking structures, government buildings | parking-lot | Large commercial and civic buildings |
| custom | User-defined | - | Preserves custom modifications |

**Example with variant:**
```html
<a-entity street-segment="
  type: boundary;
  variant: brownstone;
  side: right;
  width: 10;
  length: 150">
</a-entity>
```

#### Fit Mode for Clones

Boundary segments use a special `fit` mode for the `street-generated-clones` component that intelligently places models based on their actual dimensions:

**Properties:**
- `mode: 'fit'` - Places models continuously along the segment
- `spacing` - Gap between models in meters (can be negative for overlapping)
- `justifyWidth` - Horizontal alignment: 'left', 'center', or 'right'

The component automatically:
- Uses building width and depth from a lookup table
- Calculates positions to fit models end-to-end
- Adjusts horizontal position based on `justifyWidth` and segment `side`
- Stops when remaining space is insufficient

**Supported building dimensions** are defined for all StreetPlan models, brownstone buildings, suburban houses, and arcade buildings. See the source code for the complete list.

## Events

| Event Name | Description | Event Detail |
|------------|-------------|--------------|
| segment-width-changed | Fired when segment width is modified | `{oldWidth, newWidth}` |

## Generated Components

The component can automatically generate and manage several sub-components based on the segment type:

- **Clones**: Generates repeated 3D models (vehicles, cyclists, etc.)
- **Stencils**: Adds road markings and symbols
- **Pedestrians**: Adds pedestrian models with configurable density
- **Striping**: Adds road stripes and markings

## Surface Types and Textures

The component supports various surface types with corresponding textures:

| Surface Type | Texture ID | Description |
|--------------|------------|-------------|
| asphalt | seamless-road | Standard road surface |
| concrete | seamless-bright-road | Bright concrete surface |
| grass | grass-texture | Grass surface |
| sidewalk | seamless-sidewalk | Sidewalk texture |
| gravel | compacted-gravel-texture | Gravel surface |
| sand | sandy-asphalt-texture | Sandy surface |
| cracked-asphalt | asphalt-texture | Weathered asphalt surface |
| parking-lot | parking-lot-texture | Parking lot surface |
| water | - | Animated water surface with normals |
| hatched | hatched-base | Hatched marking pattern |
| none | - | No visible surface |
| solid | - | Solid color surface |

## Usage

Basic usage example:

```html
<a-entity street-segment="
  type: drive-lane;
  surface: asphalt;
  color: white;
  width: 3;
  length: 150">
</a-entity>
```

## Component Lifecycle

The component manages several key operations during its lifecycle:

1. **Initialization**: Sets up default height and generated components list
2. **Update**: Handles property changes and updates meshes accordingly
3. **Remove**: Cleans up generated components and meshes

## Methods

### calculateHeight(elevation)
Converts a metric elevation to the segment surface box height (base surface depth + elevation, clamped so the surface never sits below road level).

### generateMesh(data)
Creates the segment's 3D geometry and materials.

### calculateTextureRepeat(length, width, textureSourceId)
Calculates texture repeat and offset values based on segment dimensions.

## Notes

- The component automatically handles elevation changes based on the `elevation` property (meters)
- Texture repeats are calculated automatically based on segment dimensions
- Generated components (vehicles, pedestrians, etc.) are managed automatically based on segment type
- The component uses a custom 'below-box' geometry for proper ground alignment

## Known Limitations

- Surface textures and other cloned models must already be present via asset loader, this component does not preload textures or models and assumes they are already available as `mixin`s in the scene
- Negative elevations (below road level) are unsupported: `elevation`, `slopeStart`, and `slopeEnd` have a minimum of 0
- Slopes can be imported (Coastmix schema v34) and round-trip through save/load, but there is no editor UI for authoring them yet