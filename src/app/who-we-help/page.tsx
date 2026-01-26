import { WHO_WE_HELP_PAGES } from '@/lib/who-we-help-data';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight, Users } from 'lucide-react';

export const metadata = {
  title: 'Who We Help | Nexa Consultancy',
  description: 'Specialized financial and compliance services tailored for every type of founder and startup stage, from bootstrapped to VC-backed.',
};

export default function WhoWeHelpPage() {
  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24 text-center">
          <div className="inline-block bg-primary-foreground/10 p-4 rounded-full mb-4">
            <Users className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Who We Help</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            We provide specialized financial and compliance services tailored for every founder, business model, and stage of the startup journey.
          </p>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHO_WE_HELP_PAGES.map((page) => {
            const Icon = page.Icon;
            return (
              <Link href={`/who-we-help/${page.slug}`} key={page.slug} className="group">
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
                        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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