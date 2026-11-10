// Signing in, and the three questions asked once after signing up: who you are, what year you
// are in, and what you are studying. Tiddle keeps you company.

import { useEffect, useState } from "react";
import { Mascot } from "./Mascot.jsx";
import { supabase, enabledProviders } from "./supabase.js";
import { COURSES } from "./courses.js";
import { setHidden } from "./progress.js";

const INK = "#24364a";
const KEY = (id) => `testiddle-onboard:${id}`;
export const onboarding = (id) => { try { return JSON.parse(localStorage.getItem(KEY(id))) || null; } catch { return null; } };
const saveOnboarding = (id, v) => { try { localStorage.setItem(KEY(id), JSON.stringify(v)); } catch { /* private mode */ } };
const returnTo = () => window.location.origin;

/** Small round pictures for each course, drawn in the same soft outline as Tiddle. */
export function CourseIcon({ id, size = 64 }) {
  const ring = <circle cx="32" cy="34" r="25" fill="#fff" stroke="#c9cfd6" strokeWidth="1.4" />;
  const s = { stroke: INK, strokeWidth: 2, strokeLinejoin: "round", strokeLinecap: "round" };
  const art = {
    paper: <g {...s}><path d="M19 13 H39 L47 21 V53 H19 Z" fill="#fffdf6" /><path d="M39 13 V21 H47" fill="#efe6cf" /><path d="M24 28 H41 M24 34 H41 M24 40 H35" strokeWidth="1.6" /><circle cx="27" cy="47" r="2.2" fill="#86dcc6" strokeWidth="1.4" /><path d="M42 50 L53 30 L57 32 L46 52 L41 54 Z" fill="#f5a43c" /><path d="M53 30 L55 26 L59 28 L57 32" fill="#f7a8bb" /></g>,
    computer: <g {...s}><rect x="15" y="17" width="34" height="23" rx="3" fill="#dbe7f7" /><rect x="19" y="21" width="26" height="15" rx="1.5" fill="#fff" /><path d="M24 30 l4 3 8-8" stroke="#3fa46a" strokeWidth="2.4" fill="none" /><path d="M10 44 H54 L50 50 H14 Z" fill="#c9d3df" /><path d="M27 47 H37" strokeWidth="1.4" /></g>,
    rw: <g {...s}><path d="M12 22 C20 18 27 19 32 23 C37 19 44 18 52 22 V48 C44 44 37 45 32 49 C27 45 20 44 12 48 Z" fill="#fff" /><path d="M32 23 V49" /><path d="M17 28 C21 26 25 26 28 28 M17 34 C21 32 25 32 28 34 M36 28 C40 26 44 26 47 28 M36 34 C40 32 44 32 47 34" strokeWidth="1.4" /><path d="M40 12 L49 9 L50 13 L41 16 Z" fill="#f7a8bb" /></g>,
    math: <g {...s}><rect x="10" y="38" width="44" height="11" rx="2" fill="#f5c76a" /><path d="M16 38 V43 M22 38 V45 M28 38 V43 M34 38 V45 M40 38 V43 M46 38 V45" strokeWidth="1.4" /><path d="M14 33 L32 11 L50 33 Z" fill="#c9eee2" /><path d="M24 28 L32 18 L40 28 Z" fill="#fff" strokeWidth="1.6" /><circle cx="32" cy="11" r="2" fill={INK} /></g>,
  }[id];
  return <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">{ring}{art}</svg>;
}

function GoogleMark() {
  return <svg width="20" height="20" viewBox="0 0 18 18" aria-hidden="true"><path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.91c1.7-1.57 2.69-3.88 2.69-6.62Z" /><path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.91-2.26c-.81.54-1.84.86-3.05.86-2.35 0-4.33-1.58-5.04-3.71H.96v2.33A9 9 0 0 0 9 18Z" /><path fill="#FBBC05" d="M3.96 10.71a5.4 5.4 0 0 1 0-3.42V4.96H.96a9 9 0 0 0 0 8.08l3-2.33Z" /><path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.96l3 2.33C4.67 5.16 6.65 3.58 9 3.58Z" /></svg>;
}
const Mail = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 6.5 8.5-6.5" /></svg>;
const Chev = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="m8 5 5 5-5 5" /></svg>;

/* ---------- the sign in card ---------- */

