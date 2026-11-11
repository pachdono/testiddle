// Diagrams for the maths sections added with the full syllabus: angles with parallel lines,
// turning points, the general triangle, scatter graphs, histograms and formula tables.

import { INK, Label, Defs, plot, T } from "../posterKit.jsx";
import { table } from "./gen.jsx";

const V = "0 0 680 310";

const parallel = (c) => {
  // two parallel lines cut by a transversal; marked angle pairs
  const y1 = 90, y2 = 210, P = (y) => [150 + (y - 30) * 0.55, y];
  const [a, b] = [P(y1), P(y2)];
  return (
    <svg viewBox={V}><Defs c={c} />
      <path d={`M30 ${y1} H360 M30 ${y2} H360`} stroke={INK} strokeWidth="2" />
      <path d={`M60 ${y1 - 3} l10 3 l-10 3 M60 ${y2 - 3} l10 3 l-10 3`} fill="none" stroke={INK} strokeWidth="1.6" />
      <path d={`M${P(20)[0]} 20 L${P(290)[0]} 290`} stroke={INK} strokeWidth="2" />
      <path d={`M${a[0] + 26} ${y1} A26 26 0 0 0 ${a[0] + 26 * 0.48} ${y1 - 26 * 0.88}`} fill="none" stroke="#d0496d" strokeWidth="2.4" />
      <path d={`M${b[0] + 26} ${y2} A26 26 0 0 0 ${b[0] + 26 * 0.48} ${y2 - 26 * 0.88}`} fill="none" stroke="#d0496d" strokeWidth="2.4" />
      <path d={`M${a[0] - 26} ${y1} A26 26 0 0 0 ${a[0] - 26 * 0.48} ${y1 + 26 * 0.88}`} fill="none" stroke="#2f7fd0" strokeWidth="2.4" />
      <path d={`M${b[0] + 30} ${y2} A30 30 0 0 0 ${b[0] + 30 * 0.48} ${y2 - 30 * 0.88}`} fill="none" stroke="#d0496d" strokeWidth="1" />
      <T x={a[0] + 34} y={y1 - 8} s={15} fill="#d0496d">a</T><T x={b[0] + 34} y={y2 - 8} s={15} fill="#d0496d">a</T>
      <T x={a[0] - 44} y={y1 + 24} s={15} fill="#2f7fd0">b</T>
      <Label x={400} y={8} w={274} color="#d0496d" title="corresponding: equal" lines={["F shape: the two a angles"]} />
      <Label x={400} y={84} w={274} color="#2f7fd0" title="alternate: equal" lines={["Z shape: b equals the lower a"]} />
      <Label x={400} y={160} w={274} color="#3f9d5a" title="co-interior: add to 180°" lines={["C shape, between the lines"]} />
      <T x={540} y={262} s={13} anchor="middle">TRIANGLE 180°. QUADRILATERAL 360°.</T>
      <T x={540} y={282} s={13} anchor="middle">POLYGON INTERIOR SUM (n - 2) x 180°</T>
    </svg>
  );
};

const turning = (c) => {
  const f = (x) => x ** 3 - 6 * x ** 2 + 4, { X, Y, path } = plot([50, 20, 330, 250], [-1.5, 6.5], [-32, 10]);
  return (
    <svg viewBox={V}><Defs c={c} />
      <path d={`M${X(-1.5)} ${Y(0)} H${X(6.5) + 8} M${X(0)} ${Y(-32)} V${Y(10) - 8}`} stroke={INK} strokeWidth="1.5" />
      {[2, 4, 6].map((v) => <T key={v} x={X(v)} y={Y(0) + 16} s={12} anchor="middle">{v}</T>)}
      {[-30, -20, -10, 10].map((v) => <T key={v} x={X(0) - 6} y={Y(v) + 4} s={12} anchor="end">{v}</T>)}
      <T x={X(6.5) + 12} y={Y(0) + 4} s={14}>x</T><T x={X(0) + 6} y={Y(10) - 6} s={14}>y</T>
      <path d={path(f, -1.2, 6.4)} fill="none" stroke={c} strokeWidth="3" />
      <path d={`M${X(-1)} ${Y(4)} H${X(1)} M${X(3)} ${Y(-28)} H${X(5)}`} stroke="#d0496d" strokeWidth="2" strokeDasharray="5 3" />
      <circle cx={X(0)} cy={Y(4)} r="5" fill="#d0496d" /><circle cx={X(4)} cy={Y(-28)} r="5" fill="#d0496d" />
      <T x={X(0) + 10} y={Y(4) - 10} s={13} fill="#d0496d">MAX (0, 4)</T><T x={X(4)} y={Y(-28) + 22} s={13} anchor="middle" fill="#d0496d">MIN (4, -28)</T>
      <Label x={400} y={8} w={274} color={c} title="[E] differentiate" keep lines={["y = x³ - 6x² + 4", "dy/dx = 3x² - 12x"]} />
      <Label x={400} y={102} w={274} color="#d0496d" title="[E] turning points" keep lines={["dy/dx = 0: 3x(x - 4) = 0", "x = 0 or x = 4"]} />
      <Label x={400} y={196} w={274} color="#3f9d5a" title="[E] max or min" keep lines={["d²y/dx² = 6x - 12", "negative: max, positive: min"]} />
    </svg>
  );
};

