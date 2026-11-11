// Choosing courses: a qualification, then its subjects, each opening to show its exam boards
// (and Triple or Double for the sciences), or the test date for the SAT.

import { useState } from "react";
import { QUALS, SUBJECTS, BOARDS, courseFor, matchesSubject } from "./catalog.js";
import { SubjectIcon } from "./SubjectIcons.jsx";

const DATES = ["August", "October", "November", "December", "March", "May", "June", "Not sure yet"];
const Chev = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="m8 5 5 5-5 5" /></svg>;

/** picked: { [courseId]: { id, board, tier, date } }. */
export function QualList({ picked, onPick }) {
  const count = (q) => Object.keys(picked).filter((id) => (q === "sat" ? id === "sat" : id.startsWith("igcse-"))).length;
  return QUALS.map((q) => (
    <button key={q.id} className="ob-row flat" onClick={() => onPick(q.id)}>
      <SubjectIcon id={q.id === "sat" ? "sat" : "global"} size={50} />
      <span>{q.name}<small className="muted">{count(q.id) ? `${count(q.id)} added` : q.sub}</small></span><Chev />
    </button>
  ));
}

function Row({ icon, name, sub, sel, open, onToggle, children }) {
  return (
    <div className={"ob-course" + (open ? " open" : "") + (sel ? " added" : "")}>
      <button className="ob-row flat" aria-expanded={open} title={sel ? "Edit course" : "Add course"} onClick={onToggle}>
        <SubjectIcon id={icon} size={56} />
        <span>{name}<small className="muted">{sub}</small></span>
        <b className="ob-plus" aria-hidden="true">{open ? "−" : sel ? "✓" : "+"}</b>
      </button>
      {open && <div className="ob-boards">{children}</div>}
    </div>
  );
}

export function SubjectList({ qual, picked, setPicked }) {
  const [open, setOpen] = useState(null);
  const [q, setQ] = useState("");
  const set = (id, v) => { const n = { ...picked }; if (v) n[id] = v; else delete n[id]; setPicked(n); };
  if (qual === "sat") {
    const sel = picked.sat;
    return (
      <section className="ob-card ob-pick"><span className="ob-label light">Full length tests</span>
        <Row icon="sat" name="SAT" sub={sel ? `Added${sel.date && sel.date !== "Not sure yet" ? `, sitting in ${sel.date}` : ""}` : "Ten tests, on paper and on screen"} sel={sel} open={open === "sat"} onToggle={() => setOpen(open === "sat" ? null : "sat")}>
          <b>When are you sitting the SAT?</b><small className="muted">Test dates</small>
          <div className="ob-chips">{DATES.map((d) => <button key={d} className={sel?.date === d ? "on" : ""} onClick={() => { set("sat", { id: "sat", date: d }); setOpen(null); }}>{d}</button>)}</div>
          {sel && <button className="cg-link ob-remove" onClick={() => { set("sat", null); setOpen(null); }}>Remove course</button>}
        </Row>
      </section>
    );
  }
  const t = q.trim().toLowerCase();
  const list = SUBJECTS.filter((s) => matchesSubject(s, t));
  const groups = [...new Set(SUBJECTS.map((s) => s.group))];
  return (
    <>
      <input className="ob-search" type="search" placeholder="Search subjects, like PE, CS or 0610" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search subjects" />
      {list.length === 0 && <p className="muted center">No subjects match that.</p>}
      {groups.map((g) => {
        const items = list.filter((s) => s.group === g);
        if (!items.length) return null;
        return (
          <section key={g} className="ob-card ob-pick"><span className="ob-label light">{g}</span>
            {items.map((s) => {
              const id = `igcse-${s.id}`, sel = picked[id];
              const c = sel && courseFor(sel);
              return (
                <Row key={s.id} icon={s.icon} name={s.name} sub={c ? `Added: ${BOARDS[c.board]}${c.tier ? `, ${c.tier}` : ""}` : Object.keys(s.boards).map((b) => BOARDS[b]).join(" or ")} sel={sel} open={open === id} onToggle={() => setOpen(open === id ? null : id)}>
                  {s.tiers && <><b>Triple or Double?</b><div className="ob-chips">{[["Triple", "Triple (separate science)"], ["Double", "Double (combined science)"]].map(([tier, label]) => <button key={tier} className={(sel?.tier || "Triple") === tier && sel ? "on" : ""} onClick={() => set(id, { id, board: sel?.board || Object.keys(s.boards)[0], tier })}>{label}</button>)}</div></>}
                  <b>{sel ? "Exam board" : "Add exam board"}</b><small className="muted">International GCSE</small>
                  <div className="ob-chips">{Object.entries(s.boards).map(([b, code]) => <button key={b} className={sel?.board === b ? "on" : ""} onClick={() => { set(id, { id, board: b, tier: sel?.tier || (s.tiers ? "Triple" : undefined) }); if (!s.tiers) setOpen(null); }}>{b === "cie" ? "Cambridge (CIE)" : "Edexcel iGCSE"} <small className="muted">{code}</small></button>)}</div>
                  {sel && <button className="cg-link ob-remove" onClick={() => { set(id, null); setOpen(null); }}>Remove course</button>}
                </Row>
              );
            })}
          </section>
        );
      })}
    </>
  );
}
