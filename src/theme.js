// Light or dark, and nothing else: the classroom look is the same either way.
const KEY = "testiddle-theme";

export function savedTheme() {
  try {
    const v = localStorage.getItem(KEY);
    if (v === "light" || v === "dark") return v;
  } catch { /* storage blocked */ }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(t) {
  document.documentElement.dataset.theme = t;
  const meta = document.querySelectorAll('meta[name="theme-color"]');
  meta.forEach((m) => m.setAttribute("content", t === "dark" ? "#0f1f1c" : "#cfe7e9"));
  try { localStorage.setItem(KEY, t); } catch { /* storage blocked */ }
}
