# 3DStreet Generator App - Comprehensive Documentation Guide

## 1. PURPOSE OF THE GENERATOR APP

The Generator App is an **AI-powered image generation and editing platform** that integrates with the Flux AI image generation models from Black Forest Labs (BFL). It provides a web-based interface for users to:

- Generate images from text prompts using various Flux AI models
- Edit existing images through inpainting (content-aware fill)
- Expand images using outpainting (intelligent extension)
- Manage generated images in a gallery
- Save and share generation parameters for reproducibility

The app is designed as a **token-based system** where users spend generation tokens to create images, with a focus on quality, control, and creative flexibility.

---

## 2. MAIN FEATURES AND FUNCTIONALITY

### Core Features

#### A. **Text-to-Image Generation (Generator Tab)**
- Generate images from text prompts
- Multiple Flux models available:
  - Flux Pro 1.1 (fixed parameters, no steps/guidance)
  - Flux Pro (with steps, guidance, and interval parameters)
  - Flux Dev (development version with tunable parameters)
  - Flux Kontext Pro (context-aware generation)
  - Flux Kontext Max (advanced context features)
- Configurable image dimensions (Square, Landscape, Portrait orientations)
- Support for image prompts (remix functionality)

#### B. **Image Inpainting (Inpaint Tab)**
- Load images and draw masks to specify areas for regeneration
- Interactive canvas with brush controls for precise masking
- Generates new content for masked areas while preserving surrounding image
- Model: Flux Pro 1.0 Fill
- Full parameter control for quality and style

#### C. **Image Outpainting (Outpaint Tab)**
- Expand images in any direction (top, bottom, left, right)
- Specify expansion amount in pixels (max 2048 per direction)
- Preserves original content and generates seamless extensions
- Model: Flux Pro 1.0 Expand
- Optional prompt for controlling expansion style

#### D. **Gallery Management**
- Automatic saving of generated images
- Browse and organize all generated images
- Copy images to clipboard (when supported)
- Copy generation parameters for later reproduction
- Use gallery images as input for other tools (remix, inpaint, outpaint)
- Images stored with full metadata (model, prompt, seed, parameters)

#### E. **User Authentication & Token System**
- Firebase authentication integration
- Token-based payment system for image generation
- Token balance display
- Purchase modal for acquiring more tokens
- User profile integration

---

## 3. COMPONENTS AND ARCHITECTURE

### File Structure

```
/src/generator/
├── index.js                    # Entry point, initializes all modules
├── main.js                     # FluxUI - Tab switching and notifications
├── generator.js                # Generator Tab (1416 lines) - Core generation UI
├── inpaint.js                  # Inpaint Tab (965 lines) - Mask drawing and inpaint
├── outpaint.js                 # Outpaint Tab (779 lines) - Expansion controls
├── api.js                      # API communication with Firebase
├── store.js                    # Zustand store for modal state
├── mount-gallery.js            # Gallery React component integration
├── mount-auth.js               # Authentication UI mounting
├── mount-app-switcher.js       # App navigation
├── mount-purchase-modal.js     # Purchase modal
├── image-upload-utils.js       # Image upload and drag-drop handling
├── styles/
│   └── styles.css              # Custom CSS for UI
└── .claude/settings.local.json # Local settings
```

### Core Components

#### 1. **FluxUI (main.js)**
- Global UI utilities object
- Manages tab switching and activation
- Displays notifications (success, error, warning)
- Controls dark mode (always enabled)
- Updates button states based on token availability
- Coordinates between different tabs

#### 2. **GeneratorTab (generator.js)**
Responsibilities:
- Prompt input and text-to-image generation
- Model selection and parameter management
- Dimension grid with orientation selection (Square/Landscape/Portrait)
- Advanced options (steps, guidance, seed, safety tolerance)
- Image prompt (remix) functionality
- Output format selection (JPEG/PNG)
- Result display and action buttons
- Gallery integration (auto-save)

Key Features:
- Dynamic dimension grid based on selected orientation
- Model-specific parameter visibility
- Image strength control for Ultra model
- Prompt upsampling option
- Keyboard shortcut (Cmd+Enter) for generation
- Copy parameters functionality
- Download and share capabilities

#### 3. **InpaintTab (inpaint.js)**
Responsibilities:
- Source image upload and display
- Interactive mask drawing canvas
- Brush size adjustment
- Prompt input for inpaint content
- Generation with Flux Pro 1.0 Fill model
- Parameter control (steps, guidance)
- Result output and download

Key Features:
- Mouse and touch event support for drawing
- Brush size slider (5-100px)
- Clear mask button
- Canvas scaling for responsive display
- Display canvas scale vs. original image ratio tracking
- Full mask data stored for API submission

#### 4. **OutpaintTab (outpaint.js)**
Responsibilities:
- Source image upload and preview
- Expansion amount inputs (top, bottom, left, right)
- Real-time new size calculation
- Optional prompt for expansion guidance
- Generation with Flux Pro 1.0 Expand model
- Result output and download

