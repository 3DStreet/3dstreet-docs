---
title: Impact on WebXR Application Design from New Mixed Reality Headsets
description: What changes should WebXR developers consider to their application given new devices coming to market? 
authors: kfarr
tags: [webxr, headset, mixed-reality, ar, vr]
image: ./images/visionOS-platform-compressed.jpg
hide_table_of_contents: false
---

# A *Gaze* into the Future of WebXR
A few weeks ago I attended a "developer day" at a local electronics company down the road featuring their new mixed reality VR headset. I spent the entire day testing many different WebXR applications with a heavy focus on evaluating which user interaction elements will be relevant for developers.

Below are some notes intended for other 3DStreet code contributors to reference as we work on supporting new WebXR compatible devices.

<!-- truncate -->

## Gaze works very well as a primary user input mechanism
Gaze interaction *"just works"* for native applications in this headset, however it's a privacy nightmare as gaze movement can be use to fingerprint (identify) individuals for tracking purposes, so that information isn't even given to native application. 

To enable gaze user interface while not exposing gaze to the application, apps need to provide "hot spots" or hints as to areas that can be hovered. [There is a great video guide on how to adapt 2D DOM CSS website for gaze highlight interaction](https://developer.apple.com/videos/play/wwdc2023/10279/), but there's no clear equivalent to this CSS hinting that can be done in the WebXR "3D DOM" or 3D space. The need has been recognized however, [there is a new ticket opened in the WebXR `immersive-web` GitHub repository that I recently added to.](https://github.com/immersive-web/proposals/issues/86)

## Hand tracking is most accessible input, not controllers
Imagine a world where WebXR experiences are 100% hands-free, where a simple ray from the wrist and a pitch of the hand can activate functions. This is not just a possibility but now a necessity -- going forward, all WebXR experiences must be accessible via hands first.

We should now regard hand tracking as the "lowest common denominator" of user input for headset experiences. Controllers will still offer higher precision, off-camera movement tracking, more button trigger inputs, etc. but they are no longer the most accessible "default" option.

## Launching WebXR applications
Getting WebXR working on this device is cumbersome. WebXR must be activated by searching through multiple Safari flags (System Settings > Apps > Safari > Blah blah blah). Then, on the web page itself a user must accept 2 separate approval popups when entering WebXR mode -- one for enabling immersive mode, the other for enabling hand tracking.

It may be possible to "pull" some advanced users into using WebXR on these devices with instruction on feature flag setting, but it will be impossible to use WebXR on this platform to "push" more people to your WebXR experience in its present form.

## Space, Immersion and Passthrough with WebXR
In WebXR mode on the device, a scene is rendered in _Full Space_ meaning no other application windows are present, unlike native apps that can choose to run in _Shared Space_ amongst other applications. An additional limitation is that the device does not currently support WebXR with _Passthrough_ mode, therefore you cannot run WebAR apps that make use of external cameras.

*Therefore only your WebXR scene will appear in _Full Space_ immersion mode with no _Passthrough_.* This may be desirable for traditional VR applications but not as useful for next generation mixed reality applications.

An additional limitation is that WebXR Immersive mode is limited to a 1.5m radius from the user-specified origin, usually where the user was located when entering XR mode. Beyond this radius the immersive scene _Full Space_ begins fading into _Passthrough_ without the scene persisting. If a user continues moving away from the origin the will see a round Safari icon at the origin point, presumably indicating that the user has an open WebXR Safari session with an origin at that point.

## Diorama vs. Full Room Scale
The [visionOS developer documentation](https://developer.apple.com/documentation/visionos/) is excellent and signals clear directions for the market.

The Diorama appears to be major application interface concept, [featured as a sample application](https://developer.apple.com/documentation/visionos/diorama) and a prime example of output from the new Reality Composer Pro authoring tool.

This is a useful concept to adopt with 3DStreet. With 3DStreet there are cases for both Diorama and Full Scale modes: some users may wish to view a scene in Full Scale life-size to get an accurate viewpoint of dimension, while other users may wish to shrink a scene down to a Diorama view to easily manipulate a large scene from a smaller workspace.

## Combining WebXR with native applications
* Native applications can ask for rights such as _Passthrough_ or _Shared Space_ that are not currently accessible via Safari WebXR. It is definitely worth exploring the use of an embedded webkit-based webview in a visionOS application which may expand the ability for WebXR application to offer augmented reality experiences with a native-like experience.
* Reality Composer Pro looks like a powerful tool for non-developers. It is worth exploring a pipeline of 3DStreet > Reality Composer Pro > App Publishing. Therefore it is likely worth exploring tools to convert glTF exporting to USDZ format, or directly exporting the three.js / A-Frame scene into USDZ format.

## Summary
* WebXR appears to be purposefully limited on this device with a degraded user experience. Consider webview or another mechanism to adapt WebXR application into a native app.
* Hand tracking is now a minimum requirement for WebXR apps, controllers are optional.
* Gaze interface is very effective but needs standardization work to enable in WebXR mode.