const anyTriangle = (c) => {
  const A = [60, 250], B = [330, 250], C = [190, 60];
  return (
    <svg viewBox={V}><Defs c={c} />
      <g filter="url(#ps)"><path d={`M${A} L${B} L${C} Z`} fill="#eef6ff" stroke={INK} strokeWidth="2" /></g>
      {[["A", A, -18, 10], ["B", B, 8, 10], ["C", C, -6, -10]].map(([n, p, dx, dy]) => <T key={n} x={p[0] + dx} y={p[1] + dy} s={18} fill={c}>{n}</T>)}
      <T x={195} y={276} s={17} anchor="middle" fill="#d0496d">c</T><T x={270} y={150} s={17} fill="#d0496d">a</T><T x={110} y={150} s={17} anchor="end" fill="#d0496d">b</T>
      <T x={195} y={300} s={12} anchor="middle">EACH SIDE IS NAMED AFTER THE ANGLE OPPOSITE IT</T>
      <Label x={380} y={8} w={294} color={c} title="area" keep lines={["½ab sin C"]} />
      <Label x={380} y={84} w={294} color="#2f7fd0" title="[E] sine rule" keep lines={["a/sin A = b/sin B = c/sin C", "a side and its opposite angle"]} />
      <Label x={380} y={178} w={294} color="#d0496d" title="[E] cosine rule" keep lines={["a² = b² + c² - 2bc cos A", "cos A = (b² + c² - a²) ÷ 2bc"]} />
    </svg>
  );
};

const scatter = (c) => {
  const pts = [[1, 2.2], [1.6, 2.6], [2.2, 3.4], [2.8, 3.1], [3.3, 4.2], [4, 4.4], [4.6, 5.3], [5.2, 5.1], [5.8, 6.2], [6.5, 6.6], [7.1, 7.4], [7.8, 7.3], [8.4, 8.5]];
  const { X, Y, Axes } = plot([50, 20, 300, 240], [0, 10], [0, 10]);
  return (
    <svg viewBox={V}><Defs c={c} />
      <Axes step={1} every={2} xl="x" yl="y" />
      {pts.map(([x, y]) => <path key={x} d={`M${X(x) - 4} ${Y(y) - 4} l8 8 m0 -8 l-8 8`} stroke={c} strokeWidth="2" />)}
      <path d={`M${X(0.5)} ${Y(1.7)} L${X(9)} ${Y(8.8)}`} stroke="#d0496d" strokeWidth="2" />
      <T x={X(9)} y={Y(8.8) - 8} s={12} anchor="end" fill="#d0496d">LINE OF BEST FIT</T>
      <Label x={380} y={8} w={294} color={c} title="positive correlation" lines={["both increase together"]} />
      <Label x={380} y={84} w={294} color="#d0496d" title="line of best fit" lines={["by eye, through the middle", "of the points"]} />
      <Label x={380} y={178} w={294} color="#c0702a" title="predicting" lines={["inside the data: reliable", "outside (extrapolating): not"]} />
    </svg>
  );
};

const histogram = (c) => {
  const bars = [[0, 10, 8], [10, 30, 24], [30, 60, 12], [60, 80, 10]];
  const { X, Y } = plot([60, 20, 300, 230], [0, 80], [0, 1.4]);
  return (
    <svg viewBox={V}><Defs c={c} />
      <path d={`M${X(0)} ${Y(0)} H${X(80) + 10} M${X(0)} ${Y(0)} V${Y(1.4) - 10}`} stroke={INK} strokeWidth="1.5" />
      {[0, 0.4, 0.8, 1.2].map((v) => <T key={v} x={X(0) - 8} y={Y(v) + 4} s={12} anchor="end">{v}</T>)}
      {[0, 10, 30, 60, 80].map((v) => <T key={v} x={X(v)} y={Y(0) + 18} s={12} anchor="middle">{v}</T>)}
      {bars.map(([a, b, f]) => <g key={a}><rect x={X(a)} y={Y(f / (b - a))} width={X(b) - X(a)} height={Y(0) - Y(f / (b - a))} fill={c} opacity=".7" stroke="#fff" strokeWidth="1.5" /><T x={(X(a) + X(b)) / 2} y={Y(f / (b - a)) - 6} s={12} anchor="middle">f = {f}</T></g>)}
      <T x={X(0) + 6} y={Y(1.4) - 2} s={12}>FREQUENCY DENSITY</T><T x={X(80)} y={Y(0) + 36} s={12} anchor="end">TIME (s)</T>
      <Label x={390} y={8} w={284} color={c} title="[E] frequency density" keep lines={["= FREQUENCY ÷ CLASS WIDTH"]} />
      <Label x={390} y={84} w={284} color="#d0496d" title="[E] area = frequency" lines={["frequency = density x width"]} />
      <Label x={390} y={160} w={284} color="#c0702a" title="[E] cumulative frequency" lines={["median at ½, quartiles at ¼, ¾", "IQR = UQ - LQ"]} />
    </svg>
  );
};

