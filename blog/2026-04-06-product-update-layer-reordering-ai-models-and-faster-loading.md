---
title: "Product Update: Layer Reordering, AI Model Upgrades, and Faster Loading"
description: A roundup of 3DStreet updates since February 2026 including layer reordering in the scene graph, next-generation AI models for image and video, faster app loading, autosave on share, expanded StreetPlan integration, and more.
authors: [kfarr]
tags: [product update, layer reordering, AI generation, StreetPlan, performance, new features]
image: ./images/2026-04-06/hero.webp

---

# Product Update: Layer Reordering, AI Model Upgrades, and Faster Loading

Since our last product update in February, we've been focused on one of the most-requested editor features, a major round of AI model upgrades, and a set of performance improvements that make the app noticeably faster to use. Here's what's new.

![Product update hero](./images/2026-04-06/hero.webp)

<!-- truncate -->

## Layer Reordering in the Scene Graph

This has been one of our most-requested features: you can now **drag and drop layers above and below managed streets** in the scene graph panel. Previously, layers were locked in their creation order, which made it difficult to organize complex scenes. Now you can reorder elements freely to match your intended layout, making it much easier to manage scenes with multiple streets, intersections, and standalone objects.

## Next-Generation AI Models

We've upgraded nearly every AI model powering the [3DStreet image and video generators](https://3dstreet.app/generator). If you haven't tried AI rendering in a while, now is a great time -- quality is noticeably better and video generation is dramatically faster.

* **Veo 3.1 Fast** is now the default video model, generating results in roughly 60 seconds instead of the previous 6+ minutes
* **Kling 3 Pro** replaces Kling 2.5 for video generation
* **SeedReam 4.5** and **Nano Banana Pro** are the new default image models
* **Wan 2.6** and **Gemini Flash 3** round out the image model upgrades
* **BFL Pro** now powers the 4x upscaling pipeline for better price-to-quality ratio

We've also introduced per-model token pricing so you can see exactly what each generation costs before you run it. Estimated generation times are now calibrated from three months of real-world API data across nearly 900 predictions, so the progress indicators are much more accurate.

## Faster App Loading

We've made a significant improvement to how quickly the editor becomes usable after signing in. Previously, the app waited for multiple cloud calls to complete before showing anything -- this could take 2-5 seconds or more on slower connections.

Now the editor uses a **two-phase authentication** approach: Phase 1 shows the UI immediately using cached auth state (~100ms), and Phase 2 verifies your account and loads token data in the background. The result is that the editor feels nearly instant on repeat visits.

We've also added a **scene loading indicator** so you get visual feedback when loading scenes from the cloud, instead of staring at an empty viewport wondering if anything is happening.

## Autosave on Snapshot and Share

Your scene and camera position are now **automatically saved when you take a screenshot or share a link**. This means the person on the other end always sees your latest changes from the exact camera angle you intended -- no more forgetting to save before sharing.

## Expanded StreetPlan Integration

Our partnership with [StreetPlan](https://streetplan.net) continues to deepen with significantly improved import fidelity:

* **Parking vehicles** now render correctly in 3D, including angle parking configurations
* **Gutter segments** have been added to the asset catalog for more accurate curb-to-road transitions
* **Improved street labels and segment names** for better visual mapping between StreetPlan designs and 3DStreet scenes
* **New asset mappings** for multi-story buildings, bikes, rail transit vehicles, and pickup trucks

Thanks as always to Mike and the StreetPlan team for their continued collaboration.

## Elevation and Curb Improvements

We've cleaned up how elevation works across street segments:

* **Unified curb height** calculations across all segment types for consistent sidewalk-to-road transitions
* **Negative curb levels** are now supported, enabling sunken lanes and drainage channels
* Fixed elevation calculation bugs that could cause visual artifacts at segment boundaries

## Improved 3D Gaussian Splat Support

For those working with 3D-scanned environments, we've upgraded our Gaussian splat support:

* **Streaming .rad file support** -- splat files can now be loaded via URL parameter, enabling faster loading of large scanned environments
* Upgraded to the official **Spark v2.0.0 preview** library
* Fixed raycast errors that could occur while splat meshes were still loading

## Quality of Life

A handful of smaller improvements that add up:

* **Exported .json files** now use your scene title as the filename
* **4x AI render** now shows a "sending" status while the API call is in progress, so you know it's working
* **Menu fade delay removed** for snappier UI interactions
* AI function call tracking for better feedback analysis when you rate AI responses

## Under the Hood

* ESLint upgraded to v9 with flat config
* Cloud Functions upgraded to Node 22
* Auth cache corruption and logout race condition fixes
* Multiple dependency security updates

## What's Next

*[placeholder -- add upcoming features, events, or webinar details here]*
