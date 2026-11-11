// Diagrams for the second sheet of some science and maths topics: the female reproductive system
// and gametes, dot and cross bonding, moments and Hooke's law, magnetic fields and transformers,
// graph shapes, and integration with kinematics.

import { INK, Label, Defs, plot, T, Arrow, Box, HAND } from "../posterKit.jsx";

const V = "0 0 680 310";

/** A short name with a thin leader line to what it names. */
const Tag = ({ x, y, at, children, anchor = "start", color = INK }) => {
  // the leader leaves from whichever side of the words faces the point, so it never crosses them
  const w = String(children).length * 6.6, x0 = anchor === "end" ? x - w : x, x1 = x0 + w;
  const from = at[0] < x0 ? [x0 - 4, y - 5] : at[0] > x1 ? [x1 + 4, y - 5] : [at[0], at[1] < y ? y - 16 : y + 5];
  return (
  <g>
    <path d={`M${from[0]} ${from[1]} L${at[0]} ${at[1]}`} stroke={color} strokeWidth="1" opacity=".75" />
    <circle cx={at[0]} cy={at[1]} r="2.4" fill={color} />
    <T x={x} y={y} s={14} anchor={anchor} fill={color}>{children}</T>
  </g>
  );
};

/** n electrons spaced round a shell. kinds lists "x" or "o" for each one. */
const shell = (cx, cy, r, kinds, start = -90) => kinds.map((k, i) => {
  const a = ((start + (i * 360) / kinds.length) * Math.PI) / 180, x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
  return k === "x"
    ? <path key={i} d={`M${x - 3.6} ${y - 3.6} L${x + 3.6} ${y + 3.6} M${x + 3.6} ${y - 3.6} L${x - 3.6} ${y + 3.6}`} stroke="#d0496d" strokeWidth="1.8" />
    : <circle key={i} cx={x} cy={y} r="3.4" fill="#2f7fd0" />;
});
const ring = (cx, cy, r) => <circle cx={cx} cy={cy} r={r} fill="none" stroke={INK} strokeWidth="1.1" />;
const bracket = (x0, x1, y0, y1, charge) => (
  <g fill="none" stroke={INK} strokeWidth="1.6">
    <path d={`M${x0 + 8} ${y0} H${x0} V${y1} H${x0 + 8} M${x1 - 8} ${y0} H${x1} V${y1} H${x1 - 8}`} />
    <text x={x1 + 4} y={y0 + 14} fontFamily={HAND} fontSize="20" fill={INK} stroke="none">{charge}</text>
  </g>
);

