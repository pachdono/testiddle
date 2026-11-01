// The company in full screen practice: a panel either side of the question
// and a cheer now and then for a right answer.
//
// On the left, how this sitting is going: the streak of right answers in a
// row, what has been answered, how many were right, the XP earned. On the
// right, Dwiddle, who reacts to every answer, and the next streak to aim for.
// Now and then a right answer gets a proper cheer, the way Duolingo does it:
// Dwiddle pops up from the bottom with a banner and a burst of confetti. Always
// at a streak of 3, 5, 10 and every 5 after, and otherwise about one right
// answer in four, so it stays a treat rather than noise. It never blocks the
// page: it cannot be clicked and it clears itself.

import { useEffect, useState } from "react";

// A flash on every answer, so a quick right or wrong cannot be missed: a wash
// of green with a tick drawing itself, or of red with a cross. It is over in
// well under a second, never takes a click, and is said aloud to screen readers.
export function AnswerFlash({ ok, seq }) {
  const [shown, setShown] = useState(null);
  useEffect(() => {
    if (ok === null || ok === undefined || !seq) return;
    setShown({ ok, seq });
    const t = setTimeout(() => setShown(null), 750);
    return () => clearTimeout(t);
  }, [seq]);
  if (!shown) return null;
  return (
    <div className={"af " + (shown.ok ? "right" : "wrong")} key={shown.seq}>
      <i className="af-wash" aria-hidden="true" />
      <svg className="af-badge" viewBox="0 0 80 80" aria-hidden="true">
        <circle cx="40" cy="40" r="34" className="af-disc" />
        {shown.ok
          ? <path d="M24 41 L35 52 L57 28" className="af-mark" />
          : <path d="M27 27 L53 53 M53 27 L27 53" className="af-mark" />}
      </svg>
      <span className="af-say" role="status">{shown.ok ? "Correct" : "Not quite"}</span>
    </div>
  );
}
