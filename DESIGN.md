# Paradigms Reach — visual and interaction direction

## Source of truth

- Primer: `E:\[1] CODEX PROJECTS\DND WRITE BASE\LOREBASE\THE PARADIGMS REACH SETUP-3(Primer).pdf`.
- Later corrections: `E:\[1] CODEX PROJECTS\DND WRITE BASE\CodexGPT Writing\PRIMER VALIDITY NOTES.md` and `Centralized Instructions Root.md`.
- Opening gate asset: `assets/sealed-facade.png`.
- Revealed opener asset: `assets/reach-skyline.png`.
- Entry scenes: `assets/chapter-*.png` with optimized WebP copies.

## Generated image analysis

### Closed façade

A head-on 16:9 iron skin in near-black, with a precise scarlet vertical seam at 50%. The left and right halves have their own bracing, narrow warning lamps, soot, pitting, and panel edges. The central broad surfaces are dark enough to hold a live title and one control. The image is well suited to two HTML halves with the same image as a 200%-width background; its seam gives the motion a physical hinge. The red should be a single alarm accent, not a neon wash.

### Open skyline

Telephoto night view, tightly compressed with vertical megastructures and deep layers. A scarlet beam marks the Aegis Spire just right of center. Elevated rail and sparse searchlights imply an active civilization. The left third is comparatively dark; the far right is denser. The image makes a full-bleed immersive background. A black right-side reading scrim is needed to keep live text legible without smothering the whole skyline.

### HUD reference

The layout uses a hairline top bar, far-left numbered rail, three large fully transparent HUD field notes on the left, and a dark tinted but transparent reading area on the right. Chapter 03 uses ten smaller HUD notes for the ten districts. The scene remains visible through the text frames. The dedicated opener uses large red condensed type at the center of the skyline. A 1366×768 viewport must still show the scene focal point and the full reading pane.

## Layout tokens

- Coal `#08090b`; raised coal `#111316`; warm white `#e9e6e2`; muted grey `#a8a4a2`; scarlet `#e13a35`; deep scarlet `#7d1718`.
- Display: narrow, industrial sans with tight line height. Body: clear neutral sans. No text is baked into imagery.
- Edges: mostly square, 1px rules, very restrained cut corners. No rounded dashboard cards.
- Desktop: scene full bleed, left chapter rail and field notes, reading pane at right. Mobile: scene remains visible behind a horizontal field-note strip above a bottom reading pane; chapter progress moves to a horizontal rail.

## Motion cues

1. A red **Initiate Geneseed Briefing?** prompt fades in over the closed façade. First click starts the supplied four-second interface loop and types **PARADIGMS REACH** in red condensed type with a trimmed typing recording. Reduced-motion users see the title immediately.
2. On the second click, the supplied door recording accompanies the red seam flare and splitting façade. The gate animation lasts 2.7 seconds to match the sound; the skyline and full-screen opening statement appear after the view clears.
3. The skyline reveal fades the interface loop into the supplied background track. Each later Continue crossfades the scene and expands field notes once in sequence. Navigation and hover use quiet clips from the supplied button recording. Reduced-motion users see each new state immediately.

## Audio control treatment

- Purpose and context: players need immediate control of briefing audio without leaving the scene. The control stays visible from the first sound through the finale.
- Tone: industrial control-room instrument, using the site's coal, scarlet, warm white, and mono labels.
- Differentiator: an etched, cut-corner plate with a red status diode and narrow signal rail. The rail and numeric readout move together while the actual audio changes.
- Constraints: one compact control across intro, chapter HUD, and finale; 80% default level; readable mute state; keyboard-operated range input; desktop and mobile layouts; reduced-motion support.

## Content rules

The site is a guided, player-facing overview of the original Paradigm's Reach primer. Optional-history material and corporate rumors are not presented as confirmed fact. The trail follows: Opening → Intro → Reach → Districts → Powers → Your Role → Protectors → Threats → Last Light.
