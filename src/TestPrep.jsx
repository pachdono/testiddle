import { M } from "./MathText.jsx";
import { ready as notifyReady, askOnce as askNotify, startDesktopReminder } from "./notify.js";
import { usePracticeSession, useCheerSounds, PracticeSides, Cheer, AnswerFlash } from "./PracticeCheer.jsx";
import { useEffect, useRef, useState } from "react";
import { Icon, PageHead, Loading, Marked, toSegments, HighlightFilters, Portal, BusyScreen, Boundary, useCover } from "./ui.jsx";
import { setEarlyAccess, browse, moreQuestions, longQuestions, questionsFor, generateFromNotes, generateFromSyllabus, generateInParts, splitSource, condenseSource, gradeWriting, notifyFeedback, clarify, writeBrief, readYouTube, writeSyllabusNotes } from "./ai.js";
import { AnnotatedText } from "./Annotate.jsx";
import { buildFresh, unseenCount, clearSeen, bankFor } from "./bank.js";
import { Duck, DuckMark, DuckSign } from "./Duck.jsx";
import { Player } from "./Listening.jsx";
import { loadHeavy, H } from "./heavy.js";

function useHeavy() {
  const [ready, setReady] = useState(() => H() !== null);
  useEffect(() => {
    if (ready) return;
    let live = true;
    loadHeavy().then(() => live && setReady(true));
    return () => { live = false; };
  }, [ready]);
  return ready;
}
function LoadingPage({ title }) {
  return (
    <div className="page fade">
      <PageHead title={title} sub="One moment." />
      <div className="card card-pad" style={{ textAlign: "center", padding: 44 }}>
        <Loading label="Loading" />
      </div>
    </div>
  );
}
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function fmt(sec) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  const pad = (n) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}

/* ---------- answer formats ---------- */

// Real papers do not use one answer layout. IELTS mixes True/False/Not Given,
// Yes/No/Not Given, gap fill typed by hand and roman numbered heading lists.
// The format is derived from the skill so each question renders the way its
// own test presents it.
function formatOf(q) {
  const sk = (q.skill || "").toLowerCase();
  if (sk.includes("true, false")) return "tfng";
  if (sk.includes("yes, no")) return "ynng";
  if (sk.includes("completion")) return "gap";
  if (sk.includes("matching headings")) return "headings";
  return "mcq";
}

const ROMAN = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"];

// ACT alternates its answer letters between odd and even questions, TOEFL uses
// no letters at all, and everyone else runs A onwards.
function lettersFor(testId, index) {
  if (testId === "act") return index % 2 === 0 ? "ABCD" : "FGHJ";
  if (testId === "toefl") return null;
  return "ABCDE";
}

const norm = (v) => String(v ?? "").trim().toLowerCase().replace(/\s+/g, " ");

function isRight(q, given) {
  if (formatOf(q) === "gap") return given !== undefined && norm(given) === norm(q.choices[q.answer]);
  return given === q.answer;
}

const isAnswered = (given) => given !== undefined && given !== "";

// One question's answer control, in whatever shape its test uses.
function AnswerInput({ q, testId, index, value, onChange, disabled }) {
  const format = formatOf(q);

  if (format === "gap") {
    return (
      <div className="gap-answer">
        <label className="field">
          <span>Type your answer</span>
          <input type="text" value={value ?? ""} disabled={disabled}
            placeholder="Your answer"
            onChange={(e) => onChange(e.target.value)} />
        </label>
        <div className="small muted" style={{ marginTop: 6 }}>
          Spelling counts, and answers over the stated word limit score zero.
        </div>
      </div>
    );
  }

  if (format === "tfng" || format === "ynng") {
    return (
      <div className="tf-row">
        {q.choices.map((c, n) => (
          <button key={n} className={"tf-btn" + (value === n ? " on" : "")}
            disabled={disabled} onClick={() => onChange(n)}>
            <M t={c} />
          </button>
        ))}
      </div>
    );
  }

  if (format === "headings") {
    return (
      <ol className="headings">
        {q.choices.map((c, n) => (
          <li key={n}>
            <button className={"heading-opt" + (value === n ? " on" : "")}
              disabled={disabled} onClick={() => onChange(n)}>
              <span className="key roman">{ROMAN[n]}</span>
              <M t={c} />
            </button>
          </li>
        ))}
      </ol>
    );
  }

  const letters = lettersFor(testId, index);
  return (
    <>
      {q.choices.map((c, n) => (
        <button key={n} className={"choice" + (value === n ? " picked" : "")}
          disabled={disabled} onClick={() => onChange(n)}>
          <span className={"key" + (letters ? "" : " blank")}>{letters ? letters[n] : ""}</span>
          <M t={c} />
        </button>
      ))}
    </>
  );
}

/* ---------- post test feedback ---------- */

