// Tiddle avatars: the Testiddle duckling in costumes, drawn turned three quarters with a tilt, cel
// shading on the far side, a cast shadow and a coloured disc behind, so each one has depth. The body
// sits inside the disc and anything above it (hats, props, flying papers) breaks out over the edge.

const LINE = "#2e5f74";
const MINT = "#bdeee1", MINT_S = "#86d2bd", MINT_D = "#6cbfa8", BELLY = "#eefcf7", BEAK = "#f8be6a", BEAK_S = "#e2903f", TONGUE = "#ef7f8e", BLUSH = "#f7a9bb";
const s = { stroke: LINE, strokeWidth: 1.2, strokeLinejoin: "round", strokeLinecap: "round" };
const thin = { stroke: LINE, strokeWidth: 0.8, strokeLinecap: "round", fill: "none" };

const BODY = "M66 30 C93 28 108 48 107 70 C116 84 115 114 104 142 H34 C26 116 25 88 31 74 C29 50 42 32 66 30 Z";

/** The body facing right: a far side in shadow, a lit near side, belly and wing. */
function Body({ id, coat }) {
  return (
    <g>
      <defs><clipPath id={`b-${id}`}><path d={BODY} /></clipPath>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#d6f7ee" /><stop offset=".55" stopColor={MINT} /><stop offset="1" stopColor={MINT_S} /></linearGradient></defs>
      <path d={BODY} fill={`url(#g-${id})`} />
      <g clipPath={`url(#b-${id})`}>
        <ellipse cx="116" cy="96" rx="24" ry="74" fill={MINT_S} />
        <ellipse cx="124" cy="100" rx="14" ry="70" fill={MINT_D} opacity=".55" />
        <ellipse cx="78" cy="122" rx="25" ry="25" fill={BELLY} />
        <ellipse cx="96" cy="124" rx="9" ry="22" fill="#d5f1e8" />
        <path d="M66 112 Q69 110 72 112 M80 114 Q83 112 86 114 M72 122 Q75 120 78 122" {...thin} opacity=".3" />
        {coat}
      </g>
      <path d={BODY} fill="none" {...s} />
      <path d="M40 56 C44 45 52 38 61 35" stroke="#fff" strokeWidth="2.6" fill="none" opacity=".85" strokeLinecap="round" />
      <ellipse cx="46" cy="48" rx="2.2" ry="3" fill="#fff" opacity=".7" transform="rotate(30 46 48)" />
      <path d="M33 92 C23 101 23 117 33 125 C40 119 42 104 37 94 Z" fill={MINT_S} {...s} />
      <path d="M30 104 C29 110 30 115 32 118" {...thin} opacity=".5" />
    </g>
  );
}
const Tuft = () => <path d="M64 31 C59 20 72 16 70 26 M68 30 C70 23 77 23 75 29" fill="none" {...s} />;
const Cheeks = ({ y = 78 }) => <><ellipse cx="46" cy={y} rx="6.4" ry="3.4" fill={BLUSH} opacity=".85" /><ellipse cx="99" cy={y - 1} rx="3.6" ry="2.8" fill={BLUSH} opacity=".7" /></>;

/** Eyes in perspective: the near one round, the far one narrower. Pupils look towards the turn. */
function Eyes({ y = 62, r = 9.6, px = 1.8, py = 0, pupil = 4.6 }) {
  const eye = (x, rx, ry, p) => <g {...s}><ellipse cx={x} cy={y} rx={rx} ry={ry} fill="#fff" /><circle cx={x + px} cy={y + py} r={p} fill="#283a4b" stroke="none" /><circle cx={x + px + p * .4} cy={y + py - p * .45} r={p * .38} fill="#fff" stroke="none" /></g>;
  return <>{eye(60, r, r * 1.06, pupil)}{eye(89, r * .76, r, pupil * .86)}</>;
}
const Closed = ({ y = 62, up }) => <g fill="none" {...s} strokeWidth="1.8">{[[60, 7], [89, 5.4]].map(([x, w]) => <path key={x} d={up ? `M${x - w} ${y + 2} Q${x} ${y - 5} ${x + w} ${y + 2}` : `M${x - w} ${y - 1} Q${x} ${y + 5} ${x + w} ${y - 1}`} />)}</g>;

