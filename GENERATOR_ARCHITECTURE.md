# Generator App - Architecture & Data Flow Diagrams

## Component Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         index.js (Entry Point)                      │
│              Initializes Firebase, mounts all modules               │
└────────────────────────┬────────────────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
    ┌────────┐      ┌────────┐      ┌──────────────┐
    │main.js │      │  Auth  │      │   Gallery    │
    │ FluxUI │      │        │      │              │
    └────────┘      └────────┘      └──────────────┘
        │                                   │
        │ (Tab Management)                  │ (Image Storage & Actions)
        │                                   │
        ├─────────────────┬─────────────────┤
        │                 │                 │
        ▼                 ▼                 ▼
    ┌──────────┐    ┌──────────┐    ┌──────────┐
    │Generator │    │ Inpaint  │    │Outpaint  │
    │   Tab    │    │   Tab    │    │   Tab    │
    │(1416 L)  │    │ (965 L)  │    │ (779 L)  │
    └────┬─────┘    └────┬─────┘    └────┬─────┘
         │                │               │
         │ (All tabs use)  │ (All tabs use)
         └────────┬────────┴───────────────┘
                  │
                  ▼
            ┌───────────┐
            │ api.js    │
            │ FluxAPI   │
            └─────┬─────┘
                  │
                  ▼
        ┌─────────────────────┐
        │ Firebase Functions  │
        │   (bflApiProxy)     │
        └─────────┬───────────┘
                  │
                  ▼
        ┌─────────────────────┐
        │  BFL Flux API       │
        │  Image Generation   │
        └─────────────────────┘
```

## Data Flow - Text-to-Image Generation

```
USER INTERFACE (Generator Tab)
│
├─ Prompt Input
├─ Model Selection
├─ Dimension Selection
├─ Parameter Sliders (Steps, Guidance, etc.)
├─ Image Prompt (optional)
└─ Generate Button Click
       │
       ▼
VALIDATION LAYER
├─ Check Authentication
├─ Check Token Balance
└─ Validate Parameters
       │
       ▼
PARAMETER BUILDING (buildRequestParams)
│
├─ Model-Specific Parameters
│  ├─ Flux Pro 1.1: dimensions
│  ├─ Flux Pro: dimensions + steps + guidance + interval
│  ├─ Flux Dev: dimensions + steps + guidance
│  └─ Flux Kontext: aspect_ratio + prompt_upsampling
├─ Common Parameters
│  ├─ prompt
│  ├─ seed (optional)
│  ├─ output_format (jpeg/png)
│  ├─ safety_tolerance
│  └─ image_prompt (if provided)
└─ Request Object Built
       │
       ▼
API LAYER (FluxAPI.makeRequest)
│
├─ Firebase Cloud Function Call
│  └─ bflApiProxy({endpoint, method: 'POST', params})
│       │
│       ▼
│     FIREBASE (Server-Side)
│     ├─ Verify API Key
│     ├─ Deduct Token from User
│     ├─ Call BFL API
│     └─ Return Task ID
│       │
│       ▼
│     BFL API Response
│     └─ { id: "task-123", ... }
│
└─ Return to Client with Task ID
       │
       ▼
POLLING LAYER (pollForResult)
│
├─ Start Polling Loop (1s intervals)
│  └─ Call bflApiProxy({ endpoint: 'get_result', id: taskId })
│       │
│       ▼
│     Firebase → BFL API → Check Status
│     │
│     ├─ Status: "Generating" → Continue Polling
│     ├─ Status: "Ready" → Extract Image URL
│     ├─ Status: "Error" → Error Notification
│     └─ Status: "Content Moderated" → Moderation Error
│
└─ Success Callback with Image URL
       │
       ▼
IMAGE PROCESSING
├─ Get Proxied Image URL (CORS bypass)
├─ Fetch Image Data
├─ Fetch Meta Data (seed, parameters used)
└─ Update currentParams with actual values
       │
       ▼
DISPLAY & SAVE
├─ Display Image in Preview
├─ Extract Image Dimensions
├─ Auto-Save to Gallery with Metadata
│  └─ { model, prompt, seed, dimensions, steps, guidance, ... }
├─ Show Action Buttons
└─ Refresh Token Count
       │
       ▼
USER FEEDBACK
├─ Success Notification
├─ Image visible in preview
└─ Gallery item appears in sidebar
```

## Data Flow - Inpainting

```
USER INTERFACE (Inpaint Tab)
│
├─ Upload Source Image
│  └─ Canvas Initialized with Image
│       │
│       ▼
├─ DRAW MASK on Canvas
│  ├─ Mouse/Touch Events
│  ├─ Draw White Areas (areas to regenerate)
│  ├─ Brush Size Control (5-100px)
│  └─ Clear Mask Button
│
├─ Prompt Input (what to generate in masked area)
├─ Parameter Controls (Steps, Guidance)
└─ Generate Button
       │
       ▼
