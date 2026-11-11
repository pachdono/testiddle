// Diagrams for the physics sections added with the full syllabus: refraction and total internal
// reflection, a lens ray diagram, the three pin plug, series and parallel circuits, the motor
// effect, momentum, sound, nuclide notation, the Solar System and formula tables.

import { INK, Label, Defs, T, Arrow, HAND, Face } from "../posterKit.jsx";
import { table, compare, flow } from "./gen.jsx";
import chemistry from "./chemistry.jsx";

const V = "0 0 680 310";
const GLASS = "#dff1fb";

/** A ray: a line with an arrow head part way along. */
const Ray = ({ a, b, color = "#d0496d", at = 0.55 }) => {
  const m = [a[0] + (b[0] - a[0]) * at, a[1] + (b[1] - a[1]) * at];
  return <g><path d={`M${a[0]} ${a[1]} L${b[0]} ${b[1]}`} stroke={color} strokeWidth="2.2" /><Arrow from={[m[0] - (b[0] - a[0]) * 0.02, m[1] - (b[1] - a[1]) * 0.02]} to={m} color={color} width={2.2} head={9} /></g>;
};
const Normal = ({ x, y, len = 60, horizontal = false }) => <path d={horizontal ? `M${x - len} ${y} H${x + len}` : `M${x} ${y - len} V${y + len}`} stroke={INK} strokeWidth="1.1" strokeDasharray="5 4" />;

const refraction = (c) => {
  // glass block: ray in at 50° to the normal, refracted at 31° (n = 1.5), out parallel to the incoming ray
  const top = 90, bot = 190, x1 = 120, d = (deg) => Math.tan((deg * Math.PI) / 180);
  const inA = [x1 - 70 * d(50), top - 70], x2 = x1 + (bot - top) * d(31), out = [x2 + 34 * d(50), bot + 34];
  return (
    <svg viewBox={V}><Defs c={c} />
      <T x={170} y={24} s={15} anchor="middle" fill={c}>REFRACTION IN A GLASS BLOCK</T>
      <rect x="40" y={top} width="260" height={bot - top} fill={GLASS} stroke={INK} strokeWidth="1.4" />
      <Normal x={x1} y={top} /><Normal x={x2} y={bot} />
      <Ray a={inA} b={[x1, top]} /><Ray a={[x1, top]} b={[x2, bot]} /><Ray a={[x2, bot]} b={out} />
      <path d={`M${x1} ${top - 26} A26 26 0 0 0 ${x1 - 26 * Math.sin(0.873)} ${top - 26 * Math.cos(0.873)}`} fill="none" stroke={INK} />
      <T x={x1 - 22} y={top - 32} s={13} anchor="end">i</T>
      <path d={`M${x1} ${top + 30} A30 30 0 0 0 ${x1 + 30 * Math.sin(0.541)} ${top + 30 * Math.cos(0.541)}`} fill="none" stroke={INK} />
      <T x={x1 + 10} y={top + 46} s={13}>r</T>
      <T x={170} y={226} s={13} anchor="middle">INTO GLASS: SLOWS, BENDS TOWARDS THE NORMAL</T>
      <T x={170} y={244} s={13} anchor="middle">OUT OF GLASS: SPEEDS UP, BENDS AWAY</T>
      <T x={170} y={268} s={14} anchor="middle" fill={c}>n = sin i ÷ sin r</T>
      <path d="M342 14 V296" stroke="#e3e7ec" strokeWidth="1.4" />
      <T x={512} y={24} s={15} anchor="middle" fill={c}>TOTAL INTERNAL REFLECTION</T>
      <path d="M392 190 H632 A120 120 0 0 0 392 190 Z" fill={GLASS} stroke={INK} strokeWidth="1.4" />
      <Normal x={512} y={190} len={70} />
      {(() => { const a = (55 * Math.PI) / 180, p = [512 - 118 * Math.sin(a), 190 - 118 * Math.cos(a)], q = [512 + 118 * Math.sin(a), 190 - 118 * Math.cos(a)];
        return <g><Ray a={p} b={[512, 190]} /><Ray a={[512, 190]} b={q} /><T x={p[0] - 6} y={p[1] - 4} s={12} anchor="end">ENTERS ALONG A RADIUS</T></g>; })()}
      <T x={540} y={176} s={12}>i &gt; c</T>
      <T x={512} y={226} s={13} anchor="middle">INSIDE GLASS, ANGLE BIGGER THAN</T>
      <T x={512} y={244} s={13} anchor="middle">THE CRITICAL ANGLE: ALL LIGHT REFLECTS</T>
      <T x={512} y={268} s={14} anchor="middle" fill={c}>n = 1 ÷ sin c</T>
      <T x={512} y={290} s={12} anchor="middle">USES: OPTICAL FIBRES, ENDOSCOPES, PERISCOPE PRISMS</T>
    </svg>
  );
};

