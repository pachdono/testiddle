// Diagrams for the IGCSE Physical Education notes and cheat sheets: a synovial joint, an
// antagonistic pair, the three classes of lever, the inverted U and tables of sporting examples.

import { INK, Label, Link, Dot, Defs, plot, T, Arrow } from "../posterKit.jsx";
import { flow, compare, table, cycle, hub } from "./gen.jsx";

const V = "0 0 680 310";
const BONE = "#ece4d3", FLUID = "#fff0a8", CART = "#8fcfe6";

/** One lever: a beam on a fulcrum with the load and effort where the class puts them. */
const lever = (x0, kind, c) => {
  const L = x0 + 22, M = x0 + 105, R = x0 + 188, y = 150;
  const at = { 1: { f: M, l: L, e: R, eDown: true }, 2: { f: L, l: M, e: R }, 3: { f: L, e: M, l: R } }[kind];
  const down = (x, col, tag) => <g><Arrow from={[x, 94]} to={[x, y - 4]} color={col} width={2.4} /><T x={x} y={86} s={16} anchor="middle" fill={col}>{tag}</T></g>;
  const up = (x, col, tag) => <g><Arrow from={[x, 212]} to={[x, y + 6]} color={col} width={2.4} /><T x={x} y={230} s={16} anchor="middle" fill={col}>{tag}</T></g>;
  return (
    <g key={kind}>
      <path d={`M${L - 10} ${y} H${R + 10}`} stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <g filter="url(#ps)"><path d={`M${at.f - 15} ${y + 24} L${at.f} ${y + 3} L${at.f + 15} ${y + 24} Z`} fill={c} stroke={INK} strokeWidth="1.2" /></g>
      <T x={at.f} y={y + 42} s={15} anchor="middle">F</T>
      <rect x={at.l - 10} y={60} width="20" height="16" rx="3" fill="#c0702a" opacity=".85" />
      {down(at.l, "#c0702a", "")}
      <T x={at.l + 16} y={72} s={15} fill="#c0702a">L</T>
      {at.eDown ? down(at.e, "#d0496d", "E") : up(at.e, "#d0496d", "E")}
    </g>
  );
};

