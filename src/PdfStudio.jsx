// A paper you can write on: the PDF drawn page by page, with a pen, a highlighter and
// an eraser over it, scratch pages at the end for working, and an export that puts
// your writing back into a PDF to take to GoodNotes or print. Writing is kept in this
// browser, per paper, so a refresh does not lose it.

import { useCallback, useEffect, useRef, useState } from "react";

const COLORS = ["#1b1b1b", "#2f6fb0", "#c0392b", "#2a8c76", "#e0a21a"];
const PAGE_RATIO = 11 / 8.5;
const inkKey = (k) => `testiddle-ink-${k}`;

const read = (k) => { try { return JSON.parse(localStorage.getItem(k)) || null; } catch { return null; } };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage full or private mode */ } };

let pdfjsP;
function pdfjs() {
  // the legacy build, so an iPad a version or two behind can still open it
  pdfjsP ||= import("pdfjs-dist/legacy/build/pdf.mjs").then((m) => {
    m.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/legacy/build/pdf.worker.min.mjs", import.meta.url).toString();
    return m;
  });
  return pdfjsP;
}

function paint(ctx, strokes, w, h) {
  ctx.clearRect(0, 0, w, h);
  ctx.lineCap = "round"; ctx.lineJoin = "round";
  for (const s of strokes) {
    ctx.globalAlpha = s.t === "hl" ? 0.35 : 1;
    ctx.strokeStyle = s.c; ctx.lineWidth = Math.max(1, s.w * w);
    ctx.beginPath();
    s.p.forEach(([x, y], i) => (i ? ctx.lineTo(x * w, y * w) : ctx.moveTo(x * w, y * w)));
    if (s.p.length === 1) ctx.lineTo(s.p[0][0] * w + 0.01, s.p[0][1] * w);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

function Sheet({ index, doc, scratch, strokes, tool, color, size, onStroke, onErase, wrapWidth }) {
  const box = useRef(null), cv = useRef(null), ink = useRef(null), live = useRef(null);
  const [near, setNear] = useState(index < 2);
  const [ratio, setRatio] = useState(PAGE_RATIO);

  useEffect(() => {
    const el = box.current; if (!el || !("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver(([e]) => setNear(e.isIntersecting), { rootMargin: "1400px 0px" });
    io.observe(el); return () => io.disconnect();
  }, []);

  // the page itself, drawn only while it is near the screen, so a long paper does not fill an iPad's memory
  useEffect(() => {
    if (scratch || !doc) return undefined;
    const c = cv.current; let dead = false, task = null;
    if (!near) { c.width = c.height = 0; return undefined; }
    (async () => {
      const pg = await doc.getPage(index + 1); if (dead) return;
      const v1 = pg.getViewport({ scale: 1 }); setRatio(v1.height / v1.width);
      const scale = (Math.min(wrapWidth || 900, 1100) * Math.min(window.devicePixelRatio || 1, 2)) / v1.width;
      const vp = pg.getViewport({ scale });
      c.width = vp.width; c.height = vp.height;
      task = pg.render({ canvasContext: c.getContext("2d"), viewport: vp });
      try { await task.promise; } catch { /* cancelled */ }
      pg.cleanup?.();
    })();
    return () => { dead = true; task?.cancel?.(); };
  }, [near, doc, index, scratch, wrapWidth]);

  // the writing over it
  const redraw = useCallback(() => {
    const c = ink.current; if (!c) return;
    const w = Math.round(Math.min(wrapWidth || 900, 1100) * Math.min(window.devicePixelRatio || 1, 2));
    if (c.width !== w) { c.width = w; c.height = Math.round(w * ratio); }
    paint(c.getContext("2d"), strokes, c.width, c.height);
  }, [strokes, ratio, wrapWidth]);
  useEffect(() => { if (near) redraw(); }, [near, redraw]);

  const pt = (e) => { const r = ink.current.getBoundingClientRect(); return [(e.clientX - r.left) / r.width, (e.clientY - r.top) / r.width]; };

  function down(e) {
    if (tool === "hand") return;
    e.preventDefault(); e.currentTarget.setPointerCapture?.(e.pointerId);
    const p = pt(e);
    if (tool === "eraser") { live.current = { erase: true, hit: [] }; hitTest(p); return; }
    live.current = { t: tool === "hl" ? "hl" : "pen", c: color, w: (tool === "hl" ? size * 3.2 : size) / 900, p: [p] };
    drawLive();
  }
  function move(e) {
    if (!live.current) return;
    const evs = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
    for (const ev of evs.length ? evs : [e]) {
      const p = pt(ev);
      if (live.current.erase) hitTest(p); else live.current.p.push(p);
    }
    if (!live.current.erase) drawLive();
  }
  function up() {
    const s = live.current; live.current = null; if (!s) return;
    if (s.erase) { if (s.hit.length) onErase(index, s.hit); return; }
    onStroke(index, { t: s.t, c: s.c, w: s.w, p: s.p });
  }
  function drawLive() {
    const c = ink.current; const s = live.current; if (!c || !s) return;
    paint(c.getContext("2d"), [...strokes, s], c.width, c.height);
  }
  function hitTest([x, y]) {
    const r = 14 / (ink.current.getBoundingClientRect().width || 900);
    const l = live.current;
    const remaining = strokes.filter((s) => !l.hit.includes(s));
    for (const s of remaining) if (s.p.some(([sx, sy]) => (sx - x) ** 2 + (sy - y) ** 2 < r * r)) l.hit.push(s);
    paint(ink.current.getContext("2d"), strokes.filter((s) => !l.hit.includes(s)), ink.current.width, ink.current.height);
  }

  return (
    <div ref={box} className={"ps-sheet" + (scratch ? " scratch" : "")} style={{ aspectRatio: `1 / ${ratio}` }}>
      {scratch ? <span className="ps-tag">Scratch paper</span> : <canvas ref={cv} className="ps-page" />}
      {near && <canvas ref={ink} className={"ps-ink " + tool} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} />}
      <span className="ps-num">{scratch ? "" : index + 1}</span>
    </div>
  );
}

export default function PdfStudio({ url, paperKey, title }) {
  const wrap = useRef(null);
  const [doc, setDoc] = useState(null);
  const [state, setState] = useState("loading");
  const [pages, setPages] = useState(0);
  const [scratch, setScratch] = useState(0);
  const [ink, setInk] = useState({}); // page index -> strokes
  const [tool, setTool] = useState("hand");
  const [color, setColor] = useState(COLORS[1]);
  const [size, setSize] = useState(2.2);
  const [width, setWidth] = useState(0);
  const hist = useRef({ undo: [], redo: [] });
  const [, bump] = useState(0);
  const bytes = useRef(null);
  const key = inkKey(paperKey);

  useEffect(() => { const s = read(key); setInk(s?.ink || {}); setScratch(s?.scratch || 0); hist.current = { undo: [], redo: [] }; }, [key]);
  useEffect(() => { const t = setTimeout(() => write(key, { ink, scratch }), 400); return () => clearTimeout(t); }, [ink, scratch, key]);

  useEffect(() => {
    const el = wrap.current; if (!el) return undefined;
    const set = () => setWidth(Math.round(el.clientWidth));
    set(); const ro = new ResizeObserver(set); ro.observe(el); return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let dead = false; setState("loading"); setDoc(null);
    (async () => {
      try {
        const [lib, res] = await Promise.all([pdfjs(), fetch(url)]);
        if (!res.ok) throw new Error("missing");
        const buf = await res.arrayBuffer(); bytes.current = buf.slice(0);
        const d = await lib.getDocument({ data: buf, isEvalSupported: false }).promise;
        if (dead) return; setDoc(d); setPages(d.numPages); setState("ready");
      } catch { if (!dead) setState("error"); }
    })();
    return () => { dead = true; };
  }, [url]);

  const total = pages + scratch;
  const strokesOf = (i) => ink[i] || [];
  const record = (a) => { hist.current.undo.push(a); hist.current.redo = []; bump((n) => n + 1); };

  function addStroke(i, s) { setInk((m) => ({ ...m, [i]: [...(m[i] || []), s] })); record({ k: "add", i, s }); }
  function erase(i, hit) { setInk((m) => ({ ...m, [i]: (m[i] || []).filter((s) => !hit.includes(s)) })); record({ k: "del", i, hit }); }
  function undo() {
    const a = hist.current.undo.pop(); if (!a) return;
    hist.current.redo.push(a);
    setInk((m) => ({ ...m, [a.i]: a.k === "add" ? (m[a.i] || []).filter((s) => s !== a.s) : [...(m[a.i] || []), ...a.hit] })); bump((n) => n + 1);
  }
  function redo() {
    const a = hist.current.redo.pop(); if (!a) return;
    hist.current.undo.push(a);
    setInk((m) => ({ ...m, [a.i]: a.k === "add" ? [...(m[a.i] || []), a.s] : (m[a.i] || []).filter((s) => !a.hit.includes(s)) })); bump((n) => n + 1);
  }
  function clearAll() {
    if (!window.confirm("Rub out everything you have written on this paper?")) return;
    setInk({}); hist.current = { undo: [], redo: [] }; bump((n) => n + 1);
  }

  async function exportPdf() {
    const { PDFDocument, rgb, LineCapStyle } = await import("pdf-lib");
    const out = await PDFDocument.load(bytes.current);
    for (let i = 0; i < scratch; i++) {
      const p = out.addPage([612, 792]);
      for (let y = 740; y > 40; y -= 26) p.drawLine({ start: { x: 40, y }, end: { x: 572, y }, thickness: 0.5, color: rgb(0.82, 0.85, 0.88) });
    }
    const hex = (c) => [1, 3, 5].map((k) => parseInt(c.slice(k, k + 2), 16) / 255);
    out.getPages().forEach((page, i) => {
      const { width: W, height: H } = page.getSize();
      for (const s of ink[i] || []) {
        const [r, g, b] = hex(s.c);
        for (let k = 1; k < s.p.length || k === 1; k++) {
          const a = s.p[k - 1], c = s.p[k] || [a[0] + 0.0005, a[1]];
          page.drawLine({ start: { x: a[0] * W, y: H - a[1] * W }, end: { x: c[0] * W, y: H - c[1] * W }, thickness: Math.max(0.6, s.w * W), color: rgb(r, g, b), opacity: s.t === "hl" ? 0.35 : 1, lineCap: LineCapStyle.Round });
        }
      }
    });
    const blob = new Blob([await out.save()], { type: "application/pdf" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
    a.download = `${title || "paper"} (my working).pdf`.replace(/[^\w ().-]/g, ""); document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  }

  const T = [["hand", "Scroll"], ["pen", "Pen"], ["hl", "Highlighter"], ["eraser", "Eraser"]];
  return (
    <div className="ps">
      <div className="ps-bar" role="toolbar" aria-label="Writing tools">
        <div className="seg tight">{T.map(([k, label]) => <button key={k} className={tool === k ? "on" : ""} aria-pressed={tool === k} onClick={() => setTool(k)}>{label}</button>)}</div>
        {(tool === "pen" || tool === "hl") && (
          <>
            <span className="ps-colors">{COLORS.map((c) => <button key={c} className={"ps-dot" + (c === color ? " on" : "")} style={{ background: c }} aria-label={`Colour ${c}`} onClick={() => setColor(c)} />)}</span>
            <label className="small muted ps-size">Thickness <input type="range" min="1" max="6" step="0.2" value={size} onChange={(e) => setSize(Number(e.target.value))} /></label>
          </>
        )}
        <span className="ps-gap" />
        <button className="btn ghost small" onClick={undo} disabled={!hist.current.undo.length}>Undo</button>
        <button className="btn ghost small" onClick={redo} disabled={!hist.current.redo.length}>Redo</button>
        <button className="btn ghost small" onClick={() => setScratch((n) => n + 1)}>Scratch page</button>
        <button className="btn small" onClick={exportPdf} disabled={state !== "ready"}>Export PDF</button>
        <button className="ti-linkbtn small" onClick={clearAll}>Clear</button>
      </div>
      <div ref={wrap} className="ps-scroll">
        {state === "loading" && <p className="small muted ps-msg">Opening the paper</p>}
        {state === "error" && <p className="small ps-msg">The paper could not be opened here. <a href={url} target="_blank" rel="noopener noreferrer">Open the PDF in a new tab</a>.</p>}
        {state === "ready" && Array.from({ length: total }, (_, i) => (
          <Sheet key={i} index={i} doc={doc} scratch={i >= pages} strokes={strokesOf(i)} tool={tool} color={color} size={size} onStroke={addStroke} onErase={erase} wrapWidth={width} />
        ))}
      </div>
    </div>
  );
}
