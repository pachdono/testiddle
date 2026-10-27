// How the computer-based SAT behaves: two modules a section, the second one harder or
// easier depending on the first, and a score that reflects which one you were given.
// The real test's cut-offs and scoring are not published, so these are estimates.

export const SECTIONS = {
  rw: { name: "Reading and Writing", minutes: 32, questions: 27, modules: ["rw1", "rw2"], hard: "rw2h", easy: "rw2e", cut: 17 },
  math: { name: "Math", minutes: 35, questions: 22, modules: ["m1", "m2"], hard: "m2h", easy: "m2e", cut: 13 },
};

/** The sequence of modules for a sitting: the full test, or one section. */
export function planFor(mode) {
  const rw = ["rw1", "rw2"], math = ["m1", "m2"];
  return mode === "rw" ? rw : mode === "math" ? math : [...rw, ...math];
}
export const sectionOf = (id) => (id.startsWith("rw") ? "rw" : "m").replace("m", "math").replace("rwath", "rw");
export const moduleName = (id) => `${SECTIONS[sectionOf(id)].name}, Module ${id.endsWith("1") ? 1 : 2}`;

/** Which second module a student gets, from how many they got right in the first. */
export const secondModule = (section, firstCorrect) => (firstCorrect >= SECTIONS[section].cut ? SECTIONS[section].hard : SECTIONS[section].easy);

export const same = (given, key) => {
  const num = (s) => {
    const t = String(s ?? "").trim().replace(/[−–]/g, "-").replace(/\s+/g, "");
    const f = /^(-?\d+)\/(\d+)$/.exec(t);
    if (f) return Number(f[2]) ? Number(f[1]) / Number(f[2]) : NaN;
    return /^-?(\d+\.?\d*|\.\d+)$/.test(t) ? Number(t) : NaN;
  };
  return Math.abs(num(given) - num(key)) < 0.0011;
};

export function isRight(q, given) {
  if (given === undefined || given === null || String(given).trim() === "") return false;
  return q.kind === "spr" ? same(given, q.answer) : given === q.answer;
}

/** A section score from 200 to 800. The harder second module can reach the top; the easier one cannot. */
export function sectionScore(path, c1, n1, c2, n2) {
  const f1 = n1 ? c1 / n1 : 0, f2 = n2 ? c2 / n2 : 0;
  const raw = path === "h" ? 450 + 350 * (0.35 * f1 + 0.65 * f2) : 200 + 450 * (0.4 * f1 + 0.6 * f2);
  return Math.max(200, Math.min(800, Math.round(raw / 10) * 10));
}

// A small expression engine that does not need eval, which the site's security policy blocks.
// compileExpr turns text like "2x^2 - 3(x+1)" into a function of its variables, so the
// calculator and the graphing calculator share one parser.
const D = Math.PI / 180;
const FN_RAD = { sqrt: Math.sqrt, sin: Math.sin, cos: Math.cos, tan: Math.tan, asin: Math.asin, acos: Math.acos, atan: Math.atan, ln: Math.log, log: Math.log10, abs: Math.abs, floor: Math.floor, ceil: Math.ceil };
const FN_DEG = { ...FN_RAD, sin: (x) => Math.sin(x * D), cos: (x) => Math.cos(x * D), tan: (x) => Math.tan(x * D), asin: (x) => Math.asin(x) / D, acos: (x) => Math.acos(x) / D, atan: (x) => Math.atan(x) / D };
// statistics over a list: mean(L), median([1,2,3]), stdev(y1) ...
const sorted = (a) => [...a].sort((x, y) => x - y);
const LISTFN = {
  mean: (a) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : NaN),
  median: (a) => { if (!a.length) return NaN; const t = sorted(a), m = t.length >> 1; return t.length % 2 ? t[m] : (t[m - 1] + t[m]) / 2; },
  stdevp: (a) => { if (!a.length) return NaN; const m = a.reduce((x, y) => x + y, 0) / a.length; return Math.sqrt(a.reduce((x, y) => x + (y - m) ** 2, 0) / a.length); },
  stdev: (a) => { if (a.length < 2) return NaN; const m = a.reduce((x, y) => x + y, 0) / a.length; return Math.sqrt(a.reduce((x, y) => x + (y - m) ** 2, 0) / (a.length - 1)); },
  total: (a) => a.reduce((x, y) => x + y, 0),
  sum: (a) => a.reduce((x, y) => x + y, 0),
  min: (a) => (a.length ? Math.min(...a) : NaN),
  max: (a) => (a.length ? Math.max(...a) : NaN),
  count: (a) => a.length,
  length: (a) => a.length,
};
const tidy = (src) => String(src).toLowerCase().replace(/\s+/g, "").replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-").replace(/π/g, "pi").replace(/√/g, "sqrt").replace(/²/g, "^2").replace(/³/g, "^3");

