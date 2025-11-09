# Tokens and Usage

The Generator App uses a token-based system to manage AI generation costs fairly and transparently. This guide explains how tokens work, what affects costs, and how to use them efficiently.

## What are Tokens?

**Tokens** are credits used to pay for AI image generation. Each generation operation (text-to-image, inpainting, or outpainting) consumes tokens based on the computational resources required.

## How Tokens Work

### Token Consumption

Every time you generate an image, tokens are deducted from your balance based on:

1. **AI Model** - Different models have different costs
2. **Image Dimensions** - Larger images cost more
3. **Generation Steps** - More steps cost more tokens
4. **Operation Type** - Text-to-image, inpaint, or outpaint
5. **Expansion Size** - For outpainting, larger expansions cost more

### Token Display

**Before generation:**
- Token cost shown before you click Generate
- Displays exact amount that will be charged
- Updates when you change settings

**After generation:**
- Tokens deducted from your balance
- New balance displayed
- Transaction recorded

**Current balance:**
- Always visible in app header
- Updates in real-time
- Shows remaining tokens

## Token Costs

### By Model

Approximate relative costs (actual costs may vary):

| Model | Relative Cost | Notes |
|-------|---------------|-------|
| Flux.1 [schnell] | Lower | Fast, economical |
| Flux.1 [dev] | Moderate | Balanced |
| Flux.1 [pro] | Higher | Premium quality |
| Flux.1.1 [pro] | Higher | Premium with enhanced features |
| Flux Realism [lora] | Higher | Specialized photorealism |

### By Image Size

Larger dimensions = more tokens:

| Dimensions | Relative Cost |
|------------|---------------|
| 512×512 | Lower |
| 768×768 | Moderate |
| 1024×1024 | Standard |
| 1024×1440 | Higher |
| 1440×1440 | Highest |

**Formula concept:**
Cost generally scales with total pixels (width × height).

### By Steps

More refinement = more tokens:

| Steps | Relative Cost |
|-------|---------------|
| 4 (Flux.1 [schnell]) | Lowest |
| 20-25 | Lower |
| 30-35 | Moderate |
| 40-50 | Higher |

**General rule:**
Each additional step adds incremental token cost.

### By Operation Type

**Text-to-Image:**
- Base cost for full image generation
- Depends on model + dimensions + steps

**Inpainting:**
- Cost based on total image size (not just masked area)
- Similar to text-to-image for same dimensions
- Masked area size has minor effect

**Outpainting:**
- Cost based on final dimensions
- Larger expansions = higher cost
- Example: 1024×1024 expanded to 2048×1024 costs more than original

## Purchasing Tokens

### How to Buy

1. Click **Purchase Tokens** button
2. Choose token package
3. Complete payment
4. Tokens added to account immediately

### Token Packages

*Actual packages and pricing set by 3DStreet - check app for current offers*

**Typical structure:**
- Starter packages for trying out the service
- Standard packages for regular use
- Bulk packages for power users (better value)

### Payment Methods

Supported payment methods vary by implementation:
- Credit/debit cards
- Digital wallets
- Other payment processors

Check the purchase modal for available options.

## Optimizing Token Usage

### Strategy 1: Choose the Right Model

**For exploration:**
- Use Flux.1 [schnell] or Flux.1 [dev]
- Lower cost per generation
- Perfect for testing ideas

**For finals:**
- Use Flux.1 [pro] or specialized models
- Higher cost but necessary quality
- Only for confirmed final outputs

**Example savings:**
Generate 10 variations with [schnell], then 1 final with [pro] instead of 11 generations with [pro].

### Strategy 2: Start Small

**Dimensions strategy:**
1. Test prompts at 512×512 or 768×768
2. Refine prompt and settings
3. Generate final at 1024×1024 or larger

**Example savings:**
Testing at 512×512 costs ~25% of 1024×1024 cost.

### Strategy 3: Optimize Steps

**Progressive refinement:**
1. Test with 20-25 steps
2. Evaluate if more refinement needed
3. Only use 40-50 steps for finals