// Breaks a finished paper down by skill and by section, works out what the
// pattern actually says, and points at the next thing to do about it.
function analyse(qs, answers, secondsAllowed, secondsLeft) {
  if (!qs || qs.length === 0) {
    return { rows: [], sections: [], right: 0, unanswered: 0, used: 0, notes: [], weakest: null };
  }
  const bySkill = {};
  const bySection = {};

  qs.forEach((q, n) => {
    const ok = isRight(q, answers[n]);
    const skill = q.skill || q.section || "General";
    const section = q.section || "General";
    (bySkill[skill] ||= { right: 0, total: 0 }).total += 1;
    (bySection[section] ||= { right: 0, total: 0 }).total += 1;
    if (ok) {
      bySkill[skill].right += 1;
      bySection[section].right += 1;
    }
  });

  const rows = Object.entries(bySkill)
    .map(([name, v]) => ({ name, ...v, pct: v.right / v.total }))
    .sort((a, b) => a.pct - b.pct || b.total - a.total);

  const sections = Object.entries(bySection)
    .map(([name, v]) => ({ name, ...v, pct: v.right / v.total }))
    .sort((a, b) => a.pct - b.pct);

  const right = qs.filter((q, n) => isRight(q, answers[n])).length;
  const unanswered = qs.filter((q, n) => !isAnswered(answers[n])).length;
  const pct = right / qs.length;
  const used = secondsAllowed - secondsLeft;
  const notes = [];

  // Pace. Two failure modes, and they need opposite advice.
  if (unanswered > 0 && secondsLeft <= 0) {
    notes.push(`You ran out of time with ${unanswered} unanswered. On a real paper those are marks given away for nothing, so put something down for every question before the clock stops.`);
  } else if (unanswered > 0) {
    notes.push(`You left ${unanswered} blank with time still on the clock. There is no penalty for a wrong answer here, so a considered guess is always better than a gap.`);
  } else if (secondsLeft > secondsAllowed * 0.4 && pct < 0.7) {
    notes.push(`You finished with ${Math.round(secondsLeft / 60)} minutes spare but got ${qs.length - right} wrong. Speed is not your problem. Slow down and use the time you are being given.`);
  } else if (secondsAllowed > 0 && secondsLeft < secondsAllowed * 0.05) {
    notes.push("You used almost the whole clock. That is fine on this paper, but it leaves nothing for checking, so any careless error stands.");
  }

  // Where the marks actually went.
  const weak = rows.filter((r) => r.pct < 0.6 && r.total >= 2);
  if (weak.length > 0) {
    notes.push(`Most of your lost marks sit in ${weak.slice(0, 2).map((w) => w.name.toLowerCase()).join(" and ")}. That is a pattern rather than bad luck, so it is worth drilling on its own before you sit the section again.`);
  }

  const strong = rows.filter((r) => r.pct >= 0.8 && r.total >= 2);
  if (strong.length > 0) {
    notes.push(`${strong[strong.length - 1].name} is solid. Spend less time there and more on the rows above.`);
  }

  if (pct >= 0.9) notes.push("At this accuracy the useful next step is the full paper under time, not more practice on single sections.");
  else if (pct < 0.4) notes.push("Accuracy this low usually means a method problem rather than a knowledge one. Drill a section with the explanations on before timing yourself again.");

  return { rows, sections, right, unanswered, used, notes, weakest: sections[0] };
}