Key Features:
- Four directional expansion controls (max 2048px each)
- Live new size preview calculation
- Image preview with dimensions
- Seamless content generation for boundaries
- Preserves original image content

#### 5. **FluxAPI (api.js)**
Responsibilities:
- Firebase Cloud Functions communication
- API request handling to BFL endpoints
- Result polling mechanism
- Image URL proxying (CORS bypass)
- Error handling and user-friendly messages
- Token deduction and tracking

Key Features:
- Uses Firebase `httpsCallable` for secure API calls
- Polling loop with progress tracking
- Content moderation detection
- CORS proxy for image display
- Supports both localhost and production environments

#### 6. **Gallery Integration (mount-gallery.js)**
Responsibilities:
- React-based gallery component mounting
- Gallery item action handlers
- Integration with all three tabs
- Image metadata management

Key Features:
- Copy parameters to clipboard
- Copy image to clipboard (clipboard API)
- Use image for inpainting
- Use image for outpainting
- Use image for generator (remix)
- Automatic image saving to gallery

#### 7. **Authentication (mount-auth.js)**
- Firebase auth UI mounting
- Token display component
- User state management

#### 8. **Image Upload Utils (image-upload-utils.js)**
- File drag-and-drop handling
- Image file validation
- Base64 data URL conversion

---

## 4. HOW IT WORKS - GENERATION PIPELINE

### A. Text-to-Image Generation Flow

```
1. User enters prompt in Generator Tab
2. Selects model (Flux Pro 1.1, Dev, Pro, Kontext)
3. Configures parameters:
   - Dimensions (for non-Kontext models)
   - Steps/Guidance (model-dependent)
   - Seed (optional, can randomize)
   - Output format (JPEG/PNG)
   - Advanced options (safety, upsampling)
4. User clicks "Generate Image" button
5. System checks:
   - User authenticated?
   - Has tokens available?
6. Parameters built and validated
7. API request to Firebase Cloud Function (bflApiProxy)
8. Firebase function sends to BFL Flux API endpoint
9. Generation task created, returns task ID
10. Client polls for results every 1 second
11. Progress updates displayed in loading screen
12. Generation complete:
    - Image displayed in preview
    - Auto-saved to gallery with metadata
    - Action buttons revealed (download, copy, etc.)
    - Success notification shown
    - Token count refreshed
```

### B. Image Inpainting Flow

```
1. User uploads source image in Inpaint Tab
2. Canvas initialized with image
3. User draws white mask on areas to regenerate
4. Enters prompt describing desired content
5. Configures parameters (steps, guidance)
6. Clicks "Generate Inpaint"
7. System collects:
   - Source image (base64)
   - Mask image (white areas to fill)
   - Prompt and parameters
8. API sends to /v1/flux-pro-1.0-fill endpoint
9. Server generates new content for masked areas
10. Result displayed and auto-saved to gallery
```

### C. Image Outpainting Flow

```
1. User uploads source image in Outpaint Tab
2. Preview displayed with original dimensions
3. User specifies expansion pixels:
   - Top (0-2048)
   - Bottom (0-2048)
   - Left (0-2048)
   - Right (0-2048)
4. Real-time size calculation displayed
5. Optional prompt provided
6. Clicks "Generate Outpaint"
7. System calculates new dimensions
8. API sends to /v1/flux-pro-1.0-expand endpoint
9. Server expands canvas and generates new areas
10. Result preserves original content with seamless extensions
```

### API Communication Details

**Endpoint**: Firebase Cloud Function `bflApiProxy`
- Proxies requests to BFL API
- Handles authentication server-side
- Deducts tokens from user balance
- Tracks remaining tokens
- Manages error states

**Polling Mechanism**:
- Initial request returns task ID
- Client polls `get_result` endpoint every 1 second
- Progress reported via progress field
- Completion status: "Ready", "Error", "Content Moderated", "Request Moderated"
- Image URL extracted from response

**Error Handling**:
- Authentication errors → "Please sign in"
- No tokens → "Purchase more tokens"
- Moderation failures → "Content was moderated"
- Network errors → Graceful retry or user notification

---

## 5. KEY USER-FACING FEATURES FOR DOCUMENTATION

### A. **Generation Models and Parameters**

#### Model Selection
- Document each model's capabilities
- Explain differences in parameter controls
- Describe output quality differences
- Guidance on choosing right model for task

#### Parameters
- **Steps**: Number of diffusion steps (1-50) - More steps = better quality but slower
- **Guidance Scale**: How strongly to follow prompt (1.5-5.0 or 1.5-100 for inpaint/outpaint)
- **Seed**: For reproducible generations, use same seed for identical results
- **Safety Tolerance**: Content safety filtering (0=strictest, 6=least strict)
- **Prompt Upsampling**: Auto-enhancement of prompts
- **Raw Mode**: Less processed, more natural results (Ultra model)
- **Output Format**: Choose between JPEG (smaller files) or PNG (lossless)

### B. **Image Dimensions and Aspect Ratios**

