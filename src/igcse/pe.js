// Revision notes, quizzes and flashcards for IGCSE Physical Education (Cambridge 0413). Written
// for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "pe",
  name: "Physical Education",
  topics: [
    one("anatomy", "Anatomy and physiology", "Anatomy and physiology", 9, "Skeleton, muscles, joints, the heart and lungs, and energy systems.", [
      ["Skeleton and muscles", ["Functions of the skeleton: support, protection, movement, blood cell production, mineral storage.", "Joint types: ball and socket (shoulder, hip), hinge (knee, elbow). Movements: flexion, extension, abduction, adduction, rotation.", "Antagonistic pairs: biceps and triceps; one contracts (agonist) as the other relaxes (antagonist).", "Slow twitch fibres for endurance; fast twitch for power."]],
      ["Heart, lungs and energy", ["Cardiac output = stroke volume x heart rate.", "Tidal volume increases during exercise; gas exchange happens in the alveoli.", "Aerobic respiration: glucose + oxygen → carbon dioxide + water + energy.", "Anaerobic: glucose → lactic acid + energy, for short intense exercise. EPOC (oxygen debt) repays it afterwards."]],
    ], ["Cardiac output = stroke volume x heart rate.", "Antagonistic pairs work together.", "Anaerobic produces lactic acid."], [
      ["What is cardiac output?", ["Breaths per minute", "Stroke volume x heart rate", "Heart rate only", "Blood pressure"], "B", "Blood pumped per minute."],
      ["Which type of joint is the knee?", ["Ball and socket", "Hinge", "Pivot", "Fixed"], "B", "It allows flexion and extension."],
      ["When the biceps contracts to bend the elbow, what does the triceps do?", ["Contracts", "Relaxes", "Nothing", "Breaks"], "B", "The antagonist relaxes."],
      ["What does anaerobic respiration produce?", ["Carbon dioxide and water", "Lactic acid", "Oxygen", "Glycogen"], "B", "Lactic acid builds up."],
      ["Which muscle fibre suits a marathon?", ["Fast twitch", "Slow twitch", "Smooth muscle", "Cardiac only"], "B", "Slow twitch fibres resist fatigue."],
    ]),
    one("health", "Health, fitness and training", "Health, fitness and training", 8, "Components of fitness, training principles and methods.", [
      ["Fitness", ["Health related: cardiovascular endurance, strength, muscular endurance, flexibility, body composition.", "Skill related: agility, balance, coordination, power, reaction time, speed.", "Fitness tests: multi stage fitness test (beep test), sit and reach, hand grip, vertical jump, Illinois agility run."]],
      ["Training", ["Principles (SPORT and FITT): specificity, progression, overload, reversibility, tedium; frequency, intensity, time, type.", "Methods: continuous, interval, fartlek, circuit, weight, plyometric training.", "Training zones based on maximum heart rate (220 - age).", "Warm up and cool down reduce injury risk and help recovery."]],
    ], ["Health versus skill related fitness.", "SPORT and FITT principles.", "Max heart rate = 220 - age."], [
      ["What is the estimated maximum heart rate of a 20 year old?", ["180", "200", "220", "240"], "B", "220 - 20 = 200."],
      ["Which test measures flexibility?", ["Beep test", "Sit and reach", "Hand grip", "Vertical jump"], "B", "It measures hamstring and lower back flexibility."],
      ["Which training mixes speed and terrain without rest?", ["Interval", "Fartlek", "Weight", "Circuit"], "B", "Fartlek means speed play."],
      ["What is reversibility?", ["Fitness gains are lost when training stops", "Training gets harder", "Training matches the sport", "Variety"], "A", "Use it or lose it."],
      ["Which is a skill related component?", ["Flexibility", "Reaction time", "Body composition", "Muscular endurance"], "B", "It relates to performing skills."],
    ]),
    one("skill", "Skill acquisition and psychology", "Skill acquisition and psychology", 7, "How skills are learned, feedback, motivation and arousal.", [
      ["Skills", ["Skills are open (affected by environment) or closed; basic or complex; gross or fine.", "Information processing: input, decision making, output, feedback.", "Stages of learning: cognitive, associative, autonomous.", "Guidance: visual, verbal, manual, mechanical. Feedback: intrinsic and extrinsic, knowledge of results and of performance."]],
      ["Psychology", ["Motivation: intrinsic (enjoyment) and extrinsic (rewards).", "Arousal and performance: the inverted U theory says performance is best at moderate arousal.", "Goal setting with SMART targets: specific, measurable, achievable, realistic, time bound.", "Mental preparation: imagery, relaxation, positive self talk."]],
    ], ["Cognitive, associative, autonomous.", "Inverted U: best at moderate arousal.", "SMART targets."], [
      ["Which is an open skill?", ["A golf swing", "Passing in football during a match", "A gymnastics vault", "A free throw"], "B", "The environment keeps changing."],
      ["At which stage are skills automatic?", ["Cognitive", "Associative", "Autonomous", "Beginner"], "C", "Autonomous performers need little thought."],
      ["What does the inverted U theory say?", ["More arousal is always better", "Performance is best at a moderate level of arousal", "Arousal has no effect", "Low arousal is best"], "B", "Too little or too much harms performance."],
      ["What is intrinsic motivation?", ["Motivation from within, such as enjoyment", "Trophies", "Money", "Praise from others"], "A", "Inner drive."],
      ["What does the M in SMART stand for?", ["Motivating", "Measurable", "Maximum", "Mental"], "B", "Targets must be measurable."],
    ]),
    one("social", "Social, cultural and ethical influences", "Social, cultural and ethical influences", 6, "Participation, sponsorship, media, technology and drugs in sport.", [
      ["Influences", ["Participation is affected by age, gender, disability, culture, cost, access and role models.", "The media and sponsorship bring money and exposure but can change rules and timings.", "Technology: goal line technology, VAR, Hawk-Eye; better equipment and analysis.", "Globalisation of sport: international events and players."]],
      ["Ethics", ["Performance enhancing drugs: anabolic steroids (muscle), stimulants, beta blockers (calm), diuretics (weight loss and masking), EPO and blood doping (oxygen carrying).", "Risks to health and the integrity of sport; testing by WADA.", "Sportsmanship and gamesmanship."]],
    ], ["Factors affecting participation.", "Know each drug type and its effect.", "Sportsmanship versus gamesmanship."], [
      ["What do beta blockers do?", ["Build muscle", "Reduce heart rate and anxiety", "Increase red blood cells", "Lose weight"], "B", "Useful in archery and shooting, and banned."],
      ["What does EPO increase?", ["Muscle size", "Red blood cell production", "Flexibility", "Reaction time"], "B", "More oxygen can be carried."],
      ["Which organisation leads anti doping worldwide?", ["FIFA", "WADA", "UEFA", "IOC only"], "B", "World Anti-Doping Agency."],
      ["What is gamesmanship?", ["Bending the rules to gain an advantage without breaking them", "Fair play", "Doping", "Training hard"], "A", "Such as time wasting."],
      ["How can sponsorship affect sport?", ["It brings money but may influence event timings", "It has no effect", "It bans players", "It removes the media"], "A", "Sponsors and broadcasters have influence."],
    ]),
    one("practical", "Practical activities", "Practical activities", 5, "Performing and analysing in your chosen activities.", [
      ["Assessment", ["You are assessed in practical activities from different categories, such as games, athletics, gymnastics, dance and outdoor activities.", "Marks reflect skill, decision making, tactics and consistency under pressure.", "Analyse performance: identify strengths and weaknesses, and plan improvements.", "Know the rules, safety and etiquette of each activity."]],
    ], ["Skill, tactics and consistency.", "Analyse and improve.", "Rules and safety."], [
      ["What is assessed in practical activities?", ["Only fitness", "Skill, decisions, tactics and consistency", "Only attendance", "Only kit"], "B", "Performance in realistic situations."],
      ["What is performance analysis?", ["Identifying strengths and weaknesses and planning improvements", "Watching TV", "Buying kit", "Resting"], "A", "It drives improvement."],
      ["Why know the rules of your activity?", ["To play fairly and safely", "They do not matter", "Only referees need them", "To argue"], "A", "Rules and safety are part of competence."],
      ["What is a tactic?", ["A plan used to outwit opponents", "A muscle", "A training zone", "A drug"], "A", "Tactics apply in competition."],
      ["Why is consistency valued?", ["It shows skills hold up under pressure", "It is easier", "It is not valued", "Only for athletics"], "A", "Reliable performance matters."],
    ]),
  ],
};
