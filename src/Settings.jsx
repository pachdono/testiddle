// The account area: Account, Preferences and Activity, with a side menu like the course site's.

import { useEffect, useMemo, useState } from "react";
import { getProfile, saveLook } from "./supabase.js";
import { Modal } from "./Courses.jsx";
import { COURSES, RANGES, byHour, courseOf, dayOf, inRange, kindOf, summary } from "./courses.js";
import { activity, cardRatings, quizLog } from "./progress.js";

const TABS = [["account", "Account"], ["preferences", "Preferences"], ["activity", "Activity"]];
const TAB_ICON = {
  account: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20a7.5 7.5 0 0 1 15 0",
  preferences: "M4 7h9M17 7h3M4 17h3M11 17h9M15 4v6M9 14v6",
  activity: "M5 20V10M10 20V4M15 20v-7M20 20V8",
};

function Ico({ id }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={TAB_ICON[id]} /></svg>;
}

export function Settings({ tab, nav, history, user, theme, setTheme, onReset, requestDelete }) {
  return (
    <div className="cg-settings">
      <nav className="cg-side" aria-label="Account">
        {TABS.map(([id, label]) => <button key={id} className={tab === id ? "on" : ""} onClick={() => nav(`/account/${id}`)}><Ico id={id} />{label}</button>)}
      </nav>
      <div className="cg-sidemain">
        {tab === "preferences" ? <Preferences theme={theme} setTheme={setTheme} />
          : tab === "activity" ? <Activity history={history} />
            : <AccountTab user={user} history={history} onReset={onReset} requestDelete={requestDelete} />}
      </div>
    </div>
  );
}

function AccountTab({ user, history, onReset, requestDelete }) {
  const meta = user?.user_metadata || {};
  const joined = user?.created_at ? new Date(user.created_at).toLocaleDateString(undefined, { month: "short", year: "numeric" }) : "";
  const [name, setName] = useState("");
  const [profile, setProfile] = useState(undefined);
  const [saved, setSaved] = useState(null);
  const [dialog, setDialog] = useState(false);
  useEffect(() => { if (!user?.id) return; getProfile(user.id).then((p) => { setProfile(p); setName(p?.display_name || meta.full_name || ""); }); }, [user?.id]);
  const save = async () => {
    setSaved("saving");
    const r = await saveLook(user.id, { display_name: name.trim().slice(0, 40), avatar: profile?.avatar ?? null });
    setSaved(r.ok ? "Saved" : r.reason);
  };
  return (
    <div className="cg-stack">
      <section className="cg-card cg-form">
        <span className="cg-tag">Profile details</span>
        <label>Display name<input value={name} maxLength={40} placeholder="Not set" onChange={(e) => { setName(e.target.value); setSaved(null); }} /></label>
        <label>Email<input readOnly value={user?.email || ""} /></label>
        <p className="small muted">{joined ? `Joined ${joined}. ` : ""}This is the same account as Dwiddle, so the name shows there too.</p>
        <div className="cg-actions">{saved && saved !== "saving" && <span className="small muted">{saved}</span>}<button className="cg-btn primary" disabled={!user?.id || !name.trim() || saved === "saving"} onClick={save}>{saved === "saving" ? "Saving" : "Save changes"}</button></div>
      </section>
      <section className="cg-card cg-form">
        <span className="cg-tag">Reset course progress</span>
        <p className="small muted">Start fresh by clearing your progress on one or all of your courses. This removes test results, and you can also clear quiz answers and flashcard confidence.</p>
        <div className="cg-actions"><button className="cg-btn danger" onClick={() => setDialog(true)}>Reset progress</button></div>
      </section>
      <section className="cg-card cg-form">
        <span className="cg-tag">Delete account</span>
        <p className="small muted">Your account is shared with Dwiddle, so the team deletes it for you, with all its data. This sends them the request; it cannot be undone once done.</p>
        <div className="cg-actions"><button className="cg-btn danger" onClick={requestDelete}>Request deletion</button></div>
      </section>
      {dialog && <ResetDialog history={history} onClose={() => setDialog(false)} onReset={(o) => { onReset(o); setDialog(false); }} />}
    </div>
  );
}

