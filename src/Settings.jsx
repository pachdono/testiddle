// The account area: Account, Preferences and Activity, with a side menu like the course site's.

import { useMemo, useState } from "react";
import { COURSES, RANGES, byHour, courseOf, inRange, kindOf, summary } from "./courses.js";

const TABS = [["account", "Account"], ["preferences", "Preferences"], ["activity", "Activity"]];
const TAB_ICON = {
  account: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20a7.5 7.5 0 0 1 15 0",
  preferences: "M4 7h9M17 7h3M4 17h3M11 17h9M15 4v6M9 14v6",
  activity: "M5 20V10M10 20V4M15 20v-7M20 20V8",
};

function Ico({ id }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={TAB_ICON[id]} /></svg>;
}

export function Settings({ tab, nav, history, user, theme, setTheme, onReset }) {
  return (
    <div className="cg-settings">
      <nav className="cg-side" aria-label="Account">
        {TABS.map(([id, label]) => <button key={id} className={tab === id ? "on" : ""} onClick={() => nav(`/account/${id}`)}><Ico id={id} />{label}</button>)}
      </nav>
      <div className="cg-sidemain">
        {tab === "preferences" ? <Preferences theme={theme} setTheme={setTheme} />
          : tab === "activity" ? <Activity history={history} />
            : <AccountTab user={user} history={history} onReset={onReset} />}
      </div>
    </div>
  );
}

function AccountTab({ user, history, onReset }) {
  const [sure, setSure] = useState(false);
  const meta = user?.user_metadata || {};
  const joined = user?.created_at ? new Date(user.created_at).toLocaleDateString(undefined, { month: "short", year: "numeric" }) : "";
  return (
    <div className="cg-stack">
      <section className="cg-card cg-form">
        <span className="cg-tag">Profile details</span>
        <label>Name<input readOnly value={meta.full_name || meta.name || ""} placeholder="Not set" /></label>
        <label>Email<input readOnly value={user?.email || ""} /></label>
        <p className="small muted">{joined ? `Joined ${joined}. ` : ""}This is the same account as Dwiddle, so change your name and picture there.</p>
      </section>
      <section className="cg-card cg-form">
        <span className="cg-tag">Reset results</span>
        <p className="small muted">Start fresh by clearing your results on this device. This removes your saved scores and streak. Tests you have partly sat are not touched.</p>
        <div className="cg-actions">
          {sure
            ? <><span className="small">Clear {history.length} {history.length === 1 ? "result" : "results"}?</span><button className="cg-btn" onClick={() => setSure(false)}>Keep them</button><button className="cg-btn danger" onClick={() => { onReset(); setSure(false); }}>Yes, clear</button></>
            : <button className="cg-btn danger" disabled={!history.length} onClick={() => setSure(true)}>Reset results</button>}
        </div>
      </section>
    </div>
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
  const days = [...new Set(shown.map((h) => h.on))].sort().reverse();
  const today = new Date(); const dayName = (d) => { const t = new Date(d + "T12:00:00"); const diff = Math.round((new Date(today.getFullYear(), today.getMonth(), today.getDate()) - new Date(t.getFullYear(), t.getMonth(), t.getDate())) / 86400000); return diff === 0 ? "Today" : diff === 1 ? "Yesterday" : t.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "short" }); };
  const mins = all.minutes;
  const types = ["all", "Reading and Writing", "Math", "Full test"];

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
        {shown.length === 0 && <div className="cg-empty">Nothing in this period. Sit a test and it will show up here.</div>}
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
          </div>
        ))}
      </section>
      <p className="cg-note small muted">This page shows the tests you have finished. Study time is recorded for paper tests only.</p>
    </div>
  );
}