const lens = (c) => {
  // object at u = 180 from a lens of f = 70: image at v = 114.5, height x0.64, real and inverted
  const L = 300, ax = 150, f = 70, u = 180, h = 50, v = (u * f) / (u - f), hi = (h * v) / u;
  const O = [L - u, ax - h], I = [L + v, ax + hi];
  return (
    <svg viewBox={V}><Defs c={c} />
      <path d={`M20 ${ax} H600`} stroke={INK} strokeWidth="1.2" />
      <path d={`M${L} 60 Q${L + 14} ${ax} ${L} 240 Q${L - 14} ${ax} ${L} 60 Z`} fill={GLASS} stroke={INK} strokeWidth="1.4" />
      {[-2, -1, 1, 2].map((k) => <g key={k}><circle cx={L + k * f} cy={ax} r="3" fill={INK} /><T x={L + k * f} y={ax + 20} s={13} anchor="middle">{Math.abs(k) === 2 ? "2F" : "F"}</T></g>)}
      <Arrow from={[O[0], ax]} to={O} color="#2f7fd0" width={3} head={10} />
      <Arrow from={[I[0], ax]} to={I} color="#7a5cd6" width={3} head={10} />
      <Ray a={O} b={[L, O[1]]} color="#d0496d" /><Ray a={[L, O[1]]} b={[I[0] + 40, O[1] + ((I[0] + 40 - L) * h) / f]} color="#d0496d" at={0.4} />
      <Ray a={O} b={[I[0] + 40, ax + ((I[0] + 40 - L) * h) / u]} color="#c0702a" at={0.3} />
      <T x={O[0]} y={O[1] - 10} s={13} anchor="middle" fill="#2f7fd0">OBJECT</T>
      <T x={I[0] + 8} y={I[1] + 20} s={13} anchor="middle" fill="#7a5cd6">IMAGE</T>
      <Label x={470} y={8} w={204} color="#d0496d" title="ray 1" lines={["parallel to the axis,", "then through F"]} />
      <Label x={470} y={96} w={204} color="#c0702a" title="ray 2" lines={["through the centre,", "straight on"]} />
      <T x={300} y={272} s={14} anchor="middle">OBJECT BEYOND 2F: IMAGE REAL, INVERTED, DIMINISHED (CAMERA, EYE)</T>
      <T x={300} y={292} s={13} anchor="middle">OBJECT INSIDE F: VIRTUAL, UPRIGHT, MAGNIFIED (MAGNIFYING GLASS)</T>
    </svg>
  );
};

