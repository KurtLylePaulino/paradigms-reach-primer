import { createRequire } from "node:module";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/Sei/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const browser = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.goto("http://127.0.0.1:4173/");
const clips = [
  ["interface-loop.wav", "Sci-Fi Interface Hi Tech UI Sound Effects (Loop first 4 seconds until they open primer).mp3", 0, 4.0],
  ["typing.wav", "Digital Typing Sound Effect(ARound 30 second Mark).mp3", 30.55, 32.65],
  ["door.wav", "sci fi door sound effect.mp3", 1.42, 4.39],
  ["hover.wav", "Button Hover and Click 3 second mark for hover, select at random for click.mp3", 2.53, 3.08],
  ["click-1.wav", "Button Hover and Click 3 second mark for hover, select at random for click.mp3", .17, .70],
  ["click-2.wav", "Button Hover and Click 3 second mark for hover, select at random for click.mp3", 1.04, 1.79],
  ["click-3.wav", "Button Hover and Click 3 second mark for hover, select at random for click.mp3", 3.35, 3.68],
  ["click-4.wav", "Button Hover and Click 3 second mark for hover, select at random for click.mp3", 7.55, 7.86]
];
const out = join(process.cwd(), "assets", "audio");
mkdirSync(out, { recursive: true });
for (const [name, source, start, end] of clips) {
  const encoded = await page.evaluate(async ({ source, start, end }) => {
    const response = await fetch("assets/" + encodeURIComponent(source));
    if (!response.ok) throw new Error("Audio fetch failed: " + response.status);
    const context = new AudioContext();
    const audio = await context.decodeAudioData(await response.arrayBuffer());
    const rate = audio.sampleRate;
    const first = Math.floor(start * rate);
    const frames = Math.floor((end - start) * rate);
    const bytes = new ArrayBuffer(44 + frames * 2);
    const view = new DataView(bytes);
    const put = (offset, text) => { for (let i = 0; i < text.length; i += 1) view.setUint8(offset + i, text.charCodeAt(i)); };
    put(0, "RIFF"); view.setUint32(4, 36 + frames * 2, true); put(8, "WAVE");
    put(12, "fmt "); view.setUint32(16, 16, true); view.setUint16(20, 1, true);
    view.setUint16(22, 1, true); view.setUint32(24, rate, true);
    view.setUint32(28, rate * 2, true); view.setUint16(32, 2, true); view.setUint16(34, 16, true);
    put(36, "data"); view.setUint32(40, frames * 2, true);
    const channels = Array.from({ length: audio.numberOfChannels }, (_, i) => audio.getChannelData(i));
    const fadeFrames = Math.min(Math.floor(rate * .02), Math.floor(frames / 8));
    for (let i = 0; i < frames; i += 1) {
      let sample = 0;
      for (const channel of channels) sample += channel[first + i] || 0;
      sample /= channels.length;
      const fade = Math.min(1, i / fadeFrames, (frames - 1 - i) / fadeFrames);
      view.setInt16(44 + i * 2, Math.round(Math.max(-1, Math.min(1, sample * fade)) * 32767), true);
    }
    await context.close();
    const array = new Uint8Array(bytes);
    let binary = "";
    for (let i = 0; i < array.length; i += 32768) binary += String.fromCharCode(...array.subarray(i, i + 32768));
    return btoa(binary);
  }, { source, start, end });
  const destination = join(out, name);
  writeFileSync(destination, Buffer.from(encoded, "base64"));
  console.log(name, (end - start).toFixed(2) + "s");
}
await browser.close();
