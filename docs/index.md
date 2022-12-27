---
sidebar_position: 1
id: index
title: Overview
---

# 3DStreet Overview

Welcome to the 3DStreet documentation.

**The 3DStreet app is an open-source 3D platform to create and share highly detailed street scenes.** The 3DStreet organization is a mission-based project to provide more accessible street planning tools for users of diverse ages and abilities. [Learn more about the 3DStreet organization's mission here.](./why-3dstreet)

**You can explore new scenes with the 3DStreet viewer or design new scenes with the Editor.** A quick way to get started is to import a street from Streetmix and instantly generate a 3DStreet scene that you can modify and build from. [We are working on a tutorial to guide you through this.](./tutorial-streetmix-to-3dstreet/tutorial-welcome-streetmix-3dstreet)



## Select and Move Objects

**In *Editor* you can select and move objects.** 

- **Select an object**
    - Click on the object
    - When you see that it has a blue outline around it, it is selected

**Move an object**

- Once an object is selected you will see a set of colorful arrows that will indicate directions to slide the selection
- Objects are on an x,y,z axis
    - Click on blue arrow to slide selection on the z axis (towards yourself)
    - Click on red arrow to slide selection on the x axis (left/right)
    - Click on green arrow to slide selection on the y axis (up/down)
    - The arrows turn yellow when hovered over, they also have a yellow square to indicate domains between the arrows, the arrows and squares are simply responsive domains that correspond to the axis selected
    - The object will then be placed in the location and once you click to another object it will stay in the desired location

## Saving Scenes

**Scenes can be saved while in *Editor* for later use as either a PNG screenshot image or glTF file so they can be shared or used later.** 

- **Save as a glTF file**
    - glTF stands for GL Transmission Format, and is a standard file format for three dimensional scenes and models
    - In the right hand corner of Editor mode click the purple “Save” button
    - Once clicked it will show the “glTF model” option
    - Click and wait a moment for the file to download to your local downloads folder
- **Save as a PNG image**
    - A PNG is a portable network graphic which is a type of image file
    - In the right hand corner of Editor mode click the purple “Save” button
    - Once clicked it will show the “PNG screenshot” option
    - Click and wait a moment for the file to download to your local downloads folder
- **Save as a Screenshot**
    - To quickly grab a screen save as a screenshot
    - Click on the purple camera icon
    - Wait a moment as this takes a bit of time to download
    - This will be downloaded as a PNG to your local downloads folder

## Layers

**In *Editor* the Layers panel is the hub for all the tools that enable editing objects in the scene. It has several functions that allows you change the configurations including position, scale, and rotation of objects. In addition it provides labels and options for selected components.** 

- (Need a better explanation here)

How to explain 
-postion

-scale

-rotation (is this a property each selection has?)

Each component has it’s own set of properties what are they? 
How does this relate to each way you can edit them? 
Some I observe so far: 

-geometry: buffer, depth, height, primitive, seg height, seg depth, seg width, skip cache, width, 

-material: alpha test, ambient occulsion map, map intensity, ambient occulsion texture offset, ambient occulsion texture repeat, blending, color, depth test, depth write, displacement bias, displacement map, displacement scale, displacement texture offset, displacement texture repeat, dithering, emissive, emissive intensity, env map, flat shading, fog, height, metalness, metalness map, metalness texture offset, metalness texture repeat, normal map, normal scale, normal texture offset, normal texture repeat, npot, opacity, repeat, roughness, roughness texture offset, roughness texture repeat, shader, side, scpherical env map, src, transparent, vertex colors, visible, width, wireframe, wireframe linewidth

-gltf part plus: buffer, part, reset postion, src
-gltf model: gltf model

- How to view my scene in VR?
    - (Only in viewer?)
- Contributing for Developers (for Kieran)
    - Architecture
    - Repositories
    - Contributing Instructions (issue, PR, testing, etc.)

## Product Roadmap

**3D Street is rapidly updating so check back every month as we progress with additions and improvements on the application and platform.** 

- **Releases**
    - V1-
    - V2-
    - V3-
- **Coming Soon**
    - Responsive selection tools
    - User friendly editing toolbar
    - Easy way to load URL from StreetMix
    - Ways to load, edit, and share files