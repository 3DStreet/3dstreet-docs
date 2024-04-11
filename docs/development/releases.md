---
sidebar_position: 1
---

# Product Releases

## [3DStreet Core 0.4.14](https://github.com/3DStreet/3dstreet/releases/tag/0.4.14) - 11 Apr 2024
* Update svg component to fix unexpected material color behavior
* Initial support for importing streetplan.net streets

## [3DStreet Editor 0.4.13](https://github.com/3DStreet/3dstreet-editor/releases/tag/0.4.13) - 29 Mar 2024
* Add categories for mixin list in right panel
* Fix button label styling for smaller width devices
* feat(ga): added save scene actions and new account creation
* add no pause attribute support and camera fix for 3d tiles
* use logarithmicDepthBuffer to reduce z-fighting

## [3DStreet Core 0.4.12](https://github.com/3DStreet/3dstreet/releases/tag/0.4.12) - 28 Mar 2024
* Update svg component with second material support for custom path bevels
* Support for Google Maps 3D Tiles component (v1 for testing only)

## [3DStreet Core 0.4.11](https://github.com/3DStreet/3dstreet/releases/tag/0.4.11) - 6 Mar 2024
* Support new Streetmix metric API responses (schema 30+)
* Create `notify` warning to user when segments or variants are not supported

## [3DStreet Editor 0.4.10](https://github.com/3DStreet/3dstreet-editor/releases/tag/0.4.10) - 26 Feb 2024
* Use json-utils functions from global STREET.utils
* Update to 3dstreet latest 0.4.9 to support some of the new alpha labs features like svg import, new cable car vehicle, updated mapbox support, user-specified textures

## [3DStreet Core 0.4.9](https://github.com/3DStreet/3dstreet/releases/tag/0.4.9) - 26 Feb 2024
* Bug fixes for custom svg features encountered with saving and loading scenes
* New cable car for trolley segment type
* Lazy load transit vehicles (approx 300KB reduction in scene load if no transit vehicles used in scene)

## [3DStreet Core 0.4.8](https://github.com/3DStreet/3dstreet/releases/tag/0.4.8) - 23 Feb 2024
* [Some cool new Alpha Labs features](https://www.3dstreet.org/docs/development/alpha-labs)! But not released in Editor yet.
* Aerial imagery from Mapbox
* Import custom svg paths
* Allow saving user-specified textures
* Continue to refactor for STREET global

## [3DStreet Editor 0.4.7](https://github.com/3DStreet/3dstreet-editor/releases/tag/0.4.7) - 21 Feb 2024
* New feature: Open community scene browser when loading blank scene. The rest are bug fixes and refactoring.
* CSS refactoring and storybook init, [first half of CSS improvement epic](https://github.com/3DStreet/3dstreet-editor/issues/314)
* Usability improvements: fix incorrect bounding box for some objects, fix critical boolean widget bug, remove various console errors, fix NaN in number widget error
* [Save / load usability improvements](https://github.com/3DStreet/3dstreet-editor/issues/364): fix various bugs relating to thumbnail, title and scene graph saving resulting in unexpected behavior in open modal
* Start refactoring for Editor to call 3DStreet core methods from STREET global
* Pin 3DStreet core library to specific version (starting with 0.4.6) to prevent breaking changes on production while introducing new core features

## [3DStreet Core 0.4.6](https://github.com/3DStreet/3dstreet/releases/tag/0.4.6) - 5 Feb 2024
* This is a bug fix and maintenance release.
* Fix issues with scene loading and changing component attributes dynamically
* Fix issue with selecting tram and foodtruck elements
* Fix hash marks texture in divider segment
* support for new fire ladder truck model
* various mapbox demo updates (but not ready for production use yet)

## [3DStreet Core 0.4.5](https://github.com/3DStreet/3dstreet/releases/tag/0.4.5) - 8 Dec 2023
* Mostly hotfixes and bugfixes to [0.4.4](#3dstreet-core-044) such as fixing error saving scenes caused by default value of component properties not found; fixing display name of streets and segments by changing colon to bullet, therefore preventing interpretation of strings intended for display to user as being interpreted as attribute:value pairs. 
* Add animations for people on bicycles and some scooters
* Fix logo size for on overlay
* Fix disappearing helpers in "Share scene" window
* Fix bug of not-animated characters grouped at Z center
* Notify methods in global STREET object
* save grouped assets in the attribute of street-assets element

## [3DStreet Core 0.4.4](https://github.com/3DStreet/3dstreet/releases/tag/0.4.4) - 30 Nov 2023
* Completion of big [creator usability epic](https://github.com/3DStreet/3dstreet/issues/358)
* Significant visual improvements to environment (sky and lighting)
* Now choose from 8 different environment presets, each with a unique sky with matching lighting conditions impacting shadows, reflections and color tone: 'day', 'night', 'color', 'sunny-morning', 'cloudy-afternoon', 'sunny-afternoon', 'sunny-noon', 'foggy', 'cloudy'. Choose 'color' to specify your own background color.
* Upgrade A-Frame 1.5 to take advantage of new reflection component, global anisotropy setting for crisper paint striping and finer ground details, and help prepare for upcoming AR and hand tracking features
* new ocean
* shorter default street length 60m instead of 150m
* major refactor of creating 3d segments from json source: grounds underneath street segments and underneath buildings or lots, accurate x position and box widths instead of arcane x scale, using nicer display names for segments to make browsing in scene graph easier, fix elevation support
* randomize item placement, more, accurate rail widths (standard gauge and sf cablecar gauge)

## [3DStreet Editor 0.4.3](https://github.com/3DStreet/3dstreet-editor/releases/tag/0.4.3) - 27 Nov 2023
* Completion of big [save / load v2 epic](https://github.com/3DStreet/3dstreet-editor/issues/259)
* Huge speed improvement in open dialog, especially browsing community scenes
* Scene titles are now editable in scene and open modal
* New scene thumbnails
* New capture and share modal
* Fixing [save as instead of save bug](https://github.com/3DStreet/3dstreet-editor/issues/307)
* Updated styles and new default scene card, and more!

## [3DStreet Core 0.4.2](https://github.com/3DStreet/3dstreet/releases/tag/0.4.2) - 12 Nov 2023
* Internal release and bugfixes prior to 0.4.3 release (no new user-facing features)
* metadata component for title and sceneId v1
* notification framework v1
* STREET global v1
* screenshot updates (add to viewer entity)
* Modern VR UI controls (second try since long ago, but v1 for blink controls)
* bugfixes for save / load: mapbox, intersection, not storing extra street json

## [3DStreet Core 0.4.1](https://github.com/3DStreet/3dstreet/releases/tag/0.4.1) - 8 Aug 2023
* v2 local save / load - bugfixes + support environment and reference layers
* ability to load 3DStreet json file from third-party path (precursor to cloud)
* v1 of lazy loading assets to reduce upfront scene loading time

## [3DStreet Core 0.4.0](https://github.com/3DStreet/3dstreet/releases/tag/0.4.0) - 9 Jul 2023
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
