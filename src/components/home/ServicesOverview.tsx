import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Core Consulting Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a suite of services designed to address the critical challenges faced by startups at every stage of their journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.slice(0, 8).map((service) => {
            const Icon = service.icon;
            return (
              <Link href={`/services/${service.slug}`} key={service.slug} className="group">
                <Card className="flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-300 border">
                  <div>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="bg-accent/10 p-3 rounded-full">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                         <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </div>
                   <div className="p-6 pt-0 mt-auto">
                      <div className="text-sm font-semibold text-primary group-hover:text-accent flex items-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
        <div className='text-center mt-12'>
            <Button asChild size="lg">
                <Link href="/services">View All Services</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
