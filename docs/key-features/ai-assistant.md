---
sidebar_position: 4
---

# AI Assistant

The AI Assistant Panel is a powerful feature in 3DStreet that allows users to interact with an AI assistant to analyze and modify 3D scenes through natural language. This interface provides a conversational way to create, edit, and query your 3D scenes.

## Using the AI Assistant

The AI Chat Panel is accessible via a button at the bottom of the screen in the 3DStreet editor. Click on the "Assistant" button to open the chat panel and start interacting with the AI assistant.

Users can:
- Ask questions about the scene
- Request modifications to the scene
- Create new streets, models, or other elements
- Take snapshots of the current view
- Generate reports and analyze the scene

The AI assistant can update elements in the scene, change their properties, create new objects, and provide insights about the current scene.

### Pro Feature

The AI Assistant Panel is available to Pro subscribers of 3DStreet. If you don't have a Pro subscription, you'll see a lock overlay on the chat panel with an option to upgrade.

## Key Features

- **Natural Language Interface**: Communicate with your 3D scene through natural language instead of complex menus
- **Scene Analysis**: The AI understands the current state of your scene and can explain what's in it
- **Scene Modification**: Create or modify elements like streets, buildings, vehicles, and more
- **Snapshots**: Capture views of your scene from different angles
- **Function Execution**: The AI can run specialized functions like setting geographic location or generating technical content
- **Report Generation**: Generate detailed reports about your scene

## Example Interactions

Here are some examples of what you can ask the AI Assistant:

- *"Create a two-way street with protected bike lanes"*
- *"Take a snapshot of the current view"*
- *"Move the car forward 5 meters"*
- *"Add bollards to protect the bike lane"*
- *"How many drive lanes are in this street?"*
- *"Set the location to San Francisco"*
- *"Generate a report about this street design"*


# AI Assistant Tools

The AI Assistant Chat Tools module provides a collection of functions that the AI assistant can use to interact with and modify the 3D scene. These tools allow the AI to perform actions like creating entities, updating properties, managing streets, and taking snapshots.

## Available Tools

The AI Assistant integrates with the following tools:

### Entity Management Tools

| Function | Description |
|----------|-------------|
| `entityCreateMixin` | Creates a new entity in the scene with specified components |
| `entityUpdate` | Updates an existing entity's properties or components |

### Street Management Tools

| Function | Description |
|----------|-------------|
| `managedStreetCreate` | Creates a new managed street with specified segments |
| `managedStreetUpdate` | Updates an existing managed street (add, update, or remove segments) |

### Utility Tools

| Function | Description |
|----------|-------------|
| `takeSnapshot` | Captures an image of the current view |
| `setLatLon` | Sets the geographic location (latitude and longitude) for the scene |

## Function Declarations

Each tool function has a schema that defines its parameters and how they should be structured. These schemas are used by the AI model to properly format function calls.

### `entityCreateMixin`

Creates a new entity in the A-Frame scene with a specified mixin and transforms.

```javascript
{
  name: 'entityCreateMixin',
  parameters: {
    properties: {
      mixin: String, // e.g., "box-truck-rig"
      position: String, // e.g., "0 1.5 -3" (optional)
      rotation: String, // e.g., "0 45 0" (optional)
      scale: String // e.g., "2 2 2" (optional)
    }
  }
}
```

### `entityUpdate`

Updates properties of an existing entity in the scene.

```javascript
{
  name: 'entityUpdate',
  parameters: {
    properties: {
      entityId: String, // ID of the entity to update
      component: String, // e.g., "position", "rotation", "mixin"
      property: String, // Optional property within component (e.g., "x" for position.x)
      value: String, // New value to set
      expressionForValue: String // Mathematical expression to evaluate (alternative to value)
    }
  }
}
```

### `managedStreetCreate`

Creates a new managed street with specified segments and properties.

```javascript
{
  name: 'managedStreetCreate',
  parameters: {
    properties: {
      name: String, // Name of the street
      length: String, // Length in meters
      position: String, // Position in space (e.g., "0 0 0")
      segments: Array // Array of segment definitions
    }
  }
}
```

Each segment in the `segments` array has properties like:
- `type` (e.g., "drive-lane", "bike-lane", "sidewalk")
- `width` (in meters)
- `level` (vertical offset: -1, 0, 1, 2)
- `direction` ("inbound", "outbound", "none")
- `color` (hex color code)
- `surface` (e.g., "asphalt", "concrete", "grass")
- `generated` (optional object for clones, striping, etc.)

### `managedStreetUpdate`

Updates segments in an existing managed street.

```javascript
{
  name: 'managedStreetUpdate',
  parameters: {
    properties: {
      entityId: String, // ID of the managed street entity
      operation: String, // "add-segment", "update-segment", or "remove-segment"
      segmentIndex: Number, // Index of segment to update/remove
      segment: Object // Segment definition (for add/update operations)
    }
  }
}
```

### `takeSnapshot`

Takes a snapshot of the current camera view.

```javascript
{
  name: 'takeSnapshot',
  parameters: {
    properties: {
      caption: String, // Optional caption for the snapshot
      focusEntityId: String, // Optional entity to focus on
      type: String // Optional view type: "focus", "birdseye", "straightOn", "closeup"
    }
  }
}
```

### `setLatLon`

Sets the latitude and longitude for the scene.

```javascript
{
  name: 'setLatLon',
  parameters: {
    properties: {
      latitude: Number, // Latitude in decimal degrees
      longitude: Number // Longitude in decimal degrees
    }
  }
}
```

## Implementation Details

The AI Chat Tools module implements these functions using A-Frame's entity-component system and the 3DStreet application API. Key implementation features include:

### Expression Evaluation

For numeric updates, the module supports mathematical expressions using the `expr-eval` library. This allows for operations like:

```javascript
// Move an object 5 meters forward from its current position
{
  "entityId": "car1",
  "component": "position",
  "property": "z", 
  "expressionForValue": "currentZ - 5"
}
```

### Scene State Management

When executing functions, the module:
1. Accesses the current scene state
2. Validates function parameters
3. Makes updates using A-Frame's Inspector API or direct component manipulation
4. Returns results or error information to the chat interface

### Camera Positioning for Snapshots

The `takeSnapshot` function supports different view types:
- **focus**: Focus on a specific entity (default)
- **birdseye**: Overhead view of the scene
- **straightOn**: Front view of the scene
- **closeup**: Close-up view of the scene

## Safety Guidelines

The AI Chat Tools implement safety guidelines, particularly for street designs:

1. Never place bollards or protective elements directly ON bike lanes or pedestrian paths
2. Always place protective elements in divider segments BETWEEN bike lanes and drive lanes
3. Use appropriate widths for different segment types

## Usage Example

Here's an example of how the AI might create a protected bike lane:

```javascript
// First, create a divider between the bike lane and drive lane
await AIChatTools.executeFunction('managedStreetUpdate', {
  entityId: "street-123",
  operation: "add-segment",
  segmentIndex: 2, // Insert between bike lane (1) and drive lane (3)
  segment: {
    type: "divider",
    width: 0.3,
    level: 0.1,
    surface: "concrete",
    color: "#888888",
    direction: "none",
    generated: {
      clones: [{
        spacing: 2,
        modelsArray: "bollard",
        count: 30,
        facing: 0,
        mode: "fixed"
      }]
    }
  }
});
```

## Further Research

If you're interested in learning more about AI assistants for 3D design:
- [Gemini AI Documentation](https://ai.google.dev/docs)
- [Function Calling in LLMs](https://ai.google.dev/docs/function_calling)