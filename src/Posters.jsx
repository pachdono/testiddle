// Cheat sheets as one page illustrated posters: a title with subject tags, a one line summary,
// a hand drawn diagram with labelled callouts, then the key facts in taped boxes. All the text
// and drawings are Testiddle's own.

import { Mascot } from "./Mascot.jsx";

const INK = "#3b4654";
const HAND = "'Patrick Hand', 'Comic Sans MS', cursive";

/** Colours and the one line summary for each sheet. */
export const POSTER = {
  linear: { key: "Read the slope as the rate and b as the start, and always check the units.", color: "#2f7fd0", soft: "#e4f0fc", tagline: "A line is a starting value plus a constant rate of change", pose: "think" },
  systems: { key: "Line up the coefficients and eliminate. Parallel lines mean no solution.", color: "#7a5cd6", soft: "#efe9fc", tagline: "The solution is where every equation is true at the same time", pose: "read" },
  quadratics: { key: "The vertex sits halfway between the roots; the discriminant says how many roots there are.", color: "#d0496d", soft: "#fce8ee", tagline: "Every parabola has a vertex, an axis of symmetry and up to two roots", pose: "cheer" },
  exponential: { key: "Repeated percentage changes multiply. Up 10% then down 10% is not back to the start.", color: "#2a9d8f", soft: "#e3f6f2", tagline: "Linear adds the same amount. Exponential multiplies by the same factor", pose: "wave" },
  geometry: { key: "Spot the right triangle or the fraction of the circle, and the formula follows.", color: "#c0782f", soft: "#fdf0e1", tagline: "Most SAT geometry is a right triangle or a fraction of a circle", pose: "think" },
  stats: { key: "An outlier drags the mean but barely moves the median. Find the right total first.", color: "#3f9d5a", soft: "#e6f5e9", tagline: "Centre, spread and the right total: that is most of the marks", pose: "read" },
  boundaries: { key: "Never join two complete sentences with a comma alone.", color: "#2f7fd0", soft: "#e4f0fc", tagline: "Two complete sentences need more than a comma to join them", pose: "think" },
  agreement: { key: "Cross out the words between subject and verb, then match them.", color: "#c0782f", soft: "#fdf0e1", tagline: "Find the true subject first, then make everything else match it", pose: "read" },
  transitions: { key: "Say the link in your own words, such as but or so, then pick the choice that means it.", color: "#7a5cd6", soft: "#efe9fc", tagline: "Decide how the two ideas relate before you read the choices", pose: "wave" },
  words: { key: "Cover the choices, predict a word from the clues, then match its tone.", color: "#d0496d", soft: "#fce8ee", tagline: "The sentence around the blank tells you the word you need", pose: "think" },
  evidence: { key: "The right answer proves every part of the claim; true but off topic is wrong.", color: "#3f9d5a", soft: "#e6f5e9", tagline: "On topic is not enough: the answer must prove the exact claim", pose: "cheer" },
};

/* ---------- small drawing helpers ---------- */

const Label = ({ x, y, w, h = 32, color, title, lines = [], align = "middle" }) => (
  <g filter="url(#ps)">
    <rect x={x} y={y} width={w} height={h + lines.length * 17} rx="7" fill="#fff" stroke={color} strokeWidth="1.4" />
    <rect x={x} y={y} width={w} height="24" rx="7" fill={color} opacity=".16" />
    <text x={align === "middle" ? x + w / 2 : x + 10} y={y + 17} textAnchor={align === "middle" ? "middle" : "start"} fontFamily={HAND} fontSize="16" fill={color} letterSpacing=".6">{title.toUpperCase()}</text>
    {lines.map((l, i) => <text key={l} x={align === "middle" ? x + w / 2 : x + 10} y={y + 42 + i * 17} textAnchor={align === "middle" ? "middle" : "start"} fontFamily={HAND} fontSize="15" fill={INK}>{l.toUpperCase()}</text>)}
  </g>
);
/** A thin connector from a label to a point, with a small dot where it lands. */
const Link = ({ from, to, color, bend = 0 }) => {
  const [x1, y1] = from, [x2, y2] = to;
  const mx = (x1 + x2) / 2 + bend, my = (y1 + y2) / 2 - Math.abs(bend) / 2;
  return <g><path d={`M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`} fill="none" stroke={color} strokeWidth="1.3" /><circle cx={x2} cy={y2} r="3.4" fill="#fff" stroke={color} strokeWidth="1.3" /></g>;
};

/** Shared shadows and shine, so drawings sit on the page with a little depth. */
const Defs = ({ c }) => (
  <defs>
    <filter id="ps" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="1.6" dy="2.6" stdDeviation="1.4" floodColor="#3b4654" floodOpacity=".18" /></filter>
    <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".7" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
    <linearGradient id="pc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={c} stopOpacity=".28" /><stop offset="1" stopColor={c} stopOpacity=".08" /></linearGradient>
  </defs>
);

