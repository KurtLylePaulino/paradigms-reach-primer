const chapters = [
  {
    label: "Opening", image: "assets/reach-skyline.webp", opener: true,
    title: "The world is ending."
  },
  {
    label: "Intro", image: "assets/chapter-intro.webp",
    kicker: "02 / INTRODUCTION", title: "A world on the brink.",
    lead: "The Convergence broke the certainty of the Machine Age. Magic and machinery now share an unstable world, while forces powerful enough to reshape reality press against what remains.",
    note: "Paradigms Reach stands as a last great bastion of order, ingenuity, and machine-forged resistance.",
    cards: [
      ["THE FRACTURE", "The Convergence", "Technology survives beside unpredictable magic. The rules of the world can no longer be taken for granted."],
      ["THE ADVERSARY", "World Shapers", "These forces threaten to rewrite reality itself. Their approach makes every defense feel temporary."],
      ["THE PREMISE", "One place to stand", "The Reach is the civilization holding its ground while the wider world comes apart."]
    ]
  },
  {
    label: "The Reach", image: "assets/chapter-reach.webp",
    kicker: "03 / THE LAST BASTION", title: "The Reach endures.",
    lead: "Paradigms Reach is a city in the original primer and a wider bastion in the living campaign. Its towering infrastructure shelters government, industry, memory, research, and ordinary lives.",
    note: "Its defenses buy time. Its people decide what that time is worth. The ten districts form the heart of that struggle.",
    areas: [
      ["Aegis Spire", "Government and the city’s beacon."],
      ["Gearheart Quarter", "Forges, industry, and invention."],
      ["Undergrid", "Survival below the polished city."],
      ["High Expanse", "Wealth and elevated refuge."],
      ["Riftfront", "Defense at reality’s edge."],
      ["Cogitarium", "Knowledge and guarded archives."],
      ["Vanguard Bastion", "Resistance and preservation."],
      ["Aurora Conservatory", "Cultivated life and renewal."],
      ["Requiem Forum", "Community and public memory."],
      ["Rift Foundry", "Convergence engineering."]
    ]
  },
  {
    label: "Districts", image: "assets/chapter-districts.webp",
    kicker: "04 / THE CITY", title: "Ten ways to survive.",
    lead: "The ten districts give the Reach its shape. Each protects a different part of civilization, and each carries a cost of its own.",
    compactItems: [
      ["Aegis Spire", "Government and order"], ["Gearheart Quarter", "Industry and innovation"],
      ["Undergrid", "Survival and illicit exchange"], ["High Expanse", "Wealth and elevated refuge"],
      ["Riftfront", "Defense at reality’s edge"], ["Cogitarium", "Knowledge and guarded archives"],
      ["Vanguard Bastion", "Resistance and preservation"], ["Aurora Conservatory", "Cultivated life and renewal"],
      ["Requiem Forum", "Community and public memory"], ["Rift Foundry", "Convergence engineering"]
    ],
    cards: [
      ["THE HEIGHTS", "Order above", "Aegis Spire and High Expanse show the Reach at its most commanding—and most unequal."],
      ["THE WORKS", "Where survival is made", "Gearheart, the Cogitarium, and Rift Foundry build, remember, and risk what the city needs next."],
      ["THE PEOPLE", "Where life persists", "The Undergrid, Conservatory, Forum, Bastion, and Riftfront carry different burdens of endurance."]
    ]
  },
  {
    label: "Powers", image: "assets/chapter-powers.webp",
    kicker: "05 / THE POWERS", title: "No one holds it alone.",
    lead: "Six corporations shape the Reach’s infrastructure, weapons, bodies, and future. Their public work is everywhere; the primer’s whispered secret projects remain hooks, not established public fact.",
    items: [
      ["Vantacore Systems", "Military systems and augmentation."],
      ["NoxTech Industries", "Synthetic biology and mind technology."],
      ["ARX Protocol", "Grid, data, surveillance, and prediction."],
      ["Obeliska Global", "Reality anchors and megastructures."],
      ["Karmahard Dynamics", "Weapons and applied war magic."],
      ["Genovolve Initiative", "Genetics and human uplift."]
    ],
    cards: [
      ["INFRASTRUCTURE", "An engineered lifeline", "Power, information, fortification, and transport make the Reach possible."],
      ["DEPENDENCE", "Six hands on the city", "Vantacore, NoxTech, ARX, Obeliska, Karmahard, and Genovolve all have visible roles."],
      ["TENSION", "A bargain under pressure", "The city needs their work. That need gives every corporate decision political weight."]
    ]
  },
  {
    label: "Your Role", image: "assets/chapter-role.webp",
    kicker: "06 / THE PLAYERS", title: "You are the answer.",
    lead: "The primer begins you as level-20 defenders under the Reach: legends made by the Geneseed Project, powerful enough to answer threats that overwhelm ordinary armies.",
    note: "The original primer describes exceptional durability, equipment, and abilities. Use your current character sheet or table ruling for exact numbers.",
    cards: [
      ["THE LEGACY", "Geneseed", "Your body carries engineered survival: the result of a project built for a world at war with its own ending."],
      ["THE ECHO", "A second life within", "A secondary soul matrix holds another person’s memories and experiences. It can complicate identity as much as it grants power."],
      ["THE CHOICE", "Strength has a purpose", "You can lead armies. The campaign asks what, and whom, that strength will protect."]
    ]
  },
  {
    label: "Protectors", image: "assets/chapter-protectors.webp",
    kicker: "07 / THE PROTECTORS", title: "A measure of defenders.",
    lead: "The Reach names the scale of those who stand for it. Protector classifications rise from Knight through Messiah; the rank is a language for responsibility as well as force.",
    groups: [{ title: "PROTECTOR CLASSES", names: ["Knight", "Paladin", "Sentinel", "Shield", "Bulwark", "Bastion", "Martyr", "Savior", "Paragon", "Messiah"] }],
    cards: [
      ["THE FOUNDATION", "Knight to Sentinel", "The early classifications are the backbone of organized defense. Their courage is what lets the city endure one more day."],
      ["THE ESCALATION", "Shield to Bastion", "Higher classes mark defenders whose deployment changes the scale of a crisis."],
      ["THE EXTREME", "Martyr to Messiah", "At the upper end, the names sound mythic because the threats they must face are nearly beyond measure."]
    ]
  },
  {
    label: "Threats", image: "assets/chapter-threats.webp",
    kicker: "08 / THE THREATS", title: "A measure of endings.",
    lead: "The same civilization classifies the dangers that could destroy it. The ladder escalates from local hazards to threats that require the combined force of entire defenses.",
    groups: [{ title: "THREAT CLASSES", names: ["Hazard", "Destruction", "Disaster", "Catastrophe", "Calamity", "Apocalypse", "Extinction", "Apolyon"] }],
    note: "The highest classifications are measured by the combined force needed to answer them, far beyond a single defender.",
    cards: [
      ["FIRST RESPONSE", "Hazard to Disaster", "The lower classifications still demand trained defenders and a coordinated response."],
      ["CITY IN PERIL", "Catastrophe to Apocalypse", "At this scale, the question becomes how much of the Reach can be mobilized in time."],
      ["EXISTENTIAL", "Extinction and Apolyon", "The highest names describe survival itself at stake. A single champion is no longer the whole answer."]
    ]
  },
  {
    label: "Last Light", image: "assets/chapter-last-light.webp",
    kicker: "09 / THE LAST LIGHT", title: "The world can yet be saved.",
    lead: "The Reach does not promise safety. It offers a place to stand, people to defend, and the chance that what remains can become a future.",
    note: "The Last Light is named in the player premise as something worth fighting for. Its precise meaning can emerge at your table.",
    cards: [
      ["WHAT REMAINS", "The living city", "Its towers matter because there are people below them with lives beyond the war."],
      ["WHAT ENDURES", "Memory and identity", "A civilization survives through the stories, relationships, and choices it refuses to surrender."],
      ["WHAT COMES NEXT", "Your campaign begins", "The gate is open. The next part of the Reach belongs to the characters at your table."]
    ]
  }
];