const plug = (c) => (
  <svg viewBox={V}><Defs c={c} />
    <g filter="url(#ps)"><rect x="80" y="30" width="200" height="250" rx="26" fill="#f6f6f2" stroke={INK} strokeWidth="1.6" /></g>
    <rect x="160" y="50" width="40" height="28" rx="4" fill="#d6dbe2" stroke={INK} /><T x={180} y={70} s={12} anchor="middle">E</T>
    <rect x="104" y="150" width="40" height="28" rx="4" fill="#d6dbe2" stroke={INK} /><T x={124} y={170} s={12} anchor="middle">N</T>
    <rect x="216" y="150" width="40" height="28" rx="4" fill="#d6dbe2" stroke={INK} /><T x={236} y={170} s={12} anchor="middle">L</T>
    <rect x="222" y="96" width="28" height="46" rx="8" fill="#fff3d6" stroke={INK} /><T x={236} y={124} s={11} anchor="middle">FUSE</T>
    <path d="M180 250 V196 Q180 140 180 78" fill="none" stroke="#3f9d5a" strokeWidth="6" /><path d="M180 250 V196 Q180 140 180 78" fill="none" stroke="#f2d94e" strokeWidth="6" strokeDasharray="8 8" />
    <path d="M170 250 C160 220 130 210 124 178" fill="none" stroke="#2f7fd0" strokeWidth="6" />
    <path d="M190 250 C200 220 236 210 236 178" fill="none" stroke="#a86a3a" strokeWidth="6" />
    <rect x="146" y="236" width="68" height="18" rx="4" fill="#9aa6b2" stroke={INK} /><T x={140} y={250} s={11} anchor="end">CABLE GRIP</T>
    <rect x="160" y="254" width="40" height="40" fill="#555e69" stroke={INK} />
    <Label x={330} y={10} w={340} color="#a86a3a" title="live: brown, bottom right" lines={["carries 230 V; fuse and switch go here"]} />
    <Label x={330} y={86} w={340} color="#2f7fd0" title="neutral: blue, bottom left" lines={["completes the circuit, near 0 V"]} />
    <Label x={330} y={162} w={340} color="#3f9d5a" title="earth: green and yellow, top" lines={["safety: connects to a metal case"]} />
    <T x={500} y={258} s={13} anchor="middle">FUSE RATING: JUST ABOVE THE NORMAL CURRENT</T>
    <T x={500} y={278} s={13} anchor="middle">I = P ÷ V, E.G. 920 W ÷ 230 V = 4 A, SO A 5 A FUSE</T>
  </svg>
);

/** A lamp symbol: a circle with a cross. */
const Lamp = ({ x, y }) => <g><circle cx={x} cy={y} r="11" fill="#fff" stroke={INK} strokeWidth="1.8" /><path d={`M${x - 7.8} ${y - 7.8} L${x + 7.8} ${y + 7.8} M${x + 7.8} ${y - 7.8} L${x - 7.8} ${y + 7.8}`} stroke={INK} strokeWidth="1.5" /></g>;
const Meter = ({ x, y, k }) => <g><circle cx={x} cy={y} r="11" fill="#fff" stroke={INK} strokeWidth="1.8" /><text x={x} y={y + 5} textAnchor="middle" fontFamily={HAND} fontSize="14" fill={INK}>{k}</text></g>;
const Cell = ({ x, y }) => <g><path d={`M${x - 4} ${y - 9} V${y + 9}`} stroke={INK} strokeWidth="5" /><path d={`M${x + 6} ${y - 16} V${y + 16}`} stroke={INK} strokeWidth="2" /></g>;

