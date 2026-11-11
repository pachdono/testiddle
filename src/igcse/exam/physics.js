// Exam style written questions for IGCSE Physics, covering each topic, with mark schemes.
export default {
  motion: [
    ["A 1200 kg car accelerates from 5 m/s to 25 m/s in 8 s. Calculate its acceleration and the resultant force on it.", ["Acceleration = (25 - 5) ÷ 8", "= 2.5 m/s²", "F = ma = 1200 x 2.5", "= 3000 N"], 4],
    ["A stone is dropped from rest off a 45 m cliff. Ignoring air resistance (g = 10 m/s²), calculate the speed it hits the sea at, and the time it takes.", ["v² = u² + 2as = 0 + 2 x 10 x 45", "v² = 900, so v = 30 m/s", "t = (v - u) ÷ a = 30 ÷ 10", "= 3 s"], 4],
    ["Describe how the speed of a skydiver changes from jumping until reaching terminal velocity. Refer to the forces.", ["At first only weight acts (no air resistance), so she accelerates", "As speed increases, air resistance increases", "Resultant force decreases, so acceleration decreases", "When air resistance equals weight, resultant force is zero: terminal velocity"], 4],
    ["A uniform 2 m plank is pivoted at its centre. A 300 N child sits 0.8 m from the pivot. How far from the pivot on the other side must a 400 N child sit to balance it?", ["Clockwise moments = anticlockwise moments", "300 x 0.8 = 400 x d", "240 = 400d", "d = 0.6 m"], 4],
    ["A block of mass 540 g has a volume of 200 cm³. Calculate its density and state whether it floats in water (density 1.0 g/cm³).", ["ρ = m ÷ V = 540 ÷ 200", "= 2.7 g/cm³", "It sinks because it is denser than water"], 3],
    ["A 0.15 kg ball moving at 20 m/s is caught and brought to rest in 0.05 s. Calculate the change in momentum and the average force on the hand.", ["Δp = 0.15 x 20 = 3 kg m/s", "F = Δp ÷ t = 3 ÷ 0.05", "= 60 N"], 3],
    ["A 40 kg child climbs a 3 m high slide and slides down, reaching 6 m/s at the bottom (g = 9.8 N/kg). Calculate the gain in GPE, the kinetic energy at the bottom, and explain the difference.", ["GPE = mgh = 40 x 9.8 x 3 = 1176 J", "KE = ½mv² = ½ x 40 x 36 = 720 J", "The rest is transferred to thermal energy by friction (and sound)"], 3],
    ["Compare wind power and coal as ways of generating electricity. Give two points for each.", ["Wind: renewable, no fuel cost or CO₂", "Wind: unreliable, needs many turbines, visual impact", "Coal: reliable, can meet demand", "Coal: non renewable, releases CO₂ (climate change) and SO₂ (acid rain)"], 4],
  ],
  thermal: [
    ["Calculate the energy needed to heat 0.5 kg of water from 20 °C to 100 °C. (c = 4200 J/(kg °C))", ["Temperature change = 80 °C", "ΔE = mcΔθ = 0.5 x 4200 x 80", "= 168 000 J"], 3],
    ["A gas is at 100 kPa in a volume of 4.0 litres. It is compressed at constant temperature to 1.0 litre. Calculate the new pressure and explain the change using particles.", ["p₁V₁ = p₂V₂: 100 x 4.0 = p₂ x 1.0", "p₂ = 400 kPa", "Particles hit the walls more often (same speed, less space)", "So the force per unit area increases"], 4],
    ["Explain why the temperature of water stays at 100 °C while it boils even though it is still being heated.", ["Energy is used to break the bonds (forces) between particles", "Not to increase the kinetic energy of the particles", "So the temperature does not rise"], 3],
    ["Explain how a convection current heats a room from a heater on one wall.", ["Air near the heater is warmed and expands", "It becomes less dense and rises", "Cooler, denser air sinks to take its place", "It is then warmed, setting up a current round the room"], 4],
    ["Describe how the structure of a vacuum flask reduces energy transfer by conduction, convection and radiation.", ["Vacuum between walls stops conduction and convection", "Silvered surfaces reflect infrared, reducing radiation", "Stopper reduces convection and evaporation from the top"], 3],
  ],
  waves: [
    ["A sound wave has a frequency of 680 Hz and a speed of 340 m/s. Calculate its wavelength, and state whether sound is transverse or longitudinal.", ["λ = v ÷ f", "= 340 ÷ 680 = 0.5 m", "Longitudinal"], 3],
    ["Light travels from air into glass at an angle of incidence of 40°. The angle of refraction is 25°. Calculate the refractive index. (sin 40° = 0.643, sin 25° = 0.423)", ["n = sin i ÷ sin r", "= 0.643 ÷ 0.423", "= 1.52"], 3],
    ["Explain how light is transmitted along an optical fibre, and give one use.", ["Light hits the inner surface at more than the critical angle", "So it is totally internally reflected", "Repeatedly, along the fibre", "Use: endoscopes or communications (broadband)"], 4],
    ["Describe the image formed by a converging lens when the object is beyond 2F, and give a device that uses this.", ["Real", "Inverted", "Diminished (smaller)", "Camera or the eye"], 4],
    ["State the order of the electromagnetic spectrum from lowest to highest frequency, give one use of X-rays and one danger of ultraviolet.", ["Radio, microwaves, infrared, visible, ultraviolet, X-rays, gamma", "X-rays: medical scanning or airport security", "Ultraviolet: skin cancer or eye damage"], 3],
    ["A student stands 85 m from a wall and claps. The echo is heard 0.5 s later. Calculate the speed of sound.", ["Sound travels 2 x 85 = 170 m", "Speed = distance ÷ time = 170 ÷ 0.5", "= 340 m/s"], 3],
  ],
  electricity: [
    ["A 6 Ω and a 3 Ω resistor are connected in parallel to a 6 V battery. Calculate the combined resistance and the current from the battery.", ["1/R = 1/6 + 1/3 = 1/2", "R = 2 Ω", "I = V ÷ R = 6 ÷ 2", "= 3 A"], 4],
    ["A kettle is rated 2.3 kW, 230 V. Calculate the current and choose a suitable fuse from 3 A, 5 A and 13 A.", ["I = P ÷ V = 2300 ÷ 230", "= 10 A", "13 A fuse (just above the normal current)"], 3],
    ["Explain how the earth wire and fuse protect a person if the live wire touches the metal case of a toaster.", ["Current flows from the case through the earth wire to earth", "This is a large current (low resistance path)", "The fuse melts and breaks the live circuit", "The case is no longer live, so no shock"], 4],
    ["Describe how a simple d.c. motor works.", ["Current in the coil in a magnetic field makes a force on each side", "Forces on opposite sides are in opposite directions, so the coil turns", "A split ring commutator reverses the current every half turn", "So the coil keeps turning in the same direction"], 4],
    ["A transformer has 2000 turns on the primary and 100 on the secondary. The input is 230 V a.c. Calculate the output voltage and explain why electricity is transmitted at high voltage.", ["Vs = Vp x Ns ÷ Np = 230 x 100 ÷ 2000", "= 11.5 V", "High voltage means low current for the same power", "Less energy wasted as heat in the cables (P = I²R)"], 4],
    ["Describe how to show that a thermistor's resistance changes with temperature, and how the result is used in a fire alarm.", ["Put the thermistor in water and measure V and I (or use an ohmmeter) at several temperatures", "R = V ÷ I falls as temperature rises", "In a potential divider the output p.d. changes when it heats up", "This switches on the alarm (through a relay)"], 4],
  ],
  nuclear: [
    ["Compare alpha, beta and gamma radiation in terms of what they are and what stops them.", ["Alpha: helium nucleus, stopped by paper", "Beta: fast electron, stopped by a few mm of aluminium", "Gamma: electromagnetic wave, reduced by thick lead"], 3],
    ["A sample has a count rate of 640 counts/min, including a background of 40 counts/min. The half life is 2 hours. Calculate the count rate after 6 hours.", ["Corrected count = 640 - 40 = 600", "After 3 half lives: 600 ÷ 8 = 75", "Add background back: 75 + 40 = 115 counts/min"], 3],
    ["Write the equation for the beta decay of carbon-14 (Z = 6) and explain what happens in the nucleus.", ["¹⁴_6 C → ¹⁴_7 N + ⁰_-1 e", "A neutron changes into a proton and an electron", "The electron is emitted as a beta particle"], 3],
    ["Describe the alpha scattering experiment and what it showed about the atom.", ["Alpha particles fired at thin gold foil", "Most passed straight through: atom mostly empty space", "Some deflected, a few bounced back", "Nucleus is small, dense and positive"], 4],
  ],
  space: [
    ["Explain why the UK has summer when the northern hemisphere is tilted towards the Sun.", ["The Earth's axis is tilted", "Sunlight hits the northern hemisphere more directly (Sun higher)", "Days are longer, so more energy is received per day"], 3],
    ["Describe the life cycle of a star much more massive than the Sun.", ["Nebula collapses under gravity to a protostar", "Main sequence star (hydrogen fusion)", "Red supergiant", "Supernova, leaving a neutron star or black hole"], 4],
    ["Explain how redshift supports the Big Bang theory.", ["Light from distant galaxies is shifted to longer wavelengths", "So galaxies are moving away from us", "More distant galaxies move faster", "So the universe is expanding from a single point"], 4],
  ],
};
