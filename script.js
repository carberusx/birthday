/* =========================================================
   ✏️  EDIT BAGIAN INI UNTUK MENGUBAH ISI WEBSITE
   ========================================================= */
const CONFIG = {
  name: "Ami",
  footerRecipient: "my baby sayangkuu",      // Panggilan di bagian footer
  from: "Pacarmu",                           // Nama kamu / panggilan kamu
  initial: "A",                              // Huruf inisial di segel lilin amplop
  birthdayDate: "Hari Bahagia",               // Teks tanggal di pojok surat
  heroPhoto: "photos/ami-1.jpg",             // Foto utama (di lingkaran atas)
  music: "music.mp3",                        // File lagu (opsional). Kosongkan "" jika tidak ada
  musicTitle: "Melody for Ami",              // Judul lagu di player

  typedLines: [
    "Hari ini adalah harinya orang paling spesial,",
    "terima kasih sudah hadir dan selalu bikin hari-hariku indah. 💕",
    "Semoga hari ini dan seterusnya kamu selalu bahagia."
  ],

  letter: [
    "Hai sayangku yang paling manis,",
    "Selamat ulang tahun ya! Terima kasih banyak sudah hadir di hidupku dan mewarnai hari-hariku. Senyum dan tawamu selalu jadi hal favorit yang nggak pernah gagal bikin hariku jadi lebih baik.",
    "Di usiamu yang baru ini, aku mendoakan yang terbaik untukmu semoga kamu selalu sehat, dilindungi di setiap langkah, dan semua impian yang kamu semogakan satu per satu terwujud. Apapun yang terjadi, aku akan selalu ada di sampingmu.",
    "Aku sayang kamu, hari ini dan seterusnya."
  ],

  gallery: [
    { src: "photos/ami-2.jpeg", caption: "Senyum favoritku" },
    { src: "photos/ami-3.jpeg", caption: "Hari pertemuan pertama kita" },
    { src: "photos/ami-4.jpeg", caption: "Kita berdua" },
    { src: "photos/ami-5.jpeg", caption: "Lucukkkk" }
  ],

  wish: "Semoga semua doa dan harapan terbaikmu tahun ini dikabulkan ya sayang. I Love you sayangg cantikku cintakuu 💖",
  footer: "Happy Birthday, my love"
};
/* ========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* ---------- ARTISTIC MINIMAL FALLBACK PLACEHOLDERS ---------- */
const createPlaceholderSVG = (title, subtitle, grad1, grad2) => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 450 560' width='100%' height='100%'>
    <defs>
      <linearGradient id='bg' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stop-color='${grad1}' />
        <stop offset='100%' stop-color='${grad2}' />
      </linearGradient>
    </defs>
    <rect width='450' height='560' fill='url(#bg)' />
    <circle cx='225' cy='240' r='60' fill='rgba(255,255,255,0.18)' />
    <text x='225' y='255' font-size='48' text-anchor='middle' fill='#ffffff'>♥</text>
    <text x='225' y='350' font-family='Georgia, serif' font-size='22' font-weight='bold' text-anchor='middle' fill='#ffffff'>${title}</text>
    <text x='225' y='380' font-family='sans-serif' font-size='13' text-anchor='middle' fill='rgba(255,255,255,0.85)'>${subtitle}</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
};

const PLACEHOLDERS = [
  createPlaceholderSVG("Ami Tersayang", "Bidadari Cantik", "#ff5478", "#941944"),
  createPlaceholderSVG("Senyum Indah", "Momen Manis", "#ff6b8b", "#771d43"),
  createPlaceholderSVG("Hari Bahagia", "Memori Kita", "#e25576", "#691738"),
  createPlaceholderSVG("Kita Berdua", "Penuh Cinta", "#f26488", "#591030"),
  createPlaceholderSVG("Selalu Cantik", "I Love You", "#c72c54", "#3d081e")
];

const withFallback = (img, index = 0) => {
  const fallbackSrc = PLACEHOLDERS[index % PLACEHOLDERS.length];
  img.onerror = () => {
    img.onerror = null;
    img.src = fallbackSrc;
  };
};

/* ---------- SOUND SYNTHESIZER (WEB AUDIO API) ---------- */
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) audioCtx = new AudioContextClass();
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => { });
  }
  return audioCtx;
}

