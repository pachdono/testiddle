// The study tools in a course: quiz (with the three step set up), flashcards, cheat sheets and key terms.

import { useEffect, useMemo, useState } from "react";
import { CARDS, SHEETS, TERMS } from "./content.js";
import { QUESTION_COUNT, doneFrom, isRight, loadBank, pickQuiz, skillsOf } from "./bank.js";
import { cardRatings, logQuiz, quizLog, rateCard } from "./progress.js";
import { Modal } from "./Courses.jsx";
import { Critter, CritterFor } from "./Critters.jsx";

const Html = ({ html, className = "" }) => <div className={"dq-html " + className} dangerouslySetInnerHTML={{ __html: html }} />;

/* ---------- quiz ---------- */

export function QuizTab({ onXp, startOpen = false, onExam, onCards, openSkill }) {
  const [bank, setBank] = useState(null);
  const [failed, setFailed] = useState(false);
  const [wizard, setWizard] = useState(startOpen);
  const [log, setLog] = useState(quizLog);
  useEffect(() => { loadBank().then(setBank).catch(() => setFailed(true)); }, []);
  const done = doneFrom(log);
  const answered = Object.keys(done).length, right = Object.values(done).filter(Boolean).length;
  const skills = bank ? skillsOf(bank) : [];

  if (wizard && bank) return <Wizard bank={bank} done={done} onExam={onExam} onCards={onCards} onClose={() => { setWizard(false); setLog(quizLog()); onXp?.(); }} />;
  return (
    <div className="cg-stack">
      <section className="cg-card cg-quizhero"><Critter who="tiddle" where="top" at="78%" />
        <span className="cg-tag">Quiz</span>
        <div><b className="cg-bigger">{answered}</b><span className="muted"> of {QUESTION_COUNT} questions answered</span><div className="small muted">{answered ? `${Math.round((right / answered) * 100)}% right so far` : "Test yourself on any skill."}</div></div>
        <button className="cg-btn primary" disabled={!bank} onClick={() => setWizard(true)}>{failed ? "Could not load" : bank ? "Create a quiz" : "Loading"}</button>
      </section>
      {skills.length > 0 && ["Reading and Writing", "Math"].map((subject) => (
        <section key={subject} className="cg-card"><span className="cg-tag">{subject}</span>
          <div className="cg-skills">{skills.filter((s) => s.subject === subject).map((s) => {
            const ids = bank.filter((q) => q.subject === s.subject && q.skill === s.skill).map((q) => q.id);
            const n = ids.filter((id) => id in done).length;
            return <div key={s.skill} className="cg-skill"><button className="cg-link inline" onClick={() => openSkill?.(s)}>{s.skill}</button><span className="cg-meter"><i style={{ width: `${(n / ids.length) * 100}%` }} /></span><small className="muted">{n} / {ids.length}</small></div>;
          })}</div>
        </section>
      ))}
    </div>
  );
}

