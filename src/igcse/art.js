// Revision notes, quizzes and flashcards for IGCSE Art and Design (Cambridge 0400). Written for
// Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "art",
  name: "Art and Design",
  topics: [
    one("recording", "Recording observations", "Recording observations", 6, "Drawing and photographing from first hand observation.", [
      ["Recording", ["Work from first hand sources wherever you can: objects, people, places.", "Use a range of methods: drawing, photography, notes, rubbings.", "Explore the formal elements: line, tone, shape, form, texture, colour, pattern, composition.", "Annotate to explain what you noticed and why it interests you."]],
    ], ["First hand observation is valued most.", "Use all the formal elements.", "Annotate with purpose."], [
      ["Which is a first hand source?", ["A photo from the internet", "A real object you draw in front of you", "A book illustration", "A film still"], "B", "Direct observation."],
      ["Which is a formal element?", ["Tone", "Price", "Size of paper", "Artist's age"], "A", "Line, tone, shape, form, texture, colour, pattern."],
      ["What is tone?", ["Lightness and darkness", "A type of brush", "A colour wheel", "A frame"], "A", "Tone shows light and shadow."],
      ["Why annotate observational work?", ["To explain observations and intentions", "To fill space", "To replace drawing", "It is not allowed"], "A", "It shows your thinking."],
      ["What is composition?", ["The arrangement of elements in an artwork", "The paint type", "The title", "The frame"], "A", "How the parts are arranged."],
    ]),
    one("media", "Exploring media and processes", "Exploring media and processes", 6, "Experimenting with materials and techniques.", [
      ["Experimenting", ["Try a range of media: pencil, charcoal, ink, watercolour, acrylic, collage, printmaking, clay, digital.", "Record experiments and evaluate which media suit your ideas.", "Refine techniques as you develop work.", "Take risks: unexpected results can lead to strong ideas."]],
    ], ["Range of media.", "Evaluate experiments.", "Refine your best techniques."], [
      ["Why experiment with different media?", ["To find the best way to express your ideas", "To use up materials", "To finish faster", "It is not assessed"], "A", "Exploration is assessed."],
      ["Which is a printmaking technique?", ["Lino printing", "Watercolour wash", "Charcoal shading", "Pencil hatching"], "A", "Lino cuts are relief prints."],
      ["What should you do after an experiment?", ["Throw it away", "Evaluate what worked and why", "Copy it exactly", "Hide it"], "B", "Reflection guides development."],
      ["What is collage?", ["Building an image from pieces of paper, fabric or other materials", "A type of pencil", "A sculpture tool", "A digital filter only"], "A", "Layered materials."],
      ["What is cross hatching?", ["Overlapping lines to create tone", "A painting style", "A clay technique", "A printing method"], "A", "Denser lines give darker tones."],
    ]),
    one("developing", "Developing ideas", "Developing ideas", 6, "Linking research, artists and experiments into a direction.", [
      ["Development", ["Research artists and designers; respond to their methods, not just copy them.", "Show a clear journey from first ideas to final plans.", "Combine and refine ideas through compositions and studies.", "Annotation explains links and decisions."]],
    ], ["Respond to artists, do not just copy.", "Show a clear journey.", "Explain decisions."], [
      ["How should you use another artist's work?", ["Trace it", "Respond to their methods and ideas in your own work", "Ignore it", "Sell it"], "B", "Influence, not imitation."],
      ["What does development show?", ["The journey from first ideas to a resolved outcome", "Only the final piece", "Only research", "A list of artists"], "A", "The process is assessed."],
      ["Why make several composition studies?", ["To test and refine ideas", "To waste paper", "It is required to be identical", "To avoid a final piece"], "A", "Trying options improves the outcome."],
      ["What is a mood board?", ["A collection of images and materials to explore a theme", "A final painting", "A frame", "A type of brush"], "A", "It gathers visual ideas."],
      ["Annotation in development should:", ["Explain your choices and links", "Copy artist biographies", "Be very long and unrelated", "Be avoided"], "A", "Purposeful notes show thinking."],
    ]),
    one("final", "Final outcome", "Final outcome", 5, "Producing a resolved final piece.", [
      ["The final piece", ["The final outcome should clearly grow from your supporting studies.", "Plan time, materials and size.", "Show technical skill and a personal response.", "Evaluate your outcome against your intentions."]],
    ], ["Link to supporting studies.", "Plan carefully.", "Personal, skilful response."], [
      ["What should a final outcome show?", ["A clear link to your preparatory work", "A completely new idea", "Only copying", "Nothing personal"], "A", "It resolves your development."],
      ["Why plan the final piece?", ["To manage time and materials", "It is not needed", "To change the topic", "To avoid skill"], "A", "Planning prevents problems in the exam."],
      ["What is a personal response?", ["Your own interpretation of the theme", "A copy of a famous work", "A friend's idea", "A photograph of the teacher"], "A", "Originality matters."],
      ["What should you do after finishing?", ["Evaluate it against your intentions", "Throw away studies", "Start another topic", "Nothing"], "A", "Evaluation shows understanding."],
      ["What does 'resolved' mean for a final piece?", ["Complete and well realised", "Unfinished", "Torn up", "A sketch"], "A", "A finished, considered outcome."],
    ]),
    one("supporting", "Supporting studies", "Supporting studies", 5, "Presenting research and development effectively.", [
      ["Presentation", ["Supporting studies show research, recording, experiments and development.", "Present work clearly in a sketchbook or on sheets with a logical order.", "Include contextual research on artists, cultures and movements.", "Annotate thoughtfully with art vocabulary."]],
    ], ["Logical order.", "Contextual research.", "Use art vocabulary."], [
      ["What do supporting studies include?", ["Only the final piece", "Research, recording, experiments and development", "Only written essays", "Photographs of friends"], "B", "The whole creative process."],
      ["What is contextual research?", ["Studying artists, cultures and movements related to your work", "Measuring paper", "Buying materials", "Framing work"], "A", "It informs your ideas."],
      ["Why use art vocabulary in annotations?", ["To show understanding", "To confuse examiners", "It is not allowed", "To make it longer"], "A", "Precise language shows knowledge."],
      ["How should supporting work be ordered?", ["Randomly", "Logically, showing your journey", "Alphabetically", "By size"], "B", "The examiner follows your process."],
      ["What is an art movement?", ["A style or approach shared by a group of artists in a period, such as Impressionism", "A dance", "A gallery", "A paint brand"], "A", "Movements give context."],
    ]),
  ],
};
