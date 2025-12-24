import { PORTFOLIO_COMPANIES } from '@/lib/constants';

export default function Portfolio() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Portfolio</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            We are proud to have partnered with innovative startups across various industries.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
          {PORTFOLIO_COMPANIES.map((company) => (
            <div key={company.name} className="flex items-center justify-center p-2" title={company.name}>
               <span className="text-2xl font-bold text-muted-foreground grayscale hover:grayscale-0 transition-all">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
