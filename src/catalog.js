// Every course on offer: the SAT, and IGCSE subjects with their exam boards. A course someone
// has added is stored as { id, board, tier, date } and turned into a full course here.

export const QUALS = [
  { id: "sat", name: "SAT", sub: "The digital SAT, with ten full length tests" },
  { id: "igcse", name: "IGCSE", sub: "Cambridge IGCSE and Pearson Edexcel International GCSE" },
];

export const BOARDS = { cie: "Cambridge IGCSE", edexcel: "Edexcel International GCSE" };
export const BOARD_SHORT = { cie: "Cambridge", edexcel: "Edexcel" };

const LANG_ED = ["Home and abroad", "Education and employment", "Personal life and relationships", "The world around us", "Social activities, fitness and health", "Listening", "Reading and writing", "Speaking"];
const LANG_TOPICS = ["Everyday activities: home, school, food and routine", "Personal and social life: family, friends, free time and holidays", "The world around us: town, environment, transport and weather", "The world of work: education, jobs and future plans", "The international world: travel, culture and global issues", "Listening", "Reading", "Speaking", "Writing"];
const BIO = ["Characteristics and classification of living organisms", "Organisation of the organism", "Movement into and out of cells", "Biological molecules", "Enzymes", "Plant nutrition", "Human nutrition", "Transport in plants", "Transport in animals", "Diseases and immunity", "Gas exchange in humans", "Respiration", "Excretion in humans", "Coordination and response", "Drugs", "Reproduction", "Inheritance", "Variation and selection", "Organisms and their environment", "Human influences on ecosystems", "Biotechnology and genetic modification"];
const CHEM = ["States of matter", "Atoms, elements and compounds", "Stoichiometry", "Electrochemistry", "Chemical energetics", "Chemical reactions", "Acids, bases and salts", "The Periodic Table", "Metals", "Chemistry of the environment", "Organic chemistry", "Experimental techniques and chemical analysis"];
const PHYS = ["Motion, forces and energy", "Thermal physics", "Waves", "Electricity and magnetism", "Nuclear physics", "Space physics"];

