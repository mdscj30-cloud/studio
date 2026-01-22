

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
import { DETAILED_BLOG_POSTS, DETAILED_CASE_STUDIES } from '@/lib/content';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/finance-for-startups-india', label: 'Startup Finance Guide' },
  { href: '/process', label: 'Process' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/resources', label: 'Resources' },
  { href: '/resources/glossary', label: 'Glossary' },
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

export const BLOG_POSTS = DETAILED_BLOG_POSTS.map(post => ({
  slug: post.slug,
  title: post.title,
  description: post.summary,
  author: post.author,
  date: post.date,
  category: post.category,
  image: PlaceHolderImages.find(img => img.id === post.imageId)?.imageUrl || '',
  imageHint: PlaceHolderImages.find(img => img.id === post.imageId)?.imageHint || ''
}));

const caseStudy1Img = PlaceHolderImages.find(img => img.id === 'case-study-1');
const caseStudy2Img = PlaceHolderImages.find(img => img.id === 'case-study-2');
const caseStudy3Img = PlaceHolderImages.find(img => img.id === 'case-study-3');
const caseStudy4Img = PlaceHolderImages.find(img => img.id === 'case-study-4');


export const CASE_STUDIES = DETAILED_CASE_STUDIES.map(study => ({
  slug: study.slug,
  client: study.client,
  title: study.title,
  description: study.summary,
  industry: study.industry,
  services: study.services,
  image: PlaceHolderImages.find(img => img.id === study.imageId)?.imageUrl || '',
  imageHint: PlaceHolderImages.find(img => img.id === study.imageId)?.imageHint || ''
}));

    
