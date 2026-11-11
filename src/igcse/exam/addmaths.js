// Exam style written questions for IGCSE Additional Mathematics, one per topic, with mark schemes.
export default {
  functions: [["f(x) = 2x + 3 and g(x) = x². Find fg(3) and f⁻¹(x).", ["g(3) = 9", "fg(3) = 21", "f⁻¹(x) = (x - 3) ÷ 2"], 3]],
  quadratics: [["Find the values of k for which x² + kx + 9 = 0 has equal roots.", ["Uses b² - 4ac = 0", "k² - 36 = 0", "k = 6 or k = -6"], 3]],
  polynomials: [["Show that (x - 2) is a factor of x³ - 3x² - 4x + 12, and factorise it fully.", ["f(2) = 8 - 12 - 8 + 12 = 0, so (x - 2) is a factor", "Divides to get x² - x - 6", "(x - 2)(x - 3)(x + 2)"], 3]],
  eqgraphs: [["Solve |2x - 1| = 7.", ["2x - 1 = 7 gives x = 4", "2x - 1 = -7 gives x = -3"], 2]],
  simult: [["Solve y = x + 3 and x² + y² = 29.", ["Substitutes: x² + (x + 3)² = 29", "2x² + 6x - 20 = 0, so x² + 3x - 10 = 0", "x = 2, y = 5", "x = -5, y = -2"], 4]],
  logs: [["Solve 3ˣ = 20, giving x to 3 significant figures.", ["Takes logs: x log 3 = log 20", "x = log 20 ÷ log 3", "x = 2.73"], 3]],
  lines: [["The points A(1, 2) and B(5, 10). Find the equation of the perpendicular bisector of AB.", ["Midpoint (3, 6)", "Gradient of AB = 2, so perpendicular gradient -½", "y - 6 = -½(x - 3)", "y = -½x + 7.5"], 4]],
  circle: [["Find the centre and radius of the circle x² + y² - 4x + 6y - 12 = 0.", ["Completes the square: (x - 2)² + (y + 3)² = 25", "Centre (2, -3)", "Radius 5"], 3]],
  radians: [["A sector has radius 8 cm and angle 0.75 radians. Find its arc length and area.", ["s = rθ = 8 x 0.75 = 6 cm", "A = ½r²θ", "= ½ x 64 x 0.75 = 24 cm²"], 3]],
  trig: [["Solve 2 sin x = 1 for 0 ≤ x ≤ 360 degrees.", ["sin x = ½", "x = 30 degrees", "x = 150 degrees"], 3]],
  perms: [["How many different 4 letter arrangements can be made from the letters of PLANET with no letter repeated?", ["Uses ⁶P₄", "6 x 5 x 4 x 3", "= 360"], 3]],
  series: [["The first term of a geometric series is 54 and the common ratio is ⅓. Find the sum to infinity.", ["Uses S∞ = a ÷ (1 - r)", "54 ÷ ⅔", "= 81"], 3]],
  vectors: [["OA = 3i + 4j. Find |OA| and the unit vector in the direction of OA.", ["|OA| = √(9 + 16) = 5", "Unit vector = (3i + 4j) ÷ 5", "= 0.6i + 0.8j"], 3]],
  calculus: [["Find the coordinates of the stationary point of y = x² - 6x + 5 and decide whether it is a maximum or minimum.", ["dy/dx = 2x - 6", "2x - 6 = 0 gives x = 3", "y = 9 - 18 + 5 = -4, so (3, -4)", "d²y/dx² = 2 > 0, so a minimum"], 4]],
};
