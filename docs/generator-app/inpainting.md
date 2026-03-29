# Inpainting

Inpainting allows you to edit specific areas of existing images by masking regions and regenerating only those areas with AI. This is perfect for making targeted changes while preserving the rest of your image.

## What is Inpainting?

Inpainting uses AI to fill in or replace masked areas of an image based on a text prompt. The AI considers the surrounding context and your description to generate content that blends seamlessly with the original.

## When to Use Inpainting

- **Fix specific details** - Correct or enhance particular elements
- **Replace objects** - Swap one object for another
- **Add elements** - Insert new features into existing scenes
- **Remove unwanted items** - Erase and intelligently fill areas
- **Refine generations** - Perfect specific parts of AI-generated images
- **Design variations** - Test different options for a single element

## The Inpaint Interface

### Main Components

1. **Image Upload Area** - Load your source image
2. **Canvas** - Interactive drawing surface
3. **Mask Tools** - Brush controls for selecting areas
4. **Prompt Field** - Describe what should replace masked area
5. **Parameters** - Control generation settings
6. **Generate Button** - Start inpainting

### Supported Image Formats

- PNG (recommended)
- JPEG/JPG
- Maximum file size: 10MB
- Recommended dimensions: 512px - 2048px per side

## How to Inpaint

### Step 1: Upload Your Image

Click **Upload Image** or drag and drop a file onto the canvas.

**Tips:**
- Use high-quality source images for best results
- Ensure adequate resolution (min 512px)
- Consider using images from Generator or Gallery

### Step 2: Draw Your Mask

Use the brush tool to paint over areas you want to regenerate.

**Mask Controls:**

**Brush Size Slider**
- Adjust brush width (10-100px)
- Use larger brush for big areas
- Use smaller brush for precision

**Keyboard Shortcuts:**
- **[ and ]** - Decrease/increase brush size
- **Z** - Undo last stroke
- **Shift + Z** - Redo stroke
- **C** - Clear entire mask
- **Space + Drag** - Pan canvas (when zoomed)

**Mouse/Touch Controls:**
- **Click/tap and drag** - Draw mask
- **Scroll/pinch** - Zoom in/out
- **Middle-click drag** - Pan canvas

### Step 3: Write Your Prompt

Describe what should appear in the masked area.

**Good inpainting prompts:**
- Describe the replacement/addition specifically
- Match the style of the original image
- Consider lighting and perspective of original

**Examples:**

*Replacing a bike lane:*
```
Protected bike lane with concrete barrier and green paint, modern street design
```

*Adding trees:*
```
Mature street trees with full canopy, planted in tree grates along sidewalk
```

*Changing pavement:*
```
Decorative brick paving in herringbone pattern, warm terracotta color
```

### Step 4: Adjust Parameters (Optional)

**Prompt Strength (0.0-1.0)**
- **Low (0.3-0.5):** Subtle changes, preserves original more
- **Medium (0.5-0.7):** Balanced (recommended)
- **High (0.7-1.0):** Dramatic changes, prioritizes prompt

**Guidance Scale (1.5-5.0)**
- Controls how closely AI follows your prompt
- **2.5-3.5:** Recommended range
- Higher values = stricter adherence to prompt

**Seed**
- Use specific seed for reproducible edits
- Leave random for varied results

**Safety Tolerance (0-6)**
- Content filtering level
- **3-4:** Recommended default

### Step 5: Generate

Click **Inpaint** to start generation. The AI will:
1. Process your mask and prompt
2. Generate content for masked area
3. Blend it with the original image
4. Return the complete result

Generation typically takes 20-40 seconds.

### Step 6: Review and Iterate

If results aren't perfect:
- Adjust prompt for clarity
- Modify mask coverage
- Change prompt strength
- Try different guidance scale
- Generate again

## Masking Techniques

### Precise Masking

For detailed edits:
1. Zoom in (scroll wheel)
2. Use small brush (10-20px)
3. Carefully outline the area
4. Work at 200-400% zoom for precision

### Large Area Masking

For broad changes:
1. Use large brush (50-100px)
2. Paint quickly over entire area
3. Don't worry about perfect edges
4. Feather edges naturally

### Edge Blending

For seamless results:
- Extend mask slightly beyond target area
- Include some context around edges
- Avoid hard, straight mask edges
- Let mask overlap with surrounding elements

### Multiple Object Masking

To change several items:
- Mask all at once for consistency
- Or mask individually for control
- Use consistent prompt for related objects

## Advanced Techniques

### Style Matching

To match original image style:

```
[Object description], matching the architectural visualization style
of the original image, same lighting and perspective
```

### Contextual Integration

Reference surrounding elements:

```
Modern bench matching the contemporary street furniture visible in the scene,
consistent materials and design language
```

