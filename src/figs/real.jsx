// Diagrams the syllabuses expect to see drawn: the digestive system, the periodic table,
// transformations, circle and vector geometry, an urban land use model, stage types, drawing
// projections, T accounts and the business cycle.

import { INK, Label, Defs, plot, T, Arrow, HAND } from "../posterKit.jsx";

const V = "0 0 680 310";

/** A short name with a leader line from the side of the words that faces the point. */
const Tag = ({ x, y, at, children, anchor = "start", color = INK, sub }) => {
  const w = String(children).length * 6.6, x0 = anchor === "end" ? x - w : x, x1 = x0 + w;
  const from = at[0] < x0 ? [x0 - 4, y - 5] : [x1 + 4, y - 5];
  return (
    <g>
      <path d={`M${from[0]} ${from[1]} L${at[0]} ${at[1]}`} stroke={color} strokeWidth="1" opacity=".75" />
      <circle cx={at[0]} cy={at[1]} r="2.4" fill={color} />
      <T x={x} y={y} s={14} anchor={anchor} fill={color}>{children}</T>
      {sub && <T x={x} y={y + 15} s={12} anchor={anchor} fill="#6b7682">{sub}</T>}
    </g>
  );
};

const Tube = ({ d, w, fill }) => <g><path d={d} fill="none" stroke={INK} strokeWidth={w + 2.6} strokeLinecap="round" strokeLinejoin="round" /><path d={d} fill="none" stroke={fill} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" /></g>;

/** The human digestive system from the front; the body's right is on the viewer's left. */
const digestive = (c) => (
  <svg viewBox="0 0 680 420"><Defs c={c} />
    <path d="M250 4 Q340 -10 430 4 L470 60 Q480 250 440 360 Q340 410 240 360 Q200 250 210 60 Z" fill="#fbf1e8" stroke="#e3d6c8" />
    <path d="M326 10 Q340 18 354 10" fill="none" stroke="#c0607a" strokeWidth="3" strokeLinecap="round" />
    <Tube d="M340 18 C340 60 344 90 366 122" w={8} fill="#f2b6a0" />
    <Tube d="M282 226 V308 Q282 326 300 326 H392 M282 226 Q282 210 300 210 H404 Q420 210 420 226 V318 Q420 340 398 344 Q372 348 352 344 L346 372" w={16} fill="#e5b37a" />
    <Tube d="M268 318 Q262 336 268 344" w={5} fill="#e5b37a" />
    <Tube d="M362 196 C352 214 322 214 318 230 C316 246 360 238 366 252 C372 268 312 262 310 278 C308 294 372 284 374 300 C376 314 314 308 290 312" w={9} fill="#f6c7b8" />
    <g filter="url(#ps)"><path d="M360 118 C400 98 446 118 440 162 C434 204 388 214 362 198 C350 190 350 180 358 174 C382 184 406 176 406 158 C406 140 384 132 362 136 Z" fill="#f4a7b4" stroke={INK} strokeWidth="1.4" /></g>
    <path d="M330 196 C350 206 390 204 426 190" fill="none" stroke={INK} strokeWidth="9.6" strokeLinecap="round" /><path d="M330 196 C350 206 390 204 426 190" fill="none" stroke="#fde3a0" strokeWidth="7" strokeLinecap="round" />
    <g filter="url(#ps)"><path d="M232 106 C270 88 338 92 356 112 C346 140 300 152 252 148 C228 142 220 120 232 106 Z" fill="#b5654f" stroke={INK} strokeWidth="1.4" /></g>
    <ellipse cx="312" cy="152" rx="9" ry="6" fill="#8cc66a" stroke={INK} strokeWidth="1.2" />
    <rect x="340" y="372" width="12" height="8" rx="2" fill="#e5b37a" stroke={INK} />
    <Tag x={196} y={22} at={[334, 14]} anchor="end" sub="teeth, saliva: amylase">mouth</Tag>
    <Tag x={196} y={92} at={[250, 112]} anchor="end" sub="makes bile">liver</Tag>
    <Tag x={196} y={150} at={[304, 154]} anchor="end" sub="stores bile">gall bladder</Tag>
    <Tag x={196} y={222} at={[278, 236]} anchor="end" sub="absorbs water">large intestine</Tag>
    <Tag x={196} y={300} at={[266, 340]} anchor="end">appendix</Tag>
    <Tag x={196} y={356} at={[344, 356]} anchor="end" sub="stores faeces">rectum</Tag>
    <Tag x={196} y={398} at={[346, 378]} anchor="end" sub="egestion">anus</Tag>
    <Tag x={486} y={52} at={[348, 70]} sub="peristalsis to the stomach">oesophagus</Tag>
    <Tag x={486} y={122} at={[430, 150]} sub="pepsin (protease), acid">stomach</Tag>
    <Tag x={486} y={186} at={[416, 194]} sub="amylase, protease, lipase">pancreas</Tag>
    <Tag x={486} y={232} at={[346, 216]} sub="first part of small intestine">duodenum</Tag>
    <Tag x={486} y={282} at={[372, 298]} sub="absorption through villi">ileum (small intestine)</Tag>
  </svg>
);

