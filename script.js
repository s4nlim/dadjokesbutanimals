const desktop = document.getElementById("desktop");

let maximizeMode = false;

// z-index rules
const OVERLAP_COUNT = 5;
const Z_MAXIMIZED = 80;
const Z_NORMAL = 60;
const Z_OVER = 90;

// ---- data ----
const JOKES = [
  { label: "∆π¡)*#¡˚Â¯Ç", q: "What were prehistoric sleepovers called?", a: "Dino-SNORES." },
  { label: "BEE", q: "What’s a <em>bee</em>’s favorite musical?", a: "Stinging in the Rain." },
  { label: "COW", q: "What kind of <em>cow</em> wears a crown?", a: "A dairy queen." },
  { label: "TURKEY", q: "What do <em>turkeys</em> like to eat for dessert?", a: "Apple Gobbler." },
  { label: "STORK", q: "Why do <em>storks</em> have so little money?", a: "They have such big bills." },
  { label: "CROCODILE", q: "Which reptile always knows what time it is?", a: "A grandfather croc." },
  { label: "HORSE", q: "Can a <em>horse</em> join the army?", a: "No, the Neigh-vy." },
  { label: "BEE", q: "Can <em>bees</em> fly in the rain?", a: "Not without their little yellow jackets." },
  { label: "SKUNK", q: "Did you hear the story about the <em>skunk</em>?", a: "Never mind—it stinks." },
  { label: "BIRD", q: "How are migrating <em>birds</em> different from flies?", a: "Birds fly, but flies don’t bird." },
  { label: "BEE", q: "How can you tell if a <em>bee</em> is talking on a cell phone?", a: "You get a buzzy signal." },
  { label: "WORM", q: "How can you tell which end of a <em>worm</em> is the head?", a: "Tickle it in the middle, see which end laughs." },
  { label: "WORM", q: "How can you tell <em>worms</em> from spaghetti?", a: "Worms can hang on to your fork." },
  { label: "FROG", q: "How come <em>frogs</em> are such good liars?", a: "Because they’re amFIBians." },
  { label: "CALF", q: "How did one <em>calf</em> finish his math problems faster than the other calves?", a: "It used a COW-culator." },
  { label: "DUCK", q: "How did the <em>duck</em> get rid of its headache?", a: "With quack-upuncture." },
  { label: "FARMER", q: "How did the farmer count his herd of cattle?", a: "He used a COWculator." },
  { label: "FROG", q: "How did the <em>frog</em> cross the road?", a: "Its cousin toad it." },
  { label: "SHARK", q: "How did the hammerhead <em>shark</em> do on his math test?", a: "He nailed it." },
  { label: "HORSE", q: "How did the <em>horse</em> get a soda?", a: "He gave the vending machine a buck." },
  { label: "SNAKE", q: "How did the <em>snake</em> escape from jail?", a: "It scaled the wall." },
  { label: "GEESE", q: "How do baby <em>geese</em> get out of their shells?", a: "They follow eggs-it signs." },
  { label: "BIRD", q: "How do <em>birds</em> fly in the rain?", a: "They use wing shield wipers." },
  { label: "BIRD", q: "How do <em>birds</em> keep in shape?", a: "They do a lot of eggs-ercises." },
  { label: "BULL", q: "How do <em>bulls</em> pay for their groceries?", a: "They charge them." },
  { label: "CAT", q: "How do <em>cats</em> keep their breath fresh?", a: "They use mouse wash." },
  { label: "CHICKEN", q: "How do <em>chickens</em> keep in shape?", a: "They do lots of EGGSercises." },
  { label: "COW", q: "How do <em>cows</em> find their way home?", a: "They follow the Milky Way." },
  { label: "DEER", q: "How do <em>deer</em> keep their coats looking good?", a: "They use pine combs." },
  { label: "DRAGON", q: "How do dentists fix <em>dragon</em> teeth?", a: "With a fire drill." },
  { label: "DOLPHIN", q: "How do <em>dolphins</em> make important decisions?", a: "They flipper a coin." },
  { label: "ELEPHANT", q: "How do <em>elephants</em> communicate with each other?", a: "By elephone." },
  { label: "FISH", q: "How do <em>fish</em> start their fairy tales?", a: "Once upon a SLIME." },
  { label: "FLEA", q: "How do <em>fleas</em> travel?", a: "They itch hike." },
  { label: "WHALE", q: "How do groups of <em>whales</em> listen to music?", a: "They use their i-PODS." },
  { label: "JACKRABBIT", q: "How do <em>jackrabbits</em> keep cool in the dessert?", a: "They use ear-conditioning." },
  { label: "MONKEY", q: "How do <em>monkeys</em> go downstairs?", a: "They slide down the banana-ster." },
  { label: "∂ç˜≤µœ", q: "How do ocean creatures cross the ocean?", a: "By taxi crab." },
  { label: "PORCUPINE", q: "How do <em>porcupines</em> communicate?", a: "Through spine language." },
  { label: "PORCUPINE", q: "How do <em>porcupines</em> hug and kiss?", a: "Very carefully." },
  { label: "PORCUPINE", q: "How do <em>porcupines</em> play leapfrog?", a: "Very carefully." },
  { label: "RABBIT", q: "How do <em>rabbits</em> keep in shape?", a: "They do HARErobics." },
  { label: "RABBIT", q: "How do <em>rabbits</em> travel?", a: "In HARE-planes." },
  { label: "ROBIN", q: "How do <em>robins</em> find their way to their nesting places?", a: "They follow the “egg-sit” signs." },
  { label: "ROBIN", q: "How do <em>robins</em> start their exercise routine?", a: "With worm-ups." },
  { label: "SLUG", q: "How do <em>slugs</em> get up mountains?", a: "They slime to the top." },
  { label: "SNAIL", q: "How do <em>snails</em> get their shells all shiny and clean?", a: "They use snail polish." },
  { label: "SNAIL", q: "How do <em>snails</em> greet each other?", a: "“Long slime, no see.”" },
  { label: "SNAIL", q: "How do <em>snails</em> start their fairy tales?", a: "Once upon a slime." },
  { label: "SNAKE", q: "How do <em>snakes</em> sign their letters?", a: "With hugs and hisses." },
  { label: "TERMITE", q: "How do <em>termites</em> travel?", a: "By chew-chew train." },
  { label: "TURKEY", q: "How do <em>turkeys</em> wake their friends on Thanksgiving morning?", a: "With alarm clucks." },
  { label: "TYRANNOSAUR", q: "How do <em>tyrannosaurs</em> like their eggs?", a: "Terri-fried!" },
  { label: "WASP", q: "How do <em>wasps</em> communicate?", a: "Through bee-mail." },
  { label: "CHEETAH", q: "How do you find a <em>cheetah</em> at night?", a: "Use a spotlight." },
  { label: "MOSQUITO", q: "How do you find your <em>mosquito</em> bites?", a: "Start from scratch." },
  { label: "FROG", q: "How do you get a <em>frog</em> off your back car window?", a: "Use a rear-window defrogger." },
  { label: "BUFFALO", q: "How do you keep a <em>buffalo</em> from charging?", a: "Take away its credit card." },
  { label: "SALMON", q: "How do you keep a stinky <em>salmon</em> from smelling?", a: "Hold its nose." },
  { label: "BEE", q: "How do you know when a <em>bee</em> is talking on the phone?", a: "You hear a buzzy signal." },
  { label: "FISH", q: "How do you know when a <em>fish</em> is playing hooky?", a: "When it’s not in a school." },
  { label: "BAT", q: "How do you know when a vampire <em>bat</em> is sick?", a: "It can’t stop coffin." },
  { label: "WHALE", q: "How do you make a <em>whale</em> float?", a: "Two scoops of ice cream, root beer, and a whale." },
  { label: "SQUIRREL", q: "How do you make friends with a <em>squirrel</em>?", a: "Climb a tree and act like a nut." },
  { label: "ANT", q: "How do you milk an <em>ant</em>?", a: "First you get a really low stool." },
  { label: "ALLIGATOR", q: "How do you say goodbye to a sick <em>alligator</em>?", a: "“See you later, illigator.”" },
  { label: "DEER", q: "How do young <em>deer</em> call each other?", a: "They use a tell-a-fawn." },
  { label: "CAT", q: "How does a <em>cat</em> succeed in life?", a: "Through purr-sistence." },
  { label: "DOLPHIN", q: "How does a <em>dolphin</em> make bread?", a: "With All-Porpoise Flour." },
  { label: "DOLPHIN", q: "How does a <em>dolphin</em> wash its flippers?", a: "With an all-porpoise cleaner." },
  { label: "FIREFLY", q: "How does a <em>firefly</em> start a race?", a: "Ready, set, glow!" },
  { label: "FISH", q: "How does a <em>fish</em> feel when it gets caught stealing bait?", a: "Gill-ty." },
  { label: "FLOWER", q: "How does a <em>flower</em> ride a bike?", a: "With its petals." },
  { label: "LION", q: "How does a <em>lion</em> like its steak?", a: "Medium-roar." },
  { label: "KANGAROO", q: "How does a mother <em>kangaroo</em> tell time?", a: "With her pocket watch." },
  { label: "MOUSE", q: "How does a <em>mouse</em> disguise himself?", a: "He wears a mousetache." },
  { label: "MOUSE", q: "How does a <em>mouse</em> feel after a bath?", a: "Squeaky clean." },
  { label: "PENGUIN", q: "How does a <em>penguin</em> feel after its friend moves away?", a: "Ice-olated." },
  { label: "SKUNK", q: "How does a <em>skunk</em> put out a fire?", a: "It uses an ex-stink-guisher." },
  { label: "SLUG", q: "How does a <em>slug</em> go fishing?", a: "On a snail boat." },
  { label: "SPONGE", q: "How does a <em>sponge</em> spend its free time?", a: "It soaks up some fun." },
  { label: "TURTLE", q: "How does a <em>turtle</em> call its friends?", a: "With a shell phone." },
  { label: "TURTLE", q: "How does a <em>turtle</em> get to the top floor?", a: "In a shell-evator." },
  { label: "OCTOPUS", q: "How does an <em>octopus</em> pay its bills?", a: "With sand dollars." },
  { label: "PENGUIN", q: "How is a wall light switch like a <em>penguin</em>?", a: "They both have flippers." },
  { label: "TOUCAN", q: "How many birds can sing a duet?", a: "Toucan." },
  { label: "COCKROACH", q: "How many <em>cockroaches</em> does it take to screw in a light bulb?", a: "Can’t tell. They scatter as soon as the light turns on." },
  { label: "FROG", q: "How many <em>frogs</em> would fit in your glass of water?", a: "Toadily too many." },
  { label: "OWL", q: "How many mice can an <em>owl</em> eat?", a: "OWL of them!" },
  { label: "DOG", q: "How many parents does a <em>dog</em> have?", a: "Five: one ma and four paws." },
  { label: "CRAB", q: "How much seafood does a <em>crab</em> eat?", a: "Just a pinch." },
  { label: "RABBIT", q: "In an emergency whom do you call for a sick <em>rabbit</em>?", a: "A hare-a-medic." },
  { label: "CHICKEN", q: "Is <em>chicken</em> soup good for you?", a: "Not if you’re the chicken!" },
  { label: "TURKEY", q: "Is <em>turkey</em> soup good for you?", a: "Not if you’re the turkey!" },
  { label: "SALMON", q: "What part of a <em>salmon</em> weighs the most?", a: "Its scales." },
  { label: "COW", q: "What do you call a sleeping male <em>cow?</em>", a: "A Bulldozer." },
  { label: "ARMADILLO", q: "What animal can you find in the military?", a: "An army-dillo." },
  { label: "BEAR", q: "What animal hibernates while standing on its head?", a: "Yoga bear." },
  { label: "BAT", q: "What animal sewed the first American flag?", a: "Bat-sy Ross." },
  { label: "AARDVARK", q: "What’s an <em>aardvark</em>’s favorite pizza topping?", a: "Ant-chovies." },
  { label: "PARROT", q: "What’s smarter than a talking <em>parrot?</em>", a: "A spelling bee." },
  { label: "LEMUR", q: "What does a <em>lemur</em> pirate say?", a: "“Aye-aye, matey!”" },
  { label: "JELLYFISH", q: "What makes a <em>jellyfish</em> laugh?", a: "Ten tickles." },
  { label: "CHICKEN", q: "What do you get when you cross a <em>chicken</em> with a <em>skunk?</em>", a: "A fowl smell." },
  { label: "FLY", q: "What are <em>flies</em> most afraid of?", a: "The SWAT team." },
  { label: "SKUNK", q: "What are <em>skunks</em> so smart?", a: "They make a lot of scents." },
  { label: "SPIDER", q: "What are <em>spiders</em> called after their wedding?", a: "Newly webs." },
  { label: "Ôœˆø∆¡@•∫ç", q: "What barks, chases cats, and has black and red spots?", a: "A Dalmatian with measles." },
  { label: "BEAR", q: "What <em>bear</em> likes to go out in the rain?", a: "Drizzly bears." },
  { label: "BIRD", q: "What <em>bird</em> is the greatest artist?", a: "Leonardo da Finchy." },
  { label: "BIRD", q: "What <em>bird</em> shows up at every meal?", a: "A swallow." },
  { label: "ˆ?¡•£¡&", q: "What <em>birds</em> always get out of breath when migrating?", a: "Puffins." },
  { label: "BUG", q: "What <em>bug</em> caused the computer to crash?", a: "The Inter-gnat." },
  { label: "≤ß∂å˚", q: "What <em>buzzes,</em> is black and yellow, and goes along the sides of flowers?", a: "Bee-line." },
];