// Keep scene swaps ready before the reader reaches each entry.
chapters.slice(1).forEach(chapter => {
  const image = new Image();
  image.src = chapter.image;
});

const $ = id => document.getElementById(id);
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const intro = $("intro"), titleText = $("typed-title"), enterButton = $("enter-button");
const experience = $("experience"), openerFrame = $("opener-frame");
const finale = $("finale"), finaleTitle = $("finale-title");
const chapterTitle = $("chapter-title"), chapterKicker = $("chapter-kicker");
const chapterLead = $("chapter-lead"), chapterDetail = $("chapter-detail");
const chapterStatus = $("chapter-status"), chapterRail = $("chapter-rail-items");
const headerCurrent = $("header-current"), previousButton = $("previous-chapter");
const nextButton = $("next-chapter"), nextLabel = $("next-label");
const paneInner = document.querySelector(".reading-pane__inner");
const readingPane = document.querySelector(".reading-pane");
const detailCards = $("detail-cards");
const sceneLayers = [$("scene-a"), $("scene-b")];
let currentChapter = 0, maxUnlockedChapter = 0, typingTimer, typed = false, open = false;
let activeScene = 0, transitionTimer;
let briefingStarted = false, soundEnabled = true, lastHoverSound = 0;
let audioPhase = "prelude", lastClickIndex = -1;
let masterVolume = .8;
const soundtrackName = "Extraction Action (Cyberpunk 2077 Soundtrack).mp3";
const media = {
  interfaceLoop: new Audio("assets/audio/interface-loop.wav"),
  typing: new Audio("assets/audio/typing.wav"),
  door: new Audio("assets/audio/door.wav"),
  hover: new Audio("assets/audio/hover.wav"),
  clicks: [1, 2, 3, 4].map(index => new Audio(`assets/audio/click-${index}.wav`)),
  music: new Audio("assets/" + encodeURIComponent(soundtrackName))
};
const allMedia = [media.interfaceLoop, media.typing, media.door, media.hover, ...media.clicks, media.music];
const baseVolumes = new WeakMap();
allMedia.forEach(element => {
  element.preload = "auto";
  baseVolumes.set(element, 1);
  element.volume = masterVolume;
});
media.interfaceLoop.loop = true;
media.music.loop = true;
media.music.preload = "none";
const fades = new WeakMap();