const circuits = (c) => (
  <svg viewBox={V}><Defs c={c} />
    <T x={170} y={24} s={15} anchor="middle" fill={c}>SERIES</T><T x={510} y={24} s={15} anchor="middle" fill={c}>PARALLEL</T>
    <path d="M60 60 H159 M171 60 H280 V200 H60 V60" fill="none" stroke={INK} strokeWidth="2" />
    <Cell x={164} y={60} /><T x={164} y={44} s={12} anchor="middle">6 V</T>
<Lamp x={60} y={130} /><Lamp x={280} y={130} /><Meter x={170} y={200} k="A" />
    <T x={170} y={226} s={12} anchor="middle">1 A</T>
    <T x={40} y={134} s={12} anchor="end">3 Ω</T><T x={300} y={134} s={12}>3 Ω</T>
    <T x={170} y={256} s={13} anchor="middle">SAME CURRENT EVERYWHERE: 1 A</T>
    <T x={170} y={274} s={13} anchor="middle">P.D. SHARED: 3 V + 3 V = 6 V</T>
    <T x={170} y={292} s={13} anchor="middle">R = R₁ + R₂ = 6 Ω</T>
    <path d="M342 14 V296" stroke="#e3e7ec" strokeWidth="1.4" />
    <path d="M440 60 H499 M511 60 H580 M440 60 V200 H580 V60" fill="none" stroke={INK} strokeWidth="2" />
    <Cell x={504} y={60} /><T x={504} y={44} s={12} anchor="middle">6 V</T>
    <Lamp x={440} y={130} /><Lamp x={580} y={130} /><Meter x={510} y={200} k="A" />
    <T x={510} y={226} s={12} anchor="middle">4 A</T>
    <T x={420} y={134} s={12} anchor="end">3 Ω</T><T x={600} y={134} s={12}>3 Ω</T>
    <T x={460} y={170} s={11}>2 A</T><T x={560} y={170} s={11} anchor="end">2 A</T>
    <T x={510} y={256} s={13} anchor="middle">SAME P.D. ACROSS EACH BRANCH: 6 V</T>
    <T x={510} y={274} s={13} anchor="middle">CURRENT SPLITS: 2 A + 2 A = 4 A</T>
    <T x={510} y={292} s={13} anchor="middle">1/R = 1/R₁ + 1/R₂, SO R = 1.5 Ω</T>
  </svg>
);

const motor = (c) => (
  <svg viewBox={V}><Defs c={c} />
    <g filter="url(#ps)"><rect x="30" y="80" width="80" height="140" rx="6" fill="#e8546b" stroke={INK} /><rect x="370" y="80" width="80" height="140" rx="6" fill="#5b9be0" stroke={INK} /></g>
    <T x={70} y={156} s={22} anchor="middle" fill="#fff">N</T><T x={410} y={156} s={22} anchor="middle" fill="#fff">S</T>
    {[100, 130, 170, 200].map((y) => <g key={y}><path d={`M110 ${y} H370`} stroke="#9aa6b2" strokeWidth="1.2" /><path d={`M236 ${y - 4} l8 4 l-8 4`} fill="none" stroke="#9aa6b2" strokeWidth="1.2" /></g>)}
    <path d="M170 150 L310 150" stroke={INK} strokeWidth="1.4" strokeDasharray="6 4" />
    <circle cx="240" cy="150" r="4" fill={INK} /><T x={240} y={176} s={12} anchor="middle">AXIS</T>
    <circle cx="170" cy="150" r="14" fill="#fff" stroke={INK} strokeWidth="1.8" /><path d="M160 140 L180 160 M180 140 L160 160" stroke={INK} strokeWidth="1.8" />
    <circle cx="310" cy="150" r="14" fill="#fff" stroke={INK} strokeWidth="1.8" /><circle cx="310" cy="150" r="3.6" fill={INK} />
    <Arrow from={[170, 168]} to={[170, 236]} color="#d0496d" width={3} head={11} />
    <Arrow from={[310, 132]} to={[310, 64]} color="#d0496d" width={3} head={11} />
    <T x={170} y={256} s={13} anchor="middle" fill="#d0496d">FORCE DOWN</T><T x={310} y={56} s={13} anchor="middle" fill="#d0496d">FORCE UP</T>
    <path d="M286 236 A60 60 0 0 1 196 236" fill="none" stroke="#3f9d5a" strokeWidth="2" /><Arrow from={[274.8, 245.9]} to={[286, 236]} color="#3f9d5a" width={2} />
    <T x={240} y={290} s={13} anchor="middle" fill="#3f9d5a">THE COIL TURNS ANTICLOCKWISE</T>
    <Label x={480} y={8} w={194} color={INK} title="current" lines={["⊗ into the page", "⊙ out of the page"]} />
    <Label x={480} y={102} w={194} color="#d0496d" title="left hand rule" lines={["first finger: field", "second: current", "thumb: motion"]} />
    <Label x={480} y={214} w={194} color={c} title="commutator" lines={["reverses the current", "every half turn"]} />
  </svg>
);