/** IGCSE subjects. boards maps a board to its syllabus code; tiers is for the sciences. */
export const SUBJECTS = [
  { id: "biology", name: "Biology", group: "Sciences and Maths", icon: "biology", tint: "#5aa02f", boards: { cie: "0610", edexcel: "4BI1" }, tiers: true, levels: true, tripleOnly: { cie: { pack: ["excretion", "drugs", "biotech"], list: ["Excretion in humans", "Drugs", "Biotechnology and genetic modification"] }, edexcel: { pack: ["excretion"], list: ["Excretion", "Cloning"] } }, edexcelTopics: ["The nature and variety of living organisms", "Level of organisation and cell structure", "Biological molecules", "Movement of substances into and out of cells", "Nutrition", "Respiration", "Gas exchange", "Transport", "Excretion", "Coordination and response", "Reproduction", "Inheritance", "Organisms in the environment", "Feeding relationships", "Cycles within ecosystems", "Human influences on the environment", "Food production", "Selective breeding", "Genetic modification (genetic engineering)", "Cloning"], topics: BIO },
  { id: "chemistry", name: "Chemistry", group: "Sciences and Maths", icon: "chemistry", tint: "#2a9d8f", boards: { cie: "0620", edexcel: "4CH1" }, tiers: true, levels: true, tripleOnly: { cie: { pack: [], list: [] }, edexcel: { pack: [], list: ["Esters"] } }, edexcelTopics: ["States of matter", "Elements, compounds and mixtures", "Atomic structure", "The Periodic Table", "Chemical formulae, equations and calculations", "Ionic bonding", "Covalent bonding", "Metallic bonding", "Electrolysis", "Group 1 (alkali metals)", "Group 7 (halogens)", "Gases in the atmosphere", "Reactivity series", "Extraction and uses of metals", "Acids, alkalis and titrations", "Acids, bases and salt preparations", "Chemical tests", "Energetics", "Rates of reaction", "Reversible reactions and equilibria", "Introduction to organic chemistry", "Crude oil", "Alkanes", "Alkenes", "Alcohols", "Carboxylic acids", "Esters", "Synthetic polymers"], topics: CHEM },
  { id: "physics", name: "Physics", group: "Sciences and Maths", icon: "physics", tint: "#8b5cd6", boards: { cie: "0625", edexcel: "4PH1" }, tiers: true, levels: true, tripleOnly: { cie: { pack: ["space"], list: ["Space physics"] }, edexcel: { pack: ["space"], list: ["Astrophysics"] } }, edexcelTopics: ["Forces and motion", "Electricity", "Waves", "Energy resources and energy transfers", "Solids, liquids and gases", "Magnetism and electromagnetism", "Radioactivity and particles", "Astrophysics"], topics: PHYS },
  { id: "maths", name: "Mathematics", group: "Sciences and Maths", icon: "maths", tint: "#d0496d", boards: { cie: "0580", edexcel: "4MA1" }, levels: true, edexcelTopics: ["Numbers and the number system", "Equations, formulae and identities", "Sequences, functions and graphs", "Geometry and trigonometry", "Vectors and transformation geometry", "Statistics and probability"], topics: ["Number", "Algebra and graphs", "Coordinate geometry", "Geometry", "Mensuration", "Trigonometry", "Transformations and vectors", "Probability", "Statistics"] },
  { id: "addmaths", name: "Additional Mathematics", group: "Sciences and Maths", icon: "addmaths", tint: "#c0582f", boards: { cie: "0606", edexcel: "4PM1" }, boardNames: { edexcel: "Further Pure Mathematics" }, edexcelTopics: ["Logarithmic functions and indices", "The quadratic function", "Identities and inequalities", "Graphs", "Series", "The binomial series", "Scalar and vector quantities", "Rectangular Cartesian coordinates", "Calculus", "Trigonometry"], topics: ["Functions", "Quadratic functions", "Factors of polynomials", "Equations, inequalities and graphs", "Simultaneous equations", "Logarithmic and exponential functions", "Straight line graphs", "Coordinate geometry of the circle", "Circular measure", "Trigonometry", "Permutations and combinations", "Series", "Vectors in two dimensions", "Differentiation and integration"] },
  { id: "english-lang", name: "English Language", group: "English", icon: "englang", tint: "#3b6fb0", boards: { cie: "0500", edexcel: "4EA1" }, boardNames: { cie: "First Language English" }, edexcelTopics: ["Reading non-fiction texts (anthology)", "Transactional writing", "Reading poetry and prose texts (anthology)", "Imaginative writing", "Coursework or written exam option"], topics: ["Reading for meaning", "Summary writing", "Writers' use of language", "Directed writing", "Descriptive writing", "Narrative writing", "Speaking and listening"] },
  { id: "english-lit", name: "English Literature", group: "English", icon: "englit", tint: "#b03a5a", boards: { cie: "0475", edexcel: "4ET1" }, edexcelTopics: ["Unseen poetry", "Anthology poetry", "Modern prose", "Modern drama", "Literary heritage texts", "Essay writing and close analysis"], topics: ["Poetry", "Prose", "Drama", "Unseen texts", "Essay writing and close analysis"] },
  { id: "esl", name: "English as a Second Language", group: "English", icon: "esl", tint: "#2f8f9a", boards: { cie: "0510" }, topics: ["Reading", "Writing", "Listening", "Speaking"] },
  { id: "french", name: "French", group: "Languages", icon: "french", tint: "#3b6fb0", boards: { cie: "0520", edexcel: "4FR1" }, edexcelTopics: LANG_ED, topics: LANG_TOPICS },
  { id: "german", name: "German", group: "Languages", icon: "german", tint: "#c9a227", boards: { cie: "0525", edexcel: "4GN1" }, edexcelTopics: LANG_ED, topics: LANG_TOPICS },
  { id: "spanish", name: "Spanish", group: "Languages", icon: "spanish", tint: "#c0392b", boards: { cie: "0530", edexcel: "4SP1" }, edexcelTopics: LANG_ED, topics: LANG_TOPICS },
  { id: "mandarin", name: "Mandarin Chinese", group: "Languages", icon: "mandarin", tint: "#c0392b", boards: { cie: "0547", edexcel: "4CN1" }, edexcelTopics: LANG_ED, topics: LANG_TOPICS },
  { id: "thai", name: "Thai", group: "Languages", icon: "thai", tint: "#2c5aa0", boards: { cie: "0518" }, boardNames: { cie: "First Language Thai" }, topics: ["Reading comprehension", "Summary", "Directed writing", "Composition"] },
  { id: "cs", name: "Computer Science", group: "Technology", icon: "cs", tint: "#4b5563", boards: { cie: "0478", edexcel: "4CP0" }, edexcelTopics: ["Problem solving", "Programming", "Data", "Computers", "Communication and the internet", "The bigger picture"], topics: ["Data representation", "Data transmission", "Hardware", "Software", "The internet and its uses", "Automated and emerging technologies", "Algorithm design and problem solving", "Programming", "Databases", "Boolean logic"] },
  { id: "ict", name: "ICT", group: "Technology", icon: "ict", tint: "#2f6fb0", boards: { cie: "0417", edexcel: "4IT1" }, edexcelTopics: ["Digital devices", "Connectivity", "Operating online", "Online goods and services", "Online communities", "Software skills: documents, spreadsheets, databases, presentations and web"], topics: ["Types and components of computer systems", "Input and output devices", "Storage devices and media", "Networks and the effects of using them", "The effects of using IT", "ICT applications", "The systems life cycle", "Safety and security", "Audience and communication", "File management", "Images and layout", "Styles and proofing", "Graphs and charts", "Document production", "Databases", "Presentations", "Spreadsheets", "Website authoring"] },
  { id: "dt", name: "Design and Technology", group: "Technology", icon: "dt", tint: "#b0842f", boards: { cie: "0445" }, topics: ["The design process", "Materials and components", "Tools, equipment and processes", "Product design", "Resistant materials", "Graphic products", "Systems and control", "Sustainability and the environment"] },
  { id: "geography", name: "Geography", group: "Humanities", icon: "geography", tint: "#2a8c76", boards: { cie: "0460", edexcel: "4GE1" }, edexcelTopics: ["River environments", "Coastal environments", "Hazardous environments", "Economic activity and energy", "Rural environments", "Urban environments", "Fragile environments and climate change", "Globalisation and migration", "Development and human welfare", "Fieldwork and geographical skills"], topics: ["Population dynamics", "Migration", "Population structure", "Settlements and urbanisation", "Earthquakes and volcanoes", "Rivers", "Coasts", "Weather", "Climate and natural vegetation", "Development", "Food production", "Industry", "Tourism", "Energy", "Water", "Environmental risks of economic development", "Geographical skills and fieldwork"] },
  { id: "history", name: "History", group: "Humanities", icon: "history", tint: "#7a5c3a", boards: { cie: "0470", edexcel: "4HI1" }, edexcelTopics: ["Depth study: Germany, development of dictatorship, 1918 to 1945", "Depth study: A world divided, superpower relations, 1943 to 1972", "Historical investigation: the origins and course of the First World War, 1905 to 1918", "Breadth study in change: your chosen option", "Source and interpretation skills"], topics: ["The peace treaties after the First World War", "The League of Nations", "The collapse of international peace by 1939", "The origins of the Cold War", "Containment of communism", "Soviet control of Eastern Europe", "Events in the Gulf", "Depth study", "Depth study: Russia, 1905 to 1941", "Source analysis skills"] },
  { id: "economics", name: "Economics", group: "Humanities", icon: "economics", tint: "#3fa46a", boards: { cie: "0455", edexcel: "4EC1" }, edexcelTopics: ["The market system", "Business economics", "Government and the economy", "The global economy"], topics: ["The basic economic problem", "The allocation of resources", "Microeconomic decision makers", "Government and the macroeconomy", "Economic development", "International trade and globalisation"] },
  { id: "business", name: "Business Studies", group: "Humanities", icon: "business", tint: "#4b5563", boards: { cie: "0450", edexcel: "4BS1" }, edexcelTopics: ["Business activity and the changing environment", "Human resources", "Accounting and finance", "Marketing", "Production"], topics: ["Understanding business activity", "People in business", "Marketing", "Operations management", "Financial information and decisions", "External influences on business activity"] },
  { id: "accounting", name: "Accounting", group: "Humanities", icon: "accounting", tint: "#2f8f9a", boards: { cie: "0452", edexcel: "4AC1" }, edexcelTopics: ["Introduction to bookkeeping and accounting", "Double entry and the books of prime entry", "Verifying records: trial balance, bank reconciliation, control accounts", "Preparing financial statements", "Evaluating financial statements", "Accounting concepts"], topics: ["The fundamentals of accounting", "Sources and recording of data", "Verification of accounting records", "Accounting procedures", "Preparation of financial statements", "Analysis and interpretation", "Accounting principles and policies"] },
  { id: "global", name: "Global Perspectives", group: "Humanities", icon: "global", tint: "#2a8c76", boards: { cie: "0457" }, topics: ["Research", "Analysis", "Evaluation", "Reflection", "Collaboration", "Communication"] },
  { id: "art", name: "Art and Design", group: "Creative and Physical", icon: "art", tint: "#d9962b", boards: { cie: "0400" }, topics: ["Recording observations", "Exploring media and processes", "Developing ideas", "Final outcome", "Supporting studies"] },
  { id: "music", name: "Music", group: "Creative and Physical", icon: "music", tint: "#7c5cd6", boards: { cie: "0410" }, topics: ["Listening", "Composing", "Performing", "World music", "Set works"] },
  { id: "drama", name: "Drama", group: "Creative and Physical", icon: "drama", tint: "#b03a5a", boards: { cie: "0411" }, topics: ["Pre-release material", "Devising", "Performing", "Written examination"] },
  { id: "pe", name: "Physical Education", group: "Creative and Physical", icon: "pe", tint: "#3fa46a", boards: { cie: "0413" }, topics: ["Anatomy and physiology", "Health, fitness and training", "Skill acquisition and psychology", "Social, cultural and ethical influences", "Practical activities"] },
];

