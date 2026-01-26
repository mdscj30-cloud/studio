
import { PricingClient } from './PricingClient';
import { DollarSign } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PRICING_PAGES_DATA } from '@/lib/pricing-pages-data';

export const metadata = {
  title: 'Pricing Plans & Cost Guides | Nexa Consultancy',
  description: 'Explore transparent pricing for SaaS, E-commerce, FinTech, and HealthTech startups. Understand costs for vCFO, compliance, and accounting services.',
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

      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Explore Our Pricing Guides</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Get detailed insights into the costs associated with financial services for startups in India.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRICING_PAGES_DATA.map(page => {
                const Icon = page.Icon;
                return (
                    <Link href={`/pricing/${page.slug}`} key={page.slug} className="group">
                        <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-accent">
                            <CardHeader className="flex-row items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">{page.h1}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{page.description}</p>
                            </CardContent>
                        </Card>
                    </Link>
                )
            })}
        </div>
      </section>

      <div className="py-16 md:py-24 bg-muted/30 -mx-container-padding">
        <div className="container">
            <PricingClient />
        </div>
      </div>
    </>
  );
}
