// The computer-based SAT, sat one question at a time the way the Bluebook app does it:
// a first module for each section, then a second module that is harder or easier
// depending on how the first went, a question map, flags, answer elimination, a
// calculator, and a break. Progress is kept in this browser so a sitting can be resumed.

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Graphing from "./Graphing.jsx";
import { SECTIONS, planFor, sectionOf, moduleName, secondModule, isRight, sectionScore, calc } from "./digitalsat.js";

const KEY = (n) => `testiddle-dsat-${n}`;
const HISTORY = "testiddle-real-history";
const read = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const write = (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } };
const clock = (s) => { const t = Math.max(0, s); return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`; };
const EMPTY = [];
const Html = ({ html, className = "", as: Tag = "div" }) => <Tag className={"dq-html " + className} dangerouslySetInnerHTML={{ __html: html }} />;

export default function DigitalSat({ n, title, onBack }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [S, setS] = useState(() => read(KEY(n), null)); // the sitting in progress, or null
  const [left, setLeft] = useState(() => read(KEY(n), null)?.left ?? 0);
  const leftRef = useRef(left);

  useEffect(() => {
    let dead = false;
    fetch(`${import.meta.env.BASE_URL}papers/sat-digital-${n}.json`).then((r) => { if (!r.ok) throw new Error("missing"); return r.json(); })
      .then((d) => { if (!dead) setData(d); }).catch(() => { if (!dead) setError(true); });
    return () => { dead = true; };
  }, [n]);

  // keep the sitting, with the clock, so closing the tab does not lose it
  useEffect(() => { leftRef.current = left; }, [left]);
  useEffect(() => { if (S) write(KEY(n), { ...S, left: leftRef.current }); }, [S, n]);
  useEffect(() => { const t = setInterval(() => { if (S?.phase === "module" || S?.phase === "review") write(KEY(n), { ...S, left: leftRef.current }); }, 5000); return () => clearInterval(t); }, [S, n]);

  const patch = (p) => setS((cur) => ({ ...cur, ...p }));

  function begin(mode) {
    const plan = planFor(mode);
    const first = plan[0];
    setLeft(SECTIONS[sectionOf(first)].minutes * 60);
    setS({ mode, plan, idx: 0, resolved: {}, answers: {}, flags: {}, strike: {}, done: {}, phase: "module", cur: 0 });
  }
  const modId = S ? (S.resolved[S.plan[S.idx]] || S.plan[S.idx]) : null;
  const mod = S && data ? data.modules[modId] : null;

  function finishModule() {
    const planId = S.plan[S.idx];
    const ans = S.answers[modId] || {};
    const correct = mod.filter((q, i) => isRight(q, ans[i])).length;
    const done = { ...S.done, [modId]: { correct, total: mod.length, planId } };
    const resolved = { ...S.resolved };
    if (planId === "rw1") resolved.rw2 = secondModule("rw", correct);
    if (planId === "m1") resolved.m2 = secondModule("math", correct);
    const idx = S.idx + 1;
    if (idx >= S.plan.length) { patch({ done, resolved, phase: "results" }); saveHistory(done); return; }
    const nextPlan = S.plan[idx];
    const phase = S.mode === "full" && nextPlan === "m1" ? "break" : "between";
    setLeft(phase === "break" ? 600 : 0);
    patch({ done, resolved, idx, phase, cur: 0 });
  }
  function saveHistory(done) {
    const rows = Object.values(done); const right = rows.reduce((a, r) => a + r.correct, 0), total = rows.reduce((a, r) => a + r.total, 0);
    const list = read(HISTORY, []);
    write(HISTORY, [{ id: Date.now(), paper: title, section: S.mode === "full" ? "Full test" : SECTIONS[S.mode].name, right, total, minutes: 0, on: new Date().toISOString().slice(0, 10) }, ...list].slice(0, 30));
  }
  function startNext() { const id = S.resolved[S.plan[S.idx]] || S.plan[S.idx]; setLeft(SECTIONS[sectionOf(id)].minutes * 60); patch({ phase: "module", cur: 0 }); }

  if (error) return <div className="page"><div className="card card-pad"><p>This test could not be loaded. Check your connection and try again.</p><button className="btn ghost" onClick={onBack}>Back</button></div></div>;
  if (!data) return <div className="page"><div className="card card-pad"><p className="muted">Opening the test</p></div></div>;
  if (!S) return <Start n={n} title={title} onBack={onBack} onBegin={begin} />;
  if (S.phase === "results") return <Results data={data} S={S} title={title} onBack={onBack} onAgain={() => { write(KEY(n), null); setS(null); }} />;
  if (S.phase === "break") return <Break left={left} setLeft={setLeft} onResume={startNext} />;
  if (S.phase === "between") return <Between S={S} onGo={startNext} />;
  return <Module key={modId} S={S} patch={patch} modId={modId} mod={mod} left={left} setLeft={setLeft} onFinish={finishModule} onExit={() => { write(KEY(n), { ...S, left: leftRef.current }); onBack(); }} />;
}

/* ---------- before you begin ---------- */

function Start({ n, title, onBack, onBegin }) {
  return (
    <div className="page paper-start fade">
      <div className="card card-pad stack ds-start">
        <button className="btn ghost small ds-back" onClick={onBack}>&lsaquo; Back</button>
        <h1>{title}</h1>
        <p className="rp-lead">A computer-based SAT in the style of the Bluebook app. Answer one question at a time, flag the ones to come back to, and cross out choices you rule out. After the first module of each section, your second module is harder or easier depending on how the first went, as on the real test.</p>
        <div className="ds-modes">
          <button className="btn cta" onClick={() => onBegin("full")}><b>Full test</b><span>98 questions, about 2 hours 20 minutes with the break</span></button>
          <button className="btn" onClick={() => onBegin("rw")}><b>Reading and Writing</b><span>2 modules, 54 questions, 64 minutes</span></button>
          <button className="btn" onClick={() => onBegin("math")}><b>Math</b><span>2 modules, 44 questions, 70 minutes</span></button>
        </div>
        <ul className="ds-notes small muted">
          <li>The clock runs for each module and the module ends when it reaches zero.</li>
          <li>The calculator is built in. It is a scientific calculator, not a graphing one, so use your own or Desmos in another tab for graphs.</li>
          <li>The score is an estimate. The real test's scoring is not published, so treat it as a guide.</li>
          <li>Your place is saved in this browser if you leave and come back.</li>
        </ul>
      </div>
    </div>
  );
}

function Between({ S, onGo }) {
  const id = S.resolved[S.plan[S.idx]] || S.plan[S.idx];
  return (
    <div className="dsat dsat-center">
      <div className="ds-card"><h2>{moduleName(id)}</h2><p>You have {SECTIONS[sectionOf(id)].minutes} minutes for {SECTIONS[sectionOf(id)].questions === 27 ? 27 : 22} questions. The clock starts when you press the button.</p><button className="ds-btn blue" onClick={onGo}>Start module</button></div>
    </div>
  );
}

function Break({ left, setLeft, onResume }) {
  useEffect(() => { const t = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000); return () => clearInterval(t); }, [setLeft]);
  return (
    <div className="dsat dsat-center">
      <div className="ds-card"><h2>Break</h2><div className="ds-bigclock">{clock(left)}</div><p>Stand up, drink some water, and rest your eyes. Math starts when you press the button, or when the break ends.</p><button className="ds-btn blue" onClick={onResume}>Resume testing</button></div>
    </div>
  );
}


/* ---------- highlights and notes ---------- */

const HL = { y: "#fff3a3", b: "#bfe3ff", p: "#ffd0e6", u: "transparent" };

function textNodes(el) {
  const out = []; const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  let pos = 0, n;
  while ((n = w.nextNode())) { out.push({ node: n, start: pos, end: pos + n.nodeValue.length }); pos += n.nodeValue.length; }
  return out;
}
// Marks are kept as character positions in the text, so the page can be redrawn without losing them.
function applyMarks(el, marks) {
  if (!marks.length) return;
  for (const t of textNodes(el)) {
    const hits = marks.filter((m) => m.s < t.end && m.e > t.start);
    if (!hits.length || !t.node.parentNode) continue;
    const cuts = new Set([0, t.node.nodeValue.length]);
    for (const m of hits) { cuts.add(Math.max(0, m.s - t.start)); cuts.add(Math.min(t.node.nodeValue.length, m.e - t.start)); }
    const at = [...cuts].sort((a, b) => a - b);
    const frag = document.createDocumentFragment();
    for (let k = 0; k < at.length - 1; k++) {
      const a = at[k], b = at[k + 1]; if (a === b) continue;
      const piece = t.node.nodeValue.slice(a, b);
      const m = [...hits].reverse().find((x) => x.s - t.start <= a && x.e - t.start >= b);
      if (!m) { frag.appendChild(document.createTextNode(piece)); continue; }
      const mk = document.createElement("mark");
      mk.className = "ds-hl" + (m.c === "u" ? " u" : ""); mk.dataset.id = m.id; mk.style.background = HL[m.c] || HL.y;
      if (m.note) mk.dataset.note = "1";
      mk.textContent = piece; frag.appendChild(mk);
    }
    t.node.parentNode.replaceChild(frag, t.node);
  }
}
const offsetIn = (el, node, off) => { const r = document.createRange(); r.selectNodeContents(el); r.setEnd(node, off); return r.toString().length; };

function Notable({ html, marks, onMarks, on, className = "" }) {
  const ref = useRef(null);
  const [pop, setPop] = useState(null); // { x, y, sel } for new, { x, y, id } for existing
  useLayoutEffect(() => { const el = ref.current; el.innerHTML = html; applyMarks(el, marks); }, [html, marks]);

  function up() {
    if (!on) return;
    const sel = window.getSelection(); if (!sel || sel.isCollapsed || !sel.rangeCount) return;
    const r = sel.getRangeAt(0); const el = ref.current;
    if (!el.contains(r.startContainer) || !el.contains(r.endContainer)) return;
    const s = offsetIn(el, r.startContainer, r.startOffset), e = offsetIn(el, r.endContainer, r.endOffset);
    if (e <= s) return;
    const box = r.getBoundingClientRect();
    setPop({ x: Math.min(box.left, window.innerWidth - 300), y: box.bottom + 8, sel: { s, e } });
  }
  function click(ev) {
    const m = ev.target.closest?.("mark.ds-hl"); if (!m || !on) return;
    const box = m.getBoundingClientRect(); setPop({ x: Math.min(box.left, window.innerWidth - 300), y: box.bottom + 8, id: m.dataset.id });
  }
  const add = (c, note = false) => {
    const id = Math.random().toString(36).slice(2, 8);
    onMarks([...marks, { id, s: pop.sel.s, e: pop.sel.e, c, note: "" }]); window.getSelection()?.removeAllRanges();
    setPop(note ? { x: pop.x, y: pop.y, id } : null);
  };
  const cur = pop?.id ? marks.find((m) => m.id === pop.id) : null;

  return (
    <>
      <div ref={ref} className={"dq-html " + className + (on ? " annotating" : "")} onMouseUp={up} onTouchEnd={() => setTimeout(up, 50)} onClick={click} />
      {pop && (
        <div className="ds-pop ds-notepop" style={{ position: "fixed", left: pop.x, top: pop.y }} role="dialog" aria-label="Highlight">
          {pop.sel ? (
            <div className="ds-swatches">
              {[["y", "Yellow"], ["b", "Blue"], ["p", "Pink"]].map(([c, l]) => <button key={c} className="ds-sw" style={{ background: HL[c] }} aria-label={`Highlight ${l}`} onClick={() => add(c)} />)}
              <button className="ds-sw u" aria-label="Underline" onClick={() => add("u")}>U</button>
              <button className="ds-x" onClick={() => add("y", true)}>Add note</button>
              <button className="ds-x" onClick={() => setPop(null)}>Cancel</button>
            </div>
          ) : cur ? (
            <div className="ds-notebox">
              <textarea autoFocus rows={3} value={cur.note || ""} placeholder="Write a note" onChange={(e) => onMarks(marks.map((m) => (m.id === cur.id ? { ...m, note: e.target.value } : m)))} />
              <div className="ds-swatches">
                {[["y"], ["b"], ["p"], ["u"]].map(([c]) => <button key={c} className={"ds-sw" + (c === "u" ? " u" : "")} style={{ background: HL[c] }} aria-label={c === "u" ? "Underline" : "Colour"} onClick={() => onMarks(marks.map((m) => (m.id === cur.id ? { ...m, c } : m)))}>{c === "u" ? "U" : ""}</button>)}
                <button className="ds-x" onClick={() => { onMarks(marks.filter((m) => m.id !== cur.id)); setPop(null); }}>Remove</button>
                <button className="ds-x" onClick={() => setPop(null)}>Done</button>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}

/* ---------- the calculators ---------- */

function CalcPanel({ open, onClose }) {
  const [tab, setTab] = useState("graph");
  const [pos, setPos] = useState({ left: null, top: 70 });
  const drag = useRef(null);
  const down = (e) => { const r = e.currentTarget.parentElement.getBoundingClientRect(); drag.current = { dx: e.clientX - r.left, dy: e.clientY - r.top }; e.currentTarget.setPointerCapture(e.pointerId); };
  const move = (e) => { if (drag.current) setPos({ left: Math.max(0, e.clientX - drag.current.dx), top: Math.max(0, e.clientY - drag.current.dy) }); };
  const up = () => { drag.current = null; };
  return (
    <div className="ds-pop ds-desmos" style={{ display: open ? "grid" : "none", left: pos.left ?? undefined, right: pos.left == null ? 16 : undefined, top: pos.top }} role="dialog" aria-label="Calculator">
      <div className="ds-maphead ds-drag" onPointerDown={down} onPointerMove={move} onPointerUp={up}><b>Calculator</b>
        <span className="seg tight"><button onPointerDown={(e) => e.stopPropagation()} className={tab === "graph" ? "on" : ""} onClick={() => setTab("graph")}>Dwimos</button><button onPointerDown={(e) => e.stopPropagation()} className={tab === "sci" ? "on" : ""} onClick={() => setTab("sci")}>Scientific</button></span>
        <button className="ds-x" onPointerDown={(e) => e.stopPropagation()} onClick={onClose}>Close</button></div>
      <div className="ds-desmosbox" style={{ display: tab === "graph" ? "block" : "none" }}><Graphing /></div>
      {tab === "sci" && <Calculator embedded />}
    </div>
  );
}

/* ---------- a module ---------- */

function Module({ S, patch, modId, mod, left, setLeft, onFinish, onExit }) {
  const section = sectionOf(modId);
  const math = section === "math";
  const [hideClock, setHideClock] = useState(false);
  const [elim, setElim] = useState(false);
  const [panel, setPanel] = useState(null); // directions | calc | ref | map | more
  const [annotate, setAnnotate] = useState(false);
  const notes = (S.notes || {})[modId] || {};
  const marksOf = (area) => notes[`${S.cur}:${area}`] || EMPTY;
  const setMarks = (area) => (list) => patch({ notes: { ...(S.notes || {}), [modId]: { ...notes, [`${S.cur}:${area}`]: list } } });
  const answers = S.answers[modId] || {}, flags = S.flags[modId] || {}, strike = S.strike[modId] || {};
  const i = S.cur, q = mod[i];
  const done = useRef(false);

  useEffect(() => { const t = setInterval(() => setLeft((s) => s - 1), 1000); return () => clearInterval(t); }, [setLeft]);
  useEffect(() => { if (left <= 0 && !done.current) { done.current = true; onFinish(); } }, [left]); // eslint-disable-line react-hooks/exhaustive-deps

  const setAns = (v) => patch({ answers: { ...S.answers, [modId]: { ...answers, [i]: v } } });
  const flag = () => patch({ flags: { ...S.flags, [modId]: { ...flags, [i]: !flags[i] } } });
  const toggleStrike = (L) => { const cur = strike[i] || []; patch({ strike: { ...S.strike, [modId]: { ...strike, [i]: cur.includes(L) ? cur.filter((x) => x !== L) : [...cur, L] } } }); };
  const go = (k) => patch({ cur: k, phase: "module" });

  if (S.phase === "review") return <ReviewPage mod={mod} answers={answers} flags={flags} modId={modId} left={left} hideClock={hideClock} setHideClock={setHideClock} onGo={go} onSubmit={onFinish} />;

  const L = "ABCD";
  const split = math || Boolean(q.passage) || Boolean(q.figure) || Boolean(q.table);
  const stem = (
    <>
      {q.passage && <Notable key={`p${i}`} html={q.passage} className="ds-passage" marks={marksOf("p")} onMarks={setMarks("p")} on={annotate} />}
      {q.figure && <div className="ds-fig" dangerouslySetInnerHTML={{ __html: q.figure }} />}
      {q.table && <Html html={q.table} />}
    </>
  );
  return (
    <div className="dsat">
      <TopBar title={moduleName(modId)} left={left} hideClock={hideClock} setHideClock={setHideClock}>
        <button className="ds-tool" onClick={() => setPanel(panel === "directions" ? null : "directions")}>Directions</button>
        <button className={"ds-tool" + (annotate ? " on" : "")} aria-pressed={annotate} onClick={() => setAnnotate(!annotate)}>Annotate</button>
        {math && <button className="ds-tool" onClick={() => setPanel(panel === "calc" ? null : "calc")}>Calculator</button>}
        {math && <button className="ds-tool" onClick={() => setPanel(panel === "ref" ? null : "ref")}>Reference</button>}
        <button className="ds-tool" onClick={() => setPanel(panel === "more" ? null : "more")}>More</button>
      </TopBar>

      {annotate && <div className="ds-annobar small">Annotate is on. Select text to highlight it or add a note, and click a highlight to edit it.</div>}
      <div className={"ds-body" + (split ? " split" : "")}>
        {split && <div className="ds-left">{math ? <><Notable key={`s${i}`} html={q.q} className="ds-stem" marks={marksOf("s")} onMarks={setMarks("s")} on={annotate} />{stem}</> : stem}</div>}
        <div className="ds-right">
          <div className="ds-qhead">
            <span className="ds-qnum">{i + 1}</span>
            <button className={"ds-flag" + (flags[i] ? " on" : "")} onClick={flag} aria-pressed={Boolean(flags[i])}>{flags[i] ? "Marked for review" : "Mark for review"}</button>
            {q.kind === "mc" && <button className={"ds-elim" + (elim ? " on" : "")} onClick={() => setElim(!elim)} aria-pressed={elim} title="Cross out choices">ABC</button>}
          </div>
          {!(math && split) && <Notable key={`q${i}`} html={q.q} className="ds-stem" marks={marksOf("q")} onMarks={setMarks("q")} on={annotate} />}
          {q.kind === "mc" ? (
            <div className="ds-choices" role="radiogroup" aria-label="Answer choices">
              {q.choices.map((c, k) => {
                const struck = (strike[i] || []).includes(L[k]);
                return (
                  <div key={k} className={"ds-choice" + (answers[i] === L[k] ? " on" : "") + (struck ? " struck" : "")}>
                    <button className="ds-pick" role="radio" aria-checked={answers[i] === L[k]} onClick={() => setAns(answers[i] === L[k] ? "" : L[k])}>
                      <span className="ds-letter">{L[k]}</span><Html html={c} as="span" />
                    </button>
                    {(elim || struck) && <button className="ds-x" onClick={() => toggleStrike(L[k])} aria-label={`${struck ? "Restore" : "Cross out"} choice ${L[k]}`}>{struck ? "undo" : "✕"}</button>}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="ds-spr">
              <label>Answer<input type="text" inputMode="decimal" autoComplete="off" value={answers[i] || ""} onChange={(e) => setAns(e.target.value)} /></label>
              <p className="small">Type a number or a fraction such as 3/2. Use a minus sign for negatives. You can type up to 5 characters.</p>
            </div>
          )}
        </div>
      </div>

      <div className="ds-foot">
        <span className="ds-who">Testiddle</span>
        <button className="ds-qbtn" onClick={() => setPanel(panel === "map" ? null : "map")}>Question {i + 1} of {mod.length} &#9662;</button>
        <span className="ds-nav">
          {i > 0 && <button className="ds-btn" onClick={() => go(i - 1)}>Back</button>}
          <button className="ds-btn blue" onClick={() => (i < mod.length - 1 ? go(i + 1) : patch({ phase: "review" }))}>{i < mod.length - 1 ? "Next" : "Review"}</button>
        </span>
      </div>

      {panel === "map" && (
        <div className="ds-pop ds-map" role="dialog" aria-label="Question map">
          <div className="ds-maphead"><b>{moduleName(modId)}</b><button className="ds-x" onClick={() => setPanel(null)}>Close</button></div>
          <Grid mod={mod} answers={answers} flags={flags} cur={i} onGo={(k) => { go(k); setPanel(null); }} />
          <button className="ds-btn" onClick={() => { patch({ phase: "review" }); setPanel(null); }}>Go to review page</button>
        </div>
      )}
      {panel === "directions" && <Sheet title="Directions" onClose={() => setPanel(null)}>{math ? <p>The questions in this section address a number of math skills. Solve each problem and choose the best answer from the choices provided, or for student-produced response questions, type your answer in the box. Calculator use is permitted throughout. Unless stated otherwise, all variables and expressions represent real numbers, figures are drawn to scale, and the domain of a function is the set of all real numbers for which it is defined.</p> : <p>The questions in this section address a number of important reading and writing skills. Read each passage and question carefully, then choose the best answer to the question based on the passage. Some questions have a short text with a blank, and some have a table or graph.</p>}</Sheet>}
      {panel === "ref" && <Reference onClose={() => setPanel(null)} />}
      {math && <CalcPanel open={panel === "calc"} onClose={() => setPanel(null)} />}
      {panel === "more" && (
        <Sheet title="More" onClose={() => setPanel(null)}>
          <p>Leaving saves your place, and the clock for this module is saved with it.</p>
          <button className="ds-btn" onClick={() => { if (window.confirm("Leave the test? You can pick it up again from this page.")) onExit(); }}>Save and exit</button>
        </Sheet>
      )}
    </div>
  );
}

function TopBar({ title, left, hideClock, setHideClock, children }) {
  return (
    <header className="ds-top">
      <div className="ds-title"><b>{title}</b></div>
      <div className="ds-clock">
        {hideClock ? <span className="ds-hidden">Timer hidden</span> : <span className={"ds-time" + (left < 300 ? " low" : "")} role="timer">{clock(left)}</span>}
        <button className="ds-tool small" onClick={() => setHideClock(!hideClock)}>{hideClock ? "Show" : "Hide"}</button>
      </div>
      <div className="ds-tools">{children}</div>
    </header>
  );
}

function Grid({ mod, answers, flags, cur, onGo }) {
  return (
    <div className="ds-grid">
      {mod.map((_, k) => {
        const has = String(answers[k] ?? "").trim() !== "";
        return <button key={k} className={"ds-cell" + (has ? " done" : "") + (k === cur ? " cur" : "")} onClick={() => onGo(k)} aria-label={`Question ${k + 1}${has ? ", answered" : ", unanswered"}${flags[k] ? ", marked for review" : ""}`}>{k + 1}{flags[k] && <i aria-hidden="true">&#9873;</i>}</button>;
      })}
    </div>
  );
}

function ReviewPage({ mod, answers, flags, modId, left, hideClock, setHideClock, onGo, onSubmit }) {
  const blank = mod.filter((_, k) => String(answers[k] ?? "").trim() === "").length;
  const marked = mod.filter((_, k) => flags[k]).length;
  return (
    <div className="dsat">
      <TopBar title={moduleName(modId)} left={left} hideClock={hideClock} setHideClock={setHideClock} />
      <div className="ds-review">
        <h2>Check your work</h2>
        <p>{blank ? `You have ${blank} unanswered question${blank > 1 ? "s" : ""}.` : "You have answered every question."}{marked ? ` ${marked} marked for review.` : ""} Select a number to go back to that question.</p>
        <Grid mod={mod} answers={answers} flags={flags} cur={-1} onGo={onGo} />
        <div className="ds-legend small"><span><i className="ds-cell done" />Answered</span><span><i className="ds-cell" />Unanswered</span><span><i className="flagkey">&#9873;</i>Marked for review</span></div>
        <div className="ds-nav">
          <button className="ds-btn" onClick={() => onGo(mod.length - 1)}>Back</button>
          <button className="ds-btn blue" onClick={() => { if (!blank || window.confirm(`${blank} question${blank > 1 ? "s are" : " is"} blank. Submit this module anyway?`)) onSubmit(); }}>Submit module</button>
        </div>
      </div>
    </div>
  );
}

function Sheet({ title, onClose, children }) {
  return (
    <div className="ds-pop ds-sheet" role="dialog" aria-label={title}>
      <div className="ds-maphead"><b>{title}</b><button className="ds-x" onClick={onClose}>Close</button></div>
      <div className="ds-sheetbody">{children}</div>
    </div>
  );
}

function Reference({ onClose }) {
  const F = [["Circle", "A = πr², C = 2πr"], ["Rectangle", "A = ℓw"], ["Triangle", "A = ½ bh"], ["Right triangle", "a² + b² = c²"], ["Special right triangles", "30°-60°-90°: x, x√3, 2x     45°-45°-90°: s, s, s√2"], ["Rectangular solid", "V = ℓwh"], ["Cylinder", "V = πr²h"], ["Sphere", "V = ⁴⁄₃πr³"], ["Cone", "V = ⅓πr²h"], ["Pyramid", "V = ⅓ℓwh"], ["Angles", "The sum of the angles in a triangle is 180°. There are 360° in a circle, and 2π radians."]];
  return <Sheet title="Reference" onClose={onClose}><dl className="ds-ref">{F.map(([a, b]) => <div key={a}><dt>{a}</dt><dd>{b}</dd></div>)}</dl></Sheet>;
}

function Calculator({ onClose, embedded }) {
  const [expr, setExpr] = useState("");
  const [out, setOut] = useState("");
  const [deg, setDeg] = useState(false);
  const [ans, setAns] = useState(0);
  const add = (t) => setExpr((e) => e + t);
  function run() {
    if (!expr.trim()) return;
    try { const v = calc(expr, ans, deg); const shown = String(Math.round(v * 1e9) / 1e9); setOut(shown); setAns(v); } catch { setOut("Error"); }
  }
  const keys = [["sin(", "cos(", "tan(", "ln("], ["√(", "^", "π", "ans"], ["7", "8", "9", "÷"], ["4", "5", "6", "×"], ["1", "2", "3", "−"], ["0", ".", "(", ")"]];
  return (
    <div className={embedded ? "ds-calc inline" : "ds-pop ds-calc"} role={embedded ? undefined : "dialog"} aria-label="Calculator">
      {!embedded && <div className="ds-maphead"><b>Calculator</b><button className="ds-x" onClick={onClose}>Close</button></div>}
      <input className="ds-calcin" value={expr} onChange={(e) => setExpr(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") run(); }} placeholder="Type or press keys" aria-label="Expression" autoComplete="off" />
      <div className="ds-calcout" aria-live="polite">{out}</div>
      <div className="gr-mode small"><button className={!deg ? "on" : ""} onClick={() => setDeg(false)}>Rad</button><button className={deg ? "on" : ""} onClick={() => setDeg(true)}>Deg</button></div>
      <div className="ds-keys">
        {keys.flat().map((k) => <button key={k} onClick={() => add(k === "ans" ? "ans" : k)}>{k}</button>)}
        <button onClick={() => { setExpr(""); setOut(""); }}>C</button>
        <button onClick={() => setExpr((e) => e.slice(0, -1))}>&#9003;</button>
        <button className="eq" onClick={run}>=</button>
      </div>
    </div>
  );
}

/* ---------- the score and the review ---------- */

function Results({ data, S, title, onBack, onAgain }) {
  const rows = Object.entries(S.done);
  const sec = (s) => {
    const first = rows.find(([, r]) => r.planId === (s === "rw" ? "rw1" : "m1")), second = rows.find(([, r]) => r.planId === (s === "rw" ? "rw2" : "m2"));
    if (!first || !second) return null;
    const path = second[0].endsWith("h") ? "h" : "e";
    return { path, score: sectionScore(path, first[1].correct, first[1].total, second[1].correct, second[1].total), first: first[1], second: second[1] };
  };
  const rw = sec("rw"), math = sec("math");
  const total = rw && math ? rw.score + math.score : null;
  const [filter, setFilter] = useState("missed");
  const items = [];
  for (const [id, r] of rows) {
    data.modules[id].forEach((q, k) => { const given = (S.answers[id] || {})[k]; items.push({ id, k, q, given, ok: isRight(q, given), blank: String(given ?? "").trim() === "" }); });
  }
  const shown = items.filter((x) => filter === "all" || (filter === "missed" ? !x.ok : x.ok));
  const [at, setAt] = useState(0);
  const cur = shown[Math.min(at, shown.length - 1)];
  const L = "ABCD";

  return (
    <div className="page paper-start fade">
      <div className="stack">
        <div className="card card-pad ds-results">
          <button className="btn ghost small ds-back" onClick={onBack}>&lsaquo; Back to tests</button>
          <h1>{title}</h1>
          {total != null && <div className="ds-total"><b>{total}</b><span>estimated total, 400 to 1600</span></div>}
          <div className="ds-secs">
            {[["Reading and Writing", rw], ["Math", math]].map(([name, r]) => r && (
              <div key={name} className="ds-sec"><b>{name}</b><span className="ds-score">{r.score}</span>
                <span className="small muted">Module 1: {r.first.correct} of {r.first.total}. Module 2 ({r.path === "h" ? "harder" : "easier"}): {r.second.correct} of {r.second.total}.</span></div>
            ))}
            {!rw && !math && rows.length > 0 && <p className="muted">Finish both modules of a section to see an estimated score for it.</p>}
          </div>
          <p className="small muted">Scores are estimates. The real SAT's scoring is not published, and each test's difficulty differs slightly.</p>
          <div className="row"><button className="btn ghost" onClick={onAgain}>Sit it again</button></div>
        </div>

        <div className="card card-pad ds-review-list">
          <div className="spread"><h3>Go through your answers</h3>
            <div className="seg tight">{[["missed", "Missed"], ["right", "Correct"], ["all", "All"]].map(([k, l]) => <button key={k} className={filter === k ? "on" : ""} onClick={() => { setFilter(k); setAt(0); }}>{l}</button>)}</div></div>
          {!cur ? <p className="muted">Nothing here.</p> : (
            <div className="ds-rev">
              <div className="small muted">{moduleName(cur.id)}, question {cur.k + 1} &middot; {cur.q.skill} &middot; {Math.min(at, shown.length - 1) + 1} of {shown.length}</div>
              {cur.q.passage && <Html html={cur.q.passage} className="ds-passage" />}
              {cur.q.figure && <div className="ds-fig" dangerouslySetInnerHTML={{ __html: cur.q.figure }} />}
              {cur.q.table && <Html html={cur.q.table} />}
              <Html html={cur.q.q} className="ds-stem" />
              {cur.q.kind === "mc" ? (
                <div className="ds-choices">{cur.q.choices.map((c, k) => (
                  <div key={k} className={"ds-choice rev" + (L[k] === cur.q.answer ? " right" : "") + (L[k] === cur.given && L[k] !== cur.q.answer ? " wrong" : "")}>
                    <span className="ds-pick"><span className="ds-letter">{L[k]}</span><Html html={c} as="span" /></span>
                    {L[k] === cur.q.answer && <em>Correct answer</em>}{L[k] === cur.given && L[k] !== cur.q.answer && <em>Your answer</em>}
                  </div>))}</div>
              ) : <p>You put <b>{cur.blank ? "nothing" : cur.given}</b>. The answer is <b>{cur.q.answer}</b>.</p>}
              <div className={"ds-why " + (cur.ok ? "ok" : "no")}><b>{cur.ok ? "Why this is right" : "Why the answer is " + cur.q.answer}</b><Html html={cur.q.why} as="p" /></div>
              <div className="ds-nav"><button className="btn ghost small" disabled={at === 0} onClick={() => setAt(at - 1)}>Previous</button><button className="btn ghost small" disabled={at >= shown.length - 1} onClick={() => setAt(at + 1)}>Next</button></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
