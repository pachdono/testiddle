// The colour theme. Testiddle is light only.
const KEY = "testiddle-theme";

// Testiddle is light only. Dark mode was switched off, so any saved choice is cleared and the
// device's own dark setting is ignored.
export function savedTheme() {
  try { localStorage.removeItem(KEY); } catch { /* storage blocked */ }
  return "light";
}

export function applyTheme() {
  document.documentElement.dataset.theme = "light";
  document.documentElement.style.colorScheme = "light";
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute("content", "#ffffff"));
}