/** Periods 1 to 6 of the periodic table, with the groups the syllabus names and the metal line. */
const ROWS = [
  ["H", ...Array(16).fill(""), "He"],
  ["Li", "Be", ...Array(10).fill(""), "B", "C", "N", "O", "F", "Ne"],
  ["Na", "Mg", ...Array(10).fill(""), "Al", "Si", "P", "S", "Cl", "Ar"],
  "K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr".split(" "),
  "Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe".split(" "),
  "Cs Ba La Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn".split(" "),
];
const colourOf = (col, sym) => (sym === "H" ? "#e3e7ec" : col === 0 ? "#f6a3a3" : col === 1 ? "#ffcf99" : col < 12 ? "#d6dbe2" : col === 16 ? "#a8e0a0" : col === 17 ? "#cdb8f2" : "#f6efc8");
const periodic = (c) => {
  const w = 33, h = 30, x0 = 44, y0 = 46;
  // B, Si, As, Te and At sit just right of the line, one column further on each period
  const line = `M${x0 + 12 * w - 1} ${y0 + h} ` + [12, 13, 14, 15, 16].map((col, i) => `${i ? `H${x0 + col * w - 1} ` : ""}V${y0 + (i + 2) * h - 1}`).join(" ");
  return (
    <svg viewBox={V}><Defs c={c} />
      {["I", "II", "III", "IV", "V", "VI", "VII", "VIII"].map((g, i) => <T key={g} x={x0 + [0, 1, 12, 13, 14, 15, 16, 17][i] * w + w / 2} y={y0 - 8} s={13} anchor="middle" fill={c}>{g}</T>)}
      {ROWS.map((row, r) => row.map((sym, col) => sym && (
        <g key={`${r}${col}`}><rect x={x0 + col * w} y={y0 + r * h} width={w - 2} height={h - 2} rx="3" fill={colourOf(col, sym)} stroke={INK} strokeWidth=".8" />
          <text x={x0 + col * w + (w - 2) / 2} y={y0 + r * h + 19} textAnchor="middle" fontFamily={HAND} fontSize="14" fill={INK}>{sym}</text></g>
      )))}
      {[1, 2, 3, 4, 5, 6].map((p) => <T key={p} x={x0 - 10} y={y0 + (p - 1) * h + 19} s={13} anchor="end" fill={c}>{p}</T>)}
      <path d={line} fill="none" stroke="#d0496d" strokeWidth="3" strokeLinejoin="round" />
      {[["#f6a3a3", "I: alkali metals, react with water"], ["#a8e0a0", "VII: halogens, coloured, diatomic"], ["#cdb8f2", "VIII: noble gases, unreactive"], ["#d6dbe2", "transition metals: coloured compounds, catalysts"]].map(([col, t], i) => (
        <g key={t}><rect x={x0 + (i % 2) * 300} y={y0 + 6 * h + 14 + Math.floor(i / 2) * 22} width="14" height="14" rx="3" fill={col} stroke={INK} strokeWidth=".8" /><T x={x0 + 20 + (i % 2) * 300} y={y0 + 6 * h + 26 + Math.floor(i / 2) * 22} s={13}>{t}</T></g>
      ))}
      <T x={x0 + 2 * w + 8} y={y0 + h + 18} s={13} fill="#d0496d">METALS LEFT OF THE RED LINE,</T>
      <T x={x0 + 2 * w + 8} y={y0 + h + 34} s={13} fill="#d0496d">NON METALS TO THE RIGHT</T>
      <T x={x0 + 2 * w + 8} y={y0 + 19} s={12}>PERIOD = NUMBER OF SHELLS. GROUP = OUTER ELECTRONS</T>
    </svg>
  );
};