export function AuthCard() {
  const [mode, setMode] = useState("signin");
  const [google, setGoogle] = useState(null);
  const [emailOpen, setEmailOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle"); // idle | sending | sent | error
  const [message, setMessage] = useState("");
  useEffect(() => { let live = true; enabledProviders().then((p) => live && setGoogle(Boolean(p.google))).catch(() => live && setGoogle(false)); return () => { live = false; }; }, []);
  async function withGoogle() {
    if (!supabase) return;
    setState("sending");
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: returnTo() } });
    if (error) { setState("error"); setMessage(error.message); }
  }
  async function sendLink(e) {
    e.preventDefault();
    if (!email.trim() || !supabase) return;
    setState("sending");
    const { error } = await supabase.auth.signInWithOtp({ email: email.trim(), options: { emailRedirectTo: returnTo() } });
    if (error) { setState("error"); setMessage(/rate limit|too many|seconds/i.test(error.message) ? "Too many emails were just sent. Wait a minute and try again, or continue with Google." : error.message); }
    else { setState("sent"); setMessage(`Check ${email.trim()} for a link. It expires in an hour.`); }
  }
  return (
    <div className="ob-authwrap">
      <section className="ob-card ob-auth">
        <span className="ob-perch"><Mascot size={130} pose={state === "sent" ? "cheer" : "sit"} /></span>
        <h1>{mode === "signin" ? "Sign in" : "Create your account"}</h1>
        {state === "sent" ? <div className="ob-sent"><p>{message}</p><p className="small muted">You can close this tab. Opening the link signs you in.</p><button className="cg-link" onClick={() => { setState("idle"); setEmailOpen(true); }}>Use a different email</button></div> : <>
          <div className="ob-rows">
            {google !== false && <button className="ob-row" disabled={!google || state === "sending"} onClick={withGoogle}><GoogleMark /><span>Continue with Google</span><Chev /></button>}
            <button className="ob-row" aria-expanded={emailOpen} onClick={() => setEmailOpen(!emailOpen)}><Mail /><span>Continue with email</span><Chev /></button>
            {emailOpen && <form className="ob-email" onSubmit={sendLink}><input type="email" required autoFocus value={email} placeholder="you@example.com" autoComplete="email" inputMode="email" autoCapitalize="none" spellCheck={false} onChange={(e) => setEmail(e.target.value)} /><button className="cg-btn primary" disabled={state === "sending"}>{state === "sending" ? "Sending" : mode === "signin" ? "Email me a link" : "Send my sign up link"}</button></form>}
          </div>
          {state === "error" && <p className="small cg-err">{message}</p>}
          {!supabase && <p className="small cg-err">Accounts are not set up on this site yet.</p>}
          <p className="ob-switch">{mode === "signin" ? "Don't have an account?" : "Already have an account?"}<br /><button className="cg-link" onClick={() => setMode(mode === "signin" ? "signup" : "signin")}>{mode === "signin" ? "Sign up here" : "Sign in here"}</button></p>
          <p className="small muted ob-legal">It's the same account as Dwiddle. By continuing you agree to the <a href="https://dwiddle.vercel.app/terms" target="_blank" rel="noreferrer">Terms</a> and have read the <a href="https://dwiddle.vercel.app/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>.</p>
        </>}
      </section>
    </div>
  );
}

/* ---------- after signing up ---------- */

const ROLES = ["Student", "Parent", "Teacher", "Tutor", "Other"];
const YEARS = [["Year 9", "Grade 8"], ["Year 10", "Grade 9"], ["Year 11", "Grade 10"], ["Year 12", "Grade 11"], ["Year 13", "Grade 12"], ["Finished school", "Gap year or later"]];
const DATES = ["August", "October", "November", "December", "March", "May", "June", "Not sure yet"];
const LEVELS = [["sat", "SAT", "The digital SAT, on paper or on screen"], ["psat", "PSAT", "Coming later"], ["act", "ACT", "Coming later"]];
const ICON = { "paper-sat": "paper", "computer-sat": "computer" };

