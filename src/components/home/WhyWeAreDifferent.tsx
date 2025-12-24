import { DIFFERENTIATORS } from '@/lib/constants';

export default function WhyWeAreDifferent() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Why we're different</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {DIFFERENTIATORS.map((item) => (
            <div key={item.title} className="p-6 bg-card rounded-lg border">
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
