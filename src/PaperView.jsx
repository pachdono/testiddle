// A practice paper laid out like a printed exam booklet, in the Testiddle house design used for the
// Paper SAT: a cover with the candidate boxes and instructions, then numbered pages with a running
// header, questions with their marks in brackets, ruled answer space and "Turn over" at the foot.
// It is sat on screen: circle a letter or write on the lines, then finish to mark it against the
// mark scheme. It also prints, one booklet page to each A4 sheet.

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { isRight } from "./bank.js";
import { logQuiz } from "./progress.js";
import { examMarks, saveExamMarks } from "./Learn.jsx";
import { Mascot } from "./Mascot.jsx";

const BODY_H = 1123 - 108 - 92; // A4 at 96 dpi, less the header and footer
const LETTERS = "ABCD";
const Html = ({ html, className = "" }) => <div className={"dq-html " + className} dangerouslySetInnerHTML={{ __html: html }} />;
const readDraft = (id) => { try { return JSON.parse(localStorage.getItem(`testiddle-paper:${id}`)) || null; } catch { return null; } };
const writeDraft = (id, v) => { try { localStorage.setItem(`testiddle-paper:${id}`, JSON.stringify(v)); } catch { /* private mode */ } };
const clock = (s) => `${Math.floor(s / 3600)}:${String(Math.floor((s % 3600) / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
const lines = (marks) => Math.min(14, Math.max(3, marks * 2));

/** The blocks of the paper in order: a box at the start of each section, then its questions. */
function blocksOf(picked) {
  const out = [];
  let num = 0;
  picked.forEach((q, i) => {
    if (q.section !== picked[i - 1]?.section) {
      const qs = picked.filter((x) => x.section === q.section);
      out.push({ key: `sec-${q.section}`, type: "section", letter: q.kind === "mc" ? "A" : "B", count: qs.length, marks: qs.reduce((n, x) => n + (x.marks || 1), 0), mc: q.kind === "mc" });
    }
    out.push({ key: q.id, type: "q", q, num: ++num });
  });
  return out;
}

function Block({ b, answers, setAnswer, marks, phase, tick, ghost }) {
  if (b.type === "section") return (
    <div className="tp-sec">
      <div className="tp-secline"><span className="tp-bigbadge">{b.letter}</span><div><h3>Section {b.letter}</h3>
        <div className="tp-chips"><span>{b.count} questions</span><span className="y">{b.marks} marks</span></div></div></div>
      <div className="tp-card"><span className="tp-label">Directions</span>
        {b.mc ? <p>Answer <b>all</b> questions. For each question there are four possible answers, <b>A</b>, <b>B</b>, <b>C</b> and <b>D</b>. Choose the one you consider correct and circle its letter. Each correct answer scores one mark.</p>
          : <p>Answer <b>all</b> questions in the spaces provided. Show your working where it helps. The number of marks for each question is shown in brackets [ ].</p>}
      </div>
    </div>
  );
  const { q, num } = b;
  const m = marks[q.id];
  const given = answers[q.id] ?? "";
  const marking = phase === "marked";
  const tabIndex = ghost ? -1 : undefined;
  return (
    <div className="tp-q">
      <div className="tp-qhead"><span className="tp-num">{num}</span><span className="tp-skill">{q.skill}</span></div>
      <Html html={q.q} className="tp-qtext" />
      {q.kind === "mc" ? (
        <ol className={"tp-ch" + (q.choices.every((c) => c.replace(/<[^>]+>/g, "").length <= 26) ? " two" : "")}>{q.choices.map((c, k) => {
          const L = LETTERS[k];
          const cls = (given === L ? "on " : "") + (marking && L === q.answer ? "right " : marking && given === L ? "wrong" : "");
          return <li key={L}><button type="button" tabIndex={tabIndex} disabled={marking} className={cls} aria-pressed={given === L} onClick={() => setAnswer(q.id, given === L ? "" : L)}><b>{L}</b><span dangerouslySetInnerHTML={{ __html: c }} /></button></li>;
        })}</ol>
      ) : (
        <textarea className="tp-lines" tabIndex={tabIndex} rows={lines(q.marks)} style={{ height: lines(q.marks) * 32 + 6 }} value={given} readOnly={marking} aria-label={`Answer to question ${num}`} onChange={(e) => setAnswer(q.id, e.target.value)} />
      )}
      <div className="tp-mk">[{q.marks || 1}]</div>
      {marking && (q.kind === "mc" ? (
        <div className={"tp-scheme " + (m?.ok ? "good" : "bad")}><b>{m?.ok ? "Correct, 1 mark." : given ? `Not this time: the answer is ${q.answer}.` : `Left blank: the answer is ${q.answer}.`}</b>{q.why && <p>{q.why}</p>}</div>
      ) : (
        <div className="tp-scheme">
          <b>Mark scheme</b>{q.anyOf && <small> any {q.marks} of these</small>}<small> Tick each point your answer makes.</small>
          {q.points.map((pt, i) => <label key={pt} className="tp-tick"><input type="checkbox" tabIndex={tabIndex} checked={(m?.ticks || []).includes(i)} onChange={() => tick(q, i)} /><span>{pt}</span></label>)}
          <span className="tp-got">{m?.score ?? 0} / {q.marks}</span>
        </div>
      ))}
    </div>
  );
}

export default function PaperView({ paper, subject, what, level, onClose, report = () => {} }) {
  const { id, picked, minutes } = paper;
  const blocks = useMemo(() => blocksOf(picked), [picked]);
  const draft = useMemo(() => readDraft(id), [id]);
  const [answers, setAnswers] = useState(() => draft?.answers || {});
  const [startedAt, setStartedAt] = useState(() => draft?.startedAt || Date.now());
  const [marks, setMarks] = useState(() => examMarks()[id] || {});
  const [phase, setPhase] = useState(() => (picked.every((q) => (examMarks()[id] || {})[q.id]) ? "marked" : "sitting"));
  const [now, setNow] = useState(Date.now());
  const [pages, setPages] = useState(null);
  const [scale, setScale] = useState(1);
  const measure = useRef([]);
  const [fonts, setFonts] = useState(0);
  useEffect(() => { document.fonts?.ready.then(() => setFonts((n) => n + 1)); }, []);

  useEffect(() => { writeDraft(id, { answers, startedAt }); }, [id, answers, startedAt]);
  useEffect(() => { if (phase !== "sitting") return undefined; const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, [phase]);
  useEffect(() => { const f = (e) => { if (e.key === "Escape") onClose(); }; document.addEventListener("keydown", f); return () => document.removeEventListener("keydown", f); }, [onClose]);
  useEffect(() => {
    const fit = () => setScale(Math.min(1, (window.innerWidth - 24) / 794));
    fit(); window.addEventListener("resize", fit); return () => window.removeEventListener("resize", fit);
  }, []);

  // lay the blocks out on pages: measure each one at the page's width, then fill pages in order
  useLayoutEffect(() => {
    const hs = blocks.map((b, i) => (measure.current[i]?.offsetHeight || 100) + 18);
    const out = [];
    let cur = [], used = 0;
    blocks.forEach((b, i) => {
      // keep a section box with the question after it
      const need = b.type === "section" ? hs[i] + (hs[i + 1] || 0) : hs[i];
      if (cur.length && used + need > BODY_H) { out.push(cur); cur = []; used = 0; }
      cur.push(i); used += hs[i];
    });
    if (cur.length) out.push(cur);
    setPages(out);
  }, [blocks, phase, fonts]);

  const left = Math.max(0, minutes * 60 - Math.floor((now - startedAt) / 1000));
  const setAnswer = (qid, v) => setAnswers((a) => ({ ...a, [qid]: v }));
  const save = (m) => { setMarks(m); saveExamMarks(id, m); };
  const got = picked.reduce((n, q) => n + (marks[q.id] ? (marks[q.id].score ?? (marks[q.id].ok ? 1 : 0)) : 0), 0);
  const out = picked.reduce((n, q) => n + (q.marks || 1), 0);
  const answered = picked.filter((q) => String(answers[q.id] ?? "").trim()).length;

  function finish() {
    if (answered < picked.length && !window.confirm(`${picked.length - answered} questions are blank. Finish and mark anyway?`)) return;
    const m = {};
    for (const q of picked) {
      const given = answers[q.id] ?? "";
      if (q.kind === "mc") { const ok = Boolean(given) && isRight(q, given); if (given) logQuiz(q.id, ok); m[q.id] = { given, ok }; }
      else m[q.id] = { given, score: 0, ticks: [], ok: false };
    }
    save(m); setPhase("marked"); window.scrollTo({ top: 0 });
  }
  function tick(q, i) {
    const prev = marks[q.id] || { given: answers[q.id] ?? "", ticks: [] };
    const ticks = prev.ticks.includes(i) ? prev.ticks.filter((k) => k !== i) : [...prev.ticks, i];
    const score = Math.min(q.marks, ticks.length);
    save({ ...marks, [q.id]: { ...prev, ticks, score, ok: score === q.marks } });
  }
  function restart() {
    if (!window.confirm("Clear your answers and marks and start this paper again?")) return;
    setAnswers({}); setStartedAt(Date.now()); setNow(Date.now()); save({}); setPhase("sitting");
  }

  const code = `TT-${subject.name.replace(/[^A-Za-z]/g, "").slice(0, 3).toUpperCase()}-${String(paper.n).padStart(2, "0")}`;
  const total = (pages?.length || 0) + 1;
  const sections = blocks.filter((b) => b.type === "section");
  const props = { answers, setAnswer, marks, phase, tick };

  const Header = ({ sec }) => (
    <div className="tp-hd"><div className="tp-hdl"><Mascot size={30} pose="read" /><b>Testiddle</b><span>{subject.name} Practice Paper {paper.n}</span></div>
      {sec && <div className="tp-hdsec"><i>{sec}</i>Section {sec}</div>}</div>
  );
  const Footer = ({ n, last }) => (
    <div className="tp-ft"><span>Testiddle practice material. Original questions. {code}</span><span className="tp-pg">Page {n} of {total}</span>{last ? <span className="tp-end">End of paper</span> : <span className="tp-turn">Turn over</span>}</div>
  );

  return (
    <div className="tp-wrap">
      <header className="tp-bar">
        <button className="cg-wx" aria-label="Back to the course" onClick={onClose}>&larr;</button>
        <b className="tp-bartitle">{subject.name} Practice Paper {paper.n}</b>
        {phase === "sitting" ? <span className={"tp-clock" + (left < 300 ? " low" : "")} role="timer" aria-label="Time left">{left ? clock(left) : "Time up"}</span>
          : <span className="cg-markbox">{got} / {out} marks</span>}
        <span className="tp-barsp" />
        {phase === "sitting" && <span className="small muted tp-hide">{answered} of {picked.length} answered</span>}
        <button className="cg-btn" onClick={() => window.print()}>Print</button>
        {phase === "sitting" ? <button className="cg-btn primary" onClick={finish}>Finish and mark</button> : <button className="cg-btn" onClick={restart}>Start again</button>}
        <button className="cg-wx" aria-label="Report an issue" onClick={() => report(`Issue with ${subject.name} Practice Paper ${paper.n}`)}>{"⋮"}</button>
      </header>
      {phase === "marked" && <p className="tp-note">Multiple choice is marked for you. For each written answer, tick the mark scheme points it makes; your total updates as you go.</p>}

      {/* off screen copies of the blocks, at the page's width, to measure them */}
      <div className="tp-measure" aria-hidden="true">{blocks.map((b, i) => <div key={b.key} ref={(el) => { measure.current[i] = el; }}><Block b={b} {...props} ghost /></div>)}</div>

      <div className="tp-doc" style={{ zoom: scale }}>
        <section className="tp-page tp-cover">
          <div className="tp-side">
            <div className="tp-mark"><Mascot size={40} pose="stand" /><b>Testiddle</b></div>
            <div className="tp-numlabel">Practice paper</div>
            <div className="tp-bignum">{String(paper.n).padStart(2, "0")}</div>
            <div className="tp-code">{code}</div>
            <div className="tp-bigduck"><Mascot size={230} pose="read" /></div>
          </div>
          <div className="tp-main">
            <div className="tp-eyebrow">IGCSE style practice series</div>
            <h1>{subject.name}<br /><em>Practice Paper {paper.n}</em></h1>
            <p className="tp-sub">For {what}{level ? `, ${level}` : ""}. Sit it in one go, on the clock, then mark it against the mark scheme.</p>
            <div className="tp-cand">
              <label>Candidate name<span className="tp-line" /></label>
              <div className="tp-boxes"><span>Centre number</span><div>{[0, 1, 2, 3, 4].map((k) => <i key={k} />)}</div></div>
              <div className="tp-boxes"><span>Candidate number</span><div>{[0, 1, 2, 3].map((k) => <i key={k} />)}</div></div>
            </div>
            <div className="tp-stats">
              <div><b>{picked.length}</b><span>Questions</span></div>
              <div><b>{out}</b><span>Marks</span></div>
              <div><b>{minutes}</b><span>Minutes</span></div>
            </div>
            <div className="tp-card"><span className="tp-label">Read these instructions first</span>
              <ul><li>Answer <b>all</b> questions.</li><li>Section A: circle one letter for each question.</li><li>Section B: write your answers in the spaces provided.</li><li>You may use a calculator.</li></ul>
              <span className="tp-label">Information</span>
              <ul><li>The total mark for this paper is {out}.</li><li>The number of marks for each question is shown in brackets [ ].</li></ul>
            </div>
            <table className="tp-table"><thead><tr><th>Section</th><th>Questions</th><th>Marks</th></tr></thead>
              <tbody>{sections.map((s) => <tr key={s.letter}><td>{s.letter}: {s.mc ? "Multiple choice" : "Structured questions"}</td><td>{s.count}</td><td>{s.marks}</td></tr>)}</tbody></table>
          </div>
          <div className="tp-fine">Every question in this paper is original and written by Testiddle. It follows the style of the real exam but is not affiliated with, or endorsed by, any exam board. This document has {total} pages.</div>
        </section>
        {(pages || []).map((list, p) => {
          const sec = blocks[list.find((i) => blocks[i].type === "q") ?? list[0]]?.q?.kind === "mc" ? "A" : "B";
          return (
            <section key={p} className="tp-page">
              <Header sec={sec} />
              <div className="tp-body">{list.map((i) => <Block key={blocks[i].key} b={blocks[i]} {...props} />)}</div>
              <Footer n={p + 2} last={p === pages.length - 1} />
            </section>
          );
        })}
      </div>
    </div>
  );
}
