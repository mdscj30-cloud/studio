import { ALL_GLOSSARY_TERMS } from '@/lib/glossary-data';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export async function generateStaticParams() {
  return ALL_GLOSSARY_TERMS.map((term) => ({
    slug: term.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const term = ALL_GLOSSARY_TERMS.find((p) => p.slug === params.slug);
    if (!term) {
        return {
            title: 'Term Not Found',
        };
    }
    return {
        title: `What is ${term.term}? | Nexa Consultancy Glossary`,
        description: `Definition of ${term.term}: ${term.definition}`,
    };
}

export default function GlossaryTermPage({ params }: { params: { slug: string } }) {
    const term = ALL_GLOSSARY_TERMS.find((p) => p.slug === params.slug);

    if (!term) {
        notFound();
    }

    return (
        <>
            <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
                <div className="container mx-auto py-16 md:py-24">
                    <h1 className="text-4xl md:text-5xl font-bold">What is {term.term}?</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
                        Nexa Consultancy | Startup & Finance Glossary
                    </p>
                </div>
            </section>

            <div className="container py-16 md:py-24">
                <div className="max-w-4xl mx-auto">
                    <div className="prose lg:prose-lg">
                        <p className="lead text-xl">{term.definition}</p>
                    </div>
                    <Button asChild variant="link" className="p-0 mt-12 text-accent">
                        <Link href="/startup-finance-glossary">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Full Glossary
                        </Link>
                    </Button>
                </div>
                 <div className="max-w-4xl mx-auto mt-16 border-t pt-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">Explore Our Services</h3>
                    <p className="text-muted-foreground mb-6">Learn how Nexa Consultancy can help you navigate complex financial challenges.</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Link href="/services/virtual-cfo" className="group">
                            <Card className="h-full transition-all duration-300 border group-hover:border-accent group-hover:shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">Virtual CFO Services</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Strategic financial guidance for scaling startups.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/solutions/virtual-cfo-for-saas-startups" className="group">
                            <Card className="h-full transition-all duration-300 border group-hover:border-accent group-hover:shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">CFO for SaaS Startups</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Specialized financial strategy for the SaaS business model.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
