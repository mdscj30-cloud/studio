import { CASE_STUDIES } from '@/lib/constants';
import { Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Success Stories | Nexa Consultancy',
  description: 'Explore our in-depth case studies and discover how we\'ve partnered with ambitious founders to navigate challenges and accelerate growth.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24 text-center">
          <div className="inline-block bg-primary-foreground/10 p-4 rounded-full mb-4">
            <Briefcase className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Success Stories</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Discover how we've partnered with ambitious founders to navigate challenges and accelerate growth.
          </p>
          <p className="mt-2 text-md max-w-3xl mx-auto text-primary-foreground/70">
            Explore all our content in the main <Link href="/resources" className="underline hover:text-white">Resources Hub</Link>.
          </p>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <Link href={`/resources/case-studies/${study.slug}`} key={study.slug} className="group">
              <Card className="h-full flex flex-col md:flex-row overflow-hidden transition-all duration-300 border group-hover:border-accent group-hover:shadow-xl group-hover:scale-[1.02]">
                  {study.image && (
                      <div className="md:w-2/5 w-full aspect-video md:aspect-auto relative shrink-0">
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
                      <CardDescription className="pt-2 !text-base">{study.client} - <span className='font-semibold'>{study.industry}</span></CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">{study.description}</p>
                  </CardContent>
                  <CardFooter className="flex-wrap gap-2">
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
    </>
  );
}