### Lighting Consistency

Specify lighting to match original:

```
Street lamp with warm LED lighting, consistent with evening atmosphere
and existing street lighting in the scene
```

### Perspective Matching

Maintain visual consistency:

```
Bike lane striping in correct perspective, matching the 45-degree
aerial view angle of the original image
```

## Use Cases

### Street Design Modifications

**Changing Infrastructure:**
- Mask: Road section
- Prompt: "Protected bike lane with green pavement and flex posts"

**Adding Amenities:**
- Mask: Empty sidewalk area
- Prompt: "Outdoor cafe seating with tables, chairs, and umbrellas"

**Modifying Surfaces:**
- Mask: Existing pavement
- Prompt: "Permeable paving with decorative pattern"

### Correcting AI Generations

**Fixing Details:**
- Mask: Problematic area
- Prompt: Description of correct version

**Enhancing Elements:**
- Mask: Element to improve
- Prompt: More detailed description

### Testing Variations

**Design Options:**
- Mask: Element to vary
- Prompt: Alternative description
- Compare multiple generations

## Common Challenges

### Blending Issues

**Problem:** Visible seams between masked and original areas

**Solutions:**
- Extend mask to include more context
- Lower prompt strength (0.4-0.6)
- Soften mask edges
- Include "seamlessly blended" in prompt

### Style Mismatch

**Problem:** Generated area doesn't match original style

**Solutions:**
- Add style descriptors to prompt
- Reference original image characteristics
- Adjust prompt strength
- Use specific artistic/architectural terms

### Unwanted Changes

**Problem:** AI changes areas outside the mask

**Solutions:**
- Increase precision of mask edges
- Check mask coverage (no unintended areas)
- Lower prompt strength
- Be more specific in prompt

### Perspective Problems

**Problem:** Generated content has wrong perspective

**Solutions:**
- Specify viewing angle in prompt
- Include perspective keywords (aerial, eye-level, etc.)
- Use reference to original view
- Mask larger area for more context

## Tips for Success

1. **Start with clear source images** - Better input = better output
2. **Be generous with masks** - Include some surrounding area
3. **Match the original** - Reference style, lighting, perspective in prompts
4. **Iterate quickly** - Try variations with different prompts/strengths
5. **Use Gallery images** - Your generated images make great inpaint sources
6. **Save successful masks** - Screenshot or note mask areas that work well
7. **Test prompt strength** - Often the key to natural blending
8. **Zoom in to check** - Review results at high zoom before finalizing

## Workflow Recommendations

### Single Element Edit

1. Upload image
2. Zoom to element
3. Precisely mask element only
4. Write specific prompt
5. Prompt strength: 0.6-0.8
6. Generate and review

### Large Area Replacement

1. Upload image
2. Mask entire area broadly
3. Write detailed prompt with style matching
4. Prompt strength: 0.5-0.7
5. Generate and compare
6. Refine mask if needed

### Multiple Iterations

1. Start with low prompt strength (0.4)
2. Generate first version
3. If too subtle, increase strength
4. If too different, decrease strength
5. Adjust prompt based on results
6. Repeat until satisfied

## Combining with Other Tools

### Inpaint → Outpaint

1. Inpaint to fix/modify details
2. Save result
3. Use outpaint to expand the corrected image

### Generate → Inpaint → Inpaint

1. Generate base image with text-to-image
2. Inpaint to fix specific issues
3. Inpaint again to refine further

### Gallery → Inpaint

1. Browse Gallery for candidates
2. Load image into Inpaint
3. Make targeted improvements
4. Save refined version back to Gallery

## Troubleshooting

### Mask Not Visible

- Check brush size (increase if too small)
- Ensure drawing on canvas (not off-screen)
- Try clicking "Clear Mask" and restart

### Generation Fails

- Check image file size (max 10MB)
- Verify image format (PNG/JPEG)
- Ensure prompt is not empty
- Check token balance

### Results Too Different from Original

- Decrease prompt strength to 0.3-0.5
- Add "subtle" or "minor changes" to prompt
- Reduce mask area
- Include more style descriptors

### AI Ignores Prompt

- Increase prompt strength to 0.7-0.9
- Make prompt more specific
- Increase guidance scale
- Check if mask covers intended area

### Repeated Attempts Needed

- This is normal - inpainting often requires iteration
- Try varying seed for different results
- Adjust prompt strength incrementally
- Experiment with mask coverage

## Next Steps

- **[Outpainting](./outpainting.md)** - Expand images beyond their boundaries
- **[Text-to-Image](./text-to-image.md)** - Create source images for inpainting
- **[Gallery](./gallery.md)** - Organize and manage your edits
- **[Models & Parameters](./models-and-parameters.md)** - Understand the settings
