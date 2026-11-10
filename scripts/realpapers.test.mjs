import test from "node:test";
import assert from "node:assert/strict";
import { parseKey, markSheet, REAL_PAPERS } from "../src/realpapers.js";

test("a plain run of letters is read in order", () => {
  assert.deepEqual(parseKey("BCDAB", 5), ["B", "C", "D", "A", "B"]);
});

test("numbered pairs are matched to their question numbers, in any layout", () => {
  const k = parseKey("1. B  2) C\n3 D 5: A 4 B", 5);
  assert.deepEqual(k, ["B", "C", "D", "B", "A"]);
});

test("a short key leaves the rest empty", () => {
  assert.deepEqual(parseKey("ABC", 5), ["A", "B", "C", null, null]);
});

test("the ACT key alternates letter sets and is read as A to D", () => {
  assert.deepEqual(parseKey("1 A 2 H 3 C 4 J", 4, { letters: "act" }), ["A", "C", "C", "D"]);
  assert.deepEqual(markSheet(["A", "C", "C", "D"], ["A", "C", "C", "D"], { letters: "act" }).map((r) => r.status), ["right", "right", "right", "right"]);
});

test("choices outside the paper's range are ignored", () => {
  assert.deepEqual(parseKey("A E B", 3, { choices: 4 }), ["A", "B", null]);
});

test("text answers allow alternatives and ignore case and punctuation", () => {
  const key = parseKey("1 colour / color\n2 Library", 2, { letters: "text", choices: 0 });
  const r = markSheet(["Color", "library."], key, { letters: "text" });
  assert.deepEqual(r.map((x) => x.status), ["right", "right"]);
});

test("marking tells blank from wrong from right", () => {
  const r = markSheet(["A", "", "C", "D"], ["A", "B", "D", "D"]);
  assert.deepEqual(r.map((x) => x.status), ["right", "blank", "wrong", "right"]);
});

test("the SAT is the only paper left, and its sections have sizes", () => {
  assert.deepEqual(REAL_PAPERS.map((p) => p.id), ["sat"]);
  for (const s of REAL_PAPERS[0].sections) assert.ok(s.questions > 0 && s.minutes > 0, s.id);
});

test("each course has a group of numbered tests to match it", async () => {
  const { PPQ } = await import("../src/ppq.js");
  const { COURSES } = await import("../src/courses.js");
  const sat = COURSES[0];
  const total = sat.groups.reduce((n, name) => n + PPQ.sat.groups.find((x) => x.name === name).count, 0);
  assert.equal(total, sat.count);
});

import { ownPaper, markOwn, OWN_SECTIONS } from "../src/realpapers.js";

test("our own tests are found by id, and nothing else is", () => {
  const p = ownPaper("sat-paper-3");
  assert.equal(p.name, "SAT Paper Test 3");
  assert.equal(p.sections, OWN_SECTIONS);
  assert.equal(ownPaper("sat"), null);
});

test("an own test marks picked answers by letter and typed answers by value", () => {
  const mod = { questions: [
    { kind: "mc", answer: "C", skill: "A", q: "q1", choices: ["a", "b", "c", "d"], why: "w" },
    { kind: "mc", answer: "B", skill: "A", q: "q2", choices: ["a", "b", "c", "d"], why: "w" },
    { kind: "spr", answer: "1.5", skill: "B", q: "q3", why: "w" },
    { kind: "spr", answer: "-6", skill: "B", q: "q4", why: "w" },
    { kind: "spr", answer: "7", skill: "B", q: "q5", why: "w" },
  ] };
  const rows = markOwn({ 0: "C", 1: "D", 2: "3/2", 3: "−6", 4: "" }, mod);
  assert.deepEqual(rows.map((r) => r.status), ["right", "wrong", "right", "right", "blank"]);
  assert.equal(rows[1].item.correct, 1);
  assert.equal(rows[1].item.yours, 3);
});
