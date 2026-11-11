// Revision notes, quizzes and flashcards for IGCSE Music (Cambridge 0410). Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "music",
  name: "Music",
  topics: [
    one("listening", "Listening", "Elements of music", 8, "Describing what you hear using the elements of music.", [
      ["Elements", ["Melody: pitch, intervals, conjunct (stepwise) or disjunct (leaps).", "Rhythm and metre: simple time (2/4, 3/4, 4/4) and compound time (6/8), syncopation.", "Harmony and tonality: major, minor, modal; chords and cadences (perfect V to I, plagal IV to I, imperfect ending on V, interrupted V to VI).", "Texture: monophonic, homophonic, polyphonic.", "Dynamics (pp to ff), tempo (adagio, allegro), timbre and instrumentation."]],
      ["The course (Cambridge 0410)", ["Component 1: Listening exam (Western music, world music and set works). Component 2: Performing (solo and ensemble). Component 3: Composing (two compositions).", "Elements to listen for: melody, rhythm and metre, harmony and tonality, texture, timbre and instrumentation, dynamics, tempo, structure (form)."]],
      ["Key terms", ["Tempo: largo (very slow), adagio (slow), andante (walking pace), moderato, allegro (fast), presto (very fast); accelerando (speeding up), rallentando (slowing down).", "Dynamics: pp, p, mp, mf, f, ff; crescendo (getting louder), diminuendo (getting quieter); sforzando (sudden accent).", "Texture: monophonic (one line), homophonic (melody and chords), polyphonic or contrapuntal (several independent lines), heterophonic.", "Harmony: major and minor, cadences (perfect V to I, plagal IV to I, imperfect ending on V, interrupted V to VI), modulation (changing key), chords I, IV, V.", "Time signatures: simple (2/4, 3/4, 4/4) and compound (6/8, 9/8); syncopation, ostinato, sequence, pedal note, dotted rhythm.", "Instruments: orchestral families (strings, woodwind, brass, percussion) and playing techniques (pizzicato, arco, tremolo, con sordino)."]],
    ], ["Perfect cadence V to I.", "Monophonic, homophonic, polyphonic.", "Compound time divides beats into three."], [
      ["Which cadence goes from V to I?", ["Plagal", "Perfect", "Imperfect", "Interrupted"], "B", "The perfect cadence sounds finished."],
      ["What is a monophonic texture?", ["A single melody line with no accompaniment", "Melody with chords", "Several independent melodies", "Drums only"], "A", "One line only."],
      ["Which is compound time?", ["2/4", "3/4", "4/4", "6/8"], "D", "Each beat divides into three."],
      ["What does 'allegro' mean?", ["Slow", "Quick and lively", "Very soft", "Getting louder"], "B", "A fast tempo."],
      ["What is syncopation?", ["Accents on off beats", "A very slow tempo", "A type of scale", "Playing in unison"], "A", "Emphasis away from the main beats."],
      ["Which cadence goes from V to I?", ["Plagal", "Perfect", "Imperfect", "Interrupted"], "B", "The perfect cadence sounds finished."],
      ["What does 'andante' mean?", ["Very fast", "At a walking pace", "Very slow", "Getting faster"], "B", "A moderate, walking tempo."],
      ["What texture has a melody with chords?", ["Monophonic", "Homophonic", "Polyphonic", "Heterophonic"], "B", "Melody and accompaniment."],
    ]),
    one("composing", "Composing", "Composing", 7, "Writing two compositions with clear structure and development.", [
      ["Craft", ["Start with a motif and develop it: repetition, sequence, inversion, augmentation.", "Use clear structures: binary (AB), ternary (ABA), rondo (ABACA), theme and variations.", "Write idiomatically for the instruments chosen, respecting their range.", "Use harmony and cadences to shape phrases."]],
    ], ["Develop a motif.", "Choose a clear structure.", "Write within instrument ranges."], [
      ["What is ternary form?", ["AB", "ABA", "ABACA", "AAAA"], "B", "Ternary is A, B, then A again."],
      ["What is a sequence?", ["Repeating a phrase at a different pitch", "Playing backwards", "Slowing down", "A chord"], "A", "A common development technique."],
      ["What does 'idiomatic' writing mean?", ["Writing that suits the instrument's strengths and range", "Using idioms in lyrics", "Writing very fast", "Copying a song"], "A", "Music that sits well on the instrument."],
      ["What is a motif?", ["A short musical idea", "A long symphony", "A type of drum", "A key signature"], "A", "A building block for development."],
      ["What is rondo form?", ["ABA", "ABACA", "AB", "Through composed"], "B", "A recurring A section."],
    ]),
    one("performing", "Performing", "Performing", 5, "Solo and ensemble performances.", [
      ["Performing well", ["Choose pieces that show your skill without being too hard to play securely.", "Accuracy of pitch and rhythm, fluency and control.", "Interpretation: dynamics, phrasing, articulation and style.", "In ensembles, balance and listening to others matter."]],
    ], ["Pick pieces you can play securely.", "Accuracy then interpretation.", "Balance in ensembles."], [
      ["Why choose a piece within your ability?", ["So you can perform it accurately and expressively", "Harder pieces always score more", "To finish quicker", "No reason"], "A", "Secure performance is rewarded."],
      ["What is phrasing?", ["Shaping musical sentences", "Tuning", "Counting bars", "Changing key"], "A", "Like breathing in speech."],
      ["What matters most in ensemble playing?", ["Being the loudest", "Balance and listening to others", "Ignoring the group", "Playing fastest"], "B", "Working as a unit."],
      ["What is articulation?", ["How notes are attacked and joined, such as staccato or legato", "The key", "The time signature", "The tempo"], "A", "Detached or smooth playing."],
      ["What does 'staccato' mean?", ["Smooth", "Short and detached", "Loud", "Slow"], "B", "Notes are separated."],
    ]),
    one("world", "World music", "World music", 7, "Features of music from different cultures.", [
      ["Traditions", ["Indian classical music: raga (melodic framework), tala (rhythmic cycle), drone, sitar and tabla.", "Indonesian gamelan: metallophones and gongs, interlocking parts, layered texture, slendro and pelog scales.", "African drumming: polyrhythm, call and response, master drummer, djembe.", "Chinese music: pentatonic scales, erhu, pipa, guzheng."]],
      ["World music detail", ["Indian classical: raga (melodic framework), tala (rhythmic cycle), drone (tanpura); sitar, tabla; alap, jor and jhala sections.", "Indonesian gamelan: metallophones (saron), gongs, kendang drums; balungan (core melody), colotomic structure marked by gongs, pelog and slendro scales.", "African drumming: polyrhythm, call and response, master drummer, djembe and talking drum, improvisation.", "Chinese: pentatonic scale, erhu (two string fiddle), pipa (lute), dizi (bamboo flute), guzheng (zither), heterophonic texture.", "Latin American and Caribbean: syncopation, clave rhythm, steel pans (Trinidad), salsa."]],
    ], ["Raga melody, tala rhythm.", "Gamelan: gongs and metallophones.", "African: polyrhythm and call and response."], [
      ["In Indian classical music, what is the tala?", ["The melody", "The rhythmic cycle", "The drone", "The singer"], "B", "Tala is the rhythmic framework."],
      ["Which instruments dominate a gamelan?", ["Strings", "Metallophones and gongs", "Brass", "Woodwind"], "B", "Bronze percussion."],
      ["What is call and response?", ["A leader sings or plays and a group answers", "Everyone plays at once", "A solo only", "A type of scale"], "A", "Common in African music."],
      ["What scale is common in Chinese music?", ["Chromatic", "Pentatonic", "Whole tone", "Blues"], "B", "Five note scales."],
      ["What is a polyrhythm?", ["Several different rhythms played at the same time", "A slow rhythm", "A single beat", "A melody"], "A", "Layered rhythmic patterns."],
      ["What is a raga?", ["A drum", "A melodic framework in Indian music", "A rhythmic cycle", "A gong"], "B", "Tala is the rhythmic cycle."],
      ["Which scale is common in Chinese music?", ["Chromatic", "Pentatonic", "Whole tone", "Blues"], "B", "Five notes."],
    ]),
    one("set-works", "Set works", "Set works and Western music history", 7, "Periods, styles and how to study a set work.", [
      ["Periods", ["Baroque (about 1600 to 1750): harpsichord, basso continuo, terraced dynamics, Bach and Handel.", "Classical (about 1750 to 1820): balanced phrases, Alberti bass, sonata form, Haydn and Mozart.", "Romantic (about 1820 to 1900): larger orchestras, expressive dynamics, rubato, Chopin and Tchaikovsky."]],
      ["Studying a set work", ["Know its structure, key, instrumentation, texture and main themes.", "Link features to the period and composer's style.", "Use correct terminology and bar references."]],
      ["Western music periods", ["Baroque (about 1600 to 1750): Bach, Handel, Vivaldi. Harpsichord, basso continuo, terraced dynamics, ornamentation, counterpoint; forms such as the concerto grosso and fugue.", "Classical (about 1750 to 1820): Haydn, Mozart, early Beethoven. Balanced phrases, clear melody and accompaniment, the piano, sonata form, symphony and string quartet.", "Romantic (about 1820 to 1900): Chopin, Schubert, Tchaikovsky, Wagner. Large orchestras, rich harmony, wide dynamics, expressive rubato, programme music.", "20th century: Impressionism (Debussy), minimalism (Reich, Glass), jazz and blues influences."]],
    ], ["Baroque continuo, Classical sonata form, Romantic expression.", "Know structure and themes.", "Use bar references."], [
      ["Which period used basso continuo?", ["Baroque", "Classical", "Romantic", "Modern"], "A", "A bass line with chords filled in."],
      ["What is an Alberti bass?", ["A broken chord pattern in the left hand", "A type of drum", "A Baroque dance", "A singer"], "A", "Typical of the Classical period."],
      ["Which composer is Classical?", ["Bach", "Mozart", "Chopin", "Debussy"], "B", "Mozart (1756 to 1791)."],
      ["What is rubato?", ["Strict tempo", "Flexible tempo for expression", "A key change", "A loud dynamic"], "B", "Common in Romantic music."],
      ["What are terraced dynamics?", ["Sudden changes between loud and soft", "Gradual crescendos", "Silence", "Very soft music only"], "A", "Typical of Baroque music."],
      ["Which period used a basso continuo?", ["Baroque", "Classical", "Romantic", "Minimalist"], "A", "Harpsichord and bass playing the harmony."],
    ]),
  ],
};
