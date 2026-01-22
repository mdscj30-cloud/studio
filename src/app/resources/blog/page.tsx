
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Newspaper } from 'lucide-react';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link href={`/resources/blog/${post.slug}`} key={post.slug} className="group">
              <Card className="h-full flex flex-col transition-all duration-300 border group-hover:border-accent group-hover:shadow-xl group-hover:scale-105">
                <CardHeader>
                  {post.image && (
                    <div className="aspect-video relative w-full rounded-t-lg overflow-hidden mb-4">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        data-ai-hint={post.imageHint}
                      />
                    </div>
                  )}
                  <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                  <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors pt-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="flex-grow">{post.description}</CardDescription>
                  <div className="text-sm text-muted-foreground mt-4">
                    <span>{post.author}</span> &middot; <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