const collision = (c) => {
  const cart = (x, y, w, col, text) => <g><g filter="url(#ps)"><rect x={x} y={y} width={w} height="40" rx="6" fill={col} stroke={INK} /></g><circle cx={x + 14} cy={y + 44} r="7" fill={INK} /><circle cx={x + w - 14} cy={y + 44} r="7" fill={INK} /><T x={x + w / 2} y={y + 26} s={14} anchor="middle">{text}</T></g>;
  return (
    <svg viewBox={V}><Defs c={c} />
      <T x={30} y={34} s={15} fill={c}>BEFORE</T><T x={30} y={164} s={15} fill={c}>AFTER</T>
      <path d="M20 112 H660 M20 242 H660" stroke="#9aa6b2" strokeWidth="2" />
      {cart(80, 60, 90, "#9fd3e8", "2 kg")}<Arrow from={[180, 80]} to={[250, 80]} color="#d0496d" width={2.6} /><T x={215} y={70} s={13} anchor="middle" fill="#d0496d">3 m/s</T>
      {cart(330, 60, 70, "#ffd2a8", "1 kg")}<T x={365} y={54} s={12} anchor="middle">AT REST</T>
      {cart(230, 190, 160, "#cdb8f2", "2 kg + 1 kg")}<Arrow from={[400, 210]} to={[470, 210]} color="#d0496d" width={2.6} /><T x={435} y={200} s={13} anchor="middle" fill="#d0496d">v = ?</T>
      <T x={500} y={60} s={14}>p = mv</T>
      <T x={500} y={84} s={14}>2 x 3 + 1 x 0 = 6 kg m/s</T>
      <T x={500} y={190} s={14}>6 = 3 x v</T>
      <T x={500} y={214} s={14} fill="#3f9d5a">v = 2 m/s</T>
      <T x={340} y={278} s={13} anchor="middle">TOTAL MOMENTUM BEFORE = TOTAL MOMENTUM AFTER (NO EXTERNAL FORCES)</T>
      <T x={340} y={298} s={13} anchor="middle">IMPULSE F x t = CHANGE IN MOMENTUM, SO A LONGER IMPACT MEANS A SMALLER FORCE</T>
    </svg>
  );
};

const sound = (c) => {
  // particle positions shifted by a sine so they bunch into compressions and spread into rarefactions
  const xs = Array.from({ length: 64 }, (_, i) => 40 + i * 9 + 10 * Math.sin((i / 64) * Math.PI * 2 * 3));
  return (
    <svg viewBox={V}><Defs c={c} />
      <T x={340} y={28} s={15} anchor="middle" fill={c}>A SOUND WAVE IS LONGITUDINAL</T>
      {xs.map((x, i) => [70, 90, 110, 130].map((y) => <circle key={`${i}${y}`} cx={x} cy={y + ((i * 7 + y) % 5) - 2} r="2.6" fill="#2f7fd0" />))}
      <Arrow from={[40, 160]} to={[640, 160]} color={INK} width={1.6} /><T x={640} y={180} s={12} anchor="end">DIRECTION OF TRAVEL</T>
      <path d="M8 100 h20 m-20 0 l6 -5 m-6 5 l6 5 M28 100 l-6 -5 m6 5 l-6 5" stroke="#d0496d" strokeWidth="1.4" fill="none" />
      <T x={128} y={58} s={13} anchor="middle" fill="#d0496d">COMPRESSION</T><T x={227} y={58} s={13} anchor="middle" fill="#2f7fd0">RAREFACTION</T>
      <path d="M90 166 V172 H290 V166" fill="none" stroke={INK} /><T x={190} y={190} s={13} anchor="middle">ONE WAVELENGTH</T>
      <Label x={20} y={206} w={200} color={c} title="speed in air" lines={["about 330 to 350 m/s", "faster in liquids, solids"]} />
      <Label x={240} y={206} w={200} color="#c0702a" title="pitch and loudness" lines={["pitch: frequency", "loudness: amplitude"]} />
      <Label x={460} y={206} w={200} color="#7a5cd6" title="hearing" lines={["20 Hz to 20 000 Hz", "ultrasound: above that"]} />
    </svg>
  );
};

