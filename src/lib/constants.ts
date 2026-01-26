import type { ImagePlaceholder } from '@/lib/placeholder-images';
import {
  Briefcase,
  FileText,
  ShieldCheck,
  Users,
  LineChart,
  Wallet,
  Building,
  Scale,
  BookUser,
  HeartHandshake,
  Lightbulb,
  TrendingUp,
  Landmark,
  HandCoins,
  FileCheck,
  Award,
  Presentation,
  Target,
  DollarSign,
  Phone,
  ClipboardList,
  FileSignature,
  LogIn,
  RefreshCw,
  CalendarCheck,
  BarChart3,
  FileStack,
  Power,
  RotateCcw,
  Clock,
  Zap,
  Check,
  Eye,
  Rocket,
  Factory,
  ShoppingBag,
  HeartPulse,
  Banknote,
  GraduationCap
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { getDetailedBlogPosts, getDetailedCaseStudies } from '@/lib/content';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/who-we-help', label: 'Who We Help' },
  { href: '/finance-for-startups-india', label: 'Startup Finance Guide' },
  { href: '/resources', label: 'Resources' },
  { href: '/process', label: 'Process' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

export const LOCATIONS = [
    { name: 'Bangalore' },
    { name: 'Mumbai' },
    { name: 'Delhi' },
    { name: 'Indore' },
    { name: 'Jaipur' },
    { name: 'Ahmedabad' },
];

export const SERVICES = [
  {
    slug: 'virtual-cfo',
    icon: Briefcase,
    title: 'Virtual CFO',
    h1: 'Virtual CFO Services for Startups in India',
    description: 'Pitch deck, MIS, Budgeting, KPI tracking, or fundraising support. We help you close timely due diligence, saving significant founder\'s time.',
    details: 'Our Virtual CFO service goes beyond basic accounting. We act as your strategic financial partner, providing high-level expertise in financial planning, KPI tracking, cash flow management, and investor relations to help you make data-driven decisions and achieve sustainable growth.',
    whoNeedsThis: 'Early-stage to growth-stage startups that need strategic financial guidance for scaling, fundraising, and improving profitability but are not yet ready for the cost of a full-time CFO.',
    pricingApproach: 'Our Virtual CFO services are offered on a flexible monthly retainer model. Pricing is customized based on the stage of your startup, transaction volume, complexity of operations, and the level of strategic involvement required.',
    relatedGlossaryTerms: ['what-is-virtual-cfo-vcfo', 'what-is-burn-rate'],
    faqs: [
      {
        question: 'What is the difference between a Virtual CFO and an accountant?',
        answer: 'An accountant primarily focuses on historical data—recording transactions, ensuring compliance, and preparing financial statements. A Virtual CFO is forward-looking, focusing on financial strategy, planning, KPI analysis, and helping you make informed decisions to grow your business.'
      },
      {
        question: 'At what stage should my startup consider a Virtual CFO?',
        answer: 'You should consider a vCFO when you start scaling, planning to raise funds, or feel that you\'re spending too much time on financial management instead of your core business. Typically, this is post-product-market fit or when you raise your first seed round.'
      },
      {
        question: 'Can you help with fundraising?',
        answer: 'Absolutely. Our vCFOs are experienced in the fundraising process. We help prepare investor-ready financial models, pitch decks, manage the data room, and support you through due diligence and term sheet negotiations.'
      },
      {
        question: 'How does the engagement model work?',
        answer: 'We work as an extension of your team. The engagement includes regular strategy calls (weekly or bi-weekly), monthly financial reviews, and on-demand support for any financial questions or challenges you face.'
      },
      {
        question: 'What kind of reports can I expect?',
        answer: 'You\'ll receive a monthly MIS package including a P&L, Balance Sheet, Cash Flow Statement, detailed KPI dashboards (tracking metrics like MRR, Churn, LTV, CAC), burn rate, and runway analysis.'
      }
    ]
  },
  {
    slug: 'bookkeeping',
    icon: BookUser,
    title: 'Bookkeeping',
    h1: 'Online Bookkeeping & Accounting Services for Small Businesses',
    description: 'From early stage to growth stage companies, our tailored bookkeeping packages are suitable for all. Our experts can manage your complex accounts.',
    details: 'Our tech-enabled bookkeeping service ensures your financial records are always clean, up-to-date, and compliant. We handle everything from daily transaction recording and bank reconciliation to month-end closing, giving you peace of mind and reliable data.',
    whoNeedsThis: 'Startups, small businesses, and D2C brands that need accurate, compliant, and timely financial records but lack the in-house resources for a dedicated accounting team.',
    pricingApproach: 'We offer tiered monthly packages based on your monthly transaction volume and business complexity. This ensures you only pay for what you need, with predictable pricing that scales as you grow.',
    relatedGlossaryTerms: ['what-is-bookkeeping', 'what-is-balance-sheet'],
    faqs: [
      {
        question: 'Why can\'t I just use accounting software myself?',
        answer: 'While software is a great tool, professional bookkeeping ensures transactions are categorized correctly, accounts are reconciled properly, and financial statements are prepared in compliance with accounting standards. This accuracy is crucial for tax filing and making business decisions.'
      },
      {
        question: 'How do I share my documents with you?',
        answer: 'We use a secure, cloud-based workflow. You can share documents through a dedicated portal, email, or by giving us access to your bank and sales platforms. Everything is managed digitally for efficiency.'
      },
      {
        question: 'What software do you work with?',
        answer: 'We are proficient with all major cloud accounting platforms, including Zoho Books, QuickBooks, and Tally. We can work with your existing system or help you migrate to a more suitable one.'
      },
      {
        question: 'Is my financial data secure with you?',
        answer: 'Yes, data security is our top priority. We use industry-standard security protocols and access controls to ensure your financial information is always confidential and protected.'
      },
      {
        question: 'How is this different from a traditional accountant?',
        answer: 'Our service is tech-enabled for efficiency, providing you with faster turnaround and real-time access to your data. We focus on a continuous accounting process rather than just year-end compliance, giving you up-to-date insights throughout the year.'
      }
    ]
  },
  {
    slug: 'business-setup',
    icon: Building,
    title: 'Business Setup Services',
    h1: 'Company Registration & Business Setup Services in India',
    description: 'Helping Indian or foreign individuals or companies set up business in India and handholding with applicable regulatory registrations.',
    details: 'Launching a new venture requires a solid legal foundation. We guide you through the entire process, from choosing the right entity structure (Private Limited, LLP, OPC) to handling all the necessary registrations like PAN, TAN, and GST, ensuring your business is set up for success from day one.',
    whoNeedsThis: 'Aspiring entrepreneurs, foreign companies entering the Indian market, and freelancers looking to formalize their operations with a proper legal structure.',
    pricingApproach: 'We offer fixed-fee packages for different types of company incorporation. Our pricing is transparent and all-inclusive, covering government fees, stamp duty, and our professional charges.',
    relatedGlossaryTerms: ['what-is-incorporation', 'what-is-articles-of-association-aoa'],
    faqs: [
        {
            question: 'What is the best legal structure for my startup?',
            answer: 'A Private Limited Company is usually the preferred structure for startups that plan to raise funding, as it allows for equity financing and ESOPs. However, an LLP can be suitable for service-based businesses with no immediate funding plans. We\'ll help you choose based on your specific goals.'
        },
        {
            question: 'How long does it take to register a private limited company?',
            answer: 'The process typically takes 10-15 working days, provided all documents are in order and there are no delays from the Registrar of Companies (ROC).'
        },
        {
            question: 'What documents are required for company registration?',
            answer: 'You\'ll need PAN cards, identity proof (like Aadhaar or Voter ID), and address proof for all directors, along with proof of the registered office address (like a utility bill and a No-Objection Certificate from the owner).'
        },
        {
            question: 'Do I need a physical office to register a company?',
            answer: 'No, you can use a residential address as your registered office address initially, provided you have the necessary documentation from the property owner. You can also use a virtual office service.'
        },
        {
            question: 'What are the post-incorporation compliances?',
            answer: 'After incorporation, you must appoint an auditor within 30 days, open a company bank account, and deposit the share capital. You\'ll also need to start your annual compliances like board meetings and ROC filings.'
        }
    ]
  },
  {
    slug: 'regulatory-compliances',
    icon: FileCheck,
    title: 'Regulatory Compliances',
    h1: 'Comprehensive Regulatory & Tax Compliance Services',
    description: 'Provide timely and accurate compliances required for Direct Tax, Indirect Tax, Labor Law, Companies Act, FEMA Act, etc.',
    details: 'Stay compliant without the headache. We manage all your regulatory filings, from monthly GST and TDS returns to annual income tax and ROC filings. Our proactive approach ensures you never miss a deadline and avoid penalties.',
    whoNeedsThis: 'Businesses of all sizes that need to ensure they are fully compliant with India\'s complex and ever-changing tax and corporate laws (GST, TDS, Income Tax, ROC).',
    pricingApproach: 'Our compliance services are bundled into our monthly accounting retainers. We also offer standalone compliance packages with fixed monthly or quarterly fees based on the scope of work.',
    relatedGlossaryTerms: ['what-is-compliance', 'what-is-roc-registrar-of-companies'],
    faqs: [
        {
            question: 'What are the main compliances for a private limited company?',
            answer: 'Key compliances include monthly/quarterly GST and TDS filings, statutory audit, annual ROC filings (AOC-4, MGT-7), and annual income tax return filing.'
        },
        {
            question: 'What happens if I miss a compliance deadline?',
            answer: 'Missing deadlines leads to penalties, which can be substantial. For ROC filings, there are daily penalties. For tax filings, you may be liable for interest and late fees. Consistent non-compliance can also lead to legal action.'
        },
        {
            question: 'What is the difference between GST and TDS?',
            answer: 'GST (Goods and Services Tax) is an indirect tax on the supply of goods and services. TDS (Tax Deducted at Source) is a form of direct tax (income tax) where the payer deducts tax before making a payment to the receiver.'
        },
        {
            question: 'Do I need a tax audit?',
            answer: 'A tax audit is mandatory in India if your business turnover exceeds a certain threshold (e.g., ₹10 crore for businesses with mostly digital transactions). We can assess if you fall under the tax audit requirements.'
        },
        {
            question: 'How do you keep track of all the deadlines?',
            answer: 'We use a centralized compliance management system with automated reminders and trackers to ensure all deadlines for all our clients are met on time, every time.'
        }
    ]
  },
  {
    slug: 'investor-due-diligence',
    icon: Users,
    title: 'Investor Due Diligence',
    h1: 'Investor Due Diligence Support for Startups',
    description: 'Conducting financial, secretarial, and legal due diligence for incubators, VC funds, and supporting companies with Data room.',
    details: 'Due diligence is a critical, high-stakes phase of fundraising. We help you prepare for and navigate this process seamlessly. Our team assists in setting up a clean, professional data room, vetting all financial and legal documents, and responding to investor queries, ensuring you build trust and close your round faster.',
    whoNeedsThis: 'Startups that are actively fundraising or have just received a term sheet and are about to enter the financial and legal due diligence process with investors.',
    pricingApproach: 'Due diligence support is typically offered as a one-time project-based fee. The cost depends on the complexity of your business and the state of your existing financial records and documentation.',
    relatedGlossaryTerms: ['what-is-due-diligence', 'what-is-data-room'],
    faqs: [
        {
            question: 'What is due diligence?',
            answer: 'It\'s an investigation or audit of a potential investment to confirm all facts, such as reviewing financial records, contracts, and legal documents. Investors perform due diligence to validate the information you presented and to uncover any potential risks before investing.'
        },
        {
            question: 'What are investors looking for in a data room?',
            answer: 'They look for organized, accurate, and complete information covering corporate structure (incorporation docs, cap table), financials (historical statements, financial model), team (employment contracts), legal (customer agreements, IP filings), and product/tech.'
        },
        {
            question: 'What are the most common red flags during due diligence?',
            answer: 'Common red flags include a messy cap table, unsigned or informal contracts, poor financial records, unresolved legal disputes, and the company not owning its intellectual property.'
        },
        {
            question: 'How long does the due diligence process take?',
            answer: 'It can take anywhere from 2 weeks to 2 months, depending on the complexity of your business and how well-prepared you are. A clean data room can significantly speed up the process.'
        },
        {
            question: 'How can you help if our books are messy?',
            answer: 'If your records are not in order, we would first undertake an "accounting cleanup" project to organize your historical financials and documentation before setting up the data room. This is crucial to ensure a smooth diligence process.'
        }
    ]
  },
  {
    slug: 'pitch-deck-financial-modelling',
    icon: Presentation,
    title: 'Pitch deck and Financial Modelling',
    h1: 'Pitch Deck & Financial Model Services for Startup Fundraising',
    description: 'Helping founders craft compelling pitch decks and simplified financial models and preparing them for investor reach out.',
    details: 'A compelling pitch deck and a solid financial model are the two most important assets in your fundraising toolkit. We work with you to craft a powerful narrative that resonates with investors and back it up with a sophisticated, driver-based financial model that proves the viability and scalability of your business.',
    whoNeedsThis: 'Early-stage founders who are preparing to raise their first round of funding (Seed or Series A) and need help creating professional, investor-ready materials.',
    pricingApproach: 'This is a project-based service with a fixed fee. The engagement includes deep-dive sessions to understand your business, followed by the creation of the pitch deck narrative and the financial model.',
    relatedGlossaryTerms: ['what-is-pitch-deck', 'what-is-financial-model'],
    faqs: [
        {
            question: 'What makes a good pitch deck?',
            answer: 'A good pitch deck tells a clear and concise story. It should cover the problem, your solution, market size, traction, team, and business model in 10-15 slides. It should be visually appealing and easy to understand.'
        },
        {
            question: 'Why do I need a financial model?',
            answer: 'A financial model demonstrates that you understand the key drivers of your business (e.g., pricing, conversion rates, churn). It shows investors how you plan to use their capital to achieve specific milestones and what the potential return could be. It\'s a test of your financial acumen as a founder.'
        },
        {
            question: 'What if I don\'t have much traction yet?',
            answer: 'Even without significant revenue, you can show traction through user engagement, waitlist sign-ups, pilot project results, or letters of intent from potential customers. Your financial model will be based on well-researched assumptions about the market and your GTM strategy.'
        },
        {
            question: 'How is your service different from a template?',
            answer: 'Templates are generic. We work with you to understand the unique aspects of your business and craft a custom narrative and financial model that highlights your specific strengths and opportunity.'
        },
        {
            question: 'Does this service include investor introductions?',
            answer: 'This service is focused on preparing your fundraising materials. While we often make introductions for our ongoing Virtual CFO clients, this standalone service is designed to equip you with the best possible tools for your own outreach.'
        }
    ]
  },
  {
    slug: 'corporate-law',
    icon: Scale,
    title: 'Corporate Law',
    h1: 'Corporate & Commercial Law Advisory for Businesses',
    description: 'Corporate advisory and drafting/vetting of legal contracts like Term Sheets, Shareholders, and Subscription agreements.',
    details: 'Navigate the complexities of corporate law with confidence. Our legal advisory services cover everything from drafting and vetting critical agreements (Shareholders\', ESOP, client contracts) to providing strategic advice on corporate governance, structuring, and M&A transactions.',
    whoNeedsThis: 'Startups and established companies that require expert legal support for contracts, corporate structuring, governance, and transactional matters.',
    pricingApproach: 'We offer both hourly rates for specific tasks and project-based fixed fees for larger engagements like drafting a full set of fundraising documents. Retainer models are also available for ongoing advisory.',
    relatedGlossaryTerms: ['what-is-corporate-governance', 'what-is-shareholders-agreement'],
    faqs: [
        {
            question: 'What is a Shareholders\' Agreement (SHA)?',
            answer: 'An SHA is a crucial legal document that governs the relationship between a company\'s shareholders. It outlines rights and obligations, rules on share transfers, and procedures for decision-making, providing clarity and preventing future disputes.'
        },
        {
            question: 'Why is it important to vet contracts?',
            answer: 'Vetting contracts by a legal expert helps identify and mitigate risks. It ensures the terms are fair, your liability is limited, and your rights are protected. A poorly drafted contract can lead to costly disputes.'
        },
        {
            question: 'What is corporate governance?',
            answer: 'It is the system of rules, practices, and processes by which a company is directed and controlled. Good governance ensures accountability, fairness, and transparency, which is critical for attracting investors and building long-term value.'
        },
        {
            question: 'Can you help with ESOP policy drafting?',
            answer: 'Yes, we can help you design and draft a legally sound Employee Stock Option Plan (ESOP) policy that aligns with your retention goals and is compliant with Indian regulations.'
        },
        {
            question: 'When should I engage a lawyer?',
            answer: 'You should seek legal advice before entering into any significant agreement, including fundraising, major customer contracts, employee equity grants, or any corporate restructuring. Proactive legal advice is always cheaper than reactive litigation.'
        }
    ]
  },
  {
    slug: 'fundraising',
    icon: HandCoins,
    title: 'Fundraising',
    h1: 'Startup Fundraising Advisory Services',
    description: 'Advisory for Venture Capital, Venture Debt, new-age financing options and M&A transactions.',
    details: 'Raising capital is a strategic process. We provide end-to-end advisory for your fundraising journey. From identifying the right type of capital (Venture Capital, Venture Debt, Revenue-Based Financing) to making strategic introductions and helping you negotiate terms, we act as your trusted partner in securing the fuel for your growth.',
    whoNeedsThis: 'Founders who are ready to raise external capital and are looking for strategic guidance, process management, and access to a network of investors.',
    pricingApproach: 'Fundraising advisory is a high-touch service. It is typically structured as a combination of a monthly retainer and a success fee (a percentage of the capital raised). This model aligns our incentives with yours.',
    relatedGlossaryTerms: ['what-is-fundraising', 'what-is-term-sheet'],
    faqs: [
        {
            question: 'What is the difference between Venture Capital and Venture Debt?',
            answer: 'Venture Capital is equity financing, where you sell a stake in your company. Venture Debt is a loan provided to venture-backed companies, which is less dilutive but requires repayment. We help you decide the right mix for your stage.'
        },
        {
            question: 'How do you find the right investors for my startup?',
            answer: 'We go beyond generic lists. We focus on "smart money" by targeting investors whose fund thesis, portfolio, and expertise align with your specific industry and stage. We prioritize warm introductions through our extensive network.'
        },
        {
            question: 'What is your role during negotiations?',
            answer: 'We act as your strategic advisor. We help you understand and compare term sheets, model the financial impact of different terms (like valuation vs. liquidation preference), and provide tactical advice to help you negotiate the best possible deal.'
        },
        {
            question: 'What are the current trends in fundraising?',
            answer: 'The market is dynamic. We provide real-time insights into current investor sentiment, valuation benchmarks, and preferred deal structures, ensuring your fundraising strategy is relevant to today\'s market conditions.'
        },
        {
            question: 'Do you guarantee funding?',
            answer: 'No one can guarantee funding. However, our process, preparation, and network significantly increase your probability of success by ensuring you run a professional and strategic fundraising process.'
        }
    ]
  },
];

export const PROCESS_STEPS = [
  {
    icon: Phone,
    title: 'Discovery & compliance assessment',
    description: 'Identify statutory exposure early, covering GST, Income Tax, TDS, ROC, Payroll, and PF/ESI status. Output: Compliance risk assessment & draft filing calendar.',
  },
  {
    icon: ClipboardList,
    title: 'Scope definition & retainer setup',
    description: 'Define a clear scope for monthly bookkeeping, GST/TDS filing, tax support, and ROC compliance to avoid ambiguity. Output: Finance + Compliance RACI matrix.',
  },
  {
    icon: FileSignature,
    title: 'Proposal, Agreement & Controls',
    description: 'Contractually define filing responsibilities, timelines, data dependencies, and penalty clauses to protect compliance. Output: Signed MSA + Finance & Compliance SOW.',
  },
  {
    icon: LogIn,
    title: 'Finance & Compliance Onboarding',
    description: 'Collect credentials and prior returns for GST, Income Tax, and ROC to set an accurate statutory base. Output: Opening compliance review sign-off.',
  },
  {
    icon: RefreshCw,
    title: 'Monthly Finance & GST Cycle',
    description: 'Monthly accounting, reconciliation, GST return filing (GSTR-1 & 3B), liability computation, and challan payment. Output: Filed GST returns & reconciliation statement.',
  },
  {
    icon: HandCoins,
    title: 'TDS & Payroll Filings',
    description: 'Handle monthly TDS calculation and challan payments, and file quarterly TDS returns (24Q, 26Q), providing Form 16/16A.',
  },
  {
    icon: BarChart3,
    title: 'Monthly Finance Report & Review Call',
    description: 'Review P&L, Balance Sheet, cash flow, GST position, and tax summary. Discuss variances and plan for upcoming tax deadlines.',
  },
  {
    icon: CalendarCheck,
    title: 'Quarterly Compliance & Reporting',
    description: 'Manage quarterly GST (QRMP), ROC/Company filings (AOC-4, MGT-7), and advance tax computations and payments.',
  },
  {
    icon: TrendingUp,
    title: 'Quarterly Finance & Strategy Review',
    description: 'Focus on budget vs. actuals, tax outflow trends, runway analysis, and compliance health score. Output: Updated forecasts & action items.',
  },
  {
    icon: FileStack,
    title: 'Annual Income Tax & Year-End Filings',
    description: 'Finalize tax computation, file income tax returns (ITR), manage tax audits (if applicable), and prepare annual GST returns and financial statements.',
  },
  {
    icon: ShieldCheck,
    title: 'Ongoing Compliance & Risk Alerts',
    description: 'Utilize a live compliance calendar, automated reminders, and notice monitoring to track deadlines and alert founders of any risk exposure.',
  },
  {
    icon: RotateCcw,
    title: 'Renewal, Expansion, or Exit',
    description: 'Provide a compliance scorecard at renewal. For exits, ensure all filings are up-to-date and provide a complete handover checklist and access transfer.',
  }
];


export const DETAILED_SERVICES = [
    { icon: FileText, title: 'Agreements' },
    { icon: ShieldCheck, title: 'IP Protection' },
    { icon: BookUser, title: 'Book-keeping' },
    { icon: FileCheck, title: 'Compliances' },
    { icon: Scale, title: 'Labor law' },
    { icon: Landmark, title: 'FEMA' },
    { icon: Wallet, title: 'Indirect Tax' },
    { icon: Briefcase, title: 'Companies Act' },
    { icon: Wallet, title: 'Direct tax' },
]

export const WHY_CHOOSE_US_POINTS = [
    {
        icon: Briefcase,
        title: 'Professional Ethics',
        description: 'We uphold the highest standards of integrity and confidentiality in all our client engagements, ensuring your trust is well-placed.',
    },
    {
        icon: Lightbulb,
        title: 'Structured Approach',
        description: 'Our methodologies are data-driven and structured, providing clear, actionable insights to navigate complex business challenges.',
    },
    {
        icon: HeartHandshake,
        title: 'Client Partnership',
        description: 'We believe in building long-term partnerships, acting as an extension of your team to drive collective success.',
    },
]

export const REAL_LIFE_HELP_POINTS = [
    {
        icon: Clock,
        title: 'Reclaim Your Founder Time',
        description: 'Stop drowning in spreadsheets and compliance worries. We take complete ownership of your finance and tax operations, freeing you to focus on what you do best: building your product, talking to customers, and leading your team.',
    },
    {
        icon: Eye,
        title: 'Achieve Financial Clarity',
        description: 'Move beyond confusing financial statements. We provide you with simple, founder-friendly dashboards and monthly reports that give you a clear view of your burn rate, runway, and profitability, so you can make confident, data-driven decisions.',
    },
    {
        icon: Rocket,
        title: 'Become Investor-Ready, Always',
        description: 'Fundraising is a marathon, not a sprint. We build a rock-solid financial and compliance foundation from day one, ensuring your data room is always up-to-date and you\'re prepared to talk to investors with confidence, whenever the opportunity arises.',
    },
]

export const DIFFERENTIATORS = [
  {
    title: 'The most tech-forward',
    description: 'We are obsessed with technology. We deploy tech-driven processes to provide world-class service with startup suitable pricing structure.',
  },
  {
    title: 'The most experienced',
    description: "Our service processes are designed based on real-life problems and we curated an expert team experienced in meeting the founder's expectations.",
  },
  {
    title: 'The most scalable',
    description: 'Our team and technology led processes can rapidly scale as your business scales, to ensure you never have to worry about your finances.',
  },
];


const futureVerseImg = PlaceHolderImages.find(img => img.id === 'testimonial-futureverse');
const quantumLeapImg = PlaceHolderImages.find(img => img.id === 'testimonial-quantum-leap');
const bioGenImg = PlaceHolderImages.find(img => img.id === 'testimonial-biogen');
const travelWiseImg = PlaceHolderImages.find(img => img.id === 'testimonial-travelwise');
const ecoSolutionsImg = PlaceHolderImages.find(img => img.id === 'testimonial-ecosolutions');
const artfulLivingImg = PlaceHolderImages.find(img => img.id === 'testimonial-artful-living');


export const TESTIMONIALS = [
  {
    quote: "Their team's expertise in market analysis was crucial for our product launch. Nexa Consultancy delivered results beyond our expectations.",
    company: 'A VR/AR experiential platform.',
    name: 'Rohan M.',
    title: 'CEO | FutureVerse',
    avatar: futureVerseImg?.imageUrl || '',
    avatarHint: futureVerseImg?.imageHint || '',
  },
  {
    quote: 'With Nexa Consultancy, we optimized our supply chain and cut operational costs by 20%. Their impact was immediate and significant.',
    company: 'An AI-driven logistics optimization startup.',
    name: 'Aisha K.',
    title: 'COO | QuantumLeap Logistics',
    avatar: quantumLeapImg?.imageUrl || '',
    avatarHint: quantumLeapImg?.imageHint || '',
  },
  {
    quote: "The strategic roadmap they developed has become our north star. We're on track to double our user base this year.",
    company: 'A biotech firm specializing in gene-editing.',
    name: 'Dr. Anand S.',
    title: 'Chief Scientist | BioGen Innovations',
    avatar: bioGenImg?.imageUrl || '',
    avatarHint: bioGenImg?.imageHint || '',
  },
   {
    quote: "Navigating international regulations was a major hurdle. Nexa Consultancy's legal team made the process seamless and efficient.",
    company: 'A travel-tech startup for personalized itineraries.',
    name: 'Priya S.',
    title: 'Founder | TravelWise',
    stage: 'Growth Stage',
    avatar: travelWiseImg?.imageUrl || '',
    avatarHint: travelWiseImg?.imageHint || '',
  },
   {
    quote: "Their financial modeling was top-notch, helping us secure a critical bridge round to extend our runway.",
    company: 'A company developing biodegradable packaging.',
    name: 'Vikram S.',
    title: 'CEO | EcoSolutions',
    avatar: ecoSolutionsImg?.imageUrl || '',
    avatarHint: ecoSolutionsImg?.imageHint || '',
  },
  {
    quote: "Nexa Consultancy's brand strategy and marketing plan gave us the clarity we needed to connect with our target audience effectively.",
    company: 'An online marketplace for independent artists.',
    name: 'Sameer V.',
    title: 'Founder | Artful Living',
    stage: 'Seed Stage',
    avatar: artfulLivingImg?.imageUrl || '',
    avatarHint: artfulLivingImg?.imageHint || '',
  },
];

export const PORTFOLIO_COMPANIES = [
    { name: 'QuantumLeap' },
    { name: 'InnovateX' },
    { name: 'Stellar Solutions' },
    { name: 'Synergy Dynamics' },
    { name: 'NextGen Systems' },
    { name: 'Momentum Ventures' },
    { name: 'Catalyst Corp' },
    { name: 'Pinnacle Group' },
    { name: 'Horizon Labs' },
    { name: 'ZenithWorks' },
    { name: 'EchoPoint' },
    { name: 'Vertex Innovations' },
    { name: 'Nimbus Tech' },
    { name: 'Apex Industries' },
    { name: 'Elysian Software' },
];


export const findImage = (id: string): ImagePlaceholder | undefined => {
    return PlaceHolderImages.find(img => img.id === id);
}

export type PricingPlan = {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
};

export const PRICING_DRIVERS = [
    'Annual turnover',
    'Monthly transaction volume',
    'GST & TDS complexity',
    'Payroll size',
    'Investor & board reporting needs',
    'Strategic advisory (vCFO) level',
];

export const PRICING_ADDONS = [
    { service: 'ROC annual filings', pricingApproach: 'Annual fixed fee based on entity type.' },
    { service: 'Income tax return filing', pricingApproach: 'Annual fixed fee, complexity-based.' },
    { service: 'GST audit / GSTR-9C', pricingApproach: 'Project-based fee determined by turnover and transaction volume.' },
    { service: 'Accounting cleanup', pricingApproach: 'One-time project fee based on scope of work.' },
    { service: 'Tax audit support', pricingApproach: 'Charged on an hourly or project basis.' },
    { service: 'Multi-state GST', pricingApproach: 'Priced as a per-state monthly add-on.' },
];

export const SECTORS_SERVED = [
  {
    id: 'saas',
    icon: Rocket,
    title: 'SaaS',
    description: 'Navigating recurring revenue, churn, and SaaS metrics.'
  },
  {
    id: 'd2c',
    icon: ShoppingBag,
    title: 'D2C & E-commerce',
    description: 'Mastering inventory, channel profitability, and cash flow.'
  },
  {
    id: 'fintech',
    icon: Banknote,
    title: 'FinTech',
    description: 'Ensuring rigorous compliance with RBI, SEBI, and data privacy.'
  },
  {
    id: 'healthtech',
    icon: HeartPulse,
    title: 'HealthTech',
    description: 'Managing R&D cycles and complex medical compliance.'
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Manufacturing',
    description: 'Handling inventory costing, BOM tracking, and job work.'
  },
  {
    id: 'smb',
    icon: Building,
    title: 'SMB Business',
    description: 'Core financial services for small & medium businesses.'
  }
];

export const PRICING_PLANS: Record<string, PricingPlan[]> = {
  saas: [
    {
      title: 'Foundation',
      price: 'From ₹25k',
      description: 'For early-stage SaaS with up to ₹1 Cr annual turnover.',
      features: [
        'Monthly accounting & close',
        'GST & TDS compliance',
        'Basic financial reports',
        'Accrual-based revenue recognition setup',
        'Email + monthly call support',
      ],
    },
    {
      title: 'Growth',
      price: 'From ₹50k',
      description: 'For scaling SaaS with ₹1 Cr - ₹5 Cr annual turnover.',
      popular: true,
      features: [
        'Everything in Foundation',
        'SaaS metrics tracking (MRR, Churn, LTV:CAC)',
        'Budget vs actuals analysis',
        'Cash flow forecasting & runway',
        'Payroll support for up to 20 employees',
        'Monthly review call with finance expert',
      ],
    },
    {
      title: 'Custom',
      price: 'Let\'s Talk',
      description: 'For funded SaaS with over ₹5 Cr annual turnover.',
      features: [
        'Everything in Growth',
        'Virtual CFO advisory',
        'Investor & board reporting package',
        'Cohort analysis & retention tracking',
        'Pricing strategy & fundraising support',
        'Quarterly strategy sessions with vCFO',
      ],
    },
  ],
  d2c: [
     {
      title: 'Foundation',
      price: 'From ₹30k',
      description: 'For new D2C brands with up to ₹1 Cr annual turnover.',
      features: [
        'Monthly accounting & close',
        'GST filings for 1 state',
        'TDS compliance',
        'Channel-wise revenue reporting',
        'Email + monthly call support',
      ],
    },
    {
      title: 'Growth',
      price: 'From ₹60k',
      description: 'For growing brands with ₹1 Cr - ₹5 Cr annual turnover.',
      popular: true,
      features: [
        'Everything in Foundation',
        'Inventory valuation & tracking',
        'COGS & gross margin analysis per SKU',
        'Marketplace reconciliation (Amazon, etc.)',
        'Cash flow forecasting for inventory',
        'Monthly review call with e-com expert',
      ],
    },
    {
      title: 'Custom',
      price: 'Let\'s Talk',
      description: 'For large operators with over ₹5 Cr annual turnover.',
      features: [
        'Everything in Growth',
        'Virtual CFO advisory',
        'Landed cost tracking for imports',
        'Working capital & inventory optimization',
        'Channel & marketing ROI analysis',
        'Quarterly strategy sessions with vCFO',
      ],
    },
  ],
  fintech: [
     {
      title: 'Foundation',
      price: 'From ₹40k',
      description: 'For early-stage FinTechs (pre-license) with up to ₹1 Cr turnover.',
      features: [
        'Monthly accounting with compliance focus',
        'Basic GST & TDS compliance',
        'Support for regulatory correspondence',
        'Burn reports for investors',
        'Email + monthly call support',
      ],
    },
    {
      title: 'Growth',
      price: 'From ₹75k',
      description: 'For licensed FinTechs with ₹1 Cr - ₹5 Cr turnover.',
      popular: true,
      features: [
        'Everything in Foundation',
        'Advanced compliance support (RBI/SEBI)',
        'Transaction-level reconciliation',
        'Escrow/nodal account reporting support',
        'Financials for regulatory reporting',
        'Monthly review call with FinTech expert',
      ],
    },
    {
      title: 'Custom',
      price: 'Let\'s Talk',
      description: 'For funded FinTechs with over ₹5 Cr annual turnover.',
      features: [
        'Everything in Growth',
        'Virtual CFO advisory on compliance & strategy',
        'Data room management for audits',
        'Unit economics (cost per transaction, etc.)',
        'Investor & board reporting',
        'Quarterly strategy sessions with vCFO',
      ],
    },
  ],
  healthtech: [
      {
      title: 'Foundation',
      price: 'From ₹35k',
      description: 'For HealthTechs in R&D phase with up to ₹1 Cr turnover.',
      features: [
        'Monthly accounting & compliance',
        'R&D expense & grant utilization tracking',
        'Burn rate & runway management',
        'Basic financial reports',
        'Email + monthly call support',
      ],
    },
    {
      title: 'Growth',
      price: 'From ₹70k',
      description: 'For post-launch HealthTechs with ₹1 Cr - ₹5 Cr turnover.',
      popular: true,
      features: [
        'Everything in Foundation',
        'HIPAA/DISHA compliance support for financials',
        'Project-based accounting for clinical trials',
        'Budget vs actuals for R&D projects',
        'Cash flow forecasting',
        'Monthly review call with HealthTech expert',
      ],
    },
    {
      title: 'Custom',
      price: 'Let\'s Talk',
      description: 'For scaling HealthTechs with over ₹5 Cr annual turnover.',
      features: [
        'Everything in Growth',
        'Virtual CFO advisory',
        'Revenue recognition for healthcare contracts',
        'Investor & board reporting',
        'Financial modeling for new ventures',
        'Quarterly strategy sessions with vCFO',
      ],
    },
  ],
  manufacturing: [
     {
      title: 'Foundation',
      price: 'From ₹35k',
      description: 'For small units with up to ₹1 Cr annual turnover.',
      features: [
        'Monthly accounting & close',
        'GST & TDS compliance',
        'Basic inventory & job work tracking',
        'Standard financial reports',
        'Email + monthly call support',
      ],
    },
    {
      title: 'Growth',
      price: 'From ₹70k',
      description: 'For growing SMEs with ₹1 Cr - ₹5 Cr annual turnover.',
      popular: true,
      features: [
        'Everything in Foundation',
        'Advanced inventory costing (FIFO/Weighted Avg)',
        'Bill of Materials (BOM) & COGS analysis',
        'Job work reconciliation',
        'Working capital analysis',
        'Monthly review call with manufacturing expert',
      ],
    },
    {
      title: 'Custom',
      price: 'Let\'s Talk',
      description: 'For complex units with over ₹5 Cr annual turnover.',
      features: [
        'Everything in Growth',
        'Virtual CFO advisory',
        'Standard costing & variance analysis',
        'Factory overhead allocation & reporting',
        'Lender & board reporting package',
        'Quarterly strategy sessions with vCFO',
      ],
    },
  ],
  smb: [
    {
     title: 'Foundation',
     price: 'From ₹15k',
     description: 'For small businesses with up to ₹1 Cr annual turnover.',
     features: [
       'Monthly accounting & bookkeeping',
       'GST & TDS return filing',
       'Basic financial statements (P&L, Balance Sheet)',
       'Email & chat support',
     ],
   },
   {
     title: 'Growth',
     price: 'From ₹40k',
     description: 'For growing businesses with ₹1 Cr - ₹5 Cr annual turnover.',
     popular: true,
     features: [
       'Everything in Foundation',
       'Payroll processing for up to 25 employees',
       'Advanced financial reporting & MIS',
       'Budget preparation & variance analysis',
       'Monthly review call with a dedicated account manager',
     ],
   },
   {
     title: 'Custom',
     price: 'Let\'s Talk',
     description: 'For established SMBs with over ₹5 Cr annual turnover.',
     features: [
       'Everything in Growth',
       'Virtual CFO services',
       'Customized KPI dashboards',
       'Working capital management',
       'Support for bank financing & reporting',
       'Quarterly strategic business reviews',
     ],
   },
 ]
};

const teamCaImg = PlaceHolderImages.find(img => img.id === 'team-ca');
const teamBig4Img = PlaceHolderImages.find(img => img.id === 'team-big4');
const teamIitIimImg = PlaceHolderImages.find(img => img.id === 'team-iit-iim');

export const TEAM_MEMBERS = [
  {
    category: 'Chartered Accountants',
    description: 'Our core financial and accounting strategies are led by seasoned CAs with deep expertise in tax, audit, and corporate finance.',
    icon: Award,
    image: teamCaImg?.imageUrl || '',
    imageHint: teamCaImg?.imageHint || '',
  },
  {
    category: 'Big Four Consultants',
    description: 'Our team includes consultants from top firms like Deloitte, PwC, EY, and KPMG, bringing world-class methodologies and strategic insights.',
    icon: Briefcase,
    image: teamBig4Img?.imageUrl || '',
    imageHint: teamBig4Img?.imageHint || '',
  },
  {
    category: 'IIT & IIM Graduates',
    description: 'Infused with analytical rigor and business acumen from India’s premier institutions, our team excels at problem-solving and innovation.',
    icon: GraduationCap,
    image: teamIitIimImg?.imageUrl || '',
    imageHint: teamIitIimImg?.imageHint || '',
  }
];


const blog1Img = PlaceHolderImages.find(img => img.id === 'blog-1');
const blog2Img = PlaceHolderImages.find(img => img.id === 'blog-2');
const blog3Img = PlaceHolderImages.find(img => img.id === 'blog-3');
const blog4Img = PlaceHolderImages.find(img => img.id === 'blog-4');
const blog5Img = PlaceHolderImages.find(img => img.id === 'blog-5');
const blog6Img = PlaceHolderImages.find(img => img.id === 'blog-6');

export const BLOG_POSTS = getDetailedBlogPosts().map(post => ({
  slug: post.slug,
  title: post.title,
  description: post.summary,
  author: post.author,
  date: post.date,
  category: post.category,
  image: PlaceHolderImages.find(img => img.id === post.imageId)?.imageUrl || '',
  imageHint: PlaceHolderImages.find(img => img.id === post.imageId)?.imageHint || ''
}));

export type BlogPostSummary = (typeof BLOG_POSTS)[0];

const allCategories = BLOG_POSTS.map(post => post.category);
export const BLOG_CATEGORIES = [...new Set(allCategories)];

const caseStudy1Img = PlaceHolderImages.find(img => img.id === 'case-study-1');
const caseStudy2Img = PlaceHolderImages.find(img => img.id === 'case-study-2');
const caseStudy3Img = PlaceHolderImages.find(img => img.id === 'case-study-3');
const caseStudy4Img = PlaceHolderImages.find(img => img.id === 'case-study-4');


export const CASE_STUDIES = getDetailedCaseStudies().map(study => ({
  slug: study.slug,
  client: study.client,
  title: study.title,
  description: study.summary,
  industry: study.industry,
  services: study.services,
  image: PlaceHolderImages.find(img => img.id === study.imageId)?.imageUrl || '',
  imageHint: PlaceHolderImages.find(img => img.id === study.imageId)?.imageHint || ''
}));