
'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type Post = typeof BLOG_POSTS[0];

function BlogFilterComponent({ posts, categories }: { posts: Post[], categories: string[] }) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category');
  const [filter, setFilter] = useState(initialCategory);

  const filteredPosts = useMemo(() => {
    if (!filter) return posts;
    return posts.filter(post => post.category === filter);
  }, [filter, posts]);

  const handleSetFilter = (category: string | null) => {
    // This function is kept for potential future use if we switch away from URL-based state management
    // For now, the Links handle the state change by navigating
    setFilter(category);
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <Button
          variant={!filter ? 'default' : 'outline'}
          asChild
        >
          <Link href="/resources/blog" onClick={() => handleSetFilter(null)}>All Posts</Link>
        </Button>
        {categories.map(category => (
          <Button
            key={category}
            variant={filter === category ? 'default' : 'outline'}
            asChild
          >
            <Link href={`/resources/blog?category=${encodeURIComponent(category)}`} onClick={() => handleSetFilter(category)}>{category}</Link>
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
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
       {filteredPosts.length === 0 && (
            <div className="text-center col-span-full py-12">
                <p className="text-muted-foreground text-lg">No posts found for this category.</p>
            </div>
        )}
    </div>
  );
}


export function BlogFilter({ posts, categories }: { posts: Post[], categories: string[] }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BlogFilterComponent posts={posts} categories={categories} />
        </Suspense>
    )
}
