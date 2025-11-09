# Models and Parameters

Understanding AI models and generation parameters helps you achieve better results while managing token costs effectively. This guide covers all available models and settings in depth.

## Available Models

The Generator App uses **Flux models** from Black Forest Labs. Each model is optimized for different use cases.

### Model Comparison Table

| Model | Speed | Quality | Token Cost | Best For | Parameters Available |
|-------|-------|---------|------------|----------|---------------------|
| Flux.1 [pro] | Moderate | Highest | Higher | Final high-quality outputs | All |
| Flux.1.1 [pro] | Moderate | Highest | Higher | Maximum prompt accuracy | All + Interval |
| Flux.1 [dev] | Fast | High | Moderate | Iterative development | All |
| Flux.1 [schnell] | Very Fast | Good | Lower | Rapid prototyping | Steps only (max 4) |
| Flux Realism [lora] | Moderate | Highest | Higher | Photorealistic images | All |

## Model Details

### Flux.1 [pro]

**Overview:**
The flagship model offering the best balance of quality, versatility, and prompt understanding.

**Characteristics:**
- Highest quality outputs
- Excellent prompt adherence
- Great with complex descriptions
- Handles various artistic styles
- Consistent results

**Best for:**
- Final production images
- Complex prompts with many details
- High-stakes visualizations
- Client presentations
- Maximum quality requirements

**Parameters:**
- Steps: 20-50 (recommended: 30-40)
- Guidance: 2.0-5.0 (recommended: 2.5-3.5)
- Seed: Any integer or random
- Safety: 0-6 (recommended: 3-4)

**When to use:**
- Quality is more important than speed
- Complex or detailed prompts
- Final deliverables
- Budget allows higher token cost

### Flux.1.1 [pro]

**Overview:**
Enhanced version with improved prompt adherence and detail rendering.

**Characteristics:**
- Maximum prompt accuracy
- Enhanced fine details
- Better text rendering in images
- Superior spatial understanding
- Improved composition

**Best for:**
- Extremely specific requirements
- Technical accuracy
- Detailed architectural visualization
- When prompt precision is critical
- Text-heavy images

**Unique Parameter:**
- **Interval** (1-4): Controls diffusion step timing
  - Lower: Faster but less refined
  - Higher: Slower but more detailed
  - Default: 2

**Other Parameters:**
- Steps: 20-50
- Guidance: 2.0-5.0
- Seed: Any integer or random
- Safety: 0-6

**When to use:**
- Need exact prompt interpretation
- Specific technical requirements
- Maximum detail in complex scenes
- Worth the extra token cost

### Flux.1 [dev]

**Overview:**
Development model offering excellent quality at faster speed.

**Characteristics:**
- Fast generation (15-30 seconds)
- Good quality output
- Reliable and consistent
- Handles most prompts well
- Moderate token cost

**Best for:**
- Iterative design process
- Testing multiple variations
- Good balance of speed/quality
- Most day-to-day use cases
- Budget-conscious projects

**Parameters:**
- Steps: 20-50 (recommended: 25-35)
- Guidance: 2.0-5.0 (recommended: 2.5-3.5)
- Seed: Any integer or random
- Safety: 0-6

**When to use:**
- Exploring concepts
- Need quick turnaround
- Creating multiple variations
- Good enough for most purposes

### Flux.1 [schnell]

**Overview:**
Ultra-fast model for rapid prototyping (German "schnell" = fast).

**Characteristics:**
- Very fast generation (10-20 seconds)
- Limited to 4 steps maximum
- Good quality for speed
- Lower token cost
- Great for testing ideas

**Best for:**
- Quick experimentation
- Testing prompts rapidly
- Initial concept exploration
- High-volume variations
- Low-stakes generations

**Parameters:**
- Steps: 1-4 (recommended: 4)
- No other adjustable parameters
- Fixed guidance and settings

**Limitations:**
- Maximum 4 steps
- Less refinement than other models
- May miss subtle prompt details
- Not for final production

**When to use:**
- Need fast results
- Testing prompt ideas
- Creating many variations quickly
- Budget is limited
- Quality good enough for purpose

### Flux Realism [lora]

**Overview:**
Specialized model fine-tuned for photorealistic images using LoRA (Low-Rank Adaptation).

**Characteristics:**
- Highly photorealistic output
- Excellent lighting and materials
- Realistic human features if included
- Natural-looking scenes
- True-to-life textures

**Best for:**
- Photorealistic street views
- Realistic architectural visualization
- Natural-looking environments
- Presentations requiring realism
- Marketing materials

**Parameters:**
- Steps: 20-50 (recommended: 35-45)
- Guidance: 2.0-5.0 (recommended: 3.0-4.0)
- Seed: Any integer or random
- Safety: 0-6

