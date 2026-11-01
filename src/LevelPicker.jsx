// Choosing the level you study at: at sign up, and again in Settings.

import { LEVELS } from "./level.js";

export function LevelPicker({ value, onChange }) {
  return (
    <div className="lvl-grid" role="radiogroup" aria-label="Your level">
      {LEVELS.map((l) => (
        <button type="button" key={l.id} role="radio" aria-checked={value === l.id}
          className={"lvl-opt" + (value === l.id ? " on" : "")} onClick={() => onChange(l.id)}>
          <b>{l.label}</b><span>{l.hint}</span>
        </button>
      ))}
    </div>
  );
}

