// Revision notes, quizzes and flashcards for IGCSE Business Studies, following the Cambridge 0450
// sections (Edexcel 4BS1 covers similar ground). Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "business",
  name: "Business Studies",
  topics: [
    one("activity", "Understanding business activity", "Business activity", 8, "Sectors, enterprise, size, ownership and objectives.", [
      ["Activity and sectors", ["Businesses combine factors of production to make goods and services that satisfy needs and wants.", "Primary (extraction), secondary (manufacturing), tertiary (services).", "Entrepreneurs take risks; a business plan helps get finance and plan ahead."]],
      ["Ownership", ["Sole trader: one owner, unlimited liability.", "Partnership: 2 to 20 owners, usually unlimited liability.", "Private limited company (Ltd): shares not sold to the public, limited liability.", "Public limited company (plc): shares sold on the stock exchange.", "Franchises and joint ventures; public sector organisations owned by the state."]],
      ["Objectives and stakeholders", ["Objectives: survival, growth, profit, market share, social enterprise aims.", "Stakeholders: owners, employees, customers, suppliers, government, local community. Their aims can conflict."]],
    ], ["Unlimited liability: owners risk personal assets.", "Ltd versus plc.", "Stakeholder objectives conflict."], [
      ["What does unlimited liability mean?", ["Owners can lose only their investment", "Owners can lose personal assets to pay business debts", "No risk at all", "The government pays debts"], "B", "Sole traders and most partnerships face this."],
      ["Which business can sell shares to the public?", ["Sole trader", "Partnership", "Private limited company", "Public limited company"], "D", "Plcs trade on the stock exchange."],
      ["Which sector does a bank belong to?", ["Primary", "Secondary", "Tertiary", "Quaternary only"], "C", "Banking is a service."],
      ["Which is a stakeholder?", ["A competitor's owner", "An employee", "A random tourist", "A foreign government with no link"], "B", "Employees are affected by the business."],
      ["What is a franchise?", ["A government business", "The right to use another firm's brand and system for a fee", "A partnership", "A charity"], "B", "Such as many fast food outlets."],
    ]),
    one("people", "People in business", "People in business", 8, "Motivation, organisation, recruitment and communication.", [
      ["Motivation", ["Maslow's hierarchy: physiological, safety, social, esteem, self actualisation.", "Taylor: money motivates. Herzberg: hygiene factors and motivators.", "Financial rewards: wages, salary, bonus, commission, profit sharing. Non financial: job rotation, job enrichment, team working, training."]],
      ["Organisation and recruitment", ["Organisation charts show hierarchy, chain of command and span of control.", "Recruitment: job analysis, job description, person specification, advertising (internal or external), interviews.", "Training: induction, on the job, off the job.", "Communication: formal and informal; barriers include jargon and poor channels."]],
    ], ["Maslow's five levels.", "Job description versus person specification.", "Span of control: people directly managed."], [
      ["What is at the top of Maslow's hierarchy?", ["Safety", "Social needs", "Self actualisation", "Esteem"], "C", "Reaching your full potential."],
      ["What does a person specification describe?", ["The tasks of a job", "The qualities and skills needed in the employee", "The salary", "The company history"], "B", "The job description lists tasks."],
      ["What is span of control?", ["The number of people a manager directly supervises", "Levels of hierarchy", "Total staff", "The chain of command"], "A", "A wide span means many subordinates."],
      ["Which is a non financial motivator?", ["Bonus", "Commission", "Job enrichment", "Profit sharing"], "C", "More challenging, varied work."],
      ["What is induction training?", ["Training for new staff to introduce the business", "Training for managers only", "Training done abroad", "Final exams"], "A", "Helps new workers settle in."],
    ]),
    one("marketing", "Marketing", "Marketing", 8, "Market research, the marketing mix and segmentation.", [
      ["Markets and research", ["Market segmentation groups customers by age, income, gender, location or lifestyle.", "Primary research: questionnaires, interviews, observation, focus groups. Secondary research: published data, reports, the internet.", "Mass marketing targets everyone; niche marketing targets a small segment."]],
      ["The 4 Ps", ["Product: design, branding, packaging, product life cycle (introduction, growth, maturity, decline).", "Price: skimming, penetration, competitive, cost plus, promotional.", "Place: channels of distribution (direct, retailer, wholesaler), e-commerce.", "Promotion: advertising, sales promotion, sponsorship, social media."]],
    ], ["Primary is new data; secondary already exists.", "4 Ps: product, price, place, promotion.", "Product life cycle stages."], [
      ["Which is primary market research?", ["Government statistics", "A customer questionnaire", "Newspaper articles", "Internet reports"], "B", "Collected first hand."],
      ["Which pricing strategy sets a low price to gain market share?", ["Skimming", "Penetration", "Cost plus", "Premium"], "B", "Penetration pricing."],
      ["Which stage of the product life cycle has the highest sales?", ["Introduction", "Growth", "Maturity", "Decline"], "C", "Sales peak in maturity."],
      ["What is niche marketing?", ["Selling to everyone", "Targeting a small, specific segment", "Selling abroad", "Selling cheap goods"], "B", "Specialised products for a small group."],
      ["Which is part of 'place'?", ["Advertising", "Channels of distribution", "Packaging", "Price discounts"], "B", "How products reach customers."],
    ]),
    one("operations", "Operations management", "Operations management", 7, "Production methods, costs, quality and location.", [
      ["Production", ["Job production (one off), batch production, flow production (continuous).", "Productivity = output / input. Lean production reduces waste, including just in time stock control.", "Fixed and variable costs; break even output = fixed costs / (price - variable cost per unit)."]],
      ["Quality and location", ["Quality control checks finished products; quality assurance builds quality into every stage; TQM involves all workers.", "Location factors: costs, markets, labour, transport, government incentives."]],
    ], ["Job, batch, flow.", "Break even = fixed costs / contribution per unit.", "Quality assurance prevents errors."], [
      ["Fixed costs are 6000, price is 10 and variable cost per unit is 4. What is the break even output?", ["600", "1000", "1500", "6000"], "B", "6000 / (10 - 4) = 1000 units."],
      ["Which production method suits a wedding dress made to order?", ["Flow", "Batch", "Job", "Mass"], "C", "One off production."],
      ["What is just in time?", ["Holding large stocks", "Receiving stock only when it is needed", "Producing in batches", "Selling quickly"], "B", "Reduces storage costs and waste."],
      ["What is productivity?", ["Total profit", "Output per unit of input", "Total sales", "Number of workers"], "A", "Usually output per worker."],
      ["Which involves every worker in quality?", ["Quality control", "Total quality management", "Inspection only", "Outsourcing"], "B", "TQM makes quality everyone's responsibility."],
    ]),
    one("finance", "Financial information and decisions", "Finance", 8, "Sources of finance, cash flow, income statements and ratios.", [
      ["Finance", ["Internal sources: retained profit, sale of assets, owner's savings.", "External: bank loans, overdrafts, share issues, trade credit, leasing, crowdfunding, microfinance.", "Cash flow forecasts predict cash in and out; cash is different from profit."]],
      ["Accounts and ratios", ["Income statement: revenue - cost of sales = gross profit; gross profit - expenses = profit.", "Statement of financial position: assets, liabilities and equity.", "Gross profit margin = gross profit / revenue x 100. Profit margin = profit / revenue x 100.", "Current ratio = current assets / current liabilities. Acid test = (current assets - inventory) / current liabilities."]],
    ], ["Cash is not profit.", "Gross profit = revenue - cost of sales.", "Current ratio measures liquidity."], [
      ["Revenue is 50 000 and cost of sales is 30 000. What is gross profit?", ["20 000", "80 000", "30 000", "50 000"], "A", "50 000 - 30 000."],
      ["Which is an internal source of finance?", ["Bank loan", "Retained profit", "Share issue", "Overdraft"], "B", "Profit kept in the business."],
      ["What does the current ratio measure?", ["Profitability", "Liquidity", "Market share", "Productivity"], "B", "Ability to pay short term debts."],
      ["Why can a profitable business still fail?", ["It has too much cash", "It runs out of cash to pay bills", "Profit is too high", "It has no customers"], "B", "Cash flow problems."],
      ["What is the gross profit margin if gross profit is 20 000 and revenue is 80 000?", ["20 percent", "25 percent", "40 percent", "400 percent"], "B", "20 000 / 80 000 x 100 = 25 percent."],
    ]),
    one("external", "External influences on business activity", "External influences", 7, "The economy, government, environment, ethics and globalisation.", [
      ["Economy and government", ["The business cycle: boom, recession, slump, recovery.", "Government aims: growth, low unemployment, low inflation, balance of payments.", "Fiscal policy (taxes, spending) and monetary policy (interest rates) affect demand and costs.", "Exchange rates affect importers and exporters."]],
      ["Environment and globalisation", ["Ethical and environmental issues: pollution, sustainability, pressure groups.", "Externalities: costs or benefits to third parties.", "Globalisation: more trade, multinational companies, but more competition and protectionism risks."]],
    ], ["Boom, recession, slump, recovery.", "Interest rate rises raise borrowing costs.", "Pressure groups influence ethics."], [
      ["What happens to borrowing costs when interest rates rise?", ["They fall", "They rise", "They stay the same", "They disappear"], "B", "Loans become more expensive."],
      ["What is a recession?", ["A period of rising output", "A period of falling output and rising unemployment", "A boom", "A tax cut"], "B", "Usually two quarters of falling GDP."],
      ["What is a pressure group?", ["A government department", "A group that tries to influence business or government decisions", "A trade union only", "A bank"], "B", "Such as environmental campaigners."],
      ["What is a multinational company?", ["A firm operating in one country", "A firm with operations in more than one country", "A charity", "A franchise only"], "B", "Also called a transnational company."],
      ["A weaker currency helps which firms?", ["Importers", "Exporters", "Neither", "Banks only"], "B", "Exports become cheaper abroad."],
    ]),
  ],
};
