import test from "node:test";
import assert from "node:assert/strict";
import { calc, secondModule, sectionScore, isRight, planFor, moduleName } from "../src/digitalsat.js";

test("the second module depends on the first", () => {
  assert.equal(secondModule("rw", 17), "rw2h");
  assert.equal(secondModule("rw", 16), "rw2e");
  assert.equal(secondModule("math", 13), "m2h");
  assert.equal(secondModule("math", 5), "m2e");
});

test("only the harder second module can reach the top score", () => {
  assert.equal(sectionScore("h", 27, 27, 27, 27), 800);
  assert.ok(sectionScore("e", 27, 27, 27, 27) <= 650);
  assert.equal(sectionScore("e", 0, 27, 0, 27), 200);
});

test("typed answers match as numbers, fractions or decimals", () => {
  const q = { kind: "spr", answer: "1.5" };
  assert.ok(isRight(q, "3/2") && isRight(q, "1.5") && !isRight(q, "2") && !isRight(q, ""));
  assert.ok(isRight({ kind: "spr", answer: "-6" }, "−6"));
  assert.ok(isRight({ kind: "mc", answer: "C" }, "C") && !isRight({ kind: "mc", answer: "C" }, "B"));
});

test("the calculator follows the order of operations without eval", () => {
  assert.equal(calc("2+3*4"), 14);
  assert.equal(calc("-3^2"), -9);
  assert.equal(calc("2(3+4)^2"), 98);
  assert.equal(calc("sqrt(16)+2"), 6);
  assert.equal(calc("ans*2", 5), 10);
  assert.throws(() => calc("2+"));
  assert.throws(() => calc("alert(1)"));
});

test("a full sitting runs both sections", () => {
  assert.deepEqual(planFor("full"), ["rw1", "rw2", "m1", "m2"]);
  assert.equal(moduleName("m2h"), "Math, Module 2");
  assert.equal(moduleName("rw1"), "Reading and Writing, Module 1");
});
