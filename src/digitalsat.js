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
const FN = { sqrt: Math.sqrt, sin: Math.sin, cos: Math.cos, tan: Math.tan, ln: Math.log, log: Math.log10, abs: Math.abs, floor: Math.floor, ceil: Math.ceil };
const tidy = (src) => String(src).toLowerCase().replace(/\s+/g, "").replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-").replace(/π/g, "pi").replace(/√/g, "sqrt").replace(/²/g, "^2").replace(/³/g, "^3");

export function compileExpr(src) {
  const s = tidy(src); let i = 0; const vars = new Set();
  const fail = () => { throw new Error("syntax"); };
  const expr = () => { let f = term(); while (s[i] === "+" || s[i] === "-") { const o = s[i++]; const a = f, b = term(); f = o === "+" ? (e) => a(e) + b(e) : (e) => a(e) - b(e); } return f; };
  const startsFactor = () => i < s.length && (s[i] === "(" || /[a-z\d.]/.test(s[i]));
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
    const num = /^(\d+\.?\d*|\.\d+)/.exec(s.slice(i));
    if (num) { i += num[0].length; const v = Number(num[0]); return () => v; }
    const word = /^[a-z]+/.exec(s.slice(i)); if (!word) fail();
    let w = word[0];
    for (const k of ["ans", "pi", ...Object.keys(FN)]) if (w.startsWith(k)) { w = k; break; }
    if (FN[w] && s[i + w.length] === "(") { i += w.length + 1; const f = expr(); if (s[i] !== ")") fail(); i++; const g = FN[w]; return (e) => g(f(e)); }
    if (w === "pi") { i += 2; return () => Math.PI; }
    if (w === "ans") { i += 3; return (e) => e.ans ?? 0; }
    // anything else is a letter, a variable; letters side by side multiply, as in xy
    const ch = s[i]; i++;
    if (ch === "e") return () => Math.E;
    vars.add(ch); return (e) => e[ch];
  };
  const fn = expr(); if (i < s.length) fail();
  return { fn, vars };
}

export function calc(src, ans = 0) {
  const { fn, vars } = compileExpr(src);
  if (vars.size) throw new Error("variables");
  const v = fn({ ans });
  if (!Number.isFinite(v)) throw new Error("not finite");
  return v;
}

/** Reads one line of the graphing calculator: a curve, an inequality, a point or just an expression. */
export function parseLine(raw) {
  const text = String(raw || "").trim(); if (!text) return null;
  const norm = text.replace(/≤/g, "<=").replace(/≥/g, ">=");
  const pt = /^\(\s*([^,()]+?)\s*,\s*([^,()]+?)\s*\)$/.exec(norm);
  try {
    if (pt) { const a = compileExpr(pt[1]), b = compileExpr(pt[2]); return { kind: "point", fx: a.fn, fy: b.fn, vars: new Set([...a.vars, ...b.vars]) }; }
    const m = /^(.*?)(<=|>=|<|>|=)(.*)$/.exec(norm);
    if (!m) { const c = compileExpr(norm); return { kind: "fn", f: c.fn, vars: c.vars }; }
    const [, l, op, r] = m;
    const L = compileExpr(l), R = compileExpr(r);
    const vars = new Set([...L.vars, ...R.vars]);
    if (op === "=") {
      if (l.trim() === "y" && !R.vars.has("y")) return { kind: "fn", f: R.fn, vars: R.vars };
      return { kind: "implicit", F: (e) => L.fn(e) - R.fn(e), vars };
    }
    const lt = op[0] === "<";
    return { kind: "ineq", F: (e) => L.fn(e) - R.fn(e), lt, strict: op.length === 1, vars };
  } catch { return { kind: "error" }; }
}
