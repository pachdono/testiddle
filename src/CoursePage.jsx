// One course: a banner, then tabs for its tests, its mark schemes and your results.

import { useState } from "react";
import { historyOf, summary } from "./courses.js";
import { CourseMark } from "./Courses.jsx";

const base = import.meta.env.BASE_URL;

function TestRow({ entry, course, last, onOpen }) {
  const done = last[entry.title];
  return (
    <button className="cg-row" onClick={() => onOpen(entry)}>
      <span className="cg-rownum" aria-hidden="true">{entry.digitalId || entry.ownId?.split("-").pop()}</span>
      <span className="cg-rowtext">
        <b>{entry.title}</b>
        <span className="small muted">{entry.minutes} min · {entry.questions} questions · {course.marks ? "Auto-marked, mark scheme included" : "Adaptive, with calculator and score estimate"}</span>
      </span>
      {done ? <span className="cg-pill good">{Math.round((done.right / Math.max(1, done.total)) * 100)}% last time</span> : <span className="cg-pill">Not started</span>}
      <i className="cg-chev" aria-hidden="true">&rsaquo;</i>
    </button>
  );
}

export default function CoursePage({ course, entries, history, onOpen, onClear, nav }) {
  const [tab, setTab] = useState("tests");
  const mine = historyOf(history, course);
  const stats = summary(history, course);
  const last = {};
  [...mine].reverse().forEach((h) => { last[h.paper] = h; });
  const tabs = [["tests", "Tests"], ...(course.marks ? [["marks", "Mark schemes"]] : []), ["results", "Results"]];

  return (
    <div className="cg-page">
      <button className="cg-back" onClick={() => nav("/")}>&larr; <span>Dashboard</span></button>
      <section className="cg-banner" style={{ "--tint": course.tint }}>
        <span className="cg-bannertag">{course.tag}</span>
        <CourseMark course={course} size={96} />
        <div className="cg-bannertext">
          <h1>{course.name}</h1>
          <p>{course.blurb}</p>
        </div>
        <div className="cg-bannerstats">
          <div><b>{stats.sittings}</b><span>sittings</span></div>
          <div><b>{stats.average === null ? "-" : `${stats.average}%`}</b><span>average</span></div>
          <div><b>{stats.best === null ? "-" : `${stats.best}%`}</b><span>best</span></div>
        </div>
      </section>

      <nav className="cg-tabs" aria-label="Course sections">
        {tabs.map(([id, label]) => <button key={id} className={tab === id ? "on" : ""} onClick={() => setTab(id)}>{label}</button>)}
      </nav>

      {tab === "tests" && (
        <div className="cg-list">
          {entries.map((e) => <TestRow key={e.slug} entry={e} course={course} last={last} onOpen={onOpen} />)}
        </div>
      )}

      {tab === "marks" && (
        <div className="cg-list">
          {entries.map((e) => (
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
              <span className="cg-score"><b>{h.right} / {h.total}</b><span className="small muted">{Math.round((h.right / Math.max(1, h.total)) * 100)}%</span></span>
            </div>
          ))}
          {mine.length > 0 && <button className="cg-link" onClick={onClear}>Clear all results</button>}
        </div>
      )}
    </div>
  );
}
