// Diagrams for the chemistry sections added with the full syllabus: diamond and graphite, the
// blast furnace, addition polymerisation, and tables of ions, conditions and tests.

import { INK, Label, Defs, T, Arrow, HAND } from "../posterKit.jsx";
import { table, compare, flow, hub } from "./gen.jsx";

const V = "0 0 680 310";

/** Diamond's tetrahedral bonding: the four bond directions of a carbon, in 3D, projected. Each
 * neighbour's own bonds point back along the other three directions, as in the real lattice. */
const TETRA = [[0, 1, 0], ...[210, 330, 90].map((d) => [0.943 * Math.cos((d * Math.PI) / 180), -1 / 3, 0.943 * Math.sin((d * Math.PI) / 180)])];
const proj = ([x, y, z], k) => [(x + 0.35 * z) * k, (-y + 0.25 * z) * k];

/** A honeycomb sheet of carbon atoms, skewed to look like a flat layer seen at an angle. */
const honeycomb = (ox, oy) => {
  const a = 14, edges = new Map(), atoms = new Map();
  for (let j = 0; j < 3; j++) for (let i = 0; i < 5; i++) {
    const cx = a * Math.sqrt(3) * (i + 0.5 * (j % 2)), cy = a * 1.5 * j;
    const v = Array.from({ length: 6 }, (_, k) => { const t = ((30 + 60 * k) * Math.PI) / 180; return [Math.round((cx + a * Math.cos(t)) * 10) / 10, Math.round((cy + a * Math.sin(t)) * 10) / 10]; });
    v.forEach((p, k) => { const q = v[(k + 1) % 6]; atoms.set(p.join(), p); edges.set([p.join(), q.join()].sort().join("|"), [p, q]); });
  }
  const sk = ([x, y]) => [ox + x - y * 0.9, oy + y * 0.42];
  return (
    <g>
      {[...edges.values()].map(([p, q], i) => { const [x1, y1] = sk(p), [x2, y2] = sk(q); return <path key={i} d={`M${x1} ${y1} L${x2} ${y2}`} stroke={INK} strokeWidth="1.6" />; })}
      {[...atoms.values()].map((p, i) => { const [x, y] = sk(p); return <circle key={i} cx={x} cy={y} r="3.4" fill="#4b5563" />; })}
    </g>
  );
};

const giant = (c) => {
  const O = [160, 150], L = 62, at = (v, k = L, from = O) => { const [dx, dy] = proj(v, k); return [from[0] + dx, from[1] + dy]; };
  const outer = TETRA.map((v) => at(v));
  return (
    <svg viewBox={V}><Defs c={c} />
      <T x={160} y={24} s={15} anchor="middle" fill={c}>DIAMOND</T>
      {outer.map((p, i) => TETRA.filter((_, j) => j !== i).map((w, j) => { const q = at(w.map((n) => -n), L * 0.6, p); return <path key={`${i}${j}`} d={`M${p[0]} ${p[1]} L${q[0]} ${q[1]}`} stroke="#9aa6b2" strokeWidth="2" strokeDasharray="4 3" />; }))}
      {outer.map((p, i) => <path key={i} d={`M${O[0]} ${O[1]} L${p[0]} ${p[1]}`} stroke={INK} strokeWidth="3" />)}
      {outer.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="10" fill="#b8c2cc" stroke={INK} strokeWidth="1.2" />)}
      <circle cx={O[0]} cy={O[1]} r="12" fill="#7d8896" stroke={INK} strokeWidth="1.4" />
      <T x={O[0]} y={O[1] + 5} s={12} anchor="middle" fill="#fff">C</T>
      <T x={250} y={96} s={12}>TETRAHEDRAL</T>
      <T x={250} y={112} s={12}>DASHES: NETWORK</T>
      <T x={250} y={128} s={12}>CONTINUES</T>
      <T x={160} y={256} s={13} anchor="middle">EACH C BONDED TO 4 OTHERS</T>
      <T x={160} y={274} s={13} anchor="middle">VERY HARD, NO FREE ELECTRONS</T>
      <T x={160} y={292} s={13} anchor="middle">USE: CUTTING TOOLS</T>
      <path d="M340 14 V296" stroke="#e3e7ec" strokeWidth="1.4" />
      <T x={510} y={24} s={15} anchor="middle" fill={c}>GRAPHITE</T>
      {[60, 120, 180].map((y) => <g key={y}>{honeycomb(430, y)}</g>)}
      {[[470, 92, 112], [470, 152, 172]].map(([x, y1, y2]) => <path key={y1} d={`M${x} ${y1} V${y2} M${x + 80} ${y1} V${y2}`} stroke="#d0496d" strokeDasharray="3 3" />)}
      <T x={668} y={110} s={11} anchor="end" fill="#d0496d">WEAK FORCES</T>
      <T x={510} y={256} s={13} anchor="middle">EACH C BONDED TO 3 IN LAYERS</T>
      <T x={510} y={274} s={13} anchor="middle">DELOCALISED ELECTRONS: CONDUCTS</T>
      <T x={510} y={292} s={13} anchor="middle">LAYERS SLIDE: LUBRICANT, ELECTRODES</T>
    </svg>
  );
};

