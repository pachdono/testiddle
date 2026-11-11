// Revision notes, quizzes and flashcards for IGCSE First Language Thai (Cambridge 0518). The exam
// is in Thai; these notes explain the skills in English, with Thai terms where they help.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "thai",
  name: "Thai",
  topics: [
    one("comprehension", "Reading comprehension", "Reading comprehension", 7, "Understanding explicit and implied meaning in Thai texts.", [
      ["Skills", ["Find stated facts precisely, and infer ideas the writer suggests.", "Explain how word choice (การเลือกใช้คำ) creates tone and feeling.", "Use your own words (สำนวนของตนเอง) where the question asks, rather than copying."]],
      ["Language features", ["Figurative language (ภาพพจน์): simile (อุปมา), metaphor (อุปลักษณ์), personification (บุคคลวัต).", "Formal and informal register (ระดับภาษา) show the writer's attitude and audience.", "Royal and polite vocabulary (ราชาศัพท์, คำสุภาพ) can signal respect and formality."]],
    ], ["Stated versus implied meaning.", "Explain the effect of word choice.", "Register shows audience and attitude."], [
      ["What is อุปมา?", ["Metaphor", "Simile", "Personification", "Alliteration"], "B", "อุปมา is a comparison using words like เหมือน (like)."],
      ["What does inference mean?", ["Copying the text", "Working out meaning that is suggested, not stated", "Counting words", "Summarising"], "B", "Inference reads between the lines."],
      ["What is บุคคลวัต?", ["Simile", "Personification", "Hyperbole", "Rhyme"], "B", "Giving human qualities to non human things."],
      ["Why does register (ระดับภาษา) matter?", ["It shows the writer's attitude and intended audience", "It is about handwriting", "It only matters in speech", "It does not matter"], "A", "Formal or informal language reveals purpose and audience."],
      ["When asked to use your own words, you should:", ["Copy the sentence", "Rephrase the meaning", "Write a quotation", "Leave it blank"], "B", "Rephrasing shows understanding."],
    ]),
    one("summary", "Summary", "Summary writing", 6, "Selecting and condensing the main points in Thai.", [
      ["Method", ["Read the task and identify exactly what to summarise.", "Pick out main points (ใจความสำคัญ), leaving out examples and repetition.", "Write in continuous prose, in your own words, within the word limit.", "Do not add opinions."]],
    ], ["Main points only.", "Own words, continuous prose.", "No opinions."], [
      ["What is ใจความสำคัญ?", ["Examples", "The main points", "The title", "The conclusion only"], "B", "It means the key or main idea."],
      ["What should a summary leave out?", ["Main points", "Examples and repetition", "Facts relevant to the task", "Key ideas"], "B", "Cut detail, keep main ideas."],
      ["Should you add your own opinion?", ["Yes", "No", "Only at the start", "Only if asked for a review"], "B", "A summary reports the text's ideas."],
      ["What form should it take?", ["Bullet points", "Continuous prose", "A poem", "A table"], "B", "Unless told otherwise, write in paragraphs."],
      ["Why respect the word limit?", ["Concision is assessed", "To finish quickly", "It is a suggestion only", "It does not matter"], "A", "Going over can lose marks."],
    ]),
    one("directed", "Directed writing", "Directed writing", 7, "Writing for a given purpose and audience using ideas from the texts.", [
      ["The task", ["You may write a letter (จดหมาย), article (บทความ), speech (สุนทรพจน์) or report.", "Use and develop the ideas from the reading material.", "Match register to the audience: formal Thai for official readers."]],
      ["Conventions", ["A formal letter has the address, date, greeting (เรียน), body and closing (ขอแสดงความนับถือ).", "Speeches address the audience directly and use persuasive devices.", "Organise points in clear paragraphs with linking words."]],
    ], ["Use and develop the given ideas.", "Formal register for official audiences.", "Follow letter conventions."], [
      ["Which greeting is used in a formal Thai letter?", ["สวัสดีจ้ะ", "เรียน", "ไง", "หวัดดี"], "B", "เรียน is the formal salutation."],
      ["What closing goes at the end of a formal letter?", ["บาย", "ขอแสดงความนับถือ", "แล้วเจอกัน", "รักนะ"], "B", "It means 'yours respectfully'."],
      ["What is สุนทรพจน์?", ["An article", "A speech", "A diary", "A report"], "B", "สุนทรพจน์ is a speech."],
      ["What should you do with ideas from the reading texts?", ["Ignore them", "Use and develop them", "Copy them word for word", "Only quote them"], "B", "Development is rewarded."],
      ["Who decides the register you use?", ["The audience and purpose", "Your mood", "The length", "The examiner's name"], "A", "Register fits the reader and the task."],
    ]),
    one("composition", "Composition", "Composition", 7, "Descriptive and narrative writing in Thai.", [
      ["Description", ["Use the senses and precise vocabulary to build atmosphere.", "Figurative language used with control, not overused.", "Vary sentence length and structure."]],
      ["Narrative", ["A clear structure: opening, development, climax, ending.", "A simple plot with well developed characters.", "Accurate spelling (การสะกดคำ), tone marks and punctuation throughout."]],
    ], ["Plan before you write.", "Control figurative language.", "Check spelling and tone marks."], [
      ["What makes a description vivid?", ["Long lists of facts", "Sensory detail and precise vocabulary", "Dialogue only", "Repeating the title"], "B", "Senses and precision create atmosphere."],
      ["What is a sensible narrative structure?", ["Opening, development, climax, ending", "Ending first only", "Random events", "Just dialogue"], "A", "A clear arc keeps the story satisfying."],
      ["Why check tone marks?", ["They can change the meaning and spelling of words", "They are decorative", "They are optional", "Examiners ignore them"], "A", "A wrong tone mark can make a different word."],
      ["How should figurative language be used?", ["As much as possible", "With control, where it adds effect", "Never", "Only at the end"], "B", "Overuse weakens writing."],
      ["What does การสะกดคำ refer to?", ["Spelling", "Grammar", "Paragraphs", "Handwriting"], "A", "การสะกดคำ means spelling."],
    ]),
  ],
};
