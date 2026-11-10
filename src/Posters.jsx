// Cheat sheets as one page illustrated posters: a title with subject tags, a one line summary,
// a hand drawn diagram with labelled callouts, then the key facts in taped boxes. All the text
// and drawings are Testiddle's own.

import { Mascot } from "./Mascot.jsx";

const INK = "#3b4654";
const HAND = "'Patrick Hand', 'Comic Sans MS', cursive";

/** Colours and the one line summary for each sheet. */
export const POSTER = {
  linear: { key: "Read the slope as the rate and b as the start, and always check the units.", color: "#2f7fd0", soft: "#e4f0fc", tagline: "A line is a starting value plus a constant rate of change", pose: "think" },
  systems: { key: "Line up the coefficients and eliminate. Parallel lines mean no solution.", color: "#7a5cd6", soft: "#efe9fc", tagline: "The solution is where every equation is true at the same time", pose: "read" },
  quadratics: { key: "The vertex sits halfway between the roots; the discriminant says how many roots there are.", color: "#d0496d", soft: "#fce8ee", tagline: "Every parabola has a vertex, an axis of symmetry and up to two roots", pose: "cheer" },
  exponential: { key: "Repeated percentage changes multiply. Up 10% then down 10% is not back to the start.", color: "#2a9d8f", soft: "#e3f6f2", tagline: "Linear adds the same amount. Exponential multiplies by the same factor", pose: "wave" },
  geometry: { key: "Spot the right triangle or the fraction of the circle, and the formula follows.", color: "#c0782f", soft: "#fdf0e1", tagline: "Most SAT geometry is a right triangle or a fraction of a circle", pose: "think" },
  stats: { key: "An outlier drags the mean but barely moves the median. Find the right total first.", color: "#3f9d5a", soft: "#e6f5e9", tagline: "Centre, spread and the right total: that is most of the marks", pose: "read" },
  boundaries: { key: "Never join two complete sentences with a comma alone.", color: "#2f7fd0", soft: "#e4f0fc", tagline: "Two complete sentences need more than a comma to join them", pose: "think" },
  agreement: { key: "Cross out the words between subject and verb, then match them.", color: "#c0782f", soft: "#fdf0e1", tagline: "Find the true subject first, then make everything else match it", pose: "read" },
  transitions: { key: "Say the link in your own words, such as but or so, then pick the choice that means it.", color: "#7a5cd6", soft: "#efe9fc", tagline: "Decide how the two ideas relate before you read the choices", pose: "wave" },
  words: { key: "Cover the choices, predict a word from the clues, then match its tone.", color: "#d0496d", soft: "#fce8ee", tagline: "The sentence around the blank tells you the word you need", pose: "think" },
  evidence: { key: "The right answer proves every part of the claim; true but off topic is wrong.", color: "#3f9d5a", soft: "#e6f5e9", tagline: "On topic is not enough: the answer must prove the exact claim", pose: "cheer" },
};

/* ---------- small drawing helpers ---------- */

