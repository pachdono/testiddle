// Diagrams for the IGCSE Physical Education notes and cheat sheets: a synovial joint, an
// antagonistic pair, the three classes of lever, the inverted U and tables of sporting examples.

import { INK, Label, Link, Dot, Defs, plot, T, Arrow } from "../posterKit.jsx";
import { flow, compare, table, cycle, hub } from "./gen.jsx";

const V = "0 0 680 310";
const BONE = "#ece4d3", FLUID = "#fff0a8", CART = "#8fcfe6";

/** One lever: a beam on a fulcrum with the load and effort where the class puts them. */
const lever = (x0, kind, c) => {
  const L = x0 + 22, M = x0 + 105, R = x0 + 188, y = 150;
  const at = { 1: { f: M, l: L, e: R, eDown: true }, 2: { f: L, l: M, e: R }, 3: { f: L, e: M, l: R } }[kind];
  const down = (x, col, tag) => <g><Arrow from={[x, 94]} to={[x, y - 4]} color={col} width={2.4} /><T x={x} y={86} s={16} anchor="middle" fill={col}>{tag}</T></g>;
  const up = (x, col, tag) => <g><Arrow from={[x, 212]} to={[x, y + 6]} color={col} width={2.4} /><T x={x} y={230} s={16} anchor="middle" fill={col}>{tag}</T></g>;
  return (
    <g key={kind}>
      <path d={`M${L - 10} ${y} H${R + 10}`} stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <g filter="url(#ps)"><path d={`M${at.f - 15} ${y + 24} L${at.f} ${y + 3} L${at.f + 15} ${y + 24} Z`} fill={c} stroke={INK} strokeWidth="1.2" /></g>
      <T x={at.f} y={y + 42} s={15} anchor="middle">F</T>
      <rect x={at.l - 10} y={60} width="20" height="16" rx="3" fill="#c0702a" opacity=".85" />
      {down(at.l, "#c0702a", "")}
      <T x={at.l + 16} y={72} s={15} fill="#c0702a">L</T>
      {at.eDown ? down(at.e, "#d0496d", "E") : up(at.e, "#d0496d", "E")}
    </g>
  );
};


// ---------- the skeleton and the muscle map ----------

const TALL = "0 0 680 612";

/** A bone drawn as a rounded rod with an outline. */
const Rod = ({ a, b, w }) => <g><path d={`M${a[0]} ${a[1]} L${b[0]} ${b[1]}`} stroke={INK} strokeWidth={w + 2.6} strokeLinecap="round" /><path d={`M${a[0]} ${a[1]} L${b[0]} ${b[1]}`} stroke={BONE} strokeWidth={w} strokeLinecap="round" /></g>;

/** A small name with a leader line to the part it names. side -1 puts the name on the left. */
const Tag = ({ y, at, side, children, color = INK, x = side < 0 ? 196 : 484 }) => {
  return (
    <g>
      <path d={`M${side < 0 ? x + 4 : x - 4} ${y - 5} L${at[0]} ${at[1]}`} stroke={color} strokeWidth="1" opacity=".7" />
      <circle cx={at[0]} cy={at[1]} r="2.6" fill={color} />
      <T x={x} y={y} s={15} anchor={side < 0 ? "end" : "start"} fill={color}>{children}</T>
    </g>
  );
};

