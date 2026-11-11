// Revision notes, quizzes and flashcards for IGCSE Mathematics, following every section of the
// Cambridge 0580 syllabus (Edexcel 4MA1 covers the same areas). Lines starting "[E] " are
// Extended content (Edexcel Higher). Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });

export default {
  id: "maths",
  name: "Mathematics",
  topics: [
    { id: "number", name: "Number", subs: [
      N("Types of number and sets", 9, "Kinds of number, factors and multiples, HCF and LCM, and set notation.", [
        ["Types of number", ["Natural numbers: 1, 2, 3, ... Integers: whole numbers including 0 and negatives.", "Prime: exactly two factors (1 and itself). 1 is not prime. 2 is the only even prime.", "Square numbers: 1, 4, 9, 16, ... Cube numbers: 1, 8, 27, 64, ... Triangle numbers: 1, 3, 6, 10, 15, ...", "Rational: can be written as a fraction a/b (including recurring decimals). Irrational: cannot, such as π, √2.", "Reciprocal of x is 1/x. Reciprocal of 2/3 is 3/2."]],
        ["Factors and multiples", ["Prime factorisation: write as a product of primes, such as 360 = 2³ x 3² x 5.", "HCF (highest common factor): multiply the primes common to both. LCM (lowest common multiple): multiply the highest power of every prime.", "Example: 12 = 2² x 3 and 18 = 2 x 3²: HCF = 2 x 3 = 6, LCM = 2² x 3² = 36."]],
        ["Sets", ["A set is a collection of elements. ξ is the universal set; ∅ is the empty set.", "∈ means 'is an element of'; n(A) is the number of elements in A.", "A ∩ B: in A and B (intersection). A ∪ B: in A or B or both (union). A′: not in A (complement).", "[E] A ⊆ B: A is a subset of B. Shade regions of Venn diagrams with up to three sets."]],
      ], ["Prime: exactly two factors; 1 is not prime.", "HCF: common primes. LCM: highest powers of all primes.", "∩ and, ∪ or, ′ not."], [
        ["Which is prime?", ["1", "9", "17", "21"], "C", "17 has exactly two factors."],
        ["What is the HCF of 24 and 36?", ["6", "12", "72", "4"], "B", "24 = 2³ x 3, 36 = 2² x 3²: HCF = 2² x 3 = 12."],
        ["What is the LCM of 4 and 6?", ["2", "10", "12", "24"], "C", "2² x 3 = 12."],
        ["Which is irrational?", ["0.25", "1/3", "√9", "√5"], "D", "√5 cannot be written as a fraction."],
        ["A = {1, 2, 3, 4}, B = {3, 4, 5}. What is A ∩ B?", ["{3, 4}", "{1, 2, 3, 4, 5}", "{1, 2}", "{5}"], "A", "Elements in both."],
        ["What is the reciprocal of 0.25?", ["2.5", "4", "0.5", "-0.25"], "B", "1 ÷ 0.25 = 4."],
      ]),
      N("Powers, roots, standard form and surds", 10, "Index laws, negative and fractional indices, standard form and surds.", [
        ["Index laws", ["aᵐ x aⁿ = aᵐ⁺ⁿ. aᵐ ÷ aⁿ = aᵐ⁻ⁿ. (aᵐ)ⁿ = aᵐⁿ.", "a⁰ = 1. a⁻ⁿ = 1/aⁿ, so 2⁻³ = 1/8.", "[E] Fractional indices: a^(1/n) = ⁿ√a, and a^(m/n) = (ⁿ√a)ᵐ. So 8^(2/3) = (∛8)² = 4."]],
        ["Standard form", ["A x 10ⁿ where 1 ≤ A < 10 and n is an integer.", "Large: 45 000 = 4.5 x 10⁴. Small: 0.0032 = 3.2 x 10⁻³.", "Multiply: multiply the A parts and add the powers, then adjust. (3 x 10⁴) x (5 x 10³) = 15 x 10⁷ = 1.5 x 10⁸."]],
        ["Surds", ["[E] Simplify using √(ab) = √a x √b: √50 = √25 x √2 = 5√2.", "[E] Collect like surds: 3√2 + 5√2 = 8√2.", "[E] Rationalise the denominator: multiply top and bottom by the surd. 6/√3 = 6√3/3 = 2√3.", "[E] For 1/(a + √b), multiply by (a - √b)."]],
      ], ["Add powers when multiplying, subtract when dividing.", "a⁻ⁿ = 1/aⁿ; [E] a^(m/n) = (ⁿ√a)ᵐ.", "Standard form: 1 ≤ A < 10."], [
        ["Simplify x⁵ x x³.", ["x²", "x⁸", "x¹⁵", "2x⁸"], "B", "Add the powers."],
        ["What is 5⁻²?", ["-25", "-10", "1/25", "1/10"], "C", "5⁻² = 1/5²."],
        ["Write 0.00072 in standard form.", ["7.2 x 10⁴", "7.2 x 10⁻⁴", "72 x 10⁻⁵", "0.72 x 10⁻³"], "B", "Move the point 4 places."],
        ["What is 27^(2/3)?", ["9", "18", "3", "6"], "A", "∛27 = 3, then 3² = 9."],
        ["Simplify √72.", ["6√2", "2√6", "8√9", "36√2"], "A", "√36 x √2 = 6√2."],
        ["Calculate (4 x 10³) x (3 x 10⁵) in standard form.", ["12 x 10⁸", "1.2 x 10⁹", "1.2 x 10⁸", "7 x 10⁸"], "B", "12 x 10⁸ = 1.2 x 10⁹."],
      ]),
      N("Fractions, percentages and interest", 10, "Fraction arithmetic, percentage change, reverse percentages, interest and exponential growth.", [
        ["Fractions and decimals", ["Add or subtract: common denominator. Multiply: tops times tops, bottoms times bottoms. Divide: flip the second and multiply.", "Mixed numbers: change to improper fractions first.", "Fractions to decimals: divide the top by the bottom. Some give recurring decimals, such as 1/3 = 0.333...", "[E] Recurring decimal to fraction: let x = 0.4545..., then 100x = 45.4545..., so 99x = 45 and x = 45/99 = 5/11."]],
        ["Percentages", ["Percentage of an amount: 15% of 80 = 0.15 x 80 = 12.", "Multipliers: increase by 20%: x 1.2; decrease by 15%: x 0.85.", "Percentage change = change ÷ original x 100.", "[E] Reverse percentage: after a 20% rise the price is £96, so the original = 96 ÷ 1.2 = £80."]],
        ["Interest and growth", ["Simple interest: I = PRT/100 (principal x rate x time ÷ 100). The interest is the same each year.", "Compound interest: total = P(1 + r/100)ⁿ. Interest is added to the total each year.", "[E] Exponential growth and decay: amount = initial x (multiplier)ⁿ. A car worth £12 000 losing 15% a year: 12 000 x 0.85³ after 3 years.", "Depreciation is decay, using a multiplier below 1."]],
      ], ["Multiplier: 1 + % for increase, 1 - % for decrease.", "Compound: P(1 + r/100)ⁿ. Simple: PRT/100.", "[E] Reverse: divide by the multiplier."], [
        ["Increase £60 by 15%.", ["£9", "£69", "£75", "£51"], "B", "60 x 1.15 = 69."],
        ["A price falls from £50 to £40. What is the percentage decrease?", ["10%", "20%", "25%", "80%"], "B", "10 ÷ 50 x 100 = 20%."],
        ["£500 is invested at 4% compound interest for 2 years. What is the total?", ["£540", "£540.80", "£520", "£504"], "B", "500 x 1.04² = 540.80."],
        ["After a 25% increase a coat costs £75. What was the original price?", ["£50", "£56.25", "£60", "£93.75"], "C", "75 ÷ 1.25 = 60."],
        ["What is 3/4 ÷ 1/2?", ["3/8", "3/2", "2/3", "1/4"], "B", "3/4 x 2/1 = 6/4 = 3/2."],
        ["Simple interest on £200 at 5% for 3 years is:", ["£10", "£30", "£31.53", "£230"], "B", "200 x 5 x 3 ÷ 100 = 30."],
      ]),
      N("Bounds, ratio, rates and estimation", 9, "Rounding, estimation, upper and lower bounds, ratio, proportion, speed and other rates.", [
        ["Rounding and estimation", ["Round to decimal places or significant figures. 0.04567 to 2 s.f. is 0.046.", "Estimate by rounding each number to 1 significant figure: 412 x 0.49 ≈ 400 x 0.5 = 200."]],
        ["Bounds", ["A length of 7 cm to the nearest cm has bounds 6.5 ≤ l < 7.5.", "[E] Maximum of a sum: upper + upper. Maximum of a difference: upper - lower.", "[E] Maximum of a quotient: upper ÷ lower. Minimum of a quotient: lower ÷ upper."]],
        ["Ratio and proportion", ["Simplify ratios like fractions: 12 : 18 = 2 : 3.", "Share £60 in the ratio 2 : 3: 5 parts, £12 each, so £24 and £36.", "Best buy: compare the price per unit (or units per pound)."]],
        ["Rates and units", ["Speed = distance ÷ time. Density = mass ÷ volume. Pressure = force ÷ area.", "Time: 1 hour 15 minutes = 1.25 hours, not 1.15.", "Money and exchange rates: multiply or divide by the rate."]],
      ], ["Bounds: half a unit either side.", "[E] Max quotient = upper ÷ lower.", "Share in a ratio: total parts, one part, then multiply."], [
        ["A length is 12 cm to the nearest cm. What is the lower bound?", ["11 cm", "11.5 cm", "11.9 cm", "12.5 cm"], "B", "Half a unit below."],
        ["Share £80 in the ratio 3 : 5.", ["£30 and £50", "£24 and £56", "£35 and £45", "£48 and £32"], "A", "8 parts of £10."],
        ["A car travels 150 km in 2 hours 30 minutes. What is its average speed?", ["60 km/h", "65 km/h", "75 km/h", "50 km/h"], "A", "150 ÷ 2.5 = 60."],
        ["a = 8 and b = 2, both to the nearest whole number. What is the upper bound of a ÷ b?", ["4", "5.67", "3.4", "4.5"], "B", "8.5 ÷ 1.5 = 5.67."],
        ["Round 0.07839 to 2 significant figures.", ["0.07", "0.078", "0.0784", "0.08"], "B", "First two non zero digits: 7 and 8."],
      ]),
    ] },
    { id: "algebra", name: "Algebra and graphs", subs: [
      N("Expressions and factorising", 10, "Simplifying, expanding brackets, factorising, algebraic fractions and changing the subject.", [
        ["Expanding", ["Single bracket: 3(2x - 5) = 6x - 15.", "Double brackets: (x + 3)(x - 5) = x² - 5x + 3x - 15 = x² - 2x - 15.", "[E] Three brackets: expand two, then multiply by the third."]],
        ["Factorising", ["Common factor: 6x² + 9x = 3x(2x + 3).", "[E] Quadratic: x² + 5x + 6 = (x + 2)(x + 3) (two numbers that multiply to 6 and add to 5).", "[E] Difference of two squares: a² - b² = (a + b)(a - b), such as x² - 49 = (x + 7)(x - 7).", "[E] ax² + bx + c: find two numbers that multiply to ac and add to b, then split the middle term."]],
        ["Algebraic fractions", ["[E] Simplify by factorising and cancelling: (x² - 9)/(x + 3) = x - 3.", "[E] Add or subtract with a common denominator: 1/x + 2/(x + 1) = (x + 1 + 2x)/(x(x + 1)) = (3x + 1)/(x(x + 1))."]],
        ["Changing the subject", ["Do the same to both sides to get the letter alone. v = u + at gives t = (v - u)/a.", "[E] If the subject appears twice, collect those terms on one side and factorise."]],
      ], ["Double brackets: multiply every term by every term.", "[E] a² - b² = (a + b)(a - b).", "Change the subject with inverse operations."], [
        ["Expand (x + 4)(x - 2).", ["x² + 2x - 8", "x² - 2x - 8", "x² + 6x - 8", "x² + 2x + 8"], "A", "-2x + 4x = 2x; 4 x -2 = -8."],
        ["Factorise 8x + 12.", ["4(2x + 3)", "2(4x + 6)", "8(x + 12)", "4(2x + 12)"], "A", "4 is the highest common factor."],
        ["Factorise x² - 7x + 12.", ["(x - 3)(x - 4)", "(x + 3)(x + 4)", "(x - 6)(x - 2)", "(x - 12)(x + 1)"], "A", "-3 x -4 = 12 and -3 + -4 = -7."],
        ["Factorise 9y² - 25.", ["(3y - 5)²", "(3y + 5)(3y - 5)", "(9y - 5)(y + 5)", "(3y - 25)(3y + 1)"], "B", "Difference of two squares."],
        ["Make r the subject of A = πr².", ["r = A/π", "r = √(A/π)", "r = √A ÷ π", "r = A²/π"], "B", "Divide by π, then square root."],
      ]),
      N("Equations and inequalities", 11, "Linear and quadratic equations, simultaneous equations, inequalities and regions.", [
        ["Linear equations", ["Do the same to both sides. 5x - 3 = 2x + 9 gives 3x = 12, x = 4.", "With fractions, multiply every term by the common denominator first."]],
        ["Simultaneous equations", ["Elimination: make one variable's coefficients match, then add or subtract.", "Substitution: rearrange one equation and substitute into the other.", "Graphically: the solution is where the two lines cross.", "[E] One linear and one quadratic: substitute the linear into the quadratic; there can be two solution pairs."]],
        ["Quadratic equations", ["[E] Factorise and set each bracket to zero: x² - x - 6 = 0 gives (x - 3)(x + 2) = 0, so x = 3 or -2.", "[E] Quadratic formula: x = (-b ± √(b² - 4ac)) / 2a.", "[E] Completing the square: x² + 6x + 2 = (x + 3)² - 7. The turning point is (-3, -7)."]],
        ["Inequalities", ["Solve like equations, but reverse the sign when multiplying or dividing by a negative.", "Show on a number line: open circle for < or >, filled circle for ≤ or ≥.", "[E] Regions: draw the boundary lines (dashed for < or >, solid for ≤ or ≥) and shade the unwanted side.", "[E] Quadratic inequalities: find the roots, sketch, and read off where the graph is above or below the axis."]],
      ], ["Same operation to both sides.", "[E] x = (-b ± √(b² - 4ac)) / 2a.", "Flip the inequality sign when multiplying or dividing by a negative."], [
        ["Solve 4x + 7 = 2x + 15.", ["x = 2", "x = 4", "x = 11", "x = 8"], "B", "2x = 8."],
        ["Solve: x + y = 10 and x - y = 4.", ["x = 7, y = 3", "x = 6, y = 4", "x = 3, y = 7", "x = 5, y = 5"], "A", "Adding gives 2x = 14."],
        ["Solve x² + 2x - 15 = 0.", ["x = 3 or x = -5", "x = -3 or x = 5", "x = 15 or x = -1", "x = 2 or x = -15"], "A", "(x + 5)(x - 3) = 0."],
        ["Solve -2x > 6.", ["x > -3", "x < -3", "x > 3", "x < 3"], "B", "Dividing by -2 flips the sign."],
        ["What is the turning point of y = (x - 2)² + 5?", ["(2, 5)", "(-2, 5)", "(2, -5)", "(5, 2)"], "A", "From the completed square form."],
        ["In the quadratic formula for 2x² + 3x - 1 = 0, what is b² - 4ac?", ["1", "9", "17", "-1"], "C", "9 - 4(2)(-1) = 17."],
      ]),
      N("Graphs of functions", 10, "Straight lines, quadratics, cubics, reciprocals, exponentials, real life graphs and gradients of curves.", [
        ["Graph shapes", ["Linear y = mx + c: a straight line.", "Quadratic y = ax² + bx + c: a parabola, symmetrical about its turning point. Roots: where it crosses the x axis.", "Reciprocal y = a/x: two branches, with the axes as asymptotes.", "[E] Cubic y = ax³ + ...: an S shape. Exponential y = aˣ: passes through (0, 1), grows steeply."]],
        ["Using graphs", ["Solve equations graphically: the x values where two graphs cross.", "Draw a table of values, plot points and join with a smooth curve.", "[E] Estimate the gradient of a curve at a point by drawing a tangent and finding its gradient."]],
        ["Real life graphs", ["Distance time: gradient = speed.", "Speed time: gradient = acceleration; area under = distance travelled.", "Conversion graphs and travel graphs: read values carefully, including units."]],
      ], ["Know each graph's shape.", "Solutions where graphs intersect.", "[E] Tangent to estimate the gradient of a curve."], [
        ["What shape is the graph of y = x² - 4?", ["Straight line", "Parabola", "S shape", "Two separate branches"], "B", "A quadratic is a parabola."],
        ["Where does y = x² - 4 cross the x axis?", ["x = 4", "x = 2 and -2", "x = -4", "It does not"], "B", "x² = 4."],
        ["On a speed time graph, the area under the line gives:", ["Acceleration", "Distance", "Speed", "Time"], "B", "Area = distance."],
        ["Which graph has the axes as asymptotes?", ["y = 2x", "y = x²", "y = 1/x", "y = x³"], "C", "Reciprocal graphs never touch the axes."],
        ["How do you estimate the gradient of a curve at a point?", ["Join two far apart points", "Draw a tangent and find its gradient", "Read the y value", "Find the area"], "B", "The tangent has the same gradient there."],
      ]),
      N("Sequences, proportion and functions", 10, "nth terms, direct and inverse proportion, function notation, composite and inverse functions.", [
        ["Sequences", ["Linear (arithmetic): the nth term is dn + c, where d is the common difference. 5, 8, 11, ... has nth term 3n + 2.", "[E] Quadratic: second differences are constant; nth term an² + bn + c, where a is half the second difference.", "[E] Cubic, and exponential (geometric) sequences: nth term arⁿ⁻¹, such as 3, 6, 12, 24: 3 x 2ⁿ⁻¹."]],
        ["Proportion", ["Direct: y ∝ x, so y = kx. Find k from a given pair.", "Inverse: y ∝ 1/x, so y = k/x.", "[E] Also y = kx², y = k√x, y = k/x²: find k, then use the formula."]],
        ["Functions", ["[E] f(x) is a rule: f(x) = 2x + 1 means f(3) = 7.", "[E] Composite: fg(x) means do g first, then f.", "[E] Inverse f⁻¹(x): swap x and y and rearrange. If f(x) = 3x - 2, f⁻¹(x) = (x + 2)/3."]],
      ], ["Linear nth term: difference x n, then adjust.", "y = kx (direct), y = k/x (inverse).", "[E] fg(x): g first. f⁻¹: swap and rearrange."], [
        ["What is the nth term of 7, 11, 15, 19, ...?", ["4n + 3", "4n + 7", "7n + 4", "n + 4"], "A", "Difference 4; 4 x 1 + 3 = 7."],
        ["y is directly proportional to x. When x = 4, y = 20. Find y when x = 7.", ["28", "35", "23", "140"], "B", "k = 5, y = 35."],
        ["y is inversely proportional to x. When x = 2, y = 12. Find y when x = 6.", ["4", "36", "8", "2"], "A", "k = 24, y = 24/6 = 4."],
        ["f(x) = x² and g(x) = x + 1. What is fg(2)?", ["5", "9", "6", "4"], "B", "g(2) = 3, then f(3) = 9."],
        ["f(x) = 2x + 6. What is f⁻¹(x)?", ["(x - 6)/2", "2x - 6", "(x + 6)/2", "x/2 + 6"], "A", "y = 2x + 6 → x = (y - 6)/2."],
        ["Find the nth term of 2, 5, 10, 17, ...", ["n² + 1", "3n - 1", "n² + 2", "2n²"], "A", "1 + 1, 4 + 1, 9 + 1, ..."],
      ]),
      N("Differentiation", 8, "Gradients of curves by differentiating, and finding turning points.", [
        ["Differentiating", ["[E] The derivative dy/dx gives the gradient of a curve at any point.", "[E] For y = axⁿ, dy/dx = naxⁿ⁻¹. A constant differentiates to 0.", "[E] Example: y = x³ - 6x² + 4: dy/dx = 3x² - 12x.", "[E] Gradient at x = 1: 3 - 12 = -9."]],
        ["Turning points", ["[E] At a turning point, dy/dx = 0.", "[E] For y = x³ - 6x² + 4: 3x² - 12x = 0, 3x(x - 4) = 0, so x = 0 or 4. Points (0, 4) and (4, -28).", "[E] Decide maximum or minimum from the shape of the graph or the second derivative d²y/dx² (negative: maximum, positive: minimum)."]],
      ], ["[E] y = axⁿ → dy/dx = naxⁿ⁻¹.", "[E] Turning points: dy/dx = 0.", "[E] d²y/dx² < 0 max, > 0 min."], [
        ["Differentiate y = 5x³.", ["15x²", "5x²", "15x³", "5x⁴"], "A", "3 x 5 = 15, power falls by 1."],
        ["What is the gradient of y = x² + 3x at x = 2?", ["7", "10", "4", "5"], "A", "dy/dx = 2x + 3 = 7."],
        ["At a turning point, dy/dx equals:", ["1", "0", "-1", "The y value"], "B", "The curve is momentarily flat."],
        ["Find x at the turning point of y = x² - 8x + 1.", ["x = 8", "x = 4", "x = -4", "x = 1"], "B", "2x - 8 = 0."],
        ["Differentiate y = 7.", ["7", "7x", "0", "1"], "C", "Constants have zero gradient."],
      ]),
    ] },
    { id: "coord", name: "Coordinate geometry", subs: [
      N("Straight lines", 8, "Gradient, length, midpoint, equations of lines, and parallel and perpendicular lines.", [
        ["Gradient and equations", ["Gradient m = (y₂ - y₁) ÷ (x₂ - x₁) = rise ÷ run.", "Equation y = mx + c: m is the gradient, c is the y intercept.", "Find the equation through two points: find m, then substitute a point to find c.", "Lines can also be written as ax + by = c; rearrange to y = mx + c to read the gradient."]],
        ["Length and midpoint", ["[E] Length of AB = √((x₂ - x₁)² + (y₂ - y₁)²).", "[E] Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)."]],
        ["Parallel and perpendicular", ["Parallel lines have equal gradients.", "[E] Perpendicular lines: gradients multiply to -1 (m₂ = -1/m₁).", "[E] Perpendicular bisector of AB: passes through the midpoint with the perpendicular gradient."]],
      ], ["m = rise ÷ run; y = mx + c.", "Parallel: same gradient. [E] Perpendicular: -1/m.", "[E] Length by Pythagoras; midpoint by averaging."], [
        ["What is the gradient between (1, 3) and (4, 12)?", ["3", "9", "1/3", "4"], "A", "9 ÷ 3 = 3."],
        ["What is the y intercept of y = 2x - 5?", ["2", "-5", "5", "-2"], "B", "c = -5."],
        ["What is the midpoint of (2, 8) and (6, 2)?", ["(4, 5)", "(8, 10)", "(2, 3)", "(4, 6)"], "A", "Average the coordinates."],
        ["A line has gradient 2. What is the gradient of a perpendicular line?", ["2", "-2", "1/2", "-1/2"], "D", "-1 ÷ 2."],
        ["What is the distance between (0, 0) and (6, 8)?", ["10", "14", "48", "7"], "A", "√(36 + 64)."],
        ["What is the gradient of 2y = 6x + 4?", ["6", "3", "2", "4"], "B", "y = 3x + 2."],
      ]),
    ] },
    { id: "geometry", name: "Geometry", subs: [
      N("Angles, polygons and constructions", 10, "Angle facts, parallel lines, polygons, bearings, constructions and scale drawings.", [
        ["Angle facts", ["Angles on a straight line add to 180°; round a point to 360°; in a triangle 180°; in a quadrilateral 360°.", "Vertically opposite angles are equal.", "Parallel lines: corresponding angles are equal; alternate angles are equal; co-interior angles add to 180°."]],
        ["Polygons", ["Sum of interior angles = (n - 2) x 180°.", "Exterior angles of any polygon add to 360°. Regular polygon: each exterior angle = 360° ÷ n.", "Interior + exterior = 180°.", "Know the properties of triangles (isosceles, equilateral, right angled) and quadrilaterals (square, rectangle, parallelogram, rhombus, trapezium, kite)."]],
        ["Constructions and bearings", ["Use a ruler and compasses to construct triangles, perpendicular bisectors and angle bisectors (keep the arcs).", "Scale drawings: 1 : 200 means 1 cm represents 2 m.", "Bearings: measured clockwise from north, written with three figures (such as 045°). The back bearing differs by 180°."]],
      ], ["Triangle 180°, quadrilateral 360°, straight line 180°.", "Interior sum (n - 2) x 180°; exterior sum 360°.", "Bearings: clockwise from north, three figures."], [
        ["What is the sum of the interior angles of a hexagon?", ["540°", "720°", "900°", "1080°"], "B", "(6 - 2) x 180."],
        ["Each exterior angle of a regular polygon is 30°. How many sides?", ["6", "10", "12", "30"], "C", "360 ÷ 30 = 12."],
        ["Alternate angles are:", ["Equal", "Add to 180°", "Add to 90°", "Add to 360°"], "A", "Z angles are equal."],
        ["The bearing of B from A is 070°. What is the bearing of A from B?", ["110°", "250°", "290°", "070°"], "B", "070 + 180 = 250."],
        ["Co-interior angles add to:", ["90°", "180°", "270°", "360°"], "B", "C angles add to 180°."],
      ]),
      N("Circle theorems", 9, "Every circle theorem, with the reasons to quote.", [
        ["Core theorems", ["The angle in a semicircle is 90°.", "A tangent is perpendicular to the radius at the point of contact."]],
        ["Further theorems", ["[E] The angle at the centre is twice the angle at the circumference (from the same arc).", "[E] Angles in the same segment are equal.", "[E] Opposite angles of a cyclic quadrilateral add to 180°.", "[E] Alternate segment theorem: the angle between a tangent and a chord equals the angle in the alternate segment.", "[E] The perpendicular from the centre to a chord bisects the chord.", "[E] Two tangents from an external point are equal in length."]],
        ["Writing reasons", ["Always give the theorem in words, such as 'angle in a semicircle is 90°'.", "Look for isosceles triangles formed by two radii."]],
      ], ["Semicircle: 90°. Tangent ⟂ radius.", "[E] Centre = 2 x circumference; same segment equal; cyclic quad opposite angles 180°.", "[E] Alternate segment; chord bisected; equal tangents."], [
        ["What is the angle in a semicircle?", ["45°", "60°", "90°", "180°"], "C", "Always a right angle."],
        ["The angle at the circumference is 40°. What is the angle at the centre on the same arc?", ["20°", "40°", "80°", "140°"], "C", "Twice the angle at the circumference."],
        ["One angle of a cyclic quadrilateral is 110°. What is the opposite angle?", ["70°", "110°", "250°", "90°"], "A", "Opposite angles add to 180°."],
        ["What angle does a tangent make with the radius?", ["45°", "60°", "90°", "180°"], "C", "Tangent ⟂ radius."],
        ["Two tangents are drawn from a point to a circle. What is true?", ["They are parallel", "They are equal in length", "They meet at the centre", "They are perpendicular"], "B", "Tangents from an external point are equal."],
      ]),
      N("Similarity, congruence and symmetry", 8, "Similar shapes and scale factors, congruent triangles, and symmetry.", [
        ["Similarity", ["Similar shapes have the same angles and sides in the same ratio (the scale factor k).", "Find a missing length using the scale factor from corresponding sides.", "[E] Area scale factor = k². Volume scale factor = k³.", "[E] Example: lengths double (k = 2), areas x 4, volumes x 8."]],
        ["Congruence", ["Congruent shapes are identical in shape and size.", "Triangles are congruent by SSS, SAS, ASA (or AAS) or RHS."]],
        ["Symmetry", ["Line symmetry and order of rotational symmetry for 2D shapes.", "[E] Planes of symmetry and axes of rotational symmetry for 3D shapes such as prisms, cylinders and cones."]],
      ], ["Similar: same angles, sides in ratio k.", "[E] Area x k², volume x k³.", "Congruent: SSS, SAS, ASA, RHS."], [
        ["Two similar triangles have corresponding sides 4 cm and 10 cm. What is the scale factor?", ["2.5", "6", "0.4", "40"], "A", "10 ÷ 4."],
        ["Two similar shapes have length scale factor 3. What is the area scale factor?", ["3", "6", "9", "27"], "C", "3² = 9."],
        ["Volumes of similar solids are 8 cm³ and 64 cm³. What is the length scale factor?", ["2", "4", "8", "56"], "A", "∛8 = 2."],
        ["Which is NOT a test for congruent triangles?", ["SSS", "SAS", "AAA", "RHS"], "C", "Same angles only means similar."],
        ["What is the order of rotational symmetry of a square?", ["1", "2", "4", "8"], "C", "It fits 4 times in a turn."],
      ]),
    ] },
    { id: "mensuration", name: "Mensuration", subs: [
      N("Area, volume and units", 10, "Units, perimeter and area, circles, arcs and sectors, surface area and volume of solids.", [
        ["Units", ["Length: 1 cm = 10 mm, 1 m = 100 cm, 1 km = 1000 m.", "Area: 1 m² = 10 000 cm². Volume: 1 m³ = 1 000 000 cm³. 1 litre = 1000 cm³.", "Mass: 1 kg = 1000 g."]],
        ["Area and perimeter", ["Rectangle: lw. Triangle: ½bh. Parallelogram: bh. Trapezium: ½(a + b)h.", "Circle: area πr², circumference 2πr (or πd).", "Arc length = (θ/360) x 2πr. Sector area = (θ/360) x πr²."]],
        ["Surface area and volume", ["Cuboid: V = lwh. Prism: V = area of cross section x length. Cylinder: V = πr²h, curved surface area 2πrh.", "Sphere: V = (4/3)πr³, surface area 4πr².", "Pyramid: V = ⅓ x base area x height.", "Cone: V = ⅓πr²h, curved surface area πrl (l = slant height).", "Compound shapes: split into simple parts and add or subtract."]],
      ], ["Arc = θ/360 x 2πr; sector = θ/360 x πr².", "Prism: cross section x length. Cylinder πr²h.", "Cone ⅓πr²h, sphere ⁴⁄₃πr³; 1 litre = 1000 cm³."], [
        ["What is the area of a circle with radius 5 cm (to 1 d.p.)?", ["31.4 cm²", "78.5 cm²", "15.7 cm²", "25 cm²"], "B", "π x 25."],
        ["What is the volume of a cylinder with radius 3 cm and height 10 cm (to 1 d.p.)?", ["94.2 cm³", "282.7 cm³", "188.5 cm³", "90 cm³"], "B", "π x 9 x 10."],
        ["What is the area of a trapezium with parallel sides 6 and 10 and height 4?", ["32", "64", "40", "24"], "A", "½(6 + 10) x 4."],
        ["How many cm² are in 1 m²?", ["100", "1000", "10 000", "1 000 000"], "C", "100 x 100."],
        ["What is the arc length of a 90° sector of radius 4 cm (to 1 d.p.)?", ["6.3 cm", "12.6 cm", "25.1 cm", "3.1 cm"], "A", "¼ x 2π x 4 = 2π."],
        ["What is the volume of a cone with radius 3 cm and height 4 cm (to 1 d.p.)?", ["37.7 cm³", "113.1 cm³", "12.6 cm³", "28.3 cm³"], "A", "⅓ x π x 9 x 4 = 12π."],
      ]),
    ] },
    { id: "trig", name: "Trigonometry", subs: [
      N("Pythagoras and right angled triangles", 9, "Pythagoras' theorem, SOH CAH TOA, angles of elevation and depression, and bearings.", [
        ["Pythagoras", ["In a right angled triangle, a² + b² = c², where c is the hypotenuse (the longest side, opposite the right angle).", "Finding a shorter side: subtract: a² = c² - b²."]],
        ["SOH CAH TOA", ["sin θ = opposite ÷ hypotenuse. cos θ = adjacent ÷ hypotenuse. tan θ = opposite ÷ adjacent.", "To find an angle, use the inverse: θ = sin⁻¹(opp ÷ hyp).", "Angle of elevation: looking up from horizontal. Angle of depression: looking down from horizontal."]],
        ["Exact values", ["[E] sin 30° = ½, cos 30° = √3/2, tan 30° = 1/√3.", "[E] sin 45° = cos 45° = √2/2 (1/√2), tan 45° = 1.", "[E] sin 60° = √3/2, cos 60° = ½, tan 60° = √3. sin 0° = 0, sin 90° = 1, cos 0° = 1, cos 90° = 0."]],
      ], ["a² + b² = c².", "SOH CAH TOA; inverse to find angles.", "[E] Exact values for 0°, 30°, 45°, 60°, 90°."], [
        ["A right angled triangle has shorter sides 5 and 12. What is the hypotenuse?", ["13", "17", "11", "60"], "A", "√(25 + 144) = 13."],
        ["Which ratio uses opposite and hypotenuse?", ["sin", "cos", "tan", "None"], "A", "SOH: sine is opposite over hypotenuse."],
        ["opp = 7, adj = 7. What is the angle?", ["30°", "45°", "60°", "90°"], "B", "tan⁻¹(1) = 45°."],
        ["What is the exact value of cos 60°?", ["√3/2", "1/2", "1", "√2/2"], "B", "cos 60° = ½."],
        ["A ladder 10 m long reaches 8 m up a wall. How far is its foot from the wall?", ["2 m", "6 m", "12.8 m", "18 m"], "B", "√(100 - 64) = 6."],
      ]),
      N("Non right angled triangles, 3D and graphs", 10, "The sine rule, cosine rule, area of a triangle, 3D problems and trigonometric graphs.", [
        ["Any triangle", ["Label sides a, b, c opposite angles A, B, C.", "Area = ½ab sin C.", "[E] Sine rule: a/sin A = b/sin B = c/sin C. Use when you have a side and its opposite angle.", "[E] Cosine rule: a² = b² + c² - 2bc cos A. Use with two sides and the included angle, or all three sides (cos A = (b² + c² - a²)/2bc).", "[E] The ambiguous case: the sine rule can give two possible angles (θ and 180° - θ)."]],
        ["3D", ["[E] Find lengths in cuboids and pyramids with Pythagoras twice: the space diagonal of a cuboid is √(l² + w² + h²).", "[E] The angle between a line and a plane: find the right angled triangle formed with the line's projection onto the plane."]],
        ["Trig graphs", ["[E] y = sin x and y = cos x repeat every 360° between -1 and 1. y = tan x repeats every 180°, with asymptotes at 90°, 270°.", "[E] Solve sin x = 0.5 for 0° ≤ x ≤ 360°: x = 30° and 150° (using symmetry)."]],
      ], ["Area = ½ab sin C.", "[E] Sine rule for opposite pairs; cosine rule for two sides and the angle between.", "[E] sin and cos period 360°, tan period 180°."], [
        ["What is the area of a triangle with sides 6 and 8 and an included angle of 30°?", ["12", "24", "48", "6"], "A", "½ x 6 x 8 x 0.5."],
        ["Which rule would you use with three sides known, to find an angle?", ["Sine rule", "Cosine rule", "Pythagoras", "SOH CAH TOA"], "B", "cos A = (b² + c² - a²)/2bc."],
        ["b = 5, c = 7, A = 60°. Find a² using the cosine rule.", ["39", "74", "109", "35"], "A", "25 + 49 - 70 x 0.5 = 39."],
        ["What is the period of y = tan x?", ["90°", "180°", "360°", "720°"], "B", "tan repeats every 180°."],
        ["A cuboid is 3 by 4 by 12. What is its space diagonal?", ["13", "19", "12.6", "5"], "A", "√(9 + 16 + 144) = 13."],
        ["Solve sin x = 0.5 for 0° ≤ x ≤ 180°.", ["30° only", "30° and 150°", "60° and 120°", "30° and 330°"], "B", "sin is symmetrical about 90°."],
      ]),
    ] },
    { id: "transform", name: "Transformations and vectors", subs: [
      N("Transformations", 8, "Reflection, rotation, translation and enlargement, and how to describe each fully.", [
        ["Describing transformations", ["Reflection: give the mirror line, such as y = x or x = 2.", "Rotation: give the centre, the angle and the direction (clockwise or anticlockwise).", "Translation: give the column vector (x across, y up).", "Enlargement: give the centre and the scale factor.", "Use one transformation only when asked to describe a single transformation."]],
        ["Enlargement", ["Scale factor greater than 1: bigger. Between 0 and 1: smaller (a fraction).", "[E] Negative scale factor: the image is on the other side of the centre, upside down.", "Draw rays from the centre through each vertex."]],
      ], ["Reflection: line. Rotation: centre, angle, direction.", "Translation: vector. Enlargement: centre, scale factor.", "[E] Negative scale factor: image inverted through the centre."], [
        ["What must you state to describe a rotation fully?", ["Mirror line", "Centre, angle and direction", "Vector", "Scale factor"], "B", "All three are needed."],
        ["A shape is translated by (3, -2). Where does (1, 5) go?", ["(4, 3)", "(-2, 7)", "(3, -10)", "(4, 7)"], "A", "Add 3 to x, subtract 2 from y."],
        ["Reflect (2, 5) in the line y = x.", ["(5, 2)", "(-2, 5)", "(2, -5)", "(-5, -2)"], "A", "Swap the coordinates."],
        ["An enlargement has scale factor ½. The image is:", ["Twice as big", "Half the size", "The same size", "Upside down"], "B", "Fractional scale factors shrink."],
        ["What does a scale factor of -2 do?", ["Doubles size on the same side", "Doubles size on the opposite side of the centre, inverted", "Halves the size", "Reflects only"], "B", "Negative scale factors invert."],
      ]),
      N("Vectors", 8, "Column vectors, adding and multiplying vectors, magnitude and vector geometry.", [
        ["Column vectors", ["A vector has size and direction. Column vector (x over y): x across, y up.", "Add: add the tops and the bottoms. Multiply by a number: multiply each part.", "Example: a = (2, 3), b = (-1, 4): a + b = (1, 7), 3a = (6, 9)."]],
        ["Magnitude and geometry", ["[E] Magnitude |(x, y)| = √(x² + y²).", "[E] Route AB = AO + OB = -a + b = b - a.", "[E] Midpoint M of AB: OM = OA + ½AB = ½(a + b).", "[E] Parallel vectors are multiples of each other; if AB = k x BC with a shared point B, then A, B, C are collinear."]],
      ], ["Add components; multiply each by a scalar.", "[E] |v| = √(x² + y²).", "[E] AB = b - a; parallel means a multiple."], [
        ["a = (3, -1), b = (2, 5). What is a + b?", ["(5, 4)", "(1, -6)", "(6, -5)", "(5, 6)"], "A", "Add each part."],
        ["What is 4 x (2, -3)?", ["(8, -12)", "(6, 1)", "(8, 12)", "(2, -12)"], "A", "Multiply each part."],
        ["What is the magnitude of (5, 12)?", ["13", "17", "7", "60"], "A", "√(25 + 144)."],
        ["OA = a, OB = b. What is AB?", ["a + b", "b - a", "a - b", "2a"], "B", "Back along a, then along b."],
        ["Which vector is parallel to (2, 3)?", ["(3, 2)", "(4, 6)", "(2, -3)", "(1, 3)"], "B", "It is 2 x (2, 3)."],
      ]),
    ] },
    { id: "probability", name: "Probability", subs: [
      N("Probability", 10, "Probability scale, expected frequency, combined events, tree and Venn diagrams, and conditional probability.", [
        ["Basics", ["Probability is from 0 (impossible) to 1 (certain).", "P(event) = number of favourable outcomes ÷ total outcomes, if equally likely.", "P(not A) = 1 - P(A).", "Relative frequency = number of times it happened ÷ number of trials; it gets more reliable with more trials.", "Expected frequency = probability x number of trials."]],
        ["Combined events", ["Sample space diagrams list all outcomes of two events.", "Independent events: P(A and B) = P(A) x P(B). Mutually exclusive: P(A or B) = P(A) + P(B).", "Tree diagrams: multiply along the branches, add the end results you want.", "Venn diagrams: count or add probabilities in the regions."]],
        ["Conditional probability", ["[E] Without replacement: the second set of branches changes because the first item is not put back.", "[E] Conditional probability from a Venn diagram or table: P(A given B) = n(A ∩ B) ÷ n(B)."]],
      ], ["P(not A) = 1 - P(A).", "Multiply along branches, add between them.", "[E] Without replacement, the denominators change."], [
        ["The probability of rain is 0.3. What is the probability it does not rain?", ["0.3", "0.7", "1.3", "0"], "B", "1 - 0.3."],
        ["A fair dice is rolled 120 times. How many sixes are expected?", ["6", "20", "60", "120"], "B", "1/6 x 120."],
        ["Two coins are flipped. What is P(two heads)?", ["1/2", "1/4", "1/3", "3/4"], "B", "½ x ½."],
        ["A bag has 4 red and 6 blue. Two are taken without replacement. P(both red)?", ["16/100", "12/90", "4/10", "2/15"], "B", "4/10 x 3/9 = 12/90."],
        ["In a class of 30, 12 play football and 8 of them also play tennis. P(tennis given football)?", ["8/30", "8/12", "12/30", "4/12"], "B", "Only those who play football count."],
        ["P(A) = 0.2 and P(B) = 0.5, mutually exclusive. What is P(A or B)?", ["0.1", "0.7", "0.3", "1"], "B", "Add them."],
      ]),
    ] },
    { id: "statistics", name: "Statistics", subs: [
      N("Averages and charts", 9, "Types of data, mean, median, mode and range, charts, scatter graphs and correlation.", [
        ["Data and averages", ["Discrete data: counted (number of pets). Continuous data: measured (height).", "Mean = total ÷ number of values. Median: middle value in order. Mode: most common. Range: largest - smallest.", "From a frequency table: mean = Σfx ÷ Σf. For grouped data use midpoints, giving an estimate.", "The modal class is the class with the highest frequency."]],
        ["Charts", ["Bar charts, pictograms, pie charts (angle = frequency ÷ total x 360°), stem and leaf diagrams (need a key).", "Scatter graphs show correlation: positive, negative or none. Draw a line of best fit by eye through the middle of the points.", "Use the line of best fit to estimate (interpolation is reliable; extrapolation outside the data is not).", "Correlation does not mean one thing causes the other."]],
      ], ["Mean = Σfx ÷ Σf.", "Pie angle = frequency ÷ total x 360°.", "Line of best fit: only predict inside the data range."], [
        ["What is the median of 3, 7, 2, 9, 5?", ["5", "7", "5.2", "2"], "A", "In order: 2, 3, 5, 7, 9."],
        ["What is the mean of 4, 6, 8, 10?", ["6", "7", "8", "28"], "B", "28 ÷ 4."],
        ["In a pie chart, 15 out of 60 people chose blue. What angle is blue?", ["15°", "60°", "90°", "45°"], "C", "15/60 x 360."],
        ["As height increases, shoe size increases. This is:", ["Negative correlation", "Positive correlation", "No correlation", "Causation"], "B", "Both go up together."],
        ["Why is using a line of best fit far outside the data unreliable?", ["The line is wrong", "The trend may not continue (extrapolation)", "It always is reliable", "There are too many points"], "B", "Extrapolation is risky."],
      ]),
      N("Cumulative frequency and histograms", 9, "Cumulative frequency curves, quartiles, box plots and histograms with unequal class widths.", [
        ["Cumulative frequency", ["[E] Add up the frequencies as you go; plot each total against the upper class boundary and join with a smooth curve.", "[E] Median: read across at half the total. Lower quartile at ¼, upper quartile at ¾.", "[E] Interquartile range (IQR) = upper quartile - lower quartile. It measures the spread of the middle half and ignores extreme values.", "[E] Percentiles: the 90th percentile is read at 90% of the total."]],
        ["Box plots", ["A box plot shows the minimum, lower quartile, median, upper quartile and maximum.", "Compare two data sets using an average (median) and a measure of spread (IQR or range), in context."]],
        ["Histograms", ["[E] With unequal class widths, plot frequency density = frequency ÷ class width.", "[E] The area of each bar represents the frequency.", "[E] To find a frequency from a histogram: frequency density x class width."]],
      ], ["[E] Plot cumulative frequency at upper class boundaries.", "[E] IQR = UQ - LQ.", "[E] Frequency density = frequency ÷ class width."], [
        ["A class 10 < x ≤ 30 has frequency 40. What is its frequency density?", ["2", "4", "20", "0.5"], "A", "40 ÷ 20."],
        ["LQ = 24 and UQ = 41. What is the IQR?", ["17", "65", "32.5", "41"], "A", "41 - 24."],
        ["There are 80 values. Where do you read the median on a cumulative frequency graph?", ["At 20", "At 40", "At 60", "At 80"], "B", "Half of the total."],
        ["In a histogram, what does the area of a bar show?", ["Frequency density", "Frequency", "Class width", "The mean"], "B", "Area = frequency."],
        ["Why might the IQR be better than the range?", ["It is bigger", "It is not affected by extreme values", "It uses all values", "It is easier to calculate"], "B", "It covers the middle half only."],
      ]),
    ] },
  ],
};
