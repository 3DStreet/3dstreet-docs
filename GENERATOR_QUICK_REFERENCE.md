# Generator App - Quick Reference & Code Snippets

## File-by-File Summary

| File | Lines | Purpose |
|------|-------|---------|
| **generator.js** | 1416 | Text-to-image generation, model selection, dimension/parameter controls, gallery integration |
| **inpaint.js** | 965 | Source image upload, mask canvas drawing, inpainting generation |
| **outpaint.js** | 779 | Source image upload, expansion pixel inputs, outpainting generation |
| **api.js** | 140 | Firebase API communication, polling mechanism, error handling |
| **main.js** | 208 | Tab management, notifications, button state management |
| **mount-gallery.js** | 189 | Gallery React component integration, image actions |
| **mount-auth.js** | 80 | Firebase auth UI, token display mounting |
| **index.js** | 63 | Entry point, module initialization |
| **image-upload-utils.js** | 72 | Drag-and-drop, file validation |
| **store.js** | 12 | Zustand state management (minimal) |

## Feature Matrix by Tab

```
Feature                 Generator  Inpaint  Outpaint  Gallery
─────────────────────────────────────────────────────────────
Image Upload            N/A        YES      YES       YES (view)
Text Prompt             YES        YES      OPTIONAL  View
Canvas Editing          NO         YES      NO        NO
Expansion Controls      NO         NO       YES       NO
Model Selection         YES        FIXED    FIXED     View
Dimensions Control      YES        N/A      N/A       View
Aspect Ratio Control    YES*       N/A      N/A       N/A
Brush Controls          NO         YES      NO        NO
Parameter Sliders       YES        YES      YES       View
Advanced Options        YES        YES      YES       View
Download Image          YES        YES      YES       YES
Copy Parameters         YES        YES      YES       YES
Copy to Clipboard       NO         NO       NO        YES
Save to Gallery         AUTO       AUTO     AUTO      N/A
```
*= Kontext & Ultra models only

## Key Parameters by Model

### Flux Pro 1.1
- No steps/guidance (fixed)
- Dimensions: User selects
- Width & Height: Sent to API

### Flux Pro
- Steps: 1-50 (default 40)
- Guidance: 1.5-5.0 (default 2.5)
- Interval: 1-4 (default 2.0)
- Dimensions: User selects

### Flux Dev
- Steps: 1-50 (default 28)
- Guidance: 1.5-5.0 (default 3.0)
- Dimensions: User selects

### Flux Kontext Pro/Max
- No dimensions (fixed to aspect ratio)
- Aspect Ratio: 1:1, 4:3, 16:9, 21:9, 3:4, 9:16, 9:21
- Prompt Upsampling: Available

### Flux Pro 1.1 Ultra
- No steps/guidance (fixed)
- Aspect Ratio: 1:1, 4:3, 16:9, 21:9, 3:4, 9:16, 9:21
- Raw Mode: Optional
- Image Strength: 0.0-1.0 (when using image prompt)

### Inpaint (Flux Pro 1.0 Fill)
- Steps: 15-50 (default 50)
- Guidance: 1.5-100 (default 60)
- Seed: Optional
- Safety Tolerance: 0-6

### Outpaint (Flux Pro 1.0 Expand)
- Steps: 15-50 (default 50)
- Guidance: 1.5-100 (default 60)
- Expansion: 0-2048 per direction
- Seed: Optional
- Safety Tolerance: 0-6

## Common Parameters (All Models)

```javascript
{
  prompt: String,                    // Description of desired image
  seed: Integer (optional),          // For reproducibility
  safety_tolerance: 0-6,             // 0=strict, 6=loose
  output_format: 'jpeg'|'png',       // File format
  prompt_upsampling: Boolean         // Auto-enhance prompt
}
```

## JavaScript Entry Points

### Starting Generation (Generator Tab)
```javascript
GeneratorTab.generateImage()
  ├─ Validates user auth & tokens
  ├─ Builds parameters via buildRequestParams()
  ├─ Calls FluxAPI.makeRequest(model, params)
  └─ Polls for result via pollForResult()
```

### Starting Inpaint
```javascript
InpaintTab.generateInpaint()
  ├─ Validates image & mask
  ├─ Collects source + mask as base64
  ├─ Builds parameters
  ├─ Calls FluxAPI.makeRequest('flux-pro-1.0-fill', params)
  └─ Polls for result
```