/** One half of the skeleton (the figure's right side, on the viewer's left); mirrored for the other. */
/** back draws the view from behind: the whole scapula, the heel, no patella or toes. */
const halfSkeleton = (k, back = false) => {
  const m = (x) => (k ? 680 - x : x);
  const P = (x, y) => [m(x), y];
  const ribW = [22, 30, 36, 40, 43, 44, 44, 43, 40, 36];
  const scapula = back
    ? <g><path d={`M${m(282)} 136 L${m(328)} 148 L${m(306)} 220 Z`} fill={BONE} stroke={INK} strokeWidth="1.4" /><path d={`M${m(324)} 156 L${m(284)} 140`} stroke={INK} strokeWidth="2.4" strokeLinecap="round" /></g>
    : <path d={`M${m(282)} 138 L${m(314)} 144 L${m(300)} 206 Z`} fill={BONE} stroke={INK} strokeWidth="1.2" opacity=".75" />;
  return (
    <g key={k}>
      {!back && scapula}
      {ribW.map((w, i) => { const y = 154 + i * 9.4; return <path key={i} d={`M${m(334)} ${y} Q${m(334 - w - 8)} ${y - 6} ${m(340 - w)} ${y + 16}`} fill="none" stroke={INK} strokeWidth="5.4" strokeLinecap="round" />; })}
      {ribW.map((w, i) => { const y = 154 + i * 9.4; return <path key={`r${i}`} d={`M${m(334)} ${y} Q${m(334 - w - 8)} ${y - 6} ${m(340 - w)} ${y + 16}`} fill="none" stroke={BONE} strokeWidth="3.2" strokeLinecap="round" />; })}
      {back && scapula}
      <Rod a={P(336, 138)} b={P(286, 132)} w={6} />
      <path d={`M${m(337)} 296 C${m(312)} 280 ${m(282)} 286 ${m(286)} 312 C${m(290)} 330 ${m(304)} 342 ${m(322)} 348 L${m(338)} 338 Z`} fill={BONE} stroke={INK} strokeWidth="1.4" />
      <Rod a={P(282, 144)} b={P(268, 250)} w={10} />
      <circle cx={m(282)} cy={142} r="8" fill={BONE} stroke={INK} strokeWidth="1.3" />
      <Rod a={P(262, 260)} b={P(250, 328)} w={6} />
      <Rod a={P(273, 258)} b={P(265, 330)} w={6} />
      {[[250, 337], [257, 335], [264, 338], [253, 343], [261, 343]].map(([x, y]) => <circle key={`${x}${y}`} cx={m(x)} cy={y} r="3.4" fill={BONE} stroke={INK} strokeWidth="1.1" />)}
      {[244, 250, 256, 262, 268].map((x, i) => <Rod key={x} a={P(252 + i * 3, 348)} b={P(x, 368)} w={2.4} />)}
      {[240, 247, 254, 261, 270].map((x, i) => <g key={x}><Rod a={P([244, 250, 256, 262, 268][i] - 1, 373)} b={P(x, 386)} w={2} /><Rod a={P(x, 390)} b={P(x - 1, 398)} w={1.6} /></g>)}
      <Rod a={P(320, 333)} b={P(305, 344)} w={7} />
      <circle cx={m(321)} cy={331} r="8" fill={BONE} stroke={INK} strokeWidth="1.3" />
      <Rod a={P(305, 342)} b={P(318, 446)} w={11} />
      <ellipse cx={m(318)} cy={452} rx="10" ry="7" fill={BONE} stroke={INK} strokeWidth="1.2" />
      {!back && <ellipse cx={m(319)} cy={458} rx="6" ry="8" fill={BONE} stroke={INK} strokeWidth="1.3" />}
      <Rod a={P(322, 470)} b={P(322, 538)} w={9} />
      <Rod a={P(305, 472)} b={P(308, 538)} w={4} />
      <ellipse cx={m(318)} cy={546} rx="8" ry="5" fill={BONE} stroke={INK} strokeWidth="1.2" />
      {back ? <ellipse cx={m(318)} cy={560} rx="8" ry="10" fill={BONE} stroke={INK} strokeWidth="1.3" /> : <>
      {[[310, 554], [318, 556], [326, 554]].map(([x, y]) => <circle key={x} cx={m(x)} cy={y} r="3.6" fill={BONE} stroke={INK} strokeWidth="1.1" />)}
      {[[306, 300], [312, 305], [318, 310], [324, 315], [330, 320]].map(([x], i) => <Rod key={x} a={P(308 + i * 5, 561)} b={P([300, 308, 316, 324, 332][i], 576)} w={2.4} />)}
      {[300, 308, 316, 324, 332].map((x) => <Rod key={x} a={P(x, 581)} b={P(x, 589)} w={2.2} />)}
      </>}
    </g>
  );
};

