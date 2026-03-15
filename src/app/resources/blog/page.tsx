

import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/constants';
import { Newspaper } from 'lucide-react';
import { BlogFilter } from '@/components/resources/BlogFilter';
import Link from 'next/link';

export const metadata = {
  title: 'Blog — Startup Finance & Compliance Insights',
  description: 'Expert articles on startup finance, GST, fundraising, CFO strategy, and compliance for Indian founders and operators.',
  alternates: { canonical: '/resources/blog' },
  openGraph: {
    title: 'Blog — Startup Finance & Compliance Insights | Nexa Consultancy',
    description: 'Expert articles on startup finance, GST, fundraising, CFO strategy, and compliance for Indian founders.',
    url: '/resources/blog',
    type: 'website',
  },
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
          <p className="mt-2 text-md max-w-3xl mx-auto text-primary-foreground/70">
            Explore all our content, including case studies and our finance glossary, in the main <Link href="/resources" className="underline hover:text-white">Resources Hub</Link>.
          </p>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <BlogFilter posts={BLOG_POSTS} categories={BLOG_CATEGORIES} />
      </section>
    </>
  );
}
