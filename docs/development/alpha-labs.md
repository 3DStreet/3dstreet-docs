---
sidebar_position: 3
---

# 3DStreet Alpha Labs

Check out some of our Alpha Labs features below -- these are features that are ready for testing and user feedback, but not ready for prime time. Try them out (with caution) and tell us how well they work and what we can do to make them better.

:::warning

Save a backup of your scene before trying these "Alpha Labs" experiments. 3DStreet is a [Beta product](https://www.3dstreet.org/docs/3dstreet-editor/saving-and-loading-scenes#beta-software) that may have bugs, and these Alpha Labs components are more likely to have bugs that could break your 3DStreet scene or prevent it from saving or loading.

:::

## SVG Extruder Component

This component accepts a `svgString` and creates a new entity with geometry extruded from the svg and applies the default mixin material grass.

```
newEl = document.createElement('a-entity')
newEl.setAttribute('svg-extruder', `svgString: <svg id="traffic-circle-svg" width="1562" height="1722" viewBox="0 0 1562 1722" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="747" cy="884" r="376" fill="white"/>
            <path d="M170 921C110.447 960.339 73.1658 978.46 0 1004L24 1070.5C87.6715 1053.2 126.721 1054.53 200.5 1070.5C180.691 1013.73 173.793 981.04 170 921Z" fill="white"/>
            <path d="M920.5 16.5L873 0C826.761 111.5 798.791 179.933 747 307.5C818.049 307.14 904.5 334 904.5 334C896.322 273.342 871.658 119.714 920.5 16.5Z" fill="white"/>
            <path d="M1562 797C1475.23 805.17 1419.94 800.652 1310 777C1322.14 822.934 1324.73 853.264 1326 911C1426.16 863.684 1479.82 844.12 1562 847V797Z" fill="white"/>
            <path d="M832 1467C782.879 1472.52 753.742 1472.69 697 1467C729.414 1550.35 751.819 1619.31 761 1722H803.5C806.545 1646.07 790.668 1543.99 832 1467Z" fill="white"/>
        </svg>`)
newEl.setAttribute('data-layer-name', 'SVG Path • My Custom Path')
parentEl = document.querySelector('#street-container')
parentEl.appendChild(newEl)
```

## Mapbox Aerial Imagery

This component accepts a long / lat and renders a plane with dimensions that (should be) at a correct scale.

```
newEl = document.createElement('a-entity')
newEl.setAttribute('geometry', 'primitive: plane; width: 512; height: 512;')
newEl.setAttribute('rotation', '-90 0 0')
newEl.setAttribute('mapbox', 'center: -122.417490, 37.765190; zoom: 18; accessToken: pk.eyJ1Ijoia2llcmFuZmFyciIsImEiOiJjazB0NWh2YncwOW9rM25sd2p0YTlxemk2In0.mLl4sNGDFbz_QXk0GIK02Q; style: mapbox://styles/mapbox/satellite-streets-v11; pxToWorldRatio: 4;')
newEl.setAttribute('data-layer-name', 'Aerial Imagery • Mapbox Satellite')
parentEl = document.querySelector('#reference-layers')
parentEl.appendChild(newEl)
```

## Custom glTF Model

This component accepts a path for a glTF (or glb) file hosted on any publicly accessible HTTP server.

```
newEl = document.createElement('a-entity')
newEl.setAttribute('gltf-model', 'url(https://cdn.glitch.global/690c7ea3-3f1c-434b-8b8d-3907b16de83c/Mission_Bay_school_low_poly_model_v03_draco.glb?v=1709051557725)')
newEl.setAttribute('data-layer-name', 'glTF Model • My Custom Object')
parentEl = document.querySelector('#street-container')
parentEl.appendChild(newEl)
```

## Add Streetmix Street Non-Destructively

This code snippet allows the creation of an additional Streetmix street in your 3DStreet scene without replacing any existing streets.

```
newEl = document.createElement('a-entity')
newEl.setAttribute('streetmix-loader', 'streetmixStreetURL: https://streetmix.net/kfarr/128/owens-st')
parentEl = document.querySelector('#street-container')
parentEl.appendChild(newEl)
```

## Add a Primitive Geometry from A-Frame

This code snippet allows the creation of an [arbitrary geometry shapes from this list](https://aframe.io/docs/1.5.0/components/geometry.html).

```
newEl = document.createElement('a-entity')
newEl.setAttribute('geometry', 'primitive: circle; radius: 50;')
newEl.setAttribute('rotation', '-90 0 0')
newEl.setAttribute('data-layer-name', 'Plane Geometry • Traffic Circle Asphalt')
newEl.setAttribute('material', 'src: #asphalt-texture; repeat: 5 5;')
parentEl = document.querySelector('#street-container')
parentEl.appendChild(newEl)
```