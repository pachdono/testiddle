// The Real papers page: official free practice tests and past papers, each opening
// at its publisher, and the ones with an answer key sat here on an answer sheet
// against the clock, then marked against the key you paste from the scoring guide.

import { useEffect, useMemo, useRef, useState } from "react";
import { PageHead } from "./ui.jsx";
import { REAL_PAPERS, OWN_SECTIONS, ownPaper, parseKey, markSheet, markOwn } from "./realpapers.js";
import { PPQ } from "./ppq.js";
import { COURSES, courseOf, dayOf } from "./courses.js";
import CoursePage from "./CoursePage.jsx";
import Review from "./Review.jsx";
import PdfStudio from "./PdfStudio.jsx";
import DigitalSat from "./DigitalSat.jsx";

const SHEET = "testiddle-sheet";
const HISTORY = "testiddle-real-history";

const read = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const write = (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } };

const clock = (s) => {
  const t = Math.max(0, s), h = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60), r = t % 60;
  const two = (n) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${two(m)}:${two(r)}` : `${m}:${two(r)}`;
};
const lettersOf = (n) => Array.from({ length: n }, (_, i) => String.fromCharCode(65 + i));

export default function RealPapers({ path, nav, ...rest }) {
  const [sheet, setSheet] = useState(() => read(SHEET, null)); // the paper being sat
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState(() => read(HISTORY, []));
  // The address says where you are, so Back works and a test can be shared: /real/sat/paper-sat-test-2
  const [, detail, slug] = /^\/real(?:\/([^/]+))?(?:\/([^/]+))?\/?$/.exec(path) || [];
  const [pdf, setPdf] = useState(null); // a paper the student downloaded, shown beside the sheet; it stays in this browser

  const paperOf = (s) => REAL_PAPERS.find((p) => p.id === s?.paperId) || ownPaper(s?.paperId);
  const paper = paperOf(sheet);
  const section = paper?.sections.find((x) => x.id === sheet?.sectionId);

  function start(p, s) {
    const next = { paperId: p.id, sectionId: s.id, answers: {}, startedAt: Date.now(), step: "sit" };
    write(SHEET, next); setSheet(next); setResult(null);
  }
  function update(patch) {
    setSheet((cur) => { const next = { ...cur, ...patch }; write(SHEET, next); return next; });
  }
  function leave() { write(SHEET, null); setSheet(null); setResult(null); }
  function takePdf(file) {
    if (!file) return;
    setPdf((cur) => { if (cur?.url) URL.revokeObjectURL(cur.url); return { name: file.name, url: URL.createObjectURL(file) }; });
  }

  function saveResult(r) {
    const row = { id: Date.now(), paper: paper.name, section: section.name, right: r.right, total: r.total, minutes: r.minutes, on: dayOf() };
    const next = [row, ...history].slice(0, 30);
    write(HISTORY, next); setHistory(next);
  }

  // Our own tests carry their key, so they are marked the moment the sheet goes in.
  async function submit() {
    const used = Math.min(section.minutes * 60, Math.round((Date.now() - sheet.startedAt) / 1000));
    if (!paper.own) { update({ step: "key", usedSeconds: used }); return; }
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}papers/${paper.own.kind}-${paper.own.n}.json`);
      if (!res.ok) throw new Error("missing");
      const data = await res.json();
      const mod = data.modules.find((m) => m.id.toLowerCase() === section.id);
      const rows = markOwn(sheet.answers || {}, mod);
      setResult({ rows, right: rows.filter((r) => r.status === "right").length, total: rows.length, minutes: Math.round(used / 60) });
    } catch {
      window.alert("The answer key could not be loaded. Check your connection and press Submit again. Your answers are saved.");
    }
  }

  if (result && paper && section) return <Result paper={paper} section={section} result={result} onSave={saveResult} onDone={leave} onAgain={() => start(paper, section)} />;
  if (sheet && paper && section) {
    if (sheet.step === "key") return <KeyStep paper={paper} section={section} sheet={sheet} onBack={() => update({ step: "sit" })} onMarked={setResult} onDiscard={leave} />;
    return <Sit paper={paper} section={section} sheet={sheet} pdf={paper.own ? { name: paper.name, own: `${paper.own.kind}-${paper.own.n}-paper`, url: `${import.meta.env.BASE_URL}papers/${paper.own.kind}-${paper.own.n}.pdf` } : pdf} onAnswer={(answers) => update({ answers })} onSubmit={submit} onLeave={leave} />;
  }
  const sat = REAL_PAPERS.find((p) => p.id === "sat");
  const entry = detail === "sat" && slug ? findNumbered(sat, slug) : null;
  const course = entry ? courseOf(entry.title) : COURSES.find((c) => path === `/course/${c.id}`);
  const back = () => nav(`/course/${course?.id || COURSES[0].id}`);
  if (entry?.digitalId) return <DigitalSat n={entry.digitalId} title={entry.title} onBack={back} />;
  if (entry) return <PaperPage entry={entry} paper={sat} pdf={pdf} onPdf={takePdf} onClearPdf={() => { if (pdf?.url) URL.revokeObjectURL(pdf.url); setPdf(null); }} onStart={start} onBack={back} />;
  return <CoursePage course={course || COURSES[0]} history={history} onOpen={(e) => nav(`/real/sat/${e.slug}`)} entries={entriesOf(sat, course || COURSES[0])} onClear={() => { write(HISTORY, []); setHistory([]); }} nav={nav} {...rest} />;
}



