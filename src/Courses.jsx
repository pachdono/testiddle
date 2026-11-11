// The shell around the courses: the top bar, the dashboard and the small dialogs.

import { useEffect, useRef, useState } from "react";
import { Mascot } from "./Mascot.jsx";
import { TiddleAv, TAV_IDS, TAV_NAMES } from "./TiddleAvatars.jsx";
import { onboarding } from "./Onboarding.jsx";
import { HISTORY_KEY, summary } from "./courses.js";
import { courseFor } from "./catalog.js";
import { SubjectIcon } from "./SubjectIcons.jsx";
import { QualList, SubjectList } from "./Picker.jsx";
import { GOALS, activity, cardRatings, getAvatar, getGoal, longestRunOf, myCourses, setMyCourses, quizLog, setAvatar, setGoal, streakWith, xpSeries } from "./progress.js";
import { CARDS } from "./content.js";
import { QUESTION_COUNT, doneFrom } from "./bank.js";

export const topicsDone = (id, board, tier) => { try { const v = JSON.parse(localStorage.getItem(`testiddle-topics:${id}${board === "edexcel" ? ":edexcel" : ""}${tier === "Double" ? ":double" : ""}`)); return Array.isArray(v) ? v : []; } catch { return []; } };

export function readHistory() {
  try { const h = JSON.parse(localStorage.getItem(HISTORY_KEY)); return Array.isArray(h) ? h : []; } catch { return []; }
}

/** The courses the student has added, in order. */
export const visibleCourses = () => myCourses().map(courseFor).filter(Boolean).filter((c, i, all) => all.findIndex((x) => x.id === c.id) === i);

// A course's picture: a printed page or a screen, in the course's colour.
export function CourseMark({ course, size = 44 }) {
  return <span className="cg-mark illus" style={{ width: size, height: size }} aria-hidden="true"><SubjectIcon id={course.icon} size={size} /></span>;
}

function useAway(open, setOpen) {
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    const away = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", away); document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("mousedown", away); document.removeEventListener("keydown", esc); };
  }, [open, setOpen]);
  return ref;
}

function Menu({ label, children, wide, icon }) {
  const [open, setOpen] = useState(false);
  const ref = useAway(open, setOpen);
  return (
    <div className="cg-menu" ref={ref}>
      <button className={"cg-menubtn" + (icon ? " icon" : "")} aria-label={icon ? label : undefined} aria-expanded={open} onClick={() => setOpen(!open)}>{icon ? <span aria-hidden="true">{"⇅"}</span> : label}{icon ? null : <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 8 5 5 5-5" /></svg>}</button>
      {open && <div className={"cg-menulist" + (wide ? " wide" : "")} onClick={() => setOpen(false)}>{children}</div>}
    </div>
  );
}

export function Modal({ title, onClose, children, wide }) {
  useEffect(() => { const f = (e) => { if (e.key === "Escape") onClose(); }; document.addEventListener("keydown", f); return () => document.removeEventListener("keydown", f); }, [onClose]);
  return (
    <div className="cg-scrim" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }} role="dialog" aria-modal="true" aria-label={title}>
      <div className={"cg-modal" + (wide ? " wide" : "")}><button className="cg-x" onClick={onClose} aria-label="Close">&times;</button>{children}</div>
    </div>
  );
}

/* ---------- XP ---------- */

