// Tiddle avatars: goofy busts of the Testiddle duckling in costumes. The body is tucked into a
// circle and everything above it (hats, props, flying papers) breaks out over the edge.

const LINE = "#2e5f74";
const MINT = "#b8ecdf", MINT_S = "#8ed6c3", BELLY = "#ecfbf6", BEAK = "#f6b660", BEAK_S = "#e09444", TONGUE = "#ee7f8c", BLUSH = "#f7aec0";
const s = { stroke: LINE, strokeWidth: 1.2, strokeLinejoin: "round", strokeLinecap: "round" };
const thin = { stroke: LINE, strokeWidth: 0.8, strokeLinecap: "round", fill: "none" };
const shine = { fill: "#fff", opacity: 0.8 };

const BODY = "M70 34 C95 34 107 52 105 74 C113 86 113 114 102 134 H38 C27 114 27 86 35 74 C33 52 45 34 70 34 Z";

function Body() {
  return (
    <g>
      <path d={BODY} fill={MINT} {...s} />
      <path d="M96 52 C104 64 104 84 100 98 C108 106 109 120 102 134 H92 C102 116 100 96 94 84 C99 72 99 62 96 52 Z" fill={MINT_S} />
      <path d="M70 92 C86 92 96 102 95 116 C94 128 82 134 70 134 C58 134 46 128 45 116 C44 102 54 92 70 92 Z" fill={BELLY} />
      <path d="M58 104 Q61 102 64 104 M74 106 Q77 104 80 106 M64 114 Q67 112 70 114" {...thin} opacity=".35" />
      <path d="M44 52 C48 45 55 40.6 62 39.6" stroke="#fff" strokeWidth="2.4" fill="none" opacity=".75" strokeLinecap="round" />
      <path d="M50 92 C47 96 46 99 46 102" {...thin} opacity=".4" />
    </g>
  );
}
const Tuft = () => <path d="M68.6 35 C65 25 75 22 73 30" fill="none" {...s} />;
const Cheeks = ({ y = 78 }) => <><ellipse cx="45" cy={y} rx="6" ry="3.2" fill={BLUSH} opacity=".8" /><ellipse cx="95" cy={y} rx="6" ry="3.2" fill={BLUSH} opacity=".8" /></>;

function Eye({ x, y = 62, r = 9, px = 0, py = 0, pupil = 4.6 }) {
  return <g {...s}><ellipse cx={x} cy={y} rx={r} ry={r * 1.08} fill="#fff" /><circle cx={x + px} cy={y + py} r={pupil} fill="#283a4b" stroke="none" /><circle cx={x + px + pupil * .4} cy={y + py - pupil * .45} r={pupil * .38} fill="#fff" stroke="none" /></g>;
}
const Closed = ({ x, y = 62, up }) => <path d={up ? `M${x - 7} ${y + 2} Q${x} ${y - 6} ${x + 7} ${y + 2}` : `M${x - 7} ${y - 1} Q${x} ${y + 5} ${x + 7} ${y - 1}`} fill="none" {...s} strokeWidth="1.8" />;

/** An open laughing beak with a tongue. w scales the width. */
function Grin({ y = 76, w = 1, tongue = true }) {
  return (
    <g {...s} stroke={BEAK_S}>
      <path d={`M${70 - 13 * w} ${y} Q70 ${y - 5} ${70 + 13 * w} ${y} Q${70 + 10 * w} ${y + 18} 70 ${y + 18} Q${70 - 10 * w} ${y + 18} ${70 - 13 * w} ${y} Z`} fill="#8a3b48" />
      {tongue && <path d={`M${70 - 7 * w} ${y + 13} Q70 ${y + 6} ${70 + 7 * w} ${y + 13} Q${70 + 5 * w} ${y + 17.6} 70 ${y + 17.6} Q${70 - 5 * w} ${y + 17.6} ${70 - 7 * w} ${y + 13} Z`} fill={TONGUE} stroke="none" />}
      <path d={`M${70 - 14 * w} ${y} Q70 ${y - 7} ${70 + 14 * w} ${y} Q70 ${y + 5} ${70 - 14 * w} ${y} Z`} fill={BEAK} />
      <path d={`M${70 - 6 * w} ${y - 2} Q70 ${y - 3.6} ${70 + 6 * w} ${y - 2}`} stroke="#fff" strokeWidth="1" opacity=".7" />
    </g>
  );
}
const SmallBeak = ({ y = 76, wobble }) => <g {...s} stroke={BEAK_S}><path d={wobble ? `M61 ${y} Q65.5 ${y - 3} 70 ${y} Q74.5 ${y + 3} 79 ${y} Q74 ${y + 9} 70 ${y + 9} Q66 ${y + 9} 61 ${y} Z` : `M61 ${y} Q70 ${y - 4} 79 ${y} Q72 ${y + 8} 70 ${y + 8} Q68 ${y + 8} 61 ${y} Z`} fill={BEAK} /></g>;

