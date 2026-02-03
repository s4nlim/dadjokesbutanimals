const desktop = document.getElementById("desktop");
const maxModeBtn = document.getElementById("maxModeBtn");

let topZ = 10;
let maximizeMode = false; // optional: click a window to force-max when ON

// how "high" a maximized window should be (NOT the top)
const MAX_Z = 50;

// ---- data ----
const JOKES = [
  { label: "DINOSAUR", q: "What were prehistoric sleepovers called?", a: "Dino-SNORES." },
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
  { label: "CRAB", q: "How do ocean creatures cross the ocean?", a: "By taxi crab." },
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
  { label: "TYRANNOSAUR", q: "How do tyrannosaurs like their eggs?", a: "Terri-fried!" },
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
  { label: "PLANTS", q: "How do you read a book about plants?", a: "You leaf through it." },
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
  { label: "TREE", q: "How does a <em>tree</em> get into the Internet?", a: "It logs on." },
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
  { label: "CHICKEN", q: "Is chicken soup good for you?", a: "Not if you’re the chicken!" },
  { label: "TURKEY", q: "Is turkey soup good for you?", a: "Not if you’re the turkey!" },

  { label: "SALMON", q: "What part of a <em>salmon</em> weighs the most?", a: "Its scales." },
  { label: "COW", q: "What’s brown and white and dangerous?", a: "A cow on a skateboard." },
  { label: "COW", q: "What do you call a sleeping male cow?", a: "A Bulldozer." },
  { label: "CAT", q: "What ancient cat solved mysteries?", a: "The saber SLEUTH tiger." },
  { label: "ARMADILLO", q: "What animal can you find in the military?", a: "An army-dillo." },
  { label: "BEAR", q: "What animal hibernates while standing on its head?", a: "Yoga bear." },
  { label: "BAT", q: "What animal sewed the first American flag?", a: "Bat-sy Ross." },
  { label: "AARDVARK", q: "What’s an <em>aardvark</em>’s favorite pizza topping?", a: "Ant-chovies." },
  { label: "BEE", q: "What’s smarter than a talking parrot?", a: "A spelling bee." },
  { label: "LEMUR", q: "What does a <em>lemur</em> pirate say?", a: "“Aye-aye, matey!”" },
  { label: "JELLYFISH", q: "What makes a <em>jellyfish</em> laugh?", a: "Ten tickles." },

  { label: "CHICKEN", q: "What do you get when you cross a chicken with a skunk?", a: "A fowl smell." },
  { label: "FLY", q: "What are flies most afraid of?", a: "The SWAT team." },
  { label: "SKUNK", q: "What are skunks so smart?", a: "They make a lot of scents." },
  { label: "SPIDER", q: "What are spiders called after their wedding?", a: "Newly webs." },
  { label: "DALMATIAN", q: "What barks, chases cats, and has black and red spots?", a: "A Dalmatian with measles." },
  { label: "BEAR", q: "What bear likes to go out in the rain?", a: "Drizzly bears." },
  { label: "BIRD", q: "What bird is the greatest artist?", a: "Leonardo da Finchy." },
  { label: "BIRD", q: "What bird shows up at every meal?", a: "A swallow." },
  { label: "PUFFIN", q: "What birds always get out of breath when migrating?", a: "Puffins." },
  { label: "GNAT", q: "What bug caused the computer to crash?", a: "The Inter-gnat." },
  { label: "BEE", q: "What buzzes, is black and yellow, and goes along the sides of flowers?", a: "Bee-line." },
];