export function Wizard({ bank, done, onClose, onExam, onCards }) {
  const [step, setStep] = useState(1);
  const [activity, setActivity] = useState("quiz");
  const [picked, setPicked] = useState(() => new Set());
  const [count, setCount] = useState(15);
  const [mode, setMode] = useState("learn");
  const [quiz, setQuiz] = useState(null);
  const skills = skillsOf(bank);
  const avail = bank.filter((q) => picked.has(`${q.subject}|${q.skill}`));
  const max = Math.min(40, avail.length);
  const n = Math.min(count, max) || 0;
  const key = (s) => `${s.subject}|${s.skill}`;
  const toggle = (s) => setPicked((p) => { const x = new Set(p); x.has(key(s)) ? x.delete(key(s)) : x.add(key(s)); return x; });
  const mix = pickQuiz(bank, { skills: picked, count: n, mode }, done);
  const fresh = mix.filter((q) => !(q.id in done)).length, wrong = mix.filter((q) => done[q.id] === false).length;

  if (quiz) return <Runner questions={quiz} onClose={onClose} />;
  return (
    <div className="cg-wizard">
      <header><button className="cg-wx" aria-label={step === 1 ? "Close" : "Back"} onClick={() => (step === 1 ? onClose() : setStep(step - 1))}>{step === 1 ? "×" : "←"}</button><h2>{step === 1 ? "Create a revision session" : step === 2 ? "Select your skills" : activity === "exam" ? "Customise your paper" : "Customise your quiz"}</h2><span className="cg-step">Step {step} of 3</span></header>
      <div className="cg-wbody">
        {step === 1 && <section className="cg-card cg-pick"><Critter who="inky" where="side" at="50%" /><span className="cg-tag">Select an activity</span>
          <button onClick={() => { setActivity("quiz"); setStep(2); }}><i className="blue">?</i><span><b>Quiz</b><small className="muted">Test your knowledge with a quiz of questions.</small></span><em>&rsaquo;</em></button>
          {onCards && <button onClick={() => { setActivity("cards"); setStep(2); }}><i className="green">{"\u2750"}</i><span><b className="green">Flashcards</b><small className="muted">Review the key ideas of each skill with a flashcard deck.</small></span><em>&rsaquo;</em></button>}
          {onExam && <button onClick={() => { setActivity("exam"); setStep(2); }}><i className="amber">{"\u2630"}</i><span><b className="amber">Exam</b><small className="muted">Practise answering exam questions, marked one by one.</small></span><em>&rsaquo;</em></button>}
        </section>}
        {step === 2 && <>
          <div className="cg-wbar"><span className="small">{picked.size} of {skills.length} selected</span><button className="cg-link" onClick={() => setPicked(picked.size === skills.length ? new Set() : new Set(skills.map(key)))}>{picked.size === skills.length ? "Clear all" : "Select all"}</button></div>
          {["Reading and Writing", "Math"].map((subject) => <section key={subject} className="cg-card cg-picklist"><span className="cg-tag">{subject}</span>
            {skills.filter((s) => s.subject === subject).map((s) => <label key={s.skill}><input type="checkbox" checked={picked.has(key(s))} onChange={() => toggle(s)} /><span>{s.skill}</span><small className="muted">{s.count} questions</small></label>)}
          </section>)}
        </>}
        {step === 3 && <section className="cg-card cg-mix"><Critter who="sprout" where="corner" at="92%" /><span className="cg-tag">Your quiz mix</span>
          <div className="cg-spread"><b>{n} questions</b><span className="small muted">Max: {max}</span></div>
          <input type="range" min={Math.min(5, max)} max={max} value={n} onChange={(e) => setCount(Number(e.target.value))} aria-label="Number of questions" />
          <p className="small">This quiz will include <b className="good">{mix.length - fresh - wrong} previously correct</b>, <b className="bad">{wrong} previously incorrect</b>, and <b>{fresh} new questions</b>.</p>
          <div className="cg-modes">{[["learn", "Learn", "Mostly new questions, covering material you haven't seen yet."], ["balanced", "Balanced", "A mix of new questions and ones you got wrong."], ["fix", "Fix mistakes", "Focus on what you got wrong by prioritising past mistakes."]].map(([id, name, d]) => <button key={id} className={mode === id ? "on" : ""} onClick={() => setMode(id)}><span className="cg-modetag">{name}</span><small>{d}</small></button>)}</div>
        </section>}
      </div>
      {step > 1 && <footer><span className="cg-chipsm blue">{{ quiz: "Quiz", cards: "Flashcards", exam: "Exam" }[activity]}</span><span className="cg-chipsm">{picked.size} skills</span><span className="spacer" />{step === 3 && <small className="muted">{avail.length} questions available</small>}
        <button className="cg-btn primary" disabled={step === 2 ? picked.size === 0 : n === 0} onClick={() => { if (step === 2 && activity === "cards") { onCards(picked); return; } if (step === 2) { setStep(3); return; } if (activity === "exam") onExam(mix); else setQuiz(mix); }}>{step === 2 && activity !== "cards" ? "Next" : "Start"}</button></footer>}
    </div>
  );
}