const blastFurnace = (c) => (
  <svg viewBox="0 0 680 360"><Defs c={c} />
    <g filter="url(#ps)"><path d="M150 40 L120 150 L104 250 L118 300 H262 L276 250 L260 150 L230 40 Z" fill="#f3e3d3" stroke={INK} strokeWidth="2" /></g>
    <path d="M118 270 H262 L262 300 H118 Z" fill="#e8546b" opacity=".85" />
    <path d="M112 252 H268 L264 270 H116 Z" fill="#c9b18a" />
    <T x={190} y={290} s={12} anchor="middle" fill="#fff">MOLTEN IRON</T><T x={190} y={265} s={11} anchor="middle">SLAG</T>
    <Arrow from={[190, 6]} to={[190, 40]} color={INK} width={2} />
    <T x={200} y={20} s={12}>IN: IRON ORE, COKE, LIMESTONE</T>
    <path d="M150 40 H100 M230 40 H280" stroke="#9aa6b2" strokeWidth="5" /><T x={60} y={36} s={11}>WASTE GASES</T>
    <Arrow from={[50, 226]} to={[108, 226]} color="#2f7fd0" width={3} /><Arrow from={[330, 226]} to={[272, 226]} color="#2f7fd0" width={3} />
    <T x={48} y={216} s={12} fill="#2f7fd0">HOT AIR</T><T x={332} y={216} s={12} fill="#2f7fd0">HOT AIR</T>
    <Arrow from={[264, 262]} to={[312, 262]} color="#a0855a" width={2.4} /><T x={316} y={266} s={12}>SLAG TAPPED</T>
    <Arrow from={[264, 292]} to={[312, 300]} color="#e8546b" width={2.4} /><T x={316} y={304} s={12}>IRON TAPPED</T>
    <Label x={390} y={6} w={284} color="#c0702a" title="1. coke burns (very hot)" keep lines={["C + O₂ → CO₂"]} />
    <Label x={390} y={72} w={284} color="#c0702a" title="2. carbon monoxide forms" keep lines={["CO₂ + C → 2CO"]} />
    <Label x={390} y={138} w={284} color="#d0496d" title="3. iron ore is reduced" keep lines={["Fe₂O₃ + 3CO → 2Fe + 3CO₂"]} />
    <Label x={390} y={204} w={284} color="#7a5cd6" title="4. limestone removes sand" keep lines={["CaCO₃ → CaO + CO₂", "CaO + SiO₂ → CaSiO₃ (slag)"]} />
    <T x={340} y={340} s={13} anchor="middle">SLAG IS LESS DENSE, SO IT FLOATS ON THE MOLTEN IRON</T>
  </svg>
);

