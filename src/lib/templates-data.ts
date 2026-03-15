

import { FileCheck, ClipboardList, HandCoins, BarChart, LineChart, CheckSquare, Rocket, ShoppingBag, FileText, UserCheck, Milestone, FileUp, Search, Presentation, Calculator, IndianRupee, Users, FileSpreadsheet, Building } from 'lucide-react';

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
                        <td><strong><a href="/startup-finance-glossary/what-is-annual-general-meeting">Annual General Meeting (AGM)</a></strong></td>
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
                        <td><strong><a href="/startup-finance-glossary/what-is-directors-kyc">Director's KYC (DIR-3 KYC)</a></strong></td>
                        <td>By Sept 30th annually</td>
                        <td>Annual KYC update for all directors holding a DIN.</td>
                    </tr>
                    <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-income-tax-return">Income Tax Return (ITR)</a></strong></td>
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
                <li><strong><a href="/startup-finance-glossary/what-is-goods-and-services-tax">GST</a> Filings:</strong> File GSTR-1 (by 11th) and GSTR-3B (by 20th) every month/quarter.</li>
                <li><strong><a href="/startup-finance-glossary/what-is-tax-deducted-at-source">TDS</a> Payments & Filings:</strong> Deposit deducted TDS by the 7th of the next month and file quarterly TDS returns.</li>
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
                        <td>Ensures you claim the correct <a href="/startup-finance-glossary/what-is-input-tax-credit">Input Tax Credit (ITC)</a> that you are eligible for, optimizing your cash flow.</td>
                    </tr>
                    <tr>
                        <td>3. RCM Identification</td>
                        <td>Identify any inward supplies on which you are liable to pay tax under the <a href="/startup-finance-glossary/what-is-reverse-charge-mechanism">Reverse Charge Mechanism (RCM)</a>.</td>
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
        relatedGlossaryTerms: ['what-is-goods-and-services-tax', 'what-is-input-tax-credit', 'what-is-gstr-1', 'what-is-gstr-3b']
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
                <li><strong>Cap Table:</strong> A clean, up-to-date <a href="/startup-finance-glossary/what-is-capitalization-table">capitalization table</a> (preferably from software like Carta/Pulley).</li>
                <li><strong>Agreements:</strong> All signed founder and <a href="/startup-finance-glossary/what-is-shareholders-agreement">shareholder agreements (SHA)</a>, and historical term sheets.</li>
                <li><strong>ROC Filings:</strong> Complete history of all filings (AOC-4, MGT-7, etc.).</li>
                <li><strong>IP Documents:</strong> Trademark, patent, or copyright registration certificates. <a href="/startup-finance-glossary/what-is-intellectual-property-assignment">IP assignment agreements</a> from all employees.</li>
            </ul>

            <h3>Folder 2: Financials</h3>
            <ul>
                <li><strong>Financial Statements:</strong> Audited financials for all past years and monthly <a href="/startup-finance-glossary/what-is-mis-report">MIS reports</a> for the last 24 months.</li>
                <li><strong>Financial Model:</strong> Your detailed, driver-based <a href="/startup-finance-glossary/what-is-financial-model">financial model</a> with 3-5 year projections.</li>
                <li><strong>Tax Returns:</strong> All filed Income Tax and GST returns for the last 3 years.</li>
                <li><strong>Bank Statements:</strong> Statements for the last 12-18 months for all company bank accounts.</li>
            </ul>

             <h3>Folder 3: Team & Operations</h3>
            <ul>
                <li><strong>Team Details:</strong> Founders' resumes and an org chart.</li>
                <li><strong>Contracts:</strong> Standard employment contract and all key customer/supplier contracts.</li>
                <li><strong>Policies:</strong> <a href="/startup-finance-glossary/what-is-esop">ESOP</a> policy and grant letters.</li>
            </ul>
        `,
        relatedServices: ['fundraising', 'investor-due-diligence'],
        relatedGlossaryTerms: ['what-is-due-diligence', 'what-is-data-room', 'what-is-capitalization-table']
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
            <p>Focus on the <a href="/startup-finance-glossary/what-is-key-performance-indicator">key performance indicators</a> specific to your business model.</p>
            <ul>
                <li><strong>For SaaS:</strong> Include charts for <a href="/startup-finance-glossary/what-is-monthly-recurring-revenue">MRR</a> Movement (New, Expansion, Churn), <a href="/startup-finance-glossary/what-is-ltvcac-ratio">LTV:CAC ratio</a> over time, and <a href="/startup-finance-glossary/what-is-net-dollar-retention">Net Dollar Retention</a>.</li>
                <li><strong>For D2C:</strong> Include charts for GMV, AOV, ROAS by channel, and Customer Retention Cohorts.</li>
            </ul>
            
            <h3>4. Departmental Highlights (Optional)</h3>
            <p>A single slide from the head of Sales, Marketing, and Product highlighting their key results and priorities for the next month.</p>
        `,
        relatedServices: ['virtual-cfo'],
        relatedGlossaryTerms: ['what-is-mis-report', 'what-is-key-performance-indicator', 'what-is-monthly-recurring-revenue']
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
                <li><strong>Incorporation Docs:</strong> Certificate of Incorporation, MOA, AOA.</li>
                <li><strong>Compliance Certificates:</strong> PAN, TAN, GST, Startup India (DPIIT) certificates.</li>
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
                <li><strong>Agreements:</strong> Standard employment contract, <a href="/startup-finance-glossary/what-is-esop">ESOP</a> plan, and all grant letters.</li>
                <li><strong>IP:</strong> <a href="/startup-finance-glossary/what-is-intellectual-property-assignment">IP assignment agreements</a> from all employees/contractors.</li>
            </ul>
        `,
        relatedServices: ['investor-due-diligence', 'fundraising'],
        relatedGlossaryTerms: ['what-is-due-diligence', 'what-is-data-room', 'what-is-capitalization-table']
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
                        <td><strong><a href="/startup-finance-glossary/what-is-monthly-recurring-revenue">MRR</a> Growth Rate</strong></td>
                        <td>The month-over-month percentage growth in your Monthly Recurring Revenue.</td>
                        <td>The primary indicator of your startup's growth momentum.</td>
                    </tr>
                    <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-net-dollar-retention">Net Dollar Retention (NDR)</a></strong></td>
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
        relatedGlossaryTerms: ['what-is-saas-software-as-a-service', 'what-is-key-performance-indicator', 'what-is-monthly-recurring-revenue']
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
                        <td><strong><a href="/startup-finance-glossary/what-is-return-on-ad-spend">Return on Ad Spend (ROAS)</a></strong></td>
                        <td>The revenue generated for every rupee spent on advertising.</td>
                        <td>The key metric for measuring the effectiveness of your paid marketing campaigns.</td>
                    </tr>
                     <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-customer-acquisition-cost">Customer Acquisition Cost (CAC)</a></strong></td>
                        <td>The total cost to acquire a new customer.</td>
                        <td>Must be compared against LTV to ensure profitable growth.</td>
                    </tr>
                    <tr>
                        <td><strong><a href="/startup-finance-glossary/what-is-average-order-value">Average Order Value (AOV)</a></strong></td>
                        <td>The average amount a customer spends in a single transaction.</td>
                        <td>Increasing AOV is a key lever to improve marketing efficiency.</td>
                    </tr>
                </tbody>
            </table>
        `,
        relatedServices: ['virtual-cfo'],
        relatedGlossaryTerms: ['what-is-d2c-direct-to-consumer', 'what-is-key-performance-indicator', 'what-is-gross-margin']
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
            <p>Define your ideal customer profile (ICP). Estimate the size of your market (<a href="/startup-finance-glossary/what-is-total-addressable-market">TAM</a>) to show the potential scale of the opportunity.</p>

            <h3>4. Go-to-Market Strategy</h3>
            <p>How will you reach your target customers? Outline your key marketing and sales channels (e.g., content marketing, paid ads, direct sales).</p>
            
            <h3>5. The Team</h3>
            <p>Introduce the founding team. Highlight relevant experience and explain why you are the ones to win.</p>
            
            <h3>6. Financial Summary</h3>
            <p>Provide a high-level 3-year projection of key financial metrics: Revenue, Key Expenses, and Profitability/Burn.</p>
            
            <h3>7. The Ask (If applicable)</h3>
            <p>State how much capital you are raising and what key milestones you will achieve with the funds.</p>
        `,
        relatedServices: ['pitch-deck-financial-modelling'],
        relatedGlossaryTerms: ['what-is-business-plan', 'what-is-total-addressable-market']
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
                        <td>Collect KYC (<a href="/startup-finance-glossary/what-is-pan">PAN</a>, Aadhaar) and bank details for payroll.</td>
                        <td>HR/New Hire</td>
                    </tr>
                    <tr>
                        <td><strong>Day 1</strong></td>
                        <td>Collect <a href="/startup-finance-glossary/what-is-employee-provident-fund">PF</a>/<a href="/startup-finance-glossary/what-is-employees-state-insurance">ESI</a> nomination forms and TDS investment declarations.</td>
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
        relatedGlossaryTerms: ['what-is-payroll', 'what-is-tax-deducted-at-source', 'what-is-employee-provident-fund']
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
                <li><strong><a href="/startup-finance-glossary/what-is-founder-vesting">Vesting Schedule</a>:</strong> A 4-year vesting schedule with a 1-year cliff is essential. This protects the company if a founder leaves early.</li>
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
                <li><strong>What are the 3-5 key metrics you will track to measure the success of your GTM plan?</strong> (e.g., Number of new customers, <a href="/startup-finance-glossary/what-is-customer-acquisition-cost">CAC</a>, conversion rate).</li>
            </ul>
        `,
        relatedServices: ['pitch-deck-financial-modelling'],
        relatedGlossaryTerms: ['what-is-go-to-market-gtm-strategy', 'what-is-target-market', 'what-is-customer-acquisition-cost']
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
                <li><strong>Market Size (<a href="/startup-finance-glossary/what-is-total-addressable-market">TAM</a>):</strong> Show investors the scale of the opportunity. Why is this a huge market?</li>
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
        relatedGlossaryTerms: ['what-is-pitch-deck', 'what-is-traction', 'what-is-total-addressable-market']
    },
    {
        title: 'TDS Compliance Calendar',
        description: 'A complete monthly and quarterly TDS compliance calendar for Indian startups — deadlines for deduction, payment, and return filing.',
        Icon: Calculator,
        content: `
            <h2>TDS Compliance Calendar for Indian Startups</h2>
            <p><a href="/startup-finance-glossary/what-is-tds">TDS (Tax Deducted at Source)</a> is one of the most frequent compliance requirements for Indian startups. Missing even a single deadline triggers interest at 1–1.5% per month. Use this calendar as your monthly compliance checklist.</p>

            <h3>Monthly TDS Obligations</h3>
            <table>
                <thead>
                    <tr>
                        <th>Deadline</th>
                        <th>Task</th>
                        <th>Section</th>
                        <th>Penalty for Default</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>7th of every month</strong></td>
                        <td>Deposit TDS deducted in the previous month (Challan 281)</td>
                        <td>Sec 192–194N</td>
                        <td>Interest: 1.5% per month from date of deduction</td>
                    </tr>
                    <tr>
                        <td><strong>30th April</strong></td>
                        <td>Deposit TDS for March (extended deadline)</td>
                        <td>All sections</td>
                        <td>Interest: 1.5% per month</td>
                    </tr>
                </tbody>
            </table>

            <h3>Quarterly TDS Return Filing Deadlines</h3>
            <table>
                <thead>
                    <tr>
                        <th>Quarter</th>
                        <th>Period</th>
                        <th>Filing Deadline</th>
                        <th>Late Fee</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Q1</td>
                        <td>April – June</td>
                        <td><strong>31st July</strong></td>
                        <td>₹200/day under Sec 234E</td>
                    </tr>
                    <tr>
                        <td>Q2</td>
                        <td>July – September</td>
                        <td><strong>31st October</strong></td>
                        <td>₹200/day under Sec 234E</td>
                    </tr>
                    <tr>
                        <td>Q3</td>
                        <td>October – December</td>
                        <td><strong>31st January</strong></td>
                        <td>₹200/day under Sec 234E</td>
                    </tr>
                    <tr>
                        <td>Q4</td>
                        <td>January – March</td>
                        <td><strong>31st May</strong></td>
                        <td>₹200/day under Sec 234E</td>
                    </tr>
                </tbody>
            </table>

            <h3>Key TDS Rates Quick Reference</h3>
            <table>
                <thead>
                    <tr>
                        <th>Payment Type</th>
                        <th>Section</th>
                        <th>TDS Rate (if PAN provided)</th>
                        <th>Threshold (per year)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Salary</td><td>192</td><td>As per slab</td><td>Above basic exemption</td></tr>
                    <tr><td>Professional / Technical Fees</td><td>194J</td><td>10%</td><td>₹30,000</td></tr>
                    <tr><td>Contractor Payments</td><td>194C</td><td>1% (Individual) / 2% (Company)</td><td>₹30,000 (single) / ₹1 lakh (annual)</td></tr>
                    <tr><td>Rent (P&M / Land)</td><td>194I</td><td>2% / 10%</td><td>₹2.4 lakhs/year</td></tr>
                    <tr><td>Interest (Bank)</td><td>194A</td><td>10%</td><td>₹40,000/year</td></tr>
                    <tr><td>Commission / Brokerage</td><td>194H</td><td>5%</td><td>₹15,000</td></tr>
                    <tr><td>Payment to Foreign Companies</td><td>195</td><td>Varies (DTAA applicable)</td><td>No threshold</td></tr>
                </tbody>
            </table>
        `,
        relatedServices: ['regulatory-compliances'],
        relatedGlossaryTerms: ['what-is-tds', 'what-is-form-16', 'what-is-advance-tax']
    },
    {
        title: 'ESOP Policy Template',
        description: 'A framework for drafting an ESOP policy for your Indian startup — covering pool size, vesting, exercise, and tax implications.',
        Icon: Users,
        content: `
            <h2>ESOP Policy Framework for Indian Startups</h2>
            <p>An <a href="/startup-finance-glossary/what-is-esop">ESOP policy</a> is the legal foundation of your employee equity programme. Under Section 62(1)(b) of the Companies Act, a Private Limited Company can issue ESOPs only under a formal, board-approved scheme. This template outlines the essential elements your ESOP policy must cover.</p>

            <h3>1. Scheme Overview</h3>
            <ul>
                <li><strong>Scheme Name:</strong> [Company Name] Employee Stock Option Plan 20XX</li>
                <li><strong>Total Pool Size:</strong> [X]% of fully diluted share capital (typically 10–15%)</li>
                <li><strong>Eligibility:</strong> Permanent employees and directors (excluding promoter directors holding >10%)</li>
                <li><strong>Administering Committee:</strong> Compensation Committee / Board of Directors</li>
            </ul>

            <h3>2. Vesting Schedule</h3>
            <table>
                <thead>
                    <tr><th>Period</th><th>Cumulative Vesting</th></tr>
                </thead>
                <tbody>
                    <tr><td>Year 1 (Cliff)</td><td>25% vests at 12-month anniversary</td></tr>
                    <tr><td>Year 2</td><td>Additional 25% (monthly over 12 months)</td></tr>
                    <tr><td>Year 3</td><td>Additional 25% (monthly over 12 months)</td></tr>
                    <tr><td>Year 4</td><td>Final 25% (monthly over 12 months)</td></tr>
                </tbody>
            </table>

            <h3>3. Key Terms</h3>
            <ul>
                <li><strong>Grant Date:</strong> The date on which options are formally granted (requires board resolution)</li>
                <li><strong>Exercise Price:</strong> Fair Market Value (FMV) at the time of grant (for unlisted companies, determined by a registered valuer)</li>
                <li><strong>Exercise Period:</strong> Vested options must be exercised within [3–5 years] of vesting or they lapse</li>
                <li><strong>Lock-in:</strong> Shares acquired on exercise are locked in for [1 year] from the date of exercise</li>
            </ul>

            <h3>4. Tax Implications</h3>
            <ul>
                <li><strong>At Grant:</strong> No tax liability</li>
                <li><strong>At Exercise:</strong> Perquisite tax — difference between FMV and exercise price taxed at employee's income tax slab. Employer must deduct TDS.</li>
                <li><strong>At Sale:</strong> Capital gains tax — STCG at slab rate (held &lt; 24 months for unlisted shares); LTCG at 20% with indexation (held ≥ 24 months).</li>
            </ul>

            <h3>5. Leaver Provisions</h3>
            <ul>
                <li><strong>Good Leaver (resignation after 2 years, retirement, death, disability):</strong> Retains vested options; unvested options lapse.</li>
                <li><strong>Bad Leaver (termination for cause, resignation before cliff):</strong> All options (vested and unvested) lapse.</li>
            </ul>
        `,
        relatedServices: ['corporate-law'],
        relatedGlossaryTerms: ['what-is-esop', 'what-is-vesting-schedule', 'what-is-esop-pool', 'what-is-perquisite-tax-on-esop']
    },
    {
        title: 'Salary Structure & CTC Breakup Template',
        description: 'A tax-optimised salary structure template for Indian startups — showing how to split CTC into components that minimise employee tax.',
        Icon: IndianRupee,
        content: `
            <h2>Tax-Optimised Salary Structure for Indian Startups</h2>
            <p>How you structure an employee's <a href="/startup-finance-glossary/what-is-cost-to-company">CTC</a> significantly affects their take-home pay and your company's compliance burden. A well-designed salary structure maximises tax exemptions legally. Here is a model structure for a ₹12 LPA (₹1 lakh/month) CTC employee.</p>

            <h3>Sample Salary Breakup — ₹12 LPA CTC</h3>
            <table>
                <thead>
                    <tr>
                        <th>Component</th>
                        <th>Monthly (₹)</th>
                        <th>Annual (₹)</th>
                        <th>Tax Treatment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><strong>Basic Salary</strong></td><td>40,000</td><td>4,80,000</td><td>Fully taxable</td></tr>
                    <tr><td><strong>HRA</strong> (50% of Basic, metro)</td><td>20,000</td><td>2,40,000</td><td>Partially exempt (for rent-paying employees)</td></tr>
                    <tr><td><strong>Special Allowance</strong></td><td>18,300</td><td>2,19,600</td><td>Fully taxable</td></tr>
                    <tr><td><strong>Leave Travel Allowance (LTA)</strong></td><td>2,500</td><td>30,000</td><td>Exempt for domestic travel (twice in 4 years)</td></tr>
                    <tr><td><strong>Mobile Reimbursement</strong></td><td>1,500</td><td>18,000</td><td>Exempt against bills</td></tr>
                    <tr><td><strong>Employee PF (12% of Basic)</strong></td><td>4,800</td><td>57,600</td><td>Deductible under Sec 80C for employee</td></tr>
                    <tr><td><strong>Employer PF (12% of Basic)</strong></td><td>4,800</td><td>57,600</td><td>Cost to company; not taxed on employee</td></tr>
                    <tr><td><strong>Gratuity Provision</strong></td><td>1,923</td><td>23,077</td><td>Exempt on actual receipt after 5 years</td></tr>
                    <tr><td><strong>ESI (if applicable)</strong></td><td>—</td><td>—</td><td>Not applicable above ₹21,000/month gross</td></tr>
                    <tr><td><strong>Total CTC</strong></td><td><strong>93,823</strong></td><td><strong>11,25,877</strong></td><td></td></tr>
                </tbody>
            </table>

            <h3>Key Structuring Principles</h3>
            <ul>
                <li><strong>Keep Basic at 40–50% of CTC:</strong> Lower basic = lower PF contributions (reduces cost for both employer and employee) but may not suit senior employees who rely on PF for retirement savings.</li>
                <li><strong>Maximise reimbursements:</strong> Fuel, meal vouchers, books, and mobile reimbursements are exempt against actual bills — effectively tax-free salary components.</li>
                <li><strong>Use the New Tax Regime carefully:</strong> Under the New Tax Regime (default from FY 2024-25), most exemptions (HRA, LTA, Sec 80C) are not available. Employees should compare both regimes at the start of the year.</li>
                <li><strong>NPS contribution by employer:</strong> Employer NPS contributions (up to 10% of basic) are additionally deductible for the employer and exempt for the employee — a powerful retention tool for senior hires.</li>
            </ul>
        `,
        relatedServices: ['regulatory-compliances', 'virtual-cfo'],
        relatedGlossaryTerms: ['what-is-cost-to-company', 'what-is-payroll', 'what-is-tds', 'what-is-employee-provident-fund']
    },
    {
        title: 'Financial Model Template (3-Year)',
        description: 'A 3-year financial model framework for Indian startups covering revenue drivers, cost structure, and cash flow projections for fundraising.',
        Icon: FileSpreadsheet,
        content: `
            <h2>3-Year Financial Model Structure for Startups</h2>
            <p>A <a href="/startup-finance-glossary/what-is-financial-model">financial model</a> is your quantified business plan. Investors use it to stress-test your assumptions and evaluate capital efficiency. This template outlines the standard structure for a fundraising-ready financial model.</p>

            <h3>Tab 1: Assumptions Dashboard</h3>
            <p>Centralise all key inputs here so the model can be updated by changing a single cell. Key assumptions to document:</p>
            <ul>
                <li><strong>Revenue drivers:</strong> Pricing per plan/product, conversion rates, growth rates per channel, seasonality factors</li>
                <li><strong>Headcount plan:</strong> Hiring timeline, salary bands per role, annual increments</li>
                <li><strong>COGS drivers:</strong> % of revenue for hosting, support, COGS per unit</li>
                <li><strong>Working capital assumptions:</strong> Debtor days, creditor days, inventory turns (if applicable)</li>
                <li><strong>Funding assumptions:</strong> Amount and timing of future raises, interest rates on debt</li>
            </ul>

            <h3>Tab 2: Revenue Model</h3>
            <table>
                <thead>
                    <tr><th>Metric</th><th>Year 1</th><th>Year 2</th><th>Year 3</th></tr>
                </thead>
                <tbody>
                    <tr><td>Opening customers</td><td>—</td><td>—</td><td>—</td></tr>
                    <tr><td>New customers added</td><td>—</td><td>—</td><td>—</td></tr>
                    <tr><td>Churned customers</td><td>—</td><td>—</td><td>—</td></tr>
                    <tr><td>Closing customers</td><td>—</td><td>—</td><td>—</td></tr>
                    <tr><td>ARPU (₹/month)</td><td>—</td><td>—</td><td>—</td></tr>
                    <tr><td><strong>MRR</strong></td><td>—</td><td>—</td><td>—</td></tr>
                    <tr><td><strong>ARR</strong></td><td>—</td><td>—</td><td>—</td></tr>
                </tbody>
            </table>

            <h3>Tab 3: P&L Summary</h3>
            <table>
                <thead>
                    <tr><th>Line Item</th><th>Year 1</th><th>Year 2</th><th>Year 3</th></tr>
                </thead>
                <tbody>
                    <tr><td>Total Revenue</td><td></td><td></td><td></td></tr>
                    <tr><td>(–) COGS</td><td></td><td></td><td></td></tr>
                    <tr><td><strong>Gross Profit</strong></td><td></td><td></td><td></td></tr>
                    <tr><td><strong>Gross Margin %</strong></td><td></td><td></td><td></td></tr>
                    <tr><td>(–) Sales & Marketing</td><td></td><td></td><td></td></tr>
                    <tr><td>(–) Technology / R&D</td><td></td><td></td><td></td></tr>
                    <tr><td>(–) General & Administrative</td><td></td><td></td><td></td></tr>
                    <tr><td><strong>EBITDA</strong></td><td></td><td></td><td></td></tr>
                    <tr><td>(–) Depreciation & Amortisation</td><td></td><td></td><td></td></tr>
                    <tr><td><strong>EBIT</strong></td><td></td><td></td><td></td></tr>
                    <tr><td>(–) Interest</td><td></td><td></td><td></td></tr>
                    <tr><td><strong>PBT (Profit Before Tax)</strong></td><td></td><td></td><td></td></tr>
                    <tr><td>(–) Tax</td><td></td><td></td><td></td></tr>
                    <tr><td><strong>PAT (Net Profit)</strong></td><td></td><td></td><td></td></tr>
                </tbody>
            </table>

            <h3>Tab 4: Cash Flow & Funding Requirement</h3>
            <ul>
                <li>Opening Cash Balance → Operating Cash Flow → Investing Cash Flow → Financing Cash Flow → Closing Cash Balance</li>
                <li>Highlight the months where cash goes negative — this is your <strong>funding requirement timeline</strong></li>
                <li>Show clearly: how much capital is needed, when it is needed, and what milestones it funds</li>
            </ul>
        `,
        relatedServices: ['pitch-deck-financial-modelling', 'virtual-cfo'],
        relatedGlossaryTerms: ['what-is-financial-model', 'what-is-annual-recurring-revenue', 'what-is-ebitda', 'what-is-runway']
    },
    {
        title: 'Startup India DPIIT Registration Checklist',
        description: 'A step-by-step checklist for getting your startup recognised under the Startup India scheme for tax exemptions and benefits.',
        Icon: Building,
        content: `
            <h2>Startup India (DPIIT) Recognition — Step-by-Step Checklist</h2>
            <p><a href="/startup-finance-glossary/what-is-startup-india-dpiit-recognition">DPIIT recognition</a> unlocks significant benefits including a 3-year income tax holiday (Section 80IAC), angel tax exemption (Section 56(2)(viib)), and self-certification of 9 labour laws. Registration is free and typically takes 2–5 business days.</p>

            <h3>Eligibility Criteria — Confirm All Four</h3>
            <ul>
                <li>✅ Incorporated as a Pvt Ltd, LLP, or Registered Partnership</li>
                <li>✅ Incorporated less than <strong>10 years ago</strong></li>
                <li>✅ Annual turnover in any financial year has not exceeded <strong>₹100 Crore</strong></li>
                <li>✅ Working towards <strong>innovation, development, or improvement</strong> of products/services, or is a scalable business model with high employment/wealth creation potential</li>
            </ul>

            <h3>Documents Required</h3>
            <table>
                <thead>
                    <tr>
                        <th>Document</th>
                        <th>Where to Get It</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Certificate of Incorporation</td><td>MCA portal</td></tr>
                    <tr><td>PAN of the company</td><td>Income Tax portal</td></tr>
                    <tr><td>Proof of concept / Pitch deck / Product demo link</td><td>Prepare internally</td></tr>
                    <tr><td>Brief description of innovation / business model (up to 500 words)</td><td>Prepare internally</td></tr>
                    <tr><td>Awards / patents / media coverage (optional but strengthens application)</td><td>Collect if available</td></tr>
                </tbody>
            </table>

            <h3>Registration Steps</h3>
            <ol>
                <li>Go to <strong>startupindia.gov.in</strong> → Login with DPIIT credentials (create account if new)</li>
                <li>Select "Apply for Startup Recognition"</li>
                <li>Fill in company details: CIN, date of incorporation, sector, stage</li>
                <li>Upload Certificate of Incorporation and PAN</li>
                <li>Describe your innovation — be specific about what problem you solve and how it is novel</li>
                <li>Submit — you will receive a DPIIT recognition number within 2–5 working days</li>
            </ol>

            <h3>Key Benefits After Recognition</h3>
            <ul>
                <li><strong>Section 80IAC Tax Holiday:</strong> Apply separately to DIPP/CBDT for 3-year income tax exemption (requires profitability, so applies when you turn profitable)</li>
                <li><strong>Angel Tax Exemption:</strong> Investments at a premium above fair market value are not treated as income (Section 56(2)(viib) exemption)</li>
                <li><strong>Fast-Track Patent:</strong> 80% rebate on patent fees and fast-track examination</li>
                <li><strong>Labour Self-Certification:</strong> Self-certify compliance under 9 labour laws for 3 years from incorporation</li>
            </ul>
        `,
        relatedServices: ['business-setup', 'regulatory-compliances'],
        relatedGlossaryTerms: ['what-is-startup-india-dpiit-recognition', 'what-is-private-limited-company', 'what-is-angel-investor']
    }
];

export const TEMPLATES_DATA: TemplateData[] = TEMPLATES_RAW.map(template => ({
  ...template,
  slug: slugify(template.title),
  h1: template.title,
}));