/** A beak with a lit top and a shaded side, pointing the way Tiddle faces. open shows a mouth. */
function Beak({ y = 74, open = false, tongue = true, small = false }) {
  const k = small ? 0.8 : 1;
  return (
    <g {...s} stroke={BEAK_S} transform={`translate(${80 - 80 * k} ${y - y * k}) scale(${k})`}>
      {open && <path d={`M66 ${y + 2} Q82 ${y + 2} 94 ${y + 1} Q90 ${y + 18} 80 ${y + 19} Q68 ${y + 18} 66 ${y + 2} Z`} fill="#8a3b48" />}
      {open && tongue && <path d={`M71 ${y + 13} Q80 ${y + 7} 89 ${y + 12} Q86 ${y + 18.5} 80 ${y + 18.5} Q73 ${y + 18} 71 ${y + 13} Z`} fill={TONGUE} stroke="none" />}
      {open && <path d={`M69 ${y + 17} Q80 ${y + 23} 91 ${y + 16} Q88 ${y + 22} 80 ${y + 23} Q72 ${y + 22} 69 ${y + 17} Z`} fill={BEAK_S} />}
      <path d={`M66 ${y - 2} Q81 ${y - 9} 98 ${y} Q84 ${y + 6} 66 ${y + 2} Z`} fill={BEAK} />
      <path d={`M66 ${y + 2} Q84 ${y + 6} 98 ${y} Q92 ${y + 7} 80 ${y + 8} Q70 ${y + 7} 66 ${y + 2} Z`} fill={BEAK_S} />
      <path d={`M71 ${y - 4} Q80 ${y - 7} 88 ${y - 4}`} stroke="#fff" strokeWidth="1.1" opacity=".75" fill="none" />
    </g>
  );
}

const Sparkle = ({ x, y, r = 1, c = "#ffd25e" }) => <path transform={`translate(${x} ${y}) scale(${r})`} d="M0 -6 C.8 -1.6 1.6 -.8 6 0 C1.6 .8 .8 1.6 0 6 C-.8 1.6 -1.6 .8 -6 0 C-1.6 -.8 -.8 -1.6 0 -6 Z" fill={c} stroke={LINE} strokeWidth=".7" strokeLinejoin="round" />;

/** A wing raised as an arm: an outlined tube with a shaded side and a shine. n points to the shade. */
function Arm({ d, w = 9, fill = MINT, shade = MINT_S, n = [1, 0] }) {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} stroke={LINE} strokeWidth={w + 2.4} /><path d={d} stroke={fill} strokeWidth={w} />
      <path d={d} stroke={shade} strokeWidth={w * 0.42} transform={`translate(${n[0] * w * 0.22} ${n[1] * w * 0.22})`} />
      <path d={d} stroke="#fff" strokeWidth="1.3" opacity=".7" transform={`translate(${-n[0] * w * 0.27} ${-n[1] * w * 0.27})`} />
    </g>
  );
}
/** A round mitten hand with a shaded side and knuckle creases. */
function Mitt({ x, y, r = 9, rot = 0, fill = MINT, shade = MINT_S, fist = true }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <ellipse rx={r} ry={r * 1.05} fill={fill} />
      <path d={`M${r * .15} ${-r} C${r * .9} ${-r * .7} ${r * 1.05} 0 ${r * .75} ${r * .7} C${r * .5} ${r} ${r * .1} ${r * 1.05} 0 ${r * 1.05} C${r * .6} ${r * .5} ${r * .7} ${-r * .4} ${r * .15} ${-r} Z`} fill={shade} />
      <ellipse rx={r} ry={r * 1.05} fill="none" {...s} />
      {fist && <path d={`M${-r * .8} ${-r * .3} Q${-r * .45} ${-r * .7} ${-r * .1} ${-r * .3} M${-r * .1} ${-r * .35} Q${r * .25} ${-r * .75} ${r * .6} ${-r * .35}`} {...thin} />}
      <path d={`M${-r * .55} ${-r * .75} C${-r * .25} ${-r} ${r * .1} ${-r * 1.05} ${r * .35} ${-r * .95}`} stroke="#fff" strokeWidth="1.3" opacity=".8" fill="none" />
    </g>
  );
}
const Motion = ({ d }) => <path d={d} {...thin} strokeWidth="1.3" />;
/** Wedges from the centre, like sun rays, every other one coloured. */
const rays = (n, fill, cx = 70, cy = 90) => Array.from({ length: n }, (_, i) => { const a1 = (i * 2 / (n * 2)) * Math.PI * 2, a2 = ((i * 2 + 1) / (n * 2)) * Math.PI * 2; return <path key={i} d={`M${cx} ${cy} L${(cx + 90 * Math.cos(a1)).toFixed(1)} ${(cy + 90 * Math.sin(a1)).toFixed(1)} L${(cx + 90 * Math.cos(a2)).toFixed(1)} ${(cy + 90 * Math.sin(a2)).toFixed(1)} Z`} fill={fill} />; });
/** A spiky burst, for a comic background. */
const burst = (n, r1, r2, cx = 70, cy = 82) => Array.from({ length: n * 2 }, (_, i) => { const a = (i / (n * 2)) * Math.PI * 2, r = i % 2 ? r1 : r2; return `${i ? "L" : "M"}${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`; }).join(" ") + " Z";

/** Tiddle is drawn a little smaller than the disc, anchored at its bottom, so the colour shows round him. */
const SHRINK = "translate(70 134) scale(.84) translate(-70 -134)";

