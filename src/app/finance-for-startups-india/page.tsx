

import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { INDUSTRY_FINANCE_PAGES } from '@/lib/industry-finance-data';
import { STAGE_PROBLEM_PAGES } from '@/lib/startup-stage-data';
import { SERVICES } from '@/lib/constants';
import { PROGRAMMATIC_PAGES_DATA } from '@/lib/programmatic-pages-data';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


export const metadata = {
  title: 'Finance for Startups in India – End to End | Nexa Consultancy',
  description: 'Your complete guide to startup finance in India. From accounting and GST to fundraising readiness, we cover it all.',
};

const decisionGuidesByCategory: Record<string, string[]> = {
  "Strategic Finance & Growth": [
    "when-to-hire-virtual-cfo",
    "do-bootstrapped-startups-need-a-cfo",
    "when-to-raise-first-funding-round",
    "when-to-hire-first-salesperson",
    "do-you-need-a-co-founder",
    "when-should-a-startup-pivot",
  ],
  "Structuring & Founder Issues": [
    "when-to-create-esop-pool",
    "founder-salary-vs-dividends",
    "do-startups-need-do-insurance",
  ],
  "Core Accounting & Tax": [
    "should-you-outsource-accounting",
    "when-is-statutory-audit-mandatory",
  ],
  "Specialized Compliance": [
    "when-to-get-gst-registration",
    "when-roc-compliance-applies",
    "when-to-deduct-tds-for-freelancers",
    "tds-on-foreign-payments-startups",
    "when-to-worry-about-transfer-pricing",
  ],
  "Industry & Business Model Guides": [
    "virtual-cfo-for-saas-startups",
    "virtual-cfo-for-fintech-startups",
    "gst-compliance-for-export-startups",
    "saas-monthly-vs-annual-plans",
  ],
};


export default function FinanceHubPage() {
  
  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold">Finance for Startups in India – End to End</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            A comprehensive hub for founders navigating the financial, legal, and compliance landscape in India.
          </p>
        </div>
      </section>

      <div className="container py-16 md:py-24 space-y-20">
        <section id="core-pillars">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Core Financial Pillars</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The essential services every startup needs for a strong financial foundation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map(service => (
              <Link href={`/services/${service.slug}`} key={service.slug} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-accent flex flex-col text-center">
                  <CardHeader className="items-center">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-2">
                        <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">{service.title}</CardTitle>
                    <p className="text-sm text-muted-foreground pt-2">{service.description}</p>
                  </CardHeader>
                  <CardContent className="flex-grow" />
                  <CardFooter className="justify-center pt-4">
                    <span className="text-sm font-semibold text-accent flex items-center">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <Separator />

        <section id="specialized-guides-by-type">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Specialized Financial Playbooks</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Find tailored strategies and solutions for your specific stage or industry.
            </p>
          </div>
           <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
               <div id="guides-by-stage">
                <h3 className="text-2xl font-bold text-primary mb-6">By Startup Stage</h3>
                <div className="space-y-2">
                  {STAGE_PROBLEM_PAGES.map(page => {
                    const Icon = page.problem.Icon;
                    return (
                       <Link key={page.slug} href={`/startup-guides/${page.slug}`} className="group flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                          <div className="bg-primary/10 p-2 rounded-full "><Icon className="w-5 h-5 text-primary" /></div>
                          <p className="font-semibold text-foreground group-hover:text-accent transition-colors">{page.h1}</p>
                      </Link>
                    )
                  })}
                </div>
               </div>
               <div id="guides-by-industry">
                <h3 className="text-2xl font-bold text-primary mb-6">By Industry</h3>
                 <div className="space-y-2">
                  {INDUSTRY_FINANCE_PAGES.map(page => {
                    const Icon = page.Icon;
                    return (
                      <Link key={page.slug} href={`/industry-finance/${page.slug}`} className="group flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                          <div className="bg-primary/10 p-2 rounded-full"><Icon className="w-5 h-5 text-primary" /></div>
                          <p className="font-semibold text-foreground group-hover:text-accent transition-colors">{page.h1}</p>
                      </Link>
                    )
                  })}
                </div>
               </div>
           </div>
        </section>

        <Separator />
        
        <section id="decision-guides">
             <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Founder Decision Guides</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Actionable frameworks for the tough questions: when to hire, what to choose, and how to comply.
                </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {Object.entries(decisionGuidesByCategory).map(([category, slugs]) => (
                  <AccordionItem value={category} key={category}>
                    <AccordionTrigger className="text-xl font-semibold hover:no-underline">{category}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="pt-4 space-y-2">
                        {slugs.map(slug => {
                          const page = PROGRAMMATIC_PAGES_DATA.find(p => p.slug === slug);
                           if (!page) return null;
                          return (
                            <li key={slug}>
                              <Link href={`/solutions/${slug}`} className="group flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
                                <ChevronRight className="w-4 h-4 text-accent/80 shrink-0" />
                                <span className="text-muted-foreground group-hover:text-foreground transition-colors">{page.h1}</span>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
        </section>
      </div>
    </>
  );
}
