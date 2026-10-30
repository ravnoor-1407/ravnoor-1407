import fs from "node:fs";
import path from "node:path";

const photoPath = "C:/Users/trade/.gemini/antigravity/brain/70d3f335-e5df-48cb-9a95-081419d744f2/.user_uploaded/media_1793374842195_ac9dfcae.jpg";
let photoBase64 = "";
if (fs.existsSync(photoPath)) {
  photoBase64 = fs.readFileSync(photoPath).toString("base64");
}

console.log("Loaded photo, base64 length:", photoBase64.length);

// 1. HERO PORTRAIT SVG
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 480" width="1200" height="480" role="img" aria-labelledby="hero-title hero-desc">
  <title id="hero-title">Ravnoor Kaur — Aspiring Software Developer</title>
  <desc id="hero-desc">Building, Learning &amp; Exploring the World of Technology. B.Tech in CSE (AI &amp; ML), Lovely Professional University.</desc>

  <defs>
    <radialGradient id="hero-bg" cx="75%" cy="35%" r="80%">
      <stop offset="0" stop-color="#131B38"/>
      <stop offset=".55" stop-color="#0B1020"/>
      <stop offset="1" stop-color="#050814"/>
    </radialGradient>
    <radialGradient id="hero-light-a" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#8B5CF6" stop-opacity=".65"/>
      <stop offset="1" stop-color="#8B5CF6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="hero-light-b" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#22D3EE" stop-opacity=".35"/>
      <stop offset="1" stop-color="#22D3EE" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="hero-name-grad" gradientUnits="userSpaceOnUse" x1="60" y1="0" x2="480" y2="0">
      <stop offset="0" stop-color="#FFFFFF"/>
      <stop offset=".5" stop-color="#22D3EE"/>
      <stop offset="1" stop-color="#8B5CF6"/>
    </linearGradient>
    <linearGradient id="hero-sheen" gradientUnits="userSpaceOnUse" x1="-260" y1="0" x2="-40" y2="0">
      <stop offset="0" stop-color="#22D3EE" stop-opacity="0"/>
      <stop offset=".5" stop-color="#FFFFFF" stop-opacity=".9"/>
      <stop offset="1" stop-color="#8B5CF6" stop-opacity="0"/>
      <animateTransform attributeName="gradientTransform" type="translate" values="0 0;760 0;760 0" keyTimes="0;.35;1" dur="8s" begin="3s" repeatCount="indefinite"/>
    </linearGradient>
    <linearGradient id="hero-scan" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#22D3EE" stop-opacity="0"/>
      <stop offset=".5" stop-color="#22D3EE" stop-opacity=".08"/>
      <stop offset="1" stop-color="#22D3EE" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="hero-rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#22D3EE" stop-opacity="0"/>
      <stop offset=".2" stop-color="#22D3EE"/>
      <stop offset=".75" stop-color="#8B5CF6"/>
      <stop offset="1" stop-color="#8B5CF6" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="hero-orbit-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#22D3EE" stop-opacity=".7"/>
      <stop offset="1" stop-color="#8B5CF6" stop-opacity=".1"/>
    </linearGradient>
    <pattern id="hero-grid" width="36" height="36" patternUnits="userSpaceOnUse">
      <path d="M36 0H0V36" fill="none" stroke="#22D3EE" stroke-opacity=".06" stroke-width="1"/>
    </pattern>
    <radialGradient id="hero-grid-fade" cx="68%" cy="45%" r="55%">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="1" stop-color="#000"/>
    </radialGradient>
    <mask id="hero-grid-mask">
      <rect width="1200" height="480" fill="url(#hero-grid-fade)"/>
    </mask>
    <filter id="hero-glow" x="-20%" y="-200%" width="140%" height="500%">
      <feGaussianBlur stdDeviation="4" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="hero-soft" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2.5"/>
    </filter>
    <clipPath id="hero-arch"><path d="M847 380 V202 A118 118 0 0 1 1083 202 V380 Z"/></clipPath>
    <radialGradient id="hero-photo-wash" cx="50%" cy="30%" r="80%">
      <stop offset="0" stop-color="#1E293B"/>
      <stop offset=".6" stop-color="#0F172A"/>
      <stop offset="1" stop-color="#0B1020"/>
    </radialGradient>
    <linearGradient id="hero-photo-grade" x1="0" y1="0" x2="0" y2="1">
      <stop offset=".6" stop-color="#0B1020" stop-opacity="0"/>
      <stop offset=".85" stop-color="#0B1020" stop-opacity=".5"/>
      <stop offset="1" stop-color="#050814" stop-opacity=".95"/>
    </linearGradient>
    <linearGradient id="hero-photo-sheen" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0"/>
      <stop offset=".5" stop-color="#FFFFFF" stop-opacity=".25"/>
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="hero-frame-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#22D3EE"/>
      <stop offset=".5" stop-color="#8B5CF6"/>
      <stop offset="1" stop-color="#06B6D4"/>
    </linearGradient>
    <clipPath id="hero-clip"><rect width="1200" height="480" rx="20"/></clipPath>
  </defs>

  <style>
    .hero-serif { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    .hero-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace; }
    .hero-sans { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; }

    .hero-rise { animation: hero-rise 1.4s cubic-bezier(.16,1,.3,1) both; }
    .hero-fade { animation: hero-fade 1.6s cubic-bezier(.16,1,.3,1) both; }
    .d1 { animation-delay: .15s; } .d2 { animation-delay: .35s; } .d3 { animation-delay: .6s; }
    .d4 { animation-delay: .9s; } .d5 { animation-delay: 1.2s; } .d6 { animation-delay: 1.5s; }

    .hero-draw { stroke-dasharray: 900; stroke-dashoffset: 900; animation: hero-draw 2.4s cubic-bezier(.65,0,.35,1) .9s forwards; }
    .hero-signal { stroke-dasharray: 500; stroke-dashoffset: 500; animation: hero-draw 2.2s cubic-bezier(.65,0,.35,1) 2.2s forwards; }

    .hero-portrait { animation: hero-photo 1.6s cubic-bezier(.16,1,.3,1) .5s both; }
    .hero-frame { stroke-dasharray: 900; stroke-dashoffset: 900; animation: hero-draw 2.2s cubic-bezier(.65,0,.35,1) 1s forwards; }
    @keyframes hero-photo { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
    @keyframes hero-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
    @keyframes hero-fade { from { opacity: 0; } to { opacity: 1; } }
    @keyframes hero-draw { to { stroke-dashoffset: 0; } }

    @media (prefers-reduced-motion: reduce) {
      .hero-rise, .hero-fade, .hero-portrait { animation: none; }
      .hero-frame { animation: none; stroke-dashoffset: 0; }
      .hero-draw, .hero-signal { animation: none; stroke-dashoffset: 0; }
    }
  </style>

  <g clip-path="url(#hero-clip)">
    <!-- Canvas -->
    <rect width="1200" height="480" fill="url(#hero-bg)"/>

    <!-- Ambient glowing light fields -->
    <ellipse cx="920" cy="150" rx="440" ry="310" fill="url(#hero-light-a)">
      <animateTransform attributeName="transform" type="translate" values="0 0; -50 25; 0 0" dur="22s" repeatCount="indefinite" calcMode="spline" keySplines=".45 0 .55 1; .45 0 .55 1"/>
    </ellipse>
    <ellipse cx="200" cy="450" rx="380" ry="230" fill="url(#hero-light-b)">
      <animateTransform attributeName="transform" type="translate" values="0 0; 60 -20; 0 0" dur="28s" repeatCount="indefinite" calcMode="spline" keySplines=".45 0 .55 1; .45 0 .55 1"/>
    </ellipse>

    <!-- Technical grid -->
    <rect width="1200" height="480" fill="url(#hero-grid)" mask="url(#hero-grid-mask)"/>

    <!-- Scan line across grid -->
    <rect x="0" y="-140" width="1200" height="140" fill="url(#hero-scan)">
      <animate attributeName="y" values="-140;480" dur="10s" begin="1.5s" repeatCount="indefinite"/>
    </rect>

    <!-- Floating cyber particles -->
    <g fill="#22D3EE">
      <circle cx="560" cy="120" r="1.5"><animate attributeName="opacity" values="0;.9;0" dur="4.2s" repeatCount="indefinite"/><animate attributeName="cy" values="120;96" dur="4.2s" repeatCount="indefinite"/></circle>
      <circle cx="720" cy="70" r="1.2" fill="#8B5CF6"><animate attributeName="opacity" values="0;.8;0" dur="5.6s" begin="1s" repeatCount="indefinite"/><animate attributeName="cy" values="70;48" dur="5.6s" begin="1s" repeatCount="indefinite"/></circle>
      <circle cx="1120" cy="380" r="1.7"><animate attributeName="opacity" values="0;.9;0" dur="4.8s" begin="2s" repeatCount="indefinite"/><animate attributeName="cy" values="380;352" dur="4.8s" begin="2s" repeatCount="indefinite"/></circle>
      <circle cx="760" cy="420" r="1.3" fill="#8B5CF6"><animate attributeName="opacity" values="0;.7;0" dur="6s" begin=".5s" repeatCount="indefinite"/><animate attributeName="cy" values="420;396" dur="6s" begin=".5s" repeatCount="indefinite"/></circle>
      <circle cx="1060" cy="60" r="1.4"><animate attributeName="opacity" values="0;.85;0" dur="5s" begin="3s" repeatCount="indefinite"/><animate attributeName="cy" values="60;40" dur="5s" begin="3s" repeatCount="indefinite"/></circle>
      <circle cx="640" cy="250" r="1.1"><animate attributeName="opacity" values="0;.7;0" dur="4.4s" begin="2.5s" repeatCount="indefinite"/><animate attributeName="cy" values="250;226" dur="4.4s" begin="2.5s" repeatCount="indefinite"/></circle>
    </g>

    <!-- Orbital rings around portrait -->
    <g transform="translate(965 232)" class="hero-fade d3">
      <circle r="212" fill="none" stroke="#8B5CF6" stroke-opacity=".18" stroke-dasharray="2 9">
        <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="120s" repeatCount="indefinite"/>
      </circle>
      <circle r="190" fill="none" stroke="url(#hero-orbit-grad)" stroke-width="1.2"/>
      <circle r="160" fill="none" stroke="#22D3EE" stroke-opacity=".2" stroke-dasharray="3 8"/>
      <g>
        <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="80s" repeatCount="indefinite"/>
        <circle cx="0" cy="160" r="2.8" fill="#FFFFFF"/>
        <circle cx="-160" cy="0" r="2.2" fill="#22D3EE" fill-opacity=".8"/>
      </g>
    </g>

    <!-- Portrait Arch -->
    <g class="hero-portrait">
      <path d="M835 392 V202 A130 130 0 0 1 1095 202 V392 Z" fill="none" stroke="#22D3EE" stroke-opacity=".3">
        <animate attributeName="stroke-opacity" values=".2;.65;.2" dur="4.5s" repeatCount="indefinite"/>
      </path>
      <g clip-path="url(#hero-arch)">
        <rect x="847" y="84" width="236" height="296" fill="url(#hero-photo-wash)"/>
        ${photoBase64 ? `<image href="data:image/jpeg;base64,${photoBase64}" x="847" y="84" width="236" height="296" preserveAspectRatio="xMidYMin slice"/>` : ''}
        <rect x="847" y="84" width="236" height="296" fill="url(#hero-photo-grade)"/>
        <rect x="700" y="84" width="90" height="296" fill="url(#hero-photo-sheen)" transform="skewX(-14)">
          <animate attributeName="x" values="700;1260;1260" keyTimes="0;.3;1" dur="9s" begin="3.5s" repeatCount="indefinite"/>
        </rect>
      </g>
      <path class="hero-frame" d="M847 380 V202 A118 118 0 0 1 1083 202 V380 Z" fill="none" stroke="url(#hero-frame-grad)" stroke-width="2"/>
      <path d="M829 290 v-22 h22" fill="none" stroke="#22D3EE" stroke-opacity=".9" stroke-width="1.5"/>
      <path d="M1101 398 v-22 M1101 398 h-22" fill="none" stroke="#8B5CF6" stroke-opacity=".9" stroke-width="1.5"/>
    </g>

    <!-- Node labels around portrait -->
    <g transform="translate(965 232)" class="hero-fade d4">
      <g>
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="65s" repeatCount="indefinite"/>
        <circle cx="190" cy="0" r="3.5" fill="#22D3EE" filter="url(#hero-glow)"/>
        <circle cx="-134" cy="-134" r="2.5" fill="#8B5CF6"/>
      </g>
      <g class="hero-mono" font-size="11" font-weight="600" letter-spacing="1.6" fill="#94A3B8">
        <g transform="translate(-122 -152)"><circle r="3" fill="#22D3EE"/><text x="10" y="4" fill="#22D3EE">AI/ML</text></g>
        <g transform="translate(150 -96)"><circle r="3" fill="#8B5CF6"/><text x="10" y="4" fill="#8B5CF6">PYTHON</text></g>
        <g transform="translate(150 110)"><circle r="3" fill="#22D3EE"/><text x="10" y="4" fill="#22D3EE">FASTAPI</text></g>
        <g transform="translate(-162 40)"><circle r="3" fill="#8B5CF6"/><text x="-14" y="4" text-anchor="end" fill="#8B5CF6">REACT</text></g>
      </g>
    </g>

    <!-- Signal path drawing itself -->
    <path class="hero-signal" d="M600 342 C 680 338, 740 330, 780 318 S 828 300, 847 300" fill="none" stroke="#22D3EE" stroke-opacity=".45" stroke-width="1.5"/>
    <circle cx="600" cy="342" r="3.2" fill="#FFFFFF" filter="url(#hero-glow)" opacity=".95">
      <animateMotion dur="5s" repeatCount="indefinite" begin="3.8s" path="M600 342 C 680 338, 740 330, 780 318 S 828 300, 847 300" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines=".45 0 .55 1"/>
    </circle>

    <!-- Terminal indicator pill -->
    <g class="hero-fade d1" transform="translate(72 64)">
      <rect width="340" height="34" rx="17" fill="#0B1020" stroke="#8B5CF6" stroke-opacity=".4" stroke-width="1.2"/>
      <circle cx="20" cy="17" r="4" fill="#22D3EE">
        <animate attributeName="opacity" values="1;.35;1" dur="2.4s" repeatCount="indefinite"/>
      </circle>
      <text class="hero-mono" x="34" y="21.5" font-size="12" fill="#94A3B8">~/ravnoor<tspan fill="#8B5CF6"> $ </tspan><tspan fill="#22D3EE">build --impactful</tspan></text>
      <rect x="310" y="10" width="7" height="14" fill="#22D3EE">
        <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.5;.5;1" dur="1.1s" repeatCount="indefinite"/>
      </rect>
    </g>

    <!-- Eyebrow -->
    <g class="hero-rise d2">
      <line x1="72" y1="136" x2="104" y2="136" stroke="#22D3EE" stroke-width="1.5"/>
      <text class="hero-mono" x="116" y="140" font-size="12.5" font-weight="600" letter-spacing="3" fill="#22D3EE">AI/ML · SOFTWARE DEVELOPMENT · TECHNOLOGY</text>
    </g>

    <!-- Name -->
    <text class="hero-serif hero-rise d3" x="68" y="226" font-size="82" font-weight="700" letter-spacing="-1.5" fill="#FFFFFF">Ravnoor <tspan fill="url(#hero-name-grad)">Kaur</tspan></text>

    <!-- Subtitle / Tagline -->
    <g class="hero-rise d4">
      <text class="hero-sans" x="70" y="274" font-size="20" font-weight="500" fill="#E2E8F0">Aspiring Software Developer</text>
      <text class="hero-sans" x="70" y="304" font-size="15.5" font-style="italic" fill="#94A3B8">Building, Learning &amp; Exploring the World of Technology</text>
    </g>

    <!-- Thin separator rule -->
    <line class="hero-draw" x1="70" y1="336" x2="640" y2="336" stroke="url(#hero-rule)" stroke-width="1.2"/>

    <!-- Quick highlights row -->
    <g class="hero-rise d5 hero-sans" font-size="13.5" fill="#CBD5E1">
      <g transform="translate(70 376)">
        <text class="hero-mono" y="-18" font-size="10.5" letter-spacing="1.8" fill="#8B5CF6">EDUCATION</text>
        <text font-weight="600" fill="#FFFFFF">B.Tech CSE (AI &amp; ML)</text>
        <text y="20" fill="#94A3B8" font-size="12.5">Lovely Professional University · CGPA 8.44</text>
      </g>
      <g transform="translate(380 376)">
        <text class="hero-mono" y="-18" font-size="10.5" letter-spacing="1.8" fill="#22D3EE">EXPERIENCE</text>
        <text font-weight="600" fill="#FFFFFF">Times of India &amp; Uplyx</text>
        <text y="20" fill="#94A3B8" font-size="12.5">Community Dev &amp; AI/ML Intern</text>
      </g>
    </g>
  </g>
  <rect x=".5" y=".5" width="1199" height="479" rx="19.5" fill="none" stroke="#8B5CF6" stroke-opacity=".3"/>
</svg>`;

fs.writeFileSync("assets/ravnoor-hero-portrait.svg", heroSvg);
console.log("Hero portrait written.");

// 2. HELPER FOR TITLE SVGs
function makeTitleSvg(num, title, mainWord, italicWord, rightText) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" width="1200" height="120" role="img" aria-label="${num} ${title}: ${mainWord} ${italicWord}.">
  <defs>
    <linearGradient id="t-line" gradientUnits="userSpaceOnUse" x1="40" y1="0" x2="1160" y2="0">
      <stop offset="0" stop-color="#22D3EE"/><stop offset=".6" stop-color="#8B5CF6"/><stop offset="1" stop-color="#8B5CF6" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="t-sheen" gradientUnits="userSpaceOnUse" x1="-300" y1="0" x2="0" y2="0">
      <stop offset="0" stop-color="#22D3EE"/><stop offset=".5" stop-color="#FFFFFF"/><stop offset="1" stop-color="#8B5CF6"/>
      <animateTransform attributeName="gradientTransform" type="translate" values="0 0;1500 0;1500 0" keyTimes="0;.4;1" dur="7s" begin="1.5s" repeatCount="indefinite"/>
    </linearGradient>
    <radialGradient id="t-pulse"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".5" stop-color="#22D3EE" stop-opacity=".7"/><stop offset="1" stop-color="#8B5CF6" stop-opacity="0"/></radialGradient>
  </defs>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400&amp;family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,400;1,700&amp;family=Space+Mono:ital,wght@0,400;0,700;1,400&amp;display=swap');
    .t-serif { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; }
    .t-mono { font-family: 'JetBrains Mono', 'Space Mono', ui-monospace, Menlo, Consolas, monospace; }
    .t-sans { font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
    .t-in { animation: t-in 1.1s cubic-bezier(.16,1,.3,1) both; }
    .t-d2 { animation-delay: .2s; } .t-d3 { animation-delay: .45s; }
    .t-draw { stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: t-draw 1.8s cubic-bezier(.65,0,.35,1) .5s forwards; }
    @keyframes t-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
    @keyframes t-draw { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .t-in { animation: none; } .t-draw { animation: none; stroke-dashoffset: 0; } }
  </style>
  <g class="t-in">
    <text class="t-mono" x="40" y="34" font-size="12" font-weight="700" letter-spacing="3" fill="#8B5CF6"><tspan fill="#22D3EE">${num}</tspan>   ${title.toUpperCase()}</text>
  </g>
  <g class="t-in t-d2">
    <text class="t-serif" x="38" y="84" font-size="44" font-weight="600" letter-spacing="-1" fill="#FFFFFF">${mainWord} <tspan font-style="italic" fill="url(#t-sheen)">${italicWord}</tspan></text>
  </g>
  <g class="t-in t-d3">
    <text class="t-mono" x="1160" y="34" text-anchor="end" font-size="10.5" letter-spacing="2.4" fill="#94A3B8">${rightText.toUpperCase()}</text>
  </g>
  <path class="t-draw" d="M40 106 H1160" stroke="url(#t-line)" stroke-width="1.5"/>
  <circle cx="40" cy="106" r="6" fill="url(#t-pulse)" opacity="0">
    <animate attributeName="cx" values="40;1160" dur="6s" begin="2.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".45 0 .55 1"/>
    <animate attributeName="opacity" values="0;1;0" keyTimes="0;.15;1" dur="6s" begin="2.3s" repeatCount="indefinite"/>
  </circle>
</svg>`;
}

