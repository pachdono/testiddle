// Little characters that hang about on the notes cards: Tiddle clinging to the top edge, Sprout
// sitting on a corner, Inky and Fern peeking round the sides, Wiggle dangling underneath, Pip and
// Mochi resting on top, Bumble hovering and Dot climbing an edge. Same thin line
// and soft fills as Tiddle.

const LINE = "#2e5f74";
const s = { stroke: LINE, strokeWidth: 1.3, strokeLinejoin: "round", strokeLinecap: "round" };
const eye = (x, y, r = 4.4, look = 0) => <g><ellipse cx={x} cy={y} rx={r} ry={r * 1.1} fill="#fff" {...s} strokeWidth="1.1" /><circle cx={x + look} cy={y + .6} r={r * .55} fill="#283a4b" /><circle cx={x + look + r * .25} cy={y - r * .2} r={r * .2} fill="#fff" /></g>;

/** Tiddle hanging on to a top edge, turned three quarters and shaded like the avatars: the edge
 * runs along y = 64 of the drawing. */
function TiddleCling() {
  return (
    <svg viewBox="0 0 110 76" width="110" height="76" aria-hidden="true">
      <defs>
        <clipPath id="tc-clip"><rect x="0" y="0" width="110" height="64" /></clipPath>
        <clipPath id="tc-body"><path d="M53 14 C74 13 84 28 83 44 C88 54 86 66 80 74 H28 C22 66 20 54 25 44 C24 28 33 15 53 14 Z" /></clipPath>
        <linearGradient id="tc-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#d6f7ee" /><stop offset=".55" stopColor="#bdeee1" /><stop offset="1" stopColor="#86d2bd" /></linearGradient>
      </defs>
      <g clipPath="url(#tc-clip)">
        <path d="M53 14 C74 13 84 28 83 44 C88 54 86 66 80 74 H28 C22 66 20 54 25 44 C24 28 33 15 53 14 Z" fill="url(#tc-grad)" />
        <g clipPath="url(#tc-body)"><ellipse cx="90" cy="46" rx="16" ry="40" fill="#86d2bd" /><ellipse cx="96" cy="48" rx="9" ry="38" fill="#6cbfa8" opacity=".55" /></g>
        <path d="M53 14 C74 13 84 28 83 44 C88 54 86 66 80 74 H28 C22 66 20 54 25 44 C24 28 33 15 53 14 Z" fill="none" {...s} />
        <path d="M31 27 C34 21 40 17 46 16" stroke="#fff" strokeWidth="2.2" fill="none" opacity=".85" strokeLinecap="round" />
      </g>
      <g {...s} strokeWidth="1.1"><ellipse cx="44" cy="38" rx="6.4" ry="6.8" fill="#fff" /><ellipse cx="65" cy="37.6" rx="4.8" ry="6.4" fill="#fff" /></g>
      <circle cx="45.4" cy="38.6" r="3.4" fill="#283a4b" /><circle cx="46.8" cy="37" r="1.3" fill="#fff" /><circle cx="66" cy="38.2" r="2.8" fill="#283a4b" /><circle cx="67.1" cy="36.9" r="1.05" fill="#fff" />
      <ellipse cx="34" cy="48" rx="4.4" ry="2.4" fill="#f7a9bb" opacity=".85" /><ellipse cx="74" cy="47" rx="2.6" ry="2" fill="#f7a9bb" opacity=".7" />
      <g {...s} stroke="#e2903f" strokeWidth="1"><path d="M50 46 Q60 41 72 48 Q61 52 50 49 Z" fill="#f8be6a" /><path d="M50 49 Q61 52 72 48 Q67 54 59 55 Q52 54 50 49 Z" fill="#e2903f" /></g>
      <path d="M53 45 Q59 42.6 65 44.6" stroke="#fff" strokeWidth=".9" opacity=".75" fill="none" />
      <path d="M51 15 C47 6 58 4 56 12" fill="none" {...s} />
      <g {...s} stroke="#33465c"><path d="M40 12.8 V16 C46 18.4 60 18.4 66 16 V12.8" fill="#4a5f78" /><path d="M34 9.6 L53 3 L72 9.6 L53 16.2 Z" fill="#53698a" /><path d="M53 3 L72 9.6 L53 16.2 Z" fill="#41557a" stroke="none" /><path d="M34 9.6 L53 3 L72 9.6 L53 16.2 Z" fill="none" /><path d="M53 9.6 C59 10.6 66 12 68.6 14 V20" fill="none" stroke="#e9a54b" strokeWidth="1.1" /></g>
      {/* wings hooked over the edge */}
      <path d="M24 60 C18 60 15 64 17 68 C19 72 26 72 31 69 C33 67 33 63 30 61 Z" fill="#bdeee1" {...s} />
      <path d="M20 68 L21 72 M24 69 L25 73 M28 68 L29 72" {...s} strokeWidth="1" />
      <path d="M82 60 C88 60 91 64 89 68 C87 72 80 72 75 69 C73 67 73 63 76 61 Z" fill="#86d2bd" {...s} />
      <path d="M86 68 L85 72 M82 69 L81 73 M78 68 L77 72" {...s} strokeWidth="1" />
    </svg>
  );
}

