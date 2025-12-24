import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Our Services | Bharati Advisors',
  description: 'Explore our comprehensive consulting services including Business & Strategic Advisory, Tax & Regulatory Consulting, Virtual CFO, and more for Indian businesses.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Our Consulting Services</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            A complete spectrum of advisory solutions to drive strategic clarity, financial discipline, and regulatory compliance.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.slug} className="flex flex-col group hover:border-accent transition-colors">
                  <CardHeader>
                    <div className="mb-4">
                       <Icon className="w-10 h-10 text-accent" />
                    </div>
                    <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-foreground/70 mb-6 flex-grow">{service.description}</p>
                    <Button variant="outline" asChild className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors">
                      <Link href={`/services/${service.slug}`}>
                        Service Details <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
