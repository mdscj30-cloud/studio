
import { SERVICES } from '@/lib/constants';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ALL_GLOSSARY_TERMS } from '@/lib/glossary-data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

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
    title: `${service.title} | Nexa Consultancy`,
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
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-foreground/10 p-3 rounded-full">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">{service.h1}</h1>
            </div>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl">{service.description}</p>
             <Button asChild variant="link" className="text-primary-foreground/80 hover:text-white transition-colors p-0 mt-6">
                <Link href="/finance-for-startups-india">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Startup Finance Guide
                </Link>
            </Button>
        </div>
      </section>

      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 py-16 md:py-24">
            <div className="md:col-span-2">
                <div className="prose lg:prose-lg max-w-none">
                    <h2 className="text-3xl font-bold text-primary mb-4">Service Overview</h2>
                    <p>{service.details}</p>

                    <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Who Needs This Service?</h3>
                    <div className="bg-muted/50 border-l-4 border-accent p-6 rounded-r-lg">
                        <p className="!my-0">{service.whoNeedsThis}</p>
                    </div>

                    <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Our Pricing Approach</h3>
                    <p>{service.pricingApproach}</p>
                </div>
            </div>
            <aside className="md:col-span-1">
                 <div className="sticky top-24 space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-4">Frequently Asked Questions</h3>
                        <Accordion type="single" collapsible className="w-full">
                            {service.faqs.map((faq, index) => (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger className="font-semibold text-left">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                    {service.relatedGlossaryTerms && service.relatedGlossaryTerms.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Related Glossary Terms</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {service.relatedGlossaryTerms.map(slug => {
                                        const term = ALL_GLOSSARY_TERMS.find(t => t.slug === slug);
                                        if (!term) return null;
                                        return (
                                            <li key={slug}>
                                                <Link href={`/startup-finance-glossary/${slug}`} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                                                    {term.term}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </CardContent>
                        </Card>
                    )}
                 </div>
            </aside>
        </div>
      </div>

      <section className="-mx-container-padding bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto text-center">
             <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Ready to elevate your strategy with {service.title}?</h2>
             <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">Contact us for a confidential, no-obligation discussion about your requirements.</p>
             <Button size="lg" asChild variant="accent">
                <Link href="/contact">Request a Consultation</Link>
             </Button>
        </div>
      </section>
    </>
  );
}
