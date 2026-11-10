// The real papers: free, official practice tests and past papers, listed with where
// to get them. The papers themselves belong to their publishers, so they are not
// copied here. Instead each one opens at its official page, and the ones with an
// answer key can be sat here against the clock, on an answer sheet, then marked
// against the key from the publisher's own scoring guide.

// choices: how many lettered options a question has. letters: "act" for the
// ACT's A B C D, F G H J, and "text" for answers that are written, not picked.
export const REAL_PAPERS = [
  {
    id: "sat", group: "admissions", test: "sat", name: "SAT", org: "College Board", card: { full: "Scholastic Assessment Test", scale: "400 to 1600", length: "2 hr 14 min", who: "US undergraduate admissions" },
    blurb: "Full length digital SAT practice tests, free, with answers and explanations. Also in the Bluebook app, which is how the real test is taken.",
    url: "https://satsuite.collegeboard.org/sat/practice-preparation/practice-tests",
    sections: [
      { id: "rw", name: "Reading and Writing", questions: 54, minutes: 64, choices: 4 },
      { id: "math", name: "Math", questions: 44, minutes: 70, choices: 4, note: "Student produced responses are in the real test; enter what you worked out as a letter only for the multiple choice ones, and leave the rest blank." },
    ],
  },
];

/* ---------- the answer key ---------- */

// The ACT's key alternates A B C D with F G H J, and its five choice maths adds E and K.
const ACT_MAP = { F: "A", G: "B", H: "C", J: "D", K: "E" };

function normaliseLetter(ch, letters) {
  const c = String(ch || "").toUpperCase();
  return letters === "act" ? ACT_MAP[c] || c : c;
}

// Lower case, no punctuation except the point inside a number, single spaces.
const norm = (s) => String(s ?? "").toLowerCase()
  .replace(/(\d)?\.(\d)?/g, (m, a, b) => (a && b ? m : (a || "") + (b || "")))
  .replace(/[^a-z0-9. -]/g, "").replace(/\s+/g, " ").trim();

/**
 * Reads an answer key pasted from a scoring guide. It copes with a plain run of
 * letters ("BCDAB..."), numbered pairs ("1 B  2 C", "1. B", "1) B"), or one answer a
 * line, and returns an array of n answers, with null where the key is short.
 */
export function parseKey(text, n, { choices = 4, letters = "mc" } = {}) {
  const raw = String(text || "");
  const out = Array.from({ length: n }, () => null);

  if (letters === "text" || choices === 0) {
    // one answer a line, optionally numbered; alternatives with a slash
    const lines = raw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    let seq = 0;
    for (const l of lines) {
      const m = /^(\d{1,3})\s*[.):\-]?\s+(.+)$/.exec(l);
      const idx = m ? Number(m[1]) - 1 : seq;
      const ans = m ? m[2] : l;
      seq = idx + 1;
      if (idx >= 0 && idx < n) out[idx] = ans.split(/\s*\/\s*|\s+or\s+/i).map(norm).filter(Boolean);
    }
    return out;
  }

  const valid = new RegExp(`^[A-${String.fromCharCode(64 + Math.max(choices, 2))}]$`);
  const up = raw.toUpperCase();
  const keyLetter = (c) => normaliseLetter(c, letters);
  const allowed = (c) => valid.test(keyLetter(c));
  // letters a paper may use: A to E, plus F to K for the ACT's alternate lines
  const pool = letters === "act" ? "A-HJK" : "A-E";

  const pairs = [...up.matchAll(new RegExp(`(\\d{1,3})\\s*[.):\\-=]?\\s*([${pool}])(?![A-Z])`, "g"))];
  if (pairs.length >= Math.max(3, Math.floor(n * 0.5))) {
    for (const [, num, ch] of pairs) {
      const i = Number(num) - 1;
      if (i >= 0 && i < n && out[i] === null && allowed(ch)) out[i] = keyLetter(ch);
    }
    return out;
  }
  const seq = [...up.replace(new RegExp(`[^${pool}]`, "g"), "")].map(keyLetter).filter(allowed);
  seq.slice(0, n).forEach((c, i) => { out[i] = c; });
  return out;
}

/** Marks answers against a key. Blank answers are their own status, not wrong. */
export function markSheet(answers, key, { letters = "mc" } = {}) {
  return key.map((k, n) => {
    const given = answers[n];
    const blank = given === undefined || given === null || String(given).trim() === "";
    if (blank) return { n, status: "blank", yours: "", correct: Array.isArray(k) ? k[0] || "" : k || "" };
    let ok;
    if (k === null || k === undefined) return { n, status: "blank", yours: given, correct: "", unkeyed: true };
    if (Array.isArray(k)) ok = k.includes(norm(given));
    else ok = normaliseLetter(given, letters) === k;
    return { n, status: ok ? "right" : "wrong", yours: given, correct: Array.isArray(k) ? k[0] || "" : k };
  });
}

/* ---------- Testiddle's own printed tests ---------- */

// Four modules, the same shape as the digital SAT: two of Reading and Writing, two of
// Math. In Math the last seven questions of each module are typed, not picked.
export const OWN_SECTIONS = [
  { id: "rw1", name: "Reading and Writing, Module 1", questions: 27, minutes: 32, choices: 4 },
  { id: "rw2", name: "Reading and Writing, Module 2", questions: 27, minutes: 32, choices: 4 },
  { id: "math1", name: "Math, Module 1", questions: 22, minutes: 35, choices: 4, textFrom: 16, note: "Questions 17 to 22 are student-produced responses: type the number." },
  { id: "math2", name: "Math, Module 2", questions: 22, minutes: 35, choices: 4, textFrom: 16, note: "Questions 17 to 22 are student-produced responses: type the number." },
];

/** The paper behind an id like "sat-paper-3", or null when the id is not one of ours. */
export function ownPaper(id) {
  const m = /^(sat-paper)-(\d+)$/.exec(String(id || ""));
  if (!m) return null;
  return { id, own: { kind: m[1], n: Number(m[2]) }, group: "admissions", name: `SAT Paper Test ${m[2]}`, org: "Testiddle", card: {}, sections: OWN_SECTIONS };
}

// A typed answer is a number, written as a decimal or a fraction, with a minus sign if it needs one.
const toNumber = (s) => {
  const t = String(s ?? "").trim().replace(/[\u2212\u2013]/g, "-").replace(/\s+/g, "");
  const f = /^(-?\d+)\/(\d+)$/.exec(t);
  if (f) return Number(f[2]) ? Number(f[1]) / Number(f[2]) : NaN;
  return /^-?(\d+\.?\d*|\.\d+)$/.test(t) ? Number(t) : NaN;
};

/** Marks one module of an own test from its stored key, and builds the review items. */
export function markOwn(answers, mod) {
  return mod.questions.map((q, n) => {
    const given = answers[n];
    const blank = given === undefined || given === null || String(given).trim() === "";
    const spr = q.kind === "spr";
    const L = "ABCD";
    const correct = spr ? q.answer : L.indexOf(q.answer);
    const yours = blank ? "" : spr ? String(given).trim() : L.indexOf(String(given).toUpperCase());
    let ok = false;
    if (!blank) ok = spr ? Math.abs(toNumber(given) - toNumber(q.answer)) < 0.0011 : yours === correct;
    const status = blank ? "blank" : ok ? "right" : "wrong";
    const see = q.fig ? " Look at the figure or table in the paper." : "";
    return {
      n, status, yours, correct, item: {
        n, status, skill: q.skill, passage: q.passage, q: q.q + see, choices: q.choices, yours, correct, why: q.why,
      },
    };
  });
}
