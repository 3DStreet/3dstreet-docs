---
sidebar_label: 'Viewer and Editor'
sidebar_position: 3
---

# Viewer and Editor

**3DStreet has two primary interface modes. Each serves a distinct purpose.** 

### 3DStreet Viewer

![Screenshot of the 3DStreet Viewer application displaying a street scene with multi-modal transit vehicles, cycle tracks, and pedestrians on sidewalks in urban setting.](/img/docs/3dstreet-viewer-screenshot.jpg)

The **3DStreet Viewer** is a read-only 3D view of a previously created street environment made with the 3DStreet Editor tool. 

- Enables users to view and navigate through a first-person "Street View" interface
- Allows users to move throughout the street environment
- Removes editing tool information to focus on visualization and limits distractions
- Supports immersive VR mode on WebXR compatible devices such as the Oculus Quest
- Allows loading of existing scenes and creating screen captures

### 3DStreet Editor

![Screenshot of the 3DStreet Editor application with user interface elements for modifying a street scene.](/img/docs/3dstreet-editor-screenshot.jpg)

The **3DStreet Editor** is a tool that allows you to edit and modify components of a 3DStreet scene. With the Editor tool you can import designs from tools like Streetmix or create new original designs.

- Allows users to view street scene from multiple perspectives
- Loads scenes made previously in 3DStreet or import from Streetmix
- Select and unselect layers to inspect or edit position and other attributes
- Inspect and alter component properties with precise values using the property panel
- Export a glTF file for further editing and rendering in professional 3D applications
- Capture PNG screenshot of a the current viewport

## Moving around within the 3DStreet Editor

### Adjusting current Editor view

There are several ways to modify the current viewer perspective within a scene in **Editor**.

#### Pan

Click and drag to move around the scene.

![Animated gif of a user panning a street scene using the 3DStreet Editor.](/img/docs/3dstreet-editor-pan.gif)

#### Rotate

Right click and drag to rotate while staying in place. (`Ctrl` click and drag for users with trackpads.)

![Animated gif of a user rotating a street scene using the 3DStreet Editor.](/img/docs/3dstreet-editor-rotate.gif)

#### Zoom

With scroll wheel on your mouse move the wheel up and down. Or with trackpad use two fingers and move towards each other for a zoom in and move away from each other for zoom out.

![Animated gif of a user zooming in and out of a street scene using the 3DStreet Editor.](/img/docs/3dstreet-editor-zoom.gif)


### Switching Editor camera views

**Editor** has three camera perspectives to switch between: 3D View, Plan View, and Cross Section. You can change them by selecting their respective tabs at the top of the Editor screen. The darkened tab is the one that is your current selection. These views are not available in **Viewer**. 

- **3D Plan View** shows a 3D perspective camera with adjustable rotation and position <br/> ![Screenshot of 3DStreet editor with 3D perspective camera view selected.](/img/docs/3dstreet-editor-camera-3dview.jpg)
- **Plan View** shows a downfacing orthographic camera that can be panned, similar to a traditional map view <br/> ![Screenshot of 3DStreet Editor with plan view (top-down) camera view selected.](/img/docs/3dstreet-editor-camera-planview.jpg)
- **Cross Section** shows a front facing orthographic camera view, similar to Streetmix <br/> ![Screenshot of 3DStreet Editor with 3D cross section camera view selected.](/img/docs/3dstreet-editor-camera-crosssection.jpg)

## Moving around in the 3DStreet Viewer

Use the purple cursor to help you move through **Viewer** similar to Google Street View or other first-person click and teleport movement schemes.

- **Traverse down the street**
    - The purple circle is a cursor that indicates a location to jump to when clicked. Click on it to move down the street to the cursor point. (Only available in **Viewer**) <br/> ![Animated gif of using cursor teleport to traverse a scene in 3DStreet Viewer](/img/docs/3dstreet-viewer-traverse-via-cursor-teleport.gif)
- **Rotate Camera**
    - Use hand cursor to click desired point, when hand is closed “grab” and move mouse to rotate camera view  <br/> ![Animated gif of rotating first-person camera perspective in 3DStreet Viewer](/img/docs/3dstreet-viewer-rotate-view.gif)