/** One transformation on a small grid: the object A and its image B. */
const tri = (pts) => pts.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" ") + "Z";
const transformPanel = (i, title, sub, img, extra) => (c) => {
  const x0 = 14 + i * 166, { X, Y } = plot([x0 + 4, 40, 150, 150], [-4, 4], [-4, 4]);
  const A = [[1, 1], [3, 1], [1, 2]];
  const at = (ps) => tri(ps.map(([x, y]) => [X(x), Y(y)]));
  const obj = i === 3 ? [[1, 1], [2, 1], [1, 2]] : A;
  return (
    <g key={i}>
      {Array.from({ length: 9 }, (_, k) => <path key={k} d={`M${X(k - 4)} ${Y(-4)} V${Y(4)} M${X(-4)} ${Y(k - 4)} H${X(4)}`} stroke="#e3eaf2" strokeWidth=".8" />)}
      <path d={`M${X(-4)} ${Y(0)} H${X(4)} M${X(0)} ${Y(-4)} V${Y(4)}`} stroke={INK} strokeWidth="1.2" />
      {extra && extra(X, Y)}
      <path d={at(obj)} fill="#5b9be0" fillOpacity=".55" stroke={INK} strokeWidth="1.2" />
      <path d={at(img)} fill="#e8546b" fillOpacity=".55" stroke={INK} strokeWidth="1.2" />
      <T x={X(obj[0][0]) + 8} y={Y(obj[0][1]) - 4} s={13}>A</T>
      <T x={x0 + 79} y={22} s={14} anchor="middle" fill={c}>{title}</T>
      {sub.map((l, k) => <T key={l} x={x0 + 79} y={214 + k * 16} s={12} anchor="middle">{l}</T>)}
    </g>
  );
};
const transformations = (c) => (
  <svg viewBox={V}><Defs c={c} />
    {transformPanel(0, "REFLECTION", ["in the line x = 0", "(the y axis)"], [[-1, 1], [-3, 1], [-1, 2]], (X, Y) => <path d={`M${X(0)} ${Y(-4)} V${Y(4)}`} stroke="#d0496d" strokeWidth="2" strokeDasharray="5 4" />)(c)}
    {transformPanel(1, "ROTATION", ["90° clockwise", "about (0, 0)"], [[1, -1], [1, -3], [2, -1]], (X, Y) => <circle cx={X(0)} cy={Y(0)} r="4" fill="#d0496d" />)(c)}
    {transformPanel(2, "TRANSLATION", ["by the vector", "(-4 across, -3 down)"], [[-3, -2], [-1, -2], [-3, -1]], (X, Y) => <Arrow from={[X(1), Y(1)]} to={[X(-3) + 4, Y(-2) - 3]} color="#d0496d" />)(c)}
    {transformPanel(3, "ENLARGEMENT", ["scale factor 2", "centre (0, 0)"], [[2, 2], [4, 2], [2, 4]], (X, Y) => <path d={`M${X(0)} ${Y(0)} L${X(4)} ${Y(2)} M${X(0)} ${Y(0)} L${X(2)} ${Y(4)} M${X(0)} ${Y(0)} L${X(2)} ${Y(2)}`} stroke="#d0496d" strokeWidth="1.2" strokeDasharray="4 3" />)(c)}
    <T x={340} y={300} s={13} anchor="middle">BLUE A IS THE OBJECT, RED IS THE IMAGE. ALWAYS STATE EVERY DETAIL</T>
  </svg>
);

