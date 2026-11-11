// Notes, skill quizzes, skill flashcards and exam practice: everything organised by topic and subtopic.

import { useEffect, useMemo, useRef, useState } from "react";
import { TOPICS, SUBTOPICS } from "./notes.js";
import { TERMS } from "./content.js";
import { doneFrom, isRight, loadBank } from "./bank.js";
import { logQuiz, quizLog, rateCard, cardRatings } from "./progress.js";
import { Critter, CritterFor, castFor } from "./Critters.jsx";

const read = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); window.dispatchEvent(new Event("testiddle:progress")); } catch { /* private mode */ } };
const READ_KEY = "testiddle-notes-read", TICK_KEY = "testiddle-ticks", LOOK_KEY = "testiddle-reader", RATE_KEY = "testiddle-question-feedback", EXAM_KEY = "testiddle-exam";

export const notesRead = () => read(READ_KEY, {});
const Html = ({ html, className = "" }) => <div className={"dq-html " + className} dangerouslySetInnerHTML={{ __html: html }} />;
const Chev = ({ open }) => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ transform: open ? "rotate(90deg)" : "none", transition: "transform .15s" }}><path d="m8 5 5 5-5 5" /></svg>;

/** A note line; IGCSE lines only Extended students need are marked with a badge. */
const Line = ({ l }) => (l.startsWith("[E] ") ? <><span className="cg-ext">Extended</span>{l.slice(4)}</> : l);

/** Cards for one subtopic, made from its notes: each section, and the key points. */
export function cardsFor(sub) {
  return [
    ...sub.sections.map(([h, lines], i) => ({ id: `n:${sub.id}:${i}`, front: `${sub.skill}: ${h.toLowerCase()}?`, back: lines })),
    { id: `n:${sub.id}:k`, front: `What are the key points for ${sub.skill.toLowerCase()}?`, back: sub.points },
  ];
}

function useBank(skip = false) {
  const [bank, setBank] = useState(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => { if (!skip) loadBank().then(setBank).catch(() => setFailed(true)); }, [skip]);
  return { bank, failed };
}
const questionsFor = (bank, sub) => (bank || []).filter((q) => q.skill === sub.skill && q.subject === sub.topic.subject);

/* ---------- topic list, shared by notes and exam practice ---------- */

