// Diagram builders for cheat sheets: a flow of steps, a side by side comparison, a table, a cycle
// and a hub with spokes. Each takes a little data and lays it out so nothing overlaps.

import { INK, HAND, Label, Link, Defs, T, Arrow } from "../posterKit.jsx";

const V = "0 0 680 310";
const PALETTE = ["#2f7fd0", "#d0496d", "#3f9d5a", "#c0702a", "#7a5cd6", "#2a9d8f"];

/** Splits text into lines of at most max characters, keeping whole words, up to limit lines. */
export function wrap(text, max, limit = 3) {
  const out = [];
  String(text).split(" ").forEach((w) => { const l = out[out.length - 1]; if (l !== undefined && (l + " " + w).length <= max) out[out.length - 1] = l + " " + w; else out.push(w); });
  return out.slice(0, limit);
}
const fit = (w, size = 15) => Math.max(8, Math.floor((w - 20) / (size * 0.6)));
const hOf = (lines) => 28 + lines * 18 + 12;

/** Steps in order, one row or snaking onto a second row. steps: [title, detail]. */
export const flow = (steps, { caption, cols } = {}) => (c) => {
  const n = steps.length, perRow = cols || (n <= 4 ? n : Math.ceil(n / 2)), gap = 26, w = (640 - (perRow - 1) * gap) / perRow;
  const rows = [steps.slice(0, perRow), steps.slice(perRow)];
  const lines = steps.map(([, d]) => (d ? wrap(d, fit(w), 3) : []));
  const rowH = rows.map((r, ri) => Math.max(0, ...r.map((_, i) => hOf(lines[ri * perRow + i].length))));
  const y0 = rows[1].length ? 22 : 80, y1 = y0 + rowH[0] + 46;
  const pos = steps.map((_, k) => { const ri = k < perRow ? 0 : 1, i = ri ? k - perRow : k, col = ri ? perRow - 1 - i : i; return [20 + col * (w + gap), ri ? y1 : y0]; });
  return (
    <svg viewBox={V}><Defs c={c} />
      {steps.map(([t], k) => <Label key={k} x={pos[k][0]} y={pos[k][1]} w={w} color={k === n - 1 ? "#3f9d5a" : c} title={t.toUpperCase()} lines={lines[k]} keep />)}
      {steps.slice(1).map((_, k) => {
        const [ax, ay] = pos[k], [bx, by] = pos[k + 1];
        if (ay === by) return <Arrow key={k} from={bx > ax ? [ax + w + 3, ay + 14] : [ax - 3, ay + 14]} to={bx > ax ? [bx - 3, by + 14] : [bx + w + 3, by + 14]} color={c} width={2} />;
        return <Arrow key={k} from={[ax + w / 2, ay + rowH[0] + 4]} to={[bx + w / 2, by - 4]} color={c} width={2} />;
      })}
      {caption && <T x={340} y={298} s={14} anchor="middle">{caption}</T>}
    </svg>
  );
};

/** Two or three things side by side. cols: [title, [lines]]. */
export const compare = (cols, { caption, vs = true } = {}) => (c) => {
  const n = cols.length, gap = n === 2 && vs ? 60 : 20, w = (640 - (n - 1) * gap) / n;
  const all = cols.map(([, l]) => l.flatMap((x) => wrap(x, fit(w), 2)).slice(0, 9));
  const top = Math.max(20, (280 - Math.max(...all.map((l) => hOf(l.length)))) / 2);
  return (
    <svg viewBox={V}><Defs c={c} />
      {cols.map(([t], i) => <Label key={t} x={20 + i * (w + gap)} y={top} w={w} color={[c, "#d0496d", "#c0702a"][i]} title={t.toUpperCase()} lines={all[i]} keep />)}
      {n === 2 && vs && <g transform={`translate(0 ${top - 20})`}><circle cx="340" cy="120" r="20" fill="#fff" stroke={INK} strokeWidth="1.4" /><T x={340} y={126} s={16} anchor="middle">VS</T></g>}
      {caption && <T x={340} y={298} s={14} anchor="middle">{caption}</T>}
    </svg>
  );
};

