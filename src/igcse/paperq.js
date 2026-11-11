// Extra written questions for the practice papers, for the courses whose topic question banks are
// short. Each paper takes half of the course's own questions and adds these, so the two papers
// share nothing. Each entry: [topic id, question, mark points, marks (optional)].
const LANG = {
  french: {
    1: [
      ["everyday", "Écris un message à ton ami(e) : qu'est-ce que tu manges d'habitude le matin et le soir ? (Write a message to your friend: what do you usually eat in the morning and evening?)", ["Correct food vocabulary with du, de la or des", "A time phrase (le matin, le soir)", "An opinion with a reason (j'aime ... parce que ...)", "Accurate verb endings"], 4],
      ["personal", "Décris ton/ta meilleur(e) ami(e). (Describe your best friend.)", ["Physical description with correct adjective agreement", "Personality with an adjective", "Something you do together", "Why you get on (on s'entend bien parce que ...)"], 4],
      ["world", "Qu'est-ce que tu fais pour protéger l'environnement ? (What do you do to protect the environment?)", ["Two actions (je recycle, j'éteins la lumière)", "A negative (je ne prends pas la voiture)", "Something you will do in future (je vais ...)", "A reason"], 4],
      ["work", "Write 80 to 90 words to a company applying for a summer job in a café.", ["Formal register with vous", "Says why you want the job", "Mentions a past experience (perfect tense)", "Mentions what you will do (future or conditional)"], 4],
    ],
    2: [
      ["everyday", "Décris une fête que tu as célébrée récemment. (Describe a celebration you had recently.)", ["Perfect tense with avoir", "Perfect tense with être, with agreement", "Food or activity vocabulary", "An opinion in the past (c'était ...)"], 4],
      ["personal", "Décris ta maison et ta chambre. (Describe your house and your bedroom.)", ["Type of home and where it is", "Rooms or furniture with prepositions (à côté de, sous)", "An opinion with a reason", "What you would change (je voudrais ...)"], 4],
      ["international", "Write 80 to 90 words about a holiday that went wrong.", ["Perfect tense for events", "Imperfect for description (il faisait, c'était)", "A problem explained (j'ai perdu ...)", "What you will do differently next time"], 4],
      ["work", "Quels sont les avantages et les inconvénients d'aller à l'université ? (What are the advantages and disadvantages of going to university?)", ["One advantage", "One disadvantage", "Comparative structure (plus ... que)", "A personal conclusion"], 4],
    ],
  },
  german: {
    1: [
      ["everyday", "Was isst du gern und was isst du nicht gern? (What do you like and not like eating?)", ["Food vocabulary with gern / nicht gern", "Correct word order after weil (verb at the end)", "A time phrase with inversion (Am Morgen esse ich ...)", "An opinion"], 4],
      ["personal", "Beschreib deinen besten Freund oder deine beste Freundin. (Describe your best friend.)", ["Correct possessive (mein / meine)", "Two adjectives describing them", "Something you do together", "A reason with weil or denn"], 4],
      ["world", "Was machst du für die Umwelt? (What do you do for the environment?)", ["Two actions (ich trenne den Müll, ich fahre Rad)", "A negative with nicht or kein", "Future with werden", "A reason"], 4],
      ["work", "Write 80 to 90 words applying for a summer job in a hotel.", ["Formal Sie throughout", "Says why you want the job", "A past experience in the perfect tense", "A modal verb with the infinitive at the end"], 4],
    ],
    2: [
      ["everyday", "Beschreib eine Feier, die du neulich hattest. (Describe a celebration you had recently.)", ["Perfect tense with haben", "Perfect tense with sein", "Food or present vocabulary", "An opinion in the past (es war ...)"], 4],
      ["personal", "Beschreib dein Haus und dein Zimmer. (Describe your house and your room.)", ["Type of home and where it is", "Prepositions with the dative (in meinem Zimmer, neben dem Bett)", "An opinion", "What you would like (ich möchte ...)"], 4],
      ["international", "Write 80 to 90 words about a holiday that went wrong.", ["Perfect tense for events", "Imperfect of sein or haben (es war, ich hatte)", "A problem explained", "What you will do next time (werden)"], 4],
      ["work", "Was sind die Vor- und Nachteile von einem Studium? (What are the pros and cons of studying at university?)", ["One advantage", "One disadvantage", "A comparative (besser als)", "A personal conclusion with weil"], 4],
    ],
  },
  spanish: {
    1: [
      ["everyday", "¿Qué comes normalmente en el desayuno y en la cena? (What do you usually eat for breakfast and dinner?)", ["Food vocabulary", "Correct present tense verbs (como, bebo)", "A time phrase", "An opinion with porque"], 4],
      ["personal", "Describe a tu mejor amigo o amiga. (Describe your best friend.)", ["Ser for personality with adjective agreement", "Tener for hair or eyes", "Something you do together", "Why you get on (nos llevamos bien porque ...)"], 4],
      ["world", "¿Qué haces para proteger el medio ambiente? (What do you do to protect the environment?)", ["Two actions (reciclo, apago la luz)", "A negative (no uso ...)", "A future structure (voy a ...)", "A reason"], 4],
      ["work", "Write 80 to 90 words applying for a summer job in a café.", ["Formal usted", "Says why you want the job", "A past experience in the preterite", "A conditional (me gustaría ...)"], 4],
    ],
    2: [
      ["everyday", "Describe una fiesta que celebraste recientemente. (Describe a celebration you had recently.)", ["Preterite verbs for events", "Food or present vocabulary", "Imperfect for description (había, era)", "An opinion in the past (fue ...)"], 4],
      ["personal", "Describe tu casa y tu dormitorio. (Describe your house and bedroom.)", ["Type of home and where it is (estar)", "Hay with furniture", "Prepositions of place", "What you would change (me gustaría ...)"], 4],
      ["international", "Write 80 to 90 words about a holiday that went wrong.", ["Preterite for events", "Imperfect for description", "A problem explained (perdí ...)", "What you will do next time (voy a ...)"], 4],
      ["work", "¿Cuáles son las ventajas y desventajas de ir a la universidad? (What are the advantages and disadvantages of going to university?)", ["One advantage", "One disadvantage", "A comparative (más ... que)", "A personal conclusion"], 4],
    ],
  },
  mandarin: {
    1: [
      ["everyday", "你早饭和晚饭一般吃什么？(What do you usually eat for breakfast and dinner?)", ["Meal words (早饭, 晚饭)", "Time words before the verb", "Food vocabulary", "An opinion with 因为 ... 所以 ..."], 4],
      ["personal", "介绍你最好的朋友。(Describe your best friend.)", ["Name and age", "Adjectives with 很", "Something you do together (我们一起 ...)", "A reason you like them"], 4],
      ["world", "你为环保做什么？(What do you do for the environment?)", ["Two actions", "A negative with 不", "A future plan with 要 or 会", "A reason"], 4],
      ["work", "Write 80 to 100 characters about a part time job you would like.", ["Names the job", "Says where and when", "Uses 想 or 希望", "Gives a reason"], 4],
    ],
    2: [
      ["everyday", "介绍你过的一个节日。(Describe a festival you celebrated.)", ["Names the festival (春节, 中秋节)", "Past with 了 or 过", "Food or activity vocabulary", "An opinion"], 4],
      ["personal", "介绍你的家和你的房间。(Describe your home and your room.)", ["Location with 在", "有 for what is in the room", "Position words (旁边, 上面)", "An opinion"], 4],
      ["international", "Write 80 to 100 characters about a trip you went on.", ["Where and when, time before the verb", "Transport with 坐", "Past with 了", "An opinion with 觉得"], 4],
      ["work", "你以后想做什么工作？为什么？(What job do you want in future and why?)", ["Names the job", "想 or 打算", "Reason with 因为", "A comparison or extra detail"], 4],
    ],
  },
};

