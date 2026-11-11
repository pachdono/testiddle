// Diagrams for the IGCSE Physics cheat sheets, drawn to match the notes.

import { INK, Label, Link, Dot, Defs, plot, T, Arrow, Box } from "../posterKit.jsx";

const V = "0 0 680 310";
const EM = [["RADIO", "#c9d6e8"], ["MICROWAVE", "#b7cbe6"], ["INFRARED", "#f3b2a6"], ["VISIBLE", "url(#rainbow)"], ["ULTRAVIOLET", "#c7b5ef"], ["X-RAY", "#a99bd8"], ["GAMMA", "#8d7cc8"]];

export default {
  "physics-motion": (c) => {
    const { X, Y, Axes } = plot([60, 30, 300, 220], [0, 45], [0, 25]);
    const pts = [[0, 0], [10, 20], [30, 20], [40, 0]];
    const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${X(x)} ${Y(y)}`).join(" ");
    return (
      <svg viewBox={V}><Defs c={c} />
        <Axes step={5} every={10} xl="t / s" yl="v / m/s" />
        <path d={`${d} Z`} fill="url(#pc)" />
        <path d={d} fill="none" stroke={c} strokeWidth="3.2" strokeLinejoin="round" filter="url(#ps)" />
        <T x={X(20)} y={Y(9)} s={15} fill={c} anchor="middle">AREA = DISTANCE</T>
        <T x={X(20)} y={Y(5)} s={13} anchor="middle">100 + 400 + 100 = 600 m</T>
        <Label x={380} y={8} w={290} color={c} title="GRADIENT = ACCELERATION" keep lines={["0 TO 10 s: 20 ÷ 10 = 2 m/s²"]} /><Link from={[380, 40]} to={[X(5), Y(10)]} color={c} bend={-20} />
        <Label x={380} y={84} w={290} color={INK} title="flat line" lines={["constant speed, no acceleration"]} /><Link from={[380, 116]} to={[X(22), Y(20) - 4]} color={INK} bend={10} />
        <Label x={380} y={160} w={290} color="#d0496d" title="SLOPING DOWN" keep lines={["DECELERATION: 20 ÷ 10 = 2 m/s²"]} /><Link from={[380, 194]} to={[X(36), Y(8)]} color="#d0496d" bend={10} />
        <T x={420} y={262} s={14}>ON A DISTANCE TIME GRAPH,</T><T x={420} y={282} s={14}>THE GRADIENT IS THE SPEED</T>
      </svg>
    );
  },
  "physics-thermal": (c) => {
    const { X, Y, Axes } = plot([60, 30, 290, 220], [0, 10], [-20, 120]);
    const pts = [[0, -20], [1, 0], [3, 0], [6, 100], [8.6, 100], [10, 118]];
    const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${X(x)} ${Y(y)}`).join(" ");
    return (
      <svg viewBox={V}><Defs c={c} />
        <Axes step={20} every={20} xl="time" yl="°C" />
        <path d={d} fill="none" stroke={c} strokeWidth="3.2" strokeLinejoin="round" filter="url(#ps)" />
        <T x={X(2)} y={Y(0) - 10} s={13} fill="#2a8fd6" anchor="middle">MELTING</T>
        <T x={X(7.3)} y={Y(100) - 10} s={13} fill="#d0496d" anchor="middle">BOILING</T>
        <T x={X(5.8)} y={Y(40)} s={13}>FLAT: ENERGY BREAKS</T><T x={X(5.8)} y={Y(40) + 16} s={13}>BONDS, NOT HOTTER</T>
        <Label x={420} y={4} w={250} color={c} title="ΔE = mcΔθ" keep lines={["ENERGY TO HEAT 1 KG BY 1 °C IS c"]} />
        <Label x={420} y={72} w={250} color="#c0702a" title="conduction" lines={["vibrations and free electrons"]} />
        <Label x={420} y={140} w={250} color="#2a8fd6" title="convection" lines={["warm fluid expands and rises"]} />
        <Label x={420} y={208} w={250} color="#d0496d" title="radiation" lines={["infrared, needs no medium"]} />
      </svg>
    );
  },
  "physics-waves": (c) => {
    const amp = 50, cy = 120, lam = 160, x0 = 40;
    const wave = Array.from({ length: 181 }, (_, i) => { const x = x0 + i * 2; return `${i ? "L" : "M"}${x} ${(cy - amp * Math.sin(((x - x0) / lam) * Math.PI * 2)).toFixed(1)}`; }).join(" ");
    const crest1 = x0 + lam / 4, crest2 = crest1 + lam;
    return (
      <svg viewBox={V}><Defs c={c} />
        <defs><linearGradient id="rainbow" x1="0" x2="1"><stop offset="0" stopColor="#e3342f" /><stop offset=".25" stopColor="#f9ae1f" /><stop offset=".5" stopColor="#6cc04a" /><stop offset=".75" stopColor="#2b8fc7" /><stop offset="1" stopColor="#5b3fa6" /></linearGradient></defs>
        <path d={`M${x0} ${cy} H${x0 + 360}`} stroke="#b8bec6" strokeDasharray="5 5" />
        <path d={wave} fill="none" stroke={c} strokeWidth="3" filter="url(#ps)" />
        <path d={`M${crest1} ${cy - amp - 16} V${cy - amp - 4} M${crest2} ${cy - amp - 16} V${cy - amp - 4}`} stroke={INK} />
        <Arrow from={[crest1 + 4, cy - amp - 10]} to={[crest2 - 2, cy - amp - 10]} /><Arrow from={[crest2 - 4, cy - amp - 10]} to={[crest1 + 2, cy - amp - 10]} />
        <T x={(crest1 + crest2) / 2} y={cy - amp - 18} s={15} anchor="middle">WAVELENGTH λ</T>
        <Arrow from={[crest1 + lam / 2, cy + 2]} to={[crest1 + lam / 2, cy + amp - 4]} color="#d0496d" /><T x={crest1 + lam / 2} y={cy + amp + 22} s={14} fill="#d0496d" anchor="middle">AMPLITUDE</T>
        <Label x={440} y={6} w={230} color={c} title="v = fλ" keep lines={["SPEED = FREQUENCY × WAVELENGTH"]} />
        <Label x={440} y={72} w={230} color={INK} title="transverse" lines={["vibrates at right angles: light"]} />
        <Label x={440} y={138} w={230} color={INK} title="longitudinal" lines={["vibrates along: sound"]} />
        <g filter="url(#ps)">{EM.map(([t, f], i) => <rect key={t} x={20 + i * 91.4} y={226} width="91.4" height="34" fill={f} stroke="#fff" />)}</g>
        {EM.map(([t], i) => <T key={t} x={20 + i * 91.4 + 45.7} y={248} s={12} anchor="middle">{t}</T>)}
        <Arrow from={[180, 282]} to={[500, 282]} color={INK} /><T x={340} y={302} s={13} anchor="middle">FREQUENCY RISES, WAVELENGTH FALLS. ALL TRAVEL AT 3 × 10⁸ m/s</T>
      </svg>
    );
  },
  "physics-electricity": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <path d="M60 60 H190 M214 60 H340 V240 H252 M196 240 H60 V60" fill="none" stroke={INK} strokeWidth="2" />
      <path d="M194 46 V74" stroke={INK} strokeWidth="5" /><path d="M210 38 V82" stroke={INK} strokeWidth="2" />
      <T x={186} y={36} s={14} anchor="end">−</T><T x={218} y={30} s={14}>+</T>
      <g filter="url(#ps)"><rect x="196" y="230" width="56" height="20" rx="3" fill="#fff" stroke={INK} strokeWidth="2" /></g>
      <path d="M172 240 V284 H210 M238 284 H272 V240" fill="none" stroke={INK} strokeWidth="1.6" />
      <g filter="url(#ps)"><circle cx="224" cy="284" r="14" fill="#fff" stroke="#c0702a" strokeWidth="2" /></g><T x={224} y={290} s={16} fill="#c0702a" anchor="middle">V</T>
      <g filter="url(#ps)"><circle cx="60" cy="150" r="16" fill="#fff" stroke={c} strokeWidth="2" /></g><T x={60} y={156} s={17} fill={c} anchor="middle">A</T>
      <g filter="url(#ps)"><circle cx="340" cy="150" r="16" fill="#fffbe6" stroke={INK} strokeWidth="2" /></g><path d="M329 139 L351 161 M351 139 L329 161" stroke={INK} strokeWidth="1.6" />
      <T x={224} y={218} s={13} anchor="middle">RESISTOR</T><T x={358} y={180} s={13}>LAMP</T><T x={202} y={104} s={13} anchor="middle">CELL</T>
      <Label x={400} y={8} w={270} color={c} title="ammeter in series" lines={["measures current in amps"]} />
      <Label x={400} y={76} w={270} color="#c0702a" title="voltmeter in parallel" lines={["measures potential difference"]} />
      <Label x={400} y={144} w={270} color={INK} title="V = IR  and  P = IV" keep lines={["RESISTANCE IN OHMS, POWER IN WATTS"]} />
      <T x={400} y={250} s={13}>SERIES: SAME CURRENT, RESISTANCES ADD</T>
      <T x={400} y={272} s={13}>PARALLEL: SAME VOLTAGE ACROSS EACH BRANCH</T>
    </svg>
  ),
  "physics-nuclear": (c) => {
    const { X, Y, path, Axes } = plot([60, 30, 250, 220], [0, 8], [0, 900]);
    const A = (t) => 800 * 0.5 ** (t / 2);
    return (
      <svg viewBox={V}><Defs c={c} />
        <Axes step={100} every={400} xl="hours" yl="count rate" />
        {[0, 2, 4, 6, 8].map((t) => <T key={t} x={X(t)} y={Y(0) + 17} s={13} fill="#6b7682" anchor="middle">{t || ""}</T>)}
        <path d={path(A, 0, 8)} fill="none" stroke={c} strokeWidth="3" filter="url(#ps)" />
        {[2, 4, 6].map((t) => <g key={t}><path d={`M${X(0)} ${Y(A(t))} H${X(t)} V${Y(0)}`} stroke="#b8bec6" strokeDasharray="4 4" fill="none" /><Dot x={X(t)} y={Y(A(t))} color={c} r={5} /><T x={X(t) + 8} y={Y(A(t)) - 6} s={12}>{A(t)}</T></g>)}
        <T x={X(4.6)} y={Y(760)} s={14} fill={c} anchor="middle">HALF LIFE = 2 HOURS</T>
        <rect x="470" y="40" width="4" height="190" fill="#e8dcc0" stroke={INK} strokeWidth=".6" /><rect x="540" y="40" width="10" height="190" fill="#cfd6dd" stroke={INK} strokeWidth=".8" /><rect x="606" y="40" width="26" height="190" fill="#7d8792" stroke={INK} strokeWidth=".8" />
        <T x={472} y={252} s={13} anchor="middle">PAPER</T><T x={545} y={252} s={13} anchor="middle">ALUMINIUM</T><T x={619} y={252} s={13} anchor="middle">LEAD</T>
        <T x={380} y={84} s={20} fill="#d0496d">α</T><Arrow from={[400, 78]} to={[466, 78]} color="#d0496d" width={2.4} />
        <T x={380} y={144} s={20} fill="#c0702a">β</T><Arrow from={[400, 138]} to={[536, 138]} color="#c0702a" width={2.4} />
        <T x={380} y={204} s={20} fill="#7a5cd6">γ</T><path d="M400 198 H604" stroke="#7a5cd6" strokeWidth="2.4" /><path d="M632 198 H664" stroke="#7a5cd6" strokeWidth="1.2" strokeDasharray="4 4" />
        <T x={360} y={282} s={13}>α MOST IONISING, γ LEAST. GAMMA IS ONLY REDUCED BY LEAD</T>
      </svg>
    );
  },
  "physics-space": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <Box x={20} y={30} w={110} color={c}>NEBULA</Box><Box x={160} y={30} w={110} color={c}>PROTOSTAR</Box><Box x={300} y={30} w={150} color="#c0902a" fill="#fff8e0">MAIN SEQUENCE</Box>
      <Arrow from={[132, 52]} to={[156, 52]} color={c} width={2} /><Arrow from={[272, 52]} to={[296, 52]} color={c} width={2} />
      <T x={20} y={152} s={14} fill="#c0702a">STARS LIKE THE SUN</T><T x={20} y={232} s={14} fill="#7a5cd6">MASSIVE STARS</T>
      <Box x={300} y={124} w={120} color="#d0496d" fill="#fde6ec">RED GIANT</Box><Box x={470} y={124} w={130} color={INK}>WHITE DWARF</Box><T x={535} y={184} s={12} anchor="middle">VIA A PLANETARY NEBULA</T>
      <Box x={300} y={204} w={140} color="#d0496d" fill="#fde6ec">RED SUPERGIANT</Box><Box x={466} y={204} w={100} color="#c0702a" fill="#fff1e0">SUPERNOVA</Box>
      <Box x={586} y={204} w={88} color={INK} s={12}>NEUTRON STAR</Box><T x={630} y={268} s={12} anchor="middle">OR BLACK HOLE</T>
      <Arrow from={[340, 76]} to={[340, 120]} color={c} width={2} /><Arrow from={[436, 76]} to={[436, 200]} color={c} width={2} />
      <Arrow from={[422, 146]} to={[466, 146]} color={c} width={2} /><Arrow from={[442, 226]} to={[462, 226]} color={c} width={2} /><Arrow from={[568, 226]} to={[582, 226]} color={c} width={2} />
      <T x={20} y={296} s={13}>MAIN SEQUENCE STARS ARE POWERED BY FUSION OF HYDROGEN INTO HELIUM</T>
      <T x={470} y={96} s={13}>REDSHIFT: GALAXIES MOVE AWAY,</T><T x={470} y={112} s={13}>SO THE UNIVERSE IS EXPANDING</T>
    </svg>
  ),
};
