# Text-to-Image Generation

Create stunning images from text descriptions using AI models. This guide covers everything from basic prompts to advanced techniques.

## How Text-to-Image Works

The Generator uses **Flux models** from Black Forest Labs to convert your text descriptions (prompts) into images. The AI has been trained on millions of images and can understand complex descriptions, artistic styles, and visual concepts.

## The Generator Interface

### Main Components

1. **Model Selector** - Choose which AI model to use
2. **Prompt Field** - Enter your text description
3. **Dimensions Controls** - Set width and height
4. **Advanced Parameters** - Fine-tune generation settings
5. **Generate Button** - Start the creation process
6. **Preview Area** - See your generated image

### Keyboard Shortcuts

- **Cmd/Ctrl + Enter** - Generate image
- **Escape** - Cancel generation (if in progress)

## Choosing the Right Model

Each Flux model has unique characteristics:

### Flux.1 [pro]
- **Best for:** High-quality, versatile generation
- **Speed:** Moderate (30-60 seconds)
- **Token cost:** Higher
- **Use when:** Quality is priority over speed

### Flux.1.1 [pro]
- **Best for:** Enhanced detail and prompt adherence
- **Speed:** Moderate (30-60 seconds)
- **Token cost:** Higher
- **Use when:** You need maximum accuracy to your prompt

### Flux.1 [dev]
- **Best for:** Balanced quality and speed
- **Speed:** Fast (15-30 seconds)
- **Token cost:** Moderate
- **Use when:** Iterating quickly on concepts

### Flux.1 [schnell]
- **Best for:** Rapid prototyping
- **Speed:** Very fast (10-20 seconds)
- **Token cost:** Lower
- **Use when:** Testing ideas or generating many variations

### Flux Realism [lora]
- **Best for:** Photorealistic images
- **Speed:** Moderate (30-60 seconds)
- **Token cost:** Higher
- **Use when:** You need lifelike, realistic results

See [Models & Parameters](./models-and-parameters.md) for detailed specifications.

## Writing Effective Prompts

### Anatomy of a Good Prompt

**Structure:**
```
[Subject] + [Style/Medium] + [Details] + [Lighting/Atmosphere] + [Composition]
```

**Example:**
```
A modern complete street with protected bike lanes [subject],
architectural visualization style [medium],
featuring street trees, pedestrian crossings, and outdoor seating [details],
golden hour lighting with soft shadows [lighting],
aerial 45-degree view [composition]
```

### Prompt Writing Tips

**Be Specific**
- ❌ "A street"
- ✅ "A narrow European cobblestone street with outdoor cafes and flower boxes"

**Use Descriptive Language**
- ❌ "Nice buildings"
- ✅ "Contemporary mixed-use buildings with ground-floor retail and large windows"

**Specify Perspective**
- Street-level view
- Bird's eye view
- Isometric perspective
- 45-degree aerial view
- Eye-level pedestrian perspective

**Include Atmosphere**
- Time of day (morning, golden hour, dusk, night)
- Weather (sunny, overcast, rainy, snowy)
- Season (spring blossoms, autumn leaves, winter snow)
- Mood (vibrant, calm, bustling, quiet)

**Mention Style**
- Architectural visualization
- Photorealistic
- Watercolor painting
- Technical drawing
- Conceptual sketch
- Urban planning diagram

### Example Prompts for Street Design

**Protected Bike Lane:**
```
Modern urban street with two-way protected bike lane separated by planters,
wide sidewalks with street trees, contemporary LED streetlights,
architectural visualization style, daytime with clear blue sky, straight-on view
```

**Complete Street Redesign:**
```
Before and after comparison of complete street transformation, featuring
new bike infrastructure, enlarged sidewalks, bioswales, reduced car lanes,
contemporary street furniture, aerial view, photorealistic rendering
```

**Pedestrian Plaza:**
```
Urban pedestrian plaza with decorative paving, movable seating, food vendors,
surrounding mixed-use buildings, string lights overhead, people walking and sitting,
warm evening atmosphere, eye-level perspective
```

**Greenway:**
```
Multi-use greenway path through urban area, separated walking and cycling paths,
native plantings, educational signage, connection to park system,
spring season with blooming trees, drone perspective
```

## Setting Dimensions

### Preset Aspect Ratios

**1:1 (Square) - 1024×1024**
- Social media posts
- Profile images
- Balanced compositions

**16:9 (Landscape) - 1024×576**
- Presentations
- Wide street views
- Panoramic scenes

