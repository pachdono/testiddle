// Revision notes, quizzes and flashcards for IGCSE English Literature (Cambridge 0475, Edexcel
// 4ET1). Set texts change by year, so these cover the skills every paper tests. Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "english-lit",
  name: "English Literature",
  topics: [
    one("poetry", "Poetry", "Analysing poetry", 8, "Form, structure and language in poems, and how to write about them.", [
      ["Form and structure", ["Form: the type of poem. A sonnet has 14 lines; a ballad tells a story in quatrains; free verse has no regular rhyme or metre.", "Enjambment runs a sentence over the line break; a caesura is a pause within a line.", "Volta: a turn in thought, often in a sonnet.", "Rhyme scheme and metre (such as iambic pentameter) create rhythm and can be broken for effect."]],
      ["Language", ["Imagery, symbolism, sound effects and tone.", "The speaker of a poem is not always the poet.", "Explore more than one interpretation where the language allows it."]],
      ["Poetry terms", ["Stanza types: couplet (2 lines), tercet (3), quatrain (4), sestet (6), octave (8).", "Metre: iambic pentameter is ten syllables, five unstressed then stressed pairs (da DUM x 5). Blank verse: unrhymed iambic pentameter.", "Rhyme scheme (ABAB), internal rhyme, half rhyme. Enjambment: a sentence runs over a line break. Caesura: a pause within a line. End stopped lines pause at the line end.", "Volta: a turn in thought, often in a sonnet (line 9 in a Petrarchan sonnet, the final couplet in a Shakespearean sonnet).", "Dramatic monologue: one speaker addressing a silent listener. Lyric: personal feelings. Elegy: a poem of mourning."]],
    ], ["Comment on form and structure, not just language.", "The speaker is not always the poet.", "Offer alternative interpretations."], [
      ["How many lines does a sonnet have?", ["10", "12", "14", "16"], "C", "A sonnet has 14 lines."],
      ["What is enjambment?", ["A pause in the middle of a line", "A sentence running over a line break", "A rhyme at the end of lines", "A repeated line"], "B", "Enjambment carries the sentence on to the next line."],
      ["What is a volta?", ["A type of rhyme", "A turn in thought or argument", "A stanza of four lines", "A sound effect"], "B", "The volta marks a shift, often in the sonnet."],
      ["Why say 'the speaker' rather than 'the poet'?", ["It sounds more formal", "The voice of the poem may be a character, not the poet", "Examiners require it", "Poets never write about themselves"], "B", "Poems often use a persona."],
      ["What is free verse?", ["Poetry without regular rhyme or metre", "Poetry that rhymes in couplets", "A 14 line poem", "Poetry in Latin"], "A", "Free verse does not follow a fixed pattern."],
      ["How many syllables are in a line of iambic pentameter?", ["8", "10", "12", "14"], "B", "Five pairs of syllables."],
      ["What is enjambment?", ["A pause within a line", "A sentence running over a line break", "A rhyme", "A stanza"], "B", "It creates flow or surprise."],
    ]),
    one("prose", "Prose", "Writing about prose", 8, "Characters, themes, narrative voice and context in novels and short stories.", [
      ["Key areas", ["Characterisation: how a writer presents a character through actions, speech, description and others' reactions.", "Themes: big ideas such as power, love, identity, conflict.", "Narrative voice: first person gives closeness and bias; third person can be omniscient or limited.", "Setting and structure: how the order of events and the setting shape meaning."]],
      ["Essay technique", ["Answer the question in your first sentence.", "Use short embedded quotations and analyse them.", "Write about the writer's choices: 'the writer presents...'.", "Link context to the text only where it adds to your argument."]],
      ["Prose terms", ["Narrator: first person (I, limited and personal), third person (he or she), omniscient (knows everything), unreliable (cannot be trusted).", "Foreshadowing (hints of what will happen), flashback, motif (a repeated image or idea), symbolism, setting and atmosphere.", "Dialogue reveals character and relationships. Structure: chronological or not, chapter openings and endings, turning points.", "Context: the time, place and ideas when the text was written; only use it when it helps explain the question."]],
    ], ["Write about the writer's methods, not just the plot.", "Embed short quotations.", "Context must serve the argument."], [
      ["What does an omniscient narrator know?", ["Only their own thoughts", "The thoughts and feelings of all characters", "Nothing", "Only dialogue"], "B", "An all knowing narrator can enter any character's mind."],
      ["What is the best way to use quotations?", ["Long passages", "Short embedded quotations followed by analysis", "None at all", "Only at the end"], "B", "Embedded quotes keep your argument flowing and focused."],
      ["Which phrase keeps the focus on the writer's craft?", ["The story is about", "The writer presents", "I think the character is nice", "In the film"], "B", "This shows you understand texts are constructed."],
      ["What is a theme?", ["The setting", "A central idea explored in the text", "The narrator", "The ending"], "B", "Themes are big ideas like power or identity."],
      ["When should you use context?", ["In every sentence", "When it helps explain or support your argument", "Never", "Only in the conclusion"], "B", "Context is useful when it deepens your reading."],
      ["What is an unreliable narrator?", ["A narrator who knows everything", "A narrator whose account cannot be fully trusted", "A third person narrator", "A character who never speaks"], "B", "Readers must question what they say."],
    ]),
    one("drama", "Drama", "Writing about drama", 7, "Plays as performance: stagecraft, dialogue and dramatic techniques.", [
      ["Dramatic techniques", ["Stage directions show movement, setting and tone.", "Dramatic irony: the audience knows something a character does not.", "Soliloquy: a character alone speaks their thoughts aloud; an aside is a remark to the audience.", "Structure: acts and scenes, rising tension, climax and resolution."]],
      ["Writing about plays", ["Refer to the audience rather than the reader.", "Consider how a scene could be staged and performed.", "Explore how tension, conflict and relationships develop."]],
      ["Drama terms", ["Soliloquy: a character alone, speaking thoughts aloud. Aside: a remark to the audience that others on stage do not hear. Monologue: a long speech to others.", "Tragedy: a hero with a fatal flaw (hamartia) falls; the audience feels pity and fear, then catharsis.", "Comic relief: a funny scene that eases tension. Dramatic tension, climax, resolution.", "Stagecraft: entrances and exits, props, lighting, sound and costume shown in stage directions."]],
    ], ["Say 'audience', not 'reader'.", "Dramatic irony: the audience knows more.", "Think about staging."], [
      ["What is dramatic irony?", ["A joke in the play", "When the audience knows something a character does not", "A character speaking alone", "A sad ending"], "B", "Dramatic irony builds tension through what the audience knows."],
      ["What is a soliloquy?", ["A conversation between two characters", "A character alone on stage speaking their thoughts", "A stage direction", "A song"], "B", "It reveals inner thoughts to the audience."],
      ["Who should you refer to when writing about a play?", ["The reader", "The audience", "The listener", "The viewer only"], "B", "Plays are written to be performed for an audience."],
      ["What do stage directions show?", ["Only the title", "Movement, setting and how lines are delivered", "The themes", "The audience's reaction"], "B", "They guide performance and staging."],
      ["What is an aside?", ["A long speech", "A brief remark to the audience that other characters do not hear", "A scene change", "A costume change"], "B", "Asides share thoughts directly with the audience."],
      ["What is hamartia?", ["A comic scene", "The hero's fatal flaw", "A stage direction", "A type of rhyme"], "B", "It causes the hero's downfall."],
    ]),
    one("unseen", "Unseen texts", "Unseen texts", 6, "Responding to a poem or prose extract you have never seen before.", [
      ["Approach", ["Read it twice: first for overall meaning, then for detail.", "Work out who is speaking, what is happening and the mood.", "Annotate the most striking language and structural choices."]],
      ["Writing", ["Begin with a short overview of what the text is about and its effect.", "Work through the text in order or by theme, analysing methods.", "Comment on the ending and how it shapes the whole."]],
    ], ["Read twice before writing.", "Start with an overview.", "Analyse methods, not just meaning."], [
      ["What should you do first with an unseen text?", ["Start writing immediately", "Read it through for overall meaning", "Count the lines", "Learn it by heart"], "B", "A first read gives you the big picture."],
      ["What makes a good opening to an unseen response?", ["A summary of every line", "A short overview of the text's subject and effect", "Biography of the writer", "A quotation only"], "B", "An overview sets up your argument."],
      ["Why comment on the ending?", ["It is the shortest part", "It often changes or confirms the meaning of the whole text", "It is required by law", "Endings never matter"], "B", "Endings often reveal the writer's purpose."],
      ["What should annotations focus on?", ["Spelling", "Striking language and structural choices", "Page numbers", "Punctuation only"], "B", "These give you material for analysis."],
      ["Do you need to know the writer?", ["Yes, always", "No, focus on the text itself", "Only their birthday", "Only for prose"], "B", "Unseen questions test close reading, not background knowledge."],
    ]),
    one("essay", "Essay writing and close analysis", "Essay writing and close analysis", 7, "Building a clear argument and analysing extracts in detail.", [
      ["Building an argument", ["Plan for five minutes: a clear line of argument with three or four points.", "Topic sentence, evidence, analysis, link back to the question (PEEL).", "Use critical vocabulary: juxtaposition, motif, foreshadowing, symbolism."]],
      ["Close analysis", ["Zoom in on single words and phrases.", "Explore layers of meaning and connotations.", "Consider the effect on the reader or audience, and why the writer made that choice."]],
    ], ["Plan an argument before writing.", "PEEL paragraphs.", "Zoom in on single words."], [
      ["What does the L in PEEL stand for?", ["Language", "Link back to the question", "Length", "Literature"], "B", "Linking back keeps the paragraph relevant."],
      ["What is foreshadowing?", ["A flashback", "Hints about what will happen later", "A twist ending", "A summary"], "B", "Foreshadowing prepares the reader for later events."],
      ["What is a motif?", ["A recurring image or idea", "The main character", "The setting", "A type of poem"], "A", "Motifs recur to build meaning."],
      ["Why plan before writing an essay?", ["To waste time", "To build a clear, consistent argument", "Examiners mark the plan only", "Plans are not useful"], "B", "Planning keeps your essay focused."],
      ["What is juxtaposition?", ["Placing contrasting ideas close together", "Repeating a word", "A rhyme", "A long sentence"], "A", "Contrast placed side by side highlights differences."],
    ]),
  ],
};
