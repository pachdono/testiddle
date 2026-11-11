// Revision notes, quizzes and flashcards for IGCSE Additional Mathematics (Cambridge 0606), which
// overlaps heavily with Edexcel Further Pure Mathematics (4PM1). Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "addmaths",
  name: "Additional Mathematics",
  topics: [
    one("functions", "Functions", "Functions", 8, "Domain, range, composite and inverse functions, and the modulus function.", [
      ["Key ideas", ["A function maps each input in the domain to exactly one output; the set of outputs is the range.", "One to one functions have inverses. The graph of f⁻¹ is the reflection of f in y = x.", "To find f⁻¹: write y = f(x), swap x and y, rearrange for y.", "fg(x) means apply g first, then f."]],
      ["Modulus", ["|x| is the size of x without its sign.", "The graph of y = |f(x)| reflects the parts below the x axis upwards.", "Solve |x - 2| = 5 by x - 2 = 5 or x - 2 = -5, so x = 7 or -3."]],
    ], ["Inverse: swap x and y, then rearrange.", "fg: g first.", "Modulus equations have two cases."], [
      ["f(x) = 3x - 1. What is f⁻¹(x)?", ["(x + 1)/3", "(x - 1)/3", "3x + 1", "1/(3x - 1)"], "A", "y = 3x - 1, swap: x = 3y - 1, so y = (x + 1)/3."],
      ["f(x) = x², g(x) = x + 2. What is fg(3)?", ["11", "25", "9", "13"], "B", "g(3) = 5, then f(5) = 25."],
      ["Solve |x - 2| = 5.", ["x = 7 only", "x = 7 or x = -3", "x = 3 or x = -7", "x = -3 only"], "B", "x - 2 = 5 or x - 2 = -5."],
      ["How is the graph of f⁻¹ related to the graph of f?", ["Reflected in the x axis", "Reflected in y = x", "Reflected in the y axis", "Translated up"], "B", "An inverse swaps x and y, which is a reflection in y = x."],
      ["What is the range of f(x) = x² + 3 for all real x?", ["f(x) ≥ 0", "f(x) ≥ 3", "f(x) > 3", "All real numbers"], "B", "x² is at least 0, so f(x) is at least 3."],
    ]),
    one("quadratics", "Quadratic functions", "Quadratic functions", 8, "Completing the square, the discriminant and quadratic inequalities.", [
      ["Completing the square", ["x² + bx + c = (x + b/2)² - (b/2)² + c.", "The turning point of y = (x + p)² + q is (-p, q).", "Example: x² - 6x + 11 = (x - 3)² + 2, minimum point (3, 2)."]],
      ["The discriminant", ["b² - 4ac > 0: two distinct real roots.", "b² - 4ac = 0: one repeated root (the line touches the curve).", "b² - 4ac < 0: no real roots.", "Use it to find when a line meets, touches or misses a curve."]],
      ["Inequalities", ["Find the roots, sketch the parabola, then read off the region.", "x² - x - 6 < 0 gives (x - 3)(x + 2) < 0, so -2 < x < 3."]],
    ], ["Turning point from completed square: (-p, q).", "Discriminant decides the number of roots.", "Sketch before solving inequalities."], [
      ["Write x² + 8x + 3 in the form (x + p)² + q.", ["(x + 4)² - 13", "(x + 4)² + 3", "(x + 8)² - 61", "(x + 4)² + 19"], "A", "(x + 4)² - 16 + 3 = (x + 4)² - 13."],
      ["For 2x² + 3x + 5 = 0, what is the discriminant?", ["-31", "31", "49", "-49"], "A", "9 - 40 = -31."],
      ["If the discriminant is negative, how many real roots are there?", ["Two", "One", "None", "Infinitely many"], "C", "No real roots."],
      ["Solve x² - x - 6 < 0.", ["x < -2 or x > 3", "-2 < x < 3", "-3 < x < 2", "x > 3"], "B", "The curve is below the axis between the roots -2 and 3."],
      ["What is the minimum point of y = (x - 3)² + 2?", ["(3, 2)", "(-3, 2)", "(3, -2)", "(2, 3)"], "A", "The turning point is (3, 2)."],
    ]),
    one("polynomials", "Factors of polynomials", "Factor and remainder theorems", 7, "Using f(a) to find factors and remainders of polynomials.", [
      ["The theorems", ["Remainder theorem: when f(x) is divided by (x - a), the remainder is f(a).", "Factor theorem: if f(a) = 0 then (x - a) is a factor.", "For (ax - b), use f(b/a)."]],
      ["Solving cubics", ["Try small values (±1, ±2, ±3) to find a root.", "Divide by the factor (or compare coefficients) to get a quadratic.", "Factorise or use the formula on the quadratic."]],
    ], ["Remainder = f(a) for (x - a).", "f(a) = 0 means a factor.", "Find one factor, then reduce to a quadratic."], [
      ["What is the remainder when x³ - 2x + 4 is divided by (x - 2)?", ["4", "8", "0", "12"], "B", "f(2) = 8 - 4 + 4 = 8."],
      ["f(3) = 0. What does this tell you?", ["(x + 3) is a factor", "(x - 3) is a factor", "The remainder is 3", "f has no roots"], "B", "By the factor theorem, (x - 3) is a factor."],
      ["For the factor (2x - 1), which value do you substitute?", ["x = 2", "x = -1", "x = ½", "x = -½"], "C", "2x - 1 = 0 when x = ½."],
      ["Is (x + 1) a factor of x³ + 1?", ["Yes, since f(-1) = 0", "No, since f(1) = 2", "Yes, since f(1) = 0", "No, since f(-1) = 2"], "A", "f(-1) = -1 + 1 = 0."],
      ["x³ - 6x² + 11x - 6 has factor (x - 1). What are all its roots?", ["1, 2, 3", "1, -2, -3", "-1, 2, 3", "1, 6, 11"], "A", "It factorises to (x - 1)(x - 2)(x - 3)."],
    ]),
    one("eqgraphs", "Equations, inequalities and graphs", "Modulus graphs and cubic inequalities", 7, "Sketching modulus and cubic graphs and using them to solve problems.", [
      ["Graphs", ["Sketch cubics from their roots: a positive x³ term rises to the right.", "A repeated root touches the axis instead of crossing it.", "y = |ax + b| is a V shape with its vertex on the x axis."]],
      ["Solving", ["|f(x)| = g(x): solve f(x) = g(x) and f(x) = -g(x), then check each answer.", "|a| < |b| can be solved by squaring both sides: a² < b².", "Cubic inequalities: use the sketch to read off where the curve is above or below the axis."]],
    ], ["Repeated root: touches the axis.", "Check modulus answers in the original equation.", "Square both sides for |a| < |b|."], [
      ["Where is the vertex of y = |2x - 6|?", ["(0, 6)", "(3, 0)", "(6, 0)", "(-3, 0)"], "B", "2x - 6 = 0 when x = 3."],
      ["y = (x - 1)²(x + 2). What happens at x = 1?", ["It crosses the axis", "It touches the axis", "There is an asymptote", "Nothing"], "B", "A repeated root means the curve touches the axis."],
      ["Solve |x| < 3.", ["x < 3", "-3 < x < 3", "x > -3", "x < -3 or x > 3"], "B", "x lies within 3 of zero."],
      ["y = x(x - 2)(x + 1) with a positive x³ term. For large positive x, the curve is:", ["Below the axis", "Above the axis", "On the axis", "Undefined"], "B", "A positive cubic rises to the right."],
      ["How can you solve |x + 1| < |x - 3|?", ["Add the moduli", "Square both sides", "Ignore the modulus", "Take logs"], "B", "Squaring removes the modulus safely as both sides are non negative."],
    ]),
    one("simult", "Simultaneous equations", "Linear and non linear simultaneous equations", 6, "Solving a linear and a quadratic equation together.", [
      ["Method", ["Rearrange the linear equation for one variable.", "Substitute into the quadratic and solve.", "Substitute each answer back into the linear equation to find the matching value.", "Two solutions mean the line cuts the curve twice; one means it is a tangent."]],
    ], ["Substitute the linear into the quadratic.", "Pair every x with its own y.", "Discriminant tells you how many intersections."], [
      ["Solve y = x + 1 and y = x² - 1. What are the x values?", ["x = 2 or -1", "x = 1 or -2", "x = 0 or 1", "x = 3 or -1"], "A", "x + 1 = x² - 1, so x² - x - 2 = 0, (x - 2)(x + 1) = 0."],
      ["The line and curve meet at exactly one point. What is the line?", ["A chord", "A tangent", "An asymptote", "A normal"], "B", "One point of contact means the line is a tangent."],
      ["x + y = 5 and xy = 6. What are the solutions?", ["(2, 3) and (3, 2)", "(1, 6) and (6, 1)", "(5, 0) only", "(-2, -3) and (-3, -2)"], "A", "x(5 - x) = 6 gives x² - 5x + 6 = 0, x = 2 or 3."],
      ["What is the first step with y = 2x and x² + y² = 20?", ["Square the first equation only", "Substitute y = 2x into the second", "Add the equations", "Take logs"], "B", "Substitute to get x² + 4x² = 20."],
      ["Solve y = 2x and x² + y² = 20. What are the x values?", ["x = ±2", "x = ±4", "x = ±√10", "x = 2 only"], "A", "5x² = 20, x² = 4."],
    ]),
    one("logs", "Logarithmic and exponential functions", "Logarithms and exponentials", 8, "Log laws, solving exponential equations and the graphs of eˣ and ln x.", [
      ["Log laws", ["logₐ x = y means aʸ = x.", "log(ab) = log a + log b; log(a/b) = log a - log b; log aⁿ = n log a.", "logₐ a = 1 and logₐ 1 = 0. Change of base: logₐ b = log b / log a."]],
      ["Solving and graphs", ["Solve aˣ = b by taking logs: x = log b / log a.", "ln x is the natural log, the inverse of eˣ.", "y = eˣ passes through (0, 1); y = ln x passes through (1, 0).", "Straight line graphs: plotting ln y against x for y = Aeᵏˣ gives a line with gradient k and intercept ln A."]],
    ], ["Three log laws: add, subtract, bring down the power.", "Take logs to solve for a power.", "eˣ and ln x are inverses."], [
      ["What is log₂ 8?", ["2", "3", "4", "16"], "B", "2³ = 8."],
      ["Simplify log 6 + log 5.", ["log 11", "log 30", "log 1.2", "11"], "B", "log a + log b = log ab."],
      ["Solve 2ˣ = 10 (to 2 decimal places).", ["3.32", "5.00", "0.30", "2.30"], "A", "x = log 10 / log 2 ≈ 3.32."],
      ["Where does y = ln x cross the x axis?", ["(0, 0)", "(1, 0)", "(e, 0)", "It does not"], "B", "ln 1 = 0."],
      ["What is 3 log x written as a single log?", ["log 3x", "log x³", "log (x + 3)", "3x"], "B", "n log a = log aⁿ."],
    ]),
    one("lines", "Straight line graphs", "Straight lines and linear law", 6, "Gradients, perpendicular lines, and changing curves into straight lines.", [
      ["Lines", ["y - y₁ = m(x - x₁) gives a line with gradient m through (x₁, y₁).", "Perpendicular gradients multiply to -1.", "Perpendicular bisector of AB: passes through the midpoint with gradient -1/m."]],
      ["Linear law", ["Turn y = axⁿ into lg y = n lg x + lg a: plot lg y against lg x.", "Turn y = abˣ into lg y = x lg b + lg a.", "Read the gradient and intercept to find the constants."]],
    ], ["Perpendicular bisector: midpoint and negative reciprocal.", "Take logs to get a straight line.", "Gradient and intercept give the unknown constants."], [
      ["A line through (2, 3) has gradient 4. What is its equation?", ["y = 4x - 5", "y = 4x + 3", "y = 4x - 2", "y = 2x + 3"], "A", "y - 3 = 4(x - 2), so y = 4x - 5."],
      ["For y = axⁿ, what do you plot to get a straight line?", ["y against x", "lg y against lg x", "y against lg x", "lg y against x"], "B", "lg y = n lg x + lg a."],
      ["AB has gradient ⅓. What is the gradient of its perpendicular bisector?", ["⅓", "3", "-3", "-⅓"], "C", "The negative reciprocal of ⅓ is -3."],
      ["For y = abˣ plotted as lg y against x, what is the gradient?", ["lg a", "lg b", "a", "b"], "B", "lg y = (lg b)x + lg a."],
      ["What is the midpoint of A(1, 5) and B(7, 1)?", ["(4, 3)", "(3, 4)", "(8, 6)", "(6, -4)"], "A", "((1 + 7)/2, (5 + 1)/2)."],
    ]),
    one("circle", "Coordinate geometry of the circle", "Equation of a circle", 6, "The circle equation, tangents and intersections with lines.", [
      ["The equation", ["(x - a)² + (y - b)² = r² has centre (a, b) and radius r.", "Complete the square to find the centre and radius from the expanded form.", "A tangent is perpendicular to the radius at the point of contact."]],
      ["Intersections", ["Substitute the line into the circle equation.", "Use the discriminant: two points, one point (tangent) or no intersection."]],
    ], ["Centre (a, b), radius r.", "Tangent perpendicular to radius.", "Discriminant for line and circle."], [
      ["What are the centre and radius of (x - 2)² + (y + 3)² = 16?", ["(2, -3), 4", "(-2, 3), 4", "(2, -3), 16", "(2, 3), 4"], "A", "Centre (2, -3), radius √16 = 4."],
      ["Find the centre of x² + y² - 6x + 4y = 3.", ["(3, -2)", "(-3, 2)", "(6, -4)", "(3, 2)"], "A", "(x - 3)² + (y + 2)² = 16."],
      ["The radius to a point has gradient 2. What is the gradient of the tangent there?", ["2", "-2", "½", "-½"], "D", "The tangent is perpendicular: -½."],
      ["A line meets a circle and the discriminant is zero. What is the line?", ["A diameter", "A tangent", "A chord", "Outside the circle"], "B", "One point of contact."],
      ["Which point lies on x² + y² = 25?", ["(3, 4)", "(2, 5)", "(5, 5)", "(1, 4)"], "A", "9 + 16 = 25."],
    ]),
    one("radians", "Circular measure", "Radians, arcs and sectors", 6, "Working in radians for arc length and sector area.", [
      ["Radians", ["π radians = 180 degrees. Convert degrees to radians by multiplying by π/180.", "Arc length s = rθ.", "Sector area = ½r²θ.", "Segment area = sector area - triangle area = ½r²(θ - sin θ)."]],
    ], ["π = 180 degrees.", "s = rθ, A = ½r²θ (θ in radians).", "Segment = sector minus triangle."], [
      ["What is 90 degrees in radians?", ["π/4", "π/2", "π", "2π"], "B", "90 x π/180 = π/2."],
      ["Arc length for r = 5 cm and θ = 1.2 rad?", ["6 cm", "4.2 cm", "12 cm", "15 cm"], "A", "s = 5 x 1.2 = 6."],
      ["Sector area for r = 4 and θ = 0.5 rad?", ["2", "4", "8", "1"], "B", "½ x 16 x 0.5 = 4."],
      ["What is π/3 radians in degrees?", ["30", "45", "60", "120"], "C", "180 / 3 = 60."],
      ["How do you find the area of a segment?", ["Sector area plus triangle area", "Sector area minus triangle area", "Arc length times radius", "Triangle area only"], "B", "The segment is the sector with the triangle removed."],
    ]),
    one("trig", "Trigonometry", "Identities, equations and graphs", 9, "Trig graphs, identities and solving trigonometric equations.", [
      ["Identities", ["tan θ = sin θ / cos θ.", "sin²θ + cos²θ = 1.", "sec θ = 1/cos θ, cosec θ = 1/sin θ, cot θ = 1/tan θ.", "1 + tan²θ = sec²θ and 1 + cot²θ = cosec²θ."]],
      ["Equations and graphs", ["Find the principal value, then use the symmetry of the graph for others in the range.", "sin is positive in the first and second quadrants; cos in the first and fourth; tan in the first and third (CAST).", "y = a sin bx + c: amplitude a, period 360/b degrees, shifted up by c."]],
    ], ["Use CAST for all solutions.", "sin² + cos² = 1.", "Period of sin bx is 360/b degrees."], [
      ["Solve sin x = 0.5 for 0 ≤ x ≤ 360 degrees.", ["30 and 150", "30 and 210", "60 and 120", "30 and 330"], "A", "sin is positive in quadrants 1 and 2: 30 and 180 - 30."],
      ["Simplify 1 - cos²θ.", ["sin θ", "sin²θ", "tan²θ", "cos θ"], "B", "From sin²θ + cos²θ = 1."],
      ["What is the period of y = sin 3x (degrees)?", ["120", "360", "1080", "3"], "A", "360 / 3 = 120."],
      ["What is 1 + tan²θ equal to?", ["sec²θ", "cosec²θ", "cot²θ", "1"], "A", "Divide sin² + cos² = 1 by cos²."],
      ["What is the amplitude of y = 4 cos x + 1?", ["1", "4", "5", "3"], "B", "The amplitude is the coefficient, 4."],
    ]),
    one("perms", "Permutations and combinations", "Arrangements and selections", 6, "Counting orders (permutations) and choices (combinations).", [
      ["Counting", ["n! ways to arrange n different items.", "Permutations ⁿPᵣ = n! / (n - r)!: order matters.", "Combinations ⁿCᵣ = n! / (r!(n - r)!): order does not matter.", "For restrictions, deal with the restricted items first, or treat items that must be together as one block."]],
    ], ["Order matters: P. Order does not: C.", "Together: treat as one block.", "Not together: total minus together."], [
      ["How many ways can 5 different books be arranged on a shelf?", ["25", "60", "120", "720"], "C", "5! = 120."],
      ["How many ways can a committee of 3 be chosen from 7 people?", ["21", "35", "210", "343"], "B", "⁷C₃ = 35."],
      ["How many ways can 1st, 2nd and 3rd be awarded among 6 runners?", ["20", "120", "216", "720"], "B", "⁶P₃ = 6 x 5 x 4 = 120."],
      ["When does order matter?", ["Combinations", "Permutations", "Both", "Neither"], "B", "Permutations count orders."],
      ["How many arrangements of A, B, C, D have A and B next to each other?", ["6", "12", "24", "48"], "B", "Treat AB as one block: 3! x 2! = 12."],
    ]),
    one("series", "Series", "Binomial expansion and progressions", 8, "Binomial expansion, arithmetic and geometric progressions.", [
      ["Binomial", ["(a + b)ⁿ = aⁿ + ⁿC₁aⁿ⁻¹b + ⁿC₂aⁿ⁻²b² + ... + bⁿ.", "Use Pascal's triangle or ⁿCᵣ for the coefficients.", "To find a specific term, write the general term ⁿCᵣ aⁿ⁻ʳ bʳ."]],
      ["Progressions", ["Arithmetic: uₙ = a + (n - 1)d; Sₙ = n/2 (2a + (n - 1)d).", "Geometric: uₙ = arⁿ⁻¹; Sₙ = a(1 - rⁿ)/(1 - r).", "Sum to infinity S∞ = a/(1 - r), only if |r| < 1."]],
    ], ["General binomial term: ⁿCᵣ aⁿ⁻ʳ bʳ.", "AP adds d; GP multiplies by r.", "Sum to infinity needs |r| < 1."], [
      ["What is the coefficient of x² in (1 + x)⁵?", ["5", "10", "20", "25"], "B", "⁵C₂ = 10."],
      ["An AP has a = 3, d = 4. What is the 10th term?", ["39", "40", "43", "37"], "A", "3 + 9 x 4 = 39."],
      ["A GP has a = 2, r = 3. What is the 4th term?", ["18", "54", "24", "162"], "B", "2 x 3³ = 54."],
      ["What is the sum to infinity of 8 + 4 + 2 + ...?", ["14", "16", "32", "It does not exist"], "B", "8 / (1 - ½) = 16."],
      ["When does a geometric series have a sum to infinity?", ["When r > 1", "When |r| < 1", "Always", "When r is negative"], "B", "Only when the terms shrink, |r| < 1."],
    ]),
    one("vectors", "Vectors in two dimensions", "Vectors", 6, "Position vectors, magnitude, unit vectors and relative velocity.", [
      ["Vectors", ["Write vectors as xi + yj or column vectors.", "Magnitude |xi + yj| = √(x² + y²). A unit vector has magnitude 1: divide a vector by its magnitude.", "AB = OB - OA, using position vectors.", "Velocity problems: position = initial position + t x velocity."]],
    ], ["AB = b - a.", "Unit vector = vector / magnitude.", "Position at time t: r = r₀ + tv."], [
      ["What is the magnitude of 5i + 12j?", ["7", "13", "17", "60"], "B", "√(25 + 144) = 13."],
      ["OA = 2i + j, OB = 5i + 5j. What is AB?", ["3i + 4j", "7i + 6j", "-3i - 4j", "10i + 5j"], "A", "AB = OB - OA."],
      ["What is the unit vector in the direction of 3i + 4j?", ["(3i + 4j)/5", "3i + 4j", "(3i + 4j)/7", "(3i + 4j)/25"], "A", "Divide by the magnitude 5."],
      ["A boat starts at 2i + 3j and moves with velocity i - j per hour. Where is it after 3 hours?", ["5i", "3i + 2j", "5i + 6j", "i + 4j"], "A", "2i + 3j + 3(i - j) = 5i + 0j."],
      ["Which vector is parallel to 2i - j?", ["i + 2j", "-4i + 2j", "2i + j", "i - 2j"], "B", "-4i + 2j = -2(2i - j)."],
    ]),
    { id: "calculus", name: "Differentiation and integration", subs: [
      N("Differentiation", 9, "Gradients, tangents, stationary points and rates of change.", [
        ["Rules", ["d/dx (xⁿ) = nxⁿ⁻¹.", "d/dx (eᵏˣ) = keᵏˣ; d/dx (ln x) = 1/x; d/dx (sin x) = cos x; d/dx (cos x) = -sin x.", "Chain rule: dy/dx = dy/du x du/dx. Product rule: (uv)' = u'v + uv'. Quotient rule: (u/v)' = (u'v - uv')/v²."]],
        ["Uses", ["Gradient of a tangent at a point: substitute x into dy/dx.", "Stationary points where dy/dx = 0. Second derivative positive: minimum; negative: maximum.", "Connected rates of change: dV/dt = dV/dr x dr/dt.", "Small changes: δy ≈ (dy/dx) δx."]],
      ], ["Power rule: bring down, subtract one.", "dy/dx = 0 at stationary points.", "Chain rule links rates of change."], [
        ["Differentiate y = 4x³.", ["12x²", "4x²", "12x³", "x⁴"], "A", "3 x 4x² = 12x²."],
        ["What is the gradient of y = x² + 3x at x = 2?", ["7", "10", "4", "13"], "A", "dy/dx = 2x + 3 = 7."],
        ["At a stationary point, d²y/dx² = -4. What kind of point is it?", ["Minimum", "Maximum", "Point of inflection", "Not stationary"], "B", "Negative second derivative means a maximum."],
        ["Differentiate y = e³ˣ.", ["e³ˣ", "3e³ˣ", "3e²ˣ", "e³ˣ/3"], "B", "d/dx eᵏˣ = keᵏˣ."],
        ["Differentiate y = sin x.", ["cos x", "-cos x", "-sin x", "tan x"], "A", "The derivative of sin x is cos x."],
      ]),
      N("Integration and kinematics", 9, "Reversing differentiation, areas under curves and motion in a line.", [
        ["Integration", ["∫xⁿ dx = xⁿ⁺¹/(n + 1) + c, for n ≠ -1.", "∫eᵏˣ dx = eᵏˣ/k + c; ∫1/x dx = ln x + c; ∫cos x dx = sin x + c; ∫sin x dx = -cos x + c.", "Definite integrals give the area between a curve and the x axis; areas below the axis come out negative."]],
        ["Kinematics", ["Velocity v = ds/dt; acceleration a = dv/dt.", "Displacement s = ∫v dt; velocity v = ∫a dt.", "The particle is at rest when v = 0."]],
      ], ["Add one to the power, divide by the new power, add c.", "Area below the axis is negative.", "s, v, a: differentiate down, integrate up."], [
        ["Find ∫6x² dx.", ["2x³ + c", "12x + c", "6x³ + c", "3x³ + c"], "A", "6x³/3 = 2x³."],
        ["Evaluate ∫ from 0 to 2 of 3x² dx.", ["4", "6", "8", "12"], "C", "[x³] from 0 to 2 = 8."],
        ["s = t³ - 3t. What is the velocity at t = 2?", ["2", "9", "12", "6"], "B", "v = 3t² - 3 = 9."],
        ["Find ∫cos x dx.", ["sin x + c", "-sin x + c", "cos x + c", "-cos x + c"], "A", "The integral of cos x is sin x."],
        ["Why must you add c to an indefinite integral?", ["To make it bigger", "Because any constant differentiates to zero", "For units", "It is a rule with no reason"], "B", "Many functions have the same derivative, differing only by a constant."],
      ]),
    ] },
  ],
};
