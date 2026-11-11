// Diagrams for the biology sections added with the full syllabus: osmosis in cells, limiting
// factors, a villus, blood vessels, antibody responses, the eye, phototropism, the menstrual
// cycle, variation charts, the carbon cycle, population growth, a fermenter and tables.

import { INK, Label, Defs, plot, T, Arrow, Box, Face } from "../posterKit.jsx";
import { table, compare, flow, hub } from "./gen.jsx";

const V = "0 0 680 310";
const WALL = "#5aa02f", CYTO = "#eaf6dd", VAC = "#bfe0f7", RBC = "#e8546b";

/** A plant cell: wall, cytoplasm (inset by shrink) and vacuole. */
const plantCell = (x, y, shrink, vac) => (
  <g>
    <rect x={x} y={y} width="110" height="80" rx="8" fill="#fff" stroke={WALL} strokeWidth="4" />
    <rect x={x + 3 + shrink} y={y + 3 + shrink} width={104 - 2 * shrink} height={74 - 2 * shrink} rx={6 + shrink} fill={CYTO} stroke={INK} strokeWidth="1" />
    <ellipse cx={x + 55} cy={y + 40} rx={vac[0]} ry={vac[1]} fill={VAC} stroke={INK} strokeWidth=".8" />
    <circle cx={x + 18 + shrink} cy={y + 18 + shrink} r="6" fill="#cdb8f2" stroke={INK} strokeWidth=".8" />
  </g>
);
const osmosis = (c) => (
  <svg viewBox={V}><Defs c={c} />
    {[["IN WATER", "turgid: vacuole full,", "membrane pushes on wall", 0, [44, 30]], ["SLIGHTLY STRONGER", "flaccid: less water,", "cell is soft", 0, [30, 20]], ["CONCENTRATED", "plasmolysed: membrane", "pulls away from the wall", 16, [16, 10]]].map(([t, a, b, sh, v], i) => (
      <g key={t}><T x={95 + i * 230} y={22} s={14} anchor="middle" fill={c}>{t}</T>{plantCell(40 + i * 230, 32, sh, v)}<T x={95 + i * 230} y={132} s={12} anchor="middle">{a}</T><T x={95 + i * 230} y={147} s={12} anchor="middle">{b}</T></g>
    ))}
    <path d="M20 166 H660" stroke="#e3e7ec" strokeWidth="1.4" />
    <T x={340} y={186} s={14} anchor="middle" fill={c}>RED BLOOD CELLS (NO CELL WALL)</T>
    <g><circle cx={95} cy={232} r="30" fill={RBC} opacity=".8" stroke={INK} /><Face x={95} y={232} r={22} mood="worried" /><path d="M70 214 l-8 -6 M120 214 l8 -6 M95 200 v-8" stroke={INK} /><T x={95} y={288} s={12} anchor="middle">IN WATER: SWELLS, BURSTS</T></g>
    <g><ellipse cx={325} cy={232} rx="30" ry="24" fill={RBC} opacity=".8" stroke={INK} /><ellipse cx={325} cy={238} rx="12" ry="5" fill="#f6a3b0" /><Face x={325} y={228} r={17} /><T x={325} y={288} s={12} anchor="middle">SAME CONCENTRATION: NORMAL</T></g>
    <g><path d="M555 210 l8 6 l8 -6 l6 10 l10 2 l-4 10 l6 8 l-10 4 l-2 10 l-10 -4 l-8 6 l-6 -8 l-10 -2 l2 -10 l-8 -8 l8 -6 l-2 -10 l10 0 Z" fill={RBC} opacity=".8" stroke={INK} /><Face x={565} y={232} r={13} mood="worried" /><T x={565} y={288} s={12} anchor="middle">CONCENTRATED: SHRINKS</T></g>
    <T x={340} y={306} s={12} anchor="middle">WATER MOVES FROM HIGH TO LOW WATER POTENTIAL, THROUGH THE PARTIALLY PERMEABLE MEMBRANE</T>
  </svg>
);

