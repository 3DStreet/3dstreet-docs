---
sidebar_position: 3
---

# 3DStreet Alpha Labs

Check out some of our Alpha Labs features below -- these are features that are ready for testing and user feedback, but not ready for prime time. Try them out (with caution) and tell us how well they work and what we can do to make them better.

:::warning

Save a backup of your scene before trying these "Alpha Labs" experiments. 3DStreet is a [Beta product](https://www.3dstreet.org/docs/3dstreet-editor/saving-and-loading-scenes#beta-software) that may have bugs, and these Alpha Labs components are more likely to have bugs that could break your 3DStreet scene or prevent it from saving or loading.

:::

## Resizing a street

1) Add a new street from Streetmix using the Pro add entity panel
2) Select the parent layer of that new street
3) In the right-hand properties panel, scroll down to find the `Length` property. Change the value to your new street length (in meters) 
4) Click "synchronize" to see your settings change. (If synchronize is already true set to on, turn if off and on again) 

![Screenshot of editor changing street length.](/img/docs/alpha/edit-street-length.jpg)


## Adding and editing an intersection

1) Add a new Intersection using the Pro add entity bottom panel. The Intersection will instantiate with default settings
2) In the Layers left panel select the new "Intersection 90º" layer you created
3) Open the right-hand panel and scroll down to "Intersection" and click the down arrow

![Screenshot of editor adding, selecting and editing intersection.](/img/docs/alpha/add-edit-intersections.jpg)

4) Modify these following properties to adjust the intersection to match your scene conditions.

| Property | Description | Default Value |
| --------- | --------- | --------- |
| dimensions | Specifies the width and depth of the intersection. First value represents width, second value represents depth. | '20 20' |
| sidewalk | Sets the width of the sidewalk at each side of the intersection. Values are set in the order of west, east, north, south. |  '0 0 0 0' |
| northeastcurb | Sets the curb dimensions for the north east curb. Values are updated as width, then depth. | '4 4' |
| southwestcurb | Sets the curb dimensions for the south west curb. Values are updated as width, then depth.  | '4 4' |
| southeastcurb | Sets the curb dimensions for the south east curb. Values are updated as width, then depth. | '4 4' |
| northwestcurb | Sets the curb dimensions for the north west curb. Values are updated as width, then depth. | '4 4' |
| stopsign | Sets if each side of the intersection has a stop sign. Values are set in the order of east, west, north, south. 0 is false, 1 is true. | '0 0 0 0' |
| trafficsignal | Sets if each side of the intersection has a traffic signal. Values are set in the order of east, west, north, south. 0 is false, 1 is true. | '1 1 1 1' |
| crosswalk | ​​Sets if each side of the intersection has a crosswalk. Values are set in the order of east, west, north, south. 0 is false, 1 is true. | '1 1 1 1' |

## SVG Extrusion Component

3DStreet SVG import is designed to accept 1 closed path or geometry at a time in a simple SVG format. This component accepts a `svgString` and creates a new entity with geometry extruded from the svg and applies the default mixin material grass. Extrusion can help to emulate the look of curbs and other surfaces. This method requires separates SVG imports for different parts of a scene.

## Add an image

This code snippet creates a plane geometry with a user specified image path. 

Replace the https://... part to a publicly accessible HTTPS URL pointing to your image. We recommend [glitch.com](https://glitch.com/) as a great web host for assets like this but any host that provides a public URL path is fine.

```
newEl = document.createElement('a-entity')
newEl.setAttribute('geometry', 'primitive: plane; height: 10; width: 10;')
newEl.setAttribute('rotation', '-90 0 0')
newEl.setAttribute('data-layer-name', 'Image • User Specified Path')
newEl.setAttribute('material', 'src: url(https://cdn.glitch.global/a72f8f09-9d40-4560-8b00-a9481850c5e9/3D.St%20stacked%20icon.png?v=1717710211486);')
parentEl = document.querySelector('#street-container')
parentEl.appendChild(newEl)
```