function XpChip({ rows, nav }) {
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState("week");
  const [goalOpen, setGoalOpen] = useState(false);
  const ref = useAway(open, setOpen);
  const goal = getGoal();
  const series = xpSeries(rows, range);
  const sum = series.reduce((n, s) => n + s.value, 0);
  const top = Math.max(goal, ...series.map((s) => s.value));
  const total = rows.reduce((n, r) => n + r.xp, 0);
  const label = { week: "this week", month: "in 30 days", year: "this year", all: "in total" }[range];
  return (
    <span className="cg-xpwrap" ref={ref}>
      <button className="cg-chip link xp" onClick={() => setOpen(!open)} aria-expanded={open}><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.5 2.9 6 6.6.8-4.9 4.6 1.3 6.5L12 17.1l-5.9 3.3 1.3-6.5L2.5 9.3l6.6-.8Z" fill="#6aa8e8" stroke="#4a86c8" strokeWidth="1.2" strokeLinejoin="round" /></svg><b>{total}</b> XP</button>
      {open && <div className="cg-pop">
        <div className="cg-seg">{[["week", "Week"], ["month", "Month"], ["year", "Year"], ["all", "All time"]].map(([id, l]) => <button key={id} className={range === id ? "on" : ""} onClick={() => setRange(id)}>{l}</button>)}</div>
        <div className="cg-xpnum"><b>{sum} XP</b> <small className="muted">{label}</small></div>
        <div className="cg-xpchart" role="img" aria-label="XP by day">
          {range === "week" && <i className="goalline" style={{ bottom: `${(goal / top) * 100}%` }} />}
          {series.map((s, i) => <span key={i}><i style={{ height: `${(s.value / top) * 100}%` }} /><small>{s.label}</small></span>)}
          {sum === 0 && <em>No XP in this period yet</em>}
        </div>
        <div className="cg-popfoot"><span className="small muted">Your goal is <button className="cg-link inline" onClick={() => { setGoalOpen(true); setOpen(false); }}>{goal} XP a day</button></span><button className="cg-link" onClick={() => { nav("/account/activity"); setOpen(false); }}>See all your activity &rarr;</button></div>
      </div>}
      {goalOpen && <GoalDialog onClose={() => setGoalOpen(false)} />}
    </span>
  );
}

function GoalDialog({ onClose }) {
  const [pick, setPick] = useState(getGoal());
  return (
    <Modal title="Daily XP goal" onClose={onClose}>
      <h2>Daily XP goal</h2>
      <p className="muted small">You'll be given XP for finishing tests, quizzes and flashcards.</p>
      <div className="cg-goals">{GOALS.map(([name, xp, mins]) => <button key={xp} className={pick === xp ? "on" : ""} onClick={() => setPick(xp)}><span><b>{name}</b><small className="muted">{xp} XP &middot; about {mins} mins per day</small></span><i aria-hidden="true">{pick === xp ? "✓" : ""}</i></button>)}</div>
      <div className="cg-actions spread"><button className="cg-link" onClick={onClose}>Cancel</button><button className="cg-btn primary" onClick={() => { setGoal(pick); onClose(); }}>Confirm goal</button></div>
    </Modal>
  );
}

/* ---------- top bar ---------- */

export function TopBar({ path, nav, history, user, onSignOut, dwiddle, courses, manage }) {
  const rows = activity(history);
  const { run } = streakWith(rows);
  const home = path === "/";
  const name = (user?.user_metadata?.full_name || user?.email || "You").split(/[ @]/)[0];
  return (
    <header className="cg-top">
      {home
        ? <a className="cg-brand" href="/" onClick={(e) => { e.preventDefault(); nav("/"); }}><Mascot size={40} /><b>Testiddle</b></a>
        : <button className="cg-brand back" onClick={() => nav("/")}><span aria-hidden="true">&larr;</span><b>Dashboard</b></button>}
      <Menu label="My courses">
        <button onClick={manage}><span className="cg-menuico" aria-hidden="true">+</span><span>Manage my courses</span></button>
        <div className="cg-menusub">My courses</div>
        {courses.map((c) => <button key={c.id} onClick={() => nav(`/course/${c.id}`)}><CourseMark course={c} size={30} /><span className="cg-two-line"><b>{c.name}</b><small className="muted">{c.tag}</small></span></button>)}
        {courses.length === 0 && <div className="cg-menusub">None yet. Add one in Manage my courses.</div>}
      </Menu>
      <span className="cg-spacer" />
      <div className="cg-chips">
        <XpChip rows={rows} nav={nav} />
        <button className="cg-chip link act" onClick={() => nav("/account/activity")}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4dbb8a" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 20v-6M12 20V6M18 20v-9" /></svg>Activity</button>
        <button className="cg-chip link fire" title="Days in a row you have studied" onClick={() => nav("/")}><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5c1 3.5 5 5.5 5 10.2a5 5 0 0 1-10 0c0-2 1-3.4 2-4.4.3 1.4 1 2 1.8 2.4C10.5 8 10.8 5 12 2.5Z" fill="#f4a73a" stroke="#d98a1c" strokeWidth="1.2" strokeLinejoin="round" /></svg><b>{run}</b> {run === 1 ? "Day" : "Days"}</button>
      </div>
      <Menu label={name} wide>
        <div className="cg-menuhead">{user?.email || "Signed in"}</div>
        <button onClick={manage}>Manage courses</button>
        <button onClick={() => nav("/")}>Dashboard</button>
        <button onClick={() => nav("/account/account")}>Account settings</button>
        <button onClick={() => nav("/account/activity")}>Activity log</button>
        <button onClick={() => nav("/help")}>Help and FAQ</button>
        <button onClick={() => nav("/whats-new")}>What's new</button>
        <a href={dwiddle}>Back to Dwiddle</a>
        <button onClick={onSignOut}>Sign out</button>
      </Menu>
    </header>
  );
}