function ResetDialog({ history, onClose, onReset }) {
  const [scope, setScope] = useState("some");
  const [picked, setPicked] = useState([]);
  const [everything, setEverything] = useState(false);
  const ok = scope === "all" || picked.length > 0;
  return (
    <Modal title="Reset your progress" onClose={onClose}>
      <h2>Reset your progress?</h2>
      <p className="muted small">This permanently deletes your course progress on this device and can't be undone.</p>
      <div className="cg-goals">
        <button className={scope === "some" ? "on" : ""} onClick={() => setScope("some")}><span><b>Specific courses</b><small className="muted">Choose one or more courses to clear</small></span><i aria-hidden="true">{scope === "some" ? "\u2713" : ""}</i></button>
        {scope === "some" && <div className="cg-pickcourses">{COURSES.map((c) => <label key={c.id}><input type="checkbox" checked={picked.includes(c.id)} onChange={() => setPicked(picked.includes(c.id) ? picked.filter((x) => x !== c.id) : [...picked, c.id])} />{c.name} <small className="muted">{history.filter((h) => courseOf(h.paper).id === c.id).length} results</small></label>)}</div>}
        <button className={scope === "all" ? "on" : ""} onClick={() => setScope("all")}><span><b>All courses</b><small className="muted">Clear your results on every course you've added</small></span><i aria-hidden="true">{scope === "all" ? "\u2713" : ""}</i></button>
      </div>
      <label className="cg-tick"><input type="checkbox" checked={everything} onChange={(e) => setEverything(e.target.checked)} /><span>Also clear quiz answers, flashcards and notes progress, which resets your streak and XP to zero</span></label>
      <div className="cg-actions spread"><button className="cg-link" onClick={onClose}>Cancel</button><button className="cg-btn danger" disabled={!ok} onClick={() => onReset({ courses: scope === "all" ? COURSES.map((c) => c.id) : picked, everything })}>Continue</button></div>
    </Modal>
  );
}

function Toggle({ on, onChange, label }) {
  return <button role="switch" aria-checked={on} aria-label={label} className={"cg-switch" + (on ? " on" : "")} onClick={() => onChange(!on)}><i /></button>;
}

function Preferences({ theme, setTheme }) {
  return (
    <section className="cg-card cg-prefs">
      <span className="cg-tag">Preferences</span>
      <div className="cg-pref">
        <div><b>Dark mode</b><span className="small muted">Switch between light and dark themes.</span></div>
        <Toggle on={theme === "dark"} onChange={(v) => setTheme(v ? "dark" : "light")} label="Dark mode" />
      </div>
    </section>
  );
}

/* ---------- activity ---------- */

const PALETTE = ["#4a90d9", "#3fb37f", "#9a58d0", "#e0a030", "#d9605a"];

function Donut({ rows, unit }) {
  const total = rows.reduce((n, r) => n + r.value, 0);
  let at = 0;
  const R = 54, C = 2 * Math.PI * R;
  return (
    <div className="cg-donut">
      <svg viewBox="0 0 140 140" width="170" height="170" role="img" aria-label="Breakdown">
        <circle cx="70" cy="70" r={R} fill="none" stroke="var(--hover)" strokeWidth="16" />
        {total > 0 && rows.map((r, i) => {
          const len = (r.value / total) * C, off = -at; at += len;
          return <circle key={r.name} cx="70" cy="70" r={R} fill="none" stroke={PALETTE[i % PALETTE.length]} strokeWidth="16" strokeDasharray={`${len} ${C - len}`} strokeDashoffset={off} transform="rotate(-90 70 70)" />;
        })}
        <text x="70" y="68" textAnchor="middle" className="cg-donutnum">{total}</text>
        <text x="70" y="86" textAnchor="middle" className="cg-donutunit">{unit}</text>
      </svg>
      <ul>{rows.map((r, i) => <li key={r.name}><i style={{ background: PALETTE[i % PALETTE.length] }} /><span>{r.name}</span><b>{r.value}</b></li>)}</ul>
    </div>
  );
}

const KINDS = [["Test", "#4a90d9"], ["Quiz", "#9a58d0"], ["Flashcards", "#3fb37f"]];

