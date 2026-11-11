// Diagrams for the IGCSE Computer Science, ICT and Geography cheat sheets.

import { INK, Label, Link, Dot, Defs, plot, T, Arrow, Box } from "../posterKit.jsx";

const V = "0 0 680 310";

const truth = (x, y, rows, col) => (
  <g>
    <rect x={x} y={y} width="150" height={22 + rows.length * 24} rx="8" fill="#fff" stroke="#d6d9de" />
    <T x={x + 30} y={y + 17} s={14} fill={col} anchor="middle">A</T><T x={x + 75} y={y + 17} s={14} fill={col} anchor="middle">B</T><T x={x + 120} y={y + 17} s={14} fill={col} anchor="middle">OUT</T>
    {rows.map((r, i) => r.map((v, k) => <T key={`${i}${k}`} x={x + 30 + k * 45} y={y + 42 + i * 24} s={15} fill={k === 2 && v === 1 ? col : INK} anchor="middle">{v === null ? "" : v}</T>))}
  </g>
);

export default {
  "cs-data-rep": (c) => {
    const bits = [1, 0, 1, 1, 0, 1, 0, 1], places = [128, 64, 32, 16, 8, 4, 2, 1];
    return (
      <svg viewBox={V}><Defs c={c} />
        {places.map((p, i) => <g key={p}><T x={76 + i * 76} y={34} s={15} anchor="middle" fill="#6b7682">{p}</T>
          <g filter="url(#ps)"><rect x={46 + i * 76} y={44} width="60" height="52" rx="8" fill={bits[i] ? "url(#pc)" : "#fff"} stroke={bits[i] ? c : "#b8bec6"} strokeWidth="1.6" /></g>
          <T x={76 + i * 76} y={80} s={28} anchor="middle" fill={bits[i] ? c : "#9aa5b1"}>{bits[i]}</T></g>)}
        <T x={340} y={128} s={17} anchor="middle">128 + 32 + 16 + 4 + 1 = 181</T>
        <path d="M46 146 V156 H326 V146 M350 146 V156 H630 V146" fill="none" stroke="#c0702a" strokeWidth="1.6" />
        <T x={186} y={180} s={16} fill="#c0702a" anchor="middle">1011 = 11 = B</T><T x={490} y={180} s={16} fill="#c0702a" anchor="middle">0101 = 5</T>
        <T x={340} y={206} s={17} fill="#c0702a" anchor="middle">HEXADECIMAL: B5</T>
        <Label x={20} y={222} w={200} color={INK} title="UNITS" keep lines={["8 bits = 1 byte"]} />
        <Label x={240} y={222} w={200} color={INK} title="IMAGE SIZE" keep lines={["width × height × depth"]} />
        <Label x={460} y={222} w={200} color={INK} title="SHIFT LEFT 1" keep lines={["multiplies by 2"]} />
      </svg>
    );
  },
  "cs-hardware": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <g filter="url(#ps)"><rect x="20" y="20" width="340" height="236" rx="14" fill="#fbfdff" stroke={c} strokeWidth="1.8" /></g>
      <T x={190} y={44} s={17} fill={c} anchor="middle">CPU</T>
      <Box x={40} y={64} w={140} h={70} color={INK}>CONTROL UNIT</Box><Box x={40} y={156} w={140} h={70} color={INK}>ALU</Box>
      {["PC", "MAR", "MDR", "CIR", "ACC"].map((r, i) => <Box key={r} x={210} y={56 + i * 38} w={130} h={30} color="#7a5cd6" s={14}>{r}</Box>)}
      <g filter="url(#ps)"><rect x="500" y="56" width="160" height="176" rx="12" fill="#fff8e0" stroke="#c0902a" strokeWidth="1.6" /></g>
      <T x={580} y={140} s={18} fill="#c0902a" anchor="middle">MEMORY</T><T x={580} y={162} s={14} anchor="middle">RAM</T>
      <Arrow from={[362, 92]} to={[496, 92]} color="#d0496d" width={2} /><T x={430} y={84} s={13} fill="#d0496d" anchor="middle">ADDRESS BUS</T>
      <Arrow from={[364, 144]} to={[496, 144]} color="#2a8fd6" width={2} /><Arrow from={[496, 144]} to={[364, 144]} color="#2a8fd6" width={2} /><T x={430} y={136} s={13} fill="#2a8fd6" anchor="middle">DATA BUS</T>
      <Arrow from={[364, 196]} to={[496, 196]} color="#3f9d5a" width={2} /><Arrow from={[496, 196]} to={[364, 196]} color="#3f9d5a" width={2} /><T x={430} y={188} s={13} fill="#3f9d5a" anchor="middle">CONTROL BUS</T>
      <T x={20} y={280} s={14}>FETCH: PC → MAR, DATA ARRIVES IN MDR, INSTRUCTION GOES TO CIR</T>
      <T x={20} y={300} s={14}>DECODE IN THE CONTROL UNIT, EXECUTE (ALU FOR MATHS AND LOGIC)</T>
    </svg>
  ),
  "cs-logic": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <g fill="#fff" stroke={INK} strokeWidth="1.8">
        <path d="M60 40 v12 M60 76 v12" stroke="none" />
        <path d="M30 52 H70 M30 76 H70 M130 64 H160" fill="none" /><path d="M70 34 H100 A30 30 0 0 1 100 94 H70 Z" />
        <path d="M250 52 H290 M250 76 H290 M358 64 H388" fill="none" /><path d="M278 34 Q298 64 278 94 Q330 94 358 64 Q330 34 278 34 Z" />
        <path d="M470 64 H510 M576 64 H606" fill="none" /><path d="M510 34 L562 64 L510 94 Z" /><circle cx="569" cy="64" r="7" />
      </g>
      <T x={100} y={22} s={18} fill={c} anchor="middle">AND</T><T x={318} y={22} s={18} fill={c} anchor="middle">OR</T><T x={540} y={22} s={18} fill={c} anchor="middle">NOT</T>
      {truth(25, 112, [[0, 0, 0], [0, 1, 0], [1, 0, 0], [1, 1, 1]], c)}
      {truth(243, 112, [[0, 0, 0], [0, 1, 1], [1, 0, 1], [1, 1, 1]], c)}
      {truth(465, 112, [[0, null, 1], [1, null, 0]], c)}
      <T x={100} y={256} s={13} anchor="middle">1 ONLY IF BOTH ARE 1</T><T x={318} y={256} s={13} anchor="middle">1 IF EITHER IS 1</T><T x={540} y={208} s={13} anchor="middle">REVERSES THE INPUT</T>
      <T x={340} y={292} s={14} anchor="middle">NAND = NOT AND. NOR = NOT OR. XOR: 1 WHEN THE INPUTS DIFFER</T>
    </svg>
  ),
  "ict-networks": (c) => (
    <svg viewBox={V}><Defs c={c} />
      {[40, 110, 180].map((y, i) => <Box key={y} x={20} y={y} w={110} h={46} color={INK}>{`COMPUTER ${i + 1}`}</Box>)}
      <Box x={200} y={110} w={110} h={46} color={c}>SWITCH</Box><Box x={380} y={110} w={110} h={46} color="#c0702a">ROUTER</Box>
      {[63, 133, 203].map((y) => <path key={y} d={`M130 ${y} L200 133`} stroke={INK} strokeWidth="1.6" />)}
      <path d="M310 133 H380" stroke={INK} strokeWidth="1.6" /><path d="M490 133 H540" stroke={INK} strokeWidth="1.6" />
      <g filter="url(#ps)"><path d="M560 160 Q536 160 538 140 Q534 116 560 116 Q566 92 594 98 Q616 84 634 104 Q662 104 658 130 Q670 158 640 160 Z" fill="#e6f2ff" stroke="#2a8fd6" strokeWidth="1.6" /></g>
      <T x={600} y={142} s={15} fill="#2a8fd6" anchor="middle">INTERNET</T>
      <Box x={380} y={210} w={110} h={42} color="#7a5cd6" s={13}>WIRELESS AP</Box><path d="M435 156 V210" stroke={INK} strokeWidth="1.6" />
      <path d="M500 226 q8 5 0 10 M508 220 q14 11 0 22" fill="none" stroke="#7a5cd6" strokeWidth="1.6" /><Box x={530} y={210} w={110} h={42} color={INK} s={14}>LAPTOP</Box>
      <T x={200} y={30} s={14} fill={c}>SWITCH: CONNECTS DEVICES IN A LAN</T><T x={200} y={50} s={14} fill="#c0702a">ROUTER: CONNECTS DIFFERENT NETWORKS</T>
      <T x={20} y={286} s={14}>LAN: ONE SITE. WAN: WIDE AREA, LIKE THE INTERNET. NIC CONNECTS A DEVICE.</T>
    </svg>
  ),
  "geography-pop-dyn": (c) => {
    const { X, Y } = plot([60, 50, 440, 200], [0, 5], [0, 50]);
    const line = (pts) => pts.map(([x, y], i) => `${i ? "L" : "M"}${X(x)} ${Y(y)}`).join(" ");
    const br = [[0, 40], [1, 40], [2, 38], [3, 18], [4, 12], [5, 9]], dr = [[0, 39], [0.5, 34], [1, 38], [2, 16], [3, 11], [4, 11], [5, 12]], pop = [[0, 6], [1, 8], [2, 16], [3, 36], [4, 46], [5, 45]];
    return (
      <svg viewBox={V}><Defs c={c} />
        <rect x={X(0)} y={Y(50)} width={X(5) - X(0)} height={Y(0) - Y(50)} fill="#fbfdff" stroke="#d6d9de" />
        {[1, 2, 3, 4].map((s) => <path key={s} d={`M${X(s)} ${Y(50)} V${Y(0)}`} stroke="#d6d9de" strokeDasharray="4 4" />)}
        {[1, 2, 3, 4, 5].map((s) => <T key={s} x={X(s - 0.5)} y={40} s={15} anchor="middle" fill={c}>STAGE {s}</T>)}
        <path d={`${line(br)} L${X(5)} ${Y(12)} L${X(4)} ${Y(11)} L${X(3)} ${Y(11)} L${X(2)} ${Y(16)} L${X(1)} ${Y(38)} L${X(0.5)} ${Y(34)} L${X(0)} ${Y(39)} Z`} fill="#ffe9b0" opacity=".7" />
        <path d={line(br)} fill="none" stroke="#d0496d" strokeWidth="3" /><path d={line(dr)} fill="none" stroke="#2a8fd6" strokeWidth="3" />
        <path d={line(pop)} fill="none" stroke={c} strokeWidth="3" strokeDasharray="8 5" />
        <T x={X(0.25)} y={Y(47)} s={14} fill="#c0902a">NATURAL INCREASE</T><Link from={[X(1.1), Y(45.5)]} to={[X(1.6), Y(33)]} color="#c0902a" bend={10} />
        <Label x={520} y={56} w={150} color="#d0496d" title="birth rate" />
        <Label x={520} y={110} w={150} color="#2a8fd6" title="death rate" />
        <Label x={520} y={164} w={150} color={c} title="total population" />
        <T x={60} y={278} s={14}>STAGE 2: DEATH RATE FALLS FIRST (HEALTHCARE, CLEAN WATER), SO POPULATION GROWS FASTEST</T>
        <T x={60} y={298} s={14}>NATURAL INCREASE = BIRTH RATE - DEATH RATE</T>
      </svg>
    );
  },
  "geography-structure": (c) => {
    const lic = [70, 62, 54, 46, 38, 30, 22, 14, 7], hic = [34, 36, 38, 41, 44, 42, 38, 30, 20];
    const pyr = (cx, w, col) => w.map((v, i) => <g key={i}><rect x={cx - v - 2} y={232 - i * 22} width={v} height="19" fill={col} opacity=".75" /><rect x={cx + 2} y={232 - i * 22} width={v * 0.97} height="19" fill={col} opacity=".45" /></g>);
    return (
      <svg viewBox={V}><Defs c={c} />
        <g filter="url(#ps)">{pyr(160, lic, "#d0496d")}{pyr(480, hic, "#2a8fd6")}</g>
        {[160, 480].map((x) => <g key={x}><path d={`M${x} 40 V254`} stroke={INK} /><T x={x - 40} y={36} s={13} anchor="middle">MALE</T><T x={x + 40} y={36} s={13} anchor="middle">FEMALE</T></g>)}
        <T x={300} y={248} s={12} anchor="end">0 TO 9</T><T x={300} y={72} s={12} anchor="end">80+</T>
        <T x={160} y={276} s={15} fill="#d0496d" anchor="middle">LOW INCOME COUNTRY</T><T x={160} y={296} s={13} anchor="middle">WIDE BASE: HIGH BIRTH RATE</T>
        <T x={480} y={276} s={15} fill="#2a8fd6" anchor="middle">HIGH INCOME COUNTRY</T><T x={480} y={296} s={13} anchor="middle">NARROW BASE, WIDE TOP: AGEING</T>
        <T x={600} y={110} s={13}>DEPENDENCY</T><T x={600} y={128} s={13}>RATIO =</T><T x={600} y={146} s={13}>(UNDER 15 +</T><T x={600} y={164} s={13}>OVER 65) ÷</T><T x={600} y={182} s={13}>15 TO 64</T>
      </svg>
    );
  },
  "geography-tectonics": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <rect x="0" y="150" width="680" height="160" fill="#fbe5d6" />
      <rect x="20" y="76" width="276" height="26" fill="#bfe0fb" />
      <g filter="url(#ps)"><path d="M20 102 H286 L436 262 L414 276 L274 126 H20 Z" fill="#8a96a3" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" /></g>
      <g filter="url(#ps)"><path d="M300 92 Q330 92 360 88 L440 82 L470 38 L500 82 L660 88 V170 H360 Q330 150 300 110 Z" fill="#c9a27a" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" /></g>
      <path d="M470 38 L466 30 M470 38 L476 28" stroke="#d0496d" strokeWidth="2" />
      <path d="M420 240 Q440 200 452 160 Q462 110 470 46" fill="none" stroke="#e8702a" strokeWidth="5" opacity=".8" strokeDasharray="10 6" />
      {[[300, 128], [340, 168], [380, 210]].map(([x, y]) => <path key={x} d={`M${x} ${y - 7} l2 5 l5 1 l-4 3 l1 6 l-4 -3 l-4 3 l1 -6 l-4 -3 l5 -1 Z`} fill="#f2b632" stroke={INK} strokeWidth=".6" />)}
      <Arrow from={[80, 90]} to={[150, 90]} color={INK} width={2.4} /><Arrow from={[620, 120]} to={[560, 120]} color={INK} width={2.4} />
      <T x={60} y={120} s={13} fill="#fff">OCEANIC PLATE: DENSER</T><T x={540} y={150} s={14}>CONTINENTAL PLATE</T>
      <T x={296} y={70} s={13} anchor="middle">TRENCH</T><T x={180} y={70} s={13} fill="#2a8fd6" anchor="middle">OCEAN</T>
      <Label x={20} y={200} w={250} color={INK} title="subduction" lines={["the oceanic plate sinks and melts"]} />
      <Label x={490} y={190} w={180} color="#d0496d" title="explosive volcano" lines={["magma rises"]} /><Link from={[540, 190]} to={[478, 60]} color="#d0496d" bend={-10} />
      <T x={300} y={296} s={13}>STARS: EARTHQUAKES ALONG THE SINKING PLATE</T>
    </svg>
  ),
  "geography-rivers": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <rect x="10" y="20" width="470" height="270" rx="12" fill="#f3f8ea" />
      <path d="M30 250 C150 250 120 70 240 70 C360 70 330 250 460 250" fill="none" stroke="#9fd0f5" strokeWidth="38" strokeLinecap="round" />
      <path d="M30 250 C150 250 120 70 240 70 C360 70 330 250 460 250" fill="none" stroke="#5aa7e6" strokeWidth="1.2" strokeDasharray="6 6" />
      <path d="M170 74 C200 46 280 46 310 74" fill="none" stroke="#d0496d" strokeWidth="3" strokeDasharray="8 5" />
      <path d="M196 102 Q240 88 284 102" fill="#f1d9a4" stroke="#c0902a" strokeWidth="1.2" />
      <path d="M150 38 Q240 18 330 38" fill="none" stroke="#a0522d" strokeWidth="5" />
      <T x={240} y={150} s={14} anchor="middle">INNER BEND</T><T x={240} y={14} s={0}> </T>
      <Arrow from={[60, 200]} to={[92, 160]} color="#2a8fd6" width={2} /><T x={40} y={194} s={13} fill="#2a8fd6">FLOW</T>
      <Label x={496} y={6} w={176} color="#d0496d" title="outer bend" lines={["fast and deep", "erosion: river cliff"]} /><Link from={[496, 46]} to={[318, 40]} color="#d0496d" bend={-14} />
      <Label x={496} y={98} w={176} color="#c0902a" title="inner bend" lines={["slow and shallow", "deposition: slip off"]} /><Link from={[496, 134]} to={[286, 104]} color="#c0902a" bend={10} />
      <Label x={496} y={190} w={176} color={c} title="ox bow lake" lines={["neck is cut through", "and the loop is left"]} />
      <T x={30} y={302} s={13}>RED DASHES: FASTEST FLOW SWINGS TO THE OUTSIDE OF EACH BEND</T>
    </svg>
  ),
  "geography-coasts": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <rect x="0" y="210" width="680" height="100" fill="#cfe6fb" />
      <g filter="url(#ps)">
        <path d="M0 70 H210 Q226 72 230 90 V214 H0 Z" fill="#c9b38a" stroke={INK} strokeWidth="1.2" />
        <path d="M250 96 H360 V214 H338 V170 Q305 132 272 170 V214 H250 Z" fill="#c9b38a" stroke={INK} strokeWidth="1.2" />
        <path d="M420 104 H468 V214 H420 Z" fill="#c9b38a" stroke={INK} strokeWidth="1.2" />
        <path d="M540 170 H572 V214 H540 Z" fill="#c9b38a" stroke={INK} strokeWidth="1.2" />
      </g>
      <path d="M176 214 V186 Q196 164 216 186 V214" fill="#5b4a3a" />
      <path d="M0 70 H210" stroke="#7fb05a" strokeWidth="5" /><path d="M250 96 H360" stroke="#7fb05a" strokeWidth="5" /><path d="M420 104 H468" stroke="#7fb05a" strokeWidth="5" />
      {[["CAVE", 196], ["ARCH", 305], ["STACK", 444], ["STUMP", 556]].map(([t, x], i) => <g key={t}><circle cx={x} cy="252" r="14" fill={c} /><T x={x} y={258} s={15} fill="#fff" anchor="middle">{i + 1}</T><T x={x} y={290} s={15} anchor="middle">{t}</T></g>)}
      <Arrow from={[240, 40]} to={[600, 40]} color={c} width={2} /><T x={420} y={30} s={14} fill={c} anchor="middle">EROSION OVER TIME</T>
      <T x={600} y={110} s={13}>WAVES WIDEN</T><T x={600} y={128} s={13}>CRACKS BY</T><T x={600} y={146} s={13}>HYDRAULIC</T><T x={600} y={164} s={13}>ACTION AND</T><T x={600} y={182} s={13}>ABRASION</T>
    </svg>
  ),
  "geography-skills": (c) => {
    const gx = (e) => 40 + (e - 23) * 60, gy = (n) => 280 - (n - 45) * 60;
    return (
      <svg viewBox={V}><Defs c={c} />
        <rect x={gx(23)} y={gy(49)} width="240" height="240" fill="#fbfdff" stroke={INK} strokeWidth="1.2" />
        {[24, 25, 26].map((e) => <path key={e} d={`M${gx(e)} ${gy(49)} V${gy(45)}`} stroke="#b8bec6" />)}
        {[46, 47, 48].map((n) => <path key={n} d={`M${gx(23)} ${gy(n)} H${gx(27)}`} stroke="#b8bec6" />)}
        {[23, 24, 25, 26, 27].map((e) => <T key={e} x={gx(e)} y={300} s={14} anchor="middle">{e}</T>)}
        {[45, 46, 47, 48, 49].map((n) => <T key={n} x={30} y={gy(n) + 5} s={14} anchor="end">{n}</T>)}
        <rect x={gx(24)} y={gy(47)} width="60" height="60" fill="url(#pc)" />
        <Dot x={gx(24.5)} y={gy(46.7)} color="#d0496d" r={6} />
        <T x={gx(24.5) + 10} y={gy(46.7) - 10} s={14} fill="#d0496d">245467</T>
        <T x={gx(23) + 6} y={gy(49) - 8} s={13} fill={c}>SQUARE 2446 SHADED</T>
        <ellipse cx="440" cy="160" rx="96" ry="82" fill="#eef7e6" stroke="#8c6b4a" strokeWidth="1.4" />
        <ellipse cx="455" cy="160" rx="62" ry="56" fill="#e2f0d4" stroke="#8c6b4a" strokeWidth="1.4" />
        <ellipse cx="468" cy="160" rx="32" ry="30" fill="#d4e8c2" stroke="#8c6b4a" strokeWidth="1.4" />
        <T x={350} y={164} s={12} fill="#8c6b4a">100</T><T x={396} y={164} s={12} fill="#8c6b4a">150</T><T x={448} y={164} s={12} fill="#8c6b4a">200</T>
        <T x={548} y={150} s={13} fill="#d0496d">STEEP: LINES</T><T x={548} y={168} s={13} fill="#d0496d">CLOSE</T>
        <T x={340} y={266} s={13}>GENTLE: LINES FAR APART</T>
        <T x={340} y={40} s={14} fill={c}>ALONG THE CORRIDOR,</T><T x={340} y={58} s={14} fill={c}>THEN UP THE STAIRS</T>
        <T x={340} y={294} s={13}>1:50 000 MAP: 2 cm = 1 km</T>
      </svg>
    );
  },
};
