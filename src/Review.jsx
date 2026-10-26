// Going back through a finished paper, question by question: the ones you missed
// and the ones you got right, with the explanation beside each. Used after a
// practice section and after a real paper marked against its official key.

import { useMemo, useState } from "react";
import { M } from "./MathText.jsx";
import { explainQuestion } from "./ai.js";

const letter = (i) => String.fromCharCode(65 + i);

const STATUS = {
  right: { label: "Correct", cls: "good" },
  wrong: { label: "Missed", cls: "warn" },
  blank: { label: "Blank", cls: "" },
};

/**
 * @param items [{ n, status, skill?, passage?, q?, choices?, yours, correct, why? }]
 *   yours and correct are an index into choices when there are choices, or a
 *   letter or text when there are not (a real paper whose questions are not here).
 * @param explainable when the questions are not here, let the student paste one
 *   and have it explained.
 */
export default function Review({ items, test, section, explainable = false }) {
  const [filter, setFilter] = useState(items.some((i) => i.status !== "right") ? "wrong" : "all");
  const [at, setAt] = useState(0);

  const counts = useMemo(() => ({
    all: items.length,
    wrong: items.filter((i) => i.status === "wrong").length,
    right: items.filter((i) => i.status === "right").length,
    blank: items.filter((i) => i.status === "blank").length,
  }), [items]);

  const shown = items.filter((i) => filter === "all" || i.status === filter || (filter === "wrong" && i.status === "blank"));
  const item = shown[Math.min(at, shown.length - 1)];

  function pick(f) { setFilter(f); setAt(0); }

  return (
    <div className="card rv">
      <div className="card-head">
        <h3>Go through your answers</h3>
        <span className="small muted">{counts.wrong + counts.blank} to look at, {counts.right} right</span>
      </div>

      <div className="rv-body">
        <div className="seg tight rv-filter" role="tablist" aria-label="Which questions">
          {[["wrong", `Missed (${counts.wrong + counts.blank})`], ["right", `Correct (${counts.right})`], ["all", `All (${counts.all})`]].map(([k, label]) => (
            <button key={k} role="tab" aria-selected={filter === k} className={filter === k ? "on" : ""} onClick={() => pick(k)}>{label}</button>
          ))}
        </div>

        <div className="rv-chips" aria-label="Questions">
          {shown.map((it, idx) => (
            <button key={it.n} className={"rv-chip " + it.status + (item && it.n === item.n ? " on" : "")} onClick={() => setAt(idx)}
              aria-label={`Question ${it.n + 1}, ${STATUS[it.status].label}`} aria-current={item && it.n === item.n}>{it.n + 1}</button>
          ))}
        </div>

        {!item ? (
          <div className="empty small">{filter === "right" ? "Nothing correct yet." : "Nothing missed. Every question correct."}</div>
        ) : (
          <Detail key={item.n} item={item} test={test} section={section} explainable={explainable}
            onPrev={at > 0 ? () => setAt(at - 1) : null}
            onNext={at < shown.length - 1 ? () => setAt(at + 1) : null}
            position={`${Math.min(at, shown.length - 1) + 1} of ${shown.length}`} />
        )}
      </div>
    </div>
  );
}

function Detail({ item, test, section, explainable, onPrev, onNext, position }) {
  const st = STATUS[item.status];
  const hasText = Boolean(item.q);
  const yours = (v) => (Array.isArray(item.choices) && Number.isInteger(v) ? `${letter(v)}. ${item.choices[v]}` : String(v ?? ""));

  return (
    <div className="rv-detail">
      <div className="rv-top">
        <b>Question {item.n + 1}</b>
        <span className={"pill " + st.cls}>{st.label}</span>
        {item.skill && <span className="small muted">{item.skill}</span>}
        <span className="small muted rv-pos">{position}</span>
      </div>

      {item.passage && <div className="rv-passage small"><M t={item.passage} /></div>}
      {hasText && <h4 className="q-text rv-q"><M t={item.q} /></h4>}

      {Array.isArray(item.choices) && item.choices.length > 0 ? (
        <ul className="rv-choices">
          {item.choices.map((c, k) => {
            const isRight = k === item.correct;
            const isYours = k === item.yours;
            return (
              <li key={k} className={(isRight ? "right " : "") + (isYours && !isRight ? "wrong " : "") + (isYours ? "yours" : "")}>
                <span className="rv-key">{letter(k)}</span>
                <span className="rv-text"><M t={c} /></span>
                {isRight && <em>Correct answer</em>}
                {isYours && !isRight && <em>Your answer</em>}
                {isYours && isRight && <em>Your answer</em>}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="rv-line">
          You put <b>{item.yours === undefined || item.yours === "" || item.yours === null ? "nothing" : yours(item.yours)}</b>. The key says <b>{yours(item.correct)}</b>.
        </p>
      )}

      {Array.isArray(item.choices) && typeof item.yours === "string" && item.yours.trim() !== "" && (
        <p className="rv-line">You typed <b>{item.yours}</b>.</p>
      )}

      {item.why ? (
        <div className={"rv-why " + (item.status === "right" ? "ok" : "no")}>
          <b className="small">{item.status === "right" ? "Why this is right" : "Why the answer is " + (Array.isArray(item.choices) && Number.isInteger(item.correct) ? letter(item.correct) : "different")}</b>
          <p><M t={item.why} /></p>
        </div>
      ) : explainable ? (
        <Explain item={item} test={test} section={section} />
      ) : null}

      <div className="rv-nav">
        <button className="btn ghost small" disabled={!onPrev} onClick={onPrev}>Previous</button>
        <button className="btn ghost small" disabled={!onNext} onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

// A real paper's questions are not stored here, so the student pastes the one
// they want explained and the answer from the key goes with it.
function Explain({ item, test, section }) {
  const [text, setText] = useState("");
  const [state, setState] = useState("idle"); // idle | busy | done | error
  const [answer, setAnswer] = useState("");

  async function go() {
    if (text.trim().length < 8 || state === "busy") return;
    setState("busy"); setAnswer("");
    try {
      const r = await explainQuestion({ test, section, number: item.n + 1, question: text.trim().slice(0, 3000), yours: String(item.yours ?? ""), correct: String(item.correct ?? ""), status: item.status });
      setAnswer(r.explanation || ""); setState("done");
    } catch (e) {
      setAnswer(e.message || "That could not be explained just now. Try again."); setState("error");
    }
  }

  return (
    <div className="rv-explain">
      <b className="small">Want this one explained?</b>
      <p className="small muted">Type or paste the question and its answer choices from the paper, and Dwiddle will work through it using the key's answer.</p>
      <textarea rows={4} value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste the question and choices here" aria-label="The question" />
      <div className="row">
        <button className="btn small" onClick={go} disabled={text.trim().length < 8 || state === "busy"}>{state === "busy" ? "Working it out" : "Explain it"}</button>
      </div>
      {answer && <div className={"rv-why " + (state === "error" ? "no" : "ok")}><p><M t={answer} /></p></div>}
    </div>
  );
}
