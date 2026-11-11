// Revision notes, quizzes and flashcards for IGCSE Physics, following the Cambridge 0625 topics
// (Edexcel 4PH1 covers the same ideas). Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });

export default {
  id: "physics",
  name: "Physics",
  topics: [
    { id: "motion", name: "Motion, forces and energy", subs: [
      N("Speed, velocity and acceleration", 8, "Describing motion with numbers and graphs.", [
        ["Equations", ["Speed = distance / time. Average speed = total distance / total time.", "Velocity is speed in a given direction (a vector).", "Acceleration = change in velocity / time taken, in m/s².", "Weight = mass x gravitational field strength (W = mg, g = 9.8 N/kg on Earth)."]],
        ["Graphs", ["Distance time graph: the gradient is the speed. A flat line means stationary.", "Speed time graph: the gradient is the acceleration; the area under the line is the distance travelled.", "A falling object accelerates at about 9.8 m/s² without air resistance. With air resistance it reaches terminal velocity when weight equals drag."]],
      ], ["Gradient of distance time = speed.", "Area under speed time = distance.", "Terminal velocity: forces balanced, no acceleration."], [
        ["A car travels 300 m in 20 s. What is its average speed?", ["6 m/s", "15 m/s", "60 m/s", "6000 m/s"], "B", "300 / 20 = 15 m/s."],
        ["On a speed time graph, what does the area under the line show?", ["Acceleration", "Distance travelled", "Speed", "Force"], "B", "Area under a speed time graph is distance."],
        ["A cyclist goes from 2 m/s to 10 m/s in 4 s. What is the acceleration?", ["2 m/s²", "2.5 m/s²", "3 m/s²", "8 m/s²"], "A", "(10 - 2) / 4 = 2 m/s²."],
        ["What is the weight of a 50 kg person on Earth (g = 9.8 N/kg)?", ["5.1 N", "50 N", "490 N", "4900 N"], "C", "W = mg = 50 x 9.8 = 490 N."],
        ["A skydiver reaches terminal velocity. What is true?", ["Weight is greater than air resistance", "Air resistance equals weight, so there is no acceleration", "There are no forces", "Speed keeps rising"], "B", "Balanced forces mean constant velocity."],
      ]),
      N("Forces, momentum and energy", 10, "Newton's laws, moments, momentum, energy stores, work and power, and pressure.", [
        ["Forces", ["Resultant force = mass x acceleration (F = ma).", "Balanced forces: constant velocity or at rest. Unbalanced: the object accelerates.", "Hooke's law: extension is proportional to load up to the limit of proportionality.", "Moment = force x perpendicular distance from the pivot. In equilibrium, clockwise moments equal anticlockwise moments.", "Momentum p = mv. Momentum is conserved in collisions. Impulse = force x time = change in momentum."]],
        ["Energy", ["Stores: kinetic, gravitational potential, chemical, elastic, nuclear, electrostatic, internal (thermal).", "Kinetic energy = ½mv². Change in gravitational potential energy = mgΔh.", "Energy is conserved. Efficiency = useful output / total input x 100 percent.", "Work done = force x distance moved in the direction of the force. Power = work done / time."]],
        ["Pressure", ["Pressure = force / area, in pascals.", "Pressure in a liquid = density x g x depth (Δp = ρgΔh).", "Density = mass / volume."]],
      ], ["F = ma, p = mv, KE = ½mv².", "Moments: clockwise = anticlockwise in balance.", "Pressure = force / area."], [
        ["A 2 kg mass accelerates at 3 m/s². What is the resultant force?", ["0.67 N", "1.5 N", "5 N", "6 N"], "D", "F = ma = 2 x 3 = 6 N."],
        ["What is the kinetic energy of a 4 kg ball at 3 m/s?", ["6 J", "12 J", "18 J", "36 J"], "C", "½ x 4 x 3² = 18 J."],
        ["A 200 N force acts on 0.5 m². What is the pressure?", ["100 Pa", "200 Pa", "400 Pa", "0.0025 Pa"], "C", "200 / 0.5 = 400 Pa."],
        ["A 10 N force acts 0.3 m from a pivot. What is the moment?", ["3 N m", "33 N m", "0.03 N m", "10.3 N m"], "A", "10 x 0.3 = 3 N m."],
        ["A machine uses 500 J and gives 200 J of useful energy. What is its efficiency?", ["20 percent", "40 percent", "60 percent", "250 percent"], "B", "200 / 500 x 100 = 40 percent."],
      ]),
    ] },
    { id: "thermal", name: "Thermal physics", subs: [
      N("Particles, heating and heat transfer", 9, "The kinetic model, specific heat capacity, latent heat and conduction, convection and radiation.", [
        ["Kinetic particle model", ["Solids vibrate in fixed positions; liquids slide past each other; gases move randomly and fast.", "Brownian motion: smoke particles move randomly because of collisions with fast moving air molecules.", "Gas pressure is due to particles colliding with the walls. At constant temperature, pV is constant.", "Absolute zero is -273 degrees C (0 K), where particles have the least kinetic energy."]],
        ["Heating", ["Specific heat capacity: the energy needed to raise 1 kg by 1 degree C. ΔE = mcΔθ.", "During melting and boiling the temperature stays constant; energy breaks bonds between particles.", "Evaporation cools a liquid because the most energetic particles escape from the surface."]],
        ["Transfer", ["Conduction: vibrations passed between particles; metals are good conductors because of free electrons.", "Convection: in fluids, warmer regions expand, become less dense and rise.", "Radiation: infrared waves, needs no medium. Dull black surfaces are the best emitters and absorbers; shiny white surfaces are the worst."]],
      ], ["ΔE = mcΔθ.", "pV = constant for a fixed mass of gas at constant temperature.", "Black surfaces absorb and emit infrared best."], [
        ["How much energy raises 2 kg of water by 10 degrees C? (c = 4200 J/kg degrees C)", ["8400 J", "42 000 J", "84 000 J", "840 000 J"], "C", "ΔE = mcΔθ = 2 x 4200 x 10 = 84 000 J."],
        ["Why does evaporation cool a liquid?", ["The slowest particles escape", "The most energetic particles escape, lowering the average kinetic energy", "It adds heat", "The liquid becomes a solid"], "B", "Fast particles leave the surface, so the ones left are slower on average."],
        ["Which surface is the best emitter of infrared radiation?", ["Shiny silver", "Dull black", "Shiny white", "Matt white"], "B", "Dull black surfaces are the best emitters and absorbers."],
        ["A gas at 100 kPa in 2 m³ is squashed to 1 m³ at constant temperature. What is the new pressure?", ["50 kPa", "100 kPa", "200 kPa", "400 kPa"], "C", "p₁V₁ = p₂V₂, so 100 x 2 = p₂ x 1, p₂ = 200 kPa."],
        ["How does heat travel through the vacuum of space?", ["Conduction", "Convection", "Radiation", "Evaporation"], "C", "Infrared radiation needs no medium."],
      ]),
    ] },
    { id: "waves", name: "Waves", subs: [
      N("Wave properties, light and sound", 10, "Describing waves, reflection, refraction, lenses, the electromagnetic spectrum and sound.", [
        ["Wave basics", ["Transverse waves vibrate at right angles to the direction of travel (light, water waves). Longitudinal waves vibrate along it (sound).", "Wave speed = frequency x wavelength (v = fλ).", "Reflection, refraction (change of speed and direction at a boundary) and diffraction (spreading through gaps, greatest when the gap is about the wavelength)."]],
        ["Light", ["Angle of incidence = angle of reflection.", "Refractive index n = sin i / sin r. Critical angle: sin c = 1/n.", "Total internal reflection happens when light in a denser medium hits the boundary at more than the critical angle. Used in optical fibres.", "Converging lenses bring rays to a principal focus; they can form real or virtual images."]],
        ["EM spectrum and sound", ["Radio, microwaves, infrared, visible, ultraviolet, X rays, gamma rays: increasing frequency, decreasing wavelength. All travel at 3 x 10⁸ m/s in a vacuum.", "Uses: microwaves for satellite phones and cooking, infrared for remote controls, X rays for imaging bones, gamma for sterilising.", "Sound needs a medium. Human hearing is 20 Hz to 20 000 Hz; ultrasound is above 20 000 Hz.", "Louder sound has a larger amplitude; higher pitch has a higher frequency. Speed of sound in air is about 330 to 350 m/s."]],
      ], ["v = fλ.", "Order of the EM spectrum from radio to gamma.", "Total internal reflection needs angle greater than the critical angle."], [
        ["A wave has frequency 50 Hz and wavelength 2 m. What is its speed?", ["25 m/s", "48 m/s", "52 m/s", "100 m/s"], "D", "v = fλ = 50 x 2 = 100 m/s."],
        ["Which is a longitudinal wave?", ["Light", "Sound", "Radio", "Water surface waves"], "B", "Sound vibrations are along the direction of travel."],
        ["Which part of the EM spectrum has the highest frequency?", ["Radio", "Visible light", "X rays", "Gamma rays"], "D", "Gamma rays have the highest frequency and shortest wavelength."],
        ["When does total internal reflection happen?", ["Light goes from air into glass", "Light in a denser medium hits the boundary at more than the critical angle", "Light hits a mirror at 90 degrees", "Any time light refracts"], "B", "It needs a denser to less dense boundary and an angle above the critical angle."],
        ["What is the range of human hearing?", ["2 Hz to 2000 Hz", "20 Hz to 20 000 Hz", "200 Hz to 200 000 Hz", "20 kHz to 20 MHz"], "B", "Humans hear roughly 20 Hz to 20 000 Hz."],
      ]),
    ] },
    { id: "electricity", name: "Electricity and magnetism", subs: [
      N("Circuits", 10, "Charge, current, voltage, resistance, series and parallel circuits, and safety.", [
        ["Quantities", ["Current is the rate of flow of charge: I = Q/t, in amperes.", "Potential difference (voltage) is energy per unit charge, in volts.", "Resistance R = V/I, in ohms. Resistance of a wire increases with length and decreases with cross sectional area.", "Power P = IV. Energy E = IVt. Electrical energy is often billed in kilowatt hours."]],
        ["Series and parallel", ["Series: same current everywhere; voltages add up; total resistance R = R₁ + R₂.", "Parallel: voltage the same across each branch; currents add up; total resistance is less than the smallest resistor.", "A thermistor's resistance falls as temperature rises; an LDR's resistance falls as light increases.", "Diodes let current flow one way only."]],
        ["Safety", ["Fuses and circuit breakers break the circuit if the current is too high.", "Earthing: if the live wire touches a metal case, a large current flows to earth and blows the fuse.", "Double insulated appliances do not need an earth wire."]],
      ], ["V = IR, P = IV, Q = It.", "Series: R adds. Parallel: total R is smaller.", "Fuse goes in the live wire."], [
        ["A 12 V supply drives 3 A through a resistor. What is the resistance?", ["0.25 ohms", "4 ohms", "15 ohms", "36 ohms"], "B", "R = V/I = 12 / 3 = 4 ohms."],
        ["Two 6 ohm resistors are in series. What is the total resistance?", ["3 ohms", "6 ohms", "12 ohms", "36 ohms"], "C", "In series, resistances add: 6 + 6 = 12 ohms."],
        ["What happens to an LDR's resistance in bright light?", ["It rises", "It falls", "It stays the same", "It becomes infinite"], "B", "More light, less resistance."],
        ["A kettle draws 10 A from a 230 V supply. What is its power?", ["23 W", "240 W", "2300 W", "23 000 W"], "C", "P = IV = 10 x 230 = 2300 W."],
        ["What is the purpose of the earth wire?", ["To carry current normally", "To provide a safe path for current if the case becomes live", "To make the appliance quieter", "To raise the voltage"], "B", "A fault current flows to earth and blows the fuse, so the case is safe to touch."],
      ]),
      N("Magnetism and electromagnetism", 9, "Magnetic fields, the motor effect, induction and transformers.", [
        ["Magnets and fields", ["Like poles repel, unlike poles attract.", "Field lines go from north to south; closer lines mean a stronger field.", "A current in a wire makes a magnetic field; a coil (solenoid) makes a field like a bar magnet. An iron core makes it stronger."]],
        ["The motor effect", ["A current carrying wire in a magnetic field feels a force. Use Fleming's left hand rule.", "A d.c. motor turns because forces on opposite sides of the coil act in opposite directions; a split ring commutator reverses the current every half turn.", "The force increases with more current, more turns or a stronger magnet."]],
        ["Induction and transformers", ["Moving a conductor in a magnetic field, or changing the field, induces an e.m.f.", "A transformer uses a.c. in the primary coil to make a changing field in an iron core, inducing an e.m.f. in the secondary coil.", "Vs / Vp = Ns / Np. For a 100 percent efficient transformer, VpIp = VsIs.", "High voltage transmission means lower current, so less energy is wasted as heat in the cables."]],
      ], ["Fleming's left hand rule for motors.", "Vs / Vp = Ns / Np.", "Step up for transmission to reduce current and losses."], [
        ["A transformer has 100 primary turns and 500 secondary turns. The input is 20 V. What is the output?", ["4 V", "20 V", "100 V", "2500 V"], "C", "Vs = Vp x Ns/Np = 20 x 500/100 = 100 V."],
        ["Why is electricity transmitted at high voltage?", ["It is safer", "The current is lower, so less energy is lost as heat", "It travels faster", "It needs thinner pylons"], "B", "Power loss in cables depends on current, so a low current wastes less energy."],
        ["Why does a transformer need a.c.?", ["d.c. is too dangerous", "Only a changing magnetic field induces an e.m.f.", "a.c. is stronger", "Iron only works with a.c."], "B", "A constant d.c. field would not induce anything in the secondary coil."],
        ["What does the split ring commutator do in a d.c. motor?", ["Makes the magnet stronger", "Reverses the current every half turn so the coil keeps turning", "Stops the motor", "Changes a.c. to d.c."], "B", "Reversing the current keeps the turning force in the same direction."],
        ["How can you make an electromagnet stronger?", ["Fewer turns", "Less current", "Add an iron core", "Use a plastic core"], "C", "An iron core, more turns or more current all make it stronger."],
      ]),
    ] },
    { id: "nuclear", name: "Nuclear physics", subs: [
      N("The atom and radioactivity", 9, "The nuclear atom, alpha, beta and gamma, half life, fission and fusion.", [
        ["The atom", ["Rutherford's alpha scattering showed a tiny, dense, positive nucleus with most of the atom empty space.", "Nuclide notation shows the nucleon number (top) and proton number (bottom).", "Isotopes have the same number of protons but different numbers of neutrons."]],
        ["Radiation", ["Alpha: a helium nucleus, very ionising, stopped by paper. The nucleon number falls by 4 and proton number by 2.", "Beta: a fast electron from the nucleus (a neutron becomes a proton), stopped by a few mm of aluminium. Proton number rises by 1.", "Gamma: an electromagnetic wave, weakly ionising, reduced by thick lead or concrete. No change to the numbers.", "Background radiation comes from rocks, radon gas, cosmic rays, food and medical sources."]],
        ["Half life and uses", ["Half life is the time for half the nuclei in a sample to decay (or the count rate to halve).", "Uses: smoke alarms (alpha), thickness control (beta), sterilising and tracers (gamma), radiocarbon dating.", "Safety: keep distance, limit time, use shielding.", "Fission: a large nucleus splits after absorbing a neutron, releasing energy and more neutrons (a chain reaction). Fusion: light nuclei join, as in the Sun."]],
      ], ["Alpha: paper. Beta: aluminium. Gamma: lead.", "Half life: time for activity to halve.", "Fission splits; fusion joins."], [
        ["Which radiation is stopped by a sheet of paper?", ["Alpha", "Beta", "Gamma", "All of them"], "A", "Alpha particles are large and highly ionising, so they are stopped by paper."],
        ["A sample has a count rate of 800 counts per minute and a half life of 2 hours. What is the count rate after 6 hours?", ["400", "200", "100", "50"], "C", "Three half lives: 800, 400, 200, 100."],
        ["What happens in beta decay?", ["A proton becomes a neutron", "A neutron becomes a proton and an electron is emitted", "A helium nucleus is emitted", "Only energy is emitted"], "B", "The proton number goes up by one and a fast electron leaves the nucleus."],
        ["What did the alpha scattering experiment show?", ["Atoms are solid spheres", "Atoms have a tiny dense positive nucleus", "Electrons are in the nucleus", "Neutrons exist"], "B", "Most alpha particles passed through but a few bounced back off a tiny, dense, positive centre."],
        ["Which process powers the Sun?", ["Fission", "Fusion", "Alpha decay", "Combustion"], "B", "Hydrogen nuclei fuse to form helium, releasing energy."],
      ]),
    ] },
    { id: "space", name: "Space physics", subs: [
      N("The Earth, the Solar System and the Universe", 8, "Days, seasons, orbits, stars and the expanding Universe.", [
        ["Earth and the Solar System", ["A day is one rotation of the Earth on its axis; a year is one orbit of the Sun; the Moon orbits the Earth in about one month.", "Seasons happen because the Earth's axis is tilted.", "Planets in order: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. The inner four are rocky; the outer four are gas and ice giants.", "Orbital speed = 2πr / T. Gravity keeps planets and moons in orbit and is stronger nearer a massive body."]],
        ["Stars and the Universe", ["The Sun is a medium sized star made mostly of hydrogen and helium, powered by fusion.", "Stars form from clouds of gas and dust (nebulae). A star like the Sun becomes a red giant then a white dwarf. Massive stars become red supergiants, explode as supernovae, and leave neutron stars or black holes.", "The Milky Way is our galaxy. Light years measure distance: the distance light travels in a year.", "Redshift: light from distant galaxies is shifted to longer wavelengths, showing the Universe is expanding. Together with the cosmic microwave background radiation, this supports the Big Bang."]],
      ], ["Seasons come from the tilt of the axis.", "Orbital speed = 2πr / T.", "Redshift and CMBR support the Big Bang."], [
        ["Why does the Earth have seasons?", ["Its distance from the Sun changes a lot", "Its axis is tilted", "The Moon blocks the Sun", "The Sun gets hotter in summer"], "B", "The tilt changes how directly sunlight hits each hemisphere through the year."],
        ["What will a star like the Sun eventually become?", ["A black hole", "A neutron star", "A white dwarf", "A supernova"], "C", "Sun sized stars become red giants and then white dwarfs."],
        ["What does redshift of distant galaxies show?", ["The Universe is shrinking", "Galaxies are moving away, so the Universe is expanding", "Galaxies are getting hotter", "Light slows down"], "B", "Light stretched to longer wavelengths shows galaxies moving away from us."],
        ["What is a light year?", ["A unit of time", "The distance light travels in one year", "The time for light to reach the Moon", "A year on another planet"], "B", "It is a distance, about 9.5 x 10¹⁵ m."],
        ["Which planet is a gas giant?", ["Mars", "Venus", "Jupiter", "Mercury"], "C", "Jupiter and Saturn are gas giants."],
      ]),
    ] },
  ],
};
