// The shell around the courses: the top bar, the dashboard and the activity page.

import { useEffect, useRef, useState } from "react";
import { Duck } from "./Duck.jsx";
import { COURSES, HISTORY_KEY, longestRun, streak, summary } from "./courses.js";

export function readHistory() {
  try { const h = JSON.parse(localStorage.getItem(HISTORY_KEY)); return Array.isArray(h) ? h : []; } catch { return []; }
}

// A course's picture: a printed page or a screen, in the course's colour.
export function CourseMark({ course, size = 44 }) {
  return (
    <span className="cg-mark" style={{ width: size, height: size, "--tint": course.tint }} aria-hidden="true">
      <svg width={size * 0.58} height={size * 0.58} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {course.mark === "paper"
          ? <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></>
          : <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4M8 9l2 2 4-4" /></>}
      </svg>
    </span>
  );
}

function Menu({ label, children, wide, icon }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    const away = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", away); document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("mousedown", away); document.removeEventListener("keydown", esc); };
  }, [open]);
  return (
    <div className="cg-menu" ref={ref}>
      <button className={"cg-menubtn" + (icon ? " icon" : "")} aria-label={icon ? label : undefined} aria-expanded={open} onClick={() => setOpen(!open)}>{icon ? <span aria-hidden="true">{"\u21c5"}</span> : label}{icon ? null : <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 8 5 5 5-5" /></svg>}</button>
      {open && <div className={"cg-menulist" + (wide ? " wide" : "")} onClick={() => setOpen(false)}>{children}</div>}
    </div>
  );
}

export function TopBar({ path, nav, history, user, theme, setTheme, onSignOut, dwiddle }) {
  const { run } = streak(history);
  const home = path === "/";
  const name = (user?.user_metadata?.full_name || user?.email || "You").split(/[ @]/)[0];
  return (
    <header className="cg-top">
      {home
        ? <a className="cg-brand" href="/" onClick={(e) => { e.preventDefault(); nav("/"); }}><Duck size={34} shadow={false} /><b>Testiddle</b></a>
        : <button className="cg-brand back" onClick={() => nav("/")}><span aria-hidden="true">&larr;</span><b>Dashboard</b></button>}
      <Menu label="My courses">
        {COURSES.map((c) => <button key={c.id} onClick={() => nav(`/course/${c.id}`)}><CourseMark course={c} size={26} /><span>{c.name}</span></button>)}
      </Menu>
      <span className="cg-spacer" />
      <div className="cg-chips">
        <span className="cg-chip" title="Tests you have sat"><b>{history.length}</b> {history.length === 1 ? "sitting" : "sittings"}</span>
        <button className="cg-chip link" onClick={() => nav("/account/activity")}>Activity</button>
        <span className="cg-chip" title="Days in a row you have sat a test"><b>{run}</b> {run === 1 ? "day" : "days"}</span>
      </div>
      <Menu label={name} wide>
        <div className="cg-menuhead">{user?.email || "Signed in"}</div>
        <button className="cg-toggle" onClick={(e) => { e.stopPropagation(); setTheme(theme === "dark" ? "light" : "dark"); }}>Dark mode<span className={"cg-switch small" + (theme === "dark" ? " on" : "")}><i /></span></button>
        <button onClick={() => nav("/")}>Dashboard</button>
        <button onClick={() => nav("/account/account")}>Account settings</button>
        <button onClick={() => nav("/account/activity")}>Activity log</button>
        <a href={dwiddle}>Back to Dwiddle</a>
        <button onClick={onSignOut}>Sign out</button>
      </Menu>
    </header>
  );
}

