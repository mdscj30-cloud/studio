
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { INDUSTRY_FINANCE_PAGES } from '@/lib/industry-finance-data';
import { STAGE_PROBLEM_PAGES } from '@/lib/startup-stage-data';
import { SERVICES } from '@/lib/constants';
import { PROGRAMMATIC_PAGES_DATA } from '@/lib/programmatic-pages-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


export const metadata = {
  title: 'Finance for Startups in India – End to End | Nexa Consultancy',
  description: 'Your complete guide to startup finance in India. From accounting and GST to fundraising readiness, we cover it all.',
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

        <section id="specialized-guides">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Specialized Financial Playbooks</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Find tailored strategies and solutions for your specific stage, industry, or business challenge.
            </p>
          </div>

          <Tabs defaultValue="stage" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-12 max-w-2xl mx-auto h-auto">
              <TabsTrigger value="stage" className="py-2">By Startup Stage</TabsTrigger>
              <TabsTrigger value="industry" className="py-2">By Industry</TabsTrigger>
              <TabsTrigger value="solution" className="py-2">By Challenge</TabsTrigger>
            </TabsList>

            <TabsContent value="stage">
              <div className="grid md:grid-cols-3 gap-8">
                {STAGE_PROBLEM_PAGES.map(page => {
                    const Icon = page.problem.Icon;
                    return (
                      <Link href={`/startup-guides/${page.slug}`} key={page.slug} className="group">
                        <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-accent flex flex-col text-center">
                           <CardHeader className="items-center flex-grow">
                            <div className="bg-primary/10 p-3 rounded-full w-fit mb-2">
                                <Icon className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">{page.h1}</CardTitle>
                             <p className="text-sm text-muted-foreground pt-2">{page.description.substring(0, 120)}...</p>
                          </CardHeader>
                           <CardContent className="flex justify-center items-end pt-4">
                                <span className="text-xs font-semibold text-accent/80 group-hover:text-accent">Read Guide <ArrowRight className="inline-block h-3 w-3" /></span>
                           </CardContent>
                        </Card>
                      </Link>
                    )
                })}
              </div>
            </TabsContent>

            <TabsContent value="industry">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {INDUSTRY_FINANCE_PAGES.map(page => {
                    const Icon = page.Icon;
                    return (
                      <Link href={`/industry-finance/${page.slug}`} key={page.slug} className="group">
                        <Card className="h-full text-center transition-all duration-300 hover:shadow-lg hover:border-accent flex flex-col">
                           <CardHeader className="items-center flex-grow">
                            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
                                <Icon className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">{page.industry}</CardTitle>
                             <p className="text-sm text-muted-foreground pt-2">{page.description.substring(0, 100)}...</p>
                          </CardHeader>
                           <CardContent className="flex justify-center items-end pt-4">
                                <span className="text-xs font-semibold text-accent/80 group-hover:text-accent">Read Guide <ArrowRight className="inline-block h-3 w-3" /></span>
                           </CardContent>
                        </Card>
                      </Link>
                    )
                 })}
              </div>
            </TabsContent>

            <TabsContent value="solution">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {PROGRAMMATIC_PAGES_DATA.map(page => {
                    const Icon = page.Icon;
                    return (
                    <Link href={`/solutions/${page.slug}`} key={page.slug} className="group">
                        <Card className="h-full text-center transition-all duration-300 hover:shadow-lg hover:border-accent flex flex-col">
                        <CardHeader className="items-center flex-grow">
                            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
                                <Icon className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">{page.h1}</CardTitle>
                            <p className="text-sm text-muted-foreground pt-2">{page.description.substring(0, 100)}...</p>
                        </CardHeader>
                        <CardContent className="flex justify-center items-end pt-4">
                            <span className="text-xs font-semibold text-accent/80 group-hover:text-accent">Read Guide <ArrowRight className="inline-block h-3 w-3" /></span>
                        </CardContent>
                        </Card>
                    </Link>
                    )
                })}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </>
  );
}
