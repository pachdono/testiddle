// The IGCSE courses that have notes, quizzes and flashcards so far. Each is loaded only when its
// course is opened, so adding a subject is one more file and one more line here.

const LOADERS = {
  biology: () => import("./biology.js"),
  chemistry: () => import("./chemistry.js"),
  physics: () => import("./physics.js"),
  maths: () => import("./maths.js"),
  addmaths: () => import("./addmaths.js"),
  "english-lang": () => import("./english-lang.js"),
  "english-lit": () => import("./english-lit.js"),
  esl: () => import("./esl.js"),
  french: () => import("./french.js"),
  german: () => import("./german.js"),
  spanish: () => import("./spanish.js"),
  mandarin: () => import("./mandarin.js"),
  thai: () => import("./thai.js"),
  cs: () => import("./cs.js"),
  ict: () => import("./ict.js"),
  dt: () => import("./dt.js"),
  geography: () => import("./geography.js"),
  history: () => import("./history.js"),
  economics: () => import("./economics.js"),
  business: () => import("./business.js"),
  accounting: () => import("./accounting.js"),
  global: () => import("./global.js"),
  art: () => import("./art.js"),
  music: () => import("./music.js"),
  drama: () => import("./drama.js"),
  pe: () => import("./pe.js"),
};

export const PACK_IDS = Object.keys(LOADERS);

/** Written exam questions live beside each pack, in exam/<id>.js. */
const examFor = (id) => import(`./exam/${id}.js`).catch(() => null);

export const hasPack = (subjectId) => subjectId in LOADERS;

