import { useEffect, useState } from "react";
import RealPapers from "./RealPapers.jsx";
import { TopBar, Dashboard, readHistory } from "./Courses.jsx";
import { Settings } from "./Settings.jsx";
import { HISTORY_KEY } from "./courses.js";
import { useAuth, SignInPanel, ProfileGate } from "./Account.jsx";
import { configured, myAccess } from "./supabase.js";
import { Duck } from "./Duck.jsx";
import { Boundary, Loading } from "./ui.jsx";
import { savedTheme, applyTheme } from "./theme.js";

// Testiddle: SAT practice, as paper tests and computer tests. The same accounts
// as Dwiddle, because it talks to the same Supabase project.
const DWIDDLE = "https://dwiddle.vercel.app";

function GateTop() {
  return <header className="cg-top"><a className="cg-brand" href="/"><Duck size={34} shadow={false} /><b>Testiddle</b></a></header>;
}

// Everything here needs an account, so this is the front door.
function SignInGate() {
  return (
    <main className="ti-door">
      <div className="ti-board">
        <p className="ti-kicker">Class is in session</p>
        <h1>Sign in to start practising</h1>
        <p className="ti-sub">Full length SAT practice tests, marked and explained, on paper or on screen. Use your Dwiddle account, or make one here. They are the same account.</p>
        {configured
          ? <div className="ti-signin"><SignInPanel /></div>
          : <p className="small warn-text">Accounts are not set up on this site yet.</p>}
      </div>
    </main>
  );
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

  return (
    <div className="ti-shell">
      {!auth.ready && !user ? (
        <><GateTop /><main className="ti-door"><Loading label="Opening the classroom" /></main></>
      ) : !user ? (
        <><GateTop /><SignInGate /></>
      ) : access === null && !OPEN ? (
        <><GateTop /><main className="ti-door"><Loading label="Checking your access" /></main></>
      ) : !allowed ? (
        <>
          <GateTop />
          <TestersOnly email={user.email} onSignOut={signOut} />
          <ProfileGate user={user} />
        </>
      ) : (
        <>
          <TopBar path={path} nav={nav} history={history} user={user} theme={theme} setTheme={setTheme} onSignOut={signOut} dwiddle={DWIDDLE} />
          <main className="cg-main">
            <Boundary>
              {path.startsWith("/account") || path === "/activity" ? <Settings tab={path === "/activity" ? "activity" : path.split("/")[2] || "account"} nav={nav} history={history} user={user} theme={theme} setTheme={setTheme} onReset={() => { try { localStorage.removeItem(HISTORY_KEY); } catch { /* storage blocked */ } setHistory([]); }} />
                : path.startsWith("/course/") || path.startsWith("/real/") ? <RealPapers path={path} nav={nav} />
                : <Dashboard nav={nav} history={history} user={user} />}
            </Boundary>
          </main>
          <ProfileGate user={user} />
        </>
      )}
    </div>
  );
}