export function TopicList({ progressOf, onOpen, search = true, topics = TOPICS, subs: list = SUBTOPICS, terms = TERMS }) {
  const [open, setOpen] = useState({});
  const [q, setQ] = useState("");
  const [focus, setFocus] = useState(false);
  const all = Object.values(open).filter(Boolean).length === topics.length;
  const mixed = new Set(topics.map((x) => x.subject)).size > 1;
  const overall = list.length ? list.reduce((n, s) => n + progressOf(s), 0) / list.length : 0;
  const t = q.trim().toLowerCase();
  const results = !t ? [] : [
    ...list.filter((s) => s.skill.toLowerCase().includes(t) || s.intro.toLowerCase().includes(t)).map((s) => ({ key: s.id, label: `${s.code} ${s.skill}`, sub: s })),
    ...terms.filter((k) => k.term.toLowerCase().includes(t)).slice(0, 6).map((k) => ({ key: k.id, label: k.term, sub: list.find((s) => s.topic.subject === k.subject) })),
  ].slice(0, 8);
  return (
    <div className="cg-stack tight">
      <div className="cg-listbar">
        <div className="cg-overall"><span className="small">Overall progress:</span><span className="cg-meter wide"><i style={{ width: `${overall * 100}%` }} /></span><b className="small">{Math.round(overall * 100)}%</b></div>
        <span className="cg-spacer" />
        {search && <div className="cg-tsearch"><input type="search" placeholder="Search topics and terms" value={q} onChange={(e) => setQ(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setTimeout(() => setFocus(false), 150)} aria-label="Search this course" />
          {focus && t && <div className="cg-suggest">{results.length === 0 ? <div className="small muted">No results</div> : <><div className="small muted">Select a result</div>{results.map((r) => <button key={r.key} onMouseDown={() => onOpen(r.sub)}>{r.label}</button>)}</>}</div>}</div>}
        <button className="cg-btn" onClick={() => setOpen(all ? {} : Object.fromEntries(topics.map((x) => [x.id, true])))}>{all ? "Collapse all" : "Expand all"}</button>
      </div>
      {topics.map((topic, i) => {
        const subs = list.filter((s) => s.topic.id === topic.id);
        const p = subs.reduce((n, s) => n + progressOf(s), 0) / subs.length;
        return (
          <section key={topic.id} className={"cg-topic" + (open[topic.id] ? " open" : "")}>
            <button className="cg-topichead" aria-expanded={!!open[topic.id]} onClick={() => setOpen({ ...open, [topic.id]: !open[topic.id] })}>
              <Chev open={open[topic.id]} /><span><b>Topic {i + 1}</b> - {topic.name} {mixed && <small className="muted">{topic.subject}</small>}</span><span className="cg-meter"><i style={{ width: `${p * 100}%` }} /></span>
            </button>
            {open[topic.id] && <div className="cg-subs">{subs.map((s) => <button key={s.id} onClick={() => onOpen(s)}><span>{s.code} - {s.skill}</span><span className="cg-meter small"><i style={{ width: `${progressOf(s) * 100}%` }} /></span></button>)}</div>}
          </section>
        );
      })}
    </div>
  );
}

export function NotesTab({ open }) {
  const done = notesRead();
  return <TopicList progressOf={(s) => (done[s.id] ? 1 : 0)} onOpen={(s) => open(s, "notes")} />;
}

/* ---------- the study screen: notes, quiz or flashcards for one subtopic ---------- */

const ACCENTS = [["Plain", "#8a8f98"], ["Amber", "#d9962b"], ["Blue", "#3b82f6"], ["Rose", "#d0496d"], ["Green", "#3fa46a"], ["Purple", "#7c5cd6"], ["Slate", "#4b5563"]];

export function StudyView({ sub, mode, onMode, onSub, onClose, report, subs = SUBTOPICS }) {
  const [look, setLook] = useState(() => read(LOOK_KEY, { accent: "#3fa46a", outlines: "some" }));
  const [menu, setMenu] = useState(false);
  const [switcher, setSwitcher] = useState(false);
  const [browse, setBrowse] = useState(false);
  const [panel, setPanel] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stats, setStats] = useState({ xp: 0, run: 0 });
  const setL = (p) => { const n = { ...look, ...p }; setLook(n); try { localStorage.setItem(LOOK_KEY, JSON.stringify(n)); } catch { /* private mode */ } };
  const topicSubs = subs.filter((s) => s.topic.id === sub.topic.id);
  const idx = subs.findIndex((s) => s.id === sub.id);
  const next = subs[idx + 1];
  const body = useRef(null);
  useEffect(() => { body.current?.scrollTo(0, 0); setProgress(0); setStats({ xp: 0, run: 0 }); }, [sub.id, mode]);
  useEffect(() => { const f = (e) => { if (e.key === "Escape") { if (menu || switcher || panel) { setMenu(false); setSwitcher(false); setPanel(false); } else onClose(); } }; document.addEventListener("keydown", f); return () => document.removeEventListener("keydown", f); }, [menu, switcher, panel, onClose]);
  const onScroll = (e) => { if (mode !== "notes") return; const el = e.currentTarget; setProgress(Math.min(1, el.scrollTop / Math.max(1, el.scrollHeight - el.clientHeight))); };

  return (
    <div className={"cg-reader outlines-" + look.outlines} style={{ "--accent-r": look.accent }}>
      <header className="cg-rtop">
        <button className="cg-wx" aria-label="Back to the course" onClick={onClose}>&larr;</button>
        <div className="cg-switchwrap">
          <button className="cg-switcher" aria-expanded={switcher} onClick={() => setSwitcher(!switcher)}>{sub.skill} <span aria-hidden="true">{"⇕"}</span></button>
          {switcher && <div className="cg-pop left">
            <div className="cg-seg">{[["notes", "Notes"], ["quiz", "Quiz"], ["cards", "Flashcards"]].map(([id, l]) => <button key={id} className={mode === id ? "on" : ""} onClick={() => { onMode(id); setSwitcher(false); }}>{l}</button>)}</div>
            <small className="muted">TOPIC {sub.topicNo}</small><b>{sub.topic.name}</b>
            <div className="cg-swlist">{topicSubs.map((s) => <button key={s.id} className={s.id === sub.id ? "on" : ""} onClick={() => { onSub(s); setSwitcher(false); }}>{s.code} - {s.skill}</button>)}</div>
          </div>}
        </div>
        <span className="cg-rprogress"><i style={{ width: `${progress * 100}%` }} /></span>
        {mode !== "notes" && <><b className="cg-rxp">{stats.xp} XP</b><span className="cg-rrun" title="Right in a row">{"\u{1F525}"} {stats.run}</span><label className="cg-browse"><button role="switch" aria-checked={browse} className={"cg-switch small" + (browse ? " on" : "")} onClick={() => setBrowse(!browse)}><i /></button>Browse</label></>}
        <div className="cg-switchwrap">
          <button className="cg-wx" aria-label="Options" aria-expanded={menu} onClick={() => setMenu(!menu)}>{"⋮"}</button>
          {menu && <div className="cg-pop right">
            <div className="cg-optrow"><span>Theme colour</span><small className="muted">{ACCENTS.find((a) => a[1] === look.accent)?.[0]}</small></div>
            <div className="cg-swatches">{ACCENTS.map(([n, c]) => <button key={c} aria-label={n} className={look.accent === c ? "on" : ""} style={{ background: c }} onClick={() => setL({ accent: c })} />)}</div>
            <div className="cg-optrow"><span>Card outlines</span></div>
            <div className="cg-seg">{["none", "some", "all"].map((o) => <button key={o} className={look.outlines === o ? "on" : ""} onClick={() => setL({ outlines: o })}>{o[0].toUpperCase() + o.slice(1)}</button>)}</div>
            <button className="cg-optrow btn" onClick={() => { navigator.clipboard?.writeText(sub.questions ? location.href : `${location.origin}/learn/${sub.id}/${mode}`); setMenu(false); }}>Copy link</button>
            <button className="cg-optrow btn" onClick={() => { setMenu(false); report(`Issue with ${sub.code} ${sub.skill} (${mode})`); }}>Report an issue</button>
          </div>}
        </div>
      </header>
      {mode !== "notes" && <button className="cg-bookbtn" aria-label="Show the notes" onClick={() => setPanel(true)}>{"\u{1F4D6}"}</button>}
      {panel && <div className="cg-scrim left" onMouseDown={(e) => { if (e.target === e.currentTarget) setPanel(false); }}><aside className="cg-panel"><button className="cg-x" onClick={() => setPanel(false)} aria-label="Close">&times;</button><NotesBody sub={sub} compact /></aside></div>}
      <div className="cg-rbody" ref={body} onScroll={onScroll}>
        {mode === "notes" && <NotesPage sub={sub} next={next} onMode={onMode} onSub={onSub} />}
        {mode === "quiz" && <SkillQuiz key={sub.id} sub={sub} browse={browse} onStats={setStats} onProgress={setProgress} />}
        {mode === "cards" && <SkillCards key={sub.id} sub={sub} browse={browse} onProgress={setProgress} />}
      </div>
    </div>
  );
}

