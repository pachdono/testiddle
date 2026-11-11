// The IGCSE courses that have notes, quizzes and flashcards so far. Each is loaded only when its
// course is opened, so adding a subject is one more file and one more line here.

const LOADERS = {
  biology: () => import("./biology.js"),
  chemistry: () => import("./chemistry.js"),
  physics: () => import("./physics.js"),
  maths: () => import("./maths.js"),
  addmaths: () => import("./addmaths.js"),
};

export const PACK_IDS = Object.keys(LOADERS);

export const hasPack = (subjectId) => subjectId in LOADERS;

/** The same shuffle every time for the same question, so the right answer is not always in one place. */
function mix(id, choices, answer) {
  let h = 0; for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const order = choices.map((c, i) => i);
  const next = () => { h = (h + 0x6d2b79f5) >>> 0; let r = Math.imul(h ^ (h >>> 15), 1 | h); r ^= r + Math.imul(r ^ (r >>> 7), 61 | r); return ((r ^ (r >>> 14)) >>> 0) / 4294967296; };
  for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(next() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  return { choices: order.map((i) => choices[i]), answer: "ABCD"[order.indexOf("ABCD".indexOf(answer))] };
}

/** Turns a pack into the same topic and subtopic shape the SAT notes use. */
export function shape(pack) {
  let n = 0;
  const topics = pack.topics.map((t) => ({ ...t, subject: pack.name }));
  const subs = topics.flatMap((t, i) => t.subs.map((s, j) => {
    const id = `${pack.id}-${t.id}-${j + 1}`;
    return {
      ...s, id, code: `${i + 1}.${j + 1}`, topic: t, topicNo: i + 1, n: n++,
      questions: (s.questions || []).map(([q, choices, answer, why], k) => ({ id: `${id}-q${k + 1}`, kind: "mc", q, ...mix(`${id}-q${k + 1}`, choices, answer), why, skill: s.skill })),
    };
  }));
  return { ...pack, topics, subs };
}

const cache = {};
export async function loadPack(subjectId) {
  if (!LOADERS[subjectId]) return null;
  if (!cache[subjectId]) cache[subjectId] = shape((await LOADERS[subjectId]()).default);
  return cache[subjectId];
}
