import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { WHO_WE_HELP_PAGES } from '@/lib/who-we-help-data';
import { SERVICES, CASE_STUDIES, BLOG_POSTS } from '@/lib/constants';
import Image from 'next/image';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return WHO_WE_HELP_PAGES.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const page = WHO_WE_HELP_PAGES.find((p) => p.slug === params.slug);
  if (!page) {
    return { title: 'Not Found' };
  }
  return { title: page.title, description: page.description };
}

export default function WhoWeHelpDetailPage({ params }: Props) {
  const page = WHO_WE_HELP_PAGES.find((p) => p.slug === params.slug);

  if (!page) {
    notFound();
  }

  const relatedServices = SERVICES.filter(s => page.relatedServices.includes(s.slug));
  const relatedCaseStudies = CASE_STUDIES.filter(cs => page.relatedCaseStudies.includes(cs.slug));
  const relatedBlogs = BLOG_POSTS.filter(b => page.relatedBlogs.includes(b.slug));

  const Icon = page.Icon;

  return (
    <>
      <section className="-mx-container-padding bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto">
          <Button asChild variant="link" className="p-0 mb-8">
            <Link href="/who-we-help">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Who We Help
            </Link>
          </Button>
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">
            <div className="bg-primary/10 p-4 rounded-full w-fit">
              <Icon className="w-12 h-12 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary">{page.h1}</h1>
              <div className="prose lg:prose-lg max-w-3xl mt-4 text-muted-foreground">
                {page.intro.content.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">{page.painPoints.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {page.painPoints.points.map(point => {
              const PainIcon = point.Icon;
              return (
                <div key={point.title} className="text-center p-6 bg-card border rounded-lg">
                  <div className="flex justify-center mb-4">
                    <div className="bg-destructive/10 p-3 rounded-full w-fit">
                      <PainIcon className="w-6 h-6 text-destructive" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <section className="-mx-container-padding bg-primary/5 py-16 md:py-24">
        <div className="container max-w-4xl mx-auto text-center">
             <h2 className="text-3xl font-bold text-primary">{page.ourSolution.title}</h2>
             <div className="prose lg:prose-lg max-w-3xl mx-auto mt-4 text-muted-foreground">
                {page.ourSolution.content.map((p, i) => <p key={i}>{p}</p>)}
             </div>
             <Button size="lg" asChild variant="accent" className="mt-8">
                <Link href="/contact">Request a Consultation</Link>
             </Button>
        </div>
      </section>

      <div className="container py-16 md:py-24 space-y-16">
        {relatedServices.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-primary text-center mb-8">How We Help: Related Services</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedServices.map(service => {
                const ServiceIcon = service.icon;
                return (
                  <Link href={`/services/${service.slug}`} key={service.slug} className="group">
                      <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors border h-full">
                          <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full mt-1">
                              <ServiceIcon className="w-6 h-6 text-accent" />
                          </div>
                          <div>
                              <h3 className="font-semibold text-primary group-hover:text-accent transition-colors">{service.title}</h3>
                              <p className="text-sm text-muted-foreground">{service.description}</p>
                          </div>
                      </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

        {relatedCaseStudies.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-primary text-center mb-8">Relevant Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {relatedCaseStudies.map((study) => (
                <Link href={`/case-studies/${study.slug}`} key={study.slug} className="group">
                    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 border group-hover:border-accent group-hover:shadow-xl group-hover:scale-[1.02]">
                        {study.image && (
                            <div className="aspect-video relative shrink-0">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={study.imageHint}
                                />
                            </div>
                        )}
                    <div className='flex flex-col flex-grow'>
                        <CardHeader>
                            <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{study.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground">{study.description}</p>
                        </CardContent>
                        <CardFooter>
                            <div className="text-sm font-semibold text-primary group-hover:text-accent flex items-center transition-colors">
                                Read Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </CardFooter>
                    </div>
                    </Card>
                </Link>
                ))}
            </div>
          </section>
        )}

         {relatedBlogs.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-primary text-center mb-8">Further Reading</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedBlogs.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                  <Card className="h-full flex flex-col transition-all duration-300 border group-hover:border-accent group-hover:shadow-lg group-hover:scale-105">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">{post.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}