// Revision notes, quizzes and flashcards for IGCSE History, following the Cambridge 0470 core
// content on international relations since 1919 (Edexcel 4HI1 options overlap). Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "history",
  name: "History",
  topics: [
    one("treaties", "The peace treaties after the First World War", "The Treaty of Versailles", 8, "What the Big Three wanted, the terms, and reactions.", [
      ["The Big Three", ["Clemenceau (France) wanted revenge and security: a weak Germany.", "Lloyd George (Britain) wanted Germany punished but able to trade, and to protect the navy and empire.", "Wilson (USA) wanted a fair peace based on his Fourteen Points, self determination and a League of Nations."]],
      ["Terms of Versailles (1919)", ["Blame: Article 231, the war guilt clause.", "Reparations: set at £6600 million in 1921.", "Army: limited to 100 000 men, no conscription, no air force, no submarines, six battleships.", "Territory: Alsace-Lorraine to France, the Saar run by the League, the Rhineland demilitarised, colonies taken, Anschluss with Austria forbidden."]],
      ["Other treaties and reactions", ["St Germain (Austria), Trianon (Hungary), Neuilly (Bulgaria), Sèvres (Turkey).", "Germans called it a diktat (dictated peace) and resented the war guilt clause.", "Historians debate whether it was too harsh or not harsh enough."]],
    ], ["Remember BRAT: blame, reparations, army, territory.", "Each of the Big Three had different aims.", "Germany saw it as a diktat."], [
      ["Which leader wanted the harshest treatment of Germany?", ["Wilson", "Lloyd George", "Clemenceau", "Orlando"], "C", "France had suffered most and wanted security and revenge."],
      ["What was Article 231?", ["The army limit", "The war guilt clause", "The League Covenant", "The Saar plebiscite"], "B", "It made Germany accept blame for the war."],
      ["How large could the German army be?", ["10 000", "100 000", "500 000", "1 million"], "B", "Limited to 100 000 men."],
      ["What happened to the Rhineland?", ["Given to France", "Demilitarised", "Given to Poland", "Run by Britain"], "B", "No German troops could be stationed there."],
      ["What did Germans call the treaty?", ["A diktat", "A triumph", "A compromise", "A ceasefire"], "A", "A dictated peace they had no say in."],
    ]),
    one("league", "The League of Nations", "The League of Nations", 8, "Its aims, structure, successes and failures in the 1920s and 1930s.", [
      ["Structure and weaknesses", ["Aims: discourage aggression, encourage cooperation, improve living conditions, disarmament.", "Assembly, Council (permanent members Britain, France, Italy, Japan), Secretariat, Permanent Court of Justice, agencies such as the ILO.", "Weaknesses: the USA never joined, Germany and the USSR were initially excluded, decisions had to be unanimous, no army of its own, sanctions were weak."]],
      ["Successes and failures", ["Successes in the 1920s: Åland Islands (1921), Upper Silesia (1921), Bulgaria (1925), humanitarian work on refugees and disease.", "Failures: Corfu (1923), where Mussolini got his way.", "The Depression made countries look after themselves.", "Manchuria (1931): Japan invaded, the Lytton Report condemned it, Japan left the League.", "Abyssinia (1935): Italy invaded; sanctions excluded oil and the Hoare-Laval Pact undermined the League."]],
    ], ["USA never joined.", "Manchuria and Abyssinia exposed the League's weakness.", "Unanimity and no army made action slow."], [
      ["Which major power never joined the League?", ["Britain", "France", "USA", "Japan"], "C", "The US Senate rejected membership."],
      ["Which crisis saw Japan leave the League?", ["Corfu", "Manchuria", "Abyssinia", "Bulgaria"], "B", "After the Lytton Report in 1933."],
      ["Why were sanctions against Italy in 1935 ineffective?", ["They included oil", "They did not include oil, and Britain and France made secret deals", "Italy was not a member", "The USA enforced them"], "B", "The Hoare-Laval Pact and lack of oil sanctions."],
      ["Which was a League success?", ["Abyssinia", "Manchuria", "Åland Islands", "Corfu"], "C", "Sweden accepted the League's ruling in 1921."],
      ["Why did the League lack force?", ["It had no army of its own", "It had a huge army", "It was run by the USA", "It met daily"], "A", "It relied on members' willingness."],
    ]),
    one("collapse", "The collapse of international peace by 1939", "The road to war, 1933 to 1939", 8, "Hitler's aims, appeasement and the outbreak of the Second World War.", [
      ["Hitler's actions", ["Aims: overturn Versailles, unite German speakers, gain Lebensraum (living space) in the east.", "Rearmament and conscription (1935), remilitarisation of the Rhineland (1936), Anschluss with Austria (1938).", "Sudetenland: the Munich Agreement (September 1938) gave it to Germany.", "March 1939: Germany took the rest of Czechoslovakia."]],
      ["Appeasement and war", ["Appeasement: giving in to reasonable demands to avoid war. Supported due to fear of war, sympathy over Versailles, and the need to rearm.", "Nazi-Soviet Pact (August 1939): non aggression and a secret plan to divide Poland.", "Germany invaded Poland on 1 September 1939; Britain and France declared war on 3 September."]],
    ], ["Rhineland 1936, Anschluss 1938, Munich 1938, Poland 1939.", "Appeasement led by Chamberlain.", "The Nazi-Soviet Pact cleared the way to Poland."], [
      ["When did Germany remilitarise the Rhineland?", ["1933", "1936", "1938", "1939"], "B", "March 1936."],
      ["What was the Anschluss?", ["Union of Germany and Austria", "Invasion of Poland", "The Munich Agreement", "A treaty with Italy"], "A", "March 1938."],
      ["Who was the British Prime Minister most linked to appeasement?", ["Churchill", "Chamberlain", "Lloyd George", "Baldwin"], "B", "Neville Chamberlain, at Munich in 1938."],
      ["What did the Nazi-Soviet Pact include?", ["An alliance against Britain", "Non aggression and a secret plan to divide Poland", "Soviet control of Germany", "Return of the Rhineland"], "B", "Signed in August 1939."],
      ["What event led Britain to declare war in 1939?", ["The Anschluss", "The invasion of Poland", "The Rhineland", "Munich"], "B", "Germany invaded Poland on 1 September."],
    ]),
    one("cold-war", "The origins of the Cold War", "Who was to blame for the Cold War?", 8, "From wartime allies to rivals, 1945 to 1949.", [
      ["Breakdown", ["Ideologies clashed: capitalism and democracy against communism.", "Yalta (February 1945): agreement on dividing Germany and free elections in Eastern Europe.", "Potsdam (July 1945): tension grew; Truman was tougher and the USA had the atomic bomb.", "The USSR set up communist governments in Eastern Europe: Churchill's Iron Curtain speech (1946)."]],
      ["US response and Berlin", ["Truman Doctrine (1947): support free peoples resisting communism (containment).", "Marshall Plan: economic aid to rebuild Europe; Stalin called it dollar imperialism and created Cominform and Comecon.", "Berlin Blockade (1948 to 1949): the USSR cut off West Berlin; the Western allies responded with the Berlin Airlift.", "NATO formed in 1949; Germany split into the FRG and GDR."]],
    ], ["Yalta friendly, Potsdam tense.", "Truman Doctrine plus Marshall Plan = containment.", "Berlin Airlift beat the blockade."], [
      ["What was the Truman Doctrine?", ["A plan to invade the USSR", "A US promise to support countries resisting communism", "A trade deal with China", "A peace treaty"], "B", "The policy of containment."],
      ["How did the West respond to the Berlin Blockade?", ["War", "The Berlin Airlift", "Surrender", "Building the Wall"], "B", "Supplies were flown in for almost a year."],
      ["Who gave the Iron Curtain speech?", ["Truman", "Stalin", "Churchill", "Roosevelt"], "C", "In Fulton, Missouri, 1946."],
      ["How did Stalin describe the Marshall Plan?", ["Generous", "Dollar imperialism", "A peace offer", "Fair trade"], "B", "He saw it as the USA buying influence."],
      ["Which conference took place in July 1945?", ["Yalta", "Potsdam", "Tehran", "Munich"], "B", "Potsdam, after Germany's defeat."],
    ]),
    one("containment", "Containment of communism", "Korea, Cuba and Vietnam", 9, "How far the USA succeeded in containing communism.", [
      ["Korea (1950 to 1953)", ["North Korea invaded the South in June 1950.", "A UN force led by the USA (General MacArthur) pushed back; China entered the war.", "Stalemate and an armistice in 1953 at roughly the 38th parallel: containment succeeded in South Korea."]],
      ["Cuba (1962)", ["Castro's revolution (1959) and the failed Bay of Pigs invasion (1961).", "Soviet missiles discovered in October 1962; Kennedy ordered a naval blockade (quarantine).", "Khrushchev removed the missiles; the USA promised not to invade Cuba and secretly removed missiles from Turkey. A hotline was set up."]],
      ["Vietnam", ["The domino theory drove US involvement.", "Gulf of Tonkin (1964) led to escalation; tactics included Operation Rolling Thunder, napalm and Agent Orange.", "Viet Cong guerrilla warfare, the Tet Offensive (1968) and opposition at home.", "US withdrawal by 1973; Saigon fell in 1975: containment failed."]],
    ], ["Korea: containment partly worked.", "Cuba: brinkmanship, then the hotline.", "Vietnam: containment failed."], [
      ["Which theory said if one country fell to communism, its neighbours would follow?", ["Domino theory", "Containment", "Brinkmanship", "Détente"], "A", "It justified US intervention in Asia."],
      ["How did Kennedy respond to the missiles in Cuba?", ["Invaded immediately", "A naval blockade", "Ignored them", "Bombed Moscow"], "B", "The quarantine stopped more missiles arriving."],
      ["Who led the UN forces in Korea at first?", ["Eisenhower", "MacArthur", "Patton", "Kennedy"], "B", "General Douglas MacArthur."],
      ["What was the Tet Offensive?", ["A US victory", "A major Viet Cong attack in 1968 that shocked American opinion", "A peace deal", "A Soviet invasion"], "B", "It weakened support for the war in the USA."],
      ["When did Saigon fall?", ["1968", "1973", "1975", "1979"], "C", "North Vietnamese forces took Saigon in 1975."],
    ]),
    one("eastern-europe", "Soviet control of Eastern Europe", "Soviet control, 1948 to 1989", 8, "Hungary, the Berlin Wall, Czechoslovakia and the fall of Soviet control.", [
      ["Revolts and responses", ["Hungary 1956: Nagy promised reforms and to leave the Warsaw Pact; Soviet tanks crushed the uprising.", "Berlin Wall 1961: built to stop East Germans escaping to the West.", "Czechoslovakia 1968: Dubček's Prague Spring ('socialism with a human face'); Warsaw Pact troops invaded. Brezhnev Doctrine: the USSR would intervene to protect communism."]],
      ["Collapse", ["Poland: the Solidarity trade union under Lech Wałęsa (1980).", "Gorbachev's reforms: glasnost (openness) and perestroika (restructuring), and abandoning the Brezhnev Doctrine.", "1989: the Berlin Wall fell; communist governments across Eastern Europe collapsed. The USSR broke up in 1991."]],
    ], ["Hungary 1956, Wall 1961, Prague 1968.", "Brezhnev Doctrine justified intervention.", "Gorbachev's reforms led to 1989."], [
      ["Why was the Berlin Wall built in 1961?", ["To keep Western troops out", "To stop East Germans escaping to the West", "To mark the end of the war", "To divide Poland"], "B", "Millions had fled through Berlin."],
      ["What was the Prague Spring?", ["A Soviet festival", "Dubček's reforms in Czechoslovakia in 1968", "A Polish strike", "A Hungarian election"], "B", "Socialism with a human face."],
      ["What was Solidarity?", ["A Soviet army", "A Polish trade union", "A Hungarian party", "A treaty"], "B", "Led by Lech Wałęsa."],
      ["What does glasnost mean?", ["Restructuring", "Openness", "Peace", "Control"], "B", "Gorbachev's policy of openness."],
      ["What happened in Hungary in 1956?", ["Peaceful independence", "The uprising was crushed by Soviet tanks", "Hungary joined NATO", "Free elections were held"], "B", "Nagy was later executed."],
    ]),
    one("gulf", "Events in the Gulf", "Why events in the Gulf mattered, c.1970 to 2000", 9, "Saddam Hussein, the Iranian Revolution, the Iran-Iraq War and the Gulf War.", [
      ["Iraq and Saddam Hussein", ["Saddam Hussein rose through the Ba'ath Party and became President of Iraq in 1979.", "He ruled through fear: secret police, purges of rivals, and propaganda, while using oil wealth to modernise.", "The West, and the USSR, supplied Iraq with weapons and money at times, seeing it as a counterweight to Iran."]],
      ["The Iranian Revolution (1979)", ["The Shah of Iran was pro Western but unpopular: repression by the SAVAK secret police, rapid westernisation and inequality.", "Protests led to the Shah fleeing in January 1979; Ayatollah Khomeini returned and set up an Islamic Republic.", "The US embassy hostage crisis (1979 to 1981) badly damaged relations with the USA."]],
      ["The Iran-Iraq War (1980 to 1988)", ["Causes: border disputes over the Shatt al-Arab waterway, Saddam's fear of the revolution spreading to Iraq's Shia majority, and his ambition to dominate the Gulf.", "Iraq invaded in September 1980; the war became a stalemate with trench warfare, chemical weapons and attacks on cities and oil tankers.", "Around a million people died. A UN ceasefire ended it in 1988 with no real winner, and Iraq was left deeply in debt."]],
      ["The Gulf War (1990 to 1991)", ["Iraq invaded Kuwait in August 1990: Saddam claimed it was historically Iraqi, wanted its oil to pay war debts, and accused it of over producing oil.", "The UN condemned the invasion and imposed sanctions; a US led coalition of over 30 countries formed (Operation Desert Shield).", "Operation Desert Storm (January to February 1991): an air campaign, then a ground war that freed Kuwait in about 100 hours.", "Saddam stayed in power; he crushed uprisings by the Kurds and Shia, leading to no fly zones and continued UN weapons inspections and sanctions."]],
      ["Why it mattered", ["Oil: the Gulf held much of the world's oil, so instability affected the world economy.", "The Cold War and its end: superpowers backed sides; the Gulf War showed the USA acting with UN support after the USSR's decline.", "It left lasting tensions between the West and Iraq and Iran."]],
    ], ["1979: Saddam in power; Iranian Revolution.", "1980 to 1988: Iran-Iraq War, a costly stalemate.", "1990 to 1991: Kuwait invaded, then freed by a UN backed coalition."], [
      ["When did Saddam Hussein become President of Iraq?", ["1968", "1979", "1980", "1990"], "B", "He took full power in 1979."],
      ["Who led Iran after the 1979 revolution?", ["The Shah", "Ayatollah Khomeini", "Saddam Hussein", "Nasser"], "B", "He set up an Islamic Republic."],
      ["Which waterway was disputed between Iran and Iraq?", ["The Suez Canal", "The Shatt al-Arab", "The Strait of Hormuz", "The Euphrates"], "B", "A cause of the Iran-Iraq War."],
      ["Why did Iraq invade Kuwait in 1990?", ["To spread democracy", "To gain its oil wealth and pay war debts, claiming it was Iraqi", "Because Kuwait attacked first", "To help Iran"], "B", "Oil and debt were key."],
      ["What was Operation Desert Storm?", ["Iraq's invasion of Kuwait", "The US led coalition's campaign to free Kuwait in 1991", "The Iranian Revolution", "UN sanctions"], "B", "Air war then a short ground war."],
      ["How did the Iran-Iraq War end?", ["Iraq won", "Iran won", "A UN ceasefire with no real winner", "The USA invaded"], "C", "Stalemate in 1988."],
    ]),
    one("depth", "Depth study", "Depth study: Germany 1918 to 1945", 9, "One common depth study: the Weimar Republic and Nazi Germany. Check which depth study your school takes.", [
      ["Weimar Germany", ["Weaknesses: proportional representation, Article 48 emergency powers, the stab in the back myth.", "Crises: Spartacist rising (1919), Kapp Putsch (1920), Ruhr occupation and hyperinflation (1923), Munich Putsch (1923).", "Recovery under Stresemann: the Rentenmark, Dawes Plan (1924), Locarno (1925), joining the League (1926)."]],
      ["Nazi Germany", ["The Depression boosted Nazi support; Hitler became Chancellor in January 1933.", "Reichstag Fire, Enabling Act (1933), Night of the Long Knives (1934), Hitler becomes Führer.", "Control: the SS, Gestapo, propaganda under Goebbels, censorship.", "Persecution of Jews: Nuremberg Laws (1935), Kristallnacht (1938), and the Holocaust."]],
      ["Weimar crises and recovery", ["1919: Spartacist Rising (communists) crushed by the Freikorps. 1920: Kapp Putsch (right wing) defeated by a general strike.", "1923: France occupied the Ruhr when Germany missed reparations; passive resistance and printing money caused hyperinflation; the Munich Putsch failed and Hitler was jailed (writing Mein Kampf).", "Stresemann's recovery: the Rentenmark (1923), Dawes Plan (1924, US loans), Locarno Treaties (1925), joining the League of Nations (1926), Young Plan (1929).", "The Wall Street Crash (1929) ended US loans: mass unemployment (6 million by 1932) boosted the Nazis and communists."]],
      ["Nazi control and life in Nazi Germany", ["Consolidating power: Reichstag Fire (February 1933), Enabling Act (March 1933), trade unions and other parties banned, Night of the Long Knives (June 1934), Hitler became Führer when Hindenburg died (August 1934).", "Terror: the SS, the Gestapo (secret police), concentration camps, controlled courts. Propaganda: Goebbels, rallies, radio, censorship, the 1936 Olympics.", "Churches: the Concordat with the Catholic Church (1933); the Reich Church; opponents such as Pastor Niemöller were imprisoned.", "Young people: Hitler Youth and the League of German Maidens; a Nazified school curriculum. Women: 'Kinder, Küche, Kirche', marriage loans and the Mother's Cross.", "Economy: public works (autobahns), the Reich Labour Service, rearmament, Schacht's New Plan and Göring's Four Year Plan; unemployment fell but invisible unemployment hid women and Jews.", "Persecution: boycott of Jewish shops (1933), Nuremberg Laws (1935), Kristallnacht (1938), and in the war the Final Solution (the Holocaust). Roma, disabled people and homosexuals were also persecuted.", "Opposition: Edelweiss Pirates, Swing Youth, the White Rose (1942 to 1943), the July Bomb Plot (1944).", "The war at home: rationing, Allied bombing, total war from 1943, and women brought into war work late."]],
    ], ["1923: hyperinflation and Munich Putsch.", "Stresemann's recovery.", "Enabling Act gave Hitler dictatorial power."], [
      ["In which year did hyperinflation peak in Germany?", ["1919", "1923", "1929", "1933"], "B", "After the French occupation of the Ruhr."],
      ["What did the Enabling Act do?", ["Ended the war", "Allowed Hitler to make laws without the Reichstag", "Created the Rentenmark", "Banned the Nazi Party"], "B", "Passed in March 1933."],
      ["Who led Germany's recovery in the mid 1920s?", ["Hitler", "Stresemann", "Ebert", "Hindenburg"], "B", "Gustav Stresemann."],
      ["What was the Night of the Long Knives?", ["A Jewish pogrom", "Hitler's purge of the SA leadership in 1934", "The Reichstag Fire", "A Communist rising"], "B", "Ernst Röhm and others were killed."],
      ["What were the Nuremberg Laws (1935)?", ["Economic reforms", "Laws removing Jews' citizenship and banning marriage with non Jews", "Military treaties", "Election rules"], "B", "They legalised discrimination."],
      ["What was the Enabling Act (1933)?", ["A law banning Jews", "A law letting Hitler make laws without the Reichstag", "The Treaty of Versailles", "A trade deal"], "B", "It gave Hitler dictatorial power."],
      ["Which plan brought US loans to Germany in 1924?", ["Young Plan", "Dawes Plan", "Four Year Plan", "Marshall Plan"], "B", "It eased reparations."],
      ["What were the Nuremberg Laws (1935)?", ["Laws on rearmament", "Laws removing Jews' citizenship and banning marriage with non Jews", "Laws on trade unions", "Laws on schools"], "B", "Legal persecution of Jews."],
    ]),
    one("sources", "Source analysis skills", "Source analysis", 7, "Interpreting, evaluating and comparing sources.", [
      ["Approach", ["Content: what does the source say or show?", "Provenance (NOP): nature, origin, purpose. Who made it, when, why, and for whom?", "Use your own knowledge to check what the source claims.", "Reliability depends on the purpose: a biased source can still be useful."]],
      ["Question types", ["How far do sources agree? Compare both agreement and disagreement in detail.", "Why was this published at this time? Link to context and purpose.", "Is it surprising? Compare with what you know about the author and events."]],
    ], ["Nature, origin, purpose.", "Biased does not mean useless.", "Compare details, not just overall message."], [
      ["What does the 'origin' of a source refer to?", ["Its colour", "Who made it and when", "Its length", "Its title only"], "B", "Origin is author and date."],
      ["Can a biased source be useful?", ["Never", "Yes, it can show attitudes and purposes", "Only if it is a photo", "Only if it agrees with others"], "B", "Bias itself is evidence of a viewpoint."],
      ["What should you consider about the purpose of a cartoon?", ["Why it was drawn and what message it intended", "Only the drawing style", "Only the date", "The paper size"], "A", "Purpose explains the message."],
      ["How should you compare two sources?", ["Look only at the dates", "Compare details of agreement and disagreement", "Count the words", "Choose the longer one"], "B", "Specific details make a strong comparison."],
      ["Why use own knowledge in source questions?", ["To check and explain what the source shows", "To replace the source", "To fill space", "It is not allowed"], "A", "Context tests accuracy and purpose."],
    ]),
  ],
};