/** The skeleton from the front, with every bone in the syllabus named. */
const skeleton = (c) => (
  <svg viewBox={TALL}><Defs c={c} />
    {Array.from({ length: 24 }, (_, i) => <rect key={i} x={i > 18 ? 331 : 333} y={106 + i * 7.9} width={i > 18 ? 18 : 14} height="6.2" rx="2.2" fill={BONE} stroke={INK} strokeWidth="1.1" />)}
    <path d="M330 296 L350 296 L340 332 Z" fill={BONE} stroke={INK} strokeWidth="1.3" />
    {halfSkeleton(0)}{halfSkeleton(1)}
    <rect x="334" y="140" width="12" height="76" rx="5" fill={BONE} stroke={INK} strokeWidth="1.3" />
    <g filter="url(#ps)"><ellipse cx="340" cy="60" rx="30" ry="36" fill={BONE} stroke={INK} strokeWidth="1.6" /></g>
    <path d="M318 86 Q320 108 340 110 Q360 108 362 86" fill={BONE} stroke={INK} strokeWidth="1.4" />
    <ellipse cx="328" cy="60" rx="7" ry="8" fill="#d8ccb2" stroke={INK} /><ellipse cx="352" cy="60" rx="7" ry="8" fill="#d8ccb2" stroke={INK} />
    <T x={340} y={20} s={16} anchor="middle" fill={c}>THE SKELETON (FRONT)</T>
    <Tag side={-1} y={56} at={[318, 42]}>cranium</Tag>
    <Tag side={-1} y={128} at={[304, 135]}>clavicle</Tag>
    <Tag side={-1} y={168} at={[293, 168]}>scapula</Tag>
    <Tag side={-1} y={210} at={[274, 206]}>humerus</Tag>
    <Tag side={-1} y={270} at={[256, 296]}>radius (thumb side)</Tag>
    <Tag side={-1} y={304} at={[269, 300]}>ulna</Tag>
    <Tag side={-1} y={338} at={[251, 338]}>carpals</Tag>
    <Tag side={-1} y={366} at={[252, 360]}>metacarpals</Tag>
    <Tag side={-1} y={398} at={[247, 392]}>phalanges</Tag>
    <Tag side={-1} y={426} at={[310, 395]}>femur</Tag>
    <Tag side={-1} y={460} at={[313, 458]}>patella</Tag>
    <Tag side={-1} y={500} at={[306, 505]}>fibula (outer)</Tag>
    <Tag side={-1} y={534} at={[322, 520]}>tibia (inner)</Tag>
    <Tag side={1} y={150} at={[340, 168]}>sternum</Tag>
    <Tag side={1} y={190} at={[380, 196]}>ribs</Tag>
    <Tag side={1} y={110} at={[346, 115]}>cervical vertebrae</Tag>
    <Tag side={1} y={244} at={[348, 252]}>thoracic, lumbar vertebrae</Tag>
    <Tag side={1} y={300} at={[386, 306]}>pelvis</Tag>
    <Tag side={1} y={330} at={[340, 318]}>sacrum, coccyx</Tag>
    <Tag side={1} y={536} at={[364, 546]}>talus (ankle)</Tag>
    <Tag side={1} y={560} at={[364, 556]}>tarsals</Tag>
    <Tag side={1} y={580} at={[358, 570]}>metatarsals</Tag>
    <Tag side={1} y={598} at={[356, 586]}>phalanges</Tag>
  </svg>
);

/** The skeleton from behind: the spine in its three sections, the scapulae, sacrum, coccyx and heel. */
const skeletonBack = (c) => (
  <svg viewBox={TALL}><Defs c={c} />
    {halfSkeleton(0, true)}{halfSkeleton(1, true)}
    {Array.from({ length: 24 }, (_, i) => <rect key={i} x={i > 18 ? 331 : 333} y={106 + i * 7.9} width={i > 18 ? 18 : 14} height="6.2" rx="2.2" fill={BONE} stroke={INK} strokeWidth="1.1" />)}
    <path d="M330 296 L350 296 L340 326 Z" fill={BONE} stroke={INK} strokeWidth="1.3" />
    <path d="M336 328 L344 328 L340 338 Z" fill={BONE} stroke={INK} strokeWidth="1.2" />
    <g filter="url(#ps)"><ellipse cx="340" cy="62" rx="30" ry="38" fill={BONE} stroke={INK} strokeWidth="1.6" /></g>
    <T x={340} y={20} s={16} anchor="middle" fill={c}>THE SKELETON (BACK)</T>
    <Tag side={-1} y={56} at={[318, 50]}>cranium</Tag>
    <Tag side={-1} y={150} at={[300, 150]}>scapula</Tag>
    <Tag side={-1} y={210} at={[274, 206]}>humerus</Tag>
    <Tag side={-1} y={276} at={[256, 296]}>radius (outer)</Tag>
    <Tag side={-1} y={310} at={[269, 304]}>ulna (inner)</Tag>
    <Tag side={-1} y={420} at={[311, 395]}>femur</Tag>
    <Tag side={-1} y={500} at={[306, 505]}>fibula</Tag>
    <Tag side={-1} y={534} at={[322, 522]}>tibia</Tag>
    <Tag side={-1} y={570} at={[312, 562]}>calcaneus (heel)</Tag>
    <Tag side={1} y={120} at={[347, 128]}>cervical vertebrae (7)</Tag>
    <Tag side={1} y={186} at={[347, 200]}>thoracic vertebrae (12)</Tag>
    <Tag side={1} y={222} at={[382, 214]}>ribs (12 pairs)</Tag>
    <Tag side={1} y={262} at={[349, 272]}>lumbar vertebrae (5)</Tag>
    <Tag side={1} y={300} at={[388, 306]}>pelvis</Tag>
    <Tag side={1} y={326} at={[344, 308]}>sacrum</Tag>
    <Tag side={1} y={350} at={[340, 334]}>coccyx</Tag>
    <Tag side={1} y={548} at={[364, 546]}>talus</Tag>
  </svg>
);

