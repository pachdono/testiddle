import test from "node:test";
import assert from "node:assert/strict";
import { courseOf, historyOf, summary, streak, dayOf, COURSES } from "../src/courses.js";

const row = (paper, right, total, on, minutes = 0) => ({ id: Math.random(), paper, section: "x", right, total, minutes, on });

test("a test title says which course it is in", () => {
  assert.equal(courseOf("SAT Paper Test 2").id, "paper-sat");
  assert.equal(courseOf("SAT Computer Test 4").id, "computer-sat");
});

test("results are split by course and averaged", () => {
  const h = [row("SAT Paper Test 1", 20, 27, "2026-11-09"), row("SAT Paper Test 2", 10, 27, "2026-11-09"), row("SAT Computer Test 1", 50, 100, "2026-11-09")];
  assert.equal(historyOf(h, COURSES[0]).length, 2);
  const s = summary(h, COURSES[0]);
  assert.equal(s.sittings, 2);
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
