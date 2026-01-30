
import { FileCheck, ClipboardList, HandCoins, BarChart, LineChart, CheckSquare, Rocket, ShoppingBag, FileText, UserCheck, Milestone, FileUp, Search, Presentation } from 'lucide-react';

export interface TemplateData {
  slug: string;
  title: string;
  description: string;
  h1: string;
  Icon: React.ElementType;
  content: string; 
  relatedServices?: string[];
  relatedGlossaryTerms?: string[];
}

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const TEMPLATES_RAW: Omit<TemplateData, 'slug' | 'h1'>[] = [
    {
        title: 'Startup Compliance Checklist',
        description: 'An essential checklist covering annual filings, GST, TDS, and other key compliances for Indian startups.',
        Icon: FileCheck,
        content: `
            <h2>Annual Compliance Checklist</h2>
            <p>Ensure your Private Limited Company stays compliant with these mandatory annual filings. Missing these can lead to heavy penalties and director disqualification.</p>
            <table>
                <thead>
                    <tr>
                        <th>Compliance Task</th>
                        <th>Due Date</th>
                        <th>Key Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Board Meetings</strong></td>
                        <td>Quarterly</td>
                        <td>Minimum of 4 meetings per year, with a gap of no more than 120 days between two meetings.</td>
                    </tr>
                    <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-annual-general-meeting-agm">Annual General Meeting (AGM)</a></strong></td>
                        <td>Within 6 months of FY end</td>
                        <td>Mandatory annual meeting of shareholders to approve financials and appoint auditors.</td>
                    </tr>
                    <tr>
                        <td><strong>ROC Filing: AOC-4</strong></td>
                        <td>Within 30 days of AGM</td>
                        <td>Filing of annual financial statements with the Registrar of Companies.</td>
                    </tr>
                    <tr>
                        <td><strong>ROC Filing: MGT-7</strong></td>
                        <td>Within 60 days of AGM</td>
                        <td>Filing of the company's Annual Return with shareholder details.</td>
                    </tr>
                    <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-directors-kyc-dir-3-kyc">Director's KYC (DIR-3 KYC)</a></strong></td>
                        <td>By Sept 30th annually</td>
                        <td>Annual KYC update for all directors holding a DIN.</td>
                    </tr>
                    <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-income-tax-return-itr">Income Tax Return (ITR)</a></strong></td>
                        <td>By Oct 31st annually (if audit is required)</td>
                        <td>Filing of the company's annual income tax return.</td>
                    </tr>
                     <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-statutory-audit">Statutory Audit</a></strong></td>
                        <td>Before AGM</td>
                        <td>Mandatory audit of financial statements by an independent Chartered Accountant.</td>
                    </tr>
                </tbody>
            </table>
            
            <h2>Monthly/Quarterly Compliance</h2>
            <p>These are the recurring tasks that form the backbone of your financial operations.</p>
            <ul>
                <li><strong><a href="/startup-finance-glossary/what-is-gst-goods-and-services-tax">GST</a> Filings:</strong> File GSTR-1 (by 11th) and GSTR-3B (by 20th) every month/quarter.</li>
                <li><strong><a href="/startup-finance-glossary/what-is-tds-tax-deducted-at-source">TDS</a> Payments & Filings:</strong> Deposit deducted TDS by the 7th of the next month and file quarterly TDS returns.</li>
                <li><strong>Payroll Compliance:</strong> Pay PF & ESI contributions for employees by the 15th of the next month.</li>
            </ul>
        `,
        relatedServices: ['regulatory-compliances'],
        relatedGlossaryTerms: ['what-is-compliance', 'what-is-roc-registrar-of-companies', 'what-is-statutory-audit']
    },
    {
        title: 'GST Filing Checklist',
        description: 'A step-by-step checklist to ensure your monthly and quarterly GST filings are accurate and on time.',
        Icon: ClipboardList,
        content: `
            <h2>GST Filing Process: A Step-by-Step Table</h2>
            <p>Follow this structured process every month to ensure accurate and timely GST filings, which is crucial for maintaining your compliance rating and ensuring smooth cash flow for you and your customers.</p>
            <table>
                <thead>
                    <tr>
                        <th>Step</th>
                        <th>Task</th>
                        <th>Why It's Important</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1. Sales Reconciliation</td>
                        <td>Reconcile your internal sales register with all B2B and B2C invoices issued during the month.</td>
                        <td>Ensures you declare the correct outward supply and tax liability.</td>
                    </tr>
                    <tr>
                        <td>2. ITC Reconciliation</td>
                        <td>Reconcile your purchase register with the auto-populated GSTR-2B statement on the GST portal.</td>
                        <td>Ensures you claim the correct <a href="/startup-finance-glossary/what-is-input-tax-credit-itc">Input Tax Credit (ITC)</a> that you are eligible for, optimizing your cash flow.</td>
                    </tr>
                    <tr>
                        <td>3. RCM Identification</td>
                        <td>Identify any inward supplies on which you are liable to pay tax under the <a href="/startup-finance-glossary/what-is-reverse-charge-mechanism-rcm">Reverse Charge Mechanism (RCM)</a>.</td>
                        <td>Failure to pay RCM tax is a common compliance lapse that can lead to penalties.</td>
                    </tr>
                    <tr>
                        <td>4. File GSTR-1</td>
                        <td>Upload details of all your B2B outward supplies and consolidated B2C sales data.</td>
                        <td>This allows your B2B customers to see the invoices in their GSTR-2B and claim ITC, which is critical for your business relationships.</td>
                    </tr>
                    <tr>
                        <td>5. File GSTR-3B</td>
                        <td>Declare your summary tax liability, claim eligible ITC, and pay the net GST amount.</td>
                        <td>This is the final step for paying your tax liability to the government and completing your monthly compliance.</td>
                    </tr>
                </tbody>
            </table>
        `,
        relatedServices: ['regulatory-compliances'],
        relatedGlossaryTerms: ['what-is-gst-goods-and-services-tax', 'what-is-input-tax-credit-itc', 'what-is-gstr-1', 'what-is-gstr-3b']
    },
    {
        title: 'Fundraising Readiness Checklist',
        description: 'A complete checklist to prepare your startup for investor due diligence and ensure a smooth fundraising process.',
        Icon: HandCoins,
        content: `
            <h2>Investor Due Diligence Data Room</h2>
            <p>Prepare a virtual <a href="/startup-finance-glossary/what-is-data-room">data room</a> with the following documents organized into folders. A well-organized data room signals professionalism and can significantly speed up the funding process.</p>
            
            <h3>Folder 1: Corporate & Legal</h3>
            <ul>
                <li><strong>Incorporation Docs:</strong> Certificate of Incorporation, MOA, AOA.</li>
                <li><strong>Compliance Certificates:</strong> PAN, TAN, GST, Startup India (DPIIT) certificates.</li>
                <li><strong>Cap Table:</strong> A clean, up-to-date <a href="/startup-finance-glossary/what-is-capitalization-table-cap-table">capitalization table</a> (preferably from software like Carta/Pulley).</li>
                <li><strong>Agreements:</strong> All signed founder and <a href="/startup-finance-glossary/what-is-shareholders-agreement">shareholder agreements (SHA)</a>, and historical term sheets.</li>
                <li><strong>ROC Filings:</strong> Complete history of all filings (AOC-4, MGT-7, etc.).</li>
                <li><strong>IP Documents:</strong> Trademark, patent, or copyright registration certificates. <a href="/startup-finance-glossary/what-is-intellectual-property-assignment">IP assignment agreements</a> from all employees.</li>
            </ul>

            <h3>Folder 2: Financial</h3>
            <ul>
                <li><strong>Financial Statements:</strong> Audited financials for all past years and monthly <a href="/startup-finance-glossary/what-is-mis-report">MIS reports</a> for the last 24 months.</li>
                <li><strong>Financial Model:</strong> Your detailed, driver-based <a href="/startup-finance-glossary/what-is-financial-model">financial model</a> with 3-5 year projections.</li>
                <li><strong>Tax Returns:</strong> All filed Income Tax and GST returns for the last 3 years.</li>
                <li><strong>Bank Statements:</strong> Statements for the last 12-18 months for all company bank accounts.</li>
            </ul>

             <h3>Folder 3: Team & Operations</h3>
            <ul>
                <li><strong>Team Details:</strong> Founders' resumes and an organizational chart.</li>
                <li><strong>Contracts:</strong> Standard employment contract and all key customer/supplier contracts.</li>
                <li><strong>Policies:</strong> <a href="/startup-finance-glossary/what-is-esop-employee-stock-option-plan">ESOP</a> policy and grant letters.</li>
            </ul>
        `,
        relatedServices: ['fundraising', 'investor-due-diligence'],
        relatedGlossaryTerms: ['what-is-due-diligence', 'what-is-data-room', 'what-is-capitalization-table-cap-table']
    },
    {
        title: 'Monthly MIS Report Template',
        description: 'A template outlining the key components of a professional Management Information System (MIS) report for your board and investors.',
        Icon: BarChart,
        content: `
            <h2>MIS Report Structure: A Template for Clarity</h2>
            <p>Your monthly <a href="/startup-finance-glossary/what-is-mis-report">MIS report</a> is the primary tool for communicating your company's performance to your management team, board, and investors. It should be concise, insightful, and data-driven. Here is a best-practice structure.</p>
            <h3>1. Executive Summary</h3>
            <p>A brief narrative covering the month's highlights, lowlights, key achievements, and challenges. End with a summary of key action items for the next month.</p>
            
            <h3>2. Financial Performance Dashboard</h3>
            <p>A one-page summary of your core financials.</p>
            <table>
                <thead>
                    <tr><th>Metric</th><th>Current Month</th><th>Previous Month</th><th>vs. Budget</th></tr>
                </thead>
                <tbody>
                    <tr><td>Revenue</td><td>...</td><td>...</td><td>...</td></tr>
                    <tr><td><a href="/startup-finance-glossary/what-is-gross-margin">Gross Margin %</a></td><td>...</td><td>...</td><td>...</td></tr>
                    <tr><td><a href="/startup-finance-glossary/what-is-ebitda">EBITDA</a></td><td>...</td><td>...</td><td>...</td></tr>
                    <tr><td><a href="/startup-finance-glossary/what-is-net-burn-vs-gross-burn">Net Burn</a></td><td>...</td><td>...</td><td>...</td></tr>
                    <tr><td>Closing Cash</td><td>...</td><td>...</td><td>...</td></tr>
                    <tr><td><a href="/startup-finance-glossary/what-is-runway">Runway (Months)</a></td><td>...</td><td>...</td><td>...</td></tr>
                </tbody>
            </table>

            <h3>3. KPI Deep Dive</h3>
            <p>Focus on the <a href="/startup-finance-glossary/what-is-key-performance-indicator-kpi">key performance indicators</a> specific to your business model.</p>
            <ul>
                <li><strong>For SaaS:</strong> Include charts for <a href="/startup-finance-glossary/what-is-monthly-recurring-revenue-mrr">MRR</a> Movement (New, Expansion, Churn), <a href="/startup-finance-glossary/what-is-ltvcac-ratio">LTV:CAC ratio</a> over time, and <a href="/startup-finance-glossary/what-is-net-dollar-retention-ndr">Net Dollar Retention</a>.</li>
                <li><strong>For D2C:</strong> Include charts for GMV, AOV, ROAS by channel, and Customer Retention Cohorts.</li>
            </ul>
            
            <h3>4. Departmental Highlights (Optional)</h3>
            <p>A single slide from the head of Sales, Marketing, and Product highlighting their key results and priorities for the next month.</p>
        `,
        relatedServices: ['virtual-cfo'],
        relatedGlossaryTerms: ['what-is-mis-report', 'what-is-key-performance-indicator-kpi', 'what-is-monthly-recurring-revenue-mrr']
    },
    {
        title: 'Cash Flow Tracker Template',
        description: 'A simple structure for a cash flow tracker to help early-stage startups manage their runway and anticipate shortfalls.',
        Icon: LineChart,
        content: `
            <h2>13-Week Cash Flow Forecast Template</h2>
            <p>A rolling 13-week (i.e., one quarter) <a href="/startup-finance-glossary/what-is-cash-flow">cash flow forecast</a> is the most critical financial tool for an early-stage startup. It helps you manage your liquidity and anticipate cash crunches before they happen. Use a simple spreadsheet with the following structure.</p>
            <table>
              <thead>
                <tr>
                  <th>Cash Flow Item</th>
                  <th>Week 1</th>
                  <th>Week 2</th>
                  <th>...</th>
                  <th>Week 13</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Opening Cash Balance</strong></td>
                  <td><strong>(from previous week)</strong></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr><td colspan="5"><strong>Cash Inflows:</strong></td></tr>
                <tr><td>  Customer Payments</td><td></td><td></td><td></td><td></td></tr>
                <tr><td>  Fundraising / Loans</td><td></td><td></td><td></td><td></td></tr>
                <tr><td><strong>Total Inflows</strong></td><td></td><td></td><td></td><td></td></tr>
                <tr><td colspan="5"><strong>Cash Outflows:</strong></td></tr>
                <tr><td>  Salaries & Payroll</td><td></td><td></td><td></td><td></td></tr>
                <tr><td>  Marketing & Ads</td><td></td><td></td><td></td><td></td></tr>
                <tr><td>  Software/SaaS Subscriptions</td><td></td><td></td><td></td><td></td></tr>
                <tr><td>  Rent & Utilities</td><td></td><td></td><td></td><td></td></tr>
                <tr><td>  Supplier Payments</td><td></td><td></td><td></td><td></td></tr>
                <tr><td><strong>Total Outflows</strong></td><td></td><td></td><td></td><td></td></tr>
                <tr>
                  <td><strong>Closing Cash Balance</strong></td>
                  <td><strong>(Opening + Inflows - Outflows)</strong></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
        `,
        relatedServices: ['virtual-cfo'],
        relatedGlossaryTerms: ['what-is-cash-flow', 'what-is-cash-flow-statement', 'what-is-runway']
    },
     {
        title: 'Due Diligence Data Room Checklist',
        description: 'A comprehensive checklist for setting up your virtual data room for a seamless investor due diligence process.',
        Icon: CheckSquare,
        content: `
            <h2>Data Room Structure for Investor Due Diligence</h2>
            <p>A well-organized <a href="/startup-finance-glossary/what-is-data-room">data room</a> shows professionalism and speeds up the <a href="/startup-finance-glossary/what-is-due-diligence">due diligence</a> process. Create these top-level folders and populate them with the required documents.</p>
            
            <h3>1. Corporate</h3>
            <ul>
                <li><strong>Incorporation:</strong> Certificate of Incorporation, MOA, AOA.</li>
                <li><strong>Compliance:</strong> PAN, TAN, GST, Startup India (DPIIT) certificates.</li>
                <li><strong>Cap Table:</strong> A clean, up-to-date capitalization table, preferably from software like Carta or Pulley.</li>
                <li><strong>Agreements:</strong> All signed founder and <a href="/startup-finance-glossary/what-is-shareholders-agreement">shareholder agreements (SHA)</a>.</li>
                <li><strong>ROC Filings:</strong> Complete history of key filings like AOC-4 and MGT-7.</li>
            </ul>

            <h3>2. Financials</h3>
            <ul>
                <li><strong>Historical Data:</strong> Audited financials for all past years and monthly <a href="/startup-finance-glossary/what-is-mis-report">MIS reports</a> for the last 24 months.</li>
                <li><strong>Projections:</strong> Your detailed, driver-based <a href="/startup-finance-glossary/what-is-financial-model">financial model</a>.</li>
                <li><strong>Tax:</strong> Filed Income Tax and GST returns for the last 3 years.</li>
            </ul>

             <h3>3. Team</h3>
            <ul>
                <li><strong>Key Personnel:</strong> Founders' resumes and an org chart.</li>
                <li><strong>Agreements:</strong> Standard employment contract, <a href="/startup-finance-glossary/what-is-esop-employee-stock-option-plan">ESOP</a> plan, and all grant letters.</li>
                <li><strong>IP:</strong> <a href="/startup-finance-glossary/what-is-intellectual-property-assignment">IP assignment agreements</a> from all employees/contractors.</li>
            </ul>
        `,
        relatedServices: ['investor-due-diligence', 'fundraising'],
        relatedGlossaryTerms: ['what-is-data-room', 'what-is-due-diligence', 'what-is-capitalization-table-cap-table']
    },
    {
        title: 'SaaS Metrics Dashboard Template',
        description: 'A guide to the essential KPIs and charts to include in your SaaS metrics dashboard for effective performance tracking.',
        Icon: Rocket,
        content: `
            <h2>Essential SaaS Metrics for Your Dashboard</h2>
            <p>Your SaaS dashboard should give you a real-time pulse of your business health. Focus on these core metrics.</p>
            <table>
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th>What it Measures</th>
                        <th>Why It Matters</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-monthly-recurring-revenue-mrr">MRR</a> Growth Rate</strong></td>
                        <td>The month-over-month percentage growth in your Monthly Recurring Revenue.</td>
                        <td>The primary indicator of your startup's growth momentum.</td>
                    </tr>
                    <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-net-dollar-retention-ndr">Net Dollar Retention (NDR)</a></strong></td>
                        <td>Revenue retained from a customer cohort, including expansion and churn.</td>
                        <td>A score >100% means you grow even without new customers. It's the ultimate sign of a sticky product.</td>
                    </tr>
                    <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-ltvcac-ratio">LTV:CAC Ratio</a></strong></td>
                        <td>The ratio of Customer Lifetime Value to Customer Acquisition Cost.</td>
                        <td>Measures the long-term profitability of your go-to-market strategy. Aim for >3.</td>
                    </tr>
                     <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-cac-payback-period">CAC Payback Period</a></strong></td>
                        <td>The number of months it takes to earn back the cost of acquiring a customer.</td>
                        <td>A measure of capital efficiency. Aim for <12 months.</td>
                    </tr>
                    <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-churn-rate">Customer Churn Rate</a></strong></td>
                        <td>The percentage of customers who cancel their subscription each month.</td>
                        <td>The "leaky bucket" problem. High churn makes growth incredibly difficult.</td>
                    </tr>
                </tbody>
            </table>
        `,
        relatedServices: ['virtual-cfo-for-saas-startups'],
        relatedGlossaryTerms: ['what-is-saas-software-as-a-service', 'what-is-key-performance-indicator-kpi', 'what-is-monthly-recurring-revenue-mrr']
    },
    {
        title: 'D2C KPI Dashboard Template',
        description: 'A template of key performance indicators for a Direct-to-Consumer (D2C) e-commerce brand.',
        Icon: ShoppingBag,
        content: `
            <h2>Essential D2C & E-commerce Metrics</h2>
            <p>For a D2C brand, profitability and marketing efficiency are paramount. Your KPI dashboard should focus on these core metrics.</p>
             <table>
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th>What It Measures</th>
                        <th>Why It Matters</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-gross-margin">Gross Margin %</a></strong></td>
                        <td>The percentage of revenue left after the Cost of Goods Sold (COGS).</td>
                        <td>Measures the core profitability of your products.</td>
                    </tr>
                    <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-contribution-margin">Contribution Margin</a></strong></td>
                        <td>The profit left after all variable costs (COGS, shipping, marketing) are deducted.</td>
                        <td>Tells you the true profitability of each order.</td>
                    </tr>
                    <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-return-on-ad-spend-roas">Return on Ad Spend (ROAS)</a></strong></td>
                        <td>The revenue generated for every rupee spent on advertising.</td>
                        <td>The key metric for measuring the effectiveness of your paid marketing campaigns.</td>
                    </tr>
                     <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-customer-acquisition-cost-cac">Customer Acquisition Cost (CAC)</a></strong></td>
                        <td>The total cost to acquire a new customer.</td>
                        <td>Must be compared against LTV to ensure profitable growth.</td>
                    </tr>
                    <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-average-order-value-aov">Average Order Value (AOV)</a></strong></td>
                        <td>The average amount a customer spends in a single transaction.</td>
                        <td>Increasing AOV is a key lever to improve marketing efficiency.</td>
                    </tr>
                </tbody>
            </table>
        `,
        relatedServices: ['virtual-cfo'],
        relatedGlossaryTerms: ['what-is-d2c-direct-to-consumer', 'what-is-key-performance-indicator-kpi', 'what-is-gross-margin']
    },
    {
        title: 'Simple Business Plan Template',
        description: 'A straightforward, one-page business plan template for early-stage startups to clarify their vision and strategy.',
        Icon: FileText,
        content: `
            <h2>One-Page Business Plan Framework</h2>
            <p>Use this structure to create a concise yet comprehensive <a href="/startup-finance-glossary/what-is-business-plan">business plan</a>. It's perfect for internal clarity and for sharing with early-stage investors or advisors.</p>
            
            <h3>1. The Problem</h3>
            <p>Clearly and concisely describe the pain point your target customer faces. Make it relatable and quantify the problem if possible.</p>

            <h3>2. The Solution</h3>
            <p>Describe your product or service. How does it solve the problem you just outlined? What is your unique <a href="/startup-finance-glossary/what-is-value-proposition">value proposition</a>?</p>

            <h3>3. Target Market (TAM, SAM, SOM)</h3>
            <p>Define your ideal customer profile (ICP). Estimate the size of your market (<a href="/startup-finance-glossary/what-is-total-addressable-market-tam">TAM</a>) to show the potential scale of the opportunity.</p>

            <h3>4. Go-to-Market Strategy</h3>
            <p>How will you reach your target customers? Outline your key marketing and sales channels (e.g., content marketing, paid ads, direct sales).</p>
            
            <h3>5. The Team</h3>
            <p>Introduce the founding team. Highlight relevant experience and explain why you are uniquely qualified to solve this problem.</p>
            
            <h3>6. Financial Summary</h3>
            <p>Provide a high-level 3-year projection of key financial metrics: Revenue, Key Expenses, and Profitability/Burn.</p>
            
            <h3>7. The Ask (If applicable)</h3>
            <p>State how much capital you are raising and what key milestones you will achieve with the funds.</p>
        `,
        relatedServices: ['pitch-deck-financial-modelling'],
        relatedGlossaryTerms: ['what-is-business-plan', 'what-is-total-addressable-market-tam']
    },
    {
        title: 'Term Sheet Checklist',
        description: 'A checklist of the most important terms to look for and understand in a venture capital term sheet.',
        Icon: HandCoins,
        content: `
            <h2>Key <a href="/startup-finance-glossary/what-is-term-sheet">Term Sheet</a> Clauses: A Founder's Checklist</h2>
            <p>A term sheet is a non-binding agreement, but its terms will form the basis of the final legal documents. Understanding these key clauses is critical.</p>
            <table>
                <thead>
                    <tr>
                        <th>Term</th>
                        <th>What it Means</th>
                        <th>What is Founder-Friendly?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Valuation (Pre-Money)</strong></td>
                        <td>The value of your company before the investment.</td>
                        <td>As high as you can justifiably negotiate.</td>
                    </tr>
                    <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-liquidation-preference">Liquidation Preference</a></strong></td>
                        <td>Determines who gets paid first in a sale.</td>
                        <td><strong>1x, non-participating.</strong> This is the market standard. Avoid participating preferred stock.</td>
                    </tr>
                    <tr>
                        <td><strong>Option Pool Shuffle</strong></td>
                        <td>How the ESOP pool is created.</td>
                        <td>A smaller pool (10-15%) created from the <a href="/startup-finance-glossary/what-is-pre-money-valuation">pre-money valuation</a> is standard.</td>
                    </tr>
                    <tr>
                        <td><strong>Board Composition</strong></td>
                        <td>Who gets seats on your board of directors.</td>
                        <td>A small, balanced board where founders retain significant influence (e.g., 2 founders, 1 investor).</td>
                    </tr>
                    <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-protective-provisions">Protective Provisions</a></strong></td>
                        <td>Investor veto rights on major decisions.</td>
                        <td>A standard, limited set of veto rights that don't impede your ability to run the business day-to-day.</td>
                    </tr>
                </tbody>
            </table>
        `,
        relatedServices: ['fundraising', 'corporate-law'],
        relatedGlossaryTerms: ['what-is-term-sheet', 'what-is-valuation', 'what-is-liquidation-preference']
    },
     {
        title: 'Employee Onboarding Checklist',
        description: 'A compliance and administrative checklist for onboarding a new employee in your Indian startup.',
        Icon: UserCheck,
        content: `
            <h2>New Employee Onboarding: A Compliance Checklist</h2>
            <p>A structured onboarding process ensures you meet all legal requirements and sets your new employee up for success.</p>
            <table>
                <thead>
                    <tr>
                        <th>Stage</th>
                        <th>Task</th>
                        <th>Responsibility</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Pre-Joining</strong></td>
                        <td>Issue formal Offer Letter with clear salary structure.</td>
                        <td>HR/Founder</td>
                    </tr>
                     <tr>
                        <td><strong>Pre-Joining</strong></td>
                        <td>Conduct background verification (if part of your policy).</td>
                        <td>HR/Third-Party</td>
                    </tr>
                    <tr>
                        <td><strong>Day 1</strong></td>
                        <td>Sign Employment Agreement & IP Assignment Agreement.</td>
                        <td>HR/New Hire</td>
                    </tr>
                    <tr>
                        <td><strong>Day 1</strong></td>
                        <td>Collect KYC (<a href="/startup-finance-glossary/what-is-pan-permanent-account-number">PAN</a>, Aadhaar) and bank details for payroll.</td>
                        <td>HR/New Hire</td>
                    </tr>
                    <tr>
                        <td><strong>Day 1</strong></td>
                        <td>Collect <a href="/startup-finance-glossary/what-is-employee-provident-fund-epf">PF</a>/<a href="/startup-finance-glossary/what-is-employees-state-insurance-esi">ESI</a> nomination forms and TDS investment declarations.</td>
                        <td>HR/New Hire</td>
                    </tr>
                    <tr>
                        <td><strong>Week 1</strong></td>
                        <td>Add employee to payroll software and create their PF/ESI account.</td>
                        <td>Finance/HR</td>
                    </tr>
                </tbody>
            </table>
        `,
        relatedServices: ['regulatory-compliances'],
        relatedGlossaryTerms: ['what-is-payroll', 'what-is-tds-tax-deducted-at-source', 'what-is-employee-provident-fund-epf']
    },
    {
        title: 'Bookkeeping Month-End Close Checklist',
        description: 'A checklist for finance teams to ensure a timely and accurate month-end financial close process.',
        Icon: Milestone,
        content: `
             <h2>The Month-End Close Process</h2>
            <p>A disciplined month-end close ensures you have accurate financials to make timely decisions. A best-practice process can be completed within 5-7 business days.</p>
             <table>
                <thead>
                    <tr>
                        <th>Phase (Timeline)</th>
                        <th>Key Tasks</th>
                        <th>Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Phase 1: Reconciliation (Days 1-3)</strong></td>
                        <td>Reconcile all bank accounts, credit cards, and payment gateways. Record all pending invoices and bills.</td>
                        <td>Ensures all transactions for the month are captured accurately.</td>
                    </tr>
                    <tr>
                        <td><strong>Phase 2: Adjustments (Days 3-5)</strong></td>
                        <td>Post adjusting journal entries for <a href="/startup-finance-glossary/what-is-prepaid-expense">prepaid expenses</a>, <a href="/startup-finance-glossary/what-is-accrued-expense">accrued expenses</a>, <a href="/startup-finance-glossary/what-is-deferred-revenue">deferred revenue</a>, and depreciation.</td>
                        <td>Ensures revenue and expenses are recognized in the correct period (Accrual Accounting).</td>
                    </tr>
                    <tr>
                        <td><strong>Phase 3: Review & Reporting (Days 5-7)</strong></td>
                        <td>Review the <a href="/startup-finance-glossary/what-is-trial-balance">trial balance</a>, generate the three financial statements, and prepare the <a href="/startup-finance-glossary/what-is-mis-report">MIS report</a> for management.</td>
                        <td>Provides management with a clear, accurate picture of the company's performance for the month.</td>
                    </tr>
                </tbody>
            </table>
        `,
        relatedServices: ['bookkeeping', 'virtual-cfo'],
        relatedGlossaryTerms: ['what-is-bookkeeping', 'what-is-bank-reconciliation', 'what-is-three-financial-statements']
    },
    {
        title: 'Founder Agreement Checklist',
        description: 'A checklist of key clauses every founders\' shareholders\' agreement should contain to prevent future disputes.',
        Icon: FileUp,
        content: `
            <h2>Key Clauses for Your Founders' Agreement</h2>
            <p>A well-drafted <a href="/startup-finance-glossary/what-is-shareholders-agreement">founders' agreement</a> is the most important legal document for an early-stage startup. It's the "pre-nup" for your business partnership and prevents future disputes. Ensure it covers these critical areas.</p>
            <h3>Equity & Ownership</h3>
            <ul>
                <li><strong>Equity Split:</strong> A clear, unambiguous statement of the shareholding percentage for each co-founder.</li>
                <li><strong><a href="/startup-finance-glossary/what-is-founder-vesting-schedule">Vesting Schedule</a>:</strong> A 4-year vesting schedule with a 1-year cliff is essential. This protects the company if a founder leaves early.</li>
                <li><strong><a href="/startup-finance-glossary/what-is-intellectual-property-assignment">IP Assignment</a>:</strong> A clause stating that all intellectual property created by the founders related to the business is owned by the company, not the individuals.</li>
            </ul>
            <h3>Governance & Control</h3>
            <ul>
                <li><strong>Roles and Responsibilities:</strong> Clearly defined roles for each founder (e.g., CEO, CTO) to avoid turf wars.</li>
                <li><strong>Decision Making:</strong> Define which decisions require a unanimous vote versus a simple majority.</li>
            </ul>
            <h3>Exit & Contingency</h3>
            <ul>
                <li><strong>Founder Departure:</strong> What happens to vested and unvested shares if a founder resigns or is terminated? Does the company have a right to buy back the shares?</li>
                <li><strong>Deadlock Resolution:</strong> A mechanism to resolve disputes if the founders reach a 50/50 impasse.</li>
            </ul>
        `,
        relatedServices: ['corporate-law'],
        relatedGlossaryTerms: ['what-is-shareholders-agreement', 'what-is-founder-vesting', 'what-is-intellectual-property-assignment']
    },
    {
        title: 'Go-to-Market Strategy Template',
        description: 'A simple framework to help you structure and build a comprehensive Go-to-Market (GTM) strategy for your new product.',
        Icon: Search,
        content: `
            <h2>Building Your <a href="/startup-finance-glossary/what-is-go-to-market-gtm-strategy">Go-to-Market Plan</a></h2>
            <p>Your GTM strategy is your roadmap for how you will reach and win customers. Use this template to structure your thinking.</p>
            
            <h3>1. Target Audience</h3>
            <ul>
                <li><strong>Ideal Customer Profile (ICP):</strong> Describe the company you are selling to. What industry are they in? What is their size? Where are they located?</li>
                <li><strong>User Persona:</strong> Describe the individual user or buyer. What is their job title? What are their biggest pain points and goals?</li>
            </ul>

            <h3>2. Messaging & Positioning</h3>
            <ul>
                <li><strong><a href="/startup-finance-glossary/what-is-value-proposition">Value Proposition</a>:</strong> In a single sentence, what is the unique value you provide to your target customer?</li>
                <li><strong>Positioning Statement:</strong> How do you want to be perceived in the market relative to your competitors?</li>
            </ul>

            <h3>3. Pricing & Packaging</h3>
            <ul>
                <li><strong>Pricing Model:</strong> How will you charge? (e.g., Per user, per month, usage-based).</li>
                <li><strong>Packaging Tiers:</strong> What features are included in your "Basic," "Pro," and "Enterprise" plans?</li>
            </ul>
            
            <h3>4. Acquisition Channels</h3>
            <ul>
                <li><strong>How will you generate leads and awareness?</strong> For each channel (e.g., SEO, Paid Ads, Content Marketing, Outbound Sales), define your strategy and budget.</li>
            </ul>

            <h3>5. Success Metrics</h3>
            <ul>
                <li><strong>What are the 3-5 key metrics you will track to measure the success of your GTM plan?</strong> (e.g., Number of new customers, <a href="/startup-finance-glossary/what-is-customer-acquisition-cost-cac">CAC</a>, conversion rate).</li>
            </ul>
        `,
        relatedServices: ['pitch-deck-financial-modelling'],
        relatedGlossaryTerms: ['what-is-go-to-market-gtm-strategy', 'what-is-target-market', 'what-is-customer-acquisition-cost-cac']
    },
    {
        title: 'Pitch Deck Template',
        description: 'A 12-slide template outlining the essential components of a compelling and effective startup pitch deck for investors.',
        Icon: Presentation,
        content: `
            <h2>The Investor <a href="/startup-finance-glossary/what-is-pitch-deck">Pitch Deck</a>: A 12-Slide Structure</h2>
            <p>Your pitch deck is your story. Keep it concise, visual, and compelling. Follow this classic, investor-approved structure.</p>
            <ol>
                <li><strong>Cover:</strong> Your company name, logo, and a powerful one-line pitch.</li>
                <li><strong>Vision/Mission:</strong> A bold, inspiring statement about the future you are creating.</li>
                <li><strong>The Problem:</strong> Describe the pain point you are solving. Make it urgent and relatable.</li>
                <li><strong>The Solution:</strong> Introduce your product or service. Show, don't just tell, with a screenshot or demo.</li>
                <li><strong>Market Size (<a href="/startup-finance-glossary/what-is-total-addressable-market-tam">TAM</a>):</strong> Show investors the scale of the opportunity. Why is this a huge market?</li>
                <li><strong>Traction:</strong> This is your proof. A chart showing your growth in users, revenue, or engagement is essential.</li>
                <li><strong>Business Model:</strong> How do you make money? Clearly explain your pricing and <a href="/startup-finance-glossary/what-is-unit-economics">unit economics</a>.</li>
                <li><strong>Go-to-Market Strategy:</strong> How will you reach and acquire customers efficiently?</li>
                <li><strong>Competition:</strong> Acknowledge your competitors and explain your unique, defensible advantage.</li>
                <li><strong>Team:</strong> Introduce your founding team and key advisors. Why are you the ones to win?</li>
                <li><strong>Financials:</strong> A high-level summary of your financial projections, highlighting key metrics.</li>
                <li><strong>The Ask:</strong> Clearly state how much you're raising and what milestones you'll achieve with the capital.</li>
            </ol>
        `,
        relatedServices: ['pitch-deck-financial-modelling', 'fundraising'],
        relatedGlossaryTerms: ['what-is-pitch-deck', 'what-is-traction', 'what-is-total-addressable-market-tam']
    }
];

export const TEMPLATES_DATA: TemplateData[] = TEMPLATES_RAW.map(template => ({
  ...template,
  slug: slugify(template.title),
  h1: template.title,
}));
