# Paradigms Reach — campaign primer site

A local, image-led campaign primer. A red **Initiate Geneseed Briefing?** prompt fades in over the sealed façade. The first click starts the supplied interface loop and types **PARADIGMS REACH** with the supplied typing clip; the second click plays the supplied door sound while the façade opens onto the skyline and **The world is ending**. The supplied music fades in as the skyline and opener appear, then continues through the guided primer entries.

## Preview

From this directory:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173/`. The static site also opens directly from `index.html`; it needs no build or package installation. Display fonts load from Google Fonts when online and fall back to system fonts. The site loads optimized WebP scene assets; the original PNGs are retained in `assets/`.

## GitHub Pages

Publish the `main` branch from the repository root. The site uses relative paths for its CSS, JavaScript, images, and sound, so it also works at a GitHub Pages project URL such as `https://USERNAME.github.io/paradigms-reach-primer/`. The `.nojekyll` file keeps Pages serving the folder as a plain static site. GitHub Pages publishes the website and its included audio files on a public URL.

## Interaction

- **CLICK TO INITIATE** starts the four-second interface bed and title typing. **CLICK TO CONTINUE** opens the gate with the trimmed door recording. The skyline reveal fades from the interface bed into the supplied music, which continues through **ENTER THE PRIMER** and **BEGIN AGAIN**.
- Each **CONTINUE** crossfades to a unique background and plays a one-shot staggered expansion of three large, fully transparent text HUD panels. The right reading segment has a darker transparent tint.
- Chapter 03 shows ten smaller HUD panels, one for every named Reach district in the primer.
- **PREVIOUS**, the numbered rail, and Left/Right arrows navigate unlocked entries. The rail unlocks in order.
- On small screens, field notes become a horizontal strip above the scrollable reading pane.
- The **AUDIO ON/OFF** control mutes all cues and music. Hover and navigation use trimmed variations of the supplied button recording. The first click unlocks audio as required by browsers. See [AUDIO.md](AUDIO.md) for exact source segments and levels.
- Reduced-motion preference skips the typing delay and panel animations.

## Content

The sequence is Opening → Intro → The Reach → Districts → Powers → Your Role → Protectors → Threats → Last Light. It expands the player-facing summary from the 52-page source primer. The primer's images informed the worldbuilding; new generated chapter scenes keep the visual treatment consistent. [CONTENT_NOTES.md](CONTENT_NOTES.md) maps each entry to the source and records the caution around optional history, corporate rumors, and exact character mechanics. The visible title uses the user's requested spelling, **Paradigms Reach**.

## Verification

```powershell
node --check app.js
node preview-check.mjs
```

`preview-check.mjs` exercises the two-click entrance, supplied typing and door playback, music start, all eight content entries, transparent panels, Chapter 03's ten districts, one-shot note entrance, distinct scenes, mobile overflow, and reduced motion. Screenshots are written to `qa/`.