const nuclide = (c) => (
  <svg viewBox={V}><Defs c={c} />
    <text x="120" y="150" fontFamily={HAND} fontSize="96" fill={INK}>C</text>
    <text x="92" y="92" fontFamily={HAND} fontSize="34" fill="#d0496d" textAnchor="end">14</text>
    <text x="92" y="150" fontFamily={HAND} fontSize="34" fill="#2f7fd0" textAnchor="end">6</text>
    <Label x={210} y={20} w={250} color="#d0496d" title="nucleon number A" lines={["protons + neutrons = 14"]} />
    <Label x={210} y={102} w={250} color="#2f7fd0" title="proton number Z" lines={["protons = 6 (sets the element)"]} />
    <T x={70} y={196} s={15}>NEUTRONS = A - Z = 14 - 6 = 8</T>
    {[[0, 0, "p"], [12, -10, "n"], [-12, -8, "p"], [6, 12, "n"], [-8, 12, "p"], [18, 6, "n"]].map(([dx, dy, k], i) => <circle key={i} cx={560 + dx} cy={70 + dy} r="10" fill={k === "p" ? "#e8546b" : "#b8c2cc"} stroke={INK} />)}
    <ellipse cx="560" cy="70" rx="80" ry="34" fill="none" stroke="#9aa6b2" /><ellipse cx="560" cy="70" rx="44" ry="58" fill="none" stroke="#9aa6b2" />
    <circle cx="640" cy="70" r="5" fill="#2f7fd0" /><circle cx="560" cy="12" r="5" fill="#2f7fd0" />
    <T x={560} y={150} s={12} anchor="middle">NUCLEUS: TINY, DENSE, POSITIVE</T>
    <rect x="70" y="214" width="560" height="74" rx="10" fill="#fff" stroke="#e3e7ec" />
    <T x={350} y={236} s={14} anchor="middle" fill={c}>ISOTOPES: SAME PROTONS, DIFFERENT NEUTRONS</T>
    <T x={190} y={264} s={15} anchor="middle">¹²₆C: 6 n</T><T x={350} y={264} s={15} anchor="middle">¹³₆C: 7 n</T><T x={510} y={264} s={15} anchor="middle">¹⁴₆C: 8 n (radioactive)</T>
    <T x={350} y={282} s={12} anchor="middle">[E] FISSION SPLITS A BIG NUCLEUS (U-235); FUSION JOINS SMALL ONES (H IN THE SUN)</T>
  </svg>
);