function NotesBody({ sub, compact }) {
  const cast = castFor(sub.n ?? SUBTOPICS.findIndex((x) => x.id === sub.id));
  return (
    <>
      <section className="cg-ncard head">
        {!compact && <Critter who={cast.head[0]} where={cast.head[1]} at={cast.head[2]} />}
        <span className="cg-chipr">{sub.topic.subject}</span>
        <h1>{sub.code} - {sub.skill}</h1>
        <p className="muted">{sub.intro}</p>
        <span className="cg-chipsm">{"⏱"} {sub.minutes} min</span>
      </section>
      <section className="cg-ncard">
        {!compact && <Critter who={cast.note[0]} where={cast.note[1]} at={cast.note[2]} />}
        <span className="cg-chipr">Note 1 of 1</span>
        <h2>{sub.skill}</h2>
        {sub.sections.map(([h, lines]) => <div key={h}><h3>{h}</h3><ul>{lines.map((l) => <li key={l}><Line l={l} /></li>)}</ul></div>)}
      </section>
      {compact && <section className="cg-ncard"><h3>Key points</h3><ul>{sub.points.map((p) => <li key={p}>{p}</li>)}</ul></section>}
    </>
  );
}

function NotesPage({ sub, next, onMode, onSub }) {
  const [ticks, setTicks] = useState(() => read(TICK_KEY, {}));
  const mine = ticks[sub.id] || [];
  const save = (list) => { const n = { ...ticks, [sub.id]: list }; setTicks(n); write(TICK_KEY, n); };
  useEffect(() => { const r = notesRead(); if (!r[sub.id]) write(READ_KEY, { ...r, [sub.id]: Date.now() }); }, [sub.id]);
  return (
    <div className="cg-notes">
      <aside className="cg-contents"><span className="cg-chipr">Contents</span><div><b>1</b><span><span>{sub.skill}</span><small className="muted">{sub.intro}</small></span></div></aside>
      <div className="cg-nmain">
        <NotesBody sub={sub} />
        <section className="cg-ncard">
          {(() => { const k = castFor(sub.n ?? SUBTOPICS.findIndex((x) => x.id === sub.id)).keys; return <Critter who={k[0]} where={k[1]} at={k[2]} />; })()}
          <h3>{"☑"} Key points to remember</h3>
          {sub.points.map((p, i) => <label key={p} className="cg-tick"><input type="checkbox" checked={mine.includes(i)} onChange={() => save(mine.includes(i) ? mine.filter((x) => x !== i) : [...mine, i])} /><span>{p}</span></label>)}
          <div className="cg-tickbar"><button className="cg-link" onClick={() => save(sub.points.map((_, i) => i))}>Tick all</button><button className="cg-link" disabled={!mine.length} onClick={() => save([])}>Reset</button></div>
          <div className="cg-nextrow">
            <div className="cg-nextacts"><button onClick={() => onMode("quiz")}>{"\u{1F4A1}"} Take a quiz <em>&rsaquo;</em></button><button onClick={() => onMode("cards")}>{"\u{1F5C2}"} View flashcards <em>&rsaquo;</em></button></div>
            {next && <button className="cg-nextup" onClick={() => onSub(next)}><span><b>{next.code} - {next.skill}</b><small className="muted">Next up</small></span><em>&rsaquo;</em></button>}
          </div>
        </section>
      </div>
    </div>
  );
}

