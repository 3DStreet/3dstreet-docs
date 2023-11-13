---
sidebar_position: 2
---

# Git Repositories
3DStreet is made up of 4 key repositories:

| Name | Repository & Endpoint | Description | 
| --------- | -- |-- |
| Core Parser & Viewer | GitHub: [3DStreet/3dstreet](https://github.com/3DStreet/3dstreet) <br /> Endpoint: https://github.3dstreet.org | A-Frame app to create 3D entities from 3DStreet scene file or Streetmix API response. Also creates basic environment and viewer controls. | 
| Editor | GitHub: [3DStreet/3dstreet-editor](https://github.com/3DStreet/3dstreet-editor) <br /> Endpoint: https://3dstreet.app | React-based interactive scene graph browser, interactive editor, and entity component property editor. | 
| Assets | GitHub: [3DStreet/3dstreet-assets-source](https://github.com/3DStreet/3dstreet-assets-source) <br /> GitHub: [3DStreet/3dstreet-assets-dist](https://github.com/3DStreet/3dstreet-assets-dist) <br /> Endpoint: https://assets.3dstreet.app | All original source files for 3DStreet 3D models including Blender source code as well as converted output for distribution. | 
| Docs & Website | GitHub: [3DStreet/3dstreet-docs](https://github.com/3DStreet/3dstreet-docs) <br /> Endpoint: https://3dstreet.org | This documentation site as well as 3dstreet.org index page. | 


### Future docs topics

- Contributing for Developers (for Kieran)
    - Architecture
    - Repositories
    - Contributing Instructions (issue, PR, testing, etc.)
- Anatomy of `3DStreet` core repo index.html (script imports a-frame and components, viewer UI, street parser ...)