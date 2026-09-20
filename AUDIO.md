# Audio cue map

The original user-supplied MP3 files remain in `assets/`. Short PCM clips in `assets/audio/` were cut from them for responsive playback; the background song plays from its original MP3.

| Site cue | Asset | Source range | Playback |
| --- | --- | --- | --- |
| Pre-primer interface bed | `audio/interface-loop.wav` | First 0–4.00 s of `Sci-Fi Interface Hi Tech UI Sound Effects…mp3` | Loops after **CLICK TO INITIATE** until the skyline and **THE WORLD IS ENDING** appear. |
| Title typing | `audio/typing.wav` | 30.55–32.65 s of `Digital Typing Sound Effect…mp3` | Plays with the typed title and stops when typing finishes. |
| Door reveal | `audio/door.wav` | 1.42–4.39 s of `sci fi door sound effect.mp3` | Starts on **CLICK TO CONTINUE**. The source's silent lead-in is removed. |
| Hover | `audio/hover.wav` | 2.53–3.08 s of `Button Hover and Click…mp3` | Quiet, rate-limited button hover/focus cue. |
| Click / navigation | `audio/click-1.wav` through `click-4.wav` | 0.17–0.70 s, 1.04–1.79 s, 3.35–3.68 s, 7.55–7.86 s of `Button Hover and Click…mp3` | Random variation, avoiding immediate repeats. |
| Opener and primer music | `Extraction Action (Cyberpunk 2077 Soundtrack).mp3` | Full track | Starts silently on the second click for browser playback permission, then fades in with **THE WORLD IS ENDING** and loops throughout the primer. |

The persistent **AUDIO ON/OFF** control mutes every track. The volume slider starts at 80%, lowering every track by 20% from its original mix, and stays available once audio begins, including on the closing screen. Music and interface loop levels remain lower than individual interaction cues. Browsers permit sound only after a user gesture, which the initial **CLICK TO INITIATE** provides.