/* ---------- a quiz on one skill ---------- */

function Feedbacks({ id }) {
  const [v, setV] = useState(() => read(RATE_KEY, {})[id]);
  const set = (x) => { const all = read(RATE_KEY, {}); all[id] = all[id] === x ? undefined : x; try { localStorage.setItem(RATE_KEY, JSON.stringify(all)); } catch { /* private mode */ } setV(all[id]); };
  return <span className="cg-fb"><button aria-label="Good question" className={v === "up" ? "on" : ""} onClick={() => set("up")}>{"\u{1F44D}"}</button><button aria-label="Poor question" className={v === "down" ? "on" : ""} onClick={() => set("down")}>{"\u{1F44E}"}</button><button aria-label="Flag a problem" className={v === "flag" ? "on" : ""} onClick={() => set("flag")}>{"⚠"}</button></span>;
}

function QuestionCard({ q, n, total, state, onAnswer, button = "Check", critter = false }) {
  const [pick, setPick] = useState(state?.given ?? "");
  const done = state != null;
  const right = done && state.ok;
  return (
    <section className="cg-card cg-qcard">
      {critter && <CritterFor n={n} />}
      <div className="cg-spread"><small className="muted">{n} of {total}</small><Feedbacks id={q.id} /></div>
      {q.passage && <Html html={q.passage} className="cg-passage" />}
      {q.figure && <div className="ds-fig" dangerouslySetInnerHTML={{ __html: q.figure }} />}
      {q.table && <div className="ds-fig" dangerouslySetInnerHTML={{ __html: q.table }} />}
      <Html html={q.q} />
      {q.kind === "mc"
        ? <div className="cg-choices cg-numbered">{q.choices.map((c, k) => { const L = "ABCD"[k]; return <button key={L} disabled={done} className={(pick === L ? "on " : "") + (done && L === q.answer ? "right " : done && pick === L ? "wrong" : "")} onClick={() => setPick(L)}><b>{k + 1}</b><span>{c}</span></button>; })}</div>
        : <input className="cg-spr" value={pick} disabled={done} placeholder="Type your answer" onChange={(e) => setPick(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && String(pick).trim() && !done) onAnswer(pick); }} />}
      {done && <div className={"cg-feedback " + (right ? "good" : "bad")}><b>{right ? "Correct" : `Not quite. The answer is ${q.kind === "mc" ? "ABCD".indexOf(q.answer) + 1 + ` (${q.choices["ABCD".indexOf(q.answer)]})` : q.answer}.`}</b><p>{q.why}</p></div>}
      <div className="cg-qfoot"><span className="cg-marks">{done ? (right ? "●" : "○") : "○"} 1 mark</span><span className="cg-markbox">{done ? (right ? 1 : 0) : 0} / 1</span>{!done && <button className="cg-btn primary" disabled={!String(pick).trim()} onClick={() => onAnswer(pick)}>{button} {"↵"}</button>}</div>
    </section>
  );
}