#### Generator Tab Dimensions
- **Square**: 512x512, 1024x1024, 1440x1440
- **Landscape**: 768x512, 1024x576, 1024x768, 1440x768, 1440x1024
- **Portrait**: 512x768, 576x1024, 768x1024, 1024x1440, 768x1440

#### Kontext and Ultra Models
- Use aspect ratios instead of fixed dimensions
- Options: 1:1, 4:3, 16:9, 21:9, 3:4, 9:16, 9:21

### C. **Image Prompt / Remix Feature**

- Upload reference image to influence generation
- Only available for certain models
- **Image Strength** slider controls how much reference influences result
- Range: 0.0 (ignore) to 1.0 (strong influence)

### D. **Inpainting Feature**

- **Brush Controls**: Adjust brush size (5-100px) while drawing
- **Mask Drawing**: White areas on canvas will be regenerated
- **Clear Mask**: Start over with mask drawing
- **Guidance**: Higher values = more adherence to prompt, lower = more creative freedom

### E. **Outpainting Feature**

- **Directional Expansion**: Add pixels to any/all sides
- **Maximum Expansion**: 2048 pixels per direction
- **Real-time Preview**: See new dimensions as you adjust
- **Optional Prompts**: Guide the expansion style (e.g., "extend blue sky")

### F. **Gallery Features**

- **Auto-Save**: Generated images automatically saved to gallery
- **Metadata Storage**: All generation parameters saved with image
- **Use for Other Tools**: 
  - Image → Generator (as remix/image prompt)
  - Image → Inpaint (as source)
  - Image → Outpaint (as source)
- **Parameter Copying**: Copy exact generation parameters to reproduce results
- **Image Sharing**: Copy image to clipboard for easy sharing

### G. **Token System**

- **Token Cost**: 1 token per generation (all tools)
- **Remaining Balance**: Displayed in top right
- **Purchase**: Click purchase when out of tokens
- **No Generation Without Tokens**: System prevents generation and shows purchase modal

### H. **Advanced Controls**

- **Expandable Advanced Options** section with:
  - Safety Tolerance
  - Custom Seeds
  - Randomize Seed Checkbox
  - Prompt Upsampling
  - Raw Mode (Ultra only)
  - Interval parameter (Pro only)
  - Output Format selection

### I. **Keyboard Shortcuts**

- **Cmd+Enter** (Mac) or **Ctrl+Enter** (Windows/Linux): Generate from any tab
- Works in prompt textarea fields

### J. **Output Actions**

- **Download Image**: Save with auto-generated filename (model-timestamp format)
- **Open Image**: View full-size in new browser tab
- **Copy Image URL**: Copy direct link for sharing
- **Copy Parameters**: Copy JSON of all generation parameters
- **View in Gallery**: Access history of all generations

---

## 6. UI/UX PATTERNS FOR DOCUMENTATION

### Layout Structure
- **Left Column (1/3)**: Input controls and parameters
- **Right Column (2/3)**: Preview and results
- **Responsive**: Stacks vertically on mobile

### Visual Feedback
- **Loading State**: Spinner with percentage progress
- **Notifications**: Toast messages (success, error, warning)
- **Button States**: Disabled when no tokens, tooltip when low/no tokens
- **Parameter Display**: Real-time value updates as sliders adjusted

### Navigation
- **Tab Buttons**: Generator, Inpaint, Outpaint, Gallery
- **Gallery Toggle**: Sidebar gallery view
- **App Switcher**: Navigate to other 3DStreet apps

---

## 7. TECHNICAL DETAILS FOR DOCUMENTATION

### Technology Stack
- **Frontend**: Vanilla JavaScript (ES6+) with React for gallery
- **CSS**: Tailwind CSS for styling
- **State Management**: Zustand (minimal store)
- **Backend**: Firebase Cloud Functions
- **API**: Black Forest Labs (BFL) Flux API
- **Authentication**: Firebase Auth

### Data Flow
1. User input → JavaScript event handlers
2. Parameter validation and building
3. Firebase Cloud Function call
4. BFL API request (server-side)
5. Token deduction
6. Result polling
7. Image proxy for CORS handling
8. Gallery storage (IndexedDB via galleryService)
9. UI updates and notifications

### Browser Requirements
- Modern browser with Canvas API support
- Clipboard API for copy functions
- FileReader API for image uploads
- Touch support for mobile inpainting

---

## 8. DOCUMENTATION PRIORITIES

For user-facing documentation, prioritize:

1. **Getting Started Guide**
   - How to generate first image
   - Token system explanation
   - Model selection guide

2. **Feature Tutorials**
   - Text-to-image generation
   - Inpainting workflow
   - Outpainting workflow
   - Gallery management

3. **Parameter Guide**
   - Explanation of each parameter
   - Impact on results
   - Recommended values
   - Advanced tweaking

4. **Troubleshooting**
   - Common errors and solutions
   - Token-related issues
   - Generation failures
   - Browser compatibility

5. **Tips & Tricks**
   - Effective prompting strategies
   - Using seeds for reproducibility
   - Combining tools for advanced edits
   - Managing generations efficiently