/* ---------- streak ---------- */

const WEEK = ["M", "T", "W", "T", "F", "S", "S"];

function Explainer({ rows, cells, range, onClose }) {
  const s = streakWith(rows);
  const best = Math.max(longestRunOf(rows), s.run);
  return (
    <Modal title="Your streak" onClose={onClose}>
      <div className="cg-streakhero"><StreakFlame lit={s.run > 0} size={78} /><h2>Your streak</h2></div>
      <p className="cg-longest">Longest streak: {best} {best === 1 ? "day" : "days"}</p>
      <div className="cg-weekbox"><div className="cg-spread"><span className="small muted">{range}</span><span className="cg-freezes">{"❄"} {s.left} {s.left === 1 ? "freeze" : "freezes"}</span></div><div className="cg-week">{cells.map((c, i) => <DayBadge key={i} c={c} />)}</div></div>
      <div className="cg-tip"><b>Study every day</b><span className="small muted">Finish a test, a quiz or a few flashcards each day to keep your streak going.</span></div>
      <div className="cg-tip"><b>Streak freezes</b><span className="small muted">If you miss a day, a freeze is applied automatically so your streak survives.</span></div>
      <div className="cg-tip"><b>Two at a time</b><span className="small muted">You can cover up to two missed days in a run. After that, a missed day starts the count again.</span></div>
      <div className="cg-actions"><button className="cg-btn" onClick={onClose}>Got it</button></div>
    </Modal>
  );
}

/** The streak flame: cheerful while the streak is alive, sleepy when it has gone out. */
export function StreakFlame({ lit = true, size = 64 }) {
  const [a, b, line] = lit ? ["#ffd36b", "#ff9a3c", "#e2741f"] : ["#e9e4dc", "#c9c1b5", "#a39a8c"];
  return (
    <svg className="cg-flamepic" width={size} height={size * 1.12} viewBox="0 0 64 72" aria-hidden="true">
      <defs><linearGradient id={lit ? "flm" : "flm0"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} /></linearGradient></defs>
      <ellipse cx="32" cy="68" rx="18" ry="3" fill="#3b4654" opacity=".08" />
      <path d="M33 3c3 9 11 13 17 22 6 9 7 20 1 29-5 8-12 12-19 12S17 62 12 55C6 46 7 35 13 27c2 5 5 7 8 8-2-11 3-23 12-32Z" fill={`url(#${lit ? "flm" : "flm0"})`} stroke={line} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M32 64c-8 0-13-5-13-12 0-6 4-10 7-13 0 4 2 6 4 6-1-6 2-11 6-14 1 6 9 10 9 20 0 8-6 13-13 13Z" fill={lit ? "#fff1b8" : "#f4f1ec"} opacity=".85" />
      <path d="M11 30c-3-2-4-6-3-9" fill="none" stroke={line} strokeWidth="2" strokeLinecap="round" />
      {lit ? <>
        <ellipse cx="25" cy="44" rx="5.6" ry="6.2" fill="#fff" stroke={line} strokeWidth="1.6" /><ellipse cx="40" cy="44" rx="5.6" ry="6.2" fill="#fff" stroke={line} strokeWidth="1.6" />
        <circle cx="26.4" cy="45" r="2.6" fill="#3b2a1a" /><circle cx="41.4" cy="45" r="2.6" fill="#3b2a1a" /><circle cx="27.3" cy="44" r=".9" fill="#fff" /><circle cx="42.3" cy="44" r=".9" fill="#fff" />
        <path d="M28 53q4.5 4 9 0" fill="none" stroke="#7a3d12" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="18" cy="52" rx="3.2" ry="2" fill="#ff7b6b" opacity=".35" /><ellipse cx="47" cy="52" rx="3.2" ry="2" fill="#ff7b6b" opacity=".35" />
      </> : <>
        <path d="M20 45q5 3 10 0M35 45q5 3 10 0" fill="none" stroke="#6b6358" strokeWidth="2" strokeLinecap="round" />
        <path d="M29 54h7" stroke="#6b6358" strokeWidth="2" strokeLinecap="round" />
      </>}
    </svg>
  );
}

