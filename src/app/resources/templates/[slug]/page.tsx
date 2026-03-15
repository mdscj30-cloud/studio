
import { notFound } from 'next/navigation';
import { TEMPLATES_DATA } from '@/lib/templates-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { RequestConsultation } from '@/components/layout/PartnerWithUs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { SERVICES } from '@/lib/constants';
import { ALL_GLOSSARY_TERMS } from '@/lib/glossary-data';

type Props = {
  params: { slug: string };
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexaconsultancy.com';

export async function generateStaticParams() {
  return TEMPLATES_DATA.map((template) => ({
    slug: template.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const template = TEMPLATES_DATA.find((t) => t.slug === params.slug);

  if (!template) {
    return {
      title: 'Template Not Found',
    };
  }

  return {
    title: template.title,
    description: template.description,
    alternates: { canonical: `/resources/templates/${template.slug}` },
    openGraph: {
      title: `${template.title} | Nexa Consultancy`,
      description: template.description,
      url: `/resources/templates/${template.slug}`,
      type: 'website',
    },
  };
}

export default function TemplatePage({ params }: Props) {
  const template = TEMPLATES_DATA.find((t) => t.slug === params.slug);

  if (!template) {
    notFound();
  }

  const Icon = template.Icon;
  
  const breadcrumbItems = [
    { name: 'Home', item: `${siteUrl}` },
    { name: 'Resources', item: `${siteUrl}/resources` },
    { name: 'Templates', item: `${siteUrl}/resources/templates` },
    { name: template.title, item: `${siteUrl}/resources/templates/${template.slug}` },
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary">{template.h1}</h1>
          </div>
           <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">{template.description}</p>
        </div>
      </section>

      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 py-16 md:py-24">
            <div className="md:col-span-2">
                <div
                    className="prose lg:prose-lg max-w-none prose-ul:list-disc prose-ul:ml-6 prose-li:mb-2 prose-h2:text-2xl prose-h2:text-primary prose-h2:mb-4 prose-h3:text-xl prose-h3:text-primary prose-h3:mb-3"
                    dangerouslySetInnerHTML={{ __html: template.content }}
                />

                <div className="max-w-4xl mx-auto mt-12">
                    <Button asChild variant="link" className="text-accent p-0">
                        <Link href="/resources/templates">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to All Templates
                        </Link>
                    </Button>
                </div>
            </div>
            <aside className="md:col-span-1">
                 <div className="sticky top-24 space-y-8">
                    {template.relatedServices && template.relatedServices.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Related Services</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {template.relatedServices.map(slug => {
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
                    {template.relatedGlossaryTerms && template.relatedGlossaryTerms.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Related Glossary Terms</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {template.relatedGlossaryTerms.map(slug => {
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
