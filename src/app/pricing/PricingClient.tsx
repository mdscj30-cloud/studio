'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PRICING_PLANS, PricingPlan } from '@/lib/constants';
import { CheckCircle, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type Industry = 'saas' | 'ecommerce' | 'fintech' | 'healthtech';

const industries: { id: Industry; name: string }[] = [
  { id: 'saas', name: 'SaaS' },
  { id: 'ecommerce', name: 'E-commerce' },
  { id: 'fintech', name: 'FinTech' },
  { id: 'healthtech', name: 'HealthTech' },
];

export function PricingClient() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>('saas');

  const plans = PRICING_PLANS[selectedIndustry];

  const handleIndustryChange = (value: string) => {
    setSelectedIndustry(value as Industry);
  };

  return (
    <div>
      <div className="flex justify-center mb-12">
        <Tabs defaultValue={selectedIndustry} onValueChange={handleIndustryChange} className="w-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            {industries.map((industry) => (
              <TabsTrigger key={industry.id} value={industry.id} className="text-base py-2">
                {industry.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
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
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
              </div>
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
                <Link href="/contact">{plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
       <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-primary mb-4">Need a custom solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">We can create a bespoke package tailored to your startup's unique needs. Contact us for a personalized quote.</p>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
    </div>
  );
}
