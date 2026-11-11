// Checks the IGCSE packs: each matches its catalogue subject, every subtopic has notes and a
// sound quiz, shuffled answers still point at the right choice, and the house style holds.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { shape, PACK_IDS } from "../src/igcse/index.js";
import { SUBJECTS } from "../src/catalog.js";

const packs = await Promise.all(PACK_IDS.map(async (id) => (await import(`../src/igcse/${id}.js`)).default));

for (const pack of packs) {
  test(`${pack.id}: matches a catalogue subject and covers its topics`, () => {
    const subject = SUBJECTS.find((s) => s.id === pack.id);
    assert.ok(subject, pack.id);
    assert.equal(pack.name, subject.name);
    assert.deepEqual(pack.topics.map((t) => t.name), subject.topics);
  });
  test(`${pack.id}: every subtopic has notes, points and a sound quiz`, () => {
    const { subs } = shape(pack);
    const ids = new Set();
    for (const s of subs) {
      assert.ok(s.sections.length >= 1 && s.sections.every(([h, l]) => h && l.length), s.id);
      assert.ok(s.points.length >= 3, s.id);
      assert.ok(s.questions.length >= 5, s.id);
      for (const q of s.questions) {
        assert.ok(!ids.has(q.id)); ids.add(q.id);
        assert.equal(q.choices.length, 4, q.id);
        assert.ok(["A", "B", "C", "D"].includes(q.answer), q.id);
        assert.equal(new Set(q.choices).size, 4, q.id);
        assert.ok(q.why.length >= 6, q.id);
      }
    }
  });
  test(`${pack.id}: shuffled answers still point at the right choice`, () => {
    const raw = pack.topics.flatMap((t) => t.subs.flatMap((s) => s.questions));
    shape(pack).subs.flatMap((s) => s.questions).forEach((q, i) => {
      const [, choices, answer] = raw[i];
      assert.equal(q.choices["ABCD".indexOf(q.answer)], choices["ABCD".indexOf(answer)]);
    });
  });
  test(`${pack.id}: no em or en dashes`, () => {
    assert.ok(!/[–—]/.test(readFileSync(new URL(`../src/igcse/${pack.id}.js`, import.meta.url), "utf8")));
  });
}

test("answers are spread across A to D overall", () => {
  const all = packs.flatMap((p) => shape(p).subs.flatMap((s) => s.questions));
  const counts = ["A", "B", "C", "D"].map((L) => all.filter((q) => q.answer === L).length);
  assert.ok(Math.max(...counts) < all.length * 0.4, counts.join(","));
});