const IMAGES = [
  { label: "PENGUIN", src: "imgs/penguin.gif" },
  { label: "BEAR", src: "imgs/bear.gif" },
  { label: "GOAT", src: "imgs/goat.gif" },
  { label: "GIRAFFE", src: "imgs/giraffe.gif" },
  { label: "BEAR", src: "imgs/bear.gif" },
  { label: "CAR", src: "imgs/cat1.gif" },
  { label: "CAT", src: "imgs/cat2.gif" },
  { label: "MONKEY", src: "imgs/monkey1.jpg" },
  { label: "MONKEY", src: "imgs/monkey2.gif" },
  { label: "MONKEY", src: "imgs/monkey3.gif" },
  { label: "FROG", src: "imgs/frog1.gif" },
  { label: "FROG", src: "imgs/frog2.gif" },
  { label: "QUOKA", src: "imgs/quoka.gif" },
  { label: "SNAIL", src: "imgs/snail.jpg" },
  { label: "DOG", src: "imgs/dog1.jpg" },
];

const closeCountEl = document.getElementById("closeCount");
const closeMeter = document.getElementById("closeMeter");
let closeAttempts = 0;

// 3초 동안 close 액션 없으면 숨김
const SCORE_IDLE_MS = 3000;
let scoreIdleTimer = null;