const repro = (c) => {
  const X = 190; // the system is symmetrical about X
  const tube = (s) => `M${X + s * 22} 92 C${X + s * 52} 74 ${X + s * 86} 70 ${X + s * 104} 88 C${X + s * 116} 100 ${X + s * 114} 112 ${X + s * 104} 116`;
  return (
    <svg viewBox={V}><Defs c={c} />
      {[-1, 1].map((s) => <g key={s}>
        <path d={tube(s)} fill="none" stroke={INK} strokeWidth="7.4" strokeLinecap="round" /><path d={tube(s)} fill="none" stroke="#f6b8c6" strokeWidth="5" strokeLinecap="round" />
        <path d={`M${X + s * 104} 116 l${s * -8} 6 m${s * 8} -6 l${s * 2} 9 m${s * -2} -9 l${s * 9} 4`} stroke={INK} strokeWidth="1.3" fill="none" />
        <g filter="url(#ps)"><ellipse cx={X + s * 100} cy={136} rx="16" ry="11" fill="#fbd5a6" stroke={INK} strokeWidth="1.3" /></g>
        <circle cx={X + s * 96} cy={134} r="3" fill="#fff" stroke={INK} strokeWidth=".8" />
      </g>)}
      <g filter="url(#ps)"><path d={`M${X - 26} 88 Q${X} 80 ${X + 26} 88 Q${X + 34} 128 ${X + 16} 168 Q${X + 10} 180 ${X + 8} 188 H${X - 8} Q${X - 10} 180 ${X - 16} 168 Q${X - 34} 128 ${X - 26} 88 Z`} fill="#f6b8c6" stroke={INK} strokeWidth="1.5" /></g>
      <path d={`M${X - 16} 96 Q${X} 92 ${X + 16} 96 Q${X + 6} 140 ${X} 168 Q${X - 6} 140 ${X - 16} 96 Z`} fill="#fde3ea" stroke="#d0496d" strokeWidth="1" />
      <path d={`M${X - 8} 188 H${X + 8} L${X + 9} 202 H${X - 9} Z`} fill="#eba0b2" stroke={INK} strokeWidth="1.3" />
      <path d={`M${X - 9} 202 L${X - 12} 276 H${X + 12} L${X + 9} 202`} fill="#f6c7d2" stroke={INK} strokeWidth="1.3" />
      <Tag x={10} y={46} at={[X - 70, 73]}>oviduct: fertilisation</Tag>
      <Tag x={20} y={192} at={[X - 100, 147]}>ovary: releases eggs</Tag>
      <Tag x={286} y={42} at={[X + 20, 104]} anchor="start">uterus: the</Tag><T x={286} y={58} s={14}>embryo develops</T>
      <Tag x={262} y={204} at={[X + 9, 195]}>cervix</Tag>
      <Tag x={262} y={254} at={[X + 11, 248]}>vagina</Tag>
      <T x={190} y={300} s={14} anchor="middle">FEMALE REPRODUCTIVE SYSTEM (FRONT)</T>
      <path d="M392 14 V296" stroke="#e3e7ec" strokeWidth="1.4" />
      <path d="M447 64 Q456 56 464 64 Q472 72 480 64 Q488 56 496 64" fill="none" stroke="#fff" />
      <path d="M498 68 C520 56 532 80 552 68 C572 56 584 80 604 68 C620 60 630 72 646 66" fill="none" stroke={INK} strokeWidth="1.6" />
      <rect x="462" y="62" width="38" height="12" rx="5" fill="#ffd2a8" stroke={INK} strokeWidth="1.2" />
      <path d="M470 62 V74 M478 62 V74 M486 62 V74 M494 62 V74" stroke="#c0702a" strokeWidth="1" />
      <ellipse cx="446" cy="68" rx="18" ry="11" fill="#d9ccf5" stroke={INK} strokeWidth="1.3" />
      <path d="M432 61 Q424 68 432 75" fill="#9fd3e8" stroke={INK} strokeWidth="1.1" />
      <T x={404} y={24} s={15} fill={c}>SPERM CELL</T>
      <Tag x={404} y={110} at={[430, 70]} anchor="start">acrosome: enzymes</Tag>
      <Tag x={404} y={134} at={[450, 72]} anchor="start">nucleus: haploid</Tag>
      <Tag x={488} y={44} at={[484, 62]} anchor="start">midpiece: mitochondria</Tag>
      <Tag x={596} y={104} at={[620, 70]} anchor="start">flagellum</Tag>
      <g filter="url(#ps)"><circle cx="468" cy="222" r="56" fill="#fff" stroke="#c0702a" strokeWidth="1.2" strokeDasharray="4 3" /></g>
      <circle cx="468" cy="222" r="46" fill="#fff3d6" stroke={INK} strokeWidth="1.3" />
      {[[446, 204], [490, 236], [452, 246], [492, 206], [478, 252], [440, 226]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="2.2" fill="#e0b25a" />)}
      <circle cx="472" cy="220" r="13" fill="#d9ccf5" stroke={INK} strokeWidth="1.2" />
      <T x={600} y={160} s={15} anchor="middle" fill={c}>EGG CELL</T>
      <Tag x={540} y={190} at={[516, 196]}>jelly coat</Tag>
      <Tag x={540} y={222} at={[484, 220]}>nucleus: haploid</Tag>
      <Tag x={540} y={254} at={[492, 238]}>energy store in</Tag><T x={540} y={270} s={14}>the cytoplasm</T>
      <T x={536} y={300} s={13} anchor="middle">NOT TO SCALE: THE EGG IS FAR LARGER</T>
    </svg>
  );
};

