---
title: "Creating AR Scenes with Historic Imagery and 3DStreet's New Viewer Mode"
description: "Learn how to transform historic photos into immersive AR experiences using World Labs, 3DStreet's AR viewer mode, and geospatial positioning for community engagement."
authors: [kfarr]
tags: [AR, augmented reality, historic preservation, community engagement, World Labs, geospatial, viewer mode]
image: ./images/2025-08-13/cesar-chavez-ar-scene.jpg
---

# Creating AR Scenes with Historic Imagery and 3DStreet's New Viewer Mode

Ever wondered what your neighborhood looked like 100 years ago? With 3DStreet's enhanced AR capabilities and AI tools like World Labs, you can now create immersive augmented reality experiences that let people walk through history. I recently used this workflow to create AR scenes of historic San Francisco for a Green Density housing tour, allowing participants to toggle between past and present views of the same location.

![AR scene showing Cesar Chavez in 1912 vs 2025](./images/2025-08-13/cesar-chavez-ar-scene.jpg)

<!-- truncate -->

This tutorial will walk you through the complete process I used to create AR experiences for my Green Density walking tour, where participants could scan QR codes and see how San Francisco's landscape has evolved over time.

## What You'll Create

By the end of this tutorial, you'll have:
- Transformed historic photos into 360° panoramic scenes using World Labs
- Created geospatially-positioned AR scenes in 3DStreet
- Generated QR codes for easy sharing with tour participants
- Built an engaging community experience that brings history to life

## Step 1: Find and Prepare Your Historic Photo

Start by finding a historic photograph of your location. Early photos from the 1800s and early 1900s work best, though the image quality may need enhancement.

![Historic photo of Cesar Chavez street from 1931](./images/2025-08-13/historic-cesar-chavez-1931.jpg)

### Enhancing Image Quality (Optional)

If your historic photo needs improvement, you have several AI-powered options:

**Option 1: OpenAI GPT Image Model**
- Good for general enhancement but not always geometrically accurate
- Best for artistic interpretation

**Option 2: Flux Kontext Pro** 
- Better for reshading while maintaining geometric accuracy
- Excellent for improving lighting and detail quality

**Option 3: Fill Editing**
- Use tools like the Fill function in Black Forest Labs
- Great for replacing empty areas with historically accurate details
- I used this to better illustrate the historic Precita Creek area

## Step 2: Create a 360° Scene with World Labs

Once you have your enhanced historic photo, it's time to create a full panoramic environment.