const limiting = (c) => {
  const { X, Y, path } = plot([60, 30, 320, 220], [0, 10], [0, 10]);
  // same starting slope (light limiting), levelling off at a height set by the CO₂ level
  const curve = (top) => (x) => top * (1 - Math.exp((-2.6 * x) / top));
  return (
    <svg viewBox={V}><Defs c={c} />
      <path d={`M${X(0)} ${Y(0)} H${X(10) + 10} M${X(0)} ${Y(0)} V${Y(10) - 10}`} stroke={INK} strokeWidth="1.5" />
      <T x={X(10)} y={Y(0) + 22} s={13} anchor="end">LIGHT INTENSITY</T><T x={X(0) + 8} y={Y(10) - 4} s={13}>RATE OF PHOTOSYNTHESIS</T>
      <path d={path(curve(8.4), 0, 10)} fill="none" stroke="#3f9d5a" strokeWidth="3" />
      <path d={path(curve(5), 0, 10)} fill="none" stroke={c} strokeWidth="3" />
      <T x={X(9.8)} y={Y(8.4) - 8} s={12} anchor="end" fill="#3f9d5a">HIGH CO₂</T><T x={X(9.8)} y={Y(5) - 8} s={12} anchor="end" fill={c}>LOW CO₂</T>
      <T x={X(1.4)} y={Y(4.8)} s={12} anchor="middle">LIGHT IS</T><T x={X(1.4)} y={Y(4.8) + 15} s={12} anchor="middle">LIMITING</T>
      <Arrow from={[X(1.6), Y(3.6)]} to={[X(2), Y(3.1)]} color={INK} />
      <Label x={420} y={14} w={254} color={c} title="limiting factor" lines={["the factor in shortest supply", "holds the rate down"]} />
      <Label x={420} y={112} w={254} color="#3f9d5a" title="on the flat part" lines={["more light does nothing:", "CO₂ or temperature limits"]} />
      <Label x={420} y={210} w={254} color="#c0702a" title="pondweed experiment" lines={["count bubbles of oxygen", "as the lamp moves closer"]} />
    </svg>
  );
};

const villus = (c) => (
  <svg viewBox={V}><Defs c={c} />
    <path d="M120 290 V90 Q120 30 180 30 Q240 30 240 90 V290" fill="#f8d9cf" stroke={INK} strokeWidth="1.6" />
    {Array.from({ length: 22 }, (_, i) => { const t = (i / 21) * Math.PI, x = 180 - 60 * Math.cos(t), y = 90 - 60 * Math.sin(t); return <path key={i} d={`M${x} ${y} l${-6 * Math.cos(t)} ${-6 * Math.sin(t)}`} stroke={INK} strokeWidth="1" />; })}
    {[100, 140, 180, 220, 260].map((y) => <g key={y}><path d={`M120 ${y} l-6 0 M240 ${y} l6 0`} stroke={INK} /></g>)}
    <path d="M140 290 V100 Q140 60 180 60 Q220 60 220 100 V290" fill="none" stroke="#d0496d" strokeWidth="3" />
    {[110, 150, 190, 230, 270].map((y) => <path key={y} d={`M140 ${y} Q180 ${y - 14} 220 ${y}`} fill="none" stroke="#d0496d" strokeWidth="1.6" />)}
    <path d="M170 290 V100 Q170 86 180 86 Q190 86 190 100 V290" fill="#fff8d6" stroke="#c0902a" strokeWidth="1.6" />
    <Label x={300} y={8} w={180} color={INK} title="epithelium" lines={["one cell thick"]} />
    <path d="M300 34 L232 70" stroke={INK} />
    <Label x={300} y={82} w={180} color="#7a5cd6" title="microvilli" lines={["even more surface"]} />
    <path d="M300 110 L236 46" stroke="#7a5cd6" />
    <Label x={300} y={156} w={180} color="#d0496d" title="capillaries" lines={["glucose, amino acids"]} />
    <path d="M300 186 L220 190" stroke="#d0496d" />
    <Label x={300} y={230} w={180} color="#c0902a" title="lacteal" lines={["fatty acids, glycerol"]} />
    <path d="M300 258 L190 250" stroke="#c0902a" />
    <Label x={496} y={60} w={180} color={c} title="huge surface area" lines={["many villi, long gut"]} />
    <Label x={496} y={150} w={180} color={c} title="short distance" lines={["thin wall"]} />
    <T x={590} y={270} s={12} anchor="middle">[E] VILLUS STRUCTURE</T>
  </svg>
);

