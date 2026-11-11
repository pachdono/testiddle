// Revision notes, quizzes and flashcards for IGCSE English as a Second Language (Cambridge 0510).
// Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "esl",
  name: "English as a Second Language",
  topics: [
    one("reading", "Reading", "Reading tasks", 7, "Skimming, scanning, note making and matching tasks.", [
      ["Skills", ["Skimming: reading quickly for the general idea.", "Scanning: searching for specific details such as names, dates and numbers.", "Note making: short notes under headings, without full sentences.", "Matching: link statements to people or sections; look for paraphrases rather than the same words."]],
      ["Tips", ["Read the questions before the text.", "Answers usually follow the order of the text.", "Keep answers short and precise; spelling of key words matters."]],
    ], ["Skim for gist, scan for detail.", "Look for paraphrases, not identical words.", "Read the questions first."], [
      ["What is scanning?", ["Reading every word slowly", "Searching quickly for specific information", "Reading for the general idea", "Writing a summary"], "B", "Scanning finds particular details like dates and names."],
      ["In matching tasks, what should you look for?", ["Exactly the same words", "Paraphrases with the same meaning", "The longest paragraph", "The title"], "B", "Questions usually reword the text."],
      ["What is skimming used for?", ["Finding a phone number", "Getting the general idea quickly", "Checking spelling", "Counting words"], "B", "Skimming gives the gist."],
      ["How should note making answers be written?", ["Long full sentences", "Short notes", "As a letter", "In capital letters only"], "B", "Brief notes are all that is needed."],
      ["Why read the questions first?", ["It saves no time", "So you know what to look for", "It is a rule", "To memorise them"], "B", "You can read the text with a purpose."],
    ]),
    one("writing", "Writing", "Writing tasks", 8, "Emails, articles, reports and reviews with the right register.", [
      ["Forms", ["Email or letter: greeting, clear paragraphs, closing. Informal to a friend, formal to an organisation.", "Article: a catchy title, engaging opening, opinions and examples.", "Report: a clear title, neutral tone, headings and recommendations.", "Review: describe briefly, give opinions and a recommendation."]],
      ["Language", ["Use linking words: however, furthermore, as a result, on the other hand.", "Vary vocabulary and sentence structures.", "Cover every point in the task and keep to the word count.", "Check tenses, articles and subject verb agreement."]],
      ["Grammar and register", ["Tenses to show range: present simple and continuous, past simple and continuous, present perfect, past perfect, future forms (will, going to), conditionals (if I had more time, I would...).", "Formal register: no contractions or slang, polite phrases (I would be grateful if...). Informal: contractions, friendly phrases (Can't wait to see you!).", "Keep to the word count; plan paragraphs: introduction, main points, conclusion.", "Useful phrases: In my opinion, On the one hand... on the other hand, To sum up, I strongly recommend."]],
    ], ["Match register to the reader.", "Cover all the content points.", "Use linking words and varied sentences."], [
      ["Which is a formal email opening?", ["Hey!", "Dear Sir or Madam,", "Hi mate,", "Yo"], "B", "Formal emails use a polite, standard greeting."],
      ["Which linking word shows contrast?", ["Furthermore", "However", "Also", "Firstly"], "B", "However introduces a contrasting idea."],
      ["What tone does a report usually have?", ["Chatty", "Neutral and factual", "Angry", "Poetic"], "B", "Reports present information objectively."],
      ["Which sentence is correct?", ["She go to school every day.", "She goes to school every day.", "She going to school every day.", "She gone to school every day."], "B", "Third person singular takes -s in the present simple."],
      ["What should a review include?", ["Only facts", "A description, opinions and a recommendation", "A list of prices only", "A story"], "B", "Reviews give a view and a recommendation."],
      ["Which is formal?", ["Can't wait!", "I would be grateful if you could reply.", "Hey there", "Gonna"], "B", "Polite and no contractions."],
    ]),
    one("listening", "Listening", "Listening tasks", 6, "Short answers, gap fills and multiple choice from recordings.", [
      ["Before and during", ["Use the reading time to underline key words in the questions.", "Predict the type of answer: a number, a place, a name.", "Listen for paraphrases and for corrections: 'not Tuesday, actually Wednesday'.", "You hear each recording twice: use the second time to check."]],
      ["Answers", ["Keep answers short; spelling should be recognisable.", "Never leave a blank: make a sensible guess."]],
    ], ["Predict the type of answer.", "Watch for speakers correcting themselves.", "Use the second listening to check."], [
      ["What should you do in the reading time before a recording?", ["Close your eyes", "Underline key words and predict answers", "Write your name only", "Start the next section"], "B", "Preparation helps you know what to listen for."],
      ["A speaker says 'the meeting is on Monday, sorry, Tuesday'. What is the answer?", ["Monday", "Tuesday", "Both", "Neither"], "B", "The correction gives the right answer."],
      ["How many times do you usually hear each recording?", ["Once", "Twice", "Three times", "As many as you like"], "B", "Each recording is played twice."],
      ["What should you do if you are not sure of an answer?", ["Leave it blank", "Make a sensible guess", "Write two answers", "Write a question mark"], "B", "A guess might be right; a blank never is."],
      ["Why predict the type of answer?", ["To save ink", "To help you recognise it when you hear it", "Because it is marked", "To finish early"], "B", "Knowing you need a number or name focuses your listening."],
    ]),
    one("speaking", "Speaking", "Speaking test", 5, "A warm up, then a conversation on a topic card.", [
      ["The test", ["A short warm up conversation (not marked) to relax.", "A topic card with prompts that move from personal to more general and abstract ideas.", "Marked on structure, vocabulary, fluency and pronunciation."]],
      ["Doing well", ["Extend your answers with reasons and examples.", "Use a range of tenses and vocabulary.", "If you do not understand, ask: 'Could you repeat that, please?'", "Express opinions: 'In my view', 'I would argue that'."]],
    ], ["Extend every answer.", "Show a range of language.", "Asking for repetition is fine."], [
      ["How should you answer a question in the speaking test?", ["With one word", "With an extended answer including reasons and examples", "By reading notes", "In your first language"], "B", "Extended answers show your range and fluency."],
      ["Is the warm up marked?", ["Yes, heavily", "No, it helps you relax", "Only pronunciation", "Only grammar"], "B", "The warm up is not assessed."],
      ["You did not understand a question. What should you do?", ["Stay silent", "Politely ask for it to be repeated", "Answer a different question", "Leave the room"], "B", "Asking for repetition is perfectly acceptable."],
      ["Which phrase expresses an opinion?", ["In my view", "Yesterday", "There is", "For example"], "A", "It introduces your own opinion."],
      ["How do topic card prompts usually develop?", ["From abstract to personal", "From personal to more general and abstract", "They are all the same", "Randomly"], "B", "Prompts become more challenging as the conversation goes on."],
    ]),
  ],
};
