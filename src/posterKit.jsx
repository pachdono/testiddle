// Drawing helpers shared by every cheat sheet diagram: padded labels, curved arrows that stop
// short, markers, shadows and real maths axes.

export const INK = "#3b4654";
export const HAND = "'Patrick Hand', 'Comic Sans MS', cursive";

/* ---------- small drawing helpers ---------- */

export const Label = ({ x, y, w, color, title, lines = [], align = "middle", keep = false }) => {
  const up = (s) => (keep ? s : s.toUpperCase());
  const h = 28 + lines.length * 18 + 12; // header, one row per line, and room below the last one
  const tx = align === "middle" ? x + w / 2 : x + 12, anchor = align === "middle" ? "middle" : "start";
  return (
    <g filter="url(#ps)">
      <rect x={x} y={y} width={w} height={h} rx="8" fill="#fff" stroke={color} strokeWidth="1.4" />
      <path d={`M${x + 1} ${y + 27} V${y + 8} Q${x + 1} ${y + 1} ${x + 8} ${y + 1} H${x + w - 8} Q${x + w - 1} ${y + 1} ${x + w - 1} ${y + 8} V${y + 27} Z`} fill={color} opacity=".14" />
      <text x={tx} y={y + 19} textAnchor={anchor} fontFamily={HAND} fontSize="16" fill={color} letterSpacing=".6">{up(title)}</text>
      {lines.map((l, i) => <text key={l} x={tx} y={y + 46 + i * 18} textAnchor={anchor} fontFamily={HAND} fontSize="15" fill={INK}>{up(l)}</text>)}
    </g>
  );
};
/** A thin curved arrow from a label to what it describes, stopping just short of it. */
export const Link = ({ from, to, color, bend = 0, gap = 9 }) => {
  const [x1, y1] = from, [x2, y2] = to;
  const mx = (x1 + x2) / 2 + bend, my = (y1 + y2) / 2 - Math.abs(bend) / 2;
  const dx = x2 - mx, dy = y2 - my, len = Math.hypot(dx, dy) || 1;
  const ex = x2 - (dx / len) * gap, ey = y2 - (dy / len) * gap;
  const ang = Math.atan2(ey - my, ex - mx), hl = 8, hw = 0.45;
  const h1 = [ex - hl * Math.cos(ang - hw), ey - hl * Math.sin(ang - hw)], h2 = [ex - hl * Math.cos(ang + hw), ey - hl * Math.sin(ang + hw)];
  return <g fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d={`M${x1} ${y1} Q${mx} ${my} ${ex} ${ey}`} /><path d={`M${h1[0]} ${h1[1]} L${ex} ${ey} L${h2[0]} ${h2[1]}`} /></g>;
};

/** A clean marker for an important point. */
export const Dot = ({ x, y, color, r = 6 }) => <g filter="url(#ps)"><circle cx={x} cy={y} r={r} fill={color} stroke="#fff" strokeWidth="2" /></g>;

/** Shared shadows and shine, so drawings sit on the page with a little depth. */
export const Defs = ({ c }) => (
  <defs>
    <filter id="ps" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="1.6" dy="2.6" stdDeviation="1.4" floodColor="#3b4654" floodOpacity=".18" /></filter>
    <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".7" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
    <linearGradient id="pc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={c} stopOpacity=".28" /><stop offset="1" stopColor={c} stopOpacity=".08" /></linearGradient>
  </defs>
);