/** A body outline centred on X, for the muscle map. */
const body = (X) => {
  const side = (s) => (
    <g key={s}>
      <path d={`M${X + s * 50} 120 L${X + s * 74} 132 L${X + s * 72} 262 L${X + s * 54} 262 L${X + s * 48} 150 Z`} />
      <path d={`M${X + s * 54} 262 L${X + s * 72} 262 L${X + s * 68} 368 L${X + s * 55} 368 Z`} />
      <ellipse cx={X + s * 61} cy={386} rx="9" ry="18" />
      <path d={`M${X + s * 3} 334 L${X + s * 48} 334 L${X + s * 42} 452 L${X + s * 12} 452 Z`} />
      <path d={`M${X + s * 12} 452 L${X + s * 42} 452 L${X + s * 36} 560 L${X + s * 16} 560 Z`} />
      <ellipse cx={X + s * 28} cy={567} rx="14" ry="7" />
    </g>
  );
  return (
    <g fill="#f8e7d8" stroke={INK} strokeWidth="1.3" strokeLinejoin="round">
      {side(-1)}{side(1)}
      <rect x={X - 10} y="82" width="20" height="24" />
      <path d={`M${X - 58} 128 Q${X - 60} 112 ${X - 40} 106 L${X - 12} 102 H${X + 12} L${X + 40} 106 Q${X + 60} 112 ${X + 58} 128 L${X + 46} 200 L${X + 40} 290 Q${X + 52} 318 ${X + 48} 336 H${X - 48} Q${X - 52} 318 ${X - 40} 290 L${X - 46} 200 Z`} />
      <circle cx={X} cy="58" r="26" />
    </g>
  );
};

// Antagonistic pairs share a colour.
const PAIR = { arm: "#e8546b", thigh: "#5b9be0", shin: "#4fb36b", hip: "#9b7ad6", chest: "#f09a4a", other: "#e3a29a" };
const M = ({ color, children }) => <g fill={color} fillOpacity=".85" stroke="#7a3b3b" strokeWidth="1" strokeOpacity=".6">{children}</g>;