export function Onboarding({ user, onDone }) {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState(null);
  const [year, setYear] = useState(null);
  const [level, setLevel] = useState(null);
  const [open, setOpen] = useState(null);
  const [q, setQ] = useState("");
  const [picked, setPicked] = useState({}); // course id -> test month
  const name = (user?.user_metadata?.full_name || user?.email || "").split(/[ @]/)[0];
  const total = role === "Student" ? 4 : 3;
  const at = step === 1 ? 1 : role === "Student" ? step : step - 1;
  const back = () => setStep(level ? (setLevel(null), 3) : role === "Student" && step === 3 ? 2 : step === 3 ? 1 : step - 1);
  const finish = () => {
    const courses = Object.keys(picked);
    saveOnboarding(user.id, { role, year, courses: picked, at: Date.now() });
    setHidden(COURSES.filter((c) => !courses.includes(c.id)).map((c) => c.id));
    onDone();
  };
  const list = COURSES.filter((c) => !q.trim() || (c.name + " " + c.tag).toLowerCase().includes(q.trim().toLowerCase()));
  return (
    <div className="ob-shell">
      <header className="ob-top"><span className="ob-brand"><Mascot size={38} /><b>Testiddle</b></span><span className="ob-bar"><i style={{ width: `${(at / total) * 100}%` }} /></span><span /></header>
      <main className="ob-main">
        {step === 1 && <section className="ob-step">
          <div className="ob-q"><Mascot size={92} pose="wave" /><h1>{name ? `Hi ${name}! ` : ""}What describes you best?</h1></div>
          <div className="ob-list">{ROLES.map((r) => <button key={r} className="ob-row big" onClick={() => { setRole(r); setStep(r === "Student" ? 2 : 3); }}><span>{r}</span><Chev /></button>)}</div>
        </section>}
        {step === 2 && <section className="ob-step">
          <div className="ob-q"><button className="ob-back" aria-label="Back" onClick={() => setStep(1)}>&larr;</button><h1>What year are you in?</h1></div>
          <div className="ob-list">{YEARS.map(([y, g]) => <button key={y} className={"ob-row big center" + (year === y ? " on" : "")} onClick={() => { setYear(y); setStep(3); }}><span>{y}<small className="muted"> &middot; {g}</small></span></button>)}</div>
        </section>}
        {step === 3 && !level && <section className="ob-step">
          <div className="ob-card ob-who"><div><div className="ob-q left"><button className="ob-back" aria-label="Back" onClick={back}>&larr;</button><h1>{name || "Welcome"}</h1></div><div className="ob-tags"><span>{role}</span>{year && <span>{year}</span>}</div></div><Mascot size={120} pose="read" /></div>
          <section className="ob-card ob-pick"><span className="ob-label">What are you studying?</span>
            {LEVELS.map(([id, label, sub]) => <button key={id} className="ob-row flat" disabled={id !== "sat"} onClick={() => setLevel(id)}><span>{label}<small className="muted">{sub}</small></span><Chev /></button>)}
          </section>
        </section>}
        {step === 3 && level && <section className="ob-step">
          <div className="ob-q"><button className="ob-back" aria-label="Back" onClick={() => setLevel(null)}>&larr;</button><h1>SAT</h1></div>
          <input className="ob-search" type="search" placeholder="Search courses" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search courses" />
          <section className="ob-card ob-pick"><span className="ob-label light">Full length tests</span>
            {list.length === 0 && <p className="muted small ob-none">No courses match that.</p>}
            {list.map((c) => {
              const added = c.id in picked, isOpen = open === c.id;
              return (
                <div key={c.id} className={"ob-course" + (isOpen ? " open" : "") + (added ? " added" : "")}>
                  <button className="ob-row flat" aria-expanded={isOpen} title={added ? "Edit course" : "Add course"} onClick={() => setOpen(isOpen ? null : c.id)}>
                    <CourseIcon id={ICON[c.id]} size={58} />
                    <span>{c.name}<small className="muted">{added ? `Added${picked[c.id] !== "Not sure yet" ? `, sitting in ${picked[c.id]}` : ""}` : c.tag}</small></span>
                    <b className="ob-plus" aria-hidden="true">{isOpen ? "−" : added ? "✓" : "+"}</b>
                  </button>
                  {isOpen && <div className="ob-boards">
                    <b>When are you sitting the SAT?</b>
                    <small className="muted">Test dates</small>
                    <div className="ob-chips">{DATES.map((d) => <button key={d} className={picked[c.id] === d ? "on" : ""} onClick={() => { setPicked({ ...picked, [c.id]: d }); setOpen(null); }}>{d}</button>)}</div>
                    {added && <button className="cg-link ob-remove" onClick={() => { const n = { ...picked }; delete n[c.id]; setPicked(n); setOpen(null); }}>Remove course</button>}
                  </div>}
                </div>
              );
            })}
          </section>
          <div className="ob-subjects"><span className="ob-label light">What each course covers</span><div className="ob-cover"><span><CourseIcon id="rw" size={44} />Reading and Writing</span><span><CourseIcon id="math" size={44} />Math</span></div></div>
        </section>}
      </main>
      {step === 3 && level && <footer className="ob-foot"><button className="cg-btn primary" disabled={!Object.keys(picked).length} onClick={finish}>{Object.keys(picked).length > 1 ? "Add courses" : "Add a course"}</button></footer>}
    </div>
  );
}