const IMAGES = [
  { label: "PENGUIN", src: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?auto=format&fit=crop&w=900&q=60" },
  { label: "SNAIL", src: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?auto=format&fit=crop&w=900&q=60" },
  { label: "DESKTOP", src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=60" },
];

// ---- helpers ----
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
  const pad = 20;
  const x = randInt(pad, Math.max(pad, window.innerWidth - w - pad));
  const y = randInt(pad, Math.max(pad, window.innerHeight - h - pad));
  return { x, y };
}

// ---- window creation ----
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
  return el;
}

function spawnRandomWindow() {
  const makeImg = Math.random() < 0.25;
  const el = makeImg ? createImageWindow() : createJokeWindow();

  const { x, y } = randomPos(360, 220);
  el.style.left = x + "px";
  el.style.top = y + "px";

  // normal windows: keep growing, always above MAX_Z
  el.style.zIndex = ++topZ;

  desktop.appendChild(el);
}

// ---- behavior wiring ----
function wireWindow(el) {
  // bring normal windows to top when interacting
  el.addEventListener("mousedown", () => {
    // if this is maximized, keep it under the top layer
    if (el.classList.contains("max")) {
      el.style.zIndex = MAX_Z;
      return;
    }
    el.style.zIndex = ++topZ;
  });

  // maximize button
  el.querySelector(".btn-max").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMax(el);
  });

  // close button: remove + spawn 1-2 new
  el.querySelector(".btn-close").addEventListener("click", (e) => {
    e.stopPropagation();
    el.remove();
    const count = randInt(1, 2);
    for (let i = 0; i < count; i++) spawnRandomWindow();
  });

  // drag by title bar (only when NOT maximized)
  const bar = el.querySelector(".bar");
  bar.addEventListener("mousedown", (e) => startDrag(e, el));

  // double click anywhere on window to toggle max
  el.addEventListener("dblclick", () => toggleMax(el));

  // optional maximize-mode: single click forces one max at a time
  el.addEventListener("click", () => {
    if (!maximizeMode) return;
    toggleMax(el, true);
  });
}

function toggleMax(el, forceOn = false) {
  const isMax = el.classList.contains("max");

  // forceOn means: make this the only maximized window
  if (forceOn) {
    document.querySelectorAll(".win.max").forEach(w => {
      w.classList.remove("max");
      w.classList.remove("revealed"); // hide answer when not max
    });
    el.classList.add("max");
    el.classList.add("revealed"); // show answer when max
    centerWindow(el);
    el.style.zIndex = MAX_Z; // keep under some tabs
    return;
  }

  // normal toggle
  if (isMax) {
    el.classList.remove("max");
    el.classList.remove("revealed"); // hide answer when leaving max
    el.style.zIndex = ++topZ;
  } else {
    el.classList.add("max");
    el.classList.add("revealed"); // show answer when entering max
    centerWindow(el);
    el.style.zIndex = MAX_Z; // keep under some tabs
  }
}

function centerWindow(el) {
  const w = el.offsetWidth;
  const h = el.offsetHeight;

  const x = Math.round((window.innerWidth - w) / 2);
  const y = Math.round((window.innerHeight - h) / 2);

  el.style.left = clamp(x, 10, window.innerWidth - w - 10) + "px";
  el.style.top  = clamp(y, 10, window.innerHeight - h - 10) + "px";
}

// ---- dragging ----
let drag = null;

function startDrag(e, el) {
  if (e.button !== 0) return; // left click only
  if (el.classList.contains("max")) return; // don't drag when maximized

  el.style.zIndex = ++topZ;

  const rect = el.getBoundingClientRect();
  drag = {
    el,
    offsetX: e.clientX - rect.left,
    offsetY: e.clientY - rect.top
  };

  window.addEventListener("mousemove", onDragMove);
  window.addEventListener("mouseup", endDrag);
}

function onDragMove(e) {
  if (!drag) return;

  const el = drag.el;
  const x = e.clientX - drag.offsetX;
  const y = e.clientY - drag.offsetY;

  el.style.left = clamp(x, 0, window.innerWidth - el.offsetWidth) + "px";
  el.style.top  = clamp(y, 0, window.innerHeight - el.offsetHeight) + "px";
}

function endDrag() {
  drag = null;
  window.removeEventListener("mousemove", onDragMove);
  window.removeEventListener("mouseup", endDrag);
}


// ---- init ----
const base = Math.floor((window.innerWidth * window.innerHeight) / 60000);
for (let i = 0; i < base; i++) spawnRandomWindow();

// keep maximized windows centered on resize
window.addEventListener("resize", () => {
  document.querySelectorAll(".win.max").forEach(centerWindow);
});
