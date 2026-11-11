// Revision notes, quizzes and flashcards for IGCSE Spanish (Cambridge 0530, Edexcel 4SP1).
// Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "spanish",
  name: "Spanish",
  topics: [
    one("everyday", "Everyday activities: home, school, food and routine", "Daily life in Spanish", 8, "Home, school, food and routine, with the present tense and reflexive verbs.", [
      ["Vocabulary", ["La casa: el dormitorio (bedroom), la cocina (kitchen), el jardín (garden).", "El instituto: la asignatura (subject), el horario (timetable), el recreo (break).", "La comida: el desayuno (breakfast), la comida (lunch), la cena (dinner), las verduras (vegetables)."]],
      ["Grammar", ["Present tense: -ar (hablo, hablas, habla, hablamos, habláis, hablan), -er (como), -ir (vivo).", "Reflexive verbs: me levanto (I get up), me acuesto (I go to bed), me ducho (I shower).", "Stem changing verbs: jugar becomes juego; querer becomes quiero; poder becomes puedo."]],
      ["Food, health and routine", ["La comida: el pan, el queso, las verduras, la fruta, la carne, el pescado, el agua. Desayunar, comer, cenar.", "La salud: me duele la cabeza (my head hurts), tengo dolor de estómago, hay que comer sano (you have to eat healthily).", "Reflexive verbs: me levanto, me ducho, me visto, me acuesto.", "Time: a las siete y media (at 7.30), por la mañana, por la tarde, normalmente."]],
    ], ["Learn the three sets of present tense endings.", "Reflexive verbs use me, te, se, nos, os, se.", "Watch stem changes: ue, ie."], [
      ["What does 'me levanto a las siete' mean?", ["I go to bed at seven", "I get up at seven", "I have lunch at seven", "I leave at seven"], "B", "Levantarse is to get up."],
      ["What is the yo form of 'jugar'?", ["jugo", "juego", "jugamos", "juega"], "B", "Jugar is stem changing: juego."],
      ["What is 'la cena'?", ["Breakfast", "Lunch", "Dinner", "The kitchen"], "C", "La cena is dinner."],
      ["Which is correct: nosotros ___ (vivir) en Madrid?", ["vivemos", "vivimos", "viven", "vivo"], "B", "-ir verbs take -imos in the nosotros form."],
      ["What is 'la asignatura'?", ["Signature", "School subject", "Timetable", "Classroom"], "B", "La asignatura is a subject."],
      ["How do you say 'my head hurts'?", ["Tengo hambre", "Me duele la cabeza", "Estoy cansado", "Tengo frío"], "B", "Doler works like gustar."],
    ]),
    one("personal", "Personal and social life: family, friends, free time and holidays", "Family, friends and free time", 8, "Describing people, hobbies and holidays, with ser, estar and the preterite.", [
      ["Vocabulary", ["La familia: el hermano, la hermana, los padres, el abuelo.", "Describing: alto (tall), bajo (short), simpático (nice), gracioso (funny), perezoso (lazy).", "El tiempo libre: jugar al fútbol, montar en bici, ir al cine, escuchar música."]],
      ["Grammar", ["Ser for permanent traits (es alto); estar for states and location (está cansado, está en casa).", "Gustar: me gusta el fútbol, me gustan los deportes.", "Preterite for completed past actions: visité (I visited), comí (I ate), fui (I went or I was)."]],
      ["Preterite and pronouns", ["Preterite (completed past): -ar: hablé, hablaste, habló. -er and -ir: comí, comiste, comió.", "Key irregulars: fui (I went or I was), hice (I did), tuve (I had), estuve, pude, vi.", "Gustar: me gusta el fútbol, me gustan los perros (plural thing liked). Also encantar, interesar.", "Object pronouns go before the verb: lo veo (I see him or it), le doy (I give to him or her).", "Celebrations: la Navidad, la Semana Santa, el cumpleaños, una boda (wedding)."]],
    ], ["Ser for traits, estar for states and places.", "Me gusta for one thing, me gustan for plural.", "Fui means both I went and I was."], [
      ["Which is correct?", ["Mi hermano está alto", "Mi hermano es alto", "Mi hermano son alto", "Mi hermano estás alto"], "B", "Height is a lasting trait: ser."],
      ["How do you say 'I like sports'?", ["Me gusta los deportes", "Me gustan los deportes", "Yo gusto los deportes", "Me gusto deportes"], "B", "Plural noun: gustan."],
      ["What does 'fui a la playa' mean?", ["I go to the beach", "I went to the beach", "I will go to the beach", "I was going to the beach"], "B", "Fui is the preterite of ir."],
      ["What does 'perezoso' mean?", ["Funny", "Lazy", "Shy", "Tall"], "B", "Perezoso means lazy."],
      ["Which verb for location: 'Madrid ___ en España'?", ["es", "está", "son", "eres"], "B", "Location uses estar."],
      ["What does 'fui' mean?", ["I go", "I went (or I was)", "I will go", "I would go"], "B", "Ir and ser share the preterite."],
      ["Which is correct for 'I like dogs'?", ["Me gusta los perros", "Me gustan los perros", "Yo gusto los perros", "Me gusto perros"], "B", "Gustan agrees with the plural."],
    ]),
    one("world", "The world around us: town, environment, transport and weather", "Town, transport and weather", 7, "Places, transport and weather, with hay and directions.", [
      ["Vocabulary", ["En la ciudad: la estación (station), el ayuntamiento (town hall), la biblioteca (library), el centro comercial.", "Transporte: en coche, en autobús, en tren, a pie (on foot).", "El tiempo: hace sol (it is sunny), llueve (it rains), nieva (it snows), hace frío (it is cold)."]],
      ["Grammar", ["Hay (there is or there are); no hay (there is not).", "Directions: gira a la izquierda (turn left), a la derecha (right), sigue todo recto (go straight on).", "Environment: hay que reciclar (one must recycle); deberíamos (we should)."]],
      ["Environment, shopping and comparisons", ["El medio ambiente: la contaminación, reciclar, el cambio climático, ahorrar energía, el transporte público.", "Las tiendas: la panadería, la carnicería, la farmacia, el supermercado. ¿Cuánto cuesta?", "Comparatives: más ... que, menos ... que, tan ... como. Superlative: el más grande. Irregular: mejor, peor.", "Weather: hace sol, hace calor, hace frío, llueve, nieva, hace viento."]],
    ], ["Hay and no hay.", "Weather often uses hace.", "A pie for on foot."], [
      ["What does 'llueve' mean?", ["It is sunny", "It rains", "It snows", "It is windy"], "B", "Llover: llueve."],
      ["How do you say 'it is cold'?", ["Es frío", "Hace frío", "Está frío", "Hay frío"], "B", "Weather uses hacer: hace frío."],
      ["What is 'la biblioteca'?", ["Bookshop", "Library", "Bible", "Bank"], "B", "La biblioteca is a library; a bookshop is una librería."],
      ["'Gira a la izquierda' means:", ["Turn right", "Turn left", "Go straight on", "Stop"], "B", "Izquierda is left."],
      ["Which means 'there is no park'?", ["Hay un parque", "No hay parque", "Es no parque", "No está parque"], "B", "No hay means there is not."],
      ["How do you say 'as big as'?", ["Más grande que", "Tan grande como", "El más grande", "Menos grande"], "B", "tan ... como."],
    ]),
    one("work", "The world of work: education, jobs and future plans", "Work and future plans", 7, "Jobs and plans, with the future and conditional.", [
      ["Vocabulary", ["Profesiones: médico (doctor), profesor (teacher), ingeniero (engineer), abogado (lawyer).", "Un trabajo a tiempo parcial (part time job), ganar dinero (earn money), las prácticas laborales (work experience).", "No article with jobs: quiero ser médico."]],
      ["Grammar", ["Near future: voy a + infinitive (voy a estudiar).", "Simple future: infinitive + é, ás, á, emos, éis, án (estudiaré). Irregular: tendré, haré, podré.", "Conditional: me gustaría (I would like), querría."]],
      ["Conditional and work", ["Conditional: infinitive + ía endings: trabajaría, viajaría. Irregular stems: tendría, haría, podría, querría.", "Si clauses: si tuviera dinero, viajaría (if I had money, I would travel).", "Work: las prácticas (work experience), el trabajo, ganar dinero, la universidad, trabajar en equipo.", "Me gustaría ser médico (I would like to be a doctor)."]],
    ], ["Ir a + infinitive for plans.", "Future endings go on the infinitive.", "Me gustaría + infinitive."], [
      ["How do you say 'I want to be a doctor'?", ["Quiero ser un médico", "Quiero ser médico", "Quiero médico", "Soy médico"], "B", "Spanish drops the article with professions after ser."],
      ["Which is near future?", ["Estudiaré", "Voy a estudiar", "Estudié", "Estudiaba"], "B", "Ir a + infinitive."],
      ["What is the future of 'tener' for yo?", ["teneré", "tendré", "tengo", "tuve"], "B", "Tener has the irregular stem tendr-."],
      ["'Me gustaría viajar' means:", ["I like travelling", "I would like to travel", "I travelled", "I will travel"], "B", "Gustaría is conditional."],
      ["What does 'ganar dinero' mean?", ["To spend money", "To earn money", "To save money", "To lose money"], "B", "Ganar means to earn or win."],
      ["What does 'me gustaría' mean?", ["I like", "I liked", "I would like", "I will like"], "C", "Conditional of gustar."],
    ]),
    one("international", "The international world: travel, culture and global issues", "Travel, culture and global issues", 7, "Holidays, festivals and world issues, with the imperfect tense.", [
      ["Vocabulary", ["Las vacaciones: en el extranjero (abroad), el albergue juvenil (youth hostel), reservar (to book).", "Las fiestas: la Navidad, la Semana Santa (Easter week), el Día de los Muertos.", "Los problemas: la contaminación (pollution), el cambio climático, la pobreza (poverty)."]],
      ["Grammar", ["Imperfect for descriptions and habits: era (it was), hacía calor (it was hot), iba (I used to go).", "Preterite for completed actions; imperfect for background.", "Opinions: en mi opinión, creo que, pienso que."]],
      ["World issues and more tenses", ["Problemas: la pobreza, el hambre, la guerra, el paro (unemployment), los derechos humanos.", "Imperfect: describing the past and habits: cuando era pequeño, jugaba al fútbol.", "Present perfect: he + participle: he visitado (I have visited). Pluperfect: había comido (I had eaten).", "Negatives: no, nunca (never), nada (nothing), nadie (nobody), tampoco (neither)."]],
    ], ["Preterite: completed. Imperfect: background and habits.", "En el extranjero means abroad.", "Justify opinions."], [
      ["What does 'la pobreza' mean?", ["Pollution", "Poverty", "Power", "Population"], "B", "La pobreza is poverty."],
      ["Which is imperfect?", ["Fue", "Era", "Será", "Es"], "B", "Era is imperfect of ser, for description."],
      ["'Cuando era pequeño, iba a la playa' means:", ["When I was small, I used to go to the beach", "When I am small I go to the beach", "I went to the beach yesterday", "I will go to the beach"], "A", "Imperfect for past habits."],
      ["What does 'en el extranjero' mean?", ["Strange", "Abroad", "In the stranger", "At home"], "B", "It means abroad."],
      ["What is 'la contaminación'?", ["Contamination only of food", "Pollution", "Conservation", "Container"], "B", "La contaminación is pollution."],
      ["What does 'nunca' mean?", ["Always", "Never", "Nothing", "Nobody"], "B", "No como nunca carne."],
    ]),
    one("listening", "Listening", "Listening skills", 5, "How to tackle Spanish listening questions.", [
      ["Tips", ["Predict vocabulary from the questions.", "Listen for negatives: no, nunca (never), nada (nothing), nadie (nobody).", "Time markers: ayer (yesterday), mañana (tomorrow), el año pasado (last year), el fin de semana que viene.", "Expect distractors before the final answer."]],
    ], ["Negatives change the meaning.", "Time markers tell you the tense.", "Expect distractors."], [
      ["What does 'nunca' mean?", ["Always", "Never", "Now", "Nobody"], "B", "Nunca means never."],
      ["'Ayer' means:", ["Today", "Yesterday", "Tomorrow", "Later"], "B", "Ayer is yesterday."],
      ["What does 'nadie' mean?", ["Nothing", "Nobody", "Never", "No"], "B", "Nadie means nobody."],
      ["'Mañana' can mean:", ["Tomorrow or morning", "Yesterday", "Evening", "Night"], "A", "Mañana is tomorrow; la mañana is the morning."],
      ["Why read the questions first?", ["To predict vocabulary", "To translate everything", "It does not help", "To count the questions"], "A", "Prediction helps you spot answers."],
    ]),
    one("reading", "Reading", "Reading skills", 5, "Strategies for Spanish reading texts.", [
      ["Tips", ["Use cognates: la música, interesante, el hospital.", "False friends: embarazada means pregnant; librería is a bookshop; actualmente means currently.", "Use context and grammar to guess meanings.", "Answer in the language the question requires."]],
    ], ["Cognates help.", "False friends trick.", "Use context."], [
      ["What does 'embarazada' mean?", ["Embarrassed", "Pregnant", "Ambassador", "Busy"], "B", "A classic false friend."],
      ["What is 'una librería'?", ["A library", "A bookshop", "A liberty", "A laboratory"], "B", "False friend: bookshop."],
      ["What does 'actualmente' mean?", ["Actually", "Currently", "Accurately", "Finally"], "B", "It means currently."],
      ["What should you do with an unknown word?", ["Stop reading", "Use context to work it out", "Skip the question", "Translate letter by letter"], "B", "Context usually gives the meaning."],
      ["Which is a cognate?", ["interesante", "perro", "casa", "mesa"], "A", "Interesante looks like interesting."],
    ]),
    one("speaking", "Speaking", "Speaking skills", 6, "Role plays, presentations and conversation.", [
      ["Tips", ["Opinion, reason, example: me encanta el inglés porque es útil.", "Use past, present and future.", "Complex structures: si tuviera dinero, viajaría (if I had money, I would travel).", "Fillers to gain time: pues, bueno, a ver."]],
    ], ["Opinion, reason, example.", "Three time frames.", "One si clause with the conditional."], [
      ["Which is most developed?", ["Sí", "Me gusta el fútbol porque es divertido y juego con mis amigos los sábados", "Fútbol", "No sé"], "B", "Opinion, reason and example."],
      ["'Si tuviera dinero, viajaría' means:", ["If I have money, I travel", "If I had money, I would travel", "I had money and travelled", "I will have money"], "B", "Imperfect subjunctive with conditional."],
      ["'Porque' means:", ["Why", "Because", "For", "So"], "B", "Porque introduces a reason."],
      ["Which is a natural filler?", ["Pues", "Adiós", "Gracias", "Hola"], "A", "Pues works like 'well'."],
      ["Why use three time frames?", ["To show range of language", "It is quicker", "Only required in writing", "No reason"], "A", "Range is rewarded."],
    ]),
    one("writing", "Writing", "Writing skills", 6, "Messages and longer pieces in accurate, varied Spanish.", [
      ["Tips", ["Cover every bullet point.", "Connectives: y, pero, o, además (moreover), sin embargo (however), por eso (that is why).", "Check accents, agreement and verb endings.", "Use opinions and a range of tenses."]],
      ["Grammar checklist", ["Gender: el, la, los, las; un, una, unos, unas. Adjectives agree and usually follow the noun.", "Ser (permanent traits, identity, time) versus estar (location, temporary states, feelings).", "Tenses to show range: present, preterite, imperfect, present perfect, near future (voy a + infinitive), future, conditional; the imperative (gira a la derecha).", "Radical changing verbs: querer → quiero, poder → puedo, pedir → pido.", "Questions with ¿...? and exclamations with ¡...!; question words: qué, dónde, cuándo, por qué, cómo, cuánto, quién."]],
    ], ["All bullet points covered.", "Accents matter.", "Use connectives."], [
      ["What does 'sin embargo' mean?", ["Without", "However", "Moreover", "Because"], "B", "Sin embargo means however."],
      ["Which means 'moreover'?", ["Además", "Pero", "O", "Porque"], "A", "Además adds information."],
      ["Which is correct?", ["Las chicas son simpáticos", "Las chicas son simpáticas", "Las chicas es simpáticas", "Las chicas son simpática"], "B", "Feminine plural agreement."],
      ["Why cover every bullet point?", ["Each carries content marks", "To write more", "Optional", "Only one counts"], "A", "Missing one loses marks."],
      ["'Por eso' means:", ["That is why", "For that", "Because of you", "Perhaps"], "A", "Por eso means that is why."],
      ["Which verb is used for location?", ["Ser", "Estar", "Tener", "Hacer"], "B", "Madrid está en España."],
    ]),
  ],
};
