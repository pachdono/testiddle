// Round illustrated icons for every course, drawn in the same soft outline as Tiddle.

const INK = "#24364a";
const s = { stroke: INK, strokeWidth: 2, strokeLinejoin: "round", strokeLinecap: "round" };
const flag = (a, b, c, vertical = true) => vertical
  ? <g {...s}><path d="M17 14 V54" strokeWidth="2.4" /><path d="M18 16 C26 13 34 19 46 15 V37 C34 41 26 35 18 38 Z" fill="#fff" /><path d="M18 16 C22 15 26 15 26 15.5 V36.2 C23 36 20 37 18 38 Z" fill={a} strokeWidth="0" /><path d="M26 15.5 C30 16 34 18 37 17 V38.5 C33 39 30 37 26 36.2 Z" fill={b} strokeWidth="0" /><path d="M37 17 C40 16.5 43 16 46 15 V37 C43 38.2 40 38.8 37 38.5 Z" fill={c} strokeWidth="0" /><path d="M18 16 C26 13 34 19 46 15 V37 C34 41 26 35 18 38 Z" fill="none" /></g>
  : <g {...s}><path d="M17 14 V54" strokeWidth="2.4" /><path d="M18 16 C26 13 34 19 46 15 V37 C34 41 26 35 18 38 Z" fill={b} /><path d="M18 16 C26 13 34 19 46 15 V22.5 C34 26.5 26 20.5 18 23.5 Z" fill={a} /><path d="M18 30.5 C26 27.5 34 33.5 46 29.5 V37 C34 41 26 35 18 38 Z" fill={c} /></g>;

