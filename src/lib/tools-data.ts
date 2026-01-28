
import { Calculator, CheckSquare, Presentation, Percent, Users, CircleDollarSign, Wallet, TrendingUp } from 'lucide-react';

export const TOOLS_DATA = [
  {
    slug: 'startup-burn-rate-runway-calculator',
    title: 'Startup Burn Rate & Runway Calculator',
    description: 'Calculate your net burn and runway to understand how long your startup can survive with its current cash reserves.',
    Icon: Calculator,
    component: 'BurnRateCalculator',
    explanation: `
        <h2>Understanding Your Burn Rate and Runway</h2>
        <p>For any startup, cash is oxygen. Your <strong>burn rate</strong> is the rate at which you are spending your cash reserves, and your <strong>runway</strong> is the number of months you have left before that cash runs out. These are the most critical survival metrics for an early-stage company.</p>
        <h3>What is Net Burn?</h3>
        <p>Your <strong>Net Burn</strong> is the true measure of your monthly cash loss. It's calculated as: <code>Monthly Expenses - Monthly Revenue</code>. A positive net burn means you are spending more than you earn. Tracking this number helps you understand the real cost of your operations.</p>
        <h3>What is Runway?</h3>
        <p>Your <strong>Runway</strong> is simply: <code>Total Cash Balance / Monthly Net Burn</code>. It tells you how long you can continue to operate at your current burn rate. Knowing your runway is crucial for planning your next fundraising round. Most startups aim to start fundraising when they have 9-12 months of runway left.</p>
        <h3>How to Use This Information</h3>
        <p>A short runway is a signal to take action. You can either reduce your burn rate by cutting costs, or you can increase your cash inflows by boosting sales or raising more capital. This calculator gives you the clarity needed to make those decisions proactively.</p>
    `
  },
  {
    slug: 'saas-ltv-cac-calculator',
    title: 'SaaS LTV to CAC Ratio Calculator',
    description: 'Analyze the viability of your SaaS business by calculating your Customer Lifetime Value (LTV) and Customer Acquisition Cost (CAC).',
    Icon: TrendingUp,
    component: 'SaaSCalculator',
    explanation: `
        <h2>Decoding Your SaaS Unit Economics</h2>
        <p>The LTV to CAC ratio is the single most important metric for understanding the long-term profitability and scalability of a SaaS business. It answers the question: "Is the value a customer brings over their lifetime greater than the cost to acquire them?"</p>
        <h3>What is LTV (Customer Lifetime Value)?</h3>
        <p><strong>LTV</strong> is the total revenue you can expect to generate from a single customer before they churn. Our calculator uses the formula: <code>(ARPA * Gross Margin %) / Churn %</code>. A high LTV indicates a sticky product that customers value.</p>
        <h3>What is CAC (Customer Acquisition Cost)?</h3>
        <p><strong>CAC</strong> is the total sales and marketing cost required to acquire one new customer. It's calculated as: <code>Total S&M Spend / New Customers</code>. An efficient marketing engine results in a low CAC.</p>
        <h3>Interpreting the LTV:CAC Ratio</h3>
        <ul>
            <li><strong>Less than 1:1:</strong> A critical problem. You are losing money on every customer you acquire.</li>
            <li><strong>1:1 to 3:1:</strong> Needs improvement. Your business model may not be profitable or scalable.</li>
            <li><strong>3:1 or higher:</strong> A healthy business model. This is the benchmark most VCs look for.</li>
            <li><strong>5:1 or higher:</strong> Excellent. You may be underinvesting in marketing and could be growing faster.</li>
        </ul>
    `
  },
    {
    slug: 'breakeven-point-calculator',
    title: 'Breakeven Point Calculator',
    description: 'Determine the sales volume required to cover your costs and start generating a profit. A fundamental tool for any business.',
    Icon: CircleDollarSign,
    component: 'BreakevenCalculator',
    explanation: `
        <h2>Finding Your Profitability Tipping Point</h2>
        <p>The <strong>Break-Even Point</strong> is the moment your business is no longer losing money. It's the number of units you need to sell to cover all your costs. Every sale beyond this point is pure profit.</p>
        <h3>Understanding the Components</h3>
        <ul>
            <li><strong>Fixed Costs:</strong> Expenses that don't change with sales volume, like rent and salaries.</li>
            <li><strong>Variable Costs:</strong> Costs that are directly tied to each unit sold, like raw materials and shipping.</li>
            <li><strong>Contribution Margin:</strong> The profit from each unit sold that "contributes" to covering your fixed costs. It's calculated as: <code>Selling Price per Unit - Variable Cost per Unit</code>.</li>
        </ul>
        <h3>The Break-Even Formula</h3>
        <p>The calculator uses the formula: <code>Break-Even Point (in units) = Total Fixed Costs / Contribution Margin per Unit</code>.</p>
        <h3>Strategic Use</h3>
        <p>Use this analysis to set sales targets, test pricing strategies (a higher price lowers your break-even point), and understand the financial viability of new products.</p>
    `
  },
  {
    slug: 'esop-dilution-calculator',
    title: 'ESOP Dilution Calculator',
    description: 'Model how creating or increasing an Employee Stock Option Pool (ESOP) will impact the ownership percentage of founders and existing shareholders.',
    Icon: Users,
    component: 'EsopCalculator',
    explanation: `
        <h2>Understanding ESOP Dilution</h2>
        <p>An Employee Stock Option Pool (ESOP) is essential for attracting top talent, but it comes at a cost: <strong>dilution</strong>. This calculator helps you understand how creating a new ESOP pool will reduce the ownership percentage of existing shareholders (like you and your co-founders).</p>
        <h3>What is Dilution?</h3>
        <p>Dilution is the decrease in an existing shareholder's ownership percentage of a company as a result of the company issuing new shares. When you create an ESOP pool, you are setting aside a new block of shares, which dilutes everyone who owned shares before the pool was created.</p>
        <h3>The "Pre-Money" Shuffle</h3>
        <p>When you raise a funding round, investors will almost always require you to create or increase the ESOP pool as part of the <strong>pre-money</strong> valuation. This means the dilution from the option pool is borne entirely by the founders and existing shareholders, not the new investors. This calculator models that exact scenario.</p>
        <h3>How to Use This Tool</h3>
        <p>Enter your current cap table and the desired ESOP pool percentage. The "Post-Dilution Ownership" column shows what your new ownership percentages will be *after* the pool is created but *before* a new investor's money comes in. This is a critical piece of information for any fundraising negotiation.</p>
    `
  },
    {
    slug: 'working-capital-calculator',
    title: 'Working Capital Calculator',
    description: 'Quickly calculate your company\'s working capital to assess its short-term operational liquidity and financial health.',
    Icon: Wallet,
    component: 'WorkingCapitalCalculator',
    explanation: `
        <h2>Assessing Your Short-Term Financial Health</h2>
        <p><strong>Working Capital</strong> is a key measure of a company's operational liquidity and its ability to meet its short-term obligations. It represents the difference between your short-term assets and your short-term liabilities.</p>
        <h3>Understanding the Components</h3>
        <ul>
            <li><strong>Current Assets:</strong> Assets that can be converted into cash within one year, such as cash in bank, accounts receivable (money owed by customers), and inventory.</li>
            <li><strong>Current Liabilities:</strong> Obligations that are due within one year, such as accounts payable (money owed to suppliers), short-term loans, and salaries payable.</li>
        </ul>
        <h3>Interpreting the Result</h3>
        <ul>
            <li><strong>Positive Working Capital:</strong> This is generally a healthy sign. It indicates that you have enough short-term assets to cover your short-term liabilities.</li>
            <li><strong>Negative Working Capital:</strong> This can be a red flag. It may signal that you could face challenges in meeting your immediate financial obligations, potentially leading to a cash crunch. However, some business models, like subscription businesses with upfront annual payments, can operate with negative working capital in a healthy way.</li>
        </ul>
        <p>Regularly monitoring your working capital is essential for effective cash flow management.</p>
    `
  },
    {
    slug: 'compound-interest-calculator',
    title: 'Compound Interest Calculator',
    description: 'Project the future value of your investments or savings with our compound interest calculator. Understand the power of compounding over time.',
    Icon: TrendingUp,
    component: 'CompoundInterestCalculator',
    explanation: `
        <h2>Unleashing the Power of Compounding</h2>
        <p>Albert Einstein reportedly called <strong>compound interest</strong> the "eighth wonder of the world." This calculator demonstrates why. Compounding is the process where your investment returns themselves start earning returns, leading to exponential growth over time.</p>
        <h3>How It Works</h3>
        <p>Unlike simple interest, which is calculated only on the initial principal, compound interest is calculated on the principal plus all the accumulated interest from previous periods. The more frequently your interest is compounded (e.g., monthly vs. annually), the faster your investment grows.</p>
        <h3>Key Terms</h3>
        <ul>
            <li><strong>Principal:</strong> The initial amount of your investment.</li>
            <li><strong>Interest Rate:</strong> The annual rate of return on your investment.</li>
            <li><strong>Compounding Frequency:</strong> How often the interest is calculated and added to the principal (e.g., annually, quarterly, monthly).</li>
        </ul>
        <h3>The Takeaway for Founders</h3>
        <p>This principle doesn't just apply to personal investing. It highlights the importance of long-term thinking in business. A small, consistent improvement in your monthly growth rate or profit margin can compound into a massive difference in your company's value over several years.</p>
    `
  },
  {
    slug: 'gst-late-fee-calculator',
    title: 'GST Late Fee Calculator',
    description: 'Calculate the potential penalty for delayed filing of GSTR-1 and GSTR-3B returns to understand the cost of non-compliance.',
    Icon: Percent,
    component: 'GstCalculator',
    explanation: `
        <h2>The High Cost of GST Non-Compliance</h2>
        <p>Failing to file your GST returns on time is not a mistake your startup can afford to make. The Goods and Services Tax regime in India has strict penalties for late filings, which can quickly add up and impact your cash flow.</p>
        <h3>How Late Fees Are Calculated</h3>
        <p>Late fees for GSTR-1 and GSTR-3B are levied on a per-day basis from the due date until the return is filed. The penalty amount depends on your turnover and is subject to a maximum cap per return.</p>
        <ul>
            <li><strong>For Nil Returns:</strong> The penalty is lower, typically ₹20 per day (₹10 CGST + ₹10 SGST).</li>
            <li><strong>For Other Returns:</strong> The penalty is higher, typically ₹50 per day (₹25 CGST + ₹25 SGST).</li>
        </ul>
        <h3>Don't Forget the Interest!</h3>
        <p>This calculator only estimates the late filing fee. In addition to this penalty, you are also liable to pay <strong>interest at 18% per annum</strong> on any unpaid tax liability. This interest is calculated from the due date of payment until the date the tax is actually paid. The combination of late fees and interest can make delaying your GST compliance a very expensive error.</p>
    `
  },
  {
    slug: 'fundraising-due-diligence-checklist',
    title: 'Fundraising Due Diligence Checklist',
    description: 'An interactive checklist to ensure you have all the necessary documents and information ready for investor due diligence.',
    Icon: CheckSquare,
    component: 'DueDiligenceChecklist',
    explanation: `
        <h2>Preparing for Investor Scrutiny</h2>
        <p><strong>Due diligence</strong> is the process where investors verify the information you've provided and assess any potential risks before they invest. A well-organized and complete data room is a sign of a professional founder and can significantly speed up the funding process. This checklist covers the key documents investors will ask for.</p>
        <h3>Why is This Important?</h3>
        <p>A disorganized data room or missing documents raises immediate red flags for investors. It suggests a lack of financial discipline or, worse, that you might be hiding something. Being "diligence-ready" before you even start fundraising gives you a major advantage and allows you to control the narrative.</p>
        <h3>Key Areas of Focus</h3>
        <ul>
            <li><strong>Corporate & Legal:</strong> This section proves your company is a clean, legal entity with clear ownership. Your cap table and IP assignment agreements are critical here.</li>
            <li><strong>Financial:</strong> This is where investors validate your traction and financial health. Audited financials and a detailed MIS are essential.</li>
            <li><strong>Team & HR:</strong> This demonstrates how you manage your most important asset—your people. Signed employment contracts and a clear ESOP policy are key.</li>
        </ul>
        <p>Use this checklist to proactively gather your documents and build a data room that inspires investor confidence.</p>
    `
  },
];
