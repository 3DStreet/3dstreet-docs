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
| type       | string | -        | Type of street segment. Must be one of: 'drive-lane', 'bus-lane', 'bike-lane', 'sidewalk', 'parking-lane', 'divider', 'grass', 'rail' |
| width      | number | -        | Width of the segment in meters |
| length     | number | -        | Length of the segment in meters |
| level      | int    | 0        | Vertical level of the segment (-1 to 2) |
| direction  | string | -        | Direction of traffic flow: 'none', 'inbound', or 'outbound' |
| surface    | string | 'asphalt'| Surface material type. One of: 'asphalt', 'concrete', 'grass', 'sidewalk', 'gravel', 'sand', 'none', 'solid' |
| color      | color  | -        | Color of the segment surface |

## Segment Types

The component includes several predefined segment types with specific configurations:

### Drive Lane
```javascript
{
  type: 'drive-lane',
  color: white,
  surface: 'asphalt',
  level: 0,
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
  level: 0,
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
  level: 0,
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
| hatched | hatched-base | Hatched marking pattern |

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

### calculateHeight(elevationLevel)
Converts elevation levels (-1 to 2) to Three.js meter units.

### generateMesh(data)
Creates the segment's 3D geometry and materials.

### calculateTextureRepeat(length, width, textureSourceId)
Calculates texture repeat and offset values based on segment dimensions.

## Notes

- The component automatically handles elevation changes based on the level property
- Texture repeats are calculated automatically based on segment dimensions
- Generated components (vehicles, pedestrians, etc.) are managed automatically based on segment type
- The component uses a custom 'below-box' geometry for proper ground alignment

## Known Limitations

- Surface textures must be present via asset loader, this component does not preload textures
- Some generated components require specific 3D models to be available
- Elevation levels are limited to the range of -1 to 2