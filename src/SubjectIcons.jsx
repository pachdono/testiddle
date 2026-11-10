// Round illustrated icons for every course: thin ink lines, soft two-tone fills and small
// details, like a hand-inked sticker.

const INK = "#3b4654";
const L = { stroke: INK, strokeWidth: 1.1, strokeLinejoin: "round", strokeLinecap: "round" };
const T = { stroke: INK, strokeWidth: 0.7, strokeLinecap: "round", fill: "none", opacity: 0.55 }; // fine detail
const HL = { fill: "#fff", opacity: 0.75 }; // highlights

function Flag({ a, b, c, rows }) {
  const wave = "C25 13.6 33 18.6 46 14.6";
  return (
    <g {...L}>
      <path d="M17.2 12.5 V54" strokeWidth="1.6" stroke="#8a7a6a" />
      <circle cx="17.2" cy="12" r="1.6" fill="#d9c7a3" />
      <clipPath id={`f${a}${b}${c}`}><path d={`M18 16 ${wave} V37 C33 41 25 35.5 18 38 Z`} /></clipPath>
      <g clipPath={`url(#f${a}${b}${c})`} strokeWidth="0">
        {rows
          ? <><rect x="17" y="10" width="30" height="11" fill={a} /><rect x="17" y="21" width="30" height="9" fill={b} /><rect x="17" y="30" width="30" height="12" fill={c} /></>
          : <><rect x="17" y="10" width="10" height="32" fill={a} /><rect x="27" y="10" width="10" height="32" fill={b} /><rect x="37" y="10" width="10" height="32" fill={c} /></>}
        <path d="M18 24 C26 21 34 27 46 23 V30 C34 34 26 28 18 31 Z" fill="#000" opacity=".06" />
      </g>
      <path d={`M18 16 ${wave} V37 C33 41 25 35.5 18 38 Z`} fill="none" />
    </g>
  );
}

