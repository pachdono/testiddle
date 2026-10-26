// Checks every test's content hangs together: answers in range, pools that exist,
// builders that run, scoring that returns something, tasks that have rubrics.
import test from "node:test";
import assert from "node:assert/strict";
import { TESTS, SECTIONS } from "../src/tests.js";
import { BUILDERS } from "../src/generate.js";
import { estimate } from "../src/scoring.js";
import { TASKS, RUBRICS } from "../src/tasks.js";

const strings = (o, out = []) => {
  if (typeof o === "string") out.push(o);
  else if (Array.isArray(o)) o.forEach((x) => strings(x, out));
  else if (o && typeof o === "object") Object.values(o).forEach((x) => strings(x, out));
  return out;
};

test("every test has unique question ids and valid answers", () => {
  const ids = new Set();
  for (const t of TESTS) {
    for (const q of t.questions) {
      assert.ok(!ids.has(q.id), `duplicate id ${q.id}`);
      ids.add(q.id);
      assert.ok(Array.isArray(q.choices) && q.choices.length >= 2, `${q.id} choices`);
      assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.choices.length, `${q.id} answer index`);
      assert.equal(new Set(q.choices).size, q.choices.length, `${q.id} has repeated choices`);
      assert.ok(q.why && q.why.length > 20, `${q.id} explanation`);
    }
  }
});

test("no em or en dashes in any test content", () => {
  for (const t of TESTS) for (const s of strings([t.note, t.format, t.questions])) assert.ok(!/[–—]/.test(s), `dash in ${t.id}: ${s.slice(0, 60)}`);
});

test("every section is sittable: a builder that runs or an authored pool that exists", () => {
  for (const t of TESTS) {
    const secs = SECTIONS[t.id];
    assert.ok(secs?.length, `${t.id} has sections`);
    for (const s of secs) {
      if (s.build) {
        assert.ok(BUILDERS[s.build], `${t.id}/${s.id} builder ${s.build}`);
        const qs = BUILDERS[s.build](Math.min(s.real, 20));
        assert.ok(qs.length >= Math.min(s.real, 20) - 2, `${s.build} returned ${qs.length}`);
        for (const q of qs) assert.ok(q.answer >= 0 && q.answer < q.choices.length && q.choices[q.answer], `${s.build} bad item ${q.q}`);
      } else if (s.pool) {
        assert.ok(t.questions.some((q) => q.section === s.pool), `${t.id}/${s.id} pool ${s.pool} has authored questions`);
      } else {
        assert.ok(s.kind === "writing" || s.kind === "speaking", `${t.id}/${s.id} kind`);
        assert.ok(TASKS[t.id]?.[s.kind]?.tasks?.length, `${t.id} has ${s.kind} tasks`);
        assert.ok(RUBRICS[TASKS[t.id][s.kind].rubric], `${t.id} ${s.kind} rubric exists`);
      }
    }
  }
});

test("scoring gives a scale for every test", () => {
  for (const t of TESTS) {
    const hi = estimate(t.scoring, 9, 10), lo = estimate(t.scoring, 1, 10);
    assert.ok(Number(hi.scaled) > Number(lo.scaled) || /\//.test(hi.scaled), `${t.id} scales upward`);
    assert.ok(hi.percentile >= lo.percentile, `${t.id} percentile`);
    assert.ok(!/^\d+\/\d+$/.test(hi.scaled), `${t.id} has its own scale`);
  }
});