/** A little round character with a face, used to mark the important point on a diagram. */
function Buddy({ x, y, r = 11, color = "#ffd45e", mood = "happy", look = 0 }) {
  return (
    <g filter="url(#ps)">
      <ellipse cx={x} cy={y + r + 3} rx={r * .8} ry="2.4" fill="#000" opacity=".12" />
      <circle cx={x} cy={y} r={r} fill={color} stroke={INK} strokeWidth="1.2" />
      <ellipse cx={x - r * .35} cy={y - r * .45} rx={r * .32} ry={r * .2} fill="#fff" opacity=".7" />
      <circle cx={x - r * .32 + look} cy={y - r * .08} r={r * .13} fill={INK} /><circle cx={x + r * .32 + look} cy={y - r * .08} r={r * .13} fill={INK} />
      {mood === "happy" && <path d={`M${x - r * .35} ${y + r * .25} Q${x} ${y + r * .62} ${x + r * .35} ${y + r * .25}`} fill="none" stroke={INK} strokeWidth="1.1" strokeLinecap="round" />}
      {mood === "worried" && <><path d={`M${x - r * .3} ${y + r * .45} Q${x} ${y + r * .2} ${x + r * .3} ${y + r * .45}`} fill="none" stroke={INK} strokeWidth="1.1" strokeLinecap="round" /><path d={`M${x + r * .9} ${y - r * .8} q2 4 0 6 q-2 -2 0 -6Z`} fill="#8fcaf0" stroke={INK} strokeWidth=".8" /></>}
      {mood === "wow" && <ellipse cx={x} cy={y + r * .4} rx={r * .18} ry={r * .24} fill={INK} />}
      <ellipse cx={x - r * .62} cy={y + r * .22} rx={r * .16} ry={r * .1} fill="#f5a6b8" /><ellipse cx={x + r * .62} cy={y + r * .22} rx={r * .16} ry={r * .1} fill="#f5a6b8" />
    </g>
  );
}

/** Real axes: maps maths coordinates to the drawing, with a grid and numbered ticks. */
function plot(box, xr, yr) {
  const [px, py, pw, ph] = box, [x0, x1] = xr, [y0, y1] = yr;
  const X = (x) => px + ((x - x0) / (x1 - x0)) * pw;
  const Y = (y) => py + ph - ((y - y0) / (y1 - y0)) * ph;
  const path = (f, a = x0, b = x1, n = 80) => Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return `${i ? "L" : "M"}${X(x).toFixed(1)} ${Y(f(x)).toFixed(1)}`; }).join(" ");
  const Axes = ({ step = 1, every = 1, xl = "x", yl = "y" }) => {
    const xs = [], ys = [];
    for (let v = Math.ceil(x0); v <= x1; v += step) xs.push(v);
    for (let v = Math.ceil(y0); v <= y1; v += step) ys.push(v);
    const ax = Y(Math.max(y0, Math.min(0, y1))), ay = X(Math.max(x0, Math.min(0, x1)));
    return (
      <g>
        <rect x={px} y={py} width={pw} height={ph} fill="#fbfdff" />
        {xs.map((v) => <path key={`x${v}`} d={`M${X(v)} ${py} V${py + ph}`} stroke="#e3eaf2" strokeWidth=".8" />)}
        {ys.map((v) => <path key={`y${v}`} d={`M${px} ${Y(v)} H${px + pw}`} stroke="#e3eaf2" strokeWidth=".8" />)}
        <path d={`M${px} ${ax} H${px + pw + 10} M${ay} ${py + ph} V${py - 10}`} stroke={INK} strokeWidth="1.5" />
        <path d={`M${px + pw + 10} ${ax} l-7 -3.5 v7 Z M${ay} ${py - 10} l-3.5 7 h7 Z`} fill={INK} />
        {xs.filter((v) => v !== 0 && v % every === 0).map((v) => <text key={`tx${v}`} x={X(v)} y={ax + 17} textAnchor="middle" fontFamily={HAND} fontSize="13" fill="#6b7682">{v}</text>)}
        {ys.filter((v) => v !== 0 && v % every === 0).map((v) => <text key={`ty${v}`} x={ay - 8} y={Y(v) + 4} textAnchor="end" fontFamily={HAND} fontSize="13" fill="#6b7682">{v}</text>)}
        <text x={ay - 8} y={ax + 17} textAnchor="end" fontFamily={HAND} fontSize="13" fill="#6b7682">0</text>
        <text x={px + pw + 16} y={ax + 5} fontFamily={HAND} fontSize="16" fill={INK}>{xl}</text><text x={ay + 8} y={py - 4} fontFamily={HAND} fontSize="16" fill={INK}>{yl}</text>
      </g>
    );
  };
  return { X, Y, path, Axes };
}

/* ---------- one diagram per sheet, drawn from the real maths ---------- */

