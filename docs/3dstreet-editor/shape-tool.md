---
sidebar_label: 'Shape Tool: Measure and Draw'
sidebar_position: 4.5
---

# Shape Tool: Measure and Draw

The **Shape Tool** is how you measure and draw in 3DStreet. Click the shape icon in the toolbar (or press `r`) to draw a polyline or polygon on the ground: distances appear as you draw, so a simple two-point line works like a tape measure, and a closed polygon reports its area. Shapes can also act as paths that streets follow, so a measurement line along a real corridor can become the centerline of your street design.

:::info Where did the Ruler go?
The Shape Tool replaces the previous Ruler tool. Existing scenes are unaffected: any saved Measure Lines are automatically converted to shapes when the scene loads, keeping their names and positions, and gaining vertex editing.
:::

## Drawing a shape

1. Click the shape icon in the toolbar, or press `r`.
2. Click on the ground to place points. The distance of the current segment displays live as you draw.
3. Finish with `Enter` or a double-click. `Backspace` removes the last point if you misclick.

While drawing, the right panel shows two modes:

- **Close manually** (default): draws an open line. Click your first point again when you want to close the shape into a polygon.
- **Auto-close**: the shape closes as you draw, so the closing edge and enclosed area update live.

## Measuring

- **While drawing**, each segment's length displays at your cursor.
- **Select a shape** to see the length of each side, plus the angle at each corner and (for closed shapes) the enclosed area in the right panel.
- **Closed shapes** also display their area directly on the canvas.
- Use the **m/ft toggle** in the toolbar to switch between metric and imperial units.

Measurements are real-world: they always report the size the shape appears at in the scene, even if the shape is nested inside a scaled group.

## Editing a shape

Select a shape to edit it:

- Click a blue vertex dot to move it or delete it
- Hold `Shift` while dragging a vertex to raise or lower it
- Click a side's length to add a vertex to that side
- Edit line color, width and fill in the right panel

Changing a shape's line or fill style makes it the default for new shapes you draw.

You can move and rotate a whole shape like any other object. Shapes don't scale; resize them by moving their vertices instead.

## Curve style

A shape with three or more points can render its line as:

- **Straight / hard corners** (default)
- **Smooth**: a flowing curve through your points
- **Arcs**: straight sides with rounded corners, with an adjustable corner radius

Pick the curve style in the right panel when a shape is selected. **Direction • Reverse** flips the drawing direction of the line, which matters when a street follows the shape (see below).

## Streets can follow shapes

Any [managed street](/docs/managed-street/overview-managed-street) can bend along a shape:

1. Draw a shape along the route you want, for example tracing a real corridor in a [geospatial scene](/docs/key-features/geospatial).
2. Select the street and choose your shape under **Follow Path** in the right panel.
3. The whole street, including lanes, striping, and placed models, bends along the shape.

Editing the shape's vertices re-lays the street live. Hold `Shift` while dragging a vertex up or down and the street ramps along the new grade. Use **Direction • Reverse** on the shape if the street's cross-section comes out mirrored from what you intended.
