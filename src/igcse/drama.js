// Revision notes, quizzes and flashcards for IGCSE Drama (Cambridge 0411). Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "drama",
  name: "Drama",
  topics: [
    one("pre-release", "Pre-release material", "Working with the pre-release material", 7, "Studying the extract you receive before the written exam.", [
      ["Preparing", ["Read the extract many times; understand plot, characters, relationships and themes.", "Explore it practically: try staging, voice and movement choices.", "Consider how you would direct, design and perform key moments.", "Think about the intended effect on the audience."]],
    ], ["Explore practically, not just on paper.", "Think as actor, director and designer.", "Always consider the audience."], [
      ["Why explore the extract practically?", ["It helps you understand staging and performance choices", "It is not useful", "To memorise it only", "Examiners watch it"], "A", "Practical work informs written answers."],
      ["Which roles should you think about?", ["Only the actor", "Actor, director and designer", "Only the audience", "Only the writer"], "B", "Questions can ask from each viewpoint."],
      ["What should every choice aim at?", ["An intended effect on the audience", "Being as long as possible", "Using the most props", "Confusing the audience"], "A", "Drama is about impact."],
      ["What are stage directions?", ["Instructions in the script about action, setting or delivery", "Audience seating", "Ticket prices", "Lighting only"], "A", "They guide staging."],
      ["What does 'blocking' mean?", ["Planning actors' movements and positions on stage", "Stopping a scene", "Building a set", "Writing dialogue"], "A", "Blocking organises the stage picture."],
    ]),
    one("devising", "Devising", "Devising", 6, "Creating original drama from a stimulus.", [
      ["Process", ["Start from a stimulus: a poem, photograph, object, headline or theme.", "Research, improvise, select and shape material.", "Choose a style or form: naturalism, physical theatre, epic theatre (Brecht).", "Use techniques: still images (tableaux), thought tracking, flashback, narration, multi role."]],
    ], ["Stimulus, improvise, shape.", "Choose a clear style.", "Use techniques with purpose."], [
      ["What is a tableau?", ["A still image created by actors", "A song", "A script", "A costume"], "A", "A frozen picture."],
      ["What is thought tracking?", ["A character speaks their inner thoughts aloud", "Following a script", "Lighting a scene", "Audience voting"], "A", "Reveals inner feelings."],
      ["Which practitioner is linked with epic theatre?", ["Stanislavski", "Brecht", "Shakespeare", "Artaud"], "B", "Bertolt Brecht."],
      ["What is a stimulus in devising?", ["A starting point for ideas", "The final performance", "The audience", "A costume"], "A", "It sparks the work."],
      ["What does multi role mean?", ["One actor playing several characters", "Many actors playing one role", "A director acting", "Several directors"], "A", "Actors switch roles."],
    ]),
    one("performing", "Performing", "Performing", 6, "Vocal, physical and characterisation skills.", [
      ["Skills", ["Vocal: pitch, pace, pause, volume, tone, accent, emphasis.", "Physical: posture, gesture, facial expression, movement, use of space, proxemics (distance between characters).", "Characterisation: motivation, objectives, relationships; Stanislavski's methods such as emotion memory and given circumstances.", "Ensemble work, focus and timing."]],
    ], ["Vocal and physical skills.", "Proxemics shows relationships.", "Know your character's objective."], [
      ["What are proxemics?", ["Distances between characters on stage", "Vocal tone", "Costumes", "Lighting levels"], "A", "Space shows relationships."],
      ["Which is a vocal skill?", ["Gesture", "Pace", "Posture", "Facial expression"], "B", "Pace is speed of speech."],
      ["Which practitioner developed emotion memory?", ["Brecht", "Stanislavski", "Artaud", "Berkoff"], "B", "Konstantin Stanislavski."],
      ["What is a character's objective?", ["What they want in a scene", "Their costume", "Their age only", "The lighting cue"], "A", "It drives their actions."],
      ["Why use a pause?", ["To create tension or emphasis", "To forget lines", "To end the play", "It has no effect"], "A", "Silence can be powerful."],
    ]),
    one("written", "Written examination", "The written examination", 7, "Answering questions on the pre-release extract and your own devised work.", [
      ["Answering", ["Be specific: refer to particular moments, lines and staging choices.", "Explain how and why: link choices to the intended effect on the audience.", "Use drama vocabulary: proscenium, thrust, traverse, in the round, downstage, upstage.", "Evaluate your devised work honestly, with examples."]],
      ["The course (Cambridge 0411)", ["Component 1: Written exam on the pre-release material (extracts from a play and stimuli for devising): questions as actor, director and designer.", "Component 2: Coursework: performances of an extract from a play and a devised piece, plus a group devised piece (check the current specification).", "Answer from the perspective asked: actor (voice, movement, characterisation), director (staging, blocking, relationships, intentions), designer (set, lighting, sound, costume)."]],
      ["Practitioners and terms", ["Stanislavski: naturalism, given circumstances, objectives, emotion memory, the magic if.", "Brecht: epic theatre, alienation (Verfremdung), breaking the fourth wall, placards, gestus, multi role.", "Artaud: theatre of cruelty, sensory experience. Frantic Assembly and physical theatre.", "Terms: blocking, proxemics (space between characters), levels, sightlines, cross cutting, marking the moment, split stage, monologue, still image."]],
    ], ["Specific moments and lines.", "How and why, linked to effect.", "Know stage types and positions."], [
      ["Which stage has the audience on all sides?", ["Proscenium", "Thrust", "In the round", "End on"], "C", "The audience surrounds the stage."],
      ["Where is downstage?", ["Nearest the audience", "Furthest from the audience", "Stage left only", "Above the stage"], "A", "Downstage is towards the audience."],
      ["What is a traverse stage?", ["Audience on two opposite sides", "Audience on three sides", "Audience all around", "A picture frame stage"], "A", "Like a catwalk."],
      ["What makes a strong exam answer?", ["General statements", "Specific examples with the intended effect explained", "Retelling the plot", "Listing props"], "B", "Detail and purpose."],
      ["What is a proscenium arch stage?", ["A picture frame stage with the audience facing one side", "Audience on all sides", "Audience on two sides", "An outdoor stage only"], "A", "The traditional theatre layout."],
      ["Which practitioner used the alienation effect?", ["Stanislavski", "Brecht", "Artaud", "Shakespeare"], "B", "To make audiences think, not just feel."],
      ["What are proxemics?", ["Lighting cues", "The use of space between characters", "Voice skills", "Costume"], "B", "Distance shows relationships."],
    ]),
  ],
};