const bonding = (c) => (
  <svg viewBox={V}><Defs c={c} />
    {ring(108, 150, 20)}{ring(108, 150, 38)}
    {shell(108, 150, 20, ["x", "x"])}{shell(108, 150, 38, Array(8).fill("x"), -67.5)}
    <circle cx="108" cy="150" r="9" fill="#ffd2a8" stroke={INK} /><T x={108} y={155} s={12} anchor="middle">Na</T>
    {bracket(60, 156, 102, 198, "+")}
    {ring(268, 150, 20)}{ring(268, 150, 38)}{ring(268, 150, 56)}
    {shell(268, 150, 20, ["o", "o"])}{shell(268, 150, 38, Array(8).fill("o"), -67.5)}{shell(268, 150, 56, ["x", "o", "o", "o", "o", "o", "o", "o"], 180)}
    <circle cx="268" cy="150" r="9" fill="#bfe6a8" stroke={INK} /><T x={268} y={155} s={12} anchor="middle">Cl</T>
    {bracket(202, 334, 84, 216, "−")}
    <T x={108} y={240} s={15} anchor="middle">Na⁺ (2,8)</T><T x={268} y={240} s={15} anchor="middle">Cl⁻ (2,8,8)</T>
    <T x={190} y={30} s={16} anchor="middle" fill={c}>IONIC: SODIUM CHLORIDE</T>
    <T x={190} y={270} s={13} anchor="middle">ONE ELECTRON TRANSFERRED FROM Na TO Cl</T>
    <path d="M372 14 V296" stroke="#e3e7ec" strokeWidth="1.4" />
    <T x={524} y={30} s={16} anchor="middle" fill={c}>COVALENT: WATER</T>
    {ring(524, 130, 40)}{ring(487, 172, 26)}{ring(561, 172, 26)}
    <circle cx="524" cy="130" r="10" fill="#9fd3e8" stroke={INK} /><T x={524} y={135} s={13} anchor="middle">O</T>
    <circle cx="483" cy="177" r="8" fill="#fff" stroke={INK} /><T x={483} y={182} s={12} anchor="middle">H</T>
    <circle cx="565" cy="177" r="8" fill="#fff" stroke={INK} /><T x={565} y={182} s={12} anchor="middle">H</T>
    {[[-120, -100], [-80, -60]].map(([a1, a2]) => [a1, a2].map((a) => <circle key={a} cx={524 + 40 * Math.cos((a * Math.PI) / 180)} cy={130 + 40 * Math.sin((a * Math.PI) / 180)} r="3.4" fill="#2f7fd0" />))}
    {[-1, 1].map((s) => {
      const hx = 524 + s * 37, hy = 172, ux = (hx - 524) / 56, uy = (hy - 130) / 56, mx = 524 + ux * 35, my = 130 + uy * 35, px = -uy * 5, py = ux * 5;
      return <g key={s}><circle cx={mx + px} cy={my + py} r="3.4" fill="#2f7fd0" /><path d={`M${mx - px - 3.6} ${my - py - 3.6} l7.2 7.2 m0 -7.2 l-7.2 7.2`} stroke="#d0496d" strokeWidth="1.8" /></g>;
    })}
    <T x={524} y={254} s={14} anchor="middle">TWO SHARED PAIRS, TWO LONE PAIRS ON O</T>
    <circle cx="430" cy="282" r="3.4" fill="#2f7fd0" /><T x={438} y={287} s={13}>O ELECTRON</T>
    <path d="M540 278 l7.2 7.2 m0 -7.2 l-7.2 7.2" stroke="#d0496d" strokeWidth="1.8" /><T x={552} y={287} s={13}>Na OR H ELECTRON</T>
  </svg>
);