/** One day of the week: a little flame with a tick once you studied, ice for a freeze. */
function DayBadge({ c }) {
  if (c.on) return (
    <span className="cg-day badge" aria-label={`${c.name}, studied`}>
      <svg width="48" height="52" viewBox="0 0 48 52" aria-hidden="true"><path d="M24 2c2 6 6 6 9 3 1 5 5 7 8 6 0 4 3 8 3 15 0 13-9 23-20 23S4 39 4 26c0-7 3-11 3-15 3 1 7-1 8-6 3 3 7 3 9-3Z" fill="url(#dayflm)" stroke="#e8902b" strokeWidth="2" strokeLinejoin="round" />
        <defs><linearGradient id="dayflm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffe08a" /><stop offset="1" stopColor="#ffbf47" /></linearGradient></defs>
        <ellipse cx="15" cy="20" rx="4" ry="2.4" fill="#fff" opacity=".55" transform="rotate(-30 15 20)" />
        <path d="M15 29l6 6 12-12" fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 29l6 6 12-12" fill="none" stroke="#e8902b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity=".5" />
      </svg>
    </span>
  );
  if (c.frozen) return <span className="cg-day frozen" aria-label={`${c.name}, covered by a freeze`}>{"\u2744"}</span>;
  return <span className={"cg-day" + (c.today ? " today" : "") + (c.future ? " future" : "")} aria-label={c.name}>{c.l}</span>;
}

const DAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export function Week({ rows }) {
  const [explain, setExplain] = useState(false);
  const [back, setBack] = useState(0); // weeks before this one
  const { days, frozen, run, left } = streakWith(rows);
  const now = new Date();
  const fmt = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - ((now.getDay() + 6) % 7) - back * 7);
  const cells = WEEK.map((l, i) => { const d = new Date(monday); d.setDate(monday.getDate() + i); return { l, name: DAY_NAMES[i], on: days.has(fmt(d)), frozen: frozen.has(fmt(d)), today: fmt(d) === fmt(now), future: d > now }; });
  const span = (d) => d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  const sunday = new Date(monday); sunday.setDate(monday.getDate() + 6);
  const range = `${span(monday)} - ${span(sunday)}`;
  return (
    <div className="cg-streak">
      <div className="cg-streakhead">
        <div className="cg-flame"><StreakFlame lit={run > 0} /><div><b className="cg-big">{run} {run === 1 ? "day" : "days"}</b><span className="muted">{run ? "Current streak" : "Study today to start a streak"}</span></div></div>
        <span className="cg-rangebox">
          <span className="cg-range"><button aria-label="Previous week" onClick={() => setBack(back + 1)}>&lsaquo;</button><span>{range}</span><button aria-label="Next week" disabled={back === 0} onClick={() => setBack(back - 1)}>&rsaquo;</button></span>
          <button className="cg-info" aria-label="How streaks work" onClick={() => setExplain(true)}>i</button>
        </span>
      </div>
      <div className="cg-week">{cells.map((c, i) => <DayBadge key={i} c={c} />)}</div>
      <span className="cg-freezepill">{"\u2744"} {left} {left === 1 ? "freeze" : "freezes"}</span>
      {explain && <Explainer rows={rows} cells={cells} range={range} onClose={() => setExplain(false)} />}
    </div>
  );
}