export default {
  "pe-anatomy": table(["Bone type", "Examples", "Job in sport"], [["Long", "femur, humerus, tibia", "levers for big movements"], ["Short", "carpals, tarsals", "strength, fine control"], ["Flat", "cranium, scapula, ribs", "protection, muscle attachment"], ["Irregular", "vertebrae", "protect the spinal cord"]], { widths: [2, 3, 3], caption: "SUPPORT, PROTECTION, MOVEMENT, BLOOD CELL PRODUCTION, MINERAL STORAGE" }),

  "pe-anatomy-2": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <rect x="186" y="140" width="128" height="32" rx="10" fill={FLUID} />
      <path d="M298 92 Q345 158 296 210" fill="none" stroke={INK} strokeWidth="3.2" strokeLinecap="round" />
      <path d="M202 92 Q155 158 204 210" fill="none" stroke={INK} strokeWidth="3.2" strokeLinecap="round" />
      <path d="M294 100 Q330 158 293 202" fill="none" stroke="#d0496d" strokeWidth="2" strokeDasharray="5 4" />
      <path d="M206 100 Q170 158 207 202" fill="none" stroke="#d0496d" strokeWidth="2" strokeDasharray="5 4" />
      <g filter="url(#ps)">
        <path d="M215 4 L215 80 Q185 100 185 124 Q186 146 214 148 L286 148 Q314 146 315 124 Q315 100 285 80 L285 4 Z" fill={BONE} stroke={INK} strokeWidth="1.6" />
        <path d="M192 176 Q190 166 204 165 L296 165 Q310 166 308 176 L290 212 L290 306 L210 306 L210 212 Z" fill={BONE} stroke={INK} strokeWidth="1.6" />
      </g>
      <path d="M189 132 Q194 148 216 150 L284 150 Q306 148 311 132" fill="none" stroke={CART} strokeWidth="7" strokeLinecap="round" />
      <path d="M195 172 Q196 164 206 163 L294 163 Q304 164 305 172" fill="none" stroke={CART} strokeWidth="7" strokeLinecap="round" />
      <path d="M318 96 Q364 158 312 214" fill="none" stroke="#c9a26b" strokeWidth="7" strokeLinecap="round" opacity=".9" />
      <path d="M182 96 Q136 158 188 214" fill="none" stroke="#c9a26b" strokeWidth="7" strokeLinecap="round" opacity=".9" />
      <ellipse cx="346" cy="66" rx="14" ry="9" fill={FLUID} stroke={INK} strokeWidth="1.2" />
      <Label x={6} y={6} w={150} color={INK} title="femur" lines={["thigh bone"]} /><Link from={[156, 34]} to={[236, 48]} color={INK} />
      <Label x={6} y={82} w={150} color="#2a8fb6" title="cartilage" lines={["less friction"]} /><Link from={[156, 110]} to={[196, 140]} color="#2a8fb6" />
      <Label x={6} y={158} w={150} color="#b08a10" title="synovial fluid" lines={["lubricates"]} /><Link from={[156, 186]} to={[226, 157]} color="#b08a10" bend={-10} />
      <Label x={6} y={234} w={150} color={INK} title="tibia" lines={["shin bone"]} /><Link from={[156, 262]} to={[226, 262]} color={INK} />
      <Label x={414} y={6} w={260} color="#b08a10" title="bursa" lines={["fluid sac, less friction"]} /><Link from={[414, 36]} to={[358, 62]} color="#b08a10" />
      <Label x={414} y={82} w={260} color={INK} title="joint capsule" lines={["tough sac round the joint"]} /><Link from={[414, 112]} to={[322, 150]} color={INK} bend={10} />
      <Label x={414} y={158} w={260} color="#a07a3a" title="ligament" lines={["joins bone to bone"]} /><Link from={[414, 188]} to={[346, 170]} color="#a07a3a" />
      <Label x={414} y={234} w={260} color="#d0496d" title="synovial membrane" lines={["makes synovial fluid"]} /><Link from={[414, 262]} to={[312, 186]} color="#d0496d" bend={-14} />
    </svg>
  ),

  "pe-anatomy-3": table(["Movement", "What happens", "Sporting example"], [["Flexion", "angle at joint decreases", "knee bends before a kick"], ["Extension", "angle increases", "leg straightens to kick"], ["Abduction", "away from the midline", "arms out in a star jump"], ["Adduction", "towards the midline", "arms in during breaststroke"], ["Rotation", "turns on its long axis", "hip in a golf swing"], ["Circumduction", "limb end draws a circle", "arm bowling in cricket"], ["Plantar flexion", "pointing the toes", "sprint push off"], ["Dorsiflexion", "toes pulled up to shin", "landing from a jump"]], { widths: [2, 3, 3] }),

  "pe-anatomy-4": (c) => (
    <svg viewBox={V}><Defs c={c} />
      <path d="M110 60 L120 200" stroke="#d6cfbf" strokeWidth="14" strokeLinecap="round" />
      <path d="M120 200 L270 120" stroke="#d6cfbf" strokeWidth="12" strokeLinecap="round" />
      <circle cx="110" cy="56" r="16" fill="#e8e1d2" stroke={INK} /><circle cx="120" cy="200" r="11" fill="#e8e1d2" stroke={INK} />
      <g filter="url(#ps)"><path d="M126 76 Q168 120 138 188 Q120 150 126 76 Z" fill="#e88a9a" stroke="#b8475f" strokeWidth="1.4" /></g>
      <path d="M100 82 Q88 140 108 196 Q102 140 100 82 Z" fill="#f6c3cc" stroke="#b8475f" strokeWidth="1.2" />
      <path d="M138 186 L176 176" stroke="#b8475f" strokeWidth="2" /><path d="M126 76 L116 66" stroke="#b8475f" strokeWidth="2" />
      <Label x={200} y={30} w={200} color="#d0496d" title="biceps contracts" lines={["agonist, concentric"]} /><Link from={[200, 60]} to={[150, 120]} color="#d0496d" bend={10} />
      <Label x={10} y={226} w={180} color="#c0702a" title="triceps relaxes" lines={["antagonist"]} /><Link from={[60, 226]} to={[96, 160]} color="#c0702a" bend={-10} />
      <Label x={210} y={190} w={190} color={INK} title="elbow: hinge joint" lines={["flexion bends it"]} /><Link from={[210, 216]} to={[132, 202]} color={INK} bend={-8} />
      <Label x={430} y={6} w={240} color="#2a8fd6" title="slow twitch (type 1)" lines={["endurance: marathon"]} />
      <Label x={430} y={82} w={240} color="#7a5cd6" title="fast twitch (type 2a)" lines={["middle distance: 800 m"]} />
      <Label x={430} y={158} w={240} color="#d0496d" title="fast twitch (type 2b)" lines={["sprint, throw, lift"]} />
      <Label x={430} y={234} w={240} color={c} title="contractions" lines={["concentric, eccentric,", "isometric"]} />
    </svg>
  ),

  "pe-anatomy-5": (c) => (
    <svg viewBox={V}><Defs c={c} />
      {[1, 2, 3].map((k) => lever(14 + (k - 1) * 222, k, c))}
      {[["1ST CLASS", "nodding the head"], ["2ND CLASS", "rising onto the toes"], ["3RD CLASS", "biceps curl, kicking"]].map(([t, e], i) => (
        <g key={t}><T x={119 + i * 222} y={24} s={18} anchor="middle" fill={c}>{t}</T><T x={119 + i * 222} y={262} s={15} anchor="middle">{e}</T></g>
      ))}
      <T x={340} y={296} s={15} anchor="middle">F FULCRUM, L LOAD, E EFFORT. FLE 1 2 3: THE MIDDLE ONE NAMES THE CLASS</T>
    </svg>
  ),

  "pe-anatomy-6": flow([["Nose and mouth", "air in, warmed and filtered"], ["Trachea", "the windpipe"], ["Bronchi", "one to each lung"], ["Bronchioles", "smaller branches"], ["Alveoli", "oxygen in, carbon dioxide out by diffusion"]], { caption: "CARDIAC OUTPUT = SV x HR.  MINUTE VENTILATION = TV x BREATHING RATE" }),

  "pe-anatomy-7": compare([["Aerobic", ["With oxygen", "Glucose + oxygen gives", "carbon dioxide + water + energy", "Long and steady: 10 km run"]], ["Anaerobic", ["Without enough oxygen", "Glucose gives lactic acid", "+ energy", "Short and intense: 400 m"]]], { caption: "EPOC: EXTRA OXYGEN AFTER EXERCISE TO REMOVE LACTIC ACID" }),

  "pe-health": table(["Component", "Test", "Example"], [["Cardiovascular endurance", "Multi stage fitness test", "marathon runner"], ["Strength", "Hand grip dynamometer", "weightlifter"], ["Muscular endurance", "Sit up or press up test", "rower"], ["Flexibility", "Sit and reach", "gymnast"], ["Agility", "Illinois agility run", "netball centre"], ["Power", "Vertical jump", "high jumper"], ["Reaction time", "Ruler drop", "sprint start"]], { widths: [3, 3, 2] }),

  "pe-health-2": table(["Method", "What it is", "Suits"], [["Continuous", "steady, 20 minutes or more", "distance runners"], ["Fartlek", "speed and terrain change", "games players"], ["Interval", "work, then rest", "sprinters, swimmers"], ["Circuit", "stations of exercises", "general fitness"], ["Weights", "heavy: strength. light: endurance", "throwers, rowers"], ["Plyometrics", "jumps and bounds", "basketball players"]], { widths: [2, 3, 2], caption: "MAX HEART RATE = 220 - AGE. AEROBIC ZONE ABOUT 60 TO 80 PERCENT" }),

  "pe-health-3": table(["Injury", "What it is", "Sporting example"], [["Sprain", "ligament damage", "twisted ankle in netball"], ["Strain", "muscle or tendon tear", "pulled hamstring sprinting"], ["Fracture", "broken bone", "stress fracture in running"], ["Dislocation", "bone out of the joint", "shoulder in a rugby tackle"], ["Concussion", "brain injury from a blow", "clash of heads"]], { widths: [2, 3, 3], caption: "SOFT TISSUE INJURIES: RICE. REST, ICE, COMPRESSION, ELEVATION" }),

  "pe-skill": table(["Continuum", "One end", "Other end"], [["Environment", "open: pass in football", "closed: free throw"], ["Difficulty", "basic: running", "complex: tennis volley"], ["Muscles", "gross: shot put", "fine: darts throw"], ["Pacing", "self paced: golf shot", "external: receiving a serve"]], { widths: [2, 3, 3], caption: "SKILLS ARE LEARNED. ABILITIES ARE MOSTLY INHERITED" }),

  "pe-skill-2": cycle([["Input", "senses, selective attention"], ["Decision", "memory chooses a response"], ["Output", "the movement"], ["Feedback", "used next time"]], { centre: "Information processing" }),

  "pe-skill-3": (c) => {
    const { X, Y, path } = plot([50, 40, 330, 200], [0, 10], [0, 10]);
    const f = (x) => 9 - 0.36 * (x - 5) ** 2;
    return (
      <svg viewBox={V}><Defs c={c} />
        <path d={`M${X(0)} ${Y(0)} H${X(10) + 10} M${X(0)} ${Y(0)} V${Y(10) - 10}`} stroke={INK} strokeWidth="1.5" />
        <T x={X(10)} y={Y(0) + 20} s={14} anchor="end">AROUSAL</T><T x={X(0) + 8} y={Y(10) - 6} s={14}>PERFORMANCE</T>
        <path d={path(f, 0.3, 9.7)} fill="none" stroke={c} strokeWidth="3.2" filter="url(#ps)" />
        <Dot x={X(5)} y={Y(9)} color="#f2b632" />
        <T x={X(5)} y={Y(9) - 14} s={14} anchor="middle" fill="#c0902a">OPTIMUM</T>
        <T x={X(1.4)} y={Y(2.6)} s={13} anchor="middle">UNDER</T><T x={X(1.4)} y={Y(2.6) + 16} s={13} anchor="middle">AROUSED</T>
        <T x={X(8.6)} y={Y(2.6)} s={13} anchor="middle">OVER</T><T x={X(8.6)} y={Y(2.6) + 16} s={13} anchor="middle">AROUSED</T>
        <Label x={420} y={6} w={250} color="#d0496d" title="gross skills" lines={["tackle: high arousal"]} />
        <Label x={420} y={82} w={250} color="#2a8fd6" title="fine skills" lines={["archery: low arousal"]} />
        <Label x={420} y={158} w={250} color="#c0702a" title="SMART targets" keep lines={["SPECIFIC, MEASURABLE,", "ACHIEVABLE, REALISTIC,", "TIME BOUND"]} />
      </svg>
    );
  },

  "pe-social": hub("Sport", [["Media", "coverage brings money"], ["Sponsorship", "money for advertising"], ["Technology", "VAR, Hawk-Eye, GPS"], ["Participation", "cost, access, role models"]], { caption: "THE GOLDEN TRIANGLE: SPORT, MEDIA AND SPONSORSHIP" }),
  "pe-social-2": table(["Drug", "Effect", "Used by"], [["Anabolic steroids", "Build muscle", "Sprinters, weightlifters"], ["Stimulants", "More alert", "Many sports"], ["Beta blockers", "Calm, steady hands", "Archery, shooting"], ["Diuretics", "Lose weight, mask drugs", "Boxers, jockeys"], ["EPO, blood doping", "More red blood cells", "Endurance athletes"]], { widths: [2, 2, 2] }),
  "pe-practical": cycle([["Perform", "in your activity"], ["Analyse", "strengths and weaknesses"], ["Plan", "drills and targets"], ["Practise", "and train"]], { centre: "Improve" }),
};
