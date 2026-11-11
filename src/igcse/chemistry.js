// Revision notes, quizzes and flashcards for IGCSE Chemistry, following every section of the
// Cambridge 0620 syllabus (Edexcel 4CH1 covers the same ground in a different order). Lines
// starting "[E] " are Extended (Supplement) content. Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });

export default {
  id: "chemistry",
  name: "Chemistry",
  topics: [
    { id: "states", name: "States of matter", subs: [
      N("Solids, liquids and gases", 8, "Properties of the three states, the particle model, changes of state and heating curves.", [
        ["The three states", ["Solid: fixed shape and volume. Particles touching in a regular lattice, vibrating about fixed positions.", "Liquid: fixed volume, takes the shape of the container. Particles touching but irregular, sliding past each other.", "Gas: no fixed shape or volume, fills the container. Particles far apart, moving fast and randomly."]],
        ["Changes of state", ["Melting (solid to liquid) and boiling (liquid to gas) need energy to overcome the forces between particles.", "Freezing (liquid to solid) and condensing (gas to liquid) release energy.", "Evaporation happens at the surface of a liquid at any temperature; boiling happens throughout the liquid at the boiling point.", "Heating curve: temperature rises, then stays flat while melting, rises, then stays flat while boiling. The flat parts are the changes of state."]],
        ["Gases", ["[E] Raising the temperature of a gas at constant pressure increases its volume: particles move faster and hit the walls harder.", "[E] Raising the pressure of a gas at constant temperature decreases its volume: particles are pushed closer together."]],
      ], ["Solid: vibrate in place. Liquid: slide past. Gas: fast and random.", "Temperature is constant during melting and boiling.", "[E] Hotter gas expands; higher pressure squeezes it."], [
        ["In which state are particles touching but able to slide past each other?", ["Solid", "Liquid", "Gas", "Plasma"], "B", "Liquids flow because particles move past each other."],
        ["Why does temperature stay constant while a substance boils?", ["No energy is being added", "Energy is used to overcome forces between particles", "The thermometer stops working", "The particles stop moving"], "B", "The energy goes into separating the particles."],
        ["What is condensing?", ["Solid to liquid", "Liquid to gas", "Gas to liquid", "Liquid to solid"], "C", "Gas turning into a liquid releases energy."],
        ["How does evaporation differ from boiling?", ["Evaporation only happens at 100 °C", "Evaporation happens at the surface at any temperature", "Boiling happens only at the surface", "They are the same"], "B", "Boiling is throughout the liquid at its boiling point."],
        ["What happens to the volume of a gas when its temperature rises at constant pressure?", ["It falls", "It stays the same", "It rises", "It becomes zero"], "C", "Faster particles push the walls outwards."],
      ]),
      N("Diffusion", 5, "How particles spread out, and why lighter particles diffuse faster.", [
        ["Diffusion", ["Diffusion: the net movement of particles from a region of higher concentration to lower concentration, because of their random motion.", "It happens in liquids and gases, and is faster in gases.", "Example: a purple potassium manganate(VII) crystal in water slowly colours all the water."]],
        ["Rate of diffusion", ["Diffusion is faster at a higher temperature, because particles move faster.", "[E] Particles with a lower relative molecular mass (Mr) diffuse faster.", "[E] Ammonia (Mr 17) and hydrogen chloride (Mr 36.5) are released at opposite ends of a tube; a white ring of ammonium chloride forms nearer the HCl end, because ammonia travels further in the same time."]],
      ], ["Diffusion: high to low concentration by random motion.", "Faster in gases and at higher temperature.", "[E] Lower Mr, faster diffusion."], [
        ["What is diffusion?", ["Movement from low to high concentration", "Net movement from high to low concentration by random motion", "Dissolving", "Melting"], "B", "Particles spread out until evenly mixed."],
        ["In which state is diffusion fastest?", ["Solid", "Liquid", "Gas", "All the same"], "C", "Gas particles move fastest and are far apart."],
        ["Ammonia (Mr 17) and HCl (Mr 36.5) diffuse towards each other. Where does the white ring form?", ["In the middle", "Nearer the HCl end", "Nearer the ammonia end", "It does not form"], "B", "Ammonia is lighter, so it travels further."],
        ["How does temperature affect diffusion?", ["Higher temperature, slower", "Higher temperature, faster", "No effect", "Diffusion stops when hot"], "B", "Particles move faster when hotter."],
        ["Which gas diffuses fastest?", ["Chlorine (Mr 71)", "Carbon dioxide (Mr 44)", "Hydrogen (Mr 2)", "Oxygen (Mr 32)"], "C", "Lowest Mr diffuses fastest."],
      ]),
    ] },
    { id: "atoms", name: "Atoms, elements and compounds", subs: [
      N("Atomic structure and isotopes", 10, "Elements, compounds and mixtures, protons, neutrons and electrons, electron shells and isotopes.", [
        ["Elements, compounds and mixtures", ["Element: a substance made of only one type of atom.", "Compound: two or more elements chemically combined in fixed proportions.", "Mixture: two or more substances not chemically combined; can be separated by physical methods.", "[E] Alloys are mixtures of a metal with other elements."]],
        ["Atomic structure", ["Proton: relative charge +1, relative mass 1. Neutron: charge 0, mass 1. Electron: charge -1, mass 1/1836.", "Protons and neutrons are in the nucleus; electrons are in shells round it.", "Proton number (atomic number): number of protons. Mass number (nucleon number): protons + neutrons.", "Electronic configuration for the first 20 elements: shells hold 2, 8, 8. For example sodium 2,8,1 and calcium 2,8,8,2.", "Group number = number of outer shell electrons (except noble gases, which have full outer shells). Period number = number of occupied shells."]],
        ["Isotopes", ["Isotopes: atoms of the same element with the same proton number but different numbers of neutrons (different mass numbers).", "[E] Isotopes have the same chemical properties because they have the same number of outer electrons.", "[E] Relative atomic mass Ar = (mass of each isotope x its percentage abundance) added up ÷ 100.", "[E] Example: chlorine is 75% ³⁵Cl and 25% ³⁷Cl: Ar = (35 x 75 + 37 x 25) ÷ 100 = 35.5."]],
      ], ["Proton +1, neutron 0, electron -1.", "Shells: 2, 8, 8. Group = outer electrons, period = shells.", "[E] Ar = sum of (mass x abundance) ÷ 100."], [
        ["How many neutrons are in ²⁷Al (proton number 13)?", ["13", "14", "27", "40"], "B", "27 - 13 = 14."],
        ["What is the electronic configuration of magnesium (proton number 12)?", ["2,8,2", "2,10", "2,8,1,1", "8,4"], "A", "2 + 8 + 2 = 12."],
        ["Why do isotopes of an element react the same way?", ["Same number of neutrons", "Same number of outer electrons", "Same mass", "Same nucleus size"], "B", "Chemistry depends on electrons."],
        ["Copper is 69% ⁶³Cu and 31% ⁶⁵Cu. What is its relative atomic mass?", ["63.0", "63.6", "64.0", "65.0"], "B", "(63 x 69 + 65 x 31) ÷ 100 = 63.62."],
        ["An element has configuration 2,8,7. Which group and period is it in?", ["Group 7, period 3", "Group 3, period 7", "Group 17, period 2", "Group 2, period 3"], "A", "7 outer electrons, 3 shells: chlorine."],
        ["Which is a mixture?", ["Sodium chloride", "Water", "Air", "Oxygen"], "C", "Air is a mixture of gases not chemically combined."],
      ]),
      N("Ions, ionic and covalent bonds", 11, "How ions form, ionic bonding and its properties, covalent bonding and simple molecules.", [
        ["Ions and ionic bonds", ["An ion is a charged particle made when an atom loses or gains electrons.", "Metals lose electrons to form positive ions (cations); non metals gain electrons to form negative ions (anions).", "Ionic bond: the strong electrostatic attraction between oppositely charged ions. Formed between a metal and a non metal, such as Na⁺Cl⁻.", "Dot and cross diagrams show the transfer: sodium 2,8,1 gives one electron to chlorine 2,8,7, making Na⁺ (2,8) and Cl⁻ (2,8,8).", "[E] Ionic compounds form a giant lattice of alternating positive and negative ions."]],
        ["Properties of ionic compounds", ["High melting and boiling points: strong attractions throughout the lattice need lots of energy to overcome.", "Do not conduct when solid (ions fixed), but conduct when molten or dissolved in water (ions free to move).", "Many are soluble in water."]],
        ["Covalent bonds", ["A covalent bond is a shared pair of electrons between two non metal atoms.", "Know the dot and cross diagrams of H₂, Cl₂, H₂O, CH₄, NH₃ and HCl.", "[E] Also CH₃OH, C₂H₄, O₂ (double bond), CO₂ (two double bonds) and N₂ (triple bond)."]],
        ["Simple molecules", ["Low melting and boiling points: weak forces between molecules (intermolecular forces) need little energy to overcome. The covalent bonds inside the molecules do not break.", "Do not conduct electricity: no ions or free electrons.", "[E] Melting and boiling points rise as molecules get bigger, because the intermolecular forces are stronger."]],
      ], ["Ionic: metal and non metal, electrons transferred, high melting point.", "Covalent: non metals share pairs of electrons.", "Simple molecules: weak intermolecular forces, low boiling points, no conduction."], [
        ["What happens when sodium reacts with chlorine?", ["They share electrons", "Sodium gives an electron to chlorine", "Chlorine gives an electron to sodium", "They share protons"], "B", "Na becomes Na⁺ and Cl becomes Cl⁻."],
        ["Why does molten sodium chloride conduct but solid sodium chloride does not?", ["The molten form has free electrons", "In the molten form the ions are free to move", "The solid has no ions", "The solid is too cold"], "B", "Ions carry the charge when they can move."],
        ["How many shared pairs are in a water molecule?", ["1", "2", "3", "4"], "B", "One with each hydrogen."],
        ["Why does methane have a low boiling point?", ["Its covalent bonds are weak", "The forces between its molecules are weak", "It is ionic", "It has free electrons"], "B", "Boiling overcomes intermolecular forces, not covalent bonds."],
        ["What charge does a magnesium ion have?", ["+1", "+2", "-2", "-1"], "B", "Magnesium (2,8,2) loses two electrons."],
        ["How many covalent bonds join the atoms in N₂?", ["1", "2", "3", "4"], "C", "Nitrogen needs three more electrons, so a triple bond."],
      ]),
      N("Giant structures and metallic bonding", 8, "Diamond, graphite, silicon(IV) oxide and metals: their structures, properties and uses.", [
        ["Diamond and graphite", ["Both are giant covalent structures of carbon.", "Diamond: each carbon is bonded to four others in a tetrahedral network. Very hard, very high melting point, does not conduct. Used in cutting tools.", "Graphite: each carbon is bonded to three others in hexagonal layers. Weak forces between layers let them slide, so it is soft and slippery. One electron per carbon is delocalised, so it conducts. Used as a lubricant and as electrodes."]],
        ["Silicon(IV) oxide", ["[E] Silicon(IV) oxide (SiO₂, silica, sand) has a giant covalent structure like diamond: each Si bonded to four O, each O to two Si.", "[E] So it is hard, has a high melting point and does not conduct."]],
        ["Metallic bonding", ["[E] Metallic bonding: a lattice of positive metal ions in a sea of delocalised electrons, held by the attraction between them.", "[E] Metals conduct electricity because the delocalised electrons move through the structure.", "[E] Metals are malleable and ductile because the layers of ions can slide over each other without breaking the bonding.", "Metals generally have high melting points and are good conductors of heat."]],
      ], ["Diamond: 4 bonds each, hard, no conduction.", "Graphite: 3 bonds each, layers slide, conducts.", "[E] Metals: positive ions in a sea of delocalised electrons."], [
        ["Why does graphite conduct electricity?", ["It has free ions", "Each carbon has one delocalised electron", "It is a metal", "Its layers slide"], "B", "Delocalised electrons carry the current."],
        ["Why is diamond very hard?", ["Weak forces between layers", "Each carbon is strongly bonded to four others in a giant network", "It is ionic", "It has delocalised electrons"], "B", "A rigid 3D network of covalent bonds."],
        ["What makes graphite useful as a lubricant?", ["It is very hard", "Its layers slide over each other", "It conducts", "It has a high melting point"], "B", "Weak forces between layers."],
        ["What is metallic bonding?", ["Shared pairs of electrons", "Attraction between positive ions and delocalised electrons", "Transfer of electrons", "Weak forces between molecules"], "B", "A sea of electrons holds the ions."],
        ["Why are metals malleable?", ["Their electrons are fixed", "Layers of ions can slide over each other", "They are covalent", "They have low melting points"], "B", "The sea of electrons keeps them bonded as layers slide."],
      ]),
    ] },
    { id: "stoich", name: "Stoichiometry", subs: [
      N("Formulae and equations", 9, "Writing formulae from ion charges, balancing equations, state symbols and ionic equations.", [
        ["Formulae", ["A formula shows the number of each type of atom, such as H₂O, CO₂, CaCO₃.", "Ionic formulae: balance the charges. Common ions: Na⁺, K⁺, Ag⁺, H⁺, NH₄⁺, Mg²⁺, Ca²⁺, Cu²⁺, Zn²⁺, Fe²⁺, Fe³⁺, Al³⁺, Cl⁻, Br⁻, I⁻, OH⁻, NO₃⁻, O²⁻, SO₄²⁻, CO₃²⁻.", "Examples: Mg²⁺ and Cl⁻ give MgCl₂; Al³⁺ and O²⁻ give Al₂O₃; Ca²⁺ and OH⁻ give Ca(OH)₂.", "Molecular formula: the actual numbers of atoms. Empirical formula: the simplest whole number ratio (C₂H₄ has empirical formula CH₂)."]],
        ["Equations", ["Word equations name the reactants and products.", "Balanced symbol equations have the same number of each atom on both sides. Only change the numbers in front of formulae, never the formulae.", "Example: 2Mg + O₂ → 2MgO.", "State symbols: (s) solid, (l) liquid, (g) gas, (aq) dissolved in water.", "[E] Ionic equations show only the ions that react, such as H⁺(aq) + OH⁻(aq) → H₂O(l) for neutralisation, or Ag⁺(aq) + Cl⁻(aq) → AgCl(s)."]],
      ], ["Balance ion charges to write formulae.", "Balance equations with big numbers in front.", "(s), (l), (g), (aq)."], [
        ["What is the formula of aluminium oxide?", ["AlO", "Al₂O₃", "Al₃O₂", "AlO₃"], "B", "2 x 3+ = 6+ balances 3 x 2- = 6-."],
        ["Balance: _H₂ + O₂ → _H₂O", ["1, 1", "2, 2", "2, 1", "1, 2"], "B", "2H₂ + O₂ → 2H₂O."],
        ["What does (aq) mean?", ["A gas", "Dissolved in water", "A liquid", "A solid"], "B", "Aqueous solution."],
        ["What is the empirical formula of C₆H₁₂O₆?", ["C₆H₁₂O₆", "CH₂O", "C₂H₄O₂", "CHO"], "B", "Divide by 6."],
        ["What is the formula of calcium hydroxide?", ["CaOH", "Ca(OH)₂", "Ca₂OH", "CaOH₂"], "B", "Ca²⁺ needs two OH⁻."],
        ["Which is the ionic equation for neutralisation?", ["Na⁺ + Cl⁻ → NaCl", "H⁺ + OH⁻ → H₂O", "2H₂ + O₂ → 2H₂O", "H₂O → H⁺ + OH⁻"], "B", "Acid H⁺ and alkali OH⁻ make water."],
      ]),
      N("Relative masses and the mole", 10, "Ar and Mr, the mole, the Avogadro constant, reacting masses and gas volumes.", [
        ["Relative masses", ["Relative atomic mass Ar: the average mass of the isotopes of an element compared with 1/12 of the mass of a carbon-12 atom.", "Relative molecular (formula) mass Mr: add up the Ar of all atoms in the formula. CO₂ = 12 + 16 + 16 = 44."]],
        ["The mole", ["One mole of a substance contains 6.02 x 10²³ particles (the Avogadro constant).", "The mass of 1 mole is its Ar or Mr in grams (the molar mass, g/mol).", "Moles n = mass ÷ molar mass (n = m / M).", "Number of particles = moles x 6.02 x 10²³."]],
        ["Gas volumes", ["One mole of any gas occupies 24 dm³ (24 000 cm³) at room temperature and pressure (r.t.p.).", "Moles of gas = volume in dm³ ÷ 24."]],
        ["Reacting masses", ["Use the balanced equation's mole ratio.", "Example: mass of CO₂ from 10 g of CaCO₃ (Mr 100): CaCO₃ → CaO + CO₂. 10 ÷ 100 = 0.1 mol, giving 0.1 mol CO₂ = 0.1 x 44 = 4.4 g.", "Steps: moles of the known, use the ratio, convert to the mass or volume wanted."]],
      ], ["n = m / M; Mr = sum of Ar.", "1 mol = 6.02 x 10²³ particles.", "1 mol of gas = 24 dm³ at r.t.p."], [
        ["What is the Mr of H₂SO₄? (H = 1, S = 32, O = 16)", ["49", "96", "98", "100"], "C", "2 + 32 + 64 = 98."],
        ["How many moles are in 36 g of water (Mr 18)?", ["0.5", "2", "18", "648"], "B", "36 ÷ 18 = 2 mol."],
        ["What volume does 0.5 mol of oxygen occupy at r.t.p.?", ["0.5 dm³", "12 dm³", "24 dm³", "48 dm³"], "B", "0.5 x 24 = 12 dm³."],
        ["How many atoms are in 2 moles of helium?", ["6.02 x 10²³", "1.2 x 10²⁴", "3.01 x 10²³", "2"], "B", "2 x 6.02 x 10²³ = 1.2 x 10²⁴."],
        ["What mass of MgO forms from 4.8 g of Mg? (2Mg + O₂ → 2MgO; Mg = 24, O = 16)", ["4.8 g", "6.4 g", "8.0 g", "16 g"], "C", "0.2 mol Mg gives 0.2 mol MgO x 40 = 8.0 g."],
      ]),
      N("Concentration, yield and formulae calculations", 11, "Concentration, titration calculations, empirical formulae, percentage yield, composition and purity, and limiting reactants.", [
        ["Concentration", ["Concentration in mol/dm³ = moles ÷ volume in dm³ (c = n / V).", "Concentration in g/dm³ = mass ÷ volume in dm³. Convert with the molar mass.", "cm³ ÷ 1000 = dm³."]],
        ["[E] Titration calculations", ["[E] Moles of the solution of known concentration = c x V.", "[E] Use the equation ratio to find moles of the other, then c = n ÷ V.", "[E] Example: 25.0 cm³ of NaOH is neutralised by 20.0 cm³ of 0.100 mol/dm³ HCl. Moles HCl = 0.00200, ratio 1:1, so c(NaOH) = 0.00200 ÷ 0.0250 = 0.0800 mol/dm³."]],
        ["[E] Empirical and molecular formulae", ["[E] Empirical formula: divide the mass (or %) of each element by its Ar, then divide by the smallest to get the ratio.", "[E] Example: 2.4 g C and 0.6 g H: C 0.2, H 0.6, ratio 1:3, so CH₃.", "[E] Molecular formula: Mr ÷ empirical formula mass gives the multiplier. CH₃ with Mr 30 is C₂H₆."]],
        ["Percentages", ["[E] Percentage yield = actual yield ÷ theoretical yield x 100.", "[E] Percentage composition by mass = (Ar x number of atoms) ÷ Mr x 100.", "[E] Percentage purity = mass of pure product ÷ mass of impure sample x 100.", "[E] Limiting reactant: the one that runs out first and limits the amount of product; the other is in excess."]],
      ], ["c = n / V, with V in dm³.", "[E] Empirical formula: ÷ Ar, ÷ smallest.", "[E] % yield = actual ÷ theoretical x 100."], [
        ["What is the concentration of 0.5 mol of NaCl in 250 cm³?", ["0.125 mol/dm³", "2 mol/dm³", "0.5 mol/dm³", "125 mol/dm³"], "B", "0.5 ÷ 0.25 = 2 mol/dm³."],
        ["A reaction should make 20 g but gives 15 g. What is the percentage yield?", ["15%", "25%", "75%", "133%"], "C", "15 ÷ 20 x 100 = 75%."],
        ["A compound is 1.2 g carbon and 3.2 g oxygen. What is its empirical formula?", ["CO", "CO₂", "C₂O", "C₂O₃"], "B", "C 0.1 mol, O 0.2 mol: ratio 1:2."],
        ["What is the percentage by mass of oxygen in water (Mr 18)?", ["11%", "50%", "67%", "89%"], "D", "16 ÷ 18 x 100 = 89%."],
        ["How many moles are in 20 cm³ of 0.1 mol/dm³ HCl?", ["0.002", "0.02", "2", "200"], "A", "0.1 x 0.020 = 0.002 mol."],
        ["What is the limiting reactant?", ["The one in excess", "The one that runs out first", "The catalyst", "The product"], "B", "It limits how much product forms."],
      ]),
    ] },
    { id: "electrochem", name: "Electrochemistry", subs: [
      N("Electrolysis", 12, "Electrolytes and electrodes, the products for each electrolyte, half equations, purifying copper and electroplating.", [
        ["Basics", ["Electrolysis: breaking down an ionic compound, molten or in solution, using electricity.", "Electrolyte: the molten or dissolved ionic compound that conducts. Electrodes: usually inert graphite or platinum.", "Cathode: negative electrode; positive ions (cations) go to it. Anode: positive electrode; negative ions (anions) go to it.", "In the external circuit, electrons flow from anode to cathode; in the electrolyte, ions carry the current."]],
        ["Products", ["Molten lead(II) bromide: lead at the cathode, bromine at the anode.", "Concentrated aqueous sodium chloride: hydrogen at the cathode, chlorine at the anode (sodium hydroxide is left).", "Dilute sulfuric acid: hydrogen at the cathode, oxygen at the anode.", "Aqueous copper(II) sulfate with graphite electrodes: copper at the cathode, oxygen at the anode (blue colour fades).", "Rules for solutions: at the cathode, hydrogen forms unless the metal is less reactive than hydrogen (such as copper). At the anode, a halogen forms from a concentrated halide; otherwise oxygen."]],
        ["[E] Half equations", ["[E] Cathode (reduction, gain of electrons): Pb²⁺ + 2e⁻ → Pb; 2H⁺ + 2e⁻ → H₂; Cu²⁺ + 2e⁻ → Cu.", "[E] Anode (oxidation, loss of electrons): 2Br⁻ → Br₂ + 2e⁻; 2Cl⁻ → Cl₂ + 2e⁻; 4OH⁻ → O₂ + 2H₂O + 4e⁻.", "[E] Electrolysis is a redox process."]],
        ["Copper and electroplating", ["Purifying copper: impure copper anode, pure copper cathode, copper(II) sulfate electrolyte. The anode dissolves, copper deposits on the cathode, impurities fall as sludge. The electrolyte stays blue.", "Electroplating: the object to be plated is the cathode, the plating metal is the anode, and the electrolyte contains ions of the plating metal. Used to stop corrosion and improve appearance (such as silver or chromium plating)."]],
      ], ["Cathode negative, gets metals or hydrogen. Anode positive, gets non metals.", "Concentrated NaCl(aq): H₂ and Cl₂. Dilute acid: H₂ and O₂.", "[E] Cathode: reduction. Anode: oxidation."], [
        ["What forms at the cathode when molten lead(II) bromide is electrolysed?", ["Bromine", "Lead", "Hydrogen", "Oxygen"], "B", "Positive Pb²⁺ ions gain electrons at the cathode."],
        ["Electrolysis of concentrated sodium chloride solution produces what at the anode?", ["Sodium", "Hydrogen", "Chlorine", "Oxygen"], "C", "Concentrated chloride gives chlorine."],
        ["Why does molten sodium chloride conduct?", ["It has free electrons", "Its ions can move", "It is a metal", "It contains water"], "B", "Ions are free when molten."],
        ["In electroplating, the object to be plated is the:", ["Anode", "Cathode", "Electrolyte", "Power supply"], "B", "Metal ions deposit on the cathode."],
        ["Which is the half equation at the anode for bromide ions?", ["Br₂ + 2e⁻ → 2Br⁻", "2Br⁻ → Br₂ + 2e⁻", "Br⁻ + e⁻ → Br", "Pb²⁺ + 2e⁻ → Pb"], "B", "Bromide ions lose electrons: oxidation."],
        ["What forms at the cathode in aqueous copper(II) sulfate?", ["Hydrogen", "Copper", "Oxygen", "Sulfur"], "B", "Copper is less reactive than hydrogen, so copper forms."],
      ]),
      N("Fuel cells", 5, "The hydrogen-oxygen fuel cell and how it compares with petrol engines.", [
        ["Hydrogen-oxygen fuel cell", ["A fuel cell uses hydrogen and oxygen to produce electricity, with water as the only product.", "Overall reaction: 2H₂ + O₂ → 2H₂O.", "It is used to power some vehicles."]],
        ["Fuel cells vs petrol engines", ["Advantages: only water is produced (no CO₂ at the point of use), more efficient, quieter, fewer moving parts.", "Disadvantages: hydrogen is a flammable gas that is hard to store and transport; making hydrogen often uses fossil fuels or electricity; few refuelling stations; fuel cells are expensive."]],
      ], ["Fuel cell: 2H₂ + O₂ → 2H₂O, making electricity.", "Only product: water.", "Hydrogen is hard to store and often made using fossil fuels."], [
        ["What is the only product of a hydrogen-oxygen fuel cell?", ["Carbon dioxide", "Water", "Hydrogen peroxide", "Methane"], "B", "2H₂ + O₂ → 2H₂O."],
        ["What does a fuel cell produce that powers a car?", ["Heat", "Electricity", "Petrol", "Steam"], "B", "It generates electricity directly."],
        ["What is a disadvantage of hydrogen fuel cells?", ["They release CO₂", "Hydrogen is hard to store safely", "They are noisy", "They make lots of pollution"], "B", "It is a flammable gas needing high pressure tanks."],
        ["What is an advantage of fuel cells over petrol engines?", ["They burn fossil fuels", "No carbon dioxide at the point of use", "They use more fuel", "They are cheaper to make"], "B", "Only water comes out."],
        ["Which gases react in the fuel cell?", ["Hydrogen and nitrogen", "Hydrogen and oxygen", "Oxygen and carbon dioxide", "Methane and oxygen"], "B", "Hydrogen and oxygen."],
      ]),
    ] },
    { id: "energetics", name: "Chemical energetics", subs: [
      N("Exothermic and endothermic reactions", 10, "Energy changes, reaction pathway diagrams, activation energy and bond energy calculations.", [
        ["Exothermic and endothermic", ["Exothermic: transfers thermal energy to the surroundings, so the temperature rises. ΔH is negative. Examples: combustion, neutralisation, respiration, most oxidation.", "Endothermic: takes in thermal energy from the surroundings, so the temperature falls. ΔH is positive. Examples: thermal decomposition, photosynthesis, dissolving ammonium nitrate.", "ΔH (enthalpy change) is the energy transferred, in kJ/mol."]],
        ["Reaction pathway diagrams", ["Exothermic: products are lower than reactants. Endothermic: products are higher.", "Activation energy (Ea): the minimum energy that colliding particles need to react. Shown as the hump from the reactants to the peak.", "A catalyst lowers the activation energy."]],
        ["[E] Bond energies", ["[E] Breaking bonds is endothermic (needs energy); making bonds is exothermic (releases energy).", "[E] ΔH = energy needed to break bonds - energy released making bonds.", "[E] If more energy is released making bonds than is used breaking them, the reaction is exothermic.", "[E] Example: H₂ + Cl₂ → 2HCl. Break H-H (436) + Cl-Cl (242) = 678 kJ. Make 2 x H-Cl (431) = 862 kJ. ΔH = 678 - 862 = -184 kJ/mol."]],
      ], ["Exothermic: temperature rises, ΔH negative.", "Activation energy: the minimum energy to react.", "[E] ΔH = bonds broken - bonds made."], [
        ["In an exothermic reaction, the temperature of the surroundings:", ["Falls", "Rises", "Stays the same", "Drops to zero"], "B", "Energy is released to the surroundings."],
        ["Which is endothermic?", ["Combustion", "Neutralisation", "Thermal decomposition", "Respiration"], "C", "Heat must be taken in to break up the compound."],
        ["What is activation energy?", ["Energy given out", "The minimum energy colliding particles need to react", "The energy of the products", "The total energy"], "B", "It is the hump on the profile."],
        ["Bonds broken need 1000 kJ; bonds made release 1200 kJ. What is ΔH?", ["+200 kJ/mol", "-200 kJ/mol", "+2200 kJ/mol", "-2200 kJ/mol"], "B", "1000 - 1200 = -200: exothermic."],
        ["Is bond breaking exothermic or endothermic?", ["Exothermic", "Endothermic", "Neither", "Both"], "B", "Energy is needed to break bonds."],
        ["On an energy profile, an endothermic reaction has products that are:", ["Lower than the reactants", "Higher than the reactants", "Level with the reactants", "Not shown"], "B", "Energy is taken in."],
      ]),
    ] },
    { id: "reactions", name: "Chemical reactions", subs: [
      N("Rates of reaction", 11, "Physical and chemical changes, what affects the rate, collision theory and measuring rates.", [
        ["Physical and chemical changes", ["Physical change: no new substance, usually easy to reverse (melting, dissolving).", "Chemical change: a new substance forms; often a colour change, gas, temperature change or precipitate."]],
        ["Factors affecting rate", ["Higher concentration of a solution, or higher pressure of a gas: faster.", "Larger surface area (smaller pieces, powder): faster.", "Higher temperature: faster.", "A catalyst: speeds up a reaction without being used up, by providing a pathway with a lower activation energy. Enzymes are biological catalysts."]],
        ["Collision theory", ["Particles must collide to react. More frequent collisions mean a faster rate.", "Concentration, pressure and surface area increase the collision frequency.", "[E] Temperature makes particles move faster: more frequent collisions, and a greater proportion of collisions have energy above the activation energy (more successful collisions).", "[E] A catalyst increases the proportion of successful collisions by lowering the activation energy."]],
        ["Measuring rate", ["Collect gas in a gas syringe or upturned measuring cylinder and record volume over time.", "Measure the loss of mass as gas escapes, on a balance.", "Time how long a cross under a flask takes to disappear when a precipitate forms (sodium thiosulfate and acid).", "On a graph of product against time, the steeper the curve, the faster the rate. The curve levels off when a reactant is used up.", "Dust explosions in flour mills and coal mines happen because of the huge surface area."]],
      ], ["Rate up: concentration, pressure, surface area, temperature, catalyst.", "Collision theory: more frequent, more energetic collisions.", "Steeper graph, faster rate."], [
        ["Why does powdered chalk react faster with acid than lumps?", ["It is hotter", "It has a larger surface area, so more frequent collisions", "It is more concentrated", "It has a catalyst"], "B", "More exposed particles to collide with."],
        ["How does a catalyst speed up a reaction?", ["It gives particles more energy", "It provides a pathway with a lower activation energy", "It increases the concentration", "It is used up"], "B", "More collisions are successful."],
        ["Why does raising the temperature increase the rate?", ["Particles get bigger", "Particles move faster, collide more often and more collisions exceed the activation energy", "It increases concentration", "It adds a catalyst"], "B", "Two effects: frequency and energy."],
        ["Which is a chemical change?", ["Ice melting", "Sugar dissolving", "Iron rusting", "Water boiling"], "C", "Rust is a new substance."],
        ["On a graph of gas volume against time, what does the curve levelling off mean?", ["The reaction is speeding up", "The reaction has stopped because a reactant is used up", "A catalyst was added", "The temperature rose"], "B", "No more gas is made."],
        ["How could you measure the rate of a reaction that gives off a gas?", ["Count bubbles only", "Collect the gas in a gas syringe and record volume over time", "Weigh the acid before", "Use litmus"], "B", "Volume against time gives the rate."],
      ]),
      N("Reversible reactions and equilibrium", 11, "Reversible reactions, dynamic equilibrium, Le Chatelier's principle, and the Haber and Contact processes.", [
        ["Reversible reactions", ["A reversible reaction can go both ways, shown by ⇌.", "Hydrated copper(II) sulfate (blue) ⇌ anhydrous copper(II) sulfate (white) + water, on heating; adding water reverses it.", "Hydrated cobalt(II) chloride (pink) ⇌ anhydrous cobalt(II) chloride (blue) + water."]],
        ["[E] Equilibrium", ["[E] In a closed system, a reversible reaction reaches dynamic equilibrium: the forward and reverse rates are equal and the concentrations stay constant.", "[E] Changing the conditions moves the position of equilibrium to oppose the change.", "[E] Higher temperature favours the endothermic direction. Higher pressure favours the side with fewer gas molecules. Adding a reactant favours the forward reaction.", "[E] A catalyst does not change the position of equilibrium, but equilibrium is reached faster."]],
        ["The Haber process", ["Makes ammonia: N₂(g) + 3H₂(g) ⇌ 2NH₃(g). The forward reaction is exothermic.", "Nitrogen comes from the air; hydrogen comes from methane (natural gas).", "Conditions: 450 °C, 20 000 kPa (200 atm), iron catalyst. Unreacted gases are recycled.", "[E] Low temperature would give a higher yield but too slow a rate, so 450 °C is a compromise. High pressure increases yield (fewer gas molecules on the right) and rate, but is expensive and dangerous."]],
        ["The Contact process", ["Makes sulfuric acid. Key step: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) (exothermic).", "Sulfur dioxide comes from burning sulfur or roasting sulfide ores; oxygen from the air.", "Conditions: 450 °C, 200 kPa (2 atm), vanadium(V) oxide catalyst.", "[E] Only a low pressure is used because the yield is already high. SO₃ is then dissolved to make sulfuric acid."]],
      ], ["⇌ means reversible; blue CuSO₄ turns white on heating.", "Haber: N₂ + 3H₂ ⇌ 2NH₃, 450 °C, 200 atm, iron.", "Contact: 2SO₂ + O₂ ⇌ 2SO₃, 450 °C, 2 atm, V₂O₅."], [
        ["What colour is anhydrous copper(II) sulfate?", ["Blue", "White", "Pink", "Green"], "B", "It turns blue when water is added."],
        ["What catalyst is used in the Haber process?", ["Vanadium(V) oxide", "Iron", "Nickel", "Platinum"], "B", "An iron catalyst is used."],
        ["What is dynamic equilibrium?", ["The reaction has stopped", "Forward and reverse rates are equal, so concentrations stay constant", "All reactants are used up", "Only the forward reaction happens"], "B", "Both reactions continue at the same rate."],
        ["In N₂ + 3H₂ ⇌ 2NH₃, increasing the pressure:", ["Moves equilibrium left", "Moves equilibrium right, more ammonia", "Has no effect", "Stops the reaction"], "B", "4 gas molecules on the left, 2 on the right."],
        ["What are the conditions of the Contact process?", ["450 °C, 200 atm, iron", "450 °C, 2 atm, vanadium(V) oxide", "300 °C, 60 atm, phosphoric acid", "30 °C, yeast"], "B", "Low pressure is enough."],
        ["Where does the hydrogen for the Haber process come from?", ["Air", "Methane (natural gas)", "Seawater", "Sulfur"], "B", "Hydrogen is made from methane."],
      ]),
      N("Redox", 8, "Oxidation and reduction, oxidation numbers, and oxidising and reducing agents.", [
        ["Oxidation and reduction", ["Oxidation: gain of oxygen. Reduction: loss of oxygen.", "[E] Oxidation is loss of electrons; reduction is gain of electrons (OIL RIG).", "[E] Oxidation is an increase in oxidation number; reduction is a decrease.", "Redox: oxidation and reduction happen together. In CuO + H₂ → Cu + H₂O, copper oxide is reduced and hydrogen is oxidised."]],
        ["Oxidation numbers", ["Roman numerals show the oxidation number of a metal in a compound: iron(II) is Fe²⁺, iron(III) is Fe³⁺, copper(II) is Cu²⁺.", "[E] Elements have oxidation number 0. In a compound the numbers add up to zero (or the charge of the ion). Oxygen is usually -2 and hydrogen +1."]],
        ["Oxidising and reducing agents", ["An oxidising agent oxidises another substance and is itself reduced. A reducing agent reduces another substance and is itself oxidised.", "Test for a reducing agent: acidified potassium manganate(VII) turns from purple to colourless.", "Test for an oxidising agent: aqueous potassium iodide turns from colourless to brown (iodine forms)."]],
      ], ["Oxidation: gain O, [E] lose electrons. Reduction: lose O, [E] gain electrons.", "Oxidising agent is reduced; reducing agent is oxidised.", "KMnO₄: purple to colourless with a reducing agent. KI: colourless to brown with an oxidising agent."], [
        ["In CuO + H₂ → Cu + H₂O, which is reduced?", ["H₂", "CuO", "Cu", "H₂O"], "B", "Copper oxide loses oxygen."],
        ["What does OIL RIG stand for?", ["Oxidation is loss, reduction is gain (of electrons)", "Oxygen is lost, reduction is gas", "Oxidation in liquids", "Only ions lose"], "A", "Electrons lost in oxidation, gained in reduction."],
        ["What is the charge on the iron ion in iron(III) chloride?", ["+1", "+2", "+3", "-3"], "C", "The Roman numeral gives the oxidation number."],
        ["Acidified potassium manganate(VII) turns from purple to colourless. What has been added?", ["An oxidising agent", "A reducing agent", "An acid", "Water"], "B", "Manganate(VII) is reduced by a reducing agent."],
        ["An oxidising agent is itself:", ["Oxidised", "Reduced", "Unchanged", "A catalyst"], "B", "It gains the electrons."],
      ]),
    ] },
    { id: "acids", name: "Acids, bases and salts", subs: [
      N("Acids, bases and indicators", 10, "Properties of acids and bases, pH, indicators, neutralisation, and strong and weak acids.", [
        ["Acids", ["Acids have pH below 7 and contain H⁺ ions in solution.", "Acid + metal → salt + hydrogen. Acid + base → salt + water. Acid + carbonate → salt + water + carbon dioxide.", "Common acids: hydrochloric (chlorides), sulfuric (sulfates), nitric (nitrates)."]],
        ["Bases and alkalis", ["Bases are oxides or hydroxides of metals. Alkalis are soluble bases; they contain OH⁻ ions in solution and have pH above 7.", "Bases react with acids (neutralisation). Alkalis react with ammonium salts to give ammonia gas.", "Neutralisation: H⁺(aq) + OH⁻(aq) → H₂O(l)."]],
        ["Indicators and pH", ["pH scale 0 to 14: 7 is neutral, below 7 acidic, above 7 alkaline. Universal indicator shows colours red (strong acid) through green (neutral) to purple (strong alkali).", "Litmus: red in acid, blue in alkali.", "Methyl orange: red in acid, yellow in alkali.", "Thymolphthalein: colourless in acid, blue in alkali."]],
        ["[E] Strong and weak acids", ["[E] Acids are proton (H⁺) donors; bases are proton acceptors.", "[E] Strong acids (hydrochloric, sulfuric, nitric) fully dissociate in water: HCl → H⁺ + Cl⁻.", "[E] Weak acids (ethanoic acid) only partly dissociate: CH₃COOH ⇌ CH₃COO⁻ + H⁺. At the same concentration they have a higher pH and react more slowly."]],
      ], ["Acid + metal: salt + hydrogen. + base: salt + water. + carbonate: salt + water + CO₂.", "Methyl orange red/yellow; thymolphthalein colourless/blue.", "[E] Strong acids fully dissociate; weak acids partly."], [
        ["What gas forms when an acid reacts with a carbonate?", ["Hydrogen", "Oxygen", "Carbon dioxide", "Chlorine"], "C", "Acid + carbonate → salt + water + CO₂."],
        ["What colour is methyl orange in an alkali?", ["Red", "Yellow", "Blue", "Colourless"], "B", "Red in acid, yellow in alkali."],
        ["What ions do alkalis contain?", ["H⁺", "OH⁻", "Cl⁻", "Na⁺ only"], "B", "Hydroxide ions."],
        ["Which salt forms from sulfuric acid and zinc?", ["Zinc chloride", "Zinc sulfate", "Zinc nitrate", "Zinc oxide"], "B", "Sulfuric acid makes sulfates."],
        ["Why does ethanoic acid have a higher pH than hydrochloric acid of the same concentration?", ["It is stronger", "It only partly dissociates, giving fewer H⁺ ions", "It has more H⁺", "It is an alkali"], "B", "Weak acids release fewer H⁺ ions."],
        ["What colour is thymolphthalein in an acid?", ["Blue", "Red", "Colourless", "Yellow"], "C", "It turns blue in alkali."],
      ]),
      N("Oxides", 6, "Acidic, basic, amphoteric and neutral oxides.", [
        ["Types of oxide", ["Metal oxides are basic: they react with acids to make a salt and water (such as CuO, CaO).", "Non metal oxides are acidic: they react with bases, and many dissolve in water to make acids (such as SO₂, CO₂).", "[E] Amphoteric oxides react with both acids and bases: aluminium oxide and zinc oxide.", "[E] Neutral oxides react with neither: carbon monoxide, nitrogen monoxide (NO), water."]],
      ], ["Metal oxides: basic. Non metal oxides: acidic.", "[E] Amphoteric: Al₂O₃ and ZnO.", "[E] Neutral: CO, NO."], [
        ["What type of oxide is sulfur dioxide?", ["Basic", "Acidic", "Amphoteric", "Neutral"], "B", "Non metal oxides are acidic."],
        ["What type of oxide is calcium oxide?", ["Basic", "Acidic", "Neutral", "Amphoteric"], "A", "Metal oxides are basic."],
        ["Which oxide is amphoteric?", ["Sodium oxide", "Zinc oxide", "Carbon dioxide", "Sulfur dioxide"], "B", "It reacts with acids and bases."],
        ["Which oxide is neutral?", ["Carbon monoxide", "Carbon dioxide", "Magnesium oxide", "Sulfur trioxide"], "A", "CO reacts with neither."],
        ["What does copper(II) oxide react with?", ["Bases", "Acids", "Water only", "Nothing"], "B", "It is a basic oxide."],
      ]),
      N("Making salts and solubility", 10, "Preparing soluble and insoluble salts, solubility rules and water of crystallisation.", [
        ["Solubility rules", ["All sodium, potassium and ammonium salts are soluble.", "All nitrates are soluble.", "Chlorides are soluble except silver chloride and lead(II) chloride.", "Sulfates are soluble except barium, calcium and lead(II) sulfates.", "Carbonates are insoluble except sodium, potassium and ammonium carbonates.", "Hydroxides are insoluble except sodium, potassium, ammonium (and calcium hydroxide is slightly soluble)."]],
        ["Soluble salts", ["Method 1 (acid + insoluble base, metal or carbonate): add excess solid to warm acid until no more reacts, filter off the excess, heat the filtrate to the crystallisation point, leave to cool and crystallise, filter and dry the crystals. Example: copper(II) oxide + sulfuric acid → copper(II) sulfate.", "Method 2 (acid + alkali, for sodium, potassium and ammonium salts): titration. Find the volumes with an indicator, then repeat without it and crystallise."]],
        ["Insoluble salts", ["Precipitation: mix two solutions that each contain one of the ions; the insoluble salt forms as a precipitate.", "Filter, wash with distilled water and dry.", "Example: barium chloride + sodium sulfate → barium sulfate (precipitate) + sodium chloride."]],
        ["Water of crystallisation", ["Hydrated salts contain water of crystallisation, such as CuSO₄.5H₂O (blue). Anhydrous salts have none (CuSO₄, white).", "[E] Calculate the water of crystallisation by heating to constant mass: moles of water ÷ moles of anhydrous salt."]],
      ], ["Soluble salt: excess base, filter, crystallise. Or titrate an alkali.", "Insoluble salt: precipitation, filter, wash, dry.", "All Na, K, NH₄ salts and all nitrates dissolve."], [
        ["Which salt is insoluble?", ["Sodium chloride", "Silver chloride", "Potassium nitrate", "Copper(II) sulfate"], "B", "Silver chloride is an exception."],
        ["How should you make copper(II) sulfate crystals?", ["Precipitation", "Add excess copper(II) oxide to sulfuric acid, filter, crystallise", "Titration with an indicator", "Electrolysis"], "B", "Excess insoluble base, then filter."],
        ["How should you make barium sulfate?", ["Excess base and filter", "Mix barium chloride and sodium sulfate solutions, filter the precipitate", "Titration", "Heating barium"], "B", "It is insoluble, so precipitate it."],
        ["Which method is used to make sodium chloride from an acid and an alkali?", ["Precipitation", "Titration", "Filtration only", "Distillation"], "B", "Both are solutions, so use exact amounts."],
        ["Which carbonate is soluble?", ["Calcium carbonate", "Copper(II) carbonate", "Sodium carbonate", "Zinc carbonate"], "C", "Sodium, potassium and ammonium carbonates are soluble."],
        ["Why is excess solid added in method 1?", ["To speed it up", "To make sure all the acid reacts", "To make more acid", "To act as a catalyst"], "B", "Then no acid is left in the salt."],
      ]),
    ] },
    { id: "periodic", name: "The Periodic Table", subs: [
      N("The table and Group I", 9, "How the table is arranged, trends across periods, and the alkali metals.", [
        ["Arrangement", ["Elements are arranged in order of increasing proton number.", "Groups are columns: elements in a group have the same number of outer electrons and similar properties. Periods are rows.", "Metals are on the left and in the middle; non metals on the right. Across a period, elements change from metallic to non metallic.", "Elements in the same group form ions of the same charge."]],
        ["Group I: the alkali metals", ["Lithium, sodium, potassium: soft, low density, low melting points, shiny when cut but tarnish quickly in air. Stored under oil.", "React with water to form a metal hydroxide (alkaline) and hydrogen: 2Na + 2H₂O → 2NaOH + H₂.", "Reactivity increases down the group: lithium fizzes; sodium melts and whizzes about; potassium bursts into a lilac flame.", "Down the group: melting point decreases, density generally increases.", "[E] Predict rubidium and caesium: even more reactive, lower melting points."]],
        ["[E] Why reactivity increases", ["[E] Group I atoms all have one outer electron, which they lose to form a +1 ion.", "[E] Further down, the outer electron is further from the nucleus and more shielded, so it is lost more easily."]],
      ], ["Group: same outer electrons. Period: same number of shells.", "Alkali metal + water → hydroxide + hydrogen.", "Group I gets more reactive down the group."], [
        ["What is formed when sodium reacts with water?", ["Sodium oxide and hydrogen", "Sodium hydroxide and hydrogen", "Sodium hydroxide and oxygen", "Sodium chloride"], "B", "2Na + 2H₂O → 2NaOH + H₂."],
        ["Which alkali metal is most reactive?", ["Lithium", "Sodium", "Potassium", "They are equal"], "C", "Reactivity rises down Group I."],
        ["Why are alkali metals stored under oil?", ["To keep them warm", "To stop them reacting with air and water", "To make them shiny", "To stop them melting"], "B", "They react quickly with oxygen and water."],
        ["Elements in the same group have the same:", ["Number of shells", "Number of outer electrons", "Mass", "Number of neutrons"], "B", "This gives similar chemistry."],
        ["What happens to the melting point down Group I?", ["It increases", "It decreases", "It stays the same", "It doubles"], "B", "Lithium melts highest."],
      ]),
      N("Group VII, transition elements and noble gases", 9, "Halogens and displacement, transition metal properties, and the unreactive noble gases.", [
        ["Group VII: the halogens", ["Exist as diatomic molecules: Cl₂, Br₂, I₂.", "Chlorine: pale yellow-green gas. Bromine: red-brown liquid. Iodine: grey-black solid (purple vapour).", "Down the group: colour gets darker, density and melting point increase, reactivity decreases.", "Displacement: a more reactive halogen displaces a less reactive halide from solution. Cl₂ + 2KBr → 2KCl + Br₂ (solution turns orange). Iodine cannot displace chloride or bromide.", "[E] Ionic equation: Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂."]],
        ["Transition elements", ["High densities and high melting points.", "Form coloured compounds (copper(II) compounds blue, iron(II) green, iron(III) orange-brown).", "Elements and their compounds often act as catalysts (iron in the Haber process, vanadium(V) oxide in the Contact process).", "[E] Have ions with variable oxidation numbers, such as iron(II) and iron(III)."]],
        ["Noble gases (Group VIII)", ["Unreactive (inert) because they have full outer shells of electrons; they exist as single atoms (monatomic).", "Helium: balloons and airships (low density, not flammable). Argon: filling lamps (stops the filament burning). Neon: advertising signs."]],
      ], ["Halogens: Cl₂ green gas, Br₂ brown liquid, I₂ grey solid. Less reactive down.", "More reactive halogen displaces a less reactive one.", "Transition metals: dense, coloured compounds, catalysts. Noble gases: full shells, unreactive."], [
        ["What forms when chlorine is bubbled into potassium bromide solution?", ["No reaction", "Potassium chloride and bromine", "Potassium chlorine", "Bromine chloride"], "B", "Chlorine is more reactive and displaces bromine."],
        ["What colour and state is bromine at room temperature?", ["Yellow-green gas", "Red-brown liquid", "Grey-black solid", "Colourless gas"], "B", "Bromine is a red-brown liquid."],
        ["Why are noble gases unreactive?", ["They are metals", "They have full outer shells", "They are heavy", "They are liquids"], "B", "No need to gain or lose electrons."],
        ["Which is a property of transition metals?", ["Low density", "Coloured compounds", "Very soft", "Low melting points"], "B", "Copper compounds are blue, for example."],
        ["Why is argon used in light bulbs?", ["It glows red", "It is unreactive, so the filament does not burn", "It is cheap", "It is lighter than air"], "B", "No oxygen, no burning."],
        ["How does reactivity change down Group VII?", ["Increases", "Decreases", "Stays the same", "Increases then decreases"], "B", "Fluorine is the most reactive halogen."],
      ]),
    ] },
    { id: "metals", name: "Metals", subs: [
      N("Properties, uses and alloys", 8, "Physical and chemical properties of metals, uses linked to properties, and alloys.", [
        ["Properties", ["Physical: good conductors of heat and electricity, malleable, ductile, high melting and boiling points, shiny, usually dense.", "Chemical: react with dilute acids (salt + hydrogen), with oxygen (metal oxide), and some with water or steam."]],
        ["Uses", ["Aluminium: aircraft (low density, strong) and food containers (resists corrosion), overhead power cables (low density, conducts).", "Copper: electrical wiring (good conductor, ductile), water pipes (does not react with water).", "Iron and steel: building and car bodies (strong, cheap)."]],
        ["Alloys", ["An alloy is a mixture of a metal with other elements, often other metals or carbon.", "Brass: copper and zinc (hard, does not corrode, used for instruments and fittings).", "Stainless steel: iron with chromium, nickel and carbon (hard, rust resistant: cutlery, surgical tools).", "Alloys are harder and stronger than the pure metals and are more useful.", "[E] The different sized atoms disrupt the regular layers, so they cannot slide over each other as easily."]],
      ], ["Metals: conduct, malleable, ductile, shiny.", "Aluminium: low density, resists corrosion. Copper: wiring.", "Alloys are harder; [E] different sized atoms stop layers sliding."], [
        ["Why is copper used for electrical wiring?", ["It is cheap and magnetic", "It conducts well and is ductile", "It is very hard", "It has a low density"], "B", "It can be drawn into wires and conducts."],
        ["Why is aluminium used for aircraft?", ["It is very dense", "It is strong with a low density", "It rusts easily", "It is magnetic"], "B", "Light and strong."],
        ["What is brass made of?", ["Iron and carbon", "Copper and zinc", "Copper and tin", "Aluminium and copper"], "B", "Copper and zinc."],
        ["Why are alloys harder than pure metals?", ["They have no metal in them", "Different sized atoms stop the layers sliding", "They are heated more", "They are ionic"], "B", "The layers are disrupted."],
        ["What does a metal and dilute acid produce?", ["Salt and water", "Salt and hydrogen", "Oxide and hydrogen", "Salt and carbon dioxide"], "B", "Metal + acid → salt + hydrogen."],
      ]),
      N("Reactivity and corrosion", 9, "The reactivity series, displacement reactions, rusting and how to prevent it.", [
        ["The reactivity series", ["Most to least reactive: potassium, sodium, calcium, magnesium, aluminium, (carbon), zinc, iron, (hydrogen), copper, silver, gold.", "Potassium, sodium and calcium react with cold water (hydroxide + hydrogen). Magnesium reacts slowly with cold water but quickly with steam (oxide + hydrogen). Zinc and iron react with steam. Copper does not react with water or dilute acids.", "[E] Reactivity is the tendency of a metal to form positive ions."]],
        ["Displacement", ["A more reactive metal displaces a less reactive one from its compounds. Zn + CuSO₄ → ZnSO₄ + Cu (blue colour fades, pink copper forms).", "Thermite: aluminium displaces iron from iron(III) oxide.", "[E] Aluminium seems unreactive because of a thin, protective layer of aluminium oxide."]],
        ["Rusting", ["Rust is hydrated iron(III) oxide. Iron and steel rust only when both water and oxygen are present.", "Barrier methods: paint, grease, oil, plastic coating. These stop water and oxygen reaching the iron.", "Galvanising: coating with zinc.", "[E] Sacrificial protection: a more reactive metal (zinc or magnesium) corrodes instead of the iron, because it loses electrons more easily. This works even if the coating is scratched."]],
      ], ["K, Na, Ca, Mg, Al, (C), Zn, Fe, (H), Cu, Ag, Au.", "More reactive metal displaces a less reactive one.", "Rust needs water and oxygen. [E] Zinc corrodes instead of iron."], [
        ["Which metal will displace copper from copper(II) sulfate?", ["Silver", "Gold", "Zinc", "Platinum"], "C", "Zinc is above copper."],
        ["What two things does iron need to rust?", ["Water and carbon dioxide", "Water and oxygen", "Oxygen and nitrogen", "Salt only"], "B", "Both water and oxygen."],
        ["Why does galvanising protect iron even when scratched?", ["Zinc is a barrier only", "Zinc is more reactive, so it corrodes instead of the iron", "Zinc is less reactive", "It stops all oxygen"], "B", "Sacrificial protection."],
        ["Which metal reacts with steam but not cold water?", ["Potassium", "Sodium", "Zinc", "Gold"], "C", "Zinc needs steam."],
        ["Why does aluminium seem unreactive?", ["It is below copper", "A protective oxide layer covers it", "It is a noble metal", "It is an alloy"], "B", "The oxide layer stops further reaction."],
      ]),
      N("Extracting metals", 9, "Extraction by reduction with carbon, the blast furnace for iron, and electrolysis for aluminium.", [
        ["How metals are extracted", ["The method depends on reactivity. Metals below carbon (zinc, iron, copper) are extracted by heating the oxide with carbon (reduction).", "Metals above carbon (aluminium and more reactive) must be extracted by electrolysis, which is more expensive.", "Gold and silver are found as the element."]],
        ["The blast furnace (iron)", ["Raw materials: hematite (iron ore, Fe₂O₃), coke (carbon), limestone (CaCO₃) and hot air.", "Coke burns: C + O₂ → CO₂ (exothermic, heats the furnace).", "Carbon dioxide is reduced: CO₂ + C → 2CO.", "Carbon monoxide reduces the ore: Fe₂O₃ + 3CO → 2Fe + 3CO₂. Molten iron runs to the bottom.", "Limestone decomposes: CaCO₃ → CaO + CO₂. Calcium oxide removes the acidic impurity: CaO + SiO₂ → CaSiO₃ (slag), which floats on the iron."]],
        ["Aluminium", ["Ore: bauxite, which is purified to aluminium oxide (Al₂O₃).", "Aluminium oxide is dissolved in molten cryolite to lower the melting point and save energy.", "Electrolysis with carbon electrodes: aluminium at the cathode, oxygen at the anode.", "The oxygen reacts with the carbon anodes to make CO₂, so the anodes burn away and must be replaced.", "[E] Cathode: Al³⁺ + 3e⁻ → Al. Anode: 2O²⁻ → O₂ + 4e⁻."]],
      ], ["Below carbon: reduce with carbon. Above: electrolysis.", "Blast furnace: Fe₂O₃ + 3CO → 2Fe + 3CO₂; slag is CaSiO₃.", "Aluminium: Al₂O₃ in molten cryolite, anodes burn away."], [
        ["Why can't aluminium be extracted using carbon?", ["Aluminium is less reactive than carbon", "Aluminium is more reactive than carbon", "Carbon is too expensive", "Aluminium is found pure"], "B", "Carbon cannot reduce it."],
        ["What reduces iron(III) oxide in the blast furnace?", ["Oxygen", "Carbon monoxide", "Limestone", "Slag"], "B", "Fe₂O₃ + 3CO → 2Fe + 3CO₂."],
        ["What is the job of limestone in the blast furnace?", ["To reduce the ore", "To remove impurities as slag", "To heat the furnace", "To make iron"], "B", "CaO + SiO₂ → CaSiO₃."],
        ["Why is aluminium oxide dissolved in cryolite?", ["To make it react", "To lower the melting point and save energy", "To act as a catalyst for iron", "To colour it"], "B", "Pure Al₂O₃ melts above 2000 °C."],
        ["Why do the anodes need replacing in aluminium extraction?", ["They dissolve in cryolite", "Oxygen reacts with the carbon to make CO₂", "They melt", "Aluminium coats them"], "B", "The carbon burns away."],
      ]),
    ] },
    { id: "environment", name: "Chemistry of the environment", subs: [
      N("Water", 7, "Tests for water, pure water, what is in natural water, and treating the water supply.", [
        ["Testing for water", ["Anhydrous copper(II) sulfate: white to blue.", "Anhydrous cobalt(II) chloride: blue to pink.", "Pure water: melts at 0 °C and boils at 100 °C. Distilled water is used in practical chemistry because it has no dissolved substances."]],
        ["What is in water", ["Natural water may contain dissolved oxygen (good for aquatic life), metal compounds, plastics, sewage, harmful microbes, and nitrates and phosphates from fertilisers and detergents.", "Nitrates and phosphates cause eutrophication: algae grow quickly, then die; bacteria decompose them using up the oxygen, so fish die.", "Some substances are beneficial (oxygen, some minerals); others are harmful (microbes, toxic metals)."]],
        ["Water treatment", ["Sedimentation and filtration remove solids.", "Carbon (activated charcoal) removes tastes and odours.", "Chlorination kills harmful microbes."]],
      ], ["Water turns white CuSO₄ blue and blue CoCl₂ pink.", "Pure water: melts 0 °C, boils 100 °C.", "Treatment: sedimentation, filtration, carbon, chlorine."], [
        ["Which test shows water is present?", ["Limewater goes milky", "White anhydrous copper(II) sulfate turns blue", "A glowing splint relights", "Litmus turns red"], "B", "Water hydrates the copper sulfate."],
        ["How do you show water is pure?", ["It is colourless", "It boils at exactly 100 °C and melts at 0 °C", "It tastes clean", "It turns cobalt chloride pink"], "B", "Pure substances have fixed melting and boiling points."],
        ["Why is chlorine added to drinking water?", ["To improve the taste", "To kill harmful microbes", "To remove solids", "To add minerals"], "B", "Chlorination disinfects."],
        ["What causes eutrophication?", ["Oxygen in the water", "Nitrates and phosphates from fertilisers", "Chlorine", "Carbon filters"], "B", "They make algae grow too much."],
        ["What does carbon do in water treatment?", ["Kills bacteria", "Removes tastes and odours", "Removes large solids", "Adds fluoride"], "B", "Activated carbon adsorbs them."],
      ]),
      N("Fertilisers", 5, "Why plants need NPK fertilisers and what they contain.", [
        ["Fertilisers", ["Plants need nitrogen (N), phosphorus (P) and potassium (K) for growth: NPK fertilisers.", "Ammonium salts and nitrates are used as fertilisers to supply nitrogen.", "Ammonium nitrate is made from ammonia (Haber process) and nitric acid. Ammonium sulfate from ammonia and sulfuric acid.", "Too much fertiliser can run off into rivers and cause eutrophication."]],
      ], ["NPK: nitrogen, phosphorus, potassium.", "Ammonium salts and nitrates provide nitrogen.", "Run off causes eutrophication."], [
        ["What do the letters NPK stand for?", ["Neon, phosphorus, krypton", "Nitrogen, phosphorus, potassium", "Nickel, platinum, potassium", "Nitrogen, potassium, carbon"], "B", "The three main plant nutrients."],
        ["Which compound is a nitrogen fertiliser?", ["Sodium chloride", "Ammonium nitrate", "Calcium carbonate", "Copper sulfate"], "B", "It contains a lot of nitrogen."],
        ["Ammonium sulfate is made from ammonia and:", ["Nitric acid", "Sulfuric acid", "Hydrochloric acid", "Water"], "B", "Sulfuric acid makes sulfates."],
        ["What problem can fertiliser run off cause?", ["Acid rain", "Eutrophication", "Global dimming", "Ozone loss"], "B", "Algal blooms and oxygen loss."],
        ["Why do plants need nitrogen?", ["For photosynthesis only", "To make proteins for growth", "To make sugar", "To absorb water"], "B", "Nitrogen is needed for proteins."],
      ]),
      N("Air quality and climate", 9, "The composition of air, pollutants and their sources, the greenhouse effect and reducing pollution.", [
        ["Clean air", ["Clean, dry air: about 78% nitrogen, 21% oxygen, the rest mainly argon and carbon dioxide."]],
        ["Pollutants", ["Carbon dioxide: from burning carbon fuels. Causes higher levels of greenhouse gases, increasing global warming and climate change.", "Carbon monoxide: from incomplete combustion. Toxic gas: reduces the blood's ability to carry oxygen.", "Methane: from decomposition of vegetation and waste, and digestion in animals (cattle). A greenhouse gas.", "Oxides of nitrogen: from car engines (high temperature makes N₂ and O₂ react). Acid rain, photochemical smog, respiratory problems.", "Sulfur dioxide: from burning fossil fuels containing sulfur. Acid rain.", "Particulates: from incomplete combustion of carbon fuels. Increased risk of respiratory problems and cancer."]],
        ["Climate change", ["Greenhouse effect: the Sun's radiation warms the Earth; the Earth emits infrared; greenhouse gases (CO₂, methane) absorb and re-emit it, warming the atmosphere.", "Reduce it: plant trees, reduce livestock farming, decrease use of fossil fuels, increase use of hydrogen and renewable energy (wind, solar).", "Photosynthesis removes CO₂: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light and chlorophyll)."]],
        ["Reducing pollution", ["Acid rain: use low sulfur fuels; flue gas desulfurisation using calcium oxide removes SO₂ from power station gases.", "[E] Catalytic converters remove CO, NOx and unburned hydrocarbons: 2CO + 2NO → 2CO₂ + N₂."]],
      ], ["Air: 78% N₂, 21% O₂, rest Ar and CO₂.", "CO toxic; SO₂ and NOx acid rain; CO₂ and CH₄ greenhouse gases.", "[E] Catalytic converter: 2CO + 2NO → 2CO₂ + N₂."], [
        ["What percentage of clean air is nitrogen?", ["21%", "50%", "78%", "1%"], "C", "About 78% of clean air."],
        ["Which gas comes from incomplete combustion and is toxic?", ["Carbon dioxide", "Carbon monoxide", "Nitrogen", "Methane"], "B", "CO stops blood carrying oxygen."],
        ["Which two gases cause acid rain?", ["CO₂ and CH₄", "SO₂ and oxides of nitrogen", "O₂ and N₂", "CO and H₂"], "B", "They form acids in rain."],
        ["Where do oxides of nitrogen come from?", ["Burning sulfur", "Car engines, where nitrogen and oxygen react at high temperature", "Volcanoes only", "Photosynthesis"], "B", "High temperatures in engines."],
        ["What does a catalytic converter do?", ["Makes more CO", "Changes CO and NO into CO₂ and N₂", "Removes CO₂", "Adds sulfur"], "B", "2CO + 2NO → 2CO₂ + N₂."],
        ["Which is a greenhouse gas?", ["Nitrogen", "Oxygen", "Methane", "Argon"], "C", "Methane traps infrared radiation."],
      ]),
    ] },
    { id: "organic", name: "Organic chemistry", subs: [
      N("Formulae, naming and homologous series", 10, "Types of formula, functional groups, naming compounds and homologous series.", [
        ["Formulae", ["Molecular formula: the number of each atom, such as C₂H₆.", "Structural formula: shows how the atoms are arranged, such as CH₃CH₃. Displayed formula: shows every atom and every bond.", "[E] Structural isomers: same molecular formula, different structural formula, such as butane and methylpropane."]],
        ["Functional groups and naming", ["Functional group: the atom or group of atoms that gives the compound its characteristic reactions.", "Prefix gives the number of carbons: meth (1), eth (2), prop (3), but (4).", "Suffix gives the family: -ane (alkane), -ene (alkene, C=C), -ol (alcohol, -OH), -oic acid (carboxylic acid, -COOH).", "[E] Esters are named from the alcohol then the acid: ethanol + ethanoic acid gives ethyl ethanoate."]],
        ["Homologous series", ["A family of compounds with the same functional group and the same general formula.", "Each member differs from the next by CH₂. They have similar chemical properties and a trend in physical properties (boiling point rises with chain length).", "General formulae: alkanes CₙH₂ₙ₊₂, alkenes CₙH₂ₙ, alcohols CₙH₂ₙ₊₁OH, carboxylic acids CₙH₂ₙ₊₁COOH.", "Saturated: only single C-C bonds. Unsaturated: contains C=C double bonds."]],
      ], ["Meth 1, eth 2, prop 3, but 4.", "-ane, -ene, -ol, -oic acid.", "Homologous series: same functional group, differ by CH₂."], [
        ["What is the formula of propane?", ["C₂H₆", "C₃H₈", "C₃H₆", "C₄H₁₀"], "B", "CₙH₂ₙ₊₂ with n = 3."],
        ["What is the functional group of an alcohol?", ["C=C", "-OH", "-COOH", "-COO-"], "B", "Alcohols have the hydroxyl group."],
        ["What is the general formula of alkenes?", ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₊₁OH", "CₙH₂ₙ₋₂"], "B", "One C=C double bond."],
        ["Members of a homologous series differ by:", ["CH", "CH₂", "CH₃", "C₂H₄"], "B", "Each adds CH₂."],
        ["What does 'unsaturated' mean?", ["Only single bonds", "Contains a C=C double bond", "Dissolves in water", "Contains oxygen"], "B", "It can add more atoms across the double bond."],
        ["What is the ester made from ethanol and ethanoic acid?", ["Ethanoic ethanol", "Ethyl ethanoate", "Methyl ethanoate", "Ethyl methanoate"], "B", "Alcohol part first: ethyl; acid part: ethanoate."],
      ]),
      N("Fuels and alkanes", 9, "Fossil fuels, fractional distillation of petroleum, and the reactions of alkanes.", [
        ["Fuels", ["Fossil fuels: coal, natural gas (mainly methane) and petroleum (crude oil).", "Petroleum is a mixture of hydrocarbons (compounds of hydrogen and carbon only)."]],
        ["Fractional distillation", ["Petroleum is heated and vaporised; it enters a fractionating column that is hot at the bottom and cooler at the top.", "Fractions condense at different heights according to boiling point. Small molecules: low boiling point, rise to the top, more volatile, less viscous.", "Fractions and uses: refinery gas (heating and cooking), gasoline or petrol (fuel for cars), naphtha (chemical feedstock), kerosene or paraffin (jet fuel), diesel oil or gas oil (fuel for diesel engines), fuel oil (ships and home heating), lubricating oil (lubricants, waxes and polishes), bitumen (making roads)."]],
        ["Alkanes", ["Saturated hydrocarbons, general formula CₙH₂ₙ₊₂. Generally unreactive apart from combustion.", "Complete combustion: alkane + oxygen → carbon dioxide + water. CH₄ + 2O₂ → CO₂ + 2H₂O.", "Incomplete combustion (little oxygen): carbon monoxide and soot (carbon).", "Substitution with chlorine in ultraviolet light (a photochemical reaction): CH₄ + Cl₂ → CH₃Cl + HCl."]],
      ], ["Fractional distillation separates by boiling point.", "Refinery gas at the top, bitumen at the bottom.", "Alkanes: combustion and substitution with Cl₂ in UV light."], [
        ["Which fraction is used to make roads?", ["Kerosene", "Naphtha", "Bitumen", "Refinery gas"], "C", "Bitumen is the heaviest fraction."],
        ["Which fraction is used as jet fuel?", ["Kerosene", "Bitumen", "Fuel oil", "Gasoline"], "A", "Kerosene (paraffin)."],
        ["Why do small molecules collect at the top of the column?", ["They have high boiling points", "They have low boiling points so stay as gases longer", "They are heavier", "They are more viscous"], "B", "The column is coolest at the top."],
        ["What are the products of complete combustion of methane?", ["Carbon and water", "Carbon monoxide and water", "Carbon dioxide and water", "Hydrogen and carbon dioxide"], "C", "CH₄ + 2O₂ → CO₂ + 2H₂O."],
        ["What condition is needed for methane to react with chlorine?", ["A nickel catalyst", "Ultraviolet light", "Yeast", "High pressure"], "B", "It is a photochemical substitution."],
        ["Which fraction is a chemical feedstock?", ["Naphtha", "Bitumen", "Diesel", "Lubricating oil"], "A", "Naphtha is used to make chemicals."],
      ]),
      N("Alkenes and cracking", 8, "Cracking large alkanes, the test for alkenes and addition reactions.", [
        ["Cracking", ["Cracking breaks large, less useful alkanes into smaller alkanes and alkenes (and sometimes hydrogen), using high temperature and a catalyst.", "Example: C₁₀H₂₂ → C₈H₁₈ + C₂H₄.", "It is done because there is more demand for smaller molecules such as petrol, and alkenes are needed to make polymers."]],
        ["Testing for alkenes", ["Bromine water (aqueous bromine) is orange; it turns colourless with an alkene, but stays orange with an alkane."]],
        ["Addition reactions", ["Alkenes are unsaturated: atoms add across the C=C bond.", "With bromine: C₂H₄ + Br₂ → C₂H₄Br₂ (decolourises bromine).", "With hydrogen (nickel catalyst, about 150 °C): ethene → ethane. Used to harden vegetable oils.", "With steam (phosphoric acid catalyst, about 300 °C and 6000 kPa): ethene → ethanol.", "Alkenes join to make addition polymers."]],
      ], ["Cracking: big alkane → smaller alkane + alkene.", "Alkene test: bromine water orange to colourless.", "Addition: Br₂, H₂ (Ni), steam (acid catalyst)."], [
        ["What is the test for an alkene?", ["Limewater turns milky", "Bromine water turns from orange to colourless", "A lighted splint pops", "Litmus turns blue"], "B", "Bromine adds across the double bond."],
        ["What are the products of cracking?", ["Only alkanes", "Smaller alkanes and alkenes", "Carbon dioxide and water", "Alcohols"], "B", "Large molecules break into smaller ones."],
        ["Why is cracking done?", ["To make bigger molecules", "There is more demand for smaller molecules and alkenes", "To remove sulfur", "To make bitumen"], "B", "Petrol and polymers are in demand."],
        ["What catalyst is used to add hydrogen to an alkene?", ["Iron", "Nickel", "Yeast", "Vanadium(V) oxide"], "B", "A nickel catalyst is used."],
        ["What forms when ethene reacts with steam?", ["Ethane", "Ethanol", "Ethanoic acid", "Poly(ethene)"], "B", "Hydration gives ethanol."],
      ]),
      N("Alcohols and carboxylic acids", 9, "Making ethanol, uses of alcohols, carboxylic acids and esters.", [
        ["Making ethanol", ["Fermentation: sugar (glucose) + yeast, 25 to 35 °C, no oxygen: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Uses renewable crops and simple equipment, but is slow, batch, and gives impure ethanol.", "Hydration of ethene: ethene + steam with a phosphoric acid catalyst. Fast, continuous and gives pure ethanol, but uses non renewable crude oil and high energy.", "Uses of ethanol: solvent and fuel. Combustion: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O."]],
        ["Carboxylic acids", ["Ethanoic acid (CH₃COOH) is a weak acid: reacts with metals, bases and carbonates to form salts (ethanoates).", "[E] Made by oxidising ethanol with acidified potassium manganate(VII), or by bacterial oxidation (vinegar)."]],
        ["[E] Esters", ["[E] Carboxylic acid + alcohol ⇌ ester + water, with a concentrated sulfuric acid catalyst.", "[E] Example: ethanoic acid + ethanol ⇌ ethyl ethanoate + water.", "[E] Esters smell fruity; used in flavourings and perfumes."]],
      ], ["Fermentation: yeast, 25 to 35 °C, no oxygen.", "Hydration: ethene + steam, acid catalyst.", "[E] Acid + alcohol ⇌ ester + water."], [
        ["What is needed for fermentation?", ["Ethene and steam", "Sugar, yeast, warmth and no oxygen", "Nickel catalyst", "UV light"], "B", "Yeast respires anaerobically."],
        ["What is an advantage of making ethanol by hydration of ethene?", ["Uses renewable resources", "Fast, continuous and pure", "Needs low energy", "Uses yeast"], "B", "But crude oil is non renewable."],
        ["What gas is made in fermentation?", ["Oxygen", "Hydrogen", "Carbon dioxide", "Methane"], "C", "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂."],
        ["What does ethanoic acid react with to make an ester?", ["Water", "An alcohol", "An alkene", "A metal"], "B", "Acid + alcohol ⇌ ester + water."],
        ["What kind of acid is ethanoic acid?", ["Strong", "Weak", "Neutral", "An alkali"], "B", "It only partly dissociates."],
      ]),
      N("Polymers", 8, "Addition and condensation polymers, plastics and the problems they cause.", [
        ["Addition polymers", ["Polymers are large molecules built from many small units called monomers.", "Addition polymerisation: alkene monomers join when the double bonds open. Ethene makes poly(ethene). Only one product forms.", "Draw the repeat unit: the two carbons with a single bond and bonds extending out each side, in brackets with n."]],
        ["[E] Condensation polymers", ["[E] Condensation polymerisation: monomers with two functional groups join, giving off a small molecule (water) each time.", "[E] Polyamides (such as nylon) form from a dicarboxylic acid and a diamine, with amide links.", "[E] Polyesters (such as PET) form from a dicarboxylic acid and a diol, with ester links.", "[E] Proteins are natural polyamides made from amino acids."]],
        ["Plastics and the environment", ["Plastics are made from polymers. Uses: bags and bottles (poly(ethene)), clothing (nylon, polyester).", "Problems: non biodegradable, so they fill landfill and harm sea life; burning gives toxic gases.", "[E] PET can be recycled: it is broken back into monomers and repolymerised."]],
      ], ["Addition: alkene monomers, double bond opens.", "[E] Condensation: water given off; nylon and PET.", "Plastics are non biodegradable."], [
        ["What monomer makes poly(ethene)?", ["Ethane", "Ethene", "Ethanol", "Ethanoic acid"], "B", "Alkenes make addition polymers."],
        ["What is given off in condensation polymerisation?", ["Hydrogen", "Water", "Carbon dioxide", "Oxygen"], "B", "A small molecule, usually water."],
        ["Why are plastics a problem in landfill?", ["They are biodegradable", "They are non biodegradable", "They are toxic to touch", "They dissolve"], "B", "They last for hundreds of years."],
        ["Nylon is an example of a:", ["Polyester", "Polyamide", "Addition polymer", "Alkane"], "B", "It has amide links."],
        ["What are proteins made from?", ["Glucose", "Amino acids", "Fatty acids", "Ethene"], "B", "Proteins are natural polyamides."],
      ]),
    ] },
    { id: "analysis", name: "Experimental techniques and chemical analysis", subs: [
      N("Apparatus, titration and separation", 10, "Measuring apparatus, acid-base titrations, separating mixtures, chromatography and purity.", [
        ["Apparatus", ["Time: stopwatch. Temperature: thermometer. Mass: balance.", "Volume: measuring cylinder (rough), burette and volumetric pipette (accurate), volumetric flask (making standard solutions), gas syringe (gases)."]],
        ["Titrations", ["Fill a burette with acid; pipette a known volume of alkali into a conical flask with a few drops of indicator.", "Add acid until the indicator changes colour (the end point). Repeat until results agree within 0.10 cm³ (concordant) and take the mean.", "Indicators: methyl orange or thymolphthalein (universal indicator is not used, as it changes gradually)."]],
        ["Separation and purification", ["Filtration: separates an insoluble solid (residue) from a liquid (filtrate).", "Crystallisation: heat a solution to the crystallisation point, cool, and filter the crystals.", "Simple distillation: separates a solvent from a solution (pure water from salt water).", "Fractional distillation: separates liquids with different boiling points (ethanol and water; petroleum).", "Choose a suitable solvent: water, or an organic solvent such as ethanol."]],
        ["Chromatography and purity", ["Paper chromatography separates dissolved substances. The baseline is drawn in pencil, above the solvent level.", "A pure substance gives one spot; a mixture gives several. Matching spots show the same substance.", "Rf = distance moved by the substance ÷ distance moved by the solvent front.", "[E] Colourless substances are shown with a locating agent.", "A pure substance has a sharp, fixed melting and boiling point; impurities lower the melting point and raise the boiling point. Purity matters for food and medicines."]],
      ], ["Burette and pipette for accurate volumes.", "Rf = distance of spot ÷ distance of solvent front.", "Pure: one spot, sharp melting point."], [
        ["Which apparatus measures an exact volume of liquid to transfer?", ["Beaker", "Volumetric pipette", "Measuring cylinder", "Conical flask"], "B", "Pipettes are accurate to 0.05 cm³."],
        ["A spot moves 3.0 cm and the solvent front 7.5 cm. What is Rf?", ["0.4", "2.5", "4.5", "10.5"], "A", "3.0 ÷ 7.5 = 0.4."],
        ["How do you separate pure water from salt water?", ["Filtration", "Simple distillation", "Chromatography", "Crystallisation"], "B", "Water boils off and condenses."],
        ["Why is the chromatography baseline drawn in pencil?", ["Pencil is cheaper", "Pencil does not dissolve in the solvent", "Ink is too dark", "Pencil is waterproof"], "B", "Ink would run and spoil the result."],
        ["How does an impurity affect the melting point?", ["Raises it and makes it sharp", "Lowers it and makes it melt over a range", "No effect", "Makes it exactly 0 °C"], "B", "Pure substances melt sharply."],
        ["How do you separate ethanol from water?", ["Filtration", "Fractional distillation", "Crystallisation", "Chromatography"], "B", "They have different boiling points."],
      ]),
      N("Identifying ions and gases", 12, "Tests for cations, anions and gases, and flame tests.", [
        ["Cations (add sodium hydroxide or ammonia solution)", ["Aluminium Al³⁺: white precipitate, dissolves in excess NaOH; insoluble in excess ammonia.", "Ammonium NH₄⁺: warm with NaOH: ammonia gas given off (damp red litmus turns blue).", "Calcium Ca²⁺: white precipitate with NaOH, insoluble in excess; no (or very slight) precipitate with ammonia.", "Chromium(III) Cr³⁺: green precipitate, dissolves in excess NaOH; insoluble in excess ammonia.", "Copper(II) Cu²⁺: light blue precipitate, insoluble in excess NaOH; dissolves in excess ammonia to give a dark blue solution.", "Iron(II) Fe²⁺: green precipitate, insoluble in excess of either. Iron(III) Fe³⁺: red-brown precipitate, insoluble in excess of either.", "Zinc Zn²⁺: white precipitate, dissolves in excess of both NaOH and ammonia."]],
        ["Anions", ["Carbonate CO₃²⁻: add dilute acid: effervescence; the carbon dioxide turns limewater milky.", "Chloride Cl⁻: acidify with dilute nitric acid, add aqueous silver nitrate: white precipitate. Bromide Br⁻: cream precipitate. Iodide I⁻: yellow precipitate.", "Nitrate NO₃⁻: add aqueous NaOH and aluminium foil, warm: ammonia given off (damp red litmus turns blue).", "Sulfate SO₄²⁻: acidify with dilute nitric acid, add aqueous barium nitrate: white precipitate.", "Sulfite SO₃²⁻: add acidified aqueous potassium manganate(VII): purple to colourless."]],
        ["Gases", ["Ammonia: turns damp red litmus blue. Carbon dioxide: turns limewater milky. Chlorine: bleaches damp litmus paper.", "Hydrogen: 'pops' with a lighted splint. Oxygen: relights a glowing splint. Sulfur dioxide: turns acidified potassium manganate(VII) from purple to colourless."]],
        ["Flame tests", ["Dip a clean wire in the sample and hold it in a blue flame.", "Lithium: red. Sodium: yellow. Potassium: lilac. Calcium: orange-red. Barium: light green. Copper(II): blue-green."]],
      ], ["NaOH: Cu²⁺ blue, Fe²⁺ green, Fe³⁺ red-brown; Al³⁺ and Zn²⁺ white, dissolve in excess.", "Halides with AgNO₃: Cl⁻ white, Br⁻ cream, I⁻ yellow.", "Flames: Li red, Na yellow, K lilac, Ca orange-red, Ba light green, Cu blue-green."], [
        ["A solution gives a red-brown precipitate with sodium hydroxide. Which ion is present?", ["Fe²⁺", "Fe³⁺", "Cu²⁺", "Zn²⁺"], "B", "Iron(III) gives red-brown."],
        ["Which gas relights a glowing splint?", ["Hydrogen", "Oxygen", "Carbon dioxide", "Chlorine"], "B", "Oxygen supports combustion."],
        ["What colour precipitate forms when silver nitrate is added to an acidified iodide?", ["White", "Cream", "Yellow", "Blue"], "C", "Silver iodide is yellow."],
        ["What colour flame does potassium give?", ["Yellow", "Lilac", "Red", "Blue-green"], "B", "Potassium is lilac."],
        ["How do you tell Zn²⁺ from Al³⁺?", ["Use NaOH: only Zn²⁺ dissolves in excess", "Use ammonia: only Zn²⁺ dissolves in excess", "Flame test", "They cannot be told apart"], "B", "Both dissolve in excess NaOH, but only Zn²⁺ in excess ammonia."],
        ["Which test shows a sulfate?", ["Silver nitrate, white precipitate", "Acidify, add barium nitrate: white precipitate", "Add acid: fizzing", "Flame test"], "B", "Barium sulfate is insoluble."],
        ["What happens with ammonia gas and damp red litmus?", ["It turns blue", "It is bleached", "Nothing", "It turns redder"], "A", "Ammonia is alkaline."],
      ]),
    ] },
  ],
};