function startScoreIdleTimer() {
  clearTimeout(scoreIdleTimer);
  scoreIdleTimer = setTimeout(() => {
    if (closeMeter) closeMeter.classList.add("is-faded");
  }, SCORE_IDLE_MS);
}

const TAB_CLOSE_LIMIT = 20;
let isBlackout = false;
let spawnTimer = null; // setInterval id 보관



function showScoreMeter() {
  if (closeMeter) closeMeter.classList.remove("is-faded");
  startScoreIdleTimer();
}

function bumpCloseCount() {
  if (isBlackout) return;

  closeAttempts += 1;
  if (closeCountEl) closeCountEl.textContent = closeAttempts;
  showScoreMeter();

  updateFindPanel(); // ✅ FIND 실시간 반영

  if (closeAttempts >= TAB_CLOSE_LIMIT) {
    triggerBlackout();
  }
}

let topOrder = 1; // 추가

/* ===== taskbar panel windows ===== */
const panelWindows = new Map();

// About/Help/Find 열었을 때 잠깐 읽기 보호 (자동 팝업 일시정지)
const PANEL_READ_MS = 5000;   // 최소 5초 읽기 시간
let panelReadableUntil = 0;

function holdPanelsReadable(ms = PANEL_READ_MS) {
  panelReadableUntil = Math.max(panelReadableUntil, Date.now() + ms);
}

function isPanelReadLockActive() {
  // 패널이 실제로 열려 있고, 보호시간 안이면 true
  return panelWindows.size > 0 && Date.now() < panelReadableUntil;
}


const PANEL_CONTENT = {
  about: {
  label: "ABOUT THIS PAGE",
  html: `
    <div class="info-content">
      <p>This page is about my view of dad jokes.</p>
      <p>I show them through an early-internet pop-up advertisement style because many people think dad jokes are random, cheesy, repetitive, and sometimes nonsense.</p>
      <p>I wanted to challenge that idea and make them fun, because dad jokes are fun (at least some of them).</p>
      <p>I designed the screen to feel intentionally chaotic so users can experience an overload of lingering jokes but still laugh at the same time.</p>
    </div>
  `
},
  help: {
    label: "HELP",
    html: `
      <div class="info-content">
          <p>Drag tabs by the blue bar</p>
          <p><strong>+</strong> expands a tab</p>
          <p><strong>×</strong> closes a tab</p>
          <p>TRY DELETING AS MANY AS YOU CAN</p>
      </div>
    `
  },
  find: {
    label: "FIND",
    html: `
      <div class="info-content">
        <p>TABS THAT YOU TRIED TO DELETE: <strong class="js-deleted-count">0</strong></p>
      </div>
    `
  }
};

function setTaskButtonActive(key, isActive) {
  const btn = document.querySelector(`.taskbar-btn[data-panel="${key}"]`);
  if (!btn) return;
  btn.classList.toggle("is-active", isActive);
  btn.setAttribute("aria-pressed", String(isActive));
}

function getPanelProfile() {
  const mobile = window.innerWidth <= 768;
  const freeH = window.innerHeight - getTaskbarHeight();

  if (mobile) {
    return {
      MIN_W: 220,
      MAX_W: Math.max(260, Math.floor(window.innerWidth - 12)),
      MIN_H: 110,
      // 모바일에서도 full-screen 안 가게 상한 낮춤
      MAX_H: Math.max(180, Math.floor(freeH * 0.72)),
      BUMP: 16
    };
  }

  return {
    MIN_W: 360,
    MAX_W: Math.min(980, window.innerWidth - 24),
    MIN_H: 150,
    MAX_H: Math.min(760, freeH - 16),
    BUMP: 48
  };
}

function fitPanelWindow(win) {
  if (win.dataset.type !== "panel") return;
  if (win.classList.contains("max")) return;

  const content = win.querySelector(".content");
  if (!content) return;

  const { MIN_W, MAX_W, MIN_H, MAX_H, BUMP } = getPanelProfile();

  // 1) 시작 폭
  let w = clamp(win.offsetWidth || (window.innerWidth <= 768 ? 260 : 620), MIN_W, MAX_W);
  win.style.width = w + "px";

  // 2) 높이가 너무 크면 폭을 넓혀 줄바꿈 줄이기
  let guard = 20;
  while (guard-- > 0) {
    const { needH } = measureNeed(win);
    if (needH <= MAX_H || w >= MAX_W) {
      win.style.height = clamp(needH, MIN_H, MAX_H) + "px";
      break;
    }
    w = Math.min(MAX_W, w + BUMP);
    win.style.width = w + "px";
  }

  // 3) 너무 넓으면 줄여서 텍스트에 맞게
  guard = 20;
  while (guard-- > 0) {
    const nextW = w - BUMP;
    if (nextW < MIN_W) break;

    win.style.width = nextW + "px";
    const { needH } = measureNeed(win);

    if (needH > MAX_H) {
      win.style.width = w + "px";
      break;
    }

    w = nextW;
    win.style.height = clamp(needH, MIN_H, MAX_H) + "px";
  }

  syncContentBox(win);
  content.style.overflowY =
    content.scrollHeight > content.clientHeight + 1 ? "auto" : "hidden";

  keepWindowInViewport(win);
}


function placePanelWindow(el) {
  // append 이후 호출되어야 실측 가능
  fitPanelWindow(el);

  const w = el.offsetWidth;
  const h = el.offsetHeight;
  const taskbarH = getTaskbarHeight();

  if (window.innerWidth <= 768) {
    // 모바일도 풀스크린 고정 X
    el.style.left = "6px";
    el.style.top = "8px";
  } else {
    const x = Math.round((window.innerWidth - w) / 2 + randInt(-26, 26));
    const y = Math.round((window.innerHeight - taskbarH - h) / 2 + randInt(-18, 18));

    el.style.left = clamp(x, 6, window.innerWidth - w - 6) + "px";
    el.style.top = clamp(y, 6, window.innerHeight - taskbarH - h - 6) + "px";
  }

  keepWindowInViewport(el);
}


function createPanelWindow(key) {
  const data = PANEL_CONTENT[key];
  if (!data) return null;

  const el = document.createElement("section");
  el.className = "win info-win";
  el.dataset.type = "panel";
  el.dataset.panelKey = key;
  el.dataset.noGlitch = "1";
  el.dataset.countClose = "0";

  el.innerHTML = `
    <div class="bar">
      <div class="label">${data.label}</div>
      <div class="controls">
        <button class="btn-close" title="close">×</button>
      </div>
    </div>
    <div class="content">
      ${data.html}
    </div>
  `;

  wireWindow(el);
  return el;
}


function updateFindPanel() {
  const findWin = panelWindows.get("find");
  if (!findWin || !findWin.isConnected) return;

  const countEl = findWin.querySelector(".js-deleted-count");
  if (countEl) countEl.textContent = String(closeAttempts);
}

