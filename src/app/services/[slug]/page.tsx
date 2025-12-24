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
    title: `${service.title} | N consulting`,
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
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-foreground/10 p-3 rounded-full">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
            </div>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl">{service.description}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
          <div className="container">
              <div className="prose lg:prose-lg max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-primary mb-4">Service Details</h2>
                <p>More detailed information about the {service.title} service will go here. This can include key features, benefits, case studies, or methodologies related to this specific offering. For now, this is placeholder content demonstrating the structure of a service detail page.</p>
                <p>N consulting provides comprehensive {service.title} to help your startup achieve its goals. Our expert team works closely with you to develop tailored solutions that drive results.</p>
             </div>
          </div>
      </section>

      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container text-center">
             <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Ready to elevate your strategy with {service.title}?</h2>
             <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">Contact us for a confidential, no-obligation discussion about your requirements.</p>
             <Button size="lg" asChild>
                <Link href="/contact">Request a Consultation</Link>
             </Button>
        </div>
      </section>
    </>
  );
}
