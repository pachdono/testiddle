// A graphing calculator of our own: type equations and see them drawn, pan and zoom,
// sliders for letters like a and b, shaded inequalities, points, and the places curves
// cross each other and the axes. Built in so it needs nothing from another site.

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { parseLine } from "./digitalsat.js";

const COLORS = ["#c74440", "#2d70b3", "#388c46", "#6042a6", "#fa7e19", "#000000"];
const STORE = "testiddle-graph";
const read = () => { try { return JSON.parse(localStorage.getItem(STORE)) || null; } catch { return null; } };
const nice = (span) => { const raw = span / 8, p = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / p; return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p; };
const fmt = (v) => { const r = Math.round(v * 1e6) / 1e6; return Math.abs(r) < 1e-9 ? "0" : String(r); };

export default function Graphing() {
  const saved = useMemo(read, []);
  const [rows, setRows] = useState(saved?.rows || [{ id: 1, text: "" }]);
  const [params, setParams] = useState(saved?.params || {});
  const [view, setView] = useState(saved?.view || { cx: 0, cy: 0, scale: 40 });
  const [pick, setPick] = useState(null); // a point the student tapped: { x, y }
  const [size, setSize] = useState({ w: 400, h: 400 });
  const cv = useRef(null), wrap = useRef(null), focus = useRef(null), next = useRef(100);
  const drag = useRef(null), pointers = useRef(new Map());

  useEffect(() => { try { localStorage.setItem(STORE, JSON.stringify({ rows, params, view })); } catch { /* private mode */ } }, [rows, params, view]);
  useEffect(() => {
    const el = wrap.current; if (!el) return undefined;
    const set = () => setSize({ w: Math.max(200, el.clientWidth), h: Math.max(200, el.clientHeight) });
    set(); const ro = new ResizeObserver(set); ro.observe(el); return () => ro.disconnect();
  }, []);

  const parsed = useMemo(() => rows.map((r) => ({ ...r, p: parseLine(r.text) })), [rows]);
  // every letter other than x and y becomes a slider
  const letters = useMemo(() => { const s = new Set(); parsed.forEach((r) => r.p?.vars?.forEach((v) => { if (v !== "x" && v !== "y") s.add(v); })); return [...s].sort(); }, [parsed]);
  const env = useMemo(() => { const e = {}; letters.forEach((l) => { e[l] = params[l] ?? 1; }); return e; }, [letters, params]);

  const toPx = useCallback((x, y) => [size.w / 2 + (x - view.cx) * view.scale, size.h / 2 - (y - view.cy) * view.scale], [size, view]);
  const toXY = useCallback((px, py) => [view.cx + (px - size.w / 2) / view.scale, view.cy - (py - size.h / 2) / view.scale], [size, view]);

  // the places worth tapping: where two curves meet, and where a curve crosses an axis
  const specials = useMemo(() => {
    const fns = parsed.filter((r) => r.p?.kind === "fn" && r.text.trim()).map((r) => (x) => r.p.f({ ...env, x }));
    const [x0] = toXY(0, 0), [x1] = toXY(size.w, 0); const pts = [];
    const roots = (g, a, b) => {
      const n = 400; let prev = g(a);
      for (let k = 1; k <= n; k++) {
        const x = a + ((b - a) * k) / n, v = g(x);
        if (Number.isFinite(prev) && Number.isFinite(v) && prev * v <= 0 && Math.abs(v - prev) < 1e3 * view.scale) {
          let lo = x - (b - a) / n, hi = x; for (let j = 0; j < 40; j++) { const mid = (lo + hi) / 2; if (g(lo) * g(mid) <= 0) hi = mid; else lo = mid; }
          pts.push(lo);
        }
        prev = v;
      }
    };
    const out = [];
    fns.forEach((f, i) => {
      roots(f, x0, x1); pts.splice(0).forEach((x) => out.push([x, f(x)]));
      const y0 = f(0); if (Number.isFinite(y0)) out.push([0, y0]);
      fns.slice(i + 1).forEach((g) => { roots((x) => f(x) - g(x), x0, x1); pts.splice(0).forEach((x) => out.push([x, f(x)])); });
    });
    return out.filter(([x, y]) => Number.isFinite(x) && Number.isFinite(y) && Math.abs(y) < 1e7);
  }, [parsed, env, size, view, toXY]);

  useEffect(() => {
    const c = cv.current; if (!c) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    c.width = size.w * dpr; c.height = size.h * dpr; c.style.width = size.w + "px"; c.style.height = size.h + "px";
    const g = c.getContext("2d"); g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.fillStyle = "#fff"; g.fillRect(0, 0, size.w, size.h);
    const [xmin, ymax] = toXY(0, 0), [xmax, ymin] = toXY(size.w, size.h);
    const step = nice(Math.max(xmax - xmin, ymax - ymin) * 0.9);
    // grid
    g.lineWidth = 1; g.font = "11px system-ui"; g.fillStyle = "#555"; g.textBaseline = "top";
    for (let x = Math.ceil(xmin / step) * step; x <= xmax; x += step) { const [px] = toPx(x, 0); g.strokeStyle = Math.abs(x) < step / 2 ? "#222" : "#e1e4ea"; g.beginPath(); g.moveTo(px, 0); g.lineTo(px, size.h); g.stroke(); if (Math.abs(x) > step / 2) { const [, ay] = toPx(0, 0); g.textAlign = "center"; g.fillText(fmt(x), px, Math.min(Math.max(ay + 4, 2), size.h - 14)); } }
    for (let y = Math.ceil(ymin / step) * step; y <= ymax; y += step) { const [, py] = toPx(0, y); g.strokeStyle = Math.abs(y) < step / 2 ? "#222" : "#e1e4ea"; g.beginPath(); g.moveTo(0, py); g.lineTo(size.w, py); g.stroke(); if (Math.abs(y) > step / 2) { const [ax] = toPx(0, 0); g.textAlign = "left"; g.fillText(fmt(y), Math.min(Math.max(ax + 4, 2), size.w - 30), py - 12); } }
    // each line of the list
    parsed.forEach((r, n) => {
      const p = r.p; if (!p || p.kind === "error") return;
      const col = COLORS[n % COLORS.length]; g.strokeStyle = col; g.fillStyle = col; g.lineWidth = 2.4; g.lineJoin = "round";
      const E = (x, y) => ({ ...env, x, y });
      if (p.kind === "fn") {
        g.beginPath(); let pen = false, prevY = null;
        for (let px = 0; px <= size.w; px += 1) {
          const [x] = toXY(px, 0); const y = p.f({ ...env, x });
          if (!Number.isFinite(y)) { pen = false; continue; }
          const [, py] = toPx(x, y);
          if (py < -4000 || py > size.h + 4000) { pen = false; continue; }
          if (pen && Math.abs(py - prevY) > size.h * 1.5) pen = false;
          if (pen) g.lineTo(px, py); else { g.moveTo(px, py); pen = true; }
          prevY = py;
        }
        g.stroke();
      } else if (p.kind === "implicit" || p.kind === "ineq") {
        if (p.kind === "ineq") {
          g.globalAlpha = 0.22; const b = 5;
          for (let px = 0; px < size.w; px += b) for (let py = 0; py < size.h; py += b) { const [x, y] = toXY(px + b / 2, py + b / 2); const v = p.F(E(x, y)); if (Number.isFinite(v) && (p.lt ? v < 0 : v > 0)) g.fillRect(px, py, b, b); }
          g.globalAlpha = 1; if (p.strict) g.setLineDash([7, 6]);
        }
        const cell = 6, cols = Math.ceil(size.w / cell) + 1, rowsN = Math.ceil(size.h / cell) + 1;
        const val = new Float64Array(cols * rowsN);
        for (let j = 0; j < rowsN; j++) for (let i = 0; i < cols; i++) { const [x, y] = toXY(i * cell, j * cell); val[j * cols + i] = p.F(E(x, y)); }
        g.beginPath();
        for (let j = 0; j < rowsN - 1; j++) for (let i = 0; i < cols - 1; i++) {
          const a = val[j * cols + i], b = val[j * cols + i + 1], d = val[(j + 1) * cols + i], c = val[(j + 1) * cols + i + 1];
          if (![a, b, c, d].every(Number.isFinite)) continue;
          const cross = [];
          const edge = (v1, v2, x1, y1, x2, y2) => { if ((v1 < 0) !== (v2 < 0)) { const t = v1 / (v1 - v2); cross.push([x1 + (x2 - x1) * t, y1 + (y2 - y1) * t]); } };
          const X = i * cell, Y = j * cell;
          edge(a, b, X, Y, X + cell, Y); edge(b, c, X + cell, Y, X + cell, Y + cell); edge(d, c, X, Y + cell, X + cell, Y + cell); edge(a, d, X, Y, X, Y + cell);
          if (cross.length === 2) { g.moveTo(...cross[0]); g.lineTo(...cross[1]); } else if (cross.length === 4) { g.moveTo(...cross[0]); g.lineTo(...cross[1]); g.moveTo(...cross[2]); g.lineTo(...cross[3]); }
        }
        g.stroke(); g.setLineDash([]);
      } else if (p.kind === "point") {
        const x = p.fx(env), y = p.fy(env); if (Number.isFinite(x) && Number.isFinite(y)) { const [px, py] = toPx(x, y); g.beginPath(); g.arc(px, py, 5, 0, 7); g.fill(); g.fillStyle = "#222"; g.textAlign = "left"; g.fillText(`(${fmt(x)}, ${fmt(y)})`, px + 8, py - 14); }
      }
    });
    // meeting points, quietly, so a tap can find them
    g.fillStyle = "rgba(60,60,60,.55)";
    specials.forEach(([x, y]) => { const [px, py] = toPx(x, y); if (px >= 0 && px <= size.w && py >= 0 && py <= size.h) { g.beginPath(); g.arc(px, py, 3, 0, 7); g.fill(); } });
    if (pick) { const [px, py] = toPx(pick.x, pick.y); g.fillStyle = "#222"; g.beginPath(); g.arc(px, py, 5, 0, 7); g.fill(); const t = `(${fmt(pick.x)}, ${fmt(pick.y)})`; g.font = "bold 12px system-ui"; const w = g.measureText(t).width + 14; const bx = Math.min(px + 10, size.w - w - 4), by = Math.max(py - 34, 4); g.fillStyle = "#fff"; g.strokeStyle = "#333"; g.lineWidth = 1; g.fillRect(bx, by, w, 24); g.strokeRect(bx, by, w, 24); g.fillStyle = "#111"; g.textAlign = "left"; g.textBaseline = "middle"; g.fillText(t, bx + 7, by + 12); }
  }, [parsed, env, size, view, pick, specials, toPx, toXY]);

  function zoomAt(px, py, k) {
    setView((v) => { const s = Math.min(4000, Math.max(0.5, v.scale * k)); const [x, y] = [v.cx + (px - size.w / 2) / v.scale, v.cy - (py - size.h / 2) / v.scale]; return { scale: s, cx: x - (px - size.w / 2) / s, cy: y + (py - size.h / 2) / s }; });
  }
  const rect = () => cv.current.getBoundingClientRect();
  function down(e) {
    e.currentTarget.setPointerCapture(e.pointerId); pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    drag.current = { x: e.clientX, y: e.clientY, view, moved: false, pinch: pointers.current.size > 1 ? Math.hypot(...[...pointers.current.values()].reduce((a, b) => [a.x - b.x, a.y - b.y])) : null };
  }
  function move(e) {
    const d = drag.current; if (!d) return; pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size > 1) { const [a, b] = [...pointers.current.values()]; const dist = Math.hypot(a.x - b.x, a.y - b.y); if (d.pinch) { const r = rect(); zoomAt((a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top, dist / d.pinch); } d.pinch = dist; d.moved = true; return; }
    const dx = e.clientX - d.x, dy = e.clientY - d.y; if (Math.abs(dx) + Math.abs(dy) > 3) d.moved = true;
    if (d.moved) setView({ ...d.view, cx: d.view.cx - dx / d.view.scale, cy: d.view.cy + dy / d.view.scale });
  }
  function up(e) {
    const d = drag.current; pointers.current.delete(e.pointerId); if (pointers.current.size) return; drag.current = null;
    if (!d || d.moved) return;
    // a tap: snap to the nearest meeting point or curve
    const r = rect(), px = e.clientX - r.left, py = e.clientY - r.top;
    let best = null, bd = 18 * 18;
    for (const [x, y] of specials) { const [sx, sy] = toPx(x, y); const dd = (sx - px) ** 2 + (sy - py) ** 2; if (dd < bd) { bd = dd; best = { x, y }; } }
    if (!best) { const [x] = toXY(px, py); for (const r2 of parsed) { if (r2.p?.kind !== "fn") continue; const y = r2.p.f({ ...env, x }); if (!Number.isFinite(y)) continue; const [, sy] = toPx(x, y); if (Math.abs(sy - py) < 14) { best = { x, y }; break; } } }
    setPick(best);
  }
  const wheel = (e) => { const r = rect(); zoomAt(e.clientX - r.left, e.clientY - r.top, e.deltaY < 0 ? 1.15 : 1 / 1.15); };

  const setText = (id, text) => setRows((rs) => rs.map((r) => (r.id === id ? { ...r, text } : r)));
  const insert = (t) => { const el = focus.current; if (!el) return; const id = Number(el.dataset.id); const a = el.selectionStart ?? el.value.length, b = el.selectionEnd ?? a; const v = el.value.slice(0, a) + t + el.value.slice(b); setText(id, v); setTimeout(() => { el.focus(); el.setSelectionRange(a + t.length, a + t.length); }, 0); };

  return (
    <div className="gr">
      <div className="gr-list">
        <div className="gr-rows">
          {rows.map((r, n) => {
            const bad = r.text.trim() && r.p?.kind === "error";
            const pp = parsed[n]?.p;
            return (
              <div key={r.id} className={"gr-row" + (bad ? " bad" : "")}>
                <span className="gr-dot" style={{ background: pp && pp.kind !== "error" && r.text.trim() ? COLORS[n % COLORS.length] : "#c8ccd4" }}>{n + 1}</span>
                <input data-id={r.id} value={r.text} onFocus={(e) => { focus.current = e.target; }} onChange={(e) => setText(r.id, e.target.value)} placeholder={n === 0 ? "y = x^2 - 3" : ""} aria-label={`Expression ${n + 1}`} autoComplete="off" autoCapitalize="none" spellCheck={false} />
                <button className="gr-del" onClick={() => setRows((rs) => (rs.length > 1 ? rs.filter((x) => x.id !== r.id) : [{ ...r, text: "" }]))} aria-label={`Delete expression ${n + 1}`}>&times;</button>
              </div>
            );
          })}
          <button className="gr-add" onClick={() => setRows((rs) => [...rs, { id: next.current++, text: "" }])}>+ Add expression</button>
        </div>
        {letters.map((l) => (
          <div key={l} className="gr-slider"><b>{l}</b> = <span>{fmt(params[l] ?? 1)}</span>
            <input type="range" min="-10" max="10" step="0.1" value={params[l] ?? 1} onChange={(e) => setParams({ ...params, [l]: Number(e.target.value) })} aria-label={`Value of ${l}`} /></div>
        ))}
        <div className="gr-keys">{["x", "y", "^2", "^", "√(", "π", "(", ")", "<", ">", "≤", "≥", "|", ","].map((k) => k !== "|" && <button key={k} onMouseDown={(e) => e.preventDefault()} onClick={() => insert(k)}>{k}</button>)}</div>
      </div>
      <div className="gr-stage" ref={wrap}>
        <canvas ref={cv} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onWheel={wheel} aria-label="Graph" />
        <div className="gr-zoom"><button onClick={() => zoomAt(size.w / 2, size.h / 2, 1.4)} aria-label="Zoom in">+</button><button onClick={() => zoomAt(size.w / 2, size.h / 2, 1 / 1.4)} aria-label="Zoom out">&minus;</button><button onClick={() => { setView({ cx: 0, cy: 0, scale: 40 }); setPick(null); }} aria-label="Reset view">&#8962;</button></div>
      </div>
    </div>
  );
}
