
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getDetailedCaseStudies, getCaseStudyBySlug } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

type Props = {
  params: { slug: string };
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexaconsultancy.com';

export async function generateStaticParams() {
  const studies = getDetailedCaseStudies();
  return studies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${study.title} | Nexa Consultancy`,
    description: study.summary,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const { slug } = params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const image = PlaceHolderImages.find(img => img.id === study.imageId);

  const breadcrumbItems = [
    { name: 'Home', item: `${siteUrl}` },
    { name: 'Case Studies', item: `${siteUrl}/case-studies` },
    { name: study.title, item: `${siteUrl}/case-studies/${study.slug}` },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} className="py-8" />
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground py-16 md:py-24">
        <div className="container max-w-5xl mx-auto">
          <p className="text-lg font-semibold text-accent-foreground/80 mb-2">{study.client} - {study.industry}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{study.title}</h1>
          <div className="flex flex-wrap gap-2 mt-6">
            {study.services.map(service => (
              <Badge key={service} variant="default" className="bg-primary-foreground/20 text-primary-foreground border-transparent">
                {service}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto -mt-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {image && (
                <div className="aspect-video relative rounded-lg overflow-hidden shadow-2xl mb-8">
                    <Image
                        src={image.imageUrl}
                        alt={study.title}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                    />
                </div>
            )}
          </div>
          <div className="md:col-span-1">
             <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-4">Key Results</h3>
                <div
                    className="prose prose-sm max-w-none [&_ul]:list-none [&_ul]:p-0 [&_li]:flex [&_li]:items-start [&_svg]:mr-2 [&_svg]:mt-1 [&_svg]:shrink-0 [&_svg]:text-accent"
                    dangerouslySetInnerHTML={{ __html: study.content.split('<h3>The Results')[1].split('</article>')[0] }}
                />
             </div>
          </div>
        </div>
      </div>
      
      <section className="container max-w-4xl mx-auto py-12 md:py-16">
        <div
            className="prose lg:prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: study.content.split('<h3>The Results')[0] }}
        />
      </section>
    </>
  );
}
