


import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/constants';
import { Newspaper } from 'lucide-react';
import { BlogFilter } from '@/components/resources/BlogFilter';

export const metadata = {
  title: 'Blog | Nexa Consultancy',
  description: 'Explore our latest insights, articles, and analysis on startup strategy, finance, and growth.',
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24 text-center">
          <div className="inline-block bg-primary-foreground/10 p-4 rounded-full mb-4">
            <Newspaper className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Nexa Insights</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Our expert analysis on startup finance, strategy, and sustainable growth.
          </p>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <BlogFilter posts={BLOG_POSTS} categories={BLOG_CATEGORIES} />
      </section>
    </>
  );
}