function setMediaVolume(element, volume) {
  const base = Math.max(0, Math.min(1, volume));
  baseVolumes.set(element, base);
  element.volume = base * masterVolume;
}

function safePlay(element) {
  element.muted = !soundEnabled;
  void element.play().catch(() => { /* The initial click enables browser playback. */ });
}

function playClip(element, volume) {
  element.pause();
  element.currentTime = 0;
  setMediaVolume(element, volume);
  safePlay(element);
}

function fadeAudio(element, target, duration, stopAtEnd = false) {
  const previous = fades.get(element);
  if (previous) cancelAnimationFrame(previous);
  const initial = baseVolumes.get(element);
  const started = performance.now();
  function step(now) {
    const progress = Math.max(0, Math.min(1, (now - started) / duration));
    setMediaVolume(element, initial + (target - initial) * progress);
    if (progress < 1) fades.set(element, requestAnimationFrame(step));
    else {
      fades.delete(element);
      if (stopAtEnd) {
        element.pause();
        element.currentTime = 0;
      }
    }
  }
  fades.set(element, requestAnimationFrame(step));
}

function startInterfaceLoop() {
  const pendingFade = fades.get(media.interfaceLoop);
  if (pendingFade) cancelAnimationFrame(pendingFade);
  fades.delete(media.interfaceLoop);
  setMediaVolume(media.interfaceLoop, .12);
  if (media.interfaceLoop.paused) {
    media.interfaceLoop.currentTime = 0;
    safePlay(media.interfaceLoop);
  }
}

