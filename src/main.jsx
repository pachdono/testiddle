import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import "./testiddle.css";
import { savedTheme, applyTheme } from "./theme.js";
import { linkFromDwiddle } from "./link.js";

applyTheme(savedTheme());

window.addEventListener("vite:preloadError", (e) => {
  let last = 0;
  try { last = +sessionStorage.getItem("testiddle-reloaded") || 0; } catch { /* private mode */ }
  if (Date.now() - last < 30000) return;
  e.preventDefault();
  try { sessionStorage.setItem("testiddle-reloaded", String(Date.now())); } catch { /* private mode */ }
  location.reload();
});

linkFromDwiddle().finally(() => {
  createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>);
});
