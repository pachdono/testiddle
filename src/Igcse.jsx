// An IGCSE course: its syllabus topics to tick off as you revise them, and the past papers for
// each year and session. The papers belong to the boards, so each opens a search for that exact
// paper and its mark scheme rather than a copy.

import { useEffect, useState } from "react";
import { BOARDS, SUBJECTS, courseFor } from "./catalog.js";
import { myCourses, setMyCourses } from "./progress.js";
import { CourseMark } from "./Courses.jsx";
import { TopicList, StudyView, notesRead, cardsFor } from "./Learn.jsx";
import { quizLog, cardRatings } from "./progress.js";
import { doneFrom } from "./bank.js";
import { hasPack, loadPack } from "./igcse/index.js";

const YEARS = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];
const SESSIONS = { cie: [["May/June", "s"], ["October/November", "w"], ["February/March", "m"]], edexcel: [["May/June", "Jun"], ["January", "Jan"], ["October/November", "Nov"]] };
const search = (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}`;
const KEY = (id) => `testiddle-topics:${id}`;
const readTopics = (id) => { try { const v = JSON.parse(localStorage.getItem(KEY(id))); return Array.isArray(v) ? v : []; } catch { return []; } };

export default function IgcsePage({ id, nav, theme, setTheme, report }) {
  const sel = myCourses().find((x) => x.id === id) || { id };
  const course = courseFor(sel);
  const subjectId = id.replace(/^igcse-/, "");
  const [pack, setPack] = useState(null);
  const [tab, setTab] = useState(hasPack(subjectId) ? "notes" : "topics");
  const [study, setStudy] = useState(null);
  const [, refresh] = useState(0);
  useEffect(() => { loadPack(subjectId).then(setPack).catch(() => setPack(null)); }, [subjectId]);
  const [done, setDone] = useState(() => readTopics(id));
  const [open, setOpen] = useState({ [YEARS[0]]: true });
  const [tierOpen, setTierOpen] = useState(false);
  if (study && pack) return <StudyView sub={study.sub} mode={study.mode} subs={pack.subs} onMode={(mode) => setStudy({ ...study, mode })} onSub={(sub) => setStudy({ ...study, sub })} onClose={() => { setStudy(null); refresh((n) => n + 1); }} theme={theme} setTheme={setTheme} report={report || (() => {})} />;
  if (!course) return <div className="cg-page"><div className="cg-empty">That course could not be found. <button className="cg-link" onClick={() => nav("/")}>Back to the dashboard</button></div></div>;
  const subject = SUBJECTS.find((s) => `igcse-${s.id}` === id);
  const toggle = (i) => { const n = done.includes(i) ? done.filter((x) => x !== i) : [...done, i]; setDone(n); try { localStorage.setItem(KEY(id), JSON.stringify(n)); window.dispatchEvent(new Event("testiddle:progress")); } catch { /* private mode */ } };
  const change = (patch) => { const list = myCourses(); const n = list.some((x) => x.id === id) ? list.map((x) => (x.id === id ? { ...x, ...patch } : x)) : [...list, { ...sel, ...patch }]; setMyCourses(n); };
  const read = notesRead(), answered = doneFrom(quizLog()), rated = cardRatings();
  const progress = {
    notes: (s) => (read[s.id] ? 1 : 0),
    quiz: (s) => (s.questions.length ? s.questions.filter((q) => q.id in answered).length / s.questions.length : 0),
    cards: (s) => { const c = cardsFor(s); return c.filter((x) => rated[x.id]).length / c.length; },
  };
  const tabs = [...(pack ? [["notes", "Notes"], ["quiz", "Quiz"], ["cards", "Flashcards"]] : []), ["topics", pack ? "Syllabus" : "Topics"], ["papers", "Past papers"]];
  const pct = course.topics.length ? done.length / course.topics.length : 0;
  const what = `${course.board === "cie" ? "Cambridge IGCSE" : "Edexcel International GCSE"} ${course.syllabus} ${course.code || ""}`.trim();

  return (
    <div className="cg-page">
      <section className="cg-banner" style={{ "--tint": course.tint }}>
        <span className="cg-bannertag">{course.tag}</span>
        <CourseMark course={course} size={96} />
        <div className="cg-bannertext"><h1>{course.name}</h1><p>{course.blurb}</p>
          <div className="ig-chips">
            {course.tier && <span className="ig-tier"><button className="cg-chipsm" aria-expanded={tierOpen} onClick={() => setTierOpen(!tierOpen)}>{course.tier} {"⇕"}</button>
              {tierOpen && <span className="cg-menulist ig-menu">{["Triple", "Double"].map((t) => <button key={t} onClick={() => { change({ tier: t }); setTierOpen(false); }}>{t}{course.tier === t ? " ✓" : ""}</button>)}</span>}</span>}
            {Object.keys(subject.boards).length > 1 && Object.keys(subject.boards).map((b) => <button key={b} className={"cg-chipsm" + (course.board === b ? " blue" : "")} onClick={() => change({ board: b })}>{BOARDS[b]}</button>)}
          </div>
        </div>
        <div className="cg-bannerstats"><div><b>{done.length}/{course.topics.length}</b><span>topics</span></div><div><b>{Math.round(pct * 100)}%</b><span>covered</span></div></div>
      </section>

      <nav className="cg-tabs" aria-label="Course sections">{tabs.map(([t, l]) => <button key={t} className={tab === t ? "on" : ""} onClick={() => setTab(t)}>{l}</button>)}</nav>

      {pack && ["notes", "quiz", "cards"].includes(tab) && <TopicList key={tab} topics={pack.topics} subs={pack.subs} terms={[]} progressOf={progress[tab]} onOpen={(sub) => setStudy({ sub, mode: tab })} />}

      {tab === "topics" && <div className="cg-stack tight">
        <div className="cg-listbar"><div className="cg-overall"><span className="small">Overall progress:</span><span className="cg-meter wide"><i style={{ width: `${pct * 100}%` }} /></span><b className="small">{Math.round(pct * 100)}%</b></div><span className="cg-spacer" />
          <button className="cg-btn" onClick={() => { const all = done.length === course.topics.length ? [] : course.topics.map((_, i) => i); setDone(all); try { localStorage.setItem(KEY(id), JSON.stringify(all)); } catch { /* private mode */ } }}>{done.length === course.topics.length ? "Clear all" : "Tick all"}</button></div>
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
