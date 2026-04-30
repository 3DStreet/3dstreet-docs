---
sidebar_position: 5
---

# AI Rendering

3DStreet's AI Rendering pipeline transforms your 3D street designs into photorealistic images and short videos using frontier image-to-image and image-to-video models. It is built specifically for urban planning and street design workflows, so the AI uses your scene geometry as guidance rather than starting from scratch — preserving the layout, proportions, and design intent you've already built in 3DStreet.

There are two ways to use AI rendering:

- **Snapshot to AI Render** — render directly from the Editor's Snapshot dialog, using your current camera view as the source image.
- **AI Generator app** — a dedicated "generative studio" interface at [3dstreet.app/generator](https://3dstreet.app/generator) for modifying images, creating from prompts, and generating videos.

All renders are stored in your **Cloud Gallery**, synced across devices, and tagged with the model and prompt used so you can iterate on what works.

## Snapshot to AI Render (in the Editor)

The fastest way to get a photorealistic image of your scene is from the Editor's snapshot button.

### How to Render a Snapshot

1. In the 3DStreet Editor, frame the camera on the view you want to render.
2. Click the **snapshot / camera** button in the primary toolbar.
3. In the dialog, choose an AI model (default is **Nano Banana Pro**) and optionally edit the prompt to steer the style — e.g. *"sunny morning"*, *"rainy evening"*, *"dusk with warm streetlights"*.
4. Choose **1× render** for a single image, or **4× render** to render with multiple models in parallel and compare results.
5. Click **Render** — your scene is autosaved, the snapshot is captured, and the render begins. Progress is shown with a calibrated time estimate.
6. When complete, use the before/after comparison slider to compare the source 3D view against the AI render. Save to gallery or download as JPEG.

The 4× mode is particularly useful for exploring style options quickly — different models produce noticeably different interpretations of the same scene.

## AI Generator App

The [AI Generator app](https://3dstreet.app/generator) is a dedicated interface for image and video rendering. Open it from the **App Switcher** menu by clicking the 3DStreet logo in the upper-left corner of any 3DStreet app.

The Generator is organized into tabs:

### Modify

[Modify from Input Image](https://3dstreet.app/generator/#modify) — upload an image or pick one from your gallery and re-render it with stylistic, editorial, or geometric modifications using a frontier image-to-image model. This is the same engine that powers the snapshot dialog, exposed as a standalone tool so you can iterate on any image — including renders from previous sessions or images created outside 3DStreet.

### Create

[Create from Prompt](https://3dstreet.app/generator/#create) — generate a new image from a text prompt without a source image, useful for moodboards or reference imagery.

### Video

[Generate Video](https://3dstreet.app/generator/#video) — turn a still image into a short AI-rendered video, bringing your scenes to life with subtle camera movement, environmental motion, and atmospheric effects. Video generation requires a source image as the first frame; upload one or pick from your gallery.

## Available AI Models

Models are upgraded regularly as new frontier models become available. Token costs and rendering times vary per model — the Generator and snapshot dialog show both before you run a render.

### Image Models

**Best quality**

- **Nano Banana Pro** ([Google](https://blog.google/innovation-and-ai/products/nano-banana-pro/)) — current default; uses input geometry as guidance for accurate, photorealistic output.
- **Flux 2 Max** ([Black Forest Labs](https://bfl.ai)) — photorealistic street view rendering with strong detail and lighting.

**High quality**

- **Seedream 4.5** ([ByteDance](https://seed.bytedance.com/en/seedream4_5))
- **Nano Banana 2** (Google)
- **Flux 2 Pro** (Black Forest Labs)

**Specialized**

- **Kontext Real Earth** — transforms satellite imagery into drone-style shots, BFL Flux Kontext Pro LoRA trained from drone image pairs.
- **Flux 2 SFMTA Striping LoRA** — generates top-down satellite-style views from SFMTA-style striping diagrams, custom LoRA trained from striping drawing and satellite view pairs.
- **Flux 2 Dev Base** — base Flux 2 model for experimentation.

### Video Models

**Best quality**

- **Veo 3.1** ([Google](https://deepmind.google/models/veo/))
- **Kling v3.0 Pro** ([Kuaishou](https://klingai.com/))

**High quality and fast**

- **Veo 3.1 Fast** — current default; results in roughly 90 seconds.
- **SeeDance 1 Pro Fast** (ByteDance)
- **LTX-2 Fast** ([Lightricks](https://www.lightricks.com/)) — popular budget option.

**Versatile**

- **Wan 2.6 I2V** — image-to-video model.

## Tokens and Pricing

AI rendering uses **AI generation tokens** from your 3DStreet Pro subscription. Token cost varies per model and per operation (image vs. 5-second video vs. 10-second video) and is shown in the UI before you commit to a render.

- **Pro Monthly** — 100 AI generation tokens included each month.
- **Pro Annual** — 100 tokens per month, plus a one-time bonus of 840 tokens (7 months' worth) on first purchase.

Token costs at a glance:

| Operation | Typical cost |
|-----------|--------------|
| Image render (high quality) | 2 tokens |
| Image render (best quality) | 3 tokens |
| 5-second video (fast tier) | 5–10 tokens |
| 5-second video (best quality) | 20 tokens |
| 10-second video (best quality) | 40 tokens |

Exact costs are shown in the Generator and snapshot dialog before each render.

## Cloud Gallery

Every image and video you render is stored in your **Cloud Gallery**, accessible from the Editor's **Gallery** panel and from the AI Generator. The gallery:

- **Syncs across devices** — sign in on any device to see your full history.
- **Captures generation metadata** — model, prompt, and other parameters are saved with each item, so you can replicate or remix what worked.
- **Links back to scenes** — items generated from the Editor link back to the source 3DStreet scene for rapid editing.
- **Feeds back into the Generator** — gallery items can be picked as the input for any Modify or Video operation, making it easy to iterate.

## Tips for Better Results

- **Start with a clear, well-composed 3D scene.** AI rendering uses your geometry as guidance — the better the input composition, the better the output.
- **Edit the prompt.** The default prompt produces a reasonable photorealistic look; small additions like *"golden hour"*, *"overcast morning"*, or *"after rain, wet pavement"* dramatically change the mood.
- **Use 4× mode to compare models.** Different models interpret the same scene differently — running them in parallel is the fastest way to find the right look.
- **Animate stills with the Video tab.** Once you have a still you like, use it as the first frame for a short video to add motion for presentations.

## Availability

AI rendering is a **Pro** feature. Free users can preview the AI Generator interface with included trial generation tokens, but rendering further requires an active Pro subscription with available tokens.

[Upgrade to Pro](https://3dstreet.app/#payment-modal) · [Open the AI Generator](https://3dstreet.app/generator)

## Further Reading

- [More in Pro: AI Generation, Custom Prompts, and Enhanced AR Capabilities](/blog/2025/09/20/more-in-pro-enhanced-ai-generation-and-ar-capabilities) — launch announcement for cloud AI rendering.
- [Product Update: AI Image and Video Generator, Cloud Gallery, and More](/blog/2026/02/14/product-update-ai-video-gallery-and-more) — AI Generator app and Cloud Gallery launch.
- [Product Update: Layer Reordering, AI Model Upgrades, and Faster Loading](/blog/2026/04/06/product-update-layer-reordering-ai-models-and-faster-loading) — most recent model upgrades and variable pricing.