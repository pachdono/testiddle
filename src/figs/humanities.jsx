// Diagrams for the IGCSE Economics, Business, History, PE, Accounting and Design and Technology
// cheat sheets.

import { INK, Label, Dot, Defs, plot, T, Arrow } from "../posterKit.jsx";

const V = "0 0 680 310";

/** Splits text into short lines for a timeline card. */
const wrap = (text, max) => { const out = []; text.split(" ").forEach((w) => { const l = out[out.length - 1]; if (l && (l + " " + w).length <= max) out[out.length - 1] = l + " " + w; else out.push(w); }); return out.slice(0, 3); };

/** Events spaced evenly along a line, cards alternating above and below so none overlap. */
const timeline = (events) => (c) => {
  const n = events.length, x0 = 86, x1 = 594, gap = (x1 - x0) / (n - 1), w = Math.min(150, gap * 2 - 12), chars = Math.floor(w / 9.6);
  return (
    <svg viewBox={V}><Defs c={c} />
      <path d={`M${x0 - 20} 155 H${x1 + 20}`} stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
      <Arrow from={[x1 + 4, 155]} to={[x1 + 26, 155]} color={INK} width={2.4} />
      {events.map(([year, text], i) => {
        const x = x0 + i * gap, up = i % 2 === 0, lines = wrap(text, chars), h = 28 + lines.length * 18 + 12, y = up ? 132 - h : 178;
        return (
          <g key={i}>
            <path d={`M${x} ${up ? 132 : 178} V155`} stroke={c} strokeWidth="1.4" />
            <Dot x={x} y={155} color={c} r={7} />
            <Label x={Math.max(4, Math.min(676 - w, x - w / 2))} y={y} w={w} color={c} title={year} lines={lines} />
          </g>
        );
      })}
    </svg>
  );
};