function enterPrimerAudio() {
  if (audioPhase === "primer") return;
  audioPhase = "primer";
  fadeAudio(media.interfaceLoop, 0, 550, true);
  if (media.music.paused) safePlay(media.music);
  fadeAudio(media.music, .17, 1800);
}

function playUiSound(kind) {
  if (kind === "hover") {
    const now = performance.now();
    if (now - lastHoverSound < 230) return;
    lastHoverSound = now;
    playClip(media.hover, .19);
    return;
  }
  const available = media.clicks.length;
  let index = Math.floor(Math.random() * available);
  if (index === lastClickIndex) index = (index + 1) % available;
  lastClickIndex = index;
  playClip(media.clicks[index], kind === "next" ? .38 : .31);
}

function playDoorSound() {
  setMediaVolume(media.interfaceLoop, .055);
  playClip(media.door, .68);
}

function syncSoundButtons() {
  const button = $("audio-toggle");
  $("audio-state").textContent = soundEnabled ? "ON" : "OFF";
  button.setAttribute("aria-pressed", String(soundEnabled));
  button.setAttribute("aria-label", soundEnabled ? "Mute all audio" : "Enable all audio");
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  allMedia.forEach(element => { element.muted = !soundEnabled; });
  syncSoundButtons();
  if (soundEnabled) {
    if (audioPhase === "primer" && media.music.paused) safePlay(media.music);
    else if (briefingStarted && audioPhase !== "primer" && media.interfaceLoop.paused) startInterfaceLoop();
    playUiSound("start");
  }
}

function changeMasterVolume(event) {
  masterVolume = Number(event.target.value) / 100;
  event.target.style.setProperty("--volume-fill", `${Math.round(masterVolume * 100)}%`);
  allMedia.forEach(element => setMediaVolume(element, baseVolumes.get(element)));
  $("volume-value").textContent = `${Math.round(masterVolume * 100)}%`;
}

function addDetailList(items, compact = false) {
  const list = document.createElement("ul");
  list.className = compact ? "detail-list detail-list--compact" : "detail-list";
  for (const [name, description] of items) {
    const item = document.createElement("li");
    const strong = document.createElement("strong");
    strong.textContent = name;
    item.appendChild(strong);
    if (description) {
      const small = document.createElement("span");
      small.textContent = description;
      item.appendChild(small);
    }
    list.appendChild(item);
  }
  return list;
}

function renderCards(chapter) {
  detailCards.replaceChildren();
  const isAreas = Boolean(chapter.areas);
  detailCards.classList.toggle("detail-cards--areas", isAreas);
  const notes = isAreas
    ? chapter.areas.map(([title, body]) => ["REACH DISTRICT", title, body])
    : chapter.cards;
  if (!notes) return;
  notes.forEach(([eyebrow, title, body], index) => {
    const card = document.createElement("article");
    card.className = isAreas ? "detail-card detail-card--small" : "detail-card";
    card.style.setProperty("--card-index", index);
    const content = document.createElement("div");
    content.className = "detail-card__content";
    const meta = document.createElement("span");
    meta.className = "detail-card__meta";
    meta.textContent = `${String(index + 1).padStart(2, "0")} / ${eyebrow}`;
    const heading = document.createElement("h2");
    heading.textContent = title;
    const paragraph = document.createElement("p");
    paragraph.textContent = body;
    content.append(meta, heading, paragraph);
    card.appendChild(content);
    detailCards.appendChild(card);
  });
}

function transitionScene(image) {
  const incoming = 1 - activeScene;
  sceneLayers[incoming].style.backgroundImage = `url("${image}")`;
  sceneLayers[incoming].classList.add("is-active");
  sceneLayers[activeScene].classList.remove("is-active");
  activeScene = incoming;
}

