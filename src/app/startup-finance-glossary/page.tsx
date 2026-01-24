
import { GLOSSARY_DATA_BY_CLUSTER, GLOSSARY_CLUSTERS } from '@/lib/glossary-data';
import { Library, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Startup & Finance Glossary | Nexa Consultancy',
  description: 'Your A-Z guide to understanding the language of business, finance, and compliance. Explore definitions for key startup terminology.',
};

export default function StartupFinanceGlossaryPage() {
  
  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24 text-center">
            <div className="inline-block bg-primary-foreground/10 p-4 rounded-full mb-4">
                <Library className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Startup & Finance Glossary</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
              Your guide to the language of Indian startups. Organized by topic to help you build your financial literacy.
            </p>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="sticky top-20 bg-background/95 backdrop-blur-sm z-10 py-4 mb-12 border-b">
            <div className="flex justify-center flex-wrap gap-2">
              {GLOSSARY_CLUSTERS.map(cluster => (
                  <a
                    key={cluster}
                    href={`#${cluster.toLowerCase().replace(/\s+/g, '-')}`}
                    className="py-2 px-4 rounded-full bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground font-semibold transition-colors text-sm"
                  >
                    {cluster}
                  </a>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {GLOSSARY_CLUSTERS.map(cluster => (
              <Card key={cluster} id={cluster.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-40 transition-all hover:shadow-xl hover:border-accent">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-accent"/>
                    {cluster}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="columns-1 md:columns-2 lg:columns-3 gap-x-8">
                    {GLOSSARY_DATA_BY_CLUSTER[cluster]?.map((item, index) => (
                      <li key={`${item.slug}-${index}`} className="mb-3">
                        <Link href={`/startup-finance-glossary/${item.slug}`} className="group transition-colors duration-200">
                          <span className="text-muted-foreground group-hover:text-accent group-hover:underline">{item.term}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
