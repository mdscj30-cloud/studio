import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Core Consulting Services</h2>
          <p className="mt-4 text-lg text-foreground/80">
            A comprehensive suite of advisory services designed to address the critical needs of Indian businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                       <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-6">{service.description}</p>
                   <Button variant="link" asChild className="p-0 text-primary hover:text-accent">
                        <Link href={`/services/${service.slug}`}>
                            Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
            <Button size="lg" asChild>
                <Link href="/services">Explore All Services</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