/* ---------- avatar and manage courses ---------- */

/** The picture on the dashboard: one of the Tiddle characters (older picks show the cool one). */
function Avatar({ id, size }) {
  const key = String(id).startsWith("tav:") ? String(id).slice(4) : "cool";
  return <TiddleAv id={TAV_IDS.includes(key) ? key : "cool"} size={size} />;
}

export function AvatarPicker({ onClose }) {
  const [pick, setPick] = useState(() => (String(getAvatar()).startsWith("tav:") ? getAvatar() : "tav:cool"));
  return (
    <Modal title="Select your avatar" onClose={onClose} wide>
      <h2>Select your avatar</h2>
      <div className="cg-avatars">{TAV_IDS.map((k) => ({ id: `tav:${k}`, name: `Tiddle, ${TAV_NAMES[k]}` })).map((c) => <button key={c.id} className={pick === c.id ? "on" : ""} onClick={() => setPick(c.id)} aria-label={c.name} aria-pressed={pick === c.id}><Avatar id={c.id} size={104} />{pick === c.id && <i className="cg-avcheck" aria-hidden="true">{"\u2713"}</i>}</button>)}</div>
      <div className="cg-actions spread"><button className="cg-link" onClick={onClose}>Cancel</button><button className="cg-btn primary" onClick={() => { setAvatar(pick); onClose(); }}>Confirm</button></div>
    </Modal>
  );
}

export function ManageCourses({ onClose }) {
  const [picked, setPickedRaw] = useState(() => Object.fromEntries(myCourses().map((x) => [x.id === "paper-sat" || x.id === "computer-sat" ? "sat" : x.id, { ...x, id: x.id === "paper-sat" || x.id === "computer-sat" ? "sat" : x.id }])));
  const [qual, setQual] = useState(null);
  const setPicked = (p) => { setPickedRaw(p); setMyCourses(Object.values(p)); };
  const mine = Object.values(picked).map(courseFor).filter(Boolean);
  return (
    <Modal title="Manage courses" onClose={onClose} wide>
      {qual ? <>
        <div className="ob-q left"><button className="ob-back" aria-label="Back" onClick={() => setQual(null)}>&larr;</button><h2>{qual === "sat" ? "SAT" : "IGCSE"}</h2></div>
        <SubjectList qual={qual} picked={picked} setPicked={setPicked} />
      </> : <>
        <h2>Manage courses</h2>
        <section className="cg-card cg-manage"><span className="cg-tag dark">Your courses ({mine.length})</span>
          {mine.length === 0 && <div className="cg-empty">No courses yet. Add one below.</div>}
          {mine.map((c) => <div key={c.id} className="cg-managerow"><CourseMark course={c} size={40} /><span className="cg-two-line"><b>{c.name}</b><small className="muted">{c.tag}{c.tier ? `, ${c.tier}` : ""}</small></span><button className="cg-link" onClick={() => setQual(c.qual)}>Edit</button><button className="cg-link" onClick={() => { const n = { ...picked }; delete n[c.id]; setPicked(n); }}>Remove</button></div>)}
        </section>
        <section className="cg-card ob-pick"><span className="cg-tag dark">Add something new</span><QualList picked={picked} onPick={setQual} /></section>
      </>}
    </Modal>
  );
}

/* ---------- dashboard ---------- */

