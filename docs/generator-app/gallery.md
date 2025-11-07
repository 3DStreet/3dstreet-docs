# Gallery

The Gallery is your personal collection of all generated images, complete with metadata, search capabilities, and integration with other Generator tools. Learn how to manage, organize, and leverage your creations.

## What is the Gallery?

The Gallery automatically saves every image you generate (text-to-image, inpainting, or outpainting) along with complete metadata including prompts, models, parameters, and generation settings.

## Accessing the Gallery

**Location:**
The Gallery button appears in the top navigation of the Generator App.

**Views:**
- **Grid View:** Thumbnails of all images
- **Detail View:** Click any image for full-size view and metadata

## Gallery Features

### Automatic Saving

Every generation is automatically saved with:

- **Image data** - Full-resolution PNG
- **Generation prompt** - Exact text used
- **Model information** - Which AI model generated it
- **Parameters** - All settings (steps, guidance, seed, etc.)
- **Dimensions** - Width and height
- **Timestamp** - When it was created
- **Type** - Text-to-image, inpaint, or outpaint

**Storage:**
Images are stored locally in your browser using IndexedDB.

### Browsing Images

**Grid View:**
- Chronological order (newest first)
- Thumbnail previews
- Hover for quick info
- Click to expand

**Navigation:**
- Scroll to load more images
- Click thumbnails for detail view
- Use browser back button to return

### Image Detail View

Click any image to see:

1. **Full-size preview** - High-quality display
2. **Metadata panel** - Complete generation details
3. **Action buttons** - Download, copy, use in tools

**Metadata displayed:**
- Prompt text
- Model name
- Dimensions (width × height)
- Seed value
- Steps
- Guidance scale
- Safety tolerance
- Additional parameters (if applicable)
- Generation timestamp

### Gallery Actions

**Download Image**
- Click **Download** button
- Saves as PNG file
- Filename includes timestamp
- Full resolution preserved

**Copy to Clipboard**
- Click **Copy** button
- Copies image to system clipboard
- Paste into other applications
- Quick sharing capability

**Use in Inpaint**
- Click **Inpaint** button
- Loads image into Inpaint tab
- Ready for mask-based editing
- Metadata preserved

**Use in Outpaint**
- Click **Outpaint** button
- Loads image into Outpaint tab
- Ready for expansion
- Metadata preserved

**Copy Prompt**
- Click **Copy Prompt** button
- Copies prompt text to clipboard
- Paste into new generation
- Reuse successful prompts

**Copy Parameters**
- Click **Copy Parameters** button
- Copies all generation settings
- Apply to new generations
- Reproduce exact settings

## Using Gallery with Other Tools

### Gallery → Generator

**Workflow:**
1. Find successful image in Gallery
2. Click **Copy Prompt** or **Copy Parameters**
3. Switch to Generator tab
4. Paste and modify as needed
5. Generate variations

**Use cases:**
- Iterate on successful prompts
- Test parameter variations
- Maintain consistent style

### Gallery → Inpaint

**Workflow:**
1. Browse Gallery for image to edit
2. Click **Inpaint** button
3. Image loads automatically
4. Draw mask and edit

**Use cases:**
- Fix details in generated images
- Enhance specific areas
- Correct mistakes
- Add/remove elements

### Gallery → Outpaint

**Workflow:**
1. Find image to expand in Gallery
2. Click **Outpaint** button
3. Image loads automatically
4. Choose directions and generate

**Use cases:**
- Expand successful generations
- Change aspect ratios
- Add more context
- Create panoramas

### Generator → Gallery → Inpaint → Gallery

**Iterative workflow:**
1. Generate base image
2. Review in Gallery
3. Load into Inpaint for fixes
4. Result auto-saves to Gallery
5. Repeat as needed

## Organization Strategies

### By Project

Since Gallery saves all metadata, you can organize mentally by:

**Naming convention in prompts:**
```
[Project Name] - [Description]
Example: "Main Street Redesign - protected bike lanes with planters"
```

**Benefits:**
- Easy to search
- Groups related images
- Tracks project iterations

### By Type

Gallery automatically tracks generation type:
- Text-to-image
- Inpaint
- Outpaint

**Use metadata to filter mentally:**
- "Show me all inpaint edits"
- "Find text-to-image base generations"

### By Model

Track which model created best results:

**Review metadata to identify:**
- Which model works best for your style
- Quality vs. cost trade-offs
- Speed vs. quality balance

### By Success

**Mental categories:**
- ⭐ Final/production images
- 🔧 Work in progress
- 🧪 Experiments/tests
- ❌ Failed attempts (learn from these)

## Gallery Management

### Storage

**Local Storage:**
Images stored in browser IndexedDB (not cloud).

**Implications:**
- Available offline
- Private to your browser
- Not synced across devices
- Not backed up automatically

**Recommendations:**
1. **Download important images** regularly
2. **Organize downloads** in project folders
3. **Don't rely solely** on Gallery for backups
4. **Clear browser data cautiously** - will delete Gallery

### Performance

