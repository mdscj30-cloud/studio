
import { notFound } from 'next/navigation';
import { PRICING_PAGES_DATA } from '@/lib/pricing-pages-data';
import { ArrowLeft, Check, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

type Props = {
  params: { slug: string };
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexaconsultancy.com';

export async function generateStaticParams() {
  return PRICING_PAGES_DATA.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const page = PRICING_PAGES_DATA.find((p) => p.slug === params.slug);

  if (!page) {
    return {
      title: 'Pricing Information Not Found',
    };
  }

  return {
    title: page.title,
    description: page.description,
  };
}

export default function PricingDetailPage({ params }: Props) {
  const page = PRICING_PAGES_DATA.find((p) => p.slug === params.slug);

  if (!page) {
    notFound();
  }

  const Icon = page.Icon;

  const breadcrumbItems = [
    { name: 'Home', item: `${siteUrl}` },
    { name: 'Pricing', item: `${siteUrl}/pricing` },
    { name: page.h1, item: `${siteUrl}/pricing/${page.slug}` },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} className="py-8" />
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary-foreground/10 p-3 rounded-full">
              <Icon className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{page.h1}</h1>
          </div>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl">{page.description}</p>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="prose lg:prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary mb-4">{page.intro.title}</h2>
              {page.intro.content.map((p, i) => <p key={i}>{p}</p>)}

              <h3 className="text-2xl font-bold text-primary mt-12 mb-4">{page.costFactors.title}</h3>
              <ul className="!pl-0 space-y-4">
                {page.costFactors.points.map(point => (
                  <li key={point.title} className="flex items-start !pl-0">
                    <Check className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <div>
                      <strong>{point.title}:</strong> {point.description}
                    </div>
                  </li>
                ))}
              </ul>
              
              {page.pricingTable && (
                <>
                    <h3 className="text-2xl font-bold text-primary mt-12 mb-4">{page.pricingTable.title}</h3>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    {page.pricingTable.headers.map(header => <TableHead key={header}>{header}</TableHead>)}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {page.pricingTable.rows.map(row => (
                                    <TableRow key={row.feature}>
                                        <TableCell className="font-medium">{row.feature}</TableCell>
                                        {row.values.map((value, index) => <TableCell key={index}>{value}</TableCell>)}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </>
              )}

            </div>
          </div>
          <aside className="md:col-span-1">
            <div className="sticky top-24 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="text-accent" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {page.faqs.map((faq, index) => (
                      <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="font-semibold text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
              <Button asChild variant="link" className="p-0 text-accent">
                <Link href="/pricing">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Main Pricing Page
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>

       <section className="-mx-container-padding bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto text-center">
             <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Ready for a custom quote?</h2>
             <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">Every startup is unique. Contact us for a free discovery call to get a personalized quote based on your specific needs.</p>
             <Button size="lg" asChild variant="accent">
                <Link href="/contact">Request a Consultation</Link>
             </Button>
        </div>
      </section>
    </>
  );
}