const ART = {
  sat: <g {...L}><path d="M21 12 H39 L46 19 V52 H21 Z" fill="#fffdf7" /><path d="M39 12 V19 H46" fill="#efe7d4" /><path d="M24 15 V50" {...T} /><rect x="25" y="23" width="16" height="9" rx="1.5" fill="#dfeafc" /><text x="33" y="30.2" textAnchor="middle" fontFamily="Patrick Hand, cursive" fontSize="8" fill="#2f5d9a" stroke="none">SAT</text><path d="M26 37 H41 M26 41 H41 M26 45 H36" {...T} opacity=".7" /><circle cx="27" cy="37" r="1.3" fill="#9dd9c5" strokeWidth=".7" /></g>,
  paper: <g {...L}><path d="M19 13 H37 L44 20 V52 H19 Z" fill="#fffdf7" /><path d="M37 13 V20 H44" fill="#efe7d4" /><path d="M23 26 H39 M23 31 H39 M23 36 H33" {...T} /><path d="M40 51 L50 31 L53.5 32.8 L43.5 52.8 L39.6 54.2 Z" fill="#f3b75a" /><path d="M50 31 L51.6 27.8 L55.1 29.6 L53.5 32.8" fill="#f2a5b4" /><path d="M39.6 54.2 L40.4 51.6 L42.4 52.6 Z" fill={INK} /></g>,
  computer: <g {...L}><rect x="15" y="16" width="34" height="23" rx="2.5" fill="#cfd8e3" /><rect x="18" y="19" width="28" height="17" rx="1" fill="#f5f9ff" /><path d="M23 28 l4 3 9-9" stroke="#3c9c6a" strokeWidth="1.8" fill="none" /><path d="M10 43 H54 L51 49 H13 Z" fill="#dde3ea" /><path d="M14 45.5 H50" {...T} /><path d="M28 47.3 H36" {...T} /></g>,
  rw: <g {...L}><path d="M12 21 C20 17 27 18 32 22 C37 18 44 17 52 21 V47 C44 43 37 44 32 48 C27 44 20 43 12 47 Z" fill="#fffdf7" /><path d="M32 22 V48" /><path d="M16 27 C20 25.5 24 25.5 28 27 M16 31 C20 29.5 24 29.5 28 31 M16 35 C20 33.5 24 33.5 28 35 M36 27 C40 25.5 44 25.5 48 27 M36 31 C40 29.5 44 29.5 48 31" {...T} /></g>,
  math: <g {...L}><rect x="11" y="38" width="42" height="10" rx="1.5" fill="#f2cf7d" /><path d="M16 38 V42 M21 38 V44 M26 38 V42 M31 38 V44 M36 38 V42 M41 38 V44 M46 38 V42" {...T} /><path d="M15 33 L32 12 L49 33 Z" fill="#cbeee2" /><path d="M24 29 L32 19 L40 29 Z" fill="#fffdf7" /></g>,
  biology: <g {...L}>
    <path d="M32 41 C31.6 33 32.4 26 31.8 19" fill="none" stroke="#5d8a3a" strokeWidth="1.3" />
    <path d="M31.8 27 C25 28 18.5 24.5 16 17.5 C23.5 15.8 30.4 19.6 31.8 27 Z" fill="#9fd477" /><path d="M31.6 26.6 C26 24.5 21.5 21.4 18 18.4" {...T} stroke="#4c7a2f" opacity=".7" /><path d="M24 22.8 C23.3 21 23.6 19.7 24.2 18.6 M27.6 24.8 C27.6 23 28.2 21.8 29 21" {...T} stroke="#4c7a2f" />
    <path d="M32 22.5 C36.6 16.3 44.5 14.6 49.5 17.6 C46.4 24.2 38.6 26.4 32 22.5 Z" fill="#7fc25a" /><path d="M32.4 22.3 C37.5 20.2 43 18.6 48.2 17.9" {...T} stroke="#3f6b26" opacity=".7" />
    <path d="M32 33 C27.2 34.6 21.5 33.4 19.4 29.3 C24.2 27.1 29.6 28.6 32 33 Z" fill="#b6e094" /><path d="M31.6 32.8 C27.5 31.3 24 30.5 20.6 29.6" {...T} stroke="#4c7a2f" />
    <path d="M32 18.8 C31 15.6 32.8 12.8 35 12.4 C35.6 15.3 34.4 17.8 32 18.8 Z" fill="#c6e8a6" />
    <path d="M21 42 H43 L40.2 54 H23.8 Z" fill="#e3a271" /><path d="M23.5 47 L40.5 47" {...T} /><path d="M38.3 44 L36.2 52.8" fill="none" stroke="#c4824f" strokeWidth=".9" />
    <rect x="19.5" y="39.4" width="25" height="4.2" rx="1" fill="#cf8a57" /><path d="M21.5 40.6 H42.5" {...T} stroke="#fff" opacity=".6" />
  </g>,
  chemistry: <g {...L}>
    <path d="M27.5 11 H36.5" strokeWidth="1.4" /><path d="M28.8 11.5 V25.6 L17.4 46.4 C15.6 50.2 18 53.6 22 53.6 H42 C46 53.6 48.4 50.2 46.6 46.4 L35.2 25.6 V11.5" fill="#fbfdff" />
    <path d="M20.6 41 Q32 38.4 43.4 41 L46.6 46.6 C48.2 50 46 53.2 42 53.2 H22 C18 53.2 15.8 50 17.4 46.6 Z" fill="#8edec6" strokeWidth="0" /><path d="M20.6 41 Q32 38.4 43.4 41" fill="none" stroke="#3e9f84" strokeWidth=".9" />
    <path d="M18.8 47 Q32 44.6 45.2 47" {...T} stroke="#3e9f84" />
    <circle cx="27" cy="47.4" r="1.6" fill="#fff" strokeWidth=".7" /><circle cx="35" cy="44.6" r="1.1" fill="#fff" strokeWidth=".7" /><circle cx="31" cy="50" r=".9" fill="#fff" strokeWidth=".6" />
    <path d="M31 13.5 V24" stroke="#fff" strokeWidth="1.4" opacity=".9" /><path d="M21.5 45 L27 34.8" stroke="#fff" strokeWidth="1.4" opacity=".8" />
    <path d="M34 8.4 C36 6 39.6 6.4 40 9 C42.6 8.2 44.6 10.6 43 12.8" fill="#e7f6f1" strokeWidth=".9" /><circle cx="38" cy="5" r="1.2" fill="#e7f6f1" strokeWidth=".7" />
  </g>,
  physics: <g {...L}>
    <path d="M27 43 C26.8 48 29.6 52 32 55.5 C34.4 52 37.2 48 37 43 Z" fill="#f6b24f" /><path d="M29.6 43 C29.6 46.6 30.8 49.4 32 51.2 C33.2 49.4 34.4 46.6 34.4 43 Z" fill="#ffe08a" strokeWidth="0" />
    <path d="M24.4 34 L16.6 41.4 C16 42.2 16.4 43.2 17.4 43 L24.4 41.8 Z" fill="#a993e3" /><path d="M39.6 34 L47.4 41.4 C48 42.2 47.6 43.2 46.6 43 L39.6 41.8 Z" fill="#a993e3" />
    <path d="M32 8.5 C40.6 14 43.4 25.6 41 38.4 C41 41.2 39.6 43.4 37 43.4 H27 C24.4 43.4 23 41.2 23 38.4 C20.6 25.6 23.4 14 32 8.5 Z" fill="#d6c8f6" /><path d="M36 13 C39.4 18 40.6 26 39.2 36" {...T} stroke="#7d64c9" />
    <path d="M26.6 15.6 C30 13.6 34 13.6 37.4 15.6" fill="none" strokeWidth=".9" />
    <circle cx="32" cy="25" r="5.2" fill="#c7e6fa" /><circle cx="32" cy="25" r="3.2" fill="#e9f5fd" strokeWidth=".7" /><path d="M30 23.4 C30.6 22.6 31.6 22.2 32.4 22.4" stroke="#fff" strokeWidth="1" />
    <path d="M29 37.5 H35" {...T} /><path d="M28 13.4 C27 18 26.8 23 27.4 29" stroke="#fff" strokeWidth="1.2" opacity=".7" />
  </g>,
  maths: <g {...L}>
    <rect x="12.5" y="14" width="39" height="36" rx="3" fill="#e3c08f" /><rect x="16" y="17.5" width="32" height="29" rx="1" fill="#fff7e8" />
    <path d="M14 16 C24 15 40 15.6 50 16.4" {...T} stroke="#8a5f2d" />
    {[24, 32, 40].map((y) => <path key={y} d={`M16 ${y} H48`} stroke="#a77c49" strokeWidth=".9" />)}
    {[[20.5, 24], [25, 24], [36, 24], [21.5, 32], [31, 32], [35.5, 32], [40, 32], [26, 40], [43.5, 40]].map(([x, y], i) => <g key={i}><circle cx={x} cy={y} r="2.4" fill={i % 3 === 0 ? "#f2a3b6" : i % 3 === 1 ? "#f6c1cd" : "#e98aa1"} strokeWidth=".8" /><circle cx={x - .8} cy={y - .8} r=".6" {...HL} stroke="none" /></g>)}
  </g>,
  addmaths: <g {...L}><rect x="13" y="13" width="38" height="38" rx="2" fill="#fffdf7" /><path d="M13 20 H51 M13 27 H51 M13 34 H51 M13 41 H51 M20 13 V51 M27 13 V51 M34 13 V51 M41 13 V51" stroke="#cfe0f2" strokeWidth=".6" /><path d="M17 46 H48 M18 47 V15" strokeWidth=".9" /><path d="M18 43 C25 43 28 20 35 20 C41 20 43 30 47 31" fill="none" stroke="#d2643b" strokeWidth="1.5" /><circle cx="35" cy="20" r="1.2" fill="#d2643b" stroke="none" /><text x="38" y="48.5" fontFamily="Fraunces, serif" fontSize="7" fill={INK} stroke="none" fontStyle="italic">dy/dx</text></g>,
  englang: <g {...L}><path d="M14 20 C21 17.4 26.4 19.4 30 23.6 V50 C26.4 46 21 44.6 14 46.4 Z" fill="#fffdf7" /><path d="M30 23.6 C33.6 19.4 39 17.4 46 20 V46.4 C39 44.6 33.6 46 30 50" fill="#fbf4e3" /><path d="M17 26 C20 25 23.6 25.4 27 27 M17 30 C20 29 23.6 29.4 27 31 M17 34 C20 33 23.6 33.4 27 35" {...T} /><path d="M51.5 9 C44 12.6 39.6 20 38.2 28.6 L40.6 29.4 C44.6 22.6 49.4 16.8 51.5 9 Z" fill="#f5dfa0" /><path d="M51 10 C46 15 42.6 21 40.6 28" {...T} /><path d="M38.2 28.6 L36.6 33.4 L40.6 29.4" fill="#4e5a68" /><circle cx="44.6" cy="44" r="3.4" fill="#5b8fd6" /><path d="M42.2 41 H47" strokeWidth=".9" /></g>,
  englit: <g {...L}><rect x="13" y="41" width="38" height="9" rx="1.5" fill="#86aee6" /><path d="M16 43.6 H48" {...T} stroke="#fff" opacity=".8" /><rect x="16" y="31.6" width="33" height="9.4" rx="1.5" fill="#ec8d9b" /><rect x="20" y="34" width="13" height="4.6" rx=".6" fill="#fbe3c7" strokeWidth=".7" /><text x="26.5" y="37.6" textAnchor="middle" fontFamily="serif" fontSize="3.4" fill="#8b3a46" stroke="none">VERSE</text><rect x="14" y="22.4" width="35" height="9.2" rx="1.5" fill="#a9dcc0" /><path d="M18 25 H45" {...T} stroke="#fff" opacity=".8" /><path d="M22 22.4 V31.6 M42 22.4 V31.6" {...T} /></g>,
  esl: <g {...L}><path d="M11.5 15 H39 C41.8 15 43.6 16.8 43.6 19.6 V31.4 C43.6 34.2 41.8 36 39 36 H23.6 L17.4 41.4 V36 H16 C13.2 36 11.5 34.2 11.5 31.4 Z" fill="#d6e8fb" /><path d="M29.6 27 H48.4 C50.6 27 52 28.4 52 30.6 V40.6 C52 42.8 50.6 44.2 48.4 44.2 H47 V49.4 L41.4 44.2 H33.2 C31 44.2 29.6 42.8 29.6 40.6 Z" fill="#fff7e2" /><text x="27.5" y="28.4" textAnchor="middle" fontFamily="Patrick Hand, cursive" fontSize="9" fill="#2f5d9a" stroke="none">Hello</text><text x="41" y="38.6" textAnchor="middle" fontFamily="Patrick Hand, cursive" fontSize="8" fill="#a5642a" stroke="none">Hi!</text></g>,
  french: <Flag a="#4a7fd4" b="#fbfbfb" c="#e2636a" />,
  german: <Flag a="#3a3f47" b="#d84f4f" c="#f2c64a" rows />,
  spanish: <g {...L}><path d="M17.2 12.5 V54" strokeWidth="1.6" stroke="#8a7a6a" /><circle cx="17.2" cy="12" r="1.6" fill="#d9c7a3" /><path d="M18 16 C25 13.6 33 18.6 46 14.6 V21.5 C33 25.5 25 20.5 18 22.9 Z" fill="#d84f4f" /><path d="M18 22.9 C25 20.5 33 25.5 46 21.5 V31 C33 35 25 30 18 32.4 Z" fill="#f4c64e" /><path d="M18 32.4 C25 30 33 35 46 31 V37 C33 41 25 35.5 18 38 Z" fill="#d84f4f" /><rect x="22" y="24.4" width="4.4" height="5" rx="1" fill="#e8a24a" strokeWidth=".6" /></g>,
  mandarin: <g {...L}><path d="M14 13 H50 C51.6 13 52.6 14 52.6 15.6 V41 C52.6 42.6 51.6 43.6 50 43.6 H30.6 L22.4 50.6 V43.6 H14 C12.4 43.6 11.4 42.6 11.4 41 V15.6 C11.4 14 12.4 13 14 13 Z" fill="#fde4e2" /><text x="32" y="37" textAnchor="middle" fontFamily="'Noto Serif SC', 'Songti SC', serif" fontSize="20" fill="#c2433b" stroke="none">中</text><path d="M44 17 L46 15.4 M47.4 19.6 L49.6 18.6" {...T} stroke="#c2433b" /></g>,
  thai: <g {...L}><path d="M14 13 H50 C51.6 13 52.6 14 52.6 15.6 V41 C52.6 42.6 51.6 43.6 50 43.6 H30.6 L22.4 50.6 V43.6 H14 C12.4 43.6 11.4 42.6 11.4 41 V15.6 C11.4 14 12.4 13 14 13 Z" fill="#dfe9fb" /><text x="32" y="37" textAnchor="middle" fontFamily="Sarabun, 'Thonburi', sans-serif" fontSize="20" fill="#2c5aa0" stroke="none">ก</text><path d="M44 17 L46 15.4 M47.4 19.6 L49.6 18.6" {...T} stroke="#2c5aa0" /></g>,
  cs: <g {...L}><rect x="12.5" y="15" width="39" height="27" rx="2.4" fill="#5b6574" /><rect x="15.5" y="18" width="33" height="21" rx="1" fill="#273241" /><path d="M20 24 L24 27.4 L20 30.8" stroke="#8fe3c9" strokeWidth="1.3" fill="none" /><path d="M26.6 31.4 H33" stroke="#8fe3c9" strokeWidth="1.3" /><path d="M20 35 H29 M31 35 H36" stroke="#6c7c92" strokeWidth=".8" /><path d="M8 46 H56 L52.6 51.4 H11.4 Z" fill="#cbd3dc" /><path d="M12 48.6 H52" {...T} /><path d="M17 20.5 C24 19.8 30 19.8 36 20" stroke="#fff" strokeWidth=".6" opacity=".25" /></g>,
  ict: <g {...L}><rect x="10.5" y="12.5" width="34" height="24.5" rx="2.2" fill="#d4dde8" /><rect x="13.4" y="15.4" width="28.2" height="18.6" rx=".8" fill="#f6faff" /><rect x="16" y="18" width="10" height="7.4" rx=".6" fill="#bfe2f5" strokeWidth=".7" /><path d="M16.4 24.6 L19.6 21.4 L22 23.6 L23.6 22.2 L25.6 24.6" stroke="#5aa06b" strokeWidth=".8" fill="none" /><path d="M28.4 19 H38.6 M28.4 22 H36.4 M16 29 H38.6 M16 31.6 H33" {...T} /><path d="M27.5 37 V43 M21 43.4 H34" /><path d="M44 33 C44 27.6 53.6 27.6 53.6 33 V43.4 C53.6 49.4 44 49.4 44 43.4 Z" fill="#fbfbfb" /><path d="M48.8 28.6 V34.4 M44 34.6 H53.6" strokeWidth=".8" /><path d="M48.8 22 C48.8 25 48.8 26 48.8 28.6" fill="none" strokeWidth=".8" /></g>,
  dt: <g {...L}><path d="M13.6 49.4 L37.4 25.6" stroke="#c99a62" strokeWidth="4.4" /><path d="M13.6 49.4 L37.4 25.6" fill="none" strokeWidth=".7" opacity=".5" /><path d="M33.2 21 L43.4 14 L50.4 21 L43.4 31 Z" fill="#aab5c1" /><path d="M41 18.6 L46 23.6" {...T} stroke="#fff" opacity=".8" /><path d="M20.4 16.6 L48 44.2 L51.6 40.6 L24 13 Z" fill="#e6eaee" /><path d="M24.6 17.4 L46.4 39.2" {...T} /><path d="M24 13 L20.4 16.6 L14.6 10.8 C13.8 10 13.8 8.8 14.6 8 L15.2 7.4 C16 6.6 17.2 6.6 18 7.4 Z" fill="#d7955e" /></g>,
  geography: <g {...L}><circle cx="32" cy="32" r="20" fill="#a5d6f5" /><path d="M14.5 26 C19 20 25 17.6 29 18.2 C31 21 28 24 25 23.8 C22 23.6 21.4 27 23.6 29.4 C25.8 31.8 24.2 35.8 20.2 36.4 C17.4 36.8 15 34 14 31 Z" fill="#9dd27a" /><path d="M35 13.6 C41 14.6 47.4 19 49.6 26 C46 27.2 42.6 25 40.4 27.4 C38.4 29.6 41.6 33.6 39.4 37.6 C37.4 41.4 33 40 33.2 35.4 C33.4 30.6 31.2 27 33.4 23 C35.2 19.8 33.4 16.6 35 13.6 Z" fill="#88c765" /><path d="M36.6 45.6 C39.6 43.6 44 44.4 45.6 41.4" fill="none" stroke="#5f9b44" strokeWidth=".9" /><path d="M18 22 C15.6 26 15.2 31 16.6 35" fill="none" stroke="#fff" strokeWidth="1.4" opacity=".55" /><path d="M23 19.6 C21.6 21 21 22 21 22" {...T} /></g>,
  history: <g {...L}><path d="M19.6 31 C19.6 21 26 15.6 33 15.6 C40 15.6 46.4 21 46.4 31 V41 C46.4 43 45.2 44 43.4 44 H40 V34 H26 V44.6 C26 47.4 23.6 48.6 21 47.6 C20 47.2 19.6 46.2 19.6 45 Z" fill="#c4ccd6" /><path d="M23 24 C24.6 20 28.6 17.6 33 17.6" {...T} stroke="#fff" opacity=".85" /><path d="M26 34 H40" /><path d="M33 34 V40.6" /><path d="M29.4 15.8 C28 9.6 32.4 6.6 39.4 8.2 C45 9.4 47.4 13.4 46 19.6 C42.2 16.4 36.8 15.2 29.4 15.8 Z" fill="#e47c88" /><path d="M32 13 C35 11.6 39 11.6 43 13.6 M31 10.6 C34 9.4 38 9.6 42 11.2" {...T} stroke="#9c3f4b" /></g>,
  economics: <g {...L}><path d="M14 38 C13.2 30.4 19.4 25.2 28 25 C37.6 24.8 45 29 45.4 35.4 C48.2 34.8 49.6 36.6 49 38.6 C48.4 40.2 46.6 40.6 45.2 40 C43.6 44.6 38.2 48 30 48 C20.6 48 14.6 44 14 38 Z" fill="#f5b1c1" /><path d="M20 47 V52.6 H24 V48.4 M36 48 V52.6 H40 V47.4" fill="#f5b1c1" /><circle cx="40.4" cy="33.4" r="1.1" fill={INK} stroke="none" /><path d="M24 29.6 H31.6" strokeWidth="1.5" /><path d="M17 33 C17.4 30.6 18.6 29 20.4 28" {...T} stroke="#fff" opacity=".9" /><path d="M14.4 37 C12.4 37 11.4 35.4 12.4 34" fill="none" strokeWidth=".9" /><circle cx="28" cy="15.4" r="5.4" fill="#f4cf6f" /><circle cx="28" cy="15.4" r="3.4" fill="none" strokeWidth=".7" /><path d="M26.4 13.4 C27 12.8 28 12.6 28.8 12.8" stroke="#fff" strokeWidth=".9" /></g>,
  business: <g {...L}><path d="M24.4 21 V16.4 C24.4 14.8 25.4 13.8 27 13.8 H37 C38.6 13.8 39.6 14.8 39.6 16.4 V21" fill="none" strokeWidth="1.3" /><rect x="11.5" y="21" width="41" height="29" rx="3" fill="#c99c66" /><path d="M11.5 32.4 C24 35 40 35 52.5 32.4" fill="none" /><rect x="28.4" y="30" width="7.2" height="6" rx="1" fill="#f4cf6f" /><path d="M14.4 24.6 C24 23.8 40 23.8 49.6 24.6" {...T} stroke="#fff" opacity=".6" /><path d="M16 50 V47 M48 50 V47" {...T} /></g>,
  accounting: <g {...L}><rect x="14" y="11" width="31" height="40" rx="2" fill="#fffdf7" /><path d="M14 18.4 H45" /><path d="M23 11 V51" stroke="#e48a8a" strokeWidth=".8" /><path d="M17 24 H20.6 M26 24 H40 M17 29.4 H20.6 M26 29.4 H37 M17 34.8 H20.6 M26 34.8 H41 M17 40.2 H20.6 M26 40.2 H35" {...T} /><circle cx="45.6" cy="45" r="8.4" fill="#f4cf6f" /><circle cx="45.6" cy="45" r="6.2" fill="none" strokeWidth=".7" /><text x="45.6" y="48.6" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="10" fill="#8a6120" stroke="none">$</text></g>,
  global: <g {...L}><circle cx="31" cy="33" r="17" fill="#cdeee3" /><path d="M14 33 H48 M31 16 C24.4 22.4 24.4 43.6 31 50 M31 16 C37.6 22.4 37.6 43.6 31 50 M17 24.6 H45 M17 41.4 H45" {...T} /><path d="M47 12 C53.6 18.4 55 26.4 51.6 34.4" fill="none" stroke="#e99a3e" strokeWidth="1.4" /><path d="M51.6 34.4 L48.2 32.2 M51.6 34.4 L53.6 30.8" stroke="#e99a3e" strokeWidth="1.4" /><path d="M19 27 C20 23.6 22.4 21 25.6 19.4" stroke="#fff" strokeWidth="1.3" opacity=".7" /></g>,
  art: <g {...L}><path d="M32 12 C45.4 12 53.6 21.2 52 31 C51 37 44.6 36.4 41.4 38.4 C38.4 40.4 41.2 45 37.4 49 C33.4 53 13.2 49.6 12 33 C11 20.6 20.4 12 32 12 Z" fill="#f8e6c4" /><circle cx="28" cy="43" r="3.6" fill="#fffdf7" /><circle cx="22.6" cy="25" r="3.3" fill="#ec8d9b" /><circle cx="32.6" cy="19.6" r="3.3" fill="#f4cf6f" /><circle cx="43" cy="24.4" r="3.3" fill="#86aee6" /><circle cx="20.4" cy="35.4" r="3.3" fill="#9dd27a" />{[[22.6, 25], [32.6, 19.6], [43, 24.4], [20.4, 35.4]].map(([x, y]) => <circle key={x} cx={x - 1} cy={y - 1} r=".8" {...HL} stroke="none" />)}<path d="M38.6 52 L50 36.4 C50.6 35.6 51.8 35.8 51.8 36.8 L48 46" fill="#c9a06a" strokeWidth=".9" /></g>,
  music: <g {...L}><path d="M25.6 44 V16.4 L47.4 11 V39" fill="none" strokeWidth="1.5" /><path d="M25.6 16.4 L47.4 11 V16.6 L25.6 22 Z" fill={INK} /><ellipse cx="20.6" cy="45" rx="5.6" ry="4.2" fill="#a993e3" transform="rotate(-18 20.6 45)" /><ellipse cx="42.4" cy="40" rx="5.6" ry="4.2" fill="#a993e3" transform="rotate(-18 42.4 40)" /><path d="M18.2 43.4 C19 42.4 20.2 42 21.2 42 M40 38.4 C40.8 37.4 42 37 43 37" stroke="#fff" strokeWidth=".9" /></g>,
  drama: <g {...L}><path d="M11.6 15.4 C19.6 12.6 29.4 12.6 35.4 15.4 C36.6 27.4 32.6 37.4 23.6 39.8 C14.6 37.4 10.4 27.4 11.6 15.4 Z" fill="#fbecc8" /><path d="M16.6 22.6 C17.6 21.6 19.4 21.6 20.4 22.6 M26.4 22.6 C27.4 21.6 29.2 21.6 30.2 22.6" fill="none" /><path d="M18.4 29.6 C20.6 33.4 26.6 33.4 28.8 29.6" fill="#e9877f" /><path d="M29.6 24 C35.6 21 45.4 21 51.4 24 C52.6 36 48.6 46 39.6 48.4 C33.6 47.2 30 42 29 36" fill="#d1c1f2" /><path d="M35.6 30.6 C36.6 31.6 38.4 31.6 39.4 30.6 M43.6 30.6 C44.6 31.6 46.4 31.6 47.4 30.6" fill="none" /><path d="M37 41.6 C39 38.8 44.6 38.8 46.6 41.6" fill="none" /><path d="M14 17 C16 16 19 15.4 22 15.4" stroke="#fff" strokeWidth="1" opacity=".8" /></g>,
  pe: <g {...L}><path d="M13 45.4 C20.6 51.4 43.4 51.4 51 45.4 L51.4 50.6 C43.4 56 20.6 56 12.6 50.6 Z" fill="#a8cdf2" /><circle cx="32" cy="29" r="15.4" fill="#fdfdfd" /><path d="M32 21.6 L38.4 25.8 L36 33 H28 L25.6 25.8 Z" fill="#454f5c" /><path d="M32 13.6 V21.6 M38.4 25.8 L46.6 23 M36 33 L41 41.4 M28 33 L23 41.4 M25.6 25.8 L17.4 23" strokeWidth=".9" /><path d="M21 19.6 C23.4 17 27 15.2 30.6 14.8" stroke="#ccd3dc" strokeWidth="1.4" /></g>,
};

export function SubjectIcon({ id, size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="28.5" fill="#fff" stroke="#d6d9de" strokeWidth=".8" />
      {ART[id] || ART.sat}
    </svg>
  );
}
export const ICON_IDS = Object.keys(ART);
