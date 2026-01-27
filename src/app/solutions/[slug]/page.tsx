
import { notFound } from 'next/navigation';
import { PROGRAMMATIC_PAGES_DATA, ProgrammaticPage } from '@/lib/programmatic-pages-data';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import { ALL_GLOSSARY_TERMS } from '@/lib/glossary-data';
import { Button } from '@/components/ui/button';
import { RequestConsultation } from '@/components/layout/PartnerWithUs';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return PROGRAMMATIC_PAGES_DATA.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const page = PROGRAMMATIC_PAGES_DATA.find((p) => p.slug === params.slug);

  if (!page) {
    return {
      title: 'Solution Not Found',
    };
  }

  return {
    title: page.title,
    description: page.description,
  };
}

export default function SolutionPage({ params }: Props) {
  const { slug } = params;
  const page = PROGRAMMATIC_PAGES_DATA.find((p) => p.slug === params.slug);

  if (!page) {
    notFound();
  }
  
  const Icon = page.Icon;

  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-foreground/10 p-3 rounded-full">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">{page.h1}</h1>
            </div>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl">{page.description}</p>
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
                    <h2 className="text-3xl font-bold text-primary mb-4">{page.problem.title}</h2>
                    {page.problem.content.map((p, i) => <p key={i}>{p}</p>)}

                    <h3 className="text-2xl font-bold text-primary mt-12 mb-4">{page.complianceNeed.title}</h3>
                    <ul className="space-y-3 !pl-0">
                        {page.complianceNeed.points.map(point => (
                            <li key={point} className="flex items-start !pl-0">
                                <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                    
                    <h3 className="text-2xl font-bold text-primary mt-12 mb-4">{page.solution.title}</h3>
                     {page.solution.content.map((p, i) => <p key={i}>{p}</p>)}

                </div>
            </div>
            <aside className="md:col-span-1">
                 <div className="sticky top-24 space-y-8">
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
                                            <Link href={`/services/${slug}`} className="font-semibold text-primary hover:text-accent transition-colors">
                                                {service.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </CardContent>
                    </Card>
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
                 </div>
            </aside>
        </div>
      </div>

       <RequestConsultation />
    </>
  );
}
