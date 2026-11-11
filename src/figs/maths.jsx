// Diagrams for the IGCSE Mathematics and Additional Mathematics cheat sheets, plotted from the
// real equations so every point is where it should be.

import { INK, Label, Link, Dot, Defs, plot, T } from "../posterKit.jsx";

const V = "0 0 680 310";
const at = (cx, cy, r, deg) => [cx + r * Math.cos((deg * Math.PI) / 180), cy - r * Math.sin((deg * Math.PI) / 180)];

export default {
  "maths-algebra": (c) => {
    const { X, Y, path, Axes } = plot([250, 20, 250, 250], [-4, 5], [-8, 8]);
    const f = (x) => x * x - x - 6;
    return (
      <svg viewBox={V}><Defs c={c} />
        <Axes every={2} />
        <path d={path(f, -3.1, 4.1)} fill="none" stroke={c} strokeWidth="3.2" filter="url(#ps)" />
        <Dot x={X(-2)} y={Y(0)} color={c} /><Dot x={X(3)} y={Y(0)} color={c} /><Dot x={X(0)} y={Y(-6)} color="#c0702a" />
        <T x={X(3.4)} y={Y(7)} s={17} fill={c}>y = x² - x - 6</T>
        <Label x={8} y={20} w={210} color={c} title="ROOTS x = -2 AND x = 3" keep lines={["(x + 2)(x - 3) = 0"]} /><Link from={[218, 54]} to={[X(-2) - 2, Y(0) - 8]} color={c} bend={-10} />
        <Label x={8} y={108} w={210} color="#c0702a" title="Y INTERCEPT -6" keep lines={["put x = 0"]} /><Link from={[218, 140]} to={[X(0) - 8, Y(-6)]} color="#c0702a" bend={10} />
        <T x={8} y={226} s={14}>QUADRATIC FORMULA:</T>
        <T x={8} y={250} s={16} fill={c}>x = (-b ± √(b² - 4ac)) / 2a</T>
        <T x={8} y={282} s={13}>CHECK FACTORS BY EXPANDING BACK</T>
      </svg>
    );
  },
  "maths-coord": (c) => {
    const { X, Y, path, Axes } = plot([60, 24, 260, 250], [-1, 7], [-1, 10]);
    return (
      <svg viewBox={V}><Defs c={c} />
        <Axes every={2} />
        <path d={path((x) => 1.5 * x + 0.5, -0.2, 6.2)} fill="none" stroke={c} strokeWidth="3" filter="url(#ps)" />
        <path d={`M${X(1)} ${Y(2)} H${X(5)} V${Y(8)}`} fill="none" stroke="#e08a2c" strokeWidth="2" strokeDasharray="6 4" />
        <T x={X(3)} y={Y(2) + 18} s={14} fill="#c0702a" anchor="middle">RUN 4</T><T x={X(5) + 6} y={Y(5)} s={14} fill="#c0702a">RISE 6</T>
        <Dot x={X(1)} y={Y(2)} color={c} /><Dot x={X(5)} y={Y(8)} color={c} /><Dot x={X(3)} y={Y(5)} color="#7a5cd6" />
        <T x={X(1) - 6} y={Y(2) - 10} s={15} anchor="end">A(1, 2)</T><T x={X(5) - 8} y={Y(8) - 10} s={15} anchor="end">B(5, 8)</T><T x={X(3) - 10} y={Y(5) - 4} s={15} fill="#7a5cd6" anchor="end">M</T>
        <Label x={380} y={6} w={290} color="#c0702a" title="GRADIENT = 6 ÷ 4 = 1.5" keep lines={["m = (y₂ - y₁) / (x₂ - x₁)"]} />
        <Label x={380} y={76} w={290} color="#7a5cd6" title="MIDPOINT M(3, 5)" keep lines={["average the x and y values"]} />
        <Label x={380} y={146} w={290} color={c} title="LENGTH AB = √52 ≈ 7.21" keep lines={["√(4² + 6²) by Pythagoras"]} />
        <T x={380} y={250} s={14}>PERPENDICULAR GRADIENT: -1 ÷ 1.5 = -⅔</T>
        <T x={380} y={274} s={14}>THE LINE: y = 1.5x + 0.5</T>
      </svg>
    );
  },
  "maths-geometry": (c) => {
    const cx = 170, cy = 160, r = 110, A = at(cx, cy, r, 210), B = at(cx, cy, r, 330), P = at(cx, cy, r, 90);
    return (
      <svg viewBox={V}><Defs c={c} />
        <g filter="url(#ps)"><circle cx={cx} cy={cy} r={r} fill="#fbfdff" stroke={INK} strokeWidth="1.6" /></g>
        <path d={`M${A} L${cx} ${cy} L${B}`} fill="url(#pc)" stroke={c} strokeWidth="2.2" strokeLinejoin="round" />
        <path d={`M${A} L${P} L${B}`} fill="none" stroke="#c0702a" strokeWidth="2.2" strokeLinejoin="round" />
        <path d={`M${at(cx, cy, 26, 210)} A26 26 0 0 0 ${at(cx, cy, 26, 330)}`} fill="none" stroke={c} strokeWidth="1.6" />
        <path d={`M${P[0] - 11} ${P[1] + 19} A22 22 0 0 0 ${P[0] + 11} ${P[1] + 19}`} fill="none" stroke="#c0702a" strokeWidth="1.6" />
        <T x={cx} y={cy + 44} s={18} fill={c} anchor="middle">120°</T><T x={P[0]} y={P[1] + 44} s={18} fill="#c0702a" anchor="middle">60°</T>
        <Dot x={cx} y={cy} color={INK} r={4} /><T x={cx + 8} y={cy - 6} s={14}>O</T>
        {[[A, "A", -18, 10], [B, "B", 8, 10], [P, "P", -5, -8]].map(([[x, y], n, dx, dy]) => <T key={n} x={x + dx} y={y + dy} s={15}>{n}</T>)}
        <Label x={330} y={6} w={340} color={c} title="angle at centre = 2 × at circumference" lines={["120° = 2 × 60°"]} />
        <Label x={330} y={76} w={340} color={INK} title="angle in a semicircle = 90°" />
        <Label x={330} y={126} w={340} color={INK} title="cyclic quadrilateral" lines={["opposite angles add to 180°"]} />
        <Label x={330} y={196} w={340} color={INK} title="tangent meets radius at 90°" lines={["two tangents from a point are equal"]} />
      </svg>
    );
  },
  "maths-mensuration": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <g filter="url(#ps)"><path d="M40 70 V200 A60 14 0 0 0 160 200 V70" fill="url(#pc)" stroke={INK} strokeWidth="1.6" /></g>
      <ellipse cx="100" cy="70" rx="60" ry="14" fill="#fff" stroke={INK} strokeWidth="1.6" /><path d="M40 200 A60 14 0 0 1 160 200" fill="none" stroke={INK} strokeDasharray="4 4" />
      <path d="M100 70 H160" stroke={c} strokeWidth="1.6" /><T x={130} y={64} s={14} fill={c} anchor="middle">r</T>
      <path d="M176 70 V200" stroke="#c0702a" /><T x={182} y={140} s={14} fill="#c0702a">h</T>
      <g filter="url(#ps)"><path d="M290 56 L230 206 A60 14 0 0 0 350 206 Z" fill="url(#pc)" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" /></g>
      <path d="M230 206 A60 14 0 0 1 350 206" fill="none" stroke={INK} strokeDasharray="4 4" />
      <path d="M290 56 V206 H350" fill="none" stroke="#c0702a" strokeDasharray="5 4" /><T x={282} y={140} s={14} fill="#c0702a" anchor="end">h</T><T x={320} y={222} s={14} fill={c} anchor="middle">r</T><T x={328} y={124} s={14} fill="#7a5cd6">l</T>
      <g filter="url(#ps)"><circle cx="470" cy="134" r="74" fill="url(#pc)" stroke={INK} strokeWidth="1.6" /></g>
      <ellipse cx="470" cy="134" rx="74" ry="18" fill="none" stroke={INK} strokeDasharray="4 4" /><path d="M470 134 H544" stroke={c} strokeWidth="1.6" /><T x={506} y={128} s={14} fill={c} anchor="middle">r</T>
      <T x={100} y={250} s={15} anchor="middle">CYLINDER</T><T x={100} y={272} s={15} fill={c} anchor="middle">V = πr²h</T>
      <T x={290} y={250} s={15} anchor="middle">CONE</T><T x={290} y={272} s={15} fill={c} anchor="middle">V = ⅓πr²h</T><T x={290} y={294} s={13} anchor="middle">CURVED AREA = πrl</T>
      <T x={470} y={250} s={15} anchor="middle">SPHERE</T><T x={470} y={272} s={15} fill={c} anchor="middle">V = ⁴⁄₃πr³</T><T x={470} y={294} s={13} anchor="middle">SURFACE = 4πr²</T>
      <T x={578} y={70} s={13}>SECTOR AREA</T><T x={578} y={88} s={13} fill={c}>θ/360 × πr²</T>
      <T x={578} y={124} s={13}>ARC LENGTH</T><T x={578} y={142} s={13} fill={c}>θ/360 × 2πr</T>
      <T x={578} y={178} s={13}>PRISM</T><T x={578} y={196} s={13} fill={c}>AREA × LENGTH</T>
    </svg>
  ),
  "maths-trig": (c) => {
    const A = [60, 250], B = [330, 250], C = [330, 80];
    return (
      <svg viewBox={V}><Defs c={c} />
        <g filter="url(#ps)"><path d={`M${A} L${B} L${C} Z`} fill="url(#pc)" stroke={INK} strokeWidth="2" strokeLinejoin="round" /></g>
        <path d={`M${B[0] - 16} ${B[1]} V${B[1] - 16} H${B[0]}`} fill="none" stroke={INK} strokeWidth="1.3" />
        <path d={`M${A[0] + 46} ${A[1]} A46 46 0 0 0 ${A[0] + 46 * Math.cos(Math.atan2(170, 270))} ${A[1] - 46 * Math.sin(Math.atan2(170, 270))}`} fill="none" stroke={c} strokeWidth="1.6" />
        <T x={A[0] + 54} y={A[1] - 8} s={17} fill={c}>θ</T>
        <T x={180} y={150} s={17} fill="#7a5cd6" anchor="end">HYPOTENUSE</T>
        <g transform="rotate(90 350 196)"><T x={350} y={196} s={17} fill="#d0496d" anchor="middle">OPPOSITE</T></g>
        <T x={195} y={276} s={17} fill="#c0702a" anchor="middle">ADJACENT</T>
        <Label x={420} y={4} w={250} color={c} title="SOH CAH TOA" keep lines={["sin θ = opp / hyp", "cos θ = adj / hyp", "tan θ = opp / adj"]} />
        <Label x={420} y={110} w={250} color={INK} title="SINE RULE" keep lines={["a / sin A = b / sin B"]} />
        <Label x={420} y={174} w={250} color={INK} title="COSINE RULE" keep lines={["a² = b² + c² - 2bc cos A"]} />
        <Label x={420} y={238} w={250} color={INK} title="AREA" keep lines={["½ab sin C"]} />
      </svg>
    );
  },
  "maths-statistics": (c) => {
    const x = (v) => 40 + v * 10, s = { min: 10, lq: 22, med: 30, uq: 41, max: 58 };
    return (
      <svg viewBox={V}><Defs c={c} />
        <path d={`M${x(0)} 170 H${x(60)}`} stroke={INK} strokeWidth="1.4" />
        {[0, 10, 20, 30, 40, 50, 60].map((v) => <g key={v}><path d={`M${x(v)} 166 V174`} stroke={INK} /><T x={x(v)} y={192} s={13} anchor="middle">{v}</T></g>)}
        <path d={`M${x(s.min)} 110 H${x(s.lq)} M${x(s.uq)} 110 H${x(s.max)} M${x(s.min)} 96 V124 M${x(s.max)} 96 V124`} stroke={INK} strokeWidth="1.8" />
        <g filter="url(#ps)"><rect x={x(s.lq)} y="82" width={x(s.uq) - x(s.lq)} height="56" fill="url(#pc)" stroke={c} strokeWidth="2" /></g>
        <path d={`M${x(s.med)} 82 V138`} stroke="#d0496d" strokeWidth="3" />
        {[["MIN 10", s.min], ["LQ 22", s.lq], ["MEDIAN 30", s.med], ["UQ 41", s.uq], ["MAX 58", s.max]].map(([t, v], i) => <T key={t} x={x(v)} y={i % 2 ? 60 : 44} s={14} fill={v === s.med ? "#d0496d" : INK} anchor="middle">{t}</T>)}
        <Label x={40} y={214} w={190} color={c} title="IQR = 41 - 22 = 19" keep lines={["spread of the middle half"]} />
        <Label x={245} y={214} w={190} color={INK} title="RANGE = 58 - 10 = 48" keep lines={["largest minus smallest"]} />
        <Label x={450} y={214} w={190} color="#c0702a" title="HISTOGRAMS" keep lines={["density = freq ÷ width"]} />
      </svg>
    );
  },
  "maths-probability": (c) => {
    const root = [40, 155], R1 = [190, 85], B1 = [190, 225];
    const ends = [[340, 40, "R", "2/4", R1, "6/20"], [340, 128, "B", "2/4", R1, "6/20"], [340, 184, "R", "3/4", B1, "6/20"], [340, 272, "B", "1/4", B1, "2/20"]];
    const node = ([x, y], t, col) => <g><g filter="url(#ps)"><circle cx={x} cy={y} r="15" fill="#fff" stroke={col} strokeWidth="1.6" /></g><T x={x} y={y + 5} s={16} fill={col} anchor="middle">{t}</T></g>;
    const col = (t) => (t === "R" ? "#d0496d" : "#2a8fd6");
    return (
      <svg viewBox={V}><Defs c={c} />
        {[[R1, "3/5"], [B1, "2/5"]].map(([p, f]) => <g key={f}><path d={`M${root[0] + 6} ${root[1]} L${p[0] - 15} ${p[1]}`} stroke={INK} strokeWidth="1.4" /><T x={(root[0] + p[0]) / 2 - 4} y={(root[1] + p[1]) / 2 - 8} s={15} anchor="middle">{f}</T></g>)}
        {ends.map(([x, y, t, f, from]) => <g key={`${y}`}><path d={`M${from[0] + 15} ${from[1]} L${x - 15} ${y}`} stroke={INK} strokeWidth="1.4" /><T x={(from[0] + x) / 2} y={(from[1] + y) / 2 - 7} s={14} anchor="middle">{f}</T></g>)}
        <circle cx={root[0]} cy={root[1]} r="5" fill={INK} />
        {node(R1, "R", col("R"))}{node(B1, "B", col("B"))}
        {ends.map(([x, y, t, , from, p]) => <g key={`n${y}`}>{node([x, y], t, col(t))}<T x={x + 24} y={y + 5} s={15}>{(from === R1 ? "R" : "B") + t} = {p}</T></g>)}
        <T x={40} y={30} s={14}>3 RED, 2 BLUE, TAKE TWO</T><T x={40} y={48} s={14}>WITHOUT REPLACEMENT</T>
        <Label x={470} y={8} w={200} color={c} title="AND: multiply" keep lines={["along the branches"]} />
        <Label x={470} y={78} w={200} color={c} title="OR: add" keep lines={["the outcomes you want"]} />
        <Label x={470} y={148} w={200} color="#c0702a" title="ONE OF EACH" keep lines={["RB + BR = 12/20 = 3/5"]} />
        <Label x={470} y={218} w={200} color={INK} title="CHECK" keep lines={["all four add to 1"]} />
      </svg>
    );
  },
  "addmaths-quadratics": (c) => {
    const panel = (i, k, label, sign, col) => {
      const { X, Y, path, Axes } = plot([30 + i * 222, 46, 170, 166], [-3, 3], [-5, 8]);
      const f = (x) => x * x + k;
      return (
        <g key={i}><Axes step={1} every={10} xl="" yl="" />
          <path d={path(f, -Math.min(3, Math.sqrt(8 - k)), Math.min(3, Math.sqrt(8 - k)))} fill="none" stroke={col} strokeWidth="2.8" />
          {k < 0 && <><Dot x={X(-2)} y={Y(0)} color={col} r={5} /><Dot x={X(2)} y={Y(0)} color={col} r={5} /></>}
          {k === 0 && <Dot x={X(0)} y={Y(0)} color={col} r={5} />}
          <T x={115 + i * 222} y={244} s={16} fill={col} anchor="middle">b² - 4ac {sign} 0</T>
          <T x={115 + i * 222} y={266} s={14} anchor="middle">{label}</T>
        </g>
      );
    };
    return (
      <svg viewBox={V}><Defs c={c} />
        {panel(0, -4, "TWO REAL ROOTS", ">", c)}{panel(1, 0, "ONE REPEATED ROOT", "=", "#c0702a")}{panel(2, 2, "NO REAL ROOTS", "<", "#d0496d")}
        <T x={340} y={20} s={15} anchor="middle">THE DISCRIMINANT DECIDES HOW MANY TIMES THE CURVE MEETS THE x AXIS</T>
        <T x={340} y={296} s={14} fill={c} anchor="middle">x² + bx + c = (x + b/2)² - (b/2)² + c: TURNING POINT FROM THE COMPLETED SQUARE</T>
      </svg>
    );
  },
  "addmaths-logs": (c) => {
    const { X, Y, path, Axes } = plot([50, 24, 250, 250], [-3, 4], [-3, 4]);
    return (
      <svg viewBox={V}><Defs c={c} />
        <Axes />
        <path d={path((x) => x, -3, 4)} stroke="#b8bec6" strokeDasharray="6 5" fill="none" />
        <path d={path(Math.exp, -3, Math.log(4))} fill="none" stroke={c} strokeWidth="3" filter="url(#ps)" />
        <path d={path(Math.log, 0.05, 4)} fill="none" stroke="#7a5cd6" strokeWidth="3" filter="url(#ps)" />
        <Dot x={X(0)} y={Y(1)} color={c} r={5} /><Dot x={X(1)} y={Y(0)} color="#7a5cd6" r={5} />
        <T x={X(-2.8)} y={Y(1.2)} s={16} fill={c}>y = eˣ</T><T x={X(2.6)} y={Y(0.6)} s={16} fill="#7a5cd6">y = ln x</T><T x={X(2.6)} y={Y(3.4)} s={14} fill="#8a939e">y = x</T>
        <Label x={360} y={6} w={310} color={c} title="LOG LAWS" keep lines={["log ab = log a + log b", "log (a/b) = log a - log b", "log aⁿ = n log a"]} />
        <Label x={360} y={112} w={310} color="#c0702a" title="SOLVING aˣ = b" keep lines={["x = log b ÷ log a"]} />
        <Label x={360} y={180} w={310} color="#7a5cd6" title="INVERSES" keep lines={["eˣ and ln x reflect in y = x", "eˣ through (0, 1), ln x through (1, 0)"]} />
      </svg>
    );
  },
  "addmaths-radians": (c) => {
    const O = [80, 260], r = 200, th = 1.2, E = [O[0] + r * Math.cos(th), O[1] - r * Math.sin(th)];
    return (
      <svg viewBox={V}><Defs c={c} />
        <g filter="url(#ps)"><path d={`M${O} L${O[0] + r} ${O[1]} A${r} ${r} 0 0 0 ${E} Z`} fill="url(#pc)" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" /></g>
        <path d={`M${O[0] + r} ${O[1]} A${r} ${r} 0 0 0 ${E}`} fill="none" stroke={c} strokeWidth="4" />
        <path d={`M${O[0] + 40} ${O[1]} A40 40 0 0 0 ${O[0] + 40 * Math.cos(th)} ${O[1] - 40 * Math.sin(th)}`} fill="none" stroke="#c0702a" strokeWidth="1.6" />
        <T x={O[0] + 48} y={O[1] - 18} s={17} fill="#c0702a">θ</T>
        <T x={O[0] + r / 2} y={O[1] + 22} s={17} anchor="middle">r</T>
        <T x={O[0] + r * Math.cos(0.6) + 14} y={O[1] - r * Math.sin(0.6)} s={17} fill={c}>s = rθ</T>
        <T x={O[0] + 80} y={O[1] - 80} s={15}>A = ½r²θ</T>
        <Label x={380} y={6} w={290} color={c} title="π radians = 180°" keep lines={["degrees × π/180 = radians"]} />
        <Label x={380} y={76} w={290} color={c} title="ARC AND SECTOR" keep lines={["s = rθ,  A = ½r²θ", "(θ in radians)"]} />
        <Label x={380} y={164} w={290} color={INK} title="SEGMENT" keep lines={["sector minus triangle", "½r²(θ - sin θ)"]} />
      </svg>
    );
  },
  "addmaths-trig": (c) => {
    const { X, Y, path, Axes } = plot([50, 50, 320, 180], [0, 360], [-1.4, 1.4]);
    const rad = (d) => (d * Math.PI) / 180;
    return (
      <svg viewBox={V}><Defs c={c} />
        <Axes step={90} every={90} xl="x°" yl="" />
        {[1, -1].map((v) => <g key={v}><path d={`M${X(0)} ${Y(v)} H${X(360)}`} stroke="#e3eaf2" /><T x={X(0) - 8} y={Y(v) + 4} s={13} fill="#6b7682" anchor="end">{v}</T></g>)}
        <path d={path((d) => Math.sin(rad(d)), 0, 360)} fill="none" stroke={c} strokeWidth="3" filter="url(#ps)" />
        <path d={path((d) => Math.cos(rad(d)), 0, 360)} fill="none" stroke="#c0702a" strokeWidth="3" filter="url(#ps)" />
        <T x={X(90)} y={Y(1) - 10} s={15} fill={c} anchor="middle">sin x</T><T x={X(20)} y={Y(1) - 10} s={15} fill="#c0702a">cos x</T>
        <T x={50} y={290} s={14}>PERIOD 360°, AMPLITUDE 1. y = a sin bx: AMPLITUDE a, PERIOD 360/b</T>
        <path d="M470 50 V250 M380 150 H560" stroke={INK} strokeWidth="1.4" />
        {[["S", 425, 105, "sin +"], ["A", 515, 105, "all +"], ["T", 425, 205, "tan +"], ["C", 515, 205, "cos +"]].map(([l, x, y, d]) => <g key={l}><T x={x} y={y} s={30} fill={c} anchor="middle">{l}</T><T x={x} y={y + 22} s={14} anchor="middle">{d}</T></g>)}
        <T x={600} y={110} s={14}>sin² + cos²</T><T x={600} y={130} s={14}>= 1</T>
        <T x={600} y={180} s={14}>tan θ =</T><T x={600} y={200} s={14}>sin ÷ cos</T>
      </svg>
    );
  },
  "addmaths-calculus": (c) => {
    const { X, Y, path, Axes } = plot([50, 24, 250, 250], [-2.5, 2.5], [-4, 4]);
    const f = (x) => x ** 3 - 3 * x;
    return (
      <svg viewBox={V}><Defs c={c} />
        <Axes every={2} />
        <path d={path(f, -2.2, 2.2)} fill="none" stroke={c} strokeWidth="3" filter="url(#ps)" />
        <path d={path((x) => 9 * (x - 2) + 2, 1.65, 2.25)} fill="none" stroke="#c0702a" strokeWidth="2" />
        <Dot x={X(-1)} y={Y(2)} color="#d0496d" /><Dot x={X(1)} y={Y(-2)} color="#2a8fd6" /><Dot x={X(2)} y={Y(2)} color="#c0702a" r={5} />
        <T x={X(-1)} y={Y(2) - 12} s={14} fill="#d0496d" anchor="middle">MAX (-1, 2)</T><T x={X(1)} y={Y(-2) + 24} s={14} fill="#2a8fd6" anchor="middle">MIN (1, -2)</T>
        <Label x={360} y={6} w={310} color={c} title="y = x³ - 3x" keep lines={["dy/dx = 3x² - 3"]} />
        <Label x={360} y={76} w={310} color="#d0496d" title="STATIONARY POINTS" keep lines={["dy/dx = 0 at x = ±1", "d²y/dx² < 0: max, > 0: min"]} />
        <Label x={360} y={164} w={310} color="#c0702a" title="TANGENT AT x = 2" keep lines={["gradient 3(2²) - 3 = 9"]} />
        <T x={360} y={262} s={14}>INTEGRATION REVERSES IT:</T><T x={360} y={284} s={14}>∫xⁿ dx = xⁿ⁺¹ ÷ (n + 1) + c</T>
      </svg>
    );
  },
};