function togglePanel(key) {
  const existing = panelWindows.get(key);

  if (existing && existing.isConnected) {
    stopLabelGlitch(existing);
    existing.remove();
    panelWindows.delete(key);
    setTaskButtonActive(key, false);
    return;
  }

  const el = createPanelWindow(key);
  if (!el) return;

  desktop.appendChild(el);
  placePanelWindow(el);   // append 후 실측 배치
  watchFit(el);           // 패널도 resize observe
  bringToFront(el);

  panelWindows.set(key, el);
  setTaskButtonActive(key, true);
  holdPanelsReadable(); // 패널 열면 일정 시간 읽기 보호

  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      fitPanelWindow(el);
      keepWindowInViewport(el);
    });
  }

  if (key === "find") updateFindPanel();
}



// -------------------- helpers --------------------

function isTouchUI() {
  return window.matchMedia("(hover: none), (pointer: coarse)").matches;
}

function showOriginalLabelBriefly(win, ms = 1200) {
  if (!win || win.dataset.noGlitch === "1") return; // ABOUT/HELP/FIND 제외
  const labelEl = win.querySelector(".label");
  if (!labelEl) return;

  const original = labelEl.dataset.original || labelEl.textContent || "";
  stopLabelGlitch(win);
  labelEl.textContent = original;

  clearTimeout(win._labelPeekTimer);
  win._labelPeekTimer = setTimeout(() => {
    if (!win.isConnected) return;
    if (win.classList.contains("max")) return; // max 상태는 원래 라벨 유지
    startLabelGlitch(win);
  }, ms);
}


const GLITCH_CHARS = "∆∏‡‽∂Ω¶ÚÆœªø░▒▓█çßƒ©∑∏╳∫µɆƔ╬ɎÐÞŁØÆŒßĦ░▒▓";

const GLITCH_CFG = {
  // 기본 글리치 강도 (낮출수록 동물 이름이 더 잘 보임)
  baseIntensity: 0.22,

  // "이름이 또렷하게 보이는 순간" 직후에 섞이는 강도
  flashIntensity: 0.10,

  // 프레임 갱신 속도
  tickMin: 180,
  tickMax: 320,

  // 원래 이름을 완전히 보여주는 간격
  flashGapMin: 1900,
  flashGapMax: 3400,

  // 원래 이름을 유지하는 시간
  flashHoldMs: 260
};

function glitchFrameFromOriginal(original, intensity = GLITCH_CFG.baseIntensity) {
  const out = [];
  for (const ch of original) {
    if (ch === " ") {
      out.push(" ");
      continue;
    }
    out.push(Math.random() < intensity ? randGlitchChar() : ch);
  }
  return out.join("");
}


function makeGlitchLabel(min = 6, max = 10) {
  const len = randInt(min, max);
  let out = "";
  for (let i = 0; i < len; i++) {
    out += GLITCH_CHARS[randInt(0, GLITCH_CHARS.length - 1)];
  }
  return out;
}
function randGlitchChar() {
  return GLITCH_CHARS[randInt(0, GLITCH_CHARS.length - 1)];
}

const BLACKOUT_LINES = [
  "You've deleted 20 tabs.,",
  "Well...too bad...",
  "I think you don't like dad jokes.",
  "Get OFF of my site."
];
// 원래 문구 오타 그대로 쓰고 싶으면:
// const BLACKOUT_LINES = ["To bad,", "I think", "you don't like dad jokes."];

function triggerBlackout() {
  if (isBlackout) return;
  isBlackout = true;

  // 자동 생성 멈춤
  if (spawnTimer) {
    clearInterval(spawnTimer);
    spawnTimer = null;
  }

  // 글리치 타이머 정리
  document.querySelectorAll(".win").forEach(w => stopLabelGlitch(w));

  const overlay = document.createElement("div");
  overlay.id = "blackoutOverlay";

  Object.assign(overlay.style, {
    position: "fixed",
    inset: "0",
    background: "#000",
    color: "#fff",
    zIndex: "999999",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "24px",
    fontFamily: "sans-serif",
    pointerEvents: "auto"
  });

  const wrap = document.createElement("div");
  Object.assign(wrap.style, {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center"
  });

  overlay.appendChild(wrap);
  document.body.appendChild(overlay);

  // 한 줄씩 등장
  BLACKOUT_LINES.forEach((line, i) => {
    setTimeout(() => {
      const p = document.createElement("p");
      p.textContent = line;
      Object.assign(p.style, {
        margin: "0",
        fontSize: "clamp(20px, 3vw, 44px)",
        fontWeight: "700",
        letterSpacing: "0.02em",
        opacity: "0",
        transform: "translateY(8px)",
        transition: "opacity .35s ease, transform .35s ease"
      });

      wrap.appendChild(p);

      // 다음 프레임에 show
      requestAnimationFrame(() => {
        p.style.opacity = "1";
        p.style.transform = "translateY(0)";
      });
    }, i * 1000); // 줄 간격 속도(ms)
  });
}


function startLabelGlitch(win) {
  const labelEl = win.querySelector(".label");
  if (!labelEl) return;

  if (!labelEl.dataset.original) {
    labelEl.dataset.original = (labelEl.textContent || "").trim();
  }

  stopLabelGlitch(win);

  const original = labelEl.dataset.original || "";
  if (!original) return;

  // 1) 평소엔 원문 + 글리치가 섞여 보이게
  const tick = () => {
    if (!win.isConnected) return;
    if (win.classList.contains("max")) return;

    labelEl.textContent = glitchFrameFromOriginal(original, GLITCH_CFG.baseIntensity);
    win._labelGlitchTimer = setTimeout(
      tick,
      randInt(GLITCH_CFG.tickMin, GLITCH_CFG.tickMax)
    );
  };

  // 2) 가끔 원래 동물 이름을 잠깐 또렷하게 보여주기
  const flashOriginal = () => {
    if (!win.isConnected) return;
    if (win.classList.contains("max")) return;

    labelEl.textContent = original;

    win._labelFlashHold = setTimeout(() => {
      if (!win.isConnected) return;
      if (win.classList.contains("max")) return;

      labelEl.textContent = glitchFrameFromOriginal(original, GLITCH_CFG.flashIntensity);

      win._labelFlashTimer = setTimeout(
        flashOriginal,
        randInt(GLITCH_CFG.flashGapMin, GLITCH_CFG.flashGapMax)
      );
    }, GLITCH_CFG.flashHoldMs);
  };

  // 시작 프레임
  labelEl.textContent = glitchFrameFromOriginal(original, GLITCH_CFG.flashIntensity);

  win._labelGlitchTimer = setTimeout(
    tick,
    randInt(GLITCH_CFG.tickMin, GLITCH_CFG.tickMax)
  );

  win._labelFlashTimer = setTimeout(
    flashOriginal,
    randInt(GLITCH_CFG.flashGapMin, GLITCH_CFG.flashGapMax)
  );
}


