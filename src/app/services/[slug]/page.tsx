import { SERVICES } from '@/lib/constants';
import { SERVICES_DATA, ServiceData } from '@/lib/services-data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const service = SERVICES.find((p) => p.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Bharati Advisors`,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const { slug } = params;
  const service = SERVICES.find((p) => p.slug === slug);
  const serviceData = SERVICES_DATA[slug as keyof typeof SERVICES_DATA] as ServiceData | undefined;

  if (!service || !serviceData) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 items-center gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <Icon className="w-12 h-12 text-accent" />
                <h1 className="text-4xl md:text-5xl font-bold text-primary">{service.title}</h1>
              </div>
              <p className="text-lg md:text-xl text-foreground/80">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none text-foreground/90">
                <h2 className="text-primary">Overview</h2>
                <p>{serviceData.overview}</p>

                <h2 className="text-primary mt-12">Key Business Challenges We Address</h2>
                <ul className="space-y-2">
                    {serviceData.keyChallenges.map((challenge, i) => (
                        <li key={i} className="flex items-start">
                           <Check className="w-6 h-6 text-accent mr-3 mt-1 shrink-0" />
                           <span>{challenge}</span>
                        </li>
                    ))}
                </ul>

                <h2 className="text-primary mt-12">Our Consulting Approach</h2>
                <p>{serviceData.ourApproach}</p>
            </div>
          </div>

          <aside className="md:col-span-1">
             <Card className="sticky top-24 bg-primary text-primary-foreground">
                <CardHeader>
                    <CardTitle>Service Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {serviceData.benefits.map((benefit, i) => (
                             <li key={i} className="flex items-start text-sm">
                               <Check className="w-4 h-4 text-accent mr-3 mt-1 shrink-0" />
                               <span className="text-primary-foreground/90">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
             </Card>
          </aside>
        </div>

        <div className="mt-16 bg-muted/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Who This Service Is For</h3>
            <p className="text-foreground/80 mb-6">{serviceData.whoFor}</p>
             <h3 className="text-2xl font-bold text-primary mb-4">Engagement Model</h3>
            <p className="text-foreground/80">{serviceData.engagementModel}</p>
        </div>

        <div className="mt-16 text-center">
             <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{serviceData.cta}</h2>
             <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">Contact us for a confidential, no-obligation discussion about your requirements.</p>
             <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Schedule Your Consultation</Link>
             </Button>
        </div>
      </div>
    </>
  );
}
