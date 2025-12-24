import type { ImagePlaceholder } from '@/lib/placeholder-images';
import {
  BriefcaseBusiness,
  Landmark,
  Calculator,
  ClipboardCheck,
  ShieldCheck,
  Rocket,
  Factory,
  Wrench,
  Laptop,
  Building2,
  Users,
  CheckCircle,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/admin/testimonial-generator', label: 'Admin' },
];

export const SERVICES = [
  {
    slug: 'business-strategic-advisory',
    icon: BriefcaseBusiness,
    title: 'Business & Strategic Advisory',
    description: 'Guiding your enterprise through complex challenges with actionable strategies for sustainable growth.',
  },
  {
    slug: 'tax-regulatory-consulting',
    icon: Landmark,
    title: 'Tax & Regulatory Consulting',
    description: 'Navigating the Indian tax and regulatory landscape with precision, ensuring compliance and optimization.',
  },
  {
    slug: 'virtual-cfo-financial-advisory',
    icon: Calculator,
    title: 'Virtual CFO & Financial Advisory',
    description: 'Providing high-level financial expertise to drive profitability and strategic decision-making.',
  },
  {
    slug: 'accounting-compliance',
    icon: ClipboardCheck,
    title: 'Accounting & Compliance',
    description: 'Ensuring robust financial reporting and unwavering adherence to statutory requirements.',
  },
  {
    slug: 'risk-audit-due-diligence',
    icon: ShieldCheck,
    title: 'Risk, Audit & Due Diligence',
    description: 'Safeguarding your assets and reputation through meticulous risk management and comprehensive audits.',
  },
  {
    slug: 'startup-msme-advisory',
    icon: Rocket,
    title: 'Startup & MSME Advisory',
    description: 'Tailored guidance for emerging businesses, from incorporation and funding to scaling operations.',
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: CheckCircle,
    title: 'Experienced Professionals',
    description: 'Our team comprises seasoned consultants with deep domain expertise and a history of delivering results.',
  },
  {
    title: 'Ethical & Compliant Advisory',
    description: 'We operate with the highest standards of integrity, ensuring every recommendation is ethically sound and fully compliant.',
  },
  {
    title: 'Practical, Implementable Solutions',
    description: 'We provide strategic advice that is not only insightful but also grounded in operational reality for seamless execution.',
  },
  {
    title: 'Deep Industry Understanding',
    description: 'Our advisory is enriched by a nuanced understanding of the Indian market and its diverse industry verticals.',
  },
  {
    title: 'Confidentiality & Accountability',
    description: 'We are committed to absolute client confidentiality and take full ownership of our advisory role in your success.',
  },
];

export const INDUSTRIES = [
  {
    icon: Rocket,
    title: 'Startups & Emerging Businesses',
    description: 'Strategic guidance to navigate growth from seed stage to market leadership.',
  },
  {
    icon: Factory,
    title: 'MSMEs',
    description: 'Optimizing operations, finance, and compliance for the backbone of the Indian economy.',
  },
  {
    icon: Wrench,
    title: 'Manufacturing',
    description: 'Enhancing efficiency, managing costs, and navigating the complex regulatory landscape.',
  },
  {
    icon: Laptop,
    title: 'Services & IT',
    description: 'Financial and strategic advisory for the fast-paced technology and service sectors.',
  },
  {
    icon: Building2,
    title: 'Real Estate',
    description: 'Expertise in project financing, RERA compliance, and tax structuring for developers.',
  },
  {
    icon: Users,
    title: 'Professionals & Family Businesses',
    description: 'Advisory on succession planning, wealth management, and corporate governance.',
  },
];

const testimonialAvatars = PlaceHolderImages.filter(img => img.id.includes('testimonial-avatar'));

export const TESTIMONIALS = [
  {
    quote: "Bharati Advisors transformed our financial strategy, leading to a 25% increase in operational efficiency. Their virtual CFO service is indispensable for any growing startup.",
    name: 'Aarav Patel',
    title: 'CEO, TechNova Solutions',
    avatar: testimonialAvatars.find(img => img.id === 'testimonial-avatar-1')?.imageUrl || '',
    avatarHint: testimonialAvatars.find(img => img.id === 'testimonial-avatar-1')?.imageHint || '',
  },
  {
    quote: "Navigating the complexities of GST and compliance was our biggest challenge. The team at Bharati Advisors provided clear, actionable guidance that saved us from significant potential liabilities.",
    name: 'Priya Sharma',
    title: 'Director, Nirmal Exports',
    avatar: testimonialAvatars.find(img => img.id === 'testimonial-avatar-2')?.imageUrl || '',
    avatarHint: testimonialAvatars.find(img => img.id === 'testimonial-avatar-2')?.imageHint || '',
  },
  {
    quote: "Their due diligence process was incredibly thorough and uncovered critical insights during our acquisition. We operate with far greater confidence thanks to their risk advisory.",
    name: 'Rohan Mehta',
    title: 'CFO, Sterling Manufacturing Co.',
    avatar: testimonialAvatars.find(img => img.id === 'testimonial-avatar-3')?.imageUrl || '',
    avatarHint: testimonialAvatars.find(img => img.id === 'testimonial-avatar-3')?.imageHint || '',
  },
];

export const findImage = (id: string): ImagePlaceholder | undefined => {
    return PlaceHolderImages.find(img => img.id === id);
}
