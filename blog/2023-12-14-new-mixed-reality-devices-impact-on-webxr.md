---
title: Impact on WebXR Application Design from New Mixed Reality Headsets
description: What changes should WebXR developers consider to their application given new devices coming to market? 
authors: kfarr
tags: [webxr, headset, mixed-reality, ar, vr]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

# A *Gaze* into the Future of WebXR
Last week I attended a "developer day" at a local electronics company down the road featuring their new mixed reality VR headset. I spent the entire day testing many different WebXR applications with a heavy focus on evaluating which user interaction elements will be relevant for developers.

## Gaze *just works*
Gaze interaction *"just works"* for native applications in this headset, however it's a privacy nightmare as gaze movement can be use to fingerprint (identify) individuals for tracking purposes, so that information isn't even given to native application. 

Instead, applications need to provide . Hinting on that for 2D DOM. however there's no clear way to do this in WebXR "3d dom"

Open ticket

## Hands free is the true MVP
While controllers offer high precision, they aren't always the most accessible option. Imagine a world where WebXR experiences are 100% hands-free—where a simple ray from the wrist or a pitch of the hand can activate functions. This is not just a possibility but a necessity that must be informed by the gap in current technologies.

## Diorama vs. Full Room Scale
Design standards 
focus on a Volume for miniaturized scenes

https://developer.apple.com/documentation/visionos/diorama

When we dive deeper into the design aspect of WebXR, we're met with choices: Diorama versus Life Size, Immersive versus Mixed Reality. Each of these choices presents a unique way of experiencing content that's worth exploring.

## Immersive
Immersive at room scale is not offered, the scene fades out at the edges.
 at "Room Scale" 

## Future exploration
* The integration of WebXR in webview, especially when embedded in apps, opens up a new horizon for developers and users alike. It enables a seamless transition from 3D scenes to real-world applications, enhancing the composer workflow.
* Reality Composer
* Lastly, the use of USDZ output—just like glb—suggests a promising direction for compatibility and ease of use in the creation of immersive content. The potential for these technologies is immense, and their exploration could lead to groundbreaking developments in the field of virtual and augmented reality.

## Asset Pipeline Step-By-Step


## General useability for end-users
Hidden behind multiple Safari flags, and then facing 3 separate approval popups on the web page itself, means WebXR is still a practical use case only for dedicated users. It may be possible to "pull" users into using WebXR on these devices with instruction on feature flag setting, but it will be impossible to use WebXR on this platform to "push" more people to your WebXR experience in its present form.

<!-- truncate -->

This is my first post on Docusaurus 2.

A whole bunch of exploration to follow.

