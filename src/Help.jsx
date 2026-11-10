// Help and FAQ, What's new, and the feedback dialog with its button in the corner.

import { useState } from "react";
import { supabase } from "./supabase.js";
import { Modal } from "./Courses.jsx";
import { Mascot } from "./Mascot.jsx";

/** Sends feedback to the same table Dwiddle uses, marked as coming from Testiddle. */
export async function sendFeedback(message, kind = "feedback") {
  if (!supabase) return { ok: false, reason: "Accounts are not set up on this site." };
  const { data: s } = await supabase.auth.getSession();
  const user = s?.session?.user;
  const row = { id: crypto.randomUUID(), user_id: user?.id ?? null, kind, message: `[Testiddle] ${message}`, contact: user?.email ?? null };
  let { error } = await supabase.from("feedback").insert({ ...row, title: "Testiddle" });
  if (error && /title/.test(error.message)) ({ error } = await supabase.from("feedback").insert(row));
  return error ? { ok: false, reason: error.message } : { ok: true };
}

export function FeedbackDialog({ prefill = "", kind = "feedback", onClose }) {
  const [text, setText] = useState(prefill ? `${prefill}\n\n` : "");
  const [state, setState] = useState(null); // null, "sending", "sent", or an error message
  const send = async () => {
    setState("sending");
    const r = await sendFeedback(text.trim(), prefill ? "bug" : kind);
    setState(r.ok ? "sent" : r.reason || "It could not be sent.");
  };
  return (
    <Modal title="Send feedback" onClose={onClose}>
      <div className="cg-spread"><div><h2>{prefill ? "Report an issue" : "Send feedback"}</h2><p className="muted small">Tell us what's working, what's not, or what you'd like to see next.</p></div><Mascot size={70} pose="think" /></div>
      {state === "sent" ? <><p className="cg-feedback good">Thanks. It's with the team.</p><div className="cg-actions"><button className="cg-btn primary" onClick={onClose}>Close</button></div></> : <>
        <textarea className="cg-textarea" rows={5} autoFocus value={text} placeholder="Type your feedback here" onChange={(e) => setText(e.target.value)} />
        {state && state !== "sending" && <p className="small cg-err">{state}</p>}
        <div className="cg-actions spread"><button className="cg-link" onClick={onClose}>Cancel</button><button className="cg-btn primary" disabled={!text.trim() || state === "sending"} onClick={send}>{state === "sending" ? "Sending" : "Send to the team"}</button></div>
      </>}
    </Modal>
  );
}

export function FeedbackButton({ onClick }) {
  return <button className="cg-fab" aria-label="Send feedback" title="Send feedback" onClick={onClick}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M21 3 10 14M21 3l-7 18-4-7-7-4Z" /></svg></button>;
}

const FAQ = [
  ["Getting started", [
    ["What is Testiddle?", "A place to practise for the digital SAT. It has full length tests on paper and on screen, revision notes for every skill, quizzes, flashcards, cheat sheets and exam practice, all marked with explanations."],
    ["Is Testiddle free?", "Yes. Everything here is free to use. While it is being tested, only testers and staff can sign in."],
    ["Is it the same account as Dwiddle?", "Yes. Testiddle and Dwiddle share accounts, so sign in with the same email or Google account."],
    ["How do I use the study tools?", "Open a course from the dashboard. Read the notes for a skill, then take its quiz or flashcards from the bottom of the page. Use Exam practice for marked question sets and Past papers for full tests. Your progress fills in as you go."],
  ]],
  ["Courses and tests", [
    ["What is the difference between the two courses?", "Paper SAT has five printed tests in the digital SAT format: you write on the PDF and submit each module to be marked. Computer SAT has five tests that work like the Bluebook app, one question at a time, with a second module that adapts to how the first went."],
    ["Are these real College Board tests?", "No. They are original tests written for Testiddle in the same format, timing and difficulty range. For official tests, use the College Board's Bluebook app."],
    ["How is my score worked out?", "Paper tests are marked against their answer key. Computer tests give a score estimate from 400 to 1600. The real test's scoring is not published, so treat it as a guide."],
    ["Can I hide a course I don't use?", "Yes. Use Manage courses on the dashboard or in the account menu."],
  ]],
  ["Your account and progress", [
    ["Where is my progress kept?", "Quiz answers, flashcard ratings, XP and test results are kept in this browser. Clearing site data, or using another device, starts afresh."],
    ["How do streaks and freezes work?", "Study on any day to keep your streak. If you miss a day, a freeze covers it automatically, up to two in a run."],
    ["How do I reset my progress?", "Go to Account settings and choose Reset progress. You can reset one course or everything."],
    ["How do I delete my account?", "Account settings has a request button. Because the account is shared with Dwiddle, the team deletes it for you."],
  ]],
];