function updateScrollCue() {
  const moreBelow = paneInner.scrollHeight - paneInner.scrollTop > paneInner.clientHeight + 5;
  readingPane.classList.toggle("has-more", moreBelow);
}
paneInner.addEventListener("scroll", updateScrollCue, { passive: true });
window.addEventListener("resize", updateScrollCue);

function renderChapter(index, moveFocus = false) {
  if (index < 0 || index >= chapters.length || index > maxUnlockedChapter) return;
  const changed = index !== currentChapter;
  currentChapter = index;
  const chapter = chapters[index];
  experience.classList.toggle("is-opener", Boolean(chapter.opener));
  if (changed) transitionScene(chapter.image);
  if (!chapter.opener) {
    chapterKicker.textContent = chapter.kicker;
    chapterTitle.textContent = chapter.title;
    chapterLead.textContent = chapter.lead;
    chapterDetail.replaceChildren();
    if (chapter.note) {
      const note = document.createElement("p");
      note.className = "detail-note";
      note.textContent = chapter.note;
      chapterDetail.appendChild(note);
    }
    if (chapter.items) chapterDetail.appendChild(addDetailList(chapter.items));
    if (chapter.compactItems) chapterDetail.appendChild(addDetailList(chapter.compactItems, true));
    if (chapter.groups) chapter.groups.forEach(group => {
      const section = document.createElement("section");
      section.className = "detail-group";
      const heading = document.createElement("h2");
      heading.className = "detail-group__title";
      heading.textContent = group.title;
      section.append(heading, addDetailList(group.names.map(name => [name, ""]), true));
      chapterDetail.appendChild(section);
    });
    renderCards(chapter);
    paneInner.scrollTop = 0;
    detailCards.scrollTop = 0;
    requestAnimationFrame(updateScrollCue);
  } else detailCards.replaceChildren();
  headerCurrent.textContent = String(index + 1).padStart(2, "0");
  previousButton.disabled = index === 0;
  nextLabel.textContent = index === chapters.length - 1 ? "NEXT" : "CONTINUE";
  [...chapterRail.children].forEach((button, railIndex) => {
    button.disabled = railIndex > maxUnlockedChapter;
    if (railIndex === index) button.setAttribute("aria-current", "step");
    else button.removeAttribute("aria-current");
  });
  chapterStatus.textContent = `Chapter ${index + 1} of ${chapters.length}: ${chapter.label}`;
  document.title = `${chapter.label} — Paradigms Reach`;
  clearTimeout(transitionTimer);
  experience.classList.remove("is-chapter-entering");
  void experience.offsetWidth;
  if (changed && !chapter.opener && !reducedMotion.matches) {
    experience.classList.add("is-chapter-entering");
    transitionTimer = setTimeout(() => experience.classList.remove("is-chapter-entering"), 1050);
  }
  if (moveFocus) (chapter.opener ? openerFrame : chapterTitle).focus({ preventScroll: true });
}

chapters.forEach((chapter, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "chapter-rail__button";
  button.textContent = String(index + 1).padStart(2, "0");
  button.setAttribute("aria-label", `Chapter ${index + 1}: ${chapter.label}`);
  button.addEventListener("click", () => {
    playUiSound(index >= currentChapter ? "next" : "back");
    renderChapter(index, true);
  });
  chapterRail.appendChild(button);
});