/** Sprout sitting on a top corner, legs over the edge: the edge is y = 58. */
function Sprout() {
  return (
    <svg viewBox="0 0 76 84" width="76" height="84" aria-hidden="true">
      <path d="M30 56 C29 64 27 70 24 74 M44 56 C45 64 48 70 51 74" fill="none" {...s} strokeWidth="1.5" />
      <ellipse cx="23" cy="75.4" rx="4.4" ry="2.6" fill="#e3a271" {...s} strokeWidth="1" /><ellipse cx="52" cy="75.4" rx="4.4" ry="2.6" fill="#e3a271" {...s} strokeWidth="1" />
      <path d="M37 20 C52 20 60 32 59 44 C58 54 50 59 37 59 C24 59 16 54 15 44 C14 32 22 20 37 20 Z" fill="#f4dcb0" {...s} />
      <path d="M52 30 C57 38 57 48 52 54 C55 46 55 38 50 31 Z" fill="#e7c48d" />
      <path d="M22 30 C24 26 28 23 32 22" stroke="#fff" strokeWidth="1.8" fill="none" opacity=".75" strokeLinecap="round" />
      <path d="M37 21 C37 15 37 12 38 8" fill="none" stroke="#5d8a3a" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M38 12 C33 13 27 10 25 4 C31 2.6 36 6 38 12 Z" fill="#9fd477" {...s} stroke="#4c7a2f" strokeWidth="1" />
      <path d="M38 9 C42 4 49 3 53 6 C50 11 43 12 38 9 Z" fill="#7fc25a" {...s} stroke="#3f6b26" strokeWidth="1" />
      {eye(30, 39, 3.8, 1)}{eye(44, 39, 3.8, 1)}
      <path d="M33 47 Q37 50 41 47" fill="none" {...s} strokeWidth="1.1" />
      <ellipse cx="24" cy="46" rx="3" ry="1.8" fill="#f3a3a3" opacity=".7" /><ellipse cx="50" cy="46" rx="3" ry="1.8" fill="#f3a3a3" opacity=".7" />
    </svg>
  );
}

