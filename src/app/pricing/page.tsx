
import { PricingClient } from './PricingClient';
import { DollarSign } from 'lucide-react';

export const metadata = {
  title: 'Pricing Plans | Nexa Consultancy',
  description: 'Find the perfect plan for your startup. Transparent pricing for SaaS, E-commerce, FinTech, and HealthTech industries.',
};

export default function PricingPage() {
  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24 text-center">
            <div className="inline-block bg-primary-foreground/10 p-4 rounded-full mb-4">
                <DollarSign className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Transparent, Value-Based Pricing</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
              For less than the cost of a junior hire, you get a full finance & compliance team—without dependency risk.
            </p>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        <PricingClient />
      </div>
    </>
  );
}
