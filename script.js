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
  { label: "COW", q: "What’s brown and white and dangerous?", a: "A cow on a skateboard." },
  { label: "COW", q: "What do you call a sleeping male <em>cow?</em>", a: "A Bulldozer." },
  { label: "CAT", q: "What ancient <em>cat</em> solved mysteries?", a: "The saber SLEUTH tiger." },
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

// -------------------- helpers --------------------
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
  const OUT = 50; // ✅ 화면 밖으로 튀어나가도 되는 범위(픽셀)
  const x = randInt(-OUT, window.innerWidth - w + OUT);
  const y = randInt(-OUT, window.innerHeight - h + OUT);
  return { x, y };
}

function fitImageWindow(win) {
  const img = win.querySelector("img");
  if (!img || !img.naturalWidth || !img.naturalHeight) return;

  const { MIN_W, MIN_H } = getProfile();

  // 모바일/데스크탑 폭 범위(원하는 대로 조절 가능)
  const maxW = window.innerWidth <= 480 ? 260 : 420;
  const minW = window.innerWidth <= 480 ? 170 : 260;

  // 이미지 비율
  const ratio = img.naturalWidth / img.naturalHeight;

  // 폭 랜덤으로 뽑고, 높이는 비율로 계산
  let w = randInt(minW, maxW);
  let h = Math.round(w / ratio);

  // 화면 cap 적용
  w = clamp(w, MIN_W, CAP_W());
  h = clamp(h, MIN_H, CAP_H());

  // 혹시 세로로 너무 길면 높이를 먼저 제한하고 폭을 다시 계산
  if (h >= CAP_H()) {
    h = CAP_H();
    w = Math.round(h * ratio);
    w = clamp(w, MIN_W, CAP_W());
  }

  win.style.width = w + "px";
  win.style.height = h + "px";
}

// ✅ maximize 전에 원래 크기/위치 저장
function saveBox(el) {
  el.dataset.prevW = el.style.width || "";
  el.dataset.prevH = el.style.height || "";
  el.dataset.prevL = el.style.left || "";
  el.dataset.prevT = el.style.top || "";
}

// ✅ restore 때 원래 크기/위치 복구
function restoreBox(el) {
  el.style.width  = el.dataset.prevW || "";
  el.style.height = el.dataset.prevH || "";
  if (el.dataset.prevL !== "") el.style.left = el.dataset.prevL;
  if (el.dataset.prevT !== "") el.style.top  = el.dataset.prevT;
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

function applyZRules(el) {
  if (el.classList.contains("over")) {
    el.style.zIndex = Z_OVER;
    return;
  }
  if (el.classList.contains("max")) {
    el.style.zIndex = Z_MAXIMIZED;
    return;
  }
  el.style.zIndex = Z_NORMAL;
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

// ✅ 작은 창: 랜덤 폰트 먼저 → 창이 텍스트에 딱 맞게
function getProfile() {
  const w = window.innerWidth;

  // 모바일
  if (w <= 480) return { Q_RANGE: [10, 20], A_MULT: 1.05, MIN_W: 150, MIN_H: 105 };

  // 데스크탑
  return { Q_RANGE: [25, 55], A_MULT: 1.25, MIN_W: 240, MIN_H: 160 };
}

const CAP_W = () => Math.min(720, Math.floor(window.innerWidth * 0.92));
const CAP_H = () => Math.min(820, Math.floor(window.innerHeight * 0.92));



function pickTextSizes(win) {
  if (win.dataset.qSize) return;

  const { Q_RANGE, A_MULT } = getProfile();   // ✅ 추가
  const q = randInt(Q_RANGE[0], Q_RANGE[1]);  // ✅ 수정
  const a = Math.round(q * A_MULT);           // ✅ 수정

  win.dataset.qSize = q;
  win.dataset.aSize = a;
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
      <div class="label">${data.label}</div>
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

  wireWindow(el);
  updateMaxBtn(el);
  return el;
}

function createImageWindow() {
  const data = pick(IMAGES);
  const el = document.createElement("section");
  el.className = "win";
  el.dataset.type = "img";

  el.innerHTML = `
    <div class="bar">
      <div class="label">${data.label}</div>
      <div class="controls">
        <button class="btn-max" title="maximize">+</button>
        <button class="btn-close" title="close">×</button>
      </div>
    </div>
    <img alt="${data.label}" src="${data.src}" />
  `;

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
    el.style.width = (window.innerWidth <= 480 ? randInt(170, 260) : randInt(260, 420)) + "px";
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

  applyZRules(el);
  updateMaxBtn(el);

  // 리사이즈 관찰: 작은 창은 fitSmallWindow로만
  watchFit(el);

  return el;
}

// -------------------- behavior wiring --------------------
function wireWindow(el) {
  el.addEventListener("mousedown", () => applyZRules(el));

  const maxBtn = el.querySelector(".btn-max");
  if (maxBtn) {
    maxBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMax(el);
    });
  }

  const closeBtn = el.querySelector(".btn-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      el.remove();
      const count = randInt(1, 3);
      for (let i = 0; i < count; i++) spawnRandomWindow();
    });
  }

  const bar = el.querySelector(".bar");
  if (bar) bar.addEventListener("mousedown", (e) => startDrag(e, el));

  el.addEventListener("dblclick", () => toggleMax(el));
  el.addEventListener("click", () => {
    if (!maximizeMode) return;
    toggleMax(el, true);
  });
}

