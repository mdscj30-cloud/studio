import Hero from '@/components/home/Hero';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

// Lazy load components that are below the fold
const Services = dynamic(() => import('@/components/home/ServicesOverview'));
const Portfolio = dynamic(() => import('@/components/home/Portfolio'));
const WhyChooseUs = dynamic(() => import('@/components/home/WhyChooseUs'));
const Testimonials = dynamic(() => import('@/components/home/Testimonials'));

export const metadata: Metadata = {
  title: 'Nexa Consultancy | Finance, Tax & Compliance for Startups in India',
  description: 'Expert finance, tax, and compliance services for startups and growing businesses across India. Trusted by founders in Bangalore, Mumbai, Delhi, and beyond.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nexa Consultancy | Finance, Tax & Compliance for Startups in India',
    description: 'Expert finance, tax, and compliance services for startups and growing businesses across India.',
    url: '/',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <div id="services">
            <Services />
        </div>
      </div>
        <div id="portfolio">
            <Portfolio />
        </div>
      <div className="container">
        <div id="why-us">
            <WhyChooseUs />
        </div>
      </div>
        <div id="testimonials">
            <Testimonials />
        </div>
    </>
  );
}
