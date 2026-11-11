// Revision notes, quizzes and flashcards for IGCSE Global Perspectives (Cambridge 0457), which is
// assessed on skills rather than set content. Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "global",
  name: "Global Perspectives",
  topics: [
    one("research", "Research", "Research", 6, "Asking good questions and finding reliable evidence.", [
      ["Questions and sources", ["A good research question is focused, open and allows different perspectives.", "Consider global, national and local perspectives.", "Use a range of sources: articles, data, interviews, surveys.", "Primary research (your own survey) and secondary research (published sources)."]],
      ["Reliability", ["Check the author's expertise, purpose, date and possible bias.", "Cross check claims across several sources.", "Record sources so you can reference them."]],
      ["The course (Cambridge 0457)", ["Components: a written exam using sources on a global issue, an Individual Report (research on a global topic from different perspectives), and a Team Project (a team action with a reflective paper or presentation).", "Topics include belief systems, biodiversity and ecosystem loss, climate change, digital world, family, humans and other species, sustainable living, employment, water and food, poverty and inequality, trade and aid, conflict and peace, globalisation, sport and recreation, tradition, culture and identity.", "Perspectives: personal, local or national, and global.", "Skills: research, analysis, evaluation, reflection, collaboration and communication."]],
    ], ["Focused, open questions.", "Global, national, local perspectives.", "Check author, purpose and date."], [
      ["Which is the best research question?", ["Is pollution bad?", "To what extent should governments ban single use plastics?", "What is plastic?", "Do you like plastic?"], "B", "Focused, debatable and open to perspectives."],
      ["What is primary research?", ["Reading a textbook", "Collecting your own data, such as a survey", "Using a website", "Reading a newspaper"], "B", "First hand data."],
      ["Why cross check sources?", ["To confirm claims are reliable", "To waste time", "To copy more", "To find longer sources"], "A", "Agreement between sources builds confidence."],
      ["Which helps judge reliability?", ["The colour of the website", "The author's expertise and purpose", "The number of images", "The font"], "B", "Expertise and purpose matter."],
      ["What are the three levels of perspective?", ["Personal, family, school", "Global, national, local", "Past, present, future", "Economic, social, political"], "B", "Global Perspectives considers all three."],
      ["What are the three levels of perspective?", ["Past, present, future", "Personal, local or national, and global", "Political, economic, social", "Primary, secondary, tertiary"], "B", "Consider all three."],
    ]),
    one("analysis", "Analysis", "Analysis", 6, "Identifying arguments, causes, consequences and perspectives.", [
      ["Skills", ["Identify the issue, its causes and its consequences.", "Separate facts, opinions, predictions and value judgements.", "Recognise different perspectives and the reasons behind them.", "Interpret data: trends, patterns and anomalies."]],
    ], ["Causes and consequences.", "Fact versus opinion.", "Perspectives have reasons behind them."], [
      ["Which is a fact?", ["Electric cars are the best", "Global average temperatures have risen since 1900", "Everyone should recycle", "Cities will be underwater by 2030"], "B", "It can be checked with evidence."],
      ["What is a value judgement?", ["A measurement", "A statement of what is good or bad", "A prediction", "A statistic"], "B", "It reflects values, not just facts."],
      ["What is a consequence?", ["A reason something happens", "A result of something happening", "An opinion", "A source"], "B", "An outcome or effect."],
      ["What is an anomaly in data?", ["A result that does not fit the pattern", "The average", "The trend", "The title"], "A", "Unusual results need explaining."],
      ["Why identify different perspectives?", ["To understand why people see an issue differently", "To choose the most popular", "To ignore minority views", "To shorten work"], "A", "This is central to the subject."],
    ]),
    one("evaluation", "Evaluation", "Evaluation", 6, "Judging the strength of arguments and evidence.", [
      ["Evaluating", ["Consider the reasoning: is it logical, or are there gaps and assumptions?", "Consider the evidence: is it relevant, sufficient, recent and from a credible source?", "Look for vested interests and bias.", "Reach a supported judgement about which argument is stronger."]],
    ], ["Reasoning and evidence.", "Vested interests weaken credibility.", "End with a supported judgement."], [
      ["What weakens an argument?", ["Relevant evidence", "Unsupported assumptions", "Clear reasoning", "Expert sources"], "B", "Assumptions without evidence weaken it."],
      ["What is a vested interest?", ["A personal gain from a particular outcome", "A type of evidence", "A neutral view", "A conclusion"], "A", "It can bias a source."],
      ["What makes evidence strong?", ["It is old and vague", "It is relevant, sufficient and credible", "It is emotional", "It is anonymous"], "B", "Quality evidence supports claims."],
      ["What should an evaluation end with?", ["A summary only", "A supported judgement", "A question", "Nothing"], "B", "Decide which argument is stronger and why."],
      ["Which is a logical flaw?", ["Using statistics", "Generalising from one example", "Citing experts", "Comparing data"], "B", "One case does not prove a general claim."],
    ]),
    one("reflection", "Reflection", "Reflection", 5, "Thinking about how your views and work have developed.", [
      ["Reflecting", ["Explain how your perspective changed and why.", "Consider what you learned from others' perspectives.", "Evaluate your own contribution and what you would do differently.", "Use specific examples rather than general comments."]],
    ], ["How and why your view changed.", "Specific examples.", "What you would improve."], [
      ["What is good reflection?", ["Saying 'it went well'", "Explaining specifically how and why your views or work developed", "Repeating the task", "Listing sources"], "B", "Detail and reasons matter."],
      ["Why consider other perspectives in reflection?", ["They may have changed or challenged your view", "To copy them", "They are always right", "To fill space"], "A", "Reflection shows openness to other views."],
      ["Which is a specific reflective comment?", ["It was fine", "The interview with a local farmer changed my view on biofuels", "I liked it", "We worked hard"], "B", "Specific and explained."],
      ["What should you say about improvements?", ["Nothing", "What you would do differently and why", "Blame others", "Only praise"], "B", "Forward looking reflection is valued."],
      ["Reflection is about:", ["Your own learning and development", "Other people's mistakes", "Only the final mark", "The weather"], "A", "It focuses on your growth."],
    ]),
    one("collaboration", "Collaboration", "Collaboration", 5, "Working well in a team project.", [
      ["Teamwork", ["Agree shared aims, roles and deadlines.", "Each member contributes a different perspective or piece of research.", "Communicate regularly and resolve disagreements respectfully.", "The team project often proposes a solution to a local problem."]],
    ], ["Clear roles and deadlines.", "Different perspectives strengthen the outcome.", "Respectful conflict resolution."], [
      ["Why assign roles in a team?", ["To avoid duplication and ensure everything is covered", "To let one person do everything", "To create conflict", "It is not needed"], "A", "Clear roles improve efficiency."],
      ["What should a team do when members disagree?", ["Ignore it", "Discuss respectfully and agree a way forward", "Vote someone out", "Stop working"], "B", "Constructive resolution."],
      ["What does each member bring to a good team project?", ["The same research", "A different perspective or area of research", "Nothing", "Only opinions"], "B", "Variety strengthens the outcome."],
      ["Why set deadlines?", ["To keep the project on track", "To pressure others unfairly", "They are optional", "Only for the teacher"], "A", "Planning prevents last minute problems."],
      ["What often forms the outcome of the team project?", ["A proposed solution to a problem", "A single essay by one person", "A test", "A poem"], "A", "Teams propose action on an issue."],
    ]),
    one("communication", "Communication", "Communication", 5, "Presenting arguments clearly in writing and presentations.", [
      ["Skills", ["Structure: introduction, argument, counter argument, conclusion.", "Use evidence with references.", "Write clearly and concisely for the audience.", "Presentations: clear visuals, not too much text, confident delivery."]],
    ], ["Clear structure.", "Reference your evidence.", "Visuals support, not replace, the message."], [
      ["Why include a counter argument?", ["To show balance and strengthen your case by responding to it", "To confuse readers", "It is not needed", "To fill space"], "A", "Addressing objections shows critical thinking."],
      ["What makes good presentation slides?", ["Lots of small text", "Clear visuals and key points", "No images", "Reading every word aloud"], "B", "Slides should support the speaker."],
      ["Why reference sources?", ["To show where evidence comes from", "To make it longer", "Examiners like lists", "It is optional"], "A", "Credibility and honesty."],
      ["What should a conclusion do?", ["Introduce new evidence", "Summarise and give a judgement", "Repeat the title", "Ask the reader to decide"], "B", "Bring the argument together."],
      ["Which is clear writing?", ["Long sentences full of jargon", "Concise sentences suited to the audience", "Text speak", "Random order"], "B", "Clarity helps the reader."],
    ]),
  ],
};
