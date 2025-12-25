import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import { Button } from '@/components/ui/button';

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
        <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {SERVICES.slice(0, 8).map((service) => {
                const Icon = service.icon;
                return (
                <Link href={`/services/${service.slug}`} key={service.slug} className="group">
                    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full mt-1">
                            <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-primary group-hover:text-accent transition-colors">{service.title}</h3>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                    </div>
                </Link>
                );
            })}
            </div>
        </div>
        <div className='text-center mt-12'>
            <Button asChild size="lg" variant="accent">
                <Link href="/services">View All Services</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
