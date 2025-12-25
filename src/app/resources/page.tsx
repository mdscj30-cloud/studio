import { BlogSection } from '@/components/resources/BlogSection';
import { CaseStudiesSection } from '@/components/resources/CaseStudiesSection';
import { BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Resources | N consulting',
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
        <BlogSection />
        <CaseStudiesSection />
      </div>
    </>
  );
}