function finishTyping() {
  if (typed) return;
  clearInterval(typingTimer);
  media.typing.pause();
  media.typing.currentTime = 0;
  if (audioPhase === "briefing") setMediaVolume(media.interfaceLoop, .12);
  titleText.textContent = "PARADIGMS REACH";
  intro.classList.add("is-typed");
  enterButton.disabled = false;
  typed = true;
}
function startTyping() {
  if (reducedMotion.matches) return finishTyping();
  const title = "PARADIGMS REACH";
  let position = 0;
  setMediaVolume(media.interfaceLoop, .07);
  playClip(media.typing, .24);
  typingTimer = setInterval(() => {
    titleText.textContent = title.slice(0, ++position);
    if (position >= title.length) finishTyping();
  }, 125);
}
function beginBriefing() {
  if (briefingStarted) return;
  briefingStarted = true;
  audioPhase = "briefing";
  document.body.classList.add("has-audio");
  intro.classList.add("is-briefing-started");
  startInterfaceLoop();
  playUiSound("start");
  setTimeout(() => {
    document.querySelector(".briefing-prompt").hidden = true;
    document.querySelector(".intro__content").removeAttribute("aria-hidden");
    startTyping();
  }, reducedMotion.matches ? 0 : 430);
}
function openGate() {
  if (!typed || open) return;
  open = true;
  audioPhase = "opening";
  enterButton.disabled = true;
  playDoorSound();
  // Start decoding from the user gesture, then bring the music up with the reveal.
  media.music.currentTime = 0;
  setMediaVolume(media.music, 0);
  safePlay(media.music);
  experience.hidden = false;
  document.body.classList.add("is-opening");
  const revealDelay = reducedMotion.matches ? 0 : 2350;
  const cleanupDelay = reducedMotion.matches ? 0 : 2900;
  setTimeout(() => {
    document.body.classList.add("is-open");
    renderChapter(0, true);
    enterPrimerAudio();
  }, revealDelay);
  setTimeout(() => { intro.hidden = true; }, cleanupDelay);
}
function goNext() {
  playUiSound("next");
  if (currentChapter === chapters.length - 1) return showFinale();
  maxUnlockedChapter = Math.max(maxUnlockedChapter, currentChapter + 1);
  renderChapter(currentChapter + 1, true);
}
function showFinale() {
  if (document.body.classList.contains("is-finale")) return;
  nextButton.disabled = true;
  clearTimeout(transitionTimer);
  experience.classList.remove("is-chapter-entering");
  transitionScene(chapters[0].image);
  document.body.classList.add("is-finale");
  document.title = "Your Campaign Begins — Paradigms Reach";
  setTimeout(() => {
    experience.hidden = true;
    finale.hidden = false;
    requestAnimationFrame(() => {
      finale.classList.add("is-visible");
      finaleTitle.focus({ preventScroll: true });
    });
  }, reducedMotion.matches ? 0 : 740);
}
document.querySelector(".intro__content").setAttribute("aria-hidden", "true");
$("initiate-button").addEventListener("click", beginBriefing);
enterButton.addEventListener("click", openGate);
$("opener-next").addEventListener("click", goNext);
previousButton.addEventListener("click", () => {
  playUiSound("back");
  renderChapter(currentChapter - 1, true);
});
nextButton.addEventListener("click", goNext);
$("repeat-briefing").addEventListener("click", () => {
  playUiSound("next");
  finale.classList.remove("is-visible");
  setTimeout(() => window.location.reload(), reducedMotion.matches ? 0 : 350);
});
$("audio-toggle").addEventListener("click", toggleSound);
$("volume-slider").addEventListener("input", changeMasterVolume);
document.addEventListener("pointerover", event => {
  const button = event.target.closest?.("button");
  if (button && !button.disabled && !button.contains(event.relatedTarget)) playUiSound("hover");
});
document.addEventListener("focusin", event => {
  if (event.target instanceof HTMLButtonElement && !event.target.disabled) playUiSound("hover");
});
document.addEventListener("keydown", event => {
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement || event.target instanceof HTMLSelectElement || event.target?.isContentEditable) return;
  if (!open && briefingStarted && !typed && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    finishTyping();
    enterButton.focus();
  } else if (open && document.body.classList.contains("is-open") && !document.body.classList.contains("is-finale")) {
    if (event.key === "ArrowRight" && currentChapter < chapters.length - 1) {
      event.preventDefault();
      goNext();
    } else if (event.key === "ArrowLeft" && currentChapter > 0) {
      event.preventDefault();
      playUiSound("back");
      renderChapter(currentChapter - 1, true);
    }
  }
});
renderChapter(0);
syncSoundButtons();