VALIDATION
├─ Source Image Loaded?
├─ Mask Has Content?
├─ Prompt Not Empty?
└─ User Authenticated & Has Tokens?
       │
       ▼
PARAMETER BUILDING
│
├─ Source Image (base64)
├─ Mask Image (base64 - white areas marked)
├─ Prompt
├─ Steps (15-50)
├─ Guidance (1.5-100)
├─ Seed (optional)
├─ Output Format
└─ Safety Tolerance
       │
       ▼
API CALL
│
└─ FluxAPI.makeRequest('flux-pro-1.0-fill', params)
    └─ Firebase → BFL API
         └─ /v1/flux-pro-1.0-fill endpoint
              │
              ▼
         BFL Processing
         ├─ Load Source Image
         ├─ Apply Mask
         ├─ Generate Content in Masked Areas
         └─ Return Inpainted Image
                  │
                  ▼
RESULT HANDLING
├─ Extract Image URL
├─ Display Result
├─ Auto-Save to Gallery
│  └─ Metadata: { source_image, mask, prompt, model, ... }
└─ Show Download/Share Options
```

## Data Flow - Outpainting

```
USER INTERFACE (Outpaint Tab)
│
├─ Upload Source Image
│  └─ Preview Displayed with Original Dimensions
│
├─ EXPANSION CONTROLS
│  ├─ Top Input (0-2048 pixels)
│  ├─ Bottom Input (0-2048 pixels)
│  ├─ Left Input (0-2048 pixels)
│  └─ Right Input (0-2048 pixels)
│       │
│       ▼
│  REAL-TIME CALCULATION
│  └─ Display New Dimensions
│     New Height = Original Height + Top + Bottom
│     New Width = Original Width + Left + Right
│
├─ Prompt Input (optional - guides expansion)
├─ Parameter Controls (Steps, Guidance)
└─ Generate Button
       │
       ▼
VALIDATION
├─ Image Loaded?
├─ At Least One Expansion Value > 0?
├─ Expansion Values Valid (0-2048)?
├─ User Authenticated & Has Tokens?
└─ New Size Reasonable?
       │
       ▼
PARAMETER BUILDING
│
├─ Source Image (base64)
├─ Expansion Values
│  ├─ top_pixels
│  ├─ bottom_pixels
│  ├─ left_pixels
│  └─ right_pixels
├─ Prompt (optional)
├─ Steps (15-50)
├─ Guidance (1.5-100)
├─ Seed (optional)
├─ Output Format
└─ Safety Tolerance
       │
       ▼
API CALL
│
└─ FluxAPI.makeRequest('flux-pro-1.0-expand', params)
    └─ Firebase → BFL API
         └─ /v1/flux-pro-1.0-expand endpoint
              │
              ▼
         BFL Processing
         ├─ Load Source Image
         ├─ Position Original in Expanded Canvas
         ├─ Generate New Pixels
         │  ├─ Top edge
         │  ├─ Bottom edge
         │  ├─ Left edge
         │  └─ Right edge
         └─ Return Expanded Image
                  │
                  ▼