export function compileExpr(src, ctx = {}) {
  const s = tidy(src); let i = 0; const vars = new Set(); const funcs = ctx.funcs || new Set(); let bars = 0; const FN = ctx.deg ? FN_DEG : FN_RAD;
  const fail = () => { throw new Error("syntax"); };
  const expr = () => { let f = term(); while (s[i] === "+" || s[i] === "-") { const o = s[i++]; const a = f, b = term(); f = o === "+" ? (e) => a(e) + b(e) : (e) => a(e) - b(e); } return f; };
  const startsFactor = () => i < s.length && (s[i] === "(" || /[a-z\d.]/.test(s[i]) || (s[i] === "|" && bars % 2 === 0));
  const term = () => {
    let f = unary();
    while (s[i] === "*" || s[i] === "/" || startsFactor()) {
      const a = f;
      if (s[i] === "*") { i++; const b = unary(); f = (e) => a(e) * b(e); } else if (s[i] === "/") { i++; const b = unary(); f = (e) => a(e) / b(e); } else { const b = unary(); f = (e) => a(e) * b(e); }
    }
    return f;
  };
  const unary = () => { if (s[i] === "-") { i++; const a = unary(); return (e) => -a(e); } if (s[i] === "+") { i++; return unary(); } return power(); };
  const power = () => { const b = atom(); if (s[i] === "^") { i++; const x = unary(); return (e) => Math.pow(b(e), x(e)); } return b; };
  const atom = () => {
    if (s[i] === "(") { i++; const f = expr(); if (s[i] !== ")") fail(); i++; return f; }
    if (s[i] === "|") { i++; bars++; const f = expr(); if (s[i] !== "|") fail(); i++; bars--; return (e) => Math.abs(f(e)); }
    const num = /^(\d+\.?\d*|\.\d+)/.exec(s.slice(i));
    if (num) { i += num[0].length; const v = Number(num[0]); return () => v; }
    const word = /^[a-z]+/.exec(s.slice(i)); if (!word) fail();
    let w = word[0];
    // a function the student defined, like f(x) = x^2, is called when its name is followed by a bracket
    if (funcs.has(w[0]) && s[i + 1] === "(" && !(w.length > 1 && FN[Object.keys(FN).find((k) => w.startsWith(k))])) {
      const name = w[0]; i += 2; const f = expr(); if (s[i] !== ")") fail(); i++; return (e) => (e.__fn && e.__fn[name] ? e.__fn[name](f(e)) : NaN);
    }
    for (const k of Object.keys(LISTFN)) if (w.startsWith(k) && s[i + k.length] === "(") {
      i += k.length + 1; let getL;
      if (s[i] === "[") { i++; const items = []; for (;;) { items.push(expr()); if (s[i] === ",") { i++; continue; } break; } if (s[i] !== "]") fail(); i++; getL = (e) => items.map((f) => f(e)); }
      else { const nm = /^[a-z][a-z0-9]*/.exec(s.slice(i)); if (!nm) fail(); i += nm[0].length; const key = nm[0]; getL = (e) => (e.__list && e.__list[key]) || []; }
      if (s[i] !== ")") fail(); i++; const g = LISTFN[k]; return (e) => g(getL(e));
    }
    for (const k of ["ans", "pi", ...Object.keys(FN)]) if (w.startsWith(k)) { w = k; break; }
    if (FN[w] && s[i + w.length] === "(") { i += w.length + 1; const f = expr(); if (s[i] !== ")") fail(); i++; const g = FN[w]; return (e) => g(f(e)); }
    if (w === "pi") { i += 2; return () => Math.PI; }
    if (w === "ans") { i += 3; return (e) => e.ans ?? 0; }
    // anything else is a letter, a variable; letters side by side multiply, as in xy. x1 and y1 are table columns.
    let ch = s[i]; i++;
    if ((ch === "x" || ch === "y") && /\d/.test(s[i] || "")) { while (/\d/.test(s[i] || "")) ch += s[i++]; }
    if (ch === "e") return () => Math.E;
    vars.add(ch); return (e) => e[ch];
  };
  const fn = expr(); if (i < s.length) fail();
  return { fn, vars };
}