**When to use:**
- Need photographic quality
- Realistic presentation required
- Prefer natural over stylized
- Simulating real-world appearance

## Parameters Explained

### Steps

**What it does:**
Controls how many refinement iterations the AI performs.

**Range:** 1-50 (model dependent)

**Effect:**
- **Low (10-20):** Faster, less refined, may miss details
- **Medium (25-35):** Balanced quality and speed (recommended)
- **High (40-50):** Maximum detail, slower, higher token cost

**Recommendations by Model:**
- Flux.1 [pro]: 30-40 steps
- Flux.1.1 [pro]: 35-45 steps
- Flux.1 [dev]: 25-35 steps
- Flux.1 [schnell]: 4 steps (maximum)
- Flux Realism: 35-45 steps

**When to adjust:**
- Increase for final outputs
- Decrease when testing ideas
- Higher for complex scenes
- Lower when speed matters

### Guidance Scale

**What it does:**
Controls how closely the AI follows your prompt versus using its own interpretation.

**Range:** 1.5-5.0 (typically)

**Effect:**
- **Low (1.5-2.5):** More creative freedom, artistic interpretation
- **Medium (2.5-3.5):** Balanced adherence (recommended)
- **High (3.5-5.0):** Strict prompt following, less AI creativity

**Examples:**

*Prompt: "Modern street with bike lanes"*

- **Guidance 2.0:** AI adds artistic touches, interpretation varies
- **Guidance 3.0:** Follows prompt closely with some creativity
- **Guidance 4.5:** Very literal interpretation, minimal deviation

**When to adjust:**
- Increase when AI ignores your prompt
- Decrease when results feel too rigid
- Higher for technical accuracy
- Lower for artistic results

**Typical optimal ranges:**
- General use: 2.5-3.5
- Technical/specific: 3.5-4.5
- Artistic/creative: 2.0-3.0

### Seed

**What it does:**
Controls the random number generator that influences image creation.

**Range:** Any integer (typically 0 to 2,147,483,647)

**Behavior:**
- **Random (default):** Different result each generation
- **Fixed number:** Same seed + same settings = reproducible results

**Use Cases:**

**Random Seed (leave blank):**
- Exploring different variations
- Want variety in results
- Not concerned with reproducibility

**Fixed Seed:**
- Creating series with consistent style
- A/B testing prompt variations
- Reproducing successful results
- Systematic experimentation

**How to use:**
1. Generate with random seed
2. Find result you like
3. Note the seed from Gallery metadata
4. Use that seed for variations
5. Change only one variable at a time

**Example workflow:**
```
Generation 1: Seed 12345, prompt "modern street"
Generation 2: Seed 12345, prompt "modern street with trees"
(Only difference is prompt - can see effect of adding "with trees")
```

### Safety Tolerance

**What it does:**
Controls content filtering sensitivity.

**Range:** 0-6

**Levels:**
- **0-2:** Strict filtering (very cautious)
- **3-4:** Moderate filtering (recommended default)
- **5-6:** Permissive filtering (minimal restrictions)

**When to adjust:**
- Increase if generations unexpectedly blocked
- Decrease for family-friendly content
- Adjust based on intended audience
- Consider content policy requirements

**Note:** Higher tolerance doesn't bypass all filters, just reduces sensitivity.

### Interval (Flux.1.1 [pro] only)

**What it does:**
Controls timing between diffusion steps in the generation process.

**Range:** 1-4

**Effect:**
- **Lower (1-2):** Faster generation, less refinement
- **Higher (3-4):** Slower generation, more refined
- **Default:** 2 (balanced)

**When to adjust:**
- Increase for maximum detail
- Decrease for faster results
- Experiment to find sweet spot
- Usually keep at default

### Prompt Strength (Inpaint/Outpaint)

**What it does:**
Controls how much the prompt influences generation versus preserving the original image.

**Range:** 0.0-1.0

**Effect:**
- **Low (0.3-0.5):** Subtle changes, preserves original more
- **Medium (0.5-0.7):** Balanced modification (recommended)
- **High (0.7-1.0):** Dramatic changes, prioritizes prompt

**Inpainting recommendations:**
- Small fixes: 0.4-0.6
- Major changes: 0.7-0.9
- Style preservation: 0.3-0.5

**Outpainting recommendations:**
- Seamless extension: 0.5-0.7
- Creative expansion: 0.6-0.8
- Strict continuation: 0.4-0.6

## Choosing the Right Model

### Decision Tree

**Need maximum quality?**
- Yes → Flux.1 [pro] or Flux.1.1 [pro]
- No → Continue

**Need photorealism?**
- Yes → Flux Realism [lora]
- No → Continue

**Need speed over quality?**
- Yes → Flux.1 [schnell]
- No → Flux.1 [dev]

