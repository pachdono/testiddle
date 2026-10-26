import { useEffect, useState } from "react";
import TestPrep from "./TestPrep.jsx";
import { useAuth, SignInPage, ProfileGate } from "./Account.jsx";
import { logAnswer } from "./studylog.js";
import { recordReview } from "./srs.js";
import { Duck } from "./Duck.jsx";
import { Boundary } from "./ui.jsx";

// Testiddle: timed SAT, ACT, SSAT, IELTS and TOEFL practice. The same accounts
// as Dwiddle, because it talks to the same Supabase project.
const DWIDDLE = "https://dwiddle.vercel.app";

export default function App() {
  const auth = useAuth();
  const [signIn, setSignIn] = useState(false);

  // A question joins the missed list when it is wrong and leaves it when it is right.
  function grade(id, correct, topicName, kind, meta) {
    logAnswer({ id, topic: topicName, ok: correct, kind: kind || "mc", ...(meta || {}) });
    recordReview(id, correct);
  }

  useEffect(() => { if (auth.user) setSignIn(false); }, [auth.user]);

  if (signIn && !auth.user) return <SignInPage onClose={() => setSignIn(false)} />;

  return (
    <div className="ti-shell">
      <header className="ti-top">
        <a className="ti-brand" href="/"><Duck size={30} shadow={false} /><b>Testiddle</b></a>
        <nav className="ti-links">
          <a href={DWIDDLE} target="_blank" rel="noreferrer">Dwiddle</a>
          {auth.user
            ? <button className="btn ghost small" onClick={auth.signOut}>Sign out</button>
            : <button className="btn small" onClick={() => setSignIn(true)}>Sign in</button>}
        </nav>
      </header>
      <main className="ti-main">
        <Boundary><TestPrep grade={grade} /></Boundary>
      </main>
      {auth.user && <ProfileGate user={auth.user} />}
    </div>
  );
}