const metallic = (c) => (
  <svg viewBox={V}><Defs c={c} />
    <rect x="40" y="40" width="330" height="220" rx="14" fill="#eef6ff" stroke={INK} strokeWidth="1.2" />
    {Array.from({ length: 4 }, (_, r) => Array.from({ length: 6 }, (_, k) => <g key={`${r}${k}`}><circle cx={72 + k * 53} cy={72 + r * 52} r="18" fill="#ffd2a8" stroke={INK} strokeWidth="1.2" /><T x={72 + k * 53} y={78 + r * 52} s={17} anchor="middle">+</T></g>))}
    {Array.from({ length: 3 }, (_, r) => Array.from({ length: 5 }, (_, k) => [98.5 + k * 53, 98 + r * 52])).flat().concat([[72, 46], [178, 46], [284, 46], [125, 254], [231, 254], [54, 150], [356, 202]]).map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="3.4" fill="#2f7fd0" />)}
    <Label x={400} y={20} w={270} color="#c0702a" title="positive metal ions" lines={["in a regular lattice"]} />
    <Label x={400} y={96} w={270} color="#2f7fd0" title="delocalised electrons" lines={["a sea of electrons free to move"]} />
    <Label x={400} y={172} w={270} color={c} title="properties" lines={["conduct: electrons move", "malleable: layers slide"]} />
    <T x={205} y={290} s={14} anchor="middle">STRONG ATTRACTION BETWEEN IONS AND ELECTRONS</T>
  </svg>
);

const forces = (c) => {
  const { X, Y, path, Axes } = plot([424, 50, 196, 190], [0, 10], [0, 10]);
  return (
    <svg viewBox={V}><Defs c={c} />
      <T x={185} y={30} s={16} anchor="middle" fill={c}>PRINCIPLE OF MOMENTS</T>
      <rect x="20" y="130" width="330" height="10" rx="3" fill="#e0b07c" stroke={INK} strokeWidth="1.3" />
      <g filter="url(#ps)"><path d="M185 140 L168 172 H202 Z" fill={c} stroke={INK} strokeWidth="1.2" /></g>
      <rect x="62" y="96" width="30" height="30" rx="3" fill="#d0d6de" stroke={INK} /><T x={77} y={116} s={14} anchor="middle">4 N</T>
      <rect x="315" y="102" width="26" height="24" rx="3" fill="#d0d6de" stroke={INK} /><T x={328} y={119} s={13} anchor="middle">3 N</T>
      <Arrow from={[77, 150]} to={[77, 186]} color="#d0496d" width={2.2} /><Arrow from={[328, 150]} to={[328, 186]} color="#d0496d" width={2.2} />
      <path d="M77 204 H185 M328 204 H185" stroke={INK} strokeWidth="1" /><path d="M77 198 V210 M185 198 V210 M328 198 V210" stroke={INK} />
      <T x={131} y={224} s={14} anchor="middle">1.5 m</T><T x={256} y={224} s={14} anchor="middle">2 m</T>
      <T x={185} y={256} s={14} anchor="middle">ANTICLOCKWISE 4 x 1.5 = 6 N m</T>
      <T x={185} y={276} s={14} anchor="middle">CLOCKWISE 3 x 2 = 6 N m: BALANCED</T>
      <T x={185} y={298} s={13} anchor="middle">MOMENT = FORCE x PERPENDICULAR DISTANCE</T>
      <path d="M392 14 V296" stroke="#e3e7ec" strokeWidth="1.4" />
      <Axes step={2} every={20} xl="load" yl="extension" />
      <path d={path((x) => x * 0.8, 0, 7)} fill="none" stroke={c} strokeWidth="3" />
      <path d={path((x) => 5.6 + (x - 7) * 0.8 + 0.5 * (x - 7) ** 2, 7, 9.4)} fill="none" stroke={c} strokeWidth="3" strokeDasharray="6 4" />
      <circle cx={X(7)} cy={Y(5.6)} r="5" fill="#f2b632" stroke="#fff" strokeWidth="2" />
      <T x={X(7) - 8} y={Y(5.6) - 26} s={13} anchor="end">LIMIT OF</T><T x={X(7) - 8} y={Y(5.6) - 10} s={13} anchor="end">PROPORTIONALITY</T>
      <T x={X(5)} y={Y(0) + 34} s={13} anchor="middle">STRAIGHT LINE THROUGH 0: HOOKE&apos;S LAW</T>
    </svg>
  );
};