const vessels = (c) => {
  const ring = (cx, R, r, col) => <g><circle cx={cx} cy={130} r={R} fill={col} stroke={INK} strokeWidth="1.4" /><circle cx={cx} cy={130} r={r} fill="#fde8ec" stroke={INK} strokeWidth="1" /></g>;
  return (
    <svg viewBox={V}><Defs c={c} />
      <T x={110} y={28} s={15} anchor="middle" fill="#d0496d">ARTERY</T><T x={340} y={28} s={15} anchor="middle" fill="#2f7fd0">VEIN</T><T x={570} y={28} s={15} anchor="middle" fill={c}>CAPILLARY</T>
      {ring(110, 70, 24, "#f2a3a3")}<circle cx={110} cy={130} r="52" fill="none" stroke="#c0607a" strokeDasharray="3 3" />
      <path d="M340 60 Q414 66 410 130 Q414 196 340 200 Q266 196 270 130 Q266 66 340 60 Z" fill="#a9c9ea" stroke={INK} strokeWidth="1.4" /><path d="M340 72 Q400 78 398 130 Q400 184 340 188 Q280 184 282 130 Q280 78 340 72 Z" fill="#fde8ec" stroke={INK} />
      <circle cx="570" cy="130" r="22" fill="#fde8ec" stroke={INK} strokeWidth="2" /><ellipse cx="570" cy="130" rx="10" ry="6" fill="#e8546b" />
      {[["thick, muscular, elastic wall", "narrow lumen", "high pressure, away from heart"], ["thin wall, wide lumen", "valves stop backflow", "low pressure, back to heart"], ["wall one cell thick", "exchange with cells", "red cells pass in single file"]].map((l, i) => l.map((t, k) => <T key={t} x={110 + i * 230} y={232 + k * 18} s={13} anchor="middle">{t.toUpperCase()}</T>))}
      <T x={340} y={300} s={12} anchor="middle">NOT TO SCALE: A CAPILLARY IS ABOUT THE WIDTH OF ONE RED BLOOD CELL</T>
    </svg>
  );
};

const antibodies = (c) => {
  const { X, Y, path } = plot([60, 30, 350, 220], [0, 60], [0, 10]);
  // rises to a peak then falls away slowly; the secondary response is quicker, bigger and lasts longer
  const bump = (t0, h, w) => (t) => (t < t0 ? 0 : h * ((t - t0) / w) * Math.exp(1 - (t - t0) / w));
  const f = (t) => bump(2, 2, 8)(t) + bump(32, 9, 4)(t) + 0.2;
  return (
    <svg viewBox={V}><Defs c={c} />
      <path d={`M${X(0)} ${Y(0)} H${X(60) + 10} M${X(0)} ${Y(0)} V${Y(10) - 10}`} stroke={INK} strokeWidth="1.5" />
      <T x={X(60)} y={Y(0) + 22} s={13} anchor="end">TIME (DAYS)</T><T x={X(0) + 8} y={Y(10) - 4} s={13}>ANTIBODY CONCENTRATION</T>
      <path d={path(f, 0, 60, 200)} fill="none" stroke={c} strokeWidth="3" />
      <Arrow from={[X(2), Y(0) + 34]} to={[X(2), Y(0) + 6]} color="#d0496d" /><T x={X(2)} y={Y(0) + 48} s={11} anchor="middle" fill="#d0496d">1ST EXPOSURE</T>
      <Arrow from={[X(32), Y(0) + 34]} to={[X(32), Y(0) + 6]} color="#d0496d" /><T x={X(32)} y={Y(0) + 48} s={11} anchor="middle" fill="#d0496d">2ND EXPOSURE</T>
      <T x={X(10)} y={Y(2.6)} s={12} anchor="middle">PRIMARY: SLOW, SMALL</T>
      <T x={X(36)} y={Y(9.2) - 6} s={12}>SECONDARY: FAST, LARGE</T>
      <Label x={440} y={14} w={234} color={c} title="memory cells" lines={["made after the first", "exposure; react fast"]} />
      <Label x={440} y={110} w={234} color="#3f9d5a" title="vaccination" lines={["safe first exposure", "using antigens"]} />
      <Label x={440} y={206} w={234} color="#c0702a" title="passive immunity" lines={["borrowed antibodies,", "no memory cells"]} />
    </svg>
  );
};

/** The human eye in horizontal section, light entering from the left. Every part is placed from
 * the eyeball's centre and radius so the anatomy stays in proportion. */