export const PAPER_EXTRA = {
  ...LANG,
  economics: {
    1: [
      ["problem", "A farmer can produce either wheat or rice on her land. Draw and explain a production possibility curve to show the opportunity cost of producing more wheat.", ["Curve drawn concave to the origin with axes labelled wheat and rice", "Movement along the curve shown", "More wheat means less rice produced", "The rice given up is the opportunity cost"], 4],
      ["allocation", "The price of a smartphone rises by 10% and the quantity demanded falls by 25%. Calculate the price elasticity of demand and state whether demand is elastic or inelastic.", ["PED = % change in quantity demanded ÷ % change in price", "= -25 ÷ 10", "= -2.5", "Elastic, because it is greater than 1 (ignoring the sign)"], 4],
      ["micro", "Discuss whether a trade union will always be able to increase the wages of its members.", ["Can bargain collectively for higher wages", "Stronger if many workers are members or skills are scarce", "Weaker if the employer can replace workers or use machines", "Higher wages may lead to job losses if demand for labour is elastic", "Firms may be unable to afford rises in a recession or if profits are low", "Conclusion: depends on demand for the product and the union's strength"], 6],
      ["macro", "Explain two causes of unemployment in a country.", ["Cyclical: a fall in total demand in a recession", "Explained: firms cut output, so need fewer workers", "Structural: decline of an industry, skills mismatch", "Explained: workers lack skills for the new jobs"], 4],
      ["development", "Explain why a country with a high birth rate might have a low GDP per head.", ["Population grows quickly", "GDP is shared among more people", "High dependency ratio: more young dependants", "Spending goes on schools and healthcare rather than investment"], 4],
      ["trade", "Discuss whether a government should protect its industries with tariffs.", ["Tariff is a tax on imports", "For: protects infant industries and jobs", "For: raises government revenue, reduces a current account deficit", "Against: higher prices and less choice for consumers", "Against: risk of retaliation, less efficiency", "Conclusion weighing the arguments"], 6],
    ],
    2: [
      ["problem", "Explain the difference between the economic problem for a consumer and for a government.", ["Both have unlimited wants and scarce resources", "Consumer: limited income, chooses what goods to buy", "Government: limited tax revenue, chooses between services", "Both face an opportunity cost"], 4],
      ["allocation", "Explain, with a diagram, the effect of a government subsidy on the market for electric cars.", ["Subsidy lowers costs of production", "Supply curve shifts right", "Price falls", "Quantity bought and sold rises"], 4],
      ["micro", "Analyse why a firm might choose to merge with a competitor (horizontal integration).", ["Gains economies of scale, lowering average costs", "Increases market share and market power", "Removes a competitor", "Can raise prices or profits"], 4],
      ["macro", "Discuss whether reducing income tax is the best way to increase economic growth.", ["Lower income tax raises disposable income", "Consumer spending rises, increasing total demand", "Can increase incentives to work", "But may be saved or spent on imports", "Government revenue falls, less for public spending", "Other policies such as supply side or lower interest rates may work better; conclusion"], 6],
      ["development", "Explain two ways a developing country could reduce poverty.", ["Invest in education and training", "Raises skills and incomes", "Improve infrastructure or attract foreign investment", "Creates jobs and raises GDP"], 4],
      ["trade", "Explain two reasons why countries specialise and trade.", ["Comparative or absolute advantage", "Produce goods at lower opportunity cost", "Access to goods they cannot make", "Economies of scale from larger markets lower costs"], 4],
    ],
  },
  business: {
    1: [
      ["activity", "Explain two reasons why a sole trader might decide to become a private limited company.", ["Limited liability: owners only lose what they invested", "Protects personal possessions", "Easier to raise capital by selling shares", "Allows the business to expand"], 4],
      ["people", "Explain two advantages of on the job training for a supermarket.", ["Cheaper than sending workers away", "Uses existing staff to train", "Workers still produce while learning", "Training is specific to the job"], 4],
      ["marketing", "Explain how the product life cycle can help a business plan its marketing.", ["Stages: introduction, growth, maturity, decline", "High promotion needed at introduction", "Extension strategies in maturity", "Plans when to launch new products"], 4],
      ["finance", "Revenue is 80 000 dollars and gross profit is 30 000 dollars. Calculate the gross profit margin and explain one way to improve it.", ["Gross profit margin = gross profit ÷ revenue x 100", "= 30 000 ÷ 80 000 x 100 = 37.5%", "Raise prices or find cheaper suppliers", "Explains why that increases gross profit per sale"], 4],
    ],
    2: [
      ["people", "Explain two methods of payment a business could use to motivate factory workers.", ["Piece rate: paid per unit made", "Encourages higher output", "Bonus or profit sharing", "Rewards effort and links to business success"], 4],
      ["marketing", "Explain two benefits of market segmentation.", ["Market divided into groups (age, income, location)", "Products and promotion can be targeted", "Less wasted promotion, so lower cost", "Higher sales from meeting needs better"], 4],
      ["operations", "Explain the difference between job, batch and flow production, with an example of each.", ["Job: one off products made to order, such as a wedding dress", "Batch: groups of identical products, such as bread", "Flow: continuous production, such as soft drinks", "Correct link between method and scale"], 4],
      ["external", "Discuss whether a business should act in an environmentally friendly way even if it raises costs.", ["Higher costs may lower profit or raise prices", "Improves reputation and attracts customers", "Avoids fines or government action", "Conclusion that weighs short term cost against long term benefit"], 4],
    ],
  },
  accounting: {
    1: [
      ["recording", "Goods costing 600 dollars are sold on credit to R Shah. Give the double entry and name the book of prime entry.", ["Debit R Shah (trade receivable) 600", "Credit sales 600", "Sales journal"], 3],
      ["verification", "The bank statement shows a balance of 2400 dollars. Unpresented cheques total 500 and an uncredited deposit is 300. Calculate the correct cash book balance.", ["Bank statement balance 2400", "Add uncredited deposit 300", "Less unpresented cheques 500", "= 2200 dollars"], 4],
      ["procedures", "Explain why a business makes a provision for doubtful debts.", ["Some customers may not pay", "Prudence: profit and assets not overstated", "Trade receivables shown at a realistic value", "Expense matched to the year of the sale (accruals)"], 4],
      ["statements", "Gross profit is 32 000 dollars, expenses are 18 000 and other income is 2000. Calculate the profit for the year.", ["Profit = gross profit + other income - expenses", "= 32 000 + 2000 - 18 000", "= 16 000 dollars"], 3],
    ],
    2: [
      ["fundamentals", "Explain the difference between capital expenditure and revenue expenditure, with an example of each.", ["Capital: buying or improving non current assets", "Example: buying a delivery van", "Revenue: day to day running costs", "Example: fuel for the van"], 4],
      ["procedures", "Rent of 1200 dollars for the year is owing at the year end; 10 800 has been paid. Calculate the rent expense for the year and state how the owing amount is shown.", ["Expense = 10 800 + 1200", "= 12 000 dollars", "1200 shown as a current liability (other payable or accrual)"], 3],
      ["analysis", "Profit for the year is 15 000 dollars and revenue is 120 000. Calculate the profit margin and give one reason it might fall next year.", ["Profit margin = profit ÷ revenue x 100", "= 12.5%", "Expenses rise faster than sales, or prices cut"], 3],
      ["principles", "Explain the going concern principle and how it affects the valuation of assets.", ["Assumes the business will continue for the foreseeable future", "Assets valued at cost (less depreciation)", "Not at their forced sale (break up) value"], 3],
    ],
  },
  "english-lang": {
    1: [
      ["reading", "In a passage about a storm at sea, explain what the writer means by 'the sea had no patience left'.", ["The sea is very rough or violent", "Personification: the sea is like a person losing its temper", "The danger is getting worse and is about to break"], 3],
      ["summary", "Summarise, in about 100 words, the reasons people give for keeping pets, from an article you have read.", ["At least three distinct reasons", "Own words where possible", "Concise, no examples or repetition", "Fluent, organised paragraph"], 4],
      ["directed", "Write a speech to your year group persuading them to take part in a charity run. (Opening and one main paragraph.)", ["Direct address to the audience", "A clear purpose and reason", "Persuasive devices (rhetorical question, rule of three)", "Appropriate register for a speech"], 4],
      ["narrative", "Write a story ending with the words 'and that was the last time I saw it.' (Plan and final paragraph.)", ["Clear plan with a structure (beginning, problem, climax)", "Final paragraph leads naturally to the given words", "Controlled tone or emotion", "Accurate punctuation and spelling"], 4],
    ],
    2: [
      ["reading", "From a passage about a first day at a new school, explain two feelings the narrator has, using your own words.", ["First feeling identified in own words", "Supported by a short reference", "Second feeling identified in own words", "Supported by a short reference"], 4],
      ["language", "Analyse how a writer uses language to make a city at night seem threatening.", ["Selects precise words or phrases", "Explains the meaning in context", "Explains connotations (shadows, silence)", "Explains the overall effect on the reader"], 4],
      ["directed", "Write a report for the school council on how to improve the canteen. (Opening and two recommendations.)", ["Formal heading or opening stating purpose", "Two clear recommendations", "Each supported with a reason", "Formal, impersonal register"], 4],
      ["descriptive", "Describe a place in the early morning before anyone else is awake.", ["Sensory detail", "Focused, precise vocabulary", "Effective imagery", "Varied sentence structures for effect"], 4],
    ],
  },
  "english-lit": {
    1: [
      ["poetry", "How does a poet you have studied use imagery to present nature? Write one developed paragraph.", ["Clear point about the presentation of nature", "Embedded quotation", "Analysis of the image and its connotations", "Effect on the reader or link to the poem's meaning"], 4],
      ["prose", "Explore how the setting creates atmosphere in one key moment of your set novel.", ["Identifies the moment", "Reference to specific details of setting", "Analysis of the writer's methods", "Links the atmosphere to character or theme"], 4],
      ["drama", "How does a playwright present conflict between two characters in your set play?", ["Clear argument", "Reference to dialogue or stage directions", "Analysis of language or dramatic method", "Effect on the audience"], 4],
    ],
    2: [
      ["poetry", "Compare how two poems you have studied present loss.", ["Clear comparative argument", "Reference to both poems", "Analysis of methods in each", "Similarities and differences explained"], 4],
      ["prose", "How does the writer make the ending of your set novel memorable?", ["Clear argument", "Embedded quotation", "Analysis of structure or language", "Personal response supported by the text"], 4],
      ["unseen", "Read an unseen prose extract and explain how the writer creates tension in the opening.", ["Overview of what happens", "Reference to specific words or sentence structures", "Analysis of how they build tension", "Effect on the reader"], 4],
    ],
  },
  esl: {
    1: [
      ["reading", "From an advert for a summer camp, find the price, the age range and two activities.", ["Correct price", "Correct age range", "Two correct activities"], 3],
      ["writing", "Write an article (150 to 200 words) for your school magazine about the benefits of learning a musical instrument.", ["Clear title and introduction", "At least two developed benefits", "Paragraphs and linking words", "Range of vocabulary and accurate grammar"], 4],
      ["speaking", "Give your opinion on whether schools should finish at lunchtime.", ["Clear opinion", "Two reasons", "An example", "Fluent, varied language"], 4],
    ],
    2: [
      ["reading", "From an article on healthy eating, write a summary (about 80 words) of the advice given.", ["Selects relevant advice only", "At least four points", "Own words", "Within the word limit"], 4],
      ["writing", "Write an email (100 to 150 words) to a hotel complaining about your stay.", ["Formal greeting and sign off", "Clear description of two problems", "A request for action", "Polite, formal tone"], 4],
      ["listening", "Listen to a radio interview and note the speaker's job, where they work and one thing they enjoy.", ["Correct job", "Correct workplace", "Correct thing they enjoy"], 3],
    ],
  },
  thai: {
    1: [
      ["comprehension", "Read a Thai article on traffic in Bangkok and explain the writer's attitude in your own words.", ["Identifies the attitude (concern, frustration)", "Supported with a reference", "Own words", "Explains how the language shows it"], 4],
      ["composition", "Write a narrative opening about getting lost in a market.", ["Engaging opening", "Setting established with detail", "Tension or suspense", "Accurate spelling and tone marks"], 4],
    ],
    2: [
      ["summary", "Summarise the advantages of online learning from a Thai article in about 100 words.", ["Main points selected", "At least four points", "Own words", "Within the limit"], 4],
      ["directed", "Write a speech to your class persuading them to save electricity.", ["Correct form of address for a speech", "Clear purpose", "Persuasive techniques", "Appropriate register"], 4],
    ],
  },
  cs: {
    1: [
      ["data-rep", "An image is 800 pixels wide and 600 pixels high with a colour depth of 8 bits. Calculate the file size in kilobytes (1 KiB = 1024 bytes).", ["800 x 600 x 8 = 3 840 000 bits", "÷ 8 = 480 000 bytes", "÷ 1024 = 468.75 KiB"], 3],
      ["hardware", "Explain why a computer with more cache memory may run faster.", ["Cache is very fast memory close to the CPU", "Stores frequently used instructions or data", "CPU does not have to fetch from slower RAM as often", "So the fetch decode execute cycle is quicker"], 4],
      ["algorithms", "Describe how a linear search finds a value in a list.", ["Start at the first item", "Compare each item with the value", "Move to the next item until found", "Stop at the end if not found"], 4],
      ["programming", "Explain the difference between a local and a global variable.", ["Local: declared inside a procedure or function", "Only accessible within it", "Global: declared in the main program", "Accessible anywhere in the program"], 4],
    ],
    2: [
      ["transmission", "Explain why data sent over the internet is split into packets.", ["Packets can take different routes", "Avoids congestion, so faster", "Only damaged packets need resending", "Reassembled in order at the destination using sequence numbers"], 4],
      ["software", "Describe two functions of an operating system.", ["Memory management: allocating RAM to programs", "Explained", "File management or a user interface or handling peripherals", "Explained"], 4],
      ["algorithms", "Describe how a bubble sort puts a list into ascending order.", ["Compare each pair of adjacent items", "Swap them if they are in the wrong order", "Repeat passes through the list", "Stop when a pass makes no swaps"], 4],
      ["logic", "Draw (describe) the logic circuit for X = NOT (A OR B) and give the output when A = 0 and B = 0.", ["An OR gate with inputs A and B", "Its output goes into a NOT gate", "A OR B = 0", "X = 1"], 4],
    ],
  },
  dt: {
    1: [
      ["materials", "Compare the properties of hardwood and softwood, with an example of each.", ["Hardwood from deciduous trees, such as oak", "Usually harder, more durable, slower growing", "Softwood from coniferous trees, such as pine", "Usually cheaper, lighter and faster growing"], 4],
      ["graphic", "Explain the difference between isometric and oblique drawing.", ["Isometric: receding lines at 30 degrees", "No face drawn true to shape", "Oblique: front face drawn flat, true shape", "Receding lines at 45 degrees, often at half length"], 4],
      ["systems", "Explain how a cam and follower turns rotary motion into reciprocating motion.", ["The cam rotates on a shaft", "The follower rests on the cam's edge", "Its shape pushes the follower up and down", "The shape of the cam decides the motion"], 4],
    ],
    2: [
      ["process", "Explain why designers use models before making the final product.", ["Test the size, shape or function cheaply", "Get feedback from the user", "Find and fix problems early", "Saves time and material in manufacture"], 4],
      ["tools", "Describe how to make a hole accurately in a piece of mild steel.", ["Mark the centre and centre punch it", "Clamp the work in a machine vice", "Use a pillar drill with the correct size bit and speed", "Wear goggles and keep the guard down"], 4],
      ["resistant", "Explain why an alloy is often used instead of a pure metal.", ["Alloys can be stronger or harder", "Better resistance to corrosion", "Properties can be designed for the job", "Example such as stainless steel or brass"], 4],
    ],
  },
  global: {
    1: [
      ["research", "Explain two ways to check that an online source is reliable.", ["Check the author's expertise or organisation", "Check whether the evidence is referenced", "Compare with other sources", "Check the date and any bias or purpose"], 4],
      ["analysis", "Explain one global, one national and one local perspective on water shortages.", ["Global: climate change affects rainfall worldwide", "National: government water policy or farming use", "Local: a community's daily water use", "Each perspective is clearly different"], 4],
      ["evaluation", "Evaluate the argument 'social media does more harm than good'.", ["Identifies a strength in the argument", "Identifies a weakness or counter argument", "Considers the evidence used", "Reaches a supported judgement"], 4],
    ],
    2: [
      ["research", "Explain why primary research might be more useful than secondary research for a local issue.", ["Primary is collected yourself, such as a survey", "Specific to the local area", "Up to date", "But may be a small sample"], 4],
      ["analysis", "From a graph showing rising global meat consumption, describe the trend and suggest two consequences.", ["Describes the trend with data", "Consequence for the environment (deforestation, emissions)", "Consequence for health or food supply", "Links the consequences to the trend"], 4],
      ["reflection", "Reflect on how working with others changed your project outcome.", ["Describes a specific contribution from a teammate", "Explains how it changed the outcome", "Considers a difficulty", "Says what you would do differently"], 4],
    ],
  },
  art: {
    1: [
      ["recording", "Explain how you would use photography as a recording method for a theme of 'decay'.", ["Choose subjects linked to the theme", "Use close ups, lighting or angles to show texture", "Take a range of images, not one", "Annotate and select the best for development"], 4],
      ["developing", "Explain how you would refine an idea from a first sketch to a final design.", ["Try different compositions", "Test colour or media options", "Evaluate each version", "Select and justify the best"], 4],
    ],
    2: [
      ["media", "Compare watercolour and acrylic paint for a landscape study.", ["Watercolour: transparent, washes, light effects", "Acrylic: opaque, dries quickly, can layer", "Suitability for the subject", "A justified choice"], 4],
      ["supporting", "Explain how you would annotate an artist study to show understanding.", ["Names the artist and the work", "Comments on technique and media", "Uses art vocabulary (composition, tone, texture)", "Explains how it influences your own work"], 4],
    ],
  },
  music: {
    1: [
      ["listening", "Listen to a piece for orchestra and identify three features of its instrumentation.", ["Names a section or instrument", "Describes a playing technique (pizzicato, tremolo)", "Comments on which instrument has the melody", "Uses correct terminology"], 3],
      ["set-works", "Describe the features of a Baroque piece you have studied.", ["Basso continuo (harpsichord or organ with a bass)", "Ornamentation", "Terraced dynamics", "Polyphonic or contrapuntal texture"], 4],
    ],
    2: [
      ["listening", "Name and describe two cadences.", ["Perfect cadence: V to I", "Sounds finished", "Imperfect cadence: ends on V", "Sounds unfinished"], 4],
      ["world", "Describe the main features of Indian classical music.", ["Raga: the set of notes and melodic shape", "Tala: the rhythmic cycle", "Drone (tanpura)", "Improvisation, often starting with an alap"], 4],
    ],
  },
  drama: {
    1: [
      ["pre-release", "As a designer, explain how you would use lighting to create the mood of the final scene.", ["A specific lighting choice (colour, intensity, angle)", "Linked to the mood", "Timing or change during the scene", "Effect on the audience"], 4],
      ["performing", "Explain how you would use proxemics to show the relationship between two characters.", ["Defines proxemics as use of space", "Specific choice of distance", "How it changes during the scene", "What it shows about the relationship"], 4],
    ],
    2: [
      ["devising", "Explain how you developed a character in your devised piece.", ["Starting point for the character", "Research or rehearsal technique (hot seating, role on the wall)", "A specific vocal or physical choice", "How it served the piece"], 4],
      ["written", "Explain how a director could use set to show a change of location quickly.", ["Minimal or multi purpose set", "Use of trucks, flats or projections", "Lighting to mark the change", "Effect on pace for the audience"], 4],
    ],
  },
};
