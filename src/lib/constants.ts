
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
  RotateCcw
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/resources', label: 'Resources' },
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
    description: 'Pitch deck, MIS, Budgeting, KPI tracking, or fundraising support. We help you close timely due diligence, saving significant founder\'s time.',
  },
  {
    slug: 'bookkeeping',
    icon: BookUser,
    title: 'Bookkeeping',
    description: 'From early stage to growth stage companies, our tailored bookkeeping packages are suitable for all. Our experts can manage your complex accounts.',
  },
  {
    slug: 'business-setup',
    icon: Building,
    title: 'Business Setup Services',
    description: 'Helping Indian or foreign individuals or companies set up business in India and handholding with applicable regulatory registrations.',
  },
  {
    slug: 'regulatory-compliances',
    icon: FileCheck,
    title: 'Regulatory Compliances',
    description: 'Provide timely and accurate compliances required for Direct Tax, Indirect Tax, Labor Law, Companies Act, FEMA Act, etc.',
  },
  {
    slug: 'investor-due-diligence',
    icon: Users,
    title: 'Investor Due Diligence',
    description: 'Conducting financial, secretarial, and legal due diligence for incubators, VC funds, and supporting companies with Data room.',
  },
  {
    slug: 'pitch-deck-financial-modelling',
    icon: Presentation,
    title: 'Pitch deck and Financial Modelling',
    description: 'Helping founders craft compelling pitch decks and simplified financial models and preparing them for investor reach out.',
  },
  {
    slug: 'corporate-law',
    icon: Scale,
    title: 'Corporate Law',
    description: 'Corporate advisory and drafting/vetting of legal contracts like Term Sheets, Shareholders, and Subscription agreements.',
  },
  {
    slug: 'fundraising',
    icon: HandCoins,
    title: 'Fundraising',
    description: 'Advisory for Venture Capital, Venture Debt, new-age financing options and M&A transactions.',
  },
];