/** Inky peeking round a right hand edge: the edge is x = 16. */
function Inky() {
  return (
    <svg viewBox="0 0 64 72" width="64" height="72" aria-hidden="true">
      <defs><clipPath id="ink-clip"><rect x="16" y="0" width="60" height="72" /></clipPath></defs>
      <g clipPath="url(#ink-clip)">
        <path d="M40 8 C44 18 58 28 58 44 C58 56 50 64 38 64 C26 64 14 56 14 44 C14 28 36 18 40 8 Z" fill="#a9c9f5" {...s} />
        <path d="M50 30 C56 38 57 48 52 56 C54 46 52 38 46 32 Z" fill="#86aee6" />
        <path d="M30 26 C33 22 36 18 38 14" stroke="#fff" strokeWidth="1.8" fill="none" opacity=".7" strokeLinecap="round" />
        {eye(28, 40, 4.6, -1.4)}{eye(41, 40, 4.6, -1.4)}
        <path d="M30 50 Q34 53 38 50" fill="none" {...s} strokeWidth="1.1" />
      </g>
      <path d="M8 30 C6 26 10 23 14 25 L20 28 C22 30 21 34 18 34 L12 34 C9 34 8 32 8 30 Z" fill="#a9c9f5" {...s} />
      <path d="M10 29.6 H13 M9.6 32 H12.6" {...s} strokeWidth=".9" />
      <path d="M58 20 q3 3 0 6 q-3 -3 0 -6 Z" fill="#86aee6" {...s} strokeWidth=".8" />
    </svg>
  );
}

/** Wiggle the bookworm dangling on a thread from a bottom edge: the edge is y = 0. */
function Wiggle() {
  return (
    <svg viewBox="0 0 70 96" width="70" height="96" aria-hidden="true">
      <path d="M36 0 V42" stroke="#9aa5b1" strokeWidth="1" />
      <path d="M36 42 C46 44 50 52 46 58 C42 64 50 70 46 76 C42 82 32 82 28 76 C24 70 32 64 28 58 C24 52 26 44 36 42 Z" fill="#f6b8c4" {...s} />
      <path d="M30 58 Q37 60 44 58 M30 70 Q37 72 44 70" fill="none" {...s} strokeWidth=".9" opacity=".6" />
      <circle cx="37" cy="86" r="10" fill="#f6b8c4" {...s} />
      <g fill="none" stroke="#7a5230" strokeWidth="1.3"><circle cx="32.6" cy="85" r="4.2" /><circle cx="41.4" cy="85" r="4.2" /><path d="M36.8 85 H37.2" /></g>
      <circle cx="33" cy="85.6" r="1.6" fill="#283a4b" /><circle cx="41.8" cy="85.6" r="1.6" fill="#283a4b" />
      <path d="M34.4 91 Q37 92.8 39.6 91" fill="none" {...s} strokeWidth="1" />
      <path d="M44 44 C47 41 51 41 53 43" fill="none" {...s} strokeWidth="1" />
    </svg>
  );
}

/** Pip the snail, sliding along a top edge: the edge is the bottom of the drawing, y = 50. */
function Pip() {
  return (
    <svg viewBox="0 0 84 50" width="96" height="57" aria-hidden="true">
      <path d="M6 50 C6 45 9 41 12 37 C11 29 14 22 20 22 C26 22 29 28 28 36 L30 40 L70 42 C76 43 80 46 80 50 Z" fill="#ffe2ad" {...s} />
      <path d="M16 24 L12 12 M23 23 L26 11" fill="none" {...s} />
      {eye(12, 10, 3.2, -0.6)}{eye(26, 9, 3.2, -0.6)}
      <path d="M17 31 Q20.5 33.6 24 31" fill="none" {...s} strokeWidth="1.1" />
      <ellipse cx="25.6" cy="28.6" rx="2.2" ry="1.3" fill="#f3a3a3" opacity=".75" />
      <circle cx="53" cy="26" r="17" fill="#dccbf5" {...s} />
      <path d="M44 34 C55 40 67 33 66 22" fill="none" stroke="#c4aeea" strokeWidth="3" strokeLinecap="round" opacity=".7" />
      <path d="M53 26 a3.5 3.5 0 1 1 3.5 3.5 a7.5 7.5 0 1 1 -7.5 -7.5 a11.5 11.5 0 1 1 11.5 11.5" fill="none" {...s} strokeWidth="1.1" />
      <path d="M42 17 C44 13 48 11 52 10.6" stroke="#fff" strokeWidth="1.8" fill="none" opacity=".75" strokeLinecap="round" />
    </svg>
  );
}