/** A circle, its centre and radius, and a tangent at right angles to the radius. */
const circle = (c) => {
  const cx = 180, cy = 158, r = 100, a = (-35 * Math.PI) / 180, px = cx + r * Math.cos(a), py = cy + r * Math.sin(a);
  const ux = Math.cos(a), uy = Math.sin(a), tx = -uy, ty = ux;
  return (
    <svg viewBox={V}><Defs c={c} />
      <g filter="url(#ps)"><circle cx={cx} cy={cy} r={r} fill="#eef6ff" stroke={c} strokeWidth="2.4" /></g>
      <path d={`M${cx} ${cy} L${px} ${py}`} stroke={INK} strokeWidth="2" />
      <path d={`M${px - tx * 110} ${py - ty * 110} L${px + tx * 90} ${py + ty * 90}`} stroke="#d0496d" strokeWidth="2.2" />
      <path d={`M${px - ux * 12} ${py - uy * 12} l${tx * 12} ${ty * 12} l${ux * 12} ${uy * 12}`} fill="none" stroke={INK} strokeWidth="1.2" />
      <circle cx={cx} cy={cy} r="4" fill={INK} /><circle cx={px} cy={py} r="4" fill="#d0496d" />
      <T x={cx - 8} y={cy + 20} s={15} anchor="end">centre (a, b)</T>
      <T x={(cx + px) / 2 - 6} y={(cy + py) / 2 - 4} s={15} anchor="end">r</T>
      <T x={px + 10} y={py + 20} s={15} fill="#d0496d">P</T>
      <T x={px + tx * 60 + 8} y={py + ty * 60} s={14} fill="#d0496d">tangent</T>
      <Label x={392} y={8} w={282} color={c} title="equation" lines={["(x - a)² + (y - b)² = r²"]} keep />
      <Label x={392} y={84} w={282} color={INK} title="from the expanded form" lines={["x² + y² + 2gx + 2fy + c = 0", "centre (-g, -f), r = √(g² + f² - c)"]} keep />
      <Label x={392} y={178} w={282} color="#d0496d" title="tangent at P" lines={["at 90° to the radius, so its", "gradient = -1 ÷ gradient of radius"]} keep />
    </svg>
  );
};

