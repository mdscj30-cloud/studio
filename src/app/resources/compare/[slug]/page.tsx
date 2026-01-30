
import { notFound } from 'next/navigation';
import { COMPARE_PAGES_DATA } from '@/lib/compare-pages-data';
import { ArrowLeft, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { RequestConsultation } from '@/components/layout/PartnerWithUs';
import { SERVICES } from '@/lib/constants';
import { ALL_GLOSSARY_TERMS } from '@/lib/glossary-data';


type Props = {
  params: { slug: string };
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexaconsultancy.com';

export async function generateStaticParams() {
  return COMPARE_PAGES_DATA.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const page = COMPARE_PAGES_DATA.find((p) => p.slug === params.slug);

  if (!page) {
    return {
      title: 'Comparison Not Found',
    };
  }

  return {
    title: `${page.h1} | Nexa Compare`,
    description: page.description,
  };
}

export default function CompareDetailPage({ params }: Props) {
  const page = COMPARE_PAGES_DATA.find((p) => p.slug === params.slug);

  if (!page) {
    notFound();
  }

  const Icon = page.Icon;

  const breadcrumbItems = [
    { name: 'Home', item: `${siteUrl}` },
    { name: 'Resources', item: `${siteUrl}/resources` },
    { name: 'Compare', item: `${siteUrl}/resources/compare` },
    { name: page.h1, item: `${siteUrl}/resources/compare/${page.slug}` },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} className="py-8" />
      <section className="-mx-container-padding bg-muted/50 py-12">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary/10 p-3 rounded-full w-fit">
              <Icon className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">{page.h1}</h1>
          </div>
           <p className="text-lg md:text-xl text-muted-foreground max-w-3xl" dangerouslySetInnerHTML={{ __html: page.description }} />
        </div>
      </section>

      <div className="container">
         <div className="grid md:grid-cols-3 gap-12 py-16 md:py-24">
            <div className="md:col-span-2">
                {/* Comparison Table */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-primary text-center mb-8">{page.comparisonTable.title}</h2>
                    <div className="overflow-x-auto">
                        <Table className="border">
                            <TableHeader>
                                <TableRow>
                                    {page.comparisonTable.headers.map(header => <TableHead key={header} className="text-base">{header}</TableHead>)}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {page.comparisonTable.rows.map(row => (
                                    <TableRow key={row.feature}>
                                        <TableCell className="font-medium text-base">{row.feature}</TableCell>
                                        <TableCell className="text-base" dangerouslySetInnerHTML={{ __html: row.valueA }}/>
                                        <TableCell className="text-base" dangerouslySetInnerHTML={{ __html: row.valueB }}/>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </section>

                <Separator className="my-16"/>

                {/* Pros and Cons */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-6">Pros & Cons of {page.itemA.name}</h3>
                            <div className="space-y-4">
                                {page.itemA.pros.map(pro => (
                                    <div key={pro} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                        <p className="text-muted-foreground">{pro}</p>
                                    </div>
                                ))}
                                {page.itemA.cons.map(con => (
                                    <div key={con} className="flex items-start gap-3">
                                        <X className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                                        <p className="text-muted-foreground">{con}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-6">Pros & Cons of {page.itemB.name}</h3>
                            <div className="space-y-4">
                                {page.itemB.pros.map(pro => (
                                    <div key={pro} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                        <p className="text-muted-foreground">{pro}</p>
                                    </div>
                                ))}
                                {page.itemB.cons.map(con => (
                                    <div key={con} className="flex items-start gap-3">
                                        <X className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                                        <p className="text-muted-foreground">{con}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <Separator className="my-16"/>

                {/* Cost Analysis */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-primary text-center mb-8">{page.cost.title}</h2>
                    <div className="prose lg:prose-lg max-w-3xl mx-auto text-center">
                        {page.cost.content.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
                    </div>
                </section>

                <Separator className="my-16"/>

                {/* When to Choose */}
                <section>
                    <h2 className="text-3xl font-bold text-primary text-center mb-8">{page.whenToChoose.title}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-primary/5">
                            <CardHeader>
                                <CardTitle>Choose {page.itemA.name} If...</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: page.whenToChoose.choiceA }} />
                            </CardContent>
                        </Card>
                        <Card className="bg-primary/5">
                            <CardHeader>
                                <CardTitle>Choose {page.itemB.name} If...</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: page.whenToChoose.choiceB }} />
                            </CardContent>
                        </Card>
                    </div>
                </section>
                
                <div className="mt-12">
                    <Button asChild variant="link" className="p-0 text-accent">
                        <Link href="/resources/compare">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to All Comparisons
                        </Link>
                    </Button>
                </div>
            </div>
             <aside className="md:col-span-1">
                 <div className="sticky top-24 space-y-8">
                    {page.relatedServices && page.relatedServices.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Related Services</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {page.relatedServices.map(slug => {
                                        const service = SERVICES.find(s => s.slug === slug);
                                        if (!service) return null;
                                        return (
                                            <li key={slug}>
                                                <Link href={`/services/${slug}`} className="font-semibold text-primary hover:text-accent transition-colors flex items-center gap-2">
                                                    <service.icon className="w-5 h-5 text-accent" />
                                                    {service.title}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </CardContent>
                        </Card>
                    )}
                    {page.relatedGlossaryTerms && page.relatedGlossaryTerms.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Related Glossary Terms</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {page.relatedGlossaryTerms.map(slug => {
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
      
       <RequestConsultation />
    </>
  );
}
