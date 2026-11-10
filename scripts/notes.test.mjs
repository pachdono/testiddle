import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { TOPICS, SUBTOPICS } from "../src/notes.js";
import { flatten } from "../src/bank.js";

const bank = flatten([1, 2, 3, 4, 5].map((n) => JSON.parse(fs.readFileSync(new URL(`../public/papers/sat-digital-${n}.json`, import.meta.url)))));

test("every skill in the question bank has notes, and every note has questions", () => {
  const skills = new Set(bank.map((q) => `${q.subject}|${q.skill}`));
  const notes = new Set(SUBTOPICS.map((s) => `${s.topic.subject}|${s.skill}`));
  assert.deepEqual([...skills].filter((s) => !notes.has(s)), []);
  assert.deepEqual([...notes].filter((s) => !skills.has(s)), []);
});

test("notes are complete and numbered in order", () => {
  assert.equal(TOPICS.length, 8);
  assert.equal(new Set(SUBTOPICS.map((s) => s.id)).size, SUBTOPICS.length);
  for (const s of SUBTOPICS) {
    assert.ok(s.intro && s.sections.length && s.points.length >= 3, s.skill);
    assert.ok(s.sections.every(([h, lines]) => h && lines.length), s.skill);
    assert.match(s.code, /^\d+\.\d+$/);
    assert.ok(!/[–—]/.test(JSON.stringify(s)), `${s.skill} has a dash`);
  }
});
