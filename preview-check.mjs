import { createRequire } from "node:module";
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import assert from "node:assert/strict";

const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/Sei/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
  args: ["--no-sandbox"]
});
const out = join(process.cwd(), "qa");
mkdirSync(out, { recursive: true });
const url = process.env.PRIMER_URL || pathToFileURL(join(process.cwd(), "index.html")).href;

async function inspectPage(name, viewport) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto(url);
  await page.waitForTimeout(900);
  assert.equal(await page.locator(".briefing-prompt").isVisible(), true);
  await page.screenshot({ path: join(out, `${name}-briefing.png`) });
  await page.getByRole("button", { name: "CLICK TO INITIATE" }).click();
  await page.waitForTimeout(600);
  assert.equal(await page.evaluate(() => media.interfaceLoop.paused), false);
  assert.equal(await page.evaluate(() => media.typing.paused), false);
  await page.waitForFunction(() => !document.getElementById("enter-button").disabled);
  assert.equal(await page.locator("#typed-title").textContent(), "PARADIGMS REACH");
  assert.equal(await page.evaluate(() => media.typing.paused), true);
  assert.ok((await page.evaluate(() => media.interfaceLoop.duration)) <= 4.01);
  await page.waitForTimeout(550);
  await page.screenshot({ path: join(out, `${name}-intro.png`) });
  await page.locator("#audio-toggle-intro").click();
  assert.equal(await page.locator("#audio-toggle-intro").getAttribute("aria-pressed"), "false");
  assert.equal(await page.evaluate(() => media.interfaceLoop.muted), true);
  await page.locator("#audio-toggle-intro").click();
  assert.equal(await page.locator("#audio-toggle-intro").getAttribute("aria-pressed"), "true");
  await page.getByRole("button", { name: "CLICK TO CONTINUE" }).click();
  await page.waitForTimeout(250);
  assert.equal(await page.evaluate(() => media.door.paused), false, "Door file should play");
  await page.locator("body.is-open").waitFor();
  await page.waitForFunction(() => media.music.volume > 0 && !media.music.paused);
  assert.equal(await page.locator("#opener-title").innerText(), "THE WORLD\nIS ENDING.");
  assert.equal(await page.locator(".experience.is-opener").count(), 1);
  assert.equal(await page.evaluate(() => media.music.paused), false, "Music should play with the opener");
  assert.ok(await page.evaluate(() => media.music.volume > 0), "Music should be audible at the opener");
  await page.waitForFunction(() => media.music.readyState >= 2 && media.music.error === null);
  await page.screenshot({ path: join(out, `${name}-opener.png`) });
  const musicAtOpener = await page.evaluate(() => media.music.currentTime);
  await page.getByRole("button", { name: "ENTER THE PRIMER" }).click();
  assert.equal(await page.locator("#chapter-title").textContent(), "A world on the brink.");
  assert.equal(await page.evaluate(() => media.music.paused), false, "Music should continue into the primer");
  assert.ok(await page.evaluate(() => media.music.currentTime) >= musicAtOpener, "Music should not restart at the primer");
  assert.equal(await page.evaluate(() => media.music.loop), true);
  assert.equal(await page.locator(".detail-card").count(), 3);
  assert.equal(await page.locator(".detail-card__image").count(), 0);
  assert.equal(await page.locator(".detail-card").first().evaluate(el => getComputedStyle(el).backgroundColor), "rgba(0, 0, 0, 0)");
  assert.equal(await page.locator(".experience.is-chapter-entering").count(), 1);
  await page.waitForTimeout(1150);
  assert.equal(await page.evaluate(() => media.interfaceLoop.paused), true, "Interface loop should stop in the primer");
  assert.equal(await page.locator(".experience.is-chapter-entering").count(), 0);
  await page.screenshot({ path: join(out, `${name}-chapter-intro.png`) });
  const titles = ["A world on the brink."];
  const images = [await page.locator(".scene-layer.is-active").evaluate(el => getComputedStyle(el).backgroundImage)];
  while (titles.length < 8) {
    await page.getByRole("button", { name: "CONTINUE" }).click();
    titles.push(await page.locator("#chapter-title").textContent());
    images.push(await page.locator(".scene-layer.is-active").evaluate(el => getComputedStyle(el).backgroundImage));
    assert.equal(await page.locator(".detail-card").count(), titles.length === 2 ? 10 : 3);
    if (titles.length === 2) {
      assert.equal(await page.locator(".detail-card--small").evaluateAll(cards =>
        cards.every(card => card.scrollHeight <= card.clientHeight + 2)), true, "District cards should fit");
    }
    assert.equal(await page.locator(".experience.is-chapter-entering").count(), 1);
    await page.waitForTimeout(1100);
    assert.equal(await page.locator(".experience.is-chapter-entering").count(), 0);
    const chapter = titles.length;
    if ([2, 3, 5, 7, 8].includes(chapter)) {
      await page.screenshot({ path: join(out, `${name}-chapter-${chapter}.png`) });
    }
  }
  assert.equal(new Set(images).size, 8, "Each entry after opener needs its own scene");
  await page.getByRole("button", { name: "Chapter 3: The Reach" }).click();
  assert.deepEqual(await page.locator(".detail-card--small h2").allTextContents(), [
    "Aegis Spire", "Gearheart Quarter", "Undergrid", "High Expanse", "Riftfront",
    "Cogitarium", "Vanguard Bastion", "Aurora Conservatory", "Requiem Forum", "Rift Foundry"
  ]);
  await page.getByRole("button", { name: "Chapter 4: Districts" }).click();
  await page.locator(".reading-pane.has-more").waitFor();
  await page.locator(".reading-pane__inner").evaluate(el => { el.scrollTop = el.scrollHeight; });
  await page.waitForFunction(() => !document.querySelector(".reading-pane").classList.contains("has-more"));
  const dimensions = await page.evaluate(() => ({
    width: innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    height: innerHeight,
    scrollHeight: document.documentElement.scrollHeight
  }));
  assert.equal(dimensions.scrollWidth, dimensions.width);
  await page.getByRole("button", { name: "Chapter 9: Last Light" }).click();
  assert.equal(await page.locator("#next-label").textContent(), "NEXT");
  const musicBeforeFinale = await page.evaluate(() => media.music.currentTime);
  await page.getByRole("button", { name: "NEXT" }).click();
  await page.locator("#finale.is-visible").waitFor();
  await page.waitForFunction(() => document.getElementById("experience").hidden);
  assert.equal(await page.locator("#finale-title").innerText(), "YOUR CAMPAIGN\nBEGINS.");
  assert.equal(await page.locator(".finale__copy").textContent(), "Paradigms Reach still stands. The world still breaks. Will you be the reason it survives?");
  for (const selector of [".topbar", ".chapter-rail", ".detail-cards", ".reading-pane", ".hud-corner"]) {
    assert.equal(await page.locator(selector).first().isVisible(), false, `${selector} should disappear at the finale`);
  }
  assert.equal(await page.evaluate(() => media.music.paused), false);
  assert.ok(await page.evaluate(() => media.music.currentTime) > musicBeforeFinale);
  assert.equal(await page.locator("#finale-title").evaluate(el => el.scrollWidth <= el.clientWidth + 2), true, "Finale title should fit");
  await page.screenshot({ path: join(out, `${name}-finale.png`) });
  await Promise.all([
    page.waitForEvent("load"),
    page.getByRole("button", { name: "REPEAT THE BRIEFING" }).click()
  ]);
  assert.equal(await page.locator(".briefing-prompt").isVisible(), true);
  assert.equal(await page.locator("#experience").isVisible(), false);
  assert.equal(await page.locator("#finale").isVisible(), false);
  assert.deepEqual(errors, []);
  console.log(JSON.stringify({ name, titles, uniqueImages: new Set(images).size, dimensions, errors }));
  await page.close();
}

try {
  await inspectPage("desktop", { width: 1366, height: 768 });
  await inspectPage("mobile", { width: 390, height: 844 });
  const reducedPage = await browser.newPage({
    viewport: { width: 1024, height: 768 },
    reducedMotion: "reduce"
  });
  await reducedPage.goto(url);
  await reducedPage.getByRole("button", { name: "CLICK TO INITIATE" }).click();
  await reducedPage.waitForFunction(() => !document.getElementById("enter-button").disabled);
  assert.equal(await reducedPage.locator("#typed-title").textContent(), "PARADIGMS REACH");
  await reducedPage.getByRole("button", { name: "CLICK TO CONTINUE" }).click();
  await reducedPage.waitForTimeout(100);
  await reducedPage.getByRole("button", { name: "ENTER THE PRIMER" }).click();
  assert.equal(await reducedPage.locator("#chapter-title").textContent(), "A world on the brink.");
  console.log(JSON.stringify({ reducedMotion: true, visible: await reducedPage.locator("#experience").isVisible() }));
  await reducedPage.close();
} finally {
  await browser.close();
}