/** Mochi the cat, asleep on a top edge with her paws over it: the edge is y = 44. */
function Mochi() {
  return (
    <svg viewBox="0 0 98 52" width="118" height="63" aria-hidden="true">
      <path d="M86 42 C94 42 96 34 91 29" fill="none" {...s} strokeWidth="3.4" stroke="#2e5f74" />
      <path d="M86 42 C94 42 96 34 91 29" fill="none" stroke="#f9e9da" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M30 44 C28 31 40 22 58 22 C76 22 89 31 88 44 Z" fill="#f9e9da" {...s} />
      <path d="M31 44 C40 37 72 36 87 44 Z M70 24 C80 27 88 34 88 44 H80 C82 36 78 29 70 24 Z" fill="#ecd0b6" />
      <path d="M56 24 C58 29 58 34 56 38 M66 24 C68 29 68 34 66 38 M76 27 C78 31 78 35 76 39" fill="none" stroke="#efc59d" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 44 C6 33 12 23 24 23 C36 23 42 33 40 44 Z" fill="#f9e9da" {...s} />
      <path d="M32 26 C38 30 41 37 40 44 H34 C36 38 35 31 32 26 Z" fill="#ecd0b6" /><path d="M12 28 C14 25 17 24 20 24" stroke="#fff" strokeWidth="1.6" fill="none" opacity=".8" strokeLinecap="round" />
      <path d="M11 29 L12 15 L21 23 Z M28 23 L36 15 L37 29 Z" fill="#f9e9da" {...s} />
      <path d="M13.4 25 L13.8 19 L17.6 22.6 Z M31 22.6 L34.6 19 L34.8 25 Z" fill="#f7c4cc" />
      <path d="M14 34 Q17 36.4 20 34 M28 34 Q31 36.4 34 34" fill="none" {...s} strokeWidth="1.2" />
      <path d="M22.6 37.6 L25.4 37.6 L24 39.2 Z" fill="#ef9aa8" stroke="#d27c8a" strokeWidth=".8" strokeLinejoin="round" />
      <ellipse cx="12.6" cy="39" rx="3" ry="1.7" fill="#f3a3a3" opacity=".7" /><ellipse cx="35.4" cy="39" rx="3" ry="1.7" fill="#f3a3a3" opacity=".7" />
      <ellipse cx="18" cy="45" rx="5.4" ry="3.4" fill="#f9e9da" {...s} /><ellipse cx="31" cy="45" rx="5.4" ry="3.4" fill="#f9e9da" {...s} />
      <path d="M16 46.6 V48 M19.6 46.6 V48 M29 46.6 V48 M32.6 46.6 V48" {...s} strokeWidth=".8" />
      <g className="crit-z" fill="none" {...s} strokeWidth="1.2"><path d="M48 12 H54 L48 18 H54" /><path d="M58 3 H62 L58 7.4 H62" /></g>
    </svg>
  );
}

