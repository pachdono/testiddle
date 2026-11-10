// What the student has done, kept on this device: quiz answers, flashcard ratings, the daily XP
// goal and the small choices (avatar, hidden courses). Results of sat tests are in courses.js's history.

import { dayOf } from "./courses.js";

const read = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch { return d; } };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } };

export const KEYS = { goal: "testiddle-goal", quiz: "testiddle-quiz", cards: "testiddle-cards", hidden: "testiddle-hidden", avatar: "testiddle-avatar", tour: "testiddle-seen" };
export const GOALS = [["Chilled", 100, 10], ["Intermediate", 150, 20], ["Advanced", 250, 40], ["Intense", 500, 60]];
export const XP = { right: 10, tried: 3, card: 3, perRight: 2, sitting: 20 };
const CAP = 3000;
const changed = () => { try { window.dispatchEvent(new Event("testiddle:progress")); } catch { /* not in a browser */ } };

export const getGoal = () => { const g = Number(read(KEYS.goal, 150)); return GOALS.some((x) => x[1] === g) ? g : 150; };
export const setGoal = (g) => { write(KEYS.goal, g); changed(); };

/** A quiz answer: remembered by question, and logged with its time for the activity page. */
export function logQuiz(id, ok, now = Date.now()) {
  const log = read(KEYS.quiz, []);
  log.push({ t: now, id, ok: !!ok });
  write(KEYS.quiz, log.length > CAP ? log.slice(-CAP) : log);
  changed();
}
export const quizLog = () => { const l = read(KEYS.quiz, []); return Array.isArray(l) ? l : []; };

/** How well a flashcard is known: 0 not rated, 1 again, 2 nearly, 3 got it. */
export function rateCard(id, level, now = Date.now()) {
  const c = read(KEYS.cards, {});
  c[id] = { level, t: now };
  write(KEYS.cards, c);
  changed();
}
export const cardRatings = () => { const c = read(KEYS.cards, {}); return c && typeof c === "object" && !Array.isArray(c) ? c : {}; };

/** Everything that earned XP or counted as study, as one list: { t, on, xp, kind, minutes }. */
export function activity(history, quiz = quizLog(), cards = cardRatings()) {
  const rows = [];
  history.forEach((h) => rows.push({ t: h.id, on: h.on, xp: (h.right || 0) * XP.perRight + XP.sitting, kind: "Test", minutes: h.minutes || 0, title: h.paper }));
  quiz.forEach((q) => rows.push({ t: q.t, on: dayOf(new Date(q.t)), xp: q.ok ? XP.right : XP.tried, kind: "Quiz", minutes: 0 }));
  Object.values(cards).forEach((c) => c?.t && c.level > 0 && rows.push({ t: c.t, on: dayOf(new Date(c.t)), xp: XP.card, kind: "Flashcards", minutes: 0 }));
  return rows.sort((a, b) => b.t - a.t);
}

/** XP by calendar day. */
export function xpByDay(rows) {
  const m = new Map();
  rows.forEach((r) => m.set(r.on, (m.get(r.on) || 0) + r.xp));
  return m;
}

/**
 * The run of days in a row up to today. A missed day is covered by a streak freeze while one is left
 * (two at a time), applied automatically, as in the reference. Today not yet done does not break it.
 */
export function streakWith(rows, today = new Date(), freezes = 2) {
  const days = new Set(rows.map((r) => r.on));
  const d = new Date(today);
  if (!days.has(dayOf(d))) d.setDate(d.getDate() - 1);
  let run = 0, used = 0;
  const frozen = new Set();
  for (let guard = 0; guard < 4000; guard++) {
    if (days.has(dayOf(d))) { run += 1; d.setDate(d.getDate() - 1); continue; }
    // a gap of one day, with study before it, is covered by a freeze
    const before = new Date(d); before.setDate(before.getDate() - 1);
    if (used < freezes && days.has(dayOf(before)) && run > 0) { used += 1; frozen.add(dayOf(d)); run += 1; d.setDate(d.getDate() - 1); continue; }
    break;
  }
  return { run, used, left: Math.max(0, freezes - used), days, frozen };
}

/** The courses the student has added. Everything is on until one is removed in Manage courses. */
export const hiddenCourses = () => { const h = read(KEYS.hidden, []); return Array.isArray(h) ? h : []; };
export function setHidden(list) { write(KEYS.hidden, list); changed(); }

export const getAvatar = () => read(KEYS.avatar, "tiddle");
export function setAvatar(id) { write(KEYS.avatar, id); changed(); }

/** XP for the bars in the popover: the last 7 days, 30 days, 12 months or every month so far. */
export function xpSeries(rows, range, today = new Date()) {
  const byDay = xpByDay(rows);
  const total = (pred) => { let n = 0; byDay.forEach((v, k) => { if (pred(k)) n += v; }); return n; };
  if (range === "week") {
    const monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - ((today.getDay() + 6) % 7));
    return ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((label, i) => { const d = new Date(monday); d.setDate(monday.getDate() + i); return { label, value: byDay.get(dayOf(d)) || 0 }; });
  }
  if (range === "month") {
    return Array.from({ length: 30 }, (_, i) => { const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 29 + i); return { label: i % 5 === 0 ? String(d.getDate()) : "", value: byDay.get(dayOf(d)) || 0 }; });
  }
  const months = range === "year" ? 12 : Math.max(1, Math.min(24, (() => { const first = rows.length ? rows[rows.length - 1].on : dayOf(today); return (today.getFullYear() - Number(first.slice(0, 4))) * 12 + today.getMonth() - (Number(first.slice(5, 7)) - 1) + 1; })()));
  return Array.from({ length: months }, (_, i) => { const d = new Date(today.getFullYear(), today.getMonth() - (months - 1) + i, 1); const pre = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`; return { label: d.toLocaleDateString(undefined, { month: "short" }).slice(0, 3), value: total((k) => k.startsWith(pre)) }; });
}

/** The longest run of days in a row anywhere in the activity. */
export function longestRunOf(rows) {
  const days = [...new Set(rows.map((r) => r.on))].sort();
  let best = 0, run = 0, prev = null;
  for (const d of days) {
    const t = new Date(d + "T12:00:00");
    run = prev && Math.round((t - prev) / 86400000) === 1 ? run + 1 : 1;
    prev = t; best = Math.max(best, run);
  }
  return best;
}
