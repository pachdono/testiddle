// Revision notes for every skill on the digital SAT, grouped by the test's own domains.
// Written for Testiddle. Each subtopic is one skill from the question bank, so its quiz
// and exam practice come straight from the same skill.

const N = (skill, minutes, intro, sections, points) => ({ skill, minutes, intro, sections, points });

export const TOPICS = [
  { id: "craft", pic: "brush", subject: "Reading and Writing", name: "Craft and Structure", subs: [
    N("Words in context", 5, "Pick the word that fits the meaning and the tone of the sentence it sits in.", [
      ["How to approach it", ["Cover the choices and read the whole text first.", "Find the clue words: contrast (but, although, despite), cause (because, so), or restatement (a colon, in other words).", "Predict your own word, then pick the choice closest to it."]],
      ["Traps to avoid", ["A choice that is a real meaning of the word, but not the one used here.", "A choice with the right idea but the wrong strength: hostile when the text only says cautious.", "A choice that matches the topic but not the logic of the blank."]],
    ], ["Read the whole text before looking at the choices.", "Contrast words signal the blank is the opposite of nearby ideas.", "Check the word's strength and tone, not only its meaning."]),
    N("Text structure and purpose", 5, "Say what a passage, or one sentence in it, is doing.", [
      ["The questions", ["Main purpose: why did the author write the whole text?", "Function: what does one sentence do for the text (introduce, give an example, qualify, contrast)?", "Overall structure: how does the text move from start to finish?"]],
      ["Method", ["Summarise each sentence in a few words in your head.", "Describe the role, not the content: 'gives an example of the claim' rather than 'talks about bees'.", "The right choice covers the whole text; wrong ones describe only a part."]],
    ], ["Describe what the text does, not just what it is about.", "Purpose questions cover the whole passage.", "Verbs in the choices (argue, describe, challenge) must all be true."]),
    N("Cross-text connections", 5, "Two short passages: decide how one author would respond to the other.", [
      ["Method", ["Write a one-line summary of each author's main claim.", "Decide if Text 2 agrees, disagrees, or agrees with a condition.", "Find the specific point where they meet: often a single finding or method."]],
      ["Traps to avoid", ["Choices that are true of one text but not about the other.", "Choices that exaggerate: Text 2 'rejects' when it only adds a caution."]],
    ], ["Summarise each text in one line first.", "Most pairs partly agree: look for the qualification.", "The answer must be supported by both texts."]),
  ] },
  { id: "info", pic: "magnifier", subject: "Reading and Writing", name: "Information and Ideas", subs: [
    N("Central ideas and details", 5, "Find the main point of a text, or a detail it states directly.", [
      ["Main idea", ["The main idea is what most sentences support.", "The first sentence is often background; the claim usually follows a turn word such as however.", "Too narrow: one detail. Too broad: more than the text says."]],
      ["Details", ["Detail questions are answered by one line of the text.", "Find the line and match it; do not infer beyond it."]],
    ], ["The main idea is supported by most of the text.", "Watch for choices that are too narrow or too broad.", "Detail answers can be pointed to in the text."]),
    N("Command of evidence: textual", 5, "Choose the quotation or finding that best supports or weakens a claim.", [
      ["Method", ["Restate the claim in the question in your own words.", "Ask: if this were true, would it make the claim more (or less) likely?", "The best evidence matches every part of the claim, including who and what."]],
      ["Traps to avoid", ["True statements that are about the topic but do not test the claim.", "Evidence for a similar claim with a different subject or time."]],
    ], ["Restate the claim before reading the choices.", "Every part of the claim must be addressed.", "On-topic is not the same as supporting."]),
    N("Command of evidence: quantitative", 5, "Use a table or graph to complete or support a statement.", [
      ["Method", ["Read the title, the axes or column headings, and the units.", "Find exactly which values the sentence is talking about.", "Check every number in the choice against the figure."]],
      ["Traps to avoid", ["Choices that are accurate about the data but do not complete the claim.", "Mixing up categories, years or units.", "Describing a trend the figure does not show."]],
    ], ["Read labels and units first.", "The answer must be true of the data and finish the claim.", "Check every figure in the choice."]),
    N("Inferences", 5, "Finish a text with the conclusion that most logically follows.", [
      ["Method", ["Follow the chain of reasoning sentence by sentence.", "Ask what must be true given everything stated.", "Prefer the modest, narrow conclusion over a sweeping one."]],
      ["Traps to avoid", ["Conclusions that need an extra fact the text never gives.", "Choices that repeat an earlier sentence rather than finishing the logic."]],
    ], ["The right answer follows from the text with no extra facts.", "Narrow and careful beats bold.", "Read the last sentence closely: the blank continues it."]),
  ] },
  { id: "conventions", pic: "pen", subject: "Reading and Writing", name: "Standard English Conventions", subs: [
    N("Boundaries", 6, "Punctuate where sentences and clauses meet.", [
      ["Joining two complete sentences", ["Use a period, a semicolon, or a comma with and, but, or, so, for, nor, yet.", "A comma alone is a comma splice and is always wrong.", "A colon works when the second part explains the first."]],
      ["Extra information", ["Set it off with a matching pair: two commas, two dashes or two brackets.", "The sentence must still work if you remove it.", "No comma between a subject and its verb, or a verb and its object."]],
    ], ["Semicolon: complete sentence on both sides.", "Colon: a complete sentence before it.", "Extra information takes a matching pair of marks."]),
    N("Form, structure, and sense", 6, "Make words agree and fit the sentence.", [
      ["Agreement", ["Find the true subject and match the verb to it.", "Pronouns match their noun: the team ... its.", "Each, every, neither and one are singular."]],
      ["Verbs and forms", ["Keep the time frame consistent unless the text changes it.", "Use had + past participle for the earlier of two past events.", "Possessives: its (belonging to it), it's (it is), their (belonging to them)."]],
      ["Modifiers", ["An opening phrase describes the noun right after the comma.", "Fix a dangling modifier by putting the right doer first."]],
    ], ["Cross out the words between subject and verb.", "Its never takes an apostrophe for possession.", "The noun after an opening phrase must be its doer."]),
  ] },
  { id: "expression", pic: "speech", subject: "Reading and Writing", name: "Expression of Ideas", subs: [
    N("Transitions", 5, "Pick the word or phrase that links two ideas correctly.", [
      ["Relationships", ["Contrast: however, nevertheless, in contrast.", "Addition: moreover, furthermore, similarly.", "Result: therefore, consequently, as a result.", "Example: for example, for instance. Sequence: then, subsequently, finally."]],
      ["Method", ["Ignore the choices and decide how the two sentences relate.", "Say it in plain words, such as 'but' or 'so', then match the choice.", "Two choices with the same meaning cannot both be right, so cross out pairs."]],
    ], ["Decide the relationship before reading the choices.", "Matching meaning pairs are both wrong.", "Read the sentence before and after the blank."]),
    N("Rhetorical synthesis", 5, "Use a student's notes to write a sentence that meets a stated goal.", [
      ["Method", ["Read the goal in the question first; it decides everything.", "Skim the notes only to understand the topic.", "Pick the choice that does exactly what the goal asks, such as comparing, emphasizing a difference, or introducing to a new audience."]],
      ["Traps to avoid", ["Accurate sentences that meet a different goal.", "Choices that leave out a part the goal names, such as both studies."]],
    ], ["The goal in the question decides the answer.", "Accuracy is not enough; it must meet the goal.", "Check every part of the goal is covered."]),
  ] },
  { id: "algebra", pic: "xy", subject: "Math", name: "Algebra", subs: [
    N("Linear equations", 5, "Solve equations in one variable and recognise how many solutions they have.", [
      ["Solving", ["Expand brackets, collect like terms, then undo operations in reverse order.", "Clear fractions by multiplying every term by the common denominator."]],
      ["Number of solutions", ["One solution: the x terms differ.", "No solution: same x terms, different constants (3x + 2 = 3x + 5).", "Infinitely many: both sides identical."]],
    ], ["Do the same operation to both sides.", "Same coefficient, different constant: no solution.", "Identical sides: infinitely many solutions."]),
    N("Linear equations in context", 4, "Turn a word problem into a linear equation.", [
      ["Building the equation", ["Name the unknown and its units.", "A fixed amount is the constant; a per-item amount is multiplied by the variable.", "Total = fixed + rate × quantity."]],
      ["Reading the parts", ["The coefficient is the change for one more unit.", "The constant is the starting value when the variable is 0."]],
    ], ["Rate times quantity plus a fixed amount.", "The coefficient is the per-unit change.", "Check units on both sides."]),
    N("Linear functions", 5, "Work with lines: slope, intercepts and equations.", [
      ["Key facts", ["Slope m = (y₂ - y₁) / (x₂ - x₁).", "y = mx + b: b is the y-intercept.", "Parallel lines share a slope; perpendicular slopes multiply to -1."]],
      ["From a table", ["Check the change in y for each equal step in x: if constant, it is linear.", "Use two points to find the slope, then one point for b."]],
    ], ["Slope is change in y over change in x.", "b is where the line meets the y-axis.", "Equal steps in x giving equal changes in y means linear."]),
    N("Linear functions in context", 4, "Interpret a linear model describing a real situation.", [
      ["Interpreting", ["Slope: change in output per one unit of input.", "Intercept: output when input is 0, often a starting amount.", "Units of slope are output units per input unit."]],
    ], ["Slope is a rate with units.", "The intercept is a starting value.", "Read what x and y stand for before interpreting."]),
    N("Systems of equations", 6, "Find values that satisfy two equations at once.", [
      ["Methods", ["Substitution: solve one equation for a variable and substitute.", "Elimination: scale and add the equations to cancel a variable.", "Graphing: the solution is the intersection point."]],
      ["How many solutions", ["One: different slopes.", "None: same slope, different intercepts (parallel lines).", "Infinitely many: the same line."]],
    ], ["Elimination is fastest when coefficients line up.", "Parallel lines mean no solution.", "Check the answer in both equations."]),
    N("Systems of equations in context", 4, "Set up and solve two equations from a word problem.", [
      ["Setting up", ["Usually one equation counts items and one counts value (tickets and money).", "Name both unknowns before writing anything."]],
    ], ["One equation for the count, one for the total value.", "Define each variable clearly.", "Answer the quantity the question asks for."]),
    N("Inequalities", 5, "Solve and interpret inequalities.", [
      ["Rules", ["Solve like an equation, but flip the sign when multiplying or dividing by a negative.", "At least means ≥; at most means ≤; more than means >."]],
      ["Systems and graphs", ["The solution set of a system is where shaded regions overlap.", "A dashed line means the boundary is not included."]],
    ], ["Multiply or divide by a negative: flip the sign.", "At least is ≥, at most is ≤.", "Test a point to check a shaded region."]),
  ] },
  { id: "advanced", pic: "rising", subject: "Math", name: "Advanced Math", subs: [
    N("Functions", 6, "Read, evaluate and compose functions.", [
      ["Evaluating", ["f(3) means replace x with 3 everywhere.", "f(g(x)): work out g first, then put the result into f."]],
      ["Graphs", ["f(x) = k: find where the graph has height k.", "Shifts: f(x) + k moves up, f(x - h) moves right by h.", "Zeros of f are the x-intercepts of its graph."]],
    ], ["Substitute carefully, with brackets.", "Inside first for composed functions.", "f(x - h) shifts right, not left."]),
    N("Quadratics", 6, "Solve quadratics and read their graphs.", [
      ["Solving", ["Factor, complete the square, or use x = (-b ± √(b² - 4ac)) / 2a.", "Discriminant b² - 4ac: positive gives two real roots, zero one, negative none."]],
      ["Graphs", ["Vertex form y = a(x - h)² + k has vertex (h, k).", "The axis of symmetry is x = -b / 2a, halfway between the roots.", "a > 0 opens up; a < 0 opens down."]],
    ], ["The vertex lies halfway between the roots.", "Discriminant tells you how many roots.", "Sum of roots = -b/a, product = c/a."]),
    N("Exponential functions", 5, "Model growth and decay with a constant factor.", [
      ["The form", ["y = a · b^t: a is the starting value, b the growth factor.", "b = 1 + r for growth by r, b = 1 - r for decay by r.", "Doubling: b = 2; halving: b = 0.5."]],
      ["Linear or exponential", ["Linear adds the same amount each step; exponential multiplies by the same factor."]],
    ], ["a is the start, b is the factor.", "Growth: 1 + r. Decay: 1 - r.", "Multiplying each step means exponential."]),
    N("Exponential equations", 4, "Solve equations with the variable in the exponent.", [
      ["Method", ["Write both sides with the same base: 8 = 2³, 27 = 3³.", "Then set the exponents equal.", "Use exponent rules: xᵃ · xᵇ = xᵃ⁺ᵇ, (xᵃ)ᵇ = xᵃᵇ."]],
    ], ["Match the bases, then match the exponents.", "Know powers of 2, 3 and 5.", "A negative exponent means a reciprocal."]),
    N("Equivalent expressions", 4, "Rewrite expressions without changing their value.", [
      ["Tools", ["Expand and collect like terms.", "Factor out the greatest common factor.", "Difference of squares: a² - b² = (a + b)(a - b)."]],
      ["Checking", ["Substitute a simple number into the original and each choice; the equivalent one gives the same value."]],
    ], ["Plug in a number to test equivalence.", "Look for a common factor first.", "Know the special products."]),
    N("Nonlinear expressions", 4, "Simplify rational and polynomial expressions.", [
      ["Rational expressions", ["Factor the top and bottom, then cancel common factors.", "Add fractions by finding a common denominator."]],
      ["Polynomials", ["Distribute every term when multiplying.", "Combine only like terms (same variable and power)."]],
    ], ["Factor before cancelling.", "Only like terms combine.", "Watch signs when distributing a negative."]),
    N("Systems with nonlinear equations", 4, "Solve a line together with a parabola or other curve.", [
      ["Method", ["Substitute the linear equation into the nonlinear one.", "Solve the resulting quadratic; each real root gives an intersection.", "The discriminant tells how many intersection points there are."]],
    ], ["Substitute the line into the curve.", "Real roots are intersection points.", "Zero discriminant means the line touches once."]),
    N("Radicals", 3, "Work with square roots and rational exponents.", [
      ["Rules", ["√(ab) = √a · √b.", "x^(1/n) is the nth root of x; x^(m/n) = (ⁿ√x)ᵐ.", "Square both sides to solve a radical equation, then check for extra solutions."]],
    ], ["Rational exponents are roots.", "Check answers after squaring.", "Simplify by taking out square factors."]),
    N("Absolute value", 3, "Solve equations and read graphs involving |x|.", [
      ["Rules", ["|x| = k has two solutions, x = k and x = -k, when k > 0.", "|x - a| is the distance from x to a.", "The graph of y = |x| is a V with its corner at the origin."]],
    ], ["Absolute value is distance from zero.", "Split |expression| = k into two equations.", "A negative absolute value is impossible."]),
  ] },
  { id: "data", pic: "chart", subject: "Math", name: "Problem Solving and Data Analysis", subs: [
    N("Ratios and rates", 4, "Compare quantities and convert units.", [
      ["Method", ["Write the ratio as a fraction and set up a proportion.", "Convert units by multiplying by fractions equal to 1, so units cancel.", "Rate = amount / time."]],
    ], ["Units should cancel to what you want.", "Cross-multiply proportions.", "Check the order of the ratio."]),
    N("Percentages", 4, "Find percentages of amounts and amounts from percentages.", [
      ["Method", ["Part = percent × whole (as a decimal).", "Whole = part ÷ percent.", "p% of q equals q% of p."]],
    ], ["Convert the percent to a decimal.", "Part over whole times 100 gives a percent.", "Read carefully: percent of what?"]),
    N("Percent change", 4, "Work out increases, decreases and successive changes.", [
      ["Method", ["Percent change = (new - old) / old × 100.", "Increase by p%: multiply by (1 + p/100). Decrease: (1 - p/100).", "Successive changes multiply: up 10% then down 10% is 0.99 of the start."]],
    ], ["Divide by the original amount.", "Use multipliers for repeated changes.", "Changes do not simply add."]),
    N("Statistics", 5, "Measures of centre and spread.", [
      ["Centre", ["Mean: total ÷ count. Median: middle value in order.", "An outlier pulls the mean toward it but barely moves the median."]],
      ["Spread", ["Range: largest - smallest.", "Standard deviation: typical distance from the mean.", "Adding the same number to every value changes the mean but not the spread."]],
    ], ["Outliers affect the mean more than the median.", "Total = mean × count.", "Shifting all values keeps the spread the same."]),
    N("Data analysis", 4, "Read tables, bar graphs and other displays.", [
      ["Method", ["Read the title, the labels and the units first.", "In two-way tables, use the row or column the question names as the total."]],
    ], ["Check what the total is.", "Read scales carefully.", "Units matter."]),
    N("Scatterplots", 4, "Describe trends and use a line of best fit.", [
      ["Method", ["Positive association: y tends to rise as x rises.", "Use the line of best fit to predict; read values from the line, not a point.", "Residual = actual - predicted."]],
    ], ["Predict from the line, not a single point.", "Slope of the fit is the rate of change.", "Correlation does not show cause."]),
    N("Probability", 4, "Find the chance of events, often from a table.", [
      ["Method", ["P = favourable / total possible.", "Given that ... means the total is only the named group.", "Independent events: multiply the probabilities."]],
    ], ["Find the right total first.", "Given that narrows the total.", "Probabilities are between 0 and 1."]),
  ] },
  { id: "geometry", pic: "triangle", subject: "Math", name: "Geometry and Trigonometry", subs: [
    N("Area", 4, "Area of plane shapes and composite figures.", [
      ["Formulas", ["Rectangle ℓw. Triangle ½ bh. Circle πr². Trapezoid ½(a + b)h.", "Composite shapes: add the parts or subtract the cut-outs."]],
      ["Scaling", ["If lengths scale by k, area scales by k²."]],
    ], ["Use the perpendicular height.", "Lengths × k means area × k².", "Split odd shapes into simple ones."]),
    N("Volume", 4, "Volume of prisms, cylinders, cones and spheres.", [
      ["Formulas", ["Prism: base area × height. Cylinder πr²h.", "Cone ⅓πr²h. Pyramid ⅓ℓwh. Sphere ⁴⁄₃πr³."]],
      ["Scaling", ["If lengths scale by k, volume scales by k³."]],
    ], ["Cones and pyramids are a third of a prism.", "Lengths × k means volume × k³.", "Check you used the radius, not the diameter."]),
    N("Surface area", 3, "The total area of a solid's faces.", [
      ["Method", ["Add the area of every face.", "Cylinder: 2πr² + 2πrh.", "A cube with side s: 6s²."]],
    ], ["Count every face once.", "Cylinders have two circles and a curved side.", "Surface area is in square units."]),
    N("Triangles", 4, "Angles, sides and special triangles.", [
      ["Facts", ["Angles in a triangle sum to 180°.", "An exterior angle equals the sum of the two opposite interior angles.", "Isosceles: two equal sides opposite two equal angles."]],
    ], ["Angles total 180°.", "Equal sides face equal angles.", "Look for parallel lines and their equal angles."]),
    N("Right triangles", 4, "Pythagoras and special right triangles.", [
      ["Facts", ["a² + b² = c².", "30-60-90: x, x√3, 2x. 45-45-90: x, x, x√2.", "Triples: 3-4-5, 5-12-13, 8-15-17."]],
    ], ["c is the side opposite the right angle.", "Know the two special triangles.", "Multiples of triples are triples."]),
    N("Similar triangles", 3, "Triangles with the same shape.", [
      ["Facts", ["Matching angles are equal and matching sides are in the same ratio.", "A line parallel to one side makes a similar smaller triangle."]],
    ], ["Match corresponding sides carefully.", "Set up a proportion.", "Area ratio is the square of the side ratio."]),
    N("Trigonometry", 4, "Sine, cosine and tangent in right triangles.", [
      ["Facts", ["sin = opposite / hypotenuse, cos = adjacent / hypotenuse, tan = opposite / adjacent.", "sin x = cos(90° - x).", "180° = π radians."]],
    ], ["SOH CAH TOA.", "Complementary angles swap sin and cos.", "Convert degrees and radians with 180° = π."]),
    N("Circles", 4, "Arcs, sectors and angles in circles.", [
      ["Facts", ["Arc length = (angle / 360°) × 2πr. Sector area = (angle / 360°) × πr².", "A tangent meets the radius at 90°.", "An inscribed angle is half the central angle on the same arc."]],
    ], ["Use the fraction of the full circle.", "Tangent and radius are perpendicular.", "Inscribed angle is half the central angle."]),
    N("Circles in the plane", 4, "Equations of circles on coordinate axes.", [
      ["Facts", ["(x - h)² + (y - k)² = r²: centre (h, k), radius r.", "Complete the square on x and on y to reach this form."]],
    ], ["Signs in the equation are the opposite of the centre.", "The right side is r squared, not r.", "Complete the square for both variables."]),
  ] },
];

/** Every subtopic with its topic, numbered like 1.1, 1.2. */
export const SUBTOPICS = TOPICS.flatMap((t, i) => t.subs.map((s, j) => ({ ...s, id: `${t.id}-${j + 1}`, code: `${i + 1}.${j + 1}`, topic: t, topicNo: i + 1 })));
