// Revision notes, quizzes and flashcards for IGCSE Biology, following every section of the
// Cambridge 0610 syllabus (the Edexcel 4BI1 content is close enough to share them). Lines
// starting "[E] " are Extended (Supplement) content. Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });

export default {
  id: "biology",
  name: "Biology",
  topics: [
    { id: "characteristics", name: "Characteristics and classification of living organisms", subs: [
      N("Characteristics and classification", 8, "The seven characteristics of life, species, the binomial system and dichotomous keys.", [
        ["Characteristics of living organisms", ["Movement: an action causing a change of position or place.", "Respiration: chemical reactions in cells that break down nutrient molecules and release energy for metabolism.", "Sensitivity: the ability to detect and respond to changes in the internal or external environment.", "Growth: a permanent increase in size and dry mass.", "Reproduction: processes that make more of the same kind of organism.", "Excretion: removal of the waste products of metabolism and substances in excess.", "Nutrition: taking in materials for energy, growth and development.", "Remember MRS GREN."]],
        ["Classification", ["A species is a group of organisms that can reproduce to produce fertile offspring.", "Binomial system: an internationally agreed naming system with two parts, the genus and the species, such as Homo sapiens. The genus has a capital letter.", "Organisms are classified by shared features. Dichotomous keys identify organisms by a series of paired choices.", "[E] Classification aims to reflect evolutionary relationships. Organisms that share a more recent ancestor have more similar base sequences in their DNA and amino acid sequences in their proteins."]],
      ], ["MRS GREN: movement, respiration, sensitivity, growth, reproduction, excretion, nutrition.", "Species: can breed to give fertile offspring.", "Binomial: Genus species."], [
        ["Which is NOT a characteristic of all living things?", ["Respiration", "Excretion", "Photosynthesis", "Sensitivity"], "C", "Only plants and some protoctists photosynthesise."],
        ["What is growth?", ["Any increase in size", "A permanent increase in size and dry mass", "Taking in water", "Cell division only"], "B", "Dry mass rules out simply gaining water."],
        ["In Panthera leo, what is 'Panthera'?", ["The species", "The genus", "The kingdom", "The family"], "B", "The first name is the genus."],
        ["What is a species?", ["Organisms that look alike", "Organisms that can breed to produce fertile offspring", "Organisms in the same habitat", "Any group of animals"], "B", "Fertile offspring is the key test."],
        ["What is the best evidence that two species are closely related?", ["They live in the same place", "Similar DNA base sequences", "They are the same size", "They eat the same food"], "B", "DNA reflects shared ancestry."],
      ]),
      N("Features of organisms", 10, "The five kingdoms, vertebrate and arthropod groups, ferns and flowering plants, and viruses.", [
        ["The five kingdoms", ["Animals: multicellular, no cell walls or chlorophyll, feed on organic substances.", "Plants: multicellular, cellulose cell walls, chlorophyll, photosynthesise.", "Fungi: cell walls (not cellulose), feed by secreting enzymes and absorbing the products (saprotrophic), such as mushrooms and yeast.", "Prokaryotes (bacteria): single cells with no nucleus; circular DNA and plasmids.", "Protoctists: mostly single celled with a nucleus, such as Amoeba and Plasmodium."]],
        ["Vertebrates", ["Mammals: fur or hair, external ears (pinnae), mammary glands, live young.", "Birds: feathers, beak, wings, eggs with hard shells.", "Reptiles: dry scaly skin, eggs with rubbery shells laid on land.", "Amphibians: moist smooth skin, eggs laid in water, larvae (tadpoles) live in water.", "Fish: wet scales, fins, gills."]],
        ["Arthropods", ["All have jointed legs and an exoskeleton.", "Insects: three body parts, three pairs of legs, one pair of antennae, often wings.", "Arachnids: two body parts, four pairs of legs, no antennae.", "Crustaceans: more than four pairs of legs, two pairs of antennae.", "Myriapods: many segments, each with legs, one pair of antennae."]],
        ["Plants and viruses", ["[E] Ferns: leaves called fronds, reproduce by spores, no flowers.", "[E] Flowering plants: reproduce by seeds. Monocotyledons have parallel leaf veins and flower parts in threes; dicotyledons have branching veins and parts in fours or fives.", "[E] Viruses are not cells: just genetic material (DNA or RNA) inside a protein coat. They only reproduce inside living cells."]],
      ], ["Kingdoms: animal, plant, fungus, prokaryote, protoctist.", "Insects: 3 body parts, 6 legs. Arachnids: 8 legs.", "[E] Viruses: genetic material in a protein coat."], [
        ["An animal has dry scaly skin and lays eggs with rubbery shells on land. Which group?", ["Amphibian", "Reptile", "Bird", "Fish"], "B", "Reptiles have dry scales."],
        ["How many legs does an arachnid have?", ["6", "8", "10", "Many"], "B", "Four pairs."],
        ["Which kingdom has cells with no nucleus?", ["Fungi", "Protoctists", "Prokaryotes", "Plants"], "C", "Bacteria are prokaryotes."],
        ["Which feature is only found in mammals?", ["Lungs", "Mammary glands", "Backbone", "Eggs"], "B", "Mammary glands make milk."],
        ["What is a virus made of?", ["A cell with a nucleus", "Genetic material inside a protein coat", "Cytoplasm and a cell wall", "Chlorophyll and starch"], "B", "Viruses are not cells."],
        ["How do fungi feed?", ["Photosynthesis", "They secrete enzymes onto food and absorb the products", "They eat with a mouth", "They do not feed"], "B", "Saprotrophic nutrition."],
      ]),
    ] },
    { id: "organisation", name: "Organisation of the organism", subs: [
      N("Cell structure", 9, "Animal, plant and bacterial cells and what each part does.", [
        ["Animal and plant cells", ["Nucleus: contains genetic material (chromosomes) and controls the cell.", "Cytoplasm: where most chemical reactions happen.", "Cell membrane: controls what enters and leaves.", "Mitochondria: site of aerobic respiration.", "Ribosomes: site of protein synthesis.", "Plants only: cellulose cell wall (strength and support), chloroplasts (photosynthesis), large permanent vacuole containing cell sap (support by turgor)."]],
        ["Bacterial cells", ["Cell wall (not cellulose), cell membrane, cytoplasm and ribosomes.", "Circular DNA, not in a nucleus.", "Plasmids: small rings of DNA."]],
        ["New cells", ["New cells are made by the division of existing cells."]],
      ], ["Mitochondria: aerobic respiration. Ribosomes: proteins.", "Plant only: wall, chloroplasts, large vacuole.", "Bacteria: circular DNA and plasmids, no nucleus."], [
        ["Which part is found in plant cells but not animal cells?", ["Nucleus", "Cell membrane", "Chloroplast", "Mitochondrion"], "C", "Chloroplasts carry out photosynthesis."],
        ["Where does aerobic respiration happen?", ["Ribosomes", "Mitochondria", "Nucleus", "Vacuole"], "B", "Mitochondria release energy."],
        ["What do ribosomes make?", ["Lipids", "Proteins", "Starch", "DNA"], "B", "Protein synthesis."],
        ["What does a bacterial cell have instead of a nucleus?", ["Nothing", "Circular DNA and plasmids", "Chloroplasts", "A vacuole"], "B", "Prokaryotes have free DNA."],
        ["What is the cell wall of a plant made of?", ["Chitin", "Cellulose", "Starch", "Protein"], "B", "Cellulose gives strength."],
      ]),
      N("Specialised cells, organisation and magnification", 9, "Cells adapted for jobs, levels of organisation, and calculating magnification.", [
        ["Specialised cells", ["Ciliated cells: move mucus in the trachea and bronchi.", "Root hair cells: large surface area for absorbing water and mineral ions.", "Palisade mesophyll cells: many chloroplasts for photosynthesis.", "Neurones: long, to conduct electrical impulses.", "Red blood cells: no nucleus, biconcave, contain haemoglobin to carry oxygen.", "Sperm and egg cells: gametes for reproduction."]],
        ["Levels of organisation", ["Cell: the basic unit. Tissue: a group of cells with similar structures working together for a shared function.", "Organ: a structure made of a group of tissues working together for specific functions. Organ system: a group of organs with related functions.", "Example: muscle cell → muscle tissue → heart → circulatory system → organism."]],
        ["Size and magnification", ["Magnification = image size ÷ actual size.", "Use the same units: 1 mm = 1000 µm (micrometres).", "Example: a cell 50 µm across drawn 25 mm wide: 25 000 µm ÷ 50 µm = x500."]],
      ], ["Magnification = image ÷ actual, same units.", "1 mm = 1000 µm.", "Cell, tissue, organ, organ system, organism."], [
        ["A cell is 0.02 mm long and its image is 10 mm. What is the magnification?", ["x20", "x200", "x500", "x5000"], "C", "10 ÷ 0.02 = 500."],
        ["Why do root hair cells have a long extension?", ["To make sugar", "To increase surface area for absorbing water and ions", "To carry oxygen", "To make impulses"], "B", "More surface, faster absorption."],
        ["Which is a tissue?", ["Heart", "Muscle", "Red blood cell", "Digestive system"], "B", "A group of similar cells."],
        ["How many micrometres are in 1 mm?", ["10", "100", "1000", "1 000 000"], "C", "1 mm = 1000 µm."],
        ["What adaptation do red blood cells have?", ["A large nucleus", "No nucleus, biconcave, haemoglobin", "Many chloroplasts", "Cilia"], "B", "More room for haemoglobin, more surface area."],
      ]),
    ] },
    { id: "movement", name: "Movement into and out of cells", subs: [
      N("Diffusion and active transport", 8, "Diffusion, what affects its rate, and active transport.", [
        ["Diffusion", ["Diffusion: the net movement of particles from a region of higher concentration to lower concentration (down a concentration gradient), as a result of their random movement.", "The energy comes from the kinetic energy of the particles. It is passive (no energy from respiration).", "Substances move in and out of cells by diffusion through the cell membrane, such as oxygen and carbon dioxide in gas exchange.", "Factors increasing the rate: larger surface area, higher temperature, steeper concentration gradient, shorter distance."]],
        ["Active transport", ["Active transport: the movement of particles through a cell membrane from lower to higher concentration (against a concentration gradient), using energy from respiration.", "Example: root hair cells taking up mineral ions from the soil; glucose uptake in the gut.", "[E] Protein carriers in the membrane move the particles, using energy from respiration."]],
      ], ["Diffusion: high to low, no energy needed.", "Faster: bigger surface, warmer, steeper gradient, shorter distance.", "Active transport: low to high, uses energy from respiration."], [
        ["Which is diffusion?", ["Water moving through a membrane", "Oxygen moving from the alveoli into the blood", "Ions moving into root hairs against a gradient", "Glucose being made"], "B", "Oxygen moves down its concentration gradient."],
        ["Which increases the rate of diffusion?", ["Smaller surface area", "Lower temperature", "Steeper concentration gradient", "Thicker membrane"], "C", "A bigger difference drives faster diffusion."],
        ["Active transport needs:", ["No energy", "Energy from respiration", "Light", "A partially permeable membrane only"], "B", "It moves particles against the gradient."],
        ["Why do root hair cells contain many mitochondria?", ["For photosynthesis", "To release energy for active transport of ions", "To store water", "To make cellulose"], "B", "Ions are taken up against a gradient."],
        ["Where does the energy for diffusion come from?", ["Respiration", "The kinetic energy of the particles", "Light", "ATP from the Sun"], "B", "Diffusion is passive."],
      ]),
      N("Osmosis", 9, "Osmosis, water potential, and its effects on plant and animal cells.", [
        ["Osmosis", ["Osmosis: the net movement of water molecules from a region of higher water potential (dilute solution) to lower water potential (concentrated solution), through a partially permeable membrane.", "Water moves into and out of cells by osmosis through the cell membrane.", "Investigate it with potato cylinders in different sugar or salt solutions: measure the change in mass; or with dialysis (Visking) tubing."]],
        ["Effects on cells", ["Plant cell in water: water enters, the vacuole swells and pushes against the cell wall; the cell becomes turgid. Turgor pressure supports the plant.", "Plant cell in a concentrated solution: water leaves; the cell becomes flaccid, then plasmolysed (the membrane pulls away from the wall). The plant wilts.", "Animal cells have no wall: in water they swell and may burst; in a concentrated solution they shrink (crenate)."]],
        ["Water potential", ["[E] Water moves from high to low water potential. Pure water has the highest water potential.", "[E] The cell wall stops a plant cell bursting, as turgor pressure pushes back against more water entering.", "[E] Explains why hospitals use solutions with the same concentration as blood when giving fluids."]],
      ], ["Osmosis: water, high to low water potential, partially permeable membrane.", "Plant cells: turgid, flaccid, plasmolysed.", "Animal cells burst in water and shrink in strong solutions."], [
        ["What moves during osmosis?", ["Glucose", "Water", "Salt", "Oxygen"], "B", "Osmosis is only about water."],
        ["A plant cell is put in pure water. It becomes:", ["Plasmolysed", "Flaccid", "Turgid", "Burst"], "C", "Water enters and the wall stops it bursting."],
        ["Why does a red blood cell burst in pure water?", ["It has no cell wall to resist the water entering", "It loses water", "It has a vacuole", "Water is toxic"], "A", "Animal cells lack a wall."],
        ["Potato cylinders lose mass in a sugar solution. Why?", ["Sugar enters them", "Water leaves by osmosis into the more concentrated solution", "They respire", "They gain water"], "B", "The solution has a lower water potential."],
        ["What is plasmolysis?", ["Cell bursting", "The cell membrane pulling away from the cell wall", "The cell swelling", "Cell division"], "B", "Extreme water loss."],
      ]),
    ] },
    { id: "molecules", name: "Biological molecules", subs: [
      N("Biological molecules and food tests", 10, "The elements in nutrients, large molecules from small ones, food tests, DNA and water.", [
        ["What they are made of", ["Carbohydrates: carbon, hydrogen and oxygen. Starch, glycogen and cellulose are made from glucose.", "Fats and oils: carbon, hydrogen and oxygen. Made from fatty acids and glycerol.", "Proteins: carbon, hydrogen, oxygen and nitrogen (some sulfur). Made from amino acids."]],
        ["Food tests", ["Starch: iodine solution, orange-brown to blue-black.", "Reducing sugars (such as glucose): Benedict's solution, heat in a water bath: blue to green, yellow, orange or brick red (more sugar, further along).", "Protein: biuret solution, blue to purple.", "Fats and oils: ethanol emulsion test, shake with ethanol then add water: cloudy white emulsion.", "Vitamin C: DCPIP solution, blue to colourless."]],
        ["DNA", ["[E] DNA has two strands coiled together to form a double helix.", "[E] Each strand has bases. The bases pair across the strands: A with T, and C with G.", "[E] The sequence of bases is the genetic code."]],
        ["Water", ["Water is important as a solvent: for digestion, excretion and transport (substances dissolve in it)."]],
      ], ["Starch: iodine blue-black. Sugar: Benedict's brick red. Protein: biuret purple.", "Fat: ethanol, cloudy white. Vitamin C: DCPIP colourless.", "[E] DNA: double helix, A-T and C-G."], [
        ["Which test shows protein?", ["Iodine", "Benedict's", "Biuret", "DCPIP"], "C", "Biuret turns purple."],
        ["What colour does Benedict's turn with a lot of reducing sugar?", ["Blue", "Purple", "Brick red", "Blue-black"], "C", "Heated, it goes through green and orange to brick red."],
        ["What are proteins made from?", ["Glucose", "Amino acids", "Fatty acids and glycerol", "Bases"], "B", "Amino acids join into chains."],
        ["Which element is found in proteins but not carbohydrates?", ["Carbon", "Hydrogen", "Oxygen", "Nitrogen"], "D", "Amino acids contain nitrogen."],
        ["Which base pairs with adenine in DNA?", ["Cytosine", "Guanine", "Thymine", "Adenine"], "C", "A pairs with T."],
        ["What does DCPIP test for?", ["Starch", "Fat", "Vitamin C", "Glucose"], "C", "It turns blue to colourless."],
      ]),
    ] },
    { id: "enzymes", name: "Enzymes", subs: [
      N("Enzymes", 9, "What enzymes are, how they work, and the effects of temperature and pH.", [
        ["What enzymes are", ["A catalyst is a substance that increases the rate of a chemical reaction and is not changed by the reaction.", "Enzymes are proteins that are biological catalysts. They are needed to keep reactions in cells fast enough to sustain life.", "Each enzyme has an active site with a shape complementary to its substrate (lock and key). The substrate binds, forming an enzyme-substrate complex, and products are released.", "Enzymes are specific: each works on only one substrate."]],
        ["Temperature and pH", ["Rate rises with temperature up to an optimum (about 37 °C for human enzymes), then falls sharply.", "[E] Below the optimum, raising temperature gives molecules more kinetic energy: more frequent effective collisions and more enzyme-substrate complexes form.", "[E] Above the optimum, the active site changes shape: the enzyme is denatured, so the substrate no longer fits.", "Each enzyme has an optimum pH; far from it the enzyme is denatured. Pepsin in the stomach works best around pH 2; most others around pH 7."]],
        ["Investigations", ["Temperature: starch and amylase in water baths at different temperatures; test samples with iodine every 30 s until no longer blue-black.", "pH: the same method with buffer solutions of different pH.", "Hydrogen peroxide and catalase (in potato or liver): measure the oxygen given off."]],
      ], ["Enzymes are protein catalysts with a specific active site.", "Optimum temperature about 37 °C; above it, denatured.", "Pepsin works at pH 2; most enzymes near pH 7."], [
        ["What are enzymes made of?", ["Carbohydrate", "Fat", "Protein", "DNA"], "C", "Enzymes are proteins."],
        ["What happens to an enzyme at 70 °C?", ["It works faster", "It is denatured: the active site changes shape", "It is unchanged", "It becomes a substrate"], "B", "High temperatures break the bonds that hold its shape."],
        ["Why does an enzyme only work on one substrate?", ["Enzymes are small", "Its active site has a shape complementary to only that substrate", "It is used up", "It needs light"], "B", "Lock and key."],
        ["What is the optimum pH for pepsin?", ["2", "7", "9", "12"], "A", "The stomach is acidic."],
        ["Why does the rate increase from 10 °C to 30 °C?", ["The enzyme is denatured", "Molecules have more kinetic energy, so more effective collisions", "The active site changes", "pH rises"], "B", "More enzyme-substrate complexes form."],
      ]),
    ] },
    { id: "plant-nutrition", name: "Plant nutrition", subs: [
      N("Photosynthesis and leaf structure", 10, "The photosynthesis equation, uses of glucose, mineral ions and the structure of a leaf.", [
        ["Photosynthesis", ["Photosynthesis: the process by which plants make carbohydrates from raw materials using energy from light.", "Word equation: carbon dioxide + water → glucose + oxygen (in the presence of light and chlorophyll).", "[E] Balanced: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.", "Chlorophyll is a green pigment in chloroplasts. It transfers light energy into chemical energy in glucose and other molecules."]],
        ["Uses of glucose", ["Converted to starch for storage, and cellulose for cell walls.", "Used in respiration to release energy.", "Converted to sucrose for transport in the phloem, and into nectar to attract pollinators.", "Combined with nitrate ions to make amino acids for proteins; and fats and oils for storage."]],
        ["Mineral ions", ["Nitrate ions: for making amino acids (proteins). Deficiency: stunted growth and yellow older leaves.", "Magnesium ions: for making chlorophyll. Deficiency: yellowing between the veins (chlorosis)."]],
        ["Leaf structure", ["Waxy cuticle and upper epidermis: thin and transparent, reduce water loss and let light through.", "Palisade mesophyll: tightly packed cells with many chloroplasts, near the top for the most light.", "Spongy mesophyll: cells with air spaces for gas diffusion.", "Vascular bundle: xylem brings water and ions, phloem takes sugars away.", "Lower epidermis with stomata: guard cells open and close stomata to let CO₂ in and O₂ out.", "Leaves are broad (large surface area) and thin (short diffusion distance)."]],
      ], ["CO₂ + water → glucose + oxygen, with light and chlorophyll.", "Nitrate for proteins, magnesium for chlorophyll.", "Palisade: most chloroplasts. Spongy: air spaces. Stomata: gas exchange."], [
        ["What are the products of photosynthesis?", ["Carbon dioxide and water", "Glucose and oxygen", "Starch and carbon dioxide", "Oxygen and water"], "B", "Glucose and oxygen are made."],
        ["Which mineral ion is needed to make chlorophyll?", ["Nitrate", "Magnesium", "Phosphate", "Iron"], "B", "Magnesium is at the centre of chlorophyll."],
        ["Where are most chloroplasts in a leaf?", ["Spongy mesophyll", "Palisade mesophyll", "Epidermis", "Xylem"], "B", "Palisade cells are near the light."],
        ["Why is glucose converted to starch for storage?", ["Starch is sweeter", "Starch is insoluble so does not affect osmosis", "Starch is a protein", "Starch makes cellulose"], "B", "Insoluble starch does not draw in water."],
        ["What do guard cells control?", ["Light entering", "Opening and closing of stomata", "Chlorophyll production", "Phloem flow"], "B", "They regulate gas exchange and water loss."],
        ["What happens to a plant lacking nitrate ions?", ["Leaves go purple", "Stunted growth and yellow older leaves", "It grows faster", "Nothing"], "B", "It cannot make enough protein."],
      ]),
      N("Limiting factors and experiments", 8, "Investigating photosynthesis and the factors that limit its rate.", [
        ["Showing what is needed", ["Destarch a plant by leaving it in the dark for 48 hours, then test leaves for starch with iodine.", "Chlorophyll: a variegated leaf only makes starch in the green parts.", "Light: cover part of a leaf with foil; only the uncovered part makes starch.", "Carbon dioxide: enclose a leaf with soda lime (absorbs CO₂); it makes no starch."]],
        ["Measuring the rate", ["Count bubbles or measure the volume of oxygen from pondweed (Elodea) at different conditions.", "Change light intensity by moving a lamp; use a water tank to keep the temperature constant.", "Hydrogencarbonate indicator shows CO₂ changes: red (normal), yellow (more CO₂, respiration), purple (less CO₂, photosynthesis)."]],
        ["Limiting factors", ["[E] Light intensity, carbon dioxide concentration and temperature affect the rate of photosynthesis.", "[E] A limiting factor is the one in shortest supply, which stops the rate rising further.", "[E] On a graph, the rate rises with light intensity then levels off: another factor (CO₂ or temperature) is now limiting.", "[E] Growers use greenhouses with extra lighting, heating and CO₂ (paraffin heaters) to increase crop yields."]],
      ], ["Destarch, then test with iodine.", "Pondweed bubbles measure the rate.", "[E] The factor in shortest supply limits the rate."], [
        ["Why is a plant destarched before an experiment?", ["To kill it", "So any starch found must have been made during the experiment", "To add water", "To give it more light"], "B", "It removes existing starch."],
        ["Which part of a variegated leaf makes starch?", ["The white parts", "The green parts", "All of it", "None"], "B", "Only parts with chlorophyll photosynthesise."],
        ["What colour is hydrogencarbonate indicator when CO₂ levels are low?", ["Yellow", "Red", "Purple", "Blue"], "C", "Photosynthesis has removed CO₂."],
        ["The rate stops rising as light increases. What does this show?", ["Light is limiting", "Another factor, such as CO₂, is now limiting", "The plant is dead", "Photosynthesis has stopped"], "B", "Light is no longer the limit."],
        ["What does soda lime do in an experiment?", ["Adds light", "Absorbs carbon dioxide", "Adds oxygen", "Adds water"], "B", "It removes CO₂."],
      ]),
    ] },
    { id: "human-nutrition", name: "Human nutrition", subs: [
      N("Diet", 8, "A balanced diet, nutrients and their sources, and deficiency diseases.", [
        ["A balanced diet", ["A balanced diet contains all nutrients in the right proportions for a person's age, sex and activity.", "Carbohydrates (bread, rice, pasta): energy.", "Fats and oils (butter, oils): energy store, insulation.", "Proteins (meat, fish, eggs, beans): growth and repair.", "Vitamin C (citrus fruit): healthy skin and gums; deficiency causes scurvy.", "Vitamin D (oily fish, sunlight on skin): absorbing calcium; deficiency causes rickets.", "Calcium (milk, cheese): bones and teeth; deficiency causes rickets.", "Iron (red meat, spinach): making haemoglobin; deficiency causes anaemia.", "Dietary fibre (vegetables, wholemeal bread): prevents constipation.", "Water: needed for chemical reactions, as a solvent and for transport."]],
      ], ["Carbohydrates and fats for energy, protein for growth.", "No vitamin C: scurvy. No vitamin D or calcium: rickets.", "Fibre prevents constipation."], [
        ["What does a lack of vitamin C cause?", ["Rickets", "Scurvy", "Anaemia", "Constipation"], "B", "Scurvy: bleeding gums."],
        ["Which nutrient is mainly for growth and repair?", ["Carbohydrate", "Fat", "Protein", "Fibre"], "C", "Protein builds tissues."],
        ["Which is a source of vitamin D?", ["Oranges", "Sunlight on the skin", "Rice", "Bread"], "B", "Skin makes vitamin D in sunlight."],
        ["Why is fibre important?", ["Gives energy", "Prevents constipation", "Builds muscle", "Makes haemoglobin"], "B", "It helps food move through the gut."],
        ["What is iron needed for?", ["Bones", "Making haemoglobin", "Vision", "Clotting only"], "B", "Iron is part of haemoglobin."],
      ]),
      N("The digestive system and digestion", 11, "Digestive organs, teeth, physical and chemical digestion, and the enzymes involved.", [
        ["Stages and organs", ["Ingestion: taking food and drink into the body. Digestion: breaking down food. Absorption: moving small molecules into the blood. Assimilation: using them in cells. Egestion: passing out undigested food as faeces.", "Mouth (teeth, salivary glands), oesophagus, stomach, small intestine (duodenum and ileum), pancreas, liver, gall bladder, large intestine (colon and rectum), anus."]],
        ["Physical digestion", ["Breaking food into smaller pieces without chemical change, increasing the surface area for enzymes.", "Teeth: incisors (cutting), canines (gripping and tearing), premolars and molars (grinding).", "The stomach churns food with muscle contractions.", "Bile, made in the liver and stored in the gall bladder, emulsifies fats into droplets, increasing their surface area for lipase.", "[E] Bile is alkaline, neutralising the acidic mixture from the stomach so enzymes in the small intestine work at their optimum pH."]],
        ["Chemical digestion", ["Breaking large insoluble molecules into small soluble ones that can be absorbed.", "Amylase: starch → simpler reducing sugars (maltose). Made in the salivary glands and pancreas; works in the mouth and small intestine.", "Protease: proteins → amino acids. Pepsin in the stomach; trypsin from the pancreas in the small intestine.", "Lipase: fats and oils → fatty acids and glycerol. From the pancreas; works in the small intestine.", "Hydrochloric acid in the stomach kills harmful microorganisms and gives the low pH pepsin needs.", "[E] Maltase on the membranes of the small intestine lining breaks maltose into glucose."]],
      ], ["Ingestion, digestion, absorption, assimilation, egestion.", "Amylase: starch. Protease: protein. Lipase: fat.", "Bile emulsifies fat; [E] and neutralises stomach acid."], [
        ["What does lipase break fats into?", ["Amino acids", "Glucose", "Fatty acids and glycerol", "Maltose"], "C", "Lipase digests fats."],
        ["Where is bile made?", ["Gall bladder", "Pancreas", "Liver", "Stomach"], "C", "It is stored in the gall bladder."],
        ["What does bile do to fats?", ["Digests them chemically", "Emulsifies them into small droplets", "Absorbs them", "Turns them into protein"], "B", "Physical digestion: more surface area."],
        ["Why does the stomach contain hydrochloric acid?", ["To digest starch", "To kill microorganisms and suit pepsin", "To neutralise bile", "To absorb water"], "B", "Pepsin works at low pH."],
        ["Which teeth grind food?", ["Incisors", "Canines", "Molars", "None"], "C", "Premolars and molars grind."],
        ["What is egestion?", ["Taking in food", "Passing out undigested food as faeces", "Absorbing food", "Using food in cells"], "B", "Not to be confused with excretion."],
      ]),
      N("Absorption", 6, "Absorption in the small intestine, villi, and water absorption in the colon.", [
        ["Absorption", ["Absorption: the movement of nutrients from the intestines into the blood.", "The small intestine (mainly the ileum) is where most nutrients and water are absorbed. The colon absorbs some water too.", "The small intestine is long and lined with villi and microvilli, giving a huge surface area."]],
        ["Villi", ["[E] Each villus has a thin wall (one cell thick), a good blood supply (a network of capillaries) and a lacteal.", "[E] Glucose and amino acids pass into the capillaries; fatty acids and glycerol pass into the lacteal (lymphatic system).", "[E] Microvilli on the epithelial cells increase the surface area even more."]],
      ], ["Most absorption: the ileum. Water: small intestine and colon.", "Villi and microvilli give a huge surface area.", "[E] Villus: thin wall, capillaries, lacteal."], [
        ["Where are most nutrients absorbed?", ["Stomach", "Small intestine", "Large intestine", "Mouth"], "B", "The ileum."],
        ["Why do villi increase absorption?", ["They make enzymes", "They give a large surface area", "They store food", "They kill bacteria"], "B", "More surface, faster absorption."],
        ["What does a lacteal absorb?", ["Glucose", "Amino acids", "Fatty acids and glycerol", "Water only"], "C", "Fats go into the lymph."],
        ["Where else is water absorbed?", ["The oesophagus", "The colon", "The mouth", "The liver"], "B", "The colon absorbs water."],
        ["Why is a villus wall only one cell thick?", ["To make it strong", "A short diffusion distance", "To store fat", "To make enzymes"], "B", "Nutrients reach the blood quickly."],
      ]),
    ] },
    { id: "plant-transport", name: "Transport in plants", subs: [
      N("Xylem, phloem and water uptake", 8, "The jobs of xylem and phloem, root hair cells and the pathway of water.", [
        ["Xylem and phloem", ["Xylem: transports water and mineral ions from the roots up the plant, and gives support.", "[E] Xylem vessels are dead cells with no cross walls, thickened with lignin, forming hollow tubes.", "Phloem: transports sucrose and amino acids around the plant.", "In the root, xylem and phloem are in the centre; in the stem, they are in vascular bundles round the edge."]],
        ["Water uptake", ["Root hair cells have a large surface area for absorbing water (by osmosis) and mineral ions (by active transport).", "Pathway: root hair cell → root cortex cells → xylem → mesophyll cells.", "Investigate the pathway by putting a celery stalk in coloured dye: the xylem is stained."]],
      ], ["Xylem: water and ions up. Phloem: sucrose and amino acids.", "Root hairs: large surface area.", "Root hair → cortex → xylem → mesophyll."], [
        ["What does phloem transport?", ["Water and ions", "Sucrose and amino acids", "Oxygen", "Starch"], "B", "Phloem carries food made in leaves."],
        ["How is water absorbed by root hair cells?", ["Active transport", "Osmosis", "Diffusion of glucose", "Respiration"], "B", "Water moves by osmosis."],
        ["What is the path of water into a leaf?", ["Phloem to cortex", "Root hair, cortex, xylem, mesophyll", "Stomata to roots", "Xylem to root hair"], "B", "In order from the soil."],
        ["How could you show where water travels in a stem?", ["Iodine test", "Put the stem in coloured dye and look at the stained xylem", "Measure its mass", "Use limewater"], "B", "The dye marks the xylem."],
        ["Why are xylem vessels hollow?", ["To store sugar", "So water can flow easily in a continuous column", "To make them flexible", "To photosynthesise"], "B", "No cross walls or contents."],
      ]),
      N("Transpiration and translocation", 9, "How water is lost from leaves, the factors affecting it, and moving sugars in the phloem.", [
        ["Transpiration", ["Transpiration: the loss of water vapour from leaves.", "Water evaporates from the surfaces of mesophyll cells into the air spaces, then diffuses out through the stomata as water vapour.", "[E] Large surface area of mesophyll cells and interconnecting air spaces help.", "[E] Water moves up the xylem by transpiration pull: water molecules are held together by cohesion, forming a continuous column pulled up as water evaporates.", "Measure it with a potometer (rate of water uptake)."]],
        ["Factors", ["Higher temperature: faster (more evaporation and diffusion).", "Lower humidity: faster (steeper water vapour gradient).", "More wind: faster (water vapour blown away).", "[E] Brighter light: faster, as stomata open wider.", "Wilting happens when water loss is greater than uptake: cells become flaccid."]],
        ["Translocation", ["[E] Translocation: the movement of sucrose and amino acids in the phloem, from sources to sinks.", "[E] Source: where they are made or released (leaves in summer, storage organs in spring).", "[E] Sink: where they are used or stored (roots, growing points, fruits, storage organs). The same part can be a source at one time and a sink at another."]],
      ], ["Transpiration: evaporation from mesophyll, diffusion out of stomata.", "Faster when hot, dry, windy (and bright).", "[E] Translocation: phloem, source to sink."], [
        ["How does humidity affect transpiration?", ["Higher humidity, faster", "Higher humidity, slower", "No effect", "It stops it completely"], "B", "A smaller water vapour gradient."],
        ["Through which openings is water vapour lost?", ["Xylem", "Stomata", "Root hairs", "Phloem"], "B", "Stomata on the leaf."],
        ["What apparatus measures water uptake by a shoot?", ["Respirometer", "Potometer", "Thermometer", "Quadrat"], "B", "A potometer."],
        ["Why does a plant wilt?", ["Too much water", "Water loss is greater than water uptake", "Too much light", "It is respiring"], "B", "Cells lose turgor."],
        ["What is a sink in translocation?", ["Where sugars are made", "Where sugars are used or stored", "The xylem", "A stoma"], "B", "Roots and fruits are sinks."],
      ]),
    ] },
    { id: "animal-transport", name: "Transport in animals", subs: [
      N("The heart and circulation", 10, "Single and double circulation, the structure of the heart, heart rate and coronary heart disease.", [
        ["Circulatory systems", ["The circulatory system is a system of blood vessels with a pump and valves to ensure one way flow of blood.", "Fish have a single circulation: heart → gills → body → heart.", "Mammals have a double circulation: blood passes through the heart twice per circuit (heart → lungs → heart → body).", "[E] Double circulation keeps a higher pressure to the body, so materials are delivered faster."]],
        ["The heart", ["Four chambers: right atrium, right ventricle, left atrium, left ventricle. The septum separates the two sides.", "Right side pumps deoxygenated blood to the lungs; left side pumps oxygenated blood to the body.", "The left ventricle has a thicker muscle wall because it pumps blood all round the body at higher pressure.", "Valves (atrioventricular and semilunar) stop backflow.", "Vessels: vena cava (in from the body), pulmonary artery (to the lungs), pulmonary vein (from the lungs), aorta (to the body). Coronary arteries supply the heart muscle."]],
        ["Heart rate and disease", ["Monitor the heart with an ECG, the pulse rate, or by listening to the valves with a stethoscope.", "Exercise increases heart rate.", "[E] During exercise, muscles respire more, so they need more oxygen and glucose and must remove more CO₂.", "Coronary heart disease: blockage of the coronary arteries by fatty deposits. Risk factors: diet high in saturated fat, lack of exercise, stress, smoking, genetic factors, age and sex.", "Reduce the risk: healthy diet, exercise, not smoking."]],
      ], ["Double circulation: lungs and body.", "Left ventricle: thickest wall. Valves stop backflow.", "CHD: blocked coronary arteries; risks include diet, smoking, no exercise."], [
        ["Which chamber has the thickest wall?", ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"], "D", "It pumps blood round the whole body."],
        ["Which blood vessel carries blood from the lungs to the heart?", ["Pulmonary artery", "Pulmonary vein", "Aorta", "Vena cava"], "B", "Pulmonary vein, oxygenated."],
        ["What do heart valves do?", ["Pump blood", "Stop blood flowing backwards", "Make blood cells", "Carry oxygen"], "B", "One way flow."],
        ["What is a double circulation?", ["Two hearts", "Blood passes through the heart twice in one circuit", "Two kinds of blood", "Blood goes to the lungs twice"], "B", "Lungs then body."],
        ["Which is a risk factor for coronary heart disease?", ["Regular exercise", "Smoking", "Eating vegetables", "Drinking water"], "B", "Smoking damages arteries."],
        ["Which vessels supply the heart muscle itself?", ["Pulmonary arteries", "Coronary arteries", "Vena cava", "Capillaries of the lungs"], "B", "Coronary arteries."],
      ]),
      N("Blood vessels and blood", 9, "Arteries, veins and capillaries, the main vessels, and the parts of blood.", [
        ["Blood vessels", ["Arteries: carry blood away from the heart at high pressure. Thick, muscular, elastic walls; narrow lumen.", "Veins: carry blood back to the heart at low pressure. Thin walls, large lumen, valves to stop backflow.", "Capillaries: tiny vessels with walls one cell thick, for exchanging substances with cells.", "Main vessels: aorta, vena cava, pulmonary artery and vein, renal artery and vein (kidneys).", "[E] Also the hepatic artery, the hepatic portal vein (gut to liver) and the hepatic vein (liver)."]],
        ["Blood", ["Red blood cells: contain haemoglobin to transport oxygen.", "White blood cells: phagocytes engulf and digest pathogens (phagocytosis); lymphocytes make antibodies.", "Platelets: help blood to clot, preventing blood loss and entry of pathogens.", "Plasma: transports blood cells, ions, nutrients (glucose, amino acids), urea, hormones and carbon dioxide.", "[E] Clotting: soluble fibrinogen is converted into insoluble fibrin threads, which trap blood cells."]],
      ], ["Arteries: thick walls, high pressure. Veins: valves, low pressure. Capillaries: one cell thick.", "Red cells: oxygen. Phagocytes engulf; lymphocytes make antibodies.", "Platelets clot; plasma carries everything else."], [
        ["Which vessel has valves?", ["Artery", "Vein", "Capillary", "Aorta"], "B", "Veins have low pressure so need valves."],
        ["Why do arteries have thick, muscular walls?", ["To allow exchange", "To withstand high pressure", "To store blood", "To make blood cells"], "B", "Blood leaves the heart at high pressure."],
        ["What do lymphocytes do?", ["Engulf pathogens", "Make antibodies", "Carry oxygen", "Clot blood"], "B", "Antibodies target pathogens."],
        ["What carries urea and hormones in the blood?", ["Red blood cells", "Platelets", "Plasma", "White blood cells"], "C", "Plasma transports dissolved substances."],
        ["What forms the threads in a blood clot?", ["Fibrinogen", "Fibrin", "Haemoglobin", "Plasma"], "B", "Fibrinogen is converted to fibrin."],
        ["Where does exchange with body cells happen?", ["Arteries", "Veins", "Capillaries", "The heart"], "C", "Thin walls allow diffusion."],
      ]),
    ] },
    { id: "disease", name: "Diseases and immunity", subs: [
      N("Pathogens and the body's defences", 9, "Pathogens, how diseases spread, the body's barriers and controlling the spread.", [
        ["Pathogens", ["A pathogen is a disease causing organism: bacteria, viruses, fungi and protoctists.", "A transmissible disease is one where the pathogen can be passed from one host to another.", "Direct transmission: through blood or other body fluids. Indirect: from contaminated surfaces, food, animals or the air."]],
        ["Defences", ["Mechanical barriers: skin, hairs in the nose.", "Chemical barriers: mucus (traps pathogens), stomach acid (kills them).", "Cells: white blood cells. Phagocytes engulf and digest pathogens; lymphocytes make antibodies.", "Vaccination helps the body defend itself."]],
        ["Controlling spread", ["Clean water supply, hygienic food preparation, good personal hygiene, waste disposal and sewage treatment."]],
      ], ["Pathogens: bacteria, viruses, fungi, protoctists.", "Direct (body fluids) or indirect (surfaces, food, animals, air) transmission.", "Barriers: skin, nose hairs, mucus, stomach acid."], [
        ["What is a pathogen?", ["A white blood cell", "A disease causing organism", "An antibody", "A vaccine"], "B", "Bacteria, viruses, fungi and protoctists."],
        ["Which is a chemical barrier?", ["Skin", "Nose hairs", "Stomach acid", "Platelets"], "C", "Acid kills pathogens."],
        ["Which is direct transmission?", ["Touching a contaminated door handle", "Through blood", "Eating contaminated food", "Mosquito bites"], "B", "Body fluids pass directly."],
        ["What do phagocytes do?", ["Make antibodies", "Engulf and digest pathogens", "Carry oxygen", "Make mucus"], "B", "Phagocytosis."],
        ["How does sewage treatment reduce disease?", ["It makes antibodies", "It stops pathogens contaminating drinking water", "It kills mosquitoes", "It vaccinates people"], "B", "Clean water reduces transmission."],
      ]),
      N("Immunity and vaccination", 9, "Antigens and antibodies, active and passive immunity, vaccination and cholera.", [
        ["Active immunity", ["[E] Each pathogen has its own antigens (molecules on its surface). Lymphocytes make antibodies with shapes complementary to those antigens.", "[E] Antibodies bind to antigens, which may directly destroy the pathogen or mark it for destruction by phagocytes.", "[E] Active immunity: defence by making your own antibodies and memory cells, after infection or vaccination. It is long term.", "[E] Memory cells make a faster, larger secondary response if the same pathogen returns."]],
        ["Vaccination", ["A vaccine contains weakened or dead pathogens, or their antigens.", "[E] The antigens stimulate lymphocytes to make antibodies and memory cells, giving long term immunity.", "Vaccinating enough of the population controls the spread of disease (herd immunity)."]],
        ["Passive immunity", ["[E] Passive immunity: short term defence by antibodies made by another individual, such as from mother to baby across the placenta and in breast milk.", "[E] No memory cells are made, so it does not last.", "[E] Some people cannot make enough antibodies, so passive immunity can help."]],
        ["Cholera", ["[E] Cholera is caused by the bacterium Vibrio cholerae, spread in contaminated water.", "[E] It makes a toxin that causes chloride ions to be secreted into the small intestine; water follows by osmosis.", "[E] This causes severe diarrhoea, dehydration and loss of ions from the blood."]],
      ], ["[E] Antibodies are complementary to antigens.", "[E] Active immunity: memory cells, long term. Passive: borrowed antibodies, short term.", "Vaccines contain weakened or dead pathogens or their antigens."], [
        ["What does a vaccine contain?", ["Antibodies", "Weakened or dead pathogens or their antigens", "Antibiotics", "White blood cells"], "B", "Antigens stimulate the immune response."],
        ["Why is a second infection by the same pathogen usually fought off quickly?", ["The pathogen is weaker", "Memory cells make antibodies faster and in larger amounts", "Antibiotics are taken", "Phagocytes remember it"], "B", "The secondary response."],
        ["Antibodies from breast milk give:", ["Active immunity", "Passive immunity", "No immunity", "Lifelong immunity"], "B", "Borrowed antibodies, no memory cells."],
        ["What do antibodies bind to?", ["Antibiotics", "Antigens on the pathogen", "Red blood cells", "Platelets"], "B", "Complementary shapes."],
        ["Why does cholera cause dehydration?", ["It destroys red cells", "A toxin causes chloride ions to be secreted into the gut and water follows by osmosis", "It blocks the kidneys", "It stops drinking"], "B", "Severe diarrhoea follows."],
      ]),
    ] },
    { id: "gas-exchange", name: "Gas exchange in humans", subs: [
      N("Gas exchange surfaces", 8, "Features of gas exchange surfaces, the breathing system and inspired and expired air.", [
        ["Gas exchange surfaces", ["Large surface area (millions of alveoli), thin surface (one cell thick), good blood supply (capillary network) and good ventilation with air.", "These keep diffusion fast and the concentration gradients steep."]],
        ["The breathing system", ["Air passes: nose or mouth → larynx → trachea → bronchi → bronchioles → alveoli, which are surrounded by capillaries.", "C shaped rings of cartilage keep the trachea open.", "Lungs are protected by the ribs; intercostal muscles and the diaphragm cause breathing."]],
        ["Inspired and expired air", ["Inspired air: about 21% oxygen, 0.04% carbon dioxide. Expired air: about 16% oxygen, 4% carbon dioxide, more water vapour, warmer.", "Test with limewater: expired air turns it milky faster.", "Exercise increases the rate and depth of breathing."]],
      ], ["Alveoli: large surface, thin, good blood supply, ventilated.", "Expired air: less O₂ (16%), more CO₂ (4%).", "Cartilage keeps the trachea open."], [
        ["What keeps the trachea open?", ["Muscle", "Rings of cartilage", "Ribs", "Mucus"], "B", "C shaped cartilage rings."],
        ["About how much carbon dioxide is in expired air?", ["0.04%", "4%", "16%", "21%"], "B", "Respiration adds CO₂."],
        ["Why are alveolar walls thin?", ["To be strong", "A short diffusion distance", "To make mucus", "To hold air"], "B", "Gases diffuse quickly."],
        ["Which is the correct order?", ["Bronchi, trachea, alveoli", "Trachea, bronchi, bronchioles, alveoli", "Alveoli, bronchioles, trachea", "Larynx, alveoli, bronchi"], "B", "From the throat inwards."],
        ["What does exercise do to breathing?", ["Slows it", "Increases its rate and depth", "Stops it", "No effect"], "B", "More oxygen is needed."],
      ]),
      N("Breathing", 7, "How the ribs, intercostal muscles and diaphragm move air, and how the airways are protected.", [
        ["Breathing in and out", ["[E] Breathing in: external intercostal muscles contract, ribs move up and out; diaphragm contracts and flattens. The volume of the thorax increases, the pressure falls, and air is drawn in.", "[E] Breathing out: external intercostals relax, ribs move down and in; diaphragm relaxes and domes up. Volume decreases, pressure rises, and air is pushed out.", "[E] Internal intercostal muscles contract during forced breathing out (such as coughing or exercise)."]],
        ["Exercise", ["[E] During exercise, more carbon dioxide is made by respiring muscles. The brain detects the higher CO₂ concentration in the blood and increases the rate and depth of breathing."]],
        ["Protecting the airways", ["[E] Goblet cells make mucus, which traps pathogens and dust.", "[E] Ciliated cells have cilia that waft the mucus up and away from the lungs to the throat to be swallowed.", "Smoking: tar damages cilia and causes cancer; carbon monoxide reduces oxygen carried by the blood; nicotine is addictive."]],
      ], ["[E] In: intercostals contract, ribs up and out, diaphragm flattens.", "[E] More CO₂ in the blood, faster and deeper breathing.", "[E] Mucus traps, cilia sweep."], [
        ["What does the diaphragm do when you breathe in?", ["Relaxes and domes up", "Contracts and flattens", "Stays still", "Moves to the side"], "B", "It increases the volume of the chest."],
        ["Why does air rush into the lungs when breathing in?", ["Pressure in the thorax increases", "Volume increases so pressure falls below the air outside", "The lungs pump it", "Muscles pull air"], "B", "Air moves to lower pressure."],
        ["What do ciliated cells do?", ["Make mucus", "Waft mucus away from the lungs", "Exchange gases", "Make antibodies"], "B", "Cilia sweep mucus to the throat."],
        ["What triggers faster breathing in exercise?", ["Lower oxygen in the lungs only", "Higher CO₂ concentration in the blood detected by the brain", "The heart", "Lactic acid in the lungs"], "B", "The brain responds to CO₂."],
        ["Which part of cigarette smoke reduces oxygen carried by the blood?", ["Tar", "Nicotine", "Carbon monoxide", "Smoke particles"], "C", "It binds to haemoglobin."],
      ]),
    ] },
    { id: "respiration", name: "Respiration", subs: [
      N("Aerobic and anaerobic respiration", 10, "What energy is used for, the equations, oxygen debt and investigating respiration.", [
        ["Respiration", ["Respiration: the chemical reactions in cells that break down nutrient molecules and release energy for metabolism. It happens in all living cells.", "Energy is used for: muscle contraction, protein synthesis, cell division, active transport, growth, passing nerve impulses, and maintaining a constant body temperature.", "Enzymes control respiration, so temperature affects its rate."]],
        ["Aerobic respiration", ["Uses oxygen and releases a large amount of energy. Happens in mitochondria.", "Word equation: glucose + oxygen → carbon dioxide + water.", "[E] Balanced: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O."]],
        ["Anaerobic respiration", ["Without oxygen; releases much less energy per glucose molecule.", "In muscles during vigorous exercise: glucose → lactic acid.", "In yeast: glucose → alcohol (ethanol) + carbon dioxide.", "[E] Balanced: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.", "[E] Lactic acid builds up in muscles and blood, causing an oxygen debt.", "[E] The oxygen debt is removed after exercise: fast heart rate carries lactic acid to the liver, and continued fast, deep breathing supplies oxygen for its aerobic breakdown."]],
        ["Investigating", ["Yeast in sugar solution at different temperatures: count CO₂ bubbles or measure the volume.", "Germinating seeds release heat (thermometer in a vacuum flask) and take in oxygen (respirometer)."]],
      ], ["Aerobic: glucose + oxygen → CO₂ + water, lots of energy.", "Anaerobic: muscles make lactic acid; yeast makes ethanol + CO₂.", "[E] Oxygen debt: lactic acid broken down in the liver."], [
        ["What is produced by anaerobic respiration in yeast?", ["Lactic acid", "Ethanol and carbon dioxide", "Water and oxygen", "Glucose"], "B", "Used in brewing and baking."],
        ["Which releases more energy per glucose?", ["Aerobic", "Anaerobic", "They are equal", "Neither releases energy"], "A", "Glucose is fully broken down aerobically."],
        ["What is lactic acid made from?", ["Fat", "Glucose, without oxygen", "Protein", "Ethanol"], "B", "Anaerobic respiration in muscles."],
        ["Where is lactic acid broken down after exercise?", ["Lungs", "Liver", "Kidneys", "Stomach"], "B", "It is carried there in the blood."],
        ["Which is a use of energy from respiration?", ["Diffusion", "Osmosis", "Muscle contraction", "Transpiration"], "C", "Muscles need energy to contract."],
        ["What is the balanced equation for aerobic respiration?", ["C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂", "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O", "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", "C₆H₁₂O₆ → lactic acid"], "B", "Glucose and oxygen make CO₂ and water."],
      ]),
    ] },
    { id: "excretion", name: "Excretion in humans", subs: [
      N("Excretion and the kidney", 10, "Excretory products, the liver and urea, kidney structure and the nephron.", [
        ["Excretion", ["Excretion: removal of the waste products of metabolism and substances in excess of requirements.", "Carbon dioxide is excreted through the lungs.", "The kidneys excrete urea, excess water and excess ions as urine."]],
        ["The liver", ["Excess amino acids cannot be stored; the liver turns their nitrogen into urea, carried in the blood to the kidneys.", "[E] This is deamination: removal of the nitrogen containing part of amino acids to form urea.", "The liver also breaks down alcohol, drugs and hormones, and converts glucose to glycogen."]],
        ["The kidney", ["Kidney structure: cortex (outer), medulla (inner), and ureter (carries urine to the bladder). The urethra carries urine out of the body.", "[E] Each kidney has about a million nephrons.", "[E] Filtration: high blood pressure in the glomerulus pushes water, urea, glucose and ions into the Bowman's capsule (not blood cells or large proteins).", "[E] Reabsorption: all the glucose, some ions and much of the water are reabsorbed into the blood from the tubule.", "[E] The remaining fluid (water, urea, excess ions) is urine."]],
      ], ["Excretion: CO₂ by the lungs; urea, water and ions by the kidneys.", "[E] Liver: deamination makes urea.", "[E] Nephron: filtration then reabsorption of glucose, ions, water."], [
        ["Where is urea made?", ["Kidney", "Liver", "Bladder", "Lungs"], "B", "From excess amino acids."],
        ["What carries urine from the kidney to the bladder?", ["Urethra", "Ureter", "Renal artery", "Nephron"], "B", "The ureter."],
        ["Which is NOT filtered into the nephron?", ["Water", "Glucose", "Red blood cells", "Urea"], "C", "Cells are too large."],
        ["What is reabsorbed completely in a healthy kidney?", ["Urea", "Glucose", "Water", "Salt"], "B", "All glucose returns to the blood."],
        ["Which organ excretes carbon dioxide?", ["Kidney", "Liver", "Lungs", "Skin"], "C", "Breathed out."],
      ]),
    ] },
    { id: "coordination", name: "Coordination and response", subs: [
      N("The nervous system", 9, "The CNS and PNS, neurones, reflex arcs and synapses.", [
        ["The nervous system", ["Central nervous system (CNS): brain and spinal cord. Peripheral nervous system (PNS): nerves outside the CNS.", "Electrical impulses pass along nerve cells (neurones) for fast, short lived coordination.", "Three neurones: sensory (receptor to CNS), relay (inside the CNS), motor (CNS to effector)."]],
        ["Reflexes", ["A reflex action is a fast, automatic response to a stimulus, which protects the body.", "Reflex arc: stimulus → receptor → sensory neurone → relay neurone (spinal cord) → motor neurone → effector (muscle or gland) → response.", "Example: hand on a hot plate, arm muscle pulls it away."]],
        ["Synapses", ["[E] A synapse is a junction between two neurones.", "[E] An impulse arrives; vesicles release neurotransmitter molecules, which diffuse across the gap and bind to receptor proteins on the next neurone, starting a new impulse.", "[E] Synapses make sure impulses travel in one direction only. Many drugs act on synapses."]],
      ], ["CNS: brain and spinal cord.", "Receptor, sensory, relay, motor, effector.", "[E] Neurotransmitter crosses the synapse; one way only."], [
        ["Which neurone carries impulses from receptors to the CNS?", ["Motor", "Relay", "Sensory", "Effector"], "C", "Sensory neurones."],
        ["What is an effector?", ["A receptor", "A muscle or gland that responds", "A nerve", "The brain"], "B", "Effectors carry out the response."],
        ["Why are reflexes important?", ["They are slow", "They are fast and automatic, protecting the body", "They need thought", "They use hormones"], "B", "No time to think."],
        ["How does an impulse cross a synapse?", ["Electricity jumps the gap", "Neurotransmitter diffuses across and binds to receptors", "Blood carries it", "Hormones carry it"], "B", "Chemical transmission."],
        ["What makes up the CNS?", ["Brain and spinal cord", "All nerves", "Muscles and glands", "Eyes and ears"], "A", "The central nervous system."],
      ]),
      N("The eye", 8, "Parts of the eye, the pupil reflex, accommodation, and rods and cones.", [
        ["The eye", ["Sense organs are groups of receptor cells responding to specific stimuli (light, sound, touch, temperature, chemicals).", "Cornea: refracts light. Iris: controls how much light enters through the pupil. Lens: focuses light onto the retina. Retina: contains light receptors. Optic nerve: carries impulses to the brain. Blind spot: where the optic nerve leaves; no receptors."]],
        ["Pupil reflex", ["Bright light: circular muscles of the iris contract, radial muscles relax, so the pupil gets smaller and less light enters.", "Dim light: radial muscles contract, circular muscles relax, so the pupil widens."]],
        ["Accommodation", ["[E] Near object: ciliary muscles contract, suspensory ligaments slacken, the lens becomes fatter (more convex), refracting light more.", "[E] Distant object: ciliary muscles relax, suspensory ligaments tighten, the lens becomes thinner.", "[E] Rods: sensitive in dim light, black and white. Cones: colour vision in bright light, concentrated in the fovea."]],
      ], ["Cornea refracts; lens focuses; retina detects.", "Bright light: circular muscles contract, pupil smaller.", "[E] Near: ciliary muscles contract, lens fatter."], [
        ["Which part of the eye controls how much light enters?", ["Lens", "Iris", "Retina", "Cornea"], "B", "The iris changes pupil size."],
        ["In bright light, the pupil:", ["Widens", "Gets smaller", "Stays the same", "Closes completely"], "B", "Less light enters."],
        ["What is the blind spot?", ["Where light focuses", "Where the optic nerve leaves, with no receptors", "The lens", "The fovea"], "B", "No rods or cones there."],
        ["To focus on a near object, the lens becomes:", ["Thinner", "Fatter", "Unchanged", "Opaque"], "B", "Ciliary muscles contract."],
        ["Which cells give colour vision?", ["Rods", "Cones", "Neurones", "Ciliary cells"], "B", "Cones work in bright light."],
      ]),
      N("Hormones and homeostasis", 10, "Hormones and glands, comparing nerves and hormones, blood glucose and temperature control.", [
        ["Hormones", ["A hormone is a chemical substance made by a gland and carried by the blood, which alters the activity of target organs.", "Adrenaline (adrenal glands): the 'fight or flight' hormone; increases pulse rate, breathing rate and pupil size.", "[E] Adrenaline also raises blood glucose concentration.", "Insulin (pancreas): lowers blood glucose. Testosterone (testes) and oestrogen (ovaries): sex hormones.", "Nervous control is fast, short lived and precise; hormonal control is slower, longer lasting and widespread."]],
        ["Homeostasis", ["Homeostasis: the maintenance of a constant internal environment.", "Insulin decreases blood glucose concentration, by making the liver and muscles take up glucose and store it as glycogen.", "[E] Negative feedback: a change from the set point triggers a response that reverses it.", "[E] Glucagon (pancreas) raises blood glucose by converting glycogen back to glucose.", "[E] Type 1 diabetes: the pancreas makes no insulin. Treated with insulin injections, a controlled diet and monitoring blood glucose."]],
        ["Temperature control", ["The skin contains sweat glands, hair erector muscles, blood vessels, receptors and fatty tissue (insulation).", "Too hot: sweating (evaporation cools the skin).", "[E] Vasodilation: arterioles to the skin widen, more blood flows near the surface, more heat is lost.", "Too cold: shivering (muscles release heat) and hairs stand up.", "[E] Vasoconstriction: arterioles to the skin narrow, less blood flows near the surface, less heat is lost.", "[E] The brain (hypothalamus) monitors blood temperature and coordinates the responses."]],
      ], ["Adrenaline: fight or flight. Insulin lowers blood glucose.", "[E] Glucagon raises it; negative feedback.", "Hot: sweat, [E] vasodilation. Cold: shiver, [E] vasoconstriction."], [
        ["Which hormone lowers blood glucose?", ["Adrenaline", "Insulin", "Glucagon", "Oestrogen"], "B", "Insulin from the pancreas."],
        ["Which gland makes adrenaline?", ["Pancreas", "Adrenal gland", "Testes", "Thyroid"], "B", "The adrenal glands above the kidneys."],
        ["How does sweating cool the body?", ["Sweat is cold", "Evaporation of sweat removes heat from the skin", "It reduces blood flow", "It stops shivering"], "B", "Evaporation takes heat."],
        ["What is vasodilation?", ["Narrowing of arterioles in the skin", "Widening of arterioles in the skin so more heat is lost", "Shivering", "Hair standing up"], "B", "More blood near the surface."],
        ["Compared with nerves, hormones act:", ["Faster and shorter", "Slower and longer lasting", "Only in the brain", "Electrically"], "B", "They travel in the blood."],
        ["How is type 1 diabetes treated?", ["Antibiotics", "Insulin injections and a controlled diet", "Glucagon only", "Surgery"], "B", "The body makes no insulin."],
      ]),
      N("Tropic responses", 6, "Gravitropism, phototropism and the role of auxin.", [
        ["Tropisms", ["Gravitropism: a response in which parts of a plant grow towards or away from gravity. Roots grow down (positive), shoots grow up (negative).", "Phototropism: a response in which parts of a plant grow towards or away from the direction of light. Shoots grow towards light (positive).", "Investigate with seedlings in a box with light from one side, or on a clinostat."]],
        ["Auxin", ["[E] Auxin is a plant hormone made in the shoot tip; it diffuses through the plant.", "[E] Light from one side makes auxin collect on the shaded side.", "[E] Auxin stimulates cell elongation, so the shaded side grows faster and the shoot bends towards the light."]],
      ], ["Shoots: towards light, away from gravity.", "Roots: towards gravity.", "[E] Auxin on the shaded side makes cells elongate."], [
        ["What is phototropism?", ["Growth towards or away from gravity", "Growth towards or away from light", "Opening of flowers", "Water uptake"], "B", "Photo means light."],
        ["How do roots respond to gravity?", ["Grow away from it", "Grow towards it", "No response", "Grow sideways"], "B", "Positive gravitropism."],
        ["Where is auxin made?", ["In the roots", "In the shoot tip", "In the leaves only", "In the flowers"], "B", "It then diffuses down."],
        ["Why does a shoot bend towards light?", ["Auxin collects on the shaded side, making those cells elongate", "Cells on the lit side grow faster", "Light pulls it", "Auxin is destroyed in the shade"], "A", "Uneven elongation."],
        ["Why is phototropism useful to a plant?", ["It gets more water", "It gets more light for photosynthesis", "It avoids gravity", "It attracts insects"], "B", "More light, more food made."],
      ]),
    ] },
    { id: "drugs", name: "Drugs", subs: [
      N("Drugs and antibiotics", 7, "What drugs are, antibiotics, resistance, and the effects of smoking.", [
        ["Drugs", ["A drug is any substance taken into the body that modifies or affects chemical reactions in the body.", "Antibiotics are used to treat bacterial infections. They kill bacteria or stop them growing.", "Antibiotics do not affect viruses, because viruses are not living cells and do not have the structures that antibiotics target."]],
        ["Antibiotic resistance", ["[E] Some bacteria are resistant to antibiotics, which reduces how well antibiotics work. MRSA is an example.", "[E] Random mutations give some bacteria resistance; when antibiotics are used, these survive and reproduce (natural selection).", "[E] Reduce resistance by only using antibiotics when essential and completing the course."]],
        ["Smoking", ["Tar: causes lung cancer and COPD (chronic obstructive pulmonary disease), damages cilia.", "Nicotine: addictive, raises heart rate and blood pressure, increasing heart disease risk.", "Carbon monoxide: reduces the oxygen carried by haemoglobin."]],
      ], ["Antibiotics kill bacteria, not viruses.", "[E] Overuse leads to resistant bacteria (MRSA).", "Tar: cancer. Nicotine: addictive. CO: less oxygen carried."], [
        ["Why don't antibiotics work against the flu?", ["Flu is a bacterium", "Flu is caused by a virus, which antibiotics do not affect", "Flu is too strong", "Antibiotics only treat fungi"], "B", "Viruses are not cells."],
        ["What is a drug?", ["Only medicines", "Any substance that modifies chemical reactions in the body", "Only illegal substances", "Only antibiotics"], "B", "Drugs include medicines and others."],
        ["How can we slow antibiotic resistance?", ["Use antibiotics for every cold", "Only use antibiotics when essential", "Stop courses early", "Share antibiotics"], "B", "Less use, less selection."],
        ["Which part of cigarette smoke causes cancer?", ["Nicotine", "Carbon monoxide", "Tar", "Oxygen"], "C", "Tar contains carcinogens."],
        ["What is MRSA?", ["A virus", "An antibiotic resistant bacterium", "A vaccine", "A drug"], "B", "Resistant to many antibiotics."],
      ]),
    ] },
    { id: "reproduction", name: "Reproduction", subs: [
      N("Plant reproduction", 10, "Asexual and sexual reproduction, flower structure, pollination, fertilisation and germination.", [
        ["Asexual and sexual reproduction", ["Asexual: one parent, offspring genetically identical (clones). Examples: runners, bulbs, tubers.", "Sexual: fusion of the nuclei of two gametes to form a zygote; offspring are genetically different.", "[E] Asexual is fast and needs only one parent, but there is no variation to adapt to change. Sexual gives variation but is slower and needs two parents (or pollination).", "[E] Gametes are haploid; the zygote is diploid."]],
        ["Flowers", ["Sepals protect the bud; petals attract insects.", "Stamens (male): anther (makes pollen) on a filament.", "Carpel (female): stigma (catches pollen), style, ovary containing ovules.", "Insect pollinated: large bright petals, scent, nectar, sticky stigma inside, anthers inside, small sticky pollen.", "Wind pollinated: small dull petals, no scent, feathery stigmas and anthers hanging outside, lots of light, smooth pollen."]],
        ["Pollination and fertilisation", ["Pollination: the transfer of pollen from an anther to a stigma.", "Self pollination: within the same flower or plant. Cross pollination: between plants of the same species.", "[E] Cross pollination gives more variation; self pollination needs no pollinator.", "Fertilisation: a pollen tube grows down the style to the ovule; the nuclei fuse. The ovule becomes a seed and the ovary becomes the fruit.", "Germination needs water, oxygen and a suitable temperature."]],
      ], ["Asexual: one parent, clones. Sexual: gametes fuse, variation.", "Stamen: anther, filament. Carpel: stigma, style, ovary.", "Germination needs water, oxygen, warmth."], [
        ["Which part of a flower makes pollen?", ["Stigma", "Anther", "Ovary", "Sepal"], "B", "Anthers sit on filaments."],
        ["What is pollination?", ["Fusion of gametes", "Transfer of pollen from anther to stigma", "Seed dispersal", "Germination"], "B", "Fertilisation comes after."],
        ["Which is a feature of a wind pollinated flower?", ["Large bright petals", "Feathery stigma outside the flower", "Nectar", "Sticky pollen"], "B", "To catch pollen from the air."],
        ["What does the ovule become after fertilisation?", ["The fruit", "The seed", "The flower", "The stem"], "B", "The ovary becomes the fruit."],
        ["Which is NOT needed for germination?", ["Water", "Oxygen", "Light", "Warmth"], "C", "Seeds can germinate in the dark."],
        ["What is an advantage of asexual reproduction?", ["Variation", "Fast, with only one parent needed", "Adapts to change", "Needs pollinators"], "B", "Good in a stable environment."],
      ]),
      N("Human reproduction", 10, "Male and female systems, gametes, fertilisation, pregnancy and the placenta.", [
        ["Reproductive systems", ["Male: testes (make sperm and testosterone), scrotum, sperm ducts, prostate gland and seminal vesicles (add fluid), urethra, penis.", "Female: ovaries (release eggs), oviducts (where fertilisation happens), uterus (where the embryo develops), cervix, vagina."]],
        ["Gametes and fertilisation", ["Sperm: flagellum to swim, many mitochondria for energy, acrosome with enzymes to digest the egg's jelly coat.", "Egg: large, with energy stores in the cytoplasm and a jelly coat that changes after fertilisation so only one sperm enters.", "[E] Sperm are much smaller and more numerous; eggs are larger and fewer; sperm move, eggs do not.", "Fertilisation: a sperm nucleus fuses with an egg nucleus to form a zygote, in the oviduct."]],
        ["Pregnancy", ["The zygote divides into a ball of cells (embryo), which implants in the uterus lining and becomes a fetus.", "Umbilical cord: links the fetus to the placenta. Placenta: exchanges substances with the mother's blood. Amniotic sac and fluid: protect the fetus.", "[E] The placenta passes oxygen, glucose and nutrients to the fetus, and carbon dioxide and urea to the mother, without the bloods mixing. It is a barrier to many pathogens, but some (such as rubella) and toxins (nicotine, alcohol) can cross."]],
      ], ["Testes: sperm and testosterone. Ovaries: eggs.", "Fertilisation in the oviduct; development in the uterus.", "[E] Placenta: exchange without mixing blood."], [
        ["Where does fertilisation happen?", ["Uterus", "Ovary", "Oviduct", "Vagina"], "C", "In the oviduct (fallopian tube)."],
        ["What is the acrosome of a sperm for?", ["Swimming", "Enzymes to digest the egg's jelly coat", "Energy", "Carrying genes"], "B", "It lets the sperm enter."],
        ["What protects the fetus from bumps?", ["Placenta", "Amniotic fluid", "Umbilical cord", "Cervix"], "B", "It cushions the fetus."],
        ["Which passes from the fetus to the mother?", ["Oxygen", "Glucose", "Urea", "Antibodies"], "C", "Waste goes to the mother."],
        ["Why do sperm have many mitochondria?", ["To make enzymes", "To release energy for swimming", "To store food", "To carry DNA"], "B", "Respiration powers the flagellum."],
      ]),
      N("Sex hormones, the menstrual cycle and STIs", 9, "Puberty, the menstrual cycle and its hormones, and sexually transmitted infections.", [
        ["Puberty", ["Testosterone (testes) and oestrogen (ovaries) cause secondary sexual characteristics at puberty.", "Boys: voice deepens, body hair, muscles develop, sperm production. Girls: breasts develop, body hair, hips widen, periods start."]],
        ["The menstrual cycle", ["About 28 days. Days 1 to 5: menstruation (the uterus lining breaks down).", "The lining then thickens again. Ovulation (an egg is released) happens around day 14.", "If no fertilisation happens, the lining breaks down again.", "[E] FSH (pituitary): makes an egg mature in a follicle and stimulates oestrogen. Oestrogen (ovaries): builds up the uterus lining.", "[E] LH (pituitary): triggers ovulation. Progesterone (corpus luteum): maintains the lining; when it falls, menstruation starts."]],
        ["Sexually transmitted infections", ["An STI is passed on through sexual contact. HIV is an example.", "HIV spreads through body fluids: unprotected sex, sharing needles, mother to baby. It may lead to AIDS.", "[E] HIV infects and destroys lymphocytes, weakening the immune system.", "Control: condoms, testing and treatment, not sharing needles."]],
      ], ["Testosterone and oestrogen cause puberty changes.", "Menstruation days 1 to 5; ovulation about day 14.", "[E] FSH, oestrogen, LH, progesterone. HIV destroys lymphocytes."], [
        ["About when does ovulation happen in a 28 day cycle?", ["Day 1", "Day 5", "Day 14", "Day 28"], "C", "Around the middle."],
        ["What causes the uterus lining to build up?", ["Testosterone", "Oestrogen", "Insulin", "Adrenaline"], "B", "Oestrogen thickens it."],
        ["Which hormone triggers ovulation?", ["FSH", "LH", "Progesterone", "Insulin"], "B", "A surge of LH."],
        ["How is HIV spread?", ["Coughing", "Body fluids, such as unprotected sex or shared needles", "Shaking hands", "Air"], "B", "It is transmitted directly."],
        ["Which cells does HIV destroy?", ["Red blood cells", "Lymphocytes", "Platelets", "Nerve cells"], "B", "So the immune system weakens."],
      ]),
    ] },
    { id: "inheritance", name: "Inheritance", subs: [
      N("Chromosomes, genes and cell division", 11, "Chromosomes and genes, sex determination, protein synthesis, mitosis and meiosis.", [
        ["Chromosomes and genes", ["Inheritance: the transmission of genetic information from generation to generation.", "Chromosome: a thread of DNA carrying genetic information in the form of genes. Gene: a length of DNA that codes for a protein. Allele: an alternative form of a gene.", "Sex: females have XX chromosomes, males XY. Each child has a 50% chance of being male or female.", "[E] Diploid nucleus: two sets of chromosomes (46 in humans). Haploid nucleus: one set (23 in gametes)."]],
        ["Protein synthesis", ["[E] The sequence of bases in a gene determines the sequence of amino acids in a protein, which decides its shape and function (such as an enzyme's active site).", "[E] The DNA stays in the nucleus. A copy called mRNA carries the code to a ribosome in the cytoplasm.", "[E] The ribosome joins amino acids in the order coded by the mRNA.", "[E] All body cells contain the same genes, but each cell only makes the proteins it needs (genes are switched on or off)."]],
        ["Mitosis", ["Mitosis: nuclear division giving rise to genetically identical cells.", "Used for growth, repair of damaged tissues, replacement of cells, and asexual reproduction.", "[E] Chromosomes are copied before mitosis; the copies separate so each new cell gets a full set.", "[E] Stem cells are unspecialised cells that divide by mitosis to make cells that can become specialised."]],
        ["Meiosis", ["Meiosis: reduction division, where the chromosome number halves from diploid to haploid, making genetically different cells.", "It makes gametes (sperm, eggs, pollen nuclei, ovules)."]],
      ], ["Gene: DNA coding for a protein. Allele: a version of a gene.", "Mitosis: identical cells for growth and repair. Meiosis: gametes, varied.", "[E] DNA → mRNA → ribosome → protein."], [
        ["What is an allele?", ["A chromosome", "An alternative form of a gene", "A protein", "A gamete"], "B", "Such as alleles for blue or brown eyes."],
        ["What are the sex chromosomes of a male?", ["XX", "XY", "YY", "X only"], "B", "Males are XY."],
        ["Mitosis produces cells that are:", ["Genetically different", "Genetically identical", "Haploid gametes", "Without nuclei"], "B", "Used for growth and repair."],
        ["What is meiosis used for?", ["Growth", "Repair", "Making gametes", "Asexual reproduction"], "C", "It halves the chromosome number."],
        ["What carries the genetic code to the ribosome?", ["DNA", "mRNA", "Protein", "A chromosome"], "B", "DNA stays in the nucleus."],
        ["How many chromosomes are in a human gamete?", ["23", "46", "92", "12"], "A", "Gametes are haploid."],
      ]),
      N("Monohybrid inheritance", 11, "Genotype and phenotype, Punnett squares, pedigrees, codominance and sex linkage.", [
        ["Key words", ["Genotype: the genetic make-up of an organism, such as Tt. Phenotype: the observable features, such as tall.", "Homozygous: two identical alleles (TT or tt), pure breeding. Heterozygous: two different alleles (Tt), not pure breeding.", "Dominant allele: expressed if present (capital letter). Recessive allele: only expressed when there is no dominant allele (lower case)."]],
        ["Monohybrid crosses", ["Use a Punnett square: the gametes of one parent along the top, the other down the side.", "Tt x Tt gives TT, Tt, Tt, tt: a 3 : 1 ratio of dominant to recessive phenotypes.", "Tt x tt gives a 1 : 1 ratio.", "Pedigree diagrams show how a feature is inherited through a family.", "[E] Test cross: cross an organism showing the dominant feature with a homozygous recessive. If any offspring show the recessive feature, the unknown parent is heterozygous."]],
        ["Codominance and sex linkage", ["[E] Codominance: both alleles are expressed in a heterozygote. Example: ABO blood groups: Iᴬ and Iᴮ are codominant, Iᴼ is recessive. IᴬIᴮ gives group AB.", "[E] A sex linked characteristic is controlled by a gene on a sex chromosome, usually the X. Example: red-green colour blindness. Males (XY) are more often affected because they only have one X."]],
      ], ["Genotype: alleles. Phenotype: what you see.", "Tt x Tt: 3 : 1. Tt x tt: 1 : 1.", "[E] Codominance: ABO groups. Sex linked: colour blindness."], [
        ["Two heterozygous tall plants (Tt) are crossed. What ratio of tall to short is expected?", ["1 : 1", "3 : 1", "1 : 3", "All tall"], "B", "TT, Tt, Tt are tall; tt is short."],
        ["What is a phenotype?", ["The alleles", "The observable features", "The chromosomes", "The gametes"], "B", "What you can see or measure."],
        ["What does homozygous mean?", ["Two different alleles", "Two identical alleles", "Only one allele", "No alleles"], "B", "Such as TT or tt."],
        ["A person has blood group AB. What is their genotype?", ["IᴬIᴬ", "IᴬIᴼ", "IᴬIᴮ", "IᴼIᴼ"], "C", "Codominance: both expressed."],
        ["Why are men more likely to be red-green colour blind?", ["They have two X chromosomes", "They have only one X, so one recessive allele is enough", "It is on the Y chromosome", "Women are immune"], "B", "Sex linked on the X."],
        ["Tt x tt: what fraction of offspring show the recessive feature?", ["0", "1/4", "1/2", "3/4"], "C", "Half are tt."],
      ]),
    ] },
    { id: "variation", name: "Variation and selection", subs: [
      N("Variation and mutation", 8, "Continuous and discontinuous variation, causes of variation, and mutation.", [
        ["Variation", ["Variation: differences between individuals of the same species.", "Continuous variation: a range of values between two extremes, such as height and mass; shown on a histogram. Caused by genes and the environment.", "Discontinuous variation: a limited number of distinct categories, such as ABO blood groups or seed shape; shown on a bar chart. Usually caused by genes alone."]],
        ["Mutation", ["A mutation is a genetic change. It is the way new alleles form.", "The rate of mutation is increased by ionising radiation and some chemicals.", "[E] A gene mutation is a random change in the base sequence of DNA.", "[E] Sources of genetic variation: mutation, meiosis, random mating and random fertilisation.", "[E] Sickle cell anaemia: a mutation in the haemoglobin gene. Heterozygous carriers are more resistant to malaria, so the allele is common where malaria is found."]],
      ], ["Continuous: a range (height). Discontinuous: categories (blood group).", "Mutation: a genetic change; more with radiation and chemicals.", "[E] Variation from mutation, meiosis, random fertilisation."], [
        ["Which is discontinuous variation?", ["Height", "Mass", "Blood group", "Hand span"], "C", "Distinct categories."],
        ["What increases the rate of mutation?", ["Exercise", "Ionising radiation", "Sleep", "Water"], "B", "Radiation damages DNA."],
        ["What is a mutation?", ["A new species", "A genetic change", "A disease", "A hormone"], "B", "It can make new alleles."],
        ["Continuous variation is usually caused by:", ["Genes only", "Genes and the environment", "The environment only", "Mutation only"], "B", "Height depends on genes and diet."],
        ["Why is the sickle cell allele common in malaria areas?", ["It causes malaria", "Carriers are more resistant to malaria", "Mosquitoes avoid it", "It is dominant"], "B", "Heterozygotes survive better."],
      ]),
      N("Adaptation and selection", 10, "Adaptive features, natural selection, antibiotic resistance and selective breeding.", [
        ["Adaptive features", ["An adaptive feature is an inherited feature that helps an organism to survive and reproduce in its environment.", "[E] Xerophytes (dry places, such as cacti): thick waxy cuticle, few or sunken stomata, leaves as spines, deep or wide roots, water storage tissue.", "[E] Hydrophytes (water plants, such as water lilies): stomata on the upper surface, air spaces for floating, little or no cuticle or xylem."]],
        ["Natural selection", ["Individuals in a population vary. More offspring are produced than the environment can support, so there is competition (a struggle for survival).", "Those with better adapted features are more likely to survive and reproduce, passing on their alleles.", "Over many generations, the advantageous alleles become more common.", "[E] This is evolution: the change in adaptive features of a population over time.", "[E] Antibiotic resistance: a random mutation makes a bacterium resistant; when antibiotics are used, resistant bacteria survive and reproduce, so the resistant population grows."]],
        ["Selective breeding", ["Humans choose individuals with desirable features and breed them together, over many generations.", "Examples: cattle for more milk, crops for disease resistance or higher yield, dogs for temperament.", "[E] Natural selection is driven by the environment; selective breeding by humans for useful features, and it is faster."]],
      ], ["More offspring than can survive; best adapted survive and breed.", "[E] Resistant bacteria spread through natural selection.", "Selective breeding: humans choose the parents."], [
        ["What drives natural selection?", ["Humans", "Competition and the environment", "Mutation alone", "Vaccination"], "B", "The best adapted survive."],
        ["Which is an example of selective breeding?", ["Bacteria becoming resistant", "Breeding cows that give the most milk", "Peppered moths changing colour", "A cactus growing spines"], "B", "Humans choose the parents."],
        ["What adaptation helps a cactus reduce water loss?", ["Large thin leaves", "Leaves reduced to spines", "Stomata on top", "No roots"], "B", "Less surface for transpiration."],
        ["Why are the best adapted individuals more likely to pass on their alleles?", ["They are bigger", "They are more likely to survive and reproduce", "They mutate more", "They live longer always"], "B", "Survivors breed."],
        ["How do populations of resistant bacteria increase?", ["Antibiotics cause mutations", "Resistant bacteria survive antibiotics and reproduce", "Bacteria learn resistance", "Viruses help"], "B", "Natural selection."],
      ]),
    ] },
    { id: "environment", name: "Organisms and their environment", subs: [
      N("Energy flow and food chains", 9, "Food chains and webs, trophic levels, pyramids and energy loss.", [
        ["Food chains and webs", ["The Sun is the principal source of energy for biological systems.", "Food chain: shows the transfer of energy from one organism to the next, beginning with a producer.", "Food web: a network of interconnected food chains.", "Producer: makes its own organic nutrients, usually by photosynthesis. Consumers get energy by feeding on other organisms: herbivores eat plants, carnivores eat animals.", "Decomposers get energy from dead or waste organic material.", "Trophic level: the position of an organism in a food chain (producer, primary, secondary, tertiary consumer)."]],
        ["Pyramids and energy", ["Pyramid of numbers: the number of organisms at each level (can be odd shapes, such as one tree supporting many insects).", "[E] Pyramid of biomass: the dry mass at each level. Pyramid of energy: always a true pyramid.", "Energy is lost between levels as heat from respiration, in waste (faeces, urine), and in parts not eaten. Only about 10% passes on.", "[E] So food chains rarely have more than five trophic levels, and it is more energy efficient for humans to eat plants than animals that ate plants."]],
      ], ["The Sun is the source; arrows show energy flow.", "About 10% of energy passes to the next level.", "[E] Shorter chains waste less energy."], [
        ["What does the arrow in a food chain show?", ["What eats what in reverse", "The direction of energy transfer", "Size", "Population"], "B", "From the eaten to the eater."],
        ["Which organisms start every food chain?", ["Herbivores", "Producers", "Decomposers", "Carnivores"], "B", "Producers make their own food."],
        ["How is most energy lost between trophic levels?", ["As light", "As heat from respiration", "As sound", "It is not lost"], "B", "Also in waste and uneaten parts."],
        ["What is a decomposer?", ["A producer", "An organism that gets energy from dead or waste material", "A carnivore", "A plant"], "B", "Such as bacteria and fungi."],
        ["Why is eating plants more efficient for humans?", ["Plants taste better", "Less energy is lost, as there are fewer trophic levels", "Plants have more protein", "Animals have no energy"], "B", "Each level loses most of its energy."],
      ]),
      N("Nutrient cycles", 9, "The carbon cycle, the water cycle and the nitrogen cycle.", [
        ["The carbon cycle", ["Photosynthesis removes CO₂ from the air into plants.", "Feeding passes carbon compounds along food chains.", "Respiration by plants, animals and decomposers returns CO₂ to the air.", "Decomposition of dead organisms and waste releases CO₂.", "Fossilisation forms fossil fuels; combustion returns CO₂.", "Deforestation and burning fossil fuels increase CO₂ in the atmosphere."]],
        ["The water cycle", ["Evaporation from seas and land, and transpiration from plants, put water vapour in the air.", "It cools and condenses into clouds, then falls as precipitation.", "Water runs back to the sea as surface run off and through rocks."]],
        ["The nitrogen cycle", ["[E] Nitrogen fixation: nitrogen gas is converted to nitrogen compounds by nitrogen fixing bacteria (in soil and root nodules of legumes) and by lightning.", "[E] Plants absorb nitrate ions and use them to make amino acids and proteins; animals eat them.", "[E] Decomposers break down proteins in dead organisms and waste into ammonium ions (deamination).", "[E] Nitrifying bacteria convert ammonium ions to nitrite then nitrate ions.", "[E] Denitrifying bacteria convert nitrate ions back to nitrogen gas (in waterlogged soil)."]],
      ], ["Carbon: photosynthesis takes CO₂ in; respiration and combustion release it.", "Water: evaporation, transpiration, condensation, precipitation.", "[E] Nitrogen: fixing, nitrifying, denitrifying bacteria."], [
        ["Which process removes carbon dioxide from the air?", ["Respiration", "Combustion", "Photosynthesis", "Decomposition"], "C", "Plants take CO₂ in."],
        ["How does deforestation increase CO₂?", ["Trees release oxygen", "Fewer trees photosynthesise, and burning releases CO₂", "Trees absorb nitrogen", "It does not"], "B", "Less removal and more release."],
        ["What is transpiration in the water cycle?", ["Rain", "Water vapour lost from plants", "Water soaking into soil", "Clouds forming"], "B", "From leaves."],
        ["What do nitrifying bacteria do?", ["Turn nitrogen gas into ammonium", "Turn ammonium into nitrate", "Turn nitrate into nitrogen gas", "Make proteins"], "B", "Ammonium to nitrite to nitrate."],
        ["Where are nitrogen fixing bacteria found?", ["In leaves", "In root nodules of legumes and in soil", "In animal guts only", "In the air"], "B", "Such as peas and beans."],
      ]),
      N("Populations", 7, "What affects population size, the sigmoid growth curve, and ecological words.", [
        ["Populations", ["Population: a group of organisms of one species, living in the same area at the same time.", "Factors affecting growth: food supply, competition, predation and disease.", "[E] Community: all the populations of different species in an ecosystem. Ecosystem: a unit containing the community and its environment, interacting together."]],
        ["The sigmoid curve", ["A population in a new environment with limited resources follows an S shaped curve.", "Lag phase: slow growth while organisms adjust. Exponential (log) phase: rapid growth with plenty of resources.", "Stationary phase: births equal deaths, as resources become limiting. Death phase: deaths exceed births as resources run out or waste builds up.", "Human population growth has been rapid because of better food supply, medicine and hygiene."]],
      ], ["Population: one species, one area, one time.", "Lag, exponential, stationary, death.", "Limited by food, competition, predation and disease."], [
        ["What is a population?", ["All species in an area", "Organisms of one species in an area at the same time", "The environment", "A food web"], "B", "One species."],
        ["In which phase do births equal deaths?", ["Lag", "Exponential", "Stationary", "Death"], "C", "The population levels off."],
        ["What causes the exponential phase?", ["Lack of food", "Plenty of resources and few limiting factors", "Disease", "Predation"], "B", "Rapid reproduction."],
        ["Which factor does NOT limit population growth?", ["Food supply", "Predation", "Disease", "Unlimited space"], "D", "Unlimited space would not limit growth."],
        ["What is an ecosystem?", ["One species", "A community and its environment interacting", "A food chain", "A population"], "B", "Living and non living parts together."],
      ]),
    ] },
    { id: "human-influences", name: "Human influences on ecosystems", subs: [
      N("Food supply and habitat destruction", 8, "How agriculture increases food supply, its problems, and the effects of habitat destruction.", [
        ["Food supply", ["Modern technology has increased food production: agricultural machinery, chemical fertilisers, insecticides, herbicides and selective breeding.", "Monocultures (one crop over a large area) and intensive livestock farming cause problems: loss of biodiversity, pests and disease spread easily, and pollution.", "[E] World food supply problems: drought, flooding, increasing population, poverty, and unequal distribution."]],
        ["Habitat destruction", ["Reasons: clearing land for crops, livestock and housing; extracting natural resources; marine pollution.", "Deforestation causes: extinction of species, loss of soil (erosion), flooding, and increased CO₂ in the atmosphere.", "Habitat destruction reduces biodiversity."]],
      ], ["Fertilisers, pesticides and machinery raise yields.", "Monocultures reduce biodiversity.", "Deforestation: extinction, soil loss, flooding, more CO₂."], [
        ["What is a monoculture?", ["Many crops mixed", "One crop grown over a large area", "Organic farming", "Fish farming"], "B", "Large single crop fields."],
        ["Which is an effect of deforestation?", ["More oxygen", "Soil erosion and flooding", "More biodiversity", "Less CO₂"], "B", "Roots no longer hold the soil."],
        ["How do herbicides increase crop yield?", ["Kill insects", "Kill weeds that compete with the crop", "Add nutrients", "Water the crop"], "B", "Less competition."],
        ["Why does deforestation increase CO₂?", ["Trees release CO₂", "Less photosynthesis and burning trees releases CO₂", "Soil absorbs it", "It does not"], "B", "Both effects."],
        ["What is a problem with intensive livestock farming?", ["Too little meat", "Disease spreads easily and pollution", "More biodiversity", "Less food"], "B", "Animals are crowded together."],
      ]),
      N("Pollution", 9, "Pollution of land, water and air: eutrophication, plastics, hormones and greenhouse gases.", [
        ["Water pollution", ["Untreated sewage and excess fertiliser pollute rivers.", "[E] Eutrophication: fertiliser or sewage run off adds nitrates and phosphates; algae grow rapidly (algal bloom) and block light; plants below die; decomposers (bacteria) break down the dead material and use up the oxygen in aerobic respiration; fish and other organisms die from lack of oxygen.", "[E] Female contraceptive hormones in water cause feminisation of male fish and lower their sperm count."]],
        ["Plastics", ["Non biodegradable plastics damage aquatic and land ecosystems: animals get tangled or eat them, and they last for hundreds of years in landfill."]],
        ["Air pollution", ["Carbon dioxide (combustion) and methane (cattle, rice fields, landfill) are greenhouse gases.", "An enhanced greenhouse effect causes climate change: rising temperatures, melting ice, rising sea levels, extreme weather."]],
      ], ["[E] Eutrophication: algae bloom, plants die, bacteria use up oxygen, fish die.", "Plastics are non biodegradable.", "CO₂ and methane cause climate change."], [
        ["In eutrophication, why do fish die?", ["Algae poison them", "Bacteria decomposing dead plants use up the oxygen", "Too much light", "Nitrates kill them"], "B", "Aerobic decomposers use oxygen."],
        ["Which gas from cattle is a greenhouse gas?", ["Oxygen", "Methane", "Nitrogen", "Hydrogen"], "B", "Methane traps heat."],
        ["Why are plastics harmful in the sea?", ["They dissolve", "They are non biodegradable and animals eat or get tangled in them", "They add oxygen", "They are food"], "B", "They last for centuries."],
        ["What effect do contraceptive hormones in water have on fish?", ["They grow larger", "Feminisation of males and lower sperm counts", "They die instantly", "No effect"], "B", "Reproduction is disrupted."],
        ["What adds excess nitrates to rivers?", ["Trees", "Fertiliser run off", "Rain only", "Fish"], "B", "From farmland."],
      ]),
      N("Conservation", 9, "Sustainable resources, conserving forests and fish, endangered species and sewage treatment.", [
        ["Sustainable resources", ["A sustainable resource is one that is produced as fast as it is used, so it does not run out.", "Forests: replanting, education, legal protection. Fish stocks: quotas, controlling net size (so young fish escape), closed seasons, protected areas, education.", "Some resources, such as fossil fuels, cannot be replaced."]],
        ["Endangered species", ["Species become endangered or extinct through climate change, habitat destruction, hunting, overharvesting, pollution and introduced species.", "Conservation methods: monitoring and protecting habitats, education, captive breeding programmes, seed banks.", "Reasons to conserve: reduce extinction, protect vulnerable ecosystems, maintain ecosystem functions (nutrient cycling, resources such as food and drugs).", "[E] Captive breeding may use artificial insemination (AI) and in vitro fertilisation (IVF). [E] A small population loses genetic variation, making it more vulnerable to disease and change."]],
        ["Sewage treatment", ["Sewage is treated to make the water safe to return to the environment or for humans to use: solids are removed, bacteria break down organic matter, and the water may be disinfected."]],
      ], ["Sustainable: produced as fast as it is used.", "Fish: quotas, net size, closed seasons.", "Conserve with captive breeding, seed banks and protected habitats."], [
        ["What is a sustainable resource?", ["One that never changes", "One produced as fast as it is used", "Fossil fuels", "Any resource"], "B", "It will not run out."],
        ["Why do fishing nets have a minimum mesh size?", ["To catch more", "So young fish escape and can breed", "To save money", "To stop dolphins"], "B", "Protects future stocks."],
        ["What is a seed bank?", ["A place to buy seeds", "A store of seeds to conserve plant species", "A type of soil", "A bank for farmers"], "B", "Preserves genetic diversity."],
        ["Which is a reason species become endangered?", ["Captive breeding", "Habitat destruction", "Seed banks", "Quotas"], "B", "Loss of where they live."],
        ["Why is low genetic variation a problem for small populations?", ["They grow too fast", "They are less able to adapt to disease and change", "They look the same", "They cannot eat"], "B", "Less variation, less resilience."],
      ]),
    ] },
    { id: "biotech", name: "Biotechnology and genetic modification", subs: [
      N("Biotechnology", 9, "Why bacteria are useful, yeast, enzymes in industry, and fermenters.", [
        ["Microorganisms", ["Bacteria are useful in biotechnology and genetic modification because they reproduce rapidly and have no ethical concerns over their use; they also contain plasmids and share the same genetic code as other organisms."]],
        ["Uses", ["Yeast: anaerobic respiration makes ethanol for biofuels, and carbon dioxide to make bread rise.", "Pectinase: breaks down cell walls to increase the volume of fruit juice and make it clearer.", "Biological washing powders contain enzymes (proteases, lipases) that remove stains at low temperatures.", "[E] Lactase makes lactose free milk, for people who are lactose intolerant."]],
        ["Fermenters", ["[E] Large scale production uses fermenters, for example to make insulin, penicillin and mycoprotein.", "[E] Conditions are controlled: temperature (water jacket), pH, oxygen (air supply), nutrient supply and waste products. Stirrers mix the contents.", "[E] Everything is sterilised first so other microorganisms do not contaminate the product."]],
      ], ["Bacteria reproduce fast, have plasmids, no ethical issues.", "Yeast: biofuels and bread. Pectinase: fruit juice.", "[E] Fermenters control temperature, pH, oxygen and nutrients."], [
        ["What does pectinase do?", ["Makes bread rise", "Increases fruit juice yield and clarity", "Removes stains", "Makes insulin"], "B", "It breaks down cell walls."],
        ["Why does bread rise?", ["Yeast makes carbon dioxide", "Yeast makes oxygen", "Flour expands", "Water evaporates"], "A", "Gas bubbles from respiration."],
        ["Why are bacteria useful in biotechnology?", ["They are large", "They reproduce rapidly and have plasmids", "They photosynthesise", "They are animals"], "B", "Fast growth and easy to modify."],
        ["What does lactase do?", ["Makes milk", "Breaks down lactose to make lactose free milk", "Makes cheese", "Kills bacteria"], "B", "For lactose intolerant people."],
        ["Why is a fermenter sterilised first?", ["To heat it", "To stop other microorganisms contaminating the product", "To add oxygen", "To speed it up"], "B", "Only the wanted microorganism should grow."],
      ]),
      N("Genetic modification", 9, "What genetic modification is, examples, the process and its pros and cons.", [
        ["Genetic modification", ["Genetic modification: changing the genetic material of an organism by removing, changing or inserting individual genes.", "Examples: the human insulin gene inserted into bacteria to make insulin; crops made resistant to herbicides or insect pests; crops with added vitamins (such as golden rice with provitamin A)."]],
        ["The process", ["[E] The gene is cut out of human DNA with restriction enzymes, leaving sticky ends.", "[E] A bacterial plasmid is cut with the same restriction enzyme, giving matching sticky ends.", "[E] DNA ligase joins the gene into the plasmid, making recombinant plasmids.", "[E] The plasmids are inserted into bacteria, which are grown in fermenters and express the gene (make the protein)."]],
        ["GM crops", ["[E] Advantages: higher yields, less pesticide used, more nutritious food, can grow in poor conditions.", "[E] Disadvantages: high seed cost, possible effects on wild plants and insects (genes spreading, pests becoming resistant), reduced biodiversity, and concern about long term health effects."]],
      ], ["GM: removing, changing or inserting genes.", "Insulin made by GM bacteria.", "[E] Restriction enzymes cut, ligase joins, plasmids carry the gene."], [
        ["Which is an example of genetic modification?", ["Selective breeding of cows", "Bacteria with the human insulin gene", "Vaccination", "Using yeast to make bread"], "B", "A human gene in bacteria."],
        ["What do restriction enzymes do?", ["Join DNA", "Cut DNA at specific places, leaving sticky ends", "Copy DNA", "Make proteins"], "B", "Molecular scissors."],
        ["What joins the gene into the plasmid?", ["Restriction enzyme", "DNA ligase", "Amylase", "Insulin"], "B", "Ligase seals the DNA."],
        ["What has golden rice been modified to contain?", ["More starch", "Provitamin A", "Insulin", "Antibiotics"], "B", "To prevent vitamin A deficiency."],
        ["Which is a concern about GM crops?", ["Higher yields", "Genes might spread to wild plants", "Less pesticide", "More nutritious food"], "B", "Effects on the wider environment."],
      ]),
    ] },
  ],
};
