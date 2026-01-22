import { ALL_GLOSSARY_TERMS } from '@/lib/glossary-data';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
            </div>
        </>
    );
}
