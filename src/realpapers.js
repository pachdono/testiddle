// The real papers: free, official practice tests and past papers, listed with where
// to get them. The papers themselves belong to their publishers, so they are not
// copied here. Instead each one opens at its official page, and the ones with an
// answer key can be sat here against the clock, on an answer sheet, then marked
// against the key from the publisher's own scoring guide.

export const REAL_GROUPS = [
  { id: "admissions", name: "Admissions tests", sub: "Free official practice tests from the people who write the real thing." },
  { id: "english", name: "English tests", sub: "Official sample and practice tests." },
  { id: "boards", name: "School exam boards", sub: "Past papers and mark schemes, straight from the boards." },
];

// choices: how many lettered options a question has. letters: "act" for the
// ACT's A B C D, F G H J, and "text" for answers that are written, not picked.
export const REAL_PAPERS = [
  {
    id: "sat", group: "admissions", test: "sat", name: "Official Digital SAT practice tests", org: "College Board",
    blurb: "Full length digital SAT practice tests, free, with answers and explanations. Also in the Bluebook app, which is how the real test is taken.",
    url: "https://satsuite.collegeboard.org/sat/practice-preparation/practice-tests",
    sections: [
      { id: "rw", name: "Reading and Writing", questions: 54, minutes: 64, choices: 4 },
      { id: "math", name: "Math", questions: 44, minutes: 70, choices: 4, note: "Student produced responses are in the real test; enter what you worked out as a letter only for the multiple choice ones, and leave the rest blank." },
    ],
  },
  {
    id: "psat", group: "admissions", test: "psat", name: "Official PSAT/NMSQT practice tests", org: "College Board",
    blurb: "Free official practice for the PSAT/NMSQT, in the same digital format as the SAT.",
    url: "https://satsuite.collegeboard.org/psat-nmsqt",
    sections: [
      { id: "rw", name: "Reading and Writing", questions: 54, minutes: 64, choices: 4 },
      { id: "math", name: "Math", questions: 44, minutes: 70, choices: 4 },
    ],
  },
  {
    id: "act", group: "admissions", test: "act", name: "Official ACT practice test", org: "ACT",
    blurb: "A full free ACT practice test with the answer key and the score conversion table. The ACT key uses A B C D for odd questions and F G H J for even ones, and this sheet reads either.",
    url: "https://www.act.org/content/act/en/products-and-services/the-act/test-preparation.html",
    letters: "act",
    sections: [
      { id: "english", name: "English", questions: 50, minutes: 35, choices: 4 },
      { id: "math", name: "Mathematics", questions: 45, minutes: 50, choices: 5 },
      { id: "reading", name: "Reading", questions: 36, minutes: 40, choices: 4 },
      { id: "science", name: "Science", questions: 40, minutes: 40, choices: 4 },
    ],
  },
  {
    id: "ssat", group: "admissions", test: "ssat", name: "Official SSAT practice test", org: "SSAT",
    blurb: "The SSAT's own practice material, with a full length test and the answers. Choose the Upper Level for grades 8 to 11.",
    url: "https://www.ssat.org/",
    sections: [
      { id: "quant", name: "Quantitative (both sections)", questions: 50, minutes: 60, choices: 5 },
      { id: "reading", name: "Reading", questions: 40, minutes: 40, choices: 5 },
      { id: "verbal", name: "Verbal", questions: 60, minutes: 30, choices: 5 },
    ],
  },
  {
    id: "isee", group: "admissions", test: "isee", name: "Official ISEE practice material", org: "ERB",
    blurb: "Official ISEE sample questions and practice tests from the Educational Records Bureau. Pick the level you are applying at.",
    url: "https://www.erblearn.org/",
    sections: [
      { id: "verbal", name: "Verbal Reasoning", questions: 34, minutes: 20, choices: 4 },
      { id: "quant", name: "Quantitative Reasoning", questions: 38, minutes: 35, choices: 4 },
      { id: "reading", name: "Reading Comprehension", questions: 36, minutes: 35, choices: 4 },
      { id: "math", name: "Mathematics Achievement", questions: 47, minutes: 40, choices: 4 },
    ],
  },
  {
    id: "gre", group: "admissions", test: "gre", name: "Official GRE POWERPREP", org: "ETS",
    blurb: "ETS's free official GRE practice tests, the same software as the real test, with scores and answers.",
    url: "https://www.ets.org/gre/test-takers/general-test/prepare.html",
    sections: [
      { id: "verbal", name: "Verbal Reasoning", questions: 27, minutes: 41, choices: 5 },
      { id: "quant", name: "Quantitative Reasoning", questions: 27, minutes: 47, choices: 5 },
    ],
  },
  {
    id: "gmat", group: "admissions", test: "gmat", name: "Official GMAT Starter Kit", org: "GMAC",
    blurb: "The free official GMAT Focus practice exams from mba.com, with the question review that shows the right answers.",
    url: "https://www.mba.com/exam-prep",
    sections: [
      { id: "quant", name: "Quantitative Reasoning", questions: 21, minutes: 45, choices: 5 },
      { id: "verbal", name: "Verbal Reasoning", questions: 23, minutes: 45, choices: 5 },
      { id: "data", name: "Data Insights", questions: 20, minutes: 45, choices: 5 },
    ],
  },
  {
    id: "ielts", group: "english", test: "ielts", name: "Official IELTS sample tests", org: "IELTS partners",
    blurb: "Official Listening, Reading, Writing and Speaking samples with answers. Reading and Listening answers are written, not picked, so the sheet takes typed answers.",
    url: "https://ielts.org/take-a-test/preparation-resources/sample-test-questions",
    letters: "text",
    sections: [
      { id: "listening", name: "Listening", questions: 40, minutes: 30, choices: 0 },
      { id: "reading", name: "Reading", questions: 40, minutes: 60, choices: 0 },
    ],
  },
  {
    id: "toefl", group: "english", test: "toefl", name: "Official TOEFL iBT free practice", org: "ETS",
    blurb: "ETS's free full practice test and sample questions for the TOEFL iBT.",
    url: "https://www.ets.org/toefl/test-takers/ibt/prepare.html",
    sections: [
      { id: "reading", name: "Reading", questions: 20, minutes: 35, choices: 4 },
      { id: "listening", name: "Listening", questions: 28, minutes: 36, choices: 4 },
    ],
  },
  {
    id: "det", group: "english", name: "Official Duolingo English Test practice", org: "Duolingo",
    blurb: "Duolingo's own practice test. It is adaptive and scored by the app, so it has no answer key to mark here. Take it there, then use Testiddle's Duolingo practice for the skills.",
    url: "https://englishtest.duolingo.com/",
    sections: [],
  },
  {
    id: "igcse-mcq", group: "boards", name: "Cambridge IGCSE past papers", org: "Cambridge International",
    blurb: "Past papers and mark schemes for Cambridge IGCSE. Paper 1 in the sciences is multiple choice with a key in the mark scheme, so you can sit it here.",
    url: "https://www.cambridgeinternational.org/",
    sections: [
      { id: "p1", name: "Paper 1, multiple choice (sciences)", questions: 40, minutes: 45, choices: 4 },
    ],
  },
  {
    id: "edexcel", group: "boards", name: "Pearson Edexcel past papers", org: "Pearson Edexcel",
    blurb: "Past papers, mark schemes and examiner reports for Edexcel GCSE, IGCSE and A Level. Written papers, so you mark these yourself against the mark scheme.",
    url: "https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html",
    sections: [],
  },
  {
    id: "aqa", group: "boards", name: "AQA past papers", org: "AQA",
    blurb: "Every AQA GCSE and A Level past paper, with mark schemes.",
    url: "https://www.aqa.org.uk/find-past-papers-and-mark-schemes",
    sections: [],
  },
  {
    id: "ocr", group: "boards", name: "OCR past papers", org: "OCR",
    blurb: "OCR GCSE and A Level past papers and mark schemes.",
    url: "https://www.ocr.org.uk/qualifications/past-paper-finder/",
    sections: [],
  },
];

/* ---------- the answer key ---------- */

// The ACT's key alternates A B C D with F G H J, and its five choice maths adds E and K.
const ACT_MAP = { F: "A", G: "B", H: "C", J: "D", K: "E" };

export function normaliseLetter(ch, letters) {
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
    let ok = false;
    if (k === null || k === undefined) return { n, status: "blank", yours: given, correct: "", unkeyed: true };
    if (Array.isArray(k)) ok = k.includes(norm(given));
    else ok = normaliseLetter(given, letters) === k;
    return { n, status: ok ? "right" : "wrong", yours: given, correct: Array.isArray(k) ? k[0] || "" : k };
  });
}
