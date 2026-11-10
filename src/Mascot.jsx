// Tiddle: Testiddle's mascot, a mint duckling in a mortarboard. Drawn with a thin teal line and
// soft fills, in a few poses, and with outfits for the avatars.

const LINE = "#2e6b72", MINT = "#a8e6d6", MINT_D = "#86d3bf", BELLY = "#e4f8f1", BEAK = "#f3b25e", BEAK_D = "#dd9440", BLUSH = "#f5b3c2", CAP = "#33465c";
const st = { stroke: LINE, strokeWidth: 1.3, strokeLinejoin: "round", strokeLinecap: "round" };
const fine = { stroke: LINE, strokeWidth: 0.8, strokeLinecap: "round", fill: "none", opacity: 0.55 };

function Cap() {
  return (
    <g {...st} stroke={CAP}>
      <path d="M48 26.6 V31 C54.6 34 65.4 34 72 31 V26.6" fill="#4a5f78" />
      <path d="M41 21.6 L60 13.4 L79.6 21.6 L60 29.8 Z" fill="#53698a" />
      <path d="M45 21.4 L60 15.2 L75 21.4" {...fine} stroke="#fff" opacity=".35" />
      <path d="M60 21.6 C66 22.6 74 24 77.6 26.4 V35" fill="none" stroke="#e9a54b" strokeWidth="1.2" />
      <path d="M76.2 35 L79 35 L80 41 L75.2 41 Z" fill="#f2c26b" stroke="#c9873a" strokeWidth=".8" />
      <circle cx="60" cy="21.6" r="1.4" fill="#e9a54b" stroke="none" />
    </g>
  );
}

function Eyes({ look = 0, happy, closed }) {
  if (happy || closed) return <g fill="none" {...st} strokeWidth="1.6"><path d={closed ? "M41 47 Q48 50 55 47" : "M41.6 47.6 Q48 41.4 54.4 47.6"} /><path d={closed ? "M65 47 Q72 50 79 47" : "M65.6 47.6 Q72 41.4 78.4 47.6"} /></g>;
  return (
    <g {...st}>
      <ellipse cx="48" cy="46" rx="8.2" ry="9" fill="#fff" />
      <ellipse cx="72" cy="46" rx="8.2" ry="9" fill="#fff" />
      <circle cx={49 + look} cy="46.6" r="4.4" fill="#2b3e4f" stroke="none" /><circle cx={73 + look} cy="46.6" r="4.4" fill="#2b3e4f" stroke="none" />
      <circle cx={50.6 + look} cy="44.4" r="1.6" fill="#fff" stroke="none" /><circle cx={74.6 + look} cy="44.4" r="1.6" fill="#fff" stroke="none" />
      <circle cx={47.6 + look} cy="48.6" r=".7" fill="#fff" stroke="none" /><circle cx={71.6 + look} cy="48.6" r=".7" fill="#fff" stroke="none" />
    </g>
  );
}

function Beak({ open }) {
  return open
    ? <g {...st} stroke={BEAK_D}><path d="M52.6 56.6 Q60 53.4 67.4 56.6 Q65 66.4 60 66.6 Q55 66.4 52.6 56.6 Z" fill={BEAK} /><path d="M55 60.4 Q60 63.6 65 60.4 Q63 65.6 60 65.6 Q57 65.6 55 60.4 Z" fill="#e2747f" stroke="none" /><path d="M54 57.6 Q60 55.4 66 57.6" fill="none" strokeWidth=".8" opacity=".6" /></g>
    : <g {...st} stroke={BEAK_D}><path d="M52.6 56.6 Q60 53.2 67.4 56.6 Q62 63.6 60 63.6 Q58 63.6 52.6 56.6 Z" fill={BEAK} /><path d="M56 56.4 Q60 55.4 64 56.4" fill="none" stroke="#fff" strokeWidth=".9" opacity=".7" /></g>;
}