const Label = ({ x, y, w, h = 30, color, title, lines = [], align = "middle" }) => (
  <g>
    <rect x={x} y={y} width={w} height={h + lines.length * 15} rx="6" fill="#fff" stroke={color} strokeWidth="1.2" />
    <rect x={x} y={y} width={w} height="22" rx="6" fill={color} opacity=".14" />
    <text x={align === "middle" ? x + w / 2 : x + 10} y={y + 16} textAnchor={align === "middle" ? "middle" : "start"} fontFamily={HAND} fontSize="14" fill={color} letterSpacing=".6">{title.toUpperCase()}</text>
    {lines.map((l, i) => <text key={l} x={align === "middle" ? x + w / 2 : x + 10} y={y + 38 + i * 15} textAnchor={align === "middle" ? "middle" : "start"} fontFamily={HAND} fontSize="12.5" fill={INK}>{l.toUpperCase()}</text>)}
  </g>
);
const Link = ({ d, color }) => {
  const nums = d.match(/-?\d+(\.\d+)?/g).map(Number);
  const [ex, ey] = nums.slice(-2); // the dot sits where the line meets the drawing
  return <g><path d={d} fill="none" stroke={color} strokeWidth="1.1" /><circle cx={ex} cy={ey} r="3" fill="#fff" stroke={color} strokeWidth="1.1" /></g>;
};
const Axes = ({ x0, y0, w, h, grid = true }) => (
  <g>
    {grid && Array.from({ length: Math.floor(w / 24) + 1 }, (_, i) => <path key={`v${i}`} d={`M${x0 + i * 24} ${y0 - h} V${y0}`} stroke="#dfe7f0" strokeWidth=".7" />)}
    {grid && Array.from({ length: Math.floor(h / 24) + 1 }, (_, i) => <path key={`h${i}`} d={`M${x0} ${y0 - i * 24} H${x0 + w}`} stroke="#dfe7f0" strokeWidth=".7" />)}
    <path d={`M${x0} ${y0} H${x0 + w + 8} M${x0} ${y0} V${y0 - h - 8}`} stroke={INK} strokeWidth="1.2" />
    <path d={`M${x0 + w + 8} ${y0} l-6 -3 v6 Z M${x0} ${y0 - h - 8} l-3 6 h6 Z`} fill={INK} />
    <text x={x0 + w + 12} y={y0 + 4} fontFamily={HAND} fontSize="13" fill={INK}>x</text><text x={x0 - 4} y={y0 - h - 14} fontFamily={HAND} fontSize="13" fill={INK}>y</text>
  </g>
);

/* ---------- one diagram per sheet ---------- */