/** The same shuffle every time for the same question, so the right answer is not always in one place. */
function mix(id, choices, answer) {
  let h = 0; for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const order = choices.map((c, i) => i);
  const next = () => { h = (h + 0x6d2b79f5) >>> 0; let r = Math.imul(h ^ (h >>> 15), 1 | h); r ^= r + Math.imul(r ^ (r >>> 7), 61 | r); return ((r ^ (r >>> 14)) >>> 0) / 4294967296; };
  for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(next() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  return { choices: order.map((i) => choices[i]), answer: "ABCD"[order.indexOf("ABCD".indexOf(answer))] };
}

/** Turns written questions for a topic into question objects. marks below the number of points means any that many score. */
function written(packId, topic, list = []) {
  return list.map(([q, points, marks], k) => ({ id: `${packId}-${topic.id}-w${k + 1}`, kind: "written", q, points, marks: marks || points.length, anyOf: Boolean(marks && marks < points.length), skill: topic.name, subject: topic.name }));
}

/** Turns a pack into the same topic and subtopic shape the SAT notes use. */
export function shape(pack, exam = {}) {
  let n = 0;
  const topics = pack.topics.map((t) => ({ ...t, subject: pack.name, written: written(pack.id, t, exam[t.id]) }));
  const subs = topics.flatMap((t, i) => t.subs.map((s, j) => {
    const id = `${pack.id}-${t.id}-${j + 1}`;
    return {
      ...s, id, code: `${i + 1}.${j + 1}`, topic: t, topicNo: i + 1, n: n++, written: t.written,
      questions: (s.questions || []).map(([q, choices, answer, why], k) => ({ id: `${id}-q${k + 1}`, kind: "mc", q, ...mix(`${id}-q${k + 1}`, choices, answer), why, skill: s.skill, subject: t.name })),
    };
  }));
  return { ...pack, topics, subs };
}

const cache = {};
export async function loadPack(subjectId) {
  if (!LOADERS[subjectId]) return null;
  if (!cache[subjectId]) {
    const [mod, exam] = await Promise.all([LOADERS[subjectId](), examFor(subjectId)]);
    cache[subjectId] = shape(mod.default, exam?.default || {});
  }
  return cache[subjectId];
}

/** Lines that only Extended (Supplement) students need start with "[E] ". */
export const EXT = "[E] ";
export const isExt = (line) => line.startsWith(EXT);
export const plain = (line) => (isExt(line) || line.startsWith("[H] ") ? line.slice(EXT.length) : line);

/** The pack for one level: Core leaves out the Extended lines; Extended keeps them, marked. */
/** Leaves out whole topics, such as those only in the separate (Triple) science. */
export function withoutTopics(pack, ids = []) {
  if (!ids.length) return pack;
  return { ...pack, topics: pack.topics.filter((t) => !ids.includes(t.id)), subs: pack.subs.filter((s) => !ids.includes(s.topic.id)) };
}

export function forLevel(pack, level, board = "cie") {
  const map = (f) => ({ ...pack, subs: pack.subs.map((s) => ({ ...s, sections: s.sections.map(([h, lines]) => [h, f(lines)]).filter(([, lines]) => lines.length) })) });
  if (level === "Core") {
    // a subtopic that is all Extended (such as momentum) is left out of Core altogether
    const core = map((lines) => lines.filter((l) => !isExt(l)));
    return { ...core, subs: core.subs.filter((s) => s.sections.length) };
  }
  if (board !== "edexcel") return pack;
  // Edexcel has no Core and Extended: Higher maths keeps the lines marked Higher; the sciences show them plainly.
  return map((lines) => lines.map((l) => (isExt(l) ? (level === "Extended" ? `[H] ${plain(l)}` : plain(l)) : l)));
}

/** Mixes a colour with white, for the soft background of a poster. */
const soften = (hex, amount = 0.86) => {
  const n = parseInt(hex.slice(1), 16), c = [n >> 16, (n >> 8) & 255, n & 255].map((v) => Math.round(v + (255 - v) * amount));
  return `#${c.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
};
const POSES = ["think", "read", "cheer", "wave"];

/** One cheat sheet per topic, made from that topic's notes. */
/** The cheat sheet for a subtopic: the first in a topic keeps the topic's id. */
export const sheetIdOf = (sub) => sub.id.replace(/-1$/, "");

export function sheetsOf(pack, subject) {
  return pack.subs.map((s, i) => {
    const many = pack.subs.filter((x) => x.topic.id === s.topic.id).length > 1;
    const blocks = s.sections.slice(0, 6).map(([h, lines]) => [h, lines.slice(0, 6).map((l) => (isExt(l) ? `${plain(l)} (Extended)` : l.startsWith("[H] ") ? `${plain(l)} (Higher)` : l))]);
    return {
      id: sheetIdOf(s), title: many ? s.skill : s.topic.name, subject: pack.name, icon: subject.icon, desc: s.intro, blocks,
      chips: ["IGCSE", pack.name.toUpperCase()],
      meta: { color: subject.tint, soft: soften(subject.tint), tagline: s.intro, key: s.points.slice(0, 2).join(" "), pose: POSES[i % POSES.length] },
    };
  });
}

// Lines in the notes written as "Term: what it means" become key terms. Labels that only group a
// list (Examples, Uses and so on) are not terms, so they are left out.
const NOT_TERMS = new Set(["example", "examples", "uses", "use", "tips", "note", "notes", "types", "type", "causes", "solutions", "impacts", "benefits", "problems", "factors", "method", "methods", "approach", "time", "transport", "grammar", "vocabulary", "opinions", "directions", "controls", "protection", "prevention", "threats", "input", "output", "balanced", "word equation", "balanced equation", "fixings", "adhesives", "risks", "users", "stores", "wood joints", "finishes", "sound", "imagery", "structure", "proofing", "processes", "fractions", "description", "narrative", "in muscles", "in yeast", "male", "female", "breathing in", "breathing out", "too hot", "too cold", "source area", "destination", "upper course", "middle course", "lower course", "self pollination", "describing", "aims", "weaknesses", "failures", "successes", "successes in the 1920s", "march 1939", "key areas", "skills", "tips", "answering", "the test", "the talk", "discussion", "planning", "craft", "selecting", "writing", "forms", "language", "structure and form"]);

export function termsOf(pack) {
  const seen = new Set(), out = [];
  pack.subs.forEach((s) => s.sections.forEach(([, lines]) => lines.map(plain).forEach((line) => {
    const m = /^([A-Z][^:.]{1,40}): (.{8,})$/.exec(line);
    if (!m) return;
    const term = m[1].trim();
    if (term.split(" ").length > 5 || NOT_TERMS.has(term.toLowerCase()) || seen.has(term.toLowerCase())) return;
    seen.add(term.toLowerCase());
    out.push({ id: `t-${s.id}-${out.length}`, term, def: m[2].replace(/\.$/, ""), subject: s.topic.name });
  })));
  return out;
}
