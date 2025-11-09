---
sidebar_position: 10
---

# Coordinate Systems in 3DStreet

Understanding coordinate systems is fundamental to working effectively with 3DStreet, especially when positioning objects, setting scene locations, and working with augmented reality features. 3DStreet uses two primary coordinate systems that work together to connect your 3D designs with real-world geographic locations.

## Overview

3DStreet combines two coordinate systems to enable precise positioning and real-world context:

1. **Local 3D Coordinate System** - Used for positioning objects within your scene
2. **Geographic Coordinate System** - Used for connecting your scene to real-world locations

The **scene origin** is the critical point where these two systems connect, serving as the reference point that links your 3D scene coordinates to a specific longitude and latitude on Earth.

## Local 3D Coordinate System (Three.js)

3DStreet is built on Three.js, which uses a **Y-up coordinate system** where:

### Axes Definition (Relative to Default Camera Placement)
- **X-axis**: Left/right movement (red arrow in editor)
- **Y-axis**: Up/down movement (green arrow in editor) 
- **Z-axis**: Forward/backward movement (blue arrow in editor)

![3DStreet coordinate axes shown as colored arrows](/img/docs/3dstreet-editor-move-object-translation.gif)
<br/>
*The colored arrows in the 3DStreet editor represent the three coordinate axes: red (X), green (Y), and blue (Z).*

### Key Properties and Units
- **Units**: All measurements are in **meters** (except measure lines which can be toggled between imperial and metric units)
- **Rotation**: Rotation values are expressed in degrees (ie a rotation Y value of 180 will turn an object to face the opposite direction)
- **Origin**: The point (0, 0, 0) in your scene
- **Precision**: At least millimeter accuracy for relative positioning (ie 3 digits of precision saved)

### Default Camera Orientation
When you create a new scene, the default camera view faces:
- **Direction**: West (negative Z direction)
- **Position**: Centered around the scene origin (0, 0, 0)

> **Note**: While some 3D applications use Z-up coordinate systems, 3DStreet follows the Three.js convention of Y-up, which is common in web-based 3D graphics.

### Cardinal Directions
North is x+ (positive) ie. rightward relative to default camera position.

The orientation of all axes to cardinal directions is as follows: 
 * x+ (positive) is north
 * x- (negative) is south
 *  z- (negative) is west
 *  z+ (positive) is east
 *  y+ (positive) is up
 *  y- (negative) is down

Why? It's the default for Google 3D Tiles in three.js, so we just went with it.

## Geographic Coordinate System

Geographic coordinates specify locations on Earth using:

### Components
- **Longitude**: East/west position (-180° to +180°)
- **Latitude**: North/south position (-90° to +90°)
- **Elevation**: Height above reference level (automatically calculated, see below)

## Scene Origin: Connecting the Systems

The **scene origin** is the fundamental concept that connects local 3D coordinates with geographic coordinates.

### What is the Scene Origin?

The scene origin is:
- The point (0, 0, 0) in your 3D scene's coordinate system
- Assigned a specific longitude, latitude, and elevation when you set a scene location
- The reference point for all object positioning in your scene

### Setting a Scene Origin

When you set a scene location in 3DStreet:

1. **Choose a Location**: Use the "Set Location" feature to specify a real-world location
2. **Origin Assignment**: The scene origin (0, 0, 0) is mapped to the chosen longitude/latitude
3. **Reference Established**: All objects in your scene are positioned relative to this origin

### Ground Control Points

For maximum accuracy, especially in augmented reality applications, choose your scene origin at a **ground control point**:

- **Easily Identifiable**: Choose a location you can easily find and verify in real life
- **Visible from Above**: Select points clearly visible in satellite imagery
- **Stable Features**: Use permanent landmarks like building corners, utility covers, or intersection centers
- **Accessible**: Ensure the point can be reached when conducting field work

#### Example Ground Control Points
- Building corners at ground level
- Intersection centerlines
- Utility access covers
- Permanent street furniture
- Surveyor markers

## Practical Implications

### Object Positioning

Understanding coordinate systems helps with:

**Precise Placement**:
- Objects placed at specific X, Y, Z coordinates will always maintain their relative positions
- Changing the scene geospatial origin (choosing a new lat/lon value) doesn't affect object relationships within the scene -- ie the positioning of objects in the three.js coordinate system remains the same even after changing scene's geospatial location

![Editing object position coordinates in properties panel](/img/docs/editing/moveproperties.gif)

*Object coordinates can be precisely edited in the properties panel, showing exact X, Y, Z values.*

## WGS84 Elevation

When a geolocation lat/lon is added to a scene, 3DStreet calculates multiple elevation values for precise positioning:
- **Ellipsoidal Height**: Height above the WGS84 ellipsoid
- **Orthometric Height**: Height above mean sea level  
- **Geoid Height**: Adjustment between ellipsoidal and orthometric measurements

### Viewing Elevation Data
Normally users do not need to set the WGS84 ellipsoid elevation level of your scene directly. Instead, when a location is chosen in the Scene Location modal the Ellipsoidal Height is calculated based on a coarse topographic model of the Earth via a cloud function. This provides elevation data required to render 3D tiles at the correct ground level. The intent of the calculated values is such that the 3D tiles geospatial layer's topographic ground elevation is 0 at the scene origin position.

You can see the calculated elevation values for a scene by clicking on Geospatial > Show Advanced > and viewing values for `ellipsoidalHeight`, `geoidHeight`, and `orthometricHeight` (all values in meters).

### Changing Elevation Values

`ellipsoidalHeight` is the only value used dynamically in the application for the positioning of 3D tiles, the others are used in calculation and saved for reference only. It is possible to edit `ellipsoidalHeight` and that updated value will be saved and restored in future sessions. However, elevation values are always recalculated upon setting a lat/long geospatial origin for your scene, so take care to not reset a geolocation after setting a custom elevation or the value will be overwritten. 