import Hero from '@/components/home/Hero';
import Introduction from '@/components/home/Introduction';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import IndustriesServed from '@/components/home/IndustriesServed';
import Testimonials from '@/components/home/Testimonials';
import HomeCTA from '@/components/home/HomeCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <ServicesOverview />
      <WhyChooseUs />
      <IndustriesServed />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