const BODY = "M60 23 C79.6 23 89.4 35.4 87.6 50.6 C98.4 59.4 97.4 90.6 78.6 97.6 C67 101.4 53 101.4 41.4 97.6 C22.6 90.6 21.6 59.4 32.4 50.6 C30.6 35.4 40.4 23 60 23 Z";

/** Things Tiddle can wear for an avatar. Each is drawn in the same thin line. */
const OUTFITS = {
  graduate: null,
  scientist: { front: <g {...st}><path d="M33 40 C40 35 80 35 87 40" fill="none" stroke="#7a8794" strokeWidth="2.4" /><circle cx="48" cy="45" r="10.4" fill="#d9f0fb" fillOpacity=".55" stroke="#5c6f82" strokeWidth="1.6" /><circle cx="72" cy="45" r="10.4" fill="#d9f0fb" fillOpacity=".55" stroke="#5c6f82" strokeWidth="1.6" /><path d="M43 40.6 C44.4 39 46.4 38.4 48 38.6 M67 40.6 C68.4 39 70.4 38.4 72 38.6" stroke="#fff" strokeWidth="1.2" fill="none" /><g transform="translate(86 66) rotate(18)"><path d="M-3 -14 H3 V-5 L8 6 C9 9 7 11 4 11 H-4 C-7 11 -9 9 -8 6 L-3 -5 Z" fill="#f4fbff" /><path d="M-7 3 H7 L8 6 C9 9 7 11 4 11 H-4 C-7 11 -9 9 -8 6 Z" fill="#c69cf0" stroke="none" /><circle cx="-1" cy="6" r="1.2" fill="#fff" stroke="none" /></g></g>, cap: false },
  chef: { back: null, front: <g {...st}><path d="M40 30 C34 20 44 10 52 15 C55 6 67 6 69 15 C77 10 87 20 80 30 Z" fill="#fff" /><path d="M42 27 H78 V33 C70 35 50 35 42 33 Z" fill="#f4f6f8" /><path d="M50 18 C51 22 51 25 50 28 M60 13 V28 M70 18 C69 22 69 25 70 28" {...fine} /><path d="M47 70 H73 V92 C67 95.6 53 95.6 47 92 Z" fill="#fff" /><path d="M47 70 L41 64 M73 70 L79 64" strokeWidth="1" /><rect x="54" y="78" width="12" height="7" rx="1.4" fill="#f4f6f8" strokeWidth=".9" /><path d="M47 73 H73" stroke="#f1625e" strokeWidth="1.6" /></g>, cap: false },
  astronaut: { back: <g {...st}><circle cx="60" cy="50" r="36" fill="#e8f3fb" fillOpacity=".55" stroke="#8aa6bf" strokeWidth="1.6" /><path d="M36 30 C42 22 52 18 60 18" stroke="#fff" strokeWidth="3" fill="none" opacity=".8" /></g>, front: <g {...st}><rect x="44" y="72" width="32" height="14" rx="4" fill="#e9eef3" stroke="#8aa6bf" /><circle cx="52" cy="79" r="2.4" fill="#f1625e" stroke="none" /><circle cx="60" cy="79" r="2.4" fill="#f3c54a" stroke="none" /><circle cx="68" cy="79" r="2.4" fill="#5aa9e6" stroke="none" /></g>, cap: false },
  painter: { front: <g {...st}><path d="M36 30 C34 22 44 16 58 17 C76 18 87 24 84 31 C78 34 44 34 36 30 Z" fill="#e96a7a" /><path d="M60 17 C60 14 61.6 13 62.6 14" fill="none" strokeWidth="1.2" stroke="#b9485a" /><path d="M42 26 C52 23 70 23 80 27" {...fine} stroke="#fff" opacity=".6" /><g transform="translate(83 78) rotate(-14)"><path d="M-12 -8 C-4 -12 10 -10 13 -2 C15 4 9 4 7 6 C5 8 7 11 4 12 C-2 14 -14 8 -14 0 C-14 -4 -13 -6 -12 -8 Z" fill="#f6e1bd" /><circle cx="-6" cy="-3" r="2.2" fill="#e96a7a" stroke="none" /><circle cx="1" cy="-6" r="2.2" fill="#f3c54a" stroke="none" /><circle cx="7" cy="-2" r="2.2" fill="#5aa9e6" stroke="none" /><circle cx="-6" cy="5" r="2.2" fill="#7cc55a" stroke="none" /></g></g>, cap: false },
  footballer: { front: <g {...st}><path d="M38 31 C44 26 76 26 82 31 L80 35 C72 32 48 32 40 35 Z" fill="#f1625e" /><path d="M50 30.6 L54 34 M66 30.6 L62 34" {...fine} stroke="#fff" opacity=".8" /><g transform="translate(86 86)"><circle r="10" fill="#fff" /><path d="M0 -4 L4 -1 L2.6 4 H-2.6 L-4 -1 Z" fill="#33465c" stroke="none" /><path d="M0 -10 V-4 M4 -1 L9.6 -3 M2.6 4 L6 9 M-2.6 4 L-6 9 M-4 -1 L-9.6 -3" {...fine} opacity=".8" /></g></g>, cap: false },
  gardener: { front: <g {...st}><path d="M30 33 C34 22 86 22 90 33 C82 37 38 37 30 33 Z" fill="#e8c27a" /><path d="M42 30 C42 18 78 18 78 30 Z" fill="#f0d395" /><path d="M42 27 C54 25 66 25 78 27" fill="none" stroke="#7cc55a" strokeWidth="2.2" /><path d="M36 32 L40 34 M46 34 L48 36 M72 34 L74 36 M82 32 L80 34" {...fine} /><g transform="translate(84 74) rotate(-10)"><path d="M-6 -10 C-5 -16 2 -17 6 -12 C3 -8 -2 -8 -6 -10 Z" fill="#9ed47a" /><path d="M-1 -10 C-1 -6 -1 -3 0 0" fill="none" stroke="#5f9b44" /><path d="M-9 0 H9 L7 12 H-7 Z" fill="#e3a271" /></g></g>, cap: false },
  sleepy: { front: <g {...st}><path d="M38 30 C38 16 66 10 80 20 C88 26 96 30 98 40 C90 36 84 32 80 30 C66 34 48 34 38 30 Z" fill="#9db8f2" /><circle cx="98" cy="42" r="4.6" fill="#fff" /><path d="M42 28 C54 25 68 25 78 28" {...fine} stroke="#fff" opacity=".6" /><text x="92" y="20" fontFamily="Patrick Hand, cursive" fontSize="11" fill="#7d93c9" stroke="none">z</text><text x="100" y="12" fontFamily="Patrick Hand, cursive" fontSize="8" fill="#7d93c9" stroke="none">z</text></g>, cap: false, closed: true },
};
export const OUTFIT_IDS = Object.keys(OUTFITS);
export const OUTFIT_NAMES = { graduate: "Graduate", scientist: "Scientist", chef: "Chef", astronaut: "Astronaut", painter: "Painter", footballer: "Footballer", gardener: "Gardener", sleepy: "Sleepy" };