const SoundFX = {
  playPop() {
    try {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (_) { }
  },

  playChime() {
    try {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.14, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.45);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.45);
      });
    } catch (_) { }
  },

  playCelebration() {
    try {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.07);
        gain.gain.setValueAtTime(0.16, ctx.currentTime + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.07 + 0.7);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.07);
        osc.stop(ctx.currentTime + i * 0.07 + 0.7);
      });
    } catch (_) { }
  }
};

/* ---------- ROMANTIC MUSIC BOX FALLBACK ---------- */
class MusicBox {
  constructor() {
    this.isPlaying = false;
    this.timer = null;
    this.noteIdx = 0;
    this.melody = [
      523.25, 659.25, 783.99, 1046.5, 783.99, 659.25,
      440.00, 523.25, 659.25, 880.00, 659.25, 523.25,
      349.23, 440.00, 523.25, 698.46, 523.25, 440.00,
      392.00, 493.88, 587.33, 783.99, 587.33, 493.88
    ];
  }

  playNote(freq) {
    try {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.1);
    } catch (_) { }
  }

  start() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.step();
  }

  step() {
    if (!this.isPlaying) return;
    const freq = this.melody[this.noteIdx % this.melody.length];
    this.playNote(freq);
    this.noteIdx++;
    this.timer = setTimeout(() => this.step(), 420);
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) clearTimeout(this.timer);
  }
}
const musicBox = new MusicBox();

/* ---------- POPULATE DYNAMIC CONTENT ---------- */
document.title = `Happy Birthday, ${CONFIG.name} 💖`;
$("#waxInitial").textContent = CONFIG.initial || CONFIG.name.charAt(0) || "A";
if ($("#nameTitle")) $("#nameTitle").textContent = CONFIG.name;
$("#playerTrack").textContent = CONFIG.musicTitle || `Melody for ${CONFIG.name}`;
$("#letterDate").textContent = CONFIG.birthdayDate || "Hari Bahagia";
$("#letterSign").textContent = `— Dengan cinta, ${CONFIG.from}`;
$("#footerRecipient").textContent = CONFIG.footerRecipient || "my baby sayangkuu";
$("#footerText").textContent = CONFIG.footer;

const heroImg = $("#heroPhoto");
if (heroImg) {
  withFallback(heroImg, 0);
  heroImg.src = CONFIG.heroPhoto;
}

// Letter paragraphs
$("#letterBox").innerHTML = CONFIG.letter
  .map((p) => `<p>${p}</p>`)
  .join("");

// Gallery polaroids
$("#gallery").innerHTML = CONFIG.gallery
  .map((item, idx) => `
    <figure class="polaroid-card" data-index="${idx}" tabindex="0" role="button" aria-label="Lihat foto ${item.caption}">
      <div class="polaroid-img-box">
        <img src="${item.src}" alt="${item.caption}" loading="lazy" />
      </div>
      <figcaption class="polaroid-meta">
        <span class="polaroid-caption">${item.caption}</span>
        <span class="polaroid-heart">♥</span>
      </figcaption>
    </figure>
  `)
  .join("");
$$(".polaroid-card img").forEach((img, idx) => withFallback(img, idx + 1));

/* ---------- BACKGROUND: FLOATING HEARTS & FLOWERS ---------- */
const bgCanvas = $("#bg");
const bctx = bgCanvas.getContext("2d");
let particles = [];

function resizeBg() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  bgCanvas.width = window.innerWidth * dpr;
  bgCanvas.height = window.innerHeight * dpr;
  bctx.scale(dpr, dpr);
}
window.addEventListener("resize", resizeBg);
resizeBg();

function drawHeartShape(ctx, s, color, alpha) {
  ctx.fillStyle = `rgba(${color}, ${alpha})`;
  ctx.beginPath();
  ctx.moveTo(0, s / 4);
  ctx.bezierCurveTo(0, 0, -s / 2, 0, -s / 2, s / 4);
  ctx.bezierCurveTo(-s / 2, s / 2, 0, s * 0.75, 0, s);
  ctx.bezierCurveTo(0, s * 0.75, s / 2, s / 2, s / 2, s / 4);
  ctx.bezierCurveTo(s / 2, 0, 0, 0, 0, s / 4);
  ctx.fill();
}