function stopLabelGlitch(win) {
  // 이전 버전 호환(기존 배열 타이머 정리)
  if (win?._labelGlitchTimers) {
    win._labelGlitchTimers.forEach((id) => clearTimeout(id));
    win._labelGlitchTimers = null;
  }

  if (win?._labelGlitchTimer) {
    clearTimeout(win._labelGlitchTimer);
    win._labelGlitchTimer = null;
  }

  if (win?._labelFlashTimer) {
    clearTimeout(win._labelFlashTimer);
    win._labelFlashTimer = null;
  }

  if (win?._labelFlashHold) {
    clearTimeout(win._labelFlashHold);
    win._labelFlashHold = null;
  }

  if (win?._labelPeekTimer) {
    clearTimeout(win._labelPeekTimer);
    win._labelPeekTimer = null;
  }
}



function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function pick(arr) {
  return arr[randInt(0, arr.length - 1)];
}
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
function randomPos(w = 360, h = 220) {
  const OUT_X = 50;        // allow a bit left/right overflow
  const OUT_TOP = 10;       // allow up to 5px above top
  const OUT_BOTTOM = 50;   // allow a bit below bottom

  const x = randInt(-OUT_X, window.innerWidth - w + OUT_X);

  const minY = -OUT_TOP;
  const maxY = Math.max(minY, window.innerHeight - h + OUT_BOTTOM);
  const y = randInt(minY, maxY);

  return { x, y };
}


function getTaskbarHeight() {
  const tb = document.querySelector(".taskbar");
  return tb ? tb.offsetHeight : 0;
}

function applyImageWindowSize(win, imgW, imgH) {
  const bar = win.querySelector(".bar");
  const img = win.querySelector("img");
  if (!bar || !img) return;

  const cs = getComputedStyle(win);
  const borderX = (parseFloat(cs.borderLeftWidth) || 0) + (parseFloat(cs.borderRightWidth) || 0);
  const borderY = (parseFloat(cs.borderTopWidth) || 0) + (parseFloat(cs.borderBottomWidth) || 0);
  const barH = bar.offsetHeight || 26;

  const contentW = Math.max(1, Math.round(imgW));
  const contentH = Math.max(1, Math.round(imgH));

  // 콘텐츠(이미지) 크기에 정확히 맞는 outer window 크기
  win.style.width = `${Math.round(contentW + borderX)}px`;
  win.style.height = `${Math.round(barH + contentH + borderY)}px`;

  // 이미지 영역 정확히 일치
  img.style.width = `${contentW}px`;
  img.style.height = `${contentH}px`;
  img.style.display = "block";
  img.style.objectFit = "fill";   // 현재는 동일 비율로 계산하므로 왜곡 없음
  img.style.objectPosition = "center";
}

function fitImageWindow(win) {
  const img = win.querySelector("img");
  const bar = win.querySelector(".bar");
  if (!img || !bar || !img.naturalWidth || !img.naturalHeight) return;

  const nw = img.naturalWidth;
  const nh = img.naturalHeight;
  const barH = bar.offsetHeight || 26;
  const taskbarH = getTaskbarHeight();

  // "원본 크기" 우선, 화면 넘칠 때만 축소
  const maxW = Math.floor(window.innerWidth * 0.75);
  const maxH = Math.floor((window.innerHeight - taskbarH) * 0.8);
  const scale = Math.min(1, maxW / nw, (maxH - barH) / nh);

  const w = Math.max(60, nw * scale);
  const h = Math.max(60, nh * scale);

  applyImageWindowSize(win, w, h);
}

function fitImageMax(win) {
  const img = win.querySelector("img");
  const bar = win.querySelector(".bar");
  if (!img || !bar || !img.naturalWidth || !img.naturalHeight) return;

  const nw = img.naturalWidth;
  const nh = img.naturalHeight;
  const barH = bar.offsetHeight || 26;
  const taskbarH = getTaskbarHeight();

  const pad = window.innerWidth <= 768 ? 6 : 10;
  const freeH = window.innerHeight - taskbarH;

  // 화면 내에서 최대 확대 (비율 유지, 잘림 없음)
  const availW = Math.max(120, window.innerWidth - pad * 2);
  const availH = Math.max(100, freeH - pad * 2 - barH);

  const scale = Math.min(availW / nw, availH / nh);
  const w = Math.max(120, Math.floor(nw * scale));
  const h = Math.max(80, Math.floor(nh * scale));

  applyImageWindowSize(win, w, h);

  // 창 자체 중앙 배치
  const outerW = win.offsetWidth;
  const outerH = win.offsetHeight;

  win.style.position = "fixed";
  win.style.left = `${Math.max(pad, Math.round((window.innerWidth - outerW) / 2))}px`;
  win.style.top = `${Math.max(pad, Math.round((freeH - outerH) / 2))}px`;
}

// ✅ maximize 전에 원래 크기/위치/포지션 저장
function saveBox(el) {
  el.dataset.prevW = el.style.width || "";
  el.dataset.prevH = el.style.height || "";
  el.dataset.prevL = el.style.left || "";
  el.dataset.prevT = el.style.top || "";
  el.dataset.prevPos = el.style.position || "";
}

// ✅ restore 때 원래 크기/위치/포지션 복구
function restoreBox(el) {
  el.style.width = el.dataset.prevW || "";
  el.style.height = el.dataset.prevH || "";
  if (el.dataset.prevL !== "") el.style.left = el.dataset.prevL;
  if (el.dataset.prevT !== "") el.style.top = el.dataset.prevT;
  el.style.position = el.dataset.prevPos || "";
}

// ✅ CSS에 의존 안 하고 JS로 확실히 최대화 프레임 적용
function setMaxFrame(el) {
  el.style.position = "fixed";
  el.style.left = "4vw";
  el.style.top = "6vh";
  el.style.width = "92vw";
  el.style.height = "88vh";
}

function clearOverlaps() {
  document.querySelectorAll(".win.over").forEach(w => w.classList.remove("over"));
}

function pickOverlaps(exceptEl, count) {
  const wins = [...document.querySelectorAll(".win")]
    .filter(w => w !== exceptEl && !w.classList.contains("max"));

  for (let i = wins.length - 1; i > 0; i--) {
    const j = randInt(0, i);
    [wins[i], wins[j]] = [wins[j], wins[i]];
  }

  wins.slice(0, count).forEach(w => w.classList.add("over"));
}

function updateMaxBtn(el) {
  const btn = el.querySelector(".btn-max");
  if (!btn) return;
  const isMax = el.classList.contains("max");
  btn.textContent = isMax ? "−" : "+";
  btn.title = isMax ? "restore" : "maximize";
}

function bringToFront(el) {
  el.dataset.order = String(++topOrder);
  applyZRules(el);
}

function applyZRules(el) {
  const order = Number(el.dataset.order || 0);
  el.style.zIndex = String(order); // 순서(최근 클릭/생성)가 전부
}


// -------------------- sizing: content box + fit --------------------
function syncContentBox(win) {
  const bar = win.querySelector(".bar");
  const content = win.querySelector(".content");
  if (!bar || !content) return;

  // win padding/border 고려는 CSS에서 처리한다고 가정하고,
  // "bar 제외한 나머지 높이"를 content에 준다.
  const h = Math.max(0, win.clientHeight - bar.offsetHeight);
  content.style.height = h + "px";
  content.style.overflow = "hidden";
}

