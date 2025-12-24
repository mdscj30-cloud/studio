import { WHY_CHOOSE_US } from '@/lib/constants';
import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">The Bharati Advisors Advantage</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Our approach is built on a foundation of trust, expertise, and an unwavering commitment to our clients' success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div key={item.title} className="p-6 bg-card rounded-lg border">
                <div className="flex items-center gap-4">
                    <CheckCircle2 className="w-8 h-8 text-accent shrink-0" />
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                </div>
              <p className="mt-4 text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