function drawFlowerShape(ctx, s, color, alpha) {
  const r = s * 0.45;
  ctx.fillStyle = `rgba(${color}, ${alpha})`;
  for (let p = 0; p < 5; p++) {
    const angle = (p * Math.PI * 2) / 5;
    const px = Math.cos(angle) * (r * 0.75);
    const py = Math.sin(angle) * (r * 0.75);
    ctx.beginPath();
    ctx.arc(px, py, r * 0.65, 0, Math.PI * 2);
    ctx.fill();
  }
  // Center pistil (warm gold)
  ctx.fillStyle = `rgba(252, 217, 165, ${alpha * 1.4})`;
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.45, 0, Math.PI * 2);
  ctx.fill();
}

class RomanticParticle {
  constructor(initial = false) {
    this.reset(initial);
  }

  reset(initial = false) {
    this.x = Math.random() * window.innerWidth;
    this.y = initial ? Math.random() * window.innerHeight : window.innerHeight + 30;

    // 55% Heart, 45% Flower
    const rand = Math.random();
    if (rand < 0.55) {
      this.type = "heart";
      this.size = 11 + Math.random() * 15;
      this.color = Math.random() > 0.4 ? "255, 77, 121" : "255, 145, 180";
    } else {
      this.type = "flower";
      this.size = 13 + Math.random() * 15;
      this.color = Math.random() > 0.5 ? "255, 120, 165" : "255, 185, 210";
    }

    this.speedY = 0.35 + Math.random() * 0.65;
    this.speedX = (Math.random() - 0.5) * 0.45;
    this.angle = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.025;
    this.sway = 0.8 + Math.random() * 1.5;
    this.swaySpeed = 0.012 + Math.random() * 0.018;
    this.alpha = 0.16 + Math.random() * 0.35;
  }

  update() {
    this.y -= this.speedY;
    this.angle += this.swaySpeed;
    this.x += Math.sin(this.angle) * this.sway + this.speedX;

    if (this.y < -40 || this.x < -40 || this.x > window.innerWidth + 40) {
      this.reset(false);
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle * 0.5);

    if (this.type === "heart") {
      drawHeartShape(ctx, this.size, this.color, this.alpha);
    } else {
      drawFlowerShape(ctx, this.size, this.color, this.alpha);
    }

    ctx.restore();
  }
}

const particleCount = window.innerWidth < 600 ? 20 : 34;
for (let i = 0; i < particleCount; i++) {
  particles.push(new RomanticParticle(true));
}

function animateBg() {
  bctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw(bctx);
  }
  requestAnimationFrame(animateBg);
}
requestAnimationFrame(animateBg);

/* ---------- CONFETTI BURST ---------- */
const cfCanvas = $("#confetti");
const cctx = cfCanvas.getContext("2d");
let confettiPieces = [];
let cfActive = false;

function resizeCf() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  cfCanvas.width = window.innerWidth * dpr;
  cfCanvas.height = window.innerHeight * dpr;
  cctx.scale(dpr, dpr);
}
window.addEventListener("resize", resizeCf);
resizeCf();

function burstConfetti(originX, originY, count = 100) {
  const colors = ["#ff4d79", "#ff85a2", "#fcd9a5", "#ffffff", "#ffb3c7"];
  const x = originX ?? window.innerWidth / 2;
  const y = originY ?? window.innerHeight / 2;

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const velocity = 4 + Math.random() * 10;
    confettiPieces.push({
      x,
      y,
      vx: Math.cos(angle) * velocity,
      vy: Math.sin(angle) * velocity - 3,
      size: 4 + Math.random() * 5,
      color: colors[(Math.random() * colors.length) | 0],
      rotation: Math.random() * 6,
      rotSpeed: (Math.random() - 0.5) * 0.25,
      life: 0,
      maxLife: 120 + Math.random() * 70
    });
  }

  if (!cfActive) {
    cfActive = true;
    requestAnimationFrame(confettiLoop);
  }
}

function confettiLoop() {
  cctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let i = 0; i < confettiPieces.length; i++) {
    const p = confettiPieces[i];
    p.vy += 0.2;
    p.vx *= 0.985;
    p.x += p.vx;
    p.y += p.vy;
    p.rotation += p.rotSpeed;
    p.life++;

    cctx.save();
    cctx.translate(p.x, p.y);
    cctx.rotate(p.rotation);
    cctx.fillStyle = p.color;
    cctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
    cctx.restore();
  }

  confettiPieces = confettiPieces.filter((p) => p.y < window.innerHeight + 25 && p.life < p.maxLife);

  if (confettiPieces.length > 0) {
    requestAnimationFrame(confettiLoop);
  } else {
    cfActive = false;
    cctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}

