# Outpainting

Outpainting expands images beyond their original boundaries by generating new content in any direction. This powerful feature lets you extend scenes, create wider compositions, and add context around existing images.

## What is Outpainting?

Outpainting uses AI to generate new image content that extends seamlessly from your original image. Unlike inpainting (which replaces areas within an image), outpainting adds new areas outside the original boundaries.

## When to Use Outpainting

- **Expand scenes** - Add more context to cropped images
- **Change aspect ratios** - Convert square to landscape or portrait
- **Add context** - Show what's beyond the original frame
- **Create panoramas** - Extend street views horizontally
- **Vertical expansion** - Add sky above or ground below
- **Composition adjustment** - Reframe images for better layout

## The Outpaint Interface

### Main Components

1. **Image Upload Area** - Load your source image
2. **Canvas Preview** - Shows original and expansion areas
3. **Direction Controls** - Choose which sides to expand
4. **Expansion Amount** - Set pixels to add in each direction
5. **Prompt Field** - Describe what should appear in new areas
6. **Generate Button** - Start outpainting

### Supported Image Formats

- PNG (recommended)
- JPEG/JPG
- Maximum file size: 10MB
- Recommended starting size: 512px - 1024px per side

## How to Outpaint

### Step 1: Upload Your Image

Click **Upload Image** or drag and drop onto the canvas.

**Good candidates for outpainting:**
- Images that feel cropped
- Scenes where you want more context
- Images you want to repurpose for different formats
- AI-generated images from text-to-image

### Step 2: Choose Expansion Direction(s)

Select which sides to expand using the direction buttons:

**Direction Options:**
- **⬆ Up** - Add content above
- **⬇ Down** - Add content below
- **⬅ Left** - Add content to the left
- **➡ Right** - Add content to the right

**Combinations:**
- Select multiple directions simultaneously
- Common combinations:
  - Left + Right = horizontal panorama
  - Up + Down = vertical extension
  - All four = expand in all directions

### Step 3: Set Expansion Amount

For each selected direction, specify pixels to add:

**Expansion Limits:**
- Minimum: 64 pixels
- Maximum: 2048 pixels per side
- Must be divisible by 32

**Recommendations:**
- **Small expansion (64-256px):** Minor framing adjustments
- **Medium expansion (256-512px):** Balanced addition
- **Large expansion (512-1024px):** Significant context
- **Maximum expansion (1024-2048px):** Dramatic extensions

**Considerations:**
- Larger expansions cost more tokens
- Larger expansions take longer to generate
- Very large expansions may have less coherent results
- Final image dimensions = original + all expansions

### Step 4: Write Your Prompt

Describe what should appear in the expanded areas.

**Outpainting prompts should:**
- Describe the new content specifically
- Reference what's already in the image
- Maintain style consistency
- Consider perspective and lighting

**Example prompts:**

*Expanding a street view horizontally:*
```
Continue the urban street scene with similar buildings, sidewalks,
and street trees, maintaining the same architectural style and perspective
```

*Adding sky above:*
```
Clear blue sky with scattered white clouds, continuing the daytime
lighting from the original scene
```

*Expanding downward:*
```
Additional street-level detail including curbs, road markings,
and continuation of the bike lane visible in original
```

*All directions:*
```
Expand the complete street design maintaining consistent style,
showing more of the urban context including adjacent buildings,
intersections, and streetscape elements
```

### Step 5: Adjust Parameters (Optional)

**Prompt Strength (0.0-1.0)**
- **0.5-0.7:** Recommended for most cases
- Lower: More creative, less literal
- Higher: Stricter adherence to prompt

**Guidance Scale (1.5-5.0)**
- **2.5-3.5:** Recommended range
- Controls prompt following
- Higher = less AI creativity

**Seed**
- Set specific value for reproducible results
- Leave random for varied outputs

**Safety Tolerance (0-6)**
- **3-4:** Standard default

### Step 6: Generate

Click **Outpaint** to begin. The AI will:
1. Analyze the original image edges
2. Generate content for expansion areas
3. Blend new content with original
4. Return the expanded image

Generation time: 30-90 seconds (depending on expansion size)

### Step 7: Review and Iterate

Check the result:
- **Seams:** Are transitions smooth?
- **Consistency:** Does style match original?
- **Content:** Does it match your prompt?
- **Perspective:** Is geometry correct?

If needed, adjust and regenerate.

## Expansion Strategies

### Single Direction Expansion

**Use when:**
- You need specific additional context
- Adjusting composition asymmetrically
- Creating specific aspect ratio

**Tips:**
- Be very specific about the new content
- Reference original image elements
- Consider how perspective continues

### Symmetric Expansion

**Use when:**
- Creating centered compositions
- Maintaining balance
- Converting aspect ratios (square → landscape)

**Tips:**
- Expand left + right equally
- Or expand up + down equally
- Helps maintain visual balance

### Progressive Expansion

**Use when:**
- Creating very large expansions
- Maximum control over quality
- Building panoramas

**Process:**
1. Outpaint moderately in one direction (512px)
2. Save result
3. Outpaint the result further
4. Repeat as needed

**Benefits:**
- Better coherence than single large expansion
- More control at each step
- Can adjust prompts between iterations

### Multi-directional Expansion

**Use when:**
- Need context all around
- Creating much larger images
- Maximum flexibility

**Tips:**
- Use consistent prompt for all directions
- May require more iterations to perfect
- Consider doing in stages (horizontal first, then vertical)

## Advanced Techniques

### Maintaining Perspective

