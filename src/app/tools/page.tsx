import { TOOLS_DATA } from '@/lib/tools-data';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowRight, Wrench } from 'lucide-react';

export const metadata = {
  title: 'Free Startup Tools & Calculators',
  description: 'Free online tools for Indian startups — burn rate calculator, SaaS metrics, ESOP calculator, GST calculator, breakeven analysis, and working capital calculator.',
  alternates: { canonical: '/tools' },
  openGraph: {
    title: 'Free Startup Tools & Calculators | Nexa Consultancy',
    description: 'Free online calculators for Indian startups — burn rate, SaaS metrics, ESOP, GST, breakeven, and more.',
    url: '/tools',
    type: 'website',
  },
};

export default function ToolsHubPage() {
  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24 text-center">
          <div className="inline-block bg-primary-foreground/10 p-4 rounded-full mb-4">
            <Wrench className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Startup Tools & Calculators</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Free, interactive tools to help you manage your finances, plan for growth, and prepare for fundraising.
          </p>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOOLS_DATA.map((tool) => {
            const Icon = tool.Icon;
            return (
              <Link href={`/tools/${tool.slug}`} key={tool.slug} className="group">
                <Card className="h-full flex flex-col transition-all duration-300 border group-hover:border-accent group-hover:shadow-xl group-hover:scale-105">
                  <CardHeader>
                    <div className="mb-3">
                      <div className="w-fit p-3 bg-primary/10 rounded-full text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{tool.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <div className="text-sm font-semibold text-accent flex items-center">
                        Open Tool <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