/* ---------- SCREEN TAP HEART (CLEAN & SUBTLE) ---------- */
document.addEventListener("click", (e) => {
  if (e.target.closest("button, a, input")) return;
  spawnTapHeart(e.clientX, e.clientY);
});

function spawnTapHeart(x, y) {
  const el = document.createElement("span");
  el.className = "tap-heart";
  el.textContent = "♥";
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  el.style.setProperty("--dx", `${(Math.random() - 0.5) * 40}px`);
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 850);
}

/* ---------- TYPEWRITER ANIMATION ---------- */
function typeWriter(el, text, speed = 40) {
  return new Promise((resolve) => {
    let i = 0;
    const timer = setInterval(() => {
      el.textContent += text[i++];
      if (i >= text.length) {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

async function runTypedSequence() {
  const el = $("#typed");
  el.textContent = "";
  for (const line of CONFIG.typedLines) {
    await typeWriter(el, line + " ");
    await new Promise((r) => setTimeout(r, 400));
  }
}

/* ---------- REVEAL ON SCROLL ---------- */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

/* ---------- MUSIC PLAYER ENGINE ---------- */
const audioEl = $("#audio");
const musicPlayer = $("#musicPlayer");
const musicToggleBtn = $("#musicToggleBtn");
const musicIcon = $("#musicIcon");
let isAudioActive = false;
let usesAudioElement = false;

if (CONFIG.music && CONFIG.music.trim() !== "") {
  audioEl.src = CONFIG.music;
  audioEl.addEventListener("canplaythrough", () => {
    usesAudioElement = true;
  });
  audioEl.addEventListener("error", () => {
    usesAudioElement = false;
  });
}

function startMusic() {
  isAudioActive = true;
  musicPlayer.classList.add("playing");
  musicIcon.textContent = "⏸";

  if (usesAudioElement && audioEl.src) {
    audioEl.play().catch(() => {
      usesAudioElement = false;
      musicBox.start();
    });
  } else {
    musicBox.start();
  }
}

function pauseMusic() {
  isAudioActive = false;
  musicPlayer.classList.remove("playing");
  musicIcon.textContent = "▶";

  if (usesAudioElement) {
    audioEl.pause();
  } else {
    musicBox.stop();
  }
}

function toggleMusic() {
  SoundFX.playPop();
  if (isAudioActive) {
    pauseMusic();
  } else {
    startMusic();
  }
}

if (musicToggleBtn) musicToggleBtn.addEventListener("click", toggleMusic);
if (musicPlayer) musicPlayer.addEventListener("click", toggleMusic);

/* ---------- INTRO: UNLOCK ENVELOPE ---------- */
let isUnlocked = false;
$("#openBtn").addEventListener("click", function () {
  if (isUnlocked) return;
  isUnlocked = true;

  SoundFX.playChime();
  this.classList.add("open");

  const rect = this.getBoundingClientRect();
  burstConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 50);

  setTimeout(() => {
    $("#intro").classList.add("out");
    $("#content").classList.remove("hidden");
    musicPlayer.classList.remove("hidden");
    document.body.classList.remove("locked");

    // Observe reveal elements
    $$(".reveal").forEach((el) => observer.observe(el));

    // Start music & celebration
    startMusic();
    burstConfetti(window.innerWidth / 2, window.innerHeight * 0.35, 120);

    setTimeout(runTypedSequence, 650);
  }, 700);
});

$("#openBtn").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    $("#openBtn").click();
  }
});

/* ---------- FLOWER BOUQUET INTERACTION ---------- */
const bouquetBox = $("#bouquetBox");
if (bouquetBox) {
  bouquetBox.addEventListener("click", () => {
    SoundFX.playPop();
    bouquetBox.classList.add("bounce");
    setTimeout(() => bouquetBox.classList.remove("bounce"), 500);

    const rect = bouquetBox.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height * 0.45;

    for (let i = 0; i < 6; i++) {
      spawnTapHeart(
        centerX + (Math.random() - 0.5) * 90,
        centerY + (Math.random() - 0.5) * 60
      );
    }
  });
}

/* ---------- SCROLL LETTER TOGGLE (GULUNGAN SURAT) ---------- */
const scrollContainer = $("#scrollContainer");
const scrollBody = $("#scrollBody");
const scrollToggleBtn = $("#scrollToggleBtn");
const scrollToggleText = $("#scrollToggleText");
let isScrollOpen = false;

function toggleScrollLetter() {
  if (!scrollContainer) return;
  isScrollOpen = !isScrollOpen;

  if (isScrollOpen) {
    SoundFX.playChime();
    scrollContainer.classList.add("is-open");
    if (scrollBody) scrollBody.setAttribute("aria-expanded", "true");
    if (scrollToggleText) scrollToggleText.textContent = "Gulung Kembali";

    const rect = scrollContainer.getBoundingClientRect();
    for (let i = 0; i < 5; i++) {
      spawnTapHeart(
        rect.left + rect.width / 2 + (Math.random() - 0.5) * 90,
        rect.top + 40 + Math.random() * 30
      );
    }
  } else {
    SoundFX.playPop();
    scrollContainer.classList.remove("is-open");
    if (scrollBody) scrollBody.setAttribute("aria-expanded", "false");
    if (scrollToggleText) scrollToggleText.textContent = "Buka Gulungan Surat";
  }
}

if (scrollBody) {
  scrollBody.addEventListener("click", () => {
    toggleScrollLetter();
  });
}

if (scrollToggleBtn) {
  scrollToggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleScrollLetter();
  });
}