Include perspective keywords in prompts:

```
Continuation of the aerial 45-degree view showing additional street
blocks with consistent perspective and vanishing points
```

### Style Consistency

Reference original visual characteristics:

```
Extend the scene maintaining the architectural visualization style,
same color palette, lighting, and level of detail as original
```

### Content Continuation

Specifically mention what should continue:

```
Additional bike lane, sidewalk with street trees, and contemporary
buildings continuing the same urban design pattern
```

### Asymmetric Expansion

Different amounts per direction:
- Up: 128px (just add some sky)
- Down: 0px (don't extend down)
- Left: 512px (significant extension)
- Right: 256px (moderate extension)

### Blend Enhancement

For smoother transitions:
- Overlap expansion slightly with original
- Use "seamlessly blended" in prompt
- Adjust prompt strength to 0.6 or lower
- Include context from original in prompt

## Common Use Cases

### Converting Square to Landscape

**Starting:** 1024×1024 image
**Goal:** 1920×1080 landscape

**Process:**
1. Expand left: 448px
2. Expand right: 448px
3. Crop vertically if needed
4. Prompt: "Continue the scene horizontally maintaining style"

### Adding Sky to Street View

**Starting:** Street view with limited sky
**Goal:** More dramatic sky

**Process:**
1. Expand up: 512px
2. Prompt: "Expansive blue sky with dramatic clouds, golden hour lighting"
3. Keep original below unchanged

### Creating Street Panorama

**Starting:** 1024×576 street section
**Goal:** Wide panoramic view

**Process:**
1. First iteration: Expand right 512px
2. Save result
3. Second iteration: Expand right another 512px
4. Final: 2048×576 panorama
5. Prompt: "Continuation of urban street with similar buildings and infrastructure"

### Reframing Composition

**Starting:** Subject too centered
**Goal:** Rule-of-thirds composition

**Process:**
1. Expand more on one side than the other
2. Adds breathing room and improves composition
3. Prompt describes the direction's context

## Troubleshooting

### Visible Seams

**Problem:** Clear lines where expansion meets original

**Solutions:**
- Decrease prompt strength (0.4-0.6)
- Add "seamless blend" to prompt
- Try smaller expansion amounts
- Use progressive expansion approach

### Perspective Mismatch

**Problem:** New areas don't match original perspective

**Solutions:**
- Explicitly state perspective in prompt
- Reference original viewpoint
- Try smaller expansions
- Include geometric consistency in prompt

### Style Inconsistency

**Problem:** Expanded areas look different from original

**Solutions:**
- Describe original style in prompt
- Include "matching original style" language
- Adjust prompt strength
- Reference specific visual elements

### Content Repetition

**Problem:** AI repeats same elements in expansion

**Solutions:**
- Make prompt more varied
- Describe progression or change
- Use different seed
- Try progressive expansion instead

### Low Quality Expansion

**Problem:** Expanded areas lack detail

**Solutions:**
- Reduce expansion amount
- Increase guidance scale
- Make prompt more detailed
- Use progressive expansion for large areas

## Combining Multiple Outpaint Operations

### Sequential Expansion

1. **First outpaint:** Expand right 512px
2. **Save result**
3. **Second outpaint:** Load saved image, expand right 512px more
4. **Save final:** Now 1024px wider total

**Benefits:**
- Better quality for large expansions
- Can adjust approach between iterations
- More control over final result

### Different Directions in Sequence

1. **Horizontal expansion:** Left + right
2. **Save and reload**
3. **Vertical expansion:** Up + down

**Benefits:**
- Focus on one dimension at a time
- Easier to control perspective
- Better coherence

## Workflow Recommendations

### Quick Aspect Ratio Change

1. Upload image
2. Select directions for desired ratio
3. Set modest expansion (256-384px per side)
4. Simple prompt: "Continue scene maintaining style"
5. Generate once

### High-Quality Panorama

1. Upload image
2. Expand right 512px with detailed prompt
3. Save result
4. Reload and expand right 512px again
5. Repeat as needed
6. Each iteration uses previous result

### Comprehensive Context Addition

1. First: Expand horizontally (left + right 384px each)
2. Save
3. Second: Expand vertically (up + down 256px each)
4. Save final
5. Use consistent prompts across iterations

## Tips for Success

1. **Start conservative** - Test with smaller expansions first
2. **Be specific** - Detailed prompts yield better results
3. **Match the original** - Reference style, lighting, perspective
4. **Progressive over massive** - Multiple small expansions > one huge expansion
5. **Use Gallery images** - Generated images often outpaint well
6. **Experiment with strength** - 0.5-0.7 range usually works best
7. **Consider final dimensions** - Plan total size before starting
8. **Iterate** - First result rarely perfect, refine as needed

## Integration with Other Tools

### Generate → Outpaint

1. Create image with text-to-image
2. Outpaint to expand it
3. Creates larger, more contextual scene

### Outpaint → Inpaint

1. Outpaint to add new areas
2. Inpaint to fix specific details in expansion
3. Best of both tools

### Outpaint → Outpaint → Inpaint

1. Outpaint for broad expansion
2. Outpaint again for more context
3. Inpaint to perfect specific areas
4. Final refined result

## Next Steps

- **[Inpainting](./inpainting.md)** - Edit specific areas of your outpainted images
- **[Text-to-Image](./text-to-image.md)** - Generate source images for outpainting
- **[Gallery](./gallery.md)** - Manage and track your expansions
- **[Models & Parameters](./models-and-parameters.md)** - Understand the settings in depth