function SkillQuiz({ sub, browse, onStats, onProgress }) {
  const own = sub.questions;
  const { bank: loaded, failed } = useBank(Boolean(own));
  const bank = own || loaded;
  const [answers, setAnswers] = useState({});
  const [i, setI] = useState(0);
  const qs = useMemo(() => {
    if (!bank) return [];
    const done = doneFrom(quizLog());
    const list = own || questionsFor(bank, sub);
    return [...list.filter((q) => !(q.id in done)), ...list.filter((q) => done[q.id] === false), ...list.filter((q) => done[q.id] === true)].slice(0, 10);
  }, [bank, own, sub]);
  const answer = (q, given) => {
    const ok = isRight(q, given);
    logQuiz(q.id, ok);
    const next = { ...answers, [q.id]: { given, ok } };
    setAnswers(next);
    let run = 0; for (const x of qs) { const a = next[x.id]; if (!a) continue; run = a.ok ? run + 1 : 0; }
    onStats({ xp: Object.values(next).reduce((n, a) => n + (a.ok ? 10 : 3), 0), run });
    onProgress(Object.keys(next).length / qs.length);
  };
  if (failed && !own) return <div className="cg-empty">The questions could not be loaded. Check your connection.</div>;
  if (!bank) return <div className="cg-empty">Loading questions</div>;
  if (!qs.length) return <div className="cg-empty">No questions for this skill yet.</div>;
  const count = Object.keys(answers).length;
  if (browse) return <div className="cg-qcol">{qs.map((q, n) => <QuestionCard key={q.id} q={q} n={n + 1} total={qs.length} state={answers[q.id]} onAnswer={(g) => answer(q, g)} button="Submit" critter />)}</div>;
  if (i >= qs.length) {
    const right = Object.values(answers).filter((a) => a.ok).length;
    return <div className="cg-qcol"><section className="cg-card cg-summary"><span className="cg-tag">Finished</span><b className="cg-bigger">{right} / {qs.length}</b><span className="muted">{Math.round((right / qs.length) * 100)}% right on {sub.skill.toLowerCase()}</span><button className="cg-btn primary" onClick={() => { setAnswers({}); setI(0); onProgress(0); onStats({ xp: 0, run: 0 }); }}>Try again</button></section></div>;
  }
  const q = qs[i];
  return (
    <div className="cg-qcol">
      <QuestionCard key={q.id} q={q} n={i + 1} total={qs.length} state={answers[q.id]} onAnswer={(g) => answer(q, g)} critter />
      {answers[q.id] && <div className="cg-actions"><button className="cg-btn primary" onClick={() => setI(i + 1)}>{i + 1 >= qs.length ? "See results" : "Next question"}</button></div>}
      <small className="muted center">{count} answered</small>
    </div>
  );
}

/* ---------- flashcards for one skill ---------- */

