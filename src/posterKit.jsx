// Drawing helpers shared by every cheat sheet diagram: padded labels, curved arrows that stop
// short, markers, shadows and real maths axes.

export const INK = "#3b4654";
export const HAND = "'Patrick Hand', 'Comic Sans MS', cursive";

/* ---------- small drawing helpers ---------- */

export const Label = ({ x, y, w, color, title, lines = [], align = "middle", keep = false, shift = 0 }) => {
  const up = (s) => (keep ? s : s.toUpperCase());
  const h = 28 + lines.length * 18 + 12; // header, one row per line, and room below the last one
  const tx = align === "middle" ? x + w / 2 : x + 12, anchor = align === "middle" ? "middle" : "start";
  const hx = tx + shift;
  return (
    <g filter="url(#ps)">
      <rect x={x} y={y} width={w} height={h} rx="8" fill="#fff" stroke={color} strokeWidth="1.4" />
      <path d={`M${x + 1} ${y + 27} V${y + 8} Q${x + 1} ${y + 1} ${x + 8} ${y + 1} H${x + w - 8} Q${x + w - 1} ${y + 1} ${x + w - 1} ${y + 8} V${y + 27} Z`} fill={color} opacity=".14" />
      <text x={hx} y={y + 19} textAnchor={anchor} fontFamily={HAND} fontSize="16" fill={color} letterSpacing=".6">{up(title)}</text>
      {lines.map((l, i) => <text key={i} x={tx} y={y + 46 + i * 18} textAnchor={anchor} fontFamily={HAND} fontSize="15" fill={INK}>{up(l)}</text>)}
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

/** A darker shade of a colour, for drawing a face in the object's own ink. */
const shade = (hex, f = 0.45) => {
  if (!/^#[0-9a-f]{6}$/i.test(hex || "")) return "#2b2f36";
  const n = parseInt(hex.slice(1), 16), c = [n >> 16, (n >> 8) & 255, n & 255].map((v) => Math.round(v * (1 - f)));
  return `#${c.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
};

/** A small character face for diagrams, in the style of Cognito's cells: outlined oval eyes with
 * pupils, eyelids in the object's own colour, brows that set the mood, and a small mouth, all
 * drawn in a darker shade of the object. r is the object's radius, skin its fill colour.
 * Moods: chill, determined, dead, happy, sleepy, surprised, smug, worried. Faces sit a little
 * above centre and stay small so they never hide what the diagram shows. */
export const Face = ({ x, y, r, skin = "#f2c9a0", mood = "chill", look = 0.3, blush = false }) => {
  const k = Math.max(r, 5), ink = shade(skin), sw = Math.max(0.7, k * 0.05);
  const ex = k * 0.24, ey = y - k * 0.14, rx = k * 0.12, ry = k * 0.15, my = y + k * 0.2, w = k * 0.13;
  const line = { fill: "none", stroke: ink, strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round" };
  const eye = (cx, lid = 0, lookY = 0) => (
    <g>
      <ellipse cx={cx} cy={ey} rx={rx} ry={ry} fill="#fff" stroke={ink} strokeWidth={sw} />
      <circle cx={cx + rx * look * 0.6} cy={ey + ry * (0.15 + lookY)} r={rx * 0.5} fill={ink} />
      {lid > 0 && (() => {
        // the lid covers only the top of the eye: the part of the ellipse above the lid line
        const ly = ey - ry + 2 * ry * lid, hw = rx * Math.sqrt(Math.max(0, 1 - ((ly - ey) / ry) ** 2));
        return <g><path d={`M${cx - hw} ${ly} A${rx} ${ry} 0 ${ly > ey ? 1 : 0} 1 ${cx + hw} ${ly} Z`} fill={tint(skin, 0.15)} /><path d={`M${cx - hw - sw * 0.6} ${ly} H${cx + hw + sw * 0.6}`} {...line} /><ellipse cx={cx} cy={ey} rx={rx} ry={ry} fill="none" stroke={ink} strokeWidth={sw} /></g>;
      })()}
    </g>
  );
  const cross = (cx) => <g><circle cx={cx} cy={ey} r={ry} fill="#fff" stroke={ink} strokeWidth={sw} /><path d={`M${cx - rx * 0.55} ${ey - rx * 0.55} L${cx + rx * 0.55} ${ey + rx * 0.55} M${cx + rx * 0.55} ${ey - rx * 0.55} L${cx - rx * 0.55} ${ey + rx * 0.55}`} {...line} /></g>;
  const arc = (cx, up) => <path d={`M${cx - rx} ${ey + (up ? ry * 0.3 : -ry * 0.1)} Q${cx} ${ey + (up ? -ry * 0.9 : ry * 0.8)} ${cx + rx} ${ey + (up ? ry * 0.3 : -ry * 0.1)}`} {...line} />;
  const brow = (cx, tilt) => <path d={`M${cx - rx * 1.1} ${ey - ry * 1.5 + tilt} L${cx + rx * 1.1} ${ey - ry * 1.5 - tilt}`} {...line} />;
  const L = x - ex, Rr = x + ex;
  const faces = {
    chill: <g>{eye(L, 0.45)}{eye(Rr, 0.45)}{brow(Rr, -ry * 0.25)}<path d={`M${x - w * 0.7} ${my} Q${x} ${my + w * 0.5} ${x + w * 0.7} ${my - w * 0.1}`} {...line} /></g>,
    determined: <g>{eye(L, 0.3)}{eye(Rr, 0.3)}{brow(L, -ry * 0.45)}{brow(Rr, ry * 0.45)}<path d={`M${x - w * 0.7} ${my + w * 0.2} Q${x} ${my - w * 0.15} ${x + w * 0.7} ${my + w * 0.2}`} {...line} /></g>,
    dead: <g>{cross(L)}{cross(Rr)}<path d={`M${x - w * 0.8} ${my} H${x + w * 0.8}`} {...line} /><path d={`M${x} ${my} q${w * 0.1} ${w * 1.1} ${w * 0.7} ${w * 0.9} q${w * 0.2} -${w * 0.5} 0 -${w * 0.9}`} fill="#e8768a" stroke={ink} strokeWidth={sw * 0.8} /></g>,
    happy: <g>{arc(L, true)}{arc(Rr, true)}<path d={`M${x - w} ${my - w * 0.1} Q${x} ${my + w * 1.2} ${x + w} ${my - w * 0.1} Z`} fill={ink} /></g>,
    sleepy: <g>{arc(L, false)}{arc(Rr, false)}<ellipse cx={x + w * 0.2} cy={my + w * 0.2} rx={w * 0.35} ry={w * 0.45} fill="none" stroke={ink} strokeWidth={sw} /><text x={x + k * 0.55} y={y - k * 0.45} fontFamily={HAND} fontSize={Math.max(6, k * 0.35)} fill={ink}>z</text></g>,
    surprised: <g>{eye(L, 0, -0.2)}{eye(Rr, 0, -0.2)}{brow(L, ry * 0.3)}{brow(Rr, -ry * 0.3)}<ellipse cx={x} cy={my + w * 0.2} rx={w * 0.4} ry={w * 0.55} fill={ink} /></g>,
    smug: <g>{eye(L, 0.55)}{eye(Rr, 0.55)}{brow(L, ry * 0.2)}<path d={`M${x - w * 0.6} ${my + w * 0.25} Q${x + w * 0.3} ${my + w * 0.6} ${x + w} ${my - w * 0.35}`} {...line} /></g>,
    worried: <g>{eye(L, 0, 0.1)}{eye(Rr, 0, 0.1)}{brow(L, ry * 0.45)}{brow(Rr, -ry * 0.45)}<path d={`M${x - w} ${my + w * 0.3} q${w * 0.5} -${w * 0.5} ${w} 0 q${w * 0.5} ${w * 0.5} ${w} 0`} {...line} /></g>,
  };
  return (
    <g pointerEvents="none">
      {faces[mood] || faces.chill}
      {blush && <><ellipse cx={L - rx * 0.4} cy={my - w * 0.2} rx={rx * 0.9} ry={rx * 0.45} fill="#f28b9b" opacity=".4" /><ellipse cx={Rr + rx * 0.4} cy={my - w * 0.2} rx={rx * 0.9} ry={rx * 0.45} fill="#f28b9b" opacity=".4" /></>}
    </g>
  );
};

/** A lighter tint of a colour, for highlights. */
export const tint = (hex, f = 0.45) => {
  if (!/^#[0-9a-f]{6}$/i.test(hex || "")) return "#ffffff";
  const n = parseInt(hex.slice(1), 16), c = [n >> 16, (n >> 8) & 255, n & 255].map((v) => Math.round(v + (255 - v) * f));
  return `#${c.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
};
export const darken = (hex, f = 0.25) => shade(hex, f);

let uid = 0;
const nextId = (p) => `${p}${++uid}`;

/** A shaded sphere: lit from the top left, darker towards the bottom right, with a highlight,
 * a rim and a soft shadow on the ground beneath. Use it for anything really round. */
export const Ball = ({ x, y, r, fill, stroke = INK, sw = 1.2, shadow = true, children }) => {
  const id = nextId("ball");
  return (
    <g>
      <defs><radialGradient id={id} cx="34%" cy="30%" r="78%"><stop offset="0" stopColor={tint(fill, 0.55)} /><stop offset=".5" stopColor={fill} /><stop offset="1" stopColor={darken(fill, 0.28)} /></radialGradient></defs>
      {shadow && <ellipse cx={x + r * 0.15} cy={y + r * 1.04} rx={r * 0.8} ry={r * 0.16} fill="#3b4654" opacity=".12" />}
      <circle cx={x} cy={y} r={r} fill={`url(#${id})`} stroke={stroke} strokeWidth={sw} />
      <ellipse cx={x - r * 0.38} cy={y - r * 0.42} rx={r * 0.22} ry={r * 0.13} fill="#fff" opacity=".7" transform={`rotate(-35 ${x - r * 0.38} ${y - r * 0.42})`} />
      {children}
    </g>
  );
};

/** A box seen from slightly above and to the right: front face, lighter top, darker side. The
 * front face is x, y, w, h; d is the depth drawn at about 30°. Children draw on the front face. */
export const Block = ({ x, y, w, h, d = 14, fill, stroke = INK, sw = 1.2, rx = 4, children }) => {
  const dx = d * 0.87, dy = d * 0.5;
  return (
    <g strokeLinejoin="round">
      <path d={`M${x} ${y} L${x + dx} ${y - dy} H${x + w + dx} L${x + w} ${y} Z`} fill={tint(fill, 0.35)} stroke={stroke} strokeWidth={sw} />
      <path d={`M${x + w} ${y} L${x + w + dx} ${y - dy} V${y + h - dy} L${x + w} ${y + h} Z`} fill={darken(fill, 0.18)} stroke={stroke} strokeWidth={sw} />
      <rect x={x} y={y} width={w} height={h} rx={rx} fill={fill} stroke={stroke} strokeWidth={sw} />
      {children}
    </g>
  );
};

/** A gradient that makes a flat shape look like a cylinder (lit from the left). Returns the
 * fill string and the <defs> element to place before use. */
export const cylinderFill = (fill) => {
  const id = nextId("cyl");
  return [`url(#${id})`, <defs key={id}><linearGradient id={id} x1="0" x2="1"><stop offset="0" stopColor={darken(fill, 0.12)} /><stop offset=".3" stopColor={tint(fill, 0.4)} /><stop offset=".65" stopColor={fill} /><stop offset="1" stopColor={darken(fill, 0.25)} /></linearGradient></defs>];
};