// The small coloured badge beside a test's name.
function Tile() {
  return <span className="rp-tile" style={{ background: "#2f6fb0" }} aria-hidden="true">SAT</span>;
}

const slugify = (t) => String(t).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

// One numbered test as a card or a page needs it. Its slug is what goes in the address.
function numberedEntry(paper, cfg, g, n) {
  const slug = `${slugify(g.name)}-test-${n}`;
  if (g.digital) {
    return { key: `${g.name}-${n}`, slug, tile: paper.id, title: g.title(n), subtitle: "Testiddle computer test", org: "Testiddle", minutes: g.minutes, questions: g.questions, sections: [], digitalId: n, links: {}, note: g.blurb };
  }
  if (g.own) {
    const base = `${import.meta.env.BASE_URL}papers/${g.own}-${n}`;
    return { key: `${g.name}-${n}`, slug, tile: paper.id, title: g.title(n), subtitle: "Testiddle practice test", org: "Testiddle", minutes: g.minutes, questions: g.questions, minutesEditable: true,
      sections: OWN_SECTIONS, ownId: `${g.own}-${n}`, pdfUrl: `${base}.pdf`, markUrl: `${base}-markscheme.pdf`, links: {}, note: g.note };
  }
  return null;
}
function findNumbered(paper, slug) {
  const cfg = PPQ[paper.id];
  if (!cfg?.numbered) return null;
  for (const g of cfg.groups) for (let n = 1; n <= g.count; n++) { const e = numberedEntry(paper, cfg, g, n); if (e.slug === slug) return e; }
  return null;
}

// The numbered tests of one course, as the entries a page opens.
function entriesOf(paper, course) {
  const cfg = PPQ[paper.id];
  const g = cfg.groups.find((x) => x.name === course.group);
  return Array.from({ length: g.count }, (_, i) => numberedEntry(paper, cfg, g, i + 1));
}

/* ---------- one paper's page ---------- */

