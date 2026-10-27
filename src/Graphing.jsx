// Dwimos: the graphing calculator, built in. Type equations and see them drawn, define
// functions like f(x), fit a line, parabola or exponential to a table of points, move
// sliders for letters like a and b, shade inequalities, and tap the places that matter:
// where curves cross each other and the axes, and the tops and bottoms of curves.

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { parseLine, compileExpr, fitModel } from "./digitalsat.js";

const COLORS = ["#c74440", "#2d70b3", "#388c46", "#6042a6", "#fa7e19", "#000000"];
const STORE = "testiddle-dwimos";
const loadSaved = () => { try { return JSON.parse(localStorage.getItem(STORE)) || null; } catch { return null; } };
const nice = (span) => { const raw = span / 8, p = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / p; return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p; };
const fmt = (v, d = 6) => { const r = Math.round(v * 10 ** d) / 10 ** d; return Math.abs(r) < 1e-9 ? "0" : String(r).replace("-", "−"); };
const num = (t) => { try { const c = compileExpr(String(t)); const v = c.vars.size ? NaN : c.fn({}); return Number.isFinite(v) ? v : NaN; } catch { return NaN; } };

export default function Graphing() {
  const saved = useMemo(loadSaved, []);
  const [rows, setRows] = useState(saved?.rows || [{ id: 1, type: "expr", text: "" }]);
  const [params, setParams] = useState(saved?.params || {});
  const [view, setView] = useState(saved?.view || { cx: 0, cy: 0, scale: 40 });
  const [pick, setPick] = useState(null);
  const [size, setSize] = useState({ w: 400, h: 400 });
  const cv = useRef(null), wrap = useRef(null), focus = useRef(null), next = useRef(Math.max(100, ...(saved?.rows || []).map((r) => r.id + 1)));
  const drag = useRef(null), pointers = useRef(new Map());

  useEffect(() => { try { localStorage.setItem(STORE, JSON.stringify({ rows, params, view })); } catch { /* private mode */ } }, [rows, params, view]);
  useEffect(() => {
    const el = wrap.current; if (!el) return undefined;
    const set = () => setSize({ w: Math.max(200, el.clientWidth), h: Math.max(200, el.clientHeight) });
    set(); const ro = new ResizeObserver(set); ro.observe(el); return () => ro.disconnect();
  }, []);

  // functions the student defined, so f(g(2)) and f(x)+1 work on any line
  const funcNames = useMemo(() => { const s = new Set(); rows.forEach((r) => { const m = r.type === "expr" && /^\s*([a-z])\s*\(\s*[a-z]\s*\)\s*=/i.exec(r.text || ""); if (m && !["x", "y", "e"].includes(m[1].toLowerCase())) s.add(m[1].toLowerCase()); }); return s; }, [rows]);
  const parsed = useMemo(() => rows.map((r) => (r.type === "table" ? { ...r, p: null } : { ...r, p: parseLine(r.text, { funcs: funcNames }) })), [rows, funcNames]);

  // tables give lists x1, y1, x2, y2 ...
  const tables = useMemo(() => {
    const t = {}; let k = 0;
    rows.forEach((r) => { if (r.type !== "table") return; k++; const pts = []; r.xs.forEach((x, i) => { const a = num(x), b = num(r.ys[i]); if (Number.isFinite(a) && Number.isFinite(b)) pts.push([a, b]); }); t[k] = { id: r.id, pts }; });
    return t;
  }, [rows]);

  // letters other than x, y and a table's columns become sliders
  const letters = useMemo(() => {
    const skip = new Set(["x", "y"]); const s = new Set();
    parsed.forEach((r) => {
      if (!r.p) return;
      const fitted = r.p.kind === "fit" ? r.p.mvars : null;
      if (r.p.kind === "fit") return;
      r.p.vars?.forEach((v) => { if (!skip.has(v) && !/^[xy]\d+$/.test(v)) s.add(v); });
      void fitted;
    });
    return [...s].filter((l) => !funcNames.has(l)).sort();
  }, [parsed, funcNames]);

  // curve fits: y1 ~ a x1^2 + b x1 + c
  const fits = useMemo(() => {
    const out = {};
    parsed.forEach((r) => {
      if (r.p?.kind !== "fit") return;
      const k = Number(r.p.yname.slice(1)); const t = tables[k]; const xname = "x" + k;
      const names = [...r.p.mvars].filter((v) => v !== xname).sort();
      if (!t || t.pts.length < 2 || !names.length) { out[r.id] = { error: !t ? `No table ${k} yet` : names.length ? "Add more points" : "Add letters like a and b to fit" }; return; }
      const f = fitModel(r.p.model, names, xname, t.pts.map((p) => p[0]), t.pts.map((p) => p[1]));
      out[r.id] = f ? { ...f, xname, names } : { error: "Could not fit" };
    });
    return out;
  }, [parsed, tables]);

  const fnMap = useMemo(() => {
    const m = {}; const base = { ...Object.fromEntries(letters.map((l) => [l, params[l] ?? 1])), __fn: m };
    parsed.forEach((r) => { if (r.p?.kind === "def") m[r.p.name] = (v) => r.p.body({ ...base, [r.p.arg]: v }); });
    return m;
  }, [parsed, letters, params]);
  const env = useMemo(() => ({ ...Object.fromEntries(letters.map((l) => [l, params[l] ?? 1])), __fn: fnMap }), [letters, params, fnMap]);

  // every curve as something to draw: y = f(x), or F(x, y) = 0
  const curves = useMemo(() => {
    const out = [];
    parsed.forEach((r, n) => {
      const p = r.p; if (!p || p.kind === "error") return;
      const color = COLORS[n % COLORS.length];
      if (p.kind === "fn" && !p.number) out.push({ id: r.id, n, color, fx: (x) => p.f({ ...env, x }) });
      else if (p.kind === "def" && p.arg) out.push({ id: r.id, n, color, fx: (x) => p.body({ ...env, [p.arg]: x }), draw: p.arg === "x" || true });
      else if (p.kind === "fit") { const f = fits[r.id]; if (f && !f.error) out.push({ id: r.id, n, color, fx: (x) => p.model({ ...f.params, [f.xname]: x }) }); }
      else if (p.kind === "implicit") out.push({ id: r.id, n, color, F: (x, y) => p.F({ ...env, x, y }) });
      else if (p.kind === "ineq") out.push({ id: r.id, n, color, F: (x, y) => p.F({ ...env, x, y }), ineq: p });
    });
    return out;
  }, [parsed, env, fits]);

  const toPx = useCallback((x, y) => [size.w / 2 + (x - view.cx) * view.scale, size.h / 2 - (y - view.cy) * view.scale], [size, view]);
  const toXY = useCallback((px, py) => [view.cx + (px - size.w / 2) / view.scale, view.cy - (py - size.h / 2) / view.scale], [size, view]);

  // the places worth tapping
  const specials = useMemo(() => {
    const [xmin, ymax] = toXY(0, 0), [xmax, ymin] = toXY(size.w, size.h);
    const out = []; const add = (x, y) => { if (Number.isFinite(x) && Number.isFinite(y) && x >= xmin - 1 && x <= xmax + 1 && y >= ymin - 1 && y <= ymax + 1 && !out.some(([a, b]) => Math.abs(a - x) < 1e-5 && Math.abs(b - y) < 1e-5)) out.push([x, y]); };
    const Fs = curves.filter((c) => !c.ineq || true).map((c) => (c.fx ? (x, y) => y - c.fx(x) : c.F));
    const all = [...Fs, (x, y) => y, (x, y) => x]; // the axes, so intercepts count
    // tops and bottoms of curves
    curves.forEach((c) => {
      if (!c.fx) return; const h = (xmax - xmin) / 4000; let prev = null;
      for (let k = 0; k <= 800; k++) {
        const x = xmin + ((xmax - xmin) * k) / 800, d = (c.fx(x + h) - c.fx(x - h)) / (2 * h);
        if (prev && Number.isFinite(d) && Number.isFinite(prev.d) && prev.d * d < 0 && Math.abs(d - prev.d) < 1e4) {
          let lo = prev.x, hi = x; for (let j = 0; j < 45; j++) { const mid = (lo + hi) / 2, dm = (c.fx(mid + h) - c.fx(mid - h)) / (2 * h); if (((c.fx(lo + h) - c.fx(lo - h)) / (2 * h)) * dm <= 0) hi = mid; else lo = mid; }
          add(lo, c.fx(lo));
        }
        prev = { x, d };
      }
    });
    // where any two meet, by Newton's method from every cell where both change sign
    const cell = 10, cols = Math.ceil(size.w / cell) + 1, rowsN = Math.ceil(size.h / cell) + 1;
    const grids = all.map((F) => { const g = new Float64Array(cols * rowsN); for (let j = 0; j < rowsN; j++) for (let i = 0; i < cols; i++) { const [x, y] = toXY(i * cell, j * cell); g[j * cols + i] = F(x, y); } return g; });
    const changes = (g, i, j) => { const v = [g[j * cols + i], g[j * cols + i + 1], g[(j + 1) * cols + i], g[(j + 1) * cols + i + 1]]; return v.every(Number.isFinite) && Math.min(...v) < 0 && Math.max(...v) > 0; };
    for (let a = 0; a < all.length; a++) for (let b = a + 1; b < all.length; b++) {
      if (a >= Fs.length && b >= Fs.length) continue;
      for (let j = 0; j < rowsN - 1; j++) for (let i = 0; i < cols - 1; i++) {
        if (!changes(grids[a], i, j) || !changes(grids[b], i, j)) continue;
        let [x, y] = toXY((i + 0.5) * cell, (j + 0.5) * cell); const Fa = all[a], Fb = all[b]; let ok = false;
        for (let it = 0; it < 30; it++) {
          const h = 1e-6 * (1 + Math.abs(x) + Math.abs(y)); const f1 = Fa(x, y), f2 = Fb(x, y);
          const a1 = (Fa(x + h, y) - f1) / h, a2 = (Fa(x, y + h) - f1) / h, b1 = (Fb(x + h, y) - f2) / h, b2 = (Fb(x, y + h) - f2) / h;
          const det = a1 * b2 - a2 * b1; if (!Number.isFinite(det) || Math.abs(det) < 1e-12) break;
          const dx = (f1 * b2 - a2 * f2) / det, dy = (a1 * f2 - f1 * b1) / det; x -= dx; y -= dy;
          if (Math.abs(dx) + Math.abs(dy) < 1e-11) { ok = Math.abs(Fa(x, y)) < 1e-6 && Math.abs(Fb(x, y)) < 1e-6; break; }
        }
        const [cx0, cy0] = toXY((i + 0.5) * cell, (j + 0.5) * cell);
        if (ok && Math.abs(x - cx0) < (cell * 2) / view.scale && Math.abs(y - cy0) < (cell * 2) / view.scale) add(Math.abs(x) < 1e-9 ? 0 : x, Math.abs(y) < 1e-9 ? 0 : y);
      }
    }
    return out;
  }, [curves, size, view, toXY]);

  useEffect(() => {
    const c = cv.current; if (!c) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    c.width = size.w * dpr; c.height = size.h * dpr; c.style.width = size.w + "px"; c.style.height = size.h + "px";
    const g = c.getContext("2d"); g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.fillStyle = "#fff"; g.fillRect(0, 0, size.w, size.h);
    const [xmin, ymax] = toXY(0, 0), [xmax, ymin] = toXY(size.w, size.h);
    const step = nice(Math.max(xmax - xmin, ymax - ymin) * 0.9);
    g.lineWidth = 1; g.font = "11px system-ui"; g.fillStyle = "#555"; g.textBaseline = "top";
    for (let x = Math.ceil(xmin / step) * step; x <= xmax; x += step) { const [px] = toPx(x, 0); g.strokeStyle = Math.abs(x) < step / 2 ? "#222" : "#e1e4ea"; g.beginPath(); g.moveTo(px, 0); g.lineTo(px, size.h); g.stroke(); if (Math.abs(x) > step / 2) { const [, ay] = toPx(0, 0); g.textAlign = "center"; g.fillText(fmt(x), px, Math.min(Math.max(ay + 4, 2), size.h - 14)); } }
    for (let y = Math.ceil(ymin / step) * step; y <= ymax; y += step) { const [, py] = toPx(0, y); g.strokeStyle = Math.abs(y) < step / 2 ? "#222" : "#e1e4ea"; g.beginPath(); g.moveTo(0, py); g.lineTo(size.w, py); g.stroke(); if (Math.abs(y) > step / 2) { const [ax] = toPx(0, 0); g.textAlign = "left"; g.fillText(fmt(y), Math.min(Math.max(ax + 4, 2), size.w - 30), py - 12); } }

    // tables as dots
    Object.values(tables).forEach((t) => { const n = rows.findIndex((r) => r.id === t.id); g.fillStyle = COLORS[n % COLORS.length]; t.pts.forEach(([x, y]) => { const [px, py] = toPx(x, y); g.beginPath(); g.arc(px, py, 4.5, 0, 7); g.fill(); }); });

    curves.forEach((cu) => {
      g.strokeStyle = cu.color; g.fillStyle = cu.color; g.lineWidth = 2.4; g.lineJoin = "round";
      if (cu.fx) {
        g.beginPath(); let pen = false, prevY = null;
        for (let px = 0; px <= size.w; px += 1) {
          const [x] = toXY(px, 0); const y = cu.fx(x);
          if (!Number.isFinite(y)) { pen = false; continue; }
          const [, py] = toPx(x, y);
          if (py < -4000 || py > size.h + 4000) { pen = false; continue; }
          if (pen && Math.abs(py - prevY) > size.h * 1.5) pen = false;
          if (pen) g.lineTo(px, py); else { g.moveTo(px, py); pen = true; }
          prevY = py;
        }
        g.stroke(); return;
      }
      if (cu.ineq) {
        g.globalAlpha = 0.22; const b = 5; const p = cu.ineq;
        for (let px = 0; px < size.w; px += b) for (let py = 0; py < size.h; py += b) { const [x, y] = toXY(px + b / 2, py + b / 2); const v = cu.F(x, y); if (Number.isFinite(v) && (p.lt ? v < 0 : v > 0)) g.fillRect(px, py, b, b); }
        g.globalAlpha = 1; if (p.strict) g.setLineDash([7, 6]);
      }
      const cell = 6, cols = Math.ceil(size.w / cell) + 1, rowsN = Math.ceil(size.h / cell) + 1;
      const val = new Float64Array(cols * rowsN);
      for (let j = 0; j < rowsN; j++) for (let i = 0; i < cols; i++) { const [x, y] = toXY(i * cell, j * cell); val[j * cols + i] = cu.F(x, y); }
      g.beginPath();
      for (let j = 0; j < rowsN - 1; j++) for (let i = 0; i < cols - 1; i++) {
        const a = val[j * cols + i], b2 = val[j * cols + i + 1], d = val[(j + 1) * cols + i], c2 = val[(j + 1) * cols + i + 1];
        if (![a, b2, c2, d].every(Number.isFinite)) continue;
        const cross = []; const edge = (v1, v2, x1, y1, x2, y2) => { if ((v1 < 0) !== (v2 < 0)) { const t = v1 / (v1 - v2); cross.push([x1 + (x2 - x1) * t, y1 + (y2 - y1) * t]); } };
        const X = i * cell, Y = j * cell;
        edge(a, b2, X, Y, X + cell, Y); edge(b2, c2, X + cell, Y, X + cell, Y + cell); edge(d, c2, X, Y + cell, X + cell, Y + cell); edge(a, d, X, Y, X, Y + cell);
        if (cross.length === 2) { g.moveTo(...cross[0]); g.lineTo(...cross[1]); } else if (cross.length === 4) { g.moveTo(...cross[0]); g.lineTo(...cross[1]); g.moveTo(...cross[2]); g.lineTo(...cross[3]); }
      }
      g.stroke(); g.setLineDash([]);
    });
    parsed.forEach((r, n) => { const p = r.p; if (p?.kind !== "point") return; const x = p.fx(env), y = p.fy(env); if (!Number.isFinite(x) || !Number.isFinite(y)) return; const [px, py] = toPx(x, y); g.fillStyle = COLORS[n % COLORS.length]; g.beginPath(); g.arc(px, py, 5, 0, 7); g.fill(); g.fillStyle = "#222"; g.textAlign = "left"; g.textBaseline = "alphabetic"; g.fillText(`(${fmt(x)}, ${fmt(y)})`, px + 8, py - 8); g.textBaseline = "top"; });
    g.fillStyle = "rgba(60,60,60,.6)";
    specials.forEach(([x, y]) => { const [px, py] = toPx(x, y); g.beginPath(); g.arc(px, py, 3.2, 0, 7); g.fill(); });
    if (pick) { const [px, py] = toPx(pick.x, pick.y); g.fillStyle = "#222"; g.beginPath(); g.arc(px, py, 5, 0, 7); g.fill(); const t = `(${fmt(pick.x, 4)}, ${fmt(pick.y, 4)})`; g.font = "bold 12px system-ui"; const w = g.measureText(t).width + 14; const bx = Math.min(px + 10, size.w - w - 4), by = Math.max(py - 34, 4); g.fillStyle = "#fff"; g.strokeStyle = "#333"; g.lineWidth = 1; g.fillRect(bx, by, w, 24); g.strokeRect(bx, by, w, 24); g.fillStyle = "#111"; g.textAlign = "left"; g.textBaseline = "middle"; g.fillText(t, bx + 7, by + 12); }
  }, [curves, parsed, env, size, view, pick, specials, tables, rows, toPx, toXY]);

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
    const r = rect(), px = e.clientX - r.left, py = e.clientY - r.top;
    let best = null, bd = 20 * 20;
    for (const [x, y] of specials) { const [sx, sy] = toPx(x, y); const dd = (sx - px) ** 2 + (sy - py) ** 2; if (dd < bd) { bd = dd; best = { x, y }; } }
    if (!best) { const [x] = toXY(px, 0); for (const cu of curves) { if (!cu.fx) continue; const y = cu.fx(x); if (!Number.isFinite(y)) continue; const [, sy] = toPx(x, y); if (Math.abs(sy - py) < 14) { best = { x, y }; break; } } }
    setPick(best);
  }
  const wheel = (e) => { const r = rect(); zoomAt(e.clientX - r.left, e.clientY - r.top, e.deltaY < 0 ? 1.15 : 1 / 1.15); };

  const setText = (id, text) => setRows((rs) => rs.map((r) => (r.id === id ? { ...r, text } : r)));
  const setCell = (id, col, i, v) => setRows((rs) => rs.map((r) => { if (r.id !== id) return r; const xs = [...r.xs], ys = [...r.ys]; (col === 0 ? xs : ys)[i] = v; if (i >= xs.length - 1 && v !== "") { xs.push(""); ys.push(""); } return { ...r, xs, ys }; }));
  const insert = (t) => { const el = focus.current; if (!el || !el.dataset.id) return; const id = Number(el.dataset.id); const a = el.selectionStart ?? el.value.length, b = el.selectionEnd ?? a; setText(id, el.value.slice(0, a) + t + el.value.slice(b)); setTimeout(() => { el.focus(); el.setSelectionRange(a + t.length, a + t.length); }, 0); };
  const tableNo = (id) => Object.entries(tables).find(([, t]) => t.id === id)?.[0];

  return (
    <div className="gr">
      <div className="gr-list">
        <div className="gr-rows">
          {rows.map((r, n) => {
            const col = COLORS[n % COLORS.length];
            if (r.type === "table") {
              const k = tableNo(r.id);
              return (
                <div key={r.id} className="gr-row gr-table">
                  <div className="gr-trow"><span className="gr-dot" style={{ background: col }}>{n + 1}</span><b className="small">Table {k}</b><button className="gr-del" onClick={() => setRows((rs) => (rs.length > 1 ? rs.filter((x) => x.id !== r.id) : rs))} aria-label={`Delete table ${k}`}>&times;</button></div>
                  <div className="gr-cells"><b>x{k}</b><b>y{k}</b>
                    {r.xs.map((x, i) => [<input key={`x${i}`} value={x} onChange={(e) => setCell(r.id, 0, i, e.target.value)} aria-label={`Table ${k}, row ${i + 1}, x`} inputMode="decimal" autoComplete="off" />, <input key={`y${i}`} value={r.ys[i]} onChange={(e) => setCell(r.id, 1, i, e.target.value)} aria-label={`Table ${k}, row ${i + 1}, y`} inputMode="decimal" autoComplete="off" />])}
                  </div>
                </div>
              );
            }
            const p = parsed[n]?.p; const bad = r.text.trim() && p?.kind === "error";
            const fit = p?.kind === "fit" ? fits[r.id] : null;
            let result = null;
            if (p?.kind === "fn" && p.number) { try { const v = p.f(env); if (Number.isFinite(v)) result = "= " + fmt(v, 9); } catch { /* shows nothing */ } }
            return (
              <div key={r.id} className={"gr-row" + (bad ? " bad" : "")}>
                <div className="gr-trow">
                  <span className="gr-dot" style={{ background: p && p.kind !== "error" && r.text.trim() && !result ? col : "#c8ccd4" }}>{n + 1}</span>
                  <input data-id={r.id} value={r.text} onFocus={(e) => { focus.current = e.target; }} onChange={(e) => setText(r.id, e.target.value)} placeholder={n === 0 ? "y = x^2 - 3" : ""} aria-label={`Expression ${n + 1}`} autoComplete="off" autoCapitalize="none" spellCheck={false} />
                  <button className="gr-del" onClick={() => setRows((rs) => (rs.length > 1 ? rs.filter((x) => x.id !== r.id) : [{ ...r, text: "" }]))} aria-label={`Delete expression ${n + 1}`}>&times;</button>
                </div>
                {result && <div className="gr-result">{result}</div>}
                {fit && (fit.error ? <div className="gr-result muted">{fit.error}</div> : <div className="gr-result">{fit.names.map((nm) => `${nm} = ${fmt(fit.params[nm], 5)}`).join(",  ")}<br />R&sup2; = {fmt(fit.r2, 5)}</div>)}
              </div>
            );
          })}
          <div className="gr-addrow">
            <button className="gr-add" onClick={() => setRows((rs) => [...rs, { id: next.current++, type: "expr", text: "" }])}>+ Expression</button>
            <button className="gr-add" onClick={() => setRows((rs) => [...rs, { id: next.current++, type: "table", xs: ["", ""], ys: ["", ""] }])}>+ Table</button>
          </div>
        </div>
        {letters.map((l) => (
          <div key={l} className="gr-slider"><b>{l}</b> = <span>{fmt(params[l] ?? 1)}</span>
            <input type="range" min="-10" max="10" step="0.1" value={params[l] ?? 1} onChange={(e) => setParams({ ...params, [l]: Number(e.target.value) })} aria-label={`Value of ${l}`} /></div>
        ))}
        <div className="gr-keys">{["x", "y", "^2", "^", "√(", "π", "(", ")", "<", ">", "≤", "≥", "|", ",", "~", "f(x)="].map((k) => <button key={k} onMouseDown={(e) => e.preventDefault()} onClick={() => insert(k)}>{k}</button>)}</div>
        <p className="gr-tips small muted">Tap a dot to read it. Try: <code>y1 ~ a x1^2 + b x1 + c</code> with a table to fit a curve, or <code>f(x) = x^2</code> then <code>f(3)</code>.</p>
      </div>
      <div className="gr-stage" ref={wrap}>
        <canvas ref={cv} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onWheel={wheel} aria-label="Graph" />
        <div className="gr-zoom"><button onClick={() => zoomAt(size.w / 2, size.h / 2, 1.4)} aria-label="Zoom in">+</button><button onClick={() => zoomAt(size.w / 2, size.h / 2, 1 / 1.4)} aria-label="Zoom out">&minus;</button><button onClick={() => { setView({ cx: 0, cy: 0, scale: 40 }); setPick(null); }} aria-label="Reset view">&#8962;</button></div>
      </div>
    </div>
  );
}
