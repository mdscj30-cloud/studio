
import Link from 'next/link';
import Image from 'next/image';
import { CASE_STUDIES } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export function CaseStudiesSection() {
  return (
    <section id="case-studies">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Success Stories</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          See how we've helped ambitious startups achieve their goals and accelerate their growth.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CASE_STUDIES.map((study) => (
           <Link href={`/case-studies/${study.slug}`} key={study.slug} className="group">
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
              <div className='flex flex-col'>
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
  );
}
