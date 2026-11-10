// One course: a banner, then tabs like the reference: notes, quiz, flashcards, cheat sheets,
// exam practice and past papers, with key terms, results and mark schemes under More.

import { useEffect, useRef, useState } from "react";
import { historyOf, summary } from "./courses.js";
import { CourseMark } from "./Courses.jsx";
import { QuizTab, TermsTab, Wizard } from "./Study.jsx";
import { NotesTab, StudyView, ExamTab, ExamView, CardDeck, cardsFor } from "./Learn.jsx";
import { SUBTOPICS, TOPICS } from "./notes.js";
import { CARDS, SHEETS } from "./content.js";
import { cardRatings, quizLog } from "./progress.js";
import { SheetPoster, SheetThumb } from "./Posters.jsx";
import { doneFrom, loadBank } from "./bank.js";

const base = import.meta.env.BASE_URL;
const DECKS_KEY = "testiddle-decks";
const readDecks = () => { try { const d = JSON.parse(localStorage.getItem(DECKS_KEY)); return Array.isArray(d) ? d : []; } catch { return []; } };
const writeDecks = (d) => { try { localStorage.setItem(DECKS_KEY, JSON.stringify(d)); } catch { /* private mode */ } };
const pct = (h) => Math.round((h.right / Math.max(1, h.total)) * 100);

function TestRow({ entry, last, onOpen }) {
  const done = last[entry.title];
  return (
    <button className="cg-row" onClick={() => onOpen(entry)}>
      <span className="cg-rownum" aria-hidden="true">{entry.digitalId || entry.ownId?.split("-").pop()}</span>
      <span className="cg-rowtext"><b>{entry.title}</b><span className="small muted">{entry.minutes} min · {entry.questions} questions · {entry.ownId ? "Printed, auto-marked, mark scheme included" : "On screen, adaptive, with calculator and score estimate"}</span></span>
      {done ? <span className="cg-pill good">{pct(done)}% last time</span> : <span className="cg-pill">Not started</span>}
      <i className="cg-chev" aria-hidden="true">&rsaquo;</i>
    </button>
  );
}

function PastPapers({ entries, last, onOpen }) {
  const [by, setBy] = useState("test");
  const [open, setOpen] = useState({ [entries[0]?.slug]: true });
  const modules = [["rw1", "Reading and Writing, Module 1"], ["rw2", "Reading and Writing, Module 2"], ["math1", "Math, Module 1"], ["math2", "Math, Module 2"]];
  const links = (e) => e.ownId
    ? <span className="cg-pair"><a href={`${base}papers/${e.ownId}.pdf`} target="_blank" rel="noopener noreferrer">Paper</a><a href={`${base}papers/${e.ownId}-markscheme.pdf`} target="_blank" rel="noopener noreferrer">Mark scheme</a><button onClick={() => onOpen(e)}>Sit it here</button></span>
    : <span className="cg-pair"><button onClick={() => onOpen(e)}>Open test</button></span>;
  return (
    <div className="cg-stack tight">
      <div className="cg-listbar"><div className="cg-seg">{[["test", "By test"], ["section", "By section"]].map(([id, l]) => <button key={id} className={by === id ? "on" : ""} onClick={() => setBy(id)}>{l}</button>)}</div><span className="cg-spacer" /><button className="cg-btn" onClick={() => setOpen(Object.keys(open).length === entries.length ? {} : Object.fromEntries(entries.map((e) => [e.slug, true])))}>Expand all</button></div>
      {by === "test" ? <section className="cg-card cg-years">{entries.map((e) => (
        <div key={e.slug} className={"cg-year" + (open[e.slug] ? " open" : "")}>
          <button className="cg-yearhead" onClick={() => setOpen({ ...open, [e.slug]: !open[e.slug] })}><span className="cg-round">{open[e.slug] ? "▴" : "▾"}</span><b>{e.title}</b>{last[e.title] && <span className="cg-pill good">{pct(last[e.title])}% last time</span>}</button>
          {open[e.slug] && <div className="cg-yearrows"><div className="cg-yearrow"><span>{e.ownId ? "Full paper, all four modules" : "Full adaptive test, two sections"}</span>{links(e)}</div>
            {e.ownId && modules.map(([id, name]) => <div key={id} className="cg-yearrow"><span className="muted">{name}</span><span className="cg-pair"><button onClick={() => onOpen(e)}>Sit this module</button></span></div>)}</div>}
        </div>))}</section>
        : <section className="cg-card cg-years">{[["paper", "Paper tests: four modules each, written on the PDF"], ["computer", "Computer tests: two adaptive sections each"]].map(([id, name]) => (
          <div key={id} className="cg-year open"><div className="cg-yearhead"><b>{name}</b></div><div className="cg-yearrows">{entries.filter((e) => (id === "paper") === Boolean(e.ownId)).map((e) => <div key={e.slug} className="cg-yearrow"><span>{e.title}</span>{links(e)}</div>)}</div></div>))}</section>}
    </div>
  );
}