function Explainer({ history, cells, range, onClose }) {
  const { run } = streak(history);
  return (
    <div className="cg-scrim" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }} role="dialog" aria-modal="true" aria-label="Your streak">
      <div className="cg-modal">
        <button className="cg-x" onClick={onClose} aria-label="Close">&times;</button>
        <h2>Your streak</h2>
        <p className="cg-longest">Longest streak: {Math.max(longestRun(history), run)} {Math.max(longestRun(history), run) === 1 ? "day" : "days"}</p>
        <div className="cg-weekbox"><span className="small muted">{range}</span><div className="cg-week">{cells.map((c, i) => <span key={i} className={"cg-day" + (c.on ? " on" : "")}>{c.on ? "\u2713" : c.l}</span>)}</div></div>
        <div className="cg-tip"><b>Sit a test every day</b><span className="small muted">Finish any module or full test to keep your streak going.</span></div>
        <div className="cg-tip"><b>Days in a row</b><span className="small muted">Missing a day starts the count again. Today only counts once you have sat something.</span></div>
        <div className="cg-actions"><button className="cg-btn" onClick={onClose}>Got it</button></div>
      </div>
    </div>
  );
}

const WEEK = ["M", "T", "W", "T", "F", "S", "S"];

function Week({ history }) {
  const [explain, setExplain] = useState(false);
  const { days, run, fmt } = streak(history);
  const now = new Date();
  const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - ((now.getDay() + 6) % 7));
  const cells = WEEK.map((l, i) => { const d = new Date(monday); d.setDate(monday.getDate() + i); return { l, on: days.has(fmt(d)), today: fmt(d) === fmt(now) }; });
  const span = (d) => d.toLocaleDateString(undefined, { day: "numeric", month: "short" });
  const sunday = new Date(monday); sunday.setDate(monday.getDate() + 6);
  return (
    <div className="cg-streak">
      <div className="cg-streakhead">
        <div><b className="cg-big">{run} {run === 1 ? "day" : "days"}</b><span className="muted small">Current streak</span></div>
        <span className="cg-range small muted">{span(monday)} - {span(sunday)}<button className="cg-info" aria-label="How streaks work" onClick={() => setExplain(true)}>i</button></span>
      </div>
      {explain && <Explainer history={history} cells={cells} range={`${span(monday)} - ${span(sunday)}`} onClose={() => setExplain(false)} />}
      <div className="cg-week">{cells.map((c, i) => <span key={i} className={"cg-day" + (c.on ? " on" : "") + (c.today ? " today" : "")} aria-label={`${c.l}${c.on ? ", sat a test" : ""}`}>{c.on ? "✓" : c.l}</span>)}</div>
    </div>
  );
}

export function Dashboard({ nav, history, user }) {
  const [order, setOrder] = useState("added");
  const sorted = order === "az" ? [...COURSES].sort((a, b) => a.name.localeCompare(b.name)) : order === "za" ? [...COURSES].sort((a, b) => b.name.localeCompare(a.name)) : COURSES;
  const name = (user?.user_metadata?.full_name || user?.email || "").split(/[ @]/)[0] || "there";
  return (
    <div className="cg-page">
      <section className="cg-card cg-hello">
        <span className="cg-tag">SAT practice</span>
        <div className="cg-who"><Duck size={92} shadow={false} /><div><h1>Hi {name}</h1><p className="muted">Pick up where you left off.</p></div></div>
        <Week history={history} />
      </section>

      <div className="cg-sectionhead"><span className="cg-label">{COURSES.length} courses</span><span className="cg-dash" /></div>

      <section className="cg-card cg-table" aria-label="Your courses">
        <div className="cg-th"><span className="cg-sort"><Menu label="Course sort order" icon><button onClick={() => setOrder("added")}>Default order{order === "added" ? " \u2713" : ""}</button><button onClick={() => setOrder("az")}>A to Z{order === "az" ? " \u2713" : ""}</button><button onClick={() => setOrder("za")}>Z to A{order === "za" ? " \u2713" : ""}</button></Menu>Course</span><span>Sittings</span><span>Average score</span><span /></div>
        {sorted.map((c) => {
          const s = summary(history, c);
          return (
            <button key={c.id} className="cg-tr" onClick={() => nav(`/course/${c.id}`)}>
              <span className="cg-course"><CourseMark course={c} /><span><b>{c.name}</b><span className="small muted">{c.count} full length tests</span></span></span>
              <span>{s.sittings}</span>
              <span>{s.average === null ? "-" : `${s.average}%`}</span>
              <i className="cg-chev" aria-hidden="true">&rsaquo;</i>
            </button>
          );
        })}
      </section>
    </div>
  );
}