function Feedback({ qs, answers, secondsAllowed, secondsLeft, onDrill }) {
  const a = analyse(qs, answers, secondsAllowed, secondsLeft);

  return (
    <div className="stack">
      <div className="card">
        <div className="card-head">
          <h3>What to work on</h3>
          {secondsAllowed > 0 && (
            <span className="small muted">
              {fmt(a.used)} used of {fmt(secondsAllowed)}
            </span>
          )}
        </div>

        <div className="fb-notes">
          {a.notes.map((n, i) => (
            <p key={i} className="small">{n}</p>
          ))}
        </div>

        <div className="fb-rows">
          {a.rows.map((r) => (
            <div key={r.name} className="fb-row">
              <span className="fb-name">{r.name}</span>
              <div className="fb-bar">
                <i className={r.pct < 0.5 ? "low" : r.pct < 0.8 ? "mid" : "high"}
                  style={{ width: `${Math.max(r.pct * 100, 2)}%` }} />
              </div>
              <span className="fb-score small">{r.right}/{r.total}</span>
            </div>
          ))}
        </div>

        {onDrill && a.weakest && a.weakest.pct < 0.8 && (
          <div className="set-row">
            <div className="hint">
              {a.weakest.name} was your weakest section at {a.weakest.right} of {a.weakest.total}.
              A drill runs ten of them with no clock and the reasoning after each answer.
            </div>
            <button className="btn" onClick={() => onDrill(a.weakest.name)}>
              <Icon name="quiz" size={14} /> Drill {a.weakest.name}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- test prep ---------- */

// Builds one section's paper. Generated sections run at true full length.
// Pool backed sections are capped at however many authored items exist, and
// the caller shows that as a short form rather than repeating questions.
function buildPaper(test, sec) {
  if (sec.build) return { qs: H().BUILDERS[sec.build](sec.real), full: true };

  // Passage based sections must keep each passage's questions together and in
  // order, the way a real paper does. Only the order of the passages varies.
  const pool = test.questions.filter((q) => q.section === sec.pool);
  const blocks = [];
  pool.forEach((q) => {
    const last = blocks[blocks.length - 1];
    if (last && last.passage === q.passage) last.items.push(q);
    else blocks.push({ passage: q.passage, items: [q] });
  });

  const qs = [];
  for (const b of shuffle(blocks)) {
    if (qs.length + b.items.length > sec.real) continue; // never split a passage
    qs.push(...b.items);
  }
  // Every section under 50 questions is authored to its real length, so a short
  // form should only ever be possible on a very long paper. If one appears
  // below that, the pool is missing questions and the row should say so.
  return { qs, full: qs.length >= sec.real, short: qs.length < sec.real };
}

function TestPrep({ grade }) {
  const ready = useHeavy();
  const [openId, setOpenId] = useState(null);
  const [paper, setPaper] = useState(null);
  const [building, setBuilding] = useState(null); // { sec, have, wanted }
  const [askClear, setAskClear] = useState(false); // sure you want to forget what you have seen?

  // A drill asked for from the report: ten questions on the one skill that keeps
  // going wrong, written fresh if the saved ones run out.
  useEffect(() => {
    if (!ready) return;
    let req = null;
    try { req = JSON.parse(sessionStorage.getItem("dwiddle-drill") || "null"); sessionStorage.removeItem("dwiddle-drill"); } catch { /* storage blocked */ }
    if (!req?.test) return;
    const tst = H().TESTS.find((x) => x.id === req.test);
    if (!tst) return;
    const all = H().SECTIONS[tst.id] || [];
    const sec = all.find((x) => x.name === req.section && !x.kind) || all.find((x) => !x.essay && !x.soon && !x.kind);
    if (!sec) return;
    (async () => {
      setBuilding({ sec, have: 0, wanted: 10 });
      const authored = tst.questions.filter((q) => q.section === sec.pool && q.skill === req.skill);
      try {
        const { qs } = await buildFresh({ test: tst, sec, authored, wanted: 10, passage: Boolean(sec.pool) && authored.some((q) => q.passage), audio: false, skills: [req.skill], onProgress: ({ have, wanted }) => setBuilding({ sec, have, wanted }) });
        setBuilding(null);
        if (qs.length) { setOpenId(tst.id); setPaper({ drill: true, sec, qs }); }
      } catch { setBuilding(null); }
    })();
  }, [ready]); // eslint-disable-line react-hooks/exhaustive-deps

  // Sitting a section assembles a paper you have not seen. Authored questions
  // come first, then anything written for you previously, then new ones.
  async function sit(sec) {
    const built = buildPaper(test, sec);
    setBuilding({ sec, have: 0, wanted: sec.real });

    const skills = [...new Set(built.qs.map((q) => q.skill).filter(Boolean))].slice(0, 8);
    const passage = Boolean(sec.pool) && built.qs.some((q) => q.passage);

    const { qs, wrote } = await buildFresh({
      test,
      sec,
      authored: built.qs,
      wanted: sec.real,
      passage,
      audio: Boolean(sec.audio),
      skills,
      onProgress: ({ have, wanted }) => setBuilding({ sec, have, wanted }),
    });

    setBuilding(null);
    if (qs.length === 0) return;
    setPaper({ sec, qs, full: qs.length >= sec.real, wrote });
  }

  if (!ready) return <LoadingPage title="Test prep" />;

  const test = H().TESTS.find((t) => t.id === openId);
  const secs = test ? H().SECTIONS[test.id] : [];

  if (test && paper) {
    if (paper.drill) {
      return <TestDrill test={test} sec={paper.sec} qs={paper.qs} grade={grade} onExit={() => setPaper(null)} />;
    }
    if (paper.sec.kind === "writing") {
      return <WritingRun test={test} sec={paper.sec} cfg={paper.cfg} onExit={() => setPaper(null)} />;
    }
    if (paper.sec.kind === "speaking") {
      return <SpeakingRun test={test} sec={paper.sec} cfg={paper.cfg} onExit={() => setPaper(null)} />;
    }
    return (
      <TestRun
        {...paper}
        test={test}
        grade={grade}
        onExit={() => setPaper(null)}
        onDrill={(sectionName) => {
          const target = secs.find((x) => x.name === sectionName)
            || secs.find((x) => !x.essay && !x.soon && !x.kind);
          if (target) setPaper({ drill: true, sec: target, qs: buildPaper(test, target).qs.slice(0, 10) });
        }}
      />
    );
  }

  if (test) {
    const sittable = secs.filter((x) => !x.soon && !x.kind);
    return (
      <div className="page fade">
        <div className="page-head">
          <button className="btn quiet" style={{ marginBottom: 8 }} onClick={() => setOpenId(null)}>
            Back to all tests
          </button>
          <h1>{test.name}</h1>
          <p>{test.full}</p>
        </div>

        <div className="stack">
          <div className="grid-3">
            <div className="stat"><div className="k">Score scale</div><div className="v small-v">{test.scaleLabel}</div></div>
            <div className="stat"><div className="k">Total time</div><div className="v small-v">{test.length}</div></div>
            <div className="stat"><div className="k">Used for</div><div className="v small-v">{test.who}</div></div>
          </div>

          <div className="card">
            <div className="card-head">
              <h3>Choose a section</h3>
              <span className="small muted">Real length and real timing</span>
            </div>

            {secs.map((sec) => {
              const cfg = sec.kind ? H().TASKS[test.id]?.[sec.kind] : null;
              const ready = cfg ? cfg.tasks.filter((t) => !t.soon).length : 0;
              const built = sec.kind || sec.soon ? null : buildPaper(test, sec);
              const have = built ? built.qs.length : 0;

              return (
                <div key={sec.id} className="sec-row">
                  <div className="sec-main">
                    <div className="row">
                      <span className="list-title">{sec.name}</span>
                      {sec.soon
                        ? <span className="pill soon">In development</span>
                        : sec.kind
                          ? <span className="pill accent">{ready} task{ready === 1 ? "" : "s"} ready</span>
                          : <span className="pill good">Full length</span>}
                    </div>
                    <div className="small muted">
                      {sec.soon
                        ? "Being built now. It needs audio playback, which is the next thing on the list."
                        : `${sec.real} ${sec.kind ? (sec.real === 1 ? "task" : "tasks") : "questions"}, ${sec.minutes} min${sec.note ? `. ${sec.note}` : ""}`}
                    </div>
                    {!sec.soon && !sec.kind && (
                      <div className="small muted">
                        {(() => {
                          const unseen = unseenCount(built?.qs || [], test.id, sec.id);
                          const stored = bankFor(test.id, sec.id).length;
                          if (unseen >= sec.real) return `${unseen} unseen questions ready${stored ? `, ${stored} written for you so far` : ""}`;
                          return `${unseen} unseen left, more will be written when you sit it`;
                        })()}
                      </div>
                    )}
                  </div>

                  {sec.soon ? (
                    <button className="btn ghost" disabled>
                      <Icon name="build" size={14} /> Coming soon
                    </button>
                  ) : sec.kind ? (
                    <button className="btn ghost" disabled={ready === 0}
                      onClick={() => setPaper({ sec, cfg })}>
                      <Icon name={sec.kind === "speaking" ? "mic" : "pen"} size={14} />
                      {sec.kind === "speaking" ? "Practise speaking" : "Practise writing"}
                    </button>
                  ) : (
                    <button className="btn ghost" disabled={building !== null}
                      onClick={() => sit(sec)}>
                      {building?.sec?.id === sec.id ? <><Loading label="Building" /><BusyScreen title={`Building ${sec.name || "your section"}`} detail={building.wanted ? `${building.have} of ${building.wanted} questions written` : "Writing questions"} progress={building.wanted ? building.have / building.wanted : null} outfit="ninja" /></> : "Sit this section"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {building && (
            <div className="card card-pad fade">
              <div className="spread" style={{ marginBottom: 10 }}>
                <b className="small">Writing fresh questions for {building.sec.name}</b>
                <span className="small muted">{building.have} of {building.wanted}</span>
              </div>
              <div className="bar">
                <i style={{ width: `${Math.round((building.have / building.wanted) * 100)}%` }} />
              </div>
              <p className="small muted" style={{ margin: "10px 0 0" }}>
                You have seen the stored ones, so new material is being written. This takes a few
                seconds and only happens when the section runs low.
              </p>
            </div>
          )}

          <div className="card">
            <div className="card-head">
              <h3>Practice, {test.name} only</h3>
              <span className="small muted">Untimed, with the answer explained each time</span>
            </div>
            <div className="drill-note small muted">
              Sitting a section is the real thing: full length, on the clock, no feedback until the
              end. A drill is the opposite. Ten questions, no clock, and the reasoning after each one.
            </div>
            {sittable.map((sec) => {
              const built = buildPaper(test, sec);
              const ten = built.qs.slice(0, 10);
              return (
                <div key={sec.id} className="sec-row">
                  <div className="sec-main">
                    <span className="list-title">{sec.name}</span>
                    <div className="small muted">
                      {ten.length} questions, no time limit
                    </div>
                  </div>
                  <button className="btn ghost" disabled={ten.length === 0}
                    onClick={() => setPaper({ drill: true, sec, qs: ten })}>
                    <Icon name="quiz" size={14} /> Drill
                  </button>
                </div>
              );
            })}
          </div>

          {sittable.length > 1 && (
            <div className="card card-pad spread">
              <div>
                <b className="small">Sit the whole test</b>
                <div className="small muted">
                  Every scorable section back to back, {sittable.reduce((n, x) => n + x.minutes, 0)} minutes.
                </div>
              </div>
              <button className="btn" onClick={() => {
                const all = sittable.flatMap((sec) => buildPaper(test, sec).qs);
                setPaper({ sec: { name: "Full test", minutes: sittable.reduce((n, x) => n + x.minutes, 0) }, qs: all, full: true });
              }}>
                Start full test
              </button>
            </div>
          )}

          <div className="card card-pad note-card">
            <b className="small">Worth knowing</b>
            <p className="small" style={{ margin: "6px 0 0", color: "var(--ink-2)" }}>{test.note}</p>
          </div>

          <div className="card card-pad spread">
            <div>
              <b className="small">Papers never repeat</b>
              <div className="small muted">
                Questions you have been given are remembered and set aside, and new ones are written
                when a section runs low. If you would rather see the earlier ones again, clear the
                history.
              </div>
            </div>
            <button className="btn ghost" onClick={() => setAskClear(true)}>
              Clear history
            </button>
          </div>
        </div>
        {askClear && (
          <Portal>
            <div className="cf-scrim" onPointerDown={() => setAskClear(false)}>
              <div className="cf card" role="alertdialog" aria-labelledby="cf-t" aria-describedby="cf-d" onPointerDown={(e) => e.stopPropagation()}>
                <DuckMark size={46} />
                <h3 id="cf-t">Clear your {test.name} history?</h3>
                <p id="cf-d" className="small muted">Dwiddle will forget which {test.name} questions you have already been given, so papers can show you ones you have seen before. Your scores and progress are not touched.</p>
                <div className="cf-row">
                  <button className="btn ghost" autoFocus onClick={() => setAskClear(false)}>Keep it</button>
                  <button className="btn danger" onClick={() => { clearSeen(); setAskClear(false); setOpenId(openId); }}>Yes, clear it</button>
                </div>
              </div>
            </div>
          </Portal>
        )}
      </div>
    );
  }

  return (
    <div className="page wide fade">
      <PageHead title="Test prep" sub="Pick a test, then sit a whole section at its real length and timing." />

      <div className="disclaimer">
        <Icon name="flag" size={14} />
        <span>
          Structure, timings and score scales are the real published ones. Questions are original and
          generated fresh each sitting, so no two papers are the same. They are not from any past paper.
        </span>
      </div>

      <div className="test-grid">
        {H().TESTS.map((t) => {
          const secs = H().SECTIONS[t.id].filter((x) => !x.essay);
          return (
            <button key={t.id} className="test-card" onClick={() => setOpenId(t.id)}>
              <div className="spread">
                <b className="test-name">{t.name}</b>
                <span className="pill accent">{secs.length} sections</span>
              </div>
              <span className="small muted">{t.full}</span>
              <div className="test-meta">
                <span><b>{t.scaleLabel}</b></span>
                <span className="muted">{t.length}</span>
              </div>
              <span className="small muted">{t.who}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TestRun({ test, sec, qs, full, wrote = 0, grade, onExit, onDrill }) {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState({});
  const [left, setLeft] = useState(sec.minutes * 60);
  const [done, setDone] = useState(false);

  // Real tests give no feedback while you sit them, so neither does this.
  useEffect(() => {
    if (done) return;
    if (left <= 0) { finish(); return; }
    const t = setTimeout(() => setLeft((n) => n - 1), 1000);
    return () => clearTimeout(t);
  }, [left, done]);

  function finish() {
    qs.forEach((q, n) => grade(q.id, isRight(q, answers[n]), `${test.name}: ${q.section || sec.name}`, "mc", { skill: q.skill, section: q.section || sec.name, test: test.id }));
    setDone(true);
  }

  const right = qs.filter((q, n) => isRight(q, answers[n])).length;

  if (done) {
    const score = H().estimate(test.scoring, right, qs.length);
    const wrong = qs.map((q, n) => ({ q, n })).filter(({ q, n }) => !isRight(q, answers[n]));
    return (
      <div className="page fade">
        <PageHead title={`${test.name}, ${sec.name}`} sub={`${right} of ${qs.length} correct`} />

        <div className="stack">
          <div className="card card-pad score-card">
            <div className="score-main">
              <span className="score-value">{score.scaled}</span>
              <span className="score-unit">{score.unit}</span>
            </div>
            <div className="score-side">
              <div className="spread small">
                <span className="muted">Estimated percentile</span>
                <b>{Math.round(score.percentile)}th</b>
              </div>
              <div className="bar" style={{ marginTop: 6 }}>
                <i style={{ width: `${score.percentile}%` }} />
              </div>
              <p className="small muted" style={{ margin: "10px 0 0" }}>
                Ahead of about {Math.round(score.percentile)} percent of test takers. {score.detail}
              </p>
            </div>
          </div>

          <Feedback qs={qs} answers={answers} secondsAllowed={sec.minutes * 60}
            secondsLeft={left} onDrill={onDrill} />

          <div className="card card-pad note-card">
            <b className="small">How to read this</b>
            <p className="small" style={{ margin: "6px 0 0", color: "var(--ink-2)" }}>
              {full
                ? `This section ran at its real length of ${qs.length} questions.`
                : `This was a short form of ${qs.length} questions against a real ${sec.real}.`}{" "}
              {wrote > 0 ? `${wrote} of them were written fresh for you, so this paper has never been sat before. ` : ""}
              Scaled scores are still an estimate: real tests are equated between sittings, so the same
              raw score can move a little either way. Use the band, not the exact number.
            </p>
          </div>

          <div className="card">
            <div className="card-head">
              <h3>Review</h3>
              <span className="small muted">{wrong.length} to look at</span>
            </div>
            {wrong.length === 0 && <div className="empty small">Nothing wrong. Every question correct.</div>}
            {wrong.map(({ q, n }) => (
              <div key={q.id} className="review">
                <span className="pill warn">{q.skill}</span>
                <div>
                  {q.passage && <div className="small muted" style={{ marginBottom: 4 }}>{q.passage}</div>}
                  <div className="list-title"><M t={q.q} /></div>
                  <div className="small muted">
                    You put {!isAnswered(answers[n])
                      ? "nothing"
                      : formatOf(q) === "gap" ? `"${answers[n]}"` : q.choices[answers[n]]}.
                    Answer: <M t={q.choices[q.answer]} />.
                  </div>
                  <div className="small" style={{ marginTop: 4, color: "var(--ink-2)" }}><M t={q.why} /></div>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <button className="btn ghost" onClick={onExit}>Back to {test.name}</button>
          </div>
        </div>
      </div>
    );
  }

  const q = qs[i];
  if (!q) {
    return (
      <div className="page fade">
        <PageHead title={`${test.name}, ${sec.name}`} sub="This section has no questions yet." />
        <button className="btn ghost" onClick={onExit}>Back to {test.name}</button>
      </div>
    );
  }
  const answered = Object.values(answers).filter(isAnswered).length;

  // Consecutive questions on the same passage form one part, the way a real
  // reading paper does. The passage stays on screen while you work through them.
  const parts = [];
  qs.forEach((item, n) => {
    const last = parts[parts.length - 1];
    if (last && last.passage === item.passage) last.idx.push(n);
    else parts.push({ passage: item.passage, idx: [n] });
  });
  const part = parts.find((pt) => pt.idx.includes(i));
  const partNo = parts.indexOf(part) + 1;
  const inPart = part.idx.indexOf(i) + 1;

  const questionPane = (
    <>
      {q.passage && parts.length > 1 && (
        <div className="part-tag">
          Part {partNo}, question {inPart} of {part.idx.length}
        </div>
      )}

      <h3 className="q-text"><M t={q.q} /></h3>

      <AnswerInput q={q} testId={test.id} index={i} value={answers[i]}
        onChange={(v) => setAnswers((a) => ({ ...a, [i]: v }))} />

      <div className="spread" style={{ marginTop: 16 }}>
        <button className="btn ghost" disabled={i === 0} onClick={() => setI(i - 1)}>Back</button>
        <span className="small muted">{qs.length - answered} unanswered</span>
        {i + 1 < qs.length
          ? <button className="btn ghost" onClick={() => setI(i + 1)}>Next</button>
          : <button className="btn" onClick={finish}>Submit section</button>}
      </div>
    </>
  );

  return (
    <div className="page wide fade paper">
      <div className="page-head">
        <button className="btn quiet" style={{ marginBottom: 8 }} onClick={onExit}>Leave the section</button>
        <div className="spread">
          <div>
            <h1>{test.name}, {sec.name}</h1>
            <p>{q.section}{q.skill ? `, ${q.skill}` : ""}</p>
          </div>
          <span className={"clock big" + (left <= 300 ? " low" : "")}>
            <Icon name="timer" size={15} /> {fmt(left)}
          </span>
        </div>
      </div>

      <div className="spread" style={{ marginBottom: 8 }}>
        <span className="small muted">Question {i + 1} of {qs.length}</span>
        <span className="small muted">{answered} answered</span>
      </div>
      <div className="bar" style={{ marginBottom: 16 }}>
        <i style={{ width: `${(answered / qs.length) * 100}%` }} />
      </div>

      {q.passage ? (
        <div className="paper-split">
          <div className="paper-passage">
            <div className="prompt-label">
              {sec.audio
                ? `Recording ${partNo}`
                : parts.length > 1 ? `Reading passage ${partNo}` : "Passage"}
            </div>
            {sec.audio
              ? <Player transcript={q.passage} playsAllowed={sec.plays || 1} />
              : <AnnotatedText className="passage-body" text={q.passage} />}
          </div>
          <div className="card card-pad paper-questions">{questionPane}</div>
        </div>
      ) : (
        <div className="card card-pad">{questionPane}</div>
      )}

      <QuestionNav qs={qs} parts={parts} answers={answers} current={i} onGo={setI} />
    </div>
  );
}

// The strip of numbered buttons along the bottom. Filled means answered, the
// ring is where you are, and a gap marks the start of a new passage.
function QuestionNav({ qs, parts, answers, current, onGo }) {
  return (
    <div className="qnav">
      <div className="qnav-head">
        <b className="small">Questions</b>
        <span className="small muted">
          {Object.values(answers).filter(isAnswered).length} of {qs.length} answered
        </span>
      </div>
      <div className="qnav-grid">
        {qs.map((_, n) => {
          const startsPart = parts.length > 1 && parts.some((pt) => pt.idx[0] === n && pt.idx[0] !== 0);
          return (
            <button
              key={n}
              className={
                "qnav-btn" +
                (n === current ? " now" : "") +
                (isAnswered(answers[n]) ? " done" : "") +
                (startsPart ? " part" : "")
              }
              onClick={() => onGo(n)}
              title={`Question ${n + 1}${isAnswered(answers[n]) ? ", answered" : ""}`}
            >
              {n + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}


/* ---------- task charts ---------- */

// IELTS Task 1 gives you a real figure to describe, so the app draws one.
// Plain SVG, sized by viewBox and themed from the same tokens as everything else.
function TaskChart({ chart }) {
  const W = 640, H = 300;
  const pad = { l: 44, r: 16, t: 16, b: 46 };
  const plotW = W - pad.l - pad.r;
  const plotH = H - pad.t - pad.b;

  const all = chart.series.flatMap((s) => s.values);
  const top = Math.ceil(Math.max(...all) / 20) * 20;
  const ticks = [0, top / 4, top / 2, (top * 3) / 4, top];

  const y = (v) => pad.t + plotH - (v / top) * plotH;
  const colours = ["var(--chart-1)", "var(--chart-2)"];

  return (
    <figure className="chart">
      <figcaption>{chart.title}</figcaption>
      <div className="chart-scroll">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={chart.title}>
          {ticks.map((t) => (
            <g key={t}>
              <line x1={pad.l} x2={W - pad.r} y1={y(t)} y2={y(t)} className="grid" />
              <text x={pad.l - 8} y={y(t) + 4} className="axis" textAnchor="end">{t}</text>
            </g>
          ))}

          {chart.kind === "line"
            ? chart.series.map((s, si) => {
                const step = plotW / (chart.x.length - 1);
                const pts = s.values.map((v, i) => [pad.l + i * step, y(v)]);
                return (
                  <g key={s.name}>
                    <polyline
                      points={pts.map((p) => p.join(",")).join(" ")}
                      fill="none" stroke={colours[si]} strokeWidth="2.5"
                      strokeLinejoin="round" strokeLinecap="round"
                    />
                    {pts.map(([px, py], i) => (
                      <circle key={i} cx={px} cy={py} r="3.5" fill="var(--surface)"
                        stroke={colours[si]} strokeWidth="2" />
                    ))}
                  </g>
                );
              })
            : chart.x.map((label, i) => {
                const group = plotW / chart.x.length;
                const barW = (group * 0.62) / chart.series.length;
                const gx = pad.l + i * group + group * 0.19;
                return (
                  <g key={label}>
                    {chart.series.map((s, si) => (
                      <rect key={s.name} x={gx + si * barW} y={y(s.values[i])}
                        width={barW - 2} height={pad.t + plotH - y(s.values[i])}
                        fill={colours[si]} rx="2" />
                    ))}
                  </g>
                );
              })}

          <line x1={pad.l} x2={W - pad.r} y1={pad.t + plotH} y2={pad.t + plotH} className="axis-line" />

          {chart.x.map((label, i) => {
            const cx = chart.kind === "line"
              ? pad.l + i * (plotW / (chart.x.length - 1))
              : pad.l + i * (plotW / chart.x.length) + (plotW / chart.x.length) / 2;
            return (
              <text key={label} x={cx} y={pad.t + plotH + 18} className="axis" textAnchor="middle">
                {label}
              </text>
            );
          })}
        </svg>
      </div>

      <div className="chart-legend">
        <span className="chart-unit">{chart.unit}</span>
        {chart.series.map((s, si) => (
          <span key={s.name} className="chart-key">
            <i style={{ background: colours[si] }} />
            {s.name}
          </span>
        ))}
      </div>
    </figure>
  );
}

/* ---------- writing and speaking ---------- */

// Shared: rate your own answer against the test's published criteria.
function Rubric({ rubric, scores, setScores }) {
  const r = H().RUBRICS[rubric];
  return (
    <div className="card">
      <div className="card-head">
        <h3>Score it against the {r.name}</h3>
        <span className="small muted">You are the marker</span>
      </div>
      {r.criteria.map((c, i) => (
        <div key={c.n} className="crit-row">
          <div className="sec-main">
            <div className="list-title">{c.n}</div>
            <div className="small muted">{c.hint}</div>
          </div>
          <div className="seg tight">
            {r.scale.map((v) => (
              <button key={v} className={scores[i] === v ? "on" : ""}
                onClick={() => setScores((p) => p.map((x, n) => (n === i ? v : x)))}>
                {v}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function RubricResult({ rubric, scores }) {
  const r = H().RUBRICS[rubric];
  const filled = scores.every((s) => s !== null);
  if (!filled) {
    return (
      <div className="card card-pad note-card">
        <b className="small">Rate every criterion to see the score</b>
        <p className="small" style={{ margin: "6px 0 0", color: "var(--ink-2)" }}>
          {scores.filter((s) => s !== null).length} of {scores.length} rated. Be honest rather than
          kind, since the point is to find where the marks are going.
        </p>
      </div>
    );
  }
  const value = r.combine(scores);
  return (
    <div className="card card-pad score-card">
      <div className="score-main">
        <span className="score-value">{String(r.format(value)).split(" ")[0]}</span>
        <span className="score-unit">{r.unit}</span>
      </div>
      <div className="score-side">
        <b className="small">{r.format(value)}</b>
        <p className="small muted" style={{ margin: "8px 0 0" }}>
          This is your own assessment against the published criteria, not a machine score. It is worth
          rating the same piece again a day later, since first marking is usually generous.
        </p>
      </div>
    </div>
  );
}

function WritingRun({ test, sec, cfg, onExit }) {
  const ready = cfg.tasks.filter((t) => !t.soon);
  const [task, setTask] = useState(ready[0]);
  const [text, setText] = useState("");
  const [left, setLeft] = useState(ready[0].minutes * 60);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [scores, setScores] = useState(() => H().RUBRICS[cfg.rubric].criteria.map(() => null));

  useEffect(() => {
    if (!running || done) return;
    if (left <= 0) { setDone(true); return; }
    const t = setTimeout(() => setLeft((n) => n - 1), 1000);
    return () => clearTimeout(t);
  }, [running, left, done]);

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const short = words < task.minWords;

  function choose(t) {
    setTask(t); setText(""); setLeft(t.minutes * 60); setRunning(false); setDone(false);
    setScores(H().RUBRICS[cfg.rubric].criteria.map(() => null));
  }

  return (
    <div className="page fade">
      <div className="page-head">
        <button className="btn quiet" style={{ marginBottom: 8 }} onClick={onExit}>Leave the section</button>
        <div className="spread">
          <div>
            <h1>{test.name}, {sec.name}</h1>
            <p>{task.name}, {task.minutes} minutes, at least {task.minWords} words</p>
          </div>
          {running && !done && (
            <span className={"clock big" + (left <= 120 ? " low" : "")}>
              <Icon name="timer" size={15} /> {fmt(left)}
            </span>
          )}
        </div>
      </div>

      <div className="stack">
        {ready.length > 1 && (
          <div className="seg modes">
            {ready.map((t) => (
              <button key={t.id} className={task.id === t.id ? "on" : ""} onClick={() => choose(t)}>
                {t.name}
              </button>
            ))}
          </div>
        )}

        <div className="card card-pad">
          <div className="prompt-label">Prompt</div>
          <div className="prompt">{task.prompt}</div>
          {task.chart && <TaskChart chart={task.chart} />}
        </div>

        {!running && !done && (
          <div className="card card-pad spread">
            <div>
              <b className="small">Ready?</b>
              <div className="small muted">
                The clock starts when you begin and does not pause, the same as the real thing.
              </div>
            </div>
            <button className="btn" onClick={() => setRunning(true)}>Start writing</button>
          </div>
        )}

        {running && (
          <div className="glass-stage"><span className="blob b1" aria-hidden="true" /><span className="blob b2" aria-hidden="true" /><span className="blob b3" aria-hidden="true" />
            <div className="notes glass">
            <div className="notes-head">
              <div className="row">
                <span className="notes-icon"><Icon name="pen" size={14} /></span>
                <b className="small">{task.name}</b>
              </div>
              <span className={"small " + (short ? "muted" : "good-text")}>
                {words} words, {short ? `${task.minWords - words} short of the minimum` : "over the minimum"}
              </span>
            </div>
            <textarea className="notes-area" style={{ minHeight: 260 }} value={text} disabled={done}
              placeholder="Write your answer here." onChange={(e) => setText(e.target.value)} />
            <div className="notes-foot">
              <span className="small muted">
                {done ? "Time is up." : "The word count is live. Under the minimum is penalised."}
              </span>
              {!done && <button className="btn" onClick={() => setDone(true)}>Finish and mark it</button>}
            </div>
          </div>
            </div>
        )}

        {done && (
          <>
            <div className="card card-pad note-card">
              <b className="small">What the examiner is looking for</b>
              <p className="small" style={{ margin: "6px 0 0", color: "var(--ink-2)" }}>{task.tip}</p>
            </div>
            <AiMark task={task} rubric={cfg.rubric} answer={text} onScores={setScores} />
            <Rubric rubric={cfg.rubric} scores={scores} setScores={setScores} />
            <RubricResult rubric={cfg.rubric} scores={scores} />
            <div className="row">
              <button className="btn ghost" onClick={() => choose(task)}>Write it again</button>
              <button className="btn ghost" onClick={onExit}>Back to {test.name}</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function SpeakingRun({ test, sec, cfg, onExit }) {
  const ready = cfg.tasks.filter((t) => !t.soon);
  const [task, setTask] = useState(ready[0]);
  const [stage, setStage] = useState("idle"); // idle | prep | speaking | done
  const [left, setLeft] = useState(0);
  const [scores, setScores] = useState(() => H().RUBRICS[cfg.rubric].criteria.map(() => null));

  useEffect(() => {
    if (stage !== "prep" && stage !== "speaking") return;
    if (left <= 0) {
      if (stage === "prep") { setStage("speaking"); setLeft(task.respond); }
      else setStage("done");
      return;
    }
    const t = setTimeout(() => setLeft((n) => n - 1), 1000);
    return () => clearTimeout(t);
  }, [stage, left, task]);

  function begin() {
    if (task.prep > 0) { setStage("prep"); setLeft(task.prep); }
    else { setStage("speaking"); setLeft(task.respond); }
  }

  function choose(t) {
    setTask(t); setStage("idle"); setLeft(0);
    setScores(H().RUBRICS[cfg.rubric].criteria.map(() => null));
  }

  return (
    <div className="page fade">
      <div className="page-head">
        <button className="btn quiet" style={{ marginBottom: 8 }} onClick={onExit}>Leave the section</button>
        <h1>{test.name}, {sec.name}</h1>
        <p>
          {task.name}
          {task.prep > 0 ? `, ${task.prep} seconds to prepare` : ""}
          {`, ${task.respond >= 60 ? `${Math.round(task.respond / 60)} minute` : `${task.respond} second`} response`}
        </p>
      </div>

      <div className="stack">
        {ready.length > 1 && (
          <div className="seg modes">
            {ready.map((t) => (
              <button key={t.id} className={task.id === t.id ? "on" : ""} onClick={() => choose(t)}>
                {t.name}
              </button>
            ))}
          </div>
        )}

        <div className="card card-pad">
          <div className="prompt-label">Prompt</div>
          <div className="prompt">{task.prompt}</div>
        </div>

        {stage === "idle" && (
          <div className="card card-pad spread">
            <div>
              <b className="small">Speak out loud, properly</b>
              <div className="small muted">
                Nothing is recorded. The value is in doing it against the real clock rather than in your head.
              </div>
            </div>
            <button className="btn" onClick={begin}>
              <Icon name="mic" size={14} /> {task.prep > 0 ? "Start preparation" : "Start speaking"}
            </button>
          </div>
        )}

        {(stage === "prep" || stage === "speaking") && (
          <div className={"card card-pad speak-stage " + stage}>
            <span className={"pill " + (stage === "prep" ? "accent" : "good")}>
              {stage === "prep" ? "Preparing" : "Speak now"}
            </span>
            <div className="speak-clock">{fmt(left)}</div>
            <p className="small muted" style={{ margin: 0 }}>
              {stage === "prep"
                ? "Make notes. You cannot write a script in this time, so note the structure only."
                : "Keep going until the clock stops. Stopping early is the most common way to lose marks."}
            </p>
            <button className="btn ghost" style={{ marginTop: 14 }}
              onClick={() => (stage === "prep" ? (setStage("speaking"), setLeft(task.respond)) : setStage("done"))}>
              {stage === "prep" ? "Skip to speaking" : "I have finished"}
            </button>
          </div>
        )}

        {stage === "done" && (
          <>
            <div className="card card-pad note-card">
              <b className="small">What the examiner is looking for</b>
              <p className="small" style={{ margin: "6px 0 0", color: "var(--ink-2)" }}>{task.tip}</p>
            </div>
            <Rubric rubric={cfg.rubric} scores={scores} setScores={setScores} />
            <RubricResult rubric={cfg.rubric} scores={scores} />
            <div className="row">
              <button className="btn ghost" onClick={() => choose(task)}>Try it again</button>
              <button className="btn ghost" onClick={onExit}>Back to {test.name}</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- per test drill ---------- */

// The opposite of sitting a section: no clock, and the answer explained after
// every question. This is where you learn a test's habits before timing yourself.
function TestDrill({ test, sec, qs, grade, onExit }) {
  const [i, setI] = useState(0);
  const [picks, setPicks] = useState({});
  const [given, setGiven] = useState(undefined);
  const [locked, setLocked] = useState(false);
  const [right, setRight] = useState(0);
  const [done, setDone] = useState(false);
  const [flash, setFlash] = useState({ ok: null, seq: 0 });

  const q = qs[i];
  // Enter checks the answer, then moves on, as the buttons do.
  useEffect(() => {
    if (done) return;
    const onKey = (e) => {
      if (e.key !== "Enter" || e.repeat || e.target.closest?.("input, textarea, button, select, [contenteditable]")) return;
      if (locked) { e.preventDefault(); next(); } else if (isAnswered(given)) { e.preventDefault(); check(); }
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  });

  // Defensive: a drill should never start empty, but rendering undefined would
  // take the whole page down rather than showing a message.
  if (!q && !done) {
    return (
      <div className="page fade">
        <PageHead title={`${test.name}, ${sec.name}`} sub="No questions available for this section yet." />
        <button className="btn ghost" onClick={onExit}>Back to {test.name}</button>
      </div>
    );
  }

  function check() {
    if (locked || !isAnswered(given)) return;
    const ok = isRight(q, given);
    if (ok) setRight((v) => v + 1);
    setPicks((p) => ({ ...p, [i]: given }));
    grade(q.id, ok, `${test.name}: ${q.section || sec.name}`, "mc", { skill: q.skill, section: q.section || sec.name, test: test.id });
    setFlash((f) => ({ ok, seq: f.seq + 1 }));
    setLocked(true);
  }

  function next() {
    if (i + 1 >= qs.length) return setDone(true);
    setI(i + 1);
    setGiven(undefined);
    setLocked(false);
  }

  if (done) {
    return (
      <div className="page fade">
        <PageHead title={`${test.name}, ${sec.name} drill`} sub={`${right} of ${qs.length} correct`} />
        <div className="stack">
          <div className="card card-pad" style={{ textAlign: "center", padding: 32 }}>
            <div style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.03em" }}>
              {Math.round((right / qs.length) * 100)}%
            </div>
            <div className="muted">
              Drills are not scored on the real scale, since ten questions cannot place you on it.
            </div>
          </div>

          <Feedback qs={qs} answers={picks} secondsAllowed={0} secondsLeft={0} />

          <div className="row">
            <button className="btn ghost" onClick={onExit}>Back to {test.name}</button>
          </div>
        </div>
      </div>
    );
  }

  const ok = locked && isRight(q, given);

  return (
    <div className="page fade">
      <AnswerFlash ok={flash.ok} seq={flash.seq} />
      <div className="page-head">
        <button className="btn quiet" style={{ marginBottom: 8 }} onClick={onExit}>Leave the drill</button>
        <div className="spread">
          <div>
            <h1>{test.name}, {sec.name} drill</h1>
            <p>{q.skill || q.section}, no time limit</p>
          </div>
          <span className="pill">{right} of {i + (locked ? 1 : 0)} correct</span>
        </div>
      </div>

      <div className="spread" style={{ marginBottom: 8 }}>
        <span className="small muted">Question {i + 1} of {qs.length}</span>
      </div>
      <div className="bar" style={{ marginBottom: 16 }}>
        <i style={{ width: `${((i + (locked ? 1 : 0)) / qs.length) * 100}%` }} />
      </div>

      <div className={q.passage ? "paper-split" : ""}>
        {q.passage && (
          <div className="paper-passage">
            <div className="prompt-label">{sec.audio ? "Recording" : "Passage"}</div>
            {sec.audio
              ? <Player transcript={q.passage} playsAllowed={sec.plays || 2} />
              : <AnnotatedText className="passage-body" text={q.passage} />}
          </div>
        )}

        <div className="card card-pad">
          <h3 className="q-text"><M t={q.q} /></h3>

          <AnswerInput q={q} testId={test.id} index={i} value={given}
            onChange={setGiven} disabled={locked} />

          {locked && (
            <div className="fade" style={{ marginTop: 16 }}>
              <div className="card card-pad" style={{ background: "var(--panel)" }}>
                <div className="row" style={{ marginBottom: 10 }}>
                  <span className={"pill " + (ok ? "good" : "warn")}>
                    {ok ? "Correct" : "Not quite"}
                  </span>
                  {!ok && <span className="small muted">Answer: <M t={q.choices[q.answer]} /></span>}
                </div>
                <p className="small" style={{ margin: 0, color: "var(--ink-2)" }}><M t={q.why} /></p>
              </div>
            </div>
          )}

          <div className="spread" style={{ marginTop: 16 }}>
            <span className="small muted">{q.section}</span>
            {locked
              ? <button className="btn" onClick={next}>
                  {i + 1 >= qs.length ? "See how you did" : "Next question"} <Icon name="arrow" />
                </button>
              : <button className="btn" disabled={!isAnswered(given)} onClick={check}>Check answer</button>}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- ai marking ---------- */

// Asks the model to mark a writing task against the same published criteria
// the self assessment uses, then offers to fill those scores in.
function AiMark({ task, rubric, answer, onScores }) {
  const [state, setState] = useState("idle"); // idle | working | done | error
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const r = H().RUBRICS[rubric];

  async function run() {
    setState("working");
    setError("");
    try {
      const data = await gradeWriting({
        answer,
        prompt: task.prompt,
        rubric: r.name,
        criteria: r.criteria.map((c) => c.n),
        scale: r.scale,
      });
      setResult(data);
      setState("done");
    } catch (err) {
      setError(err.message);
      setState("error");
    }
  }

  if (state === "idle") {
    return (
      <div className="card card-pad spread">
        <div>
          <b className="small">Get it marked</b>
          <div className="small muted">
            An examiner's read against the {r.name}, before you mark it yourself.
          </div>
        </div>
        <button className="btn cta" onClick={run} disabled={answer.trim().length < 80}>
          Mark my answer
        </button>
      </div>
    );
  }

  if (state === "working") {
    return (
      <div className="card card-pad">
        <Loading label="Reading your answer" />
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="card card-pad" style={{ borderColor: "var(--warn-line)" }}>
        <div className="spread">
          <span className="pill warn">Could not mark it</span>
          <button className="btn ghost" onClick={run}>Try again</button>
        </div>
        <p className="small" style={{ margin: "10px 0 0", color: "var(--ink-2)" }}>{error}</p>
        <p className="small muted" style={{ margin: "6px 0 0" }}>
          You can still mark it yourself below.
        </p>
      </div>
    );
  }

  const value = r.combine(result.scores);

  return (
    <div className="card fade">
      <div className="card-head">
        <h3>Marked against the {r.name}</h3>
        <span className="pill accent">{r.format(value)}</span>
      </div>

      {r.criteria.map((c, i) => (
        <div key={c.n} className="crit-row">
          <div className="sec-main">
            <div className="list-title">{c.n}</div>
            <div className="small muted">{result.comments[i] || ""}</div>
          </div>
          <span className="pill">{result.scores[i]}</span>
        </div>
      ))}

      {(result.strength || result.fix) && (
        <div className="fb-notes">
          {result.strength && <p className="small"><b>Keep:</b> {result.strength}</p>}
          {result.fix && <p className="small"><b>Change:</b> {result.fix}</p>}
        </div>
      )}

      <div className="set-row">
        <div className="hint">
          A model's mark, not an examiner's. Treat it as a second opinion against your own reading.
        </div>
        <button className="btn ghost" onClick={() => onScores(result.scores)}>
          Use these scores
        </button>
      </div>
    </div>
  );
}


export default TestPrep;
