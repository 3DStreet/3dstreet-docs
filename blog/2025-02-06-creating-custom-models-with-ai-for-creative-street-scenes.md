---
title: "From Photos to 3D: Creating Custom Models with AI for Creative Street Scenes"
description: Learn how to use AI tools like TRELLIS to transform photos into 3D models for your street visualization projects.
authors: [kfarr]
tags: [3d models, AI, TRELLIS, street design, visualization]
image: ./images/custom-3d-models-hero.jpg
---

![A split image showing a physical toy car on the left and its 3D model counterpart in a street scene on the right](./images/custom-3d-models-hero.jpg)

Have you ever found yourself designing a street scene and wishing you had that perfect 3D model to bring your vision to life? Whether it's a unique piece of street furniture, a local landmark, or even a toy car, traditional 3D modeling can be time-consuming and requires specialized skills. But what if you could turn any object into a 3D model with just a couple of photos and some AI magic? Let's explore how to do exactly that!

<!-- truncate -->

## The Power of AI-Generated 3D Models

![Screenshot of the TRELLIS interface showing the upload and generation process](./images/trellis-interface.jpg)

Until recently, creating custom 3D models required extensive knowledge of 3D modeling software and hours of work. Now, thanks to advances in AI technology, tools like Microsoft's TRELLIS can transform simple photographs into usable 3D models in minutes. This opens up exciting possibilities for urban designers, planners, and anyone interested in creating more imaginative and personalized street scenes.

## Step-by-Step Guide to Creating Your 3D Model

### 1. Capture Your Reference Images

![Two sample photos of an object from different angles, showing optimal photography setup](./images/photo-setup-example.jpg)

The quality of your 3D model starts with good reference photos. Here's what you need:
- Take 1-2 clear photos of your object from different angles
- Ensure good lighting and contrast
- A neutral background works best
- Include both front and side views when possible

### 2. Generate Your 3D Model with TRELLIS

Head over to [TRELLIS on Hugging Face](https://huggingface.co/spaces/JeffreyXiang/TRELLIS) to start the conversion process:

1. Upload your reference photos
2. Click "Generate" and wait for the AI to work its magic
3. Review the preview to ensure it captures your object well
4. Click "Extract GLB" to download your 3D model

Pro tip: If you're feeling adventurous, you can also try [Hunyuan3D-2](https://huggingface.co/spaces/tencent/Hunyuan3D-2), which allows you to generate 3D models directly from text descriptions!

### 3. Validate Your Model

![Screenshot showing the GLTF Viewer interface with a successfully loaded model](./images/gltf-viewer-validation.jpg)

Before proceeding, it's crucial to verify your model:
1. Visit [gltf-viewer.donmcurdy.com](https://gltf-viewer.donmcurdy.com)
2. Drag and drop your GLB file into the viewer
3. Confirm the model loads correctly and looks as expected

### 4. Optimize for Web Use

![Screenshot of OptimizeGLB.com interface showing compression settings](./images/optimize-glb-interface.jpg)

Your initial model might be larger than necessary. Here's how to optimize it:

1. Go to [OptimizeGLB.com](https://optimizeglb.com)
2. Upload your GLB file
3. Enable Draco compression (but avoid mesh simplification)
4. Click "Process All Files"
5. Right-click the "Download" button and copy the link address

This step not only reduces file size but also gives you a hosted URL for your model.

### 5. Import into 3DStreet

![Screenshot showing the 3DStreet interface with the GLB import dialog](./images/3dstreet-import.jpg)

Finally, let's bring your model into 3DStreet:

1. Open your 3DStreet scene
2. Click "Add Layer" or "Custom Layers"
3. Select "GLTF Model from URL"
4. Paste your OptimizeGLB link
5. Adjust scale and position as needed

## Tips for Success

- Start with simple objects that have clear shapes and details
- Take photos in good lighting conditions
- Use the validation step to catch any issues early
- Consider the final size and scale in your street scene
- Keep backup copies of your original files

## Share Your Creations!

We'd love to see what you create with this workflow! Share your models and scenes with the 3DStreet community on our Discord channel or tag us on social media.

## Looking Ahead

![Conceptual illustration showing various AI-generated 3D models in a street scene](./images/future-possibilities.jpg)

The intersection of AI and 3D modeling is evolving rapidly. Tools like TRELLIS are just the beginning, and we're excited to see how this technology will continue to make street design more accessible and creative for everyone.

Remember, whether you're adding unique street furniture, local landmarks, or playful elements to your scenes, AI-powered 3D modeling can help bring your vision to life with unprecedented ease.

Want to see this process in action? Check out our video tutorial below:

[Video Tutorial Placeholder]

Happy modeling! 🚀