function FlashcardsIndex({ openDeck, build }) {
  const ratings = cardRatings();
  const [decks, setDecks] = useState(readDecks);
  const [open, setOpen] = useState({});
  const conf = (cards) => cards.filter((c) => (ratings[c.id]?.level || 0) >= 3).length;
  const fixed = [["Reading and Writing terms", CARDS.filter((c) => c.subject === "Reading and Writing" && !c.formula)], ["Math terms", CARDS.filter((c) => c.subject === "Math" && !c.formula)], ["Formulas", CARDS.filter((c) => c.formula)]];
  const asCards = (list) => list.map((c) => ({ id: c.id, front: c.term, back: c.def }));
  return (
    <div className="cg-stack tight">
      {decks.length > 0 && <section className="cg-card cg-years"><span className="cg-tag">Your decks</span>{decks.map((d) => {
        const cards = SUBTOPICS.filter((s) => d.skills.includes(s.id)).flatMap(cardsFor);
        return <div key={d.id} className="cg-yearrow"><button className="cg-link inline" onClick={() => openDeck(cards, d.name)}>{d.name}</button><small className="muted">{conf(cards)} / {cards.length} confident</small><button className="cg-link" onClick={() => { const n = decks.filter((x) => x.id !== d.id); setDecks(n); writeDecks(n); }}>Delete</button></div>;
      })}</section>}
      <section className="cg-card cg-years"><span className="cg-tag">Term and formula decks</span>{fixed.map(([name, list]) => <div key={name} className="cg-yearrow"><button className="cg-link inline" onClick={() => openDeck(asCards(list), name)}>{name}</button><small className="muted">{conf(list)} / {list.length} confident</small></div>)}</section>
      {TOPICS.map((t, i) => {
        const subs = SUBTOPICS.filter((s) => s.topic.id === t.id);
        const all = subs.flatMap(cardsFor);
        return (
          <section key={t.id} className={"cg-topic" + (open[t.id] ? " open" : "")}>
            <button className="cg-topichead" onClick={() => setOpen({ ...open, [t.id]: !open[t.id] })}><span className="cg-round">{open[t.id] ? "▴" : "▾"}</span><span><b>Topic {i + 1}</b> - {t.name}</span><span className="cg-meter"><i style={{ width: `${(conf(all) / all.length) * 100}%` }} /></span></button>
            {open[t.id] && <div className="cg-subs">{subs.map((s) => { const c = cardsFor(s); return <button key={s.id} onClick={() => openDeck(c, `${s.code} ${s.skill}`)}><span>{s.code} - {s.skill}</span><span className="cg-meter small"><i style={{ width: `${(conf(c) / c.length) * 100}%` }} /></span></button>; })}</div>}
          </section>
        );
      })}
      <button className="cg-link" onClick={build}>Build your own deck from several skills</button>
    </div>
  );
}

