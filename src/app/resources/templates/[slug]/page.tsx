import { notFound } from 'next/navigation';
import { TEMPLATES_DATA } from '@/lib/templates-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

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
    title: `${template.title} | Nexa Consultancy`,
    description: template.description,
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

      <div className="container py-16 md:py-24">
        <div
            className="prose lg:prose-lg max-w-4xl mx-auto prose-ul:list-disc prose-ul:ml-6 prose-li:mb-2 prose-h2:text-2xl prose-h2:text-primary prose-h2:mb-4 prose-h3:text-xl prose-h3:text-primary prose-h3:mb-3"
            dangerouslySetInnerHTML={{ __html: template.content }}
        />

        <div className="max-w-4xl mx-auto mt-12 text-center">
            <Button asChild variant="link" className="text-accent p-0">
                <Link href="/resources/templates">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to All Templates
                </Link>
            </Button>
        </div>
      </div>
      
       <section className="-mx-container-padding bg-muted/50 py-16 md:py-24 mt-16">
        <div className="container mx-auto text-center">
             <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Need Help Implementing These?</h2>
             <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">These templates provide a great starting point. Our experts can help you implement these processes and manage them for you.</p>
             <Button size="lg" asChild variant="accent">
                <Link href="/contact">Request a Consultation</Link>
             </Button>
        </div>
      </section>
    </>
  );
}