function getProfile() {
  const w = window.innerWidth;

  // mobile
  if (w <= 480) {
    return { Q_RANGE: [8, 16], A_MULT: 1.0, MIN_W: 130, MIN_H: 95 };
  }

  // tablet / small laptop
  if (w <= 1024) {
    return { Q_RANGE: [18, 32], A_MULT: 1.12, MIN_W: 200, MIN_H: 140 };
  }

  // desktop
  if (w <= 1440) {
    return { Q_RANGE: [26, 46], A_MULT: 1.22, MIN_W: 240, MIN_H: 160 };
  }

  // large desktop
  return { Q_RANGE: [30, 54], A_MULT: 1.26, MIN_W: 260, MIN_H: 180 };
}

const CAP_W = () => {
  if (window.innerWidth <= 768) {
    return Math.min(260, Math.floor(window.innerWidth * 0.68));
  }
  return Math.min(720, Math.floor(window.innerWidth * 0.92));
};

const CAP_H = () => {
  if (window.innerWidth <= 768) {
    return Math.min(280, Math.floor(window.innerHeight * 0.5));
  }
  return Math.min(820, Math.floor(window.innerHeight * 0.92));
};



function pickTextSizes(win) {
  // 랜덤은 창 생성 시 1회만
  if (win.dataset.qBase) return;

  const qBase = randInt(24, 40); // 창별 고정 기본값
  const aBase = Math.round(qBase * 1.2);

  win.dataset.qBase = String(qBase);
  win.dataset.aBase = String(aBase);
}

function getFluidScale() {
  // 360 ~ 1600 사이에서 부드럽게 보간
  const vw = clamp(window.innerWidth, 360, 1600);
  const t = (vw - 360) / (1600 - 360); // 0~1
  return 0.92 + t * (1.18 - 0.92);     // 0.92 ~ 1.18
}

function setFluidSizes(win) {
  pickTextSizes(win);

  const scale = getFluidScale();
  const qSize = Math.round(parseInt(win.dataset.qBase, 10) * scale);
  const aSize = Math.round(parseInt(win.dataset.aBase, 10) * scale);

  win.dataset.qSize = String(qSize);
  win.dataset.aSize = String(aSize);
}


function applyTextSizes(win) {
  const qEl = win.querySelector(".q");
  const aEl = win.querySelector(".answer");
  if (!qEl) return;

  const { A_MULT } = getProfile(); // ✅ 추가

  const qSize = parseInt(win.dataset.qSize || "54", 10);
  const aSize = parseInt(
    win.dataset.aSize || String(Math.round(qSize * A_MULT)),
    10
  );

  qEl.style.setProperty("font-size", qSize + "px", "important");
  qEl.style.setProperty("line-height", "1.02", "important");
  qEl.style.setProperty("margin", "0", "important");
  qEl.style.setProperty("overflow-wrap", "anywhere", "important");
  qEl.style.setProperty("word-break", "break-word", "important");

  if (aEl) {
    aEl.style.setProperty("font-size", aSize + "px", "important");
    aEl.style.setProperty("line-height", "0.98", "important");
    aEl.style.setProperty("margin", "0", "important");
    aEl.style.setProperty("overflow-wrap", "anywhere", "important");
    aEl.style.setProperty("word-break", "break-word", "important");
  }
}

// 내용이 얼마나 필요한지 측정해서 win 높이를 정확히 맞춘다 (bar 높이 하드코딩 X)
function measureNeed(win) {
  const bar = win.querySelector(".bar");
  const content = win.querySelector(".content");
  if (!bar || !content) return { needH: win.offsetHeight };

  const cs = getComputedStyle(win);
  const borderY = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);

  // 자연 높이로 측정
  const prevWinH = win.style.height;
  const prevContentH = content.style.height;
  const prevOv = content.style.overflow;

  win.style.height = "auto";
  content.style.height = "auto";
  content.style.overflow = "visible";
  void content.offsetHeight;

  const needH = bar.offsetHeight + borderY + content.scrollHeight;

  // 복구
  content.style.overflow = prevOv || "hidden";
  content.style.height = prevContentH || "";
  win.style.height = prevWinH || "";

  return { needH };
}

function fitSmallWindow(win) {
  const { MIN_W, MIN_H } = getProfile();
  const bump = window.innerWidth <= 480 ? 28 : 60;

  if (win.dataset.type !== "joke") return;
  if (win.classList.contains("max")) return;

 pickTextSizes(win);
 setFluidSizes(win);   // <- 매번 랜덤이 아니라 base*scale
 applyTextSizes(win);

  // 시작 폭(랜덤) 유지
  win.style.width = clamp(win.offsetWidth || 320, MIN_W, CAP_W()) + "px";

  // 높이가 cap 넘으면 폭 키워서 줄바꿈 줄이기
  let w = win.offsetWidth;
  let guard = 18;

  while (guard-- > 0) {
    const { needH } = measureNeed(win);

    if (needH <= CAP_H() || w >= CAP_W()) {
      win.style.height = clamp(needH, MIN_H, CAP_H()) + "px";
      break;
    }
    w = Math.min(CAP_W(), w + bump);
    win.style.width = w + "px";
  }

  syncContentBox(win);

  // cap 걸려도 아직 넘치면 -> 폰트 살짝 줄이기(최후)
  const content = win.querySelector(".content");
  const qEl = win.querySelector(".q");
  const aEl = win.querySelector(".answer");
  if (!content || !qEl) return;

  let qSize = parseInt(win.dataset.qSize, 10);
  let aSize = parseInt(win.dataset.aSize, 10);

  guard = 140;
  while (guard-- > 0) {
    const overY = content.scrollHeight > content.clientHeight + 1;
    const overX = content.scrollWidth > content.clientWidth + 1;
    if (!overY && !overX) break;

    qSize -= 1;
    aSize -= 1;
    if (qSize < 14) break;

    win.dataset.qSize = qSize;
    win.dataset.aSize = Math.max(20, aSize);
    applyTextSizes(win);

    const { needH } = measureNeed(win);
    win.style.height = clamp(needH, MIN_H, CAP_H()) + "px";
    syncContentBox(win);
  }
}

// ✅ max 창: 화면에 큰 창 + 폰트만 줄여서 "무조건 들어가게"
function fitTextMax(win) {
  const q = win.querySelector(".q");
  const a = win.querySelector(".answer");
  const content = win.querySelector(".content");
  if (!q || !content) return;

  syncContentBox(win);

  const cw = content.clientWidth;
  const ch = content.clientHeight;

  let qSize = 60;
  let aSize = 110;

  const wantsAnswer = win.classList.contains("revealed") && a;

  function apply() {
  win.style.setProperty("--qSize", qSize + "px");
  win.style.setProperty("--aSize", aSize + "px");

  q.style.setProperty("font-size", qSize + "px", "important");
  q.style.setProperty("line-height", "1.02", "important");
  q.style.setProperty("margin", "0", "important");

  // ✅ 단어/중간 글자에서 break 금지
  q.style.setProperty("white-space", "normal", "important");      // 줄바꿈은 "스페이스"에서만
  q.style.setProperty("word-break", "normal", "important");       // 중간 자르기 금지
  q.style.setProperty("overflow-wrap", "normal", "important");    // anywhere 금지
  q.style.setProperty("hyphens", "none", "important");            // 하이픈 자동 분리 금지

  if (a) {
    a.style.setProperty("font-size", aSize + "px", "important");
    a.style.setProperty("line-height", "0.98", "important");
    a.style.setProperty("margin", "0", "important");

    a.style.setProperty("white-space", "normal", "important");
    a.style.setProperty("word-break", "normal", "important");
    a.style.setProperty("overflow-wrap", "normal", "important");
    a.style.setProperty("hyphens", "none", "important");
  }
}


  apply();

  let guard = 160;
  while (guard-- > 0) {
    const qFits = q.scrollHeight <= ch;
    const xFits = (q.scrollWidth <= cw) && (!wantsAnswer || a.scrollWidth <= cw);

    let aFits = true;
    if (wantsAnswer) aFits = (q.scrollHeight + 12 + a.scrollHeight) <= ch;

    if (qFits && aFits && xFits) break;

    qSize -= 1;
    if (wantsAnswer) aSize -= 1;

    if (qSize < 14) break;
    if (wantsAnswer && aSize < 20) aSize = 20;

    apply();
  }
}