const eye = (c) => {
  const cx = 300, cy = 152, R = 108, at = (deg, r = R) => [cx + r * Math.cos((deg * Math.PI) / 180), cy + r * Math.sin((deg * Math.PI) / 180)];
  const [jt, jb] = [at(-145), at(145)]; // where the cornea joins the sclera (top and bottom)
  const apex = cx - R - 26; // front of the cornea
  const lens = { x: cx - 74, ry: 34, rx: 13 };
  const [cmT, cmB] = [at(-132, R - 4), at(132, R - 4)]; // ciliary muscle, just behind the iris root
  const fovea = at(0, R - 5), nerve = at(22, R), nerveOut = at(22, R + 46);
  const [ra, rb] = [at(-118, R - 4), at(118, R - 4)];
  const ray = (y0, s) => `M${apex - 16} ${y0 + (y0 < cy ? 6 : -6)} L${apex + 10} ${cy + s * 15} L${lens.x - lens.rx} ${cy + s * 9} L${lens.x + lens.rx} ${cy + s * 6} L${fovea[0]} ${fovea[1]}`;
  const tag = (x, y, t, to, end) => <g key={t}><T x={x} y={y} s={12.5} anchor={end ? "end" : "start"}>{t}</T><path d={`M${end ? x + 4 : x - 4} ${y - 4} L${to[0]} ${to[1]}`} stroke={INK} strokeWidth=".8" opacity=".6" /><circle cx={to[0]} cy={to[1]} r="2.2" fill={INK} /></g>;
  return (
    <svg viewBox={V}><Defs c={c} />
      <g filter="url(#ps)"><circle cx={cx} cy={cy} r={R} fill="#fbfbf7" stroke={INK} strokeWidth="2.2" /></g>
      <path d={`M${jt[0]} ${jt[1]} Q${apex - 30} ${cy} ${jb[0]} ${jb[1]}`} fill="#e3f3fc" stroke={INK} strokeWidth="1.8" />
      <path d={`M${ra[0]} ${ra[1]} A${R - 4} ${R - 4} 0 1 1 ${rb[0]} ${rb[1]}`} fill="none" stroke="#e8768a" strokeWidth="5" opacity=".85" />
      <path d={`M${nerve[0] - 2} ${nerve[1]} L${nerveOut[0]} ${nerveOut[1]}`} fill="none" stroke={INK} strokeWidth="18" strokeLinecap="round" /><path d={`M${nerve[0] - 2} ${nerve[1]} L${nerveOut[0]} ${nerveOut[1]}`} fill="none" stroke="#f2d5a0" strokeWidth="15" strokeLinecap="round" />
      <circle cx={nerve[0] - 2} cy={nerve[1]} r="4" fill="#fbfbf7" stroke={INK} strokeWidth="1" />
      <path d={`M${jt[0] + 2} ${jt[1] + 4} L${lens.x - 6} ${cy - 13}`} stroke="#7a5cd6" strokeWidth="6" strokeLinecap="round" />
      <path d={`M${jb[0] + 2} ${jb[1] - 4} L${lens.x - 6} ${cy + 13}`} stroke="#7a5cd6" strokeWidth="6" strokeLinecap="round" />
      {[-1, 1].map((s) => [0, 1, 2].map((k) => <path key={`${s}${k}`} d={`M${(s < 0 ? cmT : cmB)[0] + 4 + k * 4} ${(s < 0 ? cmT : cmB)[1] - s * 4} L${lens.x - 6 + k * 6} ${cy + s * (lens.ry - 4)}`} stroke="#9aa6b2" strokeWidth="1" />))}
      <ellipse cx={cmT[0] + 4} cy={cmT[1] + 3} rx="9" ry="6" fill="#d98a4a" stroke={INK} strokeWidth=".8" transform={`rotate(-40 ${cmT[0] + 4} ${cmT[1] + 3})`} />
      <ellipse cx={cmB[0] + 4} cy={cmB[1] - 3} rx="9" ry="6" fill="#d98a4a" stroke={INK} strokeWidth=".8" transform={`rotate(40 ${cmB[0] + 4} ${cmB[1] - 3})`} />
      <ellipse cx={lens.x} cy={cy} rx={lens.rx} ry={lens.ry} fill="#cfe9f8" stroke={INK} strokeWidth="1.6" />
      <path d={ray(132, -1)} fill="none" stroke="#e8a92a" strokeWidth="1.8" /><path d={ray(172, 1)} fill="none" stroke="#e8a92a" strokeWidth="1.8" />
      <circle cx={fovea[0]} cy={fovea[1]} r="4.5" fill="#e8a92a" stroke="#fff" strokeWidth="1.5" />
      <ellipse cx={apex + 14} cy={cy - 26} rx="3.5" ry="8" fill="#fff" opacity=".95" transform={`rotate(20 ${apex + 14} ${cy - 26})`} />
      {tag(150, 26, "[E] ciliary muscle", [cmT[0] + 2, cmT[1] + 2], true)}
      {tag(150, 58, "[E] suspensory ligaments", [lens.x - 4, cy - 40], true)}
      {tag(150, 92, "iris: sets pupil size", [lens.x - 9, cy - 32], true)}
      {tag(150, 136, "cornea: refracts light", [apex + 12, cy - 19], true)}
      {tag(150, 214, "pupil: the gap in the iris", [lens.x - 8, cy + 2], true)}
      {tag(150, 260, "lens: fine focusing", [lens.x + 2, cy + 30], true)}
      {tag(452, 40, "retina: rods and cones", at(-60, R - 4))}
      {tag(452, 120, "[E] fovea: most cones", fovea)}
      {tag(452, 196, "blind spot: no receptors", [nerve[0] - 2, nerve[1]])}
      {tag(452, 250, "optic nerve: to the brain", [nerveOut[0], nerveOut[1]])}
      <T x={cx} y={300} s={12} anchor="middle">HORIZONTAL SECTION. LIGHT ENTERS FROM THE LEFT AND FOCUSES ON THE FOVEA</T>
    </svg>
  );
};

