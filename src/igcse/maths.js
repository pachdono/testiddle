// Revision notes, quizzes and flashcards for IGCSE Mathematics, following the Cambridge 0580
// topics (Edexcel 4MA1 covers the same areas). Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });

export default {
  id: "maths",
  name: "Mathematics",
  topics: [
    { id: "number", name: "Number", subs: [
      N("Number skills", 9, "Types of number, fractions, percentages, standard form, bounds and ratio.", [
        ["Types of number", ["Primes have exactly two factors. Write numbers as a product of primes using a factor tree: 60 = 2² x 3 x 5.", "HCF: multiply the shared prime factors. LCM: multiply the highest power of every prime.", "Rational numbers can be written as fractions; irrational numbers (like √2 and π) cannot."]],
        ["Fractions and percentages", ["Percentage change = change / original x 100.", "[E] Reverse percentage: if 120 percent is 84, then 100 percent is 84 / 1.2 = 70.", "Compound interest: amount = P(1 + r/100)ⁿ.", "Standard form: A x 10ⁿ with 1 ≤ A < 10. 45 000 = 4.5 x 10⁴; 0.0032 = 3.2 x 10⁻³."]],
        ["Accuracy and ratio", ["[E] Upper and lower bounds: 7 cm to the nearest cm lies between 6.5 cm and 7.5 cm.", "Divide in a ratio: add the parts, find one part, then multiply.", "Speed, density and pressure are compound measures."]],
      ], ["Reverse percentages: divide by the multiplier.", "Standard form needs 1 ≤ A < 10.", "Bounds are half a unit either side."], [
        ["What is 60 as a product of prime factors?", ["2 x 30", "2² x 15", "2² x 3 x 5", "2 x 3 x 10"], "C", "60 = 2 x 2 x 3 x 5."],
        ["A price rises by 20 percent to 84 dollars. What was the original price?", ["67.20", "70", "64", "100.80"], "B", "84 / 1.2 = 70."],
        ["Write 0.00045 in standard form.", ["4.5 x 10⁻⁴", "4.5 x 10⁴", "45 x 10⁻⁵", "0.45 x 10⁻³"], "A", "Move the decimal point 4 places: 4.5 x 10⁻⁴."],
        ["Share 45 in the ratio 2 : 7. What is the larger share?", ["10", "25", "35", "38"], "C", "9 parts, one part is 5, so 7 parts is 35."],
        ["A length is 12 cm to the nearest cm. What is the lower bound?", ["11 cm", "11.5 cm", "11.9 cm", "12.5 cm"], "B", "Half a unit below 12 is 11.5."],
      ]),
    ] },
    { id: "algebra", name: "Algebra and graphs", subs: [
      N("Algebra", 10, "Expanding, factorising, equations, inequalities, sequences and indices.", [
        ["Manipulation", ["Expand double brackets: (x + 3)(x - 2) = x² + x - 6.", "Factorise: x² + 5x + 6 = (x + 2)(x + 3). Difference of two squares: x² - 9 = (x + 3)(x - 3).", "Index laws: aᵐ x aⁿ = aᵐ⁺ⁿ; aᵐ / aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁰ = 1; a⁻ⁿ = 1/aⁿ; a^(1/n) is the nth root."]],
        ["Equations", ["Solve linear equations by doing the same to both sides.", "[E] Quadratics: factorise, use the formula x = (-b ± √(b² - 4ac)) / 2a, or complete the square.", "Simultaneous equations: eliminate one variable or substitute.", "Inequalities: solve like equations, but reverse the sign when multiplying or dividing by a negative."]],
        ["Sequences and functions", ["Linear sequence nth term: dn + c, where d is the common difference. 5, 8, 11 has nth term 3n + 2.", "[E] Function notation: f(x) = 2x + 1. Composite fg(x) means do g first, then f.", "[E] Inverse function f⁻¹(x) undoes f: for f(x) = 2x + 1, f⁻¹(x) = (x - 1)/2."]],
      ], ["Check factorising by expanding back.", "Flip the inequality sign when dividing by a negative.", "fg(x): g first, then f."], [
        ["Factorise x² - 7x + 12.", ["(x - 3)(x - 4)", "(x + 3)(x + 4)", "(x - 2)(x - 6)", "(x - 12)(x + 1)"], "A", "-3 and -4 multiply to 12 and add to -7."],
        ["Solve 3x - 5 = 16.", ["x = 3.7", "x = 7", "x = 11", "x = 21"], "B", "3x = 21, so x = 7."],
        ["What is the nth term of 5, 8, 11, 14?", ["n + 3", "3n + 5", "3n + 2", "5n + 3"], "C", "Difference 3, and 3 x 1 + 2 = 5."],
        ["Simplify x⁵ x x³.", ["x²", "x⁸", "x¹⁵", "2x⁸"], "B", "Add the powers: 5 + 3 = 8."],
        ["Solve -2x > 8.", ["x > -4", "x < -4", "x > 4", "x < 4"], "B", "Divide by -2 and reverse the sign."],
      ]),
      N("Graphs", 8, "Straight lines, quadratics, other curves and real life graphs.", [
        ["Shapes of graphs", ["Linear: y = mx + c, a straight line.", "Quadratic: y = ax² + bx + c, a parabola. Roots are where it crosses the x axis; the turning point is on the line of symmetry.", "[E] Cubic y = x³; reciprocal y = 1/x (two branches, asymptotes on the axes); exponential y = aˣ."]],
        ["Using graphs", ["Solve equations by finding where graphs cross.", "[E] Estimate a gradient of a curve by drawing a tangent.", "Distance time and speed time graphs: gradient and area meanings.", "Show inequalities as regions, shading the unwanted side."]],
      ], ["Roots: where the curve crosses y = 0.", "Tangent gradient = rate of change at a point.", "Dashed line for < or >, solid for ≤ or ≥."], [
        ["Where does y = x² - 4 cross the x axis?", ["x = 4 only", "x = 2 and x = -2", "x = -4", "It does not cross"], "B", "x² = 4 gives x = 2 or -2."],
        ["What shape is the graph of y = 1/x?", ["A straight line", "A parabola", "Two curved branches with asymptotes on the axes", "A circle"], "C", "Reciprocal graphs have two branches that never touch the axes."],
        ["How do you estimate the gradient of a curve at a point?", ["Find the area under it", "Draw a tangent and find its gradient", "Read the y intercept", "Join the ends of the curve"], "B", "The gradient of the tangent is the gradient of the curve there."],
        ["Which inequality uses a dashed boundary line?", ["y ≤ 3", "y ≥ 3", "y < 3", "x ≥ 1"], "C", "Strict inequalities (< or >) use a dashed line."],
        ["The graphs y = 2x and y = x + 3 cross at which point?", ["(1, 2)", "(3, 6)", "(2, 5)", "(6, 3)"], "B", "2x = x + 3 gives x = 3, so y = 6."],
      ]),
    ] },
    { id: "coord", name: "Coordinate geometry", subs: [
      N("Straight lines", 7, "Gradients, midpoints, lengths and equations of lines.", [
        ["Formulae", ["Gradient m = (y₂ - y₁) / (x₂ - x₁).", "Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2).", "Length = √((x₂ - x₁)² + (y₂ - y₁)²).", "Equation of a line: y = mx + c, where c is the y intercept."]],
        ["Parallel and perpendicular", ["Parallel lines have equal gradients.", "Perpendicular gradients multiply to -1: if one is 2, the other is -1/2.", "To find a line through a point, substitute the point into y = mx + c to find c."]],
      ], ["Gradient: rise over run.", "Perpendicular: negative reciprocal.", "Substitute a point to find c."], [
        ["What is the gradient between (1, 2) and (3, 8)?", ["2", "3", "4", "6"], "B", "(8 - 2) / (3 - 1) = 6 / 2 = 3."],
        ["What is the midpoint of (2, 4) and (6, 10)?", ["(4, 7)", "(8, 14)", "(3, 5)", "(4, 6)"], "A", "((2 + 6)/2, (4 + 10)/2) = (4, 7)."],
        ["A line has gradient 4. What is the gradient of a perpendicular line?", ["4", "-4", "1/4", "-1/4"], "D", "The negative reciprocal of 4 is -1/4."],
        ["What is the distance between (0, 0) and (6, 8)?", ["7", "10", "14", "48"], "B", "√(36 + 64) = √100 = 10."],
        ["Find the equation of the line with gradient 2 through (1, 5).", ["y = 2x + 5", "y = 2x + 3", "y = 5x + 2", "y = 2x - 3"], "B", "5 = 2(1) + c, so c = 3."],
      ]),
    ] },
    { id: "geometry", name: "Geometry", subs: [
      N("Angles, shapes and circle theorems", 10, "Angle facts, polygons, similarity, constructions and circle theorems.", [
        ["Angle facts", ["Angles on a straight line add to 180 degrees; around a point to 360 degrees; in a triangle to 180 degrees.", "Parallel lines: alternate angles are equal, corresponding angles are equal, co interior angles add to 180 degrees.", "Interior angles of an n sided polygon add to (n - 2) x 180 degrees. Exterior angles add to 360 degrees."]],
        ["Similarity and congruence", ["[E] Similar shapes: lengths scale by k, areas by k², volumes by k³.", "Congruent triangles: SSS, SAS, ASA, RHS."]],
        ["Circle theorems", ["The angle in a semicircle is 90 degrees.", "[E] The angle at the centre is twice the angle at the circumference.", "[E] Angles in the same segment are equal.", "[E] Opposite angles in a cyclic quadrilateral add to 180 degrees.", "A tangent is perpendicular to the radius; two tangents from a point are equal in length.", "[E] Alternate segment theorem: the angle between a tangent and a chord equals the angle in the alternate segment."]],
      ], ["Polygon interior sum: (n - 2) x 180.", "Area scales by k², volume by k³.", "Give the reason for every circle theorem step."], [
        ["What is the sum of the interior angles of a hexagon?", ["360 degrees", "540 degrees", "720 degrees", "1080 degrees"], "C", "(6 - 2) x 180 = 720."],
        ["What is each exterior angle of a regular pentagon?", ["60 degrees", "72 degrees", "108 degrees", "120 degrees"], "B", "360 / 5 = 72."],
        ["Two similar shapes have lengths in the ratio 1 : 3. What is the ratio of their areas?", ["1 : 3", "1 : 6", "1 : 9", "1 : 27"], "C", "Areas scale by k² = 9."],
        ["The angle at the centre is 110 degrees. What is the angle at the circumference on the same arc?", ["55 degrees", "70 degrees", "110 degrees", "220 degrees"], "A", "The angle at the centre is twice the angle at the circumference."],
        ["One angle of a cyclic quadrilateral is 75 degrees. What is the opposite angle?", ["75 degrees", "105 degrees", "115 degrees", "285 degrees"], "B", "Opposite angles add to 180."],
      ]),
    ] },
    { id: "mensuration", name: "Mensuration", subs: [
      N("Area, volume and units", 8, "Perimeter, area, arcs, sectors, surface area and volume.", [
        ["Area", ["Triangle ½bh; parallelogram bh; trapezium ½(a + b)h.", "Circle area πr², circumference 2πr.", "Arc length = θ/360 x 2πr. Sector area = θ/360 x πr²."]],
        ["Volume and surface area", ["Prism volume = cross section area x length. Cylinder V = πr²h.", "Cone V = ⅓πr²h, curved surface πrl. Sphere V = ⁴⁄₃πr³, surface 4πr². Pyramid V = ⅓ x base area x height.", "Units: 1 m² = 10 000 cm²; 1 m³ = 1 000 000 cm³; 1 litre = 1000 cm³."]],
      ], ["Sector = fraction of the circle.", "Cone and pyramid have a third.", "Square or cube the conversion factor for area or volume."], [
        ["What is the area of a trapezium with parallel sides 4 cm and 10 cm and height 5 cm?", ["35 cm²", "70 cm²", "20 cm²", "50 cm²"], "A", "½ x (4 + 10) x 5 = 35."],
        ["What is the volume of a cylinder with radius 3 cm and height 10 cm? (in terms of π)", ["30π", "60π", "90π", "300π"], "C", "π x 9 x 10 = 90π."],
        ["A sector has radius 6 cm and angle 60 degrees. What is its area (in terms of π)?", ["6π", "12π", "36π", "2π"], "A", "60/360 x π x 36 = 6π."],
        ["How many cm² are in 1 m²?", ["100", "1000", "10 000", "1 000 000"], "C", "100 x 100 = 10 000."],
        ["What is the volume of a cone with base area 30 cm² and height 9 cm?", ["90 cm³", "270 cm³", "30 cm³", "135 cm³"], "A", "⅓ x 30 x 9 = 90."],
      ]),
    ] },
    { id: "trig", name: "Trigonometry", subs: [
      N("Pythagoras and trigonometry", 10, "Right angled triangles, bearings, the sine and cosine rules and 3D problems.", [
        ["Right angled triangles", ["Pythagoras: a² + b² = c², where c is the hypotenuse.", "SOH CAH TOA: sin = opp/hyp, cos = adj/hyp, tan = opp/adj.", "Bearings are measured clockwise from north, written with three figures (045 degrees)."]],
        ["Any triangle", ["[E] Sine rule: a/sin A = b/sin B = c/sin C.", "[E] Cosine rule: a² = b² + c² - 2bc cos A.", "[E] Area = ½ab sin C.", "[E] Use the sine rule for a pair of opposite side and angle; use the cosine rule for three sides or two sides and the angle between."]],
        ["Graphs and 3D", ["sin x and cos x repeat every 360 degrees and lie between -1 and 1.", "[E] In 3D, find a right angled triangle inside the shape, then use Pythagoras or trigonometry."]],
      ], ["Label opp, adj, hyp first.", "Sine rule for opposite pairs; cosine rule otherwise.", "Bearings: clockwise from north, three figures."], [
        ["A right angled triangle has shorter sides 5 cm and 12 cm. How long is the hypotenuse?", ["13 cm", "17 cm", "7 cm", "60 cm"], "A", "√(25 + 144) = √169 = 13."],
        ["Which ratio is opposite over adjacent?", ["sin", "cos", "tan", "sec"], "C", "TOA: tan = opp/adj."],
        ["A triangle has sides 7 and 10 with 30 degrees between them. What is its area?", ["17.5", "35", "70", "8.75"], "A", "½ x 7 x 10 x sin 30 = 17.5."],
        ["You know three sides of a triangle and want an angle. Which rule do you use?", ["Sine rule", "Cosine rule", "Pythagoras", "Area rule"], "B", "With three sides you need the cosine rule."],
        ["What is the bearing of due west?", ["090", "180", "270", "360"], "C", "Clockwise from north: east 090, south 180, west 270."],
      ]),
    ] },
    { id: "transform", name: "Transformations and vectors", subs: [
      N("Transformations and vectors", 8, "Reflections, rotations, translations, enlargements and vector arithmetic.", [
        ["Transformations", ["Reflection: give the mirror line (for example y = x).", "Rotation: give the centre, angle and direction.", "Translation: give the column vector.", "Enlargement: give the centre and scale factor. A negative scale factor flips the image through the centre; a fractional one makes it smaller."]],
        ["Vectors", ["A vector has size and direction, written as a column or in bold.", "Add vectors tip to tail. a - b = a + (-b).", "[E] Magnitude of (x, y) is √(x² + y²).", "[E] Parallel vectors are multiples of each other. Use paths round a shape to prove points lie on a line."]],
      ], ["Every transformation needs its full description.", "Parallel vectors: one is a multiple of the other.", "Magnitude by Pythagoras."], [
        ["What do you need to describe a rotation fully?", ["Mirror line only", "Centre, angle and direction", "Column vector", "Scale factor only"], "B", "Rotations need a centre, an angle and a direction."],
        ["What is the magnitude of the vector (3, 4)?", ["5", "7", "12", "25"], "A", "√(9 + 16) = 5."],
        ["An enlargement has scale factor ½. What happens to the shape?", ["It doubles in size", "It halves in size", "It flips", "It stays the same"], "B", "A scale factor between 0 and 1 makes the shape smaller."],
        ["Which vector is parallel to (2, 3)?", ["(3, 2)", "(4, 6)", "(2, -3)", "(5, 5)"], "B", "(4, 6) = 2 x (2, 3)."],
        ["What is (1, 4) + (3, -2)?", ["(4, 2)", "(2, 6)", "(4, 6)", "(-2, 6)"], "A", "Add components: (1 + 3, 4 - 2)."],
      ]),
    ] },
    { id: "probability", name: "Probability", subs: [
      N("Probability", 7, "Single events, combined events, tree diagrams and Venn diagrams.", [
        ["Basics", ["Probability is between 0 and 1. P(not A) = 1 - P(A).", "Relative frequency = number of times it happened / number of trials. Expected number = probability x trials.", "Mutually exclusive events: P(A or B) = P(A) + P(B)."]],
        ["Combined events", ["Independent events: P(A and B) = P(A) x P(B).", "Tree diagrams: multiply along branches, add the end results you want.", "Without replacement, the probabilities on the second branches change.", "[E] Conditional probability: the probability of B given that A has happened."]],
      ], ["AND means multiply; OR means add (for exclusive events).", "Watch for without replacement.", "Probabilities in a full set add to 1."], [
        ["The probability of rain is 0.3. What is the probability of no rain?", ["0.3", "0.7", "1.3", "0.03"], "B", "1 - 0.3 = 0.7."],
        ["Two fair coins are thrown. What is the probability of two heads?", ["1/2", "1/3", "1/4", "1/8"], "C", "½ x ½ = ¼."],
        ["A bag has 3 red and 2 blue balls. Two are taken without replacement. What is P(both red)?", ["9/25", "3/10", "6/25", "1/2"], "B", "3/5 x 2/4 = 6/20 = 3/10."],
        ["A dice is rolled 120 times. How many sixes do you expect?", ["6", "12", "20", "60"], "C", "1/6 x 120 = 20."],
        ["Which pair of events is mutually exclusive?", ["Rolling a 2 and rolling an even number", "Rolling a 2 and rolling a 5 on one roll", "Raining and being cold", "Picking a king and picking a heart"], "B", "One roll cannot be both 2 and 5."],
      ]),
    ] },
    { id: "statistics", name: "Statistics", subs: [
      N("Statistics", 8, "Averages, charts, cumulative frequency, histograms and scatter graphs.", [
        ["Averages", ["Mean = total / number of values. For grouped data use midpoints for an estimate.", "Median is the middle value; mode is the most common; range is largest minus smallest.", "[E] Interquartile range = upper quartile - lower quartile: the spread of the middle half."]],
        ["Charts", ["[E] Cumulative frequency: plot at the upper bound of each class, then read off the median and quartiles.", "[E] Histograms: frequency density = frequency / class width. The area of each bar shows frequency.", "Scatter graphs show correlation (positive, negative, none). A line of best fit can estimate values within the data range."]],
      ], ["Grouped mean uses midpoints.", "Histogram: frequency density = frequency / class width.", "Plot cumulative frequency at upper bounds."], [
        ["What is the median of 3, 7, 2, 9, 5?", ["5", "7", "5.2", "3"], "A", "In order: 2, 3, 5, 7, 9. The middle is 5."],
        ["A class of width 10 has frequency 30. What is the frequency density?", ["0.3", "3", "30", "300"], "B", "30 / 10 = 3."],
        ["Where do you plot points on a cumulative frequency graph?", ["At the midpoint of each class", "At the upper bound of each class", "At the lower bound", "At zero"], "B", "Cumulative frequency is plotted at the upper class boundary."],
        ["The upper quartile is 48 and the lower quartile is 30. What is the interquartile range?", ["9", "18", "39", "78"], "B", "48 - 30 = 18."],
        ["As temperature rises, ice cream sales rise. What correlation is this?", ["Negative", "Positive", "None", "Perfect negative"], "B", "Both increase together: positive correlation."],
      ]),
    ] },
  ],
};
