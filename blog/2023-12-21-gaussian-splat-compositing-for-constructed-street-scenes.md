---
title: Creating New Street Scenes using Multi-Splat Compositing 
description: We share research and progress on improving the visual appearance of compositing novel scenes from multiple splats using depth buffer and selective splat discarding. 
authors: [kfarr, amougin]
tags: [gaussian splats, splats, photogrammetry]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

# Gaussian splats are ground-breaking visualization technology

3DStreet's mission is to empower anyone to visualize safer streets. A common request to support this mission is to bring in local real-life elements from your actual streets by scanning them into 3D objects. Until now, the best technology for doing this (photogrammetry to textured 3D polygons) resulted in huge file sizes, difficult to edit output files, and gooey visuals on visible as melting trees or cars that you may see on Google Maps in 3D mode.

Enter Gaussian Splatting -- earlier this year a groundbreaking photogrammetry and visualization technique that uses a technique called gaussian splatting was released as part of a [research paper published at SIGGRAPH 2023](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/). It's *[the best modern method](https://www.youtube.com/watch?v=HVv_IQKlafQ)* to allow everyday users like you and me to scan 3D objects with our phones and retain the fine detail of organic material especially [plants](https://www.youtube.com/watch?v=lowscL9YIjM), [trees](https://www.youtube.com/watch?v=hr7P8_z0PSk), flowers and other natural elements -- all things we'd like to see more of in our streets! 

IMAGE: google maps blobs > self-scanned trees

This is still an R&D project, not yet a supported built-in feature of 3DStreet. In this post we share research and progress on how we are improving the visual appearance of compositing novel scenes from multiple splats using depth buffer and selective splat discarding in three.js and A-Frame, underlying 3D frameworks supporting 3DStreet. 

<!-- truncate -->

# A splatting explosion!
A slew of gaussian splat tools have come to market -- creation apps for 3D scanning with your phone ([Polycam](https://poly.cam/) and [Luma](https://lumalabs.ai/)) and viewers for every platform and device imaginable ([too many to list](https://github.com/tomiwaAdey/awesome-gaussian-splatting?tab=readme-ov-file#rendering-and-visualisation-tools)). Kieran from the 3DStreet team has been helping maintain a splat viewer for A-Frame along with other community members.

However, most gaussian splat research and development is focuses only on capture and viewing of a single scanned scene at a time.

With 3DStreet we're exploring something new -- constructing brand new street scenes from bits and pieces of existing 3D splats.

# The Problem: Multiple Splats are Hard
If we can draw one gaussian splat in our scene, why not more? Well it turns out it's Hard. Compositing wasn’t supported yet by the libraries so it resulted in things just not good enough for people to use as a product. (show error of transparency sorting)

IMAGE: Transparency rendering error

To solve this problem, we collaborated with Arthur Mougin, a WebXR and full stack developer who was excited to tackle a new challenge. Here is his writeup on how we enabled sorting concluded by some discussion on what is coming next.

:::info

Some of the content in this section is written for developers with 3D experience.

:::

# Use depth buffer with `depthWrite:true`
After analyzing the shader and rendering pipeline of threejs, we identified first that we needed to have proper scene-level Occlusion.

At the scene level, Splats are just classic opaque objects with a unique drawing method. That’s great because we can take advantage of the depth buffer. It’s a grayscale image that shaders use to know if their pixel below or above something that was already painted. By default, splats did not write into it, causing strange artifacts when the draw order does not match the depth order. Same thing for recursive occlusion. 

So, we added the possibility to choose to write to the depth buffer with `depthWrite:true`. Turning it on improved our occlusion issues drastically. 

IMAGE: making progress with transparency with artifact

# Border and edge blending issues with semi-transparent splats
Sometimes the border is not completely clean, we also wanted a way to improve it. 

It was done this time in the fragment shader, where discarding cause the pixel not to be drawn. We compare there for each blob’s pixel their opacity, and if it’s lower than our limit, it’s not rendered.

This limit, the discard filter, has no effect when set to 0, but help cleanup unnecessary blobs that could ruin a proper transition between two splats. As it applies to all splat’s blobs, turning it on will impact the splats quality.

IMAGE: looking good with the adjustment

One gotcha -- this worked on iOS locally while developing but not when deployed. It turned out uglify.js did change something to the code that broke the code on iOS. Looking at Uglified documentation, there was a simple line, a single flag you could add to the command, identified as this `--webkit`. Now it was just a question of rebuilding, and the splats started working again on iOS, while preserving functionality on other platforms.

TODO: Building the library, where does it live?

# Demo scene with splat layers in 3DStreet Editor
Example scene: https://github.com/3DStreet/splat-playground/ 

Picture of the scene
YouTube video of the scene

# What's next
* Still in research phase at the moment. New libraries in three.js from Luma. We will continue to focus on creating scenes composed of multiple splats and traditional 3d meshes. 