const ART = {
  sat: <g {...s}><path d="M19 13 H39 L47 21 V53 H19 Z" fill="#fffdf6" /><path d="M39 13 V21 H47" fill="#efe6cf" /><text x="33" y="40" textAnchor="middle" fontFamily="Patrick Hand, cursive" fontSize="13" fill={INK} stroke="none">SAT</text><path d="M24 46 H42" strokeWidth="1.4" /></g>,
  paper: <g {...s}><path d="M19 13 H39 L47 21 V53 H19 Z" fill="#fffdf6" /><path d="M39 13 V21 H47" fill="#efe6cf" /><path d="M24 28 H41 M24 34 H41 M24 40 H35" strokeWidth="1.6" /><path d="M42 50 L53 30 L57 32 L46 52 L41 54 Z" fill="#f5a43c" /></g>,
  computer: <g {...s}><rect x="15" y="17" width="34" height="23" rx="3" fill="#dbe7f7" /><rect x="19" y="21" width="26" height="15" rx="1.5" fill="#fff" /><path d="M24 30 l4 3 8-8" stroke="#3fa46a" strokeWidth="2.4" fill="none" /><path d="M10 44 H54 L50 50 H14 Z" fill="#c9d3df" /></g>,
  rw: <g {...s}><path d="M12 22 C20 18 27 19 32 23 C37 19 44 18 52 22 V48 C44 44 37 45 32 49 C27 45 20 44 12 48 Z" fill="#fff" /><path d="M32 23 V49" /></g>,
  math: <g {...s}><rect x="10" y="38" width="44" height="11" rx="2" fill="#f5c76a" /><path d="M14 33 L32 11 L50 33 Z" fill="#c9eee2" /></g>,
  biology: <g {...s}><path d="M22 42 H42 L39 54 H25 Z" fill="#d9965a" /><path d="M20 40 H44 V44 H20 Z" fill="#c07a3e" /><path d="M32 40 C32 30 31 24 32 16" fill="none" /><path d="M32 26 C24 26 17 21 16 14 C24 13 31 18 32 26 Z" fill="#8fd16a" /><path d="M32 22 C38 17 46 16 50 20 C46 26 38 26 32 22 Z" fill="#6fbf4a" /><path d="M32 33 C26 34 20 32 18 28 C23 26 29 28 32 33 Z" fill="#a8de86" /></g>,
  chemistry: <g {...s}><path d="M27 12 H37 M28.5 12 V26 L17 47 C15 51 18 54 22 54 H42 C46 54 49 51 47 47 L35.5 26 V12" fill="#fff" /><path d="M21.5 42 H42.5 L46 48 C47 51 45 53 42 53 H22 C19 53 17 51 18 48 Z" fill="#7fdcc4" strokeWidth="0" /><circle cx="28" cy="46" r="2" fill="#fff" strokeWidth="1.2" /><circle cx="36" cy="44" r="1.5" fill="#fff" strokeWidth="1.2" /><path d="M36 8 C40 6 44 9 42 12" fill="none" strokeWidth="1.6" /></g>,
  physics: <g {...s}><path d="M32 9 C40 15 43 26 41 38 H23 C21 26 24 15 32 9 Z" fill="#c8b4f2" /><circle cx="32" cy="24" r="4" fill="#fff" /><path d="M23 34 L16 42 L23 41 Z M41 34 L48 42 L41 41 Z" fill="#a98ee6" /><path d="M27 40 C27 46 30 50 32 54 C34 50 37 46 37 40" fill="#f5a43c" /></g>,
  maths: <g {...s}><rect x="13" y="15" width="38" height="34" rx="4" fill="#fff4d6" /><path d="M17 15 V49 M47 15 V49" strokeWidth="2.4" stroke="#b0842f" /><path d="M17 23 H47 M17 32 H47 M17 41 H47" strokeWidth="1.4" /><g fill="#f08ba8" strokeWidth="1.4"><circle cx="23" cy="23" r="3" /><circle cx="29" cy="23" r="3" /><circle cx="39" cy="32" r="3" /><circle cx="25" cy="32" r="3" /><circle cx="33" cy="41" r="3" /><circle cx="41" cy="41" r="3" /></g></g>,
  addmaths: <g {...s}><path d="M14 46 H52 M18 50 V14" strokeWidth="1.8" /><path d="M18 44 C26 44 30 20 38 20 C44 20 46 30 50 32" fill="none" stroke="#c0582f" strokeWidth="2.6" /><text x="40" y="50" fontFamily="Fraunces, serif" fontSize="12" fill={INK} stroke="none" fontStyle="italic">dx</text></g>,
  englang: <g {...s}><path d="M15 20 C23 17 27 20 30 24 V50 C27 46 22 44 15 46 Z" fill="#fff" /><path d="M30 24 C33 20 39 17 46 19 V44 C40 43 34 45 30 50" fill="#fffaf0" /><path d="M50 10 C42 14 38 22 37 30 L40 31 C44 24 48 18 50 10 Z" fill="#f7d58a" /><path d="M37 30 L35 35" /></g>,
  englit: <g {...s}><rect x="14" y="40" width="36" height="9" rx="2" fill="#7fa7e0" /><rect x="17" y="31" width="32" height="9" rx="2" fill="#e8707f" /><rect x="15" y="22" width="34" height="9" rx="2" fill="#9ed6b5" /><path d="M20 26.5 H34 M21 35.5 H31" strokeWidth="1.4" /></g>,
  esl: <g {...s}><path d="M12 16 H40 C43 16 45 18 45 21 V33 C45 36 43 38 40 38 H24 L17 44 V38 H17 C14 38 12 36 12 33 Z" fill="#cfe6fb" /><path d="M30 28 H50 C52 28 53 30 53 32 V42 C53 44 52 46 50 46 H48 V51 L42 46 H33 C31 46 30 44 30 42 Z" fill="#fff" /><text x="28" y="31" textAnchor="middle" fontFamily="Patrick Hand, cursive" fontSize="11" fill={INK} stroke="none">Hi!</text></g>,
  french: flag("#3b6fd0", "#fff", "#e05a5a"),
  german: flag("#2a2a2a", "#d94141", "#f2c230", false),
  spanish: flag("#d94141", "#f2c230", "#d94141", false),
  mandarin: <g {...s}><path d="M14 14 H50 V44 H30 L22 51 V44 H14 Z" fill="#fde2e2" /><text x="32" y="38" textAnchor="middle" fontFamily="serif" fontSize="22" fill="#c0392b" stroke="none">中</text></g>,
  thai: <g {...s}><path d="M14 14 H50 V44 H30 L22 51 V44 H14 Z" fill="#dce8fb" /><text x="32" y="38" textAnchor="middle" fontFamily="sans-serif" fontSize="22" fill="#2c5aa0" stroke="none">ก</text></g>,
  cs: <g {...s}><rect x="12" y="16" width="40" height="28" rx="3" fill="#2f3b4a" /><path d="M19 25 L24 30 L19 35 M27 36 H35" stroke="#7fdcc4" strokeWidth="2.4" fill="none" /><path d="M8 48 H56 L52 53 H12 Z" fill="#c9d3df" /></g>,
  ict: <g {...s}><rect x="11" y="13" width="34" height="25" rx="3" fill="#dbe7f7" /><path d="M24 38 V44 M18 45 H34" /><rect x="16" y="18" width="11" height="8" rx="1" fill="#fff" strokeWidth="1.4" /><path d="M30 19 H40 M30 23 H38 M16 31 H40" strokeWidth="1.4" /><path d="M44 34 C44 28 54 28 54 34 V44 C54 50 44 50 44 44 Z" fill="#fff" /><path d="M49 29 V35" /></g>,
  dt: <g {...s}><path d="M15 47 L38 24" strokeWidth="5" stroke="#c9a06a" /><path d="M15 47 L38 24" strokeWidth="1.6" /><path d="M33 19 L44 13 L50 19 L44 25 Z" fill="#9aa5b1" /><path d="M20 18 L46 44 L50 40 L24 14 Z" fill="#e4e8ec" /><path d="M24 14 L20 18 L14 12 L18 8 Z" fill="#d9965a" /></g>,
  geography: <g {...s}><circle cx="32" cy="32" r="20" fill="#9fd3f5" /><path d="M20 22 C25 20 28 24 27 28 C26 32 21 31 20 36 C17 33 16 27 20 22 Z M34 18 C40 18 46 22 48 28 C43 29 40 26 37 29 C35 32 39 36 36 40 C33 43 30 40 31 35 C32 30 30 24 34 18 Z M38 46 C41 44 45 45 46 42" fill="#8fd16a" /></g>,
  history: <g {...s}><path d="M20 30 C20 20 26 15 33 15 C40 15 46 20 46 30 V40 H40 V33 H26 V44 C26 47 23 48 20 47 Z" fill="#b8c1cc" /><path d="M26 33 H40" /><path d="M31 15 C29 9 33 6 40 8 C46 10 48 14 46 20 C42 16 37 15 31 15 Z" fill="#e8707f" /><path d="M33 33 V40" /></g>,
  economics: <g {...s}><ellipse cx="30" cy="38" rx="17" ry="12" fill="#f5a6b8" /><circle cx="42" cy="33" r="1.4" fill={INK} /><path d="M45 37 C49 37 49 41 46 41" fill="#f5a6b8" /><path d="M20 48 V53 M38 48 V53" strokeWidth="3" /><path d="M24 27 H32" strokeWidth="2.6" /><circle cx="28" cy="16" r="5" fill="#f5c76a" /></g>,
  business: <g {...s}><rect x="12" y="22" width="40" height="28" rx="4" fill="#c79a62" /><path d="M24 22 V17 C24 15 25 14 27 14 H37 C39 14 40 15 40 17 V22" fill="none" /><path d="M12 33 H52" /><rect x="28" y="30" width="8" height="6" rx="1" fill="#f5c76a" /></g>,
  accounting: <g {...s}><rect x="14" y="12" width="32" height="40" rx="3" fill="#fff" /><path d="M14 20 H46 M24 12 V52 M18 27 H21 M28 27 H41 M18 33 H21 M28 33 H38 M18 39 H21 M28 39 H42" strokeWidth="1.4" /><circle cx="46" cy="46" r="9" fill="#f5c76a" /><text x="46" y="50" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill={INK} stroke="none">$</text></g>,
  global: <g {...s}><circle cx="32" cy="32" r="17" fill="#c9eee2" /><path d="M15 32 H49 M32 15 C25 22 25 42 32 49 M32 15 C39 22 39 42 32 49" strokeWidth="1.4" fill="none" /><path d="M48 14 C54 20 55 27 52 34" fill="none" stroke="#f5a43c" strokeWidth="2.4" /><path d="M52 34 L48 32 M52 34 L54 30" stroke="#f5a43c" /></g>,
  art: <g {...s}><path d="M32 12 C45 12 54 21 52 31 C51 37 44 36 41 38 C38 40 41 45 37 49 C33 53 13 49 12 33 C11 21 20 12 32 12 Z" fill="#fff1d6" /><circle cx="23" cy="25" r="3.5" fill="#e8707f" /><circle cx="33" cy="20" r="3.5" fill="#f5c76a" /><circle cx="43" cy="25" r="3.5" fill="#7fa7e0" /><circle cx="21" cy="36" r="3.5" fill="#8fd16a" /></g>,
  music: <g {...s}><path d="M26 44 V16 L48 11 V39" fill="none" strokeWidth="2.4" /><path d="M26 22 L48 17" strokeWidth="2.4" /><ellipse cx="21" cy="45" rx="6" ry="4.5" fill="#a98ee6" /><ellipse cx="43" cy="40" rx="6" ry="4.5" fill="#a98ee6" /></g>,
  drama: <g {...s}><path d="M12 16 C20 13 30 13 36 16 C37 28 33 38 24 40 C15 38 11 28 12 16 Z" fill="#fff4d6" /><path d="M18 24 L21 24 M27 24 L30 24 M19 31 C21 34 27 34 29 31" fill="none" /><path d="M30 24 C36 21 46 21 52 24 C53 36 49 46 40 48 C34 47 30 42 29 36" fill="#c9b4f2" /><path d="M36 31 L39 31 M44 31 L47 31 M37 41 C39 38 45 38 47 41" fill="none" /></g>,
  pe: <g {...s}><circle cx="32" cy="30" r="16" fill="#fff" /><path d="M32 22 L38 26 L36 33 H28 L26 26 Z" fill={INK} /><path d="M32 14 V22 M38 26 L46 23 M36 33 L41 41 M28 33 L23 41 M26 26 L18 23" strokeWidth="1.4" /><path d="M14 46 C22 52 42 52 50 46 L50 52 C42 56 22 56 14 52 Z" fill="#9fc9f5" /></g>,
};

export function SubjectIcon({ id, size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="28" fill="#fff" stroke="#cdd3da" strokeWidth="1.4" />
      {ART[id] || ART.sat}
    </svg>
  );
}
export const ICON_IDS = Object.keys(ART);
