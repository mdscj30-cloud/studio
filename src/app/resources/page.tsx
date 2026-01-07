import { BlogSection } from '@/components/resources/BlogSection';
import { CaseStudiesSection } from '@/components/resources/CaseStudiesSection';
import { BookOpen, Library } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Resources | Nexa Consultancy',
  description: 'Explore our insights, case studies, and articles on startup strategy, finance, and growth.',
};

export default function ResourcesPage() {
  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24 text-center">
          <div className="inline-block bg-primary-foreground/10 p-4 rounded-full mb-4">
            <BookOpen className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Resources</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Insights, strategies, and success stories to help your startup thrive.
          </p>
        </div>
      </section>

      <div className="container py-16 md:py-24 space-y-24">
        <section id="glossary-link" className="bg-muted -mx-container-padding px-container-padding py-16">
            <div className="text-center">
                <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                    <Library className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Financial Glossary</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Your comprehensive guide to financial, tax, and startup terminology.
                </p>
                <Link href="/resources/glossary" className="mt-6 inline-block bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold hover:bg-accent/90 transition-colors">
                    Explore the Glossary
                </Link>
            </div>
        </section>
        <BlogSection />
        <CaseStudiesSection />
      </div>
    </>
  );
}