### Starting Outpaint
```javascript
OutpaintTab.generateOutpaint()
  ├─ Validates image loaded
  ├─ Collects expansion values
  ├─ Builds parameters
  ├─ Calls FluxAPI.makeRequest('flux-pro-1.0-expand', params)
  └─ Polls for result
```

### API Request Structure
```javascript
FluxAPI.makeRequest(endpoint, params, method='POST')
  └─ Uses Firebase callable: bflApiProxy({endpoint, method, params})
     └─ Returns: { id: taskId, ... } or throws error
```

### Result Polling
```javascript
FluxAPI.pollForResult(taskId, onProgress, onSuccess, onError)
  ├─ Polls every 1 second
  ├─ Calls onProgress(0.0-1.0) during generation
  ├─ Calls onSuccess(imageUrl, result) when ready
  └─ Calls onError(error) on failure
```

## DOM Element IDs

### Generator Tab
```
#generator-tab
├─ #model-selector
├─ #prompt-input
├─ #orientation-buttons
├─ #dimensions-grid
├─ #steps-slider / #steps-value
├─ #guidance-slider / #guidance-value
├─ #seed-input / #random-seed-btn
├─ #image-prompt-input
├─ #image-prompt-preview
├─ #generate-btn
├─ #preview-container / #preview-image
├─ #loading-indicator / #loading-text
└─ #action-buttons
   ├─ #copy-params-btn
   ├─ #open-image-btn
   ├─ #download-image-btn
   └─ #copy-image-url-btn
```

### Inpaint Tab
```
#inpaint-tab
├─ #inpaint-file-input
├─ #inpaint-mask-canvas
├─ #inpaint-brush-size
├─ #inpaint-clear-mask
├─ #inpaint-prompt
├─ #inpaint-steps-slider
├─ #inpaint-guidance-slider
├─ #inpaint-generate-btn
├─ #inpaint-output-image
├─ #inpaint-loading-indicator
└─ #inpaint-action-buttons
```

### Outpaint Tab
```
#outpaint-tab
├─ #outpaint-file-input
├─ #outpaint-preview-image
├─ #outpaint-top
├─ #outpaint-bottom
├─ #outpaint-left
├─ #outpaint-right
├─ #outpaint-prompt
├─ #outpaint-steps-slider
├─ #outpaint-guidance-slider
├─ #outpaint-generate-btn
├─ #outpaint-output-image
└─ #outpaint-loading-indicator
```

## Dimension Presets

### Generator Tab
```javascript
dimensionsByOrientation: {
  square: ['512x512', '1024x1024', '1440x1440'],
  landscape: ['768x512', '1024x576', '1024x768', '1440x768', '1440x1024'],
  portrait: ['512x768', '576x1024', '768x1024', '1024x1440', '768x1440']
}
```

## Gallery Metadata Structure

```javascript
metadata: {
  model: String,                     // Model used
  prompt: String,                    // Generation prompt
  seed: Number,                      // Seed value
  width: Number,                     // Image width
  height: Number,                    // Image height
  output_format: 'jpeg'|'png',       // Format
  
  // Optional (if applicable):
  aspect_ratio: String,              // For Kontext/Ultra models
  steps: Number,                     // If variable
  guidance: Number,                  // If variable
  interval: Number,                  // For Flux Pro
  raw: Boolean,                      // For Ultra model
  prompt_upsampling: Boolean         // If used
}
```

## Notification Types

```javascript
FluxUI.showNotification(message, type)

Types:
├─ 'success'  → Green notification (checkmark icon)
├─ 'error'    → Red notification (error icon)
└─ 'warning'  → Yellow notification (warning icon)

Duration: 5 seconds (auto-hide)
```

## Token System Messages

| Scenario | Message |
|----------|---------|
| User not authenticated | "Please sign in to use image generation" |
| No tokens available | "No tokens available. Please purchase more tokens or upgrade to Pro." |
| Generation successful | "Image generated successfully!" |
| Generation failed | "Failed to get result: [error details]" |
| Content moderated | "Content was moderated. Please adjust your prompt and try again." |

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Cmd+Enter (Mac) | Generate from any tab |
| Ctrl+Enter (Windows/Linux) | Generate from any tab |

