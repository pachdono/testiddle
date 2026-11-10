import { useEffect, useState } from "react";
import RealPapers from "./RealPapers.jsx";
import { TopBar, Dashboard, ManageCourses, readHistory, visibleCourses } from "./Courses.jsx";
import { Settings } from "./Settings.jsx";
import Landing from "./Landing.jsx";
import IgcsePage from "./Igcse.jsx";
import { AuthCard, Onboarding, onboarding } from "./Onboarding.jsx";
import { Mascot } from "./Mascot.jsx";
import { FaqPage, WhatsNew, FeedbackDialog, FeedbackButton } from "./Help.jsx";
import { HISTORY_KEY, courseOf } from "./courses.js";
import { useAuth, ProfileGate } from "./Account.jsx";
import { myAccess } from "./supabase.js";
import { Boundary, Loading } from "./ui.jsx";
import { savedTheme, applyTheme } from "./theme.js";

// Testiddle: SAT practice, as paper tests and computer tests. The same accounts
// as Dwiddle, because it talks to the same Supabase project.
const DWIDDLE = "https://dwiddle.vercel.app";

function GateTop({ onSignIn }) {
  return <header className="cg-top"><a className="cg-brand" href="/"><Mascot size={40} /><b>Testiddle</b></a><span className="cg-spacer" />{onSignIn && <button className="cg-btn primary" onClick={onSignIn}>Sign in</button>}</header>;
}

// While Testiddle is being tried out it is for testers and staff only. Set VITE_OPEN_TO_ALL=1
// when it is ready for everyone.
const OPEN = import.meta.env?.VITE_OPEN_TO_ALL === "1";

function TestersOnly({ email, onSignOut }) {
  return (
    <main className="ti-door">
      <div className="ti-board">
        <p className="ti-kicker">Testing in progress</p>
        <h1>Testiddle is for testers right now</h1>
        <p className="ti-sub">Only testers and staff can come in while it is being tried out. You are signed in as {email || "this account"}, which has not been added yet. Ask to be made a tester, then come back and refresh.</p>
        <div className="row" style={{ justifyContent: "center", gap: 10 }}>
          <a className="btn cta" href={DWIDDLE}>Back to Dwiddle</a>
          <button className="btn ghost" onClick={onSignOut}>Sign out</button>
        </div>
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

  // Testers and staff only, checked in the same database as Dwiddle's roles.
  const [access, setAccess] = useState(null); // null while it is being checked
  useEffect(() => {
    if (!auth.user) { setAccess(null); return undefined; }
    let live = true;
    myAccess().then((v) => live && setAccess(v)).catch(() => live && setAccess({ role: null, tester: false, banned: false }));
    return () => { live = false; };
  }, [auth.user]);
  const allowed = OPEN || (access && !access.banned && (access.tester === true || Boolean(access.role)));
  function signOut() { setKept(null); auth.signOut(); }

  // The address says where you are, so Back works and a page can be shared.
  const [path, setPath] = useState(() => window.location.pathname);
  useEffect(() => { const f = () => setPath(window.location.pathname); window.addEventListener("popstate", f); return () => window.removeEventListener("popstate", f); }, []);
  const nav = (to) => { if (to !== window.location.pathname) window.history.pushState({}, "", to); setPath(to); window.scrollTo(0, 0); };
  // Results are saved by the test pages, so read them again whenever the page changes.
  const [history, setHistory] = useState(readHistory);
  useEffect(() => { setHistory(readHistory()); }, [path]);
  // Quizzes, flashcards and settings say when they change something, so the bar and dashboard keep up.
  const [, bump] = useState(0);
  useEffect(() => { const f = () => { setHistory(readHistory()); bump((n) => n + 1); }; window.addEventListener("testiddle:progress", f); return () => window.removeEventListener("testiddle:progress", f); }, []);
  const [managing, setManaging] = useState(false);
  const [authPage, setAuthPage] = useState(false);
  const [, setOnboarded] = useState(0);
  const [feedback, setFeedback] = useState(null); // null, or { prefill }
  const courses = visibleCourses();

  return (
    <div className="ti-shell">
      {!auth.ready && !user ? (
        <><GateTop /><main className="ti-door"><Loading label="Opening the classroom" /></main></>
      ) : !user ? (
        authPage
          ? <><GateTop /><AuthCard /><button className="cg-link ob-home" onClick={() => setAuthPage(false)}>&larr; Back to the home page</button></>
          : <><GateTop onSignIn={() => setAuthPage(true)} /><Landing onStart={() => setAuthPage(true)} /></>
      ) : access === null && !OPEN ? (
        <><GateTop /><main className="ti-door"><Loading label="Checking your access" /></main></>
      ) : !allowed ? (
        <>
          <GateTop />
          <TestersOnly email={user.email} onSignOut={signOut} />
          <ProfileGate user={user} />
        </>
      ) : !onboarding(user.id) ? (
        <Onboarding user={user} onDone={() => { setOnboarded((n) => n + 1); nav("/"); }} />
      ) : (
        <>
          <TopBar path={path} nav={nav} history={history} user={user} theme={theme} setTheme={setTheme} onSignOut={signOut} dwiddle={DWIDDLE} courses={courses} manage={() => setManaging(true)} />
          {managing && <ManageCourses onClose={() => setManaging(false)} />}
          {feedback && <FeedbackDialog prefill={feedback.prefill} onClose={() => setFeedback(null)} />}
          <FeedbackButton onClick={() => setFeedback({})} />
          <main className="cg-main">
            <Boundary>
              {path.startsWith("/account") || path === "/activity" ? <Settings tab={path === "/activity" ? "activity" : path.split("/")[2] || "account"} nav={nav} history={history} user={user} theme={theme} setTheme={setTheme} onReset={({ courses: ids, everything }) => { try {
                  const keep = readHistory().filter((h) => !ids.includes(courseOf(h.paper).id));
                  localStorage.setItem(HISTORY_KEY, JSON.stringify(keep));
                  if (everything) ["testiddle-quiz", "testiddle-cards", "testiddle-notes-read", "testiddle-ticks", "testiddle-exam"].forEach((k) => localStorage.removeItem(k));
                } catch { /* storage blocked */ } setHistory(readHistory()); bump((n) => n + 1); }} requestDelete={() => setFeedback({ prefill: "Please delete my account." })} />
                : path === "/help" ? <FaqPage nav={nav} feedback={() => setFeedback({})} />
                : path === "/whats-new" ? <WhatsNew nav={nav} />
                : path.startsWith("/course/igcse-") ? <IgcsePage key={path} id={path.slice(8)} nav={nav} theme={theme} setTheme={setTheme} report={(prefill) => setFeedback({ prefill })} />
                : path.startsWith("/course/") || path.startsWith("/real/") ? <RealPapers path={path} nav={nav} theme={theme} setTheme={setTheme} report={(prefill) => setFeedback({ prefill })} />
                : <Dashboard nav={nav} history={history} user={user} courses={courses} manage={() => setManaging(true)} />}
            </Boundary>
          </main>
          <ProfileGate user={user} />
        </>
      )}
    </div>
  );
}