/** Vectors round a triangle: AB = b - a and the midpoint of AB. */
const vectors = (c) => {
  const O = [70, 250], A = [150, 70], B = [340, 210], M = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
  const half = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
  return (
    <svg viewBox={V}><Defs c={c} />
      <path d={`M${O} L${A} L${B} Z`} fill="#eef6ff" stroke="none" />
      <Arrow from={O} to={A} color="#2f7fd0" width={2.6} head={11} />
      <Arrow from={O} to={B} color="#3f9d5a" width={2.6} head={11} />
      <Arrow from={A} to={B} color="#d0496d" width={2.6} head={11} />
      <Arrow from={O} to={M} color="#c0702a" width={1.8} head={9} />
      {[["O", O, -16, 18], ["A", A, -6, -10], ["B", B, 8, 6], ["M", M, 8, -8]].map(([n, p, dx, dy]) => <g key={n}><circle cx={p[0]} cy={p[1]} r="4" fill={INK} /><T x={p[0] + dx} y={p[1] + dy} s={16}>{n}</T></g>)}
      <T x={half(O, A)[0] - 14} y={half(O, A)[1]} s={17} anchor="end" fill="#2f7fd0">a</T>
      <T x={half(O, B)[0] + 4} y={half(O, B)[1] + 22} s={17} fill="#3f9d5a">b</T>
      <T x={half(A, B)[0] + 12} y={half(A, B)[1] - 30} s={16} fill="#d0496d">AB = b - a</T>
      <T x={150} y={196} s={14} fill="#c0702a">OM = ½(a + b)</T>
      <Label x={392} y={8} w={282} color="#d0496d" title="journey A to B" lines={["go back along a, then along b:", "AB = -a + b = b - a"]} keep />
      <Label x={392} y={102} w={282} color={INK} title="magnitude and unit vector" lines={["|xi + yj| = √(x² + y²)", "unit vector = vector ÷ magnitude"]} keep />
      <Label x={392} y={196} w={282} color="#3f9d5a" title="parallel" lines={["one vector is a multiple of the other", "position at time t: r = r₀ + tv"]} keep />
    </svg>
  );
};

/** A simple urban land use model: zones in rings round the CBD. */
const urbanModel = (c) => {
  const zones = [["CBD", "#e8546b", "shops, offices, high land value"], ["Inner city", "#f6a96b", "old terraces, industry, regeneration"], ["Suburbs", "#f6d77a", "newer, larger houses, gardens"], ["Rural urban fringe", "#9fd38a", "new estates, business parks, green belt"]];
  return (
    <svg viewBox={V}><Defs c={c} />
      {[...zones].reverse().map(([n, col], i) => <circle key={n} cx="160" cy="146" r={128 - i * 31} fill={col} stroke={INK} strokeWidth="1.2" />)}
      <T x={160} y={152} s={14} anchor="middle">CBD</T>
      {zones.map(([n, col, d], i) => (
        <g key={n}>
          <rect x="336" y={22 + i * 64} width="18" height="18" rx="4" fill={col} stroke={INK} strokeWidth=".8" />
          <T x={362} y={36 + i * 64} s={16} fill={INK}>{n.toUpperCase()}</T>
          <T x={362} y={56 + i * 64} s={14} fill="#4b5563">{d}</T>
        </g>
      ))}
      <T x={340} y={298} s={13} anchor="middle">LAND VALUE AND BUILDING DENSITY FALL WITH DISTANCE FROM THE CBD</T>
    </svg>
  );
};