// The paper on the left, and on the right the clock, the mark scheme and the answer sheet.
function PaperPage({ entry, pdf, onPdf, onClearPdf, onStart, onBack, paper }) {
  const fileRef = useRef(null);
  const startMins = entry.ownId ? 32 : entry.minutes || 60; // our tests are sat a module at a time
  const [mins, setMins] = useState(startMins);
  const [left, setLeft] = useState(startMins * 60);
  const [running, setRunning] = useState(false);
  const [over, setOver] = useState(false);
  const [tab, setTab] = useState("paper"); // the question paper or its mark scheme
  const [where, setWhere] = useState(null); // which page each part starts on, for the jump buttons
  useEffect(() => {
    if (!entry.ownId) return undefined;
    let dead = false;
    fetch(`${import.meta.env.BASE_URL}papers/${entry.ownId}.json`).then((r) => r.json()).then((d) => { if (!dead) setWhere(d.pages || null); }).catch(() => {});
    return () => { dead = true; };
  }, [entry.ownId]);
  const jumps = where && tab === "paper" ? [["Cover", where.cover], ["Reading and Writing 1", where.rw1], ["Reading and Writing 2", where.rw2], ["Math 1", where.m1], ["Math 2", where.m2], ["Answer sheet", where.sheet]].filter(([, pg]) => pg).map(([label, page]) => ({ label, page })) : [];

  useEffect(() => {
    if (!running) return undefined;
    const t = setInterval(() => setLeft((n) => { if (n <= 1) { setRunning(false); setOver(true); return 0; } return n - 1; }), 1000);
    return () => clearInterval(t);
  }, [running]);

  const changeMins = (v) => { const m = Math.max(1, Math.min(300, Number(v) || 1)); setMins(m); if (!running) { setLeft(m * 60); setOver(false); } };
  const reset = () => { setRunning(false); setOver(false); setLeft(mins * 60); };

  return (
    <div className="page wide fade paper-page">

      <div className="pp-layout">
        <section className="card pp-doc" aria-label="The paper">
          {entry.pdfUrl ? (
            <>
              <PdfStudio key={tab} lead={(
                <>
                <button className="btn ghost small pp-back" onClick={onBack}>&lsaquo; Back</button>
                <div className="seg tight" role="tablist" aria-label="Paper or mark scheme">
                  <button role="tab" aria-selected={tab === "paper"} className={tab === "paper" ? "on" : ""} onClick={() => setTab("paper")}>Question paper</button>
                  <button role="tab" aria-selected={tab === "mark"} className={tab === "mark" ? "on" : ""} onClick={() => setTab("mark")}>Mark scheme</button>
                </div>
                </>
              )} url={tab === "mark" ? entry.markUrl : entry.pdfUrl} paperKey={`${entry.ownId}-${tab}`} title={`${entry.title}${tab === "mark" ? " mark scheme" : ""}`} />
            </>
          ) : pdf ? (
            <>
              <div className="pp-docbar small"><b>{pdf.name}</b><button className="ti-linkbtn" onClick={onClearPdf}>Remove</button></div>
              <iframe title={entry.title} src={pdf.url} />
            </>
          ) : (
            <div className="pp-drop">
              <Tile id={entry.tile} />
              <h2>{entry.title}</h2>
              <p className="muted">{entry.subtitle}</p>
              <p className="small">Find the paper, download it, then add the PDF here. It opens in this window next to the clock and stays in your browser.</p>
              <div className="row">
                <a className="btn cta" href={entry.links.paper} target="_blank" rel="noopener noreferrer">Find the question paper</a>
                <button className="btn ghost" onClick={() => fileRef.current?.click()}>Add your PDF</button>
              </div>
              <input ref={fileRef} type="file" accept="application/pdf,.pdf" hidden onChange={(e) => { onPdf(e.target.files?.[0]); e.target.value = ""; }} />
            </div>
          )}
        </section>

        <aside className="pp-side" aria-label="Paper tools">
          <div className="card card-pad pp-head">
            <Tile id={entry.tile} />
            <div>
              <h1>{entry.title}</h1>
              <p className="muted">{entry.subtitle}</p>
              <div className="rp-tags">
                {entry.code && <span className="rp-tag">Exam code {entry.code}</span>}
                {entry.minutes > 0 && <span className="rp-tag">{entry.minutes} mins</span>}
                {entry.questions > 0 && <span className="rp-tag">{entry.questions} questions</span>}
              </div>
            </div>
          </div>

          <div className="card card-pad pp-timer">
            <div className="pp-clock" aria-live="off">{clock(left)}</div>
            {over && <div className="small pp-over">Time is up. Stop writing.</div>}
            <div className="row pp-timerbtns">
              {!running
                ? <button className="btn cta pp-start" onClick={() => { if (left <= 0) reset(); setRunning(true); setOver(false); }}>{left === mins * 60 || left <= 0 ? "Start timer" : "Resume"}</button>
                : <button className="btn pp-start" onClick={() => setRunning(false)}>Pause</button>}
              <button className="btn ghost" onClick={reset}>Reset</button>
            </div>
            {entry.ownId && (
              <div className="pp-chips" role="group" aria-label="Timer length">
                {[["Reading and Writing", 32], ["Math", 35], ["Whole test", entry.minutes]].map(([label, m]) => <button key={label} className={"rp-filter small" + (mins === m ? " on" : "")} onClick={() => changeMins(m)}>{label} {m}</button>)}
              </div>
            )}
            {entry.minutesEditable !== false && (
              <label className="pp-mins small muted">Minutes <input type="number" min="1" max="300" value={mins} onChange={(e) => changeMins(e.target.value)} aria-label="Minutes for the timer" /></label>
            )}
          </div>

          {jumps.length > 0 && (
            <div className="card card-pad pp-jump">
              <b>Jump to</b>
              <div className="pp-jumps">{jumps.map((j) => <button key={j.label} className="ps-chip" onClick={() => document.querySelector(`.ps-scroll [data-page="${j.page}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" })}>{j.label}</button>)}
</div>
            </div>
          )}
          {entry.pdfUrl && (
            <div className="card pp-links">
              <button className="pp-link" onClick={() => setTab("mark")}><span>Mark scheme</span><i aria-hidden="true">&rsaquo;</i></button>
              <a className="pp-link" href={entry.pdfUrl} target="_blank" rel="noopener noreferrer"><span>View PDF in browser</span><i aria-hidden="true">&rsaquo;</i></a>
              <a className="pp-link" href={entry.markUrl} target="_blank" rel="noopener noreferrer"><span>Mark scheme PDF</span><i aria-hidden="true">&rsaquo;</i></a>
            </div>
          )}
          {entry.links.paper && <div className="card pp-links">
            <a className="pp-link" href={entry.links.paper} target="_blank" rel="noopener noreferrer"><span>Question paper</span><i aria-hidden="true">&rsaquo;</i></a>
            <a className="pp-link" href={entry.links.mark} target="_blank" rel="noopener noreferrer"><span>{entry.links.report ? "Mark scheme" : "Answers and scoring"}</span><i aria-hidden="true">&rsaquo;</i></a>
            {entry.links.report && <a className="pp-link" href={entry.links.report} target="_blank" rel="noopener noreferrer"><span>Examiner's report</span><i aria-hidden="true">&rsaquo;</i></a>}
          </div>}

          {entry.sections?.length > 0 && (
            <div className="card card-pad pp-sheet">
              <b>Answer sheet</b>
              <p className="small muted">{entry.ownId ? "Sit one module at a time on the answer sheet. It is marked the moment you submit, and you can go through every question with its explanation." : "Fill in your answers as you go, then paste the key to be marked and go through every question."}</p>
              {entry.sections.map((s) => <button key={s.id} className="btn ghost small" onClick={() => onStart(entry.ownId ? ownPaper(entry.ownId) : paper, s)}>{s.name}, {s.questions} questions</button>)}
            </div>
          )}

          <p className="small muted pp-note">{entry.note}</p>
        </aside>
      </div>
    </div>
  );
}

/* ---------- sitting the paper ---------- */

function Sit({ paper, section, sheet, pdf, onAnswer, onSubmit, onLeave }) {
  const total = section.minutes * 60;
  const [now, setNow] = useState(Date.now());
  const left = total - Math.floor((now - sheet.startedAt) / 1000);
  const text = paper.letters === "text";
  const typed = (n) => text || (section.textFrom != null && n >= section.textFrom);
  const options = useMemo(() => lettersOf(section.choices), [section.choices]);
  const answers = sheet.answers || {};
  const answered = Object.values(answers).filter((v) => String(v ?? "").trim() !== "").length;
  const done = useRef(false);

  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  useEffect(() => { if (left <= 0 && !done.current) { done.current = true; onSubmit(); } }, [left]);

  const set = (n, v) => onAnswer({ ...answers, [n]: v });
  const act = paper.letters === "act";
  // the ACT prints F G H J on even questions, so show what the paper shows
  const labelFor = (n, k) => (act && n % 2 === 1 ? "FGHJK"[k] : "ABCDE"[k]);

  return (
    <div className="page fade rp-sit">
      <PageHead title={paper.name} sub={`${section.name}. Mark your answers here as you work through the paper from the publisher.`} />
      <div className="card card-pad rp-bar">
        <div><span className="small muted">Time left</span><b className={"rp-clock" + (left < 300 ? " low" : "")}>{clock(left)}</b></div>
        <div><span className="small muted">Answered</span><b>{answered} of {section.questions}</b></div>
        <div className="row">
          <button className="btn ghost small" onClick={() => { if (window.confirm("Stop and throw this sheet away?")) onLeave(); }}>Stop</button>
          <button className="btn cta small" onClick={() => { if (answered === section.questions || window.confirm(`${section.questions - answered} questions are blank. Submit anyway?`)) onSubmit(); }}>Submit sheet</button>
        </div>
      </div>
      {section.note && <p className="small muted">{section.note}</p>}

      <div className={pdf ? "rp-split" : ""}>
      {pdf && (
        <div className="card rp-pdf">
          {pdf.own ? <PdfStudio url={pdf.url} paperKey={pdf.own} title={pdf.name} /> : <iframe title="Your paper" src={pdf.url} />}
          <a className="small" href={pdf.url} target="_blank" rel="noopener noreferrer">Open the paper in its own tab</a>
        </div>
      )}
      <div className="card card-pad">
        <div className="rp-sheet" role="group" aria-label="Answer sheet">
          {Array.from({ length: section.questions }, (_, n) => (
            <div key={n} className={"rp-row" + (String(answers[n] ?? "").trim() !== "" ? " done" : "")}>
              <span className="rp-num">{n + 1}</span>
              {typed(n) ? (
                <input type="text" value={answers[n] || ""} onChange={(e) => set(n, e.target.value)} aria-label={`Answer ${n + 1}`} autoComplete="off" autoCapitalize="none" spellCheck={false} />
              ) : (
                <div className="rp-bubbles">
                  {options.map((o, k) => (
                    <button key={o} type="button" className={"rp-bubble" + (answers[n] === o ? " on" : "")} aria-pressed={answers[n] === o} aria-label={`Question ${n + 1}, ${labelFor(n, k)}`}
                      onClick={() => set(n, answers[n] === o ? "" : o)}>{labelFor(n, k)}</button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

/* ---------- the key ---------- */

function KeyStep({ paper, section, sheet, onBack, onMarked, onDiscard }) {
  const [raw, setRaw] = useState("");
  const letters = paper.letters || "mc";
  const key = useMemo(() => parseKey(raw, section.questions, { choices: section.choices, letters }), [raw, section, letters]);
  const found = key.filter((k) => k !== null).length;

  function mark() {
    const rows = markSheet(sheet.answers || {}, key, { letters });
    const keyed = rows.filter((r) => !r.unkeyed && key[r.n] !== null);
    const right = keyed.filter((r) => r.status === "right").length;
    onMarked({ rows: keyed, right, total: keyed.length, minutes: Math.round((sheet.usedSeconds ?? section.minutes * 60) / 60), key });
  }

  return (
    <div className="page fade">
      <PageHead title="Mark your paper" sub={`${paper.name}, ${section.name}. Paste the answer key from the publisher's scoring guide.`} />
      <div className="card card-pad stack">
        <p className="small">
          Open the official answer key or scoring guide, then paste the answers for this section below. Any of these layouts works:
          a run of letters like <code>BCDAB</code>, numbered pairs like <code>1 B  2 C</code>, or one answer a line{paper.letters === "text" ? " (write alternatives with a slash, like colour / color)" : ""}.
        </p>
        <textarea rows={7} value={raw} onChange={(e) => setRaw(e.target.value)} placeholder="Paste the key here" aria-label="Answer key" />
        <div className="spread">
          <span className={"small " + (found === section.questions ? "" : "muted")}>Read {found} of {section.questions} answers{found > 0 && found < section.questions ? ". Only those will be marked." : ""}</span>
          <div className="row">
            <button className="btn ghost small" onClick={onBack}>Back to the sheet</button>
            <button className="btn cta" onClick={mark} disabled={found === 0}>Mark my paper</button>
          </div>
        </div>
        <button className="ti-linkbtn" onClick={() => { if (window.confirm("Throw this sheet away without marking it?")) onDiscard(); }}>Discard this sheet</button>
      </div>
    </div>
  );
}

/* ---------- the result ---------- */

function Result({ paper, section, result, onSave, onDone, onAgain }) {
  const [saved, setSaved] = useState(false);
  const { right, total, rows } = result;
  const missed = rows.filter((r) => r.status === "wrong").length;
  const blank = rows.filter((r) => r.status === "blank").length;
  const pct = total ? Math.round((right / total) * 100) : 0;
  const items = rows.map((r) => r.item || { n: r.n, status: r.status, yours: r.yours, correct: r.correct, skill: section.name });

  useEffect(() => { if (!saved) { onSave({ right, total, minutes: result.minutes }); setSaved(true); } }, []);

  return (
    <div className="page fade">
      <PageHead title={`${paper.name}, ${section.name}`} sub={`${right} of ${total} correct`} />
      <div className="stack">
        <div className="card card-pad score-card">
          <div className="score-main">
            <span className="score-value">{pct}%</span>
            <span className="score-unit">{right} right, {missed} wrong{blank ? `, ${blank} blank` : ""}</span>
          </div>
        </div>


        <Review items={items} test={paper.name} section={section.name} explainable={!paper.own} />

        <div className="row">
          <button className="btn ghost" onClick={onAgain}>Sit it again</button>
          <button className="btn cta" onClick={onDone}>Back to real papers</button>
        </div>
      </div>
    </div>
  );
}