/**
 * pose: "stand" (default), "wave", "read", "cheer", "sit" (feet over an edge) or "think".
 * outfit: one of OUTFIT_IDS.
 */
export function Mascot({ size = 120, pose = "stand", outfit = "graduate", className = "", title = "Tiddle, the Testiddle duckling" }) {
  const o = OUTFITS[outfit] || null;
  const wingL = { cheer: "M33 64 C21 56 19 42 27 37 C30 43 32 52 35 60", read: "M34 70 C26 75 32 86 44 84", sit: "M32.4 66 C22 69 21.6 82 33.4 84" }[pose] || "M32.4 66 C22 69 21.6 82 33.4 84";
  const wingR = { wave: "M87 62 C99 55 104 41 97 34 C94 40 91 50 86 57", cheer: "M87 64 C99 56 101 42 93 37 C90 43 88 52 85 60", read: "M86 70 C94 75 88 86 76 84", think: "M86 70 C93 66 87 57 78.6 61.6" }[pose] || "M87.6 66 C98 69 98.4 82 86.6 84";
  return (
    <svg className={"tiddle " + className} width={size} height={size} viewBox="0 0 120 124" role="img" aria-label={title}>
      {pose === "cheer" && <g fill="#f3c54a"><path d="M15 22 l1.6 4 4 .8 -4 1.6 -1.6 4 -1.6 -4 -4 -1.6 4 -.8 Z" /><path d="M104 16 l1.3 3.2 3.2 .7 -3.2 1.3 -1.3 3.2 -1.3 -3.2 -3.2 -1.3 3.2 -.7 Z" /></g>}
      {pose === "think" && <g fill="#fff" {...st} strokeWidth="1"><circle cx="100" cy="25" r="2.6" /><circle cx="108" cy="15" r="4.2" /></g>}
      {o?.back}
      {pose === "sit"
        ? <g fill={BEAK} {...st} stroke={BEAK_D}><path d="M47 97 C45.4 107 41.6 111.6 46.4 112.6 C51.2 113.6 53.4 105.6 52.4 97 Z" /><path d="M67.6 97 C68.6 105.6 70.8 113.6 75.6 112.6 C80.4 111.6 76.6 107 75 97 Z" /></g>
        : <g fill={BEAK} {...st} stroke={BEAK_D}><path d="M41 101.6 C41 97.6 56 97.6 56 101.6 C56 104.4 41 104.4 41 101.6 Z" /><path d="M64 101.6 C64 97.6 79 97.6 79 101.6 C79 104.4 64 104.4 64 101.6 Z" /></g>}
      <path d={BODY} fill={MINT} {...st} />
      <path d="M33.6 78 C35 90 45 97.6 60 98.4 C46 95 38 88 33.6 78 Z" fill={MINT_D} opacity=".7" />
      <path d="M60 64 C73 64 81 72 80 82 C78.6 92 68 96 60 96 C52 96 41.4 92 40 82 C39 72 47 64 60 64 Z" fill={BELLY} />
      <path d="M50 75 Q53 73 56 75 M64 75 Q67 73 70 75 M56 82 Q59 80 62 82" {...fine} opacity=".35" />
      <path d="M58.6 24 C55.6 15 64.6 12.4 62.6 19.6" fill="none" {...st} />
      <path d="M38 34 C42 28.6 48 26 54 25.4" fill="none" stroke="#fff" strokeWidth="2" opacity=".7" strokeLinecap="round" />
      <Eyes look={pose === "think" ? 2 : 0} happy={pose === "cheer" || pose === "wave"} closed={o?.closed} />
      <ellipse cx="37.6" cy="58" rx="5" ry="2.8" fill={BLUSH} opacity=".75" /><ellipse cx="82.4" cy="58" rx="5" ry="2.8" fill={BLUSH} opacity=".75" />
      <Beak open={pose === "cheer" || pose === "wave"} />
      {pose === "read" && <g {...st} stroke="#8a6a45"><path d="M39 77 L60 72.6 L81 77 L81 94 L60 89.6 L39 94 Z" fill="#fffaf0" /><path d="M60 72.6 V89.6" /><path d="M44 80 L55 77.8 M44 84 L55 81.8 M44 88 L52 86.4 M65 77.8 L76 80 M65 81.8 L76 84" {...fine} stroke="#8a6a45" /></g>}
      <path d={wingL} fill={MINT} {...st} />
      <path d={wingR} fill={MINT} {...st} />
      {pose === "think" && <path d="M78.6 61.6 Q74.6 59.6 72.6 62.6" fill="none" {...st} />}
      {o?.front}
      {(!o || o.cap !== false) && <Cap />}
    </svg>
  );
}
