---
sidebar_position: 1
---

# Geospatial (3D Maps)

3DStreet's geospatial capabilities allow you to ground your street designs in real-world context, providing accurate geographical reference for your projects. These features are primarily available through 3DStreet Pro, offering advanced mapping and location-based functionality.

## Setting Scene Location

Establishing a geographical context for your 3DStreet scene is the foundation for all geospatial features.

### How to Set a Scene Location

1. Open or create a scene in 3DStreet Editor
2. In the layers panel on the left-hand side of the editor click the "Set Location" button on the "Geospatial" layer. (Use the "Change Location" button if you already have a location set -- click the Geospatial layer to reveal the right-hand properties panel with more options.)
3. Use the Google Maps search functionality to find your desired location, then click "Update Scene Location."
4. Once selected, your scene will be assigned specific geographical coordinates (longitude, latitude) and teh ground elevation for this location is calculated.
5. The scene will automatically update to reflect the real-world context of your chosen location using Google 3D Map Tiles as the default map source.

## Map Integration Options

3DStreet supports multiple map data providers, each offering different visualization styles and capabilities.

### Google 3D Tiles

The Google 3D Tiles integration provides high-resolution, photorealistic 3D models of buildings, terrain, and infrastructure.

* **Features**:
  * Photorealistic 3D buildings and terrain
  * Accurate representation of existing infrastructure
  * Detailed context for urban environments
  * Adjustable opacity and blending modes
  * Optional flattening to focus on specific areas

* **Best For**:
  * Urban areas with complex built environments
  * Projects requiring detailed context
  * Presentations to stakeholders where realism is important

### Mapbox 2D Satellite

The Mapbox integration provides high-resolution satellite imagery as a 2D ground plane.

* **Features**:
  * High-resolution aerial/satellite imagery
  * Street overlay option for clear street identification
  * Lightweight alternative to 3D tiles
  * Consistent coverage across most global locations

* **Best For**:
  * Areas without 3D tiles coverage
  * Projects where overhead context is sufficient

### OpenStreetMap (OSM) Integration

The OpenStreetMap integration provides 2D political map tiles and 2.5D building geometry.

* **Features**:
  * 2D political map ground tiles
  * 2.5D building geometry through GeoJSON
  * Open-source data with global coverage
  * Lightweight and performant

* **Best For**:
  * Areas without 3D tiles coverage
  * Projects where schematic context is preferred over photorealism
  * Locations where Google 3D Tiles are unavailable
  * When you want to minimize distraction from your design

## Advanced Geospatial Features

### Map Customization

When using Google 3D Tiles, you can further customize the appearance of the map tiles by adjusting the opacity and blending modes.

* **Opacity and Blending**:
  * Adjust the opacity of 3D tiles (30% or 60%)
  * Choose blending modes (Normal, Darker, Lighter)
  * Control how your design integrates with the underlying map

* **Terrain Flattening**:
  * Enable terrain flattening to focus on specific areas
  * Remove map elements that distract from your design 
  * Trees, cars, utility poles, and other objects can be flattened to provide space for your design
  * Design subterranean treatments using a Terrain Flattening Shape positioned below ground level

### Elevation Data

3DStreet can utilize different elevation measurements to accurately position your designs. These values are calculated and stored but not exposed to end-users by default. To access these values, click the Geospatial layer to show the right-hand properties panel, then "Show Advanced" to see the elevation controls. We do not recommend modifying these values directly, they are calculated using a location's longitude and latitude.

* **Ellipsoidal Height**: Height above the WGS84 ellipsoid
* **Orthometric Height**: Height above mean sea level
* **Geoid Height**: Height adjustment between ellipsoidal and orthometric measurements

### Augmented Reality Integration

Geospatial data (long/lat/elevation/orientation) is exported in AR Ready glTF (.glb) exports as additional metadata. Third-party AR applications can utilize this metadata to display the scene in a specific location.

## Working with Geospatial Features

### Best Practices

* **Scene Size Considerations**:
  * Geospatial Pro supports scenes up to approximately 3 miles/5km
  * For larger areas, consider creating multiple connected scenes

* **Performance Optimization**:
  * Choose the appropriate map source based on your needs
  * Use OSM for better performance in areas with limited connectivity

* **Design Integration**:
  * Align street designs with real-world geometry
  * Use the toolbar's Hand mode to navigate without accidentally moving objects
  * Use the Ruler tool to measure distances
  * Leverage the Add Layer panel to place objects in geographically accurate positions

## Availability

Most geospatial features are only available as part of the 3DStreet Pro subscription plan.