function CheatSheets() {
  const [open, setOpen] = useState(null);
  const [big, setBig] = useState(false);
  const i = SHEETS.findIndex((s) => s.id === open);
  const sheet = SHEETS[i];
  if (sheet) {
    const next = SHEETS[(i + 1) % SHEETS.length];
    return (
      <div className="cg-stack tight">
        <div className="cg-spread"><button className="cg-link" onClick={() => setOpen(null)}>&larr; See all cheat sheets</button><button className="cg-link" onClick={() => setOpen(next.id)}>Next cheat sheet &rarr;</button></div>
        <section className="cg-card cg-sheetview"><span className="cg-tag dark">Cheat sheet</span>
          <div className="cg-sheetleft"><div className="cg-spread"><small className="muted">A ONE PAGE SUMMARY OF {sheet.title.toUpperCase()}</small><button className="cg-link" onClick={() => setBig(true)}>{"\u26f6"} Expand</button></div><div className="cg-sheet"><SheetPoster sheet={sheet} /></div></div>
          <aside className="cg-sheetside"><h2>{sheet.title}</h2><p className="muted">{sheet.desc}</p><small className="muted">Illustrated by the Testiddle team</small><button className="cg-btn primary" onClick={() => window.print()}>Print or save as PDF</button></aside>
        </section>
        {big && <div className="cg-scrim dark" onMouseDown={(e) => { if (e.target === e.currentTarget) setBig(false); }} role="dialog" aria-modal="true" aria-label={sheet.title}><button className="cg-x fixed" onClick={() => setBig(false)} aria-label="Close">&times;</button><div className="cg-paper cg-sheet"><SheetPoster sheet={sheet} /></div></div>}
      </div>
    );
  }
  return (
    <div className="cg-stack tight">
      <span className="cg-chipsm">{SHEETS.length} cheat sheets</span>
      {["Math", "Reading and Writing"].map((subject) => <section key={subject} className="cg-card cg-sheetlist"><span className="cg-tag dark">{subject}</span>
        {SHEETS.filter((s) => s.subject === subject).map((s) => <button key={s.id} onClick={() => setOpen(s.id)}><SheetThumb sheet={s} /><span><b>{s.title}</b><small className="muted">{s.desc}</small></span></button>)}
      </section>)}
    </div>
  );
}