const FIG = {
  linear: (c) => (
    <svg viewBox="0 0 640 300">
      <Axes x0={210} y0={262} w={216} h={216} />
      <path d="M210 214 L426 70" stroke={c} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M258 182 H330 V134" fill="none" stroke="#e09444" strokeWidth="1.6" strokeDasharray="5 4" />
      <text x="292" y="198" textAnchor="middle" fontFamily={HAND} fontSize="14" fill="#c0782f">RUN</text><text x="342" y="162" fontFamily={HAND} fontSize="14" fill="#c0782f">RISE</text>
      <circle cx="210" cy="214" r="5" fill="#fff" stroke={c} strokeWidth="2" />
      <text x="232" y="48" fontFamily={HAND} fontSize="22" fill={c}>y = mx + b</text>
      <Label x={10} y={120} w={170} color={c} title="y-intercept (b)" lines={["where the line", "crosses the y-axis"]} /><Link d="M180 160 C196 170 198 200 206 210" color={c} />
      <Label x={460} y={150} w={170} color="#c0782f" title="slope (m)" lines={["rise over run", "change in y / change in x"]} /><Link d="M460 190 C420 190 370 170 338 158" color="#c0782f" />
      <Label x={460} y={24} w={170} color={c} title="parallel" lines={["same slope,", "never meet"]} />
    </svg>
  ),
  systems: (c) => (
    <svg viewBox="0 0 640 300">
      <Axes x0={60} y0={262} w={216} h={216} />
      <path d="M60 230 L276 70" stroke={c} strokeWidth="2.4" strokeLinecap="round" /><path d="M60 90 L276 240" stroke="#2a9d8f" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="166" cy="152" r="7" fill="#ffe08a" stroke={INK} strokeWidth="1.2" />
      <Label x={190} y={10} w={180} color={c} title="one solution" lines={["the lines cross here:", "the point (x, y)"]} /><Link d="M190 56 C176 80 170 120 168 144" color={c} />
      <g transform="translate(400 30)"><rect width="220" height="110" rx="10" fill="#fff" stroke="#d6d9de" /><path d="M20 90 L120 20 M50 98 L150 28" stroke="#d0496d" strokeWidth="2.2" /><text x="160" y="50" fontFamily={HAND} fontSize="14" fill="#d0496d">NO</text><text x="160" y="68" fontFamily={HAND} fontSize="14" fill="#d0496d">SOLUTION</text><text x="20" y="22" fontFamily={HAND} fontSize="12" fill={INK}>SAME SLOPE</text></g>
      <g transform="translate(400 160)"><rect width="220" height="110" rx="10" fill="#fff" stroke="#d6d9de" /><path d="M20 90 L140 20" stroke="#3f9d5a" strokeWidth="5" opacity=".35" /><path d="M20 90 L140 20" stroke="#3f9d5a" strokeWidth="2" strokeDasharray="6 5" /><text x="150" y="50" fontFamily={HAND} fontSize="14" fill="#3f9d5a">INFINITELY</text><text x="150" y="68" fontFamily={HAND} fontSize="14" fill="#3f9d5a">MANY</text><text x="20" y="22" fontFamily={HAND} fontSize="12" fill={INK}>SAME LINE</text></g>
    </svg>
  ),
  quadratics: (c) => (
    <svg viewBox="0 0 640 300">
      <Axes x0={150} y0={240} w={300} h={200} grid={false} />
      <path d="M190 70 Q300 380 410 70" fill="none" stroke={c} strokeWidth="2.6" />
      <path d="M300 40 V270" stroke={INK} strokeWidth="1" strokeDasharray="5 5" />
      <circle cx="300" cy="225" r="6" fill="#ffe08a" stroke={INK} strokeWidth="1.2" />
      <circle cx="232" cy="150" r="5" fill="#fff" stroke={c} strokeWidth="2" /><circle cx="368" cy="150" r="5" fill="#fff" stroke={c} strokeWidth="2" />
      <path d="M150 150 H450" stroke={INK} strokeWidth="1.2" />
      <Label x={6} y={36} w={170} color={c} title="roots (zeros)" lines={["where y = 0", "solve ax² + bx + c = 0"]} /><Link d="M120 90 C160 110 210 130 228 146" color={c} />
      <Label x={470} y={190} w={160} color="#c0782f" title="vertex" lines={["x = -b / 2a", "turning point"]} /><Link d="M470 225 C420 230 340 226 307 225" color="#c0782f" />
      <Label x={470} y={40} w={160} color={INK} title="axis of symmetry" lines={["halfway between", "the roots"]} /><Link d="M470 80 C420 80 330 70 304 70" color={INK} />
      <text x="20" y="270" fontFamily={HAND} fontSize="14" fill={c}>a &gt; 0 OPENS UP, a &lt; 0 OPENS DOWN</text>
    </svg>
  ),
  exponential: (c) => (
    <svg viewBox="0 0 640 300">
      <Axes x0={80} y0={262} w={300} h={216} />
      <path d="M80 200 C200 196 290 160 380 50" fill="none" stroke={c} strokeWidth="2.6" />
      <path d="M80 200 C150 236 260 252 380 256" fill="none" stroke="#d0496d" strokeWidth="2.6" />
      <circle cx="80" cy="200" r="6" fill="#ffe08a" stroke={INK} strokeWidth="1.2" />
      <text x="300" y="70" fontFamily={HAND} fontSize="16" fill={c}>GROWTH</text><text x="300" y="244" fontFamily={HAND} fontSize="16" fill="#d0496d">DECAY</text>
      <Label x={420} y={20} w={210} color={c} title="growth" lines={["y = a(1 + r)ᵗ", "multiplier above 1"]} />
      <Label x={420} y={120} w={210} color="#d0496d" title="decay" lines={["y = a(1 - r)ᵗ", "multiplier between 0 and 1"]} />
      <Label x={420} y={220} w={210} h={24} color={INK} title="a = starting amount" lines={["where the curve starts"]} /><Link d="M420 250 C300 250 140 220 88 204" color={INK} />
    </svg>
  ),
  geometry: (c) => (
    <svg viewBox="0 0 640 300">
      <g transform="translate(20 40)"><path d="M10 200 H190 V40 Z" fill={`${c}22`} stroke={c} strokeWidth="2" /><path d="M176 200 V186 H190" fill="none" stroke={INK} strokeWidth="1.1" /><text x="100" y="222" textAnchor="middle" fontFamily={HAND} fontSize="15" fill={INK}>x√3</text><text x="200" y="124" fontFamily={HAND} fontSize="15" fill={INK}>x</text><text x="84" y="110" fontFamily={HAND} fontSize="15" fill={INK}>2x</text><text x="40" y="192" fontFamily={HAND} fontSize="13" fill={c}>30°</text><text x="166" y="66" fontFamily={HAND} fontSize="13" fill={c}>60°</text></g>
      <g transform="translate(250 40)"><path d="M10 200 H160 V50 Z" fill="#e3f6f2" stroke="#2a9d8f" strokeWidth="2" /><path d="M146 200 V186 H160" fill="none" stroke={INK} strokeWidth="1.1" /><text x="85" y="222" textAnchor="middle" fontFamily={HAND} fontSize="15" fill={INK}>x</text><text x="170" y="130" fontFamily={HAND} fontSize="15" fill={INK}>x</text><text x="60" y="114" fontFamily={HAND} fontSize="15" fill={INK}>x√2</text><text x="40" y="192" fontFamily={HAND} fontSize="13" fill="#2a9d8f">45°</text></g>
      <g transform="translate(520 150)"><circle r="80" fill="#fff" stroke={INK} strokeWidth="1.6" /><path d="M0 0 L80 0 A80 80 0 0 0 40 -69 Z" fill="#ffe08a" stroke="#c0782f" strokeWidth="1.4" /><text x="44" y="-20" fontFamily={HAND} fontSize="13" fill="#c0782f">θ</text><text x="34" y="16" fontFamily={HAND} fontSize="13" fill={INK}>r</text><circle r="3" fill={INK} /><text x="-60" y="104" fontFamily={HAND} fontSize="13" fill={INK}>SECTOR = θ/360 × πr²</text></g>
      <text x="20" y="22" fontFamily={HAND} fontSize="16" fill={c}>30-60-90</text><text x="270" y="22" fontFamily={HAND} fontSize="16" fill="#2a9d8f">45-45-90</text>
    </svg>
  ),
  stats: (c) => (
    <svg viewBox="0 0 640 300">
      <path d="M40 220 H600" stroke={INK} strokeWidth="1.2" />
      {[2, 3, 3, 4, 4, 4, 5, 5, 6, 14].map((v, i, all) => { const n = all.slice(0, i).filter((x) => x === v).length; return <circle key={i} cx={40 + v * 38} cy={206 - n * 22} r="9" fill={v === 14 ? "#f7b0bd" : "#bfe6c9"} stroke={v === 14 ? "#d0496d" : c} strokeWidth="1.3" />; })}
      {Array.from({ length: 15 }, (_, i) => <text key={i} x={40 + i * 38} y="240" textAnchor="middle" fontFamily={HAND} fontSize="12" fill={INK}>{i}</text>)}
      <path d="M192 120 V222" stroke={c} strokeWidth="2" strokeDasharray="5 4" /><path d="M230 90 V222" stroke="#d0496d" strokeWidth="2" strokeDasharray="5 4" />
      <Label x={70} y={50} w={130} h={24} color={c} title="median 4" lines={["barely moves"]} />
      <Label x={250} y={40} w={150} h={24} color="#d0496d" title="mean 5" lines={["pulled by outlier"]} />
      <Label x={450} y={100} w={170} color="#d0496d" title="outlier (14)" lines={["far from the rest:", "moves the mean most"]} /><Link d="M540 160 C560 180 572 190 572 196" color="#d0496d" />
    </svg>
  ),
  boundaries: (c) => {
    const rows = [["; (SEMICOLON)", true], [", AND / , BUT / , SO", true], [". (FULL STOP)", true], [", (COMMA ALONE)", false]];
    return (
      <svg viewBox="0 0 640 300">
        {rows.map(([joint, ok], i) => (
          <g key={joint} transform={`translate(10 ${20 + i * 68})`}>
            <rect width="200" height="44" rx="8" fill="#e4f0fc" stroke={c} /><text x="100" y="28" textAnchor="middle" fontFamily={HAND} fontSize="15" fill={c}>COMPLETE SENTENCE</text>
            <rect x="210" width="180" height="44" rx="22" fill={ok ? "#e6f5e9" : "#fce8ee"} stroke={ok ? "#3f9d5a" : "#d0496d"} /><text x="300" y="28" textAnchor="middle" fontFamily={HAND} fontSize="15" fill={ok ? "#3f9d5a" : "#d0496d"}>{joint}</text>
            <rect x="400" width="200" height="44" rx="8" fill="#e4f0fc" stroke={c} /><text x="500" y="28" textAnchor="middle" fontFamily={HAND} fontSize="15" fill={c}>COMPLETE SENTENCE</text>
            <text x="612" y="30" fontFamily={HAND} fontSize="22" fill={ok ? "#3f9d5a" : "#d0496d"}>{ok ? "✓" : "✗"}</text>
          </g>
        ))}
      </svg>
    );
  },
  agreement: (c) => (
    <svg viewBox="0 0 640 300">
      <text x="20" y="40" fontFamily={HAND} fontSize="15" fill={INK}>FIND THE TRUE SUBJECT, IGNORE THE WORDS IN BETWEEN:</text>
      <g transform="translate(20 80)">
        <rect width="150" height="54" rx="8" fill="#fdf0e1" stroke={c} strokeWidth="1.4" /><text x="75" y="34" textAnchor="middle" fontFamily={HAND} fontSize="20" fill={c}>THE BOX</text>
        <rect x="160" width="250" height="54" rx="8" fill="#f3f4f6" stroke="#b8bec6" strokeDasharray="5 4" /><text x="285" y="34" textAnchor="middle" fontFamily={HAND} fontSize="18" fill="#9aa2ac">OF OLD PHOTOS</text><path d="M170 27 H400" stroke="#d0496d" strokeWidth="2" />
        <rect x="420" width="180" height="54" rx="8" fill="#e6f5e9" stroke="#3f9d5a" strokeWidth="1.4" /><text x="510" y="34" textAnchor="middle" fontFamily={HAND} fontSize="20" fill="#3f9d5a">IS HEAVY ✓</text>
        <path d="M75 60 C75 110 510 110 510 60" fill="none" stroke={c} strokeWidth="1.6" strokeDasharray="6 5" /><text x="292" y="120" textAnchor="middle" fontFamily={HAND} fontSize="14" fill={c}>SINGULAR SUBJECT → SINGULAR VERB</text>
      </g>
      <Label x={20} y={220} w={180} h={24} color={c} title="each, every, one" lines={["are singular"]} />
      <Label x={220} y={220} w={180} h={24} color="#2f7fd0" title="a company" lines={["takes it / its"]} />
      <Label x={420} y={220} w={200} h={24} color="#3f9d5a" title="earlier past" lines={["had + past participle"]} />
    </svg>
  ),
  transitions: () => {
    const signs = [["CONTRAST", "however, yet", "#d0496d", -4], ["ADDITION", "moreover, also", "#2f7fd0", 3], ["RESULT", "therefore, thus", "#3f9d5a", -3], ["EXAMPLE", "for instance", "#c0782f", 4]];
    return (
      <svg viewBox="0 0 640 300">
        <path d="M320 40 V290" stroke="#a37548" strokeWidth="8" strokeLinecap="round" /><path d="M300 290 H340" stroke="#a37548" strokeWidth="6" strokeLinecap="round" />
        {signs.map(([t, ex, col, rot], i) => {
          const left = i % 2 === 0, y = 40 + i * 58;
          return (
            <g key={t} transform={`rotate(${rot} 320 ${y + 20})`}>
              <path d={left ? `M326 ${y} H130 L106 ${y + 22} L130 ${y + 44} H326 Z` : `M314 ${y} H510 L534 ${y + 22} L510 ${y + 44} H314 Z`} fill="#fff" stroke={col} strokeWidth="1.6" />
              <text x={left ? 220 : 420} y={y + 20} textAnchor="middle" fontFamily={HAND} fontSize="17" fill={col}>{t}</text>
              <text x={left ? 220 : 420} y={y + 37} textAnchor="middle" fontFamily={HAND} fontSize="13" fill={INK}>{ex.toUpperCase()}</text>
            </g>
          );
        })}
      </svg>
    );
  },
  words: (c) => (
    <svg viewBox="0 0 640 300">
      <rect x="20" y="70" width="600" height="80" rx="12" fill="#fff" stroke="#d6d9de" />
      <text x="40" y="104" fontFamily={HAND} fontSize="17" fill={INK}>THE CRITIC WAS NOT IMPRESSED;</text>
      <rect x="296" y="86" width="98" height="26" rx="5" fill="#fce8ee" />
      <text x="300" y="104" fontFamily={HAND} fontSize="17" fill={c}>HOWEVER,</text>
      <text x="398" y="104" fontFamily={HAND} fontSize="17" fill={INK}>THE CROWD WAS</text>
      <path d="M40 132 H140" stroke={INK} strokeWidth="1.6" /><text x="146" y="136" fontFamily={HAND} fontSize="17" fill={INK}>.</text>
      <g transform="translate(300 98) rotate(-25)"><circle r="40" fill="#fff" fillOpacity=".25" stroke={INK} strokeWidth="3" /><path d="M28 28 L60 60" stroke="#a37548" strokeWidth="8" strokeLinecap="round" /></g>
      <Label x={60} y={180} w={240} color={c} title="clue word" lines={["however = the opposite", "of not impressed"]} />
      <Label x={340} y={180} w={260} color="#3f9d5a" title="predict first" lines={["delighted? thrilled?", "then match a choice"]} />
    </svg>
  ),
  evidence: (c) => (
    <svg viewBox="0 0 640 300">
      <Axes x0={60} y0={250} w={280} h={200} grid={false} />
      {[[80, 90, "#bfe6c9"], [150, 140, "#bfe6c9"], [220, 180, c + "88"], [290, 120, "#bfe6c9"]].map(([x, h, f], i) => <g key={i}><rect x={x} y={250 - h} width="44" height={h} rx="4" fill={f} stroke={c} strokeWidth="1.2" /><text x={x + 22} y="270" textAnchor="middle" fontFamily={HAND} fontSize="13" fill={INK}>{["2021", "2022", "2023", "2024"][i]}</text></g>)}
      <text x="242" y={60} textAnchor="middle" fontFamily={HAND} fontSize="13" fill={c}>PEAK</text>
      <Label x={380} y={30} w={240} color={INK} title="claim" lines={["visits peaked in 2023"]} h={24} />
      <Label x={380} y={110} w={240} color="#3f9d5a" title="✓ supports it" lines={["2023 is the tallest bar"]} h={24} />
      <Label x={380} y={190} w={240} color="#d0496d" title="✗ true but off topic" lines={["visits rose in 2022"]} h={24} />
      <Link d="M380 136 C330 120 290 90 268 78" color="#3f9d5a" />
    </svg>
  ),
};

