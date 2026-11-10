// Checks the IGCSE packs: every subtopic has notes and a quiz, every question is well formed,
// and the house style holds (no em or en dashes).
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { shape } from "../src/igcse/index.js";
import biology from "../src/igcse/biology.js";
import { SUBJECTS } from "../src/catalog.js";

for (const pack of [biology]) {
  test(`${pack.id}: matches a catalogue subject and covers its topics`, () => {
    const subject = SUBJECTS.find((s) => s.id === pack.id);
    assert.ok(subject);
    assert.deepEqual(pack.topics.map((t) => t.name), subject.topics);
  });
  test(`${pack.id}: every subtopic has notes, points and a sound quiz`, () => {
    const { subs } = shape(pack);
    const ids = new Set();
    for (const s of subs) {
      assert.ok(s.sections.length >= 2, s.id);
      assert.ok(s.points.length >= 3, s.id);
      assert.ok(s.questions.length >= 5, s.id);
      for (const q of s.questions) {
        assert.ok(!ids.has(q.id)); ids.add(q.id);
        assert.equal(q.choices.length, 4, q.id);
        assert.ok("ABCD".includes(q.answer) && q.answer.length === 1, q.id);
        assert.equal(new Set(q.choices).size, 4, q.id);
        assert.ok(q.why.length > 10, q.id);
      }
    }
  });
  test(`${pack.id}: no em or en dashes`, () => {
    assert.ok(!/[–—]/.test(readFileSync(new URL(`../src/igcse/${pack.id}.js`, import.meta.url), "utf8")));
  });
}

test("shuffled answers still point at the right choice, and are spread out", () => {
  const raw = biology.topics.flatMap((t) => t.subs.flatMap((s) => s.questions));
  const { subs } = shape(biology);
  const shaped = subs.flatMap((s) => s.questions);
  shaped.forEach((q, i) => { const [, choices, answer] = raw[i]; assert.equal(q.choices["ABCD".indexOf(q.answer)], choices["ABCD".indexOf(answer)]); });
  const counts = [..."ABCD"].map((L) => shaped.filter((q) => q.answer === L).length);
  assert.ok(Math.max(...counts) < shaped.length * 0.45, counts.join(","));
});