/** A science taken as Double counts toward the combined course, so its syllabus code changes. */
export const DOUBLE = { cie: { code: "0654", name: "Co-ordinated Sciences (Double Award)" }, edexcel: { code: "4SD0", name: "Science (Double Award)" } };

export const SAT = {
  id: "sat", kind: "sat", qual: "sat", name: "SAT", tag: "SAT · Digital format", icon: "sat", tint: "#2f6fb0", groups: ["Paper SAT", "Computer SAT"],
  blurb: "Ten full length tests in the digital SAT format: five printed tests marked module by module, and five computer tests that adapt like the Bluebook app.",
  marks: true, count: 10,
};

/** Turns a stored choice into a course the pages can show. */
export function courseFor(sel) {
  if (!sel) return null;
  if (sel.id === "sat" || sel.id === "paper-sat" || sel.id === "computer-sat") return { ...SAT, date: sel.date };
  const s = SUBJECTS.find((x) => `igcse-${x.id}` === sel.id);
  if (!s) return null;
  const board = s.boards[sel.board] ? sel.board : Object.keys(s.boards)[0];
  const double = s.tiers && sel.tier === "Double";
  const code = double ? DOUBLE[board]?.code : s.boards[board];
  const syllabus = double ? DOUBLE[board]?.name : s.boardNames?.[board] || s.name;
  return {
    id: sel.id, kind: "igcse", qual: "igcse", subject: s, name: s.name, icon: s.icon, tint: s.tint, board, tier: s.tiers ? (double ? "Double" : "Triple") : null, level: s.levels && (board === "cie" || s.id === "maths") ? (sel.level === "Core" ? "Core" : "Extended") : null, levelNames: board === "edexcel" ? { Core: "Foundation", Extended: "Higher" } : { Core: "Core", Extended: "Extended" }, code,
    tag: `IGCSE · ${BOARD_SHORT[board]}${code ? ` (${code})` : ""}`, syllabus,
    blurb: `${BOARDS[board]} ${syllabus}${s.tiers && !double ? ", taken as a separate (Triple) science" : ""}. Track every topic in the syllabus and practise with past papers.`,
    topics: (board === "edexcel" && s.edexcelTopics ? s.edexcelTopics : s.topics).filter((t) => !(double && s.tripleOnly?.[board]?.list.includes(t))),
    tripleOnly: double ? s.tripleOnly?.[board] || { pack: [], list: [] } : { pack: [], list: [] },
  };
}

