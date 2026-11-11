// Revision notes, quizzes and flashcards for IGCSE German (Cambridge 0525, Edexcel 4GN1).
// Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "german",
  name: "German",
  topics: [
    one("everyday", "Everyday activities: home, school, food and routine", "Daily life in German", 8, "Home, school, food and routine, with the present tense, separable verbs and word order.", [
      ["Vocabulary", ["Das Haus: das Schlafzimmer (bedroom), die Küche (kitchen), der Garten (garden).", "Die Schule: das Fach (subject), der Stundenplan (timetable), die Pause (break).", "Das Essen: das Frühstück (breakfast), das Mittagessen (lunch), das Abendessen (dinner), das Gemüse (vegetables)."]],
      ["Grammar", ["Nouns have three genders: der (masculine), die (feminine), das (neuter), and always a capital letter.", "Verb second: the verb is the second idea. Um sieben Uhr stehe ich auf.", "Separable verbs split: aufstehen becomes ich stehe auf (I get up).", "Reflexive verbs: ich wasche mich (I wash myself)."]],
      ["Food, health and routine", ["Essen: das Brot, der Käse, das Gemüse, das Obst, das Fleisch, der Fisch, das Wasser. Frühstücken, zu Mittag essen, zu Abend essen.", "Gesundheit: ich habe Kopfschmerzen (I have a headache), mir ist schlecht (I feel sick), man sollte gesund essen (you should eat healthily).", "Reflexive verbs: ich wasche mich, ich ziehe mich an, ich freue mich auf (I look forward to).", "Separable verbs: aufstehen → ich stehe um sieben Uhr auf; fernsehen → ich sehe fern."]],
    ], ["Capitalise all nouns.", "Verb is always the second idea.", "Separable prefixes go to the end."], [
      ["What does 'Ich stehe um sieben Uhr auf' mean?", ["I go to bed at seven", "I get up at seven", "I stand at seven", "I eat at seven"], "B", "Aufstehen means to get up; auf goes to the end."],
      ["Which word order is correct?", ["Am Montag ich spiele Fußball", "Am Montag spiele ich Fußball", "Am Montag Fußball spiele ich", "Ich am Montag spiele Fußball"], "B", "The verb must be the second idea."],
      ["What is 'die Küche'?", ["The cake", "The kitchen", "The church", "The cow"], "B", "Die Küche is the kitchen (der Kuchen is cake)."],
      ["Which article goes with 'Haus'?", ["der", "die", "das", "den"], "C", "Das Haus is neuter."],
      ["What does 'das Frühstück' mean?", ["Lunch", "Breakfast", "Dinner", "Snack"], "B", "Frühstück is breakfast."],
      ["How do you say 'I have a headache'?", ["Ich habe Hunger", "Ich habe Kopfschmerzen", "Ich bin müde", "Mir ist kalt"], "B", "Kopf (head) + Schmerzen (pains)."],
    ]),
    one("personal", "Personal and social life: family, friends, free time and holidays", "Family, friends and free time", 8, "Describing people, hobbies and holidays, with the perfect tense.", [
      ["Vocabulary", ["Die Familie: der Bruder, die Schwester, die Eltern, der Opa, die Oma.", "Describing: groß (tall), klein (short), nett (nice), lustig (funny), faul (lazy).", "Freizeit: Fußball spielen, Rad fahren, ins Kino gehen, Musik hören."]],
      ["Grammar", ["Perfect tense: haben or sein + past participle at the end. Ich habe Fußball gespielt.", "Movement verbs take sein: ich bin nach Berlin gefahren (I went to Berlin).", "Gern for liking: ich spiele gern Tennis (I like playing tennis); lieber (prefer), am liebsten (like most)."]],
      ["Perfect tense and cases", ["Perfect: haben or sein + past participle at the end: ich habe Fußball gespielt; ich bin nach Berlin gefahren.", "Sein verbs show movement or change: fahren, gehen, fliegen, kommen, bleiben, werden.", "Irregular participles: gegessen, getrunken, gesehen, geschrieben, gefahren.", "Cases: nominative (subject), accusative (direct object: den, einen), dative (indirect object and after mit, nach, bei, von, zu, aus, seit: dem, der, dem, den).", "Possessives: mein, dein, sein, ihr, unser, euer, ihr; they take endings like ein."]],
    ], ["Past participle goes to the end.", "Sein for verbs of movement.", "Gern, lieber, am liebsten."], [
      ["How do you say 'I like playing tennis'?", ["Ich gern spiele Tennis", "Ich spiele gern Tennis", "Ich spiele Tennis gern habe", "Gern ich spiele Tennis"], "B", "Gern comes after the verb."],
      ["Which is correct?", ["Ich habe nach Berlin gefahren", "Ich bin nach Berlin gefahren", "Ich bin gefahren nach Berlin habe", "Ich fahre gefahren"], "B", "Fahren takes sein in the perfect tense."],
      ["What does 'faul' mean?", ["Funny", "Lazy", "Friendly", "Tall"], "B", "Faul means lazy."],
      ["Where does the past participle go?", ["Straight after the subject", "At the end of the clause", "First", "Before haben"], "B", "It goes to the end."],
      ["'Am liebsten' means:", ["Less", "Most of all (favourite)", "Never", "Sometimes"], "B", "Am liebsten expresses what you like best."],
      ["Which auxiliary does 'fahren' use in the perfect tense?", ["haben", "sein", "werden", "können"], "B", "It shows movement."],
      ["Which case follows 'mit'?", ["Nominative", "Accusative", "Dative", "Genitive"], "C", "mit always takes the dative."],
    ]),
    one("world", "The world around us: town, environment, transport and weather", "Town, transport and weather", 7, "Places, transport and the weather, with prepositions and cases.", [
      ["Vocabulary", ["In der Stadt: der Bahnhof (station), das Rathaus (town hall), die Bibliothek (library), das Einkaufszentrum (shopping centre).", "Verkehr: mit dem Auto, mit dem Bus, mit dem Zug, zu Fuß (on foot).", "Das Wetter: es ist sonnig, es regnet (it rains), es schneit (it snows), es ist kalt."]],
      ["Grammar", ["Es gibt + accusative: es gibt einen Park (there is a park).", "Mit always takes the dative: mit dem Bus, mit der Bahn.", "Directions: links (left), rechts (right), geradeaus (straight on)."]],
      ["Environment, shopping and comparisons", ["Umwelt: die Umweltverschmutzung (pollution), recyceln, der Klimawandel (climate change), Energie sparen, öffentliche Verkehrsmittel.", "Geschäfte: die Bäckerei, die Metzgerei, die Apotheke, der Supermarkt. Was kostet das?", "Comparatives: add -er (kleiner, größer); als = than. Superlatives: am kleinsten, der größte. Irregular: gut, besser, am besten; gern, lieber, am liebsten.", "Weather: es ist sonnig, es regnet, es schneit, es ist windig, es ist kalt."]],
    ], ["Es gibt takes the accusative.", "Mit takes the dative.", "Zu Fuß means on foot."], [
      ["What does 'es regnet' mean?", ["It is sunny", "It is raining", "It is snowing", "It is windy"], "B", "Regnen means to rain."],
      ["How do you say 'by bus'?", ["mit der Bus", "mit dem Bus", "mit den Bus", "mit Bus"], "B", "Mit takes the dative; der Bus becomes dem Bus."],
      ["What is 'der Bahnhof'?", ["The train station", "The bathroom", "The farm", "The airport"], "A", "Der Bahnhof is the railway station."],
      ["Which is correct?", ["Es gibt ein Park", "Es gibt einen Park", "Es gibt einem Park", "Es gibt eines Park"], "B", "Accusative masculine: einen."],
      ["'Geradeaus' means:", ["Left", "Right", "Straight on", "Back"], "C", "Geradeaus is straight on."],
      ["How do you say 'better'?", ["Guter", "Besser", "Am besten", "Mehr gut"], "B", "gut, besser, am besten."],
    ]),
    one("work", "The world of work: education, jobs and future plans", "Work and future plans", 7, "Jobs and plans, with the future tense and subordinate clauses.", [
      ["Vocabulary", ["Berufe: Arzt / Ärztin (doctor), Lehrer / Lehrerin (teacher), Ingenieur (engineer).", "Ein Nebenjob (part time job), Geld verdienen (earn money), das Praktikum (work experience).", "No article with jobs: ich möchte Arzt werden."]],
      ["Grammar", ["Future: werden + infinitive at the end. Ich werde Medizin studieren.", "Conditional: ich würde gern ... (I would like to ...); ich möchte (I would like).", "Weil sends the verb to the end: ich arbeite, weil ich Geld brauche."]],
      ["Conditional, modals and work", ["Conditional: würde + infinitive at the end: ich würde reisen. Common: ich möchte (I would like), ich hätte (I would have), ich wäre (I would be).", "Modal verbs send the infinitive to the end: ich muss arbeiten, ich kann schwimmen, ich will Arzt werden.", "Subordinate clauses send the verb to the end: weil, dass, wenn, obwohl, als: ..., weil ich Geld verdienen will.", "Work: das Praktikum (work experience), der Beruf, Geld verdienen, die Ausbildung (training), die Uni."]],
    ], ["Werden + infinitive at the end.", "Weil and dass send the verb to the end.", "No article with jobs."], [
      ["How do you say 'I will study medicine'?", ["Ich werde Medizin studieren", "Ich studieren werde Medizin", "Ich werde studiere Medizin", "Ich bin Medizin studieren"], "A", "Werden plus the infinitive at the end."],
      ["Which is correct after 'weil'?", ["weil ich brauche Geld", "weil ich Geld brauche", "weil brauche ich Geld", "weil Geld ich brauche"], "B", "Weil sends the verb to the end."],
      ["What is 'ein Nebenjob'?", ["A full time job", "A part time job", "A neighbour", "Homework"], "B", "A Nebenjob is a part time job."],
      ["'Ich möchte Arzt werden' means:", ["I am a doctor", "I would like to become a doctor", "I was a doctor", "I need a doctor"], "B", "Möchte plus werden: would like to become."],
      ["What is 'das Praktikum'?", ["Practice test", "Work experience", "Holiday", "Exam"], "B", "A Praktikum is a work placement."],
      ["Where does the verb go after 'weil'?", ["Second", "First", "At the end", "Before weil"], "C", "Subordinate clause word order."],
    ]),
    one("international", "The international world: travel, culture and global issues", "Travel, culture and global issues", 7, "Holidays, festivals and world problems, with the imperfect tense.", [
      ["Vocabulary", ["Urlaub: im Ausland (abroad), die Jugendherberge (youth hostel), buchen (to book).", "Feste: Weihnachten (Christmas), Ostern (Easter), der Karneval.", "Probleme: die Umwelt (environment), die Armut (poverty), der Klimawandel (climate change)."]],
      ["Grammar", ["Simple past of sein and haben: es war (it was), ich hatte (I had).", "Countries: nach Deutschland (to Germany), in die Schweiz (to Switzerland), in die USA.", "Opinions: meiner Meinung nach + verb (meiner Meinung nach ist das wichtig)."]],
      ["World issues and past tenses", ["Probleme: die Armut (poverty), der Hunger, der Krieg (war), die Arbeitslosigkeit (unemployment), die Menschenrechte.", "Imperfect (simple past): ich war (I was), ich hatte (I had), es gab (there was), ich spielte.", "Pluperfect: hatte or war + participle: ich hatte gegessen (I had eaten).", "Negatives: nicht, kein (not a, no), nie (never), nichts (nothing), niemand (nobody)."]],
    ], ["Es war and ich hatte for past description.", "Nach for most countries.", "Meiner Meinung nach is followed by the verb."], [
      ["What does 'die Armut' mean?", ["The army", "Poverty", "The arm", "Wealth"], "B", "Armut is poverty."],
      ["How do you say 'to Germany'?", ["zu Deutschland", "nach Deutschland", "in Deutschland", "an Deutschland"], "B", "Nach is used for most countries and towns."],
      ["What is 'die Jugendherberge'?", ["A youth club", "A youth hostel", "A herb garden", "A hotel restaurant"], "B", "A youth hostel."],
      ["Which is correct?", ["Meiner Meinung nach das ist wichtig", "Meiner Meinung nach ist das wichtig", "Meiner Meinung das nach ist wichtig", "Ist meiner Meinung nach das wichtig"], "B", "The verb is still the second idea."],
      ["'Es war toll' means:", ["It is great", "It was great", "It will be great", "It would be great"], "B", "War is the past of ist."],
      ["What does 'es gab' mean?", ["There is", "There was", "It gives", "It was given"], "B", "Imperfect of es gibt."],
    ]),
    one("listening", "Listening", "Listening skills", 5, "How to tackle German listening questions.", [
      ["Tips", ["Read the questions and predict vocabulary.", "Listen for negatives: nicht, kein, nie (never).", "Time markers: gestern (yesterday), morgen (tomorrow), letzte Woche (last week), nächstes Jahr.", "Separable verbs: the meaning often depends on the prefix at the end of the sentence."]],
    ], ["Wait for the end of the sentence.", "Negatives: nicht, kein, nie.", "Time words give the tense."], [
      ["What does 'nie' mean?", ["Always", "Never", "Now", "No"], "B", "Nie means never."],
      ["'Gestern' means:", ["Today", "Tomorrow", "Yesterday", "Last week"], "C", "Gestern is yesterday."],
      ["Why wait for the end of a German sentence?", ["Verbs and separable prefixes often come at the end", "It is shorter", "The subject is at the end", "No reason"], "A", "Key meaning often arrives last."],
      ["What does 'kein' do?", ["Means 'a'", "Negates a noun: not a, no", "Means 'and'", "Means 'only'"], "B", "Ich habe keinen Hund: I do not have a dog."],
      ["'Morgen' means:", ["Morning or tomorrow", "Evening", "Yesterday", "Night"], "A", "Morgen is tomorrow; der Morgen is the morning."],
    ]),
    one("reading", "Reading", "Reading skills", 5, "Strategies for German reading texts.", [
      ["Tips", ["Break compound nouns into parts: Krankenhaus = krank (ill) + Haus (house) = hospital.", "Use cognates: das Haus, der Garten, die Musik.", "Watch false friends: bekommen means to get; das Gift means poison; also means so.", "Answer in the language the question requires."]],
    ], ["Split compound nouns.", "Cognates help, false friends trick.", "Answer in the right language."], [
      ["What does 'bekommen' mean?", ["To become", "To get or receive", "To come", "To begin"], "B", "False friend: bekommen means to get."],
      ["What is 'das Krankenhaus'?", ["A sick house", "A hospital", "A pharmacy", "A crane"], "B", "Krank (ill) + Haus: a hospital."],
      ["What does 'also' mean in German?", ["Also", "So or therefore", "Too", "Always"], "B", "False friend: also means so."],
      ["How can you understand long nouns?", ["Ignore them", "Break them into smaller words", "Translate letter by letter", "Guess randomly"], "B", "German builds nouns by joining words."],
      ["What does 'das Gift' mean?", ["A present", "Poison", "A gift card", "Money"], "B", "False friend: Gift is poison; a present is ein Geschenk."],
    ]),
    one("speaking", "Speaking", "Speaking skills", 6, "Role plays, presentations and conversation.", [
      ["Tips", ["Opinion, reason, example: ich mag Mathe, weil es interessant ist.", "Use past, present and future.", "Add complex structures: wenn ich reich wäre, würde ich reisen (if I were rich, I would travel).", "Use sentence starters to gain thinking time: also, na ja."]],
    ], ["Opinion, reason, example.", "Three time frames.", "One wenn clause with würde."], [
      ["Which answer is most developed?", ["Ja", "Ich mag Sport, weil es Spaß macht, und ich spiele jeden Samstag Fußball", "Sport", "Nein danke"], "B", "Opinion, reason and example."],
      ["'Wenn ich reich wäre, würde ich reisen' means:", ["When I am rich I travel", "If I were rich, I would travel", "I was rich and travelled", "I will be rich"], "B", "Subjunctive wäre with würde: a hypothetical."],
      ["Why use 'weil'?", ["To give a reason", "To say goodbye", "To ask a question", "To count"], "A", "Weil means because."],
      ["Which helps gain thinking time naturally?", ["Na ja", "Tschüss", "Danke", "Hallo"], "A", "Na ja is a natural filler, like 'well'."],
      ["Why include three tenses?", ["To show a range of language", "It is shorter", "It is required for the role play only", "No reason"], "A", "Range of structures earns higher marks."],
    ]),
    one("writing", "Writing", "Writing skills", 6, "Messages and longer pieces in accurate, varied German.", [
      ["Tips", ["Cover every bullet point.", "Connectives: und, aber, oder, denn (do not change word order); weil, dass, wenn (send the verb to the end).", "Time phrases first then inversion: Letztes Jahr bin ich nach Spanien gefahren.", "Check genders, cases and capital letters on nouns."]],
      ["Grammar checklist", ["Genders: der (masculine), die (feminine), das (neuter); plural die. Learn nouns with their gender and plural.", "Word order: verb second in main clauses (Am Montag spiele ich...). Time, manner, place (TMP).", "Adjective endings change with case and article: ein großer Hund, der große Hund, mit einem großen Hund.", "Tenses to show range: present, perfect, imperfect, future (werden + infinitive), conditional, pluperfect; imperative (Geh! Gehen Sie!).", "Prepositions: accusative (durch, für, gegen, ohne, um), dative (aus, bei, mit, nach, seit, von, zu), two way (in, an, auf...)."]],
    ], ["All bullet points covered.", "Know which connectives change word order.", "Capital letters on nouns."], [
      ["Which connective does NOT change word order?", ["weil", "dass", "denn", "wenn"], "C", "Denn (because) keeps normal word order."],
      ["Which is correct?", ["Letztes Jahr ich bin nach Spanien gefahren", "Letztes Jahr bin ich nach Spanien gefahren", "Letztes Jahr bin nach Spanien ich gefahren", "Ich letztes Jahr bin gefahren"], "B", "Time first, then the verb, then the subject."],
      ["Why cover every bullet point?", ["Each carries content marks", "To write more", "It is optional", "Only the first counts"], "A", "Missing one costs marks."],
      ["What must every German noun have?", ["An umlaut", "A capital letter", "An -en ending", "No article"], "B", "All nouns are capitalised."],
      ["'Aber' means:", ["And", "But", "Or", "Because"], "B", "Aber is but."],
      ["What is the TMP rule?", ["Time, manner, place", "Tense, mood, person", "Topic, main, plan", "Then, more, perhaps"], "A", "The order of adverbial phrases."],
    ]),
  ],
};
