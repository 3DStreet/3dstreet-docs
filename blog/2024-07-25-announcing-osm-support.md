---
title: "Announcing OpenStreetMap Support in 3DStreet"
description: We're excited to introduce OpenStreetMap (OSM) 2D tiles and 3D buildings as a new geospatial data provider in 3DStreet, offering more flexibility and global coverage for your street design projects.
authors: [kfarr]
tags: [product update, osm, openstreetmap, 2d tiles, 3d buildings, geospatial]
image: ./images/2024-07-25/osm-3d-buildings.jpg
---

We're thrilled to announce the integration of OpenStreetMap (OSM) support in 3DStreet! This new feature brings OSM 2D tiles and 3D buildings as an additional geospatial data provider, offering more flexibility and global coverage for your street design projects.

![OpenStreetMap 3D buildings in 3DStreet](./images/2024-07-25/osm-3d-buildings.jpg)

<!-- truncate -->

## Why OpenStreetMap?

OpenStreetMap is a collaborative project to create a free editable map of the world. By integrating OSM into 3DStreet, we're tapping into a vast, community-driven database of geographical data. This means:

1. **Global Coverage**: Access detailed map data for virtually any location on Earth.
2. **Up-to-date Information**: Benefit from frequent updates made by the OSM community.
3. **Rich Data**: Utilize detailed information about buildings, roads, and other urban features.

## New Features

### 1. OSM 2D Tiles

The new OSM 2D tiles feature provides a crisp, detailed base map for your 3DStreet projects. This allows you to:

- Visualize the existing street layout and surrounding context
- Easily align your designs with real-world geography
- Switch between satellite imagery and OSM map styles

### 2. OSM 3D Buildings

Our OSM 3D buildings integration brings a new level of realism to your street designs:

- Automatically generate 3D building models based on OSM data
- Visualize building heights and shapes for better context
- Combine OSM buildings with your custom 3D models

## How to Use

To use the new OSM features in your 3DStreet project:

1. Open your project in the 3DStreet editor
2. Navigate to the "Map Layers" panel
3. Select "OpenStreetMap" as your map provider
4. Choose between 2D tiles, 3D buildings, or both

For a detailed walkthrough, check out our [updated documentation](/docs/osm-integration).

## Technical Details

This integration was made possible by adapting the excellent work from the [osm4vr project](https://github.com/ctrlw/osm4vr). We've integrated their `osm-tiles` and `osm-geojson` components into 3DStreet, allowing seamless use of OSM data within our A-Frame-based environment.

Key technical features include:

- Dynamic loading of OSM data as you move around the scene
- Support for OSM's simple 3D building specifications
- Efficient rendering of large areas with level-of-detail optimization

## What's Next?

This is just the beginning of our OSM integration. We're planning to expand on this feature with:

- More detailed 3D building models
- Integration of additional OSM data (e.g., trees, street furniture)
- Tools for editing and contributing back to OSM

## Feedback and Support

We're excited to see what you create with these new OSM features! If you encounter any issues or have suggestions for improvements, please don't hesitate to [reach out to our support team](mailto:support@3dstreet.org) or [open an issue on GitHub](https://github.com/3dstreet/3dstreet/issues).

Happy designing with 3DStreet and OpenStreetMap!