const tropism = (c) => (
  <svg viewBox={V}><Defs c={c} />
    <rect x="20" y="200" width="300" height="90" fill="#d9b98a" />
    <path d="M150 200 Q150 120 190 80 Q205 66 214 60" fill="none" stroke="#3f9d5a" strokeWidth="9" strokeLinecap="round" />
    <path d="M214 60 l12 -6 l-2 12 Z" fill="#3f9d5a" />
    <path d="M150 200 Q148 240 150 284" fill="none" stroke="#f2e6c8" strokeWidth="6" strokeLinecap="round" />
    {[[140, 150], [146, 128], [158, 106], [138, 172], [170, 92]].map(([x, y]) => <circle key={x + y} cx={x} cy={y} r="3.4" fill="#d0496d" />)}
    <circle cx="330" cy="60" r="20" fill="#ffe27a" stroke="#f2a53a" strokeWidth="2" />
    {[[300, 64], [300, 90], [300, 112]].map(([x, y]) => <Arrow key={y} from={[x, y]} to={[x - 60, y + 4]} color="#f2a53a" width={2} />)}
    <T x={330} y={30} s={13} anchor="middle" fill="#c0902a">LIGHT</T>
    <T x={60} y={140} s={12} fill="#d0496d">[E] AUXIN ON THE</T><T x={60} y={156} s={12} fill="#d0496d">SHADED SIDE</T>
    <T x={160} y={300} s={12} anchor="middle">ROOT GROWS DOWN: TOWARDS GRAVITY</T>
    <Label x={380} y={20} w={294} color="#3f9d5a" title="phototropism" lines={["shoots grow towards light"]} />
    <Label x={380} y={96} w={294} color="#a0855a" title="gravitropism" lines={["roots down, shoots up"]} />
    <Label x={380} y={172} w={294} color="#d0496d" title="[E] auxin" keep lines={["MADE IN THE SHOOT TIP, MOVES TO THE", "SHADED SIDE, CELLS THERE ELONGATE"]} />
  </svg>
);

const menstrual = (c) => {
  const { X, Y, path } = plot([60, 150, 580, 120], [0, 28], [0, 10]);
  const g = (m, s, h) => (t) => h * Math.exp(-(((t - m) / s) ** 2));
  const oest = (t) => g(12.5, 3.2, 8)(t) + g(21, 3, 4)(t) + 0.6, prog = (t) => g(21, 3.6, 8.5)(t) + 0.4, lh = (t) => g(14, 0.9, 9)(t) + 0.3;
  const lining = (t) => (t < 5 ? 4 - 3.2 * (t / 5) : 0.8 + 3.6 * Math.min(1, (t - 5) / 14) + (t > 19 ? 0.6 * Math.min(1, (t - 19) / 5) : 0));
  const L = (t) => 110 - lining(t) * 14;
  return (
    <svg viewBox={V}><Defs c={c} />
      <T x={20} y={22} s={13} fill="#c0607a">UTERUS LINING</T>
      <path d={`M${X(0)} 110 ${Array.from({ length: 57 }, (_, i) => `L${X(i / 2)} ${L(i / 2)}`).join(" ")} L${X(28)} 110 Z`} fill="#f6b8c6" stroke="#c0607a" />
      <rect x={X(0)} y="112" width={X(5) - X(0)} height="10" fill="#e8546b" /><T x={X(2.5)} y={138} s={11} anchor="middle">MENSTRUATION</T>
      <path d={`M${X(14)} 30 V${Y(0)}`} stroke="#9aa6b2" strokeDasharray="4 4" /><T x={X(14)} y={42} s={12} anchor="middle" fill={c}>OVULATION, DAY 14</T>
      <path d={`M${X(0)} ${Y(0)} H${X(28)}`} stroke={INK} />
      {[0, 7, 14, 21, 28].map((d) => <T key={d} x={X(d)} y={Y(0) + 18} s={12} anchor="middle">{d}</T>)}
      <T x={X(28)} y={Y(0) + 34} s={12} anchor="end">DAY OF CYCLE</T>
      <path d={path(oest, 0, 28, 120)} fill="none" stroke="#2f7fd0" strokeWidth="2.6" />
      <path d={path(prog, 0, 28, 120)} fill="none" stroke="#3f9d5a" strokeWidth="2.6" />
      <path d={path(lh, 0, 28, 160)} fill="none" stroke="#c0702a" strokeWidth="2" strokeDasharray="5 3" />
      <T x={600} y={170} s={12} fill="#2f7fd0">OESTROGEN</T><T x={600} y={190} s={12} fill="#3f9d5a">PROGESTERONE</T><T x={600} y={210} s={12} fill="#c0702a">[E] LH</T>
      <T x={340} y={304} s={12} anchor="middle">[E] OESTROGEN BUILDS THE LINING, LH TRIGGERS OVULATION, PROGESTERONE KEEPS THE LINING</T>
    </svg>
  );
};