export default {
  "economics-problem": (c) => {
    const { X, Y, path, Axes } = plot([60, 30, 250, 230], [0, 10], [0, 10]);
    const ppc = (r) => (x) => r * Math.sqrt(Math.max(0, 1 - (x / r) ** 2));
    return (
      <svg viewBox={V}><Defs c={c} />
        <Axes step={1} every={20} xl="good B" yl="good A" />
        <path d={path(ppc(8), 0, 8)} fill="none" stroke={c} strokeWidth="3.2" filter="url(#ps)" />
        <path d={path(ppc(9.6), 0, 9.6)} fill="none" stroke={c} strokeWidth="2" strokeDasharray="7 5" />
        <Dot x={X(4)} y={Y(ppc(8)(4))} color={c} /><T x={X(4) + 10} y={Y(ppc(8)(4)) - 8} s={15} fill={c}>A</T>
        <Dot x={X(3)} y={Y(3)} color="#c0702a" /><T x={X(3) + 10} y={Y(3) + 4} s={15} fill="#c0702a">B</T>
        <Dot x={X(8)} y={Y(8)} color="#d0496d" /><T x={X(8) + 10} y={Y(8) + 4} s={15} fill="#d0496d">C</T>
        <Label x={390} y={6} w={280} color={c} title="A: on the curve" lines={["all resources fully used"]} />
        <Label x={390} y={72} w={280} color="#c0702a" title="B: inside" lines={["unemployed or wasted resources"]} />
        <Label x={390} y={138} w={280} color="#d0496d" title="C: outside" lines={["unattainable for now"]} />
        <Label x={390} y={204} w={280} color={INK} title="dashed: growth" lines={["more or better resources"]} />
        <T x={60} y={300} s={13}>MOVING ALONG THE CURVE SHOWS THE OPPORTUNITY COST</T>
      </svg>
    );
  },
  "economics-allocation": (c) => {
    const { X, Y, path, Axes } = plot([60, 30, 280, 230], [0, 10], [0, 10]);
    return (
      <svg viewBox={V}><Defs c={c} />
        <Axes step={1} every={20} xl="Q" yl="P" />
        <path d={path((q) => 9 - 0.8 * q, 0.5, 9.5)} fill="none" stroke="#2a8fd6" strokeWidth="3" filter="url(#ps)" />
        <path d={path((q) => 1 + 0.8 * q, 0.5, 9.5)} fill="none" stroke="#d0496d" strokeWidth="3" filter="url(#ps)" />
        <path d={path((q) => 11 - 0.8 * q, 2.5, 10)} fill="none" stroke="#2a8fd6" strokeWidth="2" strokeDasharray="7 5" />
        <path d={`M${X(0)} ${Y(5)} H${X(5)} V${Y(0)} M${X(0)} ${Y(6)} H${X(6.25)} V${Y(0)}`} fill="none" stroke="#b8bec6" strokeDasharray="4 4" />
        <Dot x={X(5)} y={Y(5)} color={INK} /><Dot x={X(6.25)} y={Y(6)} color="#c0702a" />
        <T x={X(9.5) + 4} y={Y(1.4)} s={15} fill="#2a8fd6">D</T><T x={X(9.6) + 2} y={Y(8.8)} s={15} fill="#d0496d">S</T><T x={X(10) + 2} y={Y(3)} s={15} fill="#2a8fd6">D₂</T>
        <T x={X(0) - 6} y={Y(5) + 5} s={13} anchor="end">P₁</T><T x={X(0) - 6} y={Y(6) + 5} s={13} anchor="end">P₂</T>
        <Label x={390} y={6} w={280} color={INK} title="equilibrium" lines={["where demand meets supply"]} />
        <Label x={390} y={72} w={280} color="#c0702a" title="demand shifts right" lines={["higher price and quantity"]} />
        <Label x={390} y={138} w={280} color={c} title="PED = %ΔQd ÷ %ΔP" keep lines={["MORE THAN 1: ELASTIC"]} />
        <T x={390} y={240} s={13}>EXCESS DEMAND PUSHES PRICE UP;</T><T x={390} y={260} s={13}>EXCESS SUPPLY PUSHES IT DOWN</T>
      </svg>
    );
  },
  "business-marketing": (c) => {
    const { X, Y, path } = plot([40, 40, 420, 210], [0, 10], [0, 10]);
    const f = (t) => (t < 6.5 ? 8.6 / (1 + Math.exp(-1.4 * (t - 3.6))) : 8.6 / (1 + Math.exp(-1.4 * (t - 3.6))) - 1.6 * (t - 6.5) ** 1.4);
    return (
      <svg viewBox={V}><Defs c={c} />
        <path d={`M${X(0)} ${Y(0)} H${X(10) + 10} M${X(0)} ${Y(0)} V${Y(10) - 10}`} stroke={INK} strokeWidth="1.5" />
        <T x={X(10) + 8} y={Y(0) + 18} s={14} anchor="end">TIME</T><T x={X(0) + 8} y={Y(10) - 4} s={14}>SALES</T>
        {[2, 4.6, 6.6].map((t) => <path key={t} d={`M${X(t)} ${Y(10)} V${Y(0)}`} stroke="#d6d9de" strokeDasharray="4 4" />)}
        <path d={path(f, 0.2, 9.4)} fill="none" stroke={c} strokeWidth="3.2" filter="url(#ps)" />
        <path d={path((t) => f(6.6) + 0.9 * Math.sin(((t - 6.6) / 2.4) * Math.PI) , 6.6, 9)} fill="none" stroke="#c0702a" strokeWidth="2" strokeDasharray="7 5" />
        {[["INTRODUCTION", 1], ["GROWTH", 3.3], ["MATURITY", 5.6], ["DECLINE", 8.2]].map(([s, t]) => <T key={s} x={X(t)} y={Y(0) + 20} s={13} anchor="middle">{s}</T>)}
        <T x={X(8.5)} y={Y(8.2)} s={13} fill="#c0702a" anchor="middle">EXTENSION</T><T x={X(8.5)} y={Y(8.2) + 16} s={13} fill="#c0702a" anchor="middle">STRATEGY</T>
        <Label x={496} y={6} w={176} color={c} title="product" lines={["design, brand, life cycle"]} />
        <Label x={496} y={72} w={176} color={c} title="price" lines={["skimming, penetration"]} />
        <Label x={496} y={138} w={176} color={c} title="place" lines={["channels, e-commerce"]} />
        <Label x={496} y={204} w={176} color={c} title="promotion" lines={["adverts, offers, social"]} />
      </svg>
    );
  },
  "business-operations": (c) => {
    const { X, Y, path } = plot([70, 30, 300, 230], [0, 1600], [0, 16000]);
    return (
      <svg viewBox={V}><Defs c={c} />
        <path d={`M${X(0)} ${Y(0)} H${X(1600) + 10} M${X(0)} ${Y(0)} V${Y(16000) - 10}`} stroke={INK} strokeWidth="1.5" />
        {[400, 800, 1200, 1600].map((q) => <T key={q} x={X(q)} y={Y(0) + 18} s={12} anchor="middle" fill="#6b7682">{q}</T>)}
        {[4000, 8000, 12000, 16000].map((v) => <T key={v} x={X(0) - 6} y={Y(v) + 4} s={12} anchor="end" fill="#6b7682">{v / 1000}k</T>)}
        <path d={`M${X(1000)} ${Y(10000)} L${X(1600)} ${Y(16000)} L${X(1600)} ${Y(12400)} Z`} fill="#dff3e4" />
        <path d={`M${X(0)} ${Y(0)} L${X(1000)} ${Y(10000)} L${X(0)} ${Y(6000)} Z`} fill="#fde6ec" />
        <path d={path(() => 6000)} fill="none" stroke="#9aa5b1" strokeWidth="2" strokeDasharray="6 4" />
        <path d={path((q) => 6000 + 4 * q)} fill="none" stroke="#d0496d" strokeWidth="3" />
        <path d={path((q) => 10 * q)} fill="none" stroke={c} strokeWidth="3" />
        <Dot x={X(1000)} y={Y(10000)} color={INK} />
        <T x={X(1450)} y={Y(15000)} s={13} fill={c} anchor="end">REVENUE</T><T x={X(1600)} y={Y(12400) + 18} s={13} fill="#d0496d" anchor="end">TOTAL COST</T><T x={X(1600)} y={Y(6000) - 6} s={13} fill="#6b7682" anchor="end">FIXED COST</T>
        <T x={X(1380)} y={Y(12750)} s={12} fill="#3f9d5a" anchor="middle">PROFIT</T><T x={X(300)} y={Y(5000)} s={13} fill="#d0496d" anchor="middle">LOSS</T>
        <Label x={400} y={6} w={270} color={INK} title="break even = 1000 units" lines={["6000 ÷ (10 - 4)"]} />
        <Label x={400} y={82} w={270} color={c} title="price 10, variable cost 4" lines={["contribution 6 per unit"]} />
        <Label x={400} y={158} w={270} color="#3f9d5a" title="margin of safety" lines={["actual output minus break even"]} />
        <T x={70} y={300} s={13}>OUTPUT (UNITS)</T>
      </svg>
    );
  },
  "history-league": timeline([["1920", "League begins work"], ["1921", "Åland Islands settled"], ["1923", "Corfu: Mussolini wins"], ["1925", "Bulgaria: war stopped"], ["1929", "The Depression"], ["1931", "Manchuria invaded"], ["1935", "Abyssinia invaded"]]),
  "history-collapse": timeline([["1933", "Hitler in power, leaves League"], ["1935", "Rearmament and conscription"], ["1936", "Rhineland remilitarised"], ["MAR 1938", "Anschluss with Austria"], ["SEP 1938", "Munich: Sudetenland given"], ["MAR 1939", "Rest of Czechoslovakia taken"], ["AUG 1939", "Nazi-Soviet Pact"], ["SEP 1939", "Poland invaded: war"]]),
  "history-cold-war": timeline([["FEB 1945", "Yalta Conference"], ["JUL 1945", "Potsdam: tension grows"], ["1946", "Iron Curtain speech"], ["1947", "Truman Doctrine"], ["1947", "Marshall Plan"], ["1948", "Berlin Blockade begins"], ["1949", "Airlift wins, NATO formed"]]),
  "history-containment": timeline([["1950", "North Korea invades the South"], ["1953", "Korean armistice"], ["1961", "Bay of Pigs fails"], ["1962", "Cuban Missile Crisis"], ["1964", "Gulf of Tonkin"], ["1968", "Tet Offensive"], ["1973", "US troops leave Vietnam"], ["1975", "Saigon falls"]]),
  "history-eastern-europe": timeline([["1956", "Hungarian rising crushed"], ["1961", "Berlin Wall built"], ["1968", "Prague Spring crushed"], ["1980", "Solidarity in Poland"], ["1985", "Gorbachev's reforms"], ["1989", "Berlin Wall falls"], ["1991", "USSR breaks up"]]),
  "history-depth": timeline([["1919", "Weimar Republic set up"], ["1923", "Hyperinflation, Munich Putsch"], ["1924", "Dawes Plan, recovery"], ["1929", "Depression hits"], ["1933", "Chancellor, Enabling Act"], ["1934", "Night of the Long Knives"], ["1935", "Nuremberg Laws"], ["1938", "Kristallnacht"]]),
  "accounting-fundamentals": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <path d="M340 70 L320 250 H360 Z" fill="#c9cfd6" stroke={INK} strokeWidth="1.4" />
      <rect x="280" y="248" width="120" height="14" rx="4" fill="#9aa5b1" />
      <path d="M120 70 H560" stroke={INK} strokeWidth="4" strokeLinecap="round" /><circle cx="340" cy="70" r="7" fill={c} />
      <path d="M140 70 L100 150 M140 70 L180 150 M540 70 L500 150 M540 70 L580 150" stroke={INK} strokeWidth="1.2" />
      <g filter="url(#ps)"><path d="M70 150 H210 Q200 190 140 190 Q80 190 70 150 Z" fill="url(#pc)" stroke={c} strokeWidth="1.6" /><path d="M470 150 H610 Q600 190 540 190 Q480 190 470 150 Z" fill="url(#pc)" stroke={c} strokeWidth="1.6" /></g>
      <T x={140} y={216} s={17} fill={c} anchor="middle">ASSETS</T><T x={140} y={176} s={16} anchor="middle">50 000</T>
      <T x={540} y={216} s={15} fill={c} anchor="middle">CAPITAL 30 000</T><T x={540} y={236} s={15} fill={c} anchor="middle">+ LIABILITIES 20 000</T><T x={540} y={176} s={16} anchor="middle">50 000</T>
      <T x={340} y={40} s={19} fill={c} anchor="middle">ASSETS = CAPITAL + LIABILITIES</T>
      <T x={340} y={290} s={14} anchor="middle">EVERY TRANSACTION CHANGES TWO THINGS, SO THE SCALES STAY LEVEL</T>
    </svg>
  ),
  "dt-systems": (c) => {
    const gear = (cx, cy, r, n, col) => {
      const d = Array.from({ length: n * 2 }, (_, i) => { const a = (i / (n * 2)) * Math.PI * 2, rr = i % 2 ? r : r + 9; const a2 = ((i + 1) / (n * 2)) * Math.PI * 2; return `${i ? "L" : "M"}${(cx + rr * Math.cos(a)).toFixed(1)} ${(cy + rr * Math.sin(a)).toFixed(1)} L${(cx + rr * Math.cos(a2)).toFixed(1)} ${(cy + rr * Math.sin(a2)).toFixed(1)}`; }).join(" ") + " Z";
      return <g filter="url(#ps)"><path d={d} fill={col} stroke={INK} strokeWidth="1.2" strokeLinejoin="round" /><circle cx={cx} cy={cy} r={r * 0.25} fill="#fff" stroke={INK} /></g>;
    };
    return (
      <svg viewBox={V}><Defs c={c} />
        {gear(110, 150, 34, 10, "#ffd08a")}{gear(110 + 34 + 9 + 102 + 2, 150, 102, 30, "#d6f0c2")}
        <T x={110} y={226} s={15} anchor="middle">DRIVER</T><T x={110} y={244} s={14} anchor="middle">10 TEETH</T>
        <T x={257} y={286} s={15} anchor="middle">DRIVEN: 30 TEETH</T>
        <path d="M88 110 A30 30 0 0 1 132 110" fill="none" stroke="#c0702a" strokeWidth="2" /><path d="M128 104 l6 6 l-8 2" fill="none" stroke="#c0702a" strokeWidth="2" />
        <Label x={420} y={6} w={250} color={c} title="gear ratio 3 : 1" lines={["driven teeth ÷ driver teeth", "30 ÷ 10 = 3"]} />
        <Label x={420} y={96} w={250} color="#c0702a" title="what it means" lines={["driver turns 3 times for", "every 1 turn of the driven gear"]} />
        <Label x={420} y={186} w={250} color={INK} title="slower but more force" lines={["gears next to each other", "turn in opposite directions"]} />
      </svg>
    );
  },
};