**Large Gallery considerations:**

As your Gallery grows:
- May load slower with many images
- Consider downloading and clearing old images
- Keep Gallery focused on current projects

### Clearing Gallery

**To clear Gallery data:**
1. Clear browser data for site
2. Or clear browser cache/storage
3. **Warning:** This is permanent deletion

**Before clearing:**
1. Download important images
2. Export prompts/parameters you want to keep
3. Consider archiving project images

## Best Practices

### 1. Download Regularly

**Why:**
- Browser storage can be cleared
- Device issues could cause data loss
- Need offline access
- Want to share or archive

**How:**
- Download final/important images immediately
- Create organized folder structure
- Include metadata in filename or sidecar files

### 2. Document Successful Settings

**Why:**
- Reproduce good results
- Learn what works
- Build personal best practices

**How:**
- Copy parameters from successful images
- Keep notes on model/setting combinations
- Screenshot or note prompt patterns that work

### 3. Use Gallery for Learning

**Why:**
- Understand what parameters do
- See effect of different models
- Improve prompt writing

**How:**
- Compare similar images with different settings
- Review metadata of best results
- Identify patterns in successful generations

### 4. Leverage for Iteration

**Why:**
- Build on successes
- Refine incrementally
- Maintain consistency

**How:**
- Copy prompts from good results
- Load images into inpaint/outpaint
- Systematically test variations

### 5. Create Backup Workflow

**Why:**
- Protect important work
- Enable cross-device access
- Long-term archiving

**How:**
- Regular downloads to organized folders
- Cloud backup of download folders
- Export metadata alongside images

## Gallery Metadata Uses

### Reproducing Results

**Scenario:** Generated perfect image, want similar

**Process:**
1. Open image in Gallery detail view
2. Note exact seed value
3. Copy all parameters
4. Use in new generation
5. Modify only what you want different

### Comparing Parameters

**Scenario:** Testing what settings work best

**Process:**
1. Generate with Setting A
2. Generate with Setting B
3. Compare in Gallery side-by-side
4. Review metadata differences
5. Determine which approach is better

### Learning from Success

**Scenario:** Some images great, others not

**Process:**
1. Review metadata of successful images
2. Identify common factors (model, steps, guidance, etc.)
3. Note effective prompt patterns
4. Apply learnings to future generations

### Tracking Costs

**Scenario:** Managing token budget

**Process:**
1. Review Gallery images
2. Note model and dimensions used
3. Identify high-cost vs. low-cost generations
4. Optimize future strategy

## Troubleshooting

### Gallery Not Loading

**Possible causes:**
- Browser storage full
- Browser privacy settings blocking IndexedDB
- Extension interference

**Solutions:**
- Clear some browser storage
- Check privacy/content settings
- Disable interfering extensions
- Try different browser

### Image Missing

**Possible causes:**
- Browser data cleared
- Storage quota exceeded
- Generation failed to save

**Solutions:**
- Check browser storage settings
- Download important images immediately
- Verify generations complete successfully

### Metadata Not Showing

**Possible causes:**
- Metadata not stored with image
- Browser compatibility issue

**Solutions:**
- Try refreshing page
- Update browser to latest version
- Check browser console for errors

### Cannot Load Image into Tool

**Possible causes:**
- Image too large
- Incompatible format
- Storage error

**Solutions:**
- Try downloading and re-uploading
- Check image dimensions
- Verify image file integrity

## Tips for Efficient Gallery Use

1. **Review immediately after generation** - Assess while process fresh
2. **Download finals right away** - Don't risk losing important images
3. **Use descriptive prompts** - Makes finding images easier later
4. **Experiment systematically** - Use seeds and parameter tracking
5. **Regular cleanup** - Download and clear old test images
6. **Learn from metadata** - Study what made successful images work
7. **Build prompt library** - Copy and save effective prompts externally

## Integration Workflow Examples

### Design Iteration Workflow

1. **Generate** base concept with Flux.1 [dev]
2. **Review** in Gallery
3. **Inpaint** to fix specific issues
4. **Review** inpainted version in Gallery
5. **Outpaint** to expand composition
6. **Review** final in Gallery
7. **Download** all versions for comparison

### Systematic Testing Workflow

1. **Generate** multiple versions with different parameters
2. **Review all** in Gallery grid view
3. **Compare metadata** of best results
4. **Identify** optimal settings
5. **Document** findings
6. **Apply** to future projects

### Client Presentation Workflow

1. **Generate** multiple options with Flux.1 [pro]
2. **Review** in Gallery
3. **Download** top candidates
4. **Present** to client
5. **Load** selected version for refinements
6. **Iterate** based on feedback
7. **Deliver** final from Gallery

## Next Steps

- **[Text-to-Image](./text-to-image.md)** - Create images to populate your Gallery
- **[Inpainting](./inpainting.md)** - Edit Gallery images with precision
- **[Outpainting](./outpainting.md)** - Expand Gallery images
- **[Models & Parameters](./models-and-parameters.md)** - Understand Gallery metadata