const variationCharts = (c) => {
  const hist = [2, 5, 11, 18, 22, 18, 11, 5, 2];
  return (
    <svg viewBox={V}><Defs c={c} />
      <T x={170} y={24} s={15} anchor="middle" fill={c}>CONTINUOUS: HEIGHT</T>
      <path d="M40 230 H310 M40 230 V50" stroke={INK} strokeWidth="1.5" />
      {hist.map((h, i) => <rect key={i} x={46 + i * 29} y={230 - h * 7.5} width="29" height={h * 7.5} fill={c} opacity=".7" stroke="#fff" />)}
      <T x={175} y={252} s={12} anchor="middle">HEIGHT (A RANGE)</T>
      <T x={175} y={274} s={12} anchor="middle">HISTOGRAM: BARS TOUCH</T>
      <T x={175} y={292} s={12} anchor="middle">GENES AND ENVIRONMENT</T>
      <path d="M340 14 V296" stroke="#e3e7ec" strokeWidth="1.4" />
      <T x={510} y={24} s={15} anchor="middle" fill={c}>DISCONTINUOUS: BLOOD GROUP</T>
      <path d="M380 230 H650 M380 230 V50" stroke={INK} strokeWidth="1.5" />
      {[["A", 40], ["B", 11], ["AB", 4], ["O", 45]].map(([g, p], i) => <g key={g}><rect x={400 + i * 62} y={230 - p * 3.6} width="40" height={p * 3.6} fill="#d0496d" opacity=".7" /><T x={420 + i * 62} y={248} s={13} anchor="middle">{g}</T></g>)}
      <T x={515} y={274} s={12} anchor="middle">BAR CHART: BARS APART</T>
      <T x={515} y={292} s={12} anchor="middle">DISTINCT GROUPS, GENES ONLY</T>
    </svg>
  );
};

const carbonCycle = (c) => (
  <svg viewBox={V}><Defs c={c} />
    <Box x={250} y={10} w={180} h={42} color={c}>CO₂ IN THE AIR</Box>
    <Box x={40} y={130} w={140} h={42} color="#3f9d5a">PLANTS</Box>
    <Box x={270} y={130} w={140} h={42} color="#c0702a">ANIMALS</Box>
    <Box x={480} y={130} w={170} h={42} color="#7a5cd6">DECOMPOSERS</Box>
    <Box x={250} y={250} w={180} h={42} color={INK}>FOSSIL FUELS</Box>
    <Arrow from={[260, 46]} to={[130, 128]} color="#3f9d5a" width={2.2} /><T x={150} y={78} s={12} fill="#3f9d5a">PHOTOSYNTHESIS</T>
    <Arrow from={[100, 128]} to={[250, 30]} color="#2f7fd0" width={1.6} /><T x={60} y={108} s={11} fill="#2f7fd0">RESPIRATION</T>
    <Arrow from={[182, 151]} to={[268, 151]} color="#c0702a" width={2} /><T x={225} y={144} s={11} anchor="middle">FEEDING</T>
    <Arrow from={[340, 128]} to={[340, 54]} color="#2f7fd0" width={1.6} /><T x={346} y={100} s={11} fill="#2f7fd0">RESPIRATION</T>
    <Arrow from={[412, 151]} to={[478, 151]} color="#7a5cd6" width={2} /><T x={445} y={144} s={11} anchor="middle">DEATH, WASTE</T>
    <path d="M110 174 Q110 214 470 170" fill="none" stroke="#7a5cd6" strokeWidth="1.6" strokeDasharray="4 3" /><T x={200} y={204} s={11} fill="#7a5cd6">DEAD PLANTS</T>
    <Arrow from={[560, 128]} to={[430, 40]} color="#2f7fd0" width={1.6} /><T x={520} y={84} s={11} fill="#2f7fd0">DECOMPOSITION</T>
    <Arrow from={[520, 174]} to={[432, 256]} color={INK} width={1.6} /><T x={500} y={226} s={11}>FOSSILISATION</T>
    <path d="M250 270 Q20 270 20 100 Q20 30 248 30" fill="none" stroke="#d0496d" strokeWidth="2" /><path d="M240 24 l8 6 l-8 6" fill="none" stroke="#d0496d" strokeWidth="2" />
    <T x={30} y={240} s={12} fill="#d0496d">COMBUSTION</T>
  </svg>
);