export const PROCESS_STEPS = [
  {
    icon: Phone,
    title: 'Discovery Call – Compliance Included',
    description: 'Identify statutory exposure early, covering GST, Income Tax, TDS, ROC, Payroll, and PF/ESI status. Output: Compliance risk assessment & draft filing calendar.',
  },
  {
    icon: ClipboardList,
    title: 'Finance Scope Definition',
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
    title: 'Monthly Finance Report & Review',
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
    quote: "Their team's expertise in market analysis was crucial for our product launch. N consulting delivered results beyond our expectations.",
    company: 'A VR/AR experiential platform.',
    name: 'Aarav Sharma',
    title: 'CEO | FutureVerse',
    avatar: futureVerseImg?.imageUrl || '',
    avatarHint: futureVerseImg?.imageHint || '',
  },
  {
    quote: 'With N consulting, we optimized our supply chain and cut operational costs by 20%. Their impact was immediate and significant.',
    company: 'An AI-driven logistics optimization startup.',
    name: 'Zara Khan',
    title: 'COO | QuantumLeap Logistics',
    avatar: quantumLeapImg?.imageUrl || '',
    avatarHint: quantumLeapImg?.imageHint || '',
  },
  {
    quote: "The strategic roadmap they developed has become our north star. We're on track to double our user base this year.",
    company: 'A biotech firm specializing in gene-editing.',
    name: 'Dr. Rohan Mehra',
    title: 'Chief Scientist | BioGen Innovations',
    avatar: bioGenImg?.imageUrl || '',
    avatarHint: bioGenImg?.imageHint || '',
  },
   {
    quote: "Navigating international regulations was a major hurdle. N consulting's legal team made the process seamless and efficient.",
    company: 'A travel-tech startup for personalized itineraries.',
    name: 'Ishaan Verma',
    title: 'Founder | TravelWise',
    stage: 'Growth Stage',
    avatar: travelWiseImg?.imageUrl || '',
    avatarHint: travelWiseImg?.imageHint || '',
  },
   {
    quote: "Their financial modeling was top-notch, helping us secure a critical bridge round to extend our runway.",
    company: 'A company developing biodegradable packaging.',
    name: 'Priya Desai',
    title: 'CEO | EcoSolutions',
    avatar: ecoSolutionsImg?.imageUrl || '',
    avatarHint: ecoSolutionsImg?.imageHint || '',
  },
  {
    quote: "N consulting's brand strategy and marketing plan gave us the clarity we needed to connect with our target audience effectively.",
    company: 'An online marketplace for independent artists.',
    name: 'Sameer Ali',
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

export const PRICING_PLANS: Record<string, PricingPlan[]> = {
  saas: [
    {
      title: 'Startup',
      price: '₹15,000',
      description: 'For early-stage SaaS startups building their MVP.',
      features: [
        'Monthly Bookkeeping',
        'Payroll (up to 10 employees)',
        'Basic MIS Reporting',
        'GST & TDS Compliance'
      ],
    },
    {
      title: 'Growth',
      price: '₹40,000',
      description: 'For growing SaaS companies scaling their operations.',
      popular: true,
      features: [
        'All Startup features',
        'Virtual CFO Services (Lite)',
        'SaaS Metrics Tracking (MRR, Churn)',
        'Advanced MIS & KPI Dashboard',
        'Budgeting & Forecasting',
      ],
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      description: 'For established SaaS businesses requiring comprehensive financial strategy.',
      features: [
        'All Growth features',
        'Dedicated Virtual CFO',
        'Investor Relations & Reporting',
        'Fundraising & Due Diligence Support',
        'Custom Financial Modeling',
      ],
    },
  ],
  ecommerce: [
    {
      title: 'Starter',
      price: '₹12,000',
      description: 'For new e-commerce stores getting started.',
      features: [
        'Weekly Bookkeeping',
        'Payment Gateway Reconciliation',
        'GST Compliance',
        'Inventory Accounting (Basic)',
      ],
    },
    {
      title: 'Professional',
      price: '₹35,000',
      description: 'For established online retailers managing higher volumes.',
      popular: true,
      features: [
        'All Starter features',
        'Marketplace Reconciliation (Amazon, Flipkart)',
        'COGS & Margin Analysis',
        'Cashflow Management',
        'TDS & TCS Compliance',
      ],
    },
    {
      title: 'Scale',
      price: 'Custom',
      description: 'For large-scale e-commerce operations with complex needs.',
      features: [
        'All Professional features',
        'Multi-channel Inventory Management',
        'Virtual CFO Services',
        'Supply Chain Finance Advisory',
        'Valuation & M&A Support',
      ],
    },
  ],
  fintech: [
    {
      title: 'Pre-Seed',
      price: '₹20,000',
      description: 'For FinTech startups in the regulatory sandbox or pre-launch phase.',
      features: [
        'RBI & SEBI Compliance Advisory',
        'Monthly Bookkeeping',
        'Burn Rate Analysis',
        'ESOP & Cap Table Management (Basic)',
      ],
    },
    {
      title: 'Series A',
      price: '₹60,000',
      description: 'For funded FinTech companies preparing to scale.',
      popular: true,
      features: [
        'All Pre-Seed features',
        'Virtual CFO for FinTech',
        'Regulatory Reporting Automation',
        'Financial Due Diligence Support',
        'Advanced Cap Table Management',
      ],
    },
    {
      title: 'Growth',
      price: 'Custom',
      description: 'For mature FinTechs expanding products and markets.',
      features: [
        'All Series A features',
        'Dedicated Finance & Compliance Team',
        'M&A and IPO Readiness Advisory',
        'Global Expansion Financial Strategy',
        'Treasury Management',
      ],
    },
  ],
  healthtech: [
    {
      title: 'Innovator',
      price: '₹18,000',
      description: 'For HealthTech startups developing their core technology.',
      features: [
        'R&D Expense Tracking',
        'Grant & Funding Utilization Reporting',
        'Basic Bookkeeping & Compliance',
        'HIPAA/DISHA Compliance Advisory',
      ],
    },
    {
      title: 'Clinical',
      price: '₹50,000',
      description: 'For companies in clinical trials or entering the market.',
      popular: true,
      features: [
        'All Innovator features',
        'Project-based Accounting for Trials',
        'Virtual CFO Services',
        'Revenue Recognition (Healthcare)',
        'Investor & Board Reporting',
      ],
    },
    {
      title: 'Provider',
      price: 'Custom',
      description: 'For established HealthTech platforms serving hospitals and clinics.',
      features: [
        'All Clinical features',
        'Comprehensive Financial Management',
        'Strategic Partnership Finance',
        'Medical Billing & Coding Financial Oversight',
        'Full Due Diligence & M&A Support',
      ],
    },
  ],
};


const blog1Img = PlaceHolderImages.find(img => img.id === 'blog-1');
const blog2Img = PlaceHolderImages.find(img => img.id === 'blog-2');
const blog3Img = PlaceHolderImages.find(img => img.id === 'blog-3');
const blog4Img = PlaceHolderImages.find(img => img.id === 'blog-4');
const blog5Img = PlaceHolderImages.find(img => img.id === 'blog-5');
const blog6Img = PlaceHolderImages.find(img => img.id === 'blog-6');

export const BLOG_POSTS = [
  {
    slug: 'mastering-saas-metrics',
    title: 'Mastering SaaS Metrics: A Guide for Founders',
    description: 'Understand the key metrics that drive growth and investor confidence in the SaaS space, from MRR and Churn to LTV and CAC.',
    author: 'Priya Sharma',
    date: '2024-07-15',
    category: 'SaaS',
    image: blog1Img?.imageUrl || '',
    imageHint: blog1Img?.imageHint || ''
  },
  {
    slug: 'fintech-compliance-decoded',
    title: 'FinTech Compliance Decoded: Navigating the Regulatory Maze',
    description: 'A deep dive into the complex regulatory landscape for FinTech startups in India, covering RBI guidelines, data privacy, and more.',
    author: 'Rohan Mehra',
    date: '2024-06-28',
    category: 'FinTech',
    image: blog2Img?.imageUrl || '',
    imageHint: blog2Img?.imageHint || ''
  },
  {
    slug: 'ecommerce-cash-flow',
    title: 'The Ultimate Guide to Cash Flow Management for E-commerce',
    description: 'Learn proven strategies to manage your cash flow effectively, optimize inventory, and ensure the long-term success of your business.',
    author: 'Anjali Verma',
    date: '2024-05-19',
    category: 'E-commerce',
    image: blog3Img?.imageUrl || '',
    imageHint: blog3Img?.imageHint || ''
  },
  {
    slug: 'startup-fundraising-101',
    title: 'Startup Fundraising 101: From Pitch Deck to Term Sheet',
    description: 'A step-by-step guide to preparing for your fundraising journey, crafting a winning pitch, and negotiating favorable terms.',
    author: 'Vikram Singh',
    date: '2024-07-22',
    category: 'Fundraising',
    image: blog4Img?.imageUrl || '',
    imageHint: blog4Img?.imageHint || ''
  },
  {
    slug: 'demystifying-cap-tables',
    title: 'Demystifying Cap Tables: A Founder\'s Handbook',
    description: 'Understand the importance of cap table management, common pitfalls to avoid, and how to use it as a strategic tool.',
    author: 'Priya Sharma',
    date: '2024-06-10',
    category: 'Startup Finance',
    image: blog5Img?.imageUrl || '',
    imageHint: blog5Img?.imageHint || ''
  },
  {
    slug: 'due-diligence-red-flags',
    title: 'Top 5 Due Diligence Red Flags for Investors',
    description: 'Prepare your startup for investor scrutiny by understanding the common red flags that can derail a funding round.',
    author: 'Rohan Mehra',
    date: '2024-05-05',
    category: 'Due Diligence',
    image: blog6Img?.imageUrl || '',
    imageHint: blog6Img?.imageHint || ''
  },
];

const caseStudy1Img = PlaceHolderImages.find(img => img.id === 'case-study-1');
const caseStudy2Img = PlaceHolderImages.find(img => img.id === 'case-study-2');
const caseStudy3Img = PlaceHolderImages.find(img => img.id === 'case-study-3');
const caseStudy4Img = PlaceHolderImages.find(img => img.id === 'case-study-4');


export const CASE_STUDIES = [
  {
    slug: 'quantumleap-logistics-growth',
    client: 'QuantumLeap Logistics',
    title: 'Scaling Operations: How QuantumLeap Logistics Grew 3x with Our Financial Strategy',
    description: 'Discover how our virtual CFO services helped QuantumLeap Logistics optimize their finances, secure funding, and scale their operations threefold in just 18 months.',
    industry: 'Logistics',
    services: ['Virtual CFO', 'Fundraising', 'MIS & KPI Tracking'],
    image: caseStudy1Img?.imageUrl || '',
    imageHint: caseStudy1Img?.imageHint || ''
  },
  {
    slug: 'innovatex-saas-success',
    client: 'InnovateX',
    title: 'From Seed to Series A: The InnovateX Success Story',
    description: 'A look into how we guided InnovateX through their fundraising journey, from crafting the perfect pitch deck to navigating due diligence and closing their Series A round.',
    industry: 'SaaS',
    services: ['Pitch deck and Financial Modelling', 'Investor Due Diligence', 'Corporate Law'],
    image: caseStudy2Img?.imageUrl || '',
    imageHint: caseStudy2Img?.imageHint || ''
  },
  {
    slug: 'medibot-healthtech-ai',
    client: 'MediBot',
    title: 'AI in HealthTech: MediBot\'s Path to Profitability',
    description: 'We provided comprehensive financial modeling and compliance advisory, enabling MediBot to secure FDA clearance and achieve profitability within two years of launch.',
    industry: 'HealthTech',
    services: ['Virtual CFO', 'Regulatory Compliances', 'Financial Modelling'],
    image: caseStudy3Img?.imageUrl || '',
    imageHint: caseStudy3Img?.imageHint || ''
  },
  {
    slug: 'urban-roots-d2c-brand',
    client: 'Urban Roots',
    title: 'Cultivating Growth: Urban Roots\' D2C E-commerce Expansion',
    description: 'Our team streamlined inventory management and implemented a robust financial reporting system, resulting in a 40% reduction in costs and a 200% increase in online sales.',
    industry: 'D2C / E-commerce',
    services: ['Bookkeeping', 'Inventory Management', 'MIS & KPI Tracking'],
    image: caseStudy4Img?.imageUrl || '',
    imageHint: caseStudy4Img?.imageHint || ''
  },
];