const DECOR = ["tape", "pin", "fold", "tape"];

export function SheetPoster({ sheet }) {
  const p = POSTER[sheet.id] || POSTER.linear;
  const fig = FIG[sheet.id];
  return (
    <article className="poster" style={{ "--pc": p.color, "--ps": p.soft }}>
      <header className="poster-head">
        <span className="poster-chip">SAT</span><span className="poster-chip soft">{sheet.subject === "Math" ? "MATH" : "READING & WRITING"}</span>
        <h2>{sheet.title}</h2><span className="poster-rule" />
        <Mascot size={70} pose={p.pose} />
      </header>
      <p className="poster-tag"><span>★</span>{p.tagline}<span>★</span></p>
      {fig && <section className="poster-fig">{fig(p.color)}</section>}
      <div className="poster-grid">
        {sheet.blocks.map(([h, lines], i) => (
          <section key={h} className={"poster-box " + DECOR[i % DECOR.length] + (i === 1 ? " dashed" : "")} style={{ "--r": `${((i % 3) - 1) * 0.5}deg` }}>
            <h3>{i + 1}. {h}</h3>
            <ul>{lines.map((l) => <li key={l}>{l}</li>)}</ul>
          </section>
        ))}
      </div>
      <section className="poster-key"><div><h3>Key point</h3><p>{p.key}</p></div><Mascot size={78} pose={p.pose === "cheer" ? "wave" : "cheer"} /></section>
      <footer className="poster-foot"><span>Find notes, quizzes, flashcards and full tests on <b>Testiddle</b></span><Mascot size={40} pose="sit" /></footer>
    </article>
  );
}

/** A small preview of a sheet's diagram for the list. */
export function SheetThumb({ sheet }) {
  const p = POSTER[sheet.id] || POSTER.linear;
  return <span className="poster-thumb" style={{ "--pc": p.color, "--ps": p.soft }}><span className="poster-thumb-title">{sheet.title}</span>{FIG[sheet.id] && FIG[sheet.id](p.color)}</span>;
}
