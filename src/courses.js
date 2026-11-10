// The two courses. A course is a set of tests sat the same way: the paper tests are
// printed and written on, the computer tests work like the Bluebook app.

export const COURSES = [
  {
    id: "paper-sat", group: "Paper SAT", name: "Paper SAT", tag: "SAT · Printed format", mark: "paper", tint: "#2f6fb0",
    blurb: "Five full length tests in the digital SAT format, printed. Write on the paper, then submit each module to be marked with an explanation for every question.",
    marks: true, count: 5,
  },
  {
    id: "computer-sat", group: "Computer SAT", name: "Computer SAT", tag: "SAT · Adaptive format", mark: "computer", tint: "#2a8c76",
    blurb: "Five tests that work like the Bluebook app: one question at a time, with a second module that is harder or easier depending on how the first went. Includes a calculator, flags and a score estimate.",
    marks: false, count: 5,
  },
];

/** A date as the student's own calendar day, yyyy-mm-dd. toISOString would use UTC and shift the day. */
export const dayOf = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export const HISTORY_KEY = "testiddle-real-history";

/** The course a test title belongs to: "SAT Computer Test 3" is in Computer SAT. */
export const courseOf = (title) => (/computer/i.test(String(title)) ? COURSES[1] : COURSES[0]);

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