/** The four stage layouts from above, with the audience shown as dots. */
const seats = (pts) => pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3.2" fill="#7a5cd6" />);
const rowOf = (x0, y0, dx, dy, n) => Array.from({ length: n }, (_, i) => [x0 + dx * i, y0 + dy * i]);
const stages = (c) => {
  const P = (i) => 14 + i * 166;
  return (
    <svg viewBox={V}><Defs c={c} />
      {["PROSCENIUM", "THRUST", "TRAVERSE", "IN THE ROUND"].map((t, i) => <T key={t} x={P(i) + 76} y={26} s={15} anchor="middle" fill={c}>{t}</T>)}
      <g>
        <rect x={P(0) + 16} y="50" width="120" height="70" fill="#e0b07c" stroke={INK} /><path d={`M${P(0) + 10} 120 H${P(0) + 142}`} stroke="#d0496d" strokeWidth="4" />
        {seats([0, 1, 2, 3].flatMap((r) => rowOf(P(0) + 22, 140 + r * 16, 12, 0, 10)))}
      </g>
      <g>
        <rect x={P(1) + 46} y="50" width="60" height="100" fill="#e0b07c" stroke={INK} />
        {seats([0, 1].flatMap((r) => [...rowOf(P(1) + 30 - r * 14, 62, 0, 16, 6), ...rowOf(P(1) + 122 + r * 14, 62, 0, 16, 6), ...rowOf(P(1) + 40, 166 + r * 16, 12, 0, 7)]))}
      </g>
      <g>
        <rect x={P(2) + 16} y="100" width="120" height="44" fill="#e0b07c" stroke={INK} />
        {seats([0, 1].flatMap((r) => [...rowOf(P(2) + 20, 82 - r * 16, 12, 0, 10), ...rowOf(P(2) + 20, 162 + r * 16, 12, 0, 10)]))}
      </g>
      <g>
        <circle cx={P(3) + 76} cy="120" r="36" fill="#e0b07c" stroke={INK} />
        {seats([54, 70].flatMap((rr) => Array.from({ length: Math.round(rr / 4.6) }, (_, k) => { const a = (k / Math.round(rr / 4.6)) * Math.PI * 2; return [P(3) + 76 + rr * Math.cos(a), 120 + rr * Math.sin(a)]; })))}
      </g>
      {[["audience on one side,", "framed by an arch"], ["audience on three", "sides, very close"], ["audience on two sides", "facing each other"], ["audience all round:", "keep actors moving"]].map(([a, b], i) => <g key={a}><T x={P(i) + 76} y={232} s={13} anchor="middle">{a}</T><T x={P(i) + 76} y={248} s={13} anchor="middle">{b}</T></g>)}
      <T x={340} y={290} s={13} anchor="middle">BROWN IS THE STAGE, DOTS ARE THE AUDIENCE, SEEN FROM ABOVE</T>
    </svg>
  );
};

