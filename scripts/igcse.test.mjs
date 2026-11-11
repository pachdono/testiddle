// Checks the IGCSE packs: each matches its catalogue subject, every subtopic has notes and a
// sound quiz, shuffled answers still point at the right choice, and the house style holds.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { shape, PACK_IDS, sheetsOf, termsOf } from "../src/igcse/index.js";
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
  test(`${pack.id}: a cheat sheet for every topic, and key terms`, () => {
    const shaped = shape(pack), subject = SUBJECTS.find((s) => s.id === pack.id);
    const sheets = sheetsOf(shaped, subject);
    assert.equal(sheets.length, shaped.subs.length);
    for (const s of sheets) {
      assert.ok(s.blocks.length >= 1 && s.blocks.length <= 6, s.id);
      assert.ok(s.blocks.every(([h, lines]) => h && lines.length && lines.length <= 6), s.id);
      assert.match(s.meta.color, /^#[0-9a-f]{6}$/i); assert.match(s.meta.soft, /^#[0-9a-f]{6}$/i);
      assert.ok(s.meta.key.length > 10, s.id);
    }
    const terms = termsOf(shaped);
    assert.ok(terms.length >= 5, `${pack.id} has ${terms.length} terms`);
    assert.equal(new Set(terms.map((x) => x.term.toLowerCase())).size, terms.length);
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

test("every hand drawn diagram belongs to a real cheat sheet", async () => {
  const { readdirSync } = await import("node:fs");
  const dir = new URL("../src/figs/", import.meta.url);
  const ids = readdirSync(dir).filter((f) => f.endsWith(".jsx")).flatMap((f) => [...readFileSync(new URL(f, dir), "utf8").matchAll(/^\s+"([a-z-]+)": /gm)].map((m) => m[1]));
  const sheets = new Set(packs.flatMap((p) => sheetsOf(shape(p), SUBJECTS.find((s) => s.id === p.id)).map((s) => s.id)));
  assert.ok(ids.length >= 50);
  assert.deepEqual(ids.filter((id) => !sheets.has(id)), []);
  assert.equal(new Set(ids).size, ids.length);
});

test("Extended lines are marked cleanly, and Core still leaves every page with notes", async () => {
  const { forLevel, EXT } = await import("../src/igcse/index.js");
  for (const p of packs) {
    const shaped = shape(p);
    for (const s of shaped.subs) for (const [, lines] of s.sections) for (const l of lines) assert.ok(!l.includes(EXT) || l.startsWith(EXT), l);
    for (const s of forLevel(shaped, "Core").subs) {
      assert.ok(s.sections.length >= 1, `${s.id} has no Core notes`);
      assert.ok(s.sections.every(([, lines]) => lines.every((l) => !l.startsWith(EXT))), s.id);
    }
  }
});

test("every topic has a written exam question with a sound mark scheme", async () => {
  for (const p of packs) {
    const exam = (await import(`../src/igcse/exam/${p.id}.js`)).default;
    assert.deepEqual(Object.keys(exam).sort(), p.topics.map((t) => t.id).sort(), `${p.id} exam topics`);
    const shaped = shape(p, exam);
    for (const t of shaped.topics) {
      assert.ok(t.written.length >= 1, `${p.id} ${t.id}`);
      for (const q of t.written) {
        assert.ok(q.q.length > 15 && q.points.length >= 1, q.id);
        assert.ok(q.marks >= 1 && q.marks <= q.points.length, `${q.id} marks ${q.marks} of ${q.points.length}`);
      }
    }
    assert.ok(shaped.subs.every((s) => s.written === shaped.topics.find((t) => t.id === s.topic.id).written));
    assert.ok(!/[–—]/.test(readFileSync(new URL(`../src/igcse/exam/${p.id}.js`, import.meta.url), "utf8")), `${p.id} dashes`);
  }
});
