---
sidebar_position: 4
---

# Layers and Properties Panels

In **3DStreet Editor** the Layers and Properties panels enable browsing, selecting, and editing objects in the scene.

## Layers Panel
The left-hand Layer Panel provides an outline (also known as a "scene graph") of all the objects in your 3DStreet scene.

![Screenshot of the layers panel in 3DStreet Editor.](/img/docs/3dstreet-editor-layers-panel.jpg)

There are 4 primary Layers in 3DStreet: Viewer, Environment, 3D Street Layers, and 2D Street Layers. 
* Viewer - This layer controls viewer and camera controls when in 3DStreet Viewer mode. This is used for customizing the viewer experience.
* Environment - This layer controls the sky map and lighting of your scene.
* 3D Street Layers - The objects in this layer are streets or intersections from the current scene.
* 2D Street Layers - The objects in this layer are 2D images such as maps or satellite views.

You can show or hide layers in your scene by clicking on the checkbox to the left of the layer name in the Layers planel. This will toggle visibility of the Layer and all its child objects in the scene.

You can collapse and expand layers using the right-hand toggle arrow. This will not affect visibility of the objects in your scene, it is a convenience to organize scenes with many child objects.

## Properties Panel
When a Layer or an object is selected, the right-hand properties panel allows you to modify properties of that object.

![Screenshot of the layers panel in 3DStreet Editor.](/img/docs/3dstreet-editor-properties-panel.jpg)

All objects have position, rotation and scale properties. Depending on the object's function, it will have one or more components that with properties to control their behavior.

## Future documentation notes:
* How to explain postion, rotation and scale in more detail?
* Explanation of child inheritence of parent position, rotation and scale
* Later to include documentation of component properties, but they need dev work anyway