/** Real axes: maps maths coordinates to the drawing, with a grid and numbered ticks. */
export function plot(box, xr, yr) {
  const [px, py, pw, ph] = box, [x0, x1] = xr, [y0, y1] = yr;
  const X = (x) => px + ((x - x0) / (x1 - x0)) * pw;
  const Y = (y) => py + ph - ((y - y0) / (y1 - y0)) * ph;
  const path = (f, a = x0, b = x1, n = 80) => Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return `${i ? "L" : "M"}${X(x).toFixed(1)} ${Y(f(x)).toFixed(1)}`; }).join(" ");
  const Axes = ({ step = 1, every = 1, xl = "x", yl = "y" }) => {
    const xs = [], ys = [];
    for (let v = Math.ceil(x0); v <= x1; v += step) xs.push(v);
    for (let v = Math.ceil(y0); v <= y1; v += step) ys.push(v);
    const ax = Y(Math.max(y0, Math.min(0, y1))), ay = X(Math.max(x0, Math.min(0, x1)));
    return (
      <g>
        <rect x={px} y={py} width={pw} height={ph} fill="#fbfdff" />
        {xs.map((v) => <path key={`x${v}`} d={`M${X(v)} ${py} V${py + ph}`} stroke="#e3eaf2" strokeWidth=".8" />)}
        {ys.map((v) => <path key={`y${v}`} d={`M${px} ${Y(v)} H${px + pw}`} stroke="#e3eaf2" strokeWidth=".8" />)}
        <path d={`M${px} ${ax} H${px + pw + 10} M${ay} ${py + ph} V${py - 10}`} stroke={INK} strokeWidth="1.5" />
        <path d={`M${px + pw + 10} ${ax} l-7 -3.5 v7 Z M${ay} ${py - 10} l-3.5 7 h7 Z`} fill={INK} />
        {xs.filter((v) => v !== 0 && v % every === 0).map((v) => <text key={`tx${v}`} x={X(v)} y={ax + 17} textAnchor="middle" fontFamily={HAND} fontSize="13" fill="#6b7682">{v}</text>)}
        {ys.filter((v) => v !== 0 && v % every === 0).map((v) => <text key={`ty${v}`} x={ay - 8} y={Y(v) + 4} textAnchor="end" fontFamily={HAND} fontSize="13" fill="#6b7682">{v}</text>)}
        <text x={ay - 8} y={ax + 17} textAnchor="end" fontFamily={HAND} fontSize="13" fill="#6b7682">0</text>
        <text x={px + pw + 16} y={ax + 5} fontFamily={HAND} fontSize="16" fill={INK}>{xl}</text><text x={ay + 8} y={py - 4} fontFamily={HAND} fontSize="16" fill={INK}>{yl}</text>
      </g>
    );
  };
  return { X, Y, path, Axes };
}


/** Hand lettered text. */
export const T = ({ x, y, s = 15, fill = INK, anchor = "start", children, w = 400 }) => <text x={x} y={y} fontFamily={HAND} fontSize={s} fill={fill} textAnchor={anchor} fontWeight={w}>{children}</text>;

/** A straight arrow from one point to another. */
export const Arrow = ({ from, to, color = INK, width = 1.6, head = 8 }) => {
  const [x1, y1] = from, [x2, y2] = to, a = Math.atan2(y2 - y1, x2 - x1);
  const h1 = [x2 - head * Math.cos(a - 0.45), y2 - head * Math.sin(a - 0.45)], h2 = [x2 - head * Math.cos(a + 0.45), y2 - head * Math.sin(a + 0.45)];
  return <g stroke={color} strokeWidth={width} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={`M${x1} ${y1} L${x2} ${y2}`} /><path d={`M${h1[0]} ${h1[1]} L${x2} ${y2} L${h2[0]} ${h2[1]}`} /></g>;
};

/** A rounded box with a short centred caption, for flow diagrams. */
export const Box = ({ x, y, w, h = 44, color = INK, fill = "#fff", children, s = 15 }) => (
  <g filter="url(#ps)"><rect x={x} y={y} width={w} height={h} rx="9" fill={fill} stroke={color} strokeWidth="1.4" />
    <text x={x + w / 2} y={y + h / 2 + s / 3} textAnchor="middle" fontFamily={HAND} fontSize={s} fill={color}>{children}</text></g>
);