const muscles = (c) => {
  const F = 215, B = 465, both = (f) => [-1, 1].map((s) => f(s));
  return (
    <svg viewBox={TALL}><Defs c={c} />
      {body(F)}{body(B)}
      <M color={PAIR.other}>{both((s) => <ellipse key={s} cx={F + s * 60} cy={138} rx="14" ry="20" />)}{both((s) => <ellipse key={`b${s}`} cx={B + s * 60} cy={138} rx="14" ry="20" />)}</M>
      <M color={PAIR.chest}>{both((s) => <path key={s} d={`M${F + s * 2} 120 L${F + s * 44} 116 Q${F + s * 52} 140 ${F + s * 40} 172 Q${F + s * 20} 180 ${F + s * 2} 170 Z`} />)}</M>
      <M color={PAIR.arm}>{both((s) => <ellipse key={s} cx={F + s * 62} cy={205} rx="8" ry="32" />)}</M>
      <M color={PAIR.other}><rect x={F - 16} y="186" width="32" height="98" rx="8" />{both((s) => <path key={s} d={`M${F + s * 19} 196 L${F + s * 43} 208 L${F + s * 40} 286 L${F + s * 19} 286 Z`} />)}</M>
      <path d={`M${F} 190 V282 M${F - 16} 212 H${F + 16} M${F - 16} 236 H${F + 16} M${F - 16} 260 H${F + 16}`} stroke="#7a3b3b" strokeOpacity=".5" />
      <M color={PAIR.hip}>{both((s) => <path key={s} d={`M${F + s * 10} 300 L${F + s * 30} 306 L${F + s * 26} 346 L${F + s * 13} 342 Z`} />)}</M>
      <M color={PAIR.thigh}>{both((s) => <ellipse key={s} cx={F + s * 27} cy={394} rx="15" ry="50" />)}</M>
      <M color={PAIR.shin}>{both((s) => <ellipse key={s} cx={F + s * 30} cy={502} rx="6" ry="40" />)}</M>
      <M color={PAIR.other}><path d={`M${B} 86 L${B + 46} 118 L${B} 234 L${B - 46} 118 Z`} /></M>
      <M color={PAIR.chest}>{both((s) => <path key={s} d={`M${B + s * 16} 198 L${B + s * 46} 168 L${B + s * 44} 232 L${B + s * 18} 292 Z`} />)}</M>
      <M color={PAIR.arm}>{both((s) => <ellipse key={s} cx={B + s * 62} cy={205} rx="8" ry="32" />)}</M>
      <M color={PAIR.hip}>{both((s) => <ellipse key={s} cx={B + s * 22} cy={330} rx="21" ry="22" />)}</M>
      <M color={PAIR.thigh}>{both((s) => <ellipse key={s} cx={B + s * 27} cy={402} rx="14" ry="46" />)}</M>
      <M color={PAIR.shin}>{both((s) => <ellipse key={s} cx={B + s * 27} cy={492} rx="12" ry="32" />)}</M>
      <T x={F} y={22} s={16} anchor="middle" fill={c}>FRONT</T><T x={B} y={22} s={16} anchor="middle" fill={c}>BACK</T>
      <Tag x={128} side={-1} y={124} at={[F - 62, 136]}>deltoid</Tag>
      <Tag x={128} side={-1} y={160} at={[F - 28, 150]}>pectoralis major</Tag>
      <Tag x={128} side={-1} y={206} at={[F - 62, 206]} color={PAIR.arm}>biceps</Tag>
      <Tag x={128} side={-1} y={240} at={[F - 6, 226]}>abdominals</Tag>
      <Tag x={128} side={-1} y={274} at={[F - 32, 262]}>obliques</Tag>
      <Tag x={128} side={-1} y={322} at={[F - 20, 322]} color={PAIR.hip}>hip flexors</Tag>
      <Tag x={128} side={-1} y={392} at={[F - 27, 392]} color={PAIR.thigh}>quadriceps</Tag>
      <Tag x={128} side={-1} y={500} at={[F - 30, 500]} color={PAIR.shin}>tibialis anterior</Tag>
      <Tag x={552} side={1} y={116} at={[B + 22, 122]}>trapezius</Tag>
      <Tag x={552} side={1} y={200} at={[B + 62, 206]} color={PAIR.arm}>triceps</Tag>
      <Tag x={552} side={1} y={246} at={[B + 34, 230]}>latissimus dorsi</Tag>
      <Tag x={552} side={1} y={332} at={[B + 26, 330]} color={PAIR.hip}>gluteus maximus</Tag>
      <Tag x={552} side={1} y={402} at={[B + 27, 402]} color={PAIR.thigh}>hamstrings</Tag>
      <Tag x={552} side={1} y={492} at={[B + 27, 492]} color={PAIR.shin}>gastrocnemius</Tag>
      <T x={340} y={594} s={14} anchor="middle">SAME COLOUR = ANTAGONISTIC PAIR (PECTORALS WITH LATISSIMUS DORSI)</T>
    </svg>
  );
};

