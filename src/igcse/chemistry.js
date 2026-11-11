// Revision notes, quizzes and flashcards for IGCSE Chemistry, following the Cambridge 0620 topics
// (Edexcel 4CH1 covers the same ground in a different order). Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });

export default {
  id: "chemistry",
  name: "Chemistry",
  topics: [
    { id: "states", name: "States of matter", subs: [
      N("Solids, liquids, gases and diffusion", 6, "The particle model, changes of state and why particles spread out.", [
        ["The particle model", ["Solid: particles touching in a regular pattern, vibrating about fixed positions. Fixed shape and volume.", "Liquid: particles touching but irregular, moving past each other. Fixed volume, takes the shape of the container.", "Gas: particles far apart, random and fast. No fixed shape or volume, easily compressed."]],
        ["Changes of state", ["Melting and boiling need energy to overcome forces between particles; freezing and condensing release it.", "Evaporation happens at the surface below the boiling point; boiling happens throughout the liquid.", "Temperature stays constant during a change of state on a heating curve.", "[E] Gas pressure rises with temperature (faster particles) and falls as volume increases."]],
        ["Diffusion", ["The net movement of particles from high to low concentration due to their random motion.", "[E] Lighter particles (lower relative molecular mass) diffuse faster.", "[E] Example: ammonia and hydrogen chloride in a tube form a white ring of ammonium chloride closer to the hydrochloric acid end, because ammonia is lighter."]],
      ], ["Know the particle diagrams for all three states.", "Temperature is flat during melting and boiling.", "Lower Mr means faster diffusion."], [
        ["Which describes particles in a liquid?", ["Far apart and moving fast", "Touching in a regular pattern, vibrating only", "Touching, irregular, moving past each other", "Not moving at all"], "C", "Liquid particles are close together but can slide past each other."],
        ["Why does temperature stay the same while ice melts?", ["Energy is lost", "Energy is used to overcome forces between particles", "The particles stop moving", "The thermometer is wrong"], "B", "The energy goes into breaking the forces holding the solid together, not into raising the temperature."],
        ["Ammonia (Mr 17) and hydrogen chloride (Mr 36.5) diffuse towards each other. Where does the white ring form?", ["In the exact middle", "Nearer the ammonia end", "Nearer the hydrogen chloride end", "It does not form"], "C", "Ammonia is lighter and diffuses faster, so it travels further before meeting the hydrogen chloride."],
        ["What happens to gas pressure in a sealed container when it is heated?", ["It falls", "It rises", "It stays the same", "It drops to zero"], "B", "Particles move faster and hit the walls more often and harder."],
        ["How is evaporation different from boiling?", ["Evaporation only happens at the boiling point", "Evaporation happens only at the surface and below the boiling point", "Boiling happens only at the surface", "There is no difference"], "B", "Evaporation is from the surface at any temperature; boiling happens throughout the liquid at the boiling point."],
      ]),
    ] },
    { id: "atoms", name: "Atoms, elements and compounds", subs: [
      N("Atomic structure", 7, "Protons, neutrons, electrons, isotopes and electron arrangement.", [
        ["Inside the atom", ["Proton: relative mass 1, charge +1, in the nucleus.", "Neutron: relative mass 1, charge 0, in the nucleus.", "Electron: very small mass (about 1/1840), charge -1, in shells around the nucleus.", "Proton (atomic) number = number of protons. Mass (nucleon) number = protons + neutrons."]],
        ["Isotopes", ["Atoms of the same element with the same number of protons but different numbers of neutrons.", "[E] Isotopes have the same chemical properties because they have the same electron arrangement.", "[E] Relative atomic mass is the average mass of the isotopes, weighted by their abundance."]],
        ["Electron shells", ["Shells fill in order: 2, then 8, then 8 for the first 20 elements.", "Example: sodium (11) is 2,8,1. Chlorine (17) is 2,8,7.", "The group number equals the number of outer shell electrons; the period number equals the number of shells.", "Noble gases have full outer shells, so they are unreactive."]],
      ], ["Neutrons = mass number minus proton number.", "Isotopes: same protons, different neutrons.", "Group = outer electrons, period = number of shells."], [
        ["An atom has mass number 23 and proton number 11. How many neutrons does it have?", ["11", "12", "23", "34"], "B", "Neutrons = 23 - 11 = 12."],
        ["What are isotopes?", ["Atoms with the same mass number", "Atoms of the same element with different numbers of neutrons", "Atoms with different numbers of protons", "Ions of the same element"], "B", "Isotopes have the same number of protons but a different number of neutrons."],
        ["What is the electron arrangement of chlorine (proton number 17)?", ["2,8,7", "2,7,8", "2,8,8", "8,8,1"], "A", "17 electrons fill as 2, then 8, then 7."],
        ["Why do isotopes of an element react in the same way?", ["They have the same mass", "They have the same electron arrangement", "They have the same number of neutrons", "They are all radioactive"], "B", "Chemical reactions depend on electrons, which are the same for all isotopes of an element."],
        ["Where is almost all the mass of an atom?", ["In the electron shells", "In the nucleus", "Spread evenly", "In the outer shell"], "B", "Protons and neutrons are in the nucleus and electrons have almost no mass."],
      ]),
      N("Bonding and structure", 8, "Ionic, covalent and metallic bonding, and how bonding explains properties.", [
        ["Ionic bonding", ["Between metals and non metals. Electrons are transferred: metals lose electrons to form positive ions, non metals gain them to form negative ions.", "Strong electrostatic attraction between oppositely charged ions in a giant lattice.", "High melting points; conduct electricity when molten or dissolved (ions free to move), not when solid."]],
        ["Covalent bonding", ["Between non metals. A covalent bond is a shared pair of electrons.", "Simple molecules (such as water, methane, carbon dioxide): weak forces between molecules, so low melting and boiling points; do not conduct.", "[E] Giant covalent structures: diamond (each carbon bonded to four others, very hard), graphite (layers, each carbon bonded to three, free electrons so it conducts, layers slide so it is soft), silicon(IV) oxide (like diamond)."]],
        ["Metallic bonding", ["[E] A lattice of positive ions in a sea of delocalised electrons.", "[E] Good conductors because the delocalised electrons move.", "[E] Malleable and ductile because layers of ions can slide."]],
      ], ["Ionic: transfer of electrons. Covalent: sharing. Metallic: sea of electrons.", "Simple molecules have weak intermolecular forces, not weak bonds.", "Graphite conducts because each carbon has a free electron."], [
        ["What happens in ionic bonding?", ["Electrons are shared", "Electrons are transferred from a metal to a non metal", "Protons are transferred", "Neutrons are shared"], "B", "Metal atoms lose electrons and non metal atoms gain them, forming oppositely charged ions."],
        ["Why does sodium chloride conduct when molten but not when solid?", ["Electrons move when molten", "Ions are free to move when molten", "It turns into a metal", "Covalent bonds break"], "B", "In the solid the ions are fixed in the lattice; molten, they can move and carry charge."],
        ["Why does methane have a low boiling point?", ["Its covalent bonds are weak", "The forces between its molecules are weak", "It is ionic", "It has delocalised electrons"], "B", "Only the weak intermolecular forces are overcome when it boils; the covalent bonds stay intact."],
        ["Why can graphite conduct electricity?", ["It has ions", "Each carbon atom has one delocalised electron", "It is a metal", "Its layers are fixed"], "B", "Each carbon bonds to three others, leaving one electron free to move."],
        ["Why are metals malleable?", ["Their electrons are fixed", "Layers of positive ions can slide over each other", "They are covalent", "They have no bonds"], "B", "The layers slide without breaking the metallic bonding."],
      ]),
    ] },
    { id: "stoich", name: "Stoichiometry", subs: [
      N("Formulae, equations and moles", 9, "Writing formulae, balancing equations and calculating with moles.", [
        ["Formulae and equations", ["Use ion charges to work out formulae: Na⁺ and O²⁻ give Na₂O; Al³⁺ and SO₄²⁻ give Al₂(SO₄)₃.", "Balance equations by changing the numbers in front, never the formulae.", "State symbols: (s), (l), (g), (aq)."]],
        ["Relative masses", ["Relative formula mass (Mr) is the sum of the relative atomic masses (Ar) in the formula.", "Example: H₂O = 2 x 1 + 16 = 18.", "Percentage by mass of an element = (Ar x number of atoms) / Mr x 100."]],
        ["The mole", ["[E] One mole contains 6.02 x 10²³ particles (the Avogadro constant).", "[E] Moles = mass / Mr.", "[E] One mole of any gas occupies 24 dm³ at room temperature and pressure.", "[E] Concentration (mol/dm³) = moles / volume in dm³.", "[E] Use the mole ratio from the balanced equation to find masses of products and reactants.", "[E] Percentage yield = actual yield / theoretical yield x 100."]],
      ], ["Moles = mass / Mr.", "Gas volume = moles x 24 dm³ at r.t.p.", "Never change a formula to balance an equation."], [
        ["What is the Mr of CO₂? (C = 12, O = 16)", ["28", "40", "44", "56"], "C", "12 + 2 x 16 = 44."],
        ["How many moles are in 36 g of water? (Mr = 18)", ["0.5", "2", "18", "648"], "B", "Moles = 36 / 18 = 2."],
        ["What volume do 0.5 mol of a gas occupy at room temperature and pressure?", ["6 dm³", "12 dm³", "24 dm³", "48 dm³"], "B", "0.5 x 24 = 12 dm³."],
        ["What is the formula of aluminium oxide? (Al³⁺, O²⁻)", ["AlO", "Al₂O₃", "Al₃O₂", "AlO₃"], "B", "Two Al³⁺ (total +6) balance three O²⁻ (total -6)."],
        ["0.2 mol of sodium hydroxide is dissolved to make 500 cm³ of solution. What is its concentration?", ["0.1 mol/dm³", "0.4 mol/dm³", "1.0 mol/dm³", "100 mol/dm³"], "B", "500 cm³ = 0.5 dm³. 0.2 / 0.5 = 0.4 mol/dm³."],
      ]),
    ] },
    { id: "electrochem", name: "Electrochemistry", subs: [
      N("Electrolysis", 8, "Splitting ionic compounds with electricity, and what forms at each electrode.", [
        ["The basics", ["Electrolysis is the decomposition of an ionic compound, when molten or in aqueous solution, by passing an electric current.", "The electrolyte must be molten or dissolved so the ions can move.", "Cathode (negative): positive ions gain electrons (reduction). Anode (positive): negative ions lose electrons (oxidation)."]],
        ["Products", ["Molten binary compounds: metal at the cathode, non metal at the anode. Molten lead(II) bromide gives lead and bromine.", "Aqueous solutions: hydrogen forms at the cathode unless the metal is less reactive than hydrogen (such as copper).", "At the anode: a halogen forms from concentrated halide solutions; otherwise oxygen forms.", "Concentrated sodium chloride (brine): hydrogen at the cathode, chlorine at the anode, sodium hydroxide left in solution."]],
        ["Uses", ["Electroplating: the object is the cathode, the plating metal is the anode, and the electrolyte contains ions of the plating metal.", "Purifying copper with a pure copper cathode and impure copper anode.", "Aluminium is extracted by electrolysis of aluminium oxide dissolved in molten cryolite; the carbon anodes burn away and must be replaced.", "Hydrogen fuel cells react hydrogen and oxygen to make water and electricity."]],
      ], ["Cathode: reduction, positive ions. Anode: oxidation, negative ions.", "In water, hydrogen forms at the cathode if the metal is more reactive than hydrogen.", "Object to be plated goes on the cathode."], [
        ["Which product forms at the cathode in the electrolysis of molten lead(II) bromide?", ["Bromine", "Lead", "Hydrogen", "Oxygen"], "B", "Positive lead ions go to the cathode and gain electrons to form lead."],
        ["Why must an ionic compound be molten or dissolved for electrolysis?", ["So it can be heated", "So the ions can move", "So electrons can move through it", "So it becomes covalent"], "B", "In a solid the ions are fixed; they must be free to move to the electrodes."],
        ["What forms at the anode in the electrolysis of concentrated aqueous sodium chloride?", ["Sodium", "Hydrogen", "Chlorine", "Oxygen"], "C", "Chloride ions are discharged at the anode as chlorine gas."],
        ["In electroplating a spoon with silver, where is the spoon placed?", ["As the anode", "As the cathode", "In the electrolyte only", "It is not used"], "B", "Silver ions are reduced onto the object at the cathode."],
        ["What happens at the anode?", ["Reduction: ions gain electrons", "Oxidation: ions lose electrons", "Neutrons are lost", "Nothing"], "B", "Negative ions lose electrons at the anode: oxidation."],
      ]),
    ] },
    { id: "energetics", name: "Chemical energetics", subs: [
      N("Exothermic and endothermic reactions", 6, "Energy changes in reactions, energy level diagrams and bond energies.", [
        ["Two types", ["Exothermic reactions transfer thermal energy to the surroundings, so the temperature rises. Examples: combustion, neutralisation, respiration.", "Endothermic reactions take in thermal energy from the surroundings, so the temperature falls. Examples: thermal decomposition, photosynthesis, dissolving ammonium nitrate.", "Enthalpy change (ΔH) is negative for exothermic and positive for endothermic reactions."]],
        ["Diagrams and bonds", ["Energy level diagrams show reactants and products; for exothermic, the products are lower.", "Activation energy is the minimum energy colliding particles need to react.", "Breaking bonds takes in energy (endothermic); making bonds gives out energy (exothermic).", "[E] ΔH = energy to break bonds minus energy released making bonds."]],
      ], ["Exothermic: temperature rises, ΔH negative.", "Bond breaking is endothermic, bond making is exothermic.", "Activation energy is the minimum energy to react."], [
        ["The temperature of a reaction mixture falls. What type of reaction is it?", ["Exothermic", "Endothermic", "Neutralisation", "Combustion"], "B", "Endothermic reactions take in energy from the surroundings, so they feel colder."],
        ["What is the sign of ΔH for an exothermic reaction?", ["Positive", "Negative", "Zero", "It depends on the colour"], "B", "Energy is released, so ΔH is negative."],
        ["Which statement about bonds is correct?", ["Breaking bonds releases energy", "Making bonds takes in energy", "Breaking bonds takes in energy", "Bonds have no energy"], "C", "Energy is needed to break bonds; making bonds releases energy."],
        ["What is activation energy?", ["The energy released by a reaction", "The minimum energy colliding particles need to react", "The energy in the products", "The energy of a catalyst"], "B", "Particles need at least the activation energy for a collision to lead to a reaction."],
        ["Which of these is endothermic?", ["Burning methane", "Neutralising an acid", "Thermal decomposition of calcium carbonate", "Respiration"], "C", "Thermal decomposition needs a continuous input of heat."],
      ]),
    ] },
    { id: "reactions", name: "Chemical reactions", subs: [
      N("Rates, equilibrium and redox", 9, "What speeds reactions up, reversible reactions, and oxidation and reduction.", [
        ["Rate of reaction", ["Rate increases with higher concentration or gas pressure (more frequent collisions), larger surface area (smaller pieces), higher temperature (more frequent collisions and more particles above the activation energy), and a catalyst.", "A catalyst speeds up a reaction by providing a pathway with lower activation energy, and is unchanged at the end.", "Measure rate by gas volume over time, mass loss, or the time for a precipitate to hide a cross."]],
        ["Reversible reactions", ["[E] Shown by ⇌. Example: hydrated copper(II) sulfate (blue) ⇌ anhydrous copper(II) sulfate (white) + water.", "[E] In a closed system, equilibrium is reached when the forward and reverse rates are equal and concentrations stay constant.", "[E] Haber process: N₂ + 3H₂ ⇌ 2NH₃, iron catalyst, about 450 degrees C and 200 atmospheres.", "[E] Contact process: 2SO₂ + O₂ ⇌ 2SO₃, vanadium(V) oxide catalyst, about 450 degrees C and 2 atmospheres."]],
        ["Redox", ["Oxidation is gain of oxygen or loss of electrons; reduction is loss of oxygen or gain of electrons (OIL RIG).", "[E] An oxidising agent oxidises something else and is itself reduced.", "[E] Acidified potassium manganate(VII) goes from purple to colourless when it acts as an oxidising agent."]],
      ], ["Collision theory explains every rate factor.", "Equilibrium: equal rates, constant concentrations, closed system.", "OIL RIG: oxidation is loss, reduction is gain of electrons."], [
        ["Why does powdered calcium carbonate react faster with acid than lumps?", ["It is hotter", "It has a larger surface area, so more frequent collisions", "It is a catalyst", "It has more energy"], "B", "Smaller pieces expose more surface for acid particles to hit."],
        ["How does a catalyst increase the rate of a reaction?", ["It gives particles more energy", "It provides a pathway with lower activation energy", "It increases concentration", "It is used up"], "B", "More collisions then have enough energy to react."],
        ["What is true at dynamic equilibrium?", ["The reaction has stopped", "Forward and reverse rates are equal", "Only products are present", "Concentrations keep changing"], "B", "Both reactions continue at the same rate, so concentrations stay constant."],
        ["Which catalyst is used in the Haber process?", ["Vanadium(V) oxide", "Iron", "Platinum", "Nickel"], "B", "Iron is the catalyst for making ammonia."],
        ["In the reaction Mg → Mg²⁺ + 2e⁻, what happens to magnesium?", ["It is reduced", "It is oxidised", "It is neutralised", "Nothing"], "B", "Loss of electrons is oxidation."],
      ]),
    ] },
    { id: "acids", name: "Acids, bases and salts", subs: [
      N("Acids, bases and making salts", 8, "pH, neutralisation, oxides and the methods for preparing salts.", [
        ["Acids and bases", ["Acids release H⁺ ions in water; alkalis release OH⁻ ions. A base is a substance that neutralises an acid; an alkali is a soluble base.", "pH below 7 is acidic, 7 neutral, above 7 alkaline. Universal indicator shows the pH by colour.", "[E] Strong acids (like hydrochloric acid) are completely ionised; weak acids (like ethanoic acid) are partly ionised.", "Neutralisation: H⁺ + OH⁻ → H₂O."]],
        ["Reactions of acids", ["Acid + metal → salt + hydrogen.", "Acid + base → salt + water.", "Acid + carbonate → salt + water + carbon dioxide.", "[E] Metal oxides are basic; non metal oxides are acidic; aluminium and zinc oxides are amphoteric."]],
        ["Making salts", ["Soluble salt from an insoluble base or carbonate: add excess solid to acid, filter, then crystallise.", "Soluble salt from an alkali: titration to find exact volumes, then repeat without indicator and crystallise.", "Insoluble salt: precipitation by mixing two solutions, then filter, wash and dry.", "Tests: hydrogen gives a squeaky pop; carbon dioxide turns limewater milky."]],
      ], ["Acid + carbonate gives salt, water and carbon dioxide.", "Excess solid then filter for soluble salts from insoluble bases.", "Strong and weak are about ionisation, not concentration."], [
        ["What are the products of an acid reacting with a metal carbonate?", ["Salt and hydrogen", "Salt and water", "Salt, water and carbon dioxide", "Salt only"], "C", "Carbonates fizz with acids, giving carbon dioxide as well as a salt and water."],
        ["Which ion is responsible for acidity?", ["OH⁻", "H⁺", "Na⁺", "Cl⁻"], "B", "Acids release hydrogen ions in water."],
        ["How would you make an insoluble salt such as barium sulfate?", ["Titration", "Add excess base and filter", "Precipitation by mixing two solutions", "Electrolysis"], "C", "Mix solutions containing the two ions; the insoluble salt precipitates and is filtered off."],
        ["Why is excess copper(II) oxide added when making copper(II) sulfate?", ["To make it faster", "To make sure all the acid is used up", "To make crystals bigger", "To act as a catalyst"], "B", "Excess base ensures no acid is left; the extra solid is filtered off."],
        ["What does it mean to say ethanoic acid is weak?", ["It is dilute", "It is only partly ionised in water", "It has a high pH of 12", "It does not react"], "B", "Weak acids do not fully ionise, so they release fewer H⁺ ions."],
      ]),
    ] },
    { id: "periodic", name: "The Periodic Table", subs: [
      N("Groups and trends", 7, "Group I, Group VII, the transition elements and the noble gases.", [
        ["Group I: alkali metals", ["Soft, low density metals that react with water to form hydroxides and hydrogen.", "Reactivity increases down the group because the outer electron is further from the nucleus and more easily lost.", "Lithium fizzes; sodium melts into a ball; potassium burns with a lilac flame."]],
        ["Group VII: halogens", ["Diatomic non metals. Chlorine is a pale yellow green gas, bromine a red brown liquid, iodine a grey black solid.", "Reactivity decreases down the group.", "A more reactive halogen displaces a less reactive one from its salt: chlorine + potassium bromide gives potassium chloride + bromine."]],
        ["Transition elements and noble gases", ["Transition elements have high densities and melting points, form coloured compounds, have variable oxidation numbers and act as catalysts.", "Noble gases (Group VIII) are unreactive because they have full outer shells. Helium is used in balloons, argon in light bulbs."]],
      ], ["Group I gets more reactive down; Group VII less reactive down.", "Displacement: more reactive halogen pushes out the less reactive one.", "Transition metals: coloured compounds and catalysts."], [
        ["Why does reactivity increase down Group I?", ["Atoms get smaller", "The outer electron is further from the nucleus and more easily lost", "They gain more electrons", "They become non metals"], "B", "Weaker attraction to the outer electron makes it easier to lose."],
        ["What forms when sodium reacts with water?", ["Sodium oxide and oxygen", "Sodium hydroxide and hydrogen", "Sodium chloride and water", "Sodium carbonate"], "B", "Alkali metals and water give the metal hydroxide and hydrogen."],
        ["Which reaction happens?", ["Iodine + potassium chloride", "Bromine + potassium chloride", "Chlorine + potassium iodide", "Iodine + potassium bromide"], "C", "Chlorine is more reactive than iodine, so it displaces it."],
        ["Which is a property of transition elements?", ["Low melting points", "Coloured compounds", "Very low density", "React violently with water"], "B", "Transition element compounds are often coloured."],
        ["Why are noble gases unreactive?", ["They are gases", "They have full outer electron shells", "They are heavy", "They have no electrons"], "B", "A full outer shell means they do not need to gain, lose or share electrons."],
      ]),
    ] },
    { id: "metals", name: "Metals", subs: [
      N("Reactivity, extraction and corrosion", 8, "The reactivity series, extracting metals, alloys and rusting.", [
        ["The reactivity series", ["Potassium, sodium, calcium, magnesium, aluminium, (carbon), zinc, iron, (hydrogen), copper, silver, gold.", "A more reactive metal displaces a less reactive one from its compounds.", "Metals above hydrogen react with dilute acids to give hydrogen."]],
        ["Extraction", ["Metals below carbon are extracted by reduction with carbon.", "Iron in the blast furnace: coke burns to carbon dioxide, which forms carbon monoxide, which reduces iron(III) oxide to iron. Limestone removes silica impurities as slag.", "Metals above carbon, such as aluminium, are extracted by electrolysis."]],
        ["Alloys and rusting", ["An alloy is a mixture of a metal with other elements. Alloys are harder because different sized atoms stop layers sliding. Brass is copper and zinc; steel is iron with carbon.", "Rusting of iron needs both water and oxygen.", "Prevention: barriers (paint, oil, plastic, galvanising with zinc) and sacrificial protection with a more reactive metal such as zinc or magnesium."]],
      ], ["Above carbon: electrolysis. Below carbon: reduce with carbon.", "Rusting needs water and oxygen.", "Alloys are harder because layers cannot slide easily."], [
        ["How is aluminium extracted from its ore?", ["Heating with carbon", "Electrolysis", "Displacement by copper", "Dissolving in water"], "B", "Aluminium is more reactive than carbon, so electrolysis is used."],
        ["What does rusting need?", ["Oxygen only", "Water only", "Water and oxygen", "Carbon dioxide"], "C", "Iron rusts only when both water and oxygen are present."],
        ["Why is an alloy harder than the pure metal?", ["It has more electrons", "Different sized atoms disrupt the layers so they cannot slide easily", "It is covalent", "It is heated more"], "B", "The different atoms distort the regular layers."],
        ["What reduces iron(III) oxide in the blast furnace?", ["Oxygen", "Limestone", "Carbon monoxide", "Slag"], "C", "Carbon monoxide removes oxygen from iron(III) oxide."],
        ["How does zinc protect iron by sacrificial protection?", ["It is less reactive", "It is more reactive so it corrodes instead of the iron", "It makes the iron harder", "It keeps water away only"], "B", "The more reactive zinc loses electrons in preference to iron."],
      ]),
    ] },
    { id: "environment", name: "Chemistry of the environment", subs: [
      N("Water and air", 6, "Testing and treating water, air pollutants and climate change.", [
        ["Water", ["Anhydrous copper(II) sulfate turns from white to blue with water; anhydrous cobalt(II) chloride turns from blue to pink.", "Pure water boils at 100 degrees C and melts at 0 degrees C.", "Treating water: sedimentation and filtration remove solids, carbon removes tastes and smells, chlorination kills microbes.", "Fertilisers containing nitrogen, phosphorus and potassium (NPK) help plants grow."]],
        ["Air", ["Clean air is about 78 percent nitrogen, 21 percent oxygen, plus argon, carbon dioxide and other gases.", "Carbon monoxide is toxic; it comes from incomplete combustion.", "Sulfur dioxide and oxides of nitrogen cause acid rain. Catalytic converters change carbon monoxide and nitrogen oxides into carbon dioxide and nitrogen.", "Carbon dioxide and methane are greenhouse gases that cause climate change. Reduce them by using less fossil fuel, planting trees and using renewable energy."]],
      ], ["Test for water: copper(II) sulfate white to blue.", "Pure water: boils at exactly 100 degrees C.", "Acid rain: sulfur dioxide and nitrogen oxides."], [
        ["What is the chemical test for water?", ["Limewater turns milky", "Anhydrous copper(II) sulfate turns from white to blue", "Litmus turns red", "A squeaky pop"], "B", "Water turns white anhydrous copper(II) sulfate blue. Checking purity needs the boiling point."],
        ["Why is chlorine added to drinking water?", ["To improve the taste", "To kill microorganisms", "To remove solids", "To soften it"], "B", "Chlorination kills harmful bacteria."],
        ["Which gas causes acid rain?", ["Nitrogen", "Sulfur dioxide", "Argon", "Oxygen"], "B", "Sulfur dioxide dissolves in rain to form acids."],
        ["What does a catalytic converter do?", ["Makes more carbon monoxide", "Converts carbon monoxide and nitrogen oxides into less harmful gases", "Removes all carbon dioxide", "Burns more fuel"], "B", "It turns carbon monoxide into carbon dioxide and nitrogen oxides into nitrogen."],
        ["About what percentage of clean air is nitrogen?", ["21", "50", "78", "99"], "C", "Nitrogen makes up about 78 percent of dry air."],
      ]),
    ] },
    { id: "organic", name: "Organic chemistry", subs: [
      N("Fuels, hydrocarbons and homologous series", 9, "Crude oil, alkanes, alkenes, alcohols, carboxylic acids and polymers.", [
        ["Crude oil", ["A mixture of hydrocarbons separated by fractional distillation into fractions with similar boiling points.", "Fractions from top to bottom: refinery gas, gasoline (petrol), naphtha, kerosene, diesel oil, fuel oil, lubricating oil, bitumen.", "Lower down: bigger molecules, higher boiling points, more viscous.", "Cracking breaks long alkanes into shorter alkanes and alkenes, using heat and a catalyst."]],
        ["Homologous series", ["Same general formula, similar chemical properties, a trend in physical properties.", "Alkanes CₙH₂ₙ₊₂: saturated, single bonds only, burn and react with chlorine in UV light (substitution).", "Alkenes CₙH₂ₙ: unsaturated, a C=C double bond. Bromine water turns from orange to colourless (addition).", "Alcohols: the -OH group. Ethanol is made by fermentation of glucose with yeast, or by hydration of ethene with steam and a catalyst.", "Carboxylic acids: the -COOH group. Ethanoic acid is a weak acid."]],
        ["Polymers", ["Addition polymers form from alkenes: poly(ethene) from ethene.", "[E] Condensation polymers such as nylon and PET form with a small molecule (water) lost each time.", "Non biodegradable plastics cause pollution in landfill and the sea; burning them can give toxic gases."]],
      ], ["Bromine water: orange to colourless shows an alkene.", "Cracking gives shorter alkanes and alkenes.", "Fermentation: slow and renewable. Hydration of ethene: fast and continuous but uses crude oil."], [
        ["What is the test for an alkene?", ["Limewater turns milky", "Bromine water turns from orange to colourless", "Litmus turns blue", "A squeaky pop"], "B", "Bromine adds across the double bond, so the colour goes."],
        ["Which is the general formula of the alkanes?", ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"], "B", "Alkanes are CₙH₂ₙ₊₂."],
        ["What does cracking produce?", ["Only alkanes", "Shorter alkanes and alkenes", "Polymers", "Alcohols only"], "B", "Long alkanes are broken into smaller, more useful alkanes and alkenes."],
        ["Which fraction of crude oil has the highest boiling point?", ["Refinery gas", "Gasoline", "Diesel oil", "Bitumen"], "D", "Bitumen has the biggest molecules and the highest boiling point."],
        ["What is made when ethene molecules join together?", ["Ethanol", "Poly(ethene)", "Nylon", "Ethanoic acid"], "B", "Ethene undergoes addition polymerisation to form poly(ethene)."],
      ]),
    ] },
    { id: "analysis", name: "Experimental techniques and chemical analysis", subs: [
      N("Separating, purity and tests", 8, "Apparatus, separation methods, chromatography and tests for ions and gases.", [
        ["Separating mixtures", ["Filtration: insoluble solid from a liquid.", "Crystallisation: a soluble solid from its solution.", "Simple distillation: a solvent from a solution. Fractional distillation: liquids with different boiling points.", "Pure substances have sharp melting and boiling points; impurities lower the melting point and raise the boiling point."]],
        ["Chromatography", ["Spots on a baseline in pencil, above the solvent level.", "Rf = distance moved by the spot / distance moved by the solvent front.", "A pure substance gives one spot. Locating agents show colourless spots."]],
        ["Tests", ["Gases: hydrogen squeaky pop; oxygen relights a glowing splint; carbon dioxide turns limewater milky; chlorine bleaches damp litmus; ammonia turns damp red litmus blue.", "Flame tests: lithium red, sodium yellow, potassium lilac, calcium orange red, copper(II) blue green.", "Halides: add dilute nitric acid then silver nitrate. Chloride white, bromide cream, iodide yellow precipitate.", "Sulfate: add dilute nitric acid then barium nitrate for a white precipitate. Carbonate: add acid, fizzing, gas turns limewater milky.", "Sodium hydroxide: Cu²⁺ light blue precipitate, Fe²⁺ green, Fe³⁺ red brown."]],
      ], ["Baseline in pencil, above the solvent.", "Rf = spot distance / solvent distance.", "Silver nitrate: white, cream, yellow for Cl, Br, I."], [
        ["Which method separates ethanol from water?", ["Filtration", "Crystallisation", "Fractional distillation", "Chromatography"], "C", "They have different boiling points and mix completely, so fractional distillation is used."],
        ["A spot moves 3 cm and the solvent front moves 6 cm. What is the Rf value?", ["0.5", "2", "3", "18"], "A", "Rf = 3 / 6 = 0.5."],
        ["Which gas relights a glowing splint?", ["Hydrogen", "Oxygen", "Carbon dioxide", "Chlorine"], "B", "Oxygen relights a glowing splint."],
        ["Silver nitrate gives a cream precipitate. Which ion is present?", ["Chloride", "Bromide", "Iodide", "Sulfate"], "B", "Chloride white, bromide cream, iodide yellow."],
        ["What colour precipitate forms when sodium hydroxide is added to Fe³⁺ ions?", ["Light blue", "Green", "Red brown", "White"], "C", "Iron(III) gives a red brown precipitate."],
      ]),
    ] },
  ],
};