const sigmoid = (c) => {
  const { X, Y, path } = plot([60, 30, 380, 220], [0, 10], [0, 10]);
  const f = (t) => (t < 7 ? 8 / (1 + Math.exp(-1.4 * (t - 3.6))) : 8 / (1 + Math.exp(-1.4 * (t - 3.6))) - 0.55 * (t - 7) ** 1.3);
  return (
    <svg viewBox={V}><Defs c={c} />
      <path d={`M${X(0)} ${Y(0)} H${X(10) + 10} M${X(0)} ${Y(0)} V${Y(10) - 10}`} stroke={INK} strokeWidth="1.5" />
      <T x={X(10)} y={Y(0) + 22} s={13} anchor="end">TIME</T><T x={X(0) + 8} y={Y(10) - 4} s={13}>POPULATION SIZE</T>
      <path d={path(f, 0, 10)} fill="none" stroke={c} strokeWidth="3.2" />
      {[1.8, 4.6, 7.2].map((t) => <path key={t} d={`M${X(t)} ${Y(0)} V${Y(9.5)}`} stroke="#9aa6b2" strokeDasharray="4 4" />)}
      {[[0.9, "LAG"], [3.2, "EXPONENTIAL"], [5.9, "STATIONARY"], [8.6, "DEATH"]].map(([t, n]) => <T key={n} x={X(t)} y={Y(9.6)} s={12} anchor="middle" fill={c}>{n}</T>)}
      <Label x={450} y={14} w={224} color={c} title="exponential" lines={["plenty of resources"]} />
      <Label x={450} y={90} w={224} color="#3f9d5a" title="stationary" lines={["births = deaths"]} />
      <Label x={450} y={166} w={224} color="#d0496d" title="limits" lines={["food, competition,", "predation, disease"]} />
    </svg>
  );
};

const fermenter = (c) => (
  <svg viewBox={V}><Defs c={c} />
    <rect x="120" y="50" width="160" height="220" rx="24" fill="#bfe0f7" stroke={INK} strokeWidth="2" />
    <rect x="134" y="64" width="132" height="192" rx="16" fill="#eef7e6" stroke={INK} strokeWidth="1.4" />
    <path d="M200 20 V230" stroke={INK} strokeWidth="3" />
    {[110, 170, 225].map((y) => <rect key={y} x="176" y={y} width="48" height="8" rx="2" fill="#9aa6b2" stroke={INK} />)}
    <rect x="186" y="8" width="28" height="16" rx="3" fill="#9aa6b2" stroke={INK} /><T x={226} y={20} s={11}>MOTOR</T>
    {[[160, 200], [180, 160], [220, 130], [240, 190], [160, 120]].map(([x, y]) => <circle key={x + y} cx={x} cy={y} r="4" fill="#fff" stroke="#9aa6b2" />)}
    <Arrow from={[60, 248]} to={[180, 248]} color="#2f7fd0" width={2} /><T x={60} y={240} s={12} fill="#2f7fd0">STERILE AIR IN</T>
    <Arrow from={[250, 44]} to={[330, 20]} color="#9aa6b2" width={2} /><T x={334} y={24} s={12}>WASTE GASES OUT</T>
    <Arrow from={[60, 80]} to={[132, 80]} color="#3f9d5a" width={2} /><T x={60} y={72} s={12} fill="#3f9d5a">NUTRIENTS IN</T>
    <Arrow from={[200, 272]} to={[200, 302]} color="#c0702a" width={2} /><T x={208} y={300} s={12} fill="#c0702a">PRODUCT OUT</T>
    <path d="M266 120 H310 M266 150 H310" stroke={INK} strokeWidth="2" /><T x={316} y={124} s={12}>pH PROBE</T><T x={316} y={154} s={12}>TEMPERATURE PROBE</T>
    <T x={70} y={170} s={12} anchor="middle" fill="#2f7fd0">WATER</T><T x={70} y={186} s={12} anchor="middle" fill="#2f7fd0">JACKET</T>
    <Label x={470} y={60} w={204} color={c} title="[E] controlled" keep lines={["TEMPERATURE, pH, OXYGEN,", "NUTRIENTS, WASTE"]} />
    <Label x={470} y={160} w={204} color="#d0496d" title="sterilised" lines={["no contaminating", "microorganisms"]} />
    <T x={572} y={270} s={12} anchor="middle">INSULIN, PENICILLIN</T>
  </svg>
);

