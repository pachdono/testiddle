// The Real papers page: official free practice tests and past papers, each opening
// at its publisher, and the ones with an answer key sat here on an answer sheet
// against the clock, then marked against the key you paste from the scoring guide.

import { useEffect, useMemo, useRef, useState } from "react";
import { PageHead } from "./ui.jsx";
import { H } from "./heavy.js";
import { REAL_GROUPS, REAL_PAPERS, parseKey, markSheet } from "./realpapers.js";
import Review from "./Review.jsx";

const SHEET = "testiddle-sheet";
const HISTORY = "testiddle-real-history";

const read = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const write = (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } };

const clock = (s) => {
  const m = Math.floor(Math.max(0, s) / 60), r = Math.max(0, s) % 60;
  return `${m}:${String(r).padStart(2, "0")}`;
};
const lettersOf = (n) => Array.from({ length: n }, (_, i) => String.fromCharCode(65 + i));

export default function RealPapers({ head }) {
  const [sheet, setSheet] = useState(() => read(SHEET, null)); // the paper being sat
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState(() => read(HISTORY, []));

  const paperOf = (s) => REAL_PAPERS.find((p) => p.id === s?.paperId);
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

  function saveResult(r) {
    const row = { id: Date.now(), paper: paper.name, section: section.name, right: r.right, total: r.total, minutes: r.minutes, on: new Date().toISOString().slice(0, 10) };
    const next = [row, ...history].slice(0, 30);
    write(HISTORY, next); setHistory(next);
  }

  if (result && paper && section) return <Result paper={paper} section={section} result={result} onSave={saveResult} onDone={leave} onAgain={() => start(paper, section)} />;
  if (sheet && paper && section) {
    if (sheet.step === "key") return <KeyStep paper={paper} section={section} sheet={sheet} onBack={() => update({ step: "sit" })} onMarked={setResult} onDiscard={leave} />;
    return <Sit paper={paper} section={section} sheet={sheet} onAnswer={(answers) => update({ answers })} onSubmit={() => update({ step: "key", usedSeconds: Math.min(section.minutes * 60, Math.round((Date.now() - sheet.startedAt) / 1000)) })} onLeave={leave} />;
  }
  return <List head={head} onStart={start} history={history} onClear={() => { write(HISTORY, []); setHistory([]); }} />;
}

/* ---------- the list ---------- */

function List({ head, onStart, history, onClear }) {
  return (
    <div className="rp">
      {head}
      <p className="small muted rp-intro">
        These are the real exams, from the people who write them. The papers belong to their publishers, so they open on the
        official site. Where there is an answer key you can sit the paper here on a timed answer sheet, paste in the key from
        the scoring guide, and get it marked, then go back through every question.
      </p>
      {REAL_GROUPS.map((g) => (
        <section key={g.id} className="rp-group">
          <div className="rp-grouphead"><h2>{g.name}</h2><p className="small muted">{g.sub}</p></div>
          <div className="rp-grid">
            {REAL_PAPERS.filter((p) => p.group === g.id).map((p) => (
              <article key={p.id} className="card card-pad rp-card">
                <div className="spread"><h3>{p.name}</h3><span className="pill">{p.org}</span></div>
                <p className="small rp-blurb">{p.blurb}</p>
                {p.sections.length > 0 && (
                  <div className="rp-sects">
                    <span className="small muted">Sit it here</span>
                    {p.sections.map((s) => (
                      <button key={s.id} className="btn ghost small" onClick={() => onStart(p, s)}>{s.name}, {s.questions} questions, {s.minutes} min</button>
                    ))}
                  </div>
                )}
                <div className="row">
                  <a className="btn small" href={p.url} target="_blank" rel="noopener noreferrer">Open the official paper</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      {history.length > 0 && (
        <section className="rp-group">
          <div className="rp-grouphead spread"><h2>Your real paper results</h2><button className="ti-linkbtn" onClick={onClear}>Clear</button></div>
          <div className="card">
            {history.map((h) => (
              <div key={h.id} className="rp-hist">
                <div><b>{h.paper}</b><div className="small muted">{h.section}, {h.on}</div></div>
                <div className="rp-score"><b>{h.right} / {h.total}</b><span className="small muted">{Math.round((h.right / Math.max(1, h.total)) * 100)}%</span></div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

/* ---------- sitting the paper ---------- */

function Sit({ paper, section, sheet, onAnswer, onSubmit, onLeave }) {
  const total = section.minutes * 60;
  const [now, setNow] = useState(Date.now());
  const left = total - Math.floor((now - sheet.startedAt) / 1000);
  const text = paper.letters === "text";
  const options = useMemo(() => lettersOf(section.choices), [section.choices]);
  const answers = sheet.answers || {};
  const answered = Object.values(answers).filter((v) => String(v ?? "").trim() !== "").length;
  const done = useRef(false);

  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  useEffect(() => { if (left <= 0 && !done.current) { done.current = true; onSubmit(); } }, [left]); // eslint-disable-line react-hooks/exhaustive-deps

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

      <div className="card card-pad">
        <div className="rp-sheet" role="group" aria-label="Answer sheet">
          {Array.from({ length: section.questions }, (_, n) => (
            <div key={n} className={"rp-row" + (String(answers[n] ?? "").trim() !== "" ? " done" : "")}>
              <span className="rp-num">{n + 1}</span>
              {text ? (
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
  // a scaled estimate only means something when the whole section was keyed
  const est = paper.test && H()?.estimate && total === section.questions ? H().estimate(paper.test, right, total) : null;
  const items = rows.map((r) => ({ n: r.n, status: r.status, yours: r.yours, correct: r.correct, skill: section.name }));

  useEffect(() => { if (!saved) { onSave({ right, total, minutes: result.minutes }); setSaved(true); } }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="page fade">
      <PageHead title={`${paper.name}, ${section.name}`} sub={`${right} of ${total} correct`} />
      <div className="stack">
        <div className="card card-pad score-card">
          <div className="score-main">
            <span className="score-value">{pct}%</span>
            <span className="score-unit">{right} right, {missed} wrong{blank ? `, ${blank} blank` : ""}</span>
          </div>
          {est && (
            <div className="score-side">
              <div className="spread small"><span className="muted">Estimated scaled score for this section alone</span><b>{est.scaled}</b></div>
              <p className="small muted" style={{ margin: "8px 0 0" }}>{est.unit}. A real score combines every section and uses the publisher's own conversion table, so use the one in the scoring guide for the true number.</p>
            </div>
          )}
        </div>

        {total < section.questions && <p className="small muted">The key you pasted covered {total} of {section.questions} questions, so only those were marked and there is no scaled estimate.</p>}

        <Review items={items} test={paper.name} section={section.name} explainable />

        <div className="row">
          <button className="btn ghost" onClick={onAgain}>Sit it again</button>
          <button className="btn cta" onClick={onDone}>Back to real papers</button>
        </div>
      </div>
    </div>
  );
}
