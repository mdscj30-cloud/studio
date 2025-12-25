
'use client';

import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DIFFERENTIATORS, REAL_LIFE_HELP_POINTS } from '@/lib/constants';
import { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";

const serviceSections = [
  {
    id: 'virtual-cfo',
    title: 'Virtual CFO',
    description: 'Clarity on numbers. Confidence in decisions.',
    details:
      'We act as your extended finance leadership—managing daily finance operations while helping you plan for growth, manage cash flow, and handle investor reporting.',
    idealFor: 'Startups, D2C brands, manufacturing SMEs',
    handles: [
      'End-to-end accounting & monthly close',
      'P&L, Balance Sheet & Cash Flow reporting',
      'Budgeting, forecasting & variance analysis',
      '13-week rolling cash flow forecasts',
      'Monthly investor updates & board-ready slides',
      'KPI storytelling & narratives',
    ],
  },
  {
    id: 'gst',
    title: 'GST & Indirect Tax',
    description: 'Compliant by default. Optimized by design.',
    details:
      'From filings to reconciliations, we manage your GST compliance seamlessly—so there are no last-minute scrambles or surprise notices.',
    handles: [
      'GSTR-1 & GSTR-3B filings (Monthly / Quarterly)',
      'Sales, purchase & ITC reconciliations',
      'GST liability computation & challans',
      'ITC optimization & mismatch resolution',
      'Ongoing GST compliance monitoring',
    ],
  },
  {
    id: 'income-tax',
    title: 'Income Tax & TDS',
    description: 'No missed deadlines. No unnecessary tax leakage.',
    details:
      'We ensure your direct tax obligations are handled accurately and on time—while keeping cash planning in mind.',
    handles: [
      'Monthly TDS calculations & challans',
      'Quarterly TDS returns (24Q, 26Q)',
      'Form 16 / 16A issuance',
      'Advance tax planning & tracking',
      'Annual income tax return filing',
    ],
  },
  {
    id: 'roc',
    title: 'ROC & Compliance',
    description: 'Strong governance. Zero penalties.',
    details:
      'We manage routine ROC filings, clean up past compliance gaps, and ensure your entity stays compliant year-round.',
    handles: [
      'Annual ROC filings (AOC-4, MGT-7 / 7A)',
      'DIR-3 KYC & event-based filings',
      'Accounting clean-ups & past filing reviews',
      'Compliance gap analysis & risk assessment',
      'Compliance calendars & reminders',
    ],
  },
];

const howItWorks = [
  { title: 'Discovery & compliance assessment' },
  { title: 'Scope definition & retainer setup' },
  { title: 'Finance & compliance onboarding' },
  { title: 'Monthly execution & filings' },
  { title: 'Quarterly review & planning' },
  { title: 'Scale, optimize, or continue' },
];

export function ServicesClient() {
    useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"styles":{"branding":{"brandColor":"#5A2D82"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold">
            Finance, Tax & Compliance — Handled End-to-End
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            So You Can Focus on Building & Scaling. We partner with founders and
            operators to take complete ownership of finance, tax, and
            compliance.
          </p>
          <p className="mt-4 text-base max-w-3xl mx-auto text-primary-foreground/60">
            Whether you’re an early-stage startup or a growing manufacturing
            business, we ensure your numbers are clean, compliant, and
            decision-ready.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <Tabs defaultValue={serviceSections[0].id} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-12">
              {serviceSections.map(service => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="text-xs sm:text-sm"
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {serviceSections.map(service => (
              <TabsContent key={service.id} value={service.id}>
                <Card className="border-accent bg-muted/20">
                  <div className="grid md:grid-cols-2">
                    <div className="p-8">
                      <h2 className="text-2xl font-bold text-primary mb-2">
                        {service.title}
                      </h2>
                      <p className="text-lg font-semibold text-accent mb-4">
                        {service.description}
                      </p>
                      <p className="text-muted-foreground">{service.details}</p>
                      {service.idealFor && (
                        <div className="mt-4 pt-4 border-t">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-semibold text-primary">
                              Ideal for:
                            </span>{' '}
                            {service.idealFor}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="bg-muted/50 p-8 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
                      <h3 className="font-semibold text-foreground mb-4">
                        What we handle
                      </h3>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        {service.handles.map(item => (
                          <li key={item} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-accent mr-3 mt-1 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          <section className="py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Your Strategic Finance Partner
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We go beyond compliance to provide the strategic insights that
                drive growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {DIFFERENTIATORS.map(item => (
                <div key={item.title} className="p-6 bg-card rounded-lg border">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2 bg-muted/50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                How We Work
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Structured. Transparent. Founder-friendly.
              </p>
              <ol className="relative border-l border-border space-y-8">
                {howItWorks.map((step, index) => (
                  <li key={step.title} className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-accent rounded-full -left-4 text-accent-foreground font-bold">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-foreground pt-1.5">
                      {step.title}
                    </h3>
                  </li>
                ))}
              </ol>
            </div>
            <div className="md:col-span-3">
               <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary">How We Give You Leverage</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">We provide real-life help so you can build your business with confidence.</p>
                </div>
                <div className="grid grid-cols-1 gap-8">
                {REAL_LIFE_HELP_POINTS.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div key={item.title} className="p-6 bg-card rounded-lg border border-transparent hover:border-accent hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-4 mb-3">
                                <Icon className="w-8 h-8 text-accent shrink-0" />
                                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    )
                })}
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mx-container-padding bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Let’s Simplify Finance & Compliance
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            You focus on growth. We’ll handle the rest.
          </p>
          <Button size="lg" variant="accent" data-cal-link="chirag-jain/15min" data-cal-config='{"layout":"month_view"}'>
            Book a Free Discovery Call{' '}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
}