const solarSystem = (c) => {
  // Widths in proportion within each group (Earth = 1: Mercury 0.38, Venus 0.95, Mars 0.53;
  // Jupiter = 11.2: Saturn 9.45, Uranus 4.0, Neptune 3.9). The giants use a smaller scale.
  const rocky = [["Mercury", 3.8, "#b8a99a"], ["Venus", 9.5, "#e8c27a"], ["Earth", 10, "#4f9de0"], ["Mars", 5.3, "#d0704a"]];
  const giants = [["Jupiter", 34, "#d9a066"], ["Saturn", 28.7, "#e8d08a"], ["Uranus", 12.1, "#8fd6e0"], ["Neptune", 11.8, "#5b7ee0"]];
  const cy = 132, place = [];
  let x = 100;
  rocky.forEach(([n, r, col], i) => { x += (i ? 26 : 0) + r; place.push([n, r, col, x]); x += r; });
  const belt = x + 28;
  x = belt + 30;
  giants.forEach(([n, r, col], i) => { x += (i ? 24 : 0) + r + (n === "Saturn" || n === "Uranus" ? 14 : 0); place.push([n, r, col, x]); x += r; });
  return (
    <svg viewBox={V}><Defs c={c} />
      <circle cx="-120" cy={cy} r="180" fill="#ffcf4a" stroke="#f2a53a" strokeWidth="3" />
      <Face x={24} y={cy - 6} r={30} />
      <T x={28} y={cy + 44} s={15} anchor="middle" fill="#8a5a10">SUN</T>
      {Array.from({ length: 26 }, (_, i) => <circle key={i} cx={belt + 6 * Math.sin(i * 1.7)} cy={cy - 60 + i * 4.8} r={1 + (i % 3) * 0.6} fill="#9aa6b2" />)}
      <T x={belt} y={cy - 70} s={11} anchor="middle">ASTEROID BELT</T>
      {place.map(([n, r, col, px], i) => (
        <g key={n}>
          {n === "Saturn" && <path d={`M${px - r - 14} ${cy} A${r + 14} 6 0 0 1 ${px + r + 14} ${cy}`} fill="none" stroke="#b89a4a" strokeWidth="2.4" transform={`rotate(-12 ${px} ${cy})`} />}
          <g filter="url(#ps)"><circle cx={px} cy={cy} r={r} fill={col} stroke={INK} strokeWidth="1" /></g>
          {n === "Jupiter" && <><path d={`M${px - 30} ${cy + 9} Q${px} ${cy + 13} ${px + 30} ${cy + 9}`} stroke="#b9763e" strokeWidth="3" fill="none" opacity=".6" /><ellipse cx={px + 14} cy={cy + 18} rx="6" ry="3.4" fill="#c0603a" opacity=".7" /></>}
          {n === "Saturn" && <path d={`M${px - r - 14} ${cy} A${r + 14} 6 0 0 0 ${px + r + 14} ${cy}`} fill="none" stroke="#b89a4a" strokeWidth="2.4" transform={`rotate(-12 ${px} ${cy})`} />}
          {n === "Earth" && <path d={`M${px - 5} ${cy - 6} q4 -3 7 1 q-2 4 -6 3 Z M${px + 2} ${cy + 3} q4 0 4 4 q-4 1 -5 -2 Z`} fill="#6cc070" />}
          {r >= 5 ? <Face x={px} y={cy} r={r} /> : <><circle cx={px - 1.2} cy={cy - 0.5} r=".7" fill="#2b2f36" /><circle cx={px + 1.2} cy={cy - 0.5} r=".7" fill="#2b2f36" /></>}
          <T x={px} y={cy + Math.max(r, 12) + 18 + (i < 4 && i % 2 ? 16 : 0)} s={12} anchor="middle">{n.toUpperCase()}</T>
        </g>
      ))}
      <T x={168} y={218} s={12} anchor="middle" fill={c}>ROCKY PLANETS</T><T x={470} y={218} s={12} anchor="middle" fill={c}>GAS AND ICE GIANTS</T>
      <T x={340} y={248} s={12} anchor="middle">NOT TO SCALE: GIANTS DRAWN SMALLER. JUPITER IS ABOUT 11 TIMES EARTH'S WIDTH</T>
      <T x={340} y={268} s={12} anchor="middle">ORDER FROM THE SUN: MY VERY EASY METHOD JUST SPEEDS UP NAMING</T>
      <T x={340} y={290} s={12} anchor="middle">DAY: 24 H SPIN. YEAR: 365 DAYS. SEASONS: AXIS TILT. [E] ORBITAL SPEED v = 2πr ÷ T</T>
    </svg>
  );
};

