---
sidebar_position: 1
---

# Product Releases

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