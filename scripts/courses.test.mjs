import test from "node:test";
import assert from "node:assert/strict";
import { courseOf, historyOf, summary, streak, dayOf, COURSES } from "../src/courses.js";

const row = (paper, right, total, on, minutes = 0) => ({ id: Math.random(), paper, section: "x", right, total, minutes, on });

test("every test, paper or computer, belongs to the one SAT course", () => {
  assert.equal(courseOf("SAT Paper Test 2").id, "sat");
  assert.equal(courseOf("SAT Computer Test 4").id, "sat");
});

test("results are averaged across the SAT course", () => {
  const h = [row("SAT Paper Test 1", 20, 27, "2026-11-09"), row("SAT Paper Test 2", 10, 27, "2026-11-09"), row("SAT Computer Test 1", 50, 100, "2026-11-09")];
  assert.equal(historyOf(h, COURSES[0]).length, 3);
  const s = summary(h, COURSES[0]);
  assert.equal(s.sittings, 3);
  assert.equal(s.best, 74);
  assert.equal(summary([], COURSES[0]).average, null);
});

test("the streak counts days in a row, and today not yet sat does not break it", () => {
  const today = new Date(2026, 10, 10, 9);
  const h = [row("a", 1, 1, "2026-11-09"), row("a", 1, 1, "2026-11-08"), row("a", 1, 1, "2026-11-06")];
  assert.equal(streak(h, today).run, 2);
  assert.equal(streak([...h, row("a", 1, 1, "2026-11-10")], today).run, 3);
  assert.equal(streak([], today).run, 0);
});

test("a day is the student's own calendar day, not UTC", () => {
  assert.equal(dayOf(new Date(2026, 0, 5, 0, 30)), "2026-01-05");
  assert.equal(dayOf(new Date(2026, 11, 31, 23, 59)), "2026-12-31");
});

import { inRange, longestRun, byHour, kindOf } from "../src/courses.js";

test("a range keeps only the recent days", () => {
  const today = new Date(2026, 10, 10, 12);
  const h = [row("a", 1, 1, "2026-11-10"), row("a", 1, 1, "2026-11-09"), row("a", 1, 1, "2026-11-04"), row("a", 1, 1, "2025-01-01")];
  assert.equal(inRange(h, "recent", today).length, 2);
  assert.equal(inRange(h, "week", today).length, 3);
  assert.equal(inRange(h, "all", today).length, 4);
});

test("the longest run, the hours and the kind of sitting", () => {
  assert.equal(longestRun([row("a", 1, 1, "2026-11-01"), row("a", 1, 1, "2026-11-02"), row("a", 1, 1, "2026-11-03"), row("a", 1, 1, "2026-11-09")]), 3);
  assert.equal(longestRun([]), 0);
  const id = new Date(2026, 10, 10, 18, 5).getTime();
  assert.equal(byHour([{ ...row("a", 1, 1, "2026-11-10", 25), id }])[18], 25);
  assert.equal(kindOf({ section: "Math, Module 2" }), "Math");
  assert.equal(kindOf({ section: "Reading and Writing, Module 1" }), "Reading and Writing");
  assert.equal(kindOf({ section: "Full test" }), "Full test");
});

import { streakWith, activity, xpByDay, XP } from "../src/progress.js";

test("a streak freeze covers one missed day, twice at most", () => {
  const today = new Date(2026, 10, 10, 9);
  const d = (s) => ({ on: s });
  assert.equal(streakWith([d("2026-11-10"), d("2026-11-08"), d("2026-11-07")], today).run, 4);   // 9th covered
  assert.equal(streakWith([d("2026-11-10"), d("2026-11-08")], today).used, 1);
  assert.equal(streakWith([d("2026-11-10"), d("2026-11-08"), d("2026-11-06"), d("2026-11-04")], today).run, 5); // 9th and 7th covered, the third gap is not
  assert.equal(streakWith([], today).run, 0);
});

test("XP counts right answers and sittings, quizzes and cards", () => {
  const h = [{ id: 5, on: "2026-11-09", right: 10, total: 20, minutes: 5, paper: "a" }];
  const rows = activity(h, [{ t: 6, id: "q", ok: true }, { t: 7, id: "r", ok: false }], { c1: { level: 3, t: 8 }, c2: { level: 0, t: 9 } });
  const total = rows.reduce((n, r) => n + r.xp, 0);
  assert.equal(total, 10 * XP.perRight + XP.sitting + XP.right + XP.tried + XP.card);
  assert.ok(xpByDay(rows).get("2026-11-09") === 10 * XP.perRight + XP.sitting);
});

import { SUBJECTS, courseFor, QUALS } from "../src/catalog.js";
import fs from "node:fs";
const ICON_IDS = [...fs.readFileSync(new URL("../src/SubjectIcons.jsx", import.meta.url), "utf8").matchAll(/^  ([a-z]+): /gm)].map((m) => m[1]);

test("every IGCSE subject has a board, topics and a drawn icon", () => {
  assert.ok(SUBJECTS.length >= 25);
  assert.equal(new Set(SUBJECTS.map((s) => s.id)).size, SUBJECTS.length);
  for (const s of SUBJECTS) {
    assert.ok(Object.keys(s.boards).length && s.topics.length, s.id);
    assert.ok(ICON_IDS.includes(s.icon), `${s.id} icon`);
  }
  assert.deepEqual(QUALS.map((q) => q.id), ["sat", "igcse"]);
});

test("a stored choice becomes a full course, with the double award code for a double science", () => {
  assert.equal(courseFor({ id: "igcse-biology", board: "cie", tier: "Triple" }).code, "0610");
  assert.equal(courseFor({ id: "igcse-biology", board: "cie", tier: "Double" }).code, "0654");
  assert.equal(courseFor({ id: "igcse-chemistry", board: "edexcel", tier: "Double" }).code, "4SD0");
  assert.equal(courseFor({ id: "igcse-esl", board: "edexcel" }).board, "cie"); // only Cambridge offers it here
  assert.equal(courseFor({ id: "paper-sat" }).id, "sat");
  assert.equal(courseFor({ id: "nope" }), null);
});
