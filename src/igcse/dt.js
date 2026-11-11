// Revision notes, quizzes and flashcards for IGCSE Design and Technology (Cambridge 0445).
// Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "dt",
  name: "Design and Technology",
  topics: [
    one("process", "The design process", "The design process", 7, "From identifying a need to evaluating a final product.", [
      ["Stages", ["Identify a need or problem and write a design brief.", "Research: existing products, users, materials, ergonomics and anthropometrics.", "Write a specification: measurable criteria the product must meet.", "Generate ideas, develop and model them, plan manufacture, make, test and evaluate against the specification."]],
      ["Key terms", ["Ergonomics: designing for comfort and ease of use.", "Anthropometrics: body measurement data, often designing for the 5th to 95th percentile.", "Iterative design: repeatedly testing and improving."]],
    ], ["Brief, research, specification, ideas, development, making, evaluation.", "Specifications must be measurable.", "Anthropometrics provides body size data."], [
      ["What is a design specification?", ["A sketch", "A list of measurable criteria the product must meet", "A material", "A tool"], "B", "Specifications guide design and evaluation."],
      ["What are anthropometrics?", ["Studies of materials", "Measurements of the human body", "Types of joints", "Colour theory"], "B", "Body measurement data used for sizing."],
      ["Why design for the 5th to 95th percentile?", ["To suit the largest number of users", "To suit only tall people", "To save materials", "To make it cheaper"], "A", "It covers 90 percent of the population."],
      ["What is iterative design?", ["Making one version only", "Repeatedly testing and improving a design", "Copying a design", "Designing without users"], "B", "Each cycle improves the product."],
      ["What is evaluated at the end?", ["The tools", "The product against the specification", "The teacher", "Only the cost"], "B", "Evaluation checks whether the specification is met."],
    ]),
    one("materials", "Materials and components", "Materials and components", 8, "Woods, metals, plastics, smart materials and standard components.", [
      ["Materials", ["Hardwoods (oak, beech) come from deciduous trees; softwoods (pine) from coniferous trees; manufactured boards (MDF, plywood) are made from wood waste or layers.", "Ferrous metals contain iron and rust (mild steel); non ferrous do not (aluminium, copper); alloys are mixtures (brass, stainless steel).", "Thermoplastics can be reheated and reshaped (acrylic, PVC); thermosetting plastics cannot (epoxy resin, melamine).", "Smart materials react to their environment: thermochromic pigments, shape memory alloys."]],
      ["Components", ["Fixings: screws, bolts, nuts, rivets, knock down fittings.", "Adhesives: PVA for wood, epoxy resin for mixed materials, tensol cement for acrylic."]],
    ], ["Hardwood from deciduous, softwood from coniferous.", "Thermoplastics reshape; thermosets do not.", "Ferrous metals contain iron."], [
      ["Which is a thermoplastic?", ["Melamine", "Acrylic", "Epoxy resin", "Urea formaldehyde"], "B", "Acrylic can be heated and reformed."],
      ["Which metal is non ferrous?", ["Mild steel", "Cast iron", "Aluminium", "Stainless steel"], "C", "Aluminium contains no iron."],
      ["Where do softwoods come from?", ["Deciduous trees", "Coniferous trees", "Recycled plastic", "Bamboo only"], "B", "Coniferous trees such as pine."],
      ["What is a thermochromic pigment?", ["A pigment that changes colour with temperature", "A glue", "A type of wood", "A metal alloy"], "A", "A smart material."],
      ["Which adhesive is best for joining wood?", ["PVA", "Tensol cement", "Superglue only", "Contact adhesive only"], "A", "PVA is the standard wood glue."],
    ]),
    one("tools", "Tools, equipment and processes", "Tools and processes", 7, "Marking out, cutting, shaping, joining and finishing.", [
      ["Processes", ["Marking out: try square, steel rule, marking gauge, scriber, centre punch.", "Wasting: sawing, drilling, filing, turning on a lathe, milling.", "Deforming: bending, vacuum forming, line bending acrylic, casting.", "CAD and CAM: computer aided design and manufacture (laser cutters, 3D printers, CNC routers)."]],
      ["Joining and finishing", ["Wood joints: butt, dowel, mortise and tenon, dovetail, finger.", "Finishes protect and improve appearance: varnish, paint, wax, powder coating, polishing.", "Health and safety: goggles, guards, dust extraction, secure work."]],
    ], ["Wasting removes material; deforming reshapes it.", "CAM is fast, accurate and repeatable.", "Always use safety equipment."], [
      ["Which process heats a plastic sheet and sucks it over a mould?", ["Injection moulding", "Vacuum forming", "Line bending", "Casting"], "B", "Vacuum forming."],
      ["What does CAM stand for?", ["Computer aided manufacture", "Computer assisted marking", "Cutting and measuring", "Central automatic machine"], "A", "Machines controlled by computers."],
      ["Which joint is very strong and decorative, often in drawers?", ["Butt joint", "Dovetail joint", "Dowel joint", "Lap joint"], "B", "Dovetails interlock and resist pulling."],
      ["Which is a wasting process?", ["Bending", "Drilling", "Vacuum forming", "Casting"], "B", "Drilling removes material."],
      ["Why use a centre punch before drilling metal?", ["To mark and stop the drill wandering", "To cool the metal", "To polish it", "To bend it"], "A", "It makes a small dent for the drill tip."],
    ]),
    one("product", "Product design", "Product design", 6, "Designing products for users, with function, aesthetics and manufacture in mind.", [
      ["Key factors", ["Function: what the product must do.", "Aesthetics: shape, colour, texture and proportion.", "Ergonomics and safety for the user.", "Cost and scale of production: one off, batch, mass production."]],
      ["Evaluating designs", ["Use ACCESS FM: aesthetics, cost, customer, environment, safety, size, function, materials.", "Testing with users and modelling with card or CAD."]],
    ], ["ACCESS FM for analysis.", "One off, batch or mass production.", "Model before making."], [
      ["What does the F in ACCESS FM stand for?", ["Finish", "Function", "Form", "Fixing"], "B", "Function: what the product does."],
      ["Which production is for large numbers of identical products?", ["One off", "Batch", "Mass", "Prototype"], "C", "Mass production."],
      ["Why model a design before making it?", ["To test and improve it cheaply", "It is required by law", "To waste time", "To decorate it"], "A", "Models reveal problems early."],
      ["What is aesthetics about?", ["How a product looks and feels", "Its cost", "Its weight only", "Its strength"], "A", "Appearance and appeal."],
      ["What is batch production?", ["Making a single item", "Making a set number of identical items", "Continuous production for years", "Hand drawing"], "B", "A batch is a limited quantity."],
    ]),
    one("resistant", "Resistant materials", "Resistant materials", 7, "Properties of woods, metals and plastics, and choosing the right one.", [
      ["Properties", ["Hardness resists scratching; toughness resists breaking; strength resists force; ductility allows drawing into wire; malleability allows shaping.", "Plastics are lightweight and waterproof; metals are strong and conductive; woods are natural and easy to work.", "Choose materials by properties, cost, availability, appearance and environmental impact."]],
      ["Treatments", ["Heat treatment of steel: hardening, tempering, annealing.", "Wood seasoning reduces moisture to prevent warping."]],
    ], ["Know the material properties definitions.", "Seasoning prevents warping.", "Annealing softens metal."], [
      ["Which property resists scratching?", ["Toughness", "Hardness", "Ductility", "Malleability"], "B", "Hardness is resistance to wear and scratching."],
      ["What does annealing do to a metal?", ["Hardens it", "Softens it and makes it easier to work", "Rusts it", "Colours it"], "B", "Heating and slow cooling relieves stress."],
      ["Why is timber seasoned?", ["To change its colour", "To reduce moisture and prevent warping", "To make it heavier", "To add smell"], "B", "Dry timber is more stable."],
      ["What is malleability?", ["Ability to be shaped by hammering or pressing without breaking", "Resistance to heat", "Ability to conduct", "Resistance to rust"], "A", "Malleable materials deform without cracking."],
      ["Which material is waterproof and lightweight?", ["Plastic", "Oak", "Cast iron", "Brick"], "A", "Plastics are typically both."],
    ]),
    one("graphic", "Graphic products", "Graphic products", 6, "Drawing techniques, packaging and communication.", [
      ["Drawing", ["Isometric drawing uses 30 degree lines; oblique has a flat front and 45 degree depth lines.", "One and two point perspective show depth realistically.", "Orthographic projection (first or third angle) gives front, side and plan views with dimensions.", "Exploded views show how parts fit together."]],
      ["Graphics", ["Colour theory: primary, secondary, complementary colours.", "Packaging nets, card and board types, logos and typography."]],
    ], ["Isometric at 30 degrees.", "Orthographic for manufacture.", "Exploded views show assembly."], [
      ["What angle are the receding lines in isometric drawing?", ["15 degrees", "30 degrees", "45 degrees", "60 degrees"], "B", "Isometric uses 30 degree lines."],
      ["Which drawing gives accurate views for manufacture?", ["Perspective", "Orthographic projection", "Thumbnail sketch", "Mood board"], "B", "Orthographic shows dimensioned views."],
      ["What does an exploded view show?", ["How parts fit together", "A product burning", "Only the colour", "The price"], "A", "Parts are drawn apart along assembly lines."],
      ["What is a net in packaging?", ["A flat shape that folds into a 3D package", "A plastic bag", "A logo", "A barcode"], "A", "Nets are the unfolded form."],
      ["Which colours are complementary?", ["Red and green", "Red and orange", "Blue and purple", "Yellow and orange"], "A", "Opposites on the colour wheel."],
    ]),
    one("systems", "Systems and control", "Systems and control", 6, "Mechanical, electronic and structural systems.", [
      ["Systems", ["A system has input, process and output, with feedback in a closed loop.", "Mechanisms: levers (three classes), gears, pulleys, cams and followers, linkages.", "Mechanical advantage = load / effort. Gear ratio = driven teeth / driver teeth."]],
      ["Electronics and structures", ["Components: resistors, LDRs, thermistors, transistors, LEDs, switches, microcontrollers.", "Structures resist forces: tension, compression, bending, torsion, shear. Triangulation adds rigidity."]],
    ], ["Input, process, output, feedback.", "Gear ratio = driven / driver.", "Triangles make structures rigid."], [
      ["A driver gear with 10 teeth turns a driven gear with 30 teeth. What is the gear ratio?", ["1 : 3", "3 : 1", "1 : 1", "2 : 1"], "B", "Driven / driver = 30 / 10 = 3, written 3 : 1."],
      ["What does a cam do?", ["Changes rotary motion into reciprocating motion", "Stores electricity", "Joins wood", "Measures light"], "A", "The follower moves up and down as the cam turns."],
      ["Why are triangles used in structures?", ["They look nice", "They make frames rigid", "They are lighter than squares", "They conduct electricity"], "B", "Triangulation prevents deformation."],
      ["What is a closed loop system?", ["A system with feedback", "A system with no input", "A broken circuit", "A one way system"], "A", "Feedback adjusts the output."],
      ["Which component's resistance changes with light?", ["Thermistor", "LDR", "Diode", "Capacitor"], "B", "Light dependent resistor."],
    ]),
    one("sustainability", "Sustainability and the environment", "Sustainability", 6, "Designing products that are kinder to the planet.", [
      ["The 6 Rs", ["Reduce, reuse, recycle, repair, rethink, refuse.", "Life cycle assessment looks at impact from raw material extraction to disposal.", "Design for disassembly makes recycling and repair easier."]],
      ["Responsible design", ["Use sustainable materials (FSC timber, recycled plastics).", "Reduce energy use in manufacture and in use.", "Consider planned obsolescence and its environmental cost.", "Fair trade and ethical working conditions."]],
    ], ["Learn the 6 Rs.", "Life cycle: cradle to grave.", "Design for disassembly."], [
      ["Which is one of the 6 Rs?", ["Rebuild", "Rethink", "Reprint", "Rename"], "B", "Reduce, reuse, recycle, repair, rethink, refuse."],
      ["What does a life cycle assessment measure?", ["Only the price", "Environmental impact from raw materials to disposal", "How long it takes to make", "The colour"], "B", "Cradle to grave impact."],
      ["What does FSC certification show?", ["Timber from responsibly managed forests", "Plastic safety", "Metal purity", "Electrical safety"], "A", "Forest Stewardship Council."],
      ["What is planned obsolescence?", ["Designing products to become outdated or fail sooner", "Recycling", "Repairing products", "Using less packaging"], "A", "It encourages replacement, creating waste."],
      ["Why design for disassembly?", ["To make recycling and repair easier", "To look better", "To use more glue", "To increase cost"], "A", "Parts can be separated and reused."],
    ]),
  ],
};