export function Dashboard({ nav, history, user, courses, manage }) {
  const ob = (user?.id && onboarding(user.id)) || {};
  const [order, setOrder] = useState("added");
  const [avatarOpen, setAvatarOpen] = useState(false);
  const rows = activity(history);
  const done = doneFrom(quizLog());
  const answered = Object.keys(done).length, right = Object.values(done).filter(Boolean).length;
  const ratings = cardRatings();
  const rated = CARDS.filter((c) => ratings[c.id]?.level);
  const conf = rated.length ? Math.round((rated.reduce((n, c) => n + ratings[c.id].level, 0) / (rated.length * 3)) * 100) : null;
  const name = (user?.user_metadata?.full_name || user?.email || "").split(/[ @]/)[0] || "there";
  const sorted = order === "az" ? [...courses].sort((a, b) => a.name.localeCompare(b.name)) : order === "za" ? [...courses].sort((a, b) => b.name.localeCompare(a.name)) : courses;
  const { left } = streakWith(rows);
  return (
    <div className="cg-page">
      <section className="cg-card cg-hello">
        <span className="cg-tag">{[ob.role || "SAT practice", ob.year].filter(Boolean).join(" \u00b7 ")}</span>
        <div className="cg-who">
          <span className="cg-avatar"><Avatar id={getAvatar()} size={110} /><button className="cg-pencil" aria-label="Change your avatar" onClick={() => setAvatarOpen(true)}>{"✎"}</button></span>
          <div><h1>Hi {name}</h1><span className="cg-freezepill inline">{"❄"} {left} {left === 1 ? "freeze" : "freezes"}</span></div>
        </div>
        <Week rows={rows} />
      </section>
      {avatarOpen && <AvatarPicker onClose={() => setAvatarOpen(false)} />}

      <div className="cg-sectionhead"><span className="cg-label">{courses.length} {courses.length === 1 ? "course" : "courses"}</span><span className="cg-dash" /><button className="cg-btn" onClick={manage}>Manage courses</button></div>

      <section className="cg-card cg-table" aria-label="Your courses">
        <div className="cg-th"><span className="cg-sort"><Menu label="Course sort order" icon><button onClick={() => setOrder("added")}>Date added{order === "added" ? " ✓" : ""}</button><button onClick={() => setOrder("az")}>A to Z{order === "az" ? " ✓" : ""}</button><button onClick={() => setOrder("za")}>Z to A{order === "za" ? " ✓" : ""}</button></Menu>Course</span><span>Tests or topics</span><span>Questions / avg score</span><span>Flashcards / confidence</span><span /></div>
        {courses.length === 0 && <div className="cg-empty">No courses yet. Press Manage courses to add one.</div>}
        {sorted.map((c) => {
          const s = summary(history, c);
          if (c.kind === "igcse") {
            const done = topicsDone(c.id, c.board, c.tier).length;
            return (
              <button key={c.id} className="cg-tr" onClick={() => nav(`/course/${c.id}`)}>
                <span className="cg-course"><CourseMark course={c} /><span><b>{c.name}</b><span className="small muted">{c.tag}{c.tier ? `, ${c.tier}` : ""}</span></span></span>
                <span>{done} / {c.topics.length} <small className="muted">topics</small></span>
                <span>~</span><span>~</span>
                <i className="cg-chev" aria-hidden="true">&rsaquo;</i>
              </button>
            );
          }
          return (
            <button key={c.id} className="cg-tr" onClick={() => nav(`/course/${c.id}`)}>
              <span className="cg-course"><CourseMark course={c} /><span><b>{c.name}</b><span className="small muted">{c.count} full length tests{c.date && c.date !== "Not sure yet" ? `, sitting in ${c.date}` : ""}</span></span></span>
              <span>{s.sittings} <small className="muted">{s.average === null ? "~" : `${s.average}%`}</small></span>
              <span>{answered} / {QUESTION_COUNT} <small className="muted">{answered ? `${Math.round((right / answered) * 100)}%` : "~"}</small></span>
              <span>{rated.length} / {CARDS.length} <small className="muted">{conf === null ? "~" : `${conf}%`}</small></span>
              <i className="cg-chev" aria-hidden="true">&rsaquo;</i>
            </button>
          );
        })}
      </section>
    </div>
  );
}
