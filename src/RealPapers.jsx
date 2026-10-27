// The Real papers page: official free practice tests and past papers, each opening
// at its publisher, and the ones with an answer key sat here on an answer sheet
// against the clock, then marked against the key you paste from the scoring guide.

import { useEffect, useMemo, useRef, useState } from "react";
import { PageHead } from "./ui.jsx";
import { H } from "./heavy.js";
import { REAL_GROUPS, REAL_PAPERS, OWN_SECTIONS, ownPaper, parseKey, markSheet, markOwn } from "./realpapers.js";
import { PPQ, search } from "./ppq.js";
import Review from "./Review.jsx";
import PdfStudio from "./PdfStudio.jsx";

const SHEET = "testiddle-sheet";
const HISTORY = "testiddle-real-history";

const read = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const write = (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } };

const clock = (s) => {
  const t = Math.max(0, s), h = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60), r = t % 60;
  const two = (n) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${two(m)}:${two(r)}` : `${m}:${two(r)}`;
};
const lettersOf = (n) => Array.from({ length: n }, (_, i) => String.fromCharCode(65 + i));

export default function RealPapers({ head }) {
  const [sheet, setSheet] = useState(() => read(SHEET, null)); // the paper being sat
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState(() => read(HISTORY, []));
  // The address says where you are, so Back works and a page can be shared: /real/sat/paper-sat-test-2
  const [path, setPath] = useState(() => window.location.pathname);
  useEffect(() => { const f = () => setPath(window.location.pathname); window.addEventListener("popstate", f); return () => window.removeEventListener("popstate", f); }, []);
  const nav = (to) => { if (to !== window.location.pathname) window.history.pushState({}, "", to); setPath(to); window.scrollTo(0, 0); };
  const [, detail, slug] = /^\/real(?:\/([^/]+))?(?:\/([^/]+))?\/?$/.exec(path) || [];
  const [pdf, setPdf] = useState(null); // a paper the student downloaded, shown beside the sheet; it stays in this browser

  const paperOf = (s) => REAL_PAPERS.find((p) => p.id === s?.paperId) || ownPaper(s?.paperId);
  const paper = paperOf(sheet);
  const section = paper?.sections.find((x) => x.id === sheet?.sectionId);

  function start(p, s) {
    const next = { paperId: p.id, sectionId: s.id, answers: {}, startedAt: Date.now(), step: "sit" };
    write(SHEET, next); setSheet(next); setResult(null);
  }
  function update(patch) {
    setSheet((cur) => { const next = { ...cur, ...patch }; write(SHEET, next); return next; });
  }
  function leave() { write(SHEET, null); setSheet(null); setResult(null); }
  function takePdf(file) {
    if (!file) return;
    setPdf((cur) => { if (cur?.url) URL.revokeObjectURL(cur.url); return { name: file.name, url: URL.createObjectURL(file) }; });
  }

  function saveResult(r) {
    const row = { id: Date.now(), paper: paper.name, section: section.name, right: r.right, total: r.total, minutes: r.minutes, on: new Date().toISOString().slice(0, 10) };
    const next = [row, ...history].slice(0, 30);
    write(HISTORY, next); setHistory(next);
  }

  // Our own tests carry their key, so they are marked the moment the sheet goes in.
  async function submit() {
    const used = Math.min(section.minutes * 60, Math.round((Date.now() - sheet.startedAt) / 1000));
    if (!paper.own) { update({ step: "key", usedSeconds: used }); return; }
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}papers/${paper.own.kind}-${paper.own.n}.json`);
      if (!res.ok) throw new Error("missing");
      const data = await res.json();
      const mod = data.modules.find((m) => m.id.toLowerCase() === section.id);
      const rows = markOwn(sheet.answers || {}, mod);
      setResult({ rows, right: rows.filter((r) => r.status === "right").length, total: rows.length, minutes: Math.round(used / 60) });
    } catch {
      window.alert("The answer key could not be loaded. Check your connection and press Submit again. Your answers are saved.");
    }
  }

  if (result && paper && section) return <Result paper={paper} section={section} result={result} onSave={saveResult} onDone={leave} onAgain={() => start(paper, section)} />;
  if (sheet && paper && section) {
    if (sheet.step === "key") return <KeyStep paper={paper} section={section} sheet={sheet} onBack={() => update({ step: "sit" })} onMarked={setResult} onDiscard={leave} />;
    return <Sit paper={paper} section={section} sheet={sheet} pdf={paper.own ? { name: paper.name, own: `${paper.own.kind}-${paper.own.n}-paper`, url: `${import.meta.env.BASE_URL}papers/${paper.own.kind}-${paper.own.n}.pdf` } : pdf} onAnswer={(answers) => update({ answers })} onSubmit={submit} onLeave={leave} />;
  }
  const open = REAL_PAPERS.find((p) => p.id === detail);
  if (open) return <Detail paper={open} pdf={pdf} onPdf={takePdf} onClearPdf={() => { if (pdf?.url) URL.revokeObjectURL(pdf.url); setPdf(null); }} onStart={start} slug={slug} onSlug={(sl) => nav(sl ? `/real/${open.id}/${sl}` : `/real/${open.id}`)} onBack={() => nav("/real")} history={history.filter((h) => h.paper === open.name)} />;
  return <List head={head} onOpen={(id) => nav(`/real/${id}`)} history={history} onClear={() => { write(HISTORY, []); setHistory([]); }} />;
}

