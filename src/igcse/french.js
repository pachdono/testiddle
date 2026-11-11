// Revision notes, quizzes and flashcards for IGCSE French (Cambridge 0520, Edexcel 4FR1).
// Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "french",
  name: "French",
  topics: [
    one("everyday", "Everyday activities: home, school, food and routine", "Daily life in French", 8, "Home, school, food and routine, with the present tense and reflexive verbs.", [
      ["Vocabulary", ["La maison: la chambre (bedroom), la cuisine (kitchen), le jardin (garden).", "Le collège: la matière (subject), l'emploi du temps (timetable), la récré (break).", "La nourriture: le petit déjeuner (breakfast), le déjeuner (lunch), le dîner (dinner), les légumes (vegetables)."]],
      ["Grammar", ["Present tense: -er verbs (je mange, tu manges, il mange, nous mangeons, vous mangez, ils mangent).", "Reflexive verbs for routine: je me lève (I get up), je me couche (I go to bed), je m'habille (I get dressed).", "Time: à sept heures (at seven), à huit heures et demie (at half past eight)."]],
      ["Food, health and routine", ["La nourriture: le pain, le fromage, les légumes, les fruits, la viande, le poisson, l'eau. Prendre le petit déjeuner, déjeuner, dîner.", "La santé: j'ai mal à la tête (I have a headache), j'ai mal au ventre (stomach ache), il faut manger sainement (you must eat healthily), faire de l'exercice.", "Reflexive verbs: je me lève (I get up), je me douche, je m'habille, je me couche. In the perfect tense they use être: je me suis levé(e).", "Time: à sept heures et demie (at 7.30), à midi, le matin, le soir, d'habitude (usually)."]],
    ], ["Reflexive verbs need me, te, se, nous, vous, se.", "Learn the six present tense endings for -er verbs.", "Give opinions: j'aime, je n'aime pas, je préfère."], [
      ["What does 'je me lève à sept heures' mean?", ["I go to bed at seven", "I get up at seven", "I eat at seven", "I leave at seven"], "B", "Se lever means to get up."],
      ["Which is the correct form: nous ___ (manger)?", ["mangons", "mangeons", "mangez", "mangent"], "B", "Manger keeps the e before -ons to keep the soft g sound: mangeons."],
      ["What is 'la cuisine'?", ["The bedroom", "The kitchen", "The garden", "The bathroom"], "B", "La cuisine is the kitchen (and also cooking)."],
      ["How do you say 'my favourite subject is maths'?", ["Ma matière préférée est les maths", "Mon matière préféré sont maths", "Je suis les maths", "Ma maths est préférée"], "A", "Matière is feminine: ma matière préférée."],
      ["What does 'le petit déjeuner' mean?", ["Lunch", "Dinner", "Breakfast", "Snack"], "C", "Le petit déjeuner is breakfast."],
      ["How do you say 'I have a headache'?", ["J'ai faim", "J'ai mal à la tête", "Je suis fatigué", "J'ai chaud"], "B", "Avoir mal à + body part."],
      ["What is the perfect tense of 'je me lève'?", ["J'ai levé", "Je me suis levé(e)", "Je levais", "Je me lèverai"], "B", "Reflexive verbs take être."],
    ]),
    one("personal", "Personal and social life: family, friends, free time and holidays", "Family, friends and free time", 8, "Describing people, hobbies and holidays, with the perfect tense.", [
      ["Vocabulary", ["La famille: le frère, la sœur, les parents, le grand-père.", "Describing: grand (tall), petit (short), sympa (nice), drôle (funny), bavard (chatty).", "Les loisirs: jouer au foot, faire du vélo, aller au cinéma, écouter de la musique."]],
      ["Grammar", ["Adjectives agree: il est petit, elle est petite, ils sont petits.", "Jouer à for sports (je joue au tennis); jouer de for instruments (je joue du piano).", "Perfect tense with avoir: j'ai visité (I visited). With être for movement verbs: je suis allé(e) (I went), with agreement."]],
      ["Perfect tense and pronouns", ["Perfect tense: avoir or être + past participle. J'ai mangé, j'ai fini, j'ai vendu.", "Être verbs (MRS VANDERTRAMP and all reflexives): aller, venir, partir, arriver, entrer, sortir, naître, mourir, rester, tomber, monter, descendre, retourner, rentrer. The participle agrees: elle est allée.", "Irregular participles: avoir → eu, être → été, faire → fait, voir → vu, prendre → pris, boire → bu, lire → lu.", "Object pronouns go before the verb: je le vois (I see him), je lui parle (I speak to him or her). Y replaces à + place (j'y vais); en replaces de + noun (j'en ai deux).", "Special occasions: Noël, Pâques, un anniversaire, un mariage, la fête nationale (14 juillet)."]],
    ], ["Adjectives agree with the noun.", "Jouer à for sport, jouer de for music.", "Être verbs: aller, venir, arriver, partir, rester and others."], [
      ["Which means 'I play the guitar'?", ["Je joue à la guitare", "Je joue de la guitare", "Je fais la guitare", "Je suis la guitare"], "B", "Instruments use jouer de."],
      ["How do you say 'she is funny'?", ["Il est drôle", "Elle est drôle", "Elle a drôle", "Elle drôle"], "B", "Être (est) with the adjective; drôle is the same in both genders."],
      ["Which is the correct perfect tense?", ["J'ai allé à Paris", "Je suis allé à Paris", "Je allé à Paris", "Je vais allé à Paris"], "B", "Aller takes être in the perfect tense."],
      ["What does 'bavard' mean?", ["Lazy", "Chatty", "Shy", "Tall"], "B", "Bavard means talkative or chatty."],
      ["Make 'petit' agree with 'ma sœur'.", ["petit", "petite", "petits", "petites"], "B", "Feminine singular adds -e."],
      ["Which verb takes être in the perfect tense?", ["Manger", "Aller", "Faire", "Voir"], "B", "Aller is a MRS VANDERTRAMP verb."],
      ["What does 'j'y vais' mean?", ["I am going there", "I have some", "I see it", "I like it"], "B", "Y replaces a place."],
    ]),
    one("world", "The world around us: town, environment, transport and weather", "Town, transport and weather", 7, "Describing where you live, getting around and the weather.", [
      ["Vocabulary", ["En ville: la gare (station), la mairie (town hall), le centre commercial (shopping centre), la bibliothèque (library).", "Transport: en voiture, en bus, en train, à pied (on foot), à vélo.", "La météo: il fait beau (it is fine), il pleut (it is raining), il neige (it is snowing), il fait froid (it is cold)."]],
      ["Grammar", ["Il y a (there is or there are); il n'y a pas de (there is not any).", "Directions: tournez à gauche (turn left), à droite (right), allez tout droit (go straight on).", "Environment: il faut recycler (we must recycle); on devrait (we should)."]],
      ["Environment, shopping and comparisons", ["L'environnement: la pollution, le recyclage, le réchauffement climatique (global warming), protéger, gaspiller (to waste), les transports en commun.", "Les magasins: la boulangerie (bakery), la boucherie, la pharmacie, le supermarché. Combien ça coûte? (How much is it?)", "Comparatives: plus ... que (more than), moins ... que (less than), aussi ... que (as ... as). Superlative: le plus grand (the biggest). Irregular: meilleur (better), le meilleur (the best).", "Weather: il fait beau, il fait chaud, il fait froid, il pleut, il neige, il y a du vent, il y a du soleil."]],
    ], ["Il y a / il n'y a pas de.", "En for most transport, à for foot and bike.", "Weather often uses il fait."], [
      ["What does 'il pleut' mean?", ["It is sunny", "It is raining", "It is windy", "It is snowing"], "B", "Pleuvoir: il pleut, it is raining."],
      ["How do you say 'on foot'?", ["en pied", "à pied", "de pied", "au pied"], "B", "À pied means on foot."],
      ["What is 'la bibliothèque'?", ["The bookshop", "The library", "The station", "The bakery"], "B", "La bibliothèque is a library; a bookshop is une librairie."],
      ["Which means 'there is no cinema'?", ["Il y a un cinéma", "Il n'y a pas de cinéma", "Il n'y a un cinéma", "Il y a pas cinéma"], "B", "After a negative, un becomes de."],
      ["'Tournez à gauche' means:", ["Turn right", "Go straight on", "Turn left", "Cross the road"], "C", "Gauche is left."],
      ["How do you say 'bigger than'?", ["Plus grand que", "Moins grand que", "Le plus grand", "Aussi grand"], "A", "Plus ... que."],
      ["What is 'le recyclage'?", ["Pollution", "Recycling", "Rubbish", "Transport"], "B", "A key environment word."],
    ]),
    one("work", "The world of work: education, jobs and future plans", "Work and future plans", 7, "Jobs, part time work and plans, with the future tense.", [
      ["Vocabulary", ["Les métiers: médecin (doctor), professeur (teacher), ingénieur (engineer), avocat (lawyer).", "Un petit boulot (part time job), gagner de l'argent (to earn money), le stage (work experience).", "Professions often have no article: je veux être médecin."]],
      ["Grammar", ["Near future: je vais + infinitive (je vais travailler).", "Simple future: infinitive + endings (je travaillerai, il sera, j'aurai, j'irai, je ferai).", "Conditional: je voudrais (I would like), j'aimerais (I would love)."]],
      ["Conditional and work words", ["Conditional: future stem + imperfect endings: je voudrais (I would like), j'aimerais, je serais, ce serait (it would be).", "Si clauses: si j'avais de l'argent, je voyagerais (if I had money, I would travel).", "Work: un stage (work experience), un emploi, gagner de l'argent, travailler en équipe, l'université, l'apprentissage (apprenticeship).", "Technology at work: l'ordinateur, le portable, envoyer un e-mail, les réseaux sociaux (social networks)."]],
    ], ["No article with jobs after être.", "Futur proche: aller + infinitive.", "Learn irregular future stems: ser-, aur-, ir-, fer-."], [
      ["How do you say 'I want to be a doctor'?", ["Je veux être un médecin", "Je veux être médecin", "Je veux médecin", "Je suis médecin"], "B", "French omits the article with professions after être."],
      ["What is the future of 'aller' for je?", ["j'allerai", "j'irai", "je vais", "j'allais"], "B", "Aller has the irregular future stem ir-."],
      ["What does 'un petit boulot' mean?", ["A small office", "A part time job", "A small boss", "Homework"], "B", "Un petit boulot is a part time job."],
      ["Which is near future?", ["Je travaillerai", "Je vais travailler", "J'ai travaillé", "Je travaillais"], "B", "Aller + infinitive is the near future."],
      ["'Je voudrais' means:", ["I want", "I would like", "I wanted", "I will want"], "B", "It is the conditional of vouloir."],
      ["What does 'je voudrais' mean?", ["I want", "I would like", "I wanted", "I will want"], "B", "The conditional of vouloir."],
    ]),
    one("international", "The international world: travel, culture and global issues", "Travel, culture and global issues", 7, "Holidays abroad, festivals and big issues, with the imperfect tense.", [
      ["Vocabulary", ["Les vacances: à l'étranger (abroad), l'auberge de jeunesse (youth hostel), réserver (to book).", "Les fêtes: Noël, le 14 juillet (Bastille Day), la fête nationale.", "Les problèmes: la pollution, le réchauffement climatique (global warming), la pauvreté (poverty)."]],
      ["Grammar", ["Countries: en France (feminine), au Canada (masculine), aux États-Unis (plural).", "Imperfect for descriptions in the past: c'était (it was), il faisait chaud (it was hot).", "Opinions: à mon avis (in my opinion), je pense que."]],
      ["World issues and the pluperfect", ["Les problèmes mondiaux: la pauvreté (poverty), la faim (hunger), la guerre (war), le chômage (unemployment), les droits de l'homme (human rights).", "Pluperfect: imperfect of avoir or être + past participle: j'avais mangé (I had eaten), elle était partie (she had left).", "Imperfect: for descriptions and habits: quand j'étais petit, je jouais au foot (when I was small, I used to play football).", "Negatives: ne ... pas, ne ... jamais (never), ne ... plus (no longer), ne ... rien (nothing), ne ... personne (nobody)."]],
    ], ["En, au, aux with countries.", "Imperfect for past descriptions.", "Give and justify opinions."], [
      ["How do you say 'in Canada'?", ["en Canada", "au Canada", "aux Canada", "à Canada"], "B", "Masculine countries take au."],
      ["What does 'la pauvreté' mean?", ["Pollution", "Poverty", "Power", "Peace"], "B", "La pauvreté is poverty."],
      ["Which is the imperfect?", ["C'est", "C'était", "Ce sera", "Ça a été"], "B", "C'était means it was, for description."],
      ["What does 'à l'étranger' mean?", ["Strange", "Abroad", "Foreigner", "At home"], "B", "À l'étranger means abroad."],
      ["Which means 'in my opinion'?", ["À mon avis", "En mon avis", "De mon avis", "À ma opinion"], "A", "À mon avis is the standard phrase."],
      ["What does 'ne ... jamais' mean?", ["Not", "Never", "Nothing", "Nobody"], "B", "Je ne mange jamais de viande."],
      ["What tense is 'j'avais mangé'?", ["Perfect", "Imperfect", "Pluperfect", "Future"], "C", "Had eaten."],
    ]),
    one("listening", "Listening", "Listening skills", 5, "How to tackle French listening questions.", [
      ["Tips", ["Read the questions in the pause and predict vocabulary.", "Listen for negatives (ne ... pas, ne ... jamais) which change the meaning.", "Watch for time words: hier (yesterday), demain (tomorrow), le week-end prochain.", "Distractors: speakers may mention several options before the right one."]],
    ], ["Negatives change everything.", "Time words tell you the tense.", "Expect distractors."], [
      ["What does 'ne ... jamais' mean?", ["Always", "Never", "Sometimes", "Often"], "B", "Ne ... jamais means never."],
      ["'Hier' refers to:", ["Today", "Tomorrow", "Yesterday", "Next week"], "C", "Hier is yesterday."],
      ["A speaker says 'je voulais aller au cinéma, mais finalement je suis resté à la maison'. Where did they go?", ["The cinema", "They stayed at home", "The park", "School"], "B", "Finalement signals the real outcome."],
      ["Why read the questions first?", ["To predict the vocabulary you will hear", "To translate them", "It is not useful", "To count words"], "A", "Prediction helps you spot answers."],
      ["What does 'demain' mean?", ["Yesterday", "Tomorrow", "Today", "Later"], "B", "Demain is tomorrow."],
    ]),
    one("reading", "Reading", "Reading skills", 5, "Strategies for French reading texts.", [
      ["Tips", ["Use cognates (words like English): la musique, intéressant.", "Beware false friends: librairie is a bookshop, actuellement means currently.", "Use context and grammar to guess unknown words.", "Answer in the language the question asks for."]],
    ], ["Cognates help; false friends trick.", "Context gives meaning.", "Answer in the right language."], [
      ["What does 'actuellement' mean?", ["Actually", "Currently", "Accurately", "Finally"], "B", "It is a false friend: it means currently."],
      ["What is 'une librairie'?", ["A library", "A bookshop", "A laboratory", "A liberty"], "B", "False friend: a bookshop."],
      ["What are cognates?", ["Words that look similar and mean the same in both languages", "Verbs only", "Irregular words", "False friends"], "A", "Cognates help you understand quickly."],
      ["What should you do with an unknown word?", ["Give up", "Use context and grammar to work it out", "Skip the whole text", "Translate every word"], "B", "Context usually gives enough meaning."],
      ["What does 'sensible' mean in French?", ["Sensible", "Sensitive", "Senseless", "Sense"], "B", "Another false friend: sensible means sensitive."],
    ]),
    one("speaking", "Speaking", "Speaking skills", 6, "Role plays, presentations and conversation.", [
      ["Tips", ["Develop answers: opinion, reason, example (j'aime ... parce que ...).", "Use three time frames: past, present and future.", "Add complex structures: si j'avais le temps, je voyagerais (if I had time, I would travel).", "Ask the examiner a question if the task requires it: Et vous?"]],
    ], ["Opinion, reason, example.", "Use past, present and future.", "Include one si clause."], [
      ["Which shows a developed answer?", ["Oui", "J'aime le sport parce que c'est amusant et je joue au foot le samedi", "Le sport", "Non merci"], "B", "It includes an opinion, a reason and an example."],
      ["What does 'si j'avais le temps, je voyagerais' mean?", ["If I have time I travel", "If I had time, I would travel", "I had time to travel", "I will travel tomorrow"], "B", "Imperfect plus conditional gives a hypothetical."],
      ["Why use three time frames?", ["To show range and earn higher marks", "It is shorter", "Examiners prefer the present only", "No reason"], "A", "Range of tenses is rewarded."],
      ["How do you ask the examiner a question back?", ["Et vous?", "Et moi?", "Et lui?", "Et nous?"], "A", "Et vous? asks for their view."],
      ["'Parce que' means:", ["Therefore", "Because", "However", "Although"], "B", "Parce que introduces a reason."],
    ]),
    one("writing", "Writing", "Writing skills", 6, "Short messages and longer pieces with accurate, varied French.", [
      ["Tips", ["Cover every bullet point in the task.", "Use connectives: et, mais, donc (so), cependant (however), d'abord, ensuite, enfin.", "Check agreements, accents and verb endings.", "Include opinions and different tenses."]],
      ["Grammar checklist", ["Articles and gender: le, la, les; un, une, des. Partitive: du, de la, des (some).", "Adjectives agree and usually follow the noun, except BAGS adjectives (beauty, age, goodness, size: beau, jeune, bon, petit) which go before.", "Possessives: mon, ma, mes; ton, ta, tes; son, sa, ses; notre, votre, leur.", "Tenses to show range: present, perfect, imperfect, future (simple and near), conditional, pluperfect; the imperative for instructions (tournez, prenez).", "Relative pronouns: qui (who or which, subject), que (whom or which, object), où (where).", "Questions: Est-ce que...?, inversion (Aimes-tu...?), question words (quand, où, pourquoi, comment, combien, qui, que)."]],
    ], ["All bullet points covered.", "Connectives link ideas.", "Check accents and agreements."], [
      ["What does 'cependant' mean?", ["Then", "However", "Because", "So"], "B", "Cependant means however."],
      ["Which word means 'so' or 'therefore'?", ["donc", "mais", "ou", "car"], "A", "Donc means so."],
      ["Why cover every bullet point?", ["Each is part of the marks for content", "To use more words", "It is optional", "To finish faster"], "A", "Missing a bullet loses content marks."],
      ["Which sequence words show order?", ["D'abord, ensuite, enfin", "Mais, ou, et", "Très, trop, assez", "Parce que, car"], "A", "First, then, finally."],
      ["Which is correct?", ["Les filles sont contents", "Les filles sont contentes", "Les filles est contentes", "Les filles sont content"], "B", "Feminine plural: contentes."],
      ["Which word means 'some' before a feminine noun?", ["Du", "De la", "Des", "Le"], "B", "De la for feminine singular."],
      ["Where do most French adjectives go?", ["Before the noun", "After the noun", "At the end of the sentence", "Anywhere"], "B", "Except BAGS adjectives."],
    ]),
  ],
};