const FIG = {
  linear: (c) => {
    const { X, Y, path, Axes } = plot([250, 30, 260, 240], [-1, 6], [-1, 11]); // y = 1.5x + 2
    const f = (x) => 1.5 * x + 2;
    return (
      <svg viewBox="0 0 680 310"><Defs c={c} />
        <Axes />
        <path d={path(f, -0.6, 5.8)} stroke={c} strokeWidth="3.4" strokeLinecap="round" fill="none" filter="url(#ps)" />
        <path d={`M${X(1)} ${Y(f(1))} H${X(3)} V${Y(f(3))} Z`} fill="#ffe7c2" opacity=".75" />
        <path d={`M${X(1)} ${Y(f(1))} H${X(3)} V${Y(f(3))}`} fill="none" stroke="#e08a2c" strokeWidth="2" strokeDasharray="6 4" />
        <text x={(X(1) + X(3)) / 2} y={Y(f(1)) + 20} textAnchor="middle" fontFamily={HAND} fontSize="16" fill="#c0702a">RUN = 2</text>
        <text x={X(3) + 8} y={(Y(f(1)) + Y(f(3))) / 2 + 5} fontFamily={HAND} fontSize="16" fill="#c0702a">RISE = 3</text>
        <Buddy x={X(0)} y={Y(2)} r={10} />
        <text x={X(3.8)} y={Y(6.6)} fontFamily={HAND} fontSize="22" fill={c}>y = 1.5x + 2</text>
        <Label x={20} y={150} w={200} color={c} title="y-intercept b = 2" lines={["where the line", "crosses the y-axis"]} /><Link from={[220, 172]} to={[X(0) - 11, Y(2)]} color={c} bend={-10} />
        <Label x={20} y={30} w={200} color="#c0702a" title="slope m = 3 / 2" lines={["rise over run:", "up 3 for every 2 across"]} /><Link from={[220, 60]} to={[X(2), Y(f(1))]} color="#c0702a" bend={20} />
        <Label x={540} y={150} w={130} color={INK} title="parallel lines" lines={["same slope,", "never meet"]} />
      </svg>
    );
  },
  systems: (c) => {
    const { X, Y, path, Axes } = plot([60, 30, 300, 240], [-1, 6], [-1, 7]); // y = x + 1 and y = -0.5x + 4 meet at (2, 3)
    return (
      <svg viewBox="0 0 680 310"><Defs c={c} />
        <Axes />
        <path d={path((x) => x + 1, -1, 5.8)} stroke={c} strokeWidth="3.2" fill="none" strokeLinecap="round" filter="url(#ps)" />
        <path d={path((x) => -0.5 * x + 4, -1, 6)} stroke="#2a9d8f" strokeWidth="3.2" fill="none" strokeLinecap="round" filter="url(#ps)" />
        <text x={X(0.6)} y={Y(5.2)} fontFamily={HAND} fontSize="16" fill={c}>y = x + 1</text>
        <text x={X(3.4)} y={Y(1.2)} fontFamily={HAND} fontSize="16" fill="#2a9d8f">y = -0.5x + 4</text>
        <Buddy x={X(2)} y={Y(3)} r={11} mood="wow" />
        <path d={`M${X(2)} ${Y(3)} V${Y(0)} M${X(2)} ${Y(3)} H${X(0)}`} stroke="#b8a6e8" strokeWidth="1.3" strokeDasharray="4 4" />
        <Label x={380} y={14} w={200} color={c} title="one solution: (2, 3)" lines={["the lines cross here", "x = 2 and y = 3"]} /><Link from={[380, 50]} to={[X(2) + 12, Y(3) - 4]} color={c} bend={-30} />
        <g transform="translate(380 120)" filter="url(#ps)"><rect width="140" height="120" rx="10" fill="#fff" stroke="#d6d9de" /><path d="M14 104 L96 26 M44 108 L126 30" stroke="#d0496d" strokeWidth="2.6" /><text x="70" y="20" textAnchor="middle" fontFamily={HAND} fontSize="14" fill="#d0496d">NO SOLUTION</text><text x="70" y="118" textAnchor="middle" fontFamily={HAND} fontSize="12" fill={INK}>SAME SLOPE</text></g>
        <g transform="translate(530 120)" filter="url(#ps)"><rect width="140" height="120" rx="10" fill="#fff" stroke="#d6d9de" /><path d="M14 104 L126 26" stroke="#3f9d5a" strokeWidth="7" opacity=".3" /><path d="M14 104 L126 26" stroke="#3f9d5a" strokeWidth="2.2" strokeDasharray="7 5" /><text x="70" y="20" textAnchor="middle" fontFamily={HAND} fontSize="14" fill="#3f9d5a">INFINITELY MANY</text><text x="70" y="118" textAnchor="middle" fontFamily={HAND} fontSize="12" fill={INK}>SAME LINE</text></g>
        <text x="380" y="270" fontFamily={HAND} fontSize="14" fill={INK}>SUBSTITUTE: x + 1 = -0.5x + 4</text><text x="380" y="290" fontFamily={HAND} fontSize="14" fill={INK}>1.5x = 3, SO x = 2, y = 3</text>
      </svg>
    );
  },
  quadratics: (c) => {
    const { X, Y, path, Axes } = plot([240, 24, 260, 250], [-1, 7], [-5, 8]); // y = (x - 3)² - 4: roots 1 and 5, vertex (3, -4)
    const f = (x) => (x - 3) ** 2 - 4;
    return (
      <svg viewBox="0 0 680 310"><Defs c={c} />
        <Axes every={2} />
        <path d={path(f, -0.55, 6.55)} fill="none" stroke={c} strokeWidth="3.4" strokeLinecap="round" filter="url(#ps)" />
        <path d={`M${X(3)} ${Y(8)} V${Y(-5)}`} stroke={INK} strokeWidth="1.3" strokeDasharray="6 5" />
        <circle cx={X(1)} cy={Y(0)} r="6" fill="#fff" stroke={c} strokeWidth="2.4" /><circle cx={X(5)} cy={Y(0)} r="6" fill="#fff" stroke={c} strokeWidth="2.4" />
        <Buddy x={X(3)} y={Y(-4) - 10} r={10} />
        <text x="520" y="50" fontFamily={HAND} fontSize="19" fill={c}>y = (x - 3)² - 4</text>
        <Label x={10} y={30} w={200} color={c} title="roots: x = 1 and x = 5" lines={["where the curve", "meets the x-axis (y = 0)"]} /><Link from={[210, 70]} to={[X(1) - 6, Y(0) - 3]} color={c} bend={-10} />
        <Label x={10} y={190} w={200} color="#c0702a" title="vertex (3, -4)" lines={["x = -b / 2a", "the lowest point"]} /><Link from={[210, 220]} to={[X(3) - 11, Y(-4) - 10]} color="#c0702a" bend={10} />
        <Label x={520} y={110} w={150} color={INK} title="axis: x = 3" lines={["halfway between", "the two roots"]} /><Link from={[520, 140]} to={[X(3) + 2, Y(2)]} color={INK} bend={-10} />
        <text x="520" y="250" fontFamily={HAND} fontSize="14" fill={c}>a &gt; 0 OPENS UP</text><text x="520" y="270" fontFamily={HAND} fontSize="14" fill={c}>a &lt; 0 OPENS DOWN</text>
      </svg>
    );
  },
  exponential: (c) => {
    const { X, Y, path, Axes } = plot([60, 30, 300, 240], [0, 4], [0, 16]);
    const grow = (t) => 2 ** t, decay = (t) => 16 * 0.5 ** t;
    return (
      <svg viewBox="0 0 680 310"><Defs c={c} />
        <Axes step={1} every={4} xl="t" />
        <path d={path(grow, 0, 4)} fill="none" stroke={c} strokeWidth="3.2" filter="url(#ps)" />
        <path d={path(decay, 0, 4)} fill="none" stroke="#d0496d" strokeWidth="3.2" filter="url(#ps)" />
        {[0, 1, 2, 3, 4].map((t) => <g key={t}><circle cx={X(t)} cy={Y(grow(t))} r="4" fill="#fff" stroke={c} strokeWidth="1.8" /><circle cx={X(t)} cy={Y(decay(t))} r="4" fill="#fff" stroke="#d0496d" strokeWidth="1.8" /></g>)}
        <text x={X(3.2)} y={Y(13)} fontFamily={HAND} fontSize="16" fill={c}>y = 2ᵗ</text>
        <text x={X(0.5)} y={Y(13.4)} fontFamily={HAND} fontSize="16" fill="#d0496d">y = 16(0.5)ᵗ</text>
        <g transform={`translate(${X(4) + 14} ${Y(16) + 6})`} filter="url(#ps)"><path d="M0 14 C-2 4 4 -4 10 -6 C10 2 6 10 0 14 Z" fill="#9fd477" stroke={INK} strokeWidth="1" /><path d="M0 14 C4 6 10 2 18 2 C16 10 8 14 0 14 Z" fill="#7fc25a" stroke={INK} strokeWidth="1" /><path d="M0 14 V26" stroke="#5d8a3a" strokeWidth="1.4" /></g>
        <g transform={`translate(${X(4) + 6} ${Y(1) - 18})`} filter="url(#ps)"><path d="M0 8 L10 2 L22 8 L22 22 L12 28 L0 22 Z" fill="#cbeaf8" stroke={INK} strokeWidth="1" /><path d="M0 8 L12 14 L22 8 M12 14 V28" fill="none" stroke={INK} strokeWidth=".8" /><circle cx="5" cy="15" r="1" fill={INK} /><circle cx="9" cy="17" r="1" fill={INK} /><path d="M4 21 q2 -2 4 0" fill="none" stroke={INK} strokeWidth=".8" /><path d="M6 30 q1 4 3 0" fill="#8fcaf0" stroke={INK} strokeWidth=".6" /></g>
        <Label x={400} y={18} w={270} color={c} title="growth: doubles each step" lines={["y = a(1 + r)ᵗ: 1, 2, 4, 8, 16"]} h={26} />
        <Label x={400} y={98} w={270} color="#d0496d" title="decay: halves each step" lines={["y = a(1 - r)ᵗ: 16, 8, 4, 2, 1"]} h={26} />
        <Label x={400} y={178} w={270} color={INK} title="a = the starting amount" lines={["the value when t = 0"]} h={26} />
        <text x="400" y="270" fontFamily={HAND} fontSize="14" fill={INK}>UP 10% THEN DOWN 10%: 1.1 × 0.9 = 0.99</text>
      </svg>
    );
  },
  geometry: (c) => {
    const u = 82, r3 = Math.sqrt(3); // 30-60-90: legs u and u√3, hypotenuse 2u
    const A = [30, 250], B = [30 + u * r3, 250], C = [30 + u * r3, 250 - u];
    const v = 120; // 45-45-90: legs v and v, hypotenuse v√2
    const D = [250, 250], E = [250 + v, 250], F = [250 + v, 250 - v];
    return (
      <svg viewBox="0 0 680 310"><Defs c={c} />
        <text x="30" y="30" fontFamily={HAND} fontSize="18" fill={c}>30-60-90</text><text x="250" y="30" fontFamily={HAND} fontSize="18" fill="#2a9d8f">45-45-90</text>
        <g filter="url(#ps)"><path d={`M${A} L${B} L${C} Z`} fill="url(#pc)" stroke={c} strokeWidth="2.2" strokeLinejoin="round" /></g>
        <path d={`M${B[0] - 13} ${B[1]} V${B[1] - 13} H${B[0]}`} fill="none" stroke={INK} strokeWidth="1.2" />
        <text x={(A[0] + B[0]) / 2} y={B[1] + 22} textAnchor="middle" fontFamily={HAND} fontSize="17" fill={INK}>x√3</text>
        <text x={B[0] + 8} y={(B[1] + C[1]) / 2 + 5} fontFamily={HAND} fontSize="17" fill={INK}>x</text>
        <text x={(A[0] + C[0]) / 2 - 18} y={(A[1] + C[1]) / 2 - 6} fontFamily={HAND} fontSize="17" fill={INK}>2x</text>
        <path d={`M${A[0] + 30} ${A[1]} A30 30 0 0 0 ${A[0] + 30 * Math.cos(Math.PI / 6)} ${A[1] - 30 * Math.sin(Math.PI / 6)}`} fill="none" stroke={c} strokeWidth="1.3" /><text x={A[0] + 36} y={A[1] - 6} fontFamily={HAND} fontSize="14" fill={c}>30°</text>
        <text x={C[0] - 22} y={C[1] + 30} fontFamily={HAND} fontSize="14" fill={c}>60°</text>
        <g filter="url(#ps)"><path d={`M${D} L${E} L${F} Z`} fill="#e3f6f2" stroke="#2a9d8f" strokeWidth="2.2" strokeLinejoin="round" /></g>
        <path d={`M${E[0] - 13} ${E[1]} V${E[1] - 13} H${E[0]}`} fill="none" stroke={INK} strokeWidth="1.2" />
        <text x={(D[0] + E[0]) / 2} y={E[1] + 22} textAnchor="middle" fontFamily={HAND} fontSize="17" fill={INK}>x</text>
        <text x={E[0] + 8} y={(E[1] + F[1]) / 2 + 5} fontFamily={HAND} fontSize="17" fill={INK}>x</text>
        <text x={(D[0] + F[0]) / 2 - 30} y={(D[1] + F[1]) / 2 - 4} fontFamily={HAND} fontSize="17" fill={INK}>x√2</text>
        <text x={D[0] + 34} y={D[1] - 6} fontFamily={HAND} fontSize="14" fill="#2a9d8f">45°</text>
        <g transform="translate(560 150)">
          <g filter="url(#ps)"><circle r="82" fill="#fff" stroke={INK} strokeWidth="1.8" /></g>
          <path d={`M0 0 L82 0 A82 82 0 0 0 ${82 * Math.cos(Math.PI / 3)} ${-82 * Math.sin(Math.PI / 3)} Z`} fill="#ffe08a" stroke="#c0782f" strokeWidth="1.6" />
          <path d={`M22 0 A22 22 0 0 0 ${22 * Math.cos(Math.PI / 3)} ${-22 * Math.sin(Math.PI / 3)}`} fill="none" stroke="#c0782f" strokeWidth="1.2" /><text x="26" y="-12" fontFamily={HAND} fontSize="14" fill="#c0782f">60°</text>
          <text x="40" y="18" fontFamily={HAND} fontSize="15" fill={INK}>r</text><circle r="3" fill={INK} />
          <Buddy x={-34} y={20} r={12} />
          <text x="0" y="108" textAnchor="middle" fontFamily={HAND} fontSize="14" fill={INK}>SECTOR = 60/360 × πr²</text>
          <text x="0" y="126" textAnchor="middle" fontFamily={HAND} fontSize="14" fill={INK}>= ONE SIXTH OF THE CIRCLE</text>
        </g>
      </svg>
    );
  },
  stats: (c) => {
    const data = [2, 3, 3, 4, 4, 4, 5, 5, 6, 14]; // mean 5, median 4
    const X = (v) => 40 + v * 40;
    return (
      <svg viewBox="0 0 680 310"><Defs c={c} />
        <path d="M30 236 H650" stroke={INK} strokeWidth="1.5" />
        {Array.from({ length: 16 }, (_, i) => <g key={i}><path d={`M${X(i)} 236 v6`} stroke={INK} strokeWidth="1.2" /><text x={X(i)} y="258" textAnchor="middle" fontFamily={HAND} fontSize="14" fill="#6b7682">{i}</text></g>)}
        {data.map((v, i, all) => { const n = all.slice(0, i).filter((x) => x === v).length; return v === 14 ? <Buddy key={i} x={X(v)} y={222} r={12} color="#f7b0bd" mood="worried" /> : <Buddy key={i} x={X(v)} y={222 - n * 26} r={11} color="#bfe6c9" />; })}
        <path d={`M${X(4)} 116 V236`} stroke={c} strokeWidth="2.4" strokeDasharray="6 5" /><path d={`M${X(5)} 70 V236`} stroke="#d0496d" strokeWidth="2.4" strokeDasharray="6 5" />
        <Label x={X(4) - 150} y={80} w={140} color={c} title="median = 4" lines={["middle value"]} h={26} /><Link from={[X(4) - 10, 106]} to={[X(4), 130]} color={c} bend={10} />
        <Label x={X(5) + 14} y={30} w={170} color="#d0496d" title="mean = 5" lines={["50 ÷ 10, pulled up", "by the outlier"]} />
        <Label x={460} y={120} w={200} color="#d0496d" title="outlier: 14" lines={["far from the rest:", "moves the mean most"]} /><Link from={[560, 172]} to={[X(14) - 6, 208]} color="#d0496d" bend={10} />
        <text x="30" y="292" fontFamily={HAND} fontSize="14" fill={INK}>DATA: 2, 3, 3, 4, 4, 4, 5, 5, 6, 14</text>
      </svg>
    );
  },
  boundaries: (c) => {
    const rows = [["; SEMICOLON", true], [", AND   , BUT   , SO", true], [". FULL STOP", true], [", COMMA ALONE", false]];
    return (
      <svg viewBox="0 0 680 310"><Defs c={c} />
        {rows.map(([joint, ok], i) => (
          <g key={joint} transform={`translate(10 ${16 + i * 72})`}>
            <g filter="url(#ps)"><rect width="210" height="48" rx="9" fill="#e4f0fc" stroke={c} strokeWidth="1.3" /><rect width="210" height="20" rx="9" fill="url(#pg)" /></g><text x="105" y="30" textAnchor="middle" fontFamily={HAND} fontSize="16" fill={c}>COMPLETE SENTENCE</text>
            <g filter="url(#ps)"><rect x="220" y="2" width="190" height="44" rx="22" fill={ok ? "#e6f5e9" : "#fce8ee"} stroke={ok ? "#3f9d5a" : "#d0496d"} strokeWidth="1.3" /></g><text x="315" y="30" textAnchor="middle" fontFamily={HAND} fontSize="16" fill={ok ? "#3f9d5a" : "#d0496d"}>{joint}</text>
            <g filter="url(#ps)"><rect x="420" width="210" height="48" rx="9" fill="#e4f0fc" stroke={c} strokeWidth="1.3" /><rect x="420" width="210" height="20" rx="9" fill="url(#pg)" /></g><text x="525" y="30" textAnchor="middle" fontFamily={HAND} fontSize="16" fill={c}>COMPLETE SENTENCE</text>
            <Buddy x={650} y={24} r={11} color={ok ? "#bfe6c9" : "#f7b0bd"} mood={ok ? "happy" : "worried"} />
          </g>
        ))}
      </svg>
    );
  },
  agreement: (c) => (
    <svg viewBox="0 0 680 310"><Defs c={c} />
      <text x="20" y="32" fontFamily={HAND} fontSize="17" fill={INK}>FIND THE TRUE SUBJECT AND SKIP THE WORDS IN BETWEEN:</text>
      <g transform="translate(20 66)">
        <g filter="url(#ps)"><rect width="160" height="58" rx="9" fill="#fdf0e1" stroke={c} strokeWidth="1.4" /></g><text x="80" y="37" textAnchor="middle" fontFamily={HAND} fontSize="21" fill={c}>THE BOX</text>
        <rect x="172" width="260" height="58" rx="9" fill="#f3f4f6" stroke="#b8bec6" strokeDasharray="6 4" /><text x="302" y="37" textAnchor="middle" fontFamily={HAND} fontSize="19" fill="#9aa2ac">OF OLD PHOTOS</text><path d="M184 29 H420" stroke="#d0496d" strokeWidth="2.4" />
        <g filter="url(#ps)"><rect x="444" width="190" height="58" rx="9" fill="#e6f5e9" stroke="#3f9d5a" strokeWidth="1.4" /></g><text x="539" y="37" textAnchor="middle" fontFamily={HAND} fontSize="21" fill="#3f9d5a">IS HEAVY ✓</text>
        <path d="M80 64 C80 118 539 118 539 64" fill="none" stroke={c} strokeWidth="1.8" strokeDasharray="7 5" /><text x="310" y="124" textAnchor="middle" fontFamily={HAND} fontSize="15" fill={c}>ONE BOX → IS, NOT ARE</text>
        <g transform="translate(62 -14)"><Buddy x={0} y={0} r={11} color="#ffe0b8" /></g>
      </g>
      <Label x={20} y={222} w={200} h={26} color={c} title="each, every, one" lines={["are singular"]} />
      <Label x={240} y={222} w={200} h={26} color="#2f7fd0" title="a company" lines={["takes it and its"]} />
      <Label x={460} y={222} w={200} h={26} color="#3f9d5a" title="earlier past" lines={["had + past participle"]} />
    </svg>
  ),
  transitions: () => {
    const signs = [["CONTRAST", "however, yet", "#d0496d", -3], ["ADDITION", "moreover, also", "#2f7fd0", 3], ["RESULT", "therefore, thus", "#3f9d5a", -2], ["EXAMPLE", "for instance", "#c0782f", 3]];
    return (
      <svg viewBox="0 0 680 310"><Defs c="#7a5cd6" />
        <ellipse cx="340" cy="296" rx="80" ry="8" fill="#000" opacity=".1" />
        <path d="M340 26 V292" stroke="#a37548" strokeWidth="10" strokeLinecap="round" /><path d="M337 30 V290" stroke="#c99a62" strokeWidth="3" strokeLinecap="round" />
        {signs.map(([t, ex, col, rot], i) => {
          const left = i % 2 === 0, y = 34 + i * 62;
          return (
            <g key={t} transform={`rotate(${rot} 340 ${y + 22})`} filter="url(#ps)">
              <path d={left ? `M346 ${y} H140 L112 ${y + 24} L140 ${y + 48} H346 Z` : `M334 ${y} H540 L568 ${y + 24} L540 ${y + 48} H334 Z`} fill="#fff" stroke={col} strokeWidth="1.8" />
              <path d={left ? `M346 ${y} H140 L126 ${y + 12} H346 Z` : `M334 ${y} H540 L554 ${y + 12} H334 Z`} fill={col} opacity=".12" />
              <text x={left ? 230 : 450} y={y + 22} textAnchor="middle" fontFamily={HAND} fontSize="19" fill={col}>{t}</text>
              <text x={left ? 230 : 450} y={y + 40} textAnchor="middle" fontFamily={HAND} fontSize="14" fill={INK}>{ex.toUpperCase()}</text>
            </g>
          );
        })}
        <g transform="translate(600 250)"><Buddy x={0} y={0} r={14} color="#d1c1f2" look={-2} /></g>
        <text x="560" y="290" fontFamily={HAND} fontSize="13" fill={INK}>WHICH WAY?</text>
      </svg>
    );
  },
  words: (c) => (
    <svg viewBox="0 0 680 310"><Defs c={c} />
      <g filter="url(#ps)"><rect x="20" y="40" width="640" height="96" rx="12" fill="#fff" stroke="#d6d9de" /></g>
      <text x="44" y="78" fontFamily={HAND} fontSize="19" fill={INK}>THE CRITIC WAS NOT IMPRESSED;</text>
      <rect x="318" y="58" width="108" height="28" rx="6" fill="#fce8ee" />
      <text x="324" y="78" fontFamily={HAND} fontSize="19" fill={c}>HOWEVER,</text>
      <text x="434" y="78" fontFamily={HAND} fontSize="19" fill={INK}>THE CROWD WAS</text>
      <path d="M44 112 H160" stroke={INK} strokeWidth="2" /><text x="166" y="116" fontFamily={HAND} fontSize="19" fill={INK}>.</text>
      <g transform="translate(372 72) rotate(-22)" filter="url(#ps)"><path d="M32 30 L70 68" stroke="#7a5230" strokeWidth="10" strokeLinecap="round" /><circle r="44" fill="#e9f5fd" fillOpacity=".35" stroke={INK} strokeWidth="3.4" /><path d="M-26 -20 C-18 -32 -4 -38 8 -38" stroke="#fff" strokeWidth="3" fill="none" /></g>
      <Label x={40} y={176} w={270} color={c} title="clue word: however" lines={["the crowd felt the opposite", "of not impressed"]} />
      <Label x={360} y={176} w={290} color="#3f9d5a" title="predict, then match" lines={["delighted? thrilled?", "pick the closest choice"]} />
      <g transform="translate(330 270)"><Buddy x={0} y={0} r={13} mood="wow" /></g>
    </svg>
  ),
  evidence: (c) => {
    const vals = [3, 5, 7, 4]; // visits in thousands; 2023 is the peak
    const base = 250, s = 26;
    return (
      <svg viewBox="0 0 680 310"><Defs c={c} />
        <path d={`M60 ${base} H360 M60 ${base} V40`} stroke={INK} strokeWidth="1.5" />
        {[0, 2, 4, 6, 8].map((v) => <g key={v}><path d={`M56 ${base - v * s} H360`} stroke="#e3eaf2" strokeWidth=".8" /><text x="50" y={base - v * s + 4} textAnchor="end" fontFamily={HAND} fontSize="13" fill="#6b7682">{v}k</text></g>)}
        {vals.map((v, i) => {
          const x = 80 + i * 70, top = base - v * s, peak = i === 2;
          return (
            <g key={i}>
              <g filter="url(#ps)"><rect x={x} y={top} width="46" height={v * s} rx="5" fill={peak ? c : "#bfe6c9"} fillOpacity={peak ? .65 : 1} stroke={c} strokeWidth="1.3" /></g>
              <rect x={x + 5} y={top + 4} width="10" height={v * s - 8} rx="4" fill="#fff" opacity=".35" />
              <text x={x + 23} y={base + 20} textAnchor="middle" fontFamily={HAND} fontSize="14" fill={INK}>{2021 + i}</text>
              {peak && <Buddy x={x + 23} y={top - 16} r={11} />}
            </g>
          );
        })}
        <text x="60" y="30" fontFamily={HAND} fontSize="14" fill={INK}>MUSEUM VISITS PER YEAR</text>
        <Label x={410} y={20} w={260} h={26} color={INK} title="claim" lines={["visits peaked in 2023"]} />
        <Label x={410} y={110} w={260} h={26} color="#3f9d5a" title="✓ proves it" lines={["2023 has the tallest bar: 7k"]} /><Link from={[410, 140]} to={[80 + 2 * 70 + 34, base - 7 * s - 22]} color="#3f9d5a" bend={-20} />
        <Label x={410} y={200} w={260} h={26} color="#d0496d" title="✗ true but off topic" lines={["visits rose from 2021 to 2022"]} />
      </svg>
    );
  },
};

