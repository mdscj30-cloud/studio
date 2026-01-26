
import { FileCheck, ClipboardList, HandCoins, BarChart3, LineChart, CheckSquare, BarChart, Rocket, FileText, FileUp, Milestone, UserCheck, Search, ListChecks, ShoppingBag } from 'lucide-react';

export interface TemplateData {
  slug: string;
  title: string;
  description: string;
  h1: string;
  Icon: React.ElementType;
  content: string; 
}

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const TEMPLATES_RAW: Omit<TemplateData, 'slug' | 'h1'>[] = [
    {
        title: 'Startup Compliance Checklist',
        description: 'An essential checklist covering annual filings, GST, TDS, and other key compliances for Indian startups.',
        Icon: FileCheck,
        content: `
            <h2>Annual Compliance</h2>
            <ul>
                <li>Hold at least 4 Board Meetings (one per quarter).</li>
                <li>Hold Annual General Meeting (AGM) within 6 months of financial year end.</li>
                <li>File Form AOC-4 (Financial Statements) with ROC.</li>
                <li>File Form MGT-7 (Annual Return) with ROC.</li>
                <li>Complete Director's KYC (DIR-3 KYC) by Sept 30th.</li>
                <li>File Income Tax Return (ITR) by due date.</li>
                <li>Complete Statutory Audit by a Chartered Accountant.</li>
            </ul>
            <h2>Monthly/Quarterly Compliance</h2>
            <ul>
                <li>File GSTR-1 and GSTR-3B returns.</li>
                <li>Pay monthly GST liability.</li>
                <li>Deduct and deposit TDS on applicable payments (salaries, rent, professional fees).</li>
                <li>File quarterly TDS returns.</li>
                <li>Pay monthly PF & ESI contributions for employees.</li>
            </ul>
             <h2>Event-Based Compliance</h2>
            <ul>
                <li>File Form PAS-3 on allotment of new shares.</li>
                <li>File Form FC-GPR for receipt of foreign investment.</li>
                <li>File forms for change in Directors or Registered Office.</li>
            </ul>
        `
    },
    {
        title: 'GST Filing Checklist',
        description: 'A step-by-step checklist to ensure your monthly and quarterly GST filings are accurate and on time.',
        Icon: ClipboardList,
        content: `
            <h2>Pre-Filing Checks</h2>
            <ul>
                <li>Reconcile sales register with all B2B and B2C invoices issued.</li>
                <li>Reconcile purchase register with GSTR-2B to ensure all eligible ITC is accounted for.</li>
                <li>Identify any transactions liable for Reverse Charge Mechanism (RCM).</li>
                <li>Ensure all export invoices are correctly marked and LUT details are available.</li>
                <li>Verify all HSN/SAC codes and applicable tax rates.</li>
            </ul>
            <h2>Filing Process</h2>
            <ul>
                <li>Upload all B2B invoice details in GSTR-1.</li>
                <li>Report consolidated B2C sales data.</li>
                <li>Verify and submit GSTR-1.</li>
                <li>Review auto-populated data in GSTR-3B.</li>
                <li>Claim eligible ITC as per GSTR-2B and your books.</li>
                <li>Declare and pay tax liability (including RCM) and file GSTR-3B.</li>
            </ul>
        `
    },
    {
        title: 'Fundraising Readiness Checklist',
        description: 'A complete checklist to prepare your startup for investor due diligence and ensure a smooth fundraising process.',
        Icon: HandCoins,
        content: `
            <h2>Corporate Documents</h2>
            <ul>
                <li>Certificate of Incorporation, MOA, AOA.</li>
                <li>Up-to-date and clean Cap Table (preferably on software).</li>
                <li>All shareholder agreements (SHA) and term sheets.</li>
                <li>All Board Meeting Minutes and resolutions, signed.</li>
                <li>All ROC filings (AOC-4, MGT-7, PAS-3, etc.).</li>
            </ul>
            <h2>Financial Documents</h2>
            <ul>
                <li>Audited financial statements for all past years.</li>
                <li>Monthly MIS reports for the last 12-24 months.</li>
                <li>Detailed, driver-based financial model with projections.</li>
                <li>Cap Table.</li>
                <li>Bank statements for the last 12 months.</li>
                <li>Tax filings (GST, TDS, Income Tax returns).</li>
            </ul>
            <h2>Legal & HR Documents</h2>
            <ul>
                <li>Signed employment contracts for all employees.</li>
                <li>Signed IP assignment agreements for all employees & contractors.</li>
                <li>ESOP plan and grant letters.</li>
                <li>List of all pending or threatened litigation.</li>
            </ul>
        `
    },
    {
        title: 'Monthly MIS Report Template',
        description: 'A template outlining the key components of a professional Management Information System (MIS) report for your board and investors.',
        Icon: BarChart,
        content: `
            <h2>Section 1: Executive Summary</h2>
            <ul>
                <li>One-paragraph summary of the month's performance.</li>
                <li>Highlights: Key wins and challenges.</li>
                <li>Action items from the previous month and their status.</li>
            </ul>
            <h2>Section 2: Financial Summary</h2>
            <ul>
                <li>P&L Summary (vs. Budget).</li>
                <li>Cash Flow Summary (Operating, Investing, Financing).</li>
                <li>Balance Sheet Snapshot.</li>
                <li>Burn Rate and Runway calculation.</li>
            </ul>
             <h2>Section 3: Key Performance Indicators (KPIs)</h2>
            <ul>
                <li><strong>For SaaS:</strong> MRR movement (New, Expansion, Churn), LTV:CAC, Churn Rate, Net Dollar Retention.</li>
                <li><strong>For D2C:</strong> Gross Merchandise Value (GMV), Average Order Value (AOV), Return on Ad Spend (ROAS), Customer Acquisition Cost (CAC).</li>
            </ul>
             <h2>Section 4: Departmental Updates</h2>
            <ul>
                <li>Sales: Pipeline status, key deals won/lost.</li>
                <li>Marketing: Key campaign performance, lead generation metrics.</li>
                <li>Product: Key feature releases, user engagement metrics.</li>
            </ul>
        `
    },
    {
        title: 'Cash Flow Tracker Template',
        description: 'A simple structure for a cash flow tracker to help early-stage startups manage their runway and anticipate shortfalls.',
        Icon: LineChart,
        content: `
            <h2>Weekly Cash Flow Tracker Structure (Example)</h2>
            <p>Use a simple spreadsheet with the following columns:</p>
            <h3>Opening Balance</h3>
            <ul>
                <li>Cash at the start of the week.</li>
            </ul>
            <h3>Cash Inflows</h3>
            <ul>
                <li>Customer Payments (List key expected payments).</li>
                <li>Fundraising / Loans.</li>
                <li>Other Income.</li>
            </ul>
            <h3>Cash Outflows</h3>
            <ul>
                <li>Salaries & Payroll.</li>
                <li>Marketing Spend (e.g., Google Ads, Facebook Ads).</li>
                <li>Software Subscriptions (e.g., AWS, HubSpot).</li>
                <li>Rent & Utilities.</li>
                <li>Supplier/Vendor Payments.</li>
                <li>Other Expenses.</li>
            </ul>
             <h3>Closing Balance</h3>
            <ul>
                <li>Calculated as: Opening Balance + Total Inflows - Total Outflows. This becomes the opening balance for the next week.</li>
            </ul>
        `
    },
     {
        title: 'Due Diligence Data Room Checklist',
        description: 'A comprehensive checklist for setting up your virtual data room for a seamless investor due diligence process.',
        Icon: CheckSquare,
        content: `
            <h2>Folder 1: Corporate</h2>
            <ul>
                <li>Certificate of Incorporation, MOA, AOA.</li>
                <li>PAN, TAN, GST Certificates.</li>
                <li>List of all directors and shareholders.</li>
                <li>Signed Shareholders' Agreements and Term Sheets.</li>
                <li>Complete ROC filing history.</li>
            </ul>
            <h2>Folder 2: Financial</h2>
            <ul>
                <li>Historical audited financial statements.</li>
                <li>Monthly financial statements (P&L, Balance Sheet) for last 24 months.</li>
                <li>Financial model and projections.</li>
                <li>Cap Table.</li>
                <li>Bank statements for the last 12 months.</li>
            </ul>
             <h2>Folder 3: Team & HR</h2>
            <ul>
                <li>Founders' resumes.</li>
                <li>Organizational chart.</li>
                <li>Standard employment agreement template.</li>
                <li>ESOP plan and grant letters.</li>
            </ul>
             <h2>Folder 4: Legal & IP</h2>
            <ul>
                <li>All material customer and supplier contracts.</li>
                <li>Property lease agreements.</li>
                <li>Trademark and patent filings.</li>
                <li>IP assignment agreements from all employees/contractors.</li>
            </ul>
        `
    },
    {
        title: 'SaaS Metrics Dashboard Template',
        description: 'A guide to the essential KPIs and charts to include in your SaaS metrics dashboard for effective performance tracking.',
        Icon: Rocket,
        content: `
            <h2>Key Metrics to Track</h2>
            <ul>
                <li><strong>Monthly Recurring Revenue (MRR):</strong> Your top-line growth metric.</li>
                <li><strong>MRR Growth Rate (%):</strong> Month-over-month growth of MRR.</li>
                <li><strong>Customer Churn Rate (%):</strong> Percentage of customers lost each month.</li>
                <li><strong>Net Dollar Retention (%):</strong> Revenue retained from a cohort, including expansion and churn. Goal > 100%.</li>
                <li><strong>Customer Lifetime Value (LTV):</strong> Total value of a customer over their life.</li>
                <li><strong>Customer Acquisition Cost (CAC):</strong> Cost to acquire a new customer.</li>
                <li><strong>LTV:CAC Ratio:</strong> The golden ratio of SaaS viability. Goal > 3.</li>
                <li><strong>CAC Payback Period (Months):</strong> Time to recoup the cost of acquiring a customer.</li>
            </ul>
            <h2>Recommended Charts</h2>
            <ul>
                <li>MRR Movement Waterfall (New + Expansion - Churn).</li>
                <li>LTV:CAC Ratio over time.</li>
                <li>Customer Cohort Retention Chart.</li>
            </ul>
        `
    },
    {
        title: 'D2C KPI Dashboard Template',
        description: 'A template of key performance indicators for a Direct-to-Consumer (D2C) e-commerce brand.',
        Icon: ShoppingBag,
        content: `
             <h2>Key Metrics to Track</h2>
            <ul>
                <li><strong>Gross Merchandise Value (GMV):</strong> Total sales value before discounts.</li>
                <li><strong>Average Order Value (AOV):</strong> Average value of each customer order.</li>
                <li><strong>Customer Acquisition Cost (CAC):</strong> Cost to acquire a new customer, often by channel.</li>
                <li><strong>Return on Ad Spend (ROAS):</strong> Revenue generated for every rupee spent on advertising.</li>
                <li><strong>Gross Margin (%):</strong> Profitability of your products after COGS.</li>
                <li><strong>Customer Retention Rate (%):</strong> Percentage of customers who make a repeat purchase.</li>
                <li><strong>Inventory Turnover:</strong> How quickly you sell through your inventory.</li>
                <li><strong>Contribution Margin per Order:</strong> Profitability of each order after all variable costs.</li>
            </ul>
            <h2>Recommended Reports</h2>
            <ul>
                <li>Sales by SKU and by Channel.</li>
                <li>COGS and Gross Margin Analysis per product.</li>
                <li>Marketing channel performance (CAC and ROAS by channel).</li>
            </ul>
        `
    },
    {
        title: 'Simple Business Plan Template',
        description: 'A straightforward, one-page business plan template for early-stage startups to clarify their vision and strategy.',
        Icon: FileText,
        content: `
            <ol>
                <li><strong>Executive Summary:</strong> A one-paragraph elevator pitch of your business.</li>
                <li><strong>The Problem:</strong> Clearly define the pain point you are solving.</li>
                <li><strong>The Solution:</strong> Describe your product or service and how it solves the problem uniquely.</li>
                <li><strong>Target Market:</strong> Who are your ideal customers? How large is the market?</li>
                <li><strong>Go-to-Market Strategy:</strong> How will you reach and acquire customers?</li>
                <li><strong>Competitive Landscape:</strong> Who are your main competitors and what is your competitive advantage?</li>
                <li><strong>The Team:</strong> Why are you and your team the right people to solve this problem?</li>
                <li><strong>Financial Summary:</strong> High-level financial projections for the next 3 years (Revenue, Key Costs, Profitability).</li>
                <li><strong>The Ask (if fundraising):</strong> How much capital are you raising and what are the key milestones you will achieve with it?</li>
            </ol>
        `
    },
    {
        title: 'Term Sheet Checklist',
        description: 'A checklist of the most important terms to look for and understand in a venture capital term sheet.',
        Icon: HandCoins,
        content: `
            <h2>Economic Terms</h2>
            <ul>
                <li><strong>Valuation (Pre-money & Post-money):</strong> How much is your company worth?</li>
                <li><strong>Investment Amount:</strong> How much cash are you receiving?</li>
                <li><strong>Liquidation Preference:</strong> Who gets paid first in a sale, and how much? (1x non-participating is standard).</li>
                <li><strong>Option Pool Shuffle:</strong> Is the ESOP pool created from the pre-money or post-money valuation? (Pre-money is standard but dilutes founders more).</li>
            </ul>
            <h2>Control Terms</h2>
            <ul>
                <li><strong>Board Composition:</strong> Who gets a seat on your board of directors?</li>
                <li><strong>Protective Provisions:</strong> What major company actions require investor approval? (e.g., selling the company, taking on debt).</li>
                <li><strong>Pro-Rata Rights:</strong> Do investors have the right to maintain their ownership percentage in future rounds?</li>
                <li><strong>Drag-Along / Tag-Along Rights:</strong> Rules governing how shares are sold in an acquisition.</li>
            </ul>
        `
    },
     {
        title: 'Employee Onboarding Checklist',
        description: 'A compliance and administrative checklist for onboarding a new employee in your Indian startup.',
        Icon: UserCheck,
        content: `
            <h2>Pre-Joining Formalities</h2>
            <ul>
                <li>Issue a formal Offer Letter detailing salary, role, and start date.</li>
                <li>Conduct background verification (if applicable).</li>
                <li>Request KYC documents (PAN, Aadhaar, bank details, photograph).</li>
            </ul>
            <h2>Day 1 Formalities</h2>
            <ul>
                <li>Sign the Employment Agreement and IP Assignment Agreement.</li>
                <li>Collect PF and ESI nomination forms (if applicable).</li>
                <li>Provide company assets (laptop, email ID).</li>
                <li>Add employee to payroll software and HR system.</li>
                <li>Explain company policies (leave, expense, POSH).</li>
            </ul>
            <h2>Post-Joining Compliance</h2>
            <ul>
                <li>Register the new employee on the PF and ESI portals.</li>
                <li>Ensure TDS declarations are collected for accurate payroll processing.</li>
            </ul>
        `
    },
    {
        title: 'Bookkeeping Month-End Close Checklist',
        description: 'A checklist for finance teams to ensure a timely and accurate month-end financial close process.',
        Icon: Milestone,
        content: `
            <h2>Data Entry & Reconciliation (Week 1)</h2>
            <ul>
                <li>Record all pending invoices and bills.</li>
                <li>Reconcile all bank accounts and credit card statements.</li>
                <li>Reconcile payment gateway and marketplace payouts.</li>
            </ul>
            <h2>Adjusting Entries (Week 1)</h2>
            <ul>
                <li>Record prepaid expense amortization.</li>
                <li>Record deferred revenue recognition for subscriptions.</li>
                <li>Accrue for any unbilled expenses (e.g., salaries, rent).</li>
                <li>Record depreciation on fixed assets.</li>
            </ul>
            <h2>Review & Reporting (Week 2)</h2>
            <ul>
                <li>Review the Trial Balance to ensure debits equal credits.</li>
                <li>Generate the P&L, Balance Sheet, and Cash Flow Statement.</li>
                <li>Prepare the MIS report with KPI dashboards and variance analysis.</li>
                <li>Circulate final reports to management and board.</li>
            </ul>
        `
    },
    {
        title: 'Founder Agreement Checklist',
        description: 'A checklist of key clauses every founders\' shareholders\' agreement should contain to prevent future disputes.',
        Icon: FileUp,
        content: `
            <h2>Ownership & Equity</h2>
            <ul>
                <li>Clear definition of shareholding percentages for each founder.</li>
                <li>Vesting Schedule: 4-year vesting with a 1-year cliff is standard.</li>
                <li>IP Assignment: All intellectual property created by founders related to the business must be assigned to the company.</li>
            </ul>
            <h2>Roles & Governance</h2>
            <ul>
                <li>Defined roles and responsibilities for each founder.</li>
                <li>Board of Directors composition.</li>
                <li>Decision-Making: Which decisions require a board vote vs. a shareholder vote?</li>
            </ul>
            <h2>Exit & Contingencies</h2>
            <ul>
                <li>Right of First Refusal (ROFR): Obligation to offer shares to other founders before selling to a third party.</li>
                <li>Founder Departure: What happens to vested and unvested shares if a founder leaves?</li>
                <li>Deadlock & Dispute Resolution: A clear mechanism to resolve disputes if founders cannot agree.</li>
            </ul>
        `
    },
    {
        title: 'Go-to-Market Strategy Template',
        description: 'A simple framework to help you structure and build a comprehensive Go-to-Market (GTM) strategy for your new product.',
        Icon: Search,
        content: `
            <h2>1. Target Audience</h2>
            <ul>
                <li><strong>Ideal Customer Profile (ICP):</strong> Who are you selling to? (Industry, company size, geography).</li>
                <li><strong>User Persona:</strong> Who is the end-user within that company? What are their pain points?</li>
            </ul>
            <h2>2. Value Proposition & Messaging</h2>
            <ul>
                <li><strong>Value Proposition:</strong> What unique value do you provide to your target market?</li>
                <li><strong>Key Messaging:</strong> What are the core messages that will resonate with your persona?</li>
            </ul>
            <h2>3. Pricing & Packaging</h2>
            <ul>
                <li>How will you price your product? (Tiered, usage-based, etc.).</li>
                <li>What features are included in each package?</li>
            </ul>
            <h2>4. Acquisition Channels</h2>
            <ul>
                <li>How will you reach your customers? (e.g., Content Marketing/SEO, Paid Ads, Outbound Sales, Partnerships).</li>
            </ul>
             <h2>5. Goals & Metrics</h2>
            <ul>
                <li>What are your key success metrics? (e.g., Number of new customers, revenue target, CAC).</li>
            </ul>
        `
    },
    {
        title: 'Pitch Deck Template',
        description: 'A 12-slide template outlining the essential components of a compelling and effective startup pitch deck for investors.',
        Icon: Presentation,
        content: `
            <ol>
                <li><strong>Cover Slide:</strong> Your company name, logo, and a one-line pitch.</li>
                <li><strong>The Problem:</strong> Describe the pain point you are solving in a relatable way.</li>
                <li><strong>The Solution:</strong> Explain your product or service and how it uniquely solves the problem.</li>
                <li><strong>Market Size:</strong> How big is the opportunity? (TAM, SAM, SOM).</li>
                <li><strong>Product:</strong> Show, don't just tell. Include a demo link or screenshots.</li>
                <li><strong>Traction:</strong> Your proof. Show growth in users, revenue, or other key metrics.</li>
                <li><strong>Business Model:</strong> How do you make money? What is your pricing?</li>
                <li><strong>Go-to-Market:</strong> How will you acquire customers efficiently?</li>
                <li><strong>Competitive Landscape:</strong> Who are your competitors and what is your "unfair advantage"?</li>
                <li><strong>Team:</strong> Why is your team the right one to win this market?</li>
                <li><strong>Financials:</strong> High-level summary of your financial projections (3-5 years).</li>
                <li><strong>The Ask:</strong> How much are you raising and what will you achieve with the capital?</li>
            </ol>
        `
    }
];

export const TEMPLATES_DATA: TemplateData[] = TEMPLATES_RAW.map(template => ({
  ...template,
  slug: slugify(template.title),
  h1: template.title,
}));