**Example savings:**
25 steps costs ~50% of 50 steps.

### Strategy 4: Use Seeds Strategically

**Reproducibility benefits:**
1. Find good result with random seed
2. Note the seed value
3. Make variations using same seed
4. Only change specific parameters

**Benefit:**
Avoid generating many random variations hoping for success.

### Strategy 5: Plan Outpainting

**Incremental expansion:**
- Small expansion (256px): Lower cost
- Large expansion (1024px): Higher cost

**Progressive approach:**
1. Expand 512px first
2. Review result
3. Expand again if needed

**Benefit:**
Avoid wasted tokens on massive expansions that don't work.

### Strategy 6: Batch Similar Work

**Workflow efficiency:**
1. Gather all prompts needing similar settings
2. Configure once
3. Generate all in sequence
4. Review and iterate in batch

**Benefit:**
Reduces trial-and-error waste.

## Token Management Best Practices

### 1. Monitor Your Balance

**Why:**
- Avoid running out mid-project
- Plan purchases strategically
- Budget for projects

**How:**
- Check balance regularly
- Estimate needs before starting
- Purchase before balance critical

### 2. Track Usage Patterns

**Why:**
- Understand your typical costs
- Identify inefficiencies
- Optimize spending

**How:**
- Note costs for common operations
- Review Gallery to see what you generated
- Calculate average cost per useful output

### 3. Budget by Project

**Why:**
- Control spending
- Ensure sufficient tokens
- Avoid overspending

**How:**
- Estimate tokens needed
- Add buffer for iterations
- Track actual vs. estimated

**Example project budget:**
```
Project: Main Street Redesign

Exploration (Flux.1 [schnell], 512×512):
- 20 variations × 10 tokens = 200 tokens

Refinement (Flux.1 [dev], 1024×1024):
- 10 iterations × 50 tokens = 500 tokens

Finals (Flux.1 [pro], 1024×1024):
- 3 final versions × 100 tokens = 300 tokens

Total estimated: 1,000 tokens
Add 20% buffer: 1,200 tokens
```

### 4. Minimize Failed Generations

**Why:**
- Failed generations still cost tokens
- Wasted resources
- Delays projects

**How:**
- Test prompts with cheap settings first
- Verify settings before generating
- Review similar successful generations
- Use proven prompts as templates

### 5. Leverage Free Optimizations

**Why:**
- Improve results without extra cost
- Maximize value per token