export function calc(src, ans = 0, deg = false) {
  const { fn, vars } = compileExpr(src, { deg });
  if (vars.size) throw new Error("variables");
  const v = fn({ ans });
  if (!Number.isFinite(v)) throw new Error("not finite");
  return v;
}

/** Reads one line of the graphing calculator: a curve, a function definition, a fit, an inequality, a point or just an expression. */
export function parseLine(raw, ctx = {}) {
  const text = String(raw || "").trim(); if (!text) return null;
  const norm = text.replace(/≤/g, "<=").replace(/≥/g, ">=");
  try {
    // a restriction in braces, like y = x^2 {0 < x < 3}
    const rm = /^(.*?)\s*\{([^{}]*)\}\s*$/.exec(norm);
    if (rm && rm[1].trim()) {
      const base = parseLine(rm[1], ctx); if (!base || base.kind === "error") return base;
      const parts = rm[2].split(",").map((t) => t.trim()).filter(Boolean).map((t) => {
        const pieces = t.split(/(<=|>=|<|>|=)/); if (pieces.length < 3) throw new Error("cond");
        const operands = pieces.filter((_, k) => k % 2 === 0).map((o) => compileExpr(o, ctx)); const ops = pieces.filter((_, k) => k % 2 === 1);
        return { operands, ops };
      });
      const cmp = (op, a, b) => (op === "<" ? a < b : op === ">" ? a > b : op === "<=" ? a <= b : op === ">=" ? a >= b : Math.abs(a - b) < 1e-9);
      base.cond = (e) => parts.every(({ operands, ops }) => ops.every((op, k) => cmp(op, operands[k].fn(e), operands[k + 1].fn(e))));
      base.vars = new Set([...(base.vars || []), ...parts.flatMap((p) => p.operands.flatMap((o) => [...o.vars]))]);
      return base;
    }
    const lst = /^([a-z][a-z0-9]*)\s*=\s*\[(.*)\]$/i.exec(norm);
    if (lst && !/^[xy]$/i.test(lst[1])) { const items = lst[2].split(",").map((t) => compileExpr(t, ctx).fn({})); return { kind: "list", name: lst[1].toLowerCase(), values: items.filter((v) => Number.isFinite(v)), vars: new Set() }; }
    const def = /^([a-z])\(([a-z])\)\s*=(.*)$/i.exec(norm);
    if (def) { const c = compileExpr(def[3], ctx); const arg = def[2].toLowerCase(); const vars = new Set([...c.vars].filter((v) => v !== arg)); return { kind: "def", name: def[1].toLowerCase(), arg, body: c.fn, vars, argVars: c.vars }; }
    const reg = /^([xy]\d+)\s*~(.*)$/i.exec(norm);
    if (reg) { const c = compileExpr(reg[2], ctx); return { kind: "fit", yname: reg[1].toLowerCase(), model: c.fn, mvars: c.vars, vars: new Set() }; }
    const pt = /^\(\s*([^,()]+?)\s*,\s*([^,()]+?)\s*\)$/.exec(norm);
    if (pt) { const a = compileExpr(pt[1], ctx), b = compileExpr(pt[2], ctx); return { kind: "point", fx: a.fn, fy: b.fn, vars: new Set([...a.vars, ...b.vars]) }; }
    const m = /^(.*?)(<=|>=|<|>|=)(.*)$/.exec(norm);
    if (!m) { const c = compileExpr(norm, ctx); const num = ![...c.vars].some((v) => v === "x" || v === "y"); return { kind: "fn", f: c.fn, vars: c.vars, number: num && c.vars.size === 0 }; }
    const [, l, op, r] = m;
    const L = compileExpr(l, ctx), R = compileExpr(r, ctx);
    const vars = new Set([...L.vars, ...R.vars]);
    if (op === "=") {
      if (l.trim().toLowerCase() === "y" && !R.vars.has("y")) return { kind: "fn", f: R.fn, vars: R.vars };
      return { kind: "implicit", F: (e) => L.fn(e) - R.fn(e), vars };
    }
    const lt = op[0] === "<";
    return { kind: "ineq", F: (e) => L.fn(e) - R.fn(e), lt, strict: op.length === 1, vars };
  } catch { return { kind: "error" }; }
}

