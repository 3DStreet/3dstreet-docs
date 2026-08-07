---
sidebar_label: 'Custom SVG Geometry'
sidebar_position: 8
---

# Creating Custom Geometry with SVG

3DStreet allows you to import custom SVG paths from design tools like Figma and convert them into 3D extruded geometry. This is useful for creating custom road markings, paint lines, curbs, and other street elements that aren't available in the standard model library.

## Overview

The SVG extrusion workflow involves three main steps:
1. **Design** your geometry in Figma or another vector design tool
2. **Export** the SVG code
3. **Import** into 3DStreet using the `svg-extruder` component

## Part 1: Creating SVGs in Figma

### Setting Up Your Design

1. **Open Figma** and create a new file or frame
2. **Plan your dimensions**: Consider that Figma units will be scaled to match 3DStreet's meter-based coordinate system (typically using a scale factor like 0.05)
3. **Design on a flat plane**: Remember that your 2D design will be extruded into 3D

### Design Guidelines

#### Best Practices for SVG Geometry

- **Use closed paths** for solid shapes that will be extruded
- **Keep it simple**: Complex paths with many curves may not extrude properly
- **Avoid rings or holes**: SVG paths with holes inside can cause issues with extrusion
- **Use vector shapes**: Don't use raster images or text unless converted to outlines
- **Think about scale**: Design at a reasonable size that you can scale down in 3DStreet

#### Common Use Cases

**Road Markings and Paint Lines:**
- Crosswalks
- Bike lane markings
- Arrow symbols
- Stop lines
- Parking space dividers

**Curbs and Edges:**
- Custom curb geometries
- Median shapes
- Planter edges

**Surfaces:**
- Custom sidewalk shapes
- Plaza patterns
- Parking lot layouts

### Creating Road Markings Example

Let's create a simple crosswalk marking:

1. Select the **Rectangle tool** (R)
2. Draw multiple rectangles to form crosswalk stripes
3. **Combine** the shapes if desired (Right-click → Flatten Selection)
4. Name your layer descriptively (e.g., "crosswalk-stripes")

### Exporting from Figma

1. **Select** the layer or frame containing your design
2. In the right sidebar, scroll to the **Export** section
3. Click the **+** button to add an export option
4. Choose **SVG** as the format
5. Click **Export** and save the file

### Getting the SVG Code

After exporting your SVG file:

1. Open the `.svg` file in a text editor (like VS Code, Notepad, or TextEdit)
2. **Copy the entire SVG code** - it should look something like this:

```xml
<svg width="200" height="50" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0H40V50H0V0Z" fill="#FFFFFF"/>
  <path d="M50 0H90V50H50V0Z" fill="#FFFFFF"/>
  <path d="M100 0H140V50H100V0Z" fill="#FFFFFF"/>
  <path d="M150 0H190V50H150V0Z" fill="#FFFFFF"/>
</svg>
```

## Part 2: Using SVG in 3DStreet

### Adding the SVG Extruder Component

The `svg-extruder` component is an A-Frame component that takes your SVG code and converts it into 3D geometry.

#### Component Properties

| Property | Description | Example Value |
|----------|-------------|---------------|
| `svgString` | Complete SVG markup code | `<svg>...</svg>` |
| `scale` | Scale factor to fit scene dimensions | `0.05` (typical) |
| `elevation` | Height/vertical position | `0.015` |
| `depth` | Extrusion depth (thickness) | `0.05` |
| `material` | Material/texture type | `sidewalk`, `asphalt`, `grass`, `concrete`, `blueprint` |

### Method 1: Using the Properties Panel (Recommended)

1. **Add a new entity** in the 3DStreet Editor
2. **Select the entity** to open the properties panel
3. Click **"Show Advanced"** to reveal all component properties
4. **Add a new component**: Type `svg-extruder` in the component search
5. **Paste your SVG code** into the `svgString` property
6. **Adjust the scale**: Start with `0.05` and adjust until it fits your scene
7. **Set elevation**: Match the height of other street elements (e.g., `0.015` for ground level)
8. **Choose a material**: Select from `sidewalk`, `asphalt`, `grass`, `concrete`, or `blueprint`

### Method 2: Using JSON Scene Format

You can also add the svg-extruder component directly in your scene's JSON file:

```json
{
  "entity": {
    "components": {
      "svg-extruder": {
        "svgString": "<svg width=\"200\" height=\"50\" viewBox=\"0 0 200 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0H40V50H0V0Z\" fill=\"#FFFFFF\"/></svg>",
        "scale": 0.05,
        "elevation": 0.015,
        "depth": 0.05,
        "material": "asphalt"
      },
      "position": {
        "x": 0,
        "y": 0,
        "z": 0
      }
    }
  }
}
```

### Adjusting Your SVG Geometry

#### Scale

The scale property is crucial for making your Figma design fit the 3DStreet scene:

- **Too large?** Decrease the scale value (e.g., from `0.05` to `0.03`)
- **Too small?** Increase the scale value (e.g., from `0.05` to `0.08`)
- **Starting point**: Try `0.05` first, then adjust as needed

#### Elevation

Elevation controls the vertical position (Y-axis) of your geometry:

- **Ground level markings**: `0.015` (slightly above ground to prevent z-fighting)
- **Raised curbs**: `0.1` to `0.2`
- **Match existing segments**: Use the same elevation as nearby street segments

