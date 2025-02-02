---
sidebar_position: 2
---

# `managed-street` Component

The `managed-street` component manages the creation, updating, and synchronization of one or more `street-segment`s in a 3D environment. It provides a high-level interface for handling street layouts, including support for importing from various data sources and managing street segments.

### User Interface

A custom sidebar in 3DStreet Editor allows users to edit a subset of `managed-street` component properties.

* Street Length: Users can modify the overall length of the street through a numeric input field. This change is propagated to all segments simultaneously.
* Labels: A toggle control to enable or disable street labels for better visualization and identification of segments.

![Managed Street Sidebar](/img/docs/managed-street/managed-street-ui-sidebar.png)


### Properties

| Property    | Type      | Default | Description |
|-------------|-----------|---------|-------------|
| length      | number    | 60      | The length of the street in meters |
| sourceType  | string    | null    | The type of source data (`streetmix-url`, `streetplan-url`, or `json-blob`) |
| sourceValue | string    | null    | The value corresponding to the sourceType (URL or JSON string) |
| synchronize | boolean   | false   | When set to true, triggers a refresh from the source |

### Dependencies

This component automatically adds the following components if they don't exist:
- `street-align`
- `street-ground`
- `street-label`

### Events

| Event Name | Description | Event Detail |
|------------|-------------|--------------|
| segments-changed | Fired when segments are added, removed, or modified | `{changeType, property?, segment?, oldValue?, newValue?, added?, removed?}` |

### Methods

#### insertSegment(index, type, segmentObject)

Inserts a new street segment at the specified index.

```javascript
// Example
const street = document.querySelector('[managed-street]');
street.components['managed-street'].insertSegment(0, 'drive-lane', {
  width: 3,
  level: 0,
  direction: 'outbound',
  color: '#FFFFFF',
  surface: 'asphalt'
});
```

Parameters:
- `index` (number): The position to insert the segment
- `type` (string): The segment type (e.g., 'drive-lane', 'bike-lane')
- `segmentObject` (object, optional): Configuration object for the segment

#### refreshFromSource()

Reloads and parses data from the specified source.

```javascript
const street = document.querySelector('[managed-street]');
street.components['managed-street'].refreshFromSource();
```

### Data Source Support

#### Streetmix URL

Supports importing street layouts from Streetmix URLs:

```html
<a-entity managed-street="sourceType: streetmix-url; sourceValue: https://streetmix.net/..."></a-entity>
```

#### Streetplan URL

Supports importing street layouts from Streetplan JSON URLs:

```html
<a-entity managed-street="sourceType: streetplan-url; sourceValue: https://..."></a-entity>
```

#### JSON Blob

Supports direct JSON configuration:

```html
<a-entity managed-street="sourceType: json-blob; sourceValue: '{...}'"></a-entity>
```

### JSON Schema

The component expects street data in the following format:

```javascript
{
  name: string,           // Name of the street
  width: number,         // Total width in meters
  length: number,        // Length in meters
  segments: [{           // Array of segment objects
    type: string,        // Segment type (e.g., 'drive-lane')
    width: number,       // Width in meters
    name: string,        // Display name
    level: number,       // Vertical offset (0 or 1)
    direction: string,   // 'inbound', 'outbound', or 'none'
    color: string,       // Hex color code
    surface: string,     // Surface type (e.g., 'asphalt')
    generated?: {        // Optional generated content
      striping?: array,  // Striping configurations
      clones?: array    // Clone configurations
    }
  }]
}
```


### Notes

- The component automatically handles the positioning and alignment of segments
- Segments are automatically centered around the x-axis
- Width calculations are performed in meters
- The component maintains internal state of managed entities for performance

### Known Limitations

- Source URLs must be accessible and return valid JSON
- Some segment types may have limited support for certain features
- The component is currently in beta and APIs may change