import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { flatten, skillsOf, pickQuiz, doneFrom, QUESTION_COUNT } from "../src/bank.js";

const files = [1, 2, 3, 4, 5].map((n) => JSON.parse(fs.readFileSync(new URL(`../public/papers/sat-digital-${n}.json`, import.meta.url))));
const bank = flatten(files);

test("the bank holds every question, each with a unique id", () => {
  assert.equal(bank.length, QUESTION_COUNT);
  assert.equal(new Set(bank.map((q) => q.id)).size, bank.length);
  assert.ok(bank.every((q) => q.skill && q.answer && q.q && (q.subject === "Math" || q.subject === "Reading and Writing")));
});

test("skills are grouped by subject", () => {
  const s = skillsOf(bank);
  assert.ok(s.some((x) => x.subject === "Math" && x.skill === "Quadratics"));
  assert.equal(s.reduce((n, x) => n + x.count, 0), bank.length);
});

test("a quiz respects the skills and the count, and learn mode prefers new questions", () => {
  const skills = new Set(["Math|Quadratics", "Math|Functions"]);
  const all = bank.filter((q) => skills.has(`${q.subject}|${q.skill}`));
  const log = all.slice(0, 5).map((q) => ({ id: q.id, ok: true }));
  const quiz = pickQuiz(bank, { skills, count: 10, mode: "learn" }, doneFrom(log));
  assert.equal(quiz.length, 10);
  assert.ok(quiz.every((q) => skills.has(`${q.subject}|${q.skill}`)));
  assert.ok(quiz.every((q) => !log.some((l) => l.id === q.id)));
  assert.equal(pickQuiz(bank, { skills, count: 9999, mode: "learn" }).length, all.length);
});

test("fix mode starts with questions that were answered wrong", () => {
  const skills = new Set(["Math|Quadratics"]);
  const q = bank.find((x) => x.skill === "Quadratics");
  const quiz = pickQuiz(bank, { skills, count: 3, mode: "fix" }, { [q.id]: false });
  assert.equal(quiz[0].id, q.id);
});
