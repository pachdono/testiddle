// Tiddle: Testiddle's mascot. A mint duckling in a mortarboard, drawn with a soft outline,
// in a few poses. Dwiddle has the yellow duck; this is its exam-season cousin.

const INK = "#24364a", MINT = "#86dcc6", MINT_2 = "#c8f2e6", BEAK = "#f5a43c", BLUSH = "#f7a8bb";

function Cap() {
  return (
    <g>
      <path d="M44 20 L60 13 L78 20 L60 27 Z" fill={INK} stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M49 22.5 V28 C55 31 65 31 71 28 V22.5" fill={INK} />
      <path d="M78 20 C80 26 80 30 79 34" stroke={BEAK} strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <circle cx="79" cy="35.5" r="2.4" fill={BEAK} />
    </g>
  );
}

function Face({ look = 0, blink = false, happy = false }) {
  return (
    <g>
      {blink || happy
        ? <><path d="M41 47 Q48 41 55 47" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" /><path d="M65 47 Q72 41 79 47" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" /></>
        : <>
          <circle cx="48" cy="46" r="9.5" fill="#fff" stroke={INK} strokeWidth="2.6" />
          <circle cx="72" cy="46" r="9.5" fill="#fff" stroke={INK} strokeWidth="2.6" />
          <circle cx={49 + look} cy="45" r="5" fill={INK} /><circle cx={73 + look} cy="45" r="5" fill={INK} />
          <circle cx={51 + look} cy="42.8" r="1.8" fill="#fff" /><circle cx={75 + look} cy="42.8" r="1.8" fill="#fff" />
        </>}
      <ellipse cx="38" cy="58" rx="5.5" ry="3.2" fill={BLUSH} opacity=".75" />
      <ellipse cx="82" cy="58" rx="5.5" ry="3.2" fill={BLUSH} opacity=".75" />
      <path d={happy ? "M53 56 Q60 53 67 56 Q64 66 60 66 Q56 66 53 56 Z" : "M53 56 Q60 53 67 56 Q61 63 60 63 Q59 63 53 56 Z"} fill={BEAK} stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
      {happy && <path d="M56 60 Q60 62 64 60" stroke="#e0606f" strokeWidth="2" fill="none" strokeLinecap="round" />}
    </g>
  );
}

const BODY = "M60 22 C80 22 90 35 88 50 C99 59 98 91 79 98 C67 102 53 102 41 98 C22 91 21 59 32 50 C30 35 40 22 60 22 Z";

/**
 * pose: "stand" (default), "wave", "read", "cheer", "sit" (feet over an edge) or "think".
 */
export function Mascot({ size = 120, pose = "stand", className = "", title = "Tiddle, the Testiddle duckling" }) {
  const wingL = { stand: "M32 66 C21 69 21 83 33 84", wave: "M32 66 C21 69 21 83 33 84", read: "M33 70 C26 76 33 86 44 84", cheer: "M32 64 C20 56 18 42 26 38", sit: "M32 66 C21 69 21 83 33 84", think: "M32 66 C21 69 21 83 33 84" }[pose];
  const wingR = { stand: "M88 66 C99 69 99 83 87 84", wave: "M88 62 C100 54 104 40 98 34", read: "M87 70 C94 76 87 86 76 84", cheer: "M88 64 C100 56 102 42 94 38", sit: "M88 66 C99 69 99 83 87 84", think: "M86 70 C92 66 86 58 78 62" }[pose];
  return (
    <svg className={"tiddle " + className} width={size} height={size} viewBox="0 0 120 124" role="img" aria-label={title}>
      {pose === "cheer" && <g fill={BEAK}><path d="M16 22 l2 5 5 1 -5 2 -2 5 -2 -5 -5 -2 5 -1 Z" /><path d="M104 18 l1.6 4 4 .8 -4 1.6 -1.6 4 -1.6 -4 -4 -1.6 4 -.8 Z" /></g>}
      {pose === "think" && <g fill="none" stroke={INK} strokeWidth="2"><circle cx="100" cy="24" r="3" /><circle cx="108" cy="14" r="4.5" /></g>}
      {/* feet */}
      {pose === "sit"
        ? <g fill={BEAK} stroke={INK} strokeWidth="2.4" strokeLinejoin="round"><path d="M47 98 C45 108 41 112 46 113 C51 114 53 106 52 98 Z" /><path d="M68 98 C69 106 71 114 76 113 C81 112 75 108 73 98 Z" /></g>
        : <g fill={BEAK} stroke={INK} strokeWidth="2.4"><ellipse cx="49" cy="101" rx="8" ry="4" /><ellipse cx="71" cy="101" rx="8" ry="4" /></g>}
      <path d={BODY} fill={MINT} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <ellipse cx="60" cy="80" rx="20" ry="15" fill={MINT_2} />
      <path d="M58 23 C55 13 65 11 62 19" fill="none" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
      <Face look={pose === "read" ? 0 : pose === "think" ? 2 : 0} happy={pose === "cheer" || pose === "wave"} />
      {pose === "read" && <g stroke={INK} strokeWidth="2.4" strokeLinejoin="round"><path d="M40 78 L60 74 L80 78 L80 94 L60 90 L40 94 Z" fill="#fff" /><path d="M60 74 V90" /><path d="M46 81 L56 79 M46 86 L56 84 M64 79 L74 81 M64 84 L74 86" strokeWidth="1.6" /></g>}
      <path d={wingL} fill={MINT} stroke={INK} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d={wingR} fill={MINT} stroke={INK} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {pose === "think" && <path d="M78 62 Q74 60 72 63" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" />}
      <Cap />
    </svg>
  );
}