// -------------------- window creation --------------------
function createJokeWindow() {
  const data = pick(JOKES);
  const el = document.createElement("section");
  el.className = "win";
  el.dataset.type = "joke";

  el.innerHTML = `
    <div class="bar">
      <div class="label">${makeGlitchLabel()}</div>
      <div class="controls">
        <button class="btn-max" title="maximize">+</button>
        <button class="btn-close" title="close">×</button>
      </div>
    </div>
    <div class="content">
      <p class="q">${data.q}</p>
      <div class="answer">${data.a}</div>
    </div>
  `;

  // ✅ 원래 라벨 저장
  const labelEl = el.querySelector(".label");
  if (labelEl) labelEl.dataset.original = data.label;

  wireWindow(el);
  updateMaxBtn(el);
  return el;
}

function createImageWindow() {
  const data = pick(IMAGES);
  const el = document.createElement("section");
  el.className = "win";
  el.dataset.type = "img";
  el.style.minWidth = "0px";
  el.style.minHeight = "0px";
  el.style.padding = "0px";
  el.style.overflow = "hidden";
  el.style.boxSizing = "border-box";

  el.innerHTML = `
    <div class="bar">
      <div class="label">${makeGlitchLabel()}</div>
      <div class="controls">
        <button class="btn-max" title="maximize">+</button>
        <button class="btn-close" title="close">×</button>
      </div>
    </div>
    <img alt="${data.label}" src="${data.src}" />
  `;

  // ✅ 원래 라벨 저장
  const labelEl = el.querySelector(".label");
  if (labelEl) labelEl.dataset.original = data.label;

  wireWindow(el);
  updateMaxBtn(el);
  return el;
}

function spawnRandomWindow() {
  const makeImg = Math.random() < 0.25;
  const el = makeImg ? createImageWindow() : createJokeWindow();

  // 먼저 붙이고(실측 가능), invis로 깜빡임 방지
  el.style.visibility = "hidden";
  desktop.appendChild(el);
  startLabelGlitch(el);

  if (el.dataset.type === "img") {
    const img = el.querySelector("img");

    // 이미지 로드된 뒤에 비율대로 탭 크기 세팅
    const doFit = () => {
      fitImageWindow(el);
    };

    if (img.complete) doFit();
    else img.addEventListener("load", doFit, { once: true });

  } else {
    // 텍스트 탭: 폭만 랜덤, 높이는 내용에 맞춤
    el.style.width = (window.innerWidth <= 768 ? randInt(140, 220) : randInt(260, 420)) + "px";
    el.style.height = "auto";
    fitSmallWindow(el);

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => fitSmallWindow(el));
    }
  }


    const { x, y } = randomPos(el.offsetWidth, el.offsetHeight);
  el.style.left = x + "px";
  el.style.top = y + "px";
  el.style.visibility = "visible";

  bringToFront(el);   // ✅ 새로 생성된 탭은 항상 최상단
  updateMaxBtn(el);

  // 리사이즈 관찰
  watchFit(el);

  return el;

}

// -------------------- behavior wiring --------------------
function wireWindow(el) {
  const isPanel = el.dataset.type === "panel";

  el.addEventListener("pointerdown", () => bringToFront(el));

  const maxBtn = el.querySelector(".btn-max");
  if (maxBtn) {
    maxBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (isPanel) return; // panel maximize 차단
      toggleMax(el);
    });
  }

  const closeBtn = el.querySelector(".btn-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      if (el.dataset.countClose !== "0") {
        bumpCloseCount();
      }

      stopLabelGlitch(el);

      const panelKey = el.dataset.panelKey;
      el.remove();

      if (panelKey) {
        panelWindows.delete(panelKey);
        setTaskButtonActive(panelKey, false);
      }

      updateFindPanel();
    });
  }

  const bar = el.querySelector(".bar");
  const labelEl = el.querySelector(".label");

  // 타이틀바 드래그
  if (bar) {
    bar.addEventListener("pointerdown", (e) => {
      e.stopPropagation();

      // 모바일/터치: 탭 바 터치 시 원래 라벨 잠깐 표시
      if (isTouchUI() && !e.target.closest(".controls")) {
        showOriginalLabelBriefly(el, 1200);
      }

      startDrag(e, el);
    });

    bar.addEventListener("mouseenter", () => {
      if (el.dataset.noGlitch === "1") return;
      if (!labelEl) return;
      stopLabelGlitch(el);
      labelEl.textContent = labelEl.dataset.original || labelEl.textContent;
    });

    bar.addEventListener("mouseleave", () => {
      if (el.dataset.noGlitch === "1") return;
      if (el.classList.contains("max")) return;
      startLabelGlitch(el);
    });
  }

  // 모바일: 바 외 영역도 드래그 가능
  if (isTouchUI() && !isPanel) {
    el.addEventListener("pointerdown", (e) => {
      if (el.classList.contains("max")) return;
      if (e.target.closest(".controls")) return; // +/x 버튼 제외
      if (e.target.closest(".bar")) return;      // bar는 위 핸들러 사용
      startDrag(e, el);
    });
  }

  // panel은 dblclick/click maximize 이벤트 제외
  if (!isPanel) {
    el.addEventListener("dblclick", () => toggleMax(el));
    el.addEventListener("click", () => {
      if (!maximizeMode) return;
      toggleMax(el, true);
    });
  }
}


function toggleMax(el, forceOn = false) {
  const isMax = el.classList.contains("max");
  const labelEl = el.querySelector(".label");

  // forceOn 들어오면 기존 max 먼저 정리
  if (forceOn) {
    document.querySelectorAll(".win.max").forEach((w) => {
      w.classList.remove("max", "revealed");
      w.dataset.free = "0";
      restoreBox(w);
      updateMaxBtn(w);

      if (w.dataset.type === "joke") {
  fitSmallWindow(w);
} else if (w.dataset.type === "img") {
  fitImageWindow(w);         // 핵심: 강제 restore된 이미지도 다시 fit
  keepWindowInViewport(w);
}
startLabelGlitch(w);

    });
  }

  if (isMax) {
    // RESTORE
    el.classList.remove("max", "revealed");
    el.dataset.free = "0";
    restoreBox(el);

    requestAnimationFrame(() => {
  if (el.dataset.type === "joke") {
    fitSmallWindow(el);
  } else if (el.dataset.type === "img") {
    fitImageWindow(el);      // 핵심: 이미지도 다시 fit
    keepWindowInViewport(el);
  }
}); 
    // restore 시 glitch 재시작
    startLabelGlitch(el);
  } else {
    // MAXIMIZE
    saveBox(el);
    el.classList.add("max", "revealed");
    el.dataset.free = "0";

    bringToFront(el);

  if (el.dataset.type === "img") {
    fitImageMax(el);
  } else {
    setMaxFrame(el);
    requestAnimationFrame(() => {
      fitTextMax(el);
    });
  }


    // ✅ 큰 화면에서는 glitch 멈추고 원래 라벨 표시
    stopLabelGlitch(el);
    if (labelEl) {
      labelEl.textContent = labelEl.dataset.original || labelEl.textContent;
    }
  }

  // ❌ 의도적으로 겹치게/뒤로 보내는 로직 제거
  // clearOverlaps();
  // if (el.classList.contains("max")) pickOverlaps(el, OVERLAP_COUNT);

  document.querySelectorAll(".win").forEach(applyZRules);
  updateMaxBtn(el);
}

