// Revision notes, quizzes and flashcards for IGCSE Mandarin Chinese (Cambridge 0547, Edexcel 4CN1).
// Characters are simplified, with pinyin. Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "mandarin",
  name: "Mandarin Chinese",
  topics: [
    one("everyday", "Everyday activities: home, school, food and routine", "Daily life in Mandarin", 8, "Home, school, food and routine, with time words and basic sentence order.", [
      ["Vocabulary", ["家 jiā (home), 房间 fángjiān (room), 厨房 chúfáng (kitchen).", "学校 xuéxiào (school), 科目 kēmù (subject), 老师 lǎoshī (teacher).", "早饭 zǎofàn (breakfast), 午饭 wǔfàn (lunch), 晚饭 wǎnfàn (dinner), 米饭 mǐfàn (rice)."]],
      ["Grammar", ["Word order: subject + time + place + verb + object. 我每天七点起床 (I get up at seven every day).", "Verbs do not change for person or tense.", "Time: 点 diǎn (o'clock), 半 bàn (half past). 七点半 is half past seven."]],
      ["Food, health and routine", ["食物 shíwù: 米饭 mǐfàn (rice), 面条 miàntiáo (noodles), 饺子 jiǎozi (dumplings), 蔬菜 shūcài (vegetables), 水果 shuǐguǒ (fruit), 喝茶 hē chá (drink tea).", "健康 jiànkāng: 我头疼 wǒ tóu téng (I have a headache), 我感冒了 wǒ gǎnmào le (I have a cold), 应该多运动 yīnggāi duō yùndòng (should exercise more).", "Routine: 我七点起床 wǒ qī diǎn qǐchuáng (I get up at 7), 吃早饭, 上学, 睡觉 shuìjiào.", "Time comes before the verb: 我每天八点上学."]],
    ], ["Time comes before the verb.", "Verbs never conjugate.", "七点半 = 7:30."], [
      ["What does 早饭 mean?", ["Lunch", "Breakfast", "Dinner", "Rice"], "B", "早 is early or morning: breakfast."],
      ["Which word order is correct?", ["我起床七点", "我七点起床", "起床我七点", "七点起床我"], "B", "Time comes before the verb."],
      ["What does 老师 mean?", ["Student", "Teacher", "School", "Classroom"], "B", "老师 lǎoshī is teacher."],
      ["How do you write half past eight?", ["八点半", "半八点", "八半点", "点八半"], "A", "Hour + 点 + 半."],
      ["Do Chinese verbs change for I, you, he?", ["Yes, always", "No, they stay the same", "Only for he", "Only in the past"], "B", "Chinese verbs do not conjugate."],
      ["What does 我头疼 mean?", ["I am hungry", "I have a headache", "I am tired", "I am cold"], "B", "头 head, 疼 hurts."],
    ]),
    one("personal", "Personal and social life: family, friends, free time and holidays", "Family, friends and free time", 8, "Family members, describing people, hobbies and talking about the past with 了.", [
      ["Vocabulary", ["爸爸 bàba, 妈妈 māma, 哥哥 gēge (older brother), 妹妹 mèimei (younger sister).", "高 gāo (tall), 矮 ǎi (short), 友好 yǒuhǎo (friendly), 有意思 yǒu yìsi (interesting).", "踢足球 tī zúqiú (play football), 看电影 kàn diànyǐng (watch films), 听音乐 tīng yīnyuè (listen to music)."]],
      ["Grammar", ["很 hěn before adjectives: 他很高 (he is tall). Do not use 是 with adjectives.", "Completed actions: verb + 了 le. 我去了北京 (I went to Beijing).", "Experience: verb + 过 guo. 我去过中国 (I have been to China).", "Measure words: 一个人, 两只猫, 一本书."]],
      ["Aspect, measure words and questions", ["了 le: completed action (我吃了饭). 过 guo: past experience (我去过中国, I have been to China). 着 zhe: ongoing state.", "Measure words: 一个人 (person), 一本书 (book), 一只猫 (animal), 一张纸 (flat thing), 一杯茶 (cup), 一件衣服 (clothes).", "Questions: add 吗 ma (你好吗?), A不A (你去不去?), question words stay in place (你去哪儿?).", "Celebrations: 春节 Chūnjié (Spring Festival), 中秋节 (Mid Autumn Festival), 生日 shēngrì (birthday)."]],
    ], ["Use 很, not 是, before adjectives.", "了 for completed actions, 过 for experience.", "Every number needs a measure word."], [
      ["How do you say 'he is tall'?", ["他是高", "他很高", "他高是", "高他很"], "B", "Adjectives take 很, not 是."],
      ["What does 妹妹 mean?", ["Older sister", "Younger sister", "Mother", "Aunt"], "B", "妹妹 is younger sister; 姐姐 is older sister."],
      ["What does 我去过中国 mean?", ["I am going to China", "I have been to China", "I am in China", "I want to go to China"], "B", "过 shows past experience."],
      ["Which measure word goes with 书 (book)?", ["个", "只", "本", "张"], "C", "一本书: 本 is for books."],
      ["What does 看电影 mean?", ["Read a book", "Watch a film", "Listen to music", "Play football"], "B", "电影 is film."],
      ["Which measure word is used for books?", ["个", "本", "只", "张"], "B", "Books take 本: 一本书."],
      ["What does 过 show?", ["Future", "Past experience", "A question", "Location"], "B", "我去过中国: I have been to China."],
    ]),
    one("world", "The world around us: town, environment, transport and weather", "Town, transport and weather", 7, "Places, transport and weather, with 在, 有 and 坐.", [
      ["Vocabulary", ["火车站 huǒchēzhàn (train station), 图书馆 túshūguǎn (library), 商店 shāngdiàn (shop), 公园 gōngyuán (park).", "坐公共汽车 zuò gōnggòng qìchē (take the bus), 坐火车 (take the train), 走路 zǒulù (walk).", "天气 tiānqì (weather), 下雨 xià yǔ (rain), 下雪 xià xuě (snow), 冷 lěng (cold), 热 rè (hot)."]],
      ["Grammar", ["有 yǒu: there is or have. 我家附近有一个公园 (there is a park near my home). Negative: 没有.", "在 zài for location: 我在家 (I am at home).", "坐 zuò with most transport; 骑 qí for bikes and horses."]],
      ["Comparisons, directions and environment", ["Comparisons: A 比 B + adjective: 北京比上海大 (Beijing is bigger than Shanghai). A 没有 B 那么 + adjective: not as ... as.", "Superlative: 最 zuì + adjective: 最好 (best).", "Directions: 往左拐 (turn left), 往右拐 (turn right), 一直走 (go straight on), 在...旁边 (next to).", "Environment: 污染 wūrǎn (pollution), 环境 huánjìng, 保护 bǎohù (protect), 回收 huíshōu (recycle)."]],
    ], ["有 / 没有 for there is / is not.", "坐 for vehicles you sit in, 骑 for bikes.", "下雨 means it is raining."], [
      ["What does 下雨 mean?", ["It is snowing", "It is raining", "It is sunny", "It is windy"], "B", "下雨 is to rain."],
      ["How do you say 'ride a bike'?", ["坐自行车", "骑自行车", "走自行车", "开自行车"], "B", "骑 is used for bikes."],
      ["What is 图书馆?", ["Bookshop", "Library", "Museum", "Station"], "B", "图书馆 is library."],
      ["What is the negative of 有?", ["不有", "没有", "无是", "不是"], "B", "有 is negated with 没."],
      ["What does 冷 mean?", ["Hot", "Cold", "Warm", "Cool"], "B", "冷 lěng is cold."],
      ["How do you say 'A is bigger than B'?", ["A 比 B 大", "A 大 B", "A 最 B 大", "A 跟 B 大"], "A", "A 比 B + adjective."],
    ]),
    one("work", "The world of work: education, jobs and future plans", "Work and future plans", 7, "Jobs and plans with 想, 要 and 将来.", [
      ["Vocabulary", ["医生 yīshēng (doctor), 老师 lǎoshī (teacher), 工程师 gōngchéngshī (engineer), 律师 lǜshī (lawyer).", "打工 dǎgōng (part time work), 赚钱 zhuànqián (earn money), 上大学 shàng dàxué (go to university).", "将来 jiānglái (in the future), 以后 yǐhòu (afterwards)."]],
      ["Grammar", ["想 xiǎng + verb: would like to. 我想当医生 (I want to be a doctor).", "要 yào + verb: will or want to. 我明年要去中国.", "当 dāng (to work as) with jobs."]],
      ["Future and ability", ["Future: 将来 jiānglái (in the future), 想 xiǎng (would like to), 要 yào (want to or will), 打算 dǎsuàn (plan to).", "Ability: 会 huì (know how to), 能 néng (be able to), 可以 kěyǐ (may).", "Jobs: 医生 yīshēng (doctor), 老师 lǎoshī (teacher), 工程师 gōngchéngshī (engineer), 律师 lǜshī (lawyer), 打工 dǎgōng (part time work).", "因为...所以... (because ... therefore ...) links reasons."]],
    ], ["想 for wishes, 要 for plans.", "当 + job.", "将来 for the future."], [
      ["How do you say 'I want to be a doctor'?", ["我想当医生", "我是想医生", "我医生想", "我当想医生"], "A", "想 + 当 + job."],
      ["What does 打工 mean?", ["Fight", "Part time work", "Study", "Holiday"], "B", "打工 is to do a part time job."],
      ["What does 将来 mean?", ["In the past", "In the future", "Now", "Yesterday"], "B", "将来 is the future."],
      ["What is 律师?", ["Doctor", "Lawyer", "Teacher", "Engineer"], "B", "律师 is lawyer."],
      ["What does 赚钱 mean?", ["Spend money", "Earn money", "Lose money", "Save money"], "B", "赚钱 is to earn money."],
      ["Which word means 'plan to'?", ["会", "打算", "可以", "最"], "B", "我打算上大学."],
    ]),
    one("international", "The international world: travel, culture and global issues", "Travel, culture and global issues", 7, "Travel, festivals and global issues.", [
      ["Vocabulary", ["旅游 lǚyóu (travel), 飞机 fēijī (plane), 酒店 jiǔdiàn (hotel), 护照 hùzhào (passport).", "春节 Chūnjié (Spring Festival), 中秋节 Zhōngqiūjié (Mid Autumn Festival), 月饼 yuèbing (mooncakes), 红包 hóngbāo (red envelope).", "环境 huánjìng (environment), 污染 wūrǎn (pollution), 贫穷 pínqióng (poverty)."]],
      ["Grammar", ["Comparisons with 比: 北京比上海冷 (Beijing is colder than Shanghai).", "Opinions: 我觉得 wǒ juéde (I think), 因为 ... 所以 ... (because ... therefore ...).", "Duration after the verb: 我在中国住了两个星期 (I lived in China for two weeks)."]],
    ], ["A 比 B + adjective.", "因为 ... 所以 ... for reasons.", "Mooncakes at Mid Autumn, red envelopes at Spring Festival."], [
      ["What does 北京比上海冷 mean?", ["Shanghai is colder than Beijing", "Beijing is colder than Shanghai", "Beijing and Shanghai are cold", "Beijing is not cold"], "B", "A 比 B 冷: A is colder than B."],
      ["Which festival is linked with mooncakes?", ["春节", "中秋节", "端午节", "国庆节"], "B", "Mooncakes are eaten at the Mid Autumn Festival."],
      ["What does 污染 mean?", ["Environment", "Pollution", "Poverty", "Weather"], "B", "污染 is pollution."],
      ["How do you say 'I think'?", ["我觉得", "我想去", "我是", "我有"], "A", "觉得 expresses an opinion."],
      ["What is 护照?", ["Ticket", "Passport", "Hotel", "Plane"], "B", "护照 is passport."],
    ]),
    one("listening", "Listening", "Listening skills", 5, "Tones, numbers and key words in listening tasks.", [
      ["Tips", ["Tones change meaning: mā (mother), mǎ (horse), mà (scold).", "Numbers, times and dates come up often: learn them well.", "Negatives: 不 bù and 没 méi.", "Time words: 昨天 (yesterday), 今天 (today), 明天 (tomorrow)."]],
    ], ["Tones matter.", "Numbers and dates are common.", "不 and 没 negate."], [
      ["What does 昨天 mean?", ["Today", "Yesterday", "Tomorrow", "Last year"], "B", "昨天 is yesterday."],
      ["How many tones does Mandarin have (not counting the neutral tone)?", ["2", "3", "4", "6"], "C", "There are four main tones."],
      ["What does 明天 mean?", ["Tomorrow", "Yesterday", "Today", "Morning"], "A", "明天 is tomorrow."],
      ["Which negates a past action?", ["不", "没", "很", "也"], "B", "没 negates completed actions and 有."],
      ["What is 三月五号?", ["5 March", "3 May", "15 March", "3 to 5 May"], "A", "Month then day: 3rd month, 5th day."],
    ]),
    one("reading", "Reading", "Reading skills", 5, "Recognising characters and radicals, and reading for meaning.", [
      ["Tips", ["Radicals hint at meaning: 氵 water (河 river, 海 sea), 口 mouth (吃 eat, 喝 drink), 木 tree (林 woods).", "Read whole words, not single characters: 电 (electric) + 脑 (brain) = 电脑 computer.", "Use context for unknown characters.", "Answer in the language the question asks for."]],
    ], ["Radicals give clues.", "Many words are two characters.", "Context fills gaps."], [
      ["What does the radical 氵 suggest?", ["Fire", "Water", "Wood", "Person"], "B", "氵 is the water radical."],
      ["What is 电脑?", ["Television", "Computer", "Telephone", "Electricity"], "B", "Electric brain: computer."],
      ["Which character contains the mouth radical?", ["吃", "林", "河", "好"], "A", "吃 (eat) contains 口."],
      ["What does 喝 mean?", ["Eat", "Drink", "Sing", "Speak"], "B", "喝 is to drink."],
      ["Why read in words, not single characters?", ["Many words are made of two or more characters with a combined meaning", "Characters have no meaning", "It is faster to guess", "Examiners require it"], "A", "Meaning often comes from the combination."],
    ]),
    one("speaking", "Speaking", "Speaking skills", 6, "Role plays, presentations and conversation.", [
      ["Tips", ["Opinion with a reason: 我喜欢学中文，因为很有意思.", "Show time frames with time words, 了, 过 and 会 (will).", "Use connectives: 但是 (but), 而且 (moreover), 所以 (so).", "Ask a question back: 你呢? (and you?)."]],
    ], ["Opinion + 因为.", "Time words show tense.", "你呢? to ask back."], [
      ["What does 你呢 mean?", ["Who are you?", "And you?", "Where are you?", "Are you well?"], "B", "呢 turns it into 'and you?'."],
      ["Which word means 'but'?", ["但是", "而且", "所以", "因为"], "A", "但是 is but."],
      ["How can you show future time?", ["了", "会 or a future time word", "过", "吗"], "B", "会 and words like 明天 show the future."],
      ["What does 而且 mean?", ["But", "Moreover", "Because", "So"], "B", "而且 adds information."],
      ["Which answer is most developed?", ["喜欢", "我喜欢踢足球，因为很好玩，而且我每个周末都和朋友一起踢", "足球", "不知道"], "B", "Opinion, reason and extra detail."],
    ]),
    one("writing", "Writing", "Writing skills", 6, "Writing characters accurately and building longer sentences.", [
      ["Tips", ["Cover every bullet point.", "Use correct stroke order and check similar characters (人 and 入, 大 and 太).", "Connectives and time words make writing flow: 首先 (first), 然后 (then), 最后 (finally).", "Include opinions and reasons."]],
      ["Grammar checklist", ["Word order: subject, time, place, verb, object: 我今天在学校学习中文.", "No verb tenses: time words and particles (了, 过, 着, 会, 要) show time.", "的 de shows possession or links description to a noun (我的书, 漂亮的衣服). 得 de describes how an action is done (他说得很快).", "Negatives: 不 bù (present and future), 没 méi (past and with 有).", "Write characters accurately; use connectives such as 但是 (but), 而且 (moreover), 虽然...但是... (although ... but)."]],
    ], ["All bullet points covered.", "Check similar looking characters.", "首先, 然后, 最后 for order."], [
      ["What does 然后 mean?", ["First", "Then", "Finally", "Because"], "B", "然后 means then."],
      ["Which means 'finally'?", ["首先", "然后", "最后", "所以"], "C", "最后 is finally."],
      ["Which pair looks similar and is often confused?", ["人 and 入", "山 and 水", "日 and 月", "火 and 木"], "A", "人 (person) and 入 (enter) are easy to mix up."],
      ["Why cover every bullet point?", ["Each carries content marks", "To use more characters", "It is optional", "Only for speaking"], "A", "Missing one loses marks."],
      ["What does 首先 mean?", ["Firstly", "Lastly", "However", "Also"], "A", "首先 is firstly."],
      ["Which negative is used with 有?", ["不", "没", "别", "非"], "B", "没有 means do not have."],
      ["What does 虽然...但是... mean?", ["Because ... so", "Although ... but", "If ... then", "Not only ... but also"], "B", "A contrast connective."],
    ]),
  ],
};
