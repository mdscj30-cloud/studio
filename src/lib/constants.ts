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
    slug: 'strategic-planning',
    icon: Building,
    title: 'Strategic Planning',
    description: 'Crafting actionable roadmaps for sustainable growth and market leadership.',
  },
  {
    slug: 'financial-advisory',
    icon: HandCoins,
    title: 'Financial Advisory',
    description: 'Optimizing financial health, from fundraising strategy to exit planning.',
  },
  {
    slug: 'operations-consulting',
    icon: FileCheck,
    title: 'Operations Consulting',
    description: 'Streamlining processes to improve efficiency and support scalability.',
  },
  {
    slug: 'market-entry-strategy',
    icon: LineChart,
    title: 'Market Entry Strategy',
    description: 'Developing data-driven strategies for successful new market penetration.',
  },
  {
    slug: 'corporate-governance',
    icon: Scale,
    title: 'Corporate Governance',
    description: 'Establishing robust governance frameworks for long-term stability.',
  },
  {
    slug: 'due-diligence',
    icon: Users,
    title: 'Due Diligence Support',
    description: 'Comprehensive support to prepare for and navigate investor scrutiny.',
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
    description: 'Our team rapidly scales as your business scales, to ensure you never have to worry about your finances.',
  },
];


const koparoImg = PlaceHolderImages.find(img => img.id === 'testimonial-koparo');
const kyariImg = PlaceHolderImages.find(img => img.id === 'testimonial-kyari');
const ufaberImg = PlaceHolderImages.find(img => img.id === 'testimonial-ufaber');
const shumeeImg = PlaceHolderImages.find(img => img.id === 'testimonial-shumee');
const getsethomeImg = PlaceHolderImages.find(img => img.id === 'testimonial-getsethome');


export const TESTIMONIALS = [
  {
    quote: "N consulting was pivotal in our seed round, providing strategic insights that sharpened our pitch and financial model. Their expertise was a game-changer.",
    company: 'Leading the way in sustainable packaging solutions.',
    name: 'Priya Sharma',
    title: 'CEO, EcoPack',
    avatar: koparoImg?.imageUrl || '',
    avatarHint: koparoImg?.imageHint || '',
  },
  {
    quote: 'Their operational consulting streamlined our processes, cutting costs by 20% and preparing us for a successful Series A.',
    company: 'A fast-growing SaaS platform for remote team collaboration.',
    name: 'Rohan Mehta',
    title: 'Founder, ConnectSphere',
    avatar: kyariImg?.imageUrl || '',
    avatarHint: kyariImg?.imageHint || '',
  },
  {
    quote: 'The market entry strategy developed by N consulting was flawless. We launched in two new regions ahead of schedule and exceeded our initial sales targets.',
    company: 'A direct-to-consumer health and wellness brand.',
    name: 'Anika Reddy',
    title: 'Co-Founder, Nourish & Co.',
    avatar: ufaberImg?.imageUrl || '',
    avatarHint: ufaberImg?.imageHint || '',
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
