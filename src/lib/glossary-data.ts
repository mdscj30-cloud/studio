
export type GlossaryTerm = {
  term: string;
  definition: string;
  slug: string;
  cluster: string;
  stageRelevance?: 'Pre-Seed' | 'Seed' | 'Growth' | 'All Stages';
  relatedServiceSlug?: 'virtual-cfo' | 'bookkeeping' | 'business-setup' | 'regulatory-compliances' | 'investor-due-diligence' | 'pitch-deck-financial-modelling' | 'corporate-law' | 'fundraising';
  comparisonSlugs?: string[];
  tier?: 1 | 2 | 3;
};

const slugify = (term: string) => `what-is-${term.toLowerCase().replace(/\(.*\)/g, '').trim().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')}`;

export const GLOSSARY_CLUSTERS = [
  'Startup Finance Fundamentals',
  'Accounting & Bookkeeping',
  'Virtual CFO & Financial Management',
  'GST & Indirect Tax',
  'Income Tax & Direct Tax',
  'TDS & Payroll',
  'ROC, Company Law & FEMA',
  'Fundraising & Valuation',
  'ESOP & Employee Structuring',
  'Founder Problems & Penalties',
];

const ALL_GLOSSARY_DATA_RAW: Omit<GlossaryTerm, 'slug'>[] = [

  // ─── Startup Finance Fundamentals ────────────────────────────────────────────
  { tier: 1, cluster: 'Startup Finance Fundamentals', stageRelevance: 'All Stages', relatedServiceSlug: 'virtual-cfo',
    term: 'Annual Recurring Revenue (ARR)',
    definition: 'ARR is the annualised value of all active subscription or recurring revenue contracts. It is calculated as Monthly Recurring Revenue × 12 and is the single most important top-line metric for any SaaS or subscription business. Investors use ARR to assess scale, growth rate, and predictability. A ₹1 Cr ARR milestone is often the minimum threshold for serious Series A conversations in India.' },

  { tier: 1, cluster: 'Startup Finance Fundamentals', stageRelevance: 'All Stages', relatedServiceSlug: 'virtual-cfo',
    term: 'Monthly Recurring Revenue (MRR)',
    definition: 'MRR is the predictable revenue a business expects to receive every month from active subscriptions or contracts. It is broken into New MRR (from new customers), Expansion MRR (upsells), Churned MRR (cancellations), and Reactivation MRR. Tracking MRR movement — not just the total — tells you the real health of your revenue engine.' },

  { tier: 1, cluster: 'Startup Finance Fundamentals', stageRelevance: 'Seed', relatedServiceSlug: 'virtual-cfo',
    term: 'Burn Rate',
    definition: 'Burn rate is how much cash your company spends each month in excess of revenue. Gross burn is total monthly cash outflow. Net burn is gross burn minus revenue. If your bank account falls by ₹20 lakhs per month, your net burn is ₹20 lakhs. Controlling burn rate is the primary job of a founder before achieving product-market fit.' },

  { tier: 1, cluster: 'Startup Finance Fundamentals', stageRelevance: 'Seed', relatedServiceSlug: 'virtual-cfo',
    term: 'Runway',
    definition: 'Runway is the number of months your company can operate before running out of cash, calculated as Cash in Bank ÷ Net Monthly Burn. A startup should always maintain at least 12–18 months of runway. Fundraising takes 3–6 months, so starting the process when you have less than 12 months of runway is dangerously late.' },

  { tier: 1, cluster: 'Startup Finance Fundamentals', stageRelevance: 'All Stages',
    term: 'Customer Acquisition Cost (CAC)',
    definition: 'CAC is the total sales and marketing cost to acquire one new paying customer. Calculated as Total Sales & Marketing Spend ÷ New Customers Acquired. A CAC that is too high relative to LTV makes the business model fundamentally unviable. Founders often underestimate CAC by not including salaries of the sales team.' },

  { tier: 1, cluster: 'Startup Finance Fundamentals', stageRelevance: 'All Stages',
    term: 'Lifetime Value (LTV)',
    definition: 'LTV (or CLV) is the total revenue a business expects from a single customer account over the entire relationship. For SaaS: LTV = ARPU × Gross Margin % ÷ Monthly Churn Rate. The LTV:CAC ratio is a key investor metric — a ratio above 3:1 indicates a sustainable go-to-market model. Below 1:1 means you lose money on every customer you acquire.' },

  { tier: 1, cluster: 'Startup Finance Fundamentals', stageRelevance: 'Growth',
    term: 'Churn Rate',
    definition: 'Churn rate is the percentage of customers or revenue lost over a given period. Customer churn measures how many customers cancelled. Revenue churn measures the % of MRR lost. High churn (>5% monthly) makes growth nearly impossible — you are filling a leaky bucket. Best-in-class SaaS companies target <1% monthly churn.' },

  { tier: 1, cluster: 'Startup Finance Fundamentals', stageRelevance: 'All Stages', relatedServiceSlug: 'virtual-cfo',
    term: 'Unit Economics',
    definition: 'Unit economics analyses the direct revenues and costs on a per-unit basis — where a "unit" is typically one customer, one transaction, or one product. Positive unit economics means each unit generates more revenue than it costs to produce and acquire. Investors want to see that your unit economics improve at scale before committing capital.' },

  { tier: 1, cluster: 'Startup Finance Fundamentals', stageRelevance: 'Growth', relatedServiceSlug: 'virtual-cfo',
    term: 'EBITDA',
    definition: 'EBITDA stands for Earnings Before Interest, Taxes, Depreciation, and Amortisation. It is a measure of core operating profitability, stripping out financing and accounting decisions. While not a substitute for cash flow, EBITDA is a widely used benchmark for valuing profitable companies — typically expressed as an EBITDA multiple (e.g., 5x EBITDA). Early-stage startups rarely focus on EBITDA, but it becomes critical at Series B and beyond.' },

  { tier: 1, cluster: 'Startup Finance Fundamentals', stageRelevance: 'All Stages', relatedServiceSlug: 'virtual-cfo',
    term: 'Gross Margin',
    definition: 'Gross margin is the percentage of revenue remaining after subtracting the Cost of Goods Sold (COGS). Formula: (Revenue − COGS) ÷ Revenue × 100. SaaS businesses typically have 70–85% gross margins. D2C brands typically target 40–60%. High gross margins fund growth, R&D, and sales. Low gross margins constrain investment in everything else.' },

  { tier: 1, cluster: 'Startup Finance Fundamentals', stageRelevance: 'All Stages',
    term: 'Net Dollar Retention (NDR)',
    definition: 'NDR measures the revenue retained from an existing customer cohort over a period, including upsells and expansions, minus churned and contracted revenue. NDR > 100% means your existing customers are spending more over time — you grow even without adding new customers. This is the ultimate indicator of product-market fit in SaaS.' },

  { tier: 2, cluster: 'Startup Finance Fundamentals', stageRelevance: 'All Stages',
    term: 'Gross Merchandise Value (GMV)',
    definition: 'GMV is the total value of goods or services sold through a marketplace or platform. It is a volume metric, not a revenue metric. A marketplace might process ₹100 Cr GMV but only recognise ₹5 Cr as revenue (5% take rate). Investors use GMV to gauge scale, but also scrutinise take rates and unit economics.' },

  { tier: 2, cluster: 'Startup Finance Fundamentals', stageRelevance: 'All Stages',
    term: 'Take Rate',
    definition: 'Take rate (or commission rate) is the percentage of GMV that a marketplace retains as revenue. Take Rate = Revenue ÷ GMV. A higher take rate indicates pricing power. Swiggy\'s take rate from restaurants, for example, is a key profitability driver. Regulators sometimes cap take rates in certain sectors.' },

  { tier: 2, cluster: 'Startup Finance Fundamentals', stageRelevance: 'All Stages',
    term: 'Average Order Value (AOV)',
    definition: 'AOV is the average amount spent each time a customer places an order. AOV = Total Revenue ÷ Number of Orders. Increasing AOV (through bundling, upsells, or minimum order thresholds) is a key lever for D2C brands to improve marketing efficiency and CAC payback.' },

  { tier: 2, cluster: 'Startup Finance Fundamentals', stageRelevance: 'All Stages',
    term: 'Return on Ad Spend (ROAS)',
    definition: 'ROAS measures the revenue generated for every rupee spent on advertising. ROAS = Revenue from Ads ÷ Ad Spend. A ROAS of 3x means you earn ₹3 for every ₹1 spent. ROAS is a top-of-funnel efficiency metric — it does not account for COGS or other costs, so it must be paired with contribution margin analysis.' },

  { tier: 2, cluster: 'Startup Finance Fundamentals', stageRelevance: 'All Stages', relatedServiceSlug: 'virtual-cfo',
    term: 'Contribution Margin',
    definition: 'Contribution margin is the revenue remaining after all variable costs (COGS, shipping, payment gateway fees, packaging) are deducted. It represents the amount each sale "contributes" to covering fixed costs and profit. A negative contribution margin means every sale destroys value — a structural problem no amount of growth can fix.' },

  { tier: 2, cluster: 'Startup Finance Fundamentals', stageRelevance: 'All Stages',
    term: 'Total Addressable Market (TAM)',
    definition: 'TAM is the maximum revenue opportunity available if a company captured 100% of its target market. SAM (Serviceable Addressable Market) is the portion you can realistically target. SOM (Serviceable Obtainable Market) is what you can capture in the near term. Investors look at TAM to assess the ceiling of the opportunity — a ₹1,000 Cr TAM is typically the minimum for VC interest.' },

  { tier: 2, cluster: 'Startup Finance Fundamentals', stageRelevance: 'All Stages',
    term: 'Product-Market Fit (PMF)',
    definition: 'Product-market fit is the degree to which a product satisfies strong market demand. Signs include organic growth, high retention, low churn, and customers describing your product as "essential." Sean Ellis\'s test: If more than 40% of users say they would be "very disappointed" without your product, you have PMF. Before PMF, you should not scale marketing spend.' },

  { tier: 2, cluster: 'Startup Finance Fundamentals', stageRelevance: 'All Stages',
    term: 'Revenue Run Rate',
    definition: 'Revenue run rate is an annualised revenue projection based on current performance — typically current month revenue × 12. It is a forward-looking estimate used when a company is growing quickly and historical annual figures understate current momentum. Investors use ARR (for subscription businesses) or run rate (for transactional businesses) to benchmark current scale.' },

  { tier: 2, cluster: 'Startup Finance Fundamentals', stageRelevance: 'Growth',
    term: 'Average Revenue Per User (ARPU)',
    definition: 'ARPU is the average revenue generated per active user per month (or year). ARPU = Total Revenue ÷ Total Active Users. It is a critical lever in LTV calculations. To improve ARPU, companies focus on upselling higher-tier plans, expanding into adjacent products, or improving pricing strategy.' },

  { tier: 1, cluster: 'Startup Finance Fundamentals', stageRelevance: 'Pre-Seed',
    term: 'Bootstrapping',
    definition: 'Bootstrapping means building and growing a business using personal savings, early customer revenue, and operational cash flow — without external investment. Bootstrapped companies retain full ownership and control but must grow more slowly. Many India-based SaaS companies (Zoho, Freshworks in its early years) bootstrapped successfully before scaling.' },

  { tier: 2, cluster: 'Startup Finance Fundamentals', stageRelevance: 'Seed',
    term: 'Traction',
    definition: 'Traction is evidence that your product is gaining real-world adoption — paying customers, revenue growth, user engagement, or letter-of-intent from partners. Investors use traction to de-risk their bet. In India\'s VC ecosystem, ₹10–50 lakhs MRR is typically considered meaningful pre-Series A traction depending on the sector.' },

  { tier: 2, cluster: 'Startup Finance Fundamentals', stageRelevance: 'All Stages',
    term: 'CAC Payback Period',
    definition: 'CAC payback period is the number of months it takes to recover the cost of acquiring a customer. Calculated as CAC ÷ (ARPU × Gross Margin %). A payback period under 12 months is considered healthy for SaaS. Longer payback periods require more working capital, making the business sensitive to fundraising cycles.' },

  { tier: 2, cluster: 'Startup Finance Fundamentals', stageRelevance: 'All Stages',
    term: 'Compliance',
    definition: 'In the context of Indian startups, compliance refers to meeting all statutory and regulatory obligations — GST filings, TDS payments, PF/ESI contributions, ROC annual filings, income tax returns, and more. Non-compliance leads to penalties, director disqualification, and blocks on fundraising. Clean compliance history is essential for due diligence.' },

  // ─── Accounting & Bookkeeping ─────────────────────────────────────────────────
  { tier: 1, cluster: 'Accounting & Bookkeeping', stageRelevance: 'All Stages', relatedServiceSlug: 'bookkeeping',
    term: 'Balance Sheet',
    definition: 'A balance sheet is a financial statement that shows a company\'s assets, liabilities, and shareholders\' equity at a specific point in time. The fundamental equation is: Assets = Liabilities + Equity. For startups, a clean balance sheet with growing equity and manageable liabilities signals financial health. Investors scrutinise the balance sheet during due diligence.' },

  { tier: 1, cluster: 'Accounting & Bookkeeping', stageRelevance: 'All Stages', relatedServiceSlug: 'bookkeeping',
    term: 'Profit & Loss Statement (P&L)',
    definition: 'The P&L statement (also called the Income Statement) summarises revenues, costs, and expenses during a specific period, showing the company\'s profit or loss. Key lines include Revenue, Gross Profit, EBITDA, and Net Profit. A monthly P&L is essential for operational decision-making; an annual audited P&L is mandatory for tax filings and due diligence.' },

  { tier: 1, cluster: 'Accounting & Bookkeeping', stageRelevance: 'All Stages', relatedServiceSlug: 'bookkeeping',
    term: 'Cash Flow Statement',
    definition: 'The cash flow statement tracks all cash inflows and outflows over a period, split into Operating, Investing, and Financing activities. A company can be profitable on paper (accrual basis) but still run out of cash. The cash flow from operations is the most important section for startup founders as it shows whether the core business generates or consumes cash.' },

  { tier: 1, cluster: 'Accounting & Bookkeeping', stageRelevance: 'All Stages', relatedServiceSlug: 'bookkeeping',
    term: 'Accrual Basis Accounting',
    definition: 'Under accrual accounting, revenues and expenses are recorded when they are earned or incurred, not when cash is received or paid. This is mandatory for companies in India above certain turnover thresholds and provides a more accurate picture of economic reality. Unlike cash basis, accrual accounting recognises unpaid invoices as revenue and pending bills as expenses.' },

  { tier: 1, cluster: 'Accounting & Bookkeeping', stageRelevance: 'All Stages', relatedServiceSlug: 'bookkeeping',
    term: 'Bookkeeping',
    definition: 'Bookkeeping is the systematic recording of every financial transaction in a company — sales, purchases, receipts, and payments — into an accounting system. Accurate bookkeeping is the foundation of all financial reporting, tax filings, and due diligence. Outsourcing bookkeeping to a professional firm ensures data accuracy and frees founders to focus on growth.' },

  { tier: 1, cluster: 'Accounting & Bookkeeping', stageRelevance: 'All Stages', relatedServiceSlug: 'bookkeeping',
    term: 'Accounts Payable',
    definition: 'Accounts payable (AP) is the amount a company owes to its vendors and suppliers for goods or services already received but not yet paid for. Managing AP effectively — negotiating payment terms and paying on time — is critical for maintaining supplier relationships and managing cash flow. Late AP payments can strain vendor relationships and trigger cash flow crises.' },

  { tier: 1, cluster: 'Accounting & Bookkeeping', stageRelevance: 'All Stages', relatedServiceSlug: 'bookkeeping',
    term: 'Accounts Receivable',
    definition: 'Accounts receivable (AR) is the money owed to a company by its customers for products or services already delivered. High AR with slow collection cycles ("high DSO") is a common cash flow killer for B2B startups. A disciplined AR process — with reminders, credit terms, and escalation — is essential for maintaining healthy working capital.' },

  { tier: 1, cluster: 'Accounting & Bookkeeping', stageRelevance: 'All Stages', relatedServiceSlug: 'bookkeeping',
    term: 'Bank Reconciliation',
    definition: 'Bank reconciliation is the process of matching the balances in a company\'s accounting records against the bank statement to ensure they agree. Unexplained differences signal data entry errors, fraud, or timing differences. Monthly bank reconciliation is a non-negotiable bookkeeping control. It is the first check auditors and due diligence teams perform.' },

  { tier: 2, cluster: 'Accounting & Bookkeeping', stageRelevance: 'All Stages', relatedServiceSlug: 'bookkeeping',
    term: 'Trial Balance',
    definition: 'A trial balance is a bookkeeping report that lists all general ledger account balances at a point in time, with total debits equalling total credits. It is used to verify mathematical accuracy before preparing financial statements. An out-of-balance trial balance indicates recording errors that must be resolved.' },

  { tier: 2, cluster: 'Accounting & Bookkeeping', stageRelevance: 'All Stages', relatedServiceSlug: 'bookkeeping',
    term: 'Cost of Goods Sold (COGS)',
    definition: 'COGS is the direct cost of producing the goods or services sold by a company — including raw materials, manufacturing labour, and direct overheads. For SaaS, COGS typically includes hosting costs, customer support, and third-party software. Revenue minus COGS equals Gross Profit. COGS is the starting point for all margin analysis.' },

  { tier: 2, cluster: 'Accounting & Bookkeeping', stageRelevance: 'All Stages',
    term: 'Depreciation',
    definition: 'Depreciation is the systematic allocation of a fixed asset\'s cost over its useful life. Under the Companies Act, India uses specific depreciation schedules. Depreciation reduces taxable profit (a tax benefit) but is a non-cash expense, so it is added back in cash flow analysis. High capex businesses carry large depreciation charges that can mask operating profitability.' },

  { tier: 2, cluster: 'Accounting & Bookkeeping', stageRelevance: 'All Stages',
    term: 'Deferred Revenue',
    definition: 'Deferred revenue is cash received from a customer before the service has been delivered — a liability on the balance sheet. Common in SaaS (annual subscriptions paid upfront) and manufacturing (advance payments). Revenue is recognised only when the service obligation is fulfilled, per Ind AS 115. High deferred revenue is a positive sign of customer commitment.' },

  { tier: 2, cluster: 'Accounting & Bookkeeping', stageRelevance: 'All Stages',
    term: 'Accrued Expense',
    definition: 'An accrued expense is a cost that has been incurred but not yet paid — for example, salaries payable at month-end or interest payable on a loan. Under accrual accounting, expenses are recorded when incurred, not when paid. Failing to accrue expenses leads to understated liabilities and overstated profits, distorting financial statements.' },

  { tier: 2, cluster: 'Accounting & Bookkeeping', stageRelevance: 'All Stages',
    term: 'Working Capital',
    definition: 'Working capital is the difference between current assets (cash, receivables, inventory) and current liabilities (payables, short-term debt). Positive working capital means a business can cover its short-term obligations. Negative working capital is a warning sign. Startups often underestimate working capital requirements, especially in B2B or manufacturing.' },

  { tier: 2, cluster: 'Accounting & Bookkeeping', stageRelevance: 'All Stages', relatedServiceSlug: 'bookkeeping',
    term: 'MIS Report',
    definition: 'A Management Information System (MIS) report is a monthly summary of a company\'s financial and operational performance, prepared for the management team, board, and investors. A well-structured MIS includes a P&L summary, cash flow update, key metrics dashboard, and variance vs. budget. It is the primary decision-making tool for a startup\'s leadership.' },

  { tier: 2, cluster: 'Accounting & Bookkeeping', stageRelevance: 'All Stages',
    term: 'Three Financial Statements',
    definition: 'The three core financial statements are the P&L Statement, Balance Sheet, and Cash Flow Statement. Together, they provide a complete picture of a company\'s financial health. The P&L shows performance over a period; the Balance Sheet shows position at a point in time; the Cash Flow Statement shows actual cash movements. All three are required for annual ROC filings and audits.' },

  { tier: 1, cluster: 'Accounting & Bookkeeping', stageRelevance: 'All Stages', relatedServiceSlug: 'bookkeeping',
    term: 'Statutory Audit',
    definition: 'A statutory audit is a legally mandated independent examination of a company\'s financial records by a Chartered Accountant. Under the Companies Act 2013, every Private Limited Company must get its accounts audited annually. The auditor issues an opinion on whether the financial statements present a "true and fair view." A clean audit report is a prerequisite for most investors and lenders.' },

  { tier: 1, cluster: 'Accounting & Bookkeeping', stageRelevance: 'All Stages', relatedServiceSlug: 'bookkeeping',
    term: 'Accountant',
    definition: 'An accountant is a professional trained in recording, classifying, and summarising financial transactions, preparing financial statements, and advising on financial matters. In India, a Chartered Accountant (CA) is a licensed professional with the highest accounting qualification. Startups should engage a professional accountant from day one to avoid costly errors and penalties.' },

  // ─── Virtual CFO & Financial Management ──────────────────────────────────────
  { tier: 1, cluster: 'Virtual CFO & Financial Management', stageRelevance: 'All Stages', relatedServiceSlug: 'virtual-cfo',
    term: 'Virtual CFO',
    definition: 'A Virtual CFO (vCFO) provides the strategic financial leadership of a full-time CFO on a part-time, outsourced basis. Services typically include financial modelling, fundraising advisory, board reporting, cash flow management, and compliance oversight. For startups that cannot afford a ₹40–80 lakh annual in-house CFO, a vCFO delivers equivalent expertise at 10–20% of the cost.' },

  { tier: 1, cluster: 'Virtual CFO & Financial Management', stageRelevance: 'Seed', relatedServiceSlug: 'pitch-deck-financial-modelling',
    term: 'Financial Model',
    definition: 'A financial model is a spreadsheet-based representation of a company\'s financial performance, built to forecast future results under different assumptions. A startup financial model typically includes revenue projections (by cohort or product), cost structure, headcount plan, cash flow forecast, and funding requirements. It is essential for fundraising, board meetings, and strategic planning.' },

  { tier: 2, cluster: 'Virtual CFO & Financial Management', stageRelevance: 'All Stages', relatedServiceSlug: 'virtual-cfo',
    term: 'Key Performance Indicator (KPI)',
    definition: 'KPIs are quantifiable metrics used to evaluate success against targets. Every startup should define a North Star metric (the one metric that best captures core value delivery) plus 5–10 supporting KPIs. KPIs should be specific, measurable, and reviewed monthly. Common startup KPIs include MRR growth, churn, CAC, LTV:CAC, and gross margin.' },

  { tier: 2, cluster: 'Virtual CFO & Financial Management', stageRelevance: 'All Stages', relatedServiceSlug: 'virtual-cfo',
    term: 'Budget vs. Actual Analysis',
    definition: 'Budget vs. actual analysis compares planned financial targets to actual results each month, identifying variances. Large, unexplained variances signal either poor planning or operational issues. A disciplined variance analysis process — reviewing causes and correcting course — is the hallmark of a well-run finance function.' },

  { tier: 2, cluster: 'Virtual CFO & Financial Management', stageRelevance: 'Seed', relatedServiceSlug: 'virtual-cfo',
    term: 'Cash Flow Forecasting',
    definition: 'Cash flow forecasting projects the expected cash inflows and outflows over a future period (typically 13 weeks or 12 months) to anticipate liquidity gaps. A 13-week rolling cash flow forecast is the most critical tool for seed-stage startups. It enables founders to spot a cash crunch 2–3 months in advance, when corrective action is still possible.' },

  { tier: 2, cluster: 'Virtual CFO & Financial Management', stageRelevance: 'Growth', relatedServiceSlug: 'virtual-cfo',
    term: 'Sensitivity Analysis',
    definition: 'Sensitivity analysis tests how financial outputs change under different assumptions — for example, what happens to runway if revenue grows at 10% vs. 30%, or if a key cost doubles. It helps management understand the risk profile of the business and prepare contingency plans. Investors expect founders to understand their model\'s key sensitivities.' },

  // ─── GST & Indirect Tax ───────────────────────────────────────────────────────
  { tier: 1, cluster: 'GST & Indirect Tax', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'GST',
    definition: 'Goods and Services Tax (GST) is India\'s unified indirect tax, introduced in July 2017, replacing a complex web of central and state levies. GST is charged on the supply of goods and services at rates of 0%, 5%, 12%, 18%, or 28%. Every business with annual turnover above ₹20 lakhs (₹10 lakhs in some states) must register. Monthly GSTR-1 and GSTR-3B filings are mandatory for registered businesses.' },

  { tier: 1, cluster: 'GST & Indirect Tax', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'Input Tax Credit (ITC)',
    definition: 'ITC allows a business to reduce the GST it owes on sales by the GST it has already paid on purchases. For example, if you pay ₹18,000 GST on a supplier invoice and collect ₹25,000 GST on your own sales, you only remit ₹7,000 to the government. ITC is one of the most valuable cash flow levers in GST — but claiming incorrect ITC is one of the most common penalty triggers.' },

  { tier: 1, cluster: 'GST & Indirect Tax', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'GSTR-1',
    definition: 'GSTR-1 is the monthly or quarterly GST return reporting all outward supplies (sales) made during the period. It must be filed by the 11th of the following month for monthly filers. GSTR-1 data feeds into the buyer\'s GSTR-2B, which determines how much ITC they can claim — so filing accurately and on time directly affects your customers\' GST compliance.' },

  { tier: 1, cluster: 'GST & Indirect Tax', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'GSTR-3B',
    definition: 'GSTR-3B is the monthly summary return where businesses declare their total GST liability, claim ITC, and pay net GST dues. It must be filed by the 20th of the following month. While GSTR-1 captures invoice-level detail, GSTR-3B is the payment return. Mismatches between GSTR-1 and GSTR-3B are a common GST audit trigger.' },

  { tier: 2, cluster: 'GST & Indirect Tax', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'Reverse Charge Mechanism (RCM)',
    definition: 'Under RCM, the recipient of certain goods or services is liable to pay GST instead of the supplier. This applies to purchases from unregistered dealers above ₹5,000 per day, and to specific notified categories like legal services and freight. Missing RCM liabilities is a frequent cause of GST penalties for startups.' },

  { tier: 2, cluster: 'GST & Indirect Tax', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'E-Invoice',
    definition: 'E-invoicing (Electronic Invoicing) is the system mandated by GSTN requiring businesses above a specified turnover to generate invoices through the government\'s Invoice Registration Portal (IRP). The IRP validates the invoice and generates a unique IRN and QR code. The threshold has progressively reduced — as of 2024, businesses with ₹5 Cr+ turnover must use e-invoicing.' },

  { tier: 2, cluster: 'GST & Indirect Tax', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'HSN Code',
    definition: 'HSN (Harmonised System of Nomenclature) is an internationally recognised 6–8 digit code classifying goods for GST purposes. The GST rate applicable to a product is determined by its HSN code. Incorrect HSN classification leads to wrong tax rates — causing either underpayment (penalty risk) or overpayment (working capital loss). Businesses with ₹5 Cr+ turnover must mandatorily report HSN codes.' },

  { tier: 2, cluster: 'GST & Indirect Tax', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'Composition Scheme',
    definition: 'The GST Composition Scheme allows small businesses (turnover up to ₹1.5 Cr for goods, ₹50 lakhs for services) to pay GST at a flat rate (1–5%) without maintaining detailed records. The trade-off: composition dealers cannot claim ITC and cannot charge GST on invoices, making them unattractive B2B suppliers. It is suited for purely B2C, local businesses.' },

  { tier: 2, cluster: 'GST & Indirect Tax', stageRelevance: 'Growth', relatedServiceSlug: 'regulatory-compliances',
    term: 'Letter of Undertaking (LUT)',
    definition: 'An LUT is a declaration filed on the GST portal by an exporter, allowing them to export goods or services without paying IGST upfront (which would later be refunded). Without an LUT, exporters must pay IGST and then claim a refund — blocking working capital for 3–6 months. Filing the LUT at the start of each financial year is a critical cash flow step for export-oriented startups.' },

  { tier: 2, cluster: 'GST & Indirect Tax', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'GSTIN',
    definition: 'GSTIN is the 15-digit Goods and Services Tax Identification Number assigned to every GST-registered business. It encodes the state code (first 2 digits), PAN (next 10), entity number in state, and a check digit. Quoting an invalid GSTIN on an invoice invalidates ITC for the buyer — making GSTIN validation a critical step in accounts payable.' },

  { tier: 2, cluster: 'GST & Indirect Tax', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'SAC Code',
    definition: 'SAC (Services Accounting Code) is the GST equivalent of HSN codes, specifically for classifying services. All service invoices must carry the relevant SAC code. For example, IT services are SAC 9983, consulting services are SAC 9983, and financial services are SAC 9971. Correct SAC coding ensures the right GST rate is applied and avoids audit risk.' },

  { tier: 2, cluster: 'GST & Indirect Tax', stageRelevance: 'Growth', relatedServiceSlug: 'regulatory-compliances',
    term: 'GSTR-9',
    definition: 'GSTR-9 is the Annual GST Return, reconciling all monthly/quarterly filings for the financial year. It is mandatory for businesses above ₹2 Cr turnover. GSTR-9C is the reconciliation statement certified by a CA, required for businesses above ₹5 Cr. Late GSTR-9 filing attracts a daily penalty of ₹200 (₹100 CGST + ₹100 SGST).' },

  // ─── Income Tax & Direct Tax ──────────────────────────────────────────────────
  { tier: 1, cluster: 'Income Tax & Direct Tax', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'Income Tax Return (ITR)',
    definition: 'An ITR is a form filed with the Income Tax Department declaring a company\'s income, expenses, and the resulting tax liability for a financial year. For companies, the deadline is October 31st if a tax audit is required, and July 31st if not. Late filing attracts interest under Sections 234A, 234B, and 234C, plus penalties. All companies must file ITR regardless of profit or loss.' },

  { tier: 1, cluster: 'Income Tax & Direct Tax', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'Advance Tax',
    definition: 'Advance tax requires taxpayers whose total tax liability exceeds ₹10,000 in a year to pay tax in four quarterly instalments (June, September, December, March) rather than in a lump sum at year-end. Failing to pay advance tax on time triggers interest charges under Section 234B and 234C. Startups often underestimate advance tax obligations when they first turn profitable.' },

  { tier: 1, cluster: 'Income Tax & Direct Tax', stageRelevance: 'Growth', relatedServiceSlug: 'regulatory-compliances',
    term: 'Tax Audit',
    definition: 'A tax audit under Section 44AB of the Income Tax Act is mandatory for businesses with annual gross receipts exceeding ₹1 Cr (₹10 Cr if cash transactions are below 5%). A Chartered Accountant conducts the audit and files Form 3CA/3CB with the ITR. The tax audit report verifies that the tax return is accurate and disclosures are complete.' },

  { tier: 2, cluster: 'Income Tax & Direct Tax', stageRelevance: 'Growth', relatedServiceSlug: 'regulatory-compliances',
    term: 'Transfer Pricing',
    definition: 'Transfer pricing rules govern the prices charged on transactions between related parties (e.g., an Indian subsidiary and its foreign parent). The Income Tax Act requires these transactions to be at arm\'s length — i.e., at prices a third party would pay. Non-compliance triggers significant adjustments and penalties. Startups receiving services from a foreign parent must be particularly careful.' },

  { tier: 2, cluster: 'Income Tax & Direct Tax', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'Form 26AS',
    definition: 'Form 26AS is a consolidated annual tax statement from the Income Tax Department, showing all TDS deducted against a taxpayer\'s PAN, advance tax paid, and other tax credits. Reconciling your books against Form 26AS before filing the ITR is essential — mismatches delay refunds and trigger scrutiny notices.' },

  { tier: 2, cluster: 'Income Tax & Direct Tax', stageRelevance: 'Growth', relatedServiceSlug: 'regulatory-compliances',
    term: 'Minimum Alternate Tax (MAT)',
    definition: 'MAT ensures that companies with large book profits but low taxable income (due to deductions) pay a minimum tax. Under MAT, companies pay tax at 15% of book profit if it exceeds their regular income tax. MAT credit can be carried forward for 15 years and used when regular tax exceeds MAT in future years. Startups with large ESOP expenses or depreciation should track their MAT exposure.' },

  { tier: 2, cluster: 'Income Tax & Direct Tax', stageRelevance: 'Growth',
    term: 'Capital Gains Tax',
    definition: 'Capital gains tax applies to the profit from selling a capital asset like shares, property, or a business. Short-term capital gains (held < 24 months for unlisted shares) are taxed at slab rates. Long-term capital gains (held > 24 months) on unlisted securities are taxed at 20% with indexation. Founders and investors must plan for capital gains on exit events.' },

  // ─── TDS & Payroll ────────────────────────────────────────────────────────────
  { tier: 1, cluster: 'TDS & Payroll', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'TDS',
    definition: 'Tax Deducted at Source (TDS) is a system where the payer deducts income tax from payments (salary, professional fees, rent, interest) before disbursing them. The deducted amount is deposited with the government by the 7th of the following month. Failure to deduct or deposit TDS on time attracts interest at 1–1.5% per month plus penalties. TDS is one of the most common compliance failures for early-stage startups.' },

  { tier: 1, cluster: 'TDS & Payroll', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'Employee Provident Fund (EPF)',
    definition: 'EPF is a mandatory retirement savings scheme for employees in India. Both employee and employer contribute 12% of the employee\'s basic salary to the EPF account. Employer contributions above ₹1,500/month also include an ESI component. Startups with 20+ employees must register with EPFO. Late payment of EPF contributions attracts damages up to 25% of the dues.' },

  { tier: 1, cluster: 'TDS & Payroll', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'Employees\' State Insurance (ESI)',
    definition: 'ESI is a social security scheme providing medical and financial benefits to employees earning up to ₹21,000 per month. The employer contributes 3.25% of gross wages and the employee contributes 0.75%. Registration is mandatory for establishments with 10+ employees (20+ in some states). ESI provides employees with healthcare, maternity benefits, and disability coverage.' },

  { tier: 2, cluster: 'TDS & Payroll', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'Payroll',
    definition: 'Payroll is the process of calculating and disbursing employee salaries, including deductions for TDS, PF, ESI, and professional tax, and depositing statutory dues with the government. A monthly payroll cycle involves: approving attendance → computing gross pay → applying deductions → disbursing net pay → filing returns. Payroll errors are legally risky and damaging to employee trust.' },

  { tier: 2, cluster: 'TDS & Payroll', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'Cost to Company (CTC)',
    definition: 'CTC is the total annual cost of an employee to the employer, including gross salary, employer PF/ESI contributions, gratuity provisions, and any other benefits. CTC is always higher than the employee\'s take-home salary. Startups should structure salary components carefully — a high basic salary means high PF contributions, while allowances like HRA reduce tax liability for employees.' },

  { tier: 2, cluster: 'TDS & Payroll', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'Professional Tax',
    definition: 'Professional tax is a state-level tax levied on individuals earning a salary or practising a profession. It is deducted from the employee\'s salary and remitted to the state government. Rates vary by state — Maharashtra levies ₹2,500 per year on employees earning above ₹10,000/month. While small in amount, non-compliance with professional tax can lead to regulatory action.' },

  { tier: 2, cluster: 'TDS & Payroll', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'Form 16',
    definition: 'Form 16 is a TDS certificate issued by an employer to employees, certifying the amount of TDS deducted and deposited with the government. Part A shows the TDS deducted, and Part B shows the salary breakup and deductions claimed. Employers must issue Form 16 by June 15th after each financial year. Employees use it to file their personal income tax return.' },

  // ─── ROC, Company Law & FEMA ──────────────────────────────────────────────────
  { tier: 1, cluster: 'ROC, Company Law & FEMA', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'Registrar of Companies (ROC)',
    definition: 'The Registrar of Companies is a government office under the Ministry of Corporate Affairs (MCA) that registers companies and LLPs, maintains their records, and enforces compliance with the Companies Act 2013. All companies must file annual returns (AOC-4 and MGT-7) and any changes (director, address, share capital) with the ROC. Non-compliance leads to penalties and director disqualification.' },

  { tier: 1, cluster: 'ROC, Company Law & FEMA', stageRelevance: 'Pre-Seed', relatedServiceSlug: 'business-setup',
    term: 'Private Limited Company',
    definition: 'A Private Limited Company (Pvt Ltd) is the most common legal structure for funded Indian startups. It offers limited liability protection to shareholders, easy fundraising via equity, and a separate legal identity. Minimum requirements: 2 directors, 2 shareholders, ₹1 lakh authorised capital. The Pvt Ltd structure is a prerequisite for receiving VC/angel investment and for DPIIT Startup India registration.' },

  { tier: 1, cluster: 'ROC, Company Law & FEMA', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'Annual General Meeting (AGM)',
    definition: 'An AGM is a mandatory annual meeting of a company\'s shareholders to approve audited financial statements, declare dividends, appoint directors, and fix auditors\' remuneration. For private companies, the AGM must be held within 6 months of the financial year end (by September 30th for FY ending March 31st). Failure to hold an AGM attracts penalties on the company and directors.' },

  { tier: 2, cluster: 'ROC, Company Law & FEMA', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'ROC Filing AOC-4',
    definition: 'AOC-4 is the annual form filed with the ROC containing the company\'s audited financial statements (Balance Sheet, P&L, Auditor\'s Report, and Board\'s Report). It must be filed within 30 days of the AGM. Late filing attracts additional fees of ₹100 per day, with no upper cap. Persistent non-filing leads to the company being marked as a defaulting company by MCA.' },

  { tier: 2, cluster: 'ROC, Company Law & FEMA', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'ROC Filing MGT-7',
    definition: 'MGT-7 is the Annual Return filed with the ROC containing details of the company\'s shareholders, directors, and capital structure as of the financial year end. It must be filed within 60 days of the AGM. MGT-7 is a public document — investors and competitors can access it. Accuracy is critical, especially for cap table information.' },

  { tier: 2, cluster: 'ROC, Company Law & FEMA', stageRelevance: 'Pre-Seed', relatedServiceSlug: 'business-setup',
    term: 'Director Identification Number (DIN)',
    definition: 'A DIN is a unique 8-digit number issued by MCA to every person intending to become a director of an Indian company. It is required before a person can be appointed as a director. Application is made in Form DIR-3. All directors must also complete annual DIR-3 KYC by September 30th, or their DIN gets deactivated, blocking them from signing any company forms.' },

  { tier: 2, cluster: 'ROC, Company Law & FEMA', stageRelevance: 'Pre-Seed', relatedServiceSlug: 'business-setup',
    term: 'Memorandum and Articles of Association (MOA & AOA)',
    definition: 'The MOA is the charter document defining the company\'s name, registered office, objectives, and authorised capital. The AOA is the internal rulebook governing how the company is managed — board meetings, voting rights, share transfers, and director powers. Both are filed during incorporation and can only be changed by a special resolution of shareholders.' },

  { tier: 1, cluster: 'ROC, Company Law & FEMA', stageRelevance: 'Growth', relatedServiceSlug: 'corporate-law',
    term: 'FEMA',
    definition: 'The Foreign Exchange Management Act (FEMA) governs all cross-border transactions involving foreign exchange in India. For startups, FEMA applies to receiving foreign investment (FDI), making overseas payments for software or services, and taking up foreign loans. Every foreign currency transaction must be reported to the RBI within specified timelines. FEMA violations attract penalties of up to 3x the amount involved.' },

  { tier: 2, cluster: 'ROC, Company Law & FEMA', stageRelevance: 'Growth', relatedServiceSlug: 'corporate-law',
    term: 'Foreign Direct Investment (FDI)',
    definition: 'FDI is investment by a foreign entity into an Indian company by acquiring equity shares. Most sectors allow 100% FDI under the automatic route (no government approval required). Startups receiving foreign investment must file Form FC-GPR with the RBI within 30 days of issuing shares. Failure to report is a FEMA violation. Foreign VC investment typically comes via FDI.' },

  { tier: 2, cluster: 'ROC, Company Law & FEMA', stageRelevance: 'Growth', relatedServiceSlug: 'corporate-law',
    term: 'Foreign Inward Remittance Certificate (FIRC)',
    definition: 'A FIRC is a certificate issued by the recipient\'s bank confirming that a foreign currency payment has been received in India. It is the primary evidence of foreign exchange receipt, required for GST zero-rating of exports and for reporting FDI to the RBI. Exporters and startups receiving foreign investment must diligently collect and archive FIRCs.' },

  { tier: 2, cluster: 'ROC, Company Law & FEMA', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'Director\'s KYC',
    definition: 'Director\'s KYC (Form DIR-3 KYC) is an annual compliance requirement for all directors holding a DIN. It must be filed by September 30th each year. Directors who fail to complete KYC have their DIN deactivated, preventing them from signing any company documents or filings until reactivation. Reactivation requires payment of a ₹5,000 penalty.' },

  { tier: 2, cluster: 'ROC, Company Law & FEMA', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'Shareholders\' Agreement (SHA)',
    definition: 'A SHA is a contract between the company\'s shareholders governing their rights and obligations — including voting rights, share transfer restrictions, anti-dilution protections, drag-along/tag-along rights, and information rights. In funded startups, the SHA also includes investor protective provisions. It sits alongside the MOA/AOA and overrides them between the parties in most situations.' },

  // ─── Fundraising & Valuation ──────────────────────────────────────────────────
  { tier: 1, cluster: 'Fundraising & Valuation', stageRelevance: 'All Stages', relatedServiceSlug: 'fundraising',
    term: 'Valuation',
    definition: 'Startup valuation is the process of determining what a company is worth at a given point in time. For early-stage startups, valuation is more art than science — based on comparables, team quality, market size, and investor sentiment. Common methods include the Comparable Company Analysis, DCF (rarely used for startups), and the First Chicago Method. Valuation determines dilution: the higher the valuation, the less equity you give up for the same investment amount.' },

  { tier: 1, cluster: 'Fundraising & Valuation', stageRelevance: 'Seed', relatedServiceSlug: 'fundraising',
    term: 'Pre-Money Valuation',
    definition: 'Pre-money valuation is the value of the company immediately before an investment round. Post-money valuation = Pre-money + Investment amount. The pre-money valuation determines the investor\'s ownership stake: Ownership % = Investment ÷ Post-money valuation. For example, a ₹5 Cr investment into a company with ₹20 Cr pre-money valuation gives the investor a 20% stake.' },

  { tier: 1, cluster: 'Fundraising & Valuation', stageRelevance: 'Seed', relatedServiceSlug: 'fundraising',
    term: 'Cap Table',
    definition: 'A capitalisation table (cap table) is a spreadsheet listing all shareholders, their ownership percentages, and how those stakes change through investment rounds and option grants. A clean, accurate cap table is critical for fundraising — investors will scrutinise it during due diligence. Common cap table mistakes include forgotten co-founder equity, unaccounted ESOP grants, and unresolved convertible note conversions.' },

  { tier: 1, cluster: 'Fundraising & Valuation', stageRelevance: 'Seed', relatedServiceSlug: 'fundraising',
    term: 'Term Sheet',
    definition: 'A term sheet is a non-binding document outlining the key terms and conditions of a proposed investment. Key terms include valuation, investment amount, investor rights (board seat, protective provisions, information rights), and liquidation preference. While non-binding, term sheets set the framework for binding legal agreements. Never accept a term sheet without reviewing it with an experienced startup lawyer or advisor.' },

  { tier: 1, cluster: 'Fundraising & Valuation', stageRelevance: 'Pre-Seed', relatedServiceSlug: 'fundraising',
    term: 'Angel Investor',
    definition: 'Angel investors are high-net-worth individuals who invest their personal capital into early-stage startups, typically at the pre-seed or seed stage, in exchange for equity. In India, angel networks like Indian Angel Network, Lead Angels, and Mumbai Angels pool capital to make larger investments. Angels often provide mentorship and networks in addition to capital.' },

  { tier: 1, cluster: 'Fundraising & Valuation', stageRelevance: 'Seed', relatedServiceSlug: 'fundraising',
    term: 'Venture Capital',
    definition: 'Venture Capital (VC) is institutional investment in high-growth startups in exchange for equity, typically from a pooled fund. VCs raise funds from LPs (limited partners) and deploy capital into startups, seeking returns through IPOs or M&A exits. Major India-focused VC funds include Sequoia/Peak XV, Accel, Matrix Partners, and Elevation Capital. VCs typically invest at Series A and beyond.' },

  { tier: 2, cluster: 'Fundraising & Valuation', stageRelevance: 'Pre-Seed', relatedServiceSlug: 'fundraising',
    term: 'Convertible Note',
    definition: 'A convertible note is a short-term debt instrument that converts into equity at a future funding round, typically at a discount or with a valuation cap. It allows startups to raise capital quickly without agreeing on a valuation upfront. The note converts to shares when the company raises its next priced round. Widely used for bridge rounds and pre-seed fundraising.' },

  { tier: 2, cluster: 'Fundraising & Valuation', stageRelevance: 'Pre-Seed', relatedServiceSlug: 'fundraising',
    term: 'SAFE Note',
    definition: 'A SAFE (Simple Agreement for Future Equity) is an investment instrument that gives investors the right to receive equity in a future priced round. Unlike a convertible note, a SAFE has no interest rate or maturity date. Created by Y Combinator, SAFEs have become popular in India\'s startup ecosystem for fast, clean pre-seed investments. Key terms: valuation cap and discount rate.' },

  { tier: 2, cluster: 'Fundraising & Valuation', stageRelevance: 'Growth', relatedServiceSlug: 'fundraising',
    term: 'Liquidation Preference',
    definition: 'A liquidation preference determines the order and amount that investors get paid in an exit (acquisition or shutdown) before common shareholders (founders and employees). A 1x non-participating liquidation preference (market standard) means investors get their money back first; remaining proceeds are shared with all shareholders. Participating preferred is founder-unfriendly — investors get their preference AND participate in remaining proceeds.' },

  { tier: 2, cluster: 'Fundraising & Valuation', stageRelevance: 'Growth', relatedServiceSlug: 'fundraising',
    term: 'Anti-Dilution Protection',
    definition: 'Anti-dilution provisions protect investors from dilution if the company raises a future round at a lower valuation (a "down round"). The most common form — weighted average anti-dilution — adjusts the investor\'s conversion price to a weighted average of old and new share prices. The more aggressive "full ratchet" anti-dilution can be severely founder-unfriendly in a down round.' },

  { tier: 2, cluster: 'Fundraising & Valuation', stageRelevance: 'Growth', relatedServiceSlug: 'fundraising',
    term: 'Data Room',
    definition: 'A data room is a secure, organised repository of all key company documents shared with investors during due diligence. A well-organised data room signals professionalism and speeds up the process. Standard data room folders include Corporate, Financials, Legal, Team, and Product/Technology. Virtual data rooms on platforms like Google Drive, Notion, or Datasite are common for Indian startups.' },

  { tier: 2, cluster: 'Fundraising & Valuation', stageRelevance: 'Growth', relatedServiceSlug: 'fundraising',
    term: 'Pro-Rata Rights',
    definition: 'Pro-rata rights give existing investors the right to participate in future funding rounds to maintain their ownership percentage. For example, an investor with 10% ownership and pro-rata rights can invest enough in the next round to retain that 10%. Pro-rata rights are valuable for investors in successful companies but can complicate round mechanics if too many investors exercise them simultaneously.' },

  { tier: 2, cluster: 'Fundraising & Valuation', stageRelevance: 'Growth', relatedServiceSlug: 'fundraising',
    term: 'Revenue-Based Financing',
    definition: 'Revenue-Based Financing (RBF) is a non-dilutive funding method where investors provide capital in exchange for a percentage of future revenues until a repayment multiple (typically 1.5–2.5x) is reached. RBF is ideal for profitable or near-profitable startups with predictable revenue who want to avoid equity dilution. Providers in India include Velocity, GetVantage, and Recur Club.' },

  { tier: 1, cluster: 'Fundraising & Valuation', stageRelevance: 'Growth', relatedServiceSlug: 'investor-due-diligence',
    term: 'Due Diligence',
    definition: 'Due diligence is the comprehensive investigation an investor conducts before completing an investment — covering financials, legal, compliance, product, team, and market. Financial due diligence specifically verifies that the company\'s accounts are accurate, compliance is clean, and there are no undisclosed liabilities. Clean books and compliance history dramatically speed up this process; gaps can kill deals.' },

  { tier: 2, cluster: 'Fundraising & Valuation', stageRelevance: 'Seed', relatedServiceSlug: 'pitch-deck-financial-modelling',
    term: 'Pitch Deck',
    definition: 'A pitch deck is a 10–15 slide presentation used to introduce a startup to investors. The classic structure: Problem, Solution, Market, Product, Business Model, Traction, Team, Financials, and The Ask. A great pitch deck tells a compelling narrative, shows defensible traction, and makes the opportunity viscerally clear. The deck opens doors; the data room closes deals.' },

  { tier: 2, cluster: 'Fundraising & Valuation', stageRelevance: 'All Stages',
    term: 'Drag-Along Rights',
    definition: 'Drag-along rights allow majority shareholders (typically investors) to force minority shareholders to join in selling the company on the same terms. This prevents minority shareholders from blocking an acquisition. Founders should negotiate drag-along thresholds carefully — a threshold too low gives investors disproportionate exit control.' },

  // ─── ESOP & Employee Structuring ──────────────────────────────────────────────
  { tier: 1, cluster: 'ESOP & Employee Structuring', stageRelevance: 'Seed', relatedServiceSlug: 'corporate-law',
    term: 'ESOP',
    definition: 'An Employee Stock Option Plan (ESOP) gives employees the right to buy shares in the company at a predetermined exercise price, usually after a vesting period. ESOPs align employee incentives with company growth and are critical for attracting and retaining talent when a startup cannot match corporate salaries. In India, ESOPs trigger tax (as perquisite) at the time of exercise and again as capital gains at the time of sale.' },

  { tier: 1, cluster: 'ESOP & Employee Structuring', stageRelevance: 'Seed', relatedServiceSlug: 'corporate-law',
    term: 'Vesting Schedule',
    definition: 'A vesting schedule defines how an employee earns their ESOP grants over time. The standard in India is a 4-year vesting schedule with a 1-year cliff — meaning no shares vest in the first year, and after the cliff, shares vest monthly or quarterly for the next 3 years. Vesting protects the company if an employee leaves early. Founders\' shares are also subject to vesting in investor-backed companies.' },

  { tier: 2, cluster: 'ESOP & Employee Structuring', stageRelevance: 'Seed', relatedServiceSlug: 'corporate-law',
    term: 'Cliff',
    definition: 'A cliff is the minimum period an employee must work before any ESOP shares vest. The standard cliff is 1 year — no vesting before the anniversary, then a large batch vests at the cliff date, with the remainder vesting monthly or quarterly. The cliff protects the company from short-tenure employees walking away with significant equity.' },

  { tier: 2, cluster: 'ESOP & Employee Structuring', stageRelevance: 'Seed', relatedServiceSlug: 'corporate-law',
    term: 'ESOP Pool',
    definition: 'The ESOP pool (or option pool) is a block of shares reserved for future employee grants. Investors typically require a 10–15% option pool to be created (at the founders\' expense) before or as part of an investment round — a practice called the "option pool shuffle." The pool must be large enough to attract key hires at each stage without requiring constant shareholder approval.' },

  { tier: 2, cluster: 'ESOP & Employee Structuring', stageRelevance: 'Growth', relatedServiceSlug: 'corporate-law',
    term: 'Perquisite Tax on ESOP',
    definition: 'In India, when an employee exercises their ESOP options, the difference between the Fair Market Value (FMV) of shares and the exercise price is treated as a "perquisite" — a form of salary — and taxed at the employee\'s income tax slab rate. For startups, the employer must deduct TDS on this perquisite at the time of exercise. This creates an immediate tax liability for employees even before they sell the shares.' },

  { tier: 2, cluster: 'ESOP & Employee Structuring', stageRelevance: 'Growth', relatedServiceSlug: 'corporate-law',
    term: 'Founder Vesting',
    definition: 'Founder vesting is a requirement (typically imposed by investors) that co-founders\' shares vest over time, usually on the same 4-year/1-year cliff schedule as employee ESOPs. This protects the company if a co-founder exits early, ensuring their shares can be redistributed or recycled. Many co-founding teams implement founder vesting proactively before taking any investment.' },

  { tier: 2, cluster: 'ESOP & Employee Structuring', stageRelevance: 'Growth', relatedServiceSlug: 'corporate-law',
    term: 'Phantom Equity',
    definition: 'Phantom equity (or phantom stock) gives employees a cash bonus linked to the company\'s value without actually issuing real shares. It mimics the economic benefit of equity ownership without diluting the cap table or triggering regulatory requirements (like board approvals needed for real ESOPs). Commonly used for senior hires when actual ESOP pool is exhausted.' },

  { tier: 2, cluster: 'ESOP & Employee Structuring', stageRelevance: 'Growth',
    term: 'Intellectual Property Assignment',
    definition: 'An IP assignment agreement is a clause (or standalone contract) ensuring that all intellectual property created by an employee or contractor in relation to the company\'s business is owned by the company, not the individual. Without signed IP assignment agreements from all founders, employees, and contractors, a company\'s core technology assets may be legally contested — a fatal red flag for investors.' },

  // ─── Founder Problems & Penalties ─────────────────────────────────────────────
  { tier: 1, cluster: 'Founder Problems & Penalties', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'Director Disqualification',
    definition: 'Under Section 164(2) of the Companies Act, a director is automatically disqualified for 5 years if their company fails to file annual returns (AOC-4 or MGT-7) for 3 consecutive years, or fails to repay deposits or debentures. A disqualified director cannot be appointed as director of any other company during the disqualification period. This is one of the most severe consequences of ROC non-compliance.' },

  { tier: 1, cluster: 'Founder Problems & Penalties', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'GST Penalty',
    definition: 'GST penalties in India include late filing interest (18% p.a. on outstanding tax), late fees (₹50–₹200 per day), penalties for incorrect ITC claims (100–200% of wrongly claimed amount), and penalties for suppression of sales (up to 100% of tax due). The most common startup penalty is the interest on delayed GST payments — which compounds quickly if ignored for several months.' },

  { tier: 1, cluster: 'Founder Problems & Penalties', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'TDS Default',
    definition: 'A TDS default occurs when a company fails to deduct TDS, deposits TDS late, or files TDS returns late. Interest for non-deduction: 1% per month. Interest for late deposit after deduction: 1.5% per month. Additionally, the expense on which TDS was not deducted is disallowed as a deduction in the income tax return — effectively creating double taxation for the company.' },

  { tier: 2, cluster: 'Founder Problems & Penalties', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'ROC Strike-Off',
    definition: 'ROC strike-off (or Section 248 action) is the removal of a company\'s name from the MCA register by the ROC for prolonged non-compliance — typically 2+ years of non-filing of annual returns. Once struck off, the company ceases to exist legally. Directors of struck-off companies are automatically disqualified. Restoration is possible but requires NCLT proceedings and is time-consuming.' },

  { tier: 2, cluster: 'Founder Problems & Penalties', stageRelevance: 'All Stages',
    term: 'Demand Notice',
    definition: 'A demand notice is an official communication from the Income Tax Department or GST authority requiring a taxpayer to pay outstanding tax, interest, or penalty within a specified time. Ignoring a demand notice escalates to coercive recovery actions including bank account attachment, salary garnishment, and asset seizure. Demand notices must be responded to promptly — even if disputed.' },

  { tier: 2, cluster: 'Founder Problems & Penalties', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'Late Filing Penalty',
    definition: 'Late filing penalties apply across all compliance domains in India. ROC filings: ₹100 per day per form (no cap). GST returns: ₹50–₹200 per day. TDS returns: ₹200 per day (up to the TDS amount). Income tax: interest under Sections 234A, 234B, 234C. These penalties compound quickly — a company behind on 3 years of ROC filings can accumulate penalties of several lakhs.' },

  { tier: 2, cluster: 'Founder Problems & Penalties', stageRelevance: 'Growth', relatedServiceSlug: 'regulatory-compliances',
    term: 'Compounding',
    definition: 'Compounding is a process under the Companies Act and FEMA where a company voluntarily admits to a violation and pays a compounding fee to close the matter without prosecution. It is available for certain specified offences (not for fraud). Compounding is the standard way to resolve past FEMA violations (like delayed FC-GPR filing) before a fundraising round where clean compliance history is required.' },

  { tier: 2, cluster: 'Founder Problems & Penalties', stageRelevance: 'All Stages', relatedServiceSlug: 'regulatory-compliances',
    term: 'Startup India (DPIIT) Recognition',
    definition: 'DPIIT Startup India recognition gives eligible startups access to tax exemptions (Section 80IAC — 3-year tax holiday), angel tax exemption (Section 56(2)(viib)), fast-track patent examination, and self-certification of labour laws. Eligibility: incorporated < 10 years ago, annual turnover < ₹100 Cr, and working on innovative products. Registration is free and takes 2–5 working days on the Startup India portal.' },

];

export const ALL_GLOSSARY_TERMS: GlossaryTerm[] = ALL_GLOSSARY_DATA_RAW
  .map(item => ({
    ...item,
    slug: slugify(item.term)
  }))
  .sort((a, b) => a.term.localeCompare(b.term));

export const GLOSSARY_DATA_BY_CLUSTER = ALL_GLOSSARY_TERMS.reduce((acc, item) => {
    const cluster = item.cluster;
    if (!acc[cluster]) {
        acc[cluster] = [];
    }
    acc[cluster].push(item);
    return acc;
}, {} as Record<string, GlossaryTerm[]>);
