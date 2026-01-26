import { COMPARE_PAGES_DATA } from '@/lib/compare-pages-data';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight, Scale } from 'lucide-react';

export const metadata = {
  title: 'Compare Startup Finance Options | Nexa Consultancy',
  description: 'In-depth comparisons of financial services, tools, and strategies to help you make informed decisions for your startup.',
};

export default function CompareHubPage() {
  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24 text-center">
          <div className="inline-block bg-primary-foreground/10 p-4 rounded-full mb-4">
            <Scale className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Compare & Decide</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            High-intent, data-driven comparisons to help you choose the right financial services, tools, and strategies for your startup.
          </p>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPARE_PAGES_DATA.map((page) => {
            const Icon = page.Icon;
            return (
              <Link href={`/compare/${page.slug}`} key={page.slug} className="group">
                <Card className="h-full flex flex-col transition-all duration-300 border group-hover:border-accent group-hover:shadow-xl group-hover:scale-105">
                  <CardHeader>
                    <div className="mb-3">
                        <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{page.h1}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{page.description}</CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <div className="text-sm font-semibold text-primary group-hover:text-accent flex items-center transition-colors">
                        View Comparison <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
