
import { Briefcase, FileCheck, BookUser, Users, DollarSign, Wallet, AlertTriangle, Eye, BarChart, Scale, PiggyBank } from 'lucide-react';

export interface PricingPageData {
  slug: string;
  title: string;
  description: string;
  h1: string;
  Icon: React.ElementType;
  intro: {
    title: string;
    content: string[];
  };
  costFactors: {
    title: string;
    points: {
      title: string;
      description: string;
    }[];
  };
  pricingTable?: {
    title: string;
    headers: string[];
    rows: {
      feature: string;
      values: string[];
    }[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export const PRICING_PAGES_DATA: PricingPageData[] = [
  {
    slug: 'virtual-cfo-cost-in-india',
    title: 'Virtual CFO Cost in India | Pricing Guide | Nexa Consultancy',
    description: 'Understand the cost of Virtual CFO (vCFO) services in India. Our guide covers pricing models, cost factors, and typical retainers for startups.',
    h1: 'Virtual CFO Cost in India',
    Icon: Briefcase,
    intro: {
        title: 'Investing in Strategic Financial Leadership',
        content: [
            'Hiring a full-time Chief Financial Officer (CFO) can cost a startup upwards of ₹40-80 Lakhs per year. A Virtual CFO provides access to the same high-level strategic guidance—from fundraising support to financial modeling—for a fraction of the cost.',
            'The cost isn\'t just for an accountant; it\'s for a strategic partner who helps you navigate growth, manage cash flow, and communicate effectively with investors. The pricing for these services is not one-size-fits-all and depends on several key factors.'
        ]
    },
    costFactors: {
        title: 'What Drives Virtual CFO Costs?',
        points: [
            { title: 'Startup Stage & Complexity', description: 'A Series A startup with multiple product lines requires more strategic involvement than a pre-seed company.' },
            { title: 'Scope of Work', description: 'A comprehensive scope including board reporting, fundraising support, and KPI management costs more than basic financial oversight.' },
            { title: 'Transaction Volume', description: 'Higher transaction volumes require more time for review and analysis, impacting the overall cost.' },
            { title: 'Industry Nuances', description: 'FinTech or D2C startups with complex compliance or inventory needs may require more specialized and intensive support.' },
        ]
    },
    pricingTable: {
        title: 'Typical Monthly vCFO Retainers',
        headers: ['Startup Stage', 'Typical Monthly Cost Range (INR)'],
        rows: [
            { feature: 'Pre-Seed / Early Stage', values: ['₹50,000 - ₹1,00,000'] },
            { feature: 'Seed / Growth Stage', values: ['₹1,00,000 - ₹2,00,000'] },
            { feature: 'Series A / Scaling', values: ['₹2,00,000 - ₹4,00,000+'] },
        ]
    },
    faqs: [
        { question: 'What is included in a Virtual CFO retainer?', answer: 'Typically, it includes monthly financial reviews, MIS & KPI dashboarding, cash flow forecasting, budget vs. actuals analysis, and strategic guidance. Fundraising support may be a separate, project-based fee.' },
        { question: 'Is a vCFO cheaper than a full-time CFO?', answer: 'Yes, significantly. A vCFO provides senior-level expertise without the cost of a full-time executive salary, benefits, and equity.' },
        { question: 'How is the vCFO cost different from accounting fees?', answer: 'Accounting fees cover the cost of bookkeeping and basic compliance—recording the past. vCFO costs cover forward-looking strategic work—planning for the future.' },
    ]
  },
  {
    slug: 'startup-compliance-cost',
    title: 'Startup Compliance Cost in India | A Complete Guide | Nexa Consultancy',
    description: 'Understand the mandatory compliance costs for startups in India, including ROC filings, tax returns, and secretarial services. Avoid hidden penalties.',
    h1: 'Startup Compliance Cost',
    Icon: FileCheck,
    intro: {
        title: 'The Non-Negotiable Cost of Doing Business',
        content: [
            'For a startup in India, compliance is not optional. From annual ROC filings to GST and TDS returns, a complex web of regulations governs every business. The cost of this compliance should be factored into your budget from day one.',
            'While it may seem like a non-revenue-generating expense, the cost of compliance is always lower than the cost of non-compliance, which can include steep penalties, legal troubles, and a loss of investor confidence.'
        ]
    },
    costFactors: {
        title: 'What Influences Compliance Costs?',
        points: [
            { title: 'Entity Type', description: 'A Private Limited Company has higher compliance costs (e.g., statutory audit, board meetings) than an LLP.' },
            { title: 'Business Activity', description: 'A simple SaaS business has fewer compliance needs than a manufacturing company subject to factory and environmental laws.' },
            { title: 'Number of Registrations', description: 'Operating in multiple states requires separate GST registrations, increasing filing costs.' },
            { title: 'Transaction Complexity', description: 'Dealing with foreign payments or complex stock structures adds layers of FEMA and ROC compliance.' },
        ]
    },
     pricingTable: {
        title: 'Estimated Annual Compliance Costs (Core Package)',
        headers: ['Compliance Area', 'Typical Annual Cost Range (INR)'],
        rows: [
            { feature: 'Annual ROC Filings (AOC-4, MGT-7)', values: ['₹15,000 - ₹30,000'] },
            { feature: 'Annual Income Tax Return', values: ['₹10,000 - ₹25,000'] },
            { feature: 'Monthly/Quarterly GST & TDS Filings', values: ['₹60,000 - ₹1,50,000'] },
            { feature: 'Basic Secretarial Retainer', values: ['₹25,000 - ₹50,000'] },
        ]
    },
    faqs: [
        { question: 'Can I do compliance myself?', answer: 'While technically possible for very simple cases, it\'s highly inadvisable. The laws are complex and constantly changing. Mistakes can lead to penalties far exceeding the cost of professional help.' },
        { question: 'What is the cost of non-compliance?', answer: 'For ROC filings alone, the late fee is ₹100 per day, per form. TDS defaults can lead to disallowance of expenses, and GST non-compliance can block working capital. The costs are significant.' },
        { question: 'When should I hire a compliance firm?', answer: 'From day one. Your first compliance obligations, like appointing an auditor, begin within 30 days of incorporation.' },
    ]
  },
  {
    slug: 'bookkeeping-cost',
    title: 'Bookkeeping Cost for Startups in India | Nexa Consultancy',
    description: 'Find out the cost of professional bookkeeping services for startups in India. Learn about pricing models based on transaction volume and complexity.',
    h1: 'Bookkeeping Cost for Startups',
    Icon: BookUser,
    intro: {
        title: 'The Foundation of Financial Clarity',
        content: [
            'Bookkeeping is the disciplined, day-to-day process of recording all your financial transactions. It\'s the foundation upon which all financial reporting, tax compliance, and strategic analysis is built. Investing in professional bookkeeping is not a cost; it\'s an investment in data accuracy and peace of mind.',
            'The cost of bookkeeping services in India for startups typically depends on the volume and complexity of transactions, not the startup\'s revenue.'
        ]
    },
    costFactors: {
        title: 'Key Drivers of Bookkeeping Costs',
        points: [
            { title: 'Transaction Volume', description: 'The primary driver. A business with 500 monthly transactions requires more work than one with 50.' },
            { title: 'Number of Bank Accounts & Credit Cards', description: 'Each account needs to be reconciled monthly, adding to the workload.' },
            { title: 'Industry Complexity', description: 'An e-commerce brand with marketplace reconciliation has more complex needs than a simple consulting business.' },
            { title: 'Payroll & Expense Management', description: 'The number of employees and the complexity of expense reporting can influence the cost.' },
        ]
    },
     pricingTable: {
        title: 'Typical Monthly Bookkeeping Retainers',
        headers: ['Startup Profile', 'Typical Monthly Cost Range (INR)'],
        rows: [
            { feature: 'Early Stage ( < 100 transactions/mo)', values: ['₹10,000 - ₹20,000'] },
            { feature: 'Growth Stage (100-500 transactions/mo)', values: ['₹20,000 - ₹40,000'] },
            { feature: 'Scaling (500+ transactions/mo)', values: ['₹40,000 - ₹75,000+'] },
        ]
    },
    faqs: [
        { question: 'Can\'t I just use accounting software myself?', answer: 'While software is a great tool, professional bookkeepers ensure transactions are categorized correctly, accounts are reconciled, and data is compliant with accounting standards. This accuracy is crucial.' },
        { question: 'What\'s included in a bookkeeping package?', answer: 'Typically includes transaction recording, bank and credit card reconciliation, and preparation of monthly financial statements (P&L, Balance Sheet, Cash Flow).' },
        { question: 'How is this different from a Virtual CFO?', answer: 'Bookkeeping is about recording the past accurately. A vCFO uses this data to plan for the future, providing strategic guidance. They are complementary services.' },
    ]
  },
  {
    slug: 'finance-team-cost-comparison',
    title: 'In-House vs Outsourced Finance Team Cost | Nexa Consultancy',
    description: 'Compare the cost of hiring an in-house finance team (Accountant, CA, CFO) vs. outsourcing to a firm like Nexa. Understand the real costs beyond just salary.',
    h1: 'Finance Team Cost Comparison',
    Icon: Users,
    intro: {
        title: 'Building Your Finance Function: The "Buy vs. Build" Decision',
        content: [
            'As your startup scales, you need a robust finance function. You face a critical decision: should you "build" an in-house team by hiring an accountant, a manager, and eventually a CFO? Or should you "buy" these services by outsourcing to a specialized firm?',
            'This is not just a cost comparison. It\'s a strategic decision about focus, expertise, and scalability. An in-house team brings dedicated focus, while an outsourced firm offers broader expertise and flexibility without the burden of fixed costs.'
        ]
    },
    costFactors: {
        title: 'Factors to Consider Beyond Salary',
        points: [
            { title: 'Total Employment Cost', description: 'This includes not just salary but also PF, ESI, insurance, bonuses, and other benefits, which can add 25-40% to the base salary.' },
            { title: 'Recruitment & Training Costs', description: 'The time and money spent on finding, hiring, and training new team members.' },
            { title: 'Management Overhead', description: 'The time you, as a founder, will spend managing the finance team instead of focusing on the core business.' },
            { title: 'Technology & Software Costs', description: 'The cost of accounting software, payroll systems, and other tools the team will need.' },
        ]
    },
     pricingTable: {
        title: 'Annual Cost Comparison: In-House vs. Outsourced',
        headers: ['Role/Service', 'Typical In-House Annual Cost (INR)', 'Typical Outsourced Annual Cost (INR)'],
        rows: [
            { feature: 'Junior Accountant (Bookkeeping)', values: ['₹4,00,000 - ₹7,00,000', '₹1,20,000 - ₹2,40,000'] },
            { feature: 'Finance Manager (CA, Compliance)', values: ['₹12,00,000 - ₹20,00,000', 'Included in vCFO/Compliance retainer'] },
            { feature: 'CFO (Strategic Finance)', values: ['₹40,00,000 - ₹80,00,000+', '₹12,00,000 - ₹30,00,000 (vCFO)'] },
            { feature: 'Total Team', values: ['₹56,00,000+', '₹15,00,000+ (for a comprehensive package)'] },
        ]
    },
    faqs: [
        { question: 'When should I hire my first in-house finance person?', answer: 'A common trigger is when the volume and complexity of day-to-day transactions become too much for an outsourced bookkeeper alone, and you need someone on-site to manage daily financial operations.' },
        { question: 'What is the main benefit of outsourcing?', answer: 'Access to a full team of experts (bookkeepers, CAs, vCFOs) for less than the cost of one mid-level hire. It also offers flexibility to scale services up or down as your needs change.' },
        { question: 'Can I have a hybrid model?', answer: 'Yes, this is often the best approach for scaling startups. You can hire a junior in-house accountant for daily tasks while retaining an outsourced vCFO for strategic guidance and oversight.' },
    ]
  },
  {
    slug: 'ca-vs-virtual-cfo-cost',
    title: 'CA vs Virtual CFO Cost & Role Comparison | Nexa Consultancy',
    description: 'Understand the difference in role and cost between a traditional Chartered Accountant (CA) and a Virtual CFO (vCFO) for your startup.',
    h1: 'CA vs. Virtual CFO Cost',
    Icon: Scale,
    intro: {
        title: 'Compliance Expert vs. Strategic Partner',
        content: [
            'Founders often think a Chartered Accountant (CA) and a Chief Financial Officer (CFO) perform the same function. This is a critical misunderstanding. A CA is primarily a compliance and accounting expert, focused on historical accuracy and regulations. A CFO is a forward-looking strategic leader, focused on growth and value creation.',
            'A Virtual CFO provides the strategic leadership of a CFO on a flexible, part-time basis, making it an ideal solution for startups that need more than just compliance.'
        ]
    },
    costFactors: {
        title: 'Understanding the Value Proposition',
        points: [
            { title: 'Focus', description: 'A CA\'s focus is on accounting accuracy and tax compliance (looking backward). A vCFO\'s focus is on financial strategy, KPIs, and fundraising (looking forward).' },
            { title: 'Role', description: 'A CA is typically an external consultant for audit and tax. A vCFO acts as an integrated part of your management team.' },
            { title: 'Deliverables', description: 'A CA delivers audited financials and tax returns. A vCFO delivers MIS reports, KPI dashboards, financial models, and board presentations.' },
            { title: 'Cost Structure', description: 'CA services are often project-based (e.g., audit fee). vCFO services are typically a monthly retainer reflecting an ongoing strategic engagement.' },
        ]
    },
     pricingTable: {
        title: 'Cost & Role Comparison',
        headers: ['Aspect', 'Chartered Accountant (CA)', 'Virtual CFO (vCFO)'],
        rows: [
            { feature: 'Primary Role', values: ['Compliance & Audit', 'Strategy & Growth'] },
            { feature: 'Typical Cost Model', values: ['Annual/Project Fees', 'Monthly Retainer'] },
            { feature: 'Estimated Annual Cost', values: ['₹50,000 - ₹2,00,000 (for specific audits/filings)', '₹12,00,000 - ₹30,00,000+ (for ongoing strategic support)'] },
            { feature: 'Key Output', values: ['Audit Reports, Tax Returns', 'MIS Dashboards, Financial Models'] },
        ]
    },
    faqs: [
        { question: 'Does a vCFO replace my CA?', answer: 'No, they are complementary. A vCFO helps prepare your books for the statutory audit, which is then performed by an independent CA. The vCFO manages the audit process on your behalf.' },
        { question: 'My CA says they provide "CFO services." Is that the same thing?', answer: 'Often, this means they provide advanced accounting and MIS. A true vCFO service goes further, providing deep strategic involvement in decision-making, fundraising, and investor relations.' },
        { question: 'When do I need a vCFO instead of just a CA?', answer: 'You need a vCFO when you start raising institutional funding, need to manage your burn and runway strategically, or feel that you lack a financial sparring partner to help you make key business decisions.' },
    ]
  },
  {
    slug: 'outsourced-accounting-cost',
    title: 'Outsourced Accounting Cost for Startups in India | Nexa',
    description: 'Explore the costs and benefits of outsourced accounting services for Indian startups. Compare packages and understand the value beyond just bookkeeping.',
    h1: 'Outsourced Accounting Cost',
    Icon: PiggyBank,
    intro: {
        title: 'Beyond Bookkeeping: The Value of Outsourced Accounting',
        content: [
            'Outsourced accounting is more than just hiring an external bookkeeper. A comprehensive outsourced accounting service acts as your entire finance department, handling everything from daily transaction recording to monthly financial reporting, compliance management, and payroll processing.',
            'For a startup, this provides access to a full team of experts for less than the price of a single full-time hire, ensuring professionalism and scalability from day one.'
        ]
    },
    costFactors: {
        title: 'What Determines Outsourced Accounting Costs?',
        points: [
            { title: 'Scope of Services', description: 'A basic bookkeeping package will cost less than a full-service offering that includes GST/TDS filings, payroll, and ROC compliance.' },
            { title: 'Transaction Volume', description: 'The number of monthly invoices, bills, and bank transactions is a primary driver of the workload and cost.' },
            { title: 'Team Size & Payroll', description: 'The number of employees directly impacts the cost of payroll processing and compliance.' },
            { title: 'Business Complexity', description: 'A business with multiple bank accounts, international transactions, or complex inventory will require a higher-priced package.' },
        ]
    },
     pricingTable: {
        title: 'Typical Monthly Outsourced Accounting Packages',
        headers: ['Package Level', 'Typical Monthly Cost Range (INR)', 'Best For'],
        rows: [
            { feature: 'Basic (Bookkeeping & GST)', values: ['₹15,000 - ₹30,000', 'Pre-seed, very early stage'] },
            { feature: 'Growth (Full Compliance)', values: ['₹30,000 - ₹75,000', 'Seed-funded startups'] },
            { feature: 'Strategic (vCFO + Full Compliance)', values: ['₹1,00,000+', 'Series A and beyond'] },
        ]
    },
    faqs: [
        { question: 'What are the main benefits of outsourcing?', answer: 'The key benefits are cost savings compared to an in-house team, access to specialized expertise, scalability, and allowing the founder to focus on the core business.' },
        { question: 'How does the process work?', answer: 'Most modern firms use a cloud-based workflow. You provide access to your bank accounts and sales platforms, and share documents via a secure portal. The firm then handles all the processing and provides you with reports via a dashboard.' },
        { question: 'Is my data secure with an outsourced firm?', answer: 'Reputable firms use industry-standard security protocols and have strict confidentiality agreements in place to protect your financial data.' },
    ]
  },
  {
    slug: 'startup-compliance-monthly-cost',
    title: 'Startup Compliance Monthly Cost in India | Nexa Consultancy',
    description: 'Breakdown of typical monthly compliance costs for startups in India. Understand retainers for GST, TDS, payroll, and secretarial services.',
    h1: 'Startup Compliance Monthly Cost',
    Icon: FileCheck,
    intro: {
        title: 'Budgeting for Compliance: A Monthly View',
        content: [
            'While some compliance costs are annual (like ROC filings and ITR), many are recurring monthly or quarterly expenses. Understanding these recurring costs is essential for accurate budgeting and cash flow management.',
            'A monthly compliance retainer with a professional firm is the most common way for startups to manage these obligations, providing predictability and peace of mind.'
        ]
    },
    costFactors: {
        title: 'Components of a Monthly Compliance Retainer',
        points: [
            { title: 'GST Filings', description: 'Cost depends on the number of registrations and transaction volume. Includes GSTR-1 and GSTR-3B.' },
            { title: 'TDS Filings', description: 'Cost is based on the number of TDS categories and challans. Includes monthly payment and quarterly returns.' },
            { title: 'Payroll Compliance', description: 'Includes monthly PF, ESI payments and filings. Priced per employee.' },
            { title: 'Secretarial Services', description: 'A retainer for maintaining statutory registers, preparing minutes, and handling routine ROC matters.' },
        ]
    },
     pricingTable: {
        title: 'Estimated Monthly Compliance Retainer Costs',
        headers: ['Service', 'Typical Monthly Cost Range (INR)'],
        rows: [
            { feature: 'GST Compliance (Single State)', values: ['₹5,000 - ₹15,000'] },
            { feature: 'TDS Compliance', values: ['₹3,000 - ₹8,000'] },
            { feature: 'Payroll (per employee)', values: ['₹500 - ₹1,000'] },
            { feature: 'Basic Secretarial Retainer', values: ['₹3,000 - ₹7,000'] },
            { feature: 'Comprehensive Compliance Package', values: ['₹20,000 - ₹50,000+'] },
        ]
    },
    faqs: [
        { question: 'Is it better to pay per filing or a monthly retainer?', answer: 'A monthly retainer is almost always better. It provides cost predictability and ensures a proactive relationship with your compliance partner, rather than a transactional one.' },
        { question: 'What is not included in a standard monthly retainer?', answer: 'Annual filings (ITR, ROC), non-routine work like responding to tax notices, or project-based work like due diligence support are typically billed separately.' },
        { question: 'Can I get a consolidated package?', answer: 'Yes, most firms offer a comprehensive package that bundles bookkeeping, all monthly compliance, and payroll for a single, fixed monthly fee. This is the most efficient model for most startups.' },
    ]
  },
  {
    slug: 'gst-compliance-cost',
    title: 'GST Compliance & Filing Cost in India | Nexa Consultancy',
    description: 'Understand the costs associated with GST registration, monthly/quarterly filings (GSTR-1, GSTR-3B), and annual returns (GSTR-9) for startups in India.',
    h1: 'GST Compliance Cost',
    Icon: Wallet,
    intro: {
        title: 'The Price of GST Compliance',
        content: [
            'Goods and Services Tax (GST) is one of the most significant and frequent compliance obligations for any Indian business. The cost of managing GST goes beyond just filing returns; it involves correct invoicing, reconciliation of input tax credit, and responding to departmental queries.',
            'The cost of GST compliance services depends primarily on the volume of transactions, the number of states you operate in, and the complexity of your business model (e.g., exports, e-commerce).'
        ]
    },
    costFactors: {
        title: 'Factors Affecting GST Costs',
        points: [
            { title: 'Registration Type', description: 'A one-time registration cost is the first step. Registering in multiple states incurs separate costs.' },
            { title: 'Filing Frequency', description: 'Businesses file either monthly or quarterly (under the QRMP scheme). Monthly filing requires more frequent effort.' },
            { title: 'Transaction Volume', description: 'Higher numbers of sales and purchase invoices require more time for data preparation and reconciliation.' },
            { title: 'Business Model', description: 'E-commerce sellers with TCS reconciliation or exporters with refund claims have more complex needs, leading to higher costs.' },
        ]
    },
     pricingTable: {
        title: 'Estimated GST Compliance Costs',
        headers: ['Service', 'Typical Cost Range (INR)'],
        rows: [
            { feature: 'One-Time GST Registration', values: ['₹3,000 - ₹7,000'] },
            { feature: 'Monthly GST Filings (GSTR-1 & 3B)', values: ['₹5,000 - ₹15,000 per month'] },
            { feature: 'Quarterly GST Filings (QRMP)', values: ['₹7,000 - ₹20,000 per quarter'] },
            { feature: 'Annual GST Return (GSTR-9/9C)', values: ['₹10,000 - ₹30,000+'] },
        ]
    },
    faqs: [
        { question: 'What does a monthly GST retainer include?', answer: 'It typically includes preparation of GSTR-1 (outward supplies), reconciliation of GSTR-2B for Input Tax Credit, and preparation and filing of the summary GSTR-3B return.' },
        { question: 'When is the GSTR-9 (Annual Return) required?', answer: 'GSTR-9 is mandatory for taxpayers with an annual aggregate turnover exceeding ₹2 crore. GSTR-9C (Reconciliation Statement) is required for those with turnover above ₹5 crore.' },
        { question: 'Can I get a refund for GST paid on exports?', answer: 'Yes, exports are zero-rated supplies. You can either export without paying tax by filing an LUT and claim a refund of your accumulated ITC, or you can pay the tax (IGST) and claim a refund of the tax paid.' },
    ]
  },
  {
    slug: 'hidden-compliance-costs-for-startups',
    title: 'Hidden Compliance Costs for Indian Startups | Nexa Consultancy',
    description: 'Beyond the obvious filings, uncover the hidden compliance costs that can surprise startups, from state-specific licenses to professional tax and event-based ROC filings.',
    h1: 'Hidden Compliance Costs',
    Icon: AlertTriangle,
    intro: {
        title: 'The Costs You Don\'t See Coming',
        content: [
            'Most founders budget for the "big three" of compliance: GST, TDS, and annual ROC/Income Tax filings. However, the Indian regulatory landscape is filled with numerous smaller, often-overlooked compliances that can result in unexpected costs and penalties if ignored.',
            'These "hidden costs" can add up, and being unaware of them can lead to a false sense of security. A professional compliance partner proactively manages this entire spectrum of obligations.'
        ]
    },
    costFactors: {
        title: 'Commonly Overlooked Compliance Costs',
        points: [
            { title: 'State-Level Licenses', description: 'Costs for obtaining and renewing licenses under the Shops & Establishment Act, Professional Tax registration, and any industry-specific state licenses.' },
            { title: 'Event-Based ROC Filings', description: 'Changing your address, adding a director, or increasing authorized capital all require separate ROC filings with associated fees.' },
            { title: 'TDS on Foreign Payments (15CA/CB)', description: 'Payments to foreign vendors often require a certificate from a CA (Form 15CB), which is a separate professional fee.' },
            { title: 'Intellectual Property', description: 'Costs for trademark searches, registration, and renewals to protect your brand.' },
            { title: 'Annual Secretarial Maintenance', description: 'Costs associated with preparing minutes for board meetings and maintaining statutory registers, which are mandatory.' },
        ]
    },
    faqs: [
        { question: 'What is Professional Tax (PT)?', answer: 'It is a small tax levied by state governments on professionals and salaried individuals. As an employer, you are responsible for deducting PT from your employees\' salaries and remitting it to the government.' },
        { question: 'Do I need a Shops & Establishment license for a remote company?', answer: 'Even if you are remote, you need a registration for your registered office address. The rules vary by state, but most require it for any commercial establishment.' },
        { question: 'What is an "event-based" compliance?', answer: 'Unlike annual or monthly filings, these are triggered by specific corporate actions. For example, when you raise funds and allot shares, you must file Form PAS-3 with the ROC within 30 days. These are often not covered in a standard annual retainer.' },
    ]
  },
  {
    slug: 'pricing-models-for-startup-finance',
    title: 'Startup Finance Service Pricing Models Explained | Nexa',
    description: 'Understand the different pricing models for finance and accounting services: fixed monthly retainers, hourly rates, and project-based fees. Learn which is best for your startup.',
    h1: 'Finance Service Pricing Models',
    Icon: BarChart,
    intro: {
        title: 'Decoding How Finance Services are Priced',
        content: [
            'When engaging a CA firm or a finance-as-a-service provider, you\'ll encounter several different pricing models. Understanding how these models work, their pros and cons, and which one is best suited for your startup\'s needs is crucial for building a predictable budget and a healthy partnership.',
            'The three most common models are fixed monthly retainers, hourly billing, and fixed project-based fees. The right model depends on the nature of the work—is it ongoing and predictable, or a one-off, specific project?'
        ]
    },
    costFactors: {
        title: 'Comparing the Three Main Pricing Models',
        points: [
            { title: 'Fixed Monthly Retainer', description: 'A recurring monthly fee for a predefined scope of ongoing work (e.g., bookkeeping, GST/TDS filings, payroll). Best for predictable, recurring compliance and accounting needs.' },
            { title: 'Hourly Billing', description: 'You are billed for the exact number of hours spent by the professional on your work. Best for advisory work or unpredictable tasks where the scope is difficult to define upfront.' },
            { title: 'Fixed Project-Based Fee', description: 'A single, upfront fee for a specific, well-defined project with a clear start and end. Best for one-time tasks like company incorporation, fundraising due diligence, or drafting an ESOP policy.' },
        ]
    },
     pricingTable: {
        title: 'Which Model is Right for You?',
        headers: ['Service Type', 'Best Pricing Model', 'Why?'],
        rows: [
            { feature: 'Monthly Bookkeeping & Compliance', values: ['Fixed Retainer', 'Provides cost predictability for ongoing, essential work.'] },
            { feature: 'Fundraising Due Diligence', values: ['Project Fee', 'A one-time, intensive project with a clear scope.'] },
            { feature: 'Strategic Advisory (vCFO)', values: ['Fixed Retainer or Hourly', 'A retainer for ongoing partnership, or hourly for ad-hoc strategic advice.'] },
            { feature: 'Company Incorporation', values: ['Project Fee', 'A standard, one-time process with a clear deliverable.'] },
        ]
    },
    faqs: [
        { question: 'What are the pros and cons of a fixed retainer?', answer: 'Pros: Predictable costs, encourages a proactive partnership. Cons: You might pay for services you don\'t fully use in a quiet month.' },
        { question: 'What are the pros and cons of hourly billing?', answer: 'Pros: You only pay for what you use. Cons: Costs can be unpredictable and can escalate quickly. It can discourage you from seeking advice for fear of running up the bill.' },
        { question: 'Can I combine models?', answer: 'Yes, this is very common. A startup might have a fixed monthly retainer for its core accounting and compliance, and then engage the same firm on a project-fee basis for a fundraising transaction.' },
    ]
  },
];