export default {
  "physics-motion-3": table(["Quantity", "Equation", "Unit"], [["Weight", "W = mg (g = 9.8 N/kg)", "newton, N"], ["Density", "ρ = m ÷ V", "kg/m³ or g/cm³"], ["Pressure", "p = F ÷ A", "pascal, Pa = N/m²"], ["[E] Liquid pressure", "Δp = ρgΔh", "Pa"], ["Pressure law (Edexcel)", "p₁/T₁ = p₂/T₂ (T in K)", "Pa"]], { widths: [3, 4, 3], caption: "FLOATS IF LESS DENSE THAN THE LIQUID. PRESSURE IN A LIQUID RISES WITH DEPTH" }),
  "physics-motion-4": collision,
  "physics-motion-5": table(["Energy idea", "Equation", "Unit"], [["Kinetic energy", "Ek = ½mv²", "J"], ["Gravitational PE", "ΔEp = mgΔh", "J"], ["Work done", "W = Fd = ΔE", "J"], ["Power", "P = W ÷ t = ΔE ÷ t", "W"], ["Efficiency", "useful out ÷ total in x 100%", "%"]], { widths: [3, 4, 2], caption: "ENERGY IS CONSERVED: IT IS ONLY EVER TRANSFERRED BETWEEN STORES" }),
  "physics-motion-6": table(["Resource", "Renewable", "Big plus", "Big minus"], [["Fossil fuels", "No", "Reliable", "CO₂ and SO₂"], ["Nuclear", "No", "No CO₂, lots of energy", "Radioactive waste"], ["Wind", "Yes", "No fuel cost", "Unreliable"], ["Hydroelectric", "Yes", "Reliable, stores energy", "Floods valleys"], ["Tidal", "Yes", "Predictable", "Few sites"], ["Geothermal", "Yes", "Reliable", "Volcanic areas only"], ["Solar", "Yes", "No fuel, no CO₂", "None at night"]], { widths: [3, 2, 4, 4] }),
  "physics-thermal": chemistry["chemistry-states"],
  "physics-thermal-3": compare([["Conduction", ["Solids, best in metals", "Vibrating particles pass energy on", "[E] Free electrons carry it fast"]], ["Convection", ["Liquids and gases", "Warm fluid expands, less dense, rises", "Cool, dense fluid sinks"]], ["Radiation", ["Infrared waves, no medium", "Black: best absorber, emitter", "Shiny: best reflector"]]], { caption: "VACUUM FLASK: VACUUM STOPS CONDUCTION AND CONVECTION, SILVERING CUTS RADIATION" }),
  "physics-waves-2": refraction,
  "physics-waves-3": lens,
  "physics-waves-4": table(["Wave", "Use", "Danger"], [["Radio", "Radio and TV, RFID", "Low risk"], ["Microwaves", "Satellites, phones, ovens", "Internal heating"], ["Infrared", "Remotes, thermal imaging", "Skin burns"], ["Visible", "Seeing, photography", "Bright light harms eyes"], ["Ultraviolet", "Security marks, sterilising water", "Skin cancer, eye damage"], ["X-rays", "Medical scans, airport security", "Cell damage, cancer"], ["Gamma", "Sterilising, cancer treatment", "Cell damage, cancer"]], { widths: [2, 4, 3], caption: "FREQUENCY RISES DOWN THE TABLE. ALL TRAVEL AT 3.0 x 10⁸ m/s IN A VACUUM" }),
  "physics-waves-5": sound,
  "physics-electricity-2": circuits,
  "physics-electricity-3": plug,
  "physics-electricity-5": motor,
  "physics-electricity-6": flow([["Power station", "about 25 kV"], ["Step up transformer", "to 400 kV"], ["National grid", "high V, low I, less heat lost"], ["Step down transformer", "to 230 V"], ["Homes", "safe voltage"]], { caption: "Vp ÷ Vs = Np ÷ Ns.  [E] IpVp = IsVs.  POWER LOST IN CABLES = I²R" }),
  "physics-nuclear": nuclide,
  "physics-space": solarSystem,
};
