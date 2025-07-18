---
sidebar_position: 2
---

# AR Ready Export

3DStreet's AR Ready export feature allows you to prepare your street designs for augmented reality visualization with just one click. This feature automatically optimizes your 3D models for AR platforms, eliminating the need for manual adjustments in external 3D modeling software.

## What is AR Ready Export?

AR Ready export is a specialized GLB export option that automatically prepares your 3DStreet scenes for immediate use in augmented reality applications. This feature:

* Removes rigged objects (people, vehicles) that may cause issues in AR
* Bakes texture transforms directly into UV coordinates
* Embeds geospatial metadata when available
* Creates AR-compatible GLB files ready for immediate use

## Using AR Ready Export

### How to Export an AR Ready Model

1. Open your scene in the 3DStreet Editor
2. Click the Share button in the top navigation bar
3. In the Share dialog, select the "`AR Ready` GLB" option from the dropdown menu
4. Your browser will download the optimized GLB file

> **Note:** AR Ready export is available exclusively for Pro plan users.

## Compatible AR Applications

AR Ready exports from 3DStreet are specifically optimized for use with:

### Adobe Aero

Adobe Aero is a powerful AR creation and viewing platform that allows you to place your 3DStreet designs in real-world environments.

* **Features**:
  * Intuitive interface for placing and scaling 3D models
  * Support for animations and interactions
  * Sharing capabilities for collaborative visualization
  * Available on iOS and Android devices

* **Known Issues**:
  * Aero uses a legacy glTF importer that may cause compatibility issues with some 3DStreet models.

### inCitu

inCitu is an AR platform specifically designed for urban planning and community engagement. Visit their website at [InCitu.us](https://www.incitu.us/) to learn more about their features and capabilities.

* **Features**:
  * Geospatial positioning of 3D models in real-world locations
  * Community feedback tools
  * Project management for urban planning initiatives
  * Available on iOS and Android devices

* **Known Issues**:
  * InCitu converts models to USDZ format before rendering in AR which may cause compatibility issues with some 3DStreet models. Desaturation of textures and issues with anisotropic filtering may be observed in some models. 

:::note

Third-party AR applications are not officially supported by 3DStreet, and may not be compatible with all 3DStreet models. We do our best to address issues raised by users, but each app uses a different rendering engine and may have unique compatibility issues.

:::

## Technical Details

### Optimizations Applied

The AR Ready export process performs several important optimizations:

1. **Rigged Object Removal**:
   * Automatically filters out people, cyclists, and vehicles with rigged animations
   * Prevents potential animation and scaling issues in AR environments
   * This is required for compatibility with inCitu and other AR platforms that do not support animated 3D models

2. **Texture Transform Baking**:
   * Eliminates compatibility issues with platforms that don't support KHR_texture_transform glTF extension by converting textures into direct UV coordinate modifications
   * Ensures proper materials display across all AR platforms such as Adobe Aero, especially ground elements such as roadway markings and street textures

3. **Geospatial Metadata**:
   * When a scene has a location set, embeds geographical coordinates (longitude, latitude)
   * Includes elevation data (orthometric height, geoid height, ellipsoidal height)
   * Adds orientation information for proper alignment in AR
   * Uses the KHR_xmp_json_ld extension for standardized metadata storage

## Availability

AR Ready export is available exclusively as part of the 3DStreet Pro subscription plan.
