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

test("every real paper has a link, and sections that can be sat have sizes", () => {
  for (const p of REAL_PAPERS) {
    assert.ok(/^https:\/\//.test(p.url), `${p.id} url`);
    for (const s of p.sections) assert.ok(s.questions > 0 && s.minutes > 0, `${p.id}/${s.id}`);
    assert.ok(!/[–—]/.test(JSON.stringify(p)), `${p.id} dash`);
  }
  assert.ok(REAL_PAPERS.length >= 10);
});

test("a seeded draw is repeatable and different seeds differ", async () => {
  const { BUILDERS } = await import("../src/generate.js");
  const seeded = (seed, fn) => {
    let a = seed >>> 0; const real = Math.random;
    Math.random = () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    try { return fn(); } finally { Math.random = real; }
  };
  const text = (qs) => qs.map((q) => q.q + "|" + q.choices.join(",")).join("\n");
  const a = text(seeded(7, () => BUILDERS.satMath(20)));
  const b = text(seeded(7, () => BUILDERS.satMath(20)));
  const c = text(seeded(8, () => BUILDERS.satMath(20)));
  assert.equal(a, b);
  assert.notEqual(a, c);
});

test("past paper browsers have unique codes, years in order and working searches", async () => {
  const { PPQ, search } = await import("../src/ppq.js");
  for (const [id, cfg] of Object.entries(PPQ)) {
    assert.ok(cfg.hubs.every(([, u]) => /^https:\/\//.test(u)), `${id} hubs`);
    assert.ok(!/[–—]/.test(JSON.stringify({ ...cfg, paperQuery: 0, markQuery: 0, groups: 0 })), `${id} dash`);
    if (cfg.numbered) { assert.ok(cfg.groups.every((g) => g.count > 0 && /https:/.test(search(g.query(1)))), `${id} groups`); continue; }
    assert.deepEqual([...cfg.years].sort((a, b) => b - a), cfg.years, `${id} years descend`);
    for (const l of cfg.levels) {
      const codes = l.subjects.map((s) => s.code);
      assert.equal(new Set(codes).size, codes.length, `${id}/${l.id} codes`);
      const q = cfg.paperQuery(l, l.subjects[0], 2023, cfg.sessions[0]);
      assert.ok(q.includes("2023") && q.includes(l.subjects[0].code), `${id} query`);
    }
  }
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
