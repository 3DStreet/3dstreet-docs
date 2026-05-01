---
sidebar_position: 4
---

# Console

The Console is the natural-language interface to 3DStreet. From the Console panel you can describe what you want in your scene, watch each action stream in as a command pill, and rewind or replay individual edits without losing your place. The Console also doubles as a live history of every editor action — whether you initiated it from a menu, a drag, or a typed command.

## Opening the Console

The Console lives as a tab in the right-hand side panel of the editor, alongside **Properties**. Click the **Console** tab to open it. The textarea is auto-focused on activation, so you can start typing immediately and press **Enter** to send. Use **Shift+Enter** to insert a newline.

You must be signed in to send commands. If you're not signed in, the Console shows a sign-in prompt overlay.

## What you can do

- Ask questions about the scene
- Request modifications (e.g. "Add a row of pedestrians to the sidewalk")
- Create new streets, models, or other elements
- Take snapshots from different angles
- Set the geographic location for the scene
- Rename the scene

Type `/help` and press Enter to see a list of example prompts you can click to try.

## Command history pills

Every editor action whether triggered by you, a panel control, or the assistant — streams into the Console as a **command pill**. Each pill shows:

- A **rewind/redo arrow** on the left
- The command name (e.g. `Update`, `Create`, `Reparent`)
- The target (e.g. layer name, mixin)
- A short detail string showing what changed (e.g. `position.x: 1.2 → 3.4`)

Hover any pill to see the full command details in a tooltip.

### Rewinding and replaying

Click the arrow on a pill to time-travel:

- If the command is **active**, clicking undoes back through it (and everything after).
- If the command is **undone** (greyed out, line-through), clicking redoes forward through it.

This is the same undo/redo stack as the editor's `Cmd/Ctrl+Z` shortcut — pills just make it visual and addressable by command.

## Resetting the conversation

Click the circular reset icon in the Console input row to clear the conversation and start fresh. This empties the message log and reinitializes the chat session.

## Snapshots and ratings

When the assistant calls `takeSnapshot`, the resulting image appears inline in the Console with copy and download actions. After each assistant response, you'll see thumbs-up / thumbs-down buttons — your rating is logged so we can improve the assistant over time.

## Example prompts

- *"Create a two-way street with protected bike lanes"*
- *"Take a snapshot of the current view"*
- *"Move the car forward 5 meters"*
- *"Add bollards to protect the bike lane"*
- *"How many drive lanes are in this street?"*
- *"Set the location to San Francisco"*
- *"Rename the scene to 'Market Street redesign'"*

---

# Developer Documentation

Behind the scenes, the Console is powered by Google Gemini (currently `gemini-3-flash-preview`) via the Vertex AI client. We've found Gemini effective for this use case because it handles large-context tasks well — the system prompt combined with the user's scene graph and other scene data drives up context length quickly.

## Console Tools

The assistant performs actions through tools (function calls). These tools modify the scene, manage streets, capture snapshots, and update scene metadata.

## Further Reading

- [Original AI Assistant beta announcement (2025-05-22)](/blog/2025/05/22/introducing-ai-assistant-beta-your-creative-partner-for-street-design)
- [Editor panel redesign (2026-04-27)](/blog/2026/04/27/product-update-panel-redesign)