1. **Import to World Labs**: Upload your modified photo to [World Labs](https://www.worldlabs.ai/)
2. **Generate 3D Scene**: The AI will expand your 2D image into a full 360° environment
3. **Export Panoramic Image**: Download the resulting equirectangular (panoramic) image

![World Labs interface showing 360° generation process](./images/2025-08-13/world-labs-interface.jpg)

## Step 3: Host Your Panoramic Image

You'll need your panoramic image to be publicly accessible via URL:

1. **Upload to GitHub Pages**: Create a new repository and upload your image
2. **Alternative Hosting**: Use any publicly accessible web hosting service
3. **Get Direct URL**: Copy the direct link to your image file

## Step 4: Create Your 3DStreet AR Scene

Now comes the exciting part - building your AR scene in 3DStreet.

### Setting Up the Basic Scene

1. **Create New Scene**: Start a new project in 3DStreet
2. **Set Geospatial Location**: 
   - Click the location icon and enter the real-world coordinates
   - This anchors your AR experience to the physical location

![Setting geospatial location in 3DStreet](./images/2025-08-13/set-location.jpg)

### Adding the Panoramic Skybox

1. **Add Custom Geometry**:
   - Start by adding a circle geometry
   - Click "Advanced" and change geometry type to "sphere"

2. **Apply Your Historic Image**:
   - Select the sphere and go to the Material section
   - Click the image icon next to material settings
   - Choose "Add new material" and paste your panoramic image URL

![Adding panoramic material to sphere](./images/2025-08-13/add-panoramic-material.jpg)

3. **Adjust Orientation**:
   - Fine-tune the Y rotation to align the view correctly
   - You may need to double-click on "User Layers" or the first "a-entity" to access rotation settings

### Configure AR Viewer Mode

This is where 3DStreet's new viewer mode capabilities shine:

1. **Select Viewer Mode**: Choose "AR Mode" from the viewer options
2. **Enable WebXR-AR**: Set the viewer mode to `webxr-ar`
3. **iOS Support**: Enable iOS support (requires Pro plan)
4. **Generate QR Code**: Click to generate and download the QR code

![Viewer mode settings showing AR configuration](./images/2025-08-13/ar-viewer-settings.jpg)

## Step 5: Test Your AR Experience

Before sharing with others, thoroughly test your AR scene:

1. **Visit the Location**: Go to the physical location where your scene is anchored
2. **Start Recording**: Use your device's built-in screen recording
3. **Scan QR Code**: Use your phone's camera to scan the code
4. **Launch AR**: Follow the prompts to open the AR experience
5. **Orient Yourself**: Face the correct direction (typically west for my examples)
6. **Activate Scene**: Click the play button to begin the AR experience
7. **Toggle Visibility**: Use the eye icon to fade the historic scene in and out

![Testing the AR experience on location](./images/2025-08-13/testing-ar-onsite.jpg)

## Step 6: Prepare for Community Engagement

### Print Materials

- **QR Codes**: Print multiple copies of your QR codes
- **Map Integration**: Include codes on tour maps or information sheets
- **Instructions**: Provide simple step-by-step instructions for participants

### Day-of-Event Tips

- **Multiple Copies**: Bring plenty of printed QR codes
- **Backup Device**: Have a dedicated device ready to demonstrate
- **Quick Demo**: Practice a 20-second demo for hesitant participants
- **Troubleshooting**: Be prepared to help with QR code scanning issues

## Real-World Results

During my Green Density walking tour, I tested three historic locations:

1. **Cesar Chavez (1931)** Showing early rails and paved surfaces over buried Precita Creek
2. **26th and Folsom (late 1800s)**: Revealing the original Precita Creek before it was buried
3. **Dolores Park**: Displaying the original marshland and watershed view toward the East Bay

The experience was powerful - participants could literally see how San Francisco's landscape and housing density have evolved over time. Most people needed less than 20 seconds to see the full experience, making it perfect to illustrate a stop on a walking tour.

## Technical Notes

### Device Compatibility

- **Android**: Works with modern devices using Chrome or Edge browsers that support WebXR
- **iOS**: Available through enhanced compatibility features for Pro subscribers

### Future Enhancements

While this workflow creates compelling historical AR experiences, imagine the possibilities when we can capture photos of people within these scenes! The technology continues to evolve, making these immersive historical experiences more accessible and engaging.

## Tips for Success

- **Start Simple**: Begin with one location before scaling to multiple sites
- **Test Early**: Visit the location and test the AR experience before your event
- **Backup Plans**: Have printed photos as fallbacks if technology fails
- **Engage Participants**: Encourage people to share their reactions and discoveries

## Wrapping Up

Creating AR experiences with historic imagery opens up incredible opportunities for community engagement and education. By combining AI-enhanced historic photos, World Labs' 360° generation, and 3DStreet's AR viewer mode, you can create experiences that truly bring the past to life.

This workflow bridges the gap between historical preservation and modern technology, creating memorable experiences that help people understand how their neighborhoods have changed over time. Whether you're planning a community walking tour, creating educational content, or simply exploring local history, these tools make it easier than ever to share the stories embedded in our urban landscapes.

Ready to create your own historic AR experience? Start by finding a compelling photo from your area's past, and let technology help you bring that history into the present.