Works in:
- Prompt input textarea (all tabs)
- Expansion input when canvas/preview visible

## CSS Classes for Styling

```css
/* Container layouts */
.grid grid-cols-1 lg:grid-cols-3   /* 3-column desktop, 1 mobile */

/* Buttons */
.orientation-button                 /* Orientation selector buttons */
.dimension-button                   /* Dimension grid buttons */
.selected-orientation              /* Active orientation styling */
.selected-dimension                /* Active dimension styling */

/* UI states */
.hidden                            /* Hide element (Tailwind) */
.opacity-50                        /* Disabled state */
.cursor-not-allowed                /* Disabled cursor */
.disabled                          /* Disabled input */

/* Animations */
.animate-spin                      /* Loading spinner */
.transition-all .duration-300      /* Smooth transitions */
```

## Error Codes from Firebase

```
unauthenticated     → User not signed in
resource-exhausted  → No tokens available
invalid-argument    → Bad request parameters
permission-denied   → User lacks permission
not-found          → Resource doesn't exist
```

## Image Upload Validation

```javascript
ImageUploadUtils.setupDragAndDrop(
  targetElement,
  fileInputElement,
  (dataUrl, fileName) => {
    // Handle uploaded image
    // dataUrl: base64 data URL
    // fileName: original filename
  }
)

Accepted formats: image/png, image/jpeg, image/jpg
```

## Gallery Integration Points

### Using Gallery Image in Generator
```javascript
GeneratorTab.setImagePrompt(imageDataUrl, imageName)
// Places image in Image Prompt field for remix
```

### Using Gallery Image in Inpaint
```javascript
InpaintTab.setInputImage(imageDataUrl)
// Loads image as source for inpainting
```

### Using Gallery Image in Outpaint
```javascript
OutpaintTab.setInputImage(imageDataUrl)
// Loads image as source for outpainting
```

## Performance Notes

- **Canvas Scaling**: Inpaint adapts canvas display size to viewport
- **Image Proxying**: CORS proxy enabled for cross-origin images
- **Polling Interval**: 1 second checks (can be modified in api.js)
- **Notifications**: Auto-hide after 5 seconds
- **Storage**: Images stored in browser's IndexedDB via galleryService

## Browser Compatibility Requirements

- Canvas 2D Context API (inpaint drawing)
- Clipboard API (copy functions)
- FileReader API (image uploads)
- XMLHttpRequest / Fetch API (API calls)
- Touch Events (mobile inpainting)
- CSS Grid & Flexbox (responsive layout)
- Modern ES6+ JavaScript

Minimum: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+

## Configuration

### Model Visibility
Edit model selector `<select>` in generator.js line 190:
```html
<option value="flux-pro-1.1">Flux Pro 1.1</option>
<option value="flux-pro">Flux Pro</option>
<option value="flux-dev">Flux Dev</option>
<option value="flux-kontext-pro" selected>Flux Kontext Pro</option>
```

### Default Dimensions
Edit GeneratorTab.selectedDimension in generator.js line 19:
```javascript
selectedDimension: '1024x1440', // Default dimension
```

### Brush Size Range
Edit InpaintTab brush size slider in inpaint.js line 79:
```html
<input type="range" id="inpaint-brush-size" min="5" max="100" ...>
```

### Polling Interval
Edit FluxAPI.pollForResult in api.js line 106:
```javascript
setTimeout(checkResult, 1000); // 1 second intervals
```

## Common Development Tasks

### Adding a New Model
1. Add `<option>` to model selector in generator.js
2. Add case in `updateModelParams()` (line 624+)
3. Add case in `buildRequestParams()` (line 1035+)
4. Update parameter visibility rules

### Changing Default Parameters
1. Locate slider element HTML
2. Update `value="X"` attribute
3. Update corresponding JavaScript variable

### Adding New Advanced Option
1. Create HTML element in createTabContent()
2. Get element reference in getElements()
3. Add event listener in setupEventListeners()
4. Include in buildRequestParams()
5. Add to gallery metadata if relevant

### Debugging Generation
1. Check browser console for errors
2. Verify user is authenticated: `window.authState`
3. Check token balance: `window.authState.tokenProfile.genToken`
4. Monitor network requests in DevTools
5. Check FluxUI notifications for user-facing errors