/** Every course id that can be added, for search. */
export const ALL = [{ id: "sat", name: "SAT", qual: "sat" }, ...SUBJECTS.map((s) => ({ id: `igcse-${s.id}`, name: s.name, qual: "igcse", subject: s }))];

/** Nicknames people type when looking for a subject, on top of its initials (pe, cs, ict, dt). */
const ALIASES = {
  biology: ["bio", "science", "sciences"], chemistry: ["chem", "science", "sciences"], physics: ["phys", "science", "sciences"],
  maths: ["math", "mathematics", "maths"], addmaths: ["add maths", "additional maths", "further pure", "fpm", "further maths"],
  "english-lang": ["english", "eng lang", "first language english", "language"], "english-lit": ["english", "eng lit", "lit", "literature"],
  esl: ["english", "eal", "efl", "second language"], french: ["fr", "francais", "language"], german: ["de", "deutsch", "language"],
  spanish: ["es", "espanol", "language"], mandarin: ["chinese", "cn", "language"], thai: ["th", "language"],
  cs: ["computing", "comp sci", "computer", "coding", "programming"], ict: ["it", "information technology", "computer", "computing"],
  dt: ["d&t", "dandt", "design", "technology", "product design"], geography: ["geo", "geog"], history: ["hist"],
  economics: ["econ", "eco"], business: ["bs", "business studies"], accounting: ["accounts", "acc"], global: ["gp", "global perspectives"],
  art: ["art and design", "design"], music: ["mus"], drama: ["theatre", "theater"], pe: ["physical education", "sport", "sports", "gym"],
};
const SMALL = new Set(["and", "as", "a", "of", "the"]);
const initials = (name) => name.toLowerCase().replace(/[^a-z ]/g, " ").split(/\s+/).filter((w) => w && !SMALL.has(w)).map((w) => w[0]).join("");

/** Whether a subject matches what someone typed: its name, syllabus code, initials or a nickname. */
export function matchesSubject(s, typed) {
  const q = String(typed || "").toLowerCase().trim().replace(/\s+/g, " ");
  if (!q) return true;
  const names = [s.name, ...Object.values(s.boardNames || {})].map((x) => x.toLowerCase());
  const keys = [initials(s.name), ...(ALIASES[s.id] || [])];
  if (keys.some((k) => k === q || (q.length >= 2 && k.startsWith(q)))) return true;
  if (Object.values(s.boards).some((c) => c.toLowerCase().includes(q))) return true;
  // Match from the start of a word, so "cs" does not find physics and "econ" does not find "second".
  return names.some((n) => (" " + n.replace(/[^a-z0-9]+/g, " ")).includes(" " + q));
}