/** The disc behind Tiddle: a darker rim offset down and right, a lit face and a thin edge. */
function Frame({ id, bg, rim, tilt = 0, flip = false, children, props, back }) {
  const turn = flip ? "translate(140 0) scale(-1 1)" : "";
  return (
    <svg viewBox="0 0 140 140" width="100%" height="100%" role="img" aria-hidden="true">
      <defs>
        <clipPath id={`tav-${id}`}><circle cx="70" cy="82" r="50" /><rect x="-20" y="-30" width="180" height="112" /></clipPath>
        <clipPath id={`disc-${id}`}><circle cx="70" cy="82" r="50" /></clipPath>
        <radialGradient id={`bg-${id}`} cx=".35" cy=".3" r=".8"><stop offset="0" stopColor="#fff" stopOpacity=".7" /><stop offset=".5" stopColor="#fff" stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="74" cy="87" r="50" fill={rim} />
      <circle cx="70" cy="82" r="50" fill={bg} />
      <circle cx="70" cy="82" r="50" fill={`url(#bg-${id})`} />
      <g clipPath={`url(#disc-${id})`}>{back}</g>
      <g clipPath={`url(#disc-${id})`}><g transform={`${SHRINK} ${turn} rotate(${tilt} 70 130) translate(7 5)`}><path d={BODY} fill="#1d3340" opacity=".16" /></g></g>
      <g clipPath={`url(#tav-${id})`}><g transform={`${SHRINK} ${turn} rotate(${tilt} 70 130)`}>{children}</g></g>
      <circle cx="70" cy="82" r="50" fill="none" stroke={LINE} strokeWidth=".9" opacity=".55" />
      <g transform={SHRINK}>{props}</g>
    </svg>
  );
}

