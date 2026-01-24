'use client';

import Hero from '@/components/home/Hero';
import dynamic from 'next/dynamic';

// Lazy load components that are below the fold
const Services = dynamic(() => import('@/components/home/ServicesOverview'));
const Portfolio = dynamic(() => import('@/components/home/Portfolio'));
const WhyChooseUs = dynamic(() => import('@/components/home/WhyChooseUs'));
const Testimonials = dynamic(() => import('@/components/home/Testimonials'));


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