/* ---------- HERO INTERACTIONS (CUTE HUG COUNTER) ---------- */
let hugsCount = 128;
const hugBtn = $("#hugBtn");
const hugCountEl = $("#hugCount");
const hugFeedback = $("#hugFeedback");

if (hugBtn && hugCountEl) {
  hugBtn.addEventListener("click", () => {
    SoundFX.playPop();
    hugsCount++;
    hugCountEl.textContent = hugsCount;

    if (hugFeedback) {
      hugFeedback.classList.add("show");
      clearTimeout(hugFeedback._timer);
      hugFeedback._timer = setTimeout(() => hugFeedback.classList.remove("show"), 1000);
    }

    const rect = hugBtn.getBoundingClientRect();
    spawnTapHeart(rect.left + rect.width / 2, rect.top + 10);
  });
}

/* ---------- PHOTO GALLERY LIGHTBOX ---------- */
const lightbox = $("#lightbox");
const lightboxImg = $("#lightboxImg");
const lightboxCaption = $("#lightboxCaption");
const lightboxClose = $("#lightboxClose");
const lightboxOverlay = $("#lightboxOverlay");
const lightboxLikeBtn = $("#lightboxLikeBtn");
const lightboxLikeCount = $("#lightboxLikeCount");
let currentLikes = 1;

$$(".polaroid-card").forEach((card) => {
  card.addEventListener("click", () => {
    const idx = parseInt(card.getAttribute("data-index"), 10) || 0;
    openLightbox(idx);
  });
});

function openLightbox(idx) {
  SoundFX.playPop();
  const item = CONFIG.gallery[idx] || CONFIG.gallery[0];
  lightboxImg.src = item.src;
  withFallback(lightboxImg, idx + 1);
  lightboxCaption.textContent = item.caption;
  currentLikes = 1;
  lightboxLikeCount.textContent = currentLikes;

  lightbox.classList.remove("hidden");
  document.body.classList.add("locked");
}

function closeLightbox() {
  lightbox.classList.add("hidden");
  document.body.classList.remove("locked");
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxOverlay.addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.classList.contains("hidden")) {
    closeLightbox();
  }
});

lightboxLikeBtn.addEventListener("click", () => {
  SoundFX.playPop();
  currentLikes++;
  lightboxLikeCount.textContent = currentLikes;
  const rect = lightboxLikeBtn.getBoundingClientRect();
  spawnTapHeart(rect.left + rect.width / 2, rect.top);
});

/* ---------- CAKE & CANDLE BLOW (WITH MICROPHONE SENSING!) ---------- */
const flame = $("#flame");
const flameGlow = $("#flameGlow");
const smoke = $("#smoke");
const blowBtn = $("#blowBtn");
const blowBtnText = $("#blowBtnText");
const micBlowBtn = $("#micBlowBtn");
const micBtnText = $("#micBtnText");
const micStatus = $("#micStatus");
const wishCard = $("#wishCard");
const wishText = $("#wishText");

