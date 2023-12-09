---
sidebar_position: 1
---

# Product Releases

## [3DStreet Core 0.4.5](https://github.com/3DStreet/3dstreet/releases/tag/0.4.5)
* Mostly hotfixes and bugfixes to [0.4.4](#3dstreet-core-044) such as fixing error saving scenes caused by default value of component properties not found; fixing display name of streets and segments by changing colon to bullet, therefore preventing interpretation of strings intended for display to user as being interpreted as attribute:value pairs. 
* Add animations for people on bicycles and some scooters
* Fix logo size for on overlay
* Fix disappearing helpers in "Share scene" window
* Fix bug of not-animated characters grouped at Z center
* Notify methods in global STREET object
* save grouped assets in the attribute of street-assets element

## [3DStreet Core 0.4.4](https://github.com/3DStreet/3dstreet/releases/tag/0.4.4)
* Completion of big [creator usability epic](https://github.com/3DStreet/3dstreet/issues/358)
* Significant visual improvements to environment (sky and lighting)
* Now choose from 8 different environment presets, each with a unique sky with matching lighting conditions impacting shadows, reflections and color tone: 'day', 'night', 'color', 'sunny-morning', 'cloudy-afternoon', 'sunny-afternoon', 'sunny-noon', 'foggy', 'cloudy'. Choose 'color' to specify your own background color.
* Upgrade A-Frame 1.5 to take advantage of new reflection component, global anisotropy setting for crisper paint striping and finer ground details, and help prepare for upcoming AR and hand tracking features
* new ocean
* shorter default street length 60m instead of 150m
* major refactor of creating 3d segments from json source: grounds underneath street segments and underneath buildings or lots, accurate x position and box widths instead of arcane x scale, using nicer display names for segments to make browsing in scene graph easier, fix elevation support
* randomize item placement, more, accurate rail widths (standard gauge and sf cablecar gauge)

## [3DStreet Editor 0.4.3](https://github.com/3DStreet/3dstreet-editor/releases/tag/0.4.3)
* Completion of big [save / load v2 epic](https://github.com/3DStreet/3dstreet-editor/issues/259)
* Huge speed improvement in open dialog, especially browsing community scenes
* Scene titles are now editable in scene and open modal
* New scene thumbnails
* New capture and share modal
* Fixing [save as instead of save bug](https://github.com/3DStreet/3dstreet-editor/issues/307)
* Updated styles and new default scene card, and more!

## [3DStreet Core 0.4.2](https://github.com/3DStreet/3dstreet/releases/tag/0.4.2)
* Internal release and bugfixes prior to 0.4.3 release (no new user-facing features)
* metadata component for title and sceneId v1
* notification framework v1
* STREET global v1
* screenshot updates (add to viewer entity)
* Modern VR UI controls (second try since long ago, but v1 for blink controls)
* bugfixes for save / load: mapbox, intersection, not storing extra street json

## [3DStreet Core 0.4.1](https://github.com/3DStreet/3dstreet/releases/tag/0.4.1)
* v2 local save / load - bugfixes + support environment and reference layers
* ability to load 3DStreet json file from third-party path (precursor to cloud)
* v1 of lazy loading assets to reduce upfront scene loading time

## [3DStreet Core 0.4.0](https://github.com/3DStreet/3dstreet/releases/tag/0.4.0)
* v1 local save / load & right-hand "viewer" menu to load scenes
* asset updates and updates to `street` and `intersection` components preparing for [Loud Bicycle Game](https://loudbicycle.com/game)
* v1 animation of some objects like cars or people (with flag)

## Developer notes for maintainers
### Release checklist
Combined 3DStreet core + Editor release checklist. (Copy paste this markdown for a new release issue.)

 - [ ] [Complete the release checklist for core](https://github.com/3DStreet/3dstreet/blob/main/CONTRIBUTING.md#release-checklist-for-this-repo)
 - [ ] [Complete release checklist for editor](https://github.com/3DStreet/3dstreet-editor/blob/master/README.md#deployment-instructions)
 - [ ] Complete editor deploy
 - [ ] Smoke test on production 😬
 - [ ] Then share release notes on this doc above
 - [ ] Share announcement on social media, email newsletter, etc