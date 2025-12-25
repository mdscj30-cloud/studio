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
  DollarSign
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/#process', label: 'Process' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About Us' },
  { href: '/#testimonials', label: 'Success Stories' },
  { href: '/contact', label: 'Contact' },
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
    icon: FileText,
    title: '1. Discovery & Assessment',
    description: 'We start with a deep dive into your business, market, and goals to understand your unique challenges and opportunities.',
  },
  {
    icon: Lightbulb,
    title: '2. Strategy Formulation',
    description: 'Our team crafts a bespoke, data-driven strategy and actionable roadmap tailored to your specific objectives.',
  },
  {
    icon: TrendingUp,
    title: '3. Implementation Support',
    description: 'We work alongside your team, providing hands-on support to ensure the strategy is executed flawlessly.',
  },
  {
    icon: Award,
    title: '4. Performance & Scaling',
    description: 'We continuously monitor performance, making data-backed adjustments to drive growth and scale your success.',
  },
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
