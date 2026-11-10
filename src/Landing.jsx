// What someone sees before signing in: what Testiddle is, then the sign in form.

import { useRef, useState } from "react";
import { Duck } from "./Duck.jsx";

const FEATURES = [
  ["notes", "Notes for every skill", "Read short revision notes for all 43 SAT skills, with the key points to tick off as you learn them.", "Every skill in eight topics"],
  ["quiz", "Check your understanding", "Answer questions on one skill, or build a quiz across several, with an explanation after every answer.", "735 practice questions"],
  ["cards", "Memorise key ideas", "Flip flashcards of terms, formulas and the notes for each skill, and mark the ones you know.", "Build your own decks"],
  ["exam", "Get test ready", "Sit full length tests on paper or on screen, with an adaptive second module like the real thing.", "Ten full tests"],
];

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

export default function Landing({ signIn }) {
  const form = useRef(null);
  const go = () => form.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  const [open, setOpen] = useState(null);
  const faq = [
    ["What is Testiddle?", "Free practice for the digital SAT: full tests, notes, quizzes, flashcards and cheat sheets."],
    ["Do I need an account?", "Yes, so your tests and progress are kept. Use your Dwiddle account or make one here."],
    ["Who can use it right now?", "While Testiddle is being tested, testers and staff can sign in. Everyone else can ask to join."],
    ["Are these official College Board tests?", "No. They are original tests in the same format and timing."],
  ];
  return (
    <main className="cg-landing">
      <section className="cg-lhero">
        <span className="cg-badge">Free SAT practice</span>
        <h1>Looking for a better way to prepare for the SAT?</h1>
        <p>Notes for every skill, quizzes with explanations, flashcards, and ten full length tests on paper and on screen.</p>
        <button className="cg-btn primary big" onClick={go}>Get started, it's free &rarr;</button>
        <div className="cg-lshot"><Demo /><Duck size={110} shadow={false} /></div>
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
        <h2>Get the score you're working for</h2>
        <p>Sign in with your Dwiddle account, or make one. It's the same account.</p>
        <div className="cg-lsign">{signIn}</div>
      </section>
    </main>
  );
}
