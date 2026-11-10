// The question bank for quizzes: every question from the five computer tests, one list.
// Fetched the first time a quiz is made, then kept.

import { isRight } from "./digitalsat.js";

export const TESTS = 5;
export const QUESTION_COUNT = 735; // 5 tests x (3 reading and writing modules of 27, 3 maths modules of 22)

let cache = null;

/** Flattens the test files into one list of questions with an id, a subject and a skill. */
export function flatten(files) {
  const out = [];
  files.forEach((file, i) => {
    Object.entries(file?.modules || {}).forEach(([mod, list]) => {
      (list || []).forEach((q, n) => out.push({ ...q, id: `d${file.number ?? i + 1}-${mod}-${n + 1}`, subject: mod.startsWith("rw") ? "Reading and Writing" : "Math" }));
    });
  });
  return out;
}

export async function loadBank() {
  if (cache) return cache;
  const base = import.meta.env.BASE_URL;
  const files = await Promise.all(Array.from({ length: TESTS }, (_, i) => fetch(`${base}papers/sat-digital-${i + 1}.json`).then((r) => { if (!r.ok) throw new Error("missing"); return r.json(); })));
  cache = flatten(files);
  return cache;
}

/** The skills in the bank, by subject, with how many questions each has. */
export function skillsOf(bank) {
  const m = new Map();
  bank.forEach((q) => { const k = `${q.subject}|${q.skill}`; m.set(k, (m.get(k) || 0) + 1); });
  return [...m].map(([k, count]) => { const [subject, skill] = k.split("|"); return { subject, skill, count }; })
    .sort((a, b) => a.subject.localeCompare(b.subject) || a.skill.localeCompare(b.skill));
}

/**
 * Picks a quiz. "learn" favours questions not yet answered, "fix" favours ones answered wrong,
 * "balanced" mixes both with some that were right. `done` maps question id to its last result.
 */
export function pickQuiz(bank, { skills, count, mode }, done = {}, random = Math.random) {
  const pool = bank.filter((q) => skills.has(`${q.subject}|${q.skill}`));
  const shuffle = (a) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  const fresh = shuffle(pool.filter((q) => !(q.id in done)));
  const wrong = shuffle(pool.filter((q) => done[q.id] === false));
  const right = shuffle(pool.filter((q) => done[q.id] === true));
  const order = mode === "fix" ? [wrong, fresh, right] : mode === "balanced" ? interleave([fresh, wrong, right]) : [fresh, wrong, right];
  return (mode === "balanced" ? order : order.flat()).slice(0, count);
}
function interleave(lists) {
  const out = [], rest = lists.map((l) => [...l]);
  while (rest.some((l) => l.length)) rest.forEach((l) => { if (l.length) out.push(l.shift()); });
  return out;
}

/** The last result for each question, from the quiz log. */
export const doneFrom = (log) => { const d = {}; log.forEach((e) => { d[e.id] = e.ok; }); return d; };

export { isRight };
