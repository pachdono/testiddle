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
    assert.deepEqual(pack.topics.filter((t) => !t.board || t.board === "cie").map((t) => t.name), subject.topics);
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
      assert.ok(s.blocks.length >= 1 && s.blocks.length <= 8, s.id);
      assert.ok(s.blocks.every(([h, lines]) => h && lines.length && lines.length <= 12), s.id);
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
  const ids = readdirSync(dir).filter((f) => f.endsWith(".jsx") && f !== "pics.jsx").flatMap((f) => [...readFileSync(new URL(f, dir), "utf8").matchAll(/^\s+"([a-z0-9-]+)": /gm)].map((m) => m[1]));
  const sheets = new Set(packs.flatMap((p) => sheetsOf(shape(p), SUBJECTS.find((s) => s.id === p.id)).map((s) => s.id)));
  assert.ok(ids.length >= 50);
  assert.deepEqual(ids.filter((id) => !sheets.has(id.replace(/-[bc]$/, ""))), []);
  assert.equal(new Set(ids).size, ids.length);
});

test("Extended lines are marked cleanly, and Core still leaves every page with notes", async () => {
  const { forLevel, EXT } = await import("../src/igcse/index.js");
  for (const p of packs) {
    const shaped = shape(p);
    for (const s of shaped.subs) for (const [, lines] of s.sections) for (const l of lines) assert.ok(!l.includes(EXT) || l.startsWith(EXT), l);
    const core = forLevel(shaped, "Core");
    for (const t of shaped.topics) assert.ok(core.subs.some((s) => s.topic.id === t.id), `${p.id} ${t.id} has nothing at Core`);
    for (const s of core.subs) {
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

test("Edexcel layouts place every subtopic once, leaving out only what is not on the specification", async () => {
  const { LAYOUTS, layoutFor } = await import("../src/igcse/layouts.js");
  const { shape } = await import("../src/igcse/index.js");
  const notOnSpec = { physics: ["Lenses and dispersion"] };
  for (const id of Object.keys(LAYOUTS)) {
    const pack = shape((await import(`../src/igcse/${id}.js`)).default);
    const placed = LAYOUTS[id].edexcel.flatMap(([, , skills]) => skills);
    assert.equal(new Set(placed).size, placed.length, `${id}: a subtopic is placed twice`);
    const all = pack.subs.map((s) => s.skill);
    for (const k of placed) assert.ok(all.includes(k), `${id}: "${k}" is not in the notes`);
    assert.deepEqual(all.filter((k) => !placed.includes(k)), notOnSpec[id] || [], `${id}: subtopics missing from the Edexcel layout`);
    const out = layoutFor(pack, "edexcel");
    assert.equal(out.topics.length, LAYOUTS[id].edexcel.length);
    assert.ok(out.subs.every((s) => s.code.startsWith(`${s.topic.no}.`) && s.questions.every((q) => q.subject === s.topic.name)));
    assert.equal(new Set(out.subs.map((s) => s.id)).size, out.subs.length);
  }
});

test("every topic in every course has a picture", async () => {
  const { PACK_IDS, shape } = await import("../src/igcse/index.js");
  const { TOPIC_PICS } = await import("../src/igcse/layouts.js");
  const { PICS } = await import("../src/figs/pics.jsx").catch(() => ({ PICS: null }));
  for (const id of PACK_IDS) {
    const pack = shape((await import(`../src/igcse/${id}.js`)).default);
    for (const t of pack.topics) {
      assert.ok(TOPIC_PICS[id]?.[t.id], `${id}: no picture for topic ${t.id}`);
      if (PICS) assert.ok(PICS[TOPIC_PICS[id][t.id]], `${id}: no drawing called ${TOPIC_PICS[id][t.id]}`);
    }
  }
});