export default {
  "biology-characteristics-2": table(["Group", "Key features"], [["Mammals", "fur, external ears, mammary glands"], ["Birds", "feathers, beak, hard shelled eggs"], ["Reptiles", "dry scaly skin, rubbery eggs on land"], ["Amphibians", "moist skin, eggs and larvae in water"], ["Fish", "wet scales, fins, gills"], ["Insects", "3 body parts, 6 legs, 1 pair antennae"], ["Arachnids", "2 body parts, 8 legs, no antennae"]], { widths: [2, 5], caption: "KINGDOMS: ANIMAL, PLANT, FUNGUS, PROKARYOTE, PROTOCTIST. [E] VIRUS: DNA OR RNA IN A PROTEIN COAT" }),
  "biology-organisation-2": table(["Cell", "Adaptation"], [["Ciliated cell", "cilia move mucus"], ["Root hair cell", "long extension, large surface"], ["Palisade cell", "many chloroplasts"], ["Neurone", "long, carries impulses"], ["Red blood cell", "no nucleus, haemoglobin"], ["Sperm and egg", "gametes for reproduction"]], { widths: [2, 3], caption: "MAGNIFICATION = IMAGE SIZE ÷ ACTUAL SIZE.  1 mm = 1000 µm" }),
  "biology-movement-2": osmosis,
  "biology-plant-nutrition-2": limiting,
  "biology-human-nutrition": table(["Nutrient", "Source", "Why needed", "Lack causes"], [["Carbohydrate", "bread, rice", "energy", "tiredness"], ["Protein", "meat, beans", "growth, repair", "poor growth"], ["Vitamin C", "citrus fruit", "skin, gums", "scurvy"], ["Vitamin D", "fish, sunlight", "calcium uptake", "rickets"], ["Calcium", "milk, cheese", "bones, teeth", "rickets"], ["Iron", "red meat, spinach", "haemoglobin", "anaemia"], ["Fibre", "vegetables", "moves food along", "constipation"]], { widths: [3, 3, 3, 3] }),
  "biology-human-nutrition-3": villus,
  "biology-plant-transport-2": table(["Factor", "Transpiration", "Why"], [["Higher temperature", "faster", "more evaporation, faster diffusion"], ["Higher humidity", "slower", "smaller water vapour gradient"], ["More wind", "faster", "water vapour blown away"], ["[E] Brighter light", "faster", "stomata open wider"]], { widths: [3, 2, 4], caption: "MEASURE WITH A POTOMETER. [E] TRANSLOCATION: SUCROSE MOVES SOURCE TO SINK IN PHLOEM" }),
  "biology-animal-transport-2": vessels,
  "biology-disease-2": antibodies,
  "biology-gas-exchange-2": table(["", "Breathing in", "Breathing out"], [["External intercostals", "contract", "relax"], ["Ribs", "up and out", "down and in"], ["Diaphragm", "contracts, flattens", "relaxes, domes up"], ["Chest volume", "increases", "decreases"], ["Pressure inside", "falls: air in", "rises: air out"]], { widths: [3, 3, 3], caption: "[E] GOBLET CELLS MAKE MUCUS; CILIA SWEEP IT AWAY FROM THE LUNGS" }),
  "biology-coordination-2": eye,
  "biology-coordination-3": flow([["Glucose rises", "after a meal"], ["Pancreas", "releases insulin"], ["Liver", "glucose → glycogen"], ["Glucose falls", "[E] back to normal"]], { caption: "[E] IF IT FALLS TOO LOW, GLUCAGON TURNS GLYCOGEN BACK INTO GLUCOSE: NEGATIVE FEEDBACK" }),
  "biology-coordination-4": tropism,
  "biology-reproduction-3": menstrual,
  "biology-inheritance": compare([["Mitosis", ["Identical cells", "Diploid kept (46)", "Growth, repair, asexual"]], ["Meiosis", ["Genetically different", "Haploid (23)", "Makes gametes"]]], { caption: "GENE: DNA CODING FOR A PROTEIN. ALLELE: A VERSION OF A GENE. XX FEMALE, XY MALE" }),
  "biology-variation": variationCharts,
  "biology-environment-2": carbonCycle,
  "biology-environment-3": sigmoid,
  "biology-human-influences": table(["Human activity", "Effect"], [["Machinery, fertilisers", "more food per hectare"], ["Pesticides, herbicides", "fewer pests and weeds"], ["Monocultures", "less biodiversity, pests spread"], ["Deforestation", "extinction, soil loss, flooding, more CO₂"]], { widths: [2, 3] }),
  "biology-human-influences-3": hub("Conservation", [["Fish stocks", "quotas, net size"], ["Forests", "replanting, protection"], ["Captive breeding", "[E] AI and IVF"], ["Seed banks", "store plant genes"], ["Habitats", "monitor and protect"], ["Education", "change behaviour"]]),
  "biology-biotech": fermenter,
};