let candleBlown = false;
let micListening = false;
let micStream = null;
let micAudioCtx = null;
let micAnalyser = null;
let micAnimId = null;

function extinguishCandle() {
  if (candleBlown) return;
  candleBlown = true;

  SoundFX.playCelebration();

  // Animations
  flame.classList.add("off");
  flameGlow.classList.add("off");
  smoke.classList.add("puff");

  // Confetti Fountain
  const cakeRect = $("#cake").getBoundingClientRect();
  const cakeX = cakeRect.left + cakeRect.width / 2;
  const cakeY = cakeRect.top + 30;
  burstConfetti(cakeX, cakeY, 150);
  setTimeout(() => burstConfetti(cakeX, cakeY, 80), 300);

  // Update Buttons & Status
  blowBtnText.textContent = "Nyalakan Lilin Lagi";
  stopMicListening();
  micStatus.textContent = "Lilinnya padam! Semoga harapanmu terkabul ya cantik! ✨";
  micStatus.classList.remove("hidden");

  // Reveal Wish Card
  wishCard.classList.remove("hidden");
  wishText.textContent = "";
  typeWriter(wishText, CONFIG.wish, 35);
}

function relightCandle() {
  candleBlown = false;
  SoundFX.playPop();

  flame.classList.remove("off");
  flameGlow.classList.remove("off");
  smoke.classList.remove("puff");

  blowBtnText.textContent = "Tiup Lilin";
  micStatus.classList.add("hidden");
  wishCard.classList.add("hidden");
  wishText.textContent = "";
}

blowBtn.addEventListener("click", () => {
  if (!candleBlown) {
    extinguishCandle();
  } else {
    relightCandle();
  }
});

/* MICROPHONE DETECTION ENGINE */
async function startMicListening() {
  try {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      micStatus.textContent = "Browser tidak mendukung sensor mikrofon, silakan klik tombol 'Tiup Lilin' di atas ya! 🎂";
      micStatus.classList.remove("hidden");
      return;
    }

    micStatus.textContent = "Mendengarkan nafas/tiupan... Dekatkan mulut ke mic lalu tiup! 💨";
    micStatus.classList.remove("hidden");
    micBtnText.textContent = "Mendengarkan... 🎙️";

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    micStream = stream;
    micListening = true;

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    micAudioCtx = new AudioContextClass();
    const source = micAudioCtx.createMediaStreamSource(stream);
    micAnalyser = micAudioCtx.createAnalyser();
    micAnalyser.fftSize = 512;
    source.connect(micAnalyser);

    const bufferLength = micAnalyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    let consecutiveBlowCount = 0;

    function checkBlow() {
      if (!micListening || candleBlown) return;

      micAnalyser.getByteFrequencyData(dataArray);

      let lowFreqSum = 0;
      for (let i = 1; i < 20; i++) {
        lowFreqSum += dataArray[i];
      }
      const lowAvg = lowFreqSum / 19;

      if (lowAvg > 72) {
        consecutiveBlowCount++;
        if (consecutiveBlowCount >= 3) {
          extinguishCandle();
          return;
        }
      } else {
        consecutiveBlowCount = Math.max(0, consecutiveBlowCount - 1);
      }

      micAnimId = requestAnimationFrame(checkBlow);
    }

    checkBlow();
  } catch (err) {
    micStatus.textContent = "Izin mic tidak diberikan. Kamu tetap bisa klik tombol 'Tiup Lilin' di atas ya! 🎂";
    micStatus.classList.remove("hidden");
    stopMicListening();
  }
}

function stopMicListening() {
  micListening = false;
  micBtnText.textContent = "Tiup Pakai Mic HP";
  if (micAnimId) cancelAnimationFrame(micAnimId);
  if (micStream) {
    micStream.getTracks().forEach((track) => track.stop());
    micStream = null;
  }
  if (micAudioCtx && micAudioCtx.state !== "closed") {
    micAudioCtx.close().catch(() => { });
    micAudioCtx = null;
  }
}

micBlowBtn.addEventListener("click", () => {
  SoundFX.playPop();
  if (candleBlown) {
    relightCandle();
  }
  if (micListening) {
    stopMicListening();
    micStatus.classList.add("hidden");
  } else {
    startMicListening();
  }
});

/* ---------- BACK TO TOP ---------- */
$("#backToTop").addEventListener("click", () => {
  SoundFX.playPop();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