export function CardDeck({ cards, browse, onProgress }) {
  const [at, setAt] = useState(0);
  const [flip, setFlip] = useState({});
  const [ratings, setRatings] = useState(cardRatings);
  const rate = (c, level) => { rateCard(c.id, level); setRatings(cardRatings()); setFlip({}); const n = Math.min(cards.length, at + 1); setAt(n); onProgress?.(n / cards.length); };
  const turn = (c) => setFlip({ ...flip, [c.id]: !flip[c.id] });
  const side = (c, i, back) => (
    <div className={"cg-side " + (back ? "back" : "front")} aria-hidden={Boolean(flip[c.id]) !== back}>
      <div className="cg-spread"><span /><small className="muted">{i + 1} of {cards.length}</small><span className="cg-chipsm">{back ? "Back" : "Front"}</span></div>
      <div className="cg-fbody">{back ? (Array.isArray(c.back) ? <ol>{c.back.map((b) => <li key={b}><Line l={b} /></li>)}</ol> : <span>{c.back}</span>) : <b>{c.front}</b>}</div>
      <small className="muted cg-fhint"><i>{back ? "Tap to see the question" : "Tap card to flip"}</i></small>
    </div>
  );
  const face = (c, i) => (
    <section key={c.id} className="cg-flipwrap">
      <button className={"cg-flip" + (flip[c.id] ? " is-flipped" : "")} onClick={() => turn(c)} aria-label={flip[c.id] ? "Show the front" : "Show the back"}>
        {side(c, i, false)}{side(c, i, true)}
      </button>
      <div className="cg-spread cg-fmeta">{ratings[c.id]?.level ? <small className="muted">{ratings[c.id].level >= 3 ? "Confident" : "Still learning"}</small> : <span />}<Feedbacks id={c.id} /></div>
      {browse && <div className="cg-rate"><button className="cg-btn bad" aria-label="Still learning" onClick={() => rate(c, 1)}>{"\u2639"}</button><button className="cg-btn" aria-label="Flip" onClick={() => turn(c)}>{"\u21bb"}</button><button className="cg-btn good" aria-label="Confident" onClick={() => rate(c, 3)}>{"\u263a"}</button></div>}
    </section>
  );
  if (!cards.length) return <div className="cg-empty">No cards in this deck.</div>;
  if (browse) return <div className="cg-qcol">{cards.map(face)}</div>;
  if (at >= cards.length) {
    const sure = cards.filter((c) => (ratings[c.id]?.level || 0) >= 3).length;
    return <div className="cg-qcol"><section className="cg-card cg-summary"><span className="cg-tag">Deck finished</span><b className="cg-bigger">{sure} / {cards.length}</b><span className="muted">marked confident</span><button className="cg-btn primary" onClick={() => { setAt(0); onProgress?.(0); }}>Go again</button></section></div>;
  }
  const c = cards[at];
  return (
    <div className="cg-qcol">
      {face(c, at)}
      <div className="cg-ratebar"><button className="cg-btn bad" onClick={() => rate(c, 1)}>{"☹"} Still learning</button><button className="cg-btn" aria-label="Flip" onClick={() => setFlip({ ...flip, [c.id]: !flip[c.id] })}>{"↻"}</button><button className="cg-btn good" onClick={() => rate(c, 3)}>{"☺"} Confident</button></div>
    </div>
  );
}

function SkillCards({ sub, browse, onProgress }) {
  return <CardDeck cards={cardsFor(sub)} browse={browse} onProgress={onProgress} />;
}

/* ---------- exam practice ---------- */

/** A written exam question: answer in your own words, then mark it against the mark scheme. */
function WrittenCard({ q, n, total, state, onMark }) {
  const [text, setText] = useState(state?.given ?? "");
  const [shown, setShown] = useState(state != null);
  const [ticks, setTicks] = useState(() => state?.ticks || []);
  const done = state != null;
  const score = Math.min(q.marks, ticks.length);
  const toggle = (i) => setTicks((x) => (x.includes(i) ? x.filter((k) => k !== i) : [...x, i]));
  return (
    <section className="cg-card cg-qcard">
      <div className="cg-spread"><small className="muted">{n} of {total}</small><span className="cg-chipsm">{q.marks} mark{q.marks === 1 ? "" : "s"}</span></div>
      <Html html={q.q} />
      <textarea className="cg-written" value={text} disabled={done} rows={5} placeholder="Write your answer here" onChange={(e) => setText(e.target.value)} aria-label="Your answer" />
      {!shown
        ? <div className="cg-qfoot"><span className="small muted">Answer first, then check it against the mark scheme.</span><button className="cg-btn primary" onClick={() => setShown(true)}>Show mark scheme</button></div>
        : <div className="cg-scheme">
          <b>Mark scheme</b>{q.anyOf && <small className="muted"> any {q.marks} of these</small>}
          <p className="small muted">Tick each point your answer makes.</p>
          {q.points.map((pt, i) => <label key={pt} className="cg-tick"><input type="checkbox" checked={ticks.includes(i)} disabled={done} onChange={() => toggle(i)} /><span>{pt}</span></label>)}
          <div className="cg-qfoot"><span className="cg-markbox">{score} / {q.marks}</span>{!done && <button className="cg-btn primary" onClick={() => onMark(text, score, ticks)}>Save my mark</button>}</div>
        </div>}
    </section>
  );
}

