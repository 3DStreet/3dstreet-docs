# Getting Started with Generator

Welcome to the 3DStreet Generator App! This guide will walk you through creating your first AI-generated image.

## Prerequisites

Before you begin, make sure you have:

- A 3DStreet account (sign up at [3dstreet.app](https://3dstreet.app))
- Some tokens for generation (see [Tokens & Usage](./tokens-and-usage.md))
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## Your First Image Generation

### 1. Access the Generator

Navigate to the Generator App in your 3DStreet dashboard. You'll see three tabs:

- **Generator** - Text-to-image creation
- **Inpaint** - Edit existing images
- **Outpaint** - Expand image boundaries

### 2. Choose Your Model

In the Generator tab, select an AI model from the dropdown:

- **Flux.1 [pro]** - Highest quality, most versatile (recommended for first use)
- **Flux.1 [dev]** - Fast generation with good quality
- **Flux.1.1 [pro]** - Enhanced detail and accuracy
- **Flux.1 [schnell]** - Ultra-fast generation
- **Flux Realism [lora]** - Photorealistic images

Learn more about model differences in [Models & Parameters](./models-and-parameters.md).

### 3. Write Your Prompt

Enter a description of what you want to create in the prompt field. Be specific and descriptive:

**Good prompts:**
```
A modern urban street with protected bike lanes, tree-lined sidewalk,
outdoor cafe seating, and pedestrian crossing with contemporary streetlights
```

```
Bird's eye view of a complete street redesign featuring green infrastructure,
bioswales, and wide pedestrian zones
```

**Tips for better prompts:**
- Be specific about what you want to see
- Include details about style, perspective, and mood
- Mention colors, materials, or architectural elements
- Specify time of day or lighting if relevant

### 4. Set Image Dimensions

Choose your output size:

- **1:1 (1024×1024)** - Square format
- **16:9 (1024×576)** - Widescreen
- **9:16 (576×1024)** - Portrait
- **Custom** - Enter specific dimensions

### 5. Optional: Adjust Advanced Parameters

For more control, expand the advanced settings:

- **Steps** - Higher = more refined (20-50 recommended)
- **Guidance** - How closely to follow your prompt (2.0-5.0)
- **Seed** - For reproducible results
- **Safety Tolerance** - Content filtering level

### 6. Generate Your Image

Click **Generate** (or press Cmd/Ctrl + Enter). You'll see:

1. Token cost displayed
2. Generation progress indicator
3. Your image appears when complete

Generation typically takes 15-60 seconds depending on the model and settings.

### 7. Review and Save

Once generated, your image:

- Automatically saves to your Gallery
- Can be downloaded as PNG
- Can be used as input for inpainting or outpainting
- Shows full metadata (prompt, model, parameters)

## Next Steps

Now that you've created your first image, explore more features:

- **[Text-to-Image Guide](./text-to-image.md)** - Advanced generation techniques
- **[Inpainting](./inpainting.md)** - Learn to edit specific areas
- **[Outpainting](./outpainting.md)** - Expand your creations
- **[Gallery](./gallery.md)** - Organize and manage images

## Common Questions

**How many tokens does generation cost?**
It varies by model. Flux.1 [pro] uses more tokens but produces higher quality. Check the display before generating.

**Can I regenerate with the same prompt?**
Yes! Use the same prompt with a different seed for variations, or copy parameters from Gallery images.

**What if generation fails?**
Check your token balance and internet connection. If issues persist, try a different model or reduce image dimensions.

**Can I use generated images commercially?**
Check 3DStreet's terms of service for usage rights and restrictions.

## Tips for Success

1. **Start simple** - Test with basic prompts before adding complexity
2. **Experiment with models** - Different models excel at different styles
3. **Save good prompts** - Keep notes on what works well
4. **Use the Gallery** - Review metadata to learn what parameters work best
5. **Iterate** - Refine prompts based on results

Ready to dive deeper? Continue to the [Text-to-Image guide](./text-to-image.md) for advanced techniques.