**Need absolute precision?**
- Yes → Flux.1.1 [pro]
- No → Flux.1 [pro]

### Use Case Examples

**Scenario: Testing 10 prompt variations**
- Model: Flux.1 [schnell]
- Steps: 4
- Reason: Speed and cost efficiency for exploration

**Scenario: Client presentation image**
- Model: Flux.1 [pro]
- Steps: 40
- Reason: Maximum quality for important deliverable

**Scenario: Photorealistic street mockup**
- Model: Flux Realism [lora]
- Steps: 40
- Reason: Need photographic quality

**Scenario: Daily workflow iterations**
- Model: Flux.1 [dev]
- Steps: 30
- Reason: Good balance for regular use

**Scenario: Precise technical diagram**
- Model: Flux.1.1 [pro]
- Steps: 40
- Reason: Need exact prompt interpretation

## Optimization Strategies

### Speed Optimization

**Priority: Fast generation**

Settings:
- Model: Flux.1 [schnell] or Flux.1 [dev]
- Steps: Minimum (4 for schnell, 20 for dev)
- Dimensions: Smaller (512×512 or 768×768)
- Guidance: Default (3.0)

**Use for:**
- Rapid prototyping
- Initial exploration
- High-volume generation

### Quality Optimization

**Priority: Best possible results**

Settings:
- Model: Flux.1 [pro], Flux.1.1 [pro], or Flux Realism
- Steps: 40-50
- Dimensions: Larger (1024×1024 or more)
- Guidance: 3.0-4.0
- Seed: Test multiple, choose best

**Use for:**
- Final deliverables
- Client presentations
- Portfolio pieces

### Cost Optimization

**Priority: Token efficiency**

Settings:
- Model: Flux.1 [schnell] or Flux.1 [dev]
- Steps: Lower end (4 for schnell, 25 for dev)
- Dimensions: Moderate (768×768)
- Reuse successful seeds

**Use for:**
- Budget-constrained projects
- High-volume needs
- Exploratory work

### Balance Optimization

**Priority: Quality/speed/cost balance**

Settings:
- Model: Flux.1 [dev]
- Steps: 30
- Dimensions: 1024×1024
- Guidance: 3.0
- Iterate systematically

**Use for:**
- Most day-to-day work
- General production
- Standard deliverables

## Token Cost Factors

Factors that increase token usage:

1. **Model selection**
   - Flux.1 [pro] > Flux.1 [dev] > Flux.1 [schnell]

2. **Image dimensions**
   - Larger dimensions = more tokens
   - 1440×1440 costs more than 512×512

3. **Steps**
   - More steps = more tokens
   - 50 steps costs more than 20 steps

4. **Outpainting area**
   - Larger expansions = more tokens
   - 2048px expansion > 256px expansion

5. **Inpainting mask size**
   - Larger masked areas = more tokens
   - Full image mask > small detail mask

## Experimentation Guide

### Systematic Testing

**Goal: Find optimal settings for your use case**

**Method:**
1. Choose one test prompt
2. Use fixed seed
3. Vary only ONE parameter at a time
4. Document results
5. Compare outcomes

**Example experiment:**

Test: Effect of steps on quality

- Base: Flux.1 [dev], Guidance 3.0, 1024×1024, Seed 12345
- Variable: Steps
- Tests: 20, 25, 30, 35, 40, 45, 50
- Result: Determine diminishing returns point

### A/B Comparison

**Method:**
1. Generate with Setting A
2. Generate with Setting B (change ONE thing)
3. Compare directly
4. Choose winner
5. Continue refining

**Example:**
- A: Flux.1 [dev], 30 steps
- B: Flux.1 [pro], 30 steps
- Question: Is quality improvement worth token cost?

## Best Practices

1. **Start fast, finish slow**
   - Explore with Flux.1 [schnell]
   - Refine with Flux.1 [dev]
   - Finalize with Flux.1 [pro]

2. **Match model to need**
   - Don't use [pro] for tests
   - Don't use [schnell] for finals

3. **Use seeds strategically**
   - Random for exploration
   - Fixed for comparison
   - Save successful seeds

4. **Adjust one parameter at a time**
   - Understand each effect
   - Build systematic knowledge
   - Avoid confusion

5. **Document what works**
   - Save successful settings
   - Note model/parameter combinations
   - Build personal best practices

6. **Consider total cost**
   - Factor in failed generations
   - Account for iteration
   - Balance quality vs. quantity

## Next Steps

- **[Text-to-Image](./text-to-image.md)** - Apply model knowledge to generation
- **[Inpainting](./inpainting.md)** - Use parameters for targeted edits
- **[Outpainting](./outpainting.md)** - Optimize expansion settings
- **[Tokens & Usage](./tokens-and-usage.md)** - Understand cost management
