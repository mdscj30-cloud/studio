import Hero from '@/components/home/Hero';
import Process from '@/components/home/Process';
import Portfolio from '@/components/home/Portfolio';
import Services from '@/components/home/ServicesOverview';
import Testimonials from '@/components/home/Testimonials';
import WhyChooseUs from '@/components/home/WhyChooseUs';


export default function Home() {
  return (
    <>
      <Hero />
      <div id="services">
        <Services />
      </div>
       <div id="process">
        <Process />
      </div>
       <div id="portfolio">
        <Portfolio />
      </div>
       <div id="why-us">
        <WhyChooseUs />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
    </>
  );
}
