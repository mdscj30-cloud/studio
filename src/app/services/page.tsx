import Services from "@/components/home/ServicesOverview";

export const metadata = {
  title: 'Our Services | N consulting',
  description: 'Explore our core consulting services for startups, including strategic planning, financial advisory, and operational excellence.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            A comprehensive suite of advisory services to guide your startup from concept to market leadership.
          </p>
        </div>
      </section>

      <Services />
    </>
  );
}