export default {
  "maths-number-2": table(["Rule", "Example"], [["aᵐ x aⁿ = aᵐ⁺ⁿ", "x³ x x⁴ = x⁷"], ["aᵐ ÷ aⁿ = aᵐ⁻ⁿ", "x⁶ ÷ x² = x⁴"], ["(aᵐ)ⁿ = aᵐⁿ", "(x²)³ = x⁶"], ["a⁰ = 1, a⁻ⁿ = 1/aⁿ", "2⁻³ = 1/8"], ["[E] a^(m/n) = (ⁿ√a)ᵐ", "8^(2/3) = 4"], ["Standard form A x 10ⁿ", "1 ≤ A < 10"], ["[E] Surds: √(ab) = √a√b", "√50 = 5√2"]], { widths: [3, 2] }),
  "maths-number-3": table(["Find", "Method"], [["% of an amount", "% ÷ 100 x amount"], ["% change", "change ÷ original x 100"], ["Increase by r%", "x (1 + r/100)"], ["[E] Reverse %", "new ÷ multiplier"], ["Simple interest", "PRT ÷ 100"], ["Compound interest", "P(1 + r/100)ⁿ"], ["[E] Growth or decay", "start x multiplierⁿ"]], { widths: [2, 3] }),
  "maths-number-4": table(["Idea", "Rule"], [["Bounds of 7 (nearest 1)", "6.5 ≤ x < 7.5"], ["[E] Max of a + b", "upper + upper"], ["[E] Max of a - b", "upper - lower"], ["[E] Max of a ÷ b", "upper ÷ lower"], ["Share in ratio 2 : 3", "÷ 5 parts, then x 2 and x 3"], ["Speed", "distance ÷ time"]], { widths: [3, 3], caption: "1 HOUR 15 MINUTES = 1.25 HOURS" }),
  "maths-algebra": table(["Pattern", "Example"], [["Common factor", "6x² + 9x = 3x(2x + 3)"], ["Double brackets", "(x + 3)(x - 5) = x² - 2x - 15"], ["[E] Quadratic", "x² + 5x + 6 = (x + 2)(x + 3)"], ["[E] Difference of squares", "x² - 49 = (x + 7)(x - 7)"], ["[E] Completing the square", "x² + 6x + 2 = (x + 3)² - 7"], ["[E] Quadratic formula", "x = (-b ± √(b² - 4ac)) ÷ 2a"]], { widths: [2, 3] }),
  "maths-algebra-4": table(["Idea", "Rule"], [["Linear nth term", "dn + c (d = difference)"], ["[E] Quadratic nth term", "an² + bn + c, a = ½ second difference"], ["[E] Geometric nth term", "arⁿ⁻¹"], ["Direct proportion", "y = kx"], ["Inverse proportion", "y = k ÷ x"], ["[E] Composite fg(x)", "do g first, then f"], ["[E] Inverse f⁻¹(x)", "swap x and y, rearrange"]], { widths: [2, 3] }),
  "maths-algebra-5": turning,
  "maths-geometry": parallel,
  "maths-geometry-3": table(["Idea", "Rule"], [["Similar shapes", "same angles, sides in ratio k"], ["[E] Area scale factor", "k²"], ["[E] Volume scale factor", "k³"], ["Congruent triangles", "SSS, SAS, ASA, RHS"], ["Symmetry", "lines and order of rotation"]], { widths: [2, 3], caption: "[E] LENGTHS x 2 MEANS AREAS x 4 AND VOLUMES x 8" }),
  "maths-trig-2": anyTriangle,
  "maths-transform-2": table(["Vector idea", "Rule"], [["Add", "add the tops, add the bottoms"], ["Multiply by k", "multiply each part by k"], ["[E] Magnitude", "√(x² + y²)"], ["[E] Journey A to B", "AB = b - a"], ["[E] Midpoint of AB", "OM = ½(a + b)"], ["[E] Parallel", "one is a multiple of the other"]], { widths: [2, 3] }),
  "maths-statistics": scatter,
  "maths-statistics-2-b": histogram,
};