export function ExamTab({ openExam, topics, subs }) {
  const saved = read(EXAM_KEY, {});
  return (
    <TopicList search={false} topics={topics} subs={subs} progressOf={(s) => { const r = saved[s.id]; return r ? Object.keys(r).length / ((s.questions?.length || 8) + (s.written?.length || 0)) : 0; }} onOpen={(s) => openExam(s.questions ? { sub: s, picked: [...s.questions, ...(s.written || [])] } : { sub: s })} />
  );
}

/** A set of exam questions: one skill's, or a paper built from several skills. */
export function ExamView({ sub, picked, title, onClose, report }) {
  const { bank, failed } = useBank(Boolean(picked));
  const key = sub?.id || "custom";
  const [marks, setMarks] = useState(() => (sub ? read(EXAM_KEY, {})[key] || {} : {}));
  const [cur, setCur] = useState(0);
  const [collapsed, setCollapsed] = useState(false);
  const qs = useMemo(() => (picked || (bank ? questionsFor(bank, sub).slice(0, 8) : [])), [bank, sub, picked]);
  const refs = useRef([]);
  const save = (m) => { setMarks(m); if (sub) { const all = read(EXAM_KEY, {}); all[key] = m; write(EXAM_KEY, all); } };
  const mark = (q, given) => { const ok = isRight(q, given); logQuiz(q.id, ok); save({ ...marks, [q.id]: { given, ok } }); };
  const markWritten = (q, given, score, ticks) => save({ ...marks, [q.id]: { given, score, ticks, ok: score === q.marks } });
  const worth = (q) => q.marks || 1;
  const scored = (q) => { const m = marks[q.id]; return m ? (m.score ?? (m.ok ? 1 : 0)) : 0; };
  useEffect(() => { const f = (e) => { if (e.key === "Escape") onClose(); }; document.addEventListener("keydown", f); return () => document.removeEventListener("keydown", f); }, [onClose]);
  const got = qs.reduce((n, q) => n + scored(q), 0);
  const out = qs.reduce((n, q) => n + worth(q), 0);
  const name = title || sub?.skill;
  return (
    <div className="cg-reader">
      <header className="cg-rtop"><button className="cg-wx" aria-label="Back to the course" onClick={onClose}>&larr;</button><b className="cg-switcher plain">{name}</b><span className="cg-rprogress"><i style={{ width: `${qs.length ? (Object.keys(marks).filter((id) => qs.some((q) => q.id === id)).length / qs.length) * 100 : 0}%` }} /></span><span className="small">Total:</span><span className="cg-markbox">{got} / {out}</span><button className="cg-wx" aria-label="Report an issue" onClick={() => report(`Issue with exam practice: ${name}`)}>{"⋮"}</button></header>
      <div className="cg-rbody">
        <div className="cg-qcol">
          {failed && <div className="cg-empty">The questions could not be loaded. Check your connection.</div>}
          {!failed && !qs.length && <div className="cg-empty">Loading questions</div>}
          {qs.length > 0 && <section className="cg-card cg-examhead">
            <div className="cg-spread"><h2>{name}</h2><button className="cg-btn" aria-expanded={!collapsed} onClick={() => setCollapsed(!collapsed)}>{collapsed ? "▾" : "▴"}</button></div>
            {!collapsed && <><div className="cg-qnums">{qs.map((q, n) => <button key={q.id} className={(n === cur ? "on " : "") + (marks[q.id] ? (marks[q.id].ok ? "right" : "wrong") : "")} onClick={() => { setCur(n); refs.current[n]?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>{n + 1}</button>)}</div>
              <div className="cg-spread"><button className="cg-link" onClick={() => save({})}>{"↺"} Reset {qs.length} questions</button><span className="cg-markbox">Total marks: {got} / {out}</span></div></>}
          </section>}
          {qs.map((q, n) => <div key={q.id + JSON.stringify(marks[q.id] || "")} ref={(el) => { refs.current[n] = el; }}><span className="cg-qlabel">Question {n + 1}</span>{q.kind === "written" ? <WrittenCard q={q} n={n + 1} total={qs.length} state={marks[q.id]} onMark={(g, s, k) => markWritten(q, g, s, k)} /> : <QuestionCard q={q} n={n + 1} total={qs.length} state={marks[q.id]} onAnswer={(g) => mark(q, g)} button="Mark" />}</div>)}
        </div>
      </div>
    </div>
  );
}