/** Least squares by Levenberg-Marquardt: the parameters of a model that best fit the points. */
export function fitModel(model, names, xname, xs, ys) {
  const n = names.length; if (!n || xs.length < 1) return null;
  const run = (p) => ys.reduce((a, y, k) => { const v = model({ ...Object.fromEntries(names.map((nm, j) => [nm, p[j]])), [xname]: xs[k] }); return a + (Number.isFinite(v) ? (y - v) ** 2 : 1e12); }, 0);
  let best = null;
  for (const init of [1, 2, 0.5, -1, 0.1]) {
    let p = names.map(() => init), sse = run(p), lam = 1e-2;
    for (let it = 0; it < 120; it++) {
      const r = ys.map((y, k) => y - model({ ...Object.fromEntries(names.map((nm, j) => [nm, p[j]])), [xname]: xs[k] }));
      const J = xs.map((x, k) => names.map((_, j) => { const h = 1e-6 * (Math.abs(p[j]) + 1); const q = [...p]; q[j] += h; const v1 = model({ ...Object.fromEntries(names.map((nm, jj) => [nm, q[jj]])), [xname]: x }); const v0 = model({ ...Object.fromEntries(names.map((nm, jj) => [nm, p[jj]])), [xname]: x }); return (v1 - v0) / h; }));
      const A = names.map((_, a) => names.map((_, b) => J.reduce((acc, row) => acc + row[a] * row[b], 0) + (a === b ? lam * (1 + 0) : 0)));
      const g = names.map((_, a) => J.reduce((acc, row, k) => acc + row[a] * r[k], 0));
      // solve A d = g by elimination
      const M = A.map((row, a) => [...row, g[a]]);
      let ok = true;
      for (let c = 0; c < n; c++) { let piv = c; for (let k = c + 1; k < n; k++) if (Math.abs(M[k][c]) > Math.abs(M[piv][c])) piv = k; if (Math.abs(M[piv][c]) < 1e-14) { ok = false; break; } [M[c], M[piv]] = [M[piv], M[c]]; for (let k = 0; k < n; k++) if (k !== c) { const f = M[k][c] / M[c][c]; for (let j = c; j <= n; j++) M[k][j] -= f * M[c][j]; } }
      if (!ok) break;
      const d = M.map((row, k) => row[n] / row[k]);
      const q = p.map((v, k) => v + d[k]); const s2 = run(q);
      if (Number.isFinite(s2) && s2 < sse) { const done = Math.abs(sse - s2) < 1e-14 * (1 + sse); p = q; sse = s2; lam = Math.max(lam / 5, 1e-9); if (done) break; } else lam *= 6;
    }
    if (!best || sse < best.sse) best = { p, sse };
    if (best.sse < 1e-18) break;
  }
  const mean = ys.reduce((a, b) => a + b, 0) / ys.length; const tot = ys.reduce((a, y) => a + (y - mean) ** 2, 0);
  return { params: Object.fromEntries(names.map((nm, j) => [nm, best.p[j]])), r2: tot > 0 ? 1 - best.sse / tot : 1 };
}