const AV = {
  cool: {
    name: "Cool", bg: "#ffc98a", rim: "#ee9a52", tilt: -7,
    back: <g>{rays(12, "#ffdca8")}<circle cx="70" cy="90" r="22" fill="#fff0c4" /></g>,
    body: <><Body id="cool" /><Tuft /><Cheeks />
      <g {...s} stroke="#1c2633"><path d="M44 57 L36 53" strokeWidth="1.8" /><path d="M46 56 Q60 51 73 56 Q73 70 60 72 Q47 71 46 56 Z" fill="#263445" /><path d="M81 56 Q93 52 100 56 Q100 67 92 70 Q82 69 81 56 Z" fill="#263445" /><path d="M73 57 Q77 54 81 57" fill="none" strokeWidth="1.8" /></g>
      <path d="M50 58 L57 68 M55 57 L61 65 M84 58 L89 66" stroke="#9fd2f7" strokeWidth="1.5" opacity=".85" />
      <path d="M84 50 Q92 45 99 49" {...s} strokeWidth="2.2" fill="none" />
      <Beak y={78} open /></>,
    props: <g>
      <g transform="translate(26 34) rotate(-12)" {...s}>
        <rect x="-2" y="4" width="4.4" height="22" rx="2" fill="#e8c08a" /><path d="M0 4 V26" stroke="#c99a5d" strokeWidth="1.2" />
        <path d="M-10 -24 C-10 -33 10 -33 10 -24 V4 C10 8 -10 8 -10 4 Z" fill="#f79bb4" /><path d="M3 -30 C8 -28 10 -24 10 -20 V4 C10 8 4 8 3 7 Z" fill="#e26d8f" stroke="none" />
        <path d="M-10 -10 H10 V4 C10 8 -10 8 -10 4 Z" fill="#a9daf7" /><path d="M3 -10 H10 V4 C10 8 4 8 3 7 Z" fill="#7cbde8" stroke="none" />
        <path d="M-6 -27 V-14" stroke="#fff" strokeWidth="1.8" opacity=".8" /><path d="M-10 4 C-10 10 -6 11 -6 6" fill="#f79bb4" />
      </g>
      <path d="M17 44 C16 48 18 50 20 49 C21 47 19 45 17 44 Z" fill="#f79bb4" {...s} strokeWidth=".8" />
      <Arm d="M42 98 Q24 92 24 66" n={[1, 0]} /><Mitt x={25} y={60} r={8.5} rot={-10} />
      <Sparkle x={112} y={50} r={1.1} /><Sparkle x={104} y={34} r={.6} /><Motion d="M8 64 C4 60 4 54 8 50 M40 50 C44 46 44 40 40 36" />
    </g>,
  },
  panic: {
    name: "Exam panic", bg: "#ffc2c8", rim: "#ec8792", tilt: 9, flip: true,
    back: <g><path d={burst(9, 26, 50)} fill="#ffe3e6" /><path d={burst(9, 14, 26)} fill="#fff4f5" /></g>,
    body: <><Body id="panic" /><Tuft /><Eyes r={11} pupil={2.4} px={0} /><path d="M47 47 L62 52 M98 46 L86 51" {...s} /><Cheeks y={81} /><Beak y={81} small />
      <path d="M103 50 C105 55 106 58 104 61 C102 63 99 61 100 57 C101 54 102 52 103 50 Z" fill="#9ed2f5" {...s} strokeWidth=".9" />
      <path d="M36 52 C34 57 33 60 35 63 C37 65 40 63 39 59 C38 57 37 54 36 52 Z" fill="#9ed2f5" {...s} strokeWidth=".9" /></>,
    props: <g {...s}>
      {[[96, 14, 16], [128, 30, 32], [16, 24, -20]].map(([x, y, r], i) => <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
        <path d="M-10 -13 H6 L10 -9 V13 H-10 Z" fill="#fffdf6" /><path d="M6 -13 V-9 H10" fill="#e7e2d4" /><path d="M-10 13 H10 V10 H-10 Z" fill="#ece6d6" stroke="none" />
        <path d="M-6 -7 H5 M-6 -3 H6 M-6 1 H3" {...thin} opacity=".55" /><text x="1" y="10" fontFamily="Patrick Hand, cursive" fontSize="8" fill="#d9534f" stroke="none">{["?", "x", "!"][i]}</text></g>)}
      <g transform="translate(44 30) rotate(-40)"><rect x="-2.8" y="-16" width="5.6" height="28" rx="1" fill="#f5c45a" /><rect x=".4" y="-16" width="2.4" height="28" fill="#d9a43a" stroke="none" /><path d="M-2.8 12 L0 18 L2.8 12 Z" fill="#f3d9b8" /><path d="M-.9 16 L0 18 L.9 16 Z" fill={LINE} /><rect x="-2.8" y="-21" width="5.6" height="5" fill="#f59ab3" /></g>
      <Arm d="M38 98 Q20 86 18 64" n={[1, 0]} /><Mitt x={18} y={58} r={8} rot={-20} fist={false} />
      <Arm d="M102 98 Q120 86 122 64" n={[1, 0]} /><Mitt x={122} y={58} r={8} rot={20} fist={false} />
      <Motion d="M6 60 C2 56 2 50 6 46 M134 60 C138 56 138 50 134 46 M10 74 C6 72 4 68 5 64 M130 74 C134 72 136 68 135 64" />
      <text x="58" y="12" fontFamily="Patrick Hand, cursive" fontSize="14" fill="#d9534f" stroke="none">!!</text>
    </g>,
  },
  astronaut: {
    name: "Astronaut", bg: "#2c3a66", rim: "#1b2547", tilt: -10,
    back: <g>{[[36, 54], [52, 112], [104, 104], [96, 52], [44, 92], [112, 80], [86, 40], [28, 76]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i % 2 ? 1 : 1.5} fill="#fff" opacity=".8" />)}
      <path d="M24 44 L56 64" stroke="#9fc1ff" strokeWidth="4" strokeLinecap="round" opacity=".35" /><circle cx="56" cy="64" r="2.4" fill="#fff" /><path d={burst(14, 40, 50)} fill="#3a4a80" opacity=".5" /></g>,
    body: <><path d="M26 124 C26 102 40 92 70 92 C100 92 114 102 114 124 V146 H26 Z" fill="#eef2f6" {...s} /><path d="M92 94 C108 100 114 112 114 124 V146 H96 C100 128 98 110 92 94 Z" fill="#c9d3de" />
      <path d="M52 108 L88 106 V122 L52 124 Z" fill="#dfe6ee" {...s} strokeWidth="1" /><circle cx="60" cy="116" r="2.6" fill="#f26b6b" /><circle cx="70" cy="115.5" r="2.6" fill="#f5c45a" /><circle cx="80" cy="115" r="2.4" fill="#6fb3ea" />
      <defs><clipPath id="head-astro"><path d="M68 38 C92 37 103 54 102 72 C101 87 88 95 68 95 C50 95 38 86 37 72 C36 54 46 39 68 38 Z" /></clipPath></defs>
      <path d="M68 38 C92 37 103 54 102 72 C101 87 88 95 68 95 C50 95 38 86 37 72 C36 54 46 39 68 38 Z" fill={MINT} />
      <g clipPath="url(#head-astro)"><ellipse cx="108" cy="68" rx="18" ry="40" fill={MINT_S} /></g>
      <path d="M68 38 C92 37 103 54 102 72 C101 87 88 95 68 95 C50 95 38 86 37 72 C36 54 46 39 68 38 Z" fill="none" {...s} />
      <Tuft /><Eyes y={62} r={8.6} /><Cheeks y={76} /><Beak y={76} open /></>,
    props: <g {...s}>
      <circle cx="70" cy="65" r="41" fill="#d8ecfb" fillOpacity=".22" stroke="#9fc1dd" strokeWidth="1.6" />
      <path d="M36 50 C42 36 56 27 70 26" stroke="#fff" strokeWidth="4" fill="none" opacity=".85" />
      <path d="M100 44 C103 49 104 54 104 59" stroke="#fff" strokeWidth="2.2" fill="none" opacity=".7" />
      <g transform="translate(104 18) rotate(-18)"><path d="M-17 2 C-17 -2 17 -6 17 -2" fill="none" stroke="#c98a3a" strokeWidth="1.6" /><circle r="9.5" fill="#f6b660" /><path d="M2 -9 C8 -6 10 0 8 6 C5 9 2 9.5 0 9.5 Z" fill="#e0923f" stroke="none" /><path d="M-17 2 C-10 6 10 4 17 -2" fill="none" stroke="#c98a3a" strokeWidth="1.6" /><path d="M-4 -6 C-2 -7 0 -7 2 -6" {...thin} stroke="#fff" opacity=".85" /></g>
      <Arm d="M102 104 Q122 94 120 70" w={10} fill="#eef2f6" shade="#c9d3de" />
      <rect x="113" y="66" width="14" height="6" rx="2" fill="#f26b6b" {...s} transform="rotate(8 120 69)" />
      <Mitt x={121} y={58} r={9.5} rot={12} fill="#fff" shade="#d6dde6" fist={false} />
      <Motion d="M132 46 C136 50 137 56 135 62 M108 44 C106 40 107 36 110 33" />
      <Sparkle x={20} y={26} /><Sparkle x={14} y={56} r={.5} c="#fff" />
    </g>,
  },
  chef: {
    name: "Chef", bg: "#ffe1c2", rim: "#f2ad7a", tilt: 7,
    back: <g>{Array.from({ length: 110 }, (_, i) => { const c = i % 11, r = Math.floor(i / 11); return (c + r) % 2 ? null : <rect key={i} x={15 + c * 10} y={32 + r * 10} width="10" height="10" fill="#f7a99a" opacity=".45" />; })}</g>,
    body: <><Body id="chef" coat={<><path d="M46 98 L94 96 V146 H46 Z" fill="#fff" /><path d="M80 96 H94 V146 H82 Z" fill="#e3e8ee" /><path d="M46 102 L94 100" stroke="#f26b6b" strokeWidth="2.4" /></>} /><Closed up /><Cheeks y={75} />
      <g {...s} stroke={BEAK_S}><path d="M66 74 Q81 67 98 76 Q86 82 66 78 Z" fill={BEAK} /><path d="M66 78 Q86 82 98 76 Q90 86 80 87 Q70 86 66 78 Z" fill={BEAK_S} /><path d="M76 83 Q81 80 86 83 Q85 92 81 94 Q77 92 76 83 Z" fill={TONGUE} stroke="#c95b69" /></g>
      <path d="M46 98 L94 96 V146 H46 Z" fill="none" {...s} /><path d="M46 98 L38 88 M94 96 L102 86" {...s} /><rect x="60" y="112" width="16" height="10" rx="2" fill="#f4f6f8" {...s} strokeWidth=".9" /></>,
    props: <g {...s}>
      <path d="M42 40 C30 30 40 10 55 17 C57 1 83 1 86 16 C101 9 110 29 98 40 Z" fill="#fff" />
      <path d="M86 16 C101 9 110 29 98 40 H86 C94 32 96 20 86 16 Z" fill="#e3e8ee" stroke="none" />
      <path d="M44 36 L98 34 V46 C84 50 58 50 44 47 Z" fill="#f4f6f8" /><path d="M86 35 L98 34 V46 C94 47 90 48 86 48 Z" fill="#d9e0e8" stroke="none" />
      <path d="M58 20 C59 27 59 32 58 36 M71 13 V35 M83 20 C82 27 82 32 83 35" {...thin} opacity=".4" />
      <g transform="translate(26 80) rotate(30)"><rect x="-2.4" y="0" width="4.8" height="38" rx="2" fill="#d9a066" /><path d="M.6 0 H2.4 V38 H.6 Z" fill="#b97d44" stroke="none" /><ellipse cx="0" cy="-4" rx="7.4" ry="9" fill="#e7b57d" /><ellipse cx="0" cy="-5" rx="4.6" ry="5.6" fill="#f08a5d" stroke="none" /><path d="M-4 -9 C-3 -11 -1 -12 1 -12" {...thin} stroke="#fff" opacity=".8" /></g>
      <path d="M18 66 C14 60 20 56 16 50 M24 64 C20 58 26 54 22 48 M30 62 C26 56 32 52 28 46" {...thin} strokeWidth="1.1" opacity=".7" />
      <Arm d="M42 102 Q30 106 20 98" n={[0, 1]} /><Mitt x={19} y={95} r={8} rot={-30} />
      <path d="M110 62 C106 56 98 58 100 64 C102 70 110 74 110 74 C110 74 118 70 120 64 C122 58 114 56 110 62 Z" fill="#f7a9bb" {...s} strokeWidth=".9" />
      <Sparkle x={124} y={50} r={.6} />
    </g>,
  },
  detective: {
    name: "Detective", bg: "#b9cdee", rim: "#7c98c8", tilt: -6, flip: true,
    back: <g><path d="M120 20 L20 110 L70 140 Z" fill="#fff" opacity=".35" />{[[28, 96, -30], [34, 82, -30], [32, 66, -20], [106, 58, 20], [112, 72, 20], [110, 88, 10]].map(([x, y, r], i) => <ellipse key={i} cx={x} cy={y} rx="3.4" ry="5" fill="#8fa8d4" transform={`rotate(${r} ${x} ${y})`} />)}</g>,
    body: <><Body id="detective" coat={<><path d="M44 98 C56 106 84 106 96 98 L102 146 H38 Z" fill="#c9a274" /><path d="M84 102 C90 101 94 100 96 98 L102 146 H88 Z" fill="#a8804f" /></>} /><Tuft /><Eyes r={7.8} pupil={3.8} /><path d="M50 52 Q58 47 66 51" {...s} fill="none" /><Cheeks y={78} /><Beak y={78} small />
      <path d="M44 98 C56 106 84 106 96 98 L102 146 H38 Z" fill="none" {...s} /><path d="M70 104 V146" {...thin} /><circle cx="70" cy="114" r="1.6" fill={LINE} /><circle cx="70" cy="126" r="1.6" fill={LINE} /></>,
    props: <g {...s}>
      <path d="M38 50 C36 33 52 21 70 21 C88 21 104 33 102 50 C92 46 48 46 38 50 Z" fill="#b98a5a" />
      <path d="M78 22 C94 26 104 36 102 50 C96 48 90 47 84 47 C88 40 86 30 78 22 Z" fill="#9b6e42" stroke="none" />
      <path d="M28 53 C36 46 54 44 70 44 C86 44 104 46 112 53 C100 56 40 56 28 53 Z" fill="#a37548" /><path d="M28 53 C40 56 100 56 112 53 C104 58 36 58 28 53 Z" fill="#7d5532" />
      <path d="M50 29 L56 44 M70 22 V44 M90 29 L84 44" {...thin} opacity=".35" />
      <circle cx="70" cy="21" r="2.6" fill="#a37548" />
      <g><path d="M38 76 L16 106" stroke="#6b4626" strokeWidth="6" /><path d="M38 76 L16 106" stroke="#9a6a3e" strokeWidth="2.4" />
        <circle cx="50" cy="62" r="18" fill="#e6f4fd" fillOpacity=".55" stroke="#3e4c5b" strokeWidth="3.4" /><circle cx="50" cy="62" r="18" fill="none" stroke="#8a97a6" strokeWidth="1" />
        <ellipse cx="50" cy="62" rx="12" ry="13" fill="#fff" {...s} /><circle cx="48" cy="64" r="7" fill="#283a4b" /><circle cx="50.6" cy="60.6" r="2.6" fill="#fff" /><path d="M38 52 C42 47 49 45 55 46" stroke="#fff" strokeWidth="2.2" fill="none" opacity=".85" /></g>
      <Arm d="M42 104 Q30 106 24 98" n={[0, 1]} /><Mitt x={24} y={96} r={8} rot={-30} />
      <text x="106" y="34" fontFamily="Patrick Hand, cursive" fontSize="18" fill="#3e4c5b" stroke="none">?</text><text x="120" y="22" fontFamily="Patrick Hand, cursive" fontSize="12" fill="#3e4c5b" stroke="none">?</text>
      <Sparkle x={66} y={50} r={.55} c="#fff" />
    </g>,
  },
  sleepy: {
    name: "Sleepy", bg: "#c9cdf5", rim: "#9097d8", tilt: 13,
    back: <g><path d="M30 70 A14 14 0 1 0 44 52 A10.5 10.5 0 1 1 30 70 Z" fill="#fff6c8" stroke={LINE} strokeWidth=".7" />{[[104, 104], [36, 100], [92, 44], [114, 70], [26, 90]].map(([x, y], i) => <Sparkle key={i} x={x} y={y} r={.35} c="#fff" />)}
      <path d="M20 126 C20 116 32 114 36 120 C40 110 56 112 58 120 C64 116 74 120 72 128 Z" fill="#e6e8fb" /></g>,
    body: <><Body id="sleepy" /><Closed y={64} /><Cheeks y={76} /><Beak y={77} small />
      <circle cx="96" cy="88" r="6" fill="#d4ecfb" fillOpacity=".8" {...s} strokeWidth=".9" /><path d="M93.5 85.6 C95 84.6 96.6 84.4 98 84.8" stroke="#fff" strokeWidth="1" />
      <path d="M36 98 C46 92 58 94 62 102 C68 112 62 124 52 126 C40 128 33 118 33 110 C33 104 34 100 36 98 Z" fill="#f7d79b" {...s} /><path d="M52 98 C60 102 62 112 58 120 C62 112 60 104 52 98 Z" fill="#e2b96e" stroke="none" /><path d="M41 102 C39 108 39 114 41 118" {...thin} opacity=".5" /></>,
    props: <g {...s}>
      <path d="M40 54 C38 30 64 20 84 28 C98 33 108 40 116 56 C108 53 100 50 98 52 C86 50 52 51 40 54 Z" fill="#a5bff3" />
      <path d="M84 28 C98 33 108 40 116 56 C110 54 104 52 100 51 C98 42 92 34 84 28 Z" fill="#8199dd" stroke="none" />
      <path d="M38 54 C52 49 86 47 100 50 L100 58 C86 55 52 57 38 61 Z" fill="#fff" /><path d="M86 49 L100 50 V58 L86 56 Z" fill="#e3e8f3" stroke="none" />
      <path d="M58 32 C64 36 66 42 64 48 M76 28 C82 32 84 40 82 48" {...thin} stroke="#fff" opacity=".7" />
      <circle cx="119" cy="60" r="6.4" fill="#fff" /><path d="M121 56 A5 5 0 0 1 124 61" {...thin} stroke="#c8cfe2" />
      <text x="104" y="30" fontFamily="Patrick Hand, cursive" fontSize="20" fill="#5d6fb8" stroke="none">z</text><text x="118" y="17" fontFamily="Patrick Hand, cursive" fontSize="14" fill="#5d6fb8" stroke="none">z</text><text x="130" y="6" fontFamily="Patrick Hand, cursive" fontSize="10" fill="#5d6fb8" stroke="none">z</text>
      <Arm d="M38 104 Q40 118 54 120" n={[0, 1]} /><Mitt x={58} y={118} r={7.5} rot={-60} fist={false} />
    </g>,
  },
  superhero: {
    name: "Superhero", bg: "#ffde74", rim: "#eeb036", tilt: -9,
    back: <g>
      <path d={Array.from({ length: 24 }, (_, i) => { const a = (i / 24) * Math.PI * 2, r = i % 2 ? 30 : 49; return `${i ? "L" : "M"}${(70 + r * Math.cos(a)).toFixed(1)} ${(82 + r * Math.sin(a)).toFixed(1)}`; }).join(" ") + " Z"} fill="#fff4c8" opacity=".9" />
      {[[30, 46], [108, 50], [36, 110], [112, 112]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="1.6" fill="#e9a62c" opacity=".6" />)}
    </g>,
    body: <><Body id="superhero" /><Tuft />
      <path d="M40 58 C30 55 22 59 14 54 C19 64 29 65 40 63 Z" fill="#c43b45" {...s} /><path d="M40 63 C32 68 26 74 18 74 C27 78 35 73 42 67 Z" fill="#e5525a" {...s} />
      <path d="M40 56 C50 49 94 48 104 55 C104 66 98 71 92 71 C86 71 82 66 74 66 C64 66 60 71 54 71 C46 71 40 67 40 56 Z" fill="#e5525a" {...s} /><path d="M92 50 C99 51 103 53 104 55 C104 66 98 71 92 71 C96 64 96 56 92 50 Z" fill="#c43b45" stroke="none" />
      <path d="M44 55 C50 52 56 52 60 53" stroke="#fff" strokeWidth="1.6" fill="none" opacity=".6" strokeLinecap="round" />
      <Eyes y={61} r={6.8} pupil={3.6} />
      <path d="M50 51 L64 55 M82 54 L95 50" {...s} strokeWidth="2.4" />
      <Cheeks y={80} /><Beak y={79} open />
      <path d="M52 100 L74 93 L94 102 L89 120 L73 128 L57 120 Z" fill="#ffd257" /><path d="M74 93 L94 102 L89 120 L73 128 Z" fill="#e6a830" />
      <path d="M52 100 L74 93 L94 102 L89 120 L73 128 L57 120 Z" fill="none" {...s} />
      <path d="M76 97 L66 112 L73 112 L68 125 L83 107 L76 107 L81 97 Z" fill="#e5525a" {...s} strokeWidth="1" />
      <path d="M58 103 L72 98" stroke="#fff" strokeWidth="1.4" opacity=".7" strokeLinecap="round" /></>,
    props: <g {...s}>
      <path d="M40 88 C26 90 12 100 4 116 C0 124 -2 132 0 140 C6 134 12 136 16 130 C20 138 28 138 32 130 C36 120 38 104 44 94 Z" fill="#e5525a" />
      <path d="M8 128 C10 116 18 104 30 96 C26 108 24 120 24 132 C20 134 14 132 8 128 Z" fill="#b8323d" stroke="none" />
      <path d="M14 112 C18 106 22 102 28 98 M22 124 C24 116 28 108 34 100" {...thin} stroke="#fff" opacity=".5" />
      <path d="M96 84 C108 88 118 100 122 118 C114 116 108 118 104 112 C102 102 100 92 96 84 Z" fill="#b8323d" />
      <circle cx="42" cy="91" r="3.6" fill="#ffd257" /><circle cx="95" cy="83" r="3" fill="#ffd257" />
      <path d="M-4 104 H-16 M-2 116 H-20 M0 128 H-12" {...thin} strokeWidth="1.3" />
      <path d="M84 76 C93 64 97 52 98 42 L117 46 C115 58 109 72 99 84 Z" fill={MINT} /><path d="M109 44 L117 46 C115 58 109 72 99 84 L94 80 C103 69 108 56 109 44 Z" fill={MINT_S} stroke="none" />
      <path d="M84 76 C93 64 97 52 98 42 M117 46 C115 58 109 72 99 84" fill="none" />
      <path d="M95 30 C95 20 101 15 108 15 C117 15 123 21 123 30 C123 40 116 46 108 46 C100 46 95 40 95 30 Z" fill={MINT} /><path d="M110 15 C118 16 123 22 123 30 C123 40 116 46 108 46 C116 40 117 24 110 15 Z" fill={MINT_S} stroke="none" /><path d="M95 30 C95 20 101 15 108 15 C117 15 123 21 123 30 C123 40 116 46 108 46 C100 46 95 40 95 30 Z" fill="none" />
      <path d="M97 24 Q100.5 20 104 24 M104 22.5 Q107.5 18.5 111 22.5 M111 23 Q114.5 19 118 23" {...thin} strokeWidth="1.1" />
      <path d="M96 32 C100 36 105 36 108 33" {...thin} strokeWidth="1.1" /><path d="M100 18 C102 16 105 15.4 107 15.6" stroke="#fff" strokeWidth="1.6" opacity=".8" fill="none" />
      <path d="M92 14 C90 10 90 7 92 3 M102 8 C102 4 104 1 107 0 M128 20 C132 24 133 29 131 34 M126 12 C130 12 133 14 135 17" {...thin} strokeWidth="1.3" />
    </g>,
  },
  bookworm: {
    name: "Bookworm", bg: "#d4f0db", rim: "#97d3a9", tilt: 6, flip: true,
    back: <g>{[52, 92, 132].map((base, row) => <g key={base}>{Array.from({ length: 16 }, (_, i) => { const f = ["#f3b0b9", "#9fc4f0", "#ffd88a", "#b9e3c6", "#c9b6ee"][(i + row * 2) % 5], w = 5 + ((i * 3 + row) % 4), h = 24 + ((i * 7 + row * 3) % 12); return <rect key={i} x={14 + i * 7.2} y={base - h} width={w} height={h} fill={f} opacity=".6" />; })}<path d={`M14 ${base} H126`} stroke="#b08a5c" strokeWidth="3" opacity=".55" /></g>)}</g>,
    body: <><Body id="bookworm" /><Eyes y={64} r={7.2} pupil={3.8} px={-.6} />
      <g {...s} fill="none" stroke="#7a5230" strokeWidth="2.1"><circle cx="60" cy="64" r="11.5" fill="#fff" fillOpacity=".3" /><ellipse cx="89" cy="63" rx="8.6" ry="11" fill="#fff" fillOpacity=".3" /><path d="M71 62 Q76 59 80 62" /><path d="M48.5 62 L40 59" /></g>
      <Cheeks y={81} /><Beak y={80} open tongue={false} /></>,
    props: <g {...s}>
      {[[38, 36, 64, 0, "#86aee6", "#5d8ccf"], [44, 25, 54, -5, "#ec8d9b", "#d06676"], [40, 14, 58, 4, "#a9dcc0", "#7cbf9b"]].map(([x, y, w, r, f, d], i) => <g key={i} transform={`rotate(${r} ${x + w / 2} ${y + 5})`}>
        <path d={`M${x + 3} ${y - 3} H${x + w + 3} L${x + w} ${y} H${x} Z`} fill="#fbf6e9" /><rect x={x} y={y} width={w} height="10" rx="1.6" fill={f} /><rect x={x + w - 6} y={y} width="6" height="10" fill={d} stroke="none" />
        <path d={`M${x + 6} ${y + 3} H${x + w - 10}`} {...thin} stroke="#fff" opacity=".7" /></g>)}
      <path d="M66 12 C64 4 70 0 74 4 C76 0 82 2 80 8" fill="#f6b8c4" /><path d="M76 3 C79 2 81 4 80 8" fill="#e891a3" stroke="none" />
      <circle cx="71.6" cy="5.4" r="1" fill={LINE} /><circle cx="76.4" cy="4.8" r="1" fill={LINE} /><path d="M72 8 Q74 9.4 76 8" {...thin} />
      <Arm d="M102 102 Q122 96 120 76" n={[1, 0]} />
      <g transform="translate(120 60) rotate(10)" {...s}><path d="M-16 -8 Q-8 -12 0 -8 Q8 -12 16 -8 V10 Q8 6 0 10 Q-8 6 -16 10 Z" fill="#fffaf0" /><path d="M0 -8 V10" /><path d="M-16 10 Q-8 6 0 10 Q8 6 16 10 L16 13 Q8 9 0 13 Q-8 9 -16 13 Z" fill="#5d8ccf" />
        <path d="M-12 -4 H-4 M-12 0 H-4 M-12 4 H-6 M4 -4 H12 M4 0 H12 M4 4 H10" {...thin} opacity=".5" /></g>
      <Mitt x={120} y={74} r={7.5} rot={20} />
      <Sparkle x={24} y={34} /><Sparkle x={100} y={40} r={.6} /><Motion d="M134 50 C137 54 137 58 135 62" />
    </g>,
  },
};
export const TAV_IDS = Object.keys(AV);
export const TAV_NAMES = Object.fromEntries(TAV_IDS.map((k) => [k, AV[k].name]));

export function TiddleAv({ id = "cool", size = 100 }) {
  const a = AV[id] || AV.cool;
  return <span className="tav" style={{ width: size, height: size }} title={`Tiddle, ${a.name}`}><Frame id={id} bg={a.bg} rim={a.rim} tilt={a.tilt} flip={a.flip} props={a.props} back={a.back}>{a.body}</Frame></span>;
}