/** One cube drawn four ways. */
const projections = (c) => {
  const P = (i) => 14 + i * 166, s = 50, F = "#cfe3f7", Tp = "#eaf3fc", S = "#a9c9ea";
  const iso = (x0, y0) => { const cx = Math.cos(Math.PI / 6) * s, sy = Math.sin(Math.PI / 6) * s, p = (x, y) => `${x0 + x} ${y0 + y}`;
    return <g stroke={INK} strokeWidth="1.3" strokeLinejoin="round"><path d={`M${p(0, 0)} L${p(-cx, -sy)} L${p(-cx, -sy - s)} L${p(0, -s)} Z`} fill={F} /><path d={`M${p(0, 0)} L${p(cx, -sy)} L${p(cx, -sy - s)} L${p(0, -s)} Z`} fill={S} /><path d={`M${p(0, -s)} L${p(-cx, -sy - s)} L${p(0, -2 * sy - s)} L${p(cx, -sy - s)} Z`} fill={Tp} /></g>; };
  const obl = (x0, y0) => { const d = s / 2 * Math.cos(Math.PI / 4), p = (x, y) => `${x0 + x} ${y0 + y}`;
    return <g stroke={INK} strokeWidth="1.3" strokeLinejoin="round"><path d={`M${p(s, 0)} L${p(s + d, -d)} L${p(s + d, -s - d)} L${p(s, -s)} Z`} fill={S} /><path d={`M${p(0, -s)} L${p(d, -s - d)} L${p(s + d, -s - d)} L${p(s, -s)} Z`} fill={Tp} /><rect x={x0} y={y0 - s} width={s} height={s} fill={F} /></g>; };
  const vp = [P(2) + 140, 70], f = [P(2) + 30, 110], k = 0.35, toVp = (x, y) => [x + (vp[0] - x) * k, y + (vp[1] - y) * k];
  const fr = [[f[0], f[1]], [f[0] + s, f[1]], [f[0] + s, f[1] + s], [f[0], f[1] + s]], bk = fr.map(([x, y]) => toVp(x, y));
  return (
    <svg viewBox={V}><Defs c={c} />
      {["ISOMETRIC", "OBLIQUE", "1 POINT PERSPECTIVE", "ORTHOGRAPHIC"].map((t, i) => <T key={t} x={P(i) + 76} y={26} s={14} anchor="middle" fill={c}>{t}</T>)}
      {iso(P(0) + 76, 190)}
      <path d={`M${P(0) + 30} 210 L${P(0) + 76} 190 M${P(0) + 76} 190 L${P(0) + 122} 210`} stroke="#d0496d" strokeDasharray="4 3" />
      {obl(P(1) + 40, 190)}
      <g stroke={INK} strokeWidth="1.3">
        {fr.map(([x, y], i) => <path key={i} d={`M${x} ${y} L${vp[0]} ${vp[1]}`} stroke="#d0496d" strokeDasharray="4 3" strokeWidth="1" />)}
        <path d={`M${fr[1][0]} ${fr[1][1]} L${bk[1][0]} ${bk[1][1]} L${bk[2][0]} ${bk[2][1]} L${fr[2][0]} ${fr[2][1]} Z`} fill={S} />
        <path d={`M${fr[0][0]} ${fr[0][1]} L${bk[0][0]} ${bk[0][1]} L${bk[1][0]} ${bk[1][1]} L${fr[1][0]} ${fr[1][1]} Z`} fill={Tp} />
        <rect x={f[0]} y={f[1]} width={s} height={s} fill={F} />
      </g>
      <circle cx={vp[0]} cy={vp[1]} r="3.4" fill="#d0496d" /><T x={vp[0]} y={vp[1] - 8} s={12} anchor="middle" fill="#d0496d">VP</T>
      <path d={`M${P(2) + 4} ${vp[1]} H${P(2) + 156}`} stroke="#d0496d" strokeWidth=".8" />
      <g stroke={INK} strokeWidth="1.3" fill={F}>
        <rect x={P(3) + 20} y="64" width="44" height="44" /><rect x={P(3) + 20} y="126" width="44" height="44" /><rect x={P(3) + 82} y="126" width="44" height="44" />
      </g>
      <path d={`M${P(3) + 64} 86 H${P(3) + 104} V126`} fill="none" stroke="#d0496d" strokeDasharray="3 3" />
      <T x={P(3) + 42} y={58} s={11} anchor="middle">PLAN (ABOVE)</T><T x={P(3) + 42} y={186} s={11} anchor="middle">FRONT</T><T x={P(3) + 104} y={186} s={11} anchor="middle">SIDE</T>
      {[["30° lines, true", "lengths up the sides"], ["front face true,", "depth at 45°, halved"], ["lines meet at a", "vanishing point"], ["third angle: plan above,", "side beside the front"]].map(([a, b], i) => <g key={a}><T x={P(i) + 76} y={240} s={13} anchor="middle">{a}</T><T x={P(i) + 76} y={256} s={13} anchor="middle">{b}</T></g>)}
      <T x={340} y={294} s={13} anchor="middle">THE SAME CUBE, DRAWN FOUR WAYS</T>
    </svg>
  );
};

