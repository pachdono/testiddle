// Revision notes, quizzes and flashcards for IGCSE English Language (Cambridge 0500 First Language
// English, Edexcel 4EA1). Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "english-lang",
  name: "English Language",
  topics: [
    one("reading", "Reading for meaning", "Reading for meaning", 7, "Finding explicit and implicit meaning in a text and answering in your own words.", [
      ["Explicit and implicit", ["Explicit information is stated directly: find it and select it precisely.", "Implicit meaning is suggested: infer it from word choice, actions and details.", "When asked to use your own words, change the key words rather than copying whole phrases."]],
      ["Approach", ["Read the question first, then the text, underlining relevant lines.", "Check the mark allocation: one clear point per mark is a good guide.", "Stay within the lines the question gives you."]],
      ["The exam (Cambridge 0500)", ["Paper 1 Reading: three texts. Question 1: comprehension questions on Text A, then a summary of Text B. Question 2: writers' use of language in Text C. Question 3: extended response (writing in a role) based on Text C.", "Paper 2 Directed writing and composition: Section A directed writing (argue or persuade from two texts); Section B a descriptive or narrative composition.", "Marks reward reading (understanding, selecting, analysing) and writing (content, structure, style and accuracy)."]],
    ], ["Explicit: stated. Implicit: suggested.", "Own words means rephrasing, not copying.", "Match your points to the marks available."], [
      ["What is implicit meaning?", ["Meaning stated directly", "Meaning suggested rather than stated", "A spelling error", "The title of the text"], "B", "Implicit meaning has to be inferred from clues in the text."],
      ["A question says 'using your own words'. What should you do?", ["Copy the sentence exactly", "Rephrase the key ideas in different words", "Write a quotation only", "Leave it out"], "B", "You must show understanding by putting the ideas into your own language."],
      ["How do you know roughly how many points to make?", ["By the length of the text", "By the number of marks", "By how much space is left", "Always three points"], "B", "One clear point per mark is a reliable guide."],
      ["A character slams the door and refuses to speak. What can you infer?", ["They are calm", "They are angry or upset", "They are hungry", "Nothing at all"], "B", "Actions suggest feelings: this is inference."],
      ["Where should your answer come from if the question names lines 1 to 10?", ["Anywhere in the text", "Only lines 1 to 10", "Your own experience", "The final paragraph"], "B", "Use only the section the question gives."],
      ["What does Paper 2 Section B ask for?", ["A summary", "A descriptive or narrative composition", "Language analysis", "Comprehension"], "B", "You choose a composition task."],
    ]),
    one("summary", "Summary writing", "Summary writing", 7, "Selecting the key points and writing them concisely in your own words.", [
      ["Selecting", ["Read the task carefully: what exactly must the summary cover?", "Underline relevant points; ignore examples, repetition and quotations.", "Aim for around 8 to 15 distinct points depending on the task."]],
      ["Writing", ["Write in continuous prose, not bullet points, unless told otherwise.", "Use your own words and combine related points to save words.", "Stay within the word limit; extra words can cost marks for concision.", "Do not add your own opinions or ideas not in the text."]],
    ], ["Only points relevant to the task.", "Own words, continuous prose.", "No opinions, keep to the word limit."], [
      ["What should a summary leave out?", ["Main points", "Examples and repetition", "Points relevant to the question", "Key facts"], "B", "Summaries keep the key ideas and cut detail like examples."],
      ["Should you include your own opinion in a summary?", ["Yes, always", "No, only what the text says", "Only at the end", "Only if it is positive"], "B", "A summary reports the text's ideas, not yours."],
      ["What form should a summary normally take?", ["Bullet points", "Continuous prose", "A poem", "A table"], "B", "Unless told otherwise, write in clear paragraphs."],
      ["How can you save words in a summary?", ["Copy long quotations", "Combine related points into one sentence", "Repeat the question", "Add descriptions"], "B", "Grouping linked ideas makes the summary concise."],
      ["What happens if you go well over the word limit?", ["Nothing", "You may lose marks for concision", "You get extra marks", "The examiner ignores it"], "B", "Concision is part of what is assessed."],
    ]),
    one("language", "Writers' use of language", "Writers' use of language", 8, "Explaining how writers use words and techniques to create effects.", [
      ["Techniques", ["Imagery: similes, metaphors and personification create pictures in the reader's mind.", "Sound: alliteration, sibilance and onomatopoeia.", "Word choice: connotations of individual words, and the tone they create.", "Sentence structure: short sentences for tension; long sentences for flow or a build up."]],
      ["Writing the answer", ["Choose a precise quotation, usually a few words.", "Explain the meaning in context, then the effect on the reader.", "Zoom in on single words and their connotations.", "Naming a technique earns little on its own: the effect is what matters."]],
      ["Techniques glossary", ["Alliteration (repeated first sounds), assonance (repeated vowel sounds), sibilance (repeated s sounds), onomatopoeia (words that sound like their meaning).", "Simile (like or as), metaphor (saying something is something else), personification (human qualities to objects), pathetic fallacy (weather reflecting mood).", "Hyperbole (exaggeration), oxymoron (contradiction in a phrase), juxtaposition (contrasting ideas placed together), semantic field (group of related words).", "Rhetorical question, anaphora (repeating words at the start of sentences), triadic structure (rule of three), direct address (you).", "Connotation: the ideas a word suggests beyond its meaning. Tone: the writer's attitude. Register: formality."]],
    ], ["Quote, explain meaning, explain effect.", "Connotations of single words are powerful evidence.", "Effect matters more than naming the device."], [
      ["'The wind howled like a wolf.' What technique is this?", ["Metaphor", "Simile", "Alliteration", "Onomatopoeia"], "B", "A comparison using 'like' is a simile."],
      ["What are connotations?", ["The dictionary meaning", "The associations and ideas a word suggests", "Spelling patterns", "Sentence lengths"], "B", "Connotations are the feelings and ideas a word brings with it."],
      ["What is the most important part of a language analysis answer?", ["Naming as many techniques as possible", "Explaining the effect on the reader", "Writing long quotations", "Summarising the plot"], "B", "Examiners reward explanation of effect."],
      ["A writer uses a very short sentence after long ones. What effect might this have?", ["Makes it boring", "Creates impact or tension", "Has no effect", "Shows it is the end"], "B", "A sudden short sentence stands out and can shock or build tension."],
      ["'The city breathed.' What technique is this?", ["Simile", "Personification", "Alliteration", "Hyperbole"], "B", "Giving a city a human action is personification."],
      ["What is pathetic fallacy?", ["Exaggeration", "Weather or setting reflecting mood", "A contradiction", "Repeated sounds"], "B", "Such as storms in a tense scene."],
      ["What is a semantic field?", ["A rhyme", "A group of words linked by meaning", "A question", "A metaphor"], "B", "Such as war words in a sports report."],
    ]),
    one("directed", "Directed writing", "Directed writing", 8, "Writing a letter, speech, article or report that uses ideas from a reading text.", [
      ["The task", ["You use and develop ideas from the reading passage(s) for a set audience and purpose.", "Common forms: letter, speech, article, report, journal.", "Marks are for reading (how well you use and evaluate the ideas) and writing (style, structure, accuracy)."]],
      ["Doing it well", ["Cover all the bullet points in the task.", "Develop and evaluate the ideas, do not just copy them.", "Match the register to the audience: formal for a head teacher, lively for a magazine.", "Use the conventions of the form: a greeting and sign off for a letter, a headline for an article."]],
      ["Form conventions", ["Letter: address, date, greeting (Dear Sir or Madam for formal, signed Yours faithfully; a name, signed Yours sincerely), paragraphs, sign off.", "Speech: greet the audience, direct address, rhetorical questions, signposting, memorable ending.", "Article: headline, subheading, engaging opening, paragraphs, quotations, conclusion.", "Report: title, headings, formal and impersonal, findings and recommendations.", "Review or blog: engaging, personal opinion supported with detail, recommendation.", "Match register to audience and purpose; plan, then check spelling, punctuation and grammar."]],
    ], ["Use the passage's ideas, but develop them.", "Audience and purpose decide the tone.", "Follow the form's conventions."], [
      ["What should you do with ideas from the reading text in directed writing?", ["Copy them exactly", "Use, develop and evaluate them", "Ignore them", "Only quote them"], "B", "You get credit for using the ideas and taking them further."],
      ["You are writing a letter to a local council. What register should you use?", ["Slang", "Formal", "Text speak", "Poetic"], "B", "A council is an official audience, so a formal register fits."],
      ["Which feature belongs in a newspaper article?", ["Dear Sir", "A headline", "Yours faithfully", "Stage directions"], "B", "Articles have headlines and often subheadings."],
      ["What are the two areas marked in directed writing?", ["Spelling and handwriting", "Reading and writing", "Length and speed", "Grammar and vocabulary only"], "B", "Marks go to how you use the reading and how well you write."],
      ["Why cover all the bullet points in the task?", ["To fill space", "Because each guides the content the examiner expects", "They are optional", "To use more words"], "B", "Missing a bullet usually limits your reading mark."],
      ["How should a formal letter to 'Dear Sir or Madam' end?", ["Yours sincerely", "Yours faithfully", "Love", "Best"], "B", "Faithfully when the name is unknown."],
    ]),
    one("descriptive", "Descriptive writing", "Descriptive writing", 7, "Creating a vivid picture of a place, person or moment.", [
      ["Techniques", ["Use all five senses, not only sight.", "Precise nouns and verbs beat piles of adjectives.", "Figurative language: similes, metaphors and personification used with care.", "Vary sentence lengths and openings."]],
      ["Structure", ["Description does not need a plot: focus on atmosphere and detail.", "Structure it by zooming in and out, by moving through a place, or by a change in time or weather.", "End with an image that links back to the opening."]],
    ], ["Show, do not tell.", "All five senses.", "Structure even without a plot."], [
      ["What is the main focus of descriptive writing?", ["A complicated plot", "Atmosphere and detail", "Dialogue", "Arguments"], "B", "Description builds a picture and mood, not a storyline."],
      ["Which is the best advice on adjectives?", ["Use as many as possible", "Choose precise nouns and verbs, with a few well chosen adjectives", "Never use them", "Use only colours"], "B", "Precision is more vivid than piling up adjectives."],
      ["What does 'show, do not tell' mean?", ["Use pictures", "Let details suggest feelings rather than stating them", "Write in the present tense", "Use dialogue only"], "B", "Readers infer feelings from details, which is more powerful."],
      ["Which is a way to structure a description?", ["Moving through a place step by step", "Writing random sentences", "Listing facts", "Adding a twist ending only"], "A", "A clear path through space or time gives the piece shape."],
      ["Why use senses other than sight?", ["To make it longer", "To make the scene more vivid and immersive", "Because the examiner asks for five", "Sight is not allowed"], "B", "Sound, smell, touch and taste bring the scene alive."],
    ]),
    one("narrative", "Narrative writing", "Narrative writing", 7, "Writing a story with a clear structure, convincing characters and a satisfying ending.", [
      ["Planning", ["Keep the plot simple: one main event or turning point.", "Few characters, well developed.", "Choose first or third person and keep it consistent."]],
      ["Craft", ["Open with a hook: action, dialogue or a striking image.", "Build tension towards a climax, then resolve it.", "Use dialogue sparingly and punctuate it correctly.", "A circular ending that echoes the opening can be effective."]],
    ], ["Simple plot, strong ending.", "Hook the reader from the first line.", "Keep the narrative voice consistent."], [
      ["Why keep the plot of an exam story simple?", ["Examiners dislike stories", "You have limited time and words to develop it well", "Simple stories get full marks automatically", "It is a rule"], "B", "A focused plot leaves room for detail and craft."],
      ["Which is an effective opening?", ["Once upon a time", "A line of action or dialogue that hooks the reader", "I woke up and it was all a dream", "This story is about"], "B", "A strong hook engages the reader immediately."],
      ["What is a circular ending?", ["The story never ends", "The ending echoes the opening", "The ending is a cliffhanger", "The ending is happy"], "B", "Returning to an opening image gives a sense of completion."],
      ["Which is correct dialogue punctuation?", ["\"Run,\" she shouted.", "\"Run\" she shouted.", "Run, she shouted.", "\"Run.\" she shouted."], "A", "Punctuation goes inside the speech marks, with a comma before the tag."],
      ["Why limit the number of characters?", ["Names are hard to spell", "So each can be developed convincingly", "Examiners count them", "Stories must have one character"], "B", "Fewer characters means more depth for each."],
    ]),
    one("speaking", "Speaking and listening", "Speaking and listening", 5, "Giving a talk and discussing it clearly and confidently.", [
      ["The talk", ["Choose a topic you know well and care about.", "Use cue cards, not a full script.", "Structure: introduction, two or three main points, conclusion."]],
      ["Discussion", ["Listen to questions carefully and answer fully.", "Develop answers with reasons and examples.", "Use standard English, clear pronunciation and eye contact."]],
    ], ["Cue cards, not a script.", "Develop answers with reasons and examples.", "Clear structure and eye contact."], [
      ["What should you use to help you during the talk?", ["A full script to read", "Short cue cards", "Nothing at all", "Your phone"], "B", "Cue cards keep you on track while sounding natural."],
      ["How should you answer discussion questions?", ["Yes or no only", "Fully, with reasons and examples", "By changing the topic", "As quickly as possible"], "B", "Developed answers show your ideas and range."],
      ["Which topic choice is best?", ["One you know well and care about", "One you have never heard of", "One chosen at random", "The longest topic"], "A", "Knowledge and interest make the talk confident and detailed."],
      ["Which helps your delivery?", ["Reading with your head down", "Eye contact and clear pronunciation", "Speaking as fast as possible", "Whispering"], "B", "These help the listener follow and engage."],
      ["What is a sensible structure for a talk?", ["Random points", "Introduction, main points, conclusion", "Only a conclusion", "Questions first"], "B", "A clear structure makes the talk easy to follow."],
    ]),
  ],
};