function DayByDay({ history }) {
  const rows = activity(history);
  const now = new Date();
  const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - ((now.getDay() + 6) % 7));
  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((label, i) => {
    const d = new Date(monday); d.setDate(monday.getDate() + i);
    const key = dayOf(d);
    return { label, parts: KINDS.map(([k]) => rows.filter((r) => r.on === key && r.kind === k).reduce((n, r) => n + r.xp, 0)) };
  });
  const top = Math.max(1, ...days.map((d) => d.parts.reduce((a, b) => a + b, 0)));
  return (
    <section className="cg-card">
      <span className="cg-tag">Day by day</span>
      <div className="cg-spread small muted"><span>XP this week, by activity</span><span className="cg-legend">{KINDS.map(([k, c]) => <span key={k}><i style={{ background: c }} />{k}</span>)}</span></div>
      <div className="cg-daybars" role="img" aria-label="XP by day this week">{days.map((d) => (
        <span key={d.label} title={`${d.label}: ${d.parts.reduce((a, b) => a + b, 0)} XP`}><span className="cg-stack-bar">{d.parts.map((v, i) => v ? <i key={i} style={{ height: `${(v / top) * 100}%`, background: KINDS[i][1] }} /> : null)}</span><small>{d.label}</small></span>
      ))}</div>
    </section>
  );
}

const hourLabel = (h) => (h === 0 ? "12am" : h < 12 ? `${h}am` : h === 12 ? "12pm" : `${h - 12}pm`);

