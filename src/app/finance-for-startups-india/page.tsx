
import { ArrowRight, CheckCircle, Rocket, Factory, Briefcase, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { INDUSTRY_FINANCE_PAGES } from '@/lib/industry-finance-data';
import { STAGE_PROBLEM_PAGES } from '@/lib/startup-stage-data';
import { SERVICES } from '@/lib/constants';
import { PROGRAMMATIC_PAGES_DATA } from '@/lib/programmatic-pages-data';


export const metadata = {
  title: 'Finance for Startups in India – End to End | Nexa Consultancy',
  description: 'Your complete guide to startup finance in India. From accounting and GST to fundraising readiness, we cover it all.',
};

export default function FinanceHubPage() {
  
  const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-');


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

      <div className="container py-16 md:py-24 space-y-24">
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
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-accent flex flex-col">
                  <CardHeader className="flex-grow">
                    <div className="flex items-start gap-3 mb-2">
                        <div className="bg-primary/10 p-2 rounded-full mt-1">
                            <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="pt-2">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section id="targeted-solutions">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Targeted Financial Solutions</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Specific solutions for common startup challenges.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {PROGRAMMATIC_PAGES_DATA.map(page => {
                    const Icon = page.Icon;
                    return (
                    <Link href={`/solutions/${page.slug}`} key={page.slug} className="group">
                        <Card className="h-full text-center transition-all duration-300 hover:shadow-lg hover:border-accent flex flex-col">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
                                <Icon className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">{page.h1}</CardTitle>
                        </CardHeader>
                        <CardContent>
                                <p className="text-sm text-muted-foreground">{page.description.substring(0, 100)}...</p>
                            </CardContent>
                        </Card>
                    </Link>
                    )
                })}
            </div>
        </section>

        <section id="industry-guides">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Finance Guides by Industry</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored financial strategies and compliance guidance for your specific industry.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {INDUSTRY_FINANCE_PAGES.map(page => {
                const Icon = page.Icon;
                return (
                  <Link href={`/industry-finance/${page.slug}`} key={page.slug} className="group">
                    <Card className="h-full text-center transition-all duration-300 hover:shadow-lg hover:border-accent flex flex-col">
                      <CardHeader>
                        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
                            <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">{page.industry}</CardTitle>
                      </CardHeader>
                       <CardContent>
                            <p className="text-sm text-muted-foreground">{page.description.substring(0, 100)}...</p>
                        </CardContent>
                    </Card>
                  </Link>
                )
             })}
          </div>
        </section>

        <section id="stage-guides">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Finance Guides by Startup Stage</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Solving the right financial problems at the right time in your startup journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {STAGE_PROBLEM_PAGES.map(page => {
                const Icon = page.problem.Icon;
                return (
                  <Link href={`/startup-guides/${page.slug}`} key={page.slug} className="group">
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-accent flex flex-col">
                      <CardHeader>
                        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
                            <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">{page.h1}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{page.description.substring(0, 120)}...</p>
                      </CardContent>
                    </Card>
                  </Link>
                )
            })}
          </div>
        </section>
      </div>
    </>
  );
}
