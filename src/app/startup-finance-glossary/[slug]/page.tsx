
import { ALL_GLOSSARY_TERMS, GlossaryTerm } from '@/lib/glossary-data';
import { notFound } from 'next/navigation';
import { ArrowLeft, BookText, Building, Calendar, Link as LinkIcon, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { SERVICES } from '@/lib/constants';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { FaqSchema } from '@/components/layout/FaqSchema';


export async function generateStaticParams() {
  return ALL_GLOSSARY_TERMS.map((term) => ({
    slug: term.slug,
  }));
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexaconsultancy.com';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const term = ALL_GLOSSARY_TERMS.find((p) => p.slug === params.slug);
    if (!term) {
        return {
            title: 'Term Not Found',
        };
    }
    
    const robots = term.tier === 3 
        ? { index: false, follow: true } 
        : { index: true, follow: true };

    return {
        title: `What is ${term.term}?`,
        description: `Definition of ${term.term}: ${term.definition.replace(/<[^>]+>/g, '').substring(0, 160)}...`,
        robots,
    };
}

const getIcon = (relatedServiceSlug?: GlossaryTerm['relatedServiceSlug']) => {
    if (!relatedServiceSlug) return <BookText className="w-5 h-5 text-accent" />;
    
    const service = SERVICES.find(s => s.slug === relatedServiceSlug);
    if (service) {
        const Icon = service.icon;
        return <Icon className="w-5 h-5 text-accent" />;
    }
    
    // Fallback icons
    switch(relatedServiceSlug) {
        case 'virtual-cfo': return <BookText className="w-5 h-5 text-accent" />;
        case 'bookkeeping': return <BookText className="w-5 h-5 text-accent" />;
        case 'business-setup': return <Building className="w-5 h-5 text-accent" />;
        case 'regulatory-compliances': return <Scale className="w-5 h-5 text-accent" />;
        case 'fundraising': return <BookText className="w-5 h-5 text-accent" />;
        default: return <BookText className="w-5 h-5 text-accent" />;
    }
}


export default function GlossaryTermPage({ params }: { params: { slug: string } }) {
    const term = ALL_GLOSSARY_TERMS.find((p) => p.slug === params.slug);

    if (!term) {
        notFound();
    }
    
    const relatedService = SERVICES.find(s => s.slug === term.relatedServiceSlug);
    const comparisonTerms = term.comparisonSlugs?.map(slug => {
        return ALL_GLOSSARY_TERMS.find(t => t.slug === slug);
    }).filter(Boolean) as GlossaryTerm[] | undefined;

    const breadcrumbItems = [
      { name: 'Home', item: `${siteUrl}` },
      { name: 'Glossary', item: `${siteUrl}/startup-finance-glossary` },
      { name: term.term, item: `${siteUrl}/startup-finance-glossary/${term.slug}` },
    ];
    
    const faqItems = [
      {
        question: `What is ${term.term}?`,
        answer: term.definition
      }
    ];

    return (
        <>
            <FaqSchema faqs={faqItems} />
            <Breadcrumbs items={breadcrumbItems} className="py-8" />
            <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
                <div className="container mx-auto py-16 md:py-24">
                    <h1 className="text-4xl md:text-5xl font-bold">What is {term.term}?</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
                        Nexa Consultancy | Startup & Finance Glossary
                    </p>
                </div>
            </section>

            <div className="container py-16 md:py-24">
                <div className="grid md:grid-cols-3 gap-12">
                   <div className="md:col-span-2">
                        <div className="prose lg:prose-lg max-w-none" dangerouslySetInnerHTML={{__html: term.definition}}>
                        </div>
                        <Button asChild variant="link" className="p-0 mt-12 text-accent">
                            <Link href="/startup-finance-glossary">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Full Glossary
                            </Link>
                        </Button>
                   </div>
                   <aside className="md:col-span-1">
                     <div className="sticky top-24 space-y-8">
                        <Card className="bg-muted/30">
                            <CardHeader>
                                <CardTitle>Context & Relevance</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {term.stageRelevance && (
                                    <div className="flex items-start gap-3">
                                        <Calendar className="w-5 h-5 text-accent mt-1 shrink-0" />
                                        <div>
                                            <h4 className="font-semibold">Stage Relevance</h4>
                                            <p className="text-sm text-muted-foreground">{term.stageRelevance} startups.</p>
                                        </div>
                                    </div>
                                )}
                                {relatedService && (
                                    <div className="flex items-start gap-3">
                                        {getIcon(term.relatedServiceSlug)}
                                        <div>
                                            <h4 className="font-semibold">Related Service</h4>
                                            <Link href={`/services/${relatedService.slug}`} className="text-sm text-accent hover:underline">{relatedService.title}</Link>
                                        </div>
                                    </div>
                                )}
                                {comparisonTerms && comparisonTerms.length > 0 && (
                                    <div className="flex items-start gap-3">
                                        <LinkIcon className="w-5 h-5 text-accent mt-1 shrink-0" />
                                        <div>
                                            <h4 className="font-semibold">Compare With</h4>
                                            <ul className="space-y-1 mt-1">
                                                {comparisonTerms.map(ct => (
                                                    <li key={ct.slug}>
                                                        <Link href={`/startup-finance-glossary/${ct.slug}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                                                            {ct.term}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                     </div>
                   </aside>
                </div>
            </div>
        </>
    );
}