export function FaqPage({ nav, feedback }) {
  const [open, setOpen] = useState({});
  const [q, setQ] = useState("");
  const t = q.trim().toLowerCase();
  return (
    <div className="cg-page cg-public">
      <nav className="cg-crumb small"><button className="cg-link" onClick={() => nav("/")}>Home</button> &rsaquo; <b>FAQ</b></nav>
      <div className="cg-hero"><div><h1>Frequently asked questions</h1><p className="muted">Quick answers about Testiddle. If you need more help, <button className="cg-link inline" onClick={feedback}>send us a message</button>.</p></div><Mascot size={110} pose="read" /></div>
      <input className="cg-search big" type="search" placeholder="Search for answers" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search the FAQ" />
      {FAQ.map(([group, items]) => {
        const shown = items.filter(([a, b]) => !t || (a + " " + b).toLowerCase().includes(t));
        if (!shown.length) return null;
        return <section key={group} className="cg-card cg-faq"><span className="cg-tag">{group}</span>{shown.map(([a, b]) => <div key={a} className={"cg-faqitem" + (open[a] ? " open" : "")}><button aria-expanded={!!open[a]} onClick={() => setOpen({ ...open, [a]: !open[a] })}><span>{a}</span><span aria-hidden="true">{open[a] ? "▴" : "▾"}</span></button>{open[a] && <p>{b}</p>}</div>)}</section>;
      })}
    </div>
  );
}

const NEWS = [
  ["10 Nov 2026", "Notes, exam practice and past papers", "Every SAT skill now has revision notes with key points to tick off, a ten question quiz and its own flashcards. Exam practice gives you marked question sets by skill, and you can build your own paper or deck from several skills.", ["Notes for all 43 skills, grouped into eight topics", "Exam practice with marks for every question", "Past papers by test or by section"]],
  ["10 Nov 2026", "XP, goals and streak freezes", "Earn XP for tests, quizzes and flashcards, set a daily goal, and keep your streak going with automatic freezes.", ["Choose a goal from 100 to 500 XP a day", "Two freezes cover missed days", "Pick an avatar for your dashboard"]],
  ["10 Nov 2026", "Quizzes, flashcards and cheat sheets", "Make a quiz from any mix of skills across all 735 Computer SAT questions, rate flashcards as you learn them, and read one page cheat sheets for maths and grammar.", ["Learn, Balanced and Fix mistakes quiz modes", "103 flashcards of key terms and formulas", "11 printable cheat sheets"]],
  ["9 Nov 2026", "Two SAT courses", "Testiddle is now focused on the SAT, with a Paper SAT course and a Computer SAT course, each with five full length tests.", ["Paper tests marked module by module", "Adaptive computer tests with a calculator", "An activity page with charts"]],
];

export function WhatsNew({ nav }) {
  return (
    <div className="cg-page">
      <section className="cg-card cg-hello single"><div><h1>What's new at Testiddle</h1><p className="muted">The latest updates and improvements, all in one place.</p></div><Mascot size={96} pose="cheer" /></section>
      <div className="cg-timeline">{NEWS.map(([date, title, text, points]) => (
        <article key={title} className="cg-news"><div className="cg-newsdate"><b>{date.split(" ")[0]}</b><small>{date.split(" ").slice(1).join(" ").toUpperCase()}</small></div>
          <div><h2>{title}</h2><p>{text}</p><ul>{points.map((p) => <li key={p}>{p}</li>)}</ul></div></article>))}</div>
      <button className="cg-link" onClick={() => nav("/")}>&larr; Back to the dashboard</button>
    </div>
  );
}
