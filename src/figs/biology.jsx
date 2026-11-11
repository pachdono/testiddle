// Diagrams for the IGCSE Biology cheat sheets, drawn to match the notes.

import { INK, Label, Link, Dot, Defs, plot, T, Arrow, Box } from "../posterKit.jsx";

const V = "0 0 680 310";
const dots = (n, x0, y0, w, h, seed = 1) => Array.from({ length: n }, (_, i) => { const a = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453; const b = Math.sin(i * 39.346 + seed * 11.135) * 24634.6345; return [x0 + (a - Math.floor(a)) * w, y0 + (b - Math.floor(b)) * h]; });

export default {
  "biology-organisation": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <T x={150} y={34} s={18} fill={c} anchor="middle">ANIMAL CELL</T><T x={530} y={34} s={18} fill={c} anchor="middle">PLANT CELL</T>
      <g filter="url(#ps)"><ellipse cx="150" cy="165" rx="112" ry="88" fill="#fde9ee" stroke={INK} strokeWidth="1.6" /></g>
      <circle cx="132" cy="150" r="27" fill="#d9ccf5" stroke={INK} strokeWidth="1.3" /><circle cx="138" cy="146" r="7" fill="#b9a6ea" />
      <g fill="#ffd2a8" stroke={INK} strokeWidth="1.1"><ellipse cx="205" cy="125" rx="20" ry="10" transform="rotate(-20 205 125)" /><ellipse cx="185" cy="212" rx="20" ry="10" transform="rotate(15 185 212)" /></g>
      <path d="M190 128 q5 -7 10 0 q5 7 10 0 M171 213 q5 -7 10 0 q5 7 10 0" stroke={INK} strokeWidth=".9" fill="none" />
      {dots(14, 70, 110, 160, 110, 2).map(([x, y], i) => <circle key={i} cx={x} cy={y} r="1.8" fill="#7b8794" />)}
      <g filter="url(#ps)"><rect x="420" y="62" width="220" height="208" rx="14" fill="#eef8e6" stroke="#5aa02f" strokeWidth="5" /></g>
      <rect x="428" y="70" width="204" height="192" rx="10" fill="none" stroke={INK} strokeWidth="1.2" />
      <rect x="478" y="104" width="130" height="122" rx="22" fill="#dcefff" stroke={INK} strokeWidth="1.2" /><T x={543} y={170} s={15} anchor="middle">VACUOLE</T>
      <g fill="#8fd16b" stroke="#3f7a22" strokeWidth="1"><ellipse cx="452" cy="92" rx="13" ry="7" /><ellipse cx="452" cy="242" rx="13" ry="7" /><ellipse cx="612" cy="244" rx="13" ry="7" /><ellipse cx="616" cy="88" rx="13" ry="7" /></g>
      <circle cx="452" cy="168" r="17" fill="#d9ccf5" stroke={INK} strokeWidth="1.2" />
      <ellipse cx="456" cy="128" rx="14" ry="7" fill="#ffd2a8" stroke={INK} strokeWidth="1" />
      <Label x={274} y={46} w={124} color={c} title="nucleus" /><Link from={[274, 66]} to={[150, 148]} color={c} bend={12} /><Link from={[398, 66]} to={[452, 156]} color={c} bend={-12} />
      <Label x={274} y={110} w={124} color={c} title="mitochondria" /><Link from={[274, 130]} to={[214, 125]} color={c} /><Link from={[398, 130]} to={[442, 128]} color={c} />
      <Label x={274} y={174} w={124} color={c} title="membrane" /><Link from={[274, 194]} to={[258, 180]} color={c} /><Link from={[398, 194]} to={[428, 200]} color={c} />
      <Label x={274} y={238} w={124} color={c} title="cytoplasm" /><Link from={[274, 258]} to={[110, 222]} color={c} bend={14} /><Link from={[398, 258]} to={[500, 245]} color={c} bend={-10} />
      <T x={530} y={294} s={14} fill="#3f7a22" anchor="middle">PLANT ONLY: WALL, VACUOLE, CHLOROPLASTS</T>
    </svg>
  ),
  "biology-movement": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <g filter="url(#ps)"><rect x="30" y="56" width="330" height="200" rx="12" fill="#f7fbff" stroke={INK} strokeWidth="1.4" /></g>
      <path d="M195 56 V256" stroke={c} strokeWidth="2.4" strokeDasharray="8 6" />
      <T x={112} y={46} s={15} anchor="middle">DILUTE</T><T x={278} y={46} s={15} anchor="middle">CONCENTRATED</T>
      {dots(26, 45, 70, 135, 175, 3).filter(([x, y]) => !(x > 112 && y > 132 && y < 206)).map(([x, y], i) => <circle key={`a${i}`} cx={x} cy={y} r="4" fill="#7cc0f2" />)}
      {dots(4, 50, 80, 125, 160, 4).filter(([x, y]) => !(x > 106 && y > 126 && y < 212)).map(([x, y], i) => <circle key={`b${i}`} cx={x} cy={y} r="8" fill="#ffb877" stroke={INK} strokeWidth=".8" />)}
      {dots(11, 212, 70, 135, 175, 5).filter(([x, y]) => !(x < 278 && y > 132 && y < 206)).map(([x, y], i) => <circle key={`c${i}`} cx={x} cy={y} r="4" fill="#7cc0f2" />)}
      {dots(11, 215, 76, 130, 165, 6).filter(([x, y]) => !(x < 284 && y > 126 && y < 212)).map(([x, y], i) => <circle key={`d${i}`} cx={x} cy={y} r="8" fill="#ffb877" stroke={INK} strokeWidth=".8" />)}
      <g filter="url(#ps)"><rect x="120" y="140" width="150" height="34" rx="17" fill="#fff" stroke={c} strokeWidth="1.4" /></g>
      <Arrow from={[134, 157]} to={[256, 157]} color={c} width={2.2} /><T x={195} y={196} s={14} fill={c} anchor="middle">WATER MOVES</T>
      <T x={195} y={280} s={14} anchor="middle">PARTIALLY PERMEABLE MEMBRANE</T>
      <circle cx="44" cy="296" r="4" fill="#7cc0f2" /><T x={52} y={301} s={13}>WATER</T><circle cx="120" cy="296" r="7" fill="#ffb877" stroke={INK} strokeWidth=".8" /><T x={132} y={301} s={13}>SOLUTE</T>
      <Label x={396} y={14} w={270} color={c} title="diffusion" lines={["high to low concentration", "no energy needed"]} />
      <Label x={396} y={110} w={270} color="#2a8fd6" title="osmosis" lines={["water only, dilute to concentrated", "through a partially permeable membrane"]} />
      <Label x={396} y={206} w={270} color="#c0702a" title="active transport" lines={["low to high concentration", "needs energy from respiration"]} />
    </svg>
  ),
  "biology-enzymes": (c) => {
    const { X, Y, path, Axes } = plot([70, 30, 300, 220], [0, 60], [0, 12]);
    const f = (t) => (t <= 37 ? 10 * (t / 37) ** 1.6 : 10 * Math.max(0, 1 - ((t - 37) / 18) ** 2));
    return (
      <svg viewBox={V}><Defs c={c} />
        <Axes step={10} every={10} xl="°C" yl="rate" />
        <path d={path(f, 0, 56)} fill="none" stroke={c} strokeWidth="3.2" strokeLinecap="round" filter="url(#ps)" />
        <Dot x={X(37)} y={Y(10)} color="#f2b632" />
        <path d={`M${X(37)} ${Y(10)} V${Y(0)}`} stroke="#b8bec6" strokeDasharray="4 4" />
        <Label x={88} y={50} w={130} color={c} title="optimum 37 °C" lines={["fastest rate"]} /><Link from={[218, 70]} to={[X(37) - 7, Y(10)]} color={c} bend={-8} />
        <Label x={334} y={140} w={124} color="#d0496d" title="denatured" lines={["active site", "changes shape"]} /><Link from={[334, 170]} to={[X(50) + 4, Y(f(50))]} color="#d0496d" bend={10} />
        <T x={548} y={60} s={17} fill={c} anchor="middle">LOCK AND KEY</T>
        <g filter="url(#ps)"><path d="M462 250 V170 H520 L545 205 L570 170 H630 V250 Z" fill="url(#pc)" stroke={c} strokeWidth="1.8" strokeLinejoin="round" /></g>
        <T x={546} y={238} s={15} fill={c} anchor="middle">ENZYME</T>
        <g filter="url(#ps)"><path d="M521 118 L545 153 L569 118 Z" fill="#ffd08a" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" /></g>
        <Arrow from={[545, 158]} to={[545, 176]} color={INK} />
        <T x={604} y={128} s={14}>SUBSTRATE</T><T x={600} y={200} s={14}>ACTIVE</T><T x={600} y={216} s={14}>SITE</T>
        <T x={545} y={290} s={13} anchor="middle">SHAPES ARE COMPLEMENTARY</T>
      </svg>
    );
  },
  "biology-plant-nutrition": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <rect x="30" y="34" width="400" height="7" rx="3" fill="#eef6c8" stroke="#a7b86a" strokeWidth="1" />
      {Array.from({ length: 10 }, (_, i) => <rect key={`u${i}`} x={30 + i * 40} y="41" width="40" height="22" fill="#fbfff3" stroke="#7aa35a" strokeWidth="1" />)}
      {Array.from({ length: 13 }, (_, i) => <g key={`p${i}`}><rect x={32 + i * 30.6} y="66" width="27" height="72" rx="8" fill="#d6f0c2" stroke="#5aa02f" strokeWidth="1.1" />{[80, 98, 116].map((y) => <circle key={y} cx={45.5 + i * 30.6} cy={y} r="3.2" fill="#4f9a2a" />)}</g>)}
      {dots(16, 40, 146, 370, 52, 7).map(([x, y], i) => <g key={`s${i}`}><ellipse cx={x} cy={y + 6} rx="16" ry="12" fill="#e9f7dd" stroke="#5aa02f" strokeWidth="1" /><circle cx={x + 3} cy={y + 6} r="2.4" fill="#4f9a2a" /></g>)}
      {Array.from({ length: 10 }, (_, i) => (i === 5 ? null : <rect key={`l${i}`} x={30 + i * 40} y="214" width="40" height="20" fill="#fbfff3" stroke="#7aa35a" strokeWidth="1" />))}
      <path d="M232 214 q-2 10 8 20 q8 -8 0 -20 Z M248 214 q-8 12 0 20 q10 -10 8 -20 Z" fill="#a9db8a" stroke="#3f7a22" strokeWidth="1.1" />
      <Arrow from={[240, 274]} to={[240, 240]} color="#2a8fd6" /><T x={250} y={268} s={13} fill="#2a8fd6">CO₂ IN</T>
      <Arrow from={[222, 238]} to={[206, 272]} color="#c0702a" /><T x={150} y={284} s={13} fill="#c0702a">O₂ OUT</T>
      <Label x={462} y={6} w={200} color={c} title="waxy cuticle" /><Link from={[462, 26]} to={[426, 38]} color={c} />
      <Label x={462} y={56} w={200} color={c} title="palisade mesophyll" lines={["most chloroplasts"]} /><Link from={[462, 80]} to={[424, 100]} color={c} />
      <Label x={462} y={124} w={200} color={c} title="spongy mesophyll" lines={["air spaces for gases"]} /><Link from={[462, 150]} to={[412, 172]} color={c} />
      <Label x={462} y={194} w={200} color={c} title="stoma and guard cells" lines={["let gases in and out"]} /><Link from={[462, 222]} to={[258, 224]} color={c} bend={-20} />
      <T x={30} y={302} s={13}>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (LIGHT, CHLOROPHYLL)</T>
    </svg>
  ),
  "biology-animal-transport": (c) => {
    const blue = "#3f7fd0", red = "#d0496d";
    return (
      <svg viewBox={V}><Defs c={c} />
        <T x={275} y={26} s={14} anchor="middle">SEEN FROM THE FRONT: THE HEART'S LEFT IS ON YOUR RIGHT</T>
        <g filter="url(#ps)">
          <rect x="160" y="64" width="108" height="72" rx="14" fill="#e3edfb" stroke={blue} strokeWidth="1.8" />
          <rect x="160" y="150" width="108" height="112" rx="16" fill="#e3edfb" stroke={blue} strokeWidth="2.4" />
          <rect x="282" y="64" width="108" height="72" rx="14" fill="#fde6ec" stroke={red} strokeWidth="1.8" />
          <rect x="282" y="150" width="108" height="112" rx="16" fill="#fde6ec" stroke={red} strokeWidth="4.4" />
        </g>
        <path d="M275 64 V262" stroke={INK} strokeWidth="3" /><T x={275} y={284} s={13} anchor="middle">SEPTUM</T>
        <path d="M200 136 l14 14 l14 -14 M322 136 l14 14 l14 -14" fill="#fff" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />
        <T x={214} y={98} s={15} fill={blue} anchor="middle">RIGHT</T><T x={214} y={116} s={15} fill={blue} anchor="middle">ATRIUM</T>
        <T x={214} y={200} s={15} fill={blue} anchor="middle">RIGHT</T><T x={214} y={218} s={15} fill={blue} anchor="middle">VENTRICLE</T>
        <T x={336} y={98} s={15} fill={red} anchor="middle">LEFT</T><T x={336} y={116} s={15} fill={red} anchor="middle">ATRIUM</T>
        <T x={336} y={200} s={15} fill={red} anchor="middle">LEFT</T><T x={336} y={218} s={15} fill={red} anchor="middle">VENTRICLE</T>
        <Arrow from={[132, 100]} to={[158, 100]} color={blue} width={2.2} /><Arrow from={[160, 236]} to={[132, 236]} color={blue} width={2.2} />
        <Arrow from={[418, 100]} to={[392, 100]} color={red} width={2.2} /><Arrow from={[390, 236]} to={[418, 236]} color={red} width={2.2} />
        <Label x={6} y={70} w={124} color={blue} title="vena cava" lines={["from the body"]} />
        <Label x={6} y={204} w={124} color={blue} title="pulmonary" lines={["artery: to lungs"]} />
        <Label x={420} y={70} w={140} color={red} title="pulmonary" lines={["vein: from lungs"]} />
        <Label x={420} y={204} w={140} color={red} title="aorta" lines={["to the body"]} />
        <Label x={572} y={110} w={100} color={INK} title="valves" lines={["stop", "backflow"]} /><Link from={[572, 140]} to={[350, 146]} color={INK} bend={-30} />
        <T x={420} y={300} s={13} fill={red}>THICKEST WALL: LEFT VENTRICLE</T>
      </svg>
    );
  },
  "biology-gas-exchange": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <g filter="url(#ps)"><circle cx="210" cy="132" r="96" fill="#e6f2ff" stroke="#2a8fd6" strokeWidth="1.6" /></g>
      <T x={210} y={96} s={18} fill="#2a8fd6" anchor="middle">ALVEOLUS</T><T x={210} y={116} s={13} anchor="middle">AIR SPACE</T>
      <path d="M60 282 Q210 178 360 282" stroke="#e8879a" strokeWidth="30" fill="none" strokeLinecap="round" opacity=".55" />
      <path d="M60 282 Q210 178 360 282" stroke="#d0496d" strokeWidth="1.4" fill="none" strokeDasharray="5 5" />
      <T x={300} y={302} s={14} fill="#d0496d">CAPILLARY</T>
      <Arrow from={[180, 160]} to={[180, 222]} color="#2a8fd6" width={2.4} /><T x={150} y={190} s={16} fill="#2a8fd6">O₂</T>
      <Arrow from={[244, 222]} to={[244, 160]} color="#c0702a" width={2.4} /><T x={252} y={190} s={16} fill="#c0702a">CO₂</T>
      <Label x={410} y={6} w={256} color={c} title="large surface area" lines={["millions of alveoli"]} />
      <Label x={410} y={78} w={256} color={c} title="thin walls" lines={["one cell thick: short distance"]} />
      <Label x={410} y={150} w={256} color={c} title="good blood supply" lines={["keeps the gradient steep"]} />
      <Label x={410} y={222} w={256} color={c} title="ventilation" lines={["fresh air keeps oxygen high"]} />
    </svg>
  ),
  "biology-coordination": (c) => (
    <svg viewBox={V}><Defs c={c} />
      {[["STIMULUS", 20], ["RECEPTOR", 185], ["SENSORY NEURONE", 350], ["RELAY NEURONE", 515]].map(([t, x]) => <Box key={t} x={x} y={50} w={145} color={c}>{t}</Box>)}
      {[20, 185, 350].map((x) => <Arrow key={x} from={[x + 147, 72]} to={[x + 163, 72]} color={c} width={2} />)}
      <Arrow from={[587, 96]} to={[587, 172]} color={c} width={2} />
      {[["MOTOR NEURONE", 515], ["EFFECTOR", 350], ["RESPONSE", 185]].map(([t, x]) => <Box key={t} x={x} y={176} w={145} color={x === 185 ? "#3f9d5a" : c}>{t}</Box>)}
      {[515, 350].map((x) => <Arrow key={x} from={[x - 2, 198]} to={[x - 18, 198]} color={c} width={2} />)}
      <Label x={14} y={160} w={156} color="#3f9d5a" title="a reflex" lines={["fast, automatic,", "protects the body"]} />
      <T x={578} y={140} s={13} fill={c} anchor="end">IN THE SPINAL CORD</T>
      <T x={20} y={268} s={14}>EXAMPLE: HAND ON A HOT PAN → PAIN RECEPTORS → ARM MUSCLE PULLS AWAY</T>
      <T x={20} y={292} s={14}>AT A SYNAPSE, NEUROTRANSMITTER DIFFUSES ACROSS THE GAP, SO IMPULSES GO ONE WAY</T>
    </svg>
  ),
  "biology-inheritance-2": (c) => {
    const x0 = 130, y0 = 70, s = 96, cell = [["BB", "Bb"], ["Bb", "bb"]];
    return (
      <svg viewBox={V}><Defs c={c} />
        <T x={x0 + s} y={30} s={19} fill={c} anchor="middle">Bb × Bb</T>
        {["B", "b"].map((g, i) => <g key={g}><circle cx={x0 + s / 2 + i * s} cy={y0 - 18} r="15" fill="#fff" stroke={c} /><T x={x0 + s / 2 + i * s} y={y0 - 12} s={17} anchor="middle" fill={c}>{g}</T>
          <circle cx={x0 - 22} cy={y0 + s / 2 + i * s} r="15" fill="#fff" stroke={c} /><T x={x0 - 22} y={y0 + s / 2 + i * s + 6} s={17} anchor="middle" fill={c}>{g}</T></g>)}
        <g filter="url(#ps)">{cell.map((row, r) => row.map((g, k) => <rect key={`${r}${k}`} x={x0 + k * s} y={y0 + r * s} width={s} height={s} fill={g === "bb" ? "#fde6ec" : "#fff"} stroke={INK} strokeWidth="1.4" />))}</g>
        {cell.map((row, r) => row.map((g, k) => <T key={`t${r}${k}`} x={x0 + k * s + s / 2} y={y0 + r * s + s / 2 + 8} s={26} anchor="middle" fill={g === "bb" ? "#d0496d" : INK}>{g}</T>))}
        <Label x={380} y={20} w={280} color={c} title="GENOTYPES" keep lines={["1 BB : 2 Bb : 1 bb"]} />
        <Label x={380} y={96} w={280} color={c} title="PHENOTYPES 3 : 1" keep lines={["3 show the dominant feature", "1 shows the recessive (bb)"]} />
        <Label x={380} y={190} w={280} color="#d0496d" title="PROBABILITY OF bb" keep lines={["1 in 4, or 25%"]} /><Link from={[380, 220]} to={[x0 + 2 * s - 6, y0 + 1.5 * s]} color="#d0496d" bend={10} />
        <T x={380} y={296} s={13}>BOTH PARENTS HETEROZYGOUS</T>
      </svg>
    );
  },
  "biology-environment": (c) => {
    const tiers = [["PRODUCERS", 300, "#9fd477"], ["PRIMARY CONSUMERS", 228, "#ffd08a"], ["SECONDARY", 156, "#f6a8b6"], ["TERTIARY", 84, "#b9a6ea"]];
    const cx = 500, base = 282, h = 52;
    return (
      <svg viewBox={V}><Defs c={c} />
        {[["GRASS", 20], ["RABBIT", 130], ["FOX", 240]].map(([t, x]) => <Box key={t} x={x} y={24} w={90} color={c}>{t}</Box>)}
        <Arrow from={[112, 46]} to={[128, 46]} color={c} width={2} /><Arrow from={[222, 46]} to={[238, 46]} color={c} width={2} />
        <T x={20} y={94} s={13}>ARROWS SHOW THE DIRECTION ENERGY FLOWS</T>
        <Label x={20} y={124} w={300} color="#d0496d" title="energy is lost at every level" lines={["mostly as heat from respiration", "and in waste and uneaten parts"]} />
        <T x={20} y={250} s={14}>SO FOOD CHAINS RARELY HAVE</T><T x={20} y={270} s={14}>MORE THAN FIVE LEVELS</T>
        <g filter="url(#ps)">{tiers.map(([, w, f], i) => { const y = base - (i + 1) * h, wb = w, wt = tiers[i + 1] ? tiers[i + 1][1] : w * 0.6; return <path key={i} d={`M${cx - wb / 2} ${y + h} H${cx + wb / 2} L${cx + wt / 2} ${y} H${cx - wt / 2} Z`} fill={f} stroke={INK} strokeWidth="1.2" />; })}</g>
        {tiers.map(([t], i) => <T key={t} x={cx} y={base - i * h - h / 2 + 5} s={i > 1 ? 12 : 13} anchor="middle">{t}</T>)}
        <T x={cx} y={300} s={13} anchor="middle" fill={c}>PYRAMID OF ENERGY</T>
        <Link from={[320, 160]} to={[cx - 110, base - 1.5 * h]} color="#d0496d" bend={-10} />
      </svg>
    );
  },
};