function toggleMax(el, forceOn = false) {
  const isMax = el.classList.contains("max");

  if (forceOn) {
    document.querySelectorAll(".win.max").forEach(w => {
      w.classList.remove("max", "revealed");
      w.dataset.free = "0";
      restoreBox(w);
      updateMaxBtn(w);
      if (w.dataset.type === "joke") fitSmallWindow(w);
    });
  }

  if (isMax) {
    // RESTORE
    el.classList.remove("max", "revealed");
    restoreBox(el);
    el.dataset.free = "0";

    requestAnimationFrame(() => {
      if (el.dataset.type === "joke") fitSmallWindow(el);
    });
  } else {
    // MAXIMIZE
    saveBox(el);
    el.classList.add("max", "revealed");
    el.dataset.free = "0";

    // inline width/height 제거해서 CSS .win.max가 먹게
    el.style.width = "";
    el.style.height = "";

    requestAnimationFrame(() => {
      if (el.dataset.free !== "1") centerWindow(el);
      fitTextMax(el);
    });
  }

  clearOverlaps();
  if (el.classList.contains("max")) pickOverlaps(el, OVERLAP_COUNT);

  document.querySelectorAll(".win").forEach(applyZRules);
  updateMaxBtn(el);
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

function startDrag(e, el) {
  if (e.button !== 0) return;

  const rect = el.getBoundingClientRect();
  drag = { el, offsetX: e.clientX - rect.left, offsetY: e.clientY - rect.top };

  el.dataset.free = "1";

  window.addEventListener("mousemove", onDragMove);
  window.addEventListener("mouseup", endDrag);
}

function onDragMove(e) {
  if (!drag) return;

  const el = drag.el;
  const x = e.clientX - drag.offsetX;
  const y = e.clientY - drag.offsetY;

  const OUT = 300;
  el.style.left = clamp(x, -OUT, window.innerWidth + OUT - el.offsetWidth) + "px";
  el.style.top  = clamp(y, -OUT, window.innerHeight + OUT - el.offsetHeight) + "px";
}

function endDrag() {
  drag = null;
  window.removeEventListener("mousemove", onDragMove);
  window.removeEventListener("mouseup", endDrag);
}

// -------------------- resize observe --------------------
function watchFit(win) {
  const ro = new ResizeObserver(() => {
    if (win._fitting) return;
    win._fitting = true;

    if (win.classList.contains("max")) {
      fitTextMax(win);
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

// -------------------- init --------------------
const base = Math.floor((window.innerWidth * window.innerHeight) / 60000);
for (let i = 0; i < base; i++) spawnRandomWindow();

window.addEventListener("resize", () => {
  document.querySelectorAll(".win.max").forEach(w => {
    if (w.dataset.free !== "1") centerWindow(w);
    fitTextMax(w);
  });

  document.querySelectorAll(".win:not(.max)").forEach(w => {
  if (w.dataset.type !== "joke") return;

  // ✅ 화면 크기 바뀌면(특히 모바일) 폰트 사이즈 다시 뽑기
  delete w.dataset.qSize;
  delete w.dataset.aSize;

  fitSmallWindow(w);
});
});