**How:**
- Refine prompts (doesn't cost tokens)
- Study Gallery metadata (free)
- Learn from documentation (free)
- Plan before generating (free)

### 6. Know When to Spend

**Sometimes higher cost is worth it:**
- Client deliverables
- Final presentations
- Portfolio pieces
- Critical milestones

**Don't over-optimize:**
- Spending 1000 tokens on finals is fine if quality needed
- Budget accordingly for important work

## Understanding Token Costs

### Cost Transparency

The Generator App shows token cost **before** you generate:

**Pre-generation display:**
```
Generate
Cost: 75 tokens
```

**Benefits:**
- No surprises
- Informed decisions
- Budget control

### Variable Costs

Token costs can change based on:

**User-controlled factors:**
- Model selection
- Dimension settings
- Step count
- Expansion size (outpaint)

**Not user-controlled:**
- Base model pricing
- Platform costs
- Service fees

### Refund Policy

**Typical policies:**
- Successful generations: No refund (you got the image)
- Failed generations: Usually refunded automatically
- Service errors: Contact support

Check 3DStreet's terms of service for specific policies.

## Token Usage Scenarios

### Scenario 1: Rapid Prototyping

**Goal:** Test 20 different prompt ideas

**Strategy:**
- Model: Flux.1 [schnell]
- Dimensions: 512×512
- Steps: 4
- Estimated: 10 tokens × 20 = 200 tokens

**Outcome:**
- Quick exploration
- Low cost
- Identify best directions

### Scenario 2: Client Presentation

**Goal:** Deliver 3 high-quality options

**Strategy:**
1. Explore with [schnell] (200 tokens)
2. Refine 5 candidates with [dev] (250 tokens)
3. Finalize 3 with [pro] (300 tokens)
4. Total: 750 tokens

**Outcome:**
- Best possible quality
- Systematic refinement
- Controlled spending

### Scenario 3: Personal Project

**Goal:** Create street redesign visualization

**Strategy:**
- Mix of models based on stage
- Start small, scale up
- Iterate based on results
- Budget: 500 tokens

**Outcome:**
- Balanced approach
- Quality where needed
- Cost-effective

### Scenario 4: Learning/Experimentation

**Goal:** Learn how different settings work

**Strategy:**
- Use cheapest settings
- Focus on learning, not outputs
- Document findings
- Budget: 300 tokens

**Outcome:**
- Knowledge gained
- Minimal cost
- Better future results

## Troubleshooting

### Insufficient Tokens

**Problem:** Can't generate due to low balance

**Solution:**
1. Purchase additional tokens
2. Or reduce cost by:
   - Smaller dimensions
   - Fewer steps
   - Cheaper model

### Unexpected Costs

**Problem:** Generation cost more than expected

**Possible causes:**
- Large dimensions
- High step count
- Premium model
- Large outpaint expansion

**Solution:**
- Check pre-generation cost display
- Adjust settings if too high
- Review Gallery to compare typical costs

### Token Deduction Without Image

**Problem:** Tokens deducted but no image generated

**Possible causes:**
- Generation failed server-side
- Network interruption
- Content filter blocked generation

**Solution:**
- Check if tokens refunded automatically
- Contact support if not
- Review error message
- Adjust prompt/settings and retry

### Balance Not Updating

**Problem:** Token balance not reflecting purchase or generation

**Possible causes:**
- Display lag
- Sync issue
- Payment processing delay

**Solution:**
- Refresh page
- Check payment confirmation
- Wait a few minutes
- Contact support if persists

## Frequently Asked Questions

**How many tokens do I need to get started?**
Start with a small package. 500-1000 tokens lets you explore features and understand costs before committing to larger purchases.

**Do tokens expire?**
Check 3DStreet's terms. Typically tokens don't expire, but policies vary.

**Can I get a refund on unused tokens?**
Check 3DStreet's refund policy. Generally, tokens are non-refundable once purchased.

**What happens if generation fails?**
Failed generations are typically refunded automatically. If not, contact support.

**Can I share tokens with team members?**
This depends on account type. Check if team/organizational accounts are available.

**Are there subscription options instead of tokens?**
Check 3DStreet for current pricing models. Token packages may be supplemented by subscription options.

**How do I track my token spending?**
Monitor your balance before/after generations. Consider keeping manual logs for budget tracking.

**Can I see my token usage history?**
Check if the app provides transaction history. If not, use Gallery to estimate based on what you generated.

## Cost-Benefit Analysis

### When to Spend More Tokens

**High-stakes deliverables:**
- Client presentations
- Public portfolio
- Marketing materials
- Final production assets

**Justification:**
Quality directly impacts professional outcome.

### When to Save Tokens

**Exploration and testing:**
- Prompt experimentation
- Learning new features
- Personal projects
- Quick mockups

**Justification:**
Lower quality acceptable for learning/testing purposes.

### ROI Thinking

**Consider:**
- Time saved vs. manual creation
- Quality improvement vs. alternatives
- Professional value of outputs
- Learning value of experimentation

**Example:**
Spending 500 tokens to create a client-ready visualization in 1 hour vs. 8 hours in traditional software = excellent ROI.

## Next Steps

- **[Getting Started](./getting-started.md)** - Begin using your tokens effectively
- **[Models & Parameters](./models-and-parameters.md)** - Understand cost factors in depth
- **[Text-to-Image](./text-to-image.md)** - Learn efficient generation techniques
- **[Gallery](./gallery.md)** - Track and learn from your usage patterns