RESULT HANDLING
├─ Extract Image URL
├─ Display Expanded Result
├─ Auto-Save to Gallery
│  └─ Metadata: { original_size, expansion_values, prompt, ... }
└─ Show Download/Share Options
```

## State Management

### GeneratorTab State
```javascript
{
  imagePromptData: String (base64),    // Image for remix
  currentParams: Object,                // Last generation params
  currentImageUrl: String,              // Last generated image
  selectedOrientation: 'portrait'|'landscape'|'square',
  selectedDimension: '1024x1440',
  elements: {},                         // DOM elements cache
}
```

### InpaintTab State
```javascript
{
  imageData: String (base64),          // Source image
  maskData: String (base64),           // Mask drawing
  currentParams: Object,               // Generation params
  currentImageUrl: String,             // Result URL
  brushSize: Number,                   // 5-100
  originalWidth: Number,
  originalHeight: Number,
  displayCanvasScale: Number,          // Responsive scaling
  maskLayerCanvas: HTMLCanvasElement,
  elements: {}                         // DOM elements cache
}
```

### OutpaintTab State
```javascript
{
  imageData: String (base64),          // Source image
  currentParams: Object,               // Generation params
  currentImageUrl: String,             // Result URL
  originalWidth: Number,
  originalHeight: Number,
  elements: {}                         // DOM elements cache
}
```

### Global FluxUI State
```javascript
{
  apiConfig: {},
  elements: {
    tabButtons,
    tabContents,
    notification,
    notificationMessage,
    notificationIcon
  },
  tabModules: {
    generator,
    inpaint,
    outpaint
  }
}
```

## API Endpoints Used

### 1. Generation Endpoints (via Firebase)

**Text-to-Image:**
- `flux-pro-1.1`
- `flux-pro`
- `flux-dev`
- `flux-kontext-pro`
- `flux-kontext-max`

**Inpainting:**
- `/v1/flux-pro-1.0-fill`

**Outpainting:**
- `/v1/flux-pro-1.0-expand`

### 2. Polling Endpoint
```
GET /get_result?id={taskId}
```
Returns:
```json
{
  "id": "task-123",
  "status": "Ready" | "Error" | "Content Moderated" | "Request Moderated",
  "progress": 0.0-1.0,
  "result": {
    "sample": "https://image-url...",
    "details": {
      "model_id": "flux-pro",
      "request_params": { ... },
      "seed": 12345
    }
  }
}
```

### 3. Firebase Cloud Functions
```
bflApiProxy(request)
├─ endpoint: string (model name or 'get_result')
├─ method: 'POST' | 'GET'
└─ params: object

Returns:
{
  success: boolean,
  result: { id, status, result, ... },
  remainingTokens: number,
  error: string (if success: false)
}
```

## Error Handling Flow

```
API Request
│
├─ Network Error
│  └─ Show: "Failed to connect to API"
│
├─ Authentication Error
│  └─ Show: "Please sign in to use image generation"
│
├─ Token Exhausted
│  └─ Show: "No tokens available. Please purchase more"
│
├─ Content Moderated
│  └─ Show: "Content was moderated. Please adjust your prompt"
│
├─ Generation Error
│  └─ Show: "Generation error: [details]"
│
└─ Success
   └─ Process Result & Display Image
```

## Gallery Integration

```
Generated Image
│
├─ Auto-Save to Gallery (galleryService.addImage)
│  │
│  ├─ Image Data (as Blob)
│  ├─ Metadata
│  │  ├─ model
│  │  ├─ prompt
│  │  ├─ seed
│  │  ├─ width/height
│  │  ├─ output_format
│  │  ├─ steps
│  │  ├─ guidance
│  │  └─ other params
│  │
│  └─ Source Type ('ai-render')
│
└─ Gallery Item Created
   │
   ├─ Copy Parameters to Clipboard
   ├─ Copy Image to Clipboard
   ├─ Use for Generator (as Image Prompt)
   ├─ Use for Inpaint (as Source Image)
   ├─ Use for Outpaint (as Source Image)
   └─ View/Download Image
```

## Token System Flow

```
User Click Generate
│
├─ Check authState.isAuthenticated
│  └─ If false: Show Sign-In Modal
│
├─ Check authState.tokenProfile.genToken > 0
│  └─ If false: Show Purchase Modal
│
├─ Allow Generation
│
└─ After Successful Generation
   ├─ Server Deducts 1 Token
   ├─ remainingTokens Returned
   ├─ Dispatch 'tokenCountChanged' Event
   └─ Token Display Updated
```

## Responsive Layout

```
Desktop (lg breakpoint: 1024px)
┌─────────────────────────────────────────────┐
│  HEADER (Auth, Token Count, App Switcher)   │
├──────────┬──────────────────────────────────┤
│ TABS     │  MAIN CONTENT AREA               │
├──────────┼──────────────────────────────────┤
│ LEFT     │ RIGHT (2/3 width)                │
│ (1/3)    │ ┌─────────────┐ ┌─────────────┐ │
│          │ │ Preview     │ │ Action Btns │ │
│ Controls │ │             │ └─────────────┘ │
│          │ │             │                 │
│ Inputs   │ │             │                 │
│          │ │             │                 │
│ Sliders  │ │             │                 │
│          │ └─────────────┘                 │
└──────────┴──────────────────────────────────┘

Mobile (< 1024px)
┌─────────────────────────┐
│ HEADER                  │
├─────────────────────────┤
│ TABS                    │
├─────────────────────────┤
│                         │
│    LEFT COLUMN          │
│   (Full Width)          │
│   - Inputs              │
│   - Controls            │
│                         │
├─────────────────────────┤
│                         │
│    RIGHT COLUMN         │
│   (Full Width)          │
│   - Preview             │
│   - Action Buttons      │
│                         │
└─────────────────────────┘
```