export default {
  "pe-anatomy": skeleton,

  "pe-anatomy-b": skeletonBack,

  "pe-anatomy-c": table(["Bone type", "Examples", "Job in sport"], [["Long", "femur, humerus, tibia", "levers for big movements"], ["Short", "carpals, tarsals", "strength, fine control"], ["Flat", "cranium, scapula, ribs", "protection, muscle attachment"], ["Irregular", "vertebrae", "protect the spinal cord"]], { widths: [2, 3, 3], caption: "SUPPORT, PROTECTION, MOVEMENT, BLOOD CELL PRODUCTION, MINERAL STORAGE" }),

  // A synovial joint (knee) in section: cartilage caps both bone ends, the synovial membrane
  // encloses the fluid filled cavity and lines the capsule, which is attached to both bones, and
  // the ligaments run outside it from femur to tibia.
  "pe-anatomy-2": (c) => {
    const pair = (pts) => [`M${pts[0]} ${pts[1]} Q${pts[2]} ${pts[3]} ${pts[4]} ${pts[5]}`, `M${580 - pts[0]} ${pts[1]} Q${580 - pts[2]} ${pts[3]} ${580 - pts[4]} ${pts[5]}`];
    const lig = pair([250, 62, 148, 161, 252, 238]), cap = pair([238, 96, 188, 161, 246, 214]), mem = pair([226, 118, 214, 161, 234, 198]);
    return (
      <svg viewBox={V}><Defs c={c} />
        <path d="M226 118 Q214 161 234 198 L346 198 Q366 161 354 118 Z" fill={FLUID} stroke="none" />
        <g filter="url(#ps)">
          <path d="M250 0 V80 C250 100 222 108 222 132 C222 150 240 156 290 156 C340 156 358 150 358 132 C358 108 330 100 330 80 V0 Z" fill={BONE} stroke={INK} strokeWidth="1.6" />
          <path d="M222 172 C222 168 228 166 236 166 C260 170 320 170 344 166 C352 166 358 168 358 172 L350 200 C340 210 325 214 325 230 V310 H255 V230 C255 214 240 210 230 200 Z" fill={BONE} stroke={INK} strokeWidth="1.6" />
        </g>
        <path d="M226.5 128 C226.5 147 244 151.5 290 151.5 C336 151.5 353.5 147 353.5 128" fill="none" stroke={CART} strokeWidth="8" />
        <path d="M226.5 175 C230 171 236 170.5 240 170.5 C262 174.5 318 174.5 340 170.5 C344 170.5 350 171 353.5 175" fill="none" stroke={CART} strokeWidth="8" />
        {mem.map((d) => <path key={d} d={d} fill="none" stroke="#d0496d" strokeWidth="2.6" />)}
        {cap.map((d) => <path key={d} d={d} fill="none" stroke={INK} strokeWidth="3.4" strokeLinecap="round" />)}
        {lig.map((d) => <g key={d}><path d={d} fill="none" stroke={INK} strokeWidth="8.6" strokeLinecap="round" /><path d={d} fill="none" stroke="#d9b57a" strokeWidth="6" strokeLinecap="round" /></g>)}
        <Label x={4} y={6} w={176} color={INK} title="femur" lines={["thigh bone"]} /><Link from={[180, 34]} to={[290, 40]} color={INK} />
        <Label x={4} y={82} w={176} color="#2a8fb6" title="articular cartilage" lines={["on the bone ends"]} /><Link from={[180, 112]} to={[238, 147]} color="#2a8fb6" />
        <Label x={4} y={158} w={176} color="#b08a10" title="synovial fluid" lines={["fills the cavity"]} /><Link from={[180, 188]} to={[270, 162]} color="#b08a10" bend={-14} />
        <Label x={4} y={234} w={176} color={INK} title="tibia" lines={["shin bone"]} /><Link from={[180, 262]} to={[290, 270]} color={INK} />
        <Label x={420} y={20} w={254} color="#a07a3a" title="ligament" lines={["joins bone to bone"]} /><Link from={[420, 49]} to={[374, 112]} color="#a07a3a" />
        <Label x={420} y={118} w={254} color={INK} title="joint capsule" lines={["tough sac round the joint"]} /><Link from={[420, 147]} to={[368, 156]} color={INK} />
        <Label x={420} y={216} w={254} color="#d0496d" title="synovial membrane" lines={["lines the capsule,", "makes synovial fluid"]} /><Link from={[420, 245]} to={[358, 172]} color="#d0496d" bend={10} />
      </svg>
    );
  },

  "pe-anatomy-3": table(["Movement", "What happens", "Sporting example"], [["Flexion", "angle at joint decreases", "knee bends before a kick"], ["Extension", "angle increases", "leg straightens to kick"], ["Abduction", "away from the midline", "arms out in a star jump"], ["Adduction", "towards the midline", "arms in during breaststroke"], ["Rotation", "turns on its long axis", "hip in a golf swing"], ["Circumduction", "limb end draws a circle", "arm bowling in cricket"], ["Plantar flexion", "pointing the toes", "sprint push off"], ["Dorsiflexion", "toes pulled up to shin", "landing from a jump"]], { widths: [2, 3, 3] }),

  "pe-anatomy-4": muscles,

  "pe-anatomy-4-b": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <path d="M110 60 L120 200" stroke="#d6cfbf" strokeWidth="14" strokeLinecap="round" />
      <path d="M120 200 L270 120" stroke="#d6cfbf" strokeWidth="12" strokeLinecap="round" />
      <circle cx="110" cy="56" r="16" fill="#e8e1d2" stroke={INK} /><circle cx="120" cy="200" r="11" fill="#e8e1d2" stroke={INK} />
      <g filter="url(#ps)"><path d="M126 76 Q168 120 138 188 Q120 150 126 76 Z" fill="#e88a9a" stroke="#b8475f" strokeWidth="1.4" /></g>
      <path d="M100 82 Q88 140 108 196 Q102 140 100 82 Z" fill="#f6c3cc" stroke="#b8475f" strokeWidth="1.2" />
      <path d="M138 186 L176 176" stroke="#b8475f" strokeWidth="2" /><path d="M126 76 L116 66" stroke="#b8475f" strokeWidth="2" />
      <Label x={200} y={30} w={200} color="#d0496d" title="biceps contracts" lines={["agonist, concentric"]} /><Link from={[200, 60]} to={[150, 120]} color="#d0496d" bend={10} />
      <Label x={10} y={226} w={180} color="#c0702a" title="triceps relaxes" lines={["antagonist"]} /><Link from={[60, 226]} to={[96, 160]} color="#c0702a" bend={-10} />
      <Label x={210} y={190} w={190} color={INK} title="elbow: hinge joint" lines={["flexion bends it"]} /><Link from={[210, 216]} to={[132, 202]} color={INK} bend={-8} />
      <Label x={430} y={6} w={240} color="#2a8fd6" title="slow twitch (type 1)" lines={["endurance: marathon"]} />
      <Label x={430} y={82} w={240} color="#7a5cd6" title="fast twitch (type 2a)" lines={["middle distance: 800 m"]} />
      <Label x={430} y={158} w={240} color="#d0496d" title="fast twitch (type 2b)" lines={["sprint, throw, lift"]} />
      <Label x={430} y={234} w={240} color={c} title="contractions" lines={["concentric, eccentric,", "isometric"]} />
    </svg>
  ),

  "pe-anatomy-5": (c) => (
    <svg viewBox={V}><Defs c={c} />
      {[1, 2, 3].map((k) => lever(14 + (k - 1) * 222, k, c))}
      {[["1ST CLASS", "nodding the head"], ["2ND CLASS", "rising onto the toes"], ["3RD CLASS", "biceps curl, kicking"]].map(([t, e], i) => (
        <g key={t}><T x={119 + i * 222} y={24} s={18} anchor="middle" fill={c}>{t}</T><T x={119 + i * 222} y={262} s={15} anchor="middle">{e}</T></g>
      ))}
      <T x={340} y={296} s={15} anchor="middle">F FULCRUM, L LOAD, E EFFORT. FLE 1 2 3: THE MIDDLE ONE NAMES THE CLASS</T>
    </svg>
  ),

  "pe-anatomy-6": flow([["Nose and mouth", "air in, warmed and filtered"], ["Trachea", "the windpipe"], ["Bronchi", "one to each lung"], ["Bronchioles", "smaller branches"], ["Alveoli", "oxygen in, carbon dioxide out by diffusion"]], { caption: "CARDIAC OUTPUT = SV x HR.  MINUTE VENTILATION = TV x BREATHING RATE" }),

  "pe-anatomy-7": compare([["Aerobic", ["With oxygen", "Glucose + oxygen gives", "carbon dioxide + water + energy", "Long and steady: 10 km run"]], ["Anaerobic", ["Without enough oxygen", "Glucose gives lactic acid", "+ energy", "Short and intense: 400 m"]]], { caption: "EPOC: EXTRA OXYGEN AFTER EXERCISE TO REMOVE LACTIC ACID" }),

  "pe-health": table(["Component", "Test", "Example"], [["Cardiovascular endurance", "Multi stage fitness test", "marathon runner"], ["Strength", "Hand grip dynamometer", "weightlifter"], ["Muscular endurance", "Sit up or press up test", "rower"], ["Flexibility", "Sit and reach", "gymnast"], ["Agility", "Illinois agility run", "netball centre"], ["Power", "Vertical jump", "high jumper"], ["Reaction time", "Ruler drop", "sprint start"]], { widths: [3, 3, 2] }),

  "pe-health-2": table(["Method", "What it is", "Suits"], [["Continuous", "steady, 20 minutes or more", "distance runners"], ["Fartlek", "speed and terrain change", "games players"], ["Interval", "work, then rest", "sprinters, swimmers"], ["Circuit", "stations of exercises", "general fitness"], ["Weights", "heavy: strength. light: endurance", "throwers, rowers"], ["Plyometrics", "jumps and bounds", "basketball players"]], { widths: [2, 3, 2], caption: "MAX HEART RATE = 220 - AGE. AEROBIC ZONE ABOUT 60 TO 80 PERCENT" }),

  "pe-health-3": table(["Injury", "What it is", "Sporting example"], [["Sprain", "ligament damage", "twisted ankle in netball"], ["Strain", "muscle or tendon tear", "pulled hamstring sprinting"], ["Fracture", "broken bone", "stress fracture in running"], ["Dislocation", "bone out of the joint", "shoulder in a rugby tackle"], ["Concussion", "brain injury from a blow", "clash of heads"]], { widths: [2, 3, 3], caption: "SOFT TISSUE INJURIES: RICE. REST, ICE, COMPRESSION, ELEVATION" }),

  "pe-skill": table(["Continuum", "One end", "Other end"], [["Environment", "open: pass in football", "closed: free throw"], ["Difficulty", "basic: running", "complex: tennis volley"], ["Muscles", "gross: shot put", "fine: darts throw"], ["Pacing", "self paced: golf shot", "external: receiving a serve"]], { widths: [2, 3, 3], caption: "SKILLS ARE LEARNED. ABILITIES ARE MOSTLY INHERITED" }),

  "pe-skill-2": cycle([["Input", "senses, selective attention"], ["Decision", "memory chooses a response"], ["Output", "the movement"], ["Feedback", "used next time"]], { centre: "Information processing" }),

  "pe-skill-3": (c) => {
    const { X, Y, path } = plot([50, 40, 330, 200], [0, 10], [0, 10]);
    const f = (x) => 9 - 0.36 * (x - 5) ** 2;
    return (
      <svg viewBox={V}><Defs c={c} />
        <path d={`M${X(0)} ${Y(0)} H${X(10) + 10} M${X(0)} ${Y(0)} V${Y(10) - 10}`} stroke={INK} strokeWidth="1.5" />
        <T x={X(10)} y={Y(0) + 20} s={14} anchor="end">AROUSAL</T><T x={X(0) + 8} y={Y(10) - 6} s={14}>PERFORMANCE</T>
        <path d={path(f, 0.3, 9.7)} fill="none" stroke={c} strokeWidth="3.2" filter="url(#ps)" />
        <Dot x={X(5)} y={Y(9)} color="#f2b632" />
        <T x={X(5)} y={Y(9) - 14} s={14} anchor="middle" fill="#c0902a">OPTIMUM</T>
        <T x={X(1.4)} y={Y(2.6)} s={13} anchor="middle">UNDER</T><T x={X(1.4)} y={Y(2.6) + 16} s={13} anchor="middle">AROUSED</T>
        <T x={X(8.6)} y={Y(2.6)} s={13} anchor="middle">OVER</T><T x={X(8.6)} y={Y(2.6) + 16} s={13} anchor="middle">AROUSED</T>
        <Label x={420} y={6} w={250} color="#d0496d" title="gross skills" lines={["tackle: high arousal"]} />
        <Label x={420} y={82} w={250} color="#2a8fd6" title="fine skills" lines={["archery: low arousal"]} />
        <Label x={420} y={158} w={250} color="#c0702a" title="SMART targets" keep lines={["SPECIFIC, MEASURABLE,", "ACHIEVABLE, REALISTIC,", "TIME BOUND"]} />
      </svg>
    );
  },

  "pe-social": hub("Sport", [["Media", "coverage brings money"], ["Sponsorship", "money for advertising"], ["Technology", "VAR, Hawk-Eye, GPS"], ["Participation", "cost, access, role models"]], { caption: "THE GOLDEN TRIANGLE: SPORT, MEDIA AND SPONSORSHIP" }),
  "pe-social-2": table(["Drug", "Effect", "Used by"], [["Anabolic steroids", "Build muscle", "Sprinters, weightlifters"], ["Stimulants", "More alert", "Many sports"], ["Beta blockers", "Calm, steady hands", "Archery, shooting"], ["Diuretics", "Lose weight, mask drugs", "Boxers, jockeys"], ["EPO, blood doping", "More red blood cells", "Endurance athletes"]], { widths: [2, 2, 2] }),
  "pe-practical": cycle([["Perform", "in your activity"], ["Analyse", "strengths and weaknesses"], ["Plan", "drills and targets"], ["Practise", "and train"]], { centre: "Improve" }),
};
