import { useEffect, useState } from "react";
import TestPrep from "./TestPrep.jsx";
import { useAuth, SignInPanel, ProfileGate } from "./Account.jsx";
import { configured } from "./supabase.js";
import { logAnswer } from "./studylog.js";
import { recordReview } from "./srs.js";
import { Duck } from "./Duck.jsx";
import { Boundary, Loading } from "./ui.jsx";
import { savedTheme, applyTheme } from "./theme.js";

// Testiddle: timed SAT, ACT, SSAT, IELTS and TOEFL practice. The same accounts
// as Dwiddle, because it talks to the same Supabase project.
const DWIDDLE = "https://dwiddle.vercel.app";

function ThemeButton({ theme, setTheme }) {
  const dark = theme === "dark";
  return (
    <button className="ti-theme" onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} title={dark ? "Light mode" : "Dark mode"}>
      {dark
        ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2" /><path d="M12 2.5v2.3M12 19.2v2.3M2.5 12h2.3M19.2 12h2.3M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6" /></svg>
        : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" /></svg>}
    </button>
  );
}

function Top({ theme, setTheme }) {
  return (
    <header className="ti-top">
      <a className="ti-brand" href="/"><Duck size={34} shadow={false} /><b>Testiddle</b></a>
      <ThemeButton theme={theme} setTheme={setTheme} />
    </header>
  );
}

// Everything here needs an account, so this is the front door.
function SignInGate() {
  return (
    <main className="ti-door">
      <div className="ti-board">
        <p className="ti-kicker">Class is in session</p>
        <h1>Sign in to start practising</h1>
        <p className="ti-sub">Timed SAT, ACT, SSAT, IELTS and TOEFL papers, marked and scored. Use your Dwiddle account, or make one here. They are the same account.</p>
        {configured
          ? <div className="ti-signin"><SignInPanel /></div>
          : <p className="small warn-text">Accounts are not set up on this site yet.</p>}
      </div>
    </main>
  );
}

export default function App() {
  const auth = useAuth();
  const [theme, setThemeState] = useState(savedTheme);
  const setTheme = (t) => { setThemeState(t); applyTheme(t); };

  // Once someone is in, they stay in until they press Sign out. A sign in
  // carried over from Dwiddle lasts an hour; letting it run out halfway through
  // a timed paper must not throw the paper away.
  const [kept, setKept] = useState(null);
  useEffect(() => { if (auth.user) setKept(auth.user); }, [auth.user]);
  const user = auth.user || kept;
  function signOut() { setKept(null); auth.signOut(); }

  // A question joins the missed list when it is wrong and leaves it when it is right.
  function grade(id, correct, topicName, kind, meta) {
    logAnswer({ id, topic: topicName, ok: correct, kind: kind || "mc", ...(meta || {}) });
    recordReview(id, correct);
  }

  return (
    <div className="ti-shell">
      <Top theme={theme} setTheme={setTheme} />
      {!auth.ready && !user ? (
        <main className="ti-door"><Loading label="Opening the classroom" /></main>
      ) : !user ? (
        <SignInGate />
      ) : (
        <>
          <main className="ti-main"><Boundary><TestPrep grade={grade} /></Boundary></main>
          <footer className="ti-foot">
            <span>Signed in as {user.email || "you"}</span>
            <button className="ti-linkbtn" onClick={signOut}>Sign out</button>
            <a href={DWIDDLE}>Back to Dwiddle</a>
          </footer>
          <ProfileGate user={user} />
        </>
      )}
    </div>
  );
}