/** A table with a coloured header row. head: column titles; rows: arrays of cells. */
export const table = (head, rows, { caption, widths } = {}) => (c) => {
  const total = 640, ws = widths ? widths.map((x) => (x / widths.reduce((a, b) => a + b, 0)) * total) : head.map(() => total / head.length);
  const xs = ws.map((_, i) => 20 + ws.slice(0, i).reduce((a, b) => a + b, 0));
  const cells = rows.map((r) => r.map((v, i) => wrap(v, Math.floor((ws[i] - 16) / 8), 2)));
  const hs = cells.map((r) => (Math.max(...r.map((l) => l.length)) > 1 ? 40 : 26));
  const hh = 30, body = hs.reduce((a, b) => a + b, 0), top = Math.max(20, (272 - hh - body) / 2), ys = hs.map((_, i) => top + hh + hs.slice(0, i).reduce((a, b) => a + b, 0));
  const bottom = ys.length ? ys[ys.length - 1] + hs[hs.length - 1] : top + hh;
  return (
    <svg viewBox={V}><Defs c={c} />
      <g filter="url(#ps)"><rect x="20" y={top} width={total} height={bottom - top} rx="10" fill="#fff" stroke={c} strokeWidth="1.4" /></g>
      <path d={`M21 ${top + hh} V${top + 10} Q21 ${top + 1} 30 ${top + 1} H${20 + total - 10} Q${20 + total - 1} ${top + 1} ${20 + total - 1} ${top + 10} V${top + hh} Z`} fill={c} opacity=".16" />
      {head.map((h, i) => <T key={h} x={xs[i] + 10} y={top + 20} s={15} fill={c}>{h.toUpperCase()}</T>)}
      {rows.map((_, r) => <path key={r} d={`M20 ${ys[r]} H${20 + total}`} stroke="#e3e7ec" />)}
      {xs.slice(1).map((x) => <path key={x} d={`M${x} ${top} V${bottom}`} stroke="#e3e7ec" />)}
      {cells.map((r, ri) => r.map((l, i) => <text key={`${ri}${i}`} x={xs[i] + 10} y={ys[ri] + (hs[ri] === 26 ? 18 : 17)} fontFamily={HAND} fontSize="14" fill={i === 0 ? INK : "#4b5563"}>{l.map((x, k) => <tspan key={k} x={xs[i] + 10} dy={k ? 16 : 0}>{x}</tspan>)}</text>))}
      {caption && <T x={340} y={Math.min(300, bottom + 24)} s={14} anchor="middle">{caption}</T>}
    </svg>
  );
};

/** Stages that go round in a loop. steps: [title, detail]. */
export const cycle = (steps, { centre } = {}) => (c) => {
  const n = steps.length, cx = 340, cy = 160, rx = 228, ry = 104, w = 150;
  const pts = steps.map((_, i) => { const a = -Math.PI / 2 + (i / n) * Math.PI * 2; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
  return (
    <svg viewBox={V}><Defs c={c} />
      <ellipse cx={cx} cy={cy} rx={rx - 40} ry={ry - 30} fill="url(#pc)" stroke={c} strokeDasharray="5 6" />
      {centre && wrap(centre, 18, 2).map((l, i, a) => <T key={l} x={cx} y={cy + 6 + (i - (a.length - 1) / 2) * 20} s={17} fill={c} anchor="middle">{l.toUpperCase()}</T>)}
      {steps.map((_, i) => { const at = (f) => { const a = -Math.PI / 2 + ((i + f) / n) * Math.PI * 2; return [cx + (rx - 40) * Math.cos(a), cy + (ry - 30) * Math.sin(a)]; }; return <Arrow key={`a${i}`} from={at(0.38)} to={at(0.62)} color={c} width={2.2} />; })}
      {steps.map(([t, d], i) => { const l = d ? wrap(d, fit(w, 14), 2) : []; const h = hOf(l.length); return <Label key={t} x={Math.max(4, Math.min(676 - w, pts[i][0] - w / 2))} y={Math.max(4, Math.min(306 - h, pts[i][1] - h / 2))} w={w} color={c} title={t.toUpperCase()} lines={l} keep />; })}
    </svg>
  );
};

/** A central idea with up to six linked parts around it. spokes: [title, detail]. */
export const hub = (centre, spokes, { caption } = {}) => (c) => {
  const w = 196, left = spokes.slice(0, Math.ceil(spokes.length / 2)), right = spokes.slice(Math.ceil(spokes.length / 2));
  const place = (list, x) => list.map(([t, d], i) => { const l = d ? wrap(d, fit(w, 14), 2) : []; const slot = 280 / list.length; return { t, l, x, y: 14 + i * slot + (slot - hOf(l.length)) / 2 }; });
  const all = [...place(left, 14), ...place(right, 680 - 14 - w)];
  return (
    <svg viewBox={V}><Defs c={c} />
      {all.map((s, i) => <Link key={`l${i}`} from={[s.x < 340 ? s.x + w : s.x, s.y + 20]} to={[340 + (s.x < 340 ? -66 : 66), 150 + (s.y + 20 - 150) * 0.35]} color={PALETTE[i % PALETTE.length]} bend={0} />)}
      <g filter="url(#ps)"><circle cx="340" cy="150" r="70" fill="#fff" stroke={c} strokeWidth="2" /></g>
      <circle cx="340" cy="150" r="62" fill="url(#pc)" />
      {wrap(centre, 12, 3).map((l, i, a) => <T key={l} x={340} y={156 + (i - (a.length - 1) / 2) * 20} s={17} fill={c} anchor="middle">{l.toUpperCase()}</T>)}
      {all.map((s, i) => <Label key={s.t} x={s.x} y={s.y} w={w} color={PALETTE[i % PALETTE.length]} title={s.t.toUpperCase()} lines={s.l} keep />)}
      {caption && <T x={340} y={300} s={13} anchor="middle">{caption}</T>}
    </svg>
  );
};
