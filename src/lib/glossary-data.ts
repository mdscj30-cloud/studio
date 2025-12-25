
export type GlossaryTerm = {
  term: string;
  definition: string;
};

export const GLOSSARY_DATA: GlossaryTerm[] = [
    // A
    {
        term: 'A/B Testing',
        definition: 'A method of comparing two versions of a webpage or app against each other to determine which one performs better. It is a key practice in D2C and SaaS for optimizing conversion rates.'
    },
    {
        term: 'Accounting',
        definition: 'The systematic recording, reporting, and analysis of financial transactions of a business.'
    },
    {
        term: 'Accrual Basis Accounting',
        definition: 'An accounting method where revenue or expenses are recorded when a transaction occurs rather than when payment is received or made. This is the standard for most businesses.'
    },
    {
        term: 'Accrued Expense',
        definition: 'An expense that has been incurred but not yet paid. It is recorded as a liability on the balance sheet.'
    },
    {
        term: 'Accounts Payable (AP)',
        definition: 'The amount of money a company owes to its suppliers for goods and services purchased on credit.'
    },
    {
        term: 'Accounts Receivable (AR)',
        definition: 'The amount of money owed to a company by its customers for goods and services sold on credit.'
    },
    {
        term: 'Advance Tax',
        definition: 'Income tax paid in installments throughout the year instead of a lump-sum payment at year-end. It is mandatory for individuals and businesses with a tax liability exceeding a certain threshold.'
    },
    {
        term: 'Amortization',
        definition: 'The practice of spreading an intangible asset\'s cost over the asset\'s useful life. Similar to depreciation for tangible assets.'
    },
    {
        term: 'Angel Investor',
        definition: 'An affluent individual who provides capital for a business start-up, usually in exchange for convertible debt or ownership equity.'
    },
    {
        term: 'Annual General Meeting (AGM)',
        definition: 'A mandatory yearly meeting of a company\'s shareholders to discuss the financial statements, elect directors, and handle other corporate business.'
    },
    {
        term: 'Annual Recurring Revenue (ARR)',
        definition: 'A key metric for SaaS and subscription businesses, representing the value of the recurring revenue of a business\'s term subscriptions normalized for a single calendar year. Calculated as MRR * 12.'
    },
    {
        term: 'API (Application Programming Interface)',
        definition: 'A set of rules and protocols that allows different software applications to communicate with each other. Crucial for FinTech and SaaS integrations.'
    },
    {
        term: 'Assets',
        definition: 'Economic resources owned by a business that have future economic value. Can be current (cash, inventory) or non-current (property, equipment).'
    },
    {
        term: 'Assessee',
        definition: 'An individual or entity who is liable to pay taxes under the Income Tax Act.'
    },
    {
        term: 'Assessment Year (AY)',
        definition: 'The 12-month period starting from April 1st, during which a taxpayer\'s income from the previous year (Financial Year) is assessed and taxed.'
    },
    {
        term: 'Audit',
        definition: 'An official inspection of an organization\'s accounts, typically by an independent body, to ensure accuracy and compliance.'
    },
    {
        term: 'Average Order Value (AOV)',
        definition: 'A key D2C e-commerce metric calculated by dividing total revenue by the number of orders. Increasing AOV is a common growth strategy.'
    },
    
    // B
    {
        term: 'Balance Sheet',
        definition: 'A financial statement that reports a company\'s assets, liabilities, and shareholder equity at a specific point in time. It follows the formula: Assets = Liabilities + Equity.'
    },
    {
        term: 'Bank Reconciliation',
        definition: 'The process of matching the balances in a company\'s accounting records for a cash account to the corresponding information on a bank statement.'
    },
    {
        term: 'Bill of Materials (BOM)',
        definition: 'A comprehensive list of raw materials, components, and assemblies required to construct, manufacture, or repair a product. Essential for manufacturing businesses.'
    },
    {
        term: 'Bookkeeping',
        definition: 'The day-to-day process of recording financial transactions, including purchases, sales, receipts, and payments.'
    },
    {
        term: 'Bootstrapping',
        definition: 'Building and growing a company from personal finances or from the operating revenues of the new company, without relying on external or venture capital.'
    },
    {
        term: 'Breakeven Point',
        definition: 'The point at which total cost and total revenue are equal, meaning there is no net loss or gain. Any sales beyond this point contribute to profit.'
    },
    {
        term: 'Bridge Loan',
        definition: 'A short-term loan used to bridge the gap between major financing rounds or until a long-term financing option can be arranged.'
    },
    {
        term: 'Budgeting',
        definition: 'The process of creating a plan to spend your money. This spending plan is called a budget and helps in financial planning and control.'
    },
    {
        term: 'Burn Rate',
        definition: 'The rate at which a company is losing money, particularly relevant for startups before they become profitable. It is often quoted as a monthly figure (e.g., "Net Burn is ₹10 Lakhs per month").'
    },
    
    // C
    {
        term: 'Capital',
        definition: 'Financial assets or the financial value of assets, such as cash and machinery. It is the money or wealth needed to produce goods and services.'
    },
    {
        term: 'Capital Expenditure (CapEx)',
        definition: 'Funds used by a company to acquire, upgrade, and maintain physical assets such as property, buildings, an industrial plant, technology, or equipment.'
    },
    {
        term: 'Capital Gains Tax',
        definition: 'A tax on the profit realized on the sale of a non-inventory asset. The rate depends on whether the gain is short-term or long-term.'
    },
    {
        term: 'Capitalization Table (Cap Table)',
        definition: 'A spreadsheet or table that shows the equity capitalization for a company, detailing who owns what, how much they own, and at what valuation.'
    },
    {
        term: 'Cash Basis Accounting',
        definition: 'An accounting method in which revenue is recognized when cash is received, and expenses are recognized when cash is paid out. Simpler but less accurate for most businesses.'
    },
    {
        term: 'Cash Conversion Cycle (CCC)',
        definition: 'The length of time it takes for a company to convert its investments in inventory and other resources into cash. A key metric in e-commerce and manufacturing.'
    },
    {
        term: 'Cash Flow',
        definition: 'The net amount of cash and cash-equivalents being transferred into and out of a business. Positive cash flow indicates a company\'s liquidity is increasing.'
    },
    {
        term: 'Cash Flow Statement',
        definition: 'A financial statement that provides aggregate data regarding all cash inflows a company receives from its ongoing operations and external investment sources, as well as all cash outflows.'
    },
    {
        term: 'Chart of Accounts (COA)',
        definition: 'A financial organizational tool that provides a complete listing of every account in an accounting system.'
    },
    {
        term: 'Churn Rate',
        definition: 'The percentage of subscribers to a service who discontinue their subscriptions within a given time period. A critical metric for SaaS and other subscription businesses.'
    },
    {
        term: 'Compliance',
        definition: 'Adhering to a rule, such as a specification, policy, standard, or law. In business, this refers to following all applicable tax, labor, and corporate laws.'
    },
    {
        term: 'Composition Scheme',
        definition: 'A simplified GST scheme for small taxpayers. Businesses with a turnover below a certain threshold can opt-in to pay GST at a fixed rate, with fewer compliance requirements.'
    },
    {
        term: 'Convertible Note',
        definition: 'A form of short-term debt issued by a startup that converts into equity at a later date, typically during a future funding round.'
    },
    {
        term: 'Cost of Goods Sold (COGS)',
        definition: 'The direct costs of producing the goods sold by a company. This includes the cost of materials and labor directly used to create the good.'
    },
    {
        term: 'Customer Acquisition Cost (CAC)',
        definition: 'The total cost of sales and marketing efforts needed to acquire a single new customer. Calculated as (Total Sales & Marketing Spend) / (Number of New Customers).'
    },
    
    // D
    {
        term: 'D2C (Direct-to-Consumer)',
        definition: 'A business model where a brand or manufacturer sells its products directly to end customers, bypassing traditional retail intermediaries like distributors or wholesalers.'
    },
    {
        term: 'Data Room',
        definition: 'A secure online repository for storing and sharing sensitive company documents during fundraising, M&A, or audits. Key for due diligence.'
    },
    {
        term: 'Debt Financing',
        definition: 'Raising capital by borrowing money that must be repaid, usually with interest. Examples include bank loans and venture debt.'
    },
    {
        term: 'Deduction (Income Tax)',
        definition: 'An amount that can be subtracted from your gross income to lower the amount of income that is subject to tax. Common examples in India are Section 80C, 80D.'
    },
    {
        term: 'Depreciation',
        definition: 'An accounting method of allocating the cost of a tangible asset over its useful life to account for declines in value. It is a non-cash expense.'
    },
    {
        term: 'Digital Signature Certificate (DSC)',
        definition: 'A secure digital key that certifies the identity of the holder, issued by a Certifying Authority. Required for filing various forms with government bodies like ROC and Income Tax.'
    },
    {
        term: 'Dilution',
        definition: 'The reduction in existing shareholders\' ownership percentage of a company as new shares are issued, typically during a funding round or for an ESOP.'
    },
    {
        term: 'Director Identification Number (DIN)',
        definition: 'A unique identification number assigned to an individual who is or intends to be a director of a company, as per the Indian Companies Act.'
    },
    {
        term: 'Direct Tax',
        definition: 'A tax, such as income tax, which is levied on the income or profits of the person who pays it, rather than on goods or services.'
    },
    {
        term: 'Double-Entry Bookkeeping',
        definition: 'A fundamental accounting principle stating that every financial transaction has equal and opposite effects in at least two different accounts. It is used to satisfy the equation Assets = Liabilities + Equity.'
    },
    {
        term: 'Due Diligence',
        definition: 'An investigation, audit, or review performed to confirm the facts of a matter under consideration. In finance, it\'s the process investors undertake before funding a company.'
    },
    
    // E
    {
        term: 'EBITDA',
        definition: 'Earnings Before Interest, Taxes, Depreciation, and Amortization. A metric used to evaluate a company\'s operating performance without factoring in financing decisions, accounting decisions, or tax rates.'
    },
    {
        term: 'E-commerce',
        definition: 'The buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions.'
    },
    {
        term: 'Equity',
        definition: 'The value of an ownership interest in a company, representing the stake held by shareholders. It is the amount of money that would be returned to shareholders if all assets were liquidated and all debts repaid.'
    },
    {
        term: 'Equity Financing',
        definition: 'The process of raising capital by selling shares of the company to investors. In return for the investment, the shareholders receive an ownership interest in the company.'
    },
    {
        term: 'ESOP (Employee Stock Option Plan)',
        definition: 'A plan that gives employees the right to buy a certain number of shares in the company at a predetermined price, after a vesting period. Used to attract and retain talent.'
    },
    {
        term: 'E-way Bill',
        definition: 'An electronic document required under the GST regime for the movement of goods of a certain value from one place to another, either inter-state or intra-state.'
    },
    
    // F
    {
        term: 'FEMA (Foreign Exchange Management Act)',
        definition: 'An act that governs cross-border transactions, foreign investments, and management of foreign exchange in India.'
    },
    {
        term: 'Financial Model',
        definition: 'A tool, typically built in a spreadsheet, used to forecast a business\'s financial performance. It includes assumptions, calculations, and outputs like projected financial statements.'
    },
    {
        term: 'Financial Statement',
        definition: 'Formal records of the financial activities of a business. The three main financial statements are the Balance Sheet, Income Statement, and Cash Flow Statement.'
    },
    {
        term: 'Financial Year (FY)',
        definition: 'The 12-month period for which a company prepares its financial accounts. In India, the FY runs from April 1st to March 31st.'
    },
    {
        term: 'FinTech',
        definition: 'A portmanteau of "financial technology," it describes new tech that seeks to improve and automate the delivery and use of financial services.'
    },
    {
        term: 'Fixed Asset',
        definition: 'A long-term tangible piece of property or equipment that a firm owns and uses in its operations to generate income. Not expected to be consumed or converted into cash within a year.'
    },
    {
        term: 'Form 16',
        definition: 'A certificate issued by an employer in India that provides details of the salary paid to an employee and the Tax Deducted at Source (TDS) from that salary.'
    },
    {
        term: 'Form 26AS',
        definition: 'A consolidated annual tax statement that shows details of tax deducted on your behalf, tax collected, advance tax paid, and self-assessment tax payments.'
    },
    {
        term: 'Founder Vesting',
        definition: 'A mechanism where founders earn their equity over a period of time, typically 4 years with a 1-year cliff. It protects the company if a founder leaves early.'
    },
    
    // G
    {
        term: 'General Ledger (GL)',
        definition: 'A master accounting document providing a complete record of all financial transactions over the life of a company.'
    },
    {
        term: 'Go-to-Market (GTM) Strategy',
        definition: 'An action plan that specifies how a company will reach target customers and achieve competitive advantage.'
    },
    {
        term: 'Goods and Services Tax (GST)',
        definition: 'An indirect tax used in India on the supply of goods and services. It is a comprehensive, multistage, destination-based tax that has replaced many indirect taxes.'
    },
    {
        term: 'Gross Margin',
        definition: 'The difference between revenue and Cost of Goods Sold (COGS), divided by revenue. A key indicator of a company\'s profitability at the product level.'
    },
    {
        term: 'GSTR-1',
        definition: 'A monthly or quarterly return filed by registered GST taxpayers in India that contains the details of all outward supplies (sales) made during the period.'
    },
    {
        term: 'GSTR-3B',
        definition: 'A self-declared summary GST return filed monthly (or quarterly for QRMP) that contains summarized details of outward and inward supplies, input tax credit, and tax liability.'
    },
    {
        term: 'GSTR-9',
        definition: 'The annual GST return that must be filed by all registered taxpayers. It is a consolidation of all the monthly/quarterly returns filed during that financial year.'
    },
    
    // H
    {
        term: 'HealthTech',
        definition: 'The use of technology (databases, applications, mobiles, wearables) to improve the delivery, payment, and/or consumption of care and increase the development and commercialization of medicinal products.'
    },
    {
        term: 'HSN Code (Harmonized System of Nomenclature)',
        definition: 'A standardized international system of names and numbers to classify traded products. Used in GST to classify goods for taxation purposes.'
    },
    
    // I
    {
        term: 'Income Statement',
        definition: 'Also known as the Profit and Loss (P&L) statement, it reports a company\'s financial performance over a specific period, showing revenues, expenses, and resulting profit or loss.'
    },
    {
        term: 'Income Tax',
        definition: 'A tax that governments impose on financial income generated by all entities within their jurisdiction, including individuals and businesses.'
    },
    {
        term: 'Income Tax Return (ITR)',
        definition: 'A form in which taxpayers file a report of their annual income, expenses, deductions, and tax liability to the Income Tax Department.'
    },
    {
        term: 'Indirect Tax',
        definition: 'A tax collected by an intermediary (e.g., a retailer) from the person who bears the ultimate economic burden of the tax (e.g., the consumer). GST is the primary indirect tax in India.'
    },
    {
        term: 'Input Tax Credit (ITC)',
        definition: 'Under GST, it is the tax that a business pays on a purchase and that it can use to reduce its tax liability when it makes a sale.'
    },
    {
        term: 'Intellectual Property (IP)',
        definition: 'Creations of the mind, such as inventions, literary and artistic works, designs, symbols, names, and images used in commerce. Protecting IP is crucial for startups.'
    },
    {
        term: 'Inventory',
        definition: 'The raw materials, work-in-process goods, and completely finished goods that are considered to be the portion of a business\'s assets that are ready or will be ready for sale.'
    },
    {
        term: 'Inverted Duty Structure',
        definition: 'A situation in GST where the tax rate on inputs is higher than the tax rate on output supplies, leading to an accumulation of input tax credit.'
    },
    
    // J
    {
        term: 'Job Work',
        definition: 'Under GST, job work means processing or working on goods supplied by another registered person (the principal). Specific compliance rules apply.'
    },
    {
        term: 'Journal Entry',
        definition: 'A record of a business transaction in the accounting books of a business. A properly documented journal entry consists of the correct date, amounts to be debited and credited, description of the transaction, and a unique reference number.'
    },
    
    // K
    {
        term: 'Key Performance Indicator (KPI)',
        definition: 'A quantifiable measure used to evaluate the success of an organization, employee, etc. in meeting objectives for performance.'
    },
    {
        term: 'KYC (Know Your Customer)',
        definition: 'A mandatory process for financial institutions and FinTech companies to verify the identity of their clients to prevent fraud, money laundering, and terrorist financing.'
    },
    
    // L
    {
        term: 'Labor Law',
        definition: 'A body of laws, administrative rulings, and precedents which address the legal rights of, and restrictions on, working people and their organizations.'
    },
    {
        term: 'Landed Cost',
        definition: 'The total cost of a product once it has arrived at the buyer\'s door. Includes the original cost of the item, all brokerage and logistics fees, shipping costs, customs duties, taxes, insurance, and any other costs.'
    },
    {
        term: 'Liabilities',
        definition: 'A company\'s legal financial debts or obligations that arise during the course of business operations. Can be current (due within a year) or long-term.'
    },
    {
        term: 'Lifetime Value (LTV or CLV)',
        definition: 'A prediction of the net profit attributed to the entire future relationship with a customer. A critical metric for subscription and e-commerce businesses.'
    },
    {
        term: 'Liquidation Preference',
        definition: 'A clause in a contract that dictates the payout order in case of a corporate liquidation or sale. It gives preferred stockholders the right to be paid before common stockholders.'
    },
    
    // M
    {
        term: 'Management Information System (MIS)',
        definition: 'A set of reports and dashboards used by a company\'s management to analyze business performance and make informed decisions.'
    },
    {
        term: 'Manufacturing',
        definition: 'The process of converting raw materials, components, or parts into finished goods that meet a customer\'s expectations or specifications.'
    },
    {
        term: 'Marketplace Reconciliation',
        definition: 'In e-commerce, the process of matching sales data, fees, returns, and payouts from marketplaces like Amazon or Flipkart with a company\'s own accounting records.'
    },
    {
        term: 'Memorandum of Association (MOA)',
        definition: 'A legal document that defines the company\'s constitution and the scope of its powers. It is a mandatory document for company registration in India.'
    },
    {
        term: 'Mergers & Acquisitions (M&A)',
        definition: 'The consolidation of companies or assets through various types of financial transactions, including mergers, acquisitions, consolidations, and tender offers.'
    },
    {
        term: 'Monthly Recurring Revenue (MRR)',
        definition: 'The predictable revenue that a business can expect to receive on a monthly basis. It is the single most important metric for SaaS and subscription companies.'
    },
    
    // N
    {
        term: 'Net Profit',
        definition: 'The actual profit after working expenses not included in the calculation of gross profit have been paid.'
    },
    {
        term: 'Net Worth',
        definition: 'The value of the assets a person or corporation owns, minus the liabilities they owe. It is a key measure of a company\'s financial health.'
    },
    {
        term: 'Non-Disclosure Agreement (NDA)',
        definition: 'A legal contract between at least two parties that outlines confidential material, knowledge, or information that the parties wish to share with one another for certain purposes but wish to restrict access to.'
    },
    
    // O
    {
        term: 'Operating Expense (OpEx)',
        definition: 'The expenses a business incurs through its normal business operations. Often abbreviated as OpEx, these expenses include rent, equipment, inventory costs, marketing, payroll, etc.'
    },
    
    // P
    {
        term: 'Payment Aggregator (PA)',
        definition: 'Entities that facilitate e-commerce sites and merchants to accept various payment instruments from customers for completion of their payment obligations without the need for merchants to create a separate payment integration system of their own. Regulated by RBI.'
    },
    {
        term: 'PAN (Permanent Account Number)',
        definition: 'A ten-character alphanumeric identifier, issued by the Indian Income Tax Department. It is mandatory for any person who intends to enter into economic or financial transactions where quoting PAN is required.'
    },
    {
        term: 'Payroll',
        definition: 'The total amount of wages and salaries paid by a company to its employees. Also refers to the process of calculating and distributing these wages.'
    },
    {
        term: 'Pitch Deck',
        definition: 'A brief presentation, often created using presentation software, used to provide an audience with a quick overview of a business plan. Essential for fundraising.'
    },
    {
        term: 'Place of Supply',
        definition: 'A key concept in GST that determines which tax (CGST, SGST, or IGST) should be charged on a transaction.'
    },
    {
        term: 'Pre-money Valuation',
        definition: 'The value of a company before it receives external financing. Post-money valuation is the pre-money valuation plus the new investment amount.'
    },
    {
        term: 'Prepaid Payment Instrument (PPI)',
        definition: 'Instruments that facilitate purchase of goods and services against the value stored on them. Includes digital wallets. Regulated by RBI.'
    },
    {
        term: 'Profit and Loss (P&L) Statement',
        definition: 'A financial statement that summarizes the revenues, costs, and expenses incurred during a specified period. Also known as the Income Statement.'
    },
    {
        term: 'Pro-rata Rights',
        definition: 'The right, but not the obligation, for an investor to participate in a company\'s future funding rounds to maintain their initial ownership percentage.'
    },
    {
        term: 'Provident Fund (PF)',
        definition: 'A government-managed retirement savings scheme for employees in India. Both employee and employer contribute to the fund.'
    },
    
    // Q
    {
        term: 'QRMP Scheme',
        definition: 'Quarterly Return Monthly Payment Scheme under GST. It allows small taxpayers with turnover up to ₹5 crore to file their GSTR-1 and GSTR-3B on a quarterly basis, while paying tax monthly.'
    },
    
    // R
    {
        term: 'Registrar of Companies (ROC)',
        definition: 'An office under the Indian Ministry of Corporate Affairs responsible for the administration of the Companies Act and regulating companies.'
    },
    {
        term: 'Return on Investment (ROI)',
        definition: 'A performance measure used to evaluate the efficiency or profitability of an investment. Calculated as (Net Profit / Cost of Investment) * 100.'
    },
    {
        term: 'Revenue Recognition',
        definition: 'An accounting principle that determines the specific conditions under which revenue is recognized or accounted for. For SaaS, this is typically done over the life of the subscription.'
    },
    {
        term: 'Reverse Charge Mechanism (RCM)',
        definition: 'A mechanism under GST where the liability to pay tax is on the recipient of the supply of goods or services instead of the supplier.'
    },
    {
        term: 'Runway',
        definition: 'How long a company can operate before it runs out of cash. Calculated as (Current Cash Balance) / (Monthly Net Burn Rate).'
    },
    
    // S
    {
        term: 'SaaS (Software-as-a-Service)',
        definition: 'A software licensing and delivery model in which software is licensed on a subscription basis and is centrally hosted.'
    },
    {
        term: 'SAC Code (Services Accounting Code)',
        definition: 'A classification system for services developed by the Service Tax department in India. Used in GST to classify services for taxation purposes.'
    },
    {
        term: 'Seed Round',
        definition: 'The first official equity funding stage for a new company. It is the first money that a business venture raises from investors.'
    },
    {
        term: 'Series A, B, C Funding',
        definition: 'Terms referring to stages in the capital-raising process for a startup as it matures. Series A is the first venture capital round, followed by B and C as the company scales.'
    },
    {
        term: 'Shareholders Agreement',
        definition: 'A legal agreement among the shareholders of a company that governs their rights and obligations, and regulates the management and control of the company.'
    },
    {
        term: 'SKU (Stock Keeping Unit)',
        definition: 'A unique code used to identify a specific product. Essential for inventory management in retail, e-commerce, and manufacturing.'
    },
    {
        term: 'SMB (Small and Medium-sized Business)',
        definition: 'Businesses whose revenue, assets, or number of employees fall below certain limits. A key segment for many SaaS and service companies.'
    },
    {
        term: 'Startup',
        definition: 'A young company founded by entrepreneurs to develop a unique product or service and bring it to market, with a business model that is typically not fully proven.'
    },
    {
        term: 'Subscription Agreement',
        definition: 'A legal agreement between an investor and a company, where the investor agrees to purchase a certain number of shares at a specific price.'
    },
    
    // T
    {
        term: 'TAN (Tax Deduction and Collection Account Number)',
        definition: 'A 10-digit alphanumeric number required for all persons who are responsible for deducting or collecting tax at source in India.'
    },
    {
        term: 'Tax Audit',
        definition: 'An examination of your tax returns by the tax authorities to verify that your income and deductions are accurate. In India, it\'s mandatory for businesses exceeding a certain turnover.'
    },
    {
        term: 'Tax Deducted at Source (TDS)',
        definition: 'A system where tax is deducted at the time of making certain payments like rent, commission, salary, etc. The deductor is responsible for depositing the tax with the government.'
    },
    {
        term: 'Term Sheet',
        definition: 'A non-binding agreement setting forth the basic terms and conditions under which an investment will be made. It serves as a template for developing more detailed legal documents.'
    },
    {
        term: 'Trial Balance',
        definition: 'A bookkeeping worksheet in which the balance of all ledgers is compiled into debit and credit account column totals that are equal. It is used to check for arithmetic errors.'
    },
    
    // U
    {
        term: 'Unit Economics',
        definition: 'A business\'s revenues and costs on a per-unit basis. For example, in SaaS, the unit is a customer, and the unit economics are LTV and CAC.'
    },
    
    // V
    {
        term: 'Valuation',
        definition: 'The process of determining the economic worth of a business or asset. Startups are typically valued based on their growth potential, market size, team, and traction.'
    },
    {
        term: 'Venture Capital (VC)',
        definition: 'A form of private equity financing provided by venture capital firms or funds to startups and emerging companies that have been deemed to have high growth potential.'
    },
    {
        term: 'Venture Debt',
        definition: 'A type of debt financing provided to venture-backed companies. It is less dilutive than equity financing and is often used to extend runway between funding rounds.'
    },
    {
        term: 'Vesting',
        definition: 'The process by which an employee or founder earns their equity over time. A standard vesting schedule is 4 years with a 1-year cliff.'
    },
    {
        term: 'Virtual CFO (vCFO)',
        definition: 'An outsourced service provider offering high-level financial expertise and strategic guidance to a company on a part-time or project basis.'
    },
    
    // W
    {
        term: 'Working Capital',
        definition: 'The difference between a company\'s current assets (like cash, AR, inventory) and its current liabilities (like AP). It is a measure of a company\'s short-term liquidity. Formula: Current Assets - Current Liabilities.'
    }
];

// Sort glossary data alphabetically by term
GLOSSARY_DATA.sort((a, b) => a.term.localeCompare(b.term));

    