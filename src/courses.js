// Test history, streaks and the days things happened on. The course catalogue is in catalog.js.

import { SAT } from "./catalog.js";

// Test results only come from the SAT, so that is the one course history can belong to.
export const COURSES = [SAT];

/** A date as the student's own calendar day, yyyy-mm-dd. toISOString would use UTC and shift the day. */
export const dayOf = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export const HISTORY_KEY = "testiddle-real-history";

/** Every sat test, paper or computer, belongs to the SAT course. */
export const courseOf = () => SAT;

export const historyOf = (history, course) => history.filter((h) => courseOf(h.paper).id === course.id);

const pct = (h) => Math.round((h.right / Math.max(1, h.total)) * 100);

/** What a course's results add up to: sittings, the average mark and the best one. */
export function summary(history, course) {
  const list = course ? historyOf(history, course) : history;
  if (!list.length) return { sittings: 0, average: null, best: null, minutes: 0 };
  return { sittings: list.length, average: Math.round(list.reduce((n, h) => n + pct(h), 0) / list.length), best: Math.max(...list.map(pct)), minutes: list.reduce((n, h) => n + (h.minutes || 0), 0) };
}

/** Days with at least one sitting, as yyyy-mm-dd, and the run of days in a row up to today. */
export function streak(history, today = new Date()) {
  const days = new Set(history.map((h) => h.on));
  const fmt = dayOf;
  let n = 0;
  const d = new Date(today);
  if (!days.has(fmt(d))) d.setDate(d.getDate() - 1); // not having sat yet today does not break the run
  while (days.has(fmt(d))) { n += 1; d.setDate(d.getDate() - 1); }
  return { days, run: n, fmt };
}

export const RANGES = [["recent", "Today & Yesterday", 1], ["week", "Week", 6], ["month", "Month", 29], ["year", "Year", 364], ["all", "All time", Infinity]];

/** The results from the last few days, by calendar day: 1 means today and yesterday. */
export function inRange(history, range, today = new Date()) {
  const days = (RANGES.find((r) => r[0] === range) || RANGES[4])[2];
  if (days === Infinity) return history;
  const from = new Date(today.getFullYear(), today.getMonth(), today.getDate() - days);
  const first = dayOf(from);
  return history.filter((h) => h.on >= first);
}

/** Minutes of study in each hour of the day, from when each result was saved. */
export function byHour(history) {
  const out = Array(24).fill(0);
  history.forEach((h) => { const t = new Date(h.id); if (!Number.isNaN(t.getTime())) out[t.getHours()] += h.minutes || 0; });
  return out;
}

/** What kind of sitting a result was: a module of one subject, or a full test. */
export const kindOf = (h) => (/^reading/i.test(h.section) ? "Reading and Writing" : /^math/i.test(h.section) ? "Math" : "Full test");

/** The longest run of days in a row anywhere in the results. */
export function longestRun(history) {
  const days = [...new Set(history.map((h) => h.on))].sort();
  let best = 0, run = 0, prev = null;
  for (const d of days) {
    const t = new Date(d + "T12:00:00");
    run = prev && Math.round((t - prev) / 86400000) === 1 ? run + 1 : 1;
    prev = t; best = Math.max(best, run);
  }
  return best;
}
