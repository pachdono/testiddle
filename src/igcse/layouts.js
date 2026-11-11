// How each course is split into topics, numbered as the board's own syllabus numbers them, with a
// picture for each topic. The notes are written once; for a board whose specification orders the
// content differently (Edexcel International GCSE sciences and maths), the same subtopics are
// regrouped into that board's topics. A subtopic left out of a layout is not on that syllabus.

// [topic name, picture, [subtopic names in order]]
export const LAYOUTS = {
  physics: {
    // Edexcel 4PH1 specification, topics 1 to 8
    edexcel: [
      ["Forces and motion", "car", ["Measurement, speed and acceleration", "Forces and turning effects", "Momentum"]],
      ["Electricity", "bolt", ["Charge, current, voltage and resistance", "Circuits and components", "Electrical safety"]],
      ["Waves", "wave", ["General properties of waves", "The electromagnetic spectrum", "Light: reflection and refraction", "Sound"]],
      ["Energy resources and energy transfers", "battery", ["Energy, work and power", "Transfer of thermal energy", "Energy resources"]],
      ["Solids, liquids and gases", "drop", ["Mass, weight, density and pressure", "Thermal properties and changes of state", "The particle model and gases"]],
      ["Magnetism and electromagnetism", "magnet", ["Magnetism and electromagnets", "The motor effect and induction", "Transformers and transmission"]],
      ["Radioactivity and particles", "atom", ["The atom and the nucleus", "Radioactivity"]],
      ["Astrophysics", "planet", ["The Earth and the Solar System", "Stars and the Universe"]],
    ],
  },
  chemistry: {
    // Edexcel 4CH1 specification: 1 Principles, 2 Inorganic, 3 Physical, 4 Organic chemistry
    edexcel: [
      ["Principles of chemistry", "atom", ["Solids, liquids and gases", "Diffusion", "Apparatus, titration and separation", "Atomic structure and isotopes", "Formulae and equations", "Relative masses and the mole", "Concentration, yield and formulae calculations", "Ions, ionic and covalent bonds", "Giant structures and metallic bonding", "Electrolysis"]],
      ["Inorganic chemistry", "ingot", ["The table and Group I", "Group VII, transition elements and noble gases", "Air quality and climate", "Reactivity and corrosion", "Redox", "Extracting metals", "Properties, uses and alloys", "Acids, bases and indicators", "Oxides", "Making salts and solubility", "Water", "Identifying ions and gases"]],
      ["Physical chemistry", "thermometer", ["Exothermic and endothermic reactions", "Fuel cells", "Rates of reaction", "Reversible reactions and equilibrium", "Fertilisers"]],
      ["Organic chemistry", "flame", ["Formulae, naming and homologous series", "Fuels and alkanes", "Alkenes and cracking", "Alcohols and carboxylic acids", "Polymers"]],
    ],
  },
  biology: {
    // Edexcel 4BI1 specification, topics 1 to 5
    edexcel: [
      ["The nature and variety of living organisms", "germ", ["Characteristics and classification", "Features of organisms"]],
      ["Structure and functions in living organisms", "cell", ["Cell structure", "Specialised cells, organisation and magnification", "Biological molecules and food tests", "Enzymes", "Diffusion and active transport", "Osmosis", "Photosynthesis and leaf structure", "Limiting factors and experiments", "Diet", "The digestive system and digestion", "Absorption", "Aerobic and anaerobic respiration", "Gas exchange surfaces", "Breathing", "Xylem, phloem and water uptake", "Transpiration and translocation", "The heart and circulation", "Blood vessels and blood", "Pathogens and the body's defences", "Immunity and vaccination", "Drugs and antibiotics", "Excretion and the kidney", "The nervous system", "The eye", "Hormones and homeostasis", "Tropic responses"]],
      ["Reproduction and inheritance", "dna", ["Plant reproduction", "Human reproduction", "Sex hormones, the menstrual cycle and STIs", "Chromosomes, genes and cell division", "Monohybrid inheritance", "Variation and mutation", "Adaptation and selection"]],
      ["Ecology and the environment", "tree", ["Energy flow and food chains", "Nutrient cycles", "Populations", "Food supply and habitat destruction", "Pollution", "Conservation"]],
      ["Use of biological resources", "wheat", ["Biotechnology", "Genetic modification"]],
    ],
  },
  maths: {
    // Edexcel 4MA1 specification, topics 1 to 6
    edexcel: [
      ["Numbers and the number system", "calculator", ["Types of number and sets", "Powers, roots, standard form and surds", "Fractions, percentages and interest", "Bounds, ratio, rates and estimation"]],
      ["Equations, formulae and identities", "scales", ["Expressions and factorising", "Equations and inequalities"]],
      ["Sequences, functions and graphs", "xy", ["Sequences, proportion and functions", "Graphs of functions", "Straight lines", "Differentiation"]],
      ["Geometry and trigonometry", "triangle", ["Angles, polygons and constructions", "Circle theorems", "Similarity, congruence and symmetry", "Area, volume and units", "Pythagoras and right angled triangles", "Non right angled triangles, 3D and graphs"]],
      ["Vectors and transformation geometry", "arrow", ["Vectors", "Transformations"]],
      ["Statistics and probability", "chart", ["Averages and charts", "Cumulative frequency and histograms", "Probability"]],
    ],
  },
};

