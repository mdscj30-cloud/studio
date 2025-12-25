'use client';

import Hero from '@/components/home/Hero';
import Portfolio from '@/components/home/Portfolio';
import Services from '@/components/home/ServicesOverview';
import Testimonials from '@/components/home/Testimonials';
import WhyChooseUs from '@/components/home/WhyChooseUs';


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
