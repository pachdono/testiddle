// Diagrams for the IGCSE Chemistry cheat sheets, drawn to match the notes.

import { INK, Label, Link, Defs, plot, T, Arrow } from "../posterKit.jsx";

const V = "0 0 680 310";
const ball = (x, y, r = 11, f = "#9cc9f5") => <circle cx={x} cy={y} r={r} fill={f} stroke={INK} strokeWidth="1" />;
const UI = ["#e3342f", "#ea4b2a", "#f06a25", "#f58a20", "#f9ae1f", "#f5d21d", "#cddc29", "#6cc04a", "#2fb37a", "#22a7a0", "#2b8fc7", "#3b6fc0", "#4f55b3", "#5b3fa6", "#63308f"];

export default {
  "chemistry-states": (c) => {
    const liquid = [[15, 115], [38, 116], [61, 114], [84, 117], [107, 115], [130, 116], [27, 94], [51, 95], [74, 93], [98, 96], [121, 94], [18, 73], [44, 74], [90, 73], [113, 75]];
    const gas = [[30, 30], [110, 40], [70, 75], [130, 100], [35, 115], [95, 125]];
    return (
      <svg viewBox={V}><Defs c={c} />
        {[["SOLID", 30], ["LIQUID", 265], ["GAS", 500]].map(([t, x]) => <g key={t}><T x={x + 75} y={50} s={18} fill={c} anchor="middle">{t}</T><g filter="url(#ps)"><rect x={x} y={62} width="150" height="150" rx="10" fill="#fbfdff" stroke={INK} strokeWidth="1.4" /></g></g>)}
        {Array.from({ length: 25 }, (_, i) => <g key={i}>{ball(51 + (i % 5) * 27, 89 + Math.floor(i / 5) * 24)}</g>)}
        {liquid.map(([x, y], i) => <g key={`l${i}`}>{ball(265 + x + 3, 62 + y + 21)}</g>)}
        {gas.map(([x, y], i) => <g key={`g${i}`}>{ball(500 + x + 8, 62 + y + 6)}<path d={`M${500 + x - 8} ${62 + y + 10} l-12 4`} stroke="#9aa5b1" strokeWidth="1.4" /></g>)}
        <Arrow from={[188, 118]} to={[258, 118]} color="#d0496d" width={2} /><T x={223} y={110} s={13} fill="#d0496d" anchor="middle">MELTING</T>
        <Arrow from={[258, 160]} to={[188, 160]} color="#2a8fd6" width={2} /><T x={223} y={178} s={13} fill="#2a8fd6" anchor="middle">FREEZING</T>
        <Arrow from={[423, 118]} to={[493, 118]} color="#d0496d" width={2} /><T x={458} y={110} s={13} fill="#d0496d" anchor="middle">BOILING</T>
        <Arrow from={[493, 160]} to={[423, 160]} color="#2a8fd6" width={2} /><T x={458} y={178} s={13} fill="#2a8fd6" anchor="middle">CONDENSING</T>
        {[["TOUCHING, REGULAR", "VIBRATE IN PLACE", 105], ["TOUCHING, IRREGULAR", "SLIDE PAST EACH OTHER", 340], ["FAR APART, RANDOM", "MOVE FAST", 575]].map(([a, b, x]) => <g key={a}><T x={x} y={236} s={13} anchor="middle">{a}</T><T x={x} y={254} s={13} anchor="middle">{b}</T></g>)}
        <T x={340} y={290} s={14} fill={c} anchor="middle">HEATING GIVES PARTICLES ENERGY TO OVERCOME THE FORCES BETWEEN THEM</T>
      </svg>
    );
  },
  "chemistry-atoms": (c) => {
    const cx = 160, cy = 156, ring = (r, n, off = 0) => Array.from({ length: n }, (_, i) => { const a = off + (i / n) * Math.PI * 2; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; });
    return (
      <svg viewBox={V}><Defs c={c} />
        {[50, 82, 114].map((r) => <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke="#b8bec6" strokeWidth="1.2" strokeDasharray="3 4" />)}
        <g filter="url(#ps)"><circle cx={cx} cy={cy} r="28" fill="#ffe0b8" stroke={INK} strokeWidth="1.4" /></g>
        <T x={cx} y={cy - 2} s={14} anchor="middle">11p</T><T x={cx} y={cy + 14} s={14} anchor="middle">12n</T>
        {[...ring(50, 2, -Math.PI / 2), ...ring(82, 8, -Math.PI / 2), ...ring(114, 1, -Math.PI / 4)].map(([x, y], i) => <g key={i} filter="url(#ps)"><circle cx={x} cy={y} r="7" fill={c} stroke="#fff" strokeWidth="1.6" /></g>)}
        <T x={cx} y={300} s={16} fill={c} anchor="middle">SODIUM: 2,8,1</T>
        <Label x={340} y={8} w={320} color={c} title="proton" lines={["mass 1, charge +1, in the nucleus"]} />
        <Label x={340} y={74} w={320} color="#c0702a" title="neutron" lines={["mass 1, charge 0, in the nucleus"]} />
        <Label x={340} y={140} w={320} color="#2a8fd6" title="electron" lines={["tiny mass, charge -1, in shells"]} />
        <T x={340} y={236} s={14}>MASS NUMBER 23, PROTON NUMBER 11</T>
        <T x={340} y={258} s={14}>NEUTRONS = 23 - 11 = 12</T>
        <T x={340} y={280} s={14}>1 OUTER ELECTRON: GROUP I. 3 SHELLS: PERIOD 3</T>
      </svg>
    );
  },
  "chemistry-electrochem": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <path d="M118 66 V34 H184 M200 34 H272 V66" fill="none" stroke={INK} strokeWidth="1.8" />
      <path d="M186 22 V46" stroke={INK} strokeWidth="5" /><path d="M200 14 V54" stroke={INK} strokeWidth="2" />
      <T x={178} y={68} s={14} anchor="end">−</T><T x={210} y={68} s={14}>+</T>
      <g filter="url(#ps)"><path d="M60 100 V262 Q60 276 74 276 H316 Q330 276 330 262 V100" fill="#fff" stroke={INK} strokeWidth="1.6" /></g>
      <path d="M62 132 H328 V262 Q328 274 316 274 H74 Q62 274 62 262 Z" fill="#dcefff" opacity=".85" />
      <rect x="110" y="66" width="16" height="180" rx="3" fill="#8a96a3" stroke={INK} /><rect x="264" y="66" width="16" height="180" rx="3" fill="#8a96a3" stroke={INK} />
      {[[170, 170], [205, 220], [160, 238]].map(([x, y]) => <g key={`p${x}`}><circle cx={x} cy={y} r="11" fill="#fde0e6" stroke="#d0496d" /><T x={x} y={y + 5} s={15} fill="#d0496d" anchor="middle">+</T><Arrow from={[x - 14, y]} to={[x - 34, y]} color="#d0496d" /></g>)}
      {[[222, 160], [190, 196], [232, 252]].map(([x, y]) => <g key={`n${x}`}><circle cx={x} cy={y} r="11" fill="#e0ecfd" stroke="#2a8fd6" /><T x={x} y={y + 5} s={15} fill="#2a8fd6" anchor="middle">−</T><Arrow from={[x + 14, y]} to={[x + 34, y]} color="#2a8fd6" /></g>)}
      <T x={118} y={296} s={14} anchor="middle">CATHODE −</T><T x={272} y={296} s={14} anchor="middle">ANODE +</T>
      <Label x={370} y={8} w={300} color="#d0496d" title="cathode (negative)" lines={["positive ions gain electrons", "reduction: metal or hydrogen forms"]} />
      <Label x={370} y={100} w={300} color="#2a8fd6" title="anode (positive)" lines={["negative ions lose electrons", "oxidation: non metal or oxygen forms"]} />
      <Label x={370} y={192} w={300} color={c} title="electrolyte" lines={["molten or dissolved, so ions can move"]} />
      <T x={370} y={290} s={13}>OIL RIG: OXIDATION IS LOSS, REDUCTION IS GAIN</T>
    </svg>
  ),
  "chemistry-energetics": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <path d="M60 280 V30 M60 280 H390" stroke={INK} strokeWidth="1.6" fill="none" /><path d="M60 24 l-4 9 h8 Z M396 280 l-9 -4 v8 Z" fill={INK} />
      <T x={68} y={30} s={14}>ENERGY</T><T x={390} y={302} s={14} anchor="end">PROGRESS OF REACTION</T>
      <path d="M80 120 H150 C186 120 196 58 222 58 C248 58 258 210 294 210 H360" fill="none" stroke={c} strokeWidth="3.2" strokeLinecap="round" filter="url(#ps)" />
      <path d="M150 120 H380" stroke="#b8bec6" strokeDasharray="5 5" /><path d="M222 58 H160" stroke="#b8bec6" strokeDasharray="5 5" />
      <Arrow from={[162, 118]} to={[162, 62]} color="#c0702a" /><Arrow from={[162, 62]} to={[162, 118]} color="#c0702a" />
      <T x={154} y={92} s={15} fill="#c0702a" anchor="end">Ea</T>
      <Arrow from={[372, 122]} to={[372, 206]} color="#d0496d" width={2} /><T x={366} y={172} s={15} fill="#d0496d" anchor="end">ΔH</T>
      <T x={115} y={110} s={14} anchor="middle">REACTANTS</T><T x={318} y={234} s={14} anchor="middle">PRODUCTS</T>
      <Label x={420} y={8} w={250} color="#d0496d" title="exothermic (shown)" lines={["energy given out", "temperature rises, ΔH negative"]} />
      <Label x={420} y={100} w={250} color="#2a8fd6" title="endothermic" lines={["energy taken in", "temperature falls, ΔH positive"]} />
      <Label x={420} y={192} w={250} color="#c0702a" title="Ea: activation energy" keep lines={["MINIMUM ENERGY TO REACT", "A CATALYST LOWERS IT"]} />
    </svg>
  ),
  "chemistry-reactions": (c) => {
    const { X, Y, path, Axes } = plot([70, 30, 290, 220], [0, 100], [0, 70]);
    const fast = (t) => 60 * (1 - Math.exp(-t / 9)), slow = (t) => 60 * (1 - Math.exp(-t / 28));
    return (
      <svg viewBox={V}><Defs c={c} />
        <Axes step={20} every={20} xl="time" yl="gas / cm³" />
        <path d={path(fast, 0, 100)} fill="none" stroke="#d0496d" strokeWidth="3" filter="url(#ps)" />
        <path d={path(slow, 0, 100)} fill="none" stroke={c} strokeWidth="3" filter="url(#ps)" />
        <path d={`M${X(0)} ${Y(0)} L${X(14)} ${Y(42)}`} stroke="#f2b632" strokeWidth="2" strokeDasharray="5 4" />
        <T x={X(20)} y={Y(12)} s={13} fill="#c0902a">GRADIENT = RATE</T><Link from={[X(20), Y(14)]} to={[X(12), Y(37)]} color="#c0902a" bend={-6} />
        <T x={X(52)} y={Y(64)} s={14} fill="#d0496d">FASTER</T><T x={X(62)} y={Y(42)} s={14} fill={c}>SLOWER</T>
        <Label x={410} y={8} w={260} color="#d0496d" title="faster reaction if" lines={["higher temperature or concentration", "larger surface area, or a catalyst"]} />
        <Label x={410} y={100} w={260} color={c} title="same final volume" lines={["same amount of reactant used up"]} />
        <Label x={410} y={174} w={260} color={INK} title="collision theory" lines={["more frequent collisions with", "at least the activation energy"]} />
      </svg>
    );
  },
  "chemistry-acids": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <g filter="url(#ps)">{UI.map((col, i) => <rect key={i} x={40 + i * 40} y={56} width="40" height="50" fill={col} />)}<rect x="40" y="56" width="600" height="50" fill="none" stroke={INK} strokeWidth="1.4" rx="4" /></g>
      {UI.map((_, i) => <T key={i} x={60 + i * 40} y={126} s={15} anchor="middle">{i}</T>)}
      <T x={60} y={44} s={15} fill="#e3342f">STRONG ACID</T><T x={340} y={44} s={15} fill="#3f9d5a" anchor="middle">NEUTRAL</T><T x={640} y={44} s={15} fill="#63308f" anchor="end">STRONG ALKALI</T>
      {[["STOMACH ACID", 1], ["VINEGAR", 3], ["PURE WATER", 7], ["SOAP", 10], ["OVEN CLEANER", 13]].map(([t, v], i) => <g key={t}><path d={`M${60 + v * 40} 132 V${144 + (i % 2) * 18}`} stroke="#9aa5b1" /><T x={60 + v * 40} y={158 + (i % 2) * 18} s={13} anchor="middle">{t}</T></g>)}
      <Label x={14} y={196} w={206} color={c} title="acid + metal" lines={["salt + hydrogen"]} />
      <Label x={237} y={196} w={206} color={c} title="acid + base" lines={["salt + water"]} />
      <Label x={460} y={196} w={206} color={c} title="acid + carbonate" lines={["salt + water + CO₂"]} />
      <T x={340} y={292} s={14} anchor="middle">NEUTRALISATION: H⁺ + OH⁻ → H₂O</T>
    </svg>
  ),
  "chemistry-organic-2": (c) => {
    const fr = [["REFINERY GAS", 46], ["GASOLINE", 76], ["NAPHTHA", 106], ["KEROSENE", 136], ["DIESEL OIL", 166], ["FUEL OIL", 196], ["LUBRICATING OIL", 226], ["BITUMEN", 262]];
    return (
      <svg viewBox={V}><Defs c={c} />
        <g filter="url(#ps)"><path d="M200 40 Q200 26 214 26 H286 Q300 26 300 40 V276 H200 Z" fill="url(#pc)" stroke={INK} strokeWidth="1.6" /></g>
        {fr.slice(0, 7).map(([, y]) => <path key={y} d={`M204 ${y + 10} H296`} stroke="#9aa5b1" strokeWidth="1.2" strokeDasharray="3 3" />)}
        {fr.map(([t, y]) => <g key={t}><path d={`M300 ${y} H330`} stroke={INK} strokeWidth="5" strokeLinecap="round" opacity=".7" /><T x={340} y={y + 5} s={14}>{t}</T></g>)}
        <Arrow from={[146, 262]} to={[196, 262]} color="#c0702a" width={2.2} /><T x={8} y={256} s={14} fill="#c0702a">CRUDE OIL</T><T x={8} y={274} s={13}>HEATED, AS VAPOUR</T>
        <path d="M170 250 V48" stroke="url(#pc)" strokeWidth="10" /><Arrow from={[170, 240]} to={[170, 52]} color={c} width={1.6} />
        <T x={160} y={60} s={14} fill="#2a8fd6" anchor="end">COOLER</T><T x={160} y={226} s={14} fill="#d0496d" anchor="end">HOTTER</T>
        <Label x={470} y={14} w={200} color="#2a8fd6" title="near the top" lines={["small molecules", "low boiling points", "runny, flammable"]} />
        <Label x={470} y={150} w={200} color="#d0496d" title="near the bottom" lines={["large molecules", "high boiling points", "thick (viscous)"]} />
      </svg>
    );
  },
  "chemistry-analysis": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <g filter="url(#ps)"><rect x="60" y="24" width="200" height="252" fill="#fffef6" stroke={INK} strokeWidth="1.4" /></g>
      <rect x="40" y="258" width="240" height="30" rx="4" fill="#cfe6fb" opacity=".8" />
      <path d="M64 240 H256" stroke="#7b8794" strokeWidth="1.6" strokeDasharray="6 4" /><path d="M64 60 H256" stroke="#2a8fd6" strokeWidth="1.6" strokeDasharray="6 4" />
      {[[100, 240, "#d0496d"], [160, 240, "#7a5cd6"], [220, 240, "#2a8fd6"]].map(([x, y, f]) => <circle key={x} cx={x} cy={y} r="4" fill="#fff" stroke={f} strokeWidth="1.4" />)}
      <circle cx="100" cy="135" r="9" fill="#d0496d" opacity=".8" /><circle cx="160" cy="135" r="9" fill="#d0496d" opacity=".8" /><circle cx="160" cy="190" r="9" fill="#2a8fd6" opacity=".8" /><circle cx="220" cy="190" r="9" fill="#2a8fd6" opacity=".8" />
      <T x={100} y={304} s={14} anchor="middle">A</T><T x={160} y={304} s={14} anchor="middle">MIX</T><T x={220} y={304} s={14} anchor="middle">B</T>
      <Arrow from={[76, 238]} to={[76, 139]} color="#d0496d" /><T x={70} y={196} s={13} fill="#d0496d" anchor="end">5.5</T>
      <Arrow from={[244, 238]} to={[244, 64]} color="#2a8fd6" /><T x={250} y={150} s={13} fill="#2a8fd6">9.5</T>
      <Label x={300} y={8} w={370} color="#2a8fd6" title="solvent front" lines={["how far the solvent travelled"]} /><Link from={[300, 40]} to={[258, 60]} color="#2a8fd6" />
      <Label x={300} y={82} w={370} color={c} title="Rf = spot distance ÷ solvent distance" keep lines={["red spot: 5.5 ÷ 9.5 ≈ 0.58"]} />
      <Label x={300} y={156} w={370} color={INK} title="baseline in pencil" lines={["pencil does not dissolve; keep it above the solvent"]} /><Link from={[300, 196]} to={[258, 238]} color={INK} />
      <T x={300} y={270} s={14}>THE MIXTURE CONTAINS A AND B: ITS SPOTS MATCH BOTH</T>
      <T x={300} y={292} s={14}>A PURE SUBSTANCE GIVES ONE SPOT</T>
    </svg>
  ),
};
