// An IGCSE course, laid out like the SAT course: notes, quiz, flashcards, cheat sheets, exam
// practice and past papers, with key terms, topic tests, mark schemes, the syllabus checklist and
// results under More. The papers belong to the boards, so each opens a search for that exact
// paper and its mark scheme rather than a copy.

import { useEffect, useMemo, useRef, useState } from "react";
import { BOARDS, SUBJECTS, courseFor } from "./catalog.js";
import { myCourses, setMyCourses, quizLog, cardRatings } from "./progress.js";
import { CourseMark } from "./Courses.jsx";
import { TopicList, StudyView, ExamTab, ExamView, CardDeck, notesRead, cardsFor } from "./Learn.jsx";
import { QuizTab, TermsTab, Wizard } from "./Study.jsx";
import { CheatSheets, FlashcardsIndex, readDecks, writeDecks } from "./CoursePage.jsx";
import { doneFrom } from "./bank.js";
import { hasPack, loadPack, sheetsOf, sheetIdOf, termsOf, forLevel, withoutTopics, layoutFor } from "./igcse/index.js";
import { IFIG } from "./figs/index.js";

const YEARS = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];
const SESSIONS = { cie: [["May/June", "s"], ["October/November", "w"], ["February/March", "m"]], edexcel: [["May/June", "Jun"], ["January", "Jan"], ["October/November", "Nov"]] };
const search = (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}`;
const KEY = (id, board, tier) => `testiddle-topics:${id}${board === "edexcel" ? ":edexcel" : ""}${tier === "Double" ? ":double" : ""}`;
const readTopics = (id, board, tier) => { try { const v = JSON.parse(localStorage.getItem(KEY(id, board, tier))); return Array.isArray(v) ? v : []; } catch { return []; } };
const nothing = () => {};

export default function IgcsePage({ id, nav, theme, setTheme, report = nothing }) {
  const sel = myCourses().find((x) => x.id === id) || { id };
  const course = courseFor(sel);
  const subjectId = id.replace(/^igcse-/, "");
  const subject = SUBJECTS.find((s) => s.id === subjectId);
  const [raw, setPack] = useState(null);
  const [levelOpen, setLevelOpen] = useState(false);
  const [tab, setTab] = useState(hasPack(subjectId) ? "notes" : "topics");
  const [study, setStudy] = useState(null); // { sub, mode }
  const [exam, setExam] = useState(null); // { sub, picked, title }
  const [deck, setDeck] = useState(null); // { cards, title }
  const [wizard, setWizard] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [, refresh] = useState(0);
  const moreRef = useRef(null);
  useEffect(() => { loadPack(subjectId).then(setPack).catch(() => setPack(null)); }, [subjectId]);
  // leave out Triple only topics for Double Award, and topics that belong to the other exam board
  const otherBoard = (raw?.topics || []).filter((t) => t.board && t.board !== (course?.board || "cie")).map((t) => t.id);
  const skip = [...(course?.tripleOnly?.pack || []), ...otherBoard].join(",");
  const pack = useMemo(() => {
    if (!raw) return null;
    const p = layoutFor(withoutTopics(forLevel(raw, course?.level, course?.board), skip ? skip.split(",") : []), course?.board);
    return { ...p, subs: p.subs.map((s) => ({ ...s, figs: ["", "-b", "-c"].map((x) => IFIG[sheetIdOf(s) + x]).filter(Boolean), figColor: course?.tint, figId: sheetIdOf(s) })) };
  }, [raw, course?.level, course?.board, course?.tint, skip]);
  useEffect(() => {
    if (!moreOpen) return undefined;
    const f = (e) => { if (!moreRef.current?.contains(e.target)) setMoreOpen(false); };
    document.addEventListener("mousedown", f);
    return () => document.removeEventListener("mousedown", f);
  }, [moreOpen]);
  const [done, setDone] = useState(() => readTopics(id, course?.board, course?.tier));
  useEffect(() => { setDone(readTopics(id, course?.board, course?.tier)); }, [id, course?.board, course?.tier]);
  const [open, setOpen] = useState({ [YEARS[0]]: true });
  const [tierOpen, setTierOpen] = useState(false);
  const extra = useMemo(() => (pack && subject ? {
    bank: pack.subs.flatMap((s) => s.questions),
    groups: pack.topics.map((t) => t.name),
    sheets: sheetsOf(pack, subject),
    terms: termsOf(pack),
  } : null), [pack, subject]);
  const decksKey = `testiddle-decks:${id}`;
  const back = () => refresh((n) => n + 1);

  if (study && pack) return <StudyView sub={study.sub} mode={study.mode} subs={pack.subs} onMode={(mode) => setStudy({ ...study, mode })} onSub={(sub) => setStudy({ ...study, sub })} onClose={() => { setStudy(null); back(); }} theme={theme} setTheme={setTheme} report={report} />;
  if (exam) return <ExamView {...exam} onClose={() => { setExam(null); back(); }} report={report} />;
  if (deck) return (
    <div className="cg-reader"><header className="cg-rtop"><button className="cg-wx" aria-label="Back to the course" onClick={() => { setDeck(null); back(); }}>&larr;</button><b className="cg-switcher plain">{deck.title}</b><span className="cg-rprogress" /></header>
      <div className="cg-rbody"><CardDeck cards={deck.cards} /></div></div>
  );
  const cardsForSkills = (skills) => pack.subs.filter((s) => skills.has(`${s.topic.name}|${s.skill}`));
  const makeDeck = (skills) => {
    const subs = cardsForSkills(skills), decks = readDecks(decksKey);
    const d = { id: Date.now(), name: `My deck ${decks.length + 1}`, skills: subs.map((s) => s.id) };
    writeDecks([...decks, d], decksKey);
    setWizard(false); setDeck({ cards: subs.flatMap(cardsFor), title: d.name });
  };
  if (wizard && extra) return <Wizard bank={extra.bank} groups={extra.groups} done={doneFrom(quizLog())} onClose={() => { setWizard(false); back(); }}
    onExam={(picked) => { setWizard(false); setExam({ picked, title: "Your paper" }); }} onCards={makeDeck} />;
  if (!course || !subject) return <div className="cg-page"><div className="cg-empty">That course could not be found. <button className="cg-link" onClick={() => nav("/")}>Back to the dashboard</button></div></div>;

  const toggle = (i) => { const n = done.includes(i) ? done.filter((x) => x !== i) : [...done, i]; setDone(n); try { localStorage.setItem(KEY(id, course.board, course.tier), JSON.stringify(n)); window.dispatchEvent(new Event("testiddle:progress")); } catch { /* private mode */ } };
  const change = (patch) => { const list = myCourses(); const n = list.some((x) => x.id === id) ? list.map((x) => (x.id === id ? { ...x, ...patch } : x)) : [...list, { ...sel, ...patch }]; setMyCourses(n); };
  const read = notesRead(), answered = doneFrom(quizLog()), rated = cardRatings();
  const progress = {
    notes: (s) => (read[s.id] ? 1 : 0),
    cards: (s) => { const c = cardsFor(s); return c.filter((x) => rated[x.id]).length / c.length; },
  };
  const pct = course.topics.length ? done.length / course.topics.length : 0;
  const what = `${course.board === "cie" ? "Cambridge IGCSE" : "Edexcel International GCSE"} ${course.syllabus} ${course.code || ""}`.trim();
  const mineIds = extra ? extra.bank.filter((q) => q.id in answered) : [];
  const right = mineIds.filter((q) => answered[q.id]).length;
  const tabs = pack ? [["notes", "Notes"], ["quiz", "Quiz"], ["cards", "Flashcards"], ["sheets", "Cheat sheets"], ["exam", "Exam practice"], ["papers", "Past papers"]] : [["topics", "Topics"], ["papers", "Past papers"]];
  const more = pack ? [["terms", "Key terms"], ["tests", "Topic tests"], ["marks", "Mark schemes"], ["topics", "Syllabus checklist"], ["results", "Results"]] : [];
  const banner = { cards: "Build your own deck", exam: "Build your own paper" }[tab] || "Study multiple skills";
  const subOf = (s) => pack.subs.find((x) => x.skill === s.skill && x.topic.name === s.subject);

  return (
    <div className="cg-page">
      <section className="cg-banner" style={{ "--tint": course.tint }}>
        <span className="cg-bannertag">{course.tag}</span>
        <CourseMark course={course} size={96} />
        <div className="cg-bannertext"><h1>{course.name}</h1><p>{course.blurb}</p>
          <div className="ig-chips">
            {course.level && <span className="ig-tier"><button className="cg-chipsm" aria-expanded={levelOpen} onClick={() => setLevelOpen(!levelOpen)}>{course.levelNames[course.level]} {"⇕"}</button>
              {levelOpen && <span className="cg-menulist ig-menu">{["Core", "Extended"].map((l) => <button key={l} onClick={() => { change({ level: l }); setLevelOpen(false); back(); }}>{course.levelNames[l]}{course.level === l ? " ✓" : ""}</button>)}</span>}</span>}
            {course.tier && <span className="ig-tier"><button className="cg-chipsm" aria-expanded={tierOpen} onClick={() => setTierOpen(!tierOpen)}>{course.tier} {"⇕"}</button>
              {tierOpen && <span className="cg-menulist ig-menu">{["Triple", "Double"].map((t) => <button key={t} onClick={() => { change({ tier: t }); setTierOpen(false); back(); }}>{t}{course.tier === t ? " ✓" : ""}</button>)}</span>}</span>}
            {Object.keys(subject.boards).length > 1 && Object.keys(subject.boards).map((b) => <button key={b} className={"cg-chipsm" + (course.board === b ? " blue" : "")} onClick={() => { change({ board: b }); back(); }}>{BOARDS[b]}</button>)}
          </div>
        </div>
        {extra && <button className="cg-btn primary cg-multi" onClick={() => (tab === "quiz" ? setTab("quiz-open") : setWizard(true))}>{banner} &rarr;</button>}
        <div className="cg-bannerstats">
          {extra && <div><b>{mineIds.length}</b><span>answered</span></div>}
          {extra && <div><b>{mineIds.length ? `${Math.round((right / mineIds.length) * 100)}%` : "-"}</b><span>right</span></div>}
          <div><b>{done.length}/{course.topics.length}</b><span>topics</span></div>
        </div>
      </section>

      <nav className="cg-tabs" aria-label="Course sections">
        {tabs.map(([t, l]) => <button key={t} className={tab.startsWith(t) ? "on" : ""} onClick={() => setTab(t)}>{l}</button>)}
        {more.length > 0 && <span className="cg-more" ref={moreRef}>
          <button className={more.some(([t]) => t === tab) ? "on" : ""} aria-expanded={moreOpen} onClick={() => setMoreOpen(!moreOpen)}>{more.find(([t]) => t === tab)?.[1] || "More"} <span aria-hidden="true">{moreOpen ? "▴" : "▾"}</span></button>
          {moreOpen && <div className="cg-menulist"><div className="cg-menusub first">Study tools</div>{more.map(([t, l]) => <button key={t} onClick={() => { setTab(t); setMoreOpen(false); }}>{l}</button>)}</div>}
        </span>}
      </nav>

      {course.tier === "Double" && <p className="cg-note small muted">{course.syllabus}: {course.tripleOnly.list.length ? `${course.tripleOnly.list.join(", ")} ${course.tripleOnly.list.length === 1 ? "is" : "are"} only in the separate science, so ${course.tripleOnly.list.length === 1 ? "it is" : "they are"} left out here. ` : ""}Some other topics are covered in less depth; your syllabus lists the details.</p>}
      {!pack && hasPack(subjectId) && <div className="cg-empty">Loading the course</div>}
      {extra && tab === "notes" && <TopicList topics={pack.topics} subs={pack.subs} terms={extra.terms} progressOf={progress.notes} onOpen={(sub) => setStudy({ sub, mode: "notes" })} />}
      {extra && tab.startsWith("quiz") && <QuizTab key={tab} bank={extra.bank} total={extra.bank.length} groups={extra.groups} startOpen={tab === "quiz-open"} onXp={back}
        onExam={(picked) => setExam({ picked, title: "Your paper" })} onCards={makeDeck} openSkill={(s) => { const sub = subOf(s); if (sub) setStudy({ sub, mode: "quiz" }); }} />}
      {extra && tab === "cards" && <FlashcardsIndex topics={pack.topics} subs={pack.subs} storeKey={decksKey} icon={subject.icon} fixed={[["Key terms", subject.icon, extra.terms]]} openDeck={(cards, title) => setDeck({ cards, title })} build={() => setWizard(true)} />}
      {extra && tab === "sheets" && <CheatSheets sheets={extra.sheets} groups={pack.topics} />}
      {extra && tab === "exam" && <ExamTab topics={pack.topics} subs={pack.subs} openExam={setExam} />}
      {extra && tab === "terms" && <TermsTab terms={extra.terms} groups={extra.groups} />}
      {extra && tab === "tests" && <div className="cg-list">{pack.topics.map((t, i) => {
        const qs = [...pack.subs.filter((s) => s.topic.id === t.id).flatMap((s) => s.questions), ...(t.written || [])];
        const got = qs.filter((q) => answered[q.id]).length, seen = qs.filter((q) => q.id in answered).length;
        return <button key={t.id} className="cg-row" onClick={() => setExam({ sub: { id: `${pack.id}-test-${t.id}`, skill: t.name }, picked: qs, title: `Topic test: ${t.name}` })}>
          <span className="cg-rownum" aria-hidden="true">{i + 1}</span>
          <span className="cg-rowtext"><b>{t.name}</b><span className="small muted">{qs.length} questions{t.written?.length ? `, including ${t.written.length} written` : ""}, marked one by one</span></span>
          {seen ? <span className="cg-pill good">{Math.round((got / seen) * 100)}% right</span> : <span className="cg-pill">Not started</span>}
          <i className="cg-chev" aria-hidden="true">&rsaquo;</i>
        </button>;
      })}</div>}
      {extra && tab === "marks" && <div className="cg-stack tight">
        <p className="small muted">{what}. Each button searches for that exact mark scheme on the board's site and revision sites.</p>
        <section className="cg-card cg-years">{YEARS.map((y) => (
          <div key={y} className="cg-year open"><div className="cg-yearhead"><b>{y}</b></div>
            <div className="cg-yearrows">{SESSIONS[course.board].map(([session]) => <div key={session} className="cg-yearrow"><span>{session} {y}</span><span className="cg-pair"><a href={search(`${what} ${session} ${y} mark scheme pdf`)} target="_blank" rel="noopener noreferrer">Mark scheme</a></span></div>)}</div>
          </div>))}</section>
      </div>}
      {extra && tab === "results" && <div className="cg-list">
        {mineIds.length === 0 && <div className="cg-empty">No results yet. Answer some quiz or exam questions and they will show up here.</div>}
        {mineIds.length > 0 && pack.topics.map((t) => {
          const qs = pack.subs.filter((s) => s.topic.id === t.id).flatMap((s) => s.questions).filter((q) => q.id in answered);
          if (!qs.length) return null;
          const ok = qs.filter((q) => answered[q.id]).length;
          return <div key={t.id} className="cg-row static"><span className="cg-rowtext"><b>{t.name}</b><span className="small muted">{qs.length} questions answered</span></span><span className="cg-score"><b>{ok} / {qs.length}</b><span className="small muted">{Math.round((ok / qs.length) * 100)}%</span></span></div>;
        })}
      </div>}

      {tab === "topics" && <div className="cg-stack tight">
        <div className="cg-listbar"><div className="cg-overall"><span className="small">Overall progress:</span><span className="cg-meter wide"><i style={{ width: `${pct * 100}%` }} /></span><b className="small">{Math.round(pct * 100)}%</b></div><span className="cg-spacer" />
          <button className="cg-btn" onClick={() => { const all = done.length === course.topics.length ? [] : course.topics.map((_, i) => i); setDone(all); try { localStorage.setItem(KEY(id, course.board, course.tier), JSON.stringify(all)); } catch { /* private mode */ } }}>{done.length === course.topics.length ? "Clear all" : "Tick all"}</button></div>
        <section className="cg-card ig-topics"><span className="cg-tag">Syllabus topics</span>
          {course.topics.map((t, i) => <label key={t} className={"ig-topic" + (done.includes(i) ? " done" : "")}><input type="checkbox" checked={done.includes(i)} onChange={() => toggle(i)} /><span className="ig-num">{i + 1}</span><span>{t}</span></label>)}
        </section>
        <p className="cg-note small muted">{pack ? "Tick a topic once you have revised it. The notes, quizzes and flashcards are in the other tabs." : "Tick a topic once you have revised it. Notes, quizzes and flashcards for this course are being written; for now, use the past papers to practise."}</p>
      </div>}

      {tab === "papers" && <div className="cg-stack tight">
        <p className="small muted">{what}. Each button searches for that exact paper or mark scheme on the board's site and revision sites.</p>
        <section className="cg-card cg-years">{YEARS.map((y) => (
          <div key={y} className={"cg-year" + (open[y] ? " open" : "")}>
            <button className="cg-yearhead" onClick={() => setOpen({ ...open, [y]: !open[y] })}><span className="cg-round">{open[y] ? "▴" : "▾"}</span><b>{y}</b></button>
            {open[y] && <div className="cg-yearrows">{SESSIONS[course.board].map(([session]) => (
              <div key={session} className="cg-yearrow"><span>{session} {y}</span><span className="cg-pair">
                <a href={search(`${what} ${session} ${y} question paper pdf`)} target="_blank" rel="noopener noreferrer">Paper</a>
                <a href={search(`${what} ${session} ${y} mark scheme pdf`)} target="_blank" rel="noopener noreferrer">Mark scheme</a>
              </span></div>))}</div>}
          </div>))}</section>
        <div className="row"><a className="cg-btn" href={course.board === "cie" ? "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse/" : "https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses.html"} target="_blank" rel="noopener noreferrer">The board's own page</a></div>
      </div>}
    </div>
  );
}