function keepWindowInViewport(el) {
  const taskbarH = getTaskbarHeight();
  const minPad = 6;

  const maxLeft = Math.max(minPad, window.innerWidth - el.offsetWidth - minPad);
  const maxTop  = Math.max(minPad, window.innerHeight - taskbarH - el.offsetHeight - minPad);

  const left = parseFloat(el.style.left || "0");
  const top  = parseFloat(el.style.top || "0");

  el.style.left = clamp(isNaN(left) ? minPad : left, minPad, maxLeft) + "px";
  el.style.top  = clamp(isNaN(top) ? minPad : top, minPad, maxTop) + "px";
}


function centerWindow(el) {
  const w = el.offsetWidth;
  const h = el.offsetHeight;

  const x = Math.round((window.innerWidth - w) / 2);
  const y = Math.round((window.innerHeight - h) / 2);

  el.style.left = clamp(x, 10, window.innerWidth - w - 10) + "px";
  el.style.top  = clamp(y, 10, window.innerHeight - h - 10) + "px";
}

// -------------------- dragging --------------------
let drag = null;

function preventTouchScrollWhileDragging(e) {
  if (!drag) return;
  e.preventDefault();
}

function startDrag(e, el) {
  if (el.classList.contains("max")) return;

  // 타이틀바 안의 +, x 버튼 누를 때는 드래그 시작 금지
  if (e.target.closest(".controls")) return;

  // 마우스는 좌클릭만
  if (e.pointerType === "mouse" && e.button !== 0) return;

  bringToFront(el);

  const rect = el.getBoundingClientRect();
  drag = {
    el,
    pointerId: e.pointerId,
    offsetX: e.clientX - rect.left,
    offsetY: e.clientY - rect.top
  };

  el.dataset.free = "1";

  // 모바일에서 브라우저 제스처/스크롤 방지
  e.preventDefault();

  // 포인터 캡처 (가능한 브라우저에서)
  if (el.setPointerCapture) {
    try { el.setPointerCapture(e.pointerId); } catch (_) {}
  }

  window.addEventListener("pointermove", onDragMove, { passive: false });
  window.addEventListener("touchmove", preventTouchScrollWhileDragging, { passive: false }); // ✅ 추가
  window.addEventListener("pointerup", endDrag);
  window.addEventListener("pointercancel", endDrag);
}


function onDragMove(e) {
  if (!drag) return;
  if (e.pointerId !== drag.pointerId) return;

  const el = drag.el;
  const x = e.clientX - drag.offsetX;
  const y = e.clientY - drag.offsetY;

  const OUT = 300;
  el.style.left = clamp(x, -OUT, window.innerWidth + OUT - el.offsetWidth) + "px";
  el.style.top  = clamp(y, -OUT, window.innerHeight + OUT - el.offsetHeight) + "px";

  e.preventDefault();
}

function endDrag(e) {
  if (!drag) return;
  if (e && e.pointerId != null && e.pointerId !== drag.pointerId) return;

  const el = drag.el;
  if (el && el.releasePointerCapture && drag.pointerId != null) {
    try { el.releasePointerCapture(drag.pointerId); } catch (_) {}
  }

  drag = null;
  window.removeEventListener("pointermove", onDragMove);
  window.removeEventListener("touchmove", preventTouchScrollWhileDragging); // ✅ 추가
  window.removeEventListener("pointerup", endDrag);
  window.removeEventListener("pointercancel", endDrag);
}


// -------------------- resize observe --------------------
function watchFit(win) {
  const ro = new ResizeObserver(() => {
    if (win._fitting) return;
    win._fitting = true;

    if (win.classList.contains("max")) {
  if (win.dataset.type === "img") fitImageMax(win);
  else fitTextMax(win);
} else if (win.dataset.type === "joke") {
  fitSmallWindow(win);
}


    win._fitting = false;
  });

  ro.observe(win);
  const content = win.querySelector(".content");
  if (content) ro.observe(content);
  win._ro = ro;
}

document.getElementById("taskbar")?.addEventListener("click", (e) => {
  const btn = e.target.closest(".taskbar-btn");
  if (!btn) return;
  const key = btn.dataset.panel;
  togglePanel(key);
});


// -------------------- init --------------------
const base = Math.floor((window.innerWidth * window.innerHeight) / 60000);
for (let i = 0; i < base; i++) spawnRandomWindow();

window.addEventListener("resize", () => {
  const nowMobile = isMobileView();
if (window.__lastMobile !== nowMobile) {
  window.__lastMobile = nowMobile;
  restartSpawnTimer();
}
  document.querySelectorAll(".win.max").forEach(w => {
  if (w.dataset.type === "img") {
    fitImageMax(w);
  } else {
    if (w.dataset.free !== "1") centerWindow(w);
    fitTextMax(w);
  }
});


  document.querySelectorAll(".win:not(.max)").forEach(w => {
  if (w.dataset.type === "joke") {
    fitSmallWindow(w);
  } else if (w.dataset.type === "img") {
    fitImageWindow(w);       // 핵심: 화면 작아지면 이미지 창도 다시 fit
    keepWindowInViewport(w);
  }
});

window.__lastMobile = isMobileView();

panelWindows.forEach((w) => {
  if (!w.isConnected) return;
  fitPanelWindow(w);
});

});

// auto spawn settings
const MOBILE_BP = 768;
const SPAWN_MIN = 1;
const SPAWN_MAX = 1;
const MAX_WINDOWS = 120;

function isMobileView() {
  return window.matchMedia(`(max-width: ${MOBILE_BP}px)`).matches;
}

function getSpawnEveryMs() {
  return isMobileView() ? 1500 : 1000; // 모바일 2초, 데스크탑 1초
}

function spawnBurst() {
  if (isPanelReadLockActive()) return; // <- 추가

  const current = document.querySelectorAll(".win").length;
  if (current >= MAX_WINDOWS) return;

  let count = randInt(SPAWN_MIN, SPAWN_MAX);
  count = Math.min(count, MAX_WINDOWS - current);

  for (let i = 0; i < count; i++) {
    spawnRandomWindow();
  }
}


function restartSpawnTimer() {
  if (spawnTimer) clearInterval(spawnTimer);
  spawnTimer = setInterval(spawnBurst, getSpawnEveryMs());
}

restartSpawnTimer();
startScoreIdleTimer();
updateFindPanel();