function Frame({ id, children, props }) {
  return (
    <svg viewBox="0 0 140 140" width="100%" height="100%" role="img" aria-hidden="true">
      <defs><clipPath id={`tav-${id}`}><circle cx="70" cy="82" r="50" /><rect x="-20" y="-20" width="180" height="102" /></clipPath></defs>
      <circle cx="70" cy="82" r="50" fill="#eaf4fd" stroke="#4f86c9" strokeWidth="1.3" />
      <g clipPath={`url(#tav-${id})`}>{children}</g>
      {props}
    </svg>
  );
}

const AV = {
  cool: {
    name: "Cool", body: <><Body /><Tuft /><Cheeks />
      <g {...s} stroke="#1f2a36"><path d="M35 58 H105" strokeWidth="2" /><path d="M39 57 C39 52 64 52 66 57 C66 68 60 72 52 72 C44 72 39 67 39 57 Z" fill="#283444" /><path d="M74 57 C76 52 101 52 101 57 C101 67 96 72 88 72 C80 72 74 68 74 57 Z" fill="#283444" /></g>
      <path d="M44 57 L50 66 M48 57 L53 64 M79 57 L85 66 M83 57 L88 64" stroke="#7fb8e8" strokeWidth="1.4" opacity=".8" />
      <Grin y={78} w={1.1} /></>,
    props: <g>
      <g transform="translate(108 92) rotate(18)" {...s}><rect x="-2" y="2" width="4" height="22" rx="2" fill="#e8c08a" /><path d="M-9 -24 C-9 -32 9 -32 9 -24 V4 C9 7 -9 7 -9 4 Z" fill="#f59ab3" /><path d="M-9 -12 H9 V4 C9 7 -9 7 -9 4 Z" fill="#a8d8f5" /><path d="M9 -20 C12 -20 12 -16 9 -15" fill="#fff" /><path d="M-5 -26 V-14" stroke="#fff" strokeWidth="1.6" opacity=".7" /><path d="M-6 6 C-6 10 -3 10 -3 7" fill="#f59ab3" /></g>
      <path d="M100 98 C104 100 106 104 104 108" fill={MINT} {...s} />
      <g {...s} fill="#fff"><path d="M18 40 l2 -6 2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 Z" fill="#ffe08a" /></g>
    </g>,
  },
  panic: {
    name: "Exam panic", body: <><Body /><Tuft /><Eye x={56} r={10.4} pupil={2.6} /><Eye x={84} r={10.4} pupil={2.6} /><path d="M45 47 L58 51 M95 47 L82 51" {...s} /><Cheeks y={80} /><SmallBeak y={80} wobble />
      <path d="M100 50 C102 54 103 57 101 60 C99 62 96 60 97 56 C98 54 99 52 100 50 Z" fill="#9ed2f5" {...s} strokeWidth=".9" />
      <path d="M38 52 C36 56 35 59 37 62 C39 64 42 62 41 58 C40 56 39 54 38 52 Z" fill="#9ed2f5" {...s} strokeWidth=".9" /></>,
    props: <g {...s}>
      {[[96, 18, 18], [113, 38, 34], [22, 22, -22]].map(([x, y, r], i) => <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}><rect x="-10" y="-13" width="20" height="26" rx="1.2" fill="#fffdf6" /><path d="M-6 -7 H6 M-6 -3 H6 M-6 1 H3" {...thin} opacity=".6" /><text x="2" y="10" fontFamily="Patrick Hand, cursive" fontSize="8" fill="#d9534f" stroke="none">{["?", "x", "!"][i]}</text></g>)}
      <g transform="translate(40 30) rotate(-38)"><rect x="-2.6" y="-16" width="5.2" height="28" rx="1" fill="#f5c45a" /><path d="M-2.6 12 L0 18 L2.6 12 Z" fill="#f3d9b8" /><path d="M-.9 16 L0 18 L.9 16 Z" fill={LINE} /><rect x="-2.6" y="-20" width="5.2" height="4" fill="#f59ab3" /></g>
      <path d="M14 70 C10 66 10 62 14 60 M126 70 C130 66 130 62 126 60" {...thin} strokeWidth="1.2" />
    </g>,
  },
  astronaut: {
    name: "Astronaut", body: <><path d="M30 120 C30 100 42 92 70 92 C98 92 110 100 110 120 V140 H30 Z" fill="#f2f5f8" {...s} /><path d="M54 108 H86 V122 H54 Z" fill="#dfe6ee" {...s} strokeWidth="1" /><circle cx="61" cy="115" r="2.6" fill="#f26b6b" /><circle cx="70" cy="115" r="2.6" fill="#f5c45a" /><circle cx="79" cy="115" r="2.6" fill="#6fb3ea" />
      <path d="M70 38 C92 38 102 54 101 72 C100 86 88 94 70 94 C52 94 40 86 39 72 C38 54 48 38 70 38 Z" fill={MINT} {...s} /><Tuft /><Eye x={58} y={62} r={8.6} px={1} /><Eye x={82} y={62} r={8.6} px={1} /><Cheeks y={76} /><Grin y={76} w={.9} /></>,
    props: <g {...s}>
      <circle cx="70" cy="64" r="40" fill="#d8ecfb" fillOpacity=".35" stroke="#7fa3c4" strokeWidth="1.4" />
      <path d="M40 46 C46 34 58 27 70 26" stroke="#fff" strokeWidth="3.4" fill="none" opacity=".85" />
      <path d="M96 40 C98 44 99 48 99 52" stroke="#fff" strokeWidth="2" fill="none" opacity=".7" />
      <g transform="translate(118 30)"><circle r="9" fill="#f6b660" /><path d="M-15 4 C-8 -2 8 -4 15 -6" fill="none" stroke="#c98a3a" strokeWidth="1.6" /><path d="M-3 -5 C-1 -6 1 -6 3 -5" {...thin} stroke="#fff" opacity=".8" /></g>
      <path d="M20 26 l1.6 -5 1.6 5 5 1.6 -5 1.6 -1.6 5 -1.6 -5 -5 -1.6 Z" fill="#ffe08a" />
      <circle cx="30" cy="44" r="1.6" fill="#ffe08a" /><circle cx="112" cy="58" r="1.2" fill="#ffe08a" />
    </g>,
  },
  chef: {
    name: "Chef", body: <><Body /><Closed x={56} up /><Closed x={84} up /><Cheeks y={74} /><g {...s} stroke={BEAK_S}><path d="M59 76 Q70 71 81 76 Q76 86 70 86 Q64 86 59 76 Z" fill={BEAK} /><path d="M66 82 Q70 79 74 82 Q73 90 70 92 Q67 90 66 82 Z" fill={TONGUE} stroke="#c95b69" /></g>
      <path d="M48 98 H92 V134 H48 Z" fill="#fff" {...s} /><path d="M48 98 L40 88 M92 98 L100 88" {...s} /><rect x="62" y="110" width="16" height="10" rx="2" fill="#f4f6f8" {...s} strokeWidth=".9" /><path d="M48 102 H92" stroke="#f26b6b" strokeWidth="2" /></>,
    props: <g {...s}>
      <path d="M44 40 C34 30 42 12 56 18 C58 4 82 4 84 18 C98 12 106 30 96 40 Z" fill="#fff" />
      <path d="M46 36 H94 V46 C82 49 58 49 46 46 Z" fill="#f4f6f8" />
      <path d="M58 22 C59 28 59 33 58 37 M70 15 V37 M82 22 C81 28 81 33 82 37" {...thin} opacity=".45" />
      <g transform="translate(96 74) rotate(-35)"><rect x="-2.4" y="0" width="4.8" height="38" rx="2" fill="#d9a066" /><ellipse cx="0" cy="-4" rx="7.4" ry="9" fill="#e7b57d" /><ellipse cx="0" cy="-5" rx="4.6" ry="5.6" fill="#f08a5d" stroke="none" /></g>
      <path d="M86 62 C82 56 88 52 84 46 M92 60 C88 54 94 50 90 44" {...thin} strokeWidth="1" opacity=".6" />
    </g>,
  },
  detective: {
    name: "Detective", body: <><Body /><Tuft /><Eye x={56} r={7.6} px={1} /><path d="M47 52 Q55 47 63 51" {...s} fill="none" /><Cheeks y={78} /><SmallBeak y={78} />
      <path d="M48 98 C56 104 84 104 92 98 L96 134 H44 Z" fill="#c9a274" {...s} /><path d="M70 100 V134" {...thin} /><circle cx="70" cy="112" r="1.6" fill={LINE} /><circle cx="70" cy="122" r="1.6" fill={LINE} /></>,
    props: <g {...s}>
      <path d="M38 50 C36 34 52 22 70 22 C88 22 104 34 102 50 C92 46 48 46 38 50 Z" fill="#b98a5a" />
      <path d="M30 52 C38 46 54 44 70 44 C86 44 102 46 110 52 C98 54 42 54 30 52 Z" fill="#a37548" />
      <path d="M50 30 L56 44 M70 23 V44 M90 30 L84 44" {...thin} opacity=".4" />
      <path d="M44 36 C40 34 34 36 32 40 M96 36 C100 34 106 36 108 40" {...thin} />
      <circle cx="70" cy="22" r="2.4" fill="#a37548" />
      <g><path d="M96 74 L118 104" stroke="#7a5230" strokeWidth="5" /><circle cx="86" cy="62" r="17" fill="#e6f4fd" fillOpacity=".55" stroke="#4b5b6b" strokeWidth="3" /><ellipse cx="86" cy="62" rx="12" ry="13" fill="#fff" {...s} /><circle cx="87" cy="64" r="7" fill="#283a4b" /><circle cx="90" cy="60.6" r="2.6" fill="#fff" /><path d="M75 52 C78 48 84 46 89 47" stroke="#fff" strokeWidth="2" fill="none" opacity=".8" /></g>
    </g>,
  },
  sleepy: {
    name: "Sleepy", body: <><Body /><Closed x={56} y={64} /><Closed x={84} y={64} /><Cheeks y={76} /><SmallBeak y={78} />
      <circle cx="82" cy="88" r="5.6" fill="#d4ecfb" fillOpacity=".75" {...s} strokeWidth=".9" /><path d="M80 86 C81 85 82.4 84.6 83.6 85" stroke="#fff" strokeWidth=".9" />
      <path d="M44 96 C52 92 60 94 64 100 C70 108 66 120 56 122 C46 124 40 116 40 108 C40 102 41 98 44 96 Z" fill="#f7d79b" {...s} /><path d="M48 100 C46 106 46 112 48 116" {...thin} opacity=".5" /></>,
    props: <g {...s}>
      <path d="M40 54 C38 30 64 20 84 28 C96 32 106 38 114 52 C106 50 98 48 96 50 C84 48 52 50 40 54 Z" fill="#a5bff3" />
      <path d="M40 54 C52 49 86 47 98 50 L98 57 C86 54 52 56 40 60 Z" fill="#fff" />
      <path d="M58 32 C64 36 66 42 64 48 M76 28 C82 32 84 40 82 48" {...thin} stroke="#fff" opacity=".7" />
      <circle cx="117" cy="56" r="6" fill="#fff" />
      <text x="104" y="24" fontFamily="Patrick Hand, cursive" fontSize="15" fill="#6f87c4" stroke="none">z</text><text x="118" y="14" fontFamily="Patrick Hand, cursive" fontSize="10" fill="#6f87c4" stroke="none">z</text>
    </g>,
  },
  superhero: {
    name: "Superhero", body: <><Body /><Tuft /><path d="M38 56 C48 50 92 50 102 56 C102 66 96 70 90 70 C84 70 80 66 70 66 C60 66 56 70 50 70 C44 70 38 66 38 56 Z" fill="#e5525a" {...s} /><Eye x={56} y={60} r={6.6} px={1} pupil={3.6} /><Eye x={84} y={60} r={6.6} px={1} pupil={3.6} /><Cheeks y={78} /><Grin y={78} w={1} />
      <path d="M50 100 L70 92 L90 100 L84 118 L70 124 L56 118 Z" fill="#f5c45a" {...s} /><text x="70" y="114" textAnchor="middle" fontFamily="Patrick Hand, cursive" fontSize="14" fill="#c0392b" stroke="none">T</text></>,
    props: <g {...s}>
      <path d="M34 82 C18 90 10 108 6 124 C18 118 26 120 32 112 C34 100 36 92 40 86 Z" fill="#e5525a" />
      <path d="M106 82 C122 90 130 108 134 124 C122 118 114 120 108 112 C106 100 104 92 100 86 Z" fill="#e5525a" />
      <path d="M12 116 C18 112 24 110 30 110 M128 116 C122 112 116 110 110 110" {...thin} stroke="#fff" opacity=".6" />
      <path d="M100 70 C110 60 114 46 110 36 C116 32 122 36 120 44 C118 54 112 66 104 76 Z" fill={MINT} />
      <path d="M116 30 C122 22 128 22 132 26" {...thin} strokeWidth="1.2" /><path d="M110 24 C112 18 116 14 120 14" {...thin} strokeWidth="1.2" />
    </g>,
  },
  bookworm: {
    name: "Bookworm", body: <><Body /><g {...s}><circle cx="56" cy="64" r="11" fill="#fff" fillOpacity=".4" stroke="#7a5230" strokeWidth="2" /><circle cx="84" cy="64" r="11" fill="#fff" fillOpacity=".4" stroke="#7a5230" strokeWidth="2" /><path d="M67 63 Q70 60 73 63" fill="none" stroke="#7a5230" strokeWidth="2" /></g><Eye x={56} y={64} r={7} px={-1} pupil={3.8} /><Eye x={84} y={64} r={7} px={-1} pupil={3.8} /><Cheeks y={80} /><Grin y={80} w={.85} tongue={false} /></>,
    props: <g {...s}>
      <rect x="40" y="34" width="60" height="10" rx="2" fill="#86aee6" /><path d="M44 37 H96" {...thin} stroke="#fff" opacity=".7" />
      <rect x="45" y="24" width="52" height="10" rx="2" fill="#ec8d9b" transform="rotate(-4 70 29)" /><rect x="58" y="25.6" width="18" height="5" rx=".8" fill="#fbe3c7" strokeWidth=".7" transform="rotate(-4 70 29)" />
      <rect x="42" y="14" width="56" height="10" rx="2" fill="#a9dcc0" transform="rotate(3 70 19)" /><path d="M48 17 V23 M92 17 V23" {...thin} transform="rotate(3 70 19)" />
      <path d="M66 14 C64 6 70 2 74 6 C76 2 82 4 80 10" fill="#f6b8c4" />
      <circle cx="71.6" cy="6.4" r="1" fill={LINE} /><circle cx="76.4" cy="5.8" r="1" fill={LINE} /><path d="M72 9 Q74 10.4 76 9" {...thin} />
      <path d="M86 4 C88 0 92 0 93 3" {...thin} /><path d="M24 34 l1.4 -4 1.4 4 4 1.4 -4 1.4 -1.4 4 -1.4 -4 -4 -1.4 Z" fill="#ffe08a" />
    </g>,
  },
};
export const TAV_IDS = Object.keys(AV);
export const TAV_NAMES = Object.fromEntries(TAV_IDS.map((k) => [k, AV[k].name]));

export function TiddleAv({ id = "cool", size = 100 }) {
  const a = AV[id] || AV.cool;
  return <span className="tav" style={{ width: size, height: size }} title={`Tiddle, ${a.name}`}><Frame id={id} props={a.props}>{a.body}</Frame></span>;
}