/** A carbon with its four bonds drawn as a displayed formula, for the polymer diagram. */
const polymer = (c) => {
  const C = ({ x, y }) => <text x={x} y={y + 6} textAnchor="middle" fontFamily={HAND} fontSize="20" fill={INK}>C</text>;
  const H = ({ x, y }) => <text x={x} y={y + 6} textAnchor="middle" fontFamily={HAND} fontSize="18" fill="#6b7682">H</text>;
  const ethene = (x0, y0) => (
    <g>
      <C x={x0} y={y0} /><C x={x0 + 50} y={y0} />
      <path d={`M${x0 + 10} ${y0 - 3} H${x0 + 40} M${x0 + 10} ${y0 + 4} H${x0 + 40}`} stroke={INK} strokeWidth="2" />
      <path d={`M${x0} ${y0 - 10} V${y0 - 26} M${x0} ${y0 + 10} V${y0 + 26} M${x0 + 50} ${y0 - 10} V${y0 - 26} M${x0 + 50} ${y0 + 10} V${y0 + 26}`} stroke={INK} strokeWidth="1.6" />
      <H x={x0} y={y0 - 36} /><H x={x0} y={y0 + 36} /><H x={x0 + 50} y={y0 - 36} /><H x={x0 + 50} y={y0 + 36} />
    </g>
  );
  return (
    <svg viewBox={V}><Defs c={c} />
      <T x={20} y={124} s={22}>n</T>{ethene(56, 118)}
      <T x={86} y={196} s={13} anchor="middle" fill={c}>ETHENE (MONOMER)</T>
      <Arrow from={[150, 118]} to={[240, 118]} color={c} width={2.6} head={11} />
      <T x={195} y={106} s={12} anchor="middle">HEAT, PRESSURE,</T><T x={195} y={146} s={12} anchor="middle">CATALYST</T>
      <path d="M276 76 Q262 118 276 160 M400 76 Q414 118 400 160" fill="none" stroke={INK} strokeWidth="2" />
      <C x={318} y={118} /><C x={368} y={118} />
      <path d="M262 118 H308 M328 118 H358 M378 118 H414" stroke={INK} strokeWidth="2" />
      <path d="M318 108 V92 M318 128 V144 M368 108 V92 M368 128 V144" stroke={INK} strokeWidth="1.6" />
      <H x={318} y={82} /><H x={318} y={154} /><H x={368} y={82} /><H x={368} y={154} />
      <T x={420} y={168} s={20}>n</T>
      <T x={343} y={196} s={13} anchor="middle" fill={c}>POLY(ETHENE): REPEAT UNIT</T>
      <Label x={470} y={20} w={204} color={c} title="addition" lines={["C=C opens up", "only one product"]} />
      <Label x={470} y={112} w={204} color="#7a5cd6" title="[E] condensation" keep lines={["WATER GIVEN OFF", "NYLON, PET, PROTEINS"]} />
      <T x={340} y={250} s={13} anchor="middle">THE BRACKETS AND n SHOW THE UNIT REPEATS MANY TIMES</T>
      <T x={340} y={272} s={13} anchor="middle">PLASTICS ARE NON BIODEGRADABLE: LANDFILL, OCEANS, TOXIC GASES WHEN BURNED</T>
    </svg>
  );
};