fs.writeFileSync("assets/title-about.svg", makeTitleSvg("01", "About", "Hello, I'm", "Ravnoor.", "WHO I AM"));
fs.writeFileSync("assets/title-recognition.svg", makeTitleSvg("02", "Recognition", "Proof, on the", "record.", "HONORS &amp; STATS"));
fs.writeFileSync("assets/title-work.svg", makeTitleSvg("03", "Selected work", "Products, not", "assignments.", "FEATURED SYSTEMS"));
fs.writeFileSync("assets/title-toolkit.svg", makeTitleSvg("04", "Toolkit", "The tools I", "reach for.", "TECH STACK &amp; FLOW"));
fs.writeFileSync("assets/title-commits.svg", makeTitleSvg("05", "Commit log", "A journey of", "building.", "ACTIVITY &amp; STATS"));
fs.writeFileSync("assets/title-certifications.svg", makeTitleSvg("06", "Certifications", "Ten credentials,", "verified.", "CONTINUOUS LEARNING"));
fs.writeFileSync("assets/title-connect.svg", makeTitleSvg("07", "Connect", "Let's build something", "impactful.", "GET IN TOUCH"));
console.log("Title SVGs written.");

// 3. ABOUT INTRO TERMINAL SVG
const aboutIntroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 420" width="1200" height="420" role="img" aria-labelledby="ab-t ab-d">
  <title id="ab-t">About Ravnoor Kaur</title>
  <desc id="ab-d">Aspiring Software Developer. B.Tech in CSE (AI &amp; ML) at Lovely Professional University, CGPA 8.44. Community Development Intern at Times of India and AI/ML Intern at Uplyx Solutions. Shipped Nyaya Sahayak, Amazon Clone, CodeCaffeine and WebDev Progress Log.</desc>
  <defs>
    <linearGradient id="ab-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0B1020"/><stop offset="1" stop-color="#050814"/></linearGradient>
    <radialGradient id="ab-glow" cx="80%" cy="20%" r="70%"><stop offset="0" stop-color="#8B5CF6" stop-opacity=".4"/><stop offset="1" stop-color="#22D3EE" stop-opacity="0"/></radialGradient>
    <pattern id="ab-scan" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="1" fill="#22D3EE" opacity=".03"/></pattern>
    <clipPath id="ab-c0"><rect class="ab-type" x="68" y="102" width="89" height="24" style="animation-delay:0.5s;animation-duration:0.4s;animation-timing-function:steps(6)"/></clipPath>
    <clipPath id="ab-c1"><rect class="ab-type" x="68" y="126" width="580" height="24" style="animation-delay:1.0s;animation-duration:0.5s;animation-timing-function:steps(1)"/></clipPath>
    <clipPath id="ab-c2"><rect class="ab-type" x="68" y="152" width="200" height="24" style="animation-delay:1.8s;animation-duration:0.5s;animation-timing-function:steps(17)"/></clipPath>
    <clipPath id="ab-c3"><rect class="ab-type" x="68" y="176" width="580" height="24" style="animation-delay:2.4s;animation-duration:0.5s;animation-timing-function:steps(1)"/></clipPath>
    <clipPath id="ab-c4"><rect class="ab-type" x="68" y="202" width="200" height="24" style="animation-delay:3.1s;animation-duration:0.5s;animation-timing-function:steps(17)"/></clipPath>
    <clipPath id="ab-c5"><rect class="ab-type" x="68" y="226" width="580" height="24" style="animation-delay:3.7s;animation-duration:0.5s;animation-timing-function:steps(1)"/></clipPath>
    <clipPath id="ab-c6"><rect class="ab-type" x="68" y="252" width="200" height="24" style="animation-delay:4.4s;animation-duration:0.5s;animation-timing-function:steps(18)"/></clipPath>
    <clipPath id="ab-c7"><rect class="ab-type" x="68" y="276" width="580" height="24" style="animation-delay:5.0s;animation-duration:0.5s;animation-timing-function:steps(1)"/></clipPath>
    <clipPath id="ab-c8"><rect class="ab-type" x="68" y="302" width="138" height="24" style="animation-delay:5.7s;animation-duration:0.4s;animation-timing-function:steps(12)"/></clipPath>
    <clipPath id="ab-c9"><rect class="ab-type" x="68" y="326" width="580" height="24" style="animation-delay:6.2s;animation-duration:0.5s;animation-timing-function:steps(1)"/></clipPath>
    <clipPath id="ab-c10"><rect class="ab-type" x="68" y="352" width="163" height="24" style="animation-delay:6.9s;animation-duration:0.4s;animation-timing-function:steps(15)"/></clipPath>
    <clipPath id="ab-c11"><rect class="ab-type" x="68" y="376" width="580" height="24" style="animation-delay:7.4s;animation-duration:0.5s;animation-timing-function:steps(1)"/></clipPath>
  </defs>
  <style>
    .ab-serif { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
    .ab-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
    .ab-sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
    .ab-type { transform-box: fill-box; transform-origin: left center; animation-name: ab-type; animation-fill-mode: both; }
    .ab-card { animation: ab-in 1s cubic-bezier(.16,1,.3,1) both; }
    .ab-fade { animation: ab-fade 1s ease both; }
    @keyframes ab-type { 0% { transform: scaleX(0); } 85%, 100% { transform: scaleX(1); } }
    @keyframes ab-in { from { opacity: 0; transform: translateX(24px); } to { opacity: 1; transform: none; } }
    @keyframes ab-fade { from { opacity: 0; } to { opacity: 1; } }
    @media (prefers-reduced-motion: reduce) { .ab-type, .ab-card, .ab-fade { animation: none; } }
  </style>
  <rect width="1200" height="420" rx="20" fill="url(#ab-bg)"/>
  <rect width="1200" height="420" rx="20" fill="url(#ab-glow)"/>
  <rect x=".5" y=".5" width="1199" height="419" rx="19.5" fill="none" stroke="#8B5CF6" stroke-opacity=".25"/>

  <!-- Terminal window -->
  <g class="ab-fade">
    <rect x="40" y="32" width="760" height="356" rx="14" fill="#060913" stroke="#8B5CF6" stroke-opacity=".35"/>
    <rect x="40" y="32" width="760" height="356" rx="14" fill="url(#ab-scan)"/>
    <path d="M40 46 a14 14 0 0 1 14 -14 H786 a14 14 0 0 1 14 14 V68 H40 Z" fill="#0B1020"/>
    <line x1="40" y1="68" x2="800" y2="68" stroke="#8B5CF6" stroke-opacity=".25"/>
    <circle cx="62" cy="50" r="5" fill="#EF4444"/><circle cx="80" cy="50" r="5" fill="#F59E0B"/><circle cx="98" cy="50" r="5" fill="#10B981"/>
    <text class="ab-mono" x="420" y="54" text-anchor="middle" font-size="11" letter-spacing="1.5" fill="#94A3B8">ravnoor@portfolio: ~</text>
  </g>
  <g class="ab-mono" font-size="12.5">
    <g clip-path="url(#ab-c0)"><text x="72" y="118" fill="#22D3EE">$</text><text x="94" y="118" fill="#FFFFFF">whoami</text></g>
    <g clip-path="url(#ab-c1)"><text x="72" y="142" fill="#8B5CF6">→</text><text x="94" y="142" fill="#CBD5E1">Ravnoor Kaur · Aspiring Software Developer</text></g>

    <g clip-path="url(#ab-c2)"><text x="72" y="168" fill="#22D3EE">$</text><text x="94" y="168" fill="#FFFFFF">cat education.txt</text></g>
    <g clip-path="url(#ab-c3)"><text x="72" y="192" fill="#8B5CF6">→</text><text x="94" y="192" fill="#CBD5E1">B.Tech CSE (AI &amp; ML) · Lovely Professional University</text></g>

    <g clip-path="url(#ab-c4)"><text x="72" y="218" fill="#22D3EE">$</text><text x="94" y="218" fill="#FFFFFF">cat academic.txt</text></g>
    <g clip-path="url(#ab-c5)"><text x="72" y="242" fill="#8B5CF6">→</text><text x="94" y="242" fill="#CBD5E1">CGPA: 8.44 · Class XII: 82% · Class X: 91%</text></g>

    <g clip-path="url(#ab-c6)"><text x="72" y="268" fill="#22D3EE">$</text><text x="94" y="268" fill="#FFFFFF">cat experience.txt</text></g>
    <g clip-path="url(#ab-c7)"><text x="72" y="292" fill="#8B5CF6">→</text><text x="94" y="292" fill="#CBD5E1">Community Dev (Times of India) · AI/ML Intern (Uplyx)</text></g>

    <g clip-path="url(#ab-c8)"><text x="72" y="318" fill="#22D3EE">$</text><text x="94" y="318" fill="#FFFFFF">ls ./shipped</text></g>
    <g clip-path="url(#ab-c9)"><text x="72" y="342" fill="#8B5CF6">→</text><text x="94" y="342" fill="#CBD5E1">nyaya-sahayak  amazon-clone  codecaffeine  webdev-progress</text></g>

    <g clip-path="url(#ab-c10)"><text x="72" y="368" fill="#22D3EE">$</text><text x="94" y="368" fill="#FFFFFF">echo $PRINCIPLE</text></g>
    <g clip-path="url(#ab-c11)"><text x="72" y="392" fill="#8B5CF6">→</text><text x="94" y="392" fill="#CBD5E1">clean scalable code · learning through practical problem-solving</text></g>
  </g>

  <!-- Right side summary cards -->
  <g class="ab-card" style="animation-delay:1.0s"><g transform="translate(830 46)">
    <rect width="330" height="98" rx="12" fill="#0B1020" stroke="#8B5CF6" stroke-opacity=".3"/>
    <text class="ab-mono" x="22" y="30" font-size="10.5" letter-spacing="2" fill="#8B5CF6">CORE FOCUS</text>
    <text class="ab-serif" x="22" y="58" font-size="18" font-weight="600" fill="#FFFFFF">AI/ML &amp; Software Dev</text>
    <text class="ab-sans" x="22" y="80" font-size="12.5" fill="#94A3B8">Building intelligent web systems &amp; tools</text>
  </g></g>

  <g class="ab-card" style="animation-delay:1.2s"><g transform="translate(830 160)">
    <rect width="330" height="98" rx="12" fill="#0B1020" stroke="#22D3EE" stroke-opacity=".3"/>
    <text class="ab-mono" x="22" y="30" font-size="10.5" letter-spacing="2" fill="#22D3EE">CURRENT STATUS</text>
    <text class="ab-serif" x="22" y="58" font-size="18" font-weight="600" fill="#FFFFFF">Building • Learning • Shipping</text>
    <text class="ab-sans" x="22" y="80" font-size="12.5" fill="#94A3B8">Python · React · FastAPI · Machine Learning</text>
  </g></g>

  <g class="ab-card" style="animation-delay:1.4s"><g transform="translate(830 274)">
    <rect width="330" height="98" rx="12" fill="#0B1020" stroke="#8B5CF6" stroke-opacity=".3"/>
    <text class="ab-mono" x="22" y="30" font-size="10.5" letter-spacing="2" fill="#8B5CF6">ACADEMIC EXCELLENCE</text>
    <text class="ab-serif" x="22" y="58" font-size="18" font-weight="600" fill="#FFFFFF">8.44 CGPA · B.Tech</text>
    <text class="ab-sans" x="22" y="80" font-size="12.5" fill="#94A3B8">Lovely Professional University (LPU)</text>
  </g></g>
</svg>`;

fs.writeFileSync("assets/about-intro.svg", aboutIntroSvg);
console.log("About intro SVG written.");

// 4. RECOGNITION & CODING STATS SVG
const achievementSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 430" width="1200" height="430" role="img" aria-labelledby="ach-title ach-desc">
  <title id="ach-title">Recognition &amp; Achievements</title>
  <desc id="ach-desc">Code-E-Haunt 3.0 National Hackathon. Times of India Community Development Internship. CGPA 8.44. LeetCode 15+ problems. Class XII 82%, Class X 91%.</desc>

  <defs>
    <linearGradient id="ach-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1020"/><stop offset="1" stop-color="#050814"/></linearGradient>
    <radialGradient id="ach-glow-a" cx="85%" cy="0%" r="90%"><stop offset="0" stop-color="#8B5CF6" stop-opacity=".75"/><stop offset="1" stop-color="#0B1020" stop-opacity="0"/></radialGradient>
    <radialGradient id="ach-glow-b" cx="90%" cy="0%" r="90%"><stop offset="0" stop-color="#22D3EE" stop-opacity=".4"/><stop offset="1" stop-color="#0B1020" stop-opacity="0"/></radialGradient>
    <linearGradient id="ach-trace" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#22D3EE"/><stop offset=".45" stop-color="#8B5CF6"/><stop offset="1" stop-color="#22D3EE" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="ach-clip-a"><rect x="0" y="0" width="560" height="250" rx="16"/></clipPath>
    <clipPath id="ach-clip-b"><rect x="0" y="0" width="560" height="250" rx="16"/></clipPath>
  </defs>

  <style>
    .ach-serif { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
    .ach-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
    .ach-sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
    .ach-in { animation: ach-in 1.2s cubic-bezier(.16,1,.3,1) both; }
    .a1 { animation-delay: .1s; } .a2 { animation-delay: .35s; } .a3 { animation-delay: .6s; }
    .ach-draw { stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: ach-draw 2.6s cubic-bezier(.65,0,.35,1) .8s forwards; }
    @keyframes ach-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
    @keyframes ach-draw { to { stroke-dashoffset: 0; } }
    .ach-trace-a { stroke-dasharray: 340 1900; stroke-dashoffset: 2240; animation: ach-trace-a 6s linear infinite; }
    @keyframes ach-trace-a { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .ach-in { animation: none; } .ach-draw { animation: none; stroke-dashoffset: 0; } .ach-trace-a { display: none; } }
  </style>

  <rect width="1200" height="430" rx="20" fill="url(#ach-bg)"/>
  <rect x=".5" y=".5" width="1199" height="429" rx="19.5" fill="none" stroke="#8B5CF6" stroke-opacity=".25"/>

  <!-- Code-E-Haunt 3.0 Card -->
  <g class="ach-in a1"><g transform="translate(30 24)">
    <g clip-path="url(#ach-clip-a)">
      <rect width="560" height="250" fill="#060913"/>
      <rect width="560" height="250" fill="url(#ach-glow-a)"/>
      <text class="ach-serif" x="540" y="124" text-anchor="end" font-size="110" font-weight="800" fill="#8B5CF6" fill-opacity=".12">HACK</text>
    </g>
    <rect x=".5" y=".5" width="559" height="249" rx="15.5" fill="none" stroke="#8B5CF6" stroke-opacity=".4"/>
    <rect class="ach-trace-a" x=".5" y=".5" width="559" height="249" rx="15.5" fill="none" stroke="url(#ach-trace)" stroke-width="1.8" stroke-linecap="round"/>
    <text class="ach-mono" x="32" y="50" font-size="12" font-weight="700" letter-spacing="2.6" fill="#22D3EE">CODINGBLOCKS LPU · MARCH 2026</text>
    <text class="ach-serif" x="30" y="105" font-size="38" font-weight="700" letter-spacing="-1" fill="#FFFFFF">Code-E-Haunt 3.0</text>
    <text class="ach-sans" x="32" y="142" font-size="15" font-weight="600" fill="#E2E8F0">National-Level Inter-University Hackathon</text>
    <text class="ach-sans" x="32" y="172" font-size="13.5" fill="#94A3B8">Collaborative technical problem-solving, rapid prototyping</text>
    <text class="ach-sans" x="32" y="196" font-size="13.5" fill="#94A3B8">and modern algorithmic development in high-pressure sessions.</text>
  </g></g>

  <!-- Times of India Internship Card -->
  <g class="ach-in a2"><g transform="translate(610 24)">
    <g clip-path="url(#ach-clip-b)">
      <rect width="560" height="250" fill="#060913"/>
      <rect width="560" height="250" fill="url(#ach-glow-b)"/>
      <text class="ach-serif" x="540" y="130" text-anchor="end" font-size="130" font-weight="800" fill="#22D3EE" fill-opacity=".1">250+</text>
    </g>
    <rect x=".5" y=".5" width="559" height="249" rx="15.5" fill="none" stroke="#22D3EE" stroke-opacity=".35"/>
    <text class="ach-mono" x="32" y="50" font-size="12" font-weight="700" letter-spacing="2.6" fill="#8B5CF6">TIMES OF INDIA · JUNE 2025 – JULY 2026</text>
    <text class="ach-serif" x="30" y="105" font-size="38" font-weight="700" letter-spacing="-1" fill="#FFFFFF">Times Foundation Intern</text>
    <text class="ach-sans" x="32" y="142" font-size="15" font-weight="600" fill="#E2E8F0">Community Development &amp; Outreach</text>
    <text class="ach-sans" x="32" y="172" font-size="13.5" fill="#94A3B8">Environmental awareness initiatives across two government schools.</text>
    <text class="ach-sans" x="32" y="196" font-size="13.5" fill="#94A3B8">Facilitated 250+ students in Times Critical Thinking Championship.</text>
  </g></g>

  <!-- Animated separator line -->
  <path class="ach-draw" d="M30 300 H1170" stroke="#8B5CF6" stroke-opacity=".35" stroke-width="1.5"/>

  <!-- Score Strip -->
  <g class="ach-in a3 ach-sans" font-size="13" fill="#CBD5E1">
    <g transform="translate(45 310)">
      <circle cx="0" cy="0" r="3.5" fill="#22D3EE"/>
      <text class="ach-mono" y="28" font-size="11" letter-spacing="2" fill="#8B5CF6">ACADEMICS</text>
      <text class="ach-serif" y="68" font-size="36" font-weight="700" fill="#FFFFFF">8.44</text>
      <text y="92" fill="#94A3B8">CGPA · B.Tech AI &amp; ML</text>
    </g>
    <g transform="translate(285 310)">
      <circle cx="0" cy="0" r="3.5" fill="#22D3EE"/>
      <text class="ach-mono" y="28" font-size="11" letter-spacing="2" fill="#22D3EE">LEETCODE</text>
      <text class="ach-serif" y="68" font-size="36" font-weight="700" fill="#FFFFFF">15+</text>
      <text y="92" fill="#94A3B8">DSA problems solved</text>
    </g>
    <g transform="translate(525 310)">
      <circle cx="0" cy="0" r="3.5" fill="#22D3EE"/>
      <text class="ach-mono" y="28" font-size="11" letter-spacing="2" fill="#8B5CF6">CLASS XII</text>
      <text class="ach-serif" y="68" font-size="36" font-weight="700" fill="#FFFFFF">82%</text>
      <text y="92" fill="#94A3B8">Senior Secondary Board</text>
    </g>
    <g transform="translate(765 310)">
      <circle cx="0" cy="0" r="3.5" fill="#22D3EE"/>
      <text class="ach-mono" y="28" font-size="11" letter-spacing="2" fill="#22D3EE">CLASS X</text>
      <text class="ach-serif" y="68" font-size="36" font-weight="700" fill="#FFFFFF">91%</text>
      <text y="92" fill="#94A3B8">Secondary School Board</text>
    </g>
    <g transform="translate(1005 310)">
      <circle cx="0" cy="0" r="3.5" fill="#22D3EE"/>
      <text class="ach-mono" y="28" font-size="11" letter-spacing="2" fill="#8B5CF6">INTERNSHIPS</text>
      <text class="ach-serif" y="68" font-size="36" font-weight="700" fill="#FFFFFF">2</text>
      <text y="92" fill="#94A3B8">Times of India &amp; Uplyx</text>
    </g>
  </g>
</svg>`;

fs.writeFileSync("assets/achievement-motif-v2.svg", achievementSvg);
console.log("Achievements SVG written.");

// 5. HELPER FOR PROJECT CARDS
function makeProjectCard(num, tagsHeader, title, desc, builtText, stat1Num, stat1Label, stat2Num, stat2Label, stat3Num, stat3Label, chips, visualCode) {
  const chipSvgs = chips.map((c, i) => {
    const x = 56 + i * 110;
    return `<g class="p-chip" style="animation-delay:${(0.9 + i * 0.1).toFixed(2)}s"><rect x="${x}" y="314" width="${c.length * 8.5 + 26}" height="26" rx="13" fill="#131B38" stroke="#8B5CF6" stroke-opacity=".4"/><text class="p-mono" x="${x + (c.length * 8.5 + 26)/2}" y="331" text-anchor="middle" font-size="11.5" fill="#22D3EE">${c}</text></g>`;
  }).join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 370" width="1200" height="370" role="img" aria-labelledby="p-t">
  <title id="p-t">${title.replace(/&/g, '&amp;')}: ${desc.replace(/&/g, '&amp;')}</title>
  <defs>
    <linearGradient id="p-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0B1020"/><stop offset="1" stop-color="#050814"/></linearGradient>
    <radialGradient id="p-glow" cx="82%" cy="30%" r="55%"><stop offset="0" stop-color="#8B5CF6" stop-opacity=".45"/><stop offset="1" stop-color="#22D3EE" stop-opacity="0"/></radialGradient>
    <pattern id="p-grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="#22D3EE" stroke-opacity=".06"/></pattern>
    <clipPath id="p-clip"><rect width="1200" height="370" rx="18"/></clipPath>
  </defs>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400&amp;family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,400;1,700&amp;family=Space+Mono:ital,wght@0,400;0,700;1,400&amp;display=swap');
    .p-serif { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; }
    .p-mono { font-family: 'JetBrains Mono', 'Space Mono', ui-monospace, Menlo, Consolas, monospace; }
    .p-sans { font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
    .p-in { animation: p-in 1.2s cubic-bezier(.16,1,.3,1) both; }
    .p-d1 { animation-delay: .15s; } .p-d2 { animation-delay: .4s; }
    .p-chip { animation: p-chip .7s cubic-bezier(.34,1.56,.64,1) both; }
    @keyframes p-chip { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
    .p-draw { stroke-dasharray: 600; stroke-dashoffset: 600; animation: p-draw 2s cubic-bezier(.65,0,.35,1) .5s forwards; }
    @keyframes p-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
    @keyframes p-draw { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .p-in, .p-chip { animation: none; } .p-draw { animation: none; stroke-dashoffset: 0; } }
  </style>
  <g clip-path="url(#p-clip)">
    <rect width="1200" height="370" fill="url(#p-bg)"/>
    <rect x="720" width="480" height="370" fill="url(#p-grid)"/>
    <rect width="1200" height="370" fill="url(#p-glow)"/>
    <g class="p-in p-d1">
      <text class="p-mono" x="56" y="58" font-size="12" font-weight="700" letter-spacing="2.6" fill="#8B5CF6">${num} · ${tagsHeader.toUpperCase()}</text>
      <text class="p-serif" x="54" y="116" font-size="46" font-weight="700" letter-spacing="-1" fill="#FFFFFF">${title}</text>
      <text class="p-sans" x="56" y="156" font-size="16.5" fill="#CBD5E1">${desc}</text>
      <text class="p-mono" x="56" y="192" font-size="12" fill="#22D3EE"><tspan fill="#8B5CF6">BUILT ›</tspan> ${builtText.replace(/&/g, '&amp;')}</text>
      <line class="p-draw" x1="56" y1="216" x2="680" y2="216" stroke="#8B5CF6" stroke-opacity=".35" stroke-width="1.2"/>
      <g transform="translate(56 256)"><text class="p-serif" font-size="30" font-weight="700" fill="#FFFFFF">${stat1Num}</text><text class="p-sans" y="24" font-size="12.5" fill="#94A3B8">${stat1Label}</text></g>
      <g transform="translate(260 256)"><text class="p-serif" font-size="30" font-weight="700" fill="#22D3EE">${stat2Num}</text><text class="p-sans" y="24" font-size="12.5" fill="#94A3B8">${stat2Label}</text></g>
      <g transform="translate(465 256)"><text class="p-serif" font-size="30" font-weight="700" fill="#8B5CF6">${stat3Num}</text><text class="p-sans" y="24" font-size="12.5" fill="#94A3B8">${stat3Label}</text></g>
      ${chipSvgs}
    </g>
    <!-- Right side visual representation -->
    <g class="p-in p-d2" transform="translate(800 60)">
      ${visualCode}
    </g>
  </g>
  <rect x=".5" y=".5" width="1199" height="369" rx="17.5" fill="none" stroke="#8B5CF6" stroke-opacity=".25"/>
</svg>`;
}

// Project 1: Nyaya Sahayak
const nyayaVisual = `
  <rect x="0" y="0" width="340" height="250" rx="14" fill="#060913" stroke="#22D3EE" stroke-opacity=".4"/>
  <rect x="16" y="16" width="308" height="40" rx="8" fill="#0B1020" stroke="#8B5CF6" stroke-opacity=".3"/>
  <text x="32" y="41" font-family="monospace" font-size="12" fill="#22D3EE">AI Legal Assistant &gt; Query: IPC 420</text>
  <rect x="16" y="70" width="220" height="60" rx="8" fill="#131B38"/>
  <text x="28" y="92" font-family="sans-serif" font-size="11" fill="#FFFFFF">Analyzing legal definitions...</text>
  <text x="28" y="112" font-family="sans-serif" font-size="10" fill="#94A3B8">ChromaDB semantic retrieval active</text>
  <rect x="80" y="145" width="244" height="75" rx="8" fill="#0B1020" stroke="#22D3EE" stroke-opacity=".3"/>
  <text x="94" y="170" font-family="sans-serif" font-size="11" fill="#22D3EE">Simplified Explanation:</text>
  <text x="94" y="190" font-family="sans-serif" font-size="10.5" fill="#CBD5E1">Cheating &amp; dishonestly inducing delivery...</text>
  <circle cx="280" cy="182" r="16" fill="#8B5CF6" fill-opacity=".3"/>
  <text x="280" y="186" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#22D3EE">AI</text>
`;
fs.writeFileSync("assets/project-nyaya-sahayak.svg", makeProjectCard(
  "01", "AI/ML · LEGAL-TECH · FASTAPI · 2026",
  "Nyaya Sahayak",
  "AI-powered legal assistance platform designed to simplify access to legal information.",
  "Interactive UI with FastAPI backend, ChromaDB vector store, Groq &amp; Gemini LLM integration",
  "FastAPI", "High-performance backend",
  "ChromaDB", "Vector search &amp; RAG",
  "React + Groq", "Lightning-fast responses",
  ["React", "FastAPI", "Python", "ChromaDB", "Groq", "Tailwind"],
  nyayaVisual
));
fs.writeFileSync("assets/project-webdev-sahayak.svg", fs.readFileSync("assets/project-nyaya-sahayak.svg"));

// Project 2: Amazon Clone
const amazonVisual = `
  <rect x="0" y="0" width="340" height="250" rx="14" fill="#060913" stroke="#8B5CF6" stroke-opacity=".4"/>
  <rect x="16" y="16" width="308" height="36" rx="6" fill="#0B1020"/>
  <text x="32" y="39" font-family="sans-serif" font-size="13" font-weight="bold" fill="#F59E0B">amazon<tspan fill="#22D3EE">.in</tspan></text>
  <rect x="120" y="24" width="140" height="20" rx="4" fill="#131B38"/>
  <text x="130" y="38" font-family="sans-serif" font-size="10" fill="#94A3B8">Search electronics...</text>
  <rect x="16" y="66" width="146" height="155" rx="8" fill="#0B1020" stroke="#8B5CF6" stroke-opacity=".3"/>
  <rect x="28" y="78" width="122" height="75" rx="6" fill="#131B38"/>
  <text x="30" y="172" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">Wireless Headset</text>
  <text x="30" y="190" font-family="sans-serif" font-size="11" fill="#22D3EE">₹2,499</text>
  <rect x="178" y="66" width="146" height="155" rx="8" fill="#0B1020" stroke="#22D3EE" stroke-opacity=".3"/>
  <rect x="190" y="78" width="122" height="75" rx="6" fill="#131B38"/>
  <text x="192" y="172" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">Smartwatch Pro</text>
  <text x="192" y="190" font-family="sans-serif" font-size="11" fill="#22D3EE">₹4,999</text>
`;
fs.writeFileSync("assets/project-amazon-clone.svg", makeProjectCard(
  "02", "FRONTEND · E-COMMERCE · UI/UX · 2026",
  "Amazon Clone",
  "Responsive, interactive e-commerce frontend inspired by the flagship shopping experience.",
  "Product browsing, dynamic search, category filtering, cart, wishlist & multi-step checkout",
  "100%", "Fully responsive layout",
  "LocalStorage", "Persistent cart state",
  "Zero Deps", "Vanilla JS architecture",
  ["HTML5", "CSS3", "JavaScript", "LocalStorage", "UI/UX"],
  amazonVisual
));

// Project 3: CodeCaffeine
const cafeVisual = `
  <rect x="0" y="0" width="340" height="250" rx="14" fill="#060913" stroke="#22D3EE" stroke-opacity=".4"/>
  <path d="M0 14 a14 14 0 0 1 14 -14 H326 a14 14 0 0 1 14 14 V32 H0 Z" fill="#0B1020"/>
  <circle cx="16" cy="16" r="4" fill="#EF4444"/><circle cx="28" cy="16" r="4" fill="#F59E0B"/><circle cx="40" cy="16" r="4" fill="#10B981"/>
  <text x="170" y="20" text-anchor="middle" font-family="monospace" font-size="10" fill="#94A3B8">codecaffeine@terminal</text>
  <text x="18" y="60" font-family="monospace" font-size="11" fill="#22D3EE">== WELCOME TO CODECAFFEINE ==</text>
  <text x="18" y="85" font-family="monospace" font-size="10.5" fill="#8B5CF6">1. Espresso ........... ₹120</text>
  <text x="18" y="105" font-family="monospace" font-size="10.5" fill="#8B5CF6">2. Caramel Macchiato .. ₹180</text>
  <text x="18" y="125" font-family="monospace" font-size="10.5" fill="#8B5CF6">3. Iced Latte ......... ₹150</text>
  <line x1="18" y1="145" x2="320" y2="145" stroke="#8B5CF6" stroke-opacity=".3"/>
  <text x="18" y="170" font-family="monospace" font-size="10.5" fill="#FFFFFF">&gt; Order placed: 2x Iced Latte</text>
  <text x="18" y="195" font-family="monospace" font-size="11" font-weight="bold" fill="#22D3EE">Total Bill + Tax: ₹330.00</text>
  <text x="18" y="220" font-family="monospace" font-size="10" fill="#10B981">Receipt generated successfully!</text>
`;
fs.writeFileSync("assets/project-codecaffeine.svg", makeProjectCard(
  "03", "PYTHON · CLI · SYSTEM DESIGN · 2026",
  "CodeCaffeine",
  "Terminal-based cafe management system demonstrating dynamic logic and menu handling.",
  "Nested dictionaries, conditional logic, order processing and automated bill calculation",
  "Python", "Clean modular logic",
  "Real-Time", "Dynamic order processing",
  "Automated", "Billing &amp; receipt engine",
  ["Python", "CLI", "Data Structures", "Nested Dicts"],
  cafeVisual
));
fs.writeFileSync("assets/project-code-caffeine.svg", fs.readFileSync("assets/project-codecaffeine.svg"));

// Project 4: WebDev Progress Log
const webDevVisual = `
  <rect x="0" y="0" width="340" height="250" rx="14" fill="#060913" stroke="#8B5CF6" stroke-opacity=".4"/>
  <text x="24" y="38" font-family="monospace" font-size="12" font-weight="bold" fill="#22D3EE">// WebDev Journey Roadmap</text>
  <rect x="24" y="56" width="292" height="42" rx="8" fill="#0B1020" stroke="#8B5CF6" stroke-opacity=".3"/>
  <circle cx="44" cy="77" r="8" fill="#8B5CF6"/>
  <text x="64" y="75" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">Stage 1: Core Frontend</text>
  <text x="64" y="90" font-family="sans-serif" font-size="10" fill="#94A3B8">Semantic HTML5, CSS3, DOM Manipulation</text>
  <rect x="24" y="108" width="292" height="42" rx="8" fill="#0B1020" stroke="#22D3EE" stroke-opacity=".3"/>
  <circle cx="44" cy="129" r="8" fill="#22D3EE"/>
  <text x="64" y="127" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">Stage 2: Backend Architecture</text>
  <text x="64" y="142" font-family="sans-serif" font-size="10" fill="#94A3B8">Node.js, Express.js, RESTful Endpoints</text>
  <rect x="24" y="160" width="292" height="42" rx="8" fill="#0B1020" stroke="#8B5CF6" stroke-opacity=".3"/>
  <circle cx="44" cy="181" r="8" fill="#8B5CF6"/>
  <text x="64" y="179" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">Stage 3: Full-Stack Integration</text>
  <text x="64" y="194" font-family="sans-serif" font-size="10" fill="#94A3B8">Databases, API Security &amp; Deployment</text>
`;
fs.writeFileSync("assets/project-webdev-progress.svg", makeProjectCard(
  "04", "FULL-STACK · LEARNING LOG · 2026",
  "WebDev Progress Log",
  "Structured documentation of a full-stack learning journey with practical implementations.",
  "Modular project archive covering core frontend, modern JavaScript, backend APIs and tooling",
  "Full-Stack", "Frontend to backend",
  "Hands-On", "Real code implementations",
  "Continuous", "Actively expanded repo",
  ["HTML/CSS", "JavaScript", "Bootstrap", "Node.js", "Express"],
  webDevVisual
));
fs.writeFileSync("assets/project-multitenant-saas-v2.svg", fs.readFileSync("assets/project-webdev-progress.svg"));
console.log("Project SVGs written.");

// 6. TECH CONSTELLATION SVG
const techSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 500" width="1200" height="500" role="img" aria-labelledby="tc-title tc-desc">
  <title id="tc-title">Tech stack constellation</title>
  <desc id="tc-desc">Languages: Python, C, C++, JavaScript. Frontend: HTML5, CSS3, React, Next.js, Tailwind CSS. Backend and APIs: Node.js, Express, FastAPI. AI/ML/Data: NumPy, Pandas, Scikit-learn. Databases: MySQL, MongoDB, PostgreSQL. Tools: Git, GitHub, VS Code, Terminal, Vercel, Netlify.</desc>
  <defs>
    <linearGradient id="tc-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1020"/><stop offset="1" stop-color="#050814"/></linearGradient>
    <radialGradient id="tc-glow" cx="50%" cy="50%" r="60%"><stop offset="0" stop-color="#8B5CF6" stop-opacity=".35"/><stop offset="1" stop-color="#0B1020" stop-opacity="0"/></radialGradient>
    <radialGradient id="tc-pulse"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".5" stop-color="#22D3EE" stop-opacity=".7"/><stop offset="1" stop-color="#8B5CF6" stop-opacity="0"/></radialGradient>
  </defs>
  <style>
    .tc-serif { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
    .tc-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
    .tc-panel { animation: tc-in 1.1s cubic-bezier(.16,1,.3,1) both; }
    .tc-web { stroke-dasharray: 1800; stroke-dashoffset: 1800; animation: tc-draw 3s cubic-bezier(.65,0,.35,1) 1s forwards; }
    @keyframes tc-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
    @keyframes tc-draw { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .tc-panel { animation: none; } .tc-web { animation: none; stroke-dashoffset: 0; } }
  </style>

  <rect width="1200" height="500" rx="20" fill="url(#tc-bg)"/>
  <rect width="1200" height="500" rx="20" fill="url(#tc-glow)"/>
  <rect x=".5" y=".5" width="1199" height="499" rx="19.5" fill="none" stroke="#8B5CF6" stroke-opacity=".25"/>

  <!-- Gutters linking the six groups -->
  <path class="tc-web" d="M24 250 H1176 M406 24 V476 M794 24 V476" fill="none" stroke="#22D3EE" stroke-opacity=".2"/>
  <circle cx="0" cy="250" r="8" fill="url(#tc-pulse)" opacity="0">
    <animate attributeName="cx" values="24;1176" dur="9s" begin="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".45 0 .55 1"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.9;1" dur="9s" begin="3s" repeatCount="indefinite"/>
  </circle>

  <!-- Panel 1: Languages (Top Left) -->
  <g class="tc-panel" style="animation-delay:0.1s"><g transform="translate(40 40)">
    <text class="tc-mono" x="0" y="24" font-size="11.5" font-weight="700" letter-spacing="2" fill="#22D3EE">01 · LANGUAGES</text>
    <text class="tc-serif" x="0" y="65" font-size="28" font-weight="700" fill="#FFFFFF">Python &amp; C/C++</text>
    <text class="tc-mono" x="0" y="100" font-size="14" fill="#CBD5E1">Python · JavaScript · C · C++</text>
    <text font-family="sans-serif" x="0" y="130" font-size="13" fill="#94A3B8">Core algorithmic problem-solving &amp; web logic</text>
  </g></g>

  <!-- Panel 2: Frontend (Top Mid) -->
  <g class="tc-panel" style="animation-delay:0.25s"><g transform="translate(430 40)">
    <text class="tc-mono" x="0" y="24" font-size="11.5" font-weight="700" letter-spacing="2" fill="#8B5CF6">02 · FRONTEND</text>
    <text class="tc-serif" x="0" y="65" font-size="28" font-weight="700" fill="#FFFFFF">React &amp; Modern UI</text>
    <text class="tc-mono" x="0" y="100" font-size="14" fill="#CBD5E1">React · Next.js · Tailwind · HTML5 · CSS3</text>
    <text font-family="sans-serif" x="0" y="130" font-size="13" fill="#94A3B8">Responsive component architectures &amp; styling</text>
  </g></g>

  <!-- Panel 3: Backend & APIs (Top Right) -->
  <g class="tc-panel" style="animation-delay:0.4s"><g transform="translate(820 40)">
    <text class="tc-mono" x="0" y="24" font-size="11.5" font-weight="700" letter-spacing="2" fill="#22D3EE">03 · BACKEND &amp; APIS</text>
    <text class="tc-serif" x="0" y="65" font-size="28" font-weight="700" fill="#FFFFFF">Node.js &amp; FastAPI</text>
    <text class="tc-mono" x="0" y="100" font-size="14" fill="#CBD5E1">Node.js · Express · FastAPI · REST APIs</text>
    <text font-family="sans-serif" x="0" y="130" font-size="13" fill="#94A3B8">High-performance asynchronous API services</text>
  </g></g>

  <!-- Panel 4: AI / ML / Data (Bottom Left) -->
  <g class="tc-panel" style="animation-delay:0.55s"><g transform="translate(40 280)">
    <text class="tc-mono" x="0" y="24" font-size="11.5" font-weight="700" letter-spacing="2" fill="#8B5CF6">04 · AI / ML &amp; DATA</text>
    <text class="tc-serif" x="0" y="65" font-size="28" font-weight="700" fill="#FFFFFF">Machine Learning</text>
    <text class="tc-mono" x="0" y="100" font-size="14" fill="#CBD5E1">NumPy · Pandas · Scikit-learn · GenAI</text>
    <text font-family="sans-serif" x="0" y="130" font-size="13" fill="#94A3B8">Data modeling, statistical analysis &amp; RAG</text>
  </g></g>

  <!-- Panel 5: Databases & Cloud (Bottom Mid) -->
  <g class="tc-panel" style="animation-delay:0.7s"><g transform="translate(430 280)">
    <text class="tc-mono" x="0" y="24" font-size="11.5" font-weight="700" letter-spacing="2" fill="#22D3EE">05 · DATABASES &amp; CLOUD</text>
    <text class="tc-serif" x="0" y="65" font-size="28" font-weight="700" fill="#FFFFFF">SQL &amp; NoSQL</text>
    <text class="tc-mono" x="0" y="100" font-size="14" fill="#CBD5E1">MySQL · MongoDB · PostgreSQL</text>
    <text font-family="sans-serif" x="0" y="130" font-size="13" fill="#94A3B8">Relational schema design &amp; document storage</text>
  </g></g>

  <!-- Panel 6: Developer Tools (Bottom Right) -->
  <g class="tc-panel" style="animation-delay:0.85s"><g transform="translate(820 280)">
    <text class="tc-mono" x="0" y="24" font-size="11.5" font-weight="700" letter-spacing="2" fill="#8B5CF6">06 · DEV TOOLS</text>
    <text class="tc-serif" x="0" y="65" font-size="28" font-weight="700" fill="#FFFFFF">Git &amp; Deployment</text>
    <text class="tc-mono" x="0" y="100" font-size="14" fill="#CBD5E1">Git · GitHub · VS Code · Vercel · Netlify</text>
    <text font-family="sans-serif" x="0" y="130" font-size="13" fill="#94A3B8">Version control, automation &amp; live hosting</text>
  </g></g>
</svg>`;

fs.writeFileSync("assets/tech-constellation-v2.svg", techSvg);
console.log("Tech constellation SVG written.");

// 7. CERTIFICATIONS SVG (10 items in a structured grid)
const certs = [
  { org: "INFOSYS", name: "Intro to Artificial Intelligence", date: "March 2026" },
  { org: "CISCO", name: "C++ Essentials 1", date: "February 2026" },
  { org: "CISCO", name: "Python Essentials 1", date: "January 2026" },
  { org: "COURSERA", name: "Python for Data Science & AI", date: "January 2026" },
  { org: "IBM", name: "AI Fundamentals", date: "September 2026" },
  { org: "IBM", name: "Generative AI in Action", date: "September 2026" },
  { org: "IBM", name: "Make GenAI Work for You", date: "September 2026" },
  { org: "UPLYX", name: "Industrial Training in ML", date: "June 2026" },
  { org: "TIMES FOUNDATION", name: "Community Dev Project", date: "July 2026" },
  { org: "TECH VEDA", name: "Effective Time Management", date: "October 2025" }
];

const certTiles = certs.map((c, i) => {
  const col = i % 5;
  const row = Math.floor(i / 5);
  const x = 36 + col * 228;
  const y = 36 + row * 185;
  const strokeColor = i % 2 === 0 ? "#22D3EE" : "#8B5CF6";
  return `
    <g class="ce-tile" style="animation-delay:${(0.1 + i * 0.08).toFixed(2)}s"><g transform="translate(${x} ${y})">
      <rect width="216" height="165" rx="14" fill="#060913" stroke="#8B5CF6" stroke-opacity=".25"/>
      <rect width="216" height="165" rx="14" fill="none" stroke="${strokeColor}" stroke-opacity=".5" stroke-width="1.2"/>
      <text class="ce-mono" x="18" y="32" font-size="11" font-weight="700" letter-spacing="2" fill="${strokeColor}">${c.org}</text>
      <circle cx="192" cy="28" r="3" fill="${strokeColor}"/>
      <line x1="18" y1="48" x2="198" y2="48" stroke="#8B5CF6" stroke-opacity=".2"/>
      <text class="ce-sans" x="18" y="78" font-size="13" font-weight="600" fill="#FFFFFF">${c.name.split(" ").slice(0, 3).join(" ")}</text>
      <text class="ce-sans" x="18" y="98" font-size="13" font-weight="600" fill="#CBD5E1">${c.name.split(" ").slice(3).join(" ")}</text>
      <text class="ce-mono" x="18" y="136" font-size="10.5" fill="#94A3B8">${c.date}</text>
    </g></g>
  `;
}).join("");

const certsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 420" width="1200" height="420" role="img" aria-labelledby="ce-t ce-d">
  <title id="ce-t">Certifications</title>
  <desc id="ce-d">10 Verified credentials from Infosys, Cisco, IBM, Coursera, Uplyx and Times Foundation.</desc>
  <defs>
    <linearGradient id="ce-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1020"/><stop offset="1" stop-color="#050814"/></linearGradient>
    <radialGradient id="ce-glow" cx="15%" cy="100%" r="70%"><stop offset="0" stop-color="#8B5CF6" stop-opacity=".4"/><stop offset="1" stop-color="#22D3EE" stop-opacity="0"/></radialGradient>
  </defs>
  <style>
    .ce-serif { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
    .ce-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
    .ce-sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
    .ce-tile { animation: ce-in 1s cubic-bezier(.34,1.3,.64,1) both; }
    @keyframes ce-in { from { opacity: 0; transform: translateY(18px) scale(.97); } to { opacity: 1; transform: none; } }
    @media (prefers-reduced-motion: reduce) { .ce-tile { animation: none; } }
  </style>
  <rect width="1200" height="420" rx="20" fill="url(#ce-bg)"/>
  <rect width="1200" height="420" rx="20" fill="url(#ce-glow)"/>
  <rect x=".5" y=".5" width="1199" height="419" rx="19.5" fill="none" stroke="#8B5CF6" stroke-opacity=".25"/>
  ${certTiles}
</svg>`;

fs.writeFileSync("assets/certifications.svg", certsSvg);
console.log("Certifications SVG written.");

// 8. FOOTER SIGNATURE SVG
const footerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 160" width="1200" height="160" role="img" aria-label="Ravnoor Kaur signature">
  <defs>
    <linearGradient id="ft-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0B1020"/><stop offset="1" stop-color="#050814"/></linearGradient>
    <linearGradient id="ft-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#22D3EE"/><stop offset="1" stop-color="#8B5CF6"/></linearGradient>
  </defs>
  <rect width="1200" height="160" rx="16" fill="url(#ft-bg)"/>
  <rect x=".5" y=".5" width="1199" height="159" rx="15.5" fill="none" stroke="#8B5CF6" stroke-opacity=".25"/>
  <g transform="translate(60 55)">
    <text font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="34" font-weight="700" fill="url(#ft-grad)">Ravnoor Kaur</text>
    <text font-family="ui-monospace, Consolas, monospace" y="40" font-size="13" fill="#94A3B8">Building technology through continuous learning and practical problem-solving.</text>
  </g>
  <g transform="translate(1080 80)">
    <circle r="20" fill="#060913" stroke="#22D3EE" stroke-opacity=".5"/>
    <text text-anchor="middle" y="5" font-family="monospace" font-size="12" fill="#22D3EE">2026</text>
  </g>
</svg>`;

fs.writeFileSync("assets/footer-signature-v2.svg", footerSvg);
console.log("Footer signature written.");
