import { SERVICES } from '@/lib/constants';
import { notFound } from 'next/navigation';
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

  if (!service) {
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
        <div className="text-center">
             <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Ready to elevate your strategy with {service.title}?</h2>
             <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">Contact us for a confidential, no-obligation discussion about your requirements.</p>
             <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Request a Consultation</Link>
             </Button>
        </div>
      </div>
    </>
  );
}
