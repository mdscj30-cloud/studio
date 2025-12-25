
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PRICING_PLANS, PricingPlan, PRICING_ADDONS, PRICING_DRIVERS } from '@/lib/constants';
import { CheckCircle, Star, PlusCircle, Factory, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function PricingClient() {
  const plans = PRICING_PLANS['tiers'];

  return (
    <div>
       <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Find Your Fit
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer tiered monthly retainers designed to scale with you. Final pricing depends on your specific complexity and scope.
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan: PricingPlan) => (
          <Card key={plan.title} className={cn(
            "flex flex-col transition-transform duration-300 hover:scale-105",
            plan.popular ? "border-accent border-2 shadow-lg" : "border"
          )}>
            {plan.popular && (
              <div className="bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider text-center py-1.5 rounded-t-lg flex items-center justify-center gap-2">
                <Star className="w-4 h-4" />
                Most Popular
              </div>
            )}
            <CardHeader className="pt-6">
              <CardTitle className="text-2xl text-primary">{plan.title}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-6">
                <span className="text-sm text-muted-foreground">Starts from</span>
                <div className="flex items-baseline">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                </div>
              </div>
              <p className='text-sm font-semibold text-primary mb-3'>Includes:</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant={plan.popular ? 'accent' : 'default'} size="lg">
                <Link href="/contact">Book a Discovery Call</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

        <section className="py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="bg-muted/50 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold text-primary mb-4">Our Pricing Philosophy</h2>
                    <p className="text-muted-foreground mb-6">We price on complexity, not just revenue. Two companies with the same turnover can have vastly different financial needs. Our pricing is designed to be fair, transparent, and aligned with the value we provide.</p>
                    <h3 className="font-semibold text-foreground mb-4">Key Pricing Drivers:</h3>
                     <ul className="space-y-3 text-sm text-muted-foreground">
                        {PRICING_DRIVERS.map((driver) => (
                          <li key={driver} className="flex items-start">
                            <ArrowRight className="w-4 h-4 text-accent mr-3 mt-1 shrink-0" />
                            <span>{driver}</span>
                          </li>
                        ))}
                      </ul>
                </div>
                 <div className="bg-card p-8 rounded-lg border">
                    <h2 className="text-2xl font-bold text-primary mb-4">"Compliance Heavy" Add-Ons</h2>
                    <p className="text-muted-foreground mb-6">Some tasks create spikes in workload or risk. We scope these separately to keep your monthly retainer predictable.</p>
                    <Accordion type="single" collapsible className="w-full">
                        {PRICING_ADDONS.map(addon => (
                             <AccordionItem value={addon.service} key={addon.service}>
                                <AccordionTrigger className="font-semibold text-base">{addon.service}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-muted-foreground">{addon.pricingApproach}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
             <div className="mt-12 bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <div className='flex items-center gap-4'>
                    <Factory className="w-8 h-8 text-primary shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-primary">Manufacturing-Specific Adjustments</h3>
                        <p className="text-muted-foreground">Manufacturing businesses often require more effort due to inventory, costing, and job work accounting. We typically apply a 20-40% premium to account for this complexity.</p>
                    </div>
                </div>
            </div>
        </section>

       <div className="text-center mt-8">
          <h3 className="text-2xl font-bold text-primary mb-4">Let's Build Your Custom Plan</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Every business is unique. Contact us for a free discovery call to get a personalized quote based on your specific needs.</p>
          <Button asChild size="lg" variant="accent">
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
    </div>
  );
}
