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
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
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


const koparoImg = PlaceHolderImages.find(img => img.id === 'testimonial-koparo');
const kyariImg = PlaceHolderImages.find(img => img.id === 'testimonial-kyari');
const ufaberImg = PlaceHolderImages.find(img => img.id === 'testimonial-ufaber');
const shumeeImg = PlaceHolderImages.find(img => img.id === 'testimonial-shumee');
const getsethomeImg = PlaceHolderImages.find(img => img.id === 'testimonial-getsethome');


export const TESTIMONIALS = [
  {
    quote: "Got Shark Tank India deal with N consulting's Bookkeeping and CFO services.",
    company: 'Revolutionizing household cleaning by offering non-toxic products.',
    name: 'Simran Khara',
    title: 'Founder | Koparo',
    avatar: koparoImg?.imageUrl || '',
    avatarHint: koparoImg?.imageHint || '',
  },
  {
    quote: 'Raised INR 5 cr with N consulting’s CFO, investment banking and due diligence services.',
    company: 'Redefining decorating people’s home and offices with greenery.',
    name: 'Aagam Choudhari',
    title: 'Founder | Kyari',
    avatar: kyariImg?.imageUrl || '',
    avatarHint: kyariImg?.imageHint || '',
  },
  {
    quote: "Raised INR 15 cr with N consulting’s CFO, investment banking and due diligence services.",
    company: 'India\'s best-personalized education programs with Industry-beating course completion rates.',
    name: 'Rohit Jain',
    title: 'Founder | Ufaber',
    avatar: ufaberImg?.imageUrl || '',
    avatarHint: ufaberImg?.imageHint || '',
  },
   {
    quote: "Getting ready to raise pre-series A with N consulting's bookkeeping and CFO services.",
    company: 'Integrating scientific research with play and creating eco-friendly toys.',
    name: 'Meeta Sharma',
    title: 'Founder | Shumee Toys',
    stage: 'Pre- Series A',
    avatar: shumeeImg?.imageUrl || '',
    avatarHint: shumeeImg?.imageHint || '',
  },
   {
    quote: "Raised INR 4 Cr with N consulting’s CFO and due diligence services.",
    company: 'Simplifying the process of seeking quality rental homes.',
    name: 'Junaid Shaikh',
    title: 'Founder | GetSetHome',
    avatar: getsethomeImg?.imageUrl || '',
    avatarHint: getsethomeImg?.imageHint || '',
  },
];

export const PORTFOLIO_COMPANIES = [
    { name: 'InnovateTech' },
    { name: 'QuantumLeap' },
    { name: 'NextGen AI' },
    { name: 'BioHealth' },
    { name: 'Fintech Solutions' },
    { name: 'EcoPlanet' },
    { name: 'SmartHome' },
    { name: 'TravelPro' },
];


export const findImage = (id: string): ImagePlaceholder | undefined => {
    return PlaceHolderImages.find(img => img.id === id);
}
