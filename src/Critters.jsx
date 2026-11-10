// Little characters that hang about on the notes cards: Tiddle clinging to the top edge, Sprout
// sitting on a corner, Inky peeking round the side and Wiggle dangling underneath. Same thin line
// and soft fills as Tiddle.

const LINE = "#2e5f74";
const s = { stroke: LINE, strokeWidth: 1.3, strokeLinejoin: "round", strokeLinecap: "round" };
const eye = (x, y, r = 4.4, look = 0) => <g><ellipse cx={x} cy={y} rx={r} ry={r * 1.1} fill="#fff" {...s} strokeWidth="1.1" /><circle cx={x + look} cy={y + .6} r={r * .55} fill="#283a4b" /><circle cx={x + look + r * .25} cy={y - r * .2} r={r * .2} fill="#fff" /></g>;

/** Tiddle hanging on to a top edge: the edge runs along y = 64 of the drawing. */
function TiddleCling() {
  return (
    <svg viewBox="0 0 110 76" width="110" height="76" aria-hidden="true">
      <defs><clipPath id="tc-clip"><rect x="0" y="0" width="110" height="64" /></clipPath></defs>
      <g clipPath="url(#tc-clip)">
        <path d="M55 14 C75 14 84 28 83 44 C88 54 86 66 80 74 H30 C24 66 22 54 27 44 C26 28 35 14 55 14 Z" fill="#b8ecdf" {...s} />
        <path d="M77 30 C82 40 82 52 79 62 L74 64 C78 54 78 42 74 34 Z" fill="#8ed6c3" />
        <path d="M34 26 C37 21 42 18 47 17" stroke="#fff" strokeWidth="2" fill="none" opacity=".7" strokeLinecap="round" />
      </g>
      {eye(46, 38, 6.2, 0)}{eye(64, 38, 6.2, 0)}
      <ellipse cx="37" cy="48" rx="4" ry="2.2" fill="#f7aec0" opacity=".85" /><ellipse cx="73" cy="48" rx="4" ry="2.2" fill="#f7aec0" opacity=".85" />
      <path d="M49 47 Q55 44.5 61 47 Q57 53 55 53 Q53 53 49 47 Z" fill="#f6b660" {...s} stroke="#e09444" strokeWidth="1" />
      <path d="M53 15 C51 8 58 6 57 12" fill="none" {...s} />
      <g {...s} stroke="#33465c"><path d="M42 12.8 V16 C48 18.4 62 18.4 68 16 V12.8" fill="#4a5f78" /><path d="M36 9.6 L55 3 L74 9.6 L55 16.2 Z" fill="#53698a" /><path d="M55 9.6 C61 10.6 68 12 70.6 14 V20" fill="none" stroke="#e9a54b" strokeWidth="1.1" /></g>
      {/* wings hooked over the edge */}
      <path d="M26 60 C20 60 17 64 19 68 C21 72 28 72 33 69 C35 67 35 63 32 61 Z" fill="#b8ecdf" {...s} />
      <path d="M22 68 L23 72 M26 69 L27 73 M30 68 L31 72" {...s} strokeWidth="1" />
      <path d="M84 60 C90 60 93 64 91 68 C89 72 82 72 77 69 C75 67 75 63 78 61 Z" fill="#b8ecdf" {...s} />
      <path d="M88 68 L87 72 M84 69 L83 73 M80 68 L79 72" {...s} strokeWidth="1" />
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

const CAST = { tiddle: TiddleCling, sprout: Sprout, inky: Inky, wiggle: Wiggle };

/** One critter, placed by its CSS class: top (clinging), corner (sitting), side (peeking) or under (dangling). */
export function Critter({ who, where, at = "70%" }) {
  const C = CAST[who];
  return <span className={`critter critter-${where}`} style={{ "--at": at }} aria-hidden="true"><C /></span>;
}

/** Which critters visit a notes page, so different pages get different company. */
export function castFor(n) {
  const sets = [
    { head: ["tiddle", "top", "72%"], note: ["inky", "side", "34%"], keys: ["wiggle", "under", "78%"] },
    { head: ["sprout", "corner", "88%"], note: ["tiddle", "top", "64%"], keys: ["inky", "side", "40%"] },
    { head: ["tiddle", "top", "18%"], note: ["sprout", "corner", "92%"], keys: ["wiggle", "under", "22%"] },
    { head: ["inky", "side", "50%"], note: ["wiggle", "under", "70%"], keys: ["sprout", "corner", "90%"] },
  ];
  return sets[n % sets.length];
}
