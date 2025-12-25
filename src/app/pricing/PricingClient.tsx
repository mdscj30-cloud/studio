
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PRICING_PLANS, PricingPlan, PRICING_ADDONS, PRICING_DRIVERS, SECTORS_SERVED } from '@/lib/constants';
import { CheckCircle, Star, ArrowRight, Factory } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState, useMemo, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import Cal from "@calcom/embed-react";

export function PricingClient() {
  const defaultSector = SECTORS_SERVED[0].id;
  const [turnover, setTurnover] = useState([1]);
  
  const recommendedPlan = useMemo(() => {
    const value = turnover[0];
    if (value <= 1) return 'Foundation';
    if (value > 1 && value <= 5) return 'Growth';
    return 'Custom';
  }, [turnover]);

  useEffect(() => {
    (async function () {
      const cal = await Cal({
        calLink: "nconsulting/15min",
      });
      cal("ui", {"styles":{"branding":{"brandColor":"#5A2D82"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <div>
       <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Find Your Fit
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer tiered monthly retainers designed to scale with you. Adjust the slider to find your recommended plan, then select your industry to see tailored features.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto mb-16 p-6 shadow-lg">
          <CardContent className="pt-6">
            <div className='text-center mb-4'>
              <Label className="text-lg font-semibold text-primary">What is your Annual Turnover?</Label>
              <p className="text-2xl font-bold text-accent mt-2">₹ {turnover[0]} Crore</p>
            </div>
            <Slider
              defaultValue={turnover}
              onValueChange={setTurnover}
              max={10}
              step={0.5}
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>₹0 Cr</span>
              <span>₹5 Cr</span>
              <span>₹10 Cr+</span>
            </div>
          </CardContent>
        </Card>


        <Tabs defaultValue={defaultSector} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto mb-12">
              {SECTORS_SERVED.map(sector => (
                <TabsTrigger
                  key={sector.id}
                  value={sector.id}
                  className="text-xs sm:text-sm flex items-center gap-2"
                >
                  <sector.icon className="w-4 h-4" />
                  {sector.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {SECTORS_SERVED.map(sector => (
              <TabsContent key={sector.id} value={sector.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                  {PRICING_PLANS[sector.id]?.map((plan: PricingPlan) => (
                    <Card key={plan.title} className={cn(
                      "flex flex-col transition-all duration-300 transform-gpu",
                      recommendedPlan === plan.title ? "border-accent border-2 shadow-xl scale-105" : "border"
                    )}>
                      <div className="relative">
                        {recommendedPlan === plan.title && (
                          <Badge variant="accent" className="absolute -top-3 left-1/2 -translate-x-1/2">Recommended</Badge>
                        )}
                        {plan.popular && recommendedPlan !== plan.title && (
                          <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider text-center py-1.5 rounded-t-lg flex items-center justify-center gap-2">
                            <Star className="w-4 h-4" />
                            Most Popular
                          </div>
                        )}
                      </div>
                      <CardHeader className="pt-8">
                        <CardTitle className="text-2xl text-primary">{plan.title}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="mb-6">
                           <span className="text-4xl font-bold">{plan.price}</span>
                           {plan.title !== 'Custom' && <span className="text-muted-foreground">/month</span>}
                        </div>
                        <p className='text-sm font-semibold text-primary mb-3'>Key Features:</p>
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
                         <Button data-cal-link="nconsulting/15min" className="w-full" variant={recommendedPlan === plan.title ? 'accent' : 'default'} size="lg">
                            Book a Discovery Call
                         </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
        </Tabs>
      
        <section className="py-16 md:py-24 bg-muted/30 -mx-4 px-4 mt-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="bg-card p-8 rounded-lg border">
                    <h2 className="text-2xl font-bold text-primary mb-4">Our Pricing Philosophy</h2>
                    <p className="text-muted-foreground mb-6">While turnover provides a starting point, our final pricing is based on complexity. Two companies with the same revenue can have vastly different financial needs. Our goal is to align our fee with the value and effort required.</p>
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
            </div>
        </section>

       <div className="text-center mt-16 md:mt-24">
          <h3 className="text-2xl font-bold text-primary mb-4">Let's Build Your Custom Plan</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Every business is unique. Contact us for a free discovery call to get a personalized quote based on your specific needs.</p>
          <Button asChild size="lg" variant="accent">
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
    </div>
  );
}