function Runner({ questions, onClose }) {
  const [i, setI] = useState(0);
  const [pick, setPick] = useState("");
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const q = questions[i];
  const right = checked && isRight(q, pick);

  if (finished) {
    return (<div className="cg-wizard"><header><button className="cg-wx" aria-label="Close" onClick={onClose}>&times;</button><h2>Quiz finished</h2></header>
      <div className="cg-wbody"><section className="cg-card cg-summary"><Critter who="tiddle" where="top" at="50%" /><span className="cg-tag">Result</span><b className="cg-bigger">{score} / {questions.length}</b><span className="muted">{Math.round((score / Math.max(1, questions.length)) * 100)}% right</span><button className="cg-btn primary" onClick={onClose}>Done</button></section></div></div>);
  }
  const check = () => { if (!String(pick).trim()) return; setChecked(true); const ok = isRight(q, pick); if (ok) setScore((s) => s + 1); logQuiz(q.id, ok); };
  const next = () => { if (i + 1 >= questions.length) setFinished(true); else { setI(i + 1); setPick(""); setChecked(false); } };
  return (
    <div className="cg-wizard">
      <header><button className="cg-wx" aria-label="Leave the quiz" onClick={onClose}>&times;</button><h2>{q.skill}</h2><span className="cg-step">{i + 1} of {questions.length}</span></header>
      <div className="cg-progress"><i style={{ width: `${((i + (checked ? 1 : 0)) / questions.length) * 100}%` }} /></div>
      <div className="cg-wbody"><section className="cg-card cg-question"><CritterFor n={i} />
        {q.passage && <Html html={q.passage} className="cg-passage" />}
        {q.figure && <div className="ds-fig" dangerouslySetInnerHTML={{ __html: q.figure }} />}
        {q.table && <div className="ds-fig" dangerouslySetInnerHTML={{ __html: q.table }} />}
        <Html html={q.q} />
        {q.kind === "mc" ? <div className="cg-choices" role="radiogroup">{q.choices.map((c, k) => { const L = "ABCD"[k]; return <button key={L} role="radio" aria-checked={pick === L} disabled={checked} className={(pick === L ? "on " : "") + (checked && L === q.answer ? "right " : checked && pick === L ? "wrong" : "")} onClick={() => setPick(L)}><b>{L}</b><span>{c}</span></button>; })}</div>
          : <input className="cg-spr" inputMode="text" autoComplete="off" value={pick} disabled={checked} placeholder="Type your answer" onChange={(e) => setPick(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") (checked ? next() : check()); }} />}
        {checked && <div className={"cg-feedback " + (right ? "good" : "bad")}><b>{right ? "Correct" : `Not quite. The answer is ${q.kind === "mc" ? q.answer : q.answer}.`}</b><p>{q.why}</p></div>}
        <div className="cg-actions">{checked ? <button className="cg-btn primary" onClick={next}>{i + 1 >= questions.length ? "Finish" : "Next question"}</button> : <button className="cg-btn primary" disabled={!String(pick).trim()} onClick={check}>Check answer</button>}</div>
      </section></div>
    </div>
  );
}

/* ---------- flashcards ---------- */

const LEVELS = [[1, "Again", "bad"], [2, "Nearly", "mid"], [3, "Got it", "good"]];

export function FlashcardsTab({ onXp }) {
  const [deck, setDeck] = useState("all");
  const [ratings, setRatings] = useState(cardRatings);
  const [seed, setSeed] = useState(0);
  const [flip, setFlip] = useState(false);
  const [at, setAt] = useState(0);
  const cards = useMemo(() => {
    const list = CARDS.filter((c) => deck === "all" || (deck === "formulas" ? c.formula : c.subject === deck));
    const lvl = (c) => ratings[c.id]?.level || 0;
    // the ones you know least come first
    return [...list].sort((a, b) => lvl(a) - lvl(b) || ((a.id.length * 7 + seed) % 5) - ((b.id.length * 7 + seed) % 5));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deck, seed]);
  const card = cards[at % Math.max(1, cards.length)];
  const known = CARDS.filter((c) => (ratings[c.id]?.level || 0) >= 3).length;
  const rated = CARDS.filter((c) => ratings[c.id]?.level).length;
  const confidence = rated ? Math.round((CARDS.reduce((n, c) => n + (ratings[c.id]?.level || 0), 0) / (rated * 3)) * 100) : 0;
  const rate = (level) => { rateCard(card.id, level); setRatings(cardRatings()); setFlip(false); setAt((a) => a + 1); onXp?.(); };
  const decks = [["all", "All cards"], ["Reading and Writing", "Reading and Writing"], ["Math", "Math"], ["formulas", "Formulas"]];

  return (
    <div className="cg-stack">
      <div className="cg-filters"><div className="cg-seg">{decks.map(([id, label]) => <button key={id} className={deck === id ? "on" : ""} onClick={() => { setDeck(id); setAt(0); setFlip(false); }}>{label}</button>)}</div><span className="small muted">{known} of {CARDS.length} known, {confidence}% confidence</span><button className="cg-btn" onClick={() => { setSeed((s) => s + 1); setAt(0); setFlip(false); }}>Shuffle</button></div>
      {card && <section className="cg-card cg-flash">
        <span className="cg-tag">{card.formula ? "Formula" : card.subject}</span>
        <button className={"cg-face" + (flip ? " back" : "")} onClick={() => setFlip(!flip)} aria-label={flip ? "Show the front" : "Show the answer"}>
          <small className="muted">{flip ? "Definition" : "Term"} &middot; tap to flip</small>
          <b>{flip ? card.def : card.term}</b>
        </button>
        <div className="cg-rate" aria-label="How well did you know it">{LEVELS.map(([lvl, name, tone]) => <button key={lvl} className={"cg-btn " + tone} disabled={!flip} onClick={() => rate(lvl)}>{name}</button>)}</div>
        <small className="muted cg-count">Card {(at % cards.length) + 1} of {cards.length}</small>
      </section>}
    </div>
  );
}

/* ---------- cheat sheets ---------- */

export function SheetsTab() {
  const [open, setOpen] = useState(null);
  const sheet = SHEETS.find((s) => s.id === open);
  return (
    <div className="cg-stack">
      {["Math", "Reading and Writing"].map((subject) => <section key={subject} className="cg-card"><span className="cg-tag">{subject}</span>
        <div className="cg-gallery">{SHEETS.filter((s) => s.subject === subject).map((s) => <button key={s.id} className="cg-sheetcard" onClick={() => setOpen(s.id)}><b>{s.title}</b><small className="muted">{s.blocks.length} sections</small></button>)}</div>
      </section>)}
      {sheet && <Modal title={sheet.title} onClose={() => setOpen(null)} wide>
        <div className="cg-sheet">
          <h2>{sheet.title}</h2>
          {sheet.blocks.map(([h, lines]) => <div key={h} className="cg-block"><b>{h}</b><ul>{lines.map((l) => <li key={l}>{l}</li>)}</ul></div>)}
          <div className="cg-actions"><button className="cg-btn" onClick={() => window.print()}>Print</button></div>
        </div>
      </Modal>}
    </div>
  );
}

/* ---------- key terms ---------- */

export function TermsTab() {
  const [q, setQ] = useState("");
  const [subject, setSubject] = useState("all");
  const [letter, setLetter] = useState("");
  const list = TERMS.filter((t) => (subject === "all" || t.subject === subject) && (!q.trim() || (t.term + " " + t.def).toLowerCase().includes(q.trim().toLowerCase())) && (!letter || t.term[0].toUpperCase() === letter))
    .sort((a, b) => a.term.localeCompare(b.term));
  const letters = [...new Set(TERMS.map((t) => t.term[0].toUpperCase()))].sort();
  return (
    <div className="cg-stack">
      <div className="cg-filters"><input className="cg-search" type="search" placeholder={`Search ${TERMS.length} key terms`} value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search key terms" />
        <select value={subject} onChange={(e) => setSubject(e.target.value)} aria-label="Subject"><option value="all">All subjects</option><option>Reading and Writing</option><option>Math</option></select></div>
      <div className="cg-letters" role="group" aria-label="Letter"><button className={!letter ? "on" : ""} onClick={() => setLetter("")}>All</button>{letters.map((l) => <button key={l} className={letter === l ? "on" : ""} onClick={() => setLetter(letter === l ? "" : l)}>{l}</button>)}</div>
      <section className="cg-card cg-terms">{list.length === 0 && <div className="cg-empty">No terms match that.</div>}{list.map((t) => <div key={t.id} className="cg-term"><b>{t.term}</b><span>{t.def}</span></div>)}</section>
    </div>
  );
}
