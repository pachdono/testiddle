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

// A small calculator that does not need eval, which the site's security policy blocks.
export function calc(src, ans = 0) {
  const s = String(src).toLowerCase().replace(/\s+/g, "").replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-").replace(/π/g, "pi").replace(/√/g, "sqrt");
  let i = 0;
  const FN = { sqrt: Math.sqrt, sin: (x) => Math.sin(x), cos: (x) => Math.cos(x), tan: (x) => Math.tan(x), ln: Math.log, log: Math.log10, abs: Math.abs };
  const fail = () => { throw new Error("syntax"); };
  function expr() { let v = term(); while (s[i] === "+" || s[i] === "-") { const o = s[i++]; const r = term(); v = o === "+" ? v + r : v - r; } return v; }
  function term() {
    let v = unary();
    while (i < s.length && (s[i] === "*" || s[i] === "/" || s[i] === "(" || /[a-z\d.]/.test(s[i]))) {
      if (s[i] === "*") { i++; v *= unary(); } else if (s[i] === "/") { i++; v /= unary(); } else v *= unary(); // 2(3) and 2pi
    }
    return v;
  }
  function power() { const b = atom(); if (s[i] === "^") { i++; return Math.pow(b, unary()); } return b; }
  function unary() { if (s[i] === "-") { i++; return -unary(); } if (s[i] === "+") { i++; return unary(); } return power(); }
  function atom() {
    if (s[i] === "(") { i++; const v = expr(); if (s[i] !== ")") fail(); i++; return v; }
    const num = /^(\d+\.?\d*|\.\d+)/.exec(s.slice(i));
    if (num) { i += num[0].length; return Number(num[0]); }
    const word = /^[a-z]+/.exec(s.slice(i));
    if (!word) fail();
    i += word[0].length;
    if (word[0] === "pi") return Math.PI;
    if (word[0] === "e") return Math.E;
    if (word[0] === "ans") return ans;
    if (!FN[word[0]]) fail();
    if (s[i] !== "(") fail();
    i++; const v = expr(); if (s[i] !== ")") fail(); i++;
    return FN[word[0]](v);
  }
  const v = expr();
  if (i < s.length || !Number.isFinite(v)) fail();
  return v;
}
