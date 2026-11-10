// Signing in, and the three questions asked once after signing up: who you are, what year you
// are in, and what you are studying. Tiddle keeps you company.

import { useEffect, useState } from "react";
import { Mascot } from "./Mascot.jsx";
import { supabase, enabledProviders } from "./supabase.js";
import { setMyCourses } from "./progress.js";
import { QualList, SubjectList } from "./Picker.jsx";
import { QUALS } from "./catalog.js";
import { SubjectIcon } from "./SubjectIcons.jsx";

const INK = "#24364a";
const KEY = (id) => `testiddle-onboard:${id}`;
export const onboarding = (id) => { try { return JSON.parse(localStorage.getItem(KEY(id))) || null; } catch { return null; } };
const saveOnboarding = (id, v) => { try { localStorage.setItem(KEY(id), JSON.stringify(v)); } catch { /* private mode */ } };
const returnTo = () => window.location.origin;

/** Small round pictures for each course. */
export function CourseIcon({ id, size = 64 }) {
  return <SubjectIcon id={id} size={size} />;
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

export function Onboarding({ user, onDone }) {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState(null);
  const [year, setYear] = useState(null);
  const [level, setLevel] = useState(null);
  const [picked, setPicked] = useState({}); // course id -> { id, board, tier, date }
  const name = (user?.user_metadata?.full_name || user?.email || "").split(/[ @]/)[0];
  const total = role === "Student" ? 4 : 3;
  const at = step === 1 ? 1 : role === "Student" ? step : step - 1;
  const back = () => setStep(level ? (setLevel(null), 3) : role === "Student" && step === 3 ? 2 : step === 3 ? 1 : step - 1);
  const finish = () => {
    saveOnboarding(user.id, { role, year, courses: picked, at: Date.now() });
    setMyCourses(Object.values(picked));
    onDone();
  };
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
            <QualList picked={picked} onPick={setLevel} />
          </section>
        </section>}
        {step === 3 && level && <section className="ob-step">
          <div className="ob-q"><button className="ob-back" aria-label="Back" onClick={() => setLevel(null)}>&larr;</button><h1>{QUALS.find((x) => x.id === level)?.name}</h1></div>
          <SubjectList qual={level} picked={picked} setPicked={setPicked} />
          {Object.keys(picked).length > 0 && <button className="cg-link center" onClick={() => setLevel(null)}>Add a course from another qualification</button>}
        </section>}
      </main>
      {step === 3 && <footer className="ob-foot"><button className="cg-btn primary" disabled={!Object.keys(picked).length} onClick={finish}>{Object.keys(picked).length > 1 ? `Add ${Object.keys(picked).length} courses` : Object.keys(picked).length ? "Add 1 course" : "Pick a course"}</button></footer>}
    </div>
  );
}
