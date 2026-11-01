// A running record of answers, kept on this device: when, which topic, what
// kind of question, right or wrong. The report, the study time advice and the
// harder questions all read from it, so none of them need anything new asked
// of the student. Only the last 3000 answers are kept.
import { load, save } from "./store.js";

const LOG_KEY = "dwiddle-log";
const MAX = 3000;

const readLog = () => {
  const l = load(LOG_KEY, []);
  return Array.isArray(l) ? l : [];
};

// skill, section and test say what a question tested, so the report can spot a
// pattern across topics (for instance, inference questions in a reading section).
export function logAnswer({ id, topic, ok, kind = "mc", t = Date.now(), skill, section, test }) {
  const log = readLog();
  log.push({ t, id: String(id), topic: topic || "", ok: !!ok, kind, ...(skill ? { skill: String(skill).slice(0, 60) } : {}), ...(section ? { section: String(section).slice(0, 60) } : {}), ...(test ? { test: String(test).slice(0, 30) } : {}) });
  save(LOG_KEY, log.length > MAX ? log.slice(-MAX) : log);
  try { dispatchEvent(new Event("dwiddle:log")); } catch { /* not in a browser */ }
}

