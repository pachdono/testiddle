// Revision notes, quizzes and flashcards for IGCSE Geography, following the Cambridge 0460
// themes (Edexcel 4GE1 shares most of them). Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "geography",
  name: "Geography",
  topics: [
    one("pop-dyn", "Population dynamics", "Population growth", 7, "Birth rates, death rates, the demographic transition model and population policies.", [
      ["Growth", ["Natural increase = birth rate - death rate (per 1000 per year).", "Population grows quickly where birth rates stay high but death rates fall, due to better healthcare, clean water and food.", "The demographic transition model has five stages, from high birth and death rates to low ones."]],
      ["Over and under population", ["Overpopulation: too many people for the resources available. Underpopulation: too few to use resources fully.", "Anti natalist policies reduce births (China's former one child policy).", "Pro natalist policies encourage births (France's family benefits)."]],
      ["The demographic transition model", ["Stage 1: high birth and death rates, low growth.", "Stage 2: death rate falls (better healthcare, food, clean water), birth rate stays high: rapid growth.", "Stage 3: birth rate falls (contraception, women in education and work, less need for children to work): growth slows.", "Stage 4: both low: slow or no growth.", "Stage 5: birth rate below death rate: the population falls (ageing).", "Case studies: China's one child policy (anti natalist, 1979 to 2015); France or Singapore (pro natalist incentives such as child benefits)."]],
      ["Density and distribution", ["Population density = number of people ÷ area (people per km²).", "Dense areas: flat land, fertile soil, water, good climate, jobs and transport. Sparse areas: mountains, deserts, very cold or very wet climates.", "Dependency ratio = (people aged 0 to 14 + people aged 65 and over) ÷ people aged 15 to 64 x 100."]],
    ], ["Natural increase = birth rate minus death rate.", "Know the five DTM stages.", "Anti natalist versus pro natalist."], [
      ["Birth rate 30, death rate 10 per 1000. What is the natural increase?", ["20 per 1000", "40 per 1000", "3 per 1000", "300 per 1000"], "A", "30 - 10 = 20."],
      ["Which stage of the DTM has the highest natural increase?", ["Stage 1", "Stage 2", "Stage 4", "Stage 5"], "B", "Death rates fall while birth rates stay high."],
      ["What is a pro natalist policy?", ["One that reduces births", "One that encourages people to have more children", "A migration law", "A housing plan"], "B", "Used by countries with ageing or falling populations."],
      ["Why do death rates fall in developing countries?", ["More wars", "Better healthcare, sanitation and food", "Higher birth rates", "More migration"], "B", "Improvements in health and living conditions."],
      ["What is overpopulation?", ["Any large population", "Too many people for the resources available", "A falling population", "An ageing population"], "A", "It depends on resources, not just numbers."],
      ["In which DTM stage does the death rate fall but the birth rate stay high?", ["Stage 1", "Stage 2", "Stage 4", "Stage 5"], "B", "Rapid natural increase in stage 2."],
      ["A country has 2 million people on 50 000 km². What is its population density?", ["25 per km²", "40 per km²", "400 per km²", "2.5 per km²"], "B", "2 000 000 ÷ 50 000 = 40."],
    ]),
    one("migration", "Migration", "Migration", 6, "Why people move, and the effects on origin and destination.", [
      ["Causes", ["Push factors drive people away: war, unemployment, natural disasters, poverty.", "Pull factors attract people: jobs, safety, education, healthcare, family.", "Types: voluntary or forced, internal or international, temporary or permanent. Refugees flee persecution or conflict."]],
      ["Impacts", ["Source area: loss of working age people (brain drain), but money sent home (remittances).", "Destination: labour supply and cultural diversity, but pressure on services and possible tension."]],
    ], ["Push away, pull towards.", "Remittances help source countries.", "Refugees are forced migrants."], [
      ["Which is a pull factor?", ["Civil war", "Better job opportunities", "Drought", "Unemployment"], "B", "Jobs attract migrants."],
      ["What are remittances?", ["Taxes on migrants", "Money migrants send home", "Visas", "Refugee camps"], "B", "They support families in the source country."],
      ["What is brain drain?", ["Loss of skilled workers from a country", "Mental illness", "Water shortage", "Failed exams"], "A", "Skilled people emigrate."],
      ["Who is a refugee?", ["A tourist", "Someone forced to flee persecution or conflict", "A student abroad", "A business traveller"], "B", "Refugees are forced migrants."],
      ["What is rural to urban migration?", ["Moving from towns to the countryside", "Moving from the countryside to towns", "Moving abroad", "Moving within a city"], "B", "Common in developing countries."],
    ]),
    one("structure", "Population structure", "Population structure", 6, "Population pyramids and dependency ratios.", [
      ["Pyramids", ["Population pyramids show age and sex structure.", "Wide base: high birth rate (typical of LICs). Narrow base and wide top: ageing population (HICs).", "Dependency ratio = (under 15s + over 65s) / 15 to 64s x 100.", "Ageing populations need pensions and healthcare; youthful ones need schools and jobs."]],
    ], ["Wide base: youthful. Wide top: ageing.", "Dependency ratio compares dependents with workers.", "Each structure brings different pressures."], [
      ["A pyramid has a wide base. What does this suggest?", ["Low birth rate", "High birth rate", "Ageing population", "High life expectancy"], "B", "Many young children: high birth rate."],
      ["What is the working population age range used in the dependency ratio?", ["0 to 14", "15 to 64", "65 and over", "18 to 30"], "B", "15 to 64."],
      ["Which problem does an ageing population bring?", ["Too many schools", "Rising cost of pensions and healthcare", "Too few elderly people", "High birth rates"], "B", "More elderly dependents."],
      ["Which country type usually has a narrow based pyramid?", ["Low income", "High income", "All countries", "None"], "B", "Low birth rates in HICs."],
      ["What does a high dependency ratio mean?", ["Many workers supporting few dependents", "Few workers supporting many dependents", "No children", "No elderly"], "B", "Pressure on the working population."],
    ]),
    one("settlements", "Settlements and urbanisation", "Settlements and cities", 7, "Settlement hierarchy, urban land use, urban growth and its problems.", [
      ["Settlements", ["Site is the land a settlement is built on; situation is its position relative to its surroundings.", "Settlement hierarchy: hamlet, village, town, city, conurbation; larger settlements have more services and a larger sphere of influence.", "Urbanisation is the increasing proportion of people living in urban areas."]],
      ["Urban issues", ["Land use zones: CBD, inner city, suburbs, rural urban fringe.", "Rapid growth in LICs leads to squatter settlements (informal housing), congestion and pollution.", "Solutions: self help schemes, public transport, green belts, urban regeneration.", "Counter urbanisation: people moving out of cities to rural areas."]],
    ], ["Site versus situation.", "CBD at the centre, suburbs at the edge.", "Squatter settlements are a result of rapid urban growth."], [
      ["What is a settlement's site?", ["Its position relative to other places", "The land it is built on", "Its population", "Its range"], "B", "Site is the physical land."],
      ["Where is the CBD?", ["At the edge of the city", "In the centre", "In the countryside", "Near the airport"], "B", "Central business district."],
      ["What is a squatter settlement?", ["Luxury housing", "Informal housing built without permission", "A council estate", "A hotel"], "A", "Often lacking services."],
      ["What is counter urbanisation?", ["Moving into cities", "Moving out of cities to rural areas", "Building skyscrapers", "Growth of the CBD"], "B", "The reverse of urbanisation."],
      ["What is a green belt?", ["Protected land around a city where building is restricted", "A park in the CBD", "A cycling route", "A type of farm"], "A", "It limits urban sprawl."],
    ]),
    one("tectonics", "Earthquakes and volcanoes", "Earthquakes and volcanoes", 8, "Plate boundaries, hazards and reducing their impacts.", [
      ["Plates", ["The crust is broken into plates moving on convection currents in the mantle.", "Constructive (divergent) boundaries: plates move apart, magma rises, gentle volcanoes.", "Destructive (convergent): oceanic plate subducts under continental, explosive volcanoes and strong earthquakes.", "Conservative (transform): plates slide past, earthquakes but no volcanoes (San Andreas Fault)."]],
      ["Hazards", ["Earthquakes are measured on the moment magnitude (or Richter) scale; the focus is underground, the epicentre directly above.", "Why people live near hazards: fertile soils, tourism, geothermal energy, jobs.", "Reducing impact: monitoring, prediction, earthquake resistant buildings, evacuation plans, education."]],
      ["More on hazards", ["Conservative (transform) boundaries: plates slide past each other, causing earthquakes but no volcanoes (San Andreas Fault).", "Collision boundaries: two continental plates push together, forming fold mountains (the Himalayas).", "Reducing the impact: monitoring (seismometers, gas emissions, ground swelling) to predict eruptions; earthquake proof buildings (cross bracing, rubber foundations, shock absorbers); preparation (drills, emergency kits, evacuation plans); land use zoning.", "Impacts are worse in LICs: weaker buildings, less money for preparation and recovery, denser informal housing."]],
    ], ["Three boundary types.", "No volcanoes at conservative boundaries.", "Focus underground, epicentre above."], [
      ["At which boundary do plates move apart?", ["Destructive", "Constructive", "Conservative", "Collision"], "B", "Constructive or divergent boundaries."],
      ["Which boundary has earthquakes but no volcanoes?", ["Constructive", "Destructive", "Conservative", "Hotspot"], "C", "Plates slide past each other."],
      ["What is the epicentre?", ["The point underground where the earthquake starts", "The point on the surface directly above the focus", "The edge of a plate", "A volcano crater"], "B", "The focus is underground."],
      ["Why do people live near volcanoes?", ["Fertile soils and tourism", "Cheap insurance", "No hazards", "Cold climate"], "A", "Volcanic soils are rich."],
      ["Which helps buildings survive earthquakes?", ["Heavy roofs", "Cross bracing and flexible foundations", "Brick only", "Taller towers without support"], "B", "Designs absorb shaking."],
      ["What happens at a conservative boundary?", ["Plates move apart", "Plates slide past each other", "Plates collide to form volcanoes", "Nothing"], "B", "Earthquakes but no volcanoes."],
      ["Which reduces earthquake deaths?", ["Building on slopes", "Buildings with cross bracing and flexible foundations", "Living near faults", "Ignoring warnings"], "B", "They resist shaking."],
    ]),
    one("rivers", "Rivers", "Rivers", 8, "River processes, landforms, flooding and management.", [
      ["Processes", ["Erosion: hydraulic action, abrasion, attrition, solution.", "Transport: traction, saltation, suspension, solution.", "Deposition when the river slows down."]],
      ["Landforms", ["Upper course: V shaped valleys, interlocking spurs, waterfalls and gorges.", "Middle course: meanders and ox bow lakes.", "Lower course: floodplains, levées, deltas.", "Hydrographs show discharge after rainfall; lag time is the delay between peak rainfall and peak discharge."]],
      ["Flooding", ["Causes: heavy rain, snowmelt, impermeable surfaces, deforestation.", "Hard engineering: dams, levées, channel straightening. Soft engineering: afforestation, flood plain zoning, warnings."]],
      ["The drainage basin", ["Drainage basin: the area drained by a river and its tributaries. Watershed: the boundary between basins.", "Source (start), tributary (smaller river joining), confluence (where rivers meet), mouth (where it meets the sea).", "Inputs: precipitation. Stores: interception, surface storage, soil, groundwater. Flows: infiltration, throughflow, surface run off, groundwater flow. Outputs: evaporation, transpiration, river discharge."]],
      ["Hydrographs and long profiles", ["A flood hydrograph shows rainfall and discharge over time. Lag time: from peak rainfall to peak discharge.", "A short lag time and high peak (flashy river) come from steep slopes, impermeable rock, urban areas, saturated ground and deforestation.", "Long profile: steep in the upper course, gentler downstream. The river gets wider, deeper and faster (in volume) downstream.", "Waterfalls form where hard rock lies over soft rock: the soft rock is undercut, the overhang collapses, and the waterfall retreats leaving a gorge."]],
    ], ["Four erosion processes, four transport processes.", "Waterfalls in the upper course; ox bow lakes form from meanders.", "Short lag time means higher flood risk."], [
      ["Which erosion process is rocks wearing each other down as they collide?", ["Abrasion", "Attrition", "Hydraulic action", "Solution"], "B", "Attrition makes the load smaller and rounder."],
      ["Which landform forms when a meander is cut off?", ["Waterfall", "Ox bow lake", "Delta", "Gorge"], "B", "The neck of the meander is breached."],
      ["What is lag time?", ["Time between peak rainfall and peak discharge", "Time for a river to freeze", "The length of a river", "Flood duration"], "A", "Shown on a storm hydrograph."],
      ["Which is soft engineering?", ["Dam", "Afforestation", "Concrete embankment", "Channel straightening"], "B", "Planting trees works with nature."],
      ["How do urban areas increase flood risk?", ["More infiltration", "Impermeable surfaces increase surface runoff", "More trees", "Slower rivers"], "B", "Water reaches rivers faster."],
      ["What is lag time?", ["Time a flood lasts", "Time between peak rainfall and peak discharge", "Time to rain", "Time to build a dam"], "B", "On a hydrograph."],
      ["What is a confluence?", ["The river's start", "Where two rivers meet", "The river's end", "A waterfall"], "B", "Rivers join at a confluence."],
    ]),
    one("coasts", "Coasts", "Coasts", 7, "Coastal processes, landforms, coral reefs and mangroves, and management.", [
      ["Processes and landforms", ["Destructive waves erode; constructive waves deposit.", "Erosional landforms: cliffs, wave cut platforms, headlands and bays, caves, arches, stacks and stumps.", "Longshore drift moves sediment along the coast; deposition forms beaches and spits."]],
      ["Ecosystems and management", ["Coral reefs need warm, clear, shallow, salty water; mangroves grow in tropical tidal zones and protect coasts.", "Hard engineering: sea walls, groynes, rock armour. Soft: beach nourishment, dune regeneration, managed retreat."]],
      ["Transport and deposition", ["Longshore drift: waves approach at an angle (the prevailing wind), swash carries material up the beach diagonally, backwash pulls it straight down, so material zigzags along the coast.", "Spit: a ridge of sand or shingle extending from the coast where it changes direction, often with a curved end and a salt marsh behind.", "Bar: a spit that grows across a bay, trapping a lagoon. Tombolo: a bar joining an island to the mainland.", "Groynes (wooden fences down the beach) trap material moved by longshore drift."]],
    ], ["Cave, arch, stack, stump.", "Longshore drift builds spits.", "Groynes trap sediment."], [
      ["What is the correct sequence of headland erosion?", ["Arch, cave, stump, stack", "Cave, arch, stack, stump", "Stack, arch, cave, stump", "Stump, stack, arch, cave"], "B", "Cave, arch, stack, stump."],
      ["What forms from longshore drift where the coast changes direction?", ["Stack", "Spit", "Arch", "Cliff"], "B", "Sediment builds out into the sea."],
      ["What do groynes do?", ["Stop all waves", "Trap sediment moving by longshore drift", "Create caves", "Increase erosion"], "B", "They hold the beach in place."],
      ["What conditions do coral reefs need?", ["Cold deep water", "Warm, clear, shallow, salty water", "Fresh water", "Muddy water"], "B", "Corals need light and warmth."],
      ["Which is soft engineering?", ["Sea wall", "Beach nourishment", "Rock armour", "Groynes"], "B", "Adding sand works with natural processes."],
      ["What moves material along a beach?", ["Constructive waves only", "Longshore drift", "Rivers", "Wind only"], "B", "Swash and backwash in a zigzag."],
      ["What is a tombolo?", ["A cave", "A bar joining an island to the mainland", "A wave cut platform", "A headland"], "B", "A form of deposition."],
    ]),
    one("weather", "Weather", "Weather", 6, "Measuring weather with instruments in a weather station.", [
      ["Instruments", ["Thermometer (temperature), maximum and minimum thermometer (Six's).", "Rain gauge (precipitation), barometer (pressure), anemometer (wind speed), wind vane (direction), hygrometer or wet and dry bulb (humidity).", "A Stevenson screen holds thermometers in shade, raised and ventilated, painted white."]],
      ["Weather and cloud", ["Clouds: cumulus (puffy), stratus (layered), cirrus (wispy, high).", "Relief, convectional and frontal rainfall.", "Weather is day to day; climate is the long term average."]],
      ["Using the instruments", ["A Stevenson screen holds thermometers: white (reflects sunlight), louvred (air flows), 1.2 m above grass, away from buildings.", "Six's (maximum and minimum) thermometer: read the bottom of each marker, then reset with a magnet.", "Rain gauge: sunk into the ground, read at the same time each day, away from trees.", "Wet and dry bulb thermometers (a hygrometer) give relative humidity from the difference between them.", "Wind vane shows the direction the wind comes from; anemometer measures its speed; a sunshine recorder measures hours of sunshine.", "Cloud cover is estimated in oktas (eighths of the sky)."]],
    ], ["Know each instrument and what it measures.", "Stevenson screen: white, louvred, raised.", "Weather versus climate."], [
      ["What does an anemometer measure?", ["Wind direction", "Wind speed", "Pressure", "Humidity"], "B", "Anemometers spin with the wind."],
      ["Why is a Stevenson screen painted white?", ["To look neat", "To reflect sunlight so readings are not too high", "To attract birds", "To absorb heat"], "B", "It gives accurate shade temperatures."],
      ["What does a barometer measure?", ["Rainfall", "Air pressure", "Temperature", "Sunshine"], "B", "Pressure in millibars."],
      ["Which cloud is high and wispy?", ["Cumulus", "Stratus", "Cirrus", "Nimbostratus"], "C", "Cirrus clouds are thin and high."],
      ["What is climate?", ["Today's weather", "The average weather over a long period", "A storm", "Rainfall in one day"], "B", "Usually averaged over 30 years."],
      ["Why is a Stevenson screen painted white?", ["To be seen", "To reflect sunlight so readings are of air temperature", "To keep rain out", "To look clean"], "B", "Sunlight would heat it."],
      ["What does a hygrometer measure?", ["Pressure", "Humidity", "Wind speed", "Rainfall"], "B", "Relative humidity."],
    ]),
    one("climate", "Climate and natural vegetation", "Climate and ecosystems", 7, "Tropical rainforests and hot deserts.", [
      ["Tropical rainforest", ["Hot (about 27 degrees C) and wet all year, with convectional rain.", "Layers: emergent, canopy, understorey, shrub layer, forest floor.", "Adaptations: buttress roots, drip tips, lianas.", "Deforestation for logging, farming, mining and roads causes loss of biodiversity and climate change."]],
      ["Hot desert", ["Very low rainfall (under 250 mm a year), very hot days and cold nights.", "Plants: cacti with spines, deep or wide roots, waxy skins.", "Desertification: overgrazing, overcultivation and climate change."]],
      ["Deforestation", ["Causes: logging, farming (cattle ranching, palm oil), mining, roads, hydroelectric dams, settlements.", "Effects: loss of biodiversity, soil erosion (no roots or canopy), flooding, less rainfall and transpiration, more CO₂ (climate change), loss of indigenous ways of life.", "Sustainable management: selective logging, replanting, protected areas, ecotourism, education, international agreements."]],
    ], ["Rainforest: hot and wet, layered.", "Deserts: under 250 mm rain a year.", "Adaptations to heat and water shortage."], [
      ["What are drip tips for?", ["To collect sunlight", "To shed heavy rain off leaves", "To store water", "To attract animals"], "B", "They stop water sitting on leaves."],
      ["Why are desert nights cold?", ["Cloud cover traps heat", "Clear skies let heat escape", "Winds are warm", "High humidity"], "B", "No clouds to hold the heat in."],
      ["Which is a cause of deforestation?", ["Afforestation", "Cattle ranching", "Ecotourism", "Conservation"], "B", "Land is cleared for farming."],
      ["How much rainfall does a hot desert usually receive?", ["Over 2000 mm", "Under 250 mm", "About 1000 mm", "Over 500 mm"], "B", "Deserts are defined by very low rainfall."],
      ["Which rainforest layer is the tallest?", ["Canopy", "Emergent", "Understorey", "Forest floor"], "B", "Emergent trees rise above the canopy."],
      ["Why does deforestation cause soil erosion?", ["More rain", "No roots or canopy to protect the soil", "More animals", "More trees"], "B", "The soil is exposed and washed away."],
    ]),
    one("development", "Development", "Development", 7, "Measuring development and reducing inequality.", [
      ["Measuring", ["GDP or GNI per capita measures wealth.", "Human Development Index (HDI) combines income, life expectancy and education.", "Other indicators: infant mortality, literacy, access to clean water."]],
      ["Reducing the gap", ["Sectors: primary (raw materials), secondary (manufacturing), tertiary (services), quaternary (research).", "Transnational corporations (TNCs) bring jobs and investment but may exploit workers and take profits abroad.", "Aid, fair trade, debt relief and globalisation all affect development."]],
      ["Globalisation and aid", ["Globalisation: countries becoming more connected through trade, investment, transport and communication.", "TNCs bring jobs, investment, skills and infrastructure, but may pay low wages, send profits abroad and leave if costs rise.", "Aid: short term emergency aid; long term development aid; bilateral (country to country), multilateral (through organisations such as the World Bank); tied aid must be spent in the donor country.", "Fair trade gives farmers a fair minimum price."]],
    ], ["HDI: income, health, education.", "Four employment sectors.", "TNCs have benefits and costs."], [
      ["What does the HDI combine?", ["Income only", "Income, life expectancy and education", "Population and area", "Exports and imports"], "B", "Three dimensions of development."],
      ["Which sector involves manufacturing?", ["Primary", "Secondary", "Tertiary", "Quaternary"], "B", "Secondary turns raw materials into products."],
      ["Which is a disadvantage of TNCs for host countries?", ["Jobs", "Profits may go abroad", "Investment", "Training"], "B", "Profits often return to the home country."],
      ["What is infant mortality?", ["Deaths of babies under one year old per 1000 live births", "Births per year", "Life expectancy", "Child labour"], "A", "A key development indicator."],
      ["What does fair trade do?", ["Lowers prices", "Gives producers a fairer price and better conditions", "Stops trade", "Increases tariffs"], "B", "It aims to help producers in poorer countries."],
      ["What is tied aid?", ["Aid for disasters", "Aid that must be spent in the donor country", "Aid from charities", "A loan"], "B", "Conditions are attached."],
    ]),
    one("food", "Food production", "Food production", 6, "Farming systems and food shortages.", [
      ["Farming systems", ["Inputs, processes and outputs.", "Commercial farming sells produce; subsistence farming feeds the family.", "Arable (crops), pastoral (animals), mixed.", "Intensive farming uses high inputs on small areas; extensive uses large areas with low inputs."]],
      ["Food shortages", ["Causes: drought, floods, pests, conflict, poverty, soil erosion.", "Solutions: irrigation, the Green Revolution (high yielding varieties), GM crops, food aid, appropriate technology."]],
    ], ["Commercial versus subsistence.", "Intensive versus extensive.", "Know causes and solutions for food shortages."], [
      ["What is subsistence farming?", ["Farming to sell for profit", "Farming to feed the farmer's family", "Fish farming", "Large scale plantations"], "B", "Little or nothing is sold."],
      ["What is pastoral farming?", ["Growing crops", "Rearing animals", "Both", "Forestry"], "B", "Pastoral is livestock."],
      ["What was the Green Revolution?", ["Environmental protests", "Use of high yielding crop varieties, fertilisers and irrigation", "Organic farming", "Planting forests"], "B", "It raised yields from the 1960s."],
      ["Which can cause food shortages?", ["Irrigation", "Drought", "Fertiliser", "Good harvests"], "B", "Lack of water reduces yields."],
      ["What is intensive farming?", ["High inputs on a small area to maximise output", "Low inputs over large areas", "Farming without machines", "Nomadic herding"], "A", "High output per hectare."],
    ]),
    one("industry", "Industry", "Industry", 6, "Industrial systems, location factors and impacts.", [
      ["Location", ["Factors: raw materials, labour, market, transport, power, government incentives, land.", "High tech industries locate near universities, motorways and airports, often in science parks.", "Footloose industries are not tied to raw materials."]],
      ["Impacts", ["Jobs and economic growth.", "Pollution of air, water and land; loss of habitats.", "Regulation, cleaner technology and environmental impact assessments reduce harm."]],
    ], ["Location factors list.", "Science parks attract high tech firms.", "Footloose: free to locate anywhere."], [
      ["What is a footloose industry?", ["One tied to raw materials", "One that can locate in many places", "A shoe factory", "Farming"], "B", "Not tied to any particular resource."],
      ["Why do high tech firms locate near universities?", ["Cheap land only", "Access to skilled graduates and research", "Raw materials", "Ports"], "B", "Knowledge and skills matter most."],
      ["Which is an industrial input?", ["Products", "Raw materials", "Profits", "Waste"], "B", "Inputs go into the process."],
      ["Which is a negative impact of industry?", ["Jobs", "Air pollution", "Higher incomes", "Better infrastructure"], "B", "Factories can pollute."],
      ["What is a science park?", ["A theme park", "A planned area of high tech businesses, often near a university", "A nature reserve", "A school"], "B", "Clusters of research firms."],
    ]),
    one("tourism", "Tourism", "Tourism", 6, "Growth of tourism, its benefits and problems, and sustainable tourism.", [
      ["Growth", ["Rising incomes, paid holidays, cheaper flights and the internet have increased tourism.", "Attractions: climate, beaches, culture, wildlife, scenery."]],
      ["Impacts", ["Benefits: jobs, income, improved infrastructure, foreign currency.", "Problems: seasonal jobs, leakage of profits, damage to environments, loss of culture.", "Sustainable tourism (ecotourism) protects environments and benefits local people."]],
    ], ["Reasons for growth.", "Leakage: profits leaving the country.", "Ecotourism is sustainable tourism."], [
      ["What is leakage in tourism?", ["Water leaks in hotels", "Tourism income that leaves the host country", "Tourists leaving early", "Lost luggage"], "B", "Profits go to foreign companies."],
      ["What is ecotourism?", ["Mass beach holidays", "Tourism that protects the environment and benefits local communities", "Business travel", "Cruise ships"], "B", "Sustainable, small scale tourism."],
      ["Which is a reason for the growth of tourism?", ["Fewer holidays", "Cheaper air travel", "Higher prices", "Less leisure time"], "B", "Low cost airlines widened access."],
      ["Why can tourism jobs be a problem?", ["They are always well paid", "They are often seasonal and low paid", "There are too many skilled jobs", "They are permanent"], "B", "Work may only exist in peak season."],
      ["Which is a benefit of tourism?", ["Erosion of footpaths", "Foreign currency and jobs", "Litter", "Traffic"], "B", "Tourism brings income."],
    ]),
    one("energy", "Energy", "Energy", 6, "Renewable and non renewable energy, and energy security.", [
      ["Types", ["Non renewable: coal, oil, gas (fossil fuels) and nuclear. Reliable but finite, and fossil fuels emit carbon dioxide.", "Renewable: solar, wind, hydroelectric, geothermal, tidal, wave, biomass. Sustainable but can be intermittent.", "Fuelwood is still the main energy source for many people in LICs."]],
      ["Choices", ["Energy demand rises with population and development.", "Factors: cost, technology, availability, environmental impact, politics.", "Hydroelectric dams provide power but flood land and displace people."]],
    ], ["Fossil fuels finite and polluting.", "Renewables can be intermittent.", "Every source has trade offs."], [
      ["Which is renewable?", ["Coal", "Natural gas", "Wind", "Oil"], "C", "Wind will not run out."],
      ["What is a disadvantage of solar power?", ["It produces carbon dioxide", "It does not work at night and varies with cloud", "It runs out", "It is radioactive"], "B", "Output depends on sunlight."],
      ["Which is a problem of large hydroelectric dams?", ["They burn coal", "They flood land and displace people", "They produce radioactive waste", "They are intermittent like wind"], "B", "Reservoirs cover large areas."],
      ["Why is nuclear power non renewable?", ["Its fuel, uranium, is finite", "It uses wind", "It emits carbon dioxide", "It is cheap"], "A", "Uranium is a finite resource."],
      ["Which energy source is common in rural LICs?", ["Nuclear", "Fuelwood", "Tidal", "Geothermal"], "B", "Wood is used for cooking and heating."],
    ]),
    one("water", "Water", "Water", 5, "Water supply, demand and management.", [
      ["Supply and demand", ["Water comes from rivers, lakes, reservoirs and aquifers (groundwater).", "Demand grows with population, industry, irrigation and rising living standards.", "Water shortages: physical scarcity (not enough water) and economic scarcity (no money for infrastructure)."]],
      ["Solutions", ["Dams and reservoirs, water transfer schemes, desalination, wells.", "Conservation: drip irrigation, recycling grey water, fixing leaks, metering."]],
    ], ["Aquifers hold groundwater.", "Physical versus economic scarcity.", "Conservation reduces demand."], [
      ["What is an aquifer?", ["A reservoir behind a dam", "Rock that stores groundwater", "A water pipe", "A river"], "B", "Porous rock holding water."],
      ["What does desalination do?", ["Adds salt", "Removes salt from seawater", "Cleans rivers", "Stores rainwater"], "B", "Turns seawater into fresh water."],
      ["What is economic water scarcity?", ["No water exists", "Water exists but there is no money to supply it", "Too much water", "Floods"], "B", "Lack of infrastructure."],
      ["Which saves water in farming?", ["Flood irrigation", "Drip irrigation", "Sprinklers at midday", "Open channels"], "B", "Water goes straight to the roots."],
      ["Which increases water demand?", ["Falling population", "Rising living standards", "Less industry", "Drought resistant crops"], "B", "Richer households use more water."],
    ]),
    one("risks", "Environmental risks of economic development", "Environmental risks", 6, "Pollution, resource use and sustainable development.", [
      ["Risks", ["Industry, agriculture, tourism and energy production can damage environments.", "Air pollution, acid rain, water pollution, soil erosion, loss of biodiversity, climate change.", "The enhanced greenhouse effect: more greenhouse gases trap more heat."]],
      ["Sustainability", ["Sustainable development meets the needs of today without compromising future generations.", "International agreements, renewable energy, conservation areas, recycling and education."]],
    ], ["Development can harm environments.", "Enhanced greenhouse effect.", "Sustainable development definition."], [
      ["What is sustainable development?", ["Fast growth at any cost", "Meeting present needs without compromising future generations", "Stopping all development", "Building more factories"], "B", "The standard definition."],
      ["What causes the enhanced greenhouse effect?", ["Fewer greenhouse gases", "Extra greenhouse gases from human activity", "The ozone hole", "Volcanoes only"], "B", "Burning fossil fuels adds carbon dioxide."],
      ["Which can cause acid rain?", ["Sulfur dioxide from power stations", "Oxygen", "Water vapour", "Nitrogen gas"], "A", "It dissolves in rain."],
      ["Which reduces environmental risk?", ["Deforestation", "Renewable energy", "More coal", "Overfishing"], "B", "Lower emissions."],
      ["What is biodiversity?", ["The variety of living things in an area", "Air quality", "Rainfall", "Soil type"], "A", "Loss of habitat reduces it."],
    ]),
    one("skills", "Geographical skills and fieldwork", "Map skills and fieldwork", 8, "Grid references, scale, contours and planning an investigation.", [
      ["Map skills", ["Four figure grid references locate a square; six figure references locate a point. Along the corridor, then up the stairs.", "Scale: 1:50 000 means 2 cm on the map = 1 km.", "Contours join points of equal height: close together means steep.", "Compass directions and bearings."]],
      ["Fieldwork", ["Enquiry: hypothesis, data collection, presentation, analysis, conclusion, evaluation.", "Sampling: random, systematic, stratified.", "Primary data you collect yourself; secondary data comes from others.", "Present data with appropriate graphs and maps."]],
      ["More map skills", ["Contour lines join points of the same height; close together means steep, far apart means gentle.", "Spot heights and triangulation pillars give exact heights.", "Gradient = vertical difference ÷ horizontal distance (same units), often written as 1 in x.", "Cross sections: mark where contours meet a straight edge, then plot heights.", "Use compass directions (8 or 16 points) and measure distances along roads with a string or paper edge.", "Graph types: line and bar graphs, scatter graphs, pie charts, climate graphs (temperature line, rainfall bars), triangular graphs, choropleth maps."]],
    ], ["Eastings before northings.", "Close contours, steep slope.", "Hypothesis, method, results, conclusion, evaluation."], [
      ["In a grid reference, which comes first?", ["Northings", "Eastings", "Either", "Height"], "B", "Along the corridor, then up the stairs."],
      ["On a 1:50 000 map, what does 2 cm represent?", ["500 m", "1 km", "2 km", "50 km"], "B", "1 cm = 500 m, so 2 cm = 1 km."],
      ["Contour lines are very close together. What does this show?", ["Flat land", "A steep slope", "A river", "A road"], "B", "Height changes quickly."],
      ["What is systematic sampling?", ["Choosing at random", "Choosing at regular intervals", "Choosing by groups", "Choosing your friends"], "B", "For example every 10 metres."],
      ["What is primary data?", ["Data collected by you", "Data from the internet", "Census data", "Textbook data"], "A", "First hand data."],
      ["What do close contour lines show?", ["Flat land", "Steep land", "A river", "A town"], "B", "Height changes quickly."],
      ["Land rises 50 m over 500 m. What is the gradient?", ["1 in 5", "1 in 10", "1 in 50", "10 in 1"], "B", "500 ÷ 50 = 10."],
    ]),
  ],
};