// A picture for each topic of each course, chosen by hand: course id, then topic id: picture.
const PICK_TEXT = {
  "physics": "motion:car thermal:thermometer waves:wave electricity:bolt nuclear:atom space:planet",
  "chemistry": "states:drop atoms:atom stoich:scales electrochem:battery energetics:thermometer reactions:stopwatch acids:flask periodic:database metals:ingot environment:cloud organic:flame analysis:magnifier",
  "biology": "characteristics:germ organisation:cell movement:drop molecules:dna enzymes:key plant-nutrition:leaf human-nutrition:apple plant-transport:tree animal-transport:heart disease:syringe gas-exchange:lungs respiration:runner excretion:kidney coordination:brain drugs:pill reproduction:flower inheritance:dna variation:fish environment:sun human-influences:factory biotech:wheat",
  "maths": "number:calculator algebra:xy coord:scatter geometry:triangle mensuration:ruler trig:triangle transform:arrow probability:dice statistics:chart",
  "addmaths": "functions:gear quadratics:xy polynomials:puzzle eqgraphs:xy simult:scales logs:rising lines:ruler circle:target radians:pie trig:triangle perms:dice series:sigma vectors:arrow calculus:rising",
  "english-lang": "reading:book summary:sheet language:magnifier directed:envelope descriptive:palette narrative:pen speaking:speech",
  "english-lit": "poetry:pen prose:book drama:masks unseen:magnifier essay:sheet",
  "esl": "reading:book writing:pen listening:headphones speaking:speech",
  "french": "everyday:house personal:people world:city work:pen international:plane listening:headphones reading:book speaking:speech writing:pen",
  "german": "everyday:house personal:people world:city work:pen international:plane listening:headphones reading:book speaking:speech writing:pen",
  "spanish": "everyday:house personal:people world:city work:pen international:plane listening:headphones reading:book speaking:speech writing:pen",
  "mandarin": "everyday:house personal:people world:city work:pen international:plane listening:headphones reading:book speaking:speech writing:pen",
  "thai": "comprehension:book summary:sheet directed:envelope composition:pen",
  "cs": "data-rep:chip transmission:wifi hardware:computer software:disk internet:globe emerging:gear algorithms:puzzle programming:code databases:database logic:bulb",
  "ict": "systems:computer io:headphones storage:disk networks:wifi effects:person applications:phone lifecycle:recycle safety:lock audience:people files:database images:camera styles:brush graphs:chart documents:sheet db:database presentations:tv spreadsheets:calculator web:globe",
  "dt": "process:bulb materials:wood tools:hammer product:gear resistant:saw graphic:ruler systems:wrench sustainability:recycle",
  "geography": "pop-dyn:people migration:plane structure:chart settlements:city tectonics:volcano rivers:drop coasts:ship weather:cloud climate:tree development:rising food:wheat industry:factory tourism:camera energy:bolt water:drop risks:warning skills:pin",
  "history": "treaties:scroll league:globe collapse:warning cold-war:shield containment:lock eastern-europe:flag gulf:pin depth:book russia:crown ww1:medal sources:magnifier",
  "economics": "problem:scales allocation:coin micro:shop macro:bank development:rising trade:ship",
  "business": "activity:shop people:people marketing:target operations:factory finance:coin external:globe",
  "accounting": "fundamentals:calculator recording:pen verification:tick procedures:sheet statements:chart analysis:magnifier principles:scales",
  "global": "research:magnifier analysis:chart evaluation:scales reflection:bulb collaboration:people communication:speech",
  "art": "recording:pen media:palette developing:bulb final:star supporting:book",
  "music": "listening:headphones composing:note performing:mic world:globe set-works:scroll",
  "drama": "pre-release:scroll devising:bulb performing:masks written:pen",
  "pe": "anatomy:bone health:runner skill:target social:people practical:ball",
};
export const TOPIC_PICS = Object.fromEntries(Object.entries(PICK_TEXT).map(([id, text]) => [id, Object.fromEntries(text.split(" ").map((x) => x.split(":")))]));

/** The picture for a topic: the hand picked one, else a book. */
export const topicPic = (packId, topicId) => TOPIC_PICS[packId]?.[topicId] || "book";

/**
 * Regroups a shaped pack into a board's topics. Each subtopic keeps its id (so progress carries
 * over) but takes the new topic, topic number and code; its questions move to the new topic's
 * name so the quiz groups them there. Topics with nothing left (such as Triple only ones in
 * Double Award) are dropped, and the numbers stay as the specification has them.
 */
export function layoutFor(pack, board) {
  const plan = LAYOUTS[pack.id]?.[board];
  if (!plan) return { ...pack, topics: pack.topics.map((t) => ({ ...t, pic: t.pic || topicPic(pack.id, t.id) })) };
  const bySkill = new Map(pack.subs.map((s) => [s.skill, s]));
  const writtenFrom = new Set();
  const topics = [], subs = [];
  plan.forEach(([name, pic, skills], i) => {
    const mine = skills.map((k) => bySkill.get(k)).filter(Boolean);
    if (!mine.length) return;
    // written questions go with the first new topic that takes a subtopic from their old topic
    const written = mine.flatMap((s) => (writtenFrom.has(s.topic.id) ? [] : (writtenFrom.add(s.topic.id), s.topic.written || [])))
      .map((q) => ({ ...q, skill: name, subject: name }));
    const topic = { id: `${board}-${i + 1}`, name, pic, no: i + 1, subject: pack.name, written, subs: [] };
    topics.push(topic);
    mine.forEach((s, j) => subs.push({ ...s, topic, topicNo: i + 1, code: `${i + 1}.${j + 1}`, written, questions: s.questions.map((q) => ({ ...q, subject: name })) }));
  });
  return { ...pack, topics, subs: subs.map((s, n) => ({ ...s, n })) };
}
