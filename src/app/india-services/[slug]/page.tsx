
import { notFound } from 'next/navigation';
import { LOCATION_SERVICE_PAGES, TARGETED_SERVICES } from '@/lib/location-service-data';
import { SERVICES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ALL_GLOSSARY_TERMS } from '@/lib/glossary-data';
import { CITY_DATA } from '@/lib/city-data';
import { getDetailedBlogPosts, getDetailedCaseStudies } from '@/lib/content';
import { RequestConsultation } from '@/components/layout/PartnerWithUs';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return LOCATION_SERVICE_PAGES.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const page = LOCATION_SERVICE_PAGES.find((p) => p.slug === params.slug);

  if (!page) {
    return {
      title: 'Service Not Found',
    };
  }

  const title = `${page.service.title} in ${page.city} | Nexa Consultancy`;
  const description = `Expert ${page.service.title} for startups and growing businesses in ${page.city}. Nexa Consultancy offers tailored financial and compliance solutions.`;

  return {
    title,
    description,
  };
}

const serviceToBlogCategory: Record<string, string[]> = {
  'virtual-cfo': ['saas', 'virtual cfo', 'startup finance'],
  'gst-consultant': ['gst & indirect tax', 'e-commerce'],
  'income-tax': ['income tax & direct tax'],
  'bookkeeping': ['accounting'],
  'roc-compliance': ['roc, company law & fema', 'due diligence'],
};

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-');

export default function LocationServicePage({ params }: Props) {
  const page = LOCATION_SERVICE_PAGES.find((p) => p.slug === params.slug);

  if (!page) {
    notFound();
  }

  const mainService = SERVICES.find(s => s.slug === page.service.slug);
  const Icon = page.service.Icon;

  const citySlug = page.city.toLowerCase().replace(/\s+/g, '-');
  const cityData = CITY_DATA[citySlug];

  const relatedCategories = serviceToBlogCategory[page.service.key] || [];
  const relatedBlog = getDetailedBlogPosts().find(post => 
    relatedCategories.some(cat => post.category.toLowerCase().includes(cat))
  );

  const relatedCaseStudy = getDetailedCaseStudies().find(study => 
    study.services.some(s => s.toLowerCase().includes(page.service.title.toLowerCase().replace(' services', '')))
  );

  const otherServicesInCity = TARGETED_SERVICES.filter(s => s.key !== page.service.key);

  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary-foreground/10 p-3 rounded-full">
              <Icon className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{page.service.title} in {page.city}</h1>
          </div>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl">
            Specialized {page.service.title} for startups and growing businesses in {page.city}. We provide expert financial guidance to help you navigate compliance and scale effectively.
          </p>
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
              <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Nexa for {page.service.title} in {page.city}?</h2>
              
              {cityData ? (
                <>
                  <p>{cityData.ecosystem}</p>
                  <p>Given the dominance of {cityData.industries.toLowerCase()}, having a sharp financial strategy is not just an advantage; it's a necessity. At Nexa Consultancy, we combine deep domain expertise with local market understanding to provide services that are not just compliant, but also strategic.</p>
                </>
              ) : (
                <p>
                  Operating a startup in {page.city} presents unique opportunities and challenges. At Nexa Consultancy, we combine deep domain expertise with local market understanding to provide services that are not just compliant, but also strategic. We help you focus on your core business while we handle the financial complexities.
                </p>
              )}
              
              {mainService && (
                <>
                  <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Core {mainService.title} for Startups in {page.city}</h3>
                   <p>{mainService.details}</p>
                   <ul className="space-y-3 !pl-0">
                        {mainService.faqs[0] && (
                            <li className="flex items-start !pl-0">
                                <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                                <div><strong>{mainService.faqs[0].question}</strong> {mainService.faqs[0].answer}</div>
                            </li>
                        )}
                         {mainService.faqs[1] && (
                            <li className="flex items-start !pl-0">
                                <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                                <div><strong>{mainService.faqs[1].question}</strong> {mainService.faqs[1].answer}</div>
                            </li>
                        )}
                   </ul>
                   <Button asChild variant="link" className="p-0 mt-4 text-accent">
                        <Link href={`/services/${mainService.slug}`}>
                            Learn more about our core {mainService.title} services <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </>
              )}

              {cityData?.complianceNote && (
                  <div className="mt-12 bg-muted/50 border-l-4 border-accent p-6 rounded-r-lg">
                      <h4 className="font-semibold text-primary not-prose text-xl mb-2">Local Compliance Note for {page.city}</h4>
                      <p className="!my-0">{cityData.complianceNote}</p>
                  </div>
              )}
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="sticky top-24 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Get Expert Help in {page.city}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Let our experts handle your financial compliance so you can focus on growing your business in {page.city}.
                  </p>
                  <Button asChild variant="accent" className="w-full">
                    <Link href="/contact">Request a Consultation</Link>
                  </Button>
                </CardContent>
              </Card>

              {otherServicesInCity.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle>Other Services in {page.city}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {otherServicesInCity.map(service => {
                                const slug = `${slugify(service.title)}-${slugify(page.city)}`;
                                const ServiceIcon = service.Icon;
                                return (
                                    <li key={slug}>
                                        <Link href={`/india-services/${slug}`} className="font-semibold text-primary hover:text-accent transition-colors flex items-center gap-2">
                                            <ServiceIcon className="w-5 h-5 text-accent shrink-0" />
                                            <span>{service.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </CardContent>
                </Card>
              )}

              {(relatedBlog || relatedCaseStudy) && (
                 <Card>
                    <CardHeader>
                        <CardTitle>Explore Our Insights</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {relatedBlog && (
                            <Link href={`/resources/blog/${relatedBlog.slug}`} className="group block">
                                <p className="font-semibold text-primary group-hover:text-accent transition-colors">Blog Post</p>
                                <p className="text-sm text-muted-foreground">{relatedBlog.title}</p>
                            </Link>
                        )}
                        {relatedCaseStudy && (
                            <Link href={`/case-studies/${relatedCaseStudy.slug}`} className="group block">
                                <p className="font-semibold text-primary group-hover:text-accent transition-colors">Case Study</p>
                                <p className="text-sm text-muted-foreground">{relatedCaseStudy.title}</p>
                            </Link>
                        )}
                    </CardContent>
                </Card>
              )}

              {mainService && mainService.relatedGlossaryTerms && mainService.relatedGlossaryTerms.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle>Related Glossary Terms</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {mainService.relatedGlossaryTerms.map(slug => {
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