const magnetism = (c) => {
  const top = [30, 60, 92], ends = [[110, 155], [230, 155]];
  return (
    <svg viewBox={V}><Defs c={c} />
      <T x={170} y={26} s={16} anchor="middle" fill={c}>FIELD OF A BAR MAGNET</T>
      {top.map((h, i) => [-1, 1].map((s) => {
        const y0 = 155 + s * (6 + i * 3), d = `M${ends[0][0]} ${y0} C${ends[0][0] - 30 - i * 14} ${155 + s * (h + 40)} ${ends[1][0] + 30 + i * 14} ${155 + s * (h + 40)} ${ends[1][0]} ${y0}`;
        return <g key={`${i}${s}`}><path d={d} fill="none" stroke="#2f7fd0" strokeWidth="1.5" />
          <path d={`M165 ${155 + s * (0.25 * (6 + i * 3) + 0.75 * (h + 40)) - 5} l8 5 l-8 5`} fill="none" stroke="#2f7fd0" strokeWidth="1.6" /></g>;
      }))}
      <path d="M20 155 H104 M236 155 H320" stroke="#2f7fd0" strokeWidth="1.5" />
      <path d="M40 150 l-8 5 l8 5 M304 150 l-8 5 l8 5" fill="none" stroke="#2f7fd0" strokeWidth="1.6" />
      <g filter="url(#ps)"><rect x="110" y="140" width="60" height="30" fill="#e8546b" stroke={INK} /><rect x="170" y="140" width="60" height="30" fill="#5b9be0" stroke={INK} /></g>
      <T x={140} y={161} s={17} anchor="middle" fill="#fff">N</T><T x={200} y={161} s={17} anchor="middle" fill="#fff">S</T>
      <T x={170} y={290} s={13} anchor="middle">LINES GO N TO S. CLOSER LINES: STRONGER FIELD</T>
      <path d="M352 14 V296" stroke="#e3e7ec" strokeWidth="1.4" />
      <T x={516} y={26} s={16} anchor="middle" fill={c}>STEP UP TRANSFORMER</T>
      <path d="M430 60 H610 V230 H430 Z M452 82 V208 H588 V82 Z" fill="#c9d1da" stroke={INK} strokeWidth="1.3" fillRule="evenodd" />
      {Array.from({ length: 4 }, (_, i) => <ellipse key={`p${i}`} cx="441" cy={110 + i * 22} rx="18" ry="6" fill="none" stroke="#c0702a" strokeWidth="2.4" />)}
      {Array.from({ length: 8 }, (_, i) => <ellipse key={`s${i}`} cx="599" cy={88 + i * 16} rx="18" ry="5" fill="none" stroke="#3f9d5a" strokeWidth="2.4" />)}
      <path d="M423 110 H384 M423 176 H384" stroke="#c0702a" strokeWidth="2" /><path d="M617 88 H650 M617 200 H650" stroke="#3f9d5a" strokeWidth="2" />
      <T x={372} y={254} s={14} fill="#c0702a">PRIMARY: 4 TURNS, A.C. IN</T>
      <T x={672} y={254} s={14} anchor="end" fill="#3f9d5a">8 TURNS</T>
      <T x={672} y={238} s={14} anchor="end" fill="#3f9d5a">SECONDARY</T>
      <T x={520} y={150} s={14} anchor="middle">IRON CORE</T>
      <T x={516} y={278} s={15} anchor="middle">Vs / Vp = Ns / Np, SO Vs = 2 x Vp</T>
      <T x={516} y={298} s={13} anchor="middle">IDEAL: Vp x Ip = Vs x Is</T>
    </svg>
  );
};

