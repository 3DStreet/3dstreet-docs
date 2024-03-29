---
title: "Creating novel 3D scenes by compositing Gaussian splats with A-Frame and three.js"
description: We share research and progress on improving the visual appearance of compositing new scenes from multiple splats using depth buffer and selective splat discarding. 
authors: [kfarr, amougin]
tags: [gaussian splats, splats, photogrammetry]
image: ./splat-blog/3dstreet-splat-compositing-demo.jpg
hide_table_of_contents: false
---

# Gaussian splats are ground-breaking visualization technology

3DStreet's mission is to empower anyone to visualize safer streets. A common request to support this mission is to bring in local real-life elements from your actual streets by scanning them into 3D objects. Until now, the best technology for doing this (photogrammetry to textured 3D polygons) resulted in huge file sizes, difficult to edit output files, and gooey visuals like melting trees or cars that you may see on Google Maps in 3D mode.

Enter Gaussian Splatting -- earlier this year a groundbreaking photogrammetry and visualization technique called gaussian splatting was released as part of a [research paper published at SIGGRAPH 2023](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/). I believe splatting to be *[the best modern method](https://www.youtube.com/watch?v=HVv_IQKlafQ)* to allow everyday users like you and me to scan 3D objects with our phones and retain the fine detail of organic material especially [plants](https://www.youtube.com/watch?v=lowscL9YIjM), [trees](https://www.youtube.com/watch?v=hr7P8_z0PSk), flowers and other natural elements -- all things we'd like to see more of in our streets! 

![Side by side picture of the same apple tree showing 3d mesh vs. gaussian splat photogrammetry techniques](./splat-blog/3d-mesh-vs-splat.jpg)

This is still an R&D project, not yet a supported built-in feature of 3DStreet. In this post we share research and progress on how we are improving the visual appearance of compositing new scenes from multiple splats using depth buffer and selective splat discarding in three.js and A-Frame, underlying 3D frameworks supporting 3DStreet.

<!-- truncate -->

# A splatting explosion!
A slew of gaussian splat tools have come to market -- creation apps for 3D scanning with your phone ([Polycam](https://poly.cam/) and [Luma](https://lumalabs.ai/)) and viewers for every platform and device imaginable ([too many to list](https://github.com/tomiwaAdey/awesome-gaussian-splatting?tab=readme-ov-file#rendering-and-visualisation-tools)) and even [browser-based cropping and editing tools](https://playcanvas.com/super-splat).

However, much of the existing gaussian splat research and development focuses on scenes with just one single large splat.

With 3DStreet we're exploring something new -- constructing brand new street scenes from bits and pieces of existing 3D splats.

# The problem: multiple splats in three.js are Hard
If we can draw one gaussian splat in our scene, why not more? Well it turns out it's Hard. Compositing wasn’t supported yet by the existing three.js / A-Frame splat viewing libraries so it resulted in things just not good enough for people to use as a product, like this fire hydrant and tree being occluded by a flower box further away.

![Picture of error in splat ordering resulting in distant objects incorrectly occluding closer objects](./splat-blog/splat-render-order-error.jpg)

To solve this problem, we collaborated with [Arthur Mougin, a WebXR and full stack developer](https://arthurmoug.in/) who was excited to tackle a new challenge. Here is his writeup on how we enabled proper splat sorting, concluded by some discussion on what is coming next.

# Use depth buffer with `depthWrite:true`
After analyzing the shader and rendering pipeline of threejs, we identified first that we needed to have proper scene-level occlusion.

At the scene level, Splats are just classic opaque objects with a unique drawing method. That’s great because we can take advantage of the depth buffer. It’s a grayscale image that shaders use to know if their pixel below or above something that was already painted. By default, splats did not write into it, causing strange artifacts when the draw order does not match the depth order. Same thing for recursive occlusion. 

So, we [added the ability to write the rendered splats to the depth buffer](https://github.com/3DStreet/aframe-gaussian-splatting/pull/1/commits/dfa56ea471749e4864bfdedfcdd9c7c4aac9a656) with `depthWrite:true`. Turning it on improved our occlusion issues drastically. 

![partial-splat-compositing-progress-occlusion-with-artifacts](./splat-blog/partial-splat-compositing-progress-occlusion-with-artifacts.jpg)

# Fixing border and edge blending issues
Sometimes the border is not completely clean, we also wanted a way to improve it. 

It was done this time in the fragment shader, where discarding cause the pixel not to be drawn. [We compare there for each blob’s pixel their opacity, and if it’s lower than our limit, it’s not rendered.](https://github.com/3DStreet/aframe-gaussian-splatting/pull/1/commits/00d11e42f41a2adea824008ad81283001192176a)

This limit, the discard filter, has no effect when set to 0, but help cleanup unnecessary blobs that could ruin a proper transition between two splats. As it applies to all splat’s blobs, turning it on will impact the splats quality.

![gaussian-splat-depth-write-true-false-comparison](./splat-blog/gaussian-splat-depth-write-true-false-comparison.jpg)

Unfortunately there is a trade off between different methods. As you can see in this next example below. On the right is the test scene with the original A-Frame splatting component that does not respect occlusion. On the left uses depthWrite which properly sorts the occlusion of the tree, fire hydrant, and flower box, but also results in artifacts especially visible on the bottom of the flower box where it meets the sidewalk.

![splat-compare-discard-filter-0-and-0.2](./splat-blog/splat-compare-discard-filter-0-and-0.2.jpg)

Adjusting `discardFilter` gives you control to find the right value, however as you continue to increase the `discardFilter` value approaching 1 the splats start to develop holes in the substrate and appear to be further apart.  

![splat-compare-discard-filter-0.1-and-0.3](./splat-blog/splat-compare-discard-filter-0.1-and-0.3.jpg)

A partially effective mitigation for the artifacts is to tightly crop your splats using a tool like [SuperSplat from PlayCanvas](https://playcanvas.com/super-splat).

# Updating the `aframe-gaussian-splatting` repository
In the past we have been contributing changes directly to the [original A-Frame Gaussian Splat library by quadjr](https://github.com/quadjr/aframe-gaussian-splatting), and [Arthur has suggested a PR with these changes](https://github.com/quadjr/aframe-gaussian-splatting/pull/25), but we wanted to publish this piece before those are able to merged so we have forked this repo in the 3DStreet GitHub organization for now.

#### GitHub: https://github.com/3dstreet/aframe-gaussian-splatting

#### Demo scene (move around with `WASD` keys): https://3dstreet.github.io/splat-playground/basic/compositing-demo.html

#### Demo scene source (also uses cutout entity): https://github.com/3DStreet/splat-playground/blob/main/basic/compositing-demo.html 

# Combining rasterization methods to add splats to 3DStreet scenes
Now that we have support in the library for splat compositing, it's time to test what these look like in 3DStreet scenes.

We created a sample scene that loads a 3DStreet street scene with manually placed splat entities placed around the scene in appropriate locations. This was a first attempt to see how well the splats might fit in to a scene and what changes we need to make to 3DStreet Editor to support managing these with a user interface.

This picture shows a side-by-side view of the splat and low-poly mesh counterparts for the hybrid sedan and bus stop.
![3dstreet-splat-compositing-demo](./splat-blog/3dstreet-splat-compositing-demo.jpg)

Since each of these splats are A-Frame entities, the 3DStreet Editor can provide a quick way to move them around and arrange a custom scene.
![3dstreet-editor-changing-scene-compositing-gaussian-splat](./splat-blog/3dstreet-editor-changing-scene-compositing-gaussian-splat.jpg)

# Try it for yourself

We've created a proof of concept demo showing splats that I have scanned around San Francisco, combined with polygon mesh models automatically created from 3DStreet.

__Example scene (move around with `WASD` keys): https://github.com/3DStreet/splat-playground/__

:::warning

Gaussian Splats in 3DStreet is a research project. Sometimes you need to reload once or twice for the splats to look better. If you're really adventurous press ctl + alt + i to access Editor but saving these scenes won't work and it will probably break. Be careful using this for real projects.

:::

Does it work in WebXR? Yes, barely -- it requires a powerful device to maintain frame rate. Quest headsets and older phones have a hard time rendering this at full framerate.

# What's next
This is still a research technology. Even just in the past week there was a [whole new WegGL splat viewing library released by Luma AI](https://lumalabs.ai/luma-web-library) and more research on this topic seems to drop every week. Likely the method that we've come up with will be replaced with a fancy new algorithm soon.

We'll keep iterating on the applications of this technology for street safety and more general urban design use cases. If this resonates with users we can explore how to make this accessible so that all users can create custom splat scenes with models they scan from their own streets.

[Join our community to continue the conversation!](https://discord.gg/VN242sx9qu)

# Video version of this post
<iframe width="580" height="420" src="https://www.youtube.com/embed/Fy8PefDy5VY?si=pJ7F6j_mmmA2yo31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
