// What someone sees before signing in: what Testiddle is, then the sign in form.

import { useRef, useState } from "react";
import { Mascot } from "./Mascot.jsx";

const FEATURES = [
  ["notes", "Notes for every topic", "Short revision notes for all 43 SAT skills and every topic of 26 IGCSE subjects, with the key points to tick off as you learn them.", "Over 270 notes pages"],
  ["quiz", "Check your understanding", "Answer questions on one topic, or build a quiz across several, with an explanation after every answer.", "Nearly 2000 practice questions"],
  ["cards", "Memorise key ideas", "Flip flashcards of key terms, formulas and the notes for each topic, mark the ones you know, and build your own decks.", "Key terms for every subject"],
  ["exam", "Get exam ready", "Cheat sheets for every topic, exam style questions marked against a mark scheme, and ten full SAT tests on paper or on screen.", "Cheat sheets and full tests"],
];

// Tiddle in different costumes, floating round the edge of the hero: pose, size, left, top, tilt.
const SCATTER = [["stand", 96, "4%", "8%", -10], ["read", 84, "6%", "56%", 8], ["cheer", 104, "84%", "6%", 10], ["think", 80, "86%", "52%", -8], ["cook", 70, "17%", "31%", 6], ["wave", 70, "75%", "31%", -6]];

const TOUR = { q: "Which choice completes the text with the most logical transition?", text: "The first trial showed no effect. ______, the researchers ran a larger second trial.", choices: ["For example", "Nevertheless", "Similarly", "In other words"], answer: 1 };

function Demo() {
  const [pick, setPick] = useState(null);
  return (
    <div className="cg-demo">
      <div className="cg-demotop"><span>&larr;</span><span className="cg-rprogress"><i style={{ width: pick === null ? "0%" : "100%" }} /></span><b>{pick === TOUR.answer ? 10 : 0} XP</b></div>
      <p>{TOUR.text}</p>
      <b>{TOUR.q}</b>
      <div className="cg-choices cg-numbered">{TOUR.choices.map((c, i) => <button key={c} className={(pick === i ? "on " : "") + (pick !== null && i === TOUR.answer ? "right" : pick === i ? "wrong" : "")} onClick={() => setPick(i)}><b>{i + 1}</b><span>{c}</span></button>)}</div>
      {pick !== null && <p className="small">{pick === TOUR.answer ? "Right. The second sentence goes ahead despite the first result, so it is a contrast." : "Not quite. The second sentence goes ahead despite the first result, which calls for a contrast: Nevertheless."}</p>}
    </div>
  );
}

export default function Landing({ onStart }) {
  const form = useRef(null);
  const go = onStart;
  const [open, setOpen] = useState(null);
  const faq = [
    ["What is Testiddle?", "Free revision for the digital SAT and 26 IGCSE subjects: notes, quizzes, flashcards, cheat sheets, and full SAT tests."],
    ["Do I need an account?", "Yes, so your tests and progress are kept. Use your Dwiddle account or make one here."],
    ["Who can use it?", "Anyone. Make a free account and everything is yours, with no card and no trial."],
    ["Are these official College Board tests?", "No. They are original tests in the same format and timing."],
  ];
  return (
    <main className="cg-landing">
      <section className="cg-lhero">
        {SCATTER.map(([pose, size, x, y, r], i) => <span key={pose} className="cg-scatter" style={{ left: x, top: y, "--r": `${r}deg`, animationDelay: `${i * -1.3}s` }} aria-hidden="true"><Mascot size={size} pose={pose} /></span>)}
        <span className="cg-badge">Free SAT and IGCSE revision</span>
        <h1>Looking for a better way to revise?</h1>
        <p>Notes, quizzes with explanations, flashcards and cheat sheets for the SAT and 26 IGCSE subjects, plus full length SAT tests on paper and on screen.</p>
        <button className="cg-btn primary big" onClick={go}>Get started, it's free &rarr;</button>
        <div className="cg-lshot"><Demo /><Mascot size={130} pose="wave" /></div>
      </section>
      {FEATURES.map(([id, title, text, tag], i) => (
        <section key={id} className={"cg-lfeature " + id + (i % 2 ? " flip" : "")}>
          <div><small className="cg-ltag">{tag}</small><h2>{title}</h2><p>{text}</p></div>
          <div className="cg-lart" aria-hidden="true">{id === "cards" ? <div className="cg-mini card"><b>Slope</b><small>Change in y over change in x</small></div> : id === "notes" ? <div className="cg-mini"><b>Boundaries</b><small>Semicolon: complete sentence on both sides.</small><small>Colon: a complete sentence before it.</small></div> : id === "exam" ? <div className="cg-mini"><b>Module 2</b><small>Harder or easier, depending on Module 1</small><small>Score estimate 400 to 1600</small></div> : <div className="cg-mini"><b>Quiz: Quadratics</b><small>8 of 10 right</small><small>+86 XP</small></div>}</div>
        </section>
      ))}
      <section className="cg-lfaq">
        <div><h2>Got questions?</h2><p>Everything you need to know before you start.</p></div>
        <div className="cg-card cg-faq">{faq.map(([q, a]) => <div key={q} className={"cg-faqitem" + (open === q ? " open" : "")}><button aria-expanded={open === q} onClick={() => setOpen(open === q ? null : q)}><span>{q}</span><span aria-hidden="true">{open === q ? "▴" : "▾"}</span></button>{open === q && <p>{a}</p>}</div>)}</div>
      </section>
      <section className="cg-lcta" ref={form}>
        <span className="cg-badge dark">Start practising</span>
        <h2>Get the grade you're working for</h2>
        <p>Sign in with your Dwiddle account, or make one. It's the same account.</p>
        <Mascot size={110} pose="cheer" />
        <button className="cg-btn primary big" onClick={onStart}>Start revising, it's free</button>
      </section>
    </main>
  );
}