const graphShapes = (c) => {
  const panels = [["LINEAR", "y = mx + c", (x) => 0.8 * x + 0.6], ["QUADRATIC", "y = x² - 2", (x) => x * x - 2], ["CUBIC", "y = x³", (x) => x ** 3], ["RECIPROCAL", "y = 1/x", (x) => 1 / x], ["EXPONENTIAL", "y = 2ˣ", (x) => 2 ** x]];
  return (
    <svg viewBox={V}><Defs c={c} />
      {panels.map(([name, eq, f], i) => {
        const x0 = 14 + i * 134, { X, Y, path } = plot([x0 + 8, 70, 110, 150], [-3, 3], [-3, 3]);
        const seg = name === "RECIPROCAL" ? [path(f, -3, -0.34), path(f, 0.34, 3)] : [path(f, -3, 3)];
        return (
          <g key={name}>
            <rect x={x0} y={30} width={126} height={240} rx={10} fill="#fff" stroke="#e3e7ec" />
            <T x={x0 + 63} y={52} s={14} anchor="middle" fill={c}>{name}</T>
            <clipPath id={`gc${i}`}><rect x={x0 + 8} y={70} width={110} height={150} /></clipPath>
            <path d={`M${X(-3)} ${Y(0)} H${X(3)} M${X(0)} ${Y(-3)} V${Y(3)}`} stroke={INK} strokeWidth="1.2" />
            <g clipPath={`url(#gc${i})`}>{seg.map((d) => <path key={d} d={d} fill="none" stroke={c} strokeWidth="2.6" />)}</g>
            <T x={x0 + 63} y={248} s={15} anchor="middle">{eq}</T>
          </g>
        );
      })}
      <T x={340} y={296} s={13} anchor="middle">QUADRATIC: ROOTS WHERE IT CROSSES THE x AXIS. RECIPROCAL: THE AXES ARE ASYMPTOTES</T>
    </svg>
  );
};

const integration = (c) => {
  const f = (x) => x * (4 - x), { X, Y, path, Axes } = plot([40, 40, 300, 200], [0, 5], [-5, 5]);
  const area = (a, b) => `${path(f, a, b)} L${X(b)} ${Y(0)} L${X(a)} ${Y(0)} Z`;
  return (
    <svg viewBox={V}><Defs c={c} />
      <Axes step={1} every={1} />
      <path d={area(1, 3)} fill={c} opacity=".25" />
      <path d={area(4, 5)} fill="#d0496d" opacity=".25" />
      <path d={path(f, 0, 5)} fill="none" stroke={c} strokeWidth="2.8" />
      <T x={X(2)} y={Y(1.6)} s={15} anchor="middle" fill={c}>∫₁³ y dx</T>
      <T x={X(3.2)} y={Y(-3.2)} s={13} anchor="middle" fill="#d0496d">NEGATIVE AREA</T><Arrow from={[X(3.8), Y(-2.6)]} to={[X(4.45), Y(-1.1)]} color="#d0496d" />
      <T x={170} y={268} s={14} anchor="middle">y = x(4 - x). AREA BELOW THE AXIS</T>
      <T x={170} y={286} s={14} anchor="middle">COMES OUT NEGATIVE: FIND IT SEPARATELY</T>
      <path d="M372 14 V296" stroke="#e3e7ec" strokeWidth="1.4" />
      <T x={524} y={30} s={16} anchor="middle" fill={c}>KINEMATICS</T>
      <Box x={444} y={50} w={160} h={44} color={c}>displacement s</Box>
      <Box x={444} y={140} w={160} h={44} color={c}>velocity v</Box>
      <Box x={444} y={230} w={160} h={44} color={c}>acceleration a</Box>
      {[94, 184].map((y) => <g key={y}><Arrow from={[490, y + 4]} to={[490, y + 42]} color="#2f7fd0" width={2} /><Arrow from={[558, y + 42]} to={[558, y + 4]} color="#d0496d" width={2} /></g>)}
      <T x={484} y={122} s={14} anchor="end" fill="#2f7fd0">d/dt</T><T x={484} y={212} s={14} anchor="end" fill="#2f7fd0">d/dt</T>
      <T x={566} y={122} s={14} fill="#d0496d">∫ dt</T><T x={566} y={212} s={14} fill="#d0496d">∫ dt</T>
      <T x={524} y={296} s={13} anchor="middle">AT REST WHEN v = 0</T>
    </svg>
  );
};

export default {
  "biology-reproduction-2": repro,
  "chemistry-atoms-2": bonding,
  "chemistry-atoms-3": metallic,
  "physics-motion-2": forces,
  "physics-electricity-4": magnetism,
  "maths-algebra-2": graphShapes,
  "addmaths-calculus-2": integration,
};