/** T accounts for two transactions, showing both sides of each. */
const tAccount = (x, y, name, dr, cr, color) => (
  <g>
    <T x={x + 95} y={y} s={15} anchor="middle" fill={color}>{name.toUpperCase()}</T>
    <path d={`M${x} ${y + 10} H${x + 190} M${x + 95} ${y + 10} V${y + 70}`} stroke={INK} strokeWidth="2" />
    <T x={x + 4} y={y + 26} s={11} fill="#6b7682">DR</T><T x={x + 186} y={y + 26} s={11} anchor="end" fill="#6b7682">CR</T>
    {dr.map(([a, b], i) => <g key={a}><T x={x + 4} y={y + 44 + i * 18} s={13}>{a}</T><T x={x + 90} y={y + 44 + i * 18} s={13} anchor="end">{b}</T></g>)}
    {cr.map(([a, b], i) => <g key={a}><T x={x + 100} y={y + 44 + i * 18} s={13}>{a}</T><T x={x + 186} y={y + 44 + i * 18} s={13} anchor="end">{b}</T></g>)}
  </g>
);
const tAccounts = (c) => (
  <svg viewBox={V}><Defs c={c} />
    <T x={340} y={22} s={14} anchor="middle" fill={c}>1. OWNER PUTS IN £5 000 CASH.  2. RENT OF £800 PAID IN CASH.</T>
    {tAccount(20, 56, "Cash", [["Capital", "5 000"]], [["Rent", "800"]], c)}
    {tAccount(245, 56, "Capital", [], [["Cash", "5 000"]], "#d0496d")}
    {tAccount(470, 56, "Rent", [["Cash", "800"]], [], "#c0702a")}
    <T x={340} y={176} s={14} anchor="middle">EACH TRANSACTION: ONE DEBIT AND ONE CREDIT OF THE SAME AMOUNT</T>
    <T x={340} y={196} s={13} anchor="middle">THE NAME IN EACH ENTRY IS THE OTHER ACCOUNT INVOLVED</T>
    <Label x={60} y={214} w={260} color={c} title="debit increases" lines={["assets, expenses, drawings"]} />
    <Label x={360} y={214} w={260} color="#d0496d" title="credit increases" lines={["capital, liabilities, income"]} />
  </svg>
);

/** The business cycle: output rising and falling round a rising trend. */
const businessCycle = (c) => {
  const { X, Y, path } = plot([60, 40, 560, 200], [0, 10], [0, 10]);
  const f = (t) => 2 + 0.5 * t + 1.8 * Math.sin(((t - 1) / 6) * Math.PI * 2);
  const peak = 2.5, trough = 5.5;
  return (
    <svg viewBox={V}><Defs c={c} />
      <path d={`M${X(0)} ${Y(0)} H${X(10) + 10} M${X(0)} ${Y(0)} V${Y(10) - 10}`} stroke={INK} strokeWidth="1.5" />
      <T x={X(10)} y={Y(0) + 20} s={14} anchor="end">TIME</T><T x={X(0) + 8} y={Y(10) - 4} s={14}>REAL GDP (OUTPUT)</T>
      <path d={path((t) => 2 + 0.5 * t, 0, 10)} fill="none" stroke="#9aa6b2" strokeWidth="1.6" strokeDasharray="6 4" />
      <path d={path(f, 0, 10)} fill="none" stroke={c} strokeWidth="3.2" filter="url(#ps)" />
      {[[peak, "BOOM", "#3f9d5a", -16], [4, "RECESSION", "#c0702a", -14], [trough, "SLUMP", "#d0496d", 26], [7.2, "RECOVERY", "#2f7fd0", 26]].map(([t, n, col, dy]) => (
        <g key={n}><circle cx={X(t)} cy={Y(f(t))} r="5" fill={col} stroke="#fff" strokeWidth="2" /><T x={X(t)} y={Y(f(t)) + dy} s={14} anchor="middle" fill={col}>{n}</T></g>
      ))}
      <T x={X(5.5)} y={Y(2 + 0.5 * 5.5) - 10} s={12} anchor="middle" fill="#6b7682">TREND GROWTH</T>
      <T x={340} y={274} s={13} anchor="middle">RECESSION: OUTPUT FALLS FOR TWO QUARTERS IN A ROW</T>
      <T x={340} y={292} s={13} anchor="middle">BOOM: HIGH DEMAND AND LOW UNEMPLOYMENT, BUT INFLATION MAY RISE</T>
    </svg>
  );
};

export default {
  "biology-human-nutrition-2": digestive,
  "chemistry-periodic": periodic,
  "maths-transform": transformations,
  "addmaths-circle": circle,
  "addmaths-vectors": vectors,
  "geography-settlements": urbanModel,
  "drama-written": stages,
  "dt-graphic": projections,
  "accounting-recording": tAccounts,
  "business-external": businessCycle,
};