export default function CoursePage({ course, entries, history, onOpen, onClear, theme, setTheme, report }) {
  const [tab, setTab] = useState("notes");
  const [study, setStudy] = useState(null); // { sub, mode }
  const [exam, setExam] = useState(null); // { sub } or { picked, title }
  const [deck, setDeck] = useState(null); // { cards, title }
  const [wizard, setWizard] = useState(false);
  const [bank, setBank] = useState(null);
  const mine = historyOf(history, course);
  const stats = summary(history, course);
  const last = {};
  [...mine].reverse().forEach((h) => { last[h.paper] = h; });
  const tabs = [["notes", "Notes"], ["quiz", "Quiz"], ["cards", "Flashcards"], ["sheets", "Cheat sheets"], ["exam", "Exam practice"], ["papers", "Past papers"]];
  const more = [["terms", "Key terms"], ["tests", "All tests"], ...(course.marks ? [["marks", "Mark schemes"]] : []), ["results", "Results"]];
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);
  useEffect(() => {
    if (!moreOpen) return undefined;
    const f = (e) => { if (!moreRef.current?.contains(e.target)) setMoreOpen(false); };
    document.addEventListener("mousedown", f);
    return () => document.removeEventListener("mousedown", f);
  }, [moreOpen]);
  // a link copied from the notes reader opens the same page
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const sub = SUBTOPICS.find((s) => s.id === p.get("learn"));
    if (sub) setStudy({ sub, mode: ["notes", "quiz", "cards"].includes(p.get("mode")) ? p.get("mode") : "notes" });
  }, []);
  useEffect(() => { if (wizard && !bank) loadBank().then(setBank).catch(() => setWizard(false)); }, [wizard, bank]);
  const openWizard = () => setWizard(true);
  const banner = { cards: "Build your own deck", exam: "Build your own paper" }[tab] || "Study multiple skills";
  const skillSub = (s) => SUBTOPICS.find((x) => x.skill === s.skill && x.topic.subject === s.subject);

  if (study) return <StudyView sub={study.sub} mode={study.mode} onMode={(mode) => setStudy({ ...study, mode })} onSub={(sub) => setStudy({ ...study, sub })} onClose={() => setStudy(null)} theme={theme} setTheme={setTheme} report={report} />;
  if (exam) return <ExamView {...exam} onClose={() => setExam(null)} report={report} />;
  if (deck) return (
    <div className="cg-reader"><header className="cg-rtop"><button className="cg-wx" aria-label="Back to the course" onClick={() => setDeck(null)}>&larr;</button><b className="cg-switcher plain">{deck.title}</b><span className="cg-rprogress" /></header>
      <div className="cg-rbody"><CardDeck cards={deck.cards} /></div></div>
  );
  if (wizard && bank) return <Wizard bank={bank} done={doneFrom(quizLog())} onClose={() => setWizard(false)}
    onExam={(picked) => { setWizard(false); setExam({ picked, title: "Your paper" }); }}
    onCards={(skills) => {
      const ids = SUBTOPICS.filter((s) => skills.has(`${s.topic.subject}|${s.skill}`)).map((s) => s.id);
      const decks = readDecks();
      const d = { id: Date.now(), name: `My deck ${decks.length + 1}`, skills: ids };
      writeDecks([...decks, d]);
      setWizard(false);
      setDeck({ cards: SUBTOPICS.filter((s) => ids.includes(s.id)).flatMap(cardsFor), title: d.name });
    }} />;

  return (
    <div className="cg-page">
      <section className="cg-banner" style={{ "--tint": course.tint }}>
        <span className="cg-bannertag">{course.tag}</span>
        <CourseMark course={course} size={96} />
        <div className="cg-bannertext"><h1>{course.name}</h1><p>{course.blurb}</p></div>
        <button className="cg-btn primary cg-multi" onClick={() => (tab === "quiz" ? setTab("quiz-open") : openWizard())}>{banner} &rarr;</button>
        <div className="cg-bannerstats">
          <div><b>{stats.sittings}</b><span>sittings</span></div>
          <div><b>{stats.average === null ? "-" : `${stats.average}%`}</b><span>average</span></div>
          <div><b>{stats.best === null ? "-" : `${stats.best}%`}</b><span>best</span></div>
        </div>
      </section>

      <nav className="cg-tabs" aria-label="Course sections">
        {tabs.map(([id, label]) => <button key={id} className={tab.startsWith(id) ? "on" : ""} onClick={() => setTab(id)}>{label}</button>)}
        <span className="cg-more" ref={moreRef}>
          <button className={more.some(([id]) => id === tab) ? "on" : ""} aria-expanded={moreOpen} onClick={() => setMoreOpen(!moreOpen)}>{more.find(([id]) => id === tab)?.[1] || "More"} <span aria-hidden="true">{moreOpen ? "▴" : "▾"}</span></button>
          {moreOpen && <div className="cg-menulist"><div className="cg-menusub first">Study tools</div>{more.map(([id, label]) => <button key={id} onClick={() => { setTab(id); setMoreOpen(false); }}>{label}</button>)}</div>}
        </span>
      </nav>

      {tab === "notes" && <NotesTab open={(sub, mode) => setStudy({ sub, mode })} />}
      {tab.startsWith("quiz") && <QuizTab key={tab} startOpen={tab === "quiz-open"} onExam={(picked) => setExam({ picked, title: "Your paper" })} onCards={(skills) => setDeck({ cards: SUBTOPICS.filter((s) => skills.has(`${s.topic.subject}|${s.skill}`)).flatMap(cardsFor), title: "Your deck" })} openSkill={(s) => { const sub = skillSub(s); if (sub) setStudy({ sub, mode: "quiz" }); }} />}
      {tab === "cards" && <FlashcardsIndex openDeck={(cards, title) => setDeck({ cards, title })} build={openWizard} />}
      {tab === "sheets" && <CheatSheets />}
      {tab === "exam" && <ExamTab openExam={setExam} />}
      {tab === "papers" && <PastPapers entries={entries} last={last} onOpen={onOpen} />}
      {tab === "terms" && <TermsTab />}
      {tab === "tests" && <div className="cg-stack tight">{[["Paper tests", true], ["Computer tests", false]].map(([label, own]) => <div key={label} className="cg-list"><span className="cg-chipsm">{label}</span>{entries.filter((e) => Boolean(e.ownId) === own).map((e) => <TestRow key={e.slug} entry={e} last={last} onOpen={onOpen} />)}</div>)}</div>}

      {tab === "marks" && (
        <div className="cg-list">
          {entries.filter((e) => e.ownId).map((e) => (
            <div key={e.slug} className="cg-row static">
              <span className="cg-rownum" aria-hidden="true">{e.ownId.split("-").pop()}</span>
              <span className="cg-rowtext"><b>{e.title}</b><span className="small muted">Answers and an explanation for every question</span></span>
              <a className="cg-btn" href={`${base}papers/${e.ownId}-markscheme.pdf`} target="_blank" rel="noopener noreferrer">Open mark scheme</a>
            </div>
          ))}
        </div>
      )}

      {tab === "results" && (
        <div className="cg-list">
          {mine.length === 0 && <div className="cg-empty">No results yet. Sit a test and it will show up here.</div>}
          {mine.map((h) => (
            <div key={h.id} className="cg-row static">
              <span className="cg-rowtext"><b>{h.paper}</b><span className="small muted">{h.section} · {h.on}</span></span>
              <span className="cg-score"><b>{h.right} / {h.total}</b><span className="small muted">{pct(h)}%</span></span>
            </div>
          ))}
          {mine.length > 0 && <button className="cg-link" onClick={onClear}>Clear all results</button>}
        </div>
      )}
    </div>
  );
}