export default {
  "chemistry-states-2": compare([["Diffusion", ["High to low concentration", "By random particle motion", "Fastest in gases"]], ["[E] Rate and Mr", ["Lower Mr diffuses faster", "NH₃ (17) beats HCl (36.5)", "White ring forms nearer HCl"]]], { caption: "WARMER PARTICLES MOVE FASTER, SO DIFFUSION SPEEDS UP" }),
  "chemistry-atoms-3-b": giant,
  "chemistry-stoich": table(["Positive ions", "Negative ions"], [["Na⁺ K⁺ Ag⁺ H⁺ NH₄⁺", "Cl⁻ Br⁻ I⁻ OH⁻ NO₃⁻"], ["Mg²⁺ Ca²⁺ Cu²⁺ Zn²⁺ Fe²⁺", "O²⁻ SO₄²⁻ CO₃²⁻"], ["Al³⁺ Fe³⁺", "balance the charges to zero"], ["Mg²⁺ with Cl⁻", "MgCl₂"], ["Al³⁺ with O²⁻", "Al₂O₃"]], { caption: "STATE SYMBOLS: (s) (l) (g) (aq). BALANCE WITH BIG NUMBERS, NEVER CHANGE A FORMULA" }),
  "chemistry-stoich-3": table(["Find", "Use"], [["Moles", "n = mass ÷ Mr"], ["Gas moles", "volume (dm³) ÷ 24"], ["Concentration", "c = n ÷ V (V in dm³)"], ["[E] % yield", "actual ÷ theoretical x 100"], ["[E] % by mass", "Ar x atoms ÷ Mr x 100"], ["[E] Empirical formula", "mass ÷ Ar, then ÷ smallest"]], { widths: [2, 3], caption: "cm³ ÷ 1000 = dm³. AVOGADRO CONSTANT: 6.02 x 10²³" }),
  "chemistry-electrochem-2": compare([["Fuel cell", ["2H₂ + O₂ → 2H₂O", "Only water made", "Efficient, quiet"]], ["Petrol engine", ["Burns fossil fuel", "CO₂, CO, NOx made", "Fuel easy to store"]]], { caption: "HYDROGEN IS FLAMMABLE, HARD TO STORE, AND OFTEN MADE USING FOSSIL FUELS" }),
  "chemistry-reactions-2": table(["Process", "Equation", "Conditions"], [["Haber (ammonia)", "N₂ + 3H₂ ⇌ 2NH₃", "450 °C, 200 atm, iron"], ["Contact (sulfuric acid)", "2SO₂ + O₂ ⇌ 2SO₃", "450 °C, 2 atm, V₂O₅"], ["Copper(II) sulfate", "blue hydrated ⇌ white + water", "heat to dehydrate"], ["Cobalt(II) chloride", "pink hydrated ⇌ blue + water", "heat to dehydrate"]], { widths: [3, 4, 3], caption: "[E] RAISE PRESSURE: FEWER GAS MOLECULES SIDE. RAISE TEMPERATURE: ENDOTHERMIC SIDE" }),
  "chemistry-reactions-3": table(["", "Oxidation", "Reduction"], [["Oxygen", "gained", "lost"], ["[E] Electrons", "lost", "gained"], ["[E] Oxidation number", "goes up", "goes down"], ["Test: KMnO₄ (acidified)", "purple to colourless", "shows a reducing agent"], ["Test: KI (aq)", "colourless to brown", "shows an oxidising agent"]], { widths: [3, 3, 3], caption: "OIL RIG: OXIDATION IS LOSS, REDUCTION IS GAIN (OF ELECTRONS)" }),
  "chemistry-acids-2": table(["Oxide type", "Examples", "Reacts with"], [["Basic", "CuO, CaO, MgO (metals)", "acids"], ["Acidic", "SO₂, CO₂ (non metals)", "bases"], ["[E] Amphoteric", "Al₂O₃, ZnO", "acids and bases"], ["[E] Neutral", "CO, NO", "neither"]], { widths: [2, 3, 2] }),
  "chemistry-acids-3": table(["Salt", "Soluble?"], [["Sodium, potassium, ammonium", "always soluble"], ["Nitrates", "always soluble"], ["Chlorides", "soluble, not AgCl or PbCl₂"], ["Sulfates", "soluble, not Ba, Ca, Pb"], ["Carbonates", "insoluble, except Na, K, NH₄"], ["Hydroxides", "insoluble, except Na, K, NH₄ (Ca slightly)"]], { widths: [2, 3], caption: "SOLUBLE SALT: EXCESS BASE, FILTER, CRYSTALLISE. INSOLUBLE: PRECIPITATE, FILTER, WASH, DRY" }),
  "chemistry-periodic-2": table(["Halogen", "At room temperature", "Displaces"], [["Chlorine Cl₂", "pale yellow-green gas", "Br⁻ and I⁻"], ["Bromine Br₂", "red-brown liquid", "I⁻ only"], ["Iodine I₂", "grey-black solid", "neither"]], { widths: [2, 3, 2], caption: "REACTIVITY FALLS DOWN GROUP VII. Cl₂ + 2KBr → 2KCl + Br₂" }),
  "chemistry-metals": table(["Metal or alloy", "Made of", "Property", "Use"], [["Aluminium", "pure metal", "low density, no corrosion", "aircraft, cans"], ["Copper", "pure metal", "conducts, ductile", "wiring"], ["Brass", "copper + zinc", "hard, no corrosion", "instruments"], ["Stainless steel", "iron + Cr, Ni, C", "hard, rust resistant", "cutlery"]], { widths: [3, 3, 4, 3], caption: "[E] ALLOYS ARE HARDER: DIFFERENT SIZED ATOMS STOP THE LAYERS SLIDING" }),
  "chemistry-metals-3": blastFurnace,
  "chemistry-environment": flow([["Sedimentation", "solids settle"], ["Filtration", "removes small solids"], ["Carbon", "removes taste and smell"], ["Chlorination", "kills microbes"]], { caption: "WATER TEST: WHITE CuSO₄ TURNS BLUE, BLUE CoCl₂ TURNS PINK. PURE: MELTS 0 °C, BOILS 100 °C" }),
  "chemistry-environment-2": hub("NPK", [["Nitrogen (N)", "ammonium salts, nitrates"], ["Phosphorus (P)", "phosphates"], ["Potassium (K)", "potassium salts"], ["Run off", "eutrophication"]], { caption: "AMMONIA (HABER) + NITRIC ACID → AMMONIUM NITRATE" }),
  "chemistry-organic": table(["Series", "Group", "General formula", "First members"], [["Alkanes", "C-C only", "CₙH₂ₙ₊₂", "methane, ethane"], ["Alkenes", "C=C", "CₙH₂ₙ", "ethene, propene"], ["Alcohols", "-OH", "CₙH₂ₙ₊₁OH", "methanol, ethanol"], ["Carboxylic acids", "-COOH", "CₙH₂ₙ₊₁COOH", "methanoic, ethanoic"], ["[E] Esters", "-COO-", "acid + alcohol", "ethyl ethanoate"]], { widths: [3, 2, 3, 3], caption: "METH 1, ETH 2, PROP 3, BUT 4. EACH MEMBER DIFFERS BY CH₂" }),
  "chemistry-organic-3": flow([["Large alkane", "C₁₀H₂₂"], ["Cracking", "heat + catalyst"], ["Smaller alkane", "C₈H₁₈ for petrol"], ["Alkene", "C₂H₄ for polymers"]], { caption: "ALKENE TEST: BROMINE WATER ORANGE → COLOURLESS. ADD H₂ (Ni) OR STEAM (ACID CATALYST)" }),
  "chemistry-organic-4": compare([["Fermentation", ["Sugar + yeast, 25 to 35 °C", "No oxygen", "Renewable, slow, impure"]], ["Hydration of ethene", ["Ethene + steam", "Acid catalyst, 300 °C", "Fast, pure, uses crude oil"]]], { caption: "[E] ETHANOIC ACID + ETHANOL ⇌ ETHYL ETHANOATE + WATER (CONC. H₂SO₄)" }),
  "chemistry-organic-5": polymer,
  "chemistry-analysis-2": table(["Cation", "With NaOH(aq)", "With NH₃(aq)"], [["Al³⁺", "white ppt, dissolves in excess", "white ppt, stays"], ["Ca²⁺", "white ppt, stays", "no or slight ppt"], ["Cr³⁺", "green ppt, dissolves in excess", "green ppt, stays"], ["Cu²⁺", "light blue ppt, stays", "dissolves: dark blue"], ["Fe²⁺", "green ppt, stays", "green ppt, stays"], ["Fe³⁺", "red-brown ppt, stays", "red-brown ppt, stays"], ["Zn²⁺", "white ppt, dissolves in excess", "dissolves in excess"]], { widths: [2, 4, 4], caption: "NH₄⁺: WARM WITH NaOH, AMMONIA TURNS DAMP RED LITMUS BLUE" }),
  "chemistry-analysis-2-b": table(["Test for", "Method", "Positive result"], [["Carbonate", "add dilute acid", "fizzes, limewater milky"], ["Chloride", "HNO₃ then AgNO₃", "white ppt (Br⁻ cream, I⁻ yellow)"], ["Sulfate", "HNO₃ then Ba(NO₃)₂", "white ppt"], ["Nitrate", "NaOH + Al foil, warm", "ammonia given off"], ["Sulfite", "acidified KMnO₄", "purple to colourless"], ["H₂ / O₂", "lit / glowing splint", "squeaky pop / relights"], ["CO₂ / Cl₂ / NH₃", "limewater / damp litmus", "milky / bleached / blue"]], { widths: [2, 3, 4] }),
  "chemistry-analysis-2-c": table(["Flame test", "Colour"], [["Lithium Li⁺", "red"], ["Sodium Na⁺", "yellow"], ["Potassium K⁺", "lilac"], ["Calcium Ca²⁺", "orange-red"], ["Barium Ba²⁺", "light green"], ["Copper(II) Cu²⁺", "blue-green"]], { widths: [1, 1], caption: "DIP A CLEAN WIRE IN THE SAMPLE AND HOLD IT IN A BLUE FLAME" }),
};