const DECOR = ["tape", "pin", "fold", "tape"];

export function SheetPoster({ sheet }) {
  const p = POSTER[sheet.id] || POSTER.linear;
  const fig = FIG[sheet.id];
  return (
    <article className="poster" style={{ "--pc": p.color, "--ps": p.soft }}>
      <header className="poster-head">
        <span className="poster-chip">SAT</span><span className="poster-chip soft">{sheet.subject === "Math" ? "MATH" : "READING & WRITING"}</span>
        <h2>{sheet.title}</h2><span className="poster-rule" />
        <Mascot size={70} pose={p.pose} />
      </header>
      <p className="poster-tag"><span>★</span>{p.tagline}<span>★</span></p>
      {fig && <section className="poster-fig">{fig(p.color)}</section>}
      <div className="poster-grid">
        {sheet.blocks.map(([h, lines], i) => (
          <section key={h} className={"poster-box " + DECOR[i % DECOR.length] + (i === 1 ? " dashed" : "")} style={{ "--r": `${((i % 3) - 1) * 0.5}deg` }}>
            <h3>{i + 1}. {h}</h3>
            <ul>{lines.map((l) => <li key={l}>{l}</li>)}</ul>
          </section>
        ))}
      </div>
      <section className="poster-key"><div><h3>Key point</h3><p>{p.key}</p></div><Mascot size={78} pose={p.pose === "cheer" ? "wave" : "cheer"} /></section>
      <footer className="poster-foot"><span>Find notes, quizzes, flashcards and full tests on <b>Testiddle</b></span><Mascot size={40} pose="sit" /></footer>
    </article>
  );
}

/** A small preview of a sheet's diagram for the list. */
export function SheetThumb({ sheet }) {
  const p = POSTER[sheet.id] || POSTER.linear;
  return <span className="poster-thumb" style={{ "--pc": p.color, "--ps": p.soft }}><span className="poster-thumb-title">{sheet.title}</span>{FIG[sheet.id] && FIG[sheet.id](p.color)}</span>;
}