/** Bumble the bee, hovering just above a top edge. */
function Bumble() {
  return (
    <svg viewBox="0 0 62 54" width="62" height="54" aria-hidden="true">
      <g className="crit-wing"><ellipse cx="30" cy="15" rx="7.5" ry="11" transform="rotate(-22 30 15)" fill="#eef7ff" {...s} strokeWidth="1.1" opacity=".95" /><ellipse cx="40" cy="16" rx="6.5" ry="9.5" transform="rotate(20 40 16)" fill="#eef7ff" {...s} strokeWidth="1.1" opacity=".95" /></g>
      <path d="M48 34 L54 35.4 L48 37.6" fill="#6b5236" {...s} strokeWidth="1" />
      <ellipse cx="32" cy="35" rx="17" ry="12.5" fill="#ffd96e" {...s} />
      <path d="M40 24.4 C46 27 49 31 49 35 C49 41 43 46.6 34 47.4 C42 44 46 38 46 33 C46 29 44 26.4 40 24.4 Z" fill="#f2b94a" />
      <path d="M37 23.6 C39.4 29 39.4 41 37 46.4 M44.4 26.4 C46.2 31 46.2 39 44.4 43.6" fill="none" stroke="#6b5236" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M19 29 C21 25.6 24 24 27 23.6" stroke="#fff" strokeWidth="1.8" fill="none" opacity=".75" strokeLinecap="round" />
      <path d="M21 24 C19 18 17 15 14 14 M27 23 C27 17 28 14 31 12" fill="none" {...s} strokeWidth="1.1" />
      <circle cx="13.6" cy="13.6" r="1.6" fill={LINE} /><circle cx="31.4" cy="11.6" r="1.6" fill={LINE} />
      {eye(22, 33, 3.6, -0.8)}{eye(30.4, 33, 3.6, -0.8)}
      <path d="M23.4 40 Q26.2 42.4 29 40" fill="none" {...s} strokeWidth="1.1" />
      <ellipse cx="18.4" cy="38.6" rx="2.4" ry="1.4" fill="#f3a3a3" opacity=".75" />
    </svg>
  );
}

/** Fern the frog peeking round an edge, drawn like Inky: the edge is x = 16. */
function Fern() {
  return (
    <svg viewBox="0 0 64 72" width="64" height="72" aria-hidden="true">
      <defs><clipPath id="fern-clip"><rect x="16" y="0" width="60" height="72" /></clipPath></defs>
      <g clipPath="url(#fern-clip)">
        <path d="M14 66 C12 52 15 41 22 35 C18 25 24 16 31 17 C35 17.6 37 21 37.6 25 C39.4 24.4 41.4 24.4 43 25 C43.6 21 46 17.6 50 17 C57 16 62 25 58 35 C64 41 64 54 62 66 Z" fill="#bfe6a0" {...s} />
        <path d="M53 38 C59 44 60 54 57 62 C58 52 56 45 51 40 Z" fill="#a3d27f" />
        <ellipse cx="40" cy="56" rx="13" ry="8" fill="#e4f5d4" />
        {eye(30.5, 25.6, 4.8, -1.4)}{eye(49.5, 25.6, 4.8, -1.4)}
        <path d="M30 42 Q40 49 50 42" fill="none" {...s} strokeWidth="1.2" />
        <ellipse cx="25" cy="40" rx="3" ry="1.8" fill="#f3a3a3" opacity=".7" /><ellipse cx="55" cy="40" rx="3" ry="1.8" fill="#f3a3a3" opacity=".7" />
      </g>
      <path d="M6 32 C4 28 8 25 12 27 L20 30 C22 32 21 36 18 36 L11 36 C8 36 6 35 6 32 Z" fill="#bfe6a0" {...s} />
      <circle cx="6" cy="30.4" r="2" fill="#bfe6a0" {...s} strokeWidth="1" /><circle cx="5.6" cy="35" r="2" fill="#bfe6a0" {...s} strokeWidth="1" />
    </svg>
  );
}