**9:16 (Portrait) - 576×1024**
- Mobile displays
- Vertical street views
- Tall building perspectives

**Custom Dimensions**
- Minimum: 256px per side
- Maximum: 1440px per side
- Larger images cost more tokens
- Must be divisible by 32

### Choosing Dimensions

Consider your output use:
- **Presentations:** 16:9 landscape
- **Reports:** 1:1 or 4:3
- **Social media:** 1:1 or specific platform ratios
- **Print:** Custom dimensions based on final size

## Advanced Parameters

### Steps (20-50)

Controls generation refinement:
- **20-25:** Fast, good quality
- **30-35:** Balanced (recommended)
- **40-50:** Maximum detail

More steps = longer generation time and higher token cost.

### Guidance Scale (1.5-5.0)

How closely the AI follows your prompt:
- **1.5-2.5:** More creative interpretation
- **2.5-3.5:** Balanced adherence (recommended)
- **3.5-5.0:** Strict prompt following

Higher guidance = less AI creativity, more literal interpretation.

### Seed

A number that controls randomness:
- **Random (default):** Different result each time
- **Fixed number:** Reproducible results

Use cases for fixed seeds:
- Creating variations with slight prompt changes
- Reproducing successful generations
- Comparing different parameters

### Safety Tolerance (0-6)

Content filtering level:
- **0-2:** Strict filtering
- **3-4:** Moderate (recommended)
- **5-6:** Permissive

Adjust if generations are unexpectedly blocked.

### Interval (Flux.1.1 [pro] only)

Time between diffusion steps:
- **Lower:** Faster, less refined
- **Higher:** Slower, more refined
- **Default:** 2

## Image Prompt / Remix Feature

Upload an existing image to influence generation:

### How to Use

1. Click "Upload Image Prompt"
2. Select a reference image
3. Write your prompt describing desired changes
4. Generate

### Use Cases

- **Style transfer:** Match the style of a reference image
- **Variations:** Create similar but different images
- **Composition guide:** Use layout from existing image
- **Color palette:** Match colors from reference

### Tips for Image Prompts

- Combine with detailed text prompts for best results
- Reference image doesn't need to be AI-generated
- Works well with sketches or rough concepts
- Can upload previous generations for iteration

## Generation Workflow

### Recommended Process

1. **Start broad**
   - Use simple prompt with Flux.1 [schnell]
   - Test multiple variations quickly

2. **Refine concept**
   - Add details to successful prompts
   - Switch to Flux.1 [dev] for better quality

3. **Finalize**
   - Use Flux.1 [pro] or Flux.1.1 [pro]
   - Increase steps to 40-50
   - Fine-tune guidance scale

4. **Variations**
   - Keep successful prompts
   - Change seed for variations
   - Adjust specific details

### Iteration Tips

- Generate multiple versions before committing to final
- Save prompts that work well for future use
- Use Gallery to compare results and track what works
- Copy parameters from successful generations

## Troubleshooting

### Image Doesn't Match Prompt

- Increase guidance scale
- Add more specific details to prompt
- Try Flux.1.1 [pro] for better prompt adherence
- Increase steps for more refinement

### Low Quality Results

- Switch to higher-quality model (Flux.1 [pro])
- Increase steps (40-50)
- Check image dimensions (larger may be better)
- Refine prompt with more details

### Generation Blocked by Safety Filter

- Adjust safety tolerance setting
- Rephrase prompt to be more specific
- Remove potentially ambiguous terms

### Generation Takes Too Long

- Use faster model (Flux.1 [schnell])
- Reduce steps
- Decrease image dimensions
- Check internet connection

### Results Too Similar

- Change or randomize seed
- Modify prompt slightly
- Adjust guidance scale
- Try different model

## Best Practices

1. **Test fast, finalize slow** - Use Flux.1 [schnell] for testing, Flux.1 [pro] for finals
2. **Document successes** - Save prompts and parameters that work well
3. **Iterate methodically** - Change one variable at a time
4. **Use Gallery metadata** - Learn from past successful generations
5. **Start simple** - Add complexity gradually
6. **Consider token cost** - Balance quality needs with token usage
7. **Experiment** - Try different models and settings

## Next Steps

- **[Inpainting](./inpainting.md)** - Edit specific areas of generated images
- **[Outpainting](./outpainting.md)** - Expand your creations
- **[Gallery](./gallery.md)** - Organize and review your generations
- **[Models & Parameters](./models-and-parameters.md)** - Deep dive into settings
