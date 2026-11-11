// Revision notes, quizzes and flashcards for IGCSE Accounting, following the Cambridge 0452 topics
// (Edexcel 4AC1 is close). Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "accounting",
  name: "Accounting",
  topics: [
    one("fundamentals", "The fundamentals of accounting", "The accounting equation", 6, "The purpose of accounting and the accounting equation.", [
      ["Purpose", ["Book keeping records financial transactions; accounting uses those records to prepare statements and help decisions.", "Users: owners, managers, lenders, suppliers, employees, government."]],
      ["The equation", ["Assets = capital + liabilities.", "Assets are resources owned (premises, inventory, cash). Liabilities are amounts owed (loans, trade payables).", "Capital is the owner's investment. Every transaction keeps the equation balanced."]],
      ["Key terms", ["Assets: non current (held long term: premises, machinery, vehicles) and current (inventory, trade receivables, bank, cash).", "Liabilities: non current (long term loans) and current (trade payables, bank overdraft).", "Capital: the owner's investment. Drawings: anything the owner takes out for personal use.", "Profit increases capital; a loss and drawings decrease it.", "Capital at end = opening capital + capital introduced + profit - drawings."]],
    ], ["Assets = capital + liabilities.", "Book keeping records; accounting interprets.", "Every transaction has two effects."], [
      ["What is the accounting equation?", ["Assets = capital - liabilities", "Assets = capital + liabilities", "Capital = assets + liabilities", "Liabilities = assets + capital"], "B", "Resources equal what they were financed by."],
      ["Assets are 50 000 and liabilities are 20 000. What is capital?", ["70 000", "30 000", "20 000", "50 000"], "B", "50 000 - 20 000 = 30 000."],
      ["Which is a liability?", ["Inventory", "Bank loan", "Premises", "Cash"], "B", "A loan is owed."],
      ["What is the difference between book keeping and accounting?", ["None", "Book keeping records transactions; accounting interprets and reports them", "Accounting is only for banks", "Book keeping is done by the government"], "B", "Recording versus using the records."],
      ["Which is an asset?", ["Trade payables", "Capital", "Equipment", "Bank overdraft"], "C", "Equipment is owned."],
      ["Assets £50 000 and liabilities £12 000. What is capital?", ["£62 000", "£38 000", "£50 000", "£12 000"], "B", "Capital = assets - liabilities."],
      ["Which reduces capital?", ["Profit", "Drawings", "Capital introduced", "Loans"], "B", "The owner takes resources out."],
    ]),
    one("recording", "Sources and recording of data", "Double entry and books of prime entry", 9, "Source documents, books of prime entry and double entry.", [
      ["Source documents", ["Invoice (credit sale or purchase), credit note (goods returned), debit note, statement of account, receipt, cheque counterfoil, bank paying in slip."]],
      ["Books of prime entry", ["Sales journal (credit sales), purchases journal (credit purchases), sales returns and purchases returns journals.", "Cash book records cash and bank, with discounts; petty cash book for small expenses.", "General journal for unusual items such as corrections and opening entries."]],
      ["Double entry", ["Every transaction has a debit and a credit of equal value.", "Debit increases assets and expenses; credit increases liabilities, capital and income (DEAD CLIC).", "Balancing ledger accounts at the end of the period."]],
      ["Ledgers and discounts", ["Sales ledger: trade receivables (credit customers). Purchases ledger: trade payables (credit suppliers). Nominal (general) ledger: everything else.", "Trade discount: a reduction for buying in bulk or for trade customers; not recorded in the accounts.", "Cash discount: a reduction for paying early; recorded as discount allowed (expense) or discount received (income).", "Two and three column cash books record cash, bank and discounts. A contra entry moves money between cash and bank.", "Petty cash book with the imprest system: the float is topped up to a fixed amount each period."]],
    ], ["DEAD CLIC: debits for expenses, assets, drawings; credits for liabilities, income, capital.", "Invoices go into the sales or purchases journal.", "Cash book is both a book of prime entry and a ledger."], [
      ["Which side records an increase in an asset?", ["Debit", "Credit", "Either", "Neither"], "A", "Assets increase on the debit side."],
      ["Which document is sent when goods are returned to a seller?", ["Invoice", "Credit note", "Receipt", "Statement"], "B", "The seller issues a credit note."],
      ["Where are credit sales first recorded?", ["Purchases journal", "Sales journal", "Cash book", "General journal"], "B", "The sales journal."],
      ["Which is credited when the owner introduces capital?", ["Bank", "Capital account", "Sales", "Drawings"], "B", "Bank is debited, capital is credited."],
      ["What does the petty cash book record?", ["Large purchases", "Small cash expenses", "Credit sales", "Loans"], "B", "Minor day to day spending."],
      ["Which discount is NOT entered in the accounts?", ["Cash discount", "Trade discount", "Discount allowed", "Discount received"], "B", "Trade discount is taken off the invoice."],
      ["Discount received is:", ["An expense", "Income", "An asset", "A liability"], "B", "It reduces what we pay."],
    ]),
    one("verification", "Verification of accounting records", "Trial balance and corrections", 8, "Trial balances, errors, bank reconciliation and control accounts.", [
      ["Trial balance", ["Lists all ledger balances; total debits should equal total credits.", "Errors not revealed: omission, commission, principle, original entry, complete reversal, compensating.", "Errors that cause imbalance go to a suspense account until found."]],
      ["Checks", ["Bank reconciliation explains differences between the cash book and the bank statement: unpresented cheques, outstanding lodgements, bank charges, direct debits.", "Control accounts (sales ledger and purchases ledger) check the accuracy of individual ledgers."]],
      ["Control accounts and correcting errors", ["Sales ledger control account and purchases ledger control account check the accuracy of the ledgers; the balance should equal the total of the individual accounts.", "The journal records corrections, opening entries and adjustments, with a narrative.", "A suspense account holds the difference when the trial balance does not agree, until the error is found.", "Errors that affect the trial balance include single entry, wrong amounts on one side and addition errors."]],
    ], ["A balanced trial balance can still hide errors.", "Suspense account for imbalances.", "Bank reconciliation explains timing differences."], [
      ["Which error is not revealed by a trial balance?", ["Single entry only", "Error of omission", "Addition error in one account", "Debit entered twice"], "B", "If nothing is entered, both sides stay equal."],
      ["What is a suspense account used for?", ["Storing cash", "Temporarily holding the difference when the trial balance does not agree", "Paying wages", "Recording sales"], "B", "Cleared when errors are found."],
      ["What is an unpresented cheque?", ["A cheque written but not yet cleared by the bank", "A forged cheque", "A cheque received", "A cancelled cheque"], "A", "A timing difference in bank reconciliation."],
      ["An expense is posted to the right side but the wrong account of the same type. What error is this?", ["Principle", "Commission", "Original entry", "Reversal"], "B", "Error of commission."],
      ["What do control accounts check?", ["Cash only", "The accuracy of the sales and purchases ledgers", "Profit", "Capital"], "B", "Totals are compared with ledgers."],
      ["What does a suspense account hold?", ["Owner's drawings", "The difference when a trial balance does not agree", "Cash", "Loans"], "B", "Until the error is corrected."],
    ]),
    one("procedures", "Accounting procedures", "Adjustments", 8, "Capital and revenue expenditure, accruals, prepayments, depreciation and irrecoverable debts.", [
      ["Capital and revenue", ["Capital expenditure buys or improves non current assets (machinery).", "Revenue expenditure is day to day running costs (wages, repairs)."]],
      ["Adjustments", ["Accruals: expenses owed at the year end are added; prepayments: expenses paid in advance are subtracted.", "Depreciation spreads the cost of a non current asset: straight line (same amount each year) or reducing balance (a percentage of the carrying value).", "Irrecoverable debts are written off; a provision for doubtful debts allows for likely losses.", "Inventory valued at the lower of cost and net realisable value."]],
      ["Depreciation and bad debts", ["Straight line depreciation = (cost - residual value) ÷ useful life.", "Reducing balance depreciation = net book value x percentage.", "Disposal of a non current asset: compare sale proceeds with net book value to find a profit or loss on disposal.", "Irrecoverable (bad) debts are written off as an expense. A provision for doubtful debts reduces trade receivables and the change is charged to the income statement.", "Inventory is valued at the lower of cost and net realisable value."]],
    ], ["Capital spending creates assets; revenue spending is running costs.", "Accruals add; prepayments subtract.", "Lower of cost and net realisable value."], [
      ["Which is capital expenditure?", ["Paying wages", "Buying a delivery van", "Paying for fuel", "Repairing a window"], "B", "It buys a non current asset."],
      ["A machine costs 10 000, has a 5 year life and no residual value. What is the straight line depreciation each year?", ["1000", "2000", "5000", "10 000"], "B", "10 000 / 5 = 2000."],
      ["What is a prepayment?", ["An expense owed", "An expense paid in advance", "Income received late", "A loan"], "B", "It is subtracted from the expense."],
      ["How is inventory valued?", ["At selling price", "At the lower of cost and net realisable value", "At replacement cost always", "At the higher of cost and value"], "B", "This follows prudence."],
      ["What is an irrecoverable debt?", ["Money owed that will not be paid", "A bank loan", "An accrual", "A prepayment"], "A", "It is written off as an expense."],
      ["A machine costs £10 000, residual value £2000, life 4 years. Straight line depreciation per year?", ["£2000", "£2500", "£3000", "£8000"], "A", "(10 000 - 2000) ÷ 4 = 2000."],
      ["Inventory is valued at:", ["Selling price", "The lower of cost and net realisable value", "Cost plus profit", "Replacement cost"], "B", "The prudence principle."],
    ]),
    one("statements", "Preparation of financial statements", "Financial statements", 9, "Income statements and statements of financial position.", [
      ["Income statement", ["Revenue minus cost of sales = gross profit.", "Cost of sales = opening inventory + purchases - closing inventory.", "Gross profit plus other income minus expenses = profit for the year."]],
      ["Statement of financial position", ["Non current assets, current assets (inventory, trade receivables, bank, cash).", "Current liabilities (trade payables, overdraft) and non current liabilities (long term loans).", "Capital: opening capital + profit - drawings = closing capital.", "Partnerships use appropriation accounts; limited companies show share capital and reserves; clubs prepare receipts and payments and income and expenditure accounts."]],
      ["Other organisations", ["Partnerships: an appropriation account shares profit; interest on capital, partners' salaries and the profit share; current accounts record each partner's share and drawings.", "Limited companies: share capital, retained earnings, dividends, debentures (loans).", "Clubs and societies: receipts and payments account, income and expenditure account (surplus or deficit), accumulated fund instead of capital.", "Manufacturing accounts: prime cost (direct materials + direct labour + direct expenses), factory overheads, cost of production.", "Incomplete records: find missing figures from the accounting equation, statements of affairs, and mark up or margin."]],
    ], ["Cost of sales = opening inventory + purchases - closing inventory.", "Closing capital = opening + profit - drawings.", "Current versus non current."], [
      ["Opening inventory 5000, purchases 20 000, closing inventory 3000. What is cost of sales?", ["22 000", "28 000", "18 000", "25 000"], "A", "5000 + 20 000 - 3000 = 22 000."],
      ["Which is a current asset?", ["Premises", "Trade receivables", "Long term loan", "Machinery"], "B", "Expected to turn into cash within a year."],
      ["Opening capital 40 000, profit 10 000, drawings 6000. What is closing capital?", ["44 000", "56 000", "36 000", "50 000"], "A", "40 000 + 10 000 - 6000."],
      ["Which is a non current liability?", ["Trade payables", "Bank overdraft", "Loan repayable in 5 years", "Accrued wages"], "C", "Due after more than a year."],
      ["What does a club prepare instead of an income statement?", ["Appropriation account", "Income and expenditure account", "Sales journal", "Cash flow forecast"], "B", "Clubs do not aim for profit."],
      ["What replaces capital in a club's accounts?", ["Share capital", "Accumulated fund", "Current account", "Retained earnings"], "B", "Clubs do not have owners' capital."],
      ["Prime cost is:", ["Factory overheads", "Direct materials + direct labour + direct expenses", "Total cost", "Selling price"], "B", "Direct costs only."],
    ]),
    one("analysis", "Analysis and interpretation", "Ratios", 7, "Profitability and liquidity ratios, and their limits.", [
      ["Ratios", ["Gross margin = gross profit / revenue x 100.", "Profit margin = profit / revenue x 100.", "Return on capital employed = profit / capital employed x 100.", "Current ratio = current assets / current liabilities. Liquid (acid test) ratio = (current assets - inventory) / current liabilities.", "Trade receivables turnover and trade payables turnover in days; rate of inventory turnover."]],
      ["Interpretation", ["Compare with previous years and with similar businesses.", "Limitations: historical data, different accounting policies, inflation, non financial factors ignored."]],
      ["More ratios", ["Mark up = gross profit ÷ cost of sales x 100. Margin = gross profit ÷ revenue x 100.", "Rate of inventory turnover = cost of sales ÷ average inventory (times per year).", "Trade receivables turnover (days) = trade receivables ÷ credit sales x 365. Trade payables turnover (days) = trade payables ÷ credit purchases x 365.", "Current ratio = current assets ÷ current liabilities. Liquid (acid test) ratio = (current assets - inventory) ÷ current liabilities.", "Return on capital employed = profit ÷ capital employed x 100."]],
    ], ["Profitability: margins and ROCE.", "Liquidity: current and liquid ratios.", "Ratios need comparisons to mean much."], [
      ["Profit is 15 000 and revenue is 100 000. What is the profit margin?", ["1.5 percent", "15 percent", "85 percent", "150 percent"], "B", "15 000 / 100 000 x 100."],
      ["Which ratio excludes inventory?", ["Current ratio", "Liquid (acid test) ratio", "Gross margin", "ROCE"], "B", "Inventory may be slow to turn into cash."],
      ["Current assets 30 000, current liabilities 15 000. What is the current ratio?", ["0.5 : 1", "2 : 1", "15 : 1", "45 : 1"], "B", "30 000 / 15 000 = 2."],
      ["Which is a limitation of ratio analysis?", ["It uses historical data", "It is too accurate", "It predicts the future perfectly", "It includes all non financial factors"], "A", "Past results may not reflect the future."],
      ["What does ROCE measure?", ["Liquidity", "How well capital is used to generate profit", "Inventory turnover", "Debt levels"], "B", "Return on capital employed."],
      ["Gross profit £20 000, cost of sales £80 000. What is the mark up?", ["20%", "25%", "80%", "16%"], "B", "20 000 ÷ 80 000 x 100."],
      ["Cost of sales £60 000, average inventory £10 000. Inventory turnover?", ["6 times", "10 times", "0.17 times", "60 times"], "A", "60 000 ÷ 10 000."],
    ]),
    one("principles", "Accounting principles and policies", "Accounting principles", 6, "The concepts behind the accounts.", [
      ["Principles", ["Business entity: the business is separate from the owner.", "Going concern: the business will continue.", "Historic cost: record assets at their cost.", "Matching (accruals): match income and expenses to the period.", "Prudence: do not overstate profits or assets.", "Consistency: use the same methods each year.", "Duality: every transaction has two aspects.", "Materiality and realisation."]],
      ["Qualities of information", ["Relevance, reliability, comparability and understandability."]],
      ["More principles", ["Prudence: do not overstate profits or assets; recognise losses as soon as possible.", "Matching (accruals): match income and expenses to the period they belong to.", "Consistency: use the same methods each year.", "Duality: every transaction has two aspects.", "Materiality: small items can be treated simply (a stapler is an expense, not an asset).", "Realisation: revenue is recognised when goods change ownership.", "Money measurement: only items with a money value are recorded."]],
    ], ["Prudence: be cautious.", "Matching: link income and expenses to the right period.", "Consistency allows comparison."], [
      ["Which principle keeps the owner's personal spending separate?", ["Going concern", "Business entity", "Prudence", "Materiality"], "B", "The business is a separate entity."],
      ["Which principle means you should not overstate profits?", ["Prudence", "Consistency", "Duality", "Historic cost"], "A", "Be cautious."],
      ["Which principle supports recording accruals and prepayments?", ["Matching", "Materiality", "Going concern", "Business entity"], "A", "Expenses are matched to the period."],
      ["Why use the same depreciation method each year?", ["Consistency, so results can be compared", "It is cheaper", "It is required for clubs only", "It increases profit"], "A", "Comparability needs consistency."],
      ["What is the duality principle?", ["Two owners", "Every transaction has two aspects", "Two accounts per business", "Two years of records"], "B", "The basis of double entry."],
      ["Which principle means a stapler is treated as an expense?", ["Prudence", "Materiality", "Duality", "Going concern"], "B", "It is too small to treat as an asset."],
    ]),
  ],
};