#### Position

Use the standard position properties to place your SVG geometry:

- **X-axis**: Left/right position
- **Y-axis**: Up/down position (or use elevation property)
- **Z-axis**: Forward/backward position

Use the Move Tool in the editor to visually position your geometry.

#### Rotation

Rotate your geometry using the Rotate Tool or rotation properties:

- **Y-axis rotation** (yaw): Most common for rotating flat markings
- Remember to rotate around the center point of your geometry

## Materials and Textures

The `svg-extruder` component supports several material types that match existing 3DStreet segment textures:

### Available Materials

- **`sidewalk`**: Concrete sidewalk texture with repeating pattern
- **`asphalt`**: Road surface texture, black/dark gray
- **`grass`**: Green grass texture for parklets or medians
- **`concrete`**: Light gray concrete texture
- **`blueprint`**: Special blue mesh material with outline (useful for visualization/planning)

### Material Selection Tips

- **Road markings**: Use `asphalt` as the base, design white shapes in Figma
- **Sidewalk elements**: Use `sidewalk` or `concrete`
- **Landscape features**: Use `grass` for green spaces
- **Planning/drafts**: Use `blueprint` to visualize geometry before applying final materials

## Practical Examples

### Example 1: Crosswalk Stripes

**Figma Design:**
- Create 4-6 white rectangles (200px wide × 50px tall each)
- Space them evenly (40-50px apart)
- Export as SVG

**3DStreet Setup:**
```
Component: svg-extruder
svgString: [paste your SVG code]
scale: 0.05
elevation: 0.016
depth: 0.02
material: asphalt
```

### Example 2: Bike Lane Arrow

**Figma Design:**
- Use the pen tool to draw an arrow shape
- Make sure the path is closed
- Keep the design simple (avoid complex curves)
- Export as SVG

**3DStreet Setup:**
```
Component: svg-extruder
svgString: [paste your SVG code]
scale: 0.08
elevation: 0.016
depth: 0.01
material: asphalt
```

### Example 3: Custom Curb Shape

**Figma Design:**
- Draw the curb profile/shape
- Create a closed path
- Export as SVG

**3DStreet Setup:**
```
Component: svg-extruder
svgString: [paste your SVG code]
scale: 0.05
elevation: 0
depth: 0.15
material: concrete
```

## Troubleshooting

### SVG Not Appearing

- **Check the scale**: Your geometry might be too small or too large
- **Verify SVG code**: Make sure you copied the complete SVG markup including `<svg>` tags
- **Check elevation**: Geometry might be underground or too high
- **Look at console**: Open browser developer tools to check for errors

### Geometry Looks Wrong

- **Rings or holes**: If your Figma design has holes, the extrusion may fail. Try simplifying the shape
- **Complex paths**: Simplify your Figma design to use fewer points
- **Scale issues**: Adjust the scale property up or down

### Material Not Showing

- **Material name**: Make sure you're using a supported material name exactly as listed
- **Texture loading**: Give the scene a moment to load textures, especially on slower connections

### Performance Issues

- **Too many points**: Simplify your SVG paths in Figma
- **Multiple instances**: If using many SVG geometries, consider combining them in Figma first
- **File size**: Keep SVG code compact by removing unnecessary Figma metadata

## Tips and Tricks

### Efficient Workflow

1. **Create a template**: Set up a Figma file with your scale reference
2. **Test iteratively**: Start with simple shapes before creating complex designs
3. **Save versions**: Keep different versions in 3DStreet as you adjust scale and materials
4. **Reuse SVGs**: Store commonly used SVG codes for quick access

### Design Considerations

- **Real-world scale**: Research actual dimensions of road markings and elements
- **Contrast**: Consider how your geometry will look with the selected material
- **Context**: Design with surrounding street elements in mind
- **Simplicity**: Simpler designs perform better and are easier to adjust

### Advanced Techniques

- **Layer multiple SVGs**: Create complex geometry by stacking multiple svg-extruder components at different elevations
- **Combine with models**: Use SVG geometry alongside 3DStreet models for custom scenes
- **Variation**: Create slight variations of the same design for different street sections

## Integration with Other 3DStreet Features

### Working with Street Segments

SVG extruded geometry works alongside standard Streetmix and 3DStreet elements:

- Match elevation levels with existing segments
- Use the same materials for visual consistency
- Position using the same coordinate system

### Exporting Scenes

Scenes with SVG extruded geometry can be exported just like any other 3DStreet scene:

- **glTF export**: Includes your custom SVG geometry as 3D meshes
- **Screenshots**: Capture your scene with custom markings visible
- **AR export**: Custom geometry is included in AR-ready exports

## Additional Resources

- [3DStreet Editor Overview](./overview-3dstreet-editor.md)
- [Editing Objects](./editing.md)
- [Layers & Properties Panels](./layers-properties-panels.md)
- [GitHub Issue #473 - SVG Extrusion Feature](https://github.com/3DStreet/3dstreet/issues/473)
- [Figma Documentation](https://help.figma.com/)

---

Have questions or need help? Join the [3DStreet community discussions](https://github.com/3DStreet/3dstreet/discussions) or check out more documentation at [docs.3dstreet.com](https://docs.3dstreet.com).