/** Dot the ladybird, climbing up a side edge with the edge through her middle. */
function Ladybird() {
  return (
    <svg viewBox="0 0 34 42" width="34" height="42" aria-hidden="true">
      <path d="M6 20 L1.6 17.6 M5.6 27 L1 27.6 M7 33.6 L3 36.4 M28 20 L32.4 17.6 M28.4 27 L33 27.6 M27 33.6 L31 36.4" fill="none" {...s} strokeWidth="1.1" />
      <path d="M14 6 C12.6 3 10.6 1.6 8.4 1.4 M20 6 C21.4 3 23.4 1.6 25.6 1.4" fill="none" {...s} strokeWidth="1" />
      <circle cx="17" cy="10" r="6.4" fill="#4a5a70" {...s} />
      {eye(14.4, 9.6, 2.2, 0)}{eye(19.6, 9.6, 2.2, 0)}
      <ellipse cx="17" cy="26" rx="11.4" ry="13" fill="#f59a8e" {...s} />
      <path d="M20 13.4 C25 15.4 28.4 20 28.4 26 C28.4 32 25 37 19 39 C24 35 25.6 30 25.6 26 C25.6 20 23.6 16 20 13.4 Z" fill="#e0756a" />
      <path d="M17 13.6 V39" {...s} strokeWidth="1.1" />
      <g fill="#4a5a70" opacity=".85"><circle cx="11.4" cy="22" r="2.2" /><circle cx="22.6" cy="22" r="2.2" /><circle cx="12" cy="31" r="1.8" /><circle cx="22" cy="31" r="1.8" /></g>
      <path d="M9 18 C10 16 11.6 15 13 14.6" stroke="#fff" strokeWidth="1.5" fill="none" opacity=".75" strokeLinecap="round" />
    </svg>
  );
}

const CAST = { tiddle: TiddleCling, sprout: Sprout, inky: Inky, wiggle: Wiggle, pip: Pip, mochi: Mochi, bumble: Bumble, fern: Fern, dot: Ladybird };

/** One critter, placed by its CSS class: top (clinging), corner (sitting), side or left (peeking round), under
 * (dangling), perch (resting on the top edge), fly (hovering above) or climb (walking up the right edge). */
export function Critter({ who, where, at = "70%" }) {
  const C = CAST[who];
  return <span className={`critter critter-${where}`} style={{ "--at": at }} aria-hidden="true"><C /></span>;
}

/** Which critters visit a notes page, so different pages get different company. */
export function castFor(n) {
  const sets = [
    { head: ["tiddle", "top", "72%"], note: ["fern", "left", "30%"], keys: ["wiggle", "under", "78%"] },
    { head: ["mochi", "perch", "78%"], note: ["dot", "climb", "26%"], keys: ["inky", "side", "40%"] },
    { head: ["sprout", "corner", "88%"], note: ["bumble", "fly", "70%"], keys: ["pip", "perch", "24%"] },
    { head: ["pip", "perch", "80%"], note: ["inky", "left", "36%"], keys: ["tiddle", "top", "82%"] },
    { head: ["bumble", "fly", "86%"], note: ["mochi", "perch", "30%"], keys: ["fern", "side", "50%"] },
    { head: ["tiddle", "top", "44%"], note: ["sprout", "corner", "92%"], keys: ["dot", "climb", "40%"] },
    { head: ["inky", "side", "50%"], note: ["wiggle", "under", "70%"], keys: ["mochi", "perch", "84%"] },
    { head: ["fern", "side", "46%"], note: ["pip", "perch", "76%"], keys: ["bumble", "fly", "18%"] },
  ];
  return sets[((n % sets.length) + sets.length) % sets.length];
}

const ROTATION = [
  ["tiddle", "top", "82%"], ["fern", "left", "40%"], ["mochi", "perch", "76%"], ["dot", "climb", "30%"], ["sprout", "corner", "92%"],
  ["bumble", "fly", "14%"], ["inky", "side", "45%"], ["pip", "perch", "22%"], ["wiggle", "under", "84%"], ["tiddle", "top", "16%"],
  ["fern", "side", "58%"], ["mochi", "perch", "28%"], ["inky", "left", "55%"], ["bumble", "fly", "86%"], ["sprout", "corner", "8%"], ["dot", "climb", "64%"],
];

/** A critter for the nth card of a screen, so cards next to each other get different company. */
export function CritterFor({ n = 0, only }) {
  const pick = ROTATION.filter(([, where]) => !only || only.includes(where));
  const [who, where, at] = pick[((n % pick.length) + pick.length) % pick.length];
  return <Critter who={who} where={where} at={at} />;
}
