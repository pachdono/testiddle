// Revision notes, quizzes and flashcards for IGCSE Economics, following the Cambridge 0455 topics
// (Edexcel 4EC1 covers the same ideas). Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "economics",
  name: "Economics",
  topics: [
    one("problem", "The basic economic problem", "Scarcity, choice and opportunity cost", 7, "Why choices must be made and what they cost.", [
      ["Key ideas", ["The economic problem: unlimited wants but finite resources, so there is scarcity.", "Factors of production: land, labour, capital and enterprise. Their rewards: rent, wages, interest and profit.", "Opportunity cost is the next best alternative given up.", "Economic goods are scarce; free goods (like air) have no opportunity cost."]],
      ["Production possibility curves", ["A PPC shows the maximum combinations of two goods an economy can produce.", "Points inside the curve show unemployed resources; points outside are unattainable.", "Outward shifts show economic growth from more or better resources."]],
    ], ["Scarcity forces choice.", "Opportunity cost is the next best alternative.", "PPC shifts out with growth."], [
      ["What is opportunity cost?", ["The price paid", "The next best alternative given up", "The total cost", "A free good"], "B", "It is what you sacrifice by choosing."],
      ["What is the reward for enterprise?", ["Wages", "Rent", "Interest", "Profit"], "D", "Entrepreneurs earn profit."],
      ["A point inside the PPC shows:", ["Full employment", "Unemployed or inefficiently used resources", "Unattainable output", "Growth"], "B", "Resources are not fully used."],
      ["What causes the PPC to shift outwards?", ["Unemployment", "More or better resources", "Higher prices", "A recession"], "B", "Growth in productive capacity."],
      ["Why does the economic problem exist?", ["Resources are unlimited", "Wants are unlimited but resources are finite", "Prices are too high", "Governments interfere"], "B", "This creates scarcity."],
    ]),
    one("allocation", "The allocation of resources", "Markets, demand and supply", 9, "Demand, supply, price, elasticity and market failure.", [
      ["Demand and supply", ["Demand: as price falls, quantity demanded rises (movement along the curve). Shifts come from income, tastes, prices of related goods, population, advertising.", "Supply: as price rises, quantity supplied rises. Shifts come from costs, technology, taxes, subsidies, weather.", "Equilibrium is where demand equals supply; excess demand pushes prices up, excess supply pushes them down."]],
      ["Elasticity", ["PED = % change in quantity demanded / % change in price.", "Elastic (greater than 1): a price rise lowers revenue. Inelastic (less than 1): a price rise raises revenue.", "PES = % change in quantity supplied / % change in price."]],
      ["Market failure", ["Public goods (non rival and non excludable, like street lights) are under provided.", "Merit goods (education) are under consumed; demerit goods (cigarettes) are over consumed.", "External costs and benefits affect third parties.", "Government responses: taxes, subsidies, regulation, state provision."]],
    ], ["Movement versus shift.", "PED above 1 is elastic.", "Public goods: non rival and non excludable."], [
      ["Price rises by 10 percent and quantity demanded falls by 20 percent. What is the PED?", ["-0.5", "-2", "-10", "-20"], "B", "-20 / 10 = -2: elastic."],
      ["Which shifts the demand curve to the right for a normal good?", ["A fall in price", "A rise in income", "A rise in price", "A fall in income"], "B", "Higher income raises demand for normal goods."],
      ["Which is a public good?", ["Chocolate", "Street lighting", "Cars", "Haircuts"], "B", "Non rival and non excludable."],
      ["What happens when there is excess supply?", ["Price rises", "Price falls", "Price stays the same", "Demand falls"], "B", "Sellers cut prices to clear stock."],
      ["If demand is price inelastic, what happens to revenue when price rises?", ["It falls", "It rises", "It stays the same", "It becomes zero"], "B", "Quantity falls proportionally less than price rises."],
    ]),
    one("micro", "Microeconomic decision makers", "Firms, workers and households", 8, "Banks, households, workers, trade unions and firms.", [
      ["Households and workers", ["Spending, saving and borrowing depend on income, interest rates and confidence.", "Wage determination: demand and supply of labour, skills, qualifications, trade unions, government (minimum wage).", "Division of labour: specialisation increases output but can be repetitive."]],
      ["Firms", ["Small firms survive by offering personal service, niche markets and flexibility.", "Growth: internal (expansion) or external (mergers: horizontal, vertical, conglomerate).", "Costs: fixed costs do not change with output; variable costs do. Total cost = fixed + variable. Average cost = total cost / output.", "Revenue = price x quantity. Profit = total revenue - total cost.", "Economies of scale lower average costs as firms grow; diseconomies raise them.", "Market structures: competitive markets and monopoly."]],
    ], ["Fixed versus variable costs.", "Horizontal, vertical and conglomerate mergers.", "Economies of scale lower average costs."], [
      ["Which is a fixed cost?", ["Raw materials", "Rent", "Packaging", "Fuel for delivery"], "B", "Rent does not change with output."],
      ["A car maker buys a tyre company. What type of integration is this?", ["Horizontal", "Backward vertical", "Conglomerate", "Forward vertical"], "B", "Moving back towards suppliers."],
      ["What are economies of scale?", ["Rising costs as firms grow", "Falling average costs as output increases", "Price wars", "Tax cuts"], "B", "For example bulk buying."],
      ["What is a monopoly?", ["Many small firms", "A single firm dominating a market", "Two firms", "A government department"], "B", "One seller with market power."],
      ["Total revenue is 5000 and total cost is 3500. What is the profit?", ["1500", "8500", "3500", "5000"], "A", "5000 - 3500 = 1500."],
    ]),
    one("macro", "Government and the macroeconomy", "Government policy and macroeconomic aims", 9, "Growth, employment, inflation and policies.", [
      ["Aims", ["Economic growth (rising real GDP), low unemployment, stable prices (low inflation), balance of payments stability, redistribution of income.", "Inflation is a sustained rise in the general price level, measured by a consumer price index.", "Unemployment types: frictional, structural, cyclical, seasonal."]],
      ["Policies", ["Fiscal policy: government spending and taxation. Progressive taxes take a larger share from higher incomes.", "Monetary policy: interest rates and money supply, usually set by the central bank.", "Supply side policies: education, training, privatisation, lower taxes, deregulation.", "Policies can conflict, such as lower unemployment versus low inflation."]],
    ], ["Five macroeconomic aims.", "Fiscal = tax and spending; monetary = interest rates.", "Supply side raises productive capacity."], [
      ["What is monetary policy?", ["Changing tax rates", "Changing interest rates and money supply", "Building schools", "Privatisation"], "B", "Usually run by the central bank."],
      ["Which tax takes a larger percentage from higher incomes?", ["Regressive", "Progressive", "Proportional", "Indirect"], "B", "Income tax is often progressive."],
      ["What is inflation?", ["A fall in prices", "A sustained rise in the general price level", "Higher wages only", "More unemployment"], "B", "Measured by CPI."],
      ["Which is a supply side policy?", ["Raising interest rates", "Improving education and training", "Increasing benefits", "Printing money"], "B", "It improves the quality of labour."],
      ["What type of unemployment results from a decline of an industry?", ["Frictional", "Structural", "Seasonal", "Cyclical"], "B", "Workers' skills no longer match available jobs."],
    ]),
    one("development", "Economic development", "Economic development", 7, "Living standards, poverty and population.", [
      ["Measuring", ["Real GDP per head measures average income.", "The Human Development Index combines income, education and life expectancy.", "Differences in living standards come from income, wealth, education and health."]],
      ["Poverty and population", ["Absolute poverty: lacking basic needs. Relative poverty: much poorer than the average in a society.", "Policies: economic growth, improved education and healthcare, progressive taxes, aid.", "Population growth depends on birth rate, death rate and net migration. Optimum population maximises output per head."]],
    ], ["HDI: income, education, life expectancy.", "Absolute versus relative poverty.", "Population change = births - deaths + net migration."], [
      ["What is absolute poverty?", ["Earning below the average", "Not having enough for basic needs", "Having no savings", "Unemployment"], "B", "Lacking food, shelter and clean water."],
      ["What does the HDI measure?", ["GDP only", "Income, education and life expectancy", "Exports", "Inflation"], "B", "A composite indicator."],
      ["What is real GDP per head?", ["Total output adjusted for inflation, divided by population", "Total wages", "Exports per person", "Population density"], "A", "Average real income."],
      ["What is net migration?", ["Immigration minus emigration", "Births minus deaths", "Total population", "Tourists"], "A", "People arriving minus people leaving."],
      ["Which can reduce poverty?", ["Cutting education", "Investing in education and healthcare", "Raising regressive taxes", "Reducing employment"], "B", "Human capital raises incomes."],
    ]),
    one("trade", "International trade and globalisation", "Trade, exchange rates and the balance of payments", 8, "Specialisation, free trade, protection, exchange rates and the current account.", [
      ["Trade", ["Countries specialise in what they produce most efficiently and trade.", "Free trade benefits: lower prices, more choice, bigger markets.", "Protection: tariffs (taxes on imports), quotas (limits), subsidies, embargoes. Reasons: protect infant industries, jobs and strategic industries.", "Multinational companies (MNCs) bring investment and jobs but may exploit workers and repatriate profits."]],
      ["Exchange rates and the current account", ["A floating exchange rate is set by demand and supply of the currency.", "A depreciation makes exports cheaper and imports dearer.", "The current account: trade in goods and services, primary income and secondary income (transfers).", "A deficit means more is spent on imports than earned from exports."]],
    ], ["Tariff tax, quota limit.", "Depreciation helps exports.", "Current account deficit: imports exceed exports."], [
      ["What is a tariff?", ["A limit on imports", "A tax on imports", "A subsidy to exporters", "A ban on trade"], "B", "It raises the price of imports."],
      ["What does a depreciation of a currency do to exports?", ["Makes them more expensive abroad", "Makes them cheaper abroad", "Has no effect", "Bans them"], "B", "Foreign buyers need less of their currency."],
      ["What is a quota?", ["A tax", "A physical limit on the quantity of imports", "An exchange rate", "A subsidy"], "B", "Restricts quantity."],
      ["What is an infant industry argument?", ["Protect new industries until they can compete", "Ban child labour", "Lower tariffs for children's goods", "Free trade only"], "A", "New firms may need temporary protection."],
      ["A current account deficit means:", ["Exports exceed imports", "Imports exceed exports (in value)", "The budget is balanced", "Inflation is high"], "B", "More is spent abroad than earned."],
    ]),
  ],
};
