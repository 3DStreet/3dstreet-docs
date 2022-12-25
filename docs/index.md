---
sidebar_position: 1
id: index
title: Overview
---

# 3DStreet Overview

Welcome to the 3DStreet documentation.

## Organization Purpose

**3D Street is an open source virtual simulation platform for realistic map and satellite imagery of editable street map environments to visualize and share renderings at no cost to the user.** 

This platform has the capability to layer interfaces to be applied for various purposes and in its current state is an accessible tool used for city planning. This tool empowers municipalities and advocates to create a more democratized way to plan urban environments that are safe, equitable, and focused on healthier communities.

3D Street was developed by a group of technologists concerned with the impact environmental planning, layout, and design can have on public health. It was designed to circumvent the reliance on cumbersome urban planning tools that involved extensive training and expensive licenses which prevented more people engaging in how their own cities and urban environments are designed.

3D Street is quickly expanding and applying uses. As we update we will allow users to load previously created files from StreetMix into a 3D rendering, as well as save, share and edit those renderings to be used during planning meetings, community proposals, urban planning sessions, and design mock ups for municipal use in order to plan streets and transportation uses.

## Viewer and Editor

**There are currently two functions in 3D Street and it is important to distinguish between them as they serve two distinct purposes.** 

### **Viewer**

3D Street Viewer is a virtual representation of a previously created street environment produced with the Editor tool. 

- Enables you to view and navigates through a 360 degree horizontal and a 290 degree vertical panoramic street level viewpoint of three dimensional street imagery
- Allows you to move throughout the street environment
- Removes editing tool information to focus on visualization and limits distractions
- Removes satellite imagery to create a cohesive augmented visualization

### Editor

**3D Street Editor is a tool that allows you to edit and adjust components of augmented street environments. With the Editor tool you can load premade designs from StreetMix or create a new original designs.** 

- Allows users to view street scene from multiple perspectives
- Loads scenes made previously in StreetMix
- Toggle between various perspectives of street scenes
- Select and unselect layers to inspect or edit size and position
- Drag and drop street components to different locations and arrangements to edit and improve street architecture
- Inspect and alter components with precise numerical values within the toolbar’s parameters
- Save a glTF file
- Capture PNG screenshot of a selected area

## Moving around within a scene

**There are several ways to move within a scene in *Editor*** 

- **Rotate Camera**
    - Right click and drag to rotate while staying in place
    - Ctrl …for users with trackpads
- **Zoom**
    - With scroll wheel on your mouse move the wheel up and down. Or with trackpad use two fingers and move towards each other for a zoom in and move away from each other for zoom out.
    - Press **+** buttons to zoom in, **-** button to zoom out for manual zoom
- **Reset camera**
    - Press compass icon or the line in between the + and - of the zoom controls
- **Change view or perspective**

*Editor* has three perspectives: 3D View, Plan View, Cross Section, you can change them by selecting their respective tabs at the top of the editor screen. The darkened tab is the one that is your current selection. These views are not available in *Viewer*. 

- 3D Plan View- shows 3D perspective camera with click and rotation
- Plan View- shows a downfacing orthographic camera
- Cross Section- front facing orthographic camera

**Use the purple cursor to help you move through *Viewer***

- **Traverse down street**
    - Only available in *Viewer*
    - Use purple circle as cursor to locate your view and click on it to move down the street or another direction
- **Rotate Camera**
    - Use hand cursor to click desired point, when hand is closed “grab” and move mouse to rotate camera view

## Loading From Streetmix

**You can load a previously created file from StreetMix to turn into a 3D Street file that can be captured view screenshot function or saved to a glTF file for later use.** 

- **What is a glTF file?**
    - glTF stands for GL Transmission Format, and is a standard file format for three dimensional scenes and models
- **Loading a URL from StreetMix**
    - Prepare a saved URL from streetmix
    - Copy that URL to your computer’s clipboard
    - Paste it into the browser behind the …

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