function Activity({ history }) {
  const [range, setRange] = useState("recent");
  const [measure, setMeasure] = useState("sittings");
  const [course, setCourse] = useState("all");
  const [type, setType] = useState("all");
  const [open, setOpen] = useState(null);

  const list = useMemo(() => inRange(history, range).filter((h) => course === "all" || courseOf(h.paper).id === course), [history, range, course]);
  const shown = list.filter((h) => type === "all" || kindOf(h) === type);
  const all = summary(list);
  const val = (h) => (measure === "time" ? h.minutes || 0 : 1);
  const group = (key) => { const m = new Map(); list.forEach((h) => m.set(key(h), (m.get(key(h)) || 0) + val(h))); return [...m].map(([name, value]) => ({ name, value })); };
  const hours = byHour(list), top = Math.max(1, ...hours), peak = hours.indexOf(Math.max(...hours));
  // quizzes and flashcards, one line for each day
  const extra = [];
  if (course === "all") {
    const byDay = (list, kind) => { const m = new Map(); list.forEach((e) => { const d = dayOf(new Date(e.t)); const x = m.get(d) || { id: `${kind}-${d}`, kind, on: d, t: e.t, n: 0, ok: 0 }; x.n += 1; x.ok += e.ok ? 1 : 0; x.t = Math.max(x.t, e.t); m.set(d, x); }); return [...m.values()]; };
    extra.push(...inRange(byDay(quizLog(), "Quiz"), range), ...inRange(byDay(Object.values(cardRatings()).filter((c) => c?.t && c.level > 0).map((c) => ({ t: c.t, ok: c.level >= 3 })), "Flashcards"), range));
  }
  const shownExtra = extra.filter((e) => type === "all" || type === e.kind);
  const days = [...new Set([...shown, ...shownExtra].map((h) => h.on))].sort().reverse();
  const today = new Date(); const dayName = (d) => { const t = new Date(d + "T12:00:00"); const diff = Math.round((new Date(today.getFullYear(), today.getMonth(), today.getDate()) - new Date(t.getFullYear(), t.getMonth(), t.getDate())) / 86400000); return diff === 0 ? "Today" : diff === 1 ? "Yesterday" : t.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "short" }); };
  const mins = all.minutes;
  const types = ["all", "Reading and Writing", "Math", "Full test", "Quiz", "Flashcards"];

  return (
    <div className="cg-stack">
      <div className="cg-filters">
        <div className="cg-seg" role="tablist" aria-label="Time range">{RANGES.map(([id, label]) => <button key={id} role="tab" aria-selected={range === id} className={range === id ? "on" : ""} onClick={() => setRange(id)}>{label}</button>)}</div>
        <select value={measure} onChange={(e) => setMeasure(e.target.value)} aria-label="Measure"><option value="sittings">Sittings</option><option value="time">Time</option></select>
        <select value={course} onChange={(e) => setCourse(e.target.value)} aria-label="Course"><option value="all">All courses</option>{COURSES.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select>
      </div>

      <div className="cg-stats">
        <section className="cg-stat blue"><span className="cg-statlabel">Time studied</span><b>{mins >= 60 ? `${Math.floor(mins / 60)}h ${mins % 60}m` : `${mins}m`}</b></section>
        <section className="cg-stat purple"><span className="cg-statlabel">Sittings</span><b>{all.sittings}</b></section>
        <section className="cg-stat green"><span className="cg-statlabel">Questions</span><b>{list.reduce((n, h) => n + (h.total || 0), 0)}</b><small>{all.average === null ? "" : `${all.average}% right on average`}</small></section>
      </div>

      <DayByDay history={history} />

      <div className="cg-two">
        <section className="cg-card"><span className="cg-tag">By course</span><Donut rows={group((h) => courseOf(h.paper).name)} unit={measure === "time" ? "min" : "sittings"} /></section>
        <section className="cg-card"><span className="cg-tag">By section</span><Donut rows={group(kindOf)} unit={measure === "time" ? "min" : "sittings"} /></section>
      </div>

      <section className="cg-card">
        <span className="cg-tag">Time of day</span>
        <div className="cg-peak small muted">{Math.max(...hours) > 0 ? <>Peak <b>{hourLabel(peak)} to {hourLabel((peak + 1) % 24)}</b></> : "No time recorded in this period"}</div>
        <div className="cg-hours" role="img" aria-label="Minutes studied by hour of the day">{hours.map((m, h) => <span key={h} title={`${hourLabel(h)}: ${m} min`}><i style={{ height: `${(m / top) * 100}%` }} /></span>)}</div>
        <div className="cg-hourlabels small muted">{[0, 3, 6, 9, 12, 15, 18, 21].map((h) => <span key={h}>{hourLabel(h)}</span>)}</div>
      </section>

      <section className="cg-card">
        <span className="cg-tag">What you've done</span>
        <div className="cg-typefilter"><select value={type} onChange={(e) => setType(e.target.value)} aria-label="Type">{types.map((t) => <option key={t} value={t}>{t === "all" ? "All types" : t}</option>)}</select></div>
        {shown.length + shownExtra.length === 0 && <div className="cg-empty">Nothing in this period. Sit a test and it will show up here.</div>}
        {days.map((d) => (
          <div key={d} className="cg-day-group">
            <div className="cg-daylabel">{dayName(d)}</div>
            {shown.filter((h) => h.on === d).map((h) => (
              <div key={h.id} className="cg-done">
                <button onClick={() => setOpen(open === h.id ? null : h.id)} aria-expanded={open === h.id}>
                  <span className="cg-rowtext"><b>{h.paper}</b><span className="small muted">{kindOf(h)} · {courseOf(h.paper).name}</span></span>
                  <span className="small muted">{new Date(h.id).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                  <i className="cg-chev down" aria-hidden="true">&rsaquo;</i>
                </button>
                {open === h.id && <div className="cg-detail small muted">{h.section}: {h.right} of {h.total} right ({Math.round((h.right / Math.max(1, h.total)) * 100)}%){h.minutes ? `, ${h.minutes} min` : ""}</div>}
              </div>
            ))}
            {shownExtra.filter((e) => e.on === d).map((e) => (
              <div key={e.id} className="cg-done"><button disabled><span className="cg-rowtext"><b>{e.kind === "Quiz" ? `${e.n} quiz ${e.n === 1 ? "question" : "questions"}` : `${e.n} ${e.n === 1 ? "flashcard" : "flashcards"} rated`}</b><span className="small muted">{e.kind} · {e.kind === "Quiz" ? `${e.ok} right` : `${e.ok} known`}</span></span><span className="small muted">{new Date(e.t).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span></button></div>
            ))}
          </div>
        ))}
      </section>
      <p className="cg-note small muted">This page shows the tests you have finished, your quiz answers and your flashcards. Study time is recorded for paper tests only.</p>
    </div>
  );
}
