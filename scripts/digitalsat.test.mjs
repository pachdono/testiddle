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

import { parseLine } from "../src/digitalsat.js";
test("the graphing calculator reads curves, circles, inequalities, points and sliders", () => {
  const f = parseLine("y=2x^2-3"); assert.equal(f.kind, "fn"); assert.equal(f.f({ x: 2 }), 5);
  const c = parseLine("(x-1)^2+(y+2)^2=9"); assert.equal(c.kind, "implicit"); assert.equal(c.F({ x: 1, y: 1 }), 0);
  const i = parseLine("y>=x/2+1"); assert.equal(i.kind, "ineq"); assert.ok(!i.lt && !i.strict);
  assert.equal(parseLine("(2,3)").kind, "point");
  assert.deepEqual([...parseLine("y=a(x-1)+b").vars].sort(), ["a", "b", "x"]);
  assert.equal(parseLine("2+").kind, "error");
});

import { compileExpr, fitModel } from "../src/digitalsat.js";
test("Dwimos: defined functions, absolute value and curve fitting", () => {
  const c = compileExpr("f(g(2))+|x-3|*2", { funcs: new Set(["f", "g"]) });
  assert.equal(c.fn({ x: 1, __fn: { f: (v) => v * 10, g: (v) => v + 1 } }), 34);
  const m = parseLine("y1 ~ a x1^2 + b x1 + c");
  assert.equal(m.kind, "fit");
  const fit = fitModel(m.model, ["a", "b", "c"], "x1", [1, 2, 3, 4], [3, 5, 9, 15]);
  assert.ok(Math.abs(fit.params.a - 1) < 1e-6 && Math.abs(fit.params.b + 1) < 1e-6 && Math.abs(fit.params.c - 3) < 1e-6 && fit.r2 > 0.999999);
  const e = parseLine("y1 ~ a*b^x1");
  const fe = fitModel(e.model, ["a", "b"], "x1", [0, 1, 2, 3], [2, 6, 18, 54]);
  assert.ok(Math.abs(fe.params.a - 2) < 1e-6 && Math.abs(fe.params.b - 3) < 1e-6);
});

test("Dwimos: restrictions, lists with statistics, and degree mode", () => {
  const r = parseLine("y=x^2 {0<x<3}");
  assert.equal(r.kind, "fn"); assert.ok(r.cond({ x: 1 }) && !r.cond({ x: 4 }) && !r.cond({ x: -1 }));
  assert.deepEqual(parseLine("L=[2,4,9]").values, [2, 4, 9]);
  const e = (t, env = {}, ctx = {}) => compileExpr(t, ctx).fn(env);
  assert.equal(e("mean([1,2,3,4])"), 2.5);
  assert.equal(e("median([5,1,3])"), 3);
  assert.equal(e("stdevp([2,4,4,4,5,5,7,9])"), 2);
  assert.equal(e("total(l)+max(y1)", { __list: { l: [1, 2, 3], y1: [4, 9] } }), 15);
  assert.ok(Math.abs(e("sin(30)", {}, { deg: true }) - 0.5) < 1e-12);
  assert.ok(Math.abs(calc("sin(30)", 0, true) - 0.5) < 1e-12);
  assert.ok(Math.abs(e("sin(pi/2)") - 1) < 1e-12);
});
