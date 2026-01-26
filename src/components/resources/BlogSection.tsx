
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function BlogSection() {
  const postsToShow = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Latest Insights</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Stay updated with our expert analysis on startup finance, strategy, and growth.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {postsToShow.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
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
       <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
      </div>
    </section>
  );
}