/* ---------- the library ---------- */

// Each exam gets a colour and initials, the way a subject does on a revision site.
const TILE = { sat: "#2f6fb0", psat: "#2f6fb0", act: "#c0582f", ssat: "#2a8c76", isee: "#7a5cb0", gre: "#b0842f", gmat: "#2f8f9a", ielts: "#b03a5a", toefl: "#3a6fb0", det: "#5aa02f", "igcse-mcq": "#2a8c76", edexcel: "#6a4fb0", aqa: "#b0562f", ocr: "#2f7a9a" };
const INITIALS = { sat: "SAT", psat: "PSAT", act: "ACT", ssat: "SSAT", isee: "ISEE", gre: "GRE", gmat: "GMAT", ielts: "IELTS", toefl: "TOEFL", det: "DET", "igcse-mcq": "IGCSE", edexcel: "EDX", aqa: "AQA", ocr: "OCR" };
const FILTERS = [["all", "All exams"], ...REAL_GROUPS.map((g) => [g.id, g.name])];

function Tile({ id }) {
  return <span className="rp-tile" style={{ background: TILE[id] || "#2a8c76" }} aria-hidden="true">{INITIALS[id] || id.slice(0, 3).toUpperCase()}</span>;
}

function List({ head, onOpen, history, onClear }) {
  const [q, setQ] = useState("");
  const [group, setGroup] = useState("all");
  const shown = REAL_PAPERS.filter((p) => (group === "all" || p.group === group) && (!q.trim() || `${p.name} ${p.org} ${p.test || ""} ${p.id}`.toLowerCase().includes(q.trim().toLowerCase())));

  return (
    <div className="rp">
      {head}
      <div className="rp-hero card card-pad">
        <div>
          <h2>Real exam papers</h2>
          <p className="small muted">Official papers from the people who write the exams, with a timed answer sheet, marking against the official key, and every question explained.</p>
        </div>
        <input className="rp-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search exams, for example SAT or IGCSE" aria-label="Search exams" />
      </div>

      <div className="rp-filters" role="tablist" aria-label="Type of exam">
        {FILTERS.map(([k, label]) => <button key={k} role="tab" aria-selected={group === k} className={"rp-filter" + (group === k ? " on" : "")} onClick={() => setGroup(k)}>{label}</button>)}
      </div>

      {shown.length === 0 && <div className="empty small">No exams match that.</div>}
      <div className="test-grid">
        {shown.map((p) => {
          const cfg = PPQ[p.id];
          const count = cfg?.numbered ? `${cfg.groups.reduce((n, g) => n + g.count, 0)} tests` : cfg ? "By year" : p.sections.length ? `${p.sections.length} sections` : "Official site";
          return (
            <button key={p.id} className="test-card" onClick={() => onOpen(p.id)}>
              <div className="spread">
                <b className="test-name">{p.name}</b>
                <span className="pill accent">{count}</span>
              </div>
              <span className="small muted">{p.card.full}</span>
              <div className="test-meta">
                <span><b>{p.card.scale}</b></span>
                <span className="muted">{p.card.length}</span>
              </div>
              <span className="small muted">{p.card.who}</span>
            </button>
          );
        })}
      </div>

      {history.length > 0 && (
        <section className="rp-group">
          <div className="rp-grouphead spread"><h2>Your results</h2><button className="ti-linkbtn" onClick={onClear}>Clear</button></div>
          <div className="card">
            {history.map((h) => (
              <div key={h.id} className="rp-hist">
                <div><b>{h.paper}</b><div className="small muted">{h.section}, {h.on}</div></div>
                <div className="rp-score"><b>{h.right} / {h.total}</b><span className="small muted">{Math.round((h.right / Math.max(1, h.total)) * 100)}%</span></div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

// One exam's page: what it is, the official source, how to sit it, and its sections.
function Detail({ paper, pdf, onPdf, onClearPdf, onStart, slug, onSlug, onBack, history }) {
  const fileRef = useRef(null);
  const [picked, setPicked] = useState(null); // a past paper opened from a card
  const entry = slug ? (picked && (picked.slug || slugify(picked.key)) === slug ? picked : findNumbered(paper, slug)) : null;
  const setEntry = (e) => { setPicked(e); onSlug(e ? e.slug || slugify(e.key) : null); };
  const hasSheet = paper.sections.length > 0;

  if (entry) return <PaperPage entry={entry} paper={paper} pdf={pdf} onPdf={onPdf} onClearPdf={onClearPdf} onStart={onStart} onBack={() => setEntry(null)} />;

  return (
    <div className="page wide fade rp-detail">
      <nav className="rp-crumbs small" aria-label="Breadcrumb">
        <button className="ti-linkbtn" onClick={onBack}>Real papers</button><span aria-hidden="true">/</span><b>{paper.name}</b>
      </nav>

      <div className="rp-layout">
        <aside className="rp-side card" aria-label="On this page">
          <div className="rp-sidehead"><Tile id={paper.id} /><div><b>{paper.name}</b><span className="small muted">{paper.org}</span></div></div>
          <a className="rp-sidelink on" href="#rp-how">How it works</a>
          {PPQ[paper.id] && <a className="rp-sidelink" href="#rp-ppq">{PPQ[paper.id].numbered ? "Practice tests" : "Past papers by year"}</a>}
          {hasSheet && <a className="rp-sidelink" href="#rp-sections">Sit a section</a>}
          {hasSheet && <a className="rp-sidelink" href="#rp-yours">Add your paper</a>}
          {history.length > 0 && <a className="rp-sidelink" href="#rp-results">Your results</a>}
          <a className="btn small rp-sidebtn" href={paper.url} target="_blank" rel="noopener noreferrer">Open the official paper</a>
          <button className="ti-linkbtn rp-sideback" onClick={onBack}>Back to all exams</button>
        </aside>

        <div className="rp-main stack">
          <section className="card card-pad" id="rp-how">
            <h1>{paper.name}</h1>
            <p className="rp-lead">{paper.blurb}</p>
            <ol className="rp-steps">
              <li><b>Get the paper.</b> Open the official page and download the paper and its answer key. They are free from the publisher.</li>
              {hasSheet ? (
                <>
                  <li><b>Sit it here.</b> Pick a section below. The clock runs at the real length, and you fill in the answer sheet as you work through the paper.</li>
                  <li><b>Get it marked.</b> Paste in the official key and it marks you straight away, then lets you go back through every question you missed and every one you got right.</li>
                </>
              ) : (
                <li><b>Mark it yourself.</b> This is a written paper, so use the publisher's mark scheme to mark your answers, and note what you lost marks on.</li>
              )}
            </ol>
            <div className="row">
              <a className="btn cta" href={paper.url} target="_blank" rel="noopener noreferrer">Open the official paper</a>
            </div>
          </section>

          <Ppq paper={paper} onOpenPaper={setEntry} />

          {hasSheet && (
            <section className="card" id="rp-sections">
              <div className="card-head"><h3>Sit a section</h3><span className="small muted">Real length and real timing</span></div>
              {paper.sections.map((s) => (
                <div key={s.id} className="rp-secrow">
                  <div>
                    <b>{s.name}</b>
                    <div className="small muted">{s.questions} questions, {s.minutes} minutes{s.note ? `. ${s.note}` : ""}</div>
                  </div>
                  <button className="btn cta small" onClick={() => onStart(paper, s)}>Start</button>
                </div>
              ))}
            </section>
          )}

          {hasSheet && (
            <section className="card card-pad" id="rp-yours">
              <h3>Add the paper you downloaded</h3>
              <p className="small muted">Optional. Open your PDF beside the answer sheet while you sit, so everything is on one screen. It stays in this browser and is not uploaded anywhere.</p>
              <input ref={fileRef} type="file" accept="application/pdf,.pdf" hidden onChange={(e) => { onPdf(e.target.files?.[0]); e.target.value = ""; }} />
              <div className="row">
                <button className="btn ghost" onClick={() => fileRef.current?.click()}>{pdf ? "Choose a different PDF" : "Choose a PDF"}</button>
                {pdf && <><span className="small">{pdf.name}</span><button className="ti-linkbtn" onClick={onClearPdf}>Remove</button></>}
              </div>
            </section>
          )}

          {history.length > 0 && (
            <section className="card" id="rp-results">
              <div className="card-head"><h3>Your results</h3></div>
              {history.map((h) => (
                <div key={h.id} className="rp-hist">
                  <div><b>{h.section}</b><div className="small muted">{h.on}</div></div>
                  <div className="rp-score"><b>{h.right} / {h.total}</b><span className="small muted">{Math.round((h.right / Math.max(1, h.total)) * 100)}%</span></div>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}


/* ---------- past papers: a card for each paper ---------- */

// Each paper is listed like the exams are on the front page, and opens on its own page.
function Ppq({ paper, onOpenPaper }) {
  const cfg = PPQ[paper.id];
  if (!cfg) return null;
  return cfg.numbered ? <Numbered paper={paper} cfg={cfg} onOpenPaper={onOpenPaper} /> : <ByYear paper={paper} cfg={cfg} onOpenPaper={onOpenPaper} />;
}

const Hubs = ({ hubs }) => (
  <div className="ppq-hubs">
    {hubs.map(([label, url]) => <a key={url} className="btn ghost small" href={url} target="_blank" rel="noopener noreferrer">{label}</a>)}
  </div>
);

function PaperCard({ entry, onOpen }) {
  return (
    <button className="test-card" onClick={() => onOpen(entry)}>
      <div className="spread">
        <b className="test-name">{entry.title}</b>
        {entry.sections?.length > 0 && <span className="pill accent">Answer sheet</span>}
      </div>
      <span className="small muted">{entry.subtitle}</span>
      <div className="test-meta">
        <span><b>{entry.minutes > 0 ? `${entry.minutes} min` : "Official paper"}</b></span>
        {entry.questions > 0 && <span className="muted">{entry.questions} questions</span>}
      </div>
      <span className="small muted">{entry.sections?.length > 0 ? "Sit it here on the answer sheet" : "Open it next to a timer"}</span>
    </button>
  );
}

function ByYear({ paper, cfg, onOpenPaper }) {
  const [li, setLi] = useState(0);
  const lvl = cfg.levels[li];
  const [si, setSi] = useState(0);
  const subject = lvl.subjects[Math.min(si, lvl.subjects.length - 1)];
  const [sess, setSess] = useState("all");
  const [more, setMore] = useState(false);
  const levelSessions = lvl.sessions || cfg.sessions;
  const sessions = levelSessions.filter(([k]) => sess === "all" || k === sess);
  const years = more ? cfg.years : cfg.years.slice(0, 4);

  const entries = years.flatMap((y) => sessions.map(([k, name]) => ({
    key: `${lvl.id}-${subject.code}-${y}-${k}`,
    tile: paper.id,
    title: `${subject.name} ${subject.code}`,
    subtitle: `${cfg.board} ${lvl.name}, ${name} ${y}`,
    org: cfg.board, code: subject.code, year: y, session: name,
    minutes: subject.mcq ? 45 : 90, minutesEditable: !subject.mcq,
    sections: subject.mcq ? paper.sections : [],
    links: { paper: search(cfg.paperQuery(lvl, subject, y, [k, name])), mark: search(cfg.markQuery(lvl, subject, y, [k, name])), report: search(`${cfg.board} ${lvl.name} ${subject.name} ${subject.code} ${name} ${y} examiner report`) },
    hubs: cfg.hubs,
    note: subject.mcq ? "Multiple choice, so you can sit it here on the answer sheet." : "A written paper: sit it on paper, then mark yourself against the mark scheme.",
  })));

  return (
    <section className="ppq" id="rp-ppq">
      <div className="rp-grouphead"><h2>Past papers by year</h2><p className="small muted">{cfg.board}. {cfg.note}</p></div>
      <div className="ppq-pickers">
        {cfg.levels.length > 1 && (
          <div className="rp-filters" role="tablist" aria-label="Level">
            {cfg.levels.map((l, i) => <button key={l.id} role="tab" aria-selected={li === i} className={"rp-filter" + (li === i ? " on" : "")} onClick={() => { setLi(i); setSi(0); }}>{l.name}</button>)}
          </div>
        )}
        <label className="ppq-field"><span className="small muted">Subject</span>
          <select value={Math.min(si, lvl.subjects.length - 1)} onChange={(e) => setSi(Number(e.target.value))}>
            {lvl.subjects.map((s, i) => <option key={s.code} value={i}>{s.name} ({s.code})</option>)}
          </select>
        </label>
        <label className="ppq-field"><span className="small muted">Session</span>
          <select value={sess} onChange={(e) => setSess(e.target.value)}>
            <option value="all">All sessions</option>
            {levelSessions.map(([k, name]) => <option key={k} value={k}>{name}</option>)}
          </select>
        </label>
      </div>
      <div className="test-grid">{entries.map((e) => <PaperCard key={e.key} entry={e} onOpen={onOpenPaper} />)}</div>
      {!more && cfg.years.length > 4 && <button className="btn ghost small" onClick={() => setMore(true)}>Show earlier years, back to {cfg.years[cfg.years.length - 1]}</button>}
    </section>
  );
}

const slugify = (t) => String(t).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

// One numbered test as a card or a page needs it. Its slug is what goes in the address.
function numberedEntry(paper, cfg, g, n) {
  const slug = `${slugify(g.name)}-test-${n}`;
  if (g.own) {
    const base = `${import.meta.env.BASE_URL}papers/${g.own}-${n}`;
    return { key: `${g.name}-${n}`, slug, tile: paper.id, title: g.title(n), subtitle: "Testiddle practice test", org: "Testiddle", minutes: g.minutes, questions: g.questions, minutesEditable: true,
      sections: OWN_SECTIONS, ownId: `${g.own}-${n}`, pdfUrl: `${base}.pdf`, markUrl: `${base}-markscheme.pdf`, links: {}, note: g.note };
  }
  return { key: `${g.name}-${n}`, slug, tile: paper.id, title: g.title(n), subtitle: cfg.board, org: cfg.board, minutes: g.minutes, questions: g.questions,
    sections: g.sheet ? paper.sections : [],
    links: { paper: search(g.query(n)), mark: search(`${g.query(n)} answers scoring`) },
    hubs: cfg.hubs,
    note: g.sheet ? "A full length official test. Take it in the Bluebook app or from the PDF, then use the answer sheet here." : "A full length official test, from the PDF." };
}
function findNumbered(paper, slug) {
  const cfg = PPQ[paper.id];
  if (!cfg?.numbered) return null;
  for (const g of cfg.groups) for (let n = 1; n <= g.count; n++) { const e = numberedEntry(paper, cfg, g, n); if (e.slug === slug) return e; }
  return null;
}

function Numbered({ paper, cfg, onOpenPaper }) {
  return (
    <section className="ppq" id="rp-ppq">
      <div className="rp-grouphead"><h2>Practice tests</h2><p className="small muted">{cfg.board}. {cfg.note}</p></div>
      {cfg.groups.map((g) => (
        <div key={g.name} className="ppq-group">
          {cfg.groups.length > 1 && <b>{g.name}</b>}
          <div className="test-grid">
            {Array.from({ length: g.count }, (_, i) => i + 1).map((n) => <PaperCard key={n} onOpen={onOpenPaper} entry={numberedEntry(paper, cfg, g, n)} />)}
          </div>
        </div>
      ))}
    </section>
  );
}

/* ---------- one paper's page ---------- */

// The paper on the left, and on the right the clock, the mark scheme and the answer sheet.
function PaperPage({ entry, pdf, onPdf, onClearPdf, onStart, onBack, paper }) {
  const fileRef = useRef(null);
  const [mins, setMins] = useState(entry.minutes || 60);
  const [left, setLeft] = useState((entry.minutes || 60) * 60);
  const [running, setRunning] = useState(false);
  const [over, setOver] = useState(false);
  const [tab, setTab] = useState("paper"); // the question paper or its mark scheme

  useEffect(() => {
    if (!running) return undefined;
    const t = setInterval(() => setLeft((n) => { if (n <= 1) { setRunning(false); setOver(true); return 0; } return n - 1; }), 1000);
    return () => clearInterval(t);
  }, [running]);

  const changeMins = (v) => { const m = Math.max(1, Math.min(300, Number(v) || 1)); setMins(m); if (!running) { setLeft(m * 60); setOver(false); } };
  const reset = () => { setRunning(false); setOver(false); setLeft(mins * 60); };

  return (
    <div className="page wide fade paper-page">
      <nav className="rp-crumbs small pp-crumbs" aria-label="Breadcrumb">
        <button className="btn ghost small pp-back" onClick={onBack}>&lsaquo; Back to {paper.name}</button>
        <span className="rp-trail"><button className="ti-linkbtn" onClick={onBack}>{paper.name}</button><span aria-hidden="true">/</span><b>{entry.title}</b></span>
      </nav>

      <div className="pp-layout">
        <section className="card pp-doc" aria-label="The paper">
          {entry.pdfUrl ? (
            <>
              <div className="pp-docbar small">
                <div className="seg tight" role="tablist" aria-label="Paper or mark scheme">
                  <button role="tab" aria-selected={tab === "paper"} className={tab === "paper" ? "on" : ""} onClick={() => setTab("paper")}>Question paper</button>
                  <button role="tab" aria-selected={tab === "mark"} className={tab === "mark" ? "on" : ""} onClick={() => setTab("mark")}>Mark scheme</button>
                </div>
                <span className="muted">{tab === "mark" ? "Check your work after you finish" : "Write on it with the pen"}</span>
              </div>
              <PdfStudio key={tab} url={tab === "mark" ? entry.markUrl : entry.pdfUrl} paperKey={`${entry.ownId}-${tab}`} title={`${entry.title}${tab === "mark" ? " mark scheme" : ""}`} />
            </>
          ) : pdf ? (
            <>
              <div className="pp-docbar small"><b>{pdf.name}</b><button className="ti-linkbtn" onClick={onClearPdf}>Remove</button></div>
              <iframe title={entry.title} src={pdf.url} />
            </>
          ) : (
            <div className="pp-drop">
              <Tile id={entry.tile} />
              <h2>{entry.title}</h2>
              <p className="muted">{entry.subtitle}</p>
              <p className="small">Find the paper, download it, then add the PDF here. It opens in this window next to the clock and stays in your browser.</p>
              <div className="row">
                <a className="btn cta" href={entry.links.paper} target="_blank" rel="noopener noreferrer">Find the question paper</a>
                <button className="btn ghost" onClick={() => fileRef.current?.click()}>Add your PDF</button>
              </div>
              <input ref={fileRef} type="file" accept="application/pdf,.pdf" hidden onChange={(e) => { onPdf(e.target.files?.[0]); e.target.value = ""; }} />
            </div>
          )}
        </section>

        <aside className="pp-side" aria-label="Paper tools">
          <div className="card card-pad pp-head">
            <Tile id={entry.tile} />
            <div>
              <h1>{entry.title}</h1>
              <p className="muted">{entry.subtitle}</p>
              <div className="rp-tags">
                {entry.code && <span className="rp-tag">Exam code {entry.code}</span>}
                {entry.minutes > 0 && <span className="rp-tag">{entry.minutes} mins</span>}
                {entry.questions > 0 && <span className="rp-tag">{entry.questions} questions</span>}
              </div>
            </div>
          </div>

          <div className="card card-pad pp-timer">
            <div className="pp-clock" aria-live="off">{clock(left)}</div>
            {over && <div className="small pp-over">Time is up. Stop writing.</div>}
            <div className="row pp-timerbtns">
              {!running
                ? <button className="btn cta pp-start" onClick={() => { if (left <= 0) reset(); setRunning(true); setOver(false); }}>{left === mins * 60 || left <= 0 ? "Start timer" : "Resume"}</button>
                : <button className="btn pp-start" onClick={() => setRunning(false)}>Pause</button>}
              <button className="btn ghost" onClick={reset}>Reset</button>
            </div>
            {entry.minutesEditable !== false && (
              <label className="pp-mins small muted">Minutes <input type="number" min="1" max="300" value={mins} onChange={(e) => changeMins(e.target.value)} aria-label="Minutes for the timer" /></label>
            )}
          </div>

          {entry.pdfUrl && (
            <div className="card pp-links">
              <button className="pp-link" onClick={() => setTab("mark")}><span>Mark scheme</span><i aria-hidden="true">&rsaquo;</i></button>
              <a className="pp-link" href={entry.pdfUrl} target="_blank" rel="noopener noreferrer"><span>View PDF in browser</span><i aria-hidden="true">&rsaquo;</i></a>
              <a className="pp-link" href={entry.markUrl} target="_blank" rel="noopener noreferrer"><span>Mark scheme PDF</span><i aria-hidden="true">&rsaquo;</i></a>
            </div>
          )}
          {entry.links.paper && <div className="card pp-links">
            <a className="pp-link" href={entry.links.paper} target="_blank" rel="noopener noreferrer"><span>Question paper</span><i aria-hidden="true">&rsaquo;</i></a>
            <a className="pp-link" href={entry.links.mark} target="_blank" rel="noopener noreferrer"><span>{entry.links.report ? "Mark scheme" : "Answers and scoring"}</span><i aria-hidden="true">&rsaquo;</i></a>
            {entry.links.report && <a className="pp-link" href={entry.links.report} target="_blank" rel="noopener noreferrer"><span>Examiner's report</span><i aria-hidden="true">&rsaquo;</i></a>}
          </div>}

          {entry.sections?.length > 0 && (
            <div className="card card-pad pp-sheet">
              <b>Answer sheet</b>
              <p className="small muted">{entry.ownId ? "Sit one module at a time on the answer sheet. It is marked the moment you submit, and you can go through every question with its explanation." : "Fill in your answers as you go, then paste the key to be marked and go through every question."}</p>
              {entry.sections.map((s) => <button key={s.id} className="btn ghost small" onClick={() => onStart(entry.ownId ? ownPaper(entry.ownId) : paper, s)}>{s.name}, {s.questions} questions</button>)}
            </div>
          )}

          <p className="small muted pp-note">{entry.note}</p>
          {entry.hubs && <Hubs hubs={entry.hubs} />}
        </aside>
      </div>
    </div>
  );
}

/* ---------- sitting the paper ---------- */

function Sit({ paper, section, sheet, pdf, onAnswer, onSubmit, onLeave }) {
  const total = section.minutes * 60;
  const [now, setNow] = useState(Date.now());
  const left = total - Math.floor((now - sheet.startedAt) / 1000);
  const text = paper.letters === "text";
  const typed = (n) => text || (section.textFrom != null && n >= section.textFrom);
  const options = useMemo(() => lettersOf(section.choices), [section.choices]);
  const answers = sheet.answers || {};
  const answered = Object.values(answers).filter((v) => String(v ?? "").trim() !== "").length;
  const done = useRef(false);

  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  useEffect(() => { if (left <= 0 && !done.current) { done.current = true; onSubmit(); } }, [left]); // eslint-disable-line react-hooks/exhaustive-deps

  const set = (n, v) => onAnswer({ ...answers, [n]: v });
  const act = paper.letters === "act";
  // the ACT prints F G H J on even questions, so show what the paper shows
  const labelFor = (n, k) => (act && n % 2 === 1 ? "FGHJK"[k] : "ABCDE"[k]);

  return (
    <div className="page fade rp-sit">
      <PageHead title={paper.name} sub={`${section.name}. Mark your answers here as you work through the paper from the publisher.`} />
      <div className="card card-pad rp-bar">
        <div><span className="small muted">Time left</span><b className={"rp-clock" + (left < 300 ? " low" : "")}>{clock(left)}</b></div>
        <div><span className="small muted">Answered</span><b>{answered} of {section.questions}</b></div>
        <div className="row">
          <button className="btn ghost small" onClick={() => { if (window.confirm("Stop and throw this sheet away?")) onLeave(); }}>Stop</button>
          <button className="btn cta small" onClick={() => { if (answered === section.questions || window.confirm(`${section.questions - answered} questions are blank. Submit anyway?`)) onSubmit(); }}>Submit sheet</button>
        </div>
      </div>
      {section.note && <p className="small muted">{section.note}</p>}

      <div className={pdf ? "rp-split" : ""}>
      {pdf && (
        <div className="card rp-pdf">
          {pdf.own ? <PdfStudio url={pdf.url} paperKey={pdf.own} title={pdf.name} /> : <iframe title="Your paper" src={pdf.url} />}
          <a className="small" href={pdf.url} target="_blank" rel="noopener noreferrer">Open the paper in its own tab</a>
        </div>
      )}
      <div className="card card-pad">
        <div className="rp-sheet" role="group" aria-label="Answer sheet">
          {Array.from({ length: section.questions }, (_, n) => (
            <div key={n} className={"rp-row" + (String(answers[n] ?? "").trim() !== "" ? " done" : "")}>
              <span className="rp-num">{n + 1}</span>
              {typed(n) ? (
                <input type="text" inputMode={section.textFrom != null ? "decimal" : undefined} value={answers[n] || ""} onChange={(e) => set(n, e.target.value)} aria-label={`Answer ${n + 1}`} autoComplete="off" autoCapitalize="none" spellCheck={false} />
              ) : (
                <div className="rp-bubbles">
                  {options.map((o, k) => (
                    <button key={o} type="button" className={"rp-bubble" + (answers[n] === o ? " on" : "")} aria-pressed={answers[n] === o} aria-label={`Question ${n + 1}, ${labelFor(n, k)}`}
                      onClick={() => set(n, answers[n] === o ? "" : o)}>{labelFor(n, k)}</button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

/* ---------- the key ---------- */

function KeyStep({ paper, section, sheet, onBack, onMarked, onDiscard }) {
  const [raw, setRaw] = useState("");
  const letters = paper.letters || "mc";
  const key = useMemo(() => parseKey(raw, section.questions, { choices: section.choices, letters }), [raw, section, letters]);
  const found = key.filter((k) => k !== null).length;

  function mark() {
    const rows = markSheet(sheet.answers || {}, key, { letters });
    const keyed = rows.filter((r) => !r.unkeyed && key[r.n] !== null);
    const right = keyed.filter((r) => r.status === "right").length;
    onMarked({ rows: keyed, right, total: keyed.length, minutes: Math.round((sheet.usedSeconds ?? section.minutes * 60) / 60), key });
  }

  return (
    <div className="page fade">
      <PageHead title="Mark your paper" sub={`${paper.name}, ${section.name}. Paste the answer key from the publisher's scoring guide.`} />
      <div className="card card-pad stack">
        <p className="small">
          Open the official answer key or scoring guide, then paste the answers for this section below. Any of these layouts works:
          a run of letters like <code>BCDAB</code>, numbered pairs like <code>1 B  2 C</code>, or one answer a line{paper.letters === "text" ? " (write alternatives with a slash, like colour / color)" : ""}.
        </p>
        <textarea rows={7} value={raw} onChange={(e) => setRaw(e.target.value)} placeholder="Paste the key here" aria-label="Answer key" />
        <div className="spread">
          <span className={"small " + (found === section.questions ? "" : "muted")}>Read {found} of {section.questions} answers{found > 0 && found < section.questions ? ". Only those will be marked." : ""}</span>
          <div className="row">
            <button className="btn ghost small" onClick={onBack}>Back to the sheet</button>
            <button className="btn cta" onClick={mark} disabled={found === 0}>Mark my paper</button>
          </div>
        </div>
        <button className="ti-linkbtn" onClick={() => { if (window.confirm("Throw this sheet away without marking it?")) onDiscard(); }}>Discard this sheet</button>
      </div>
    </div>
  );
}

/* ---------- the result ---------- */

function Result({ paper, section, result, onSave, onDone, onAgain }) {
  const [saved, setSaved] = useState(false);
  const { right, total, rows } = result;
  const missed = rows.filter((r) => r.status === "wrong").length;
  const blank = rows.filter((r) => r.status === "blank").length;
  const pct = total ? Math.round((right / total) * 100) : 0;
  // a scaled estimate only means something when the whole section was keyed
  const est = paper.test && H()?.estimate && total === section.questions ? H().estimate(paper.test, right, total) : null;
  const items = rows.map((r) => r.item || { n: r.n, status: r.status, yours: r.yours, correct: r.correct, skill: section.name });

  useEffect(() => { if (!saved) { onSave({ right, total, minutes: result.minutes }); setSaved(true); } }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="page fade">
      <PageHead title={`${paper.name}, ${section.name}`} sub={`${right} of ${total} correct`} />
      <div className="stack">
        <div className="card card-pad score-card">
          <div className="score-main">
            <span className="score-value">{pct}%</span>
            <span className="score-unit">{right} right, {missed} wrong{blank ? `, ${blank} blank` : ""}</span>
          </div>
          {est && (
            <div className="score-side">
              <div className="spread small"><span className="muted">Estimated scaled score for this section alone</span><b>{est.scaled}</b></div>
              <p className="small muted" style={{ margin: "8px 0 0" }}>{est.unit}. A real score combines every section and uses the publisher's own conversion table, so use the one in the scoring guide for the true number.</p>
            </div>
          )}
        </div>

        {total < section.questions && <p className="small muted">The key you pasted covered {total} of {section.questions} questions, so only those were marked and there is no scaled estimate.</p>}

        <Review items={items} test={paper.name} section={section.name} explainable={!paper.own} />

        <div className="row">
          <button className="btn ghost" onClick={onAgain}>Sit it again</button>
          <button className="btn cta" onClick={onDone}>Back to real papers</button>
        </div>
      </div>
    </div>
  );
}
