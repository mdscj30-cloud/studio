
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getDetailedBlogPosts, getBlogPostBySlug } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

type Props = {
  params: { slug: string };
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexaconsultancy.com';


export async function generateStaticParams() {
  const posts = getDetailedBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/resources/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `/resources/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const { slug } = params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find(img => img.id === post.imageId);
  const authorImage = PlaceHolderImages.find(img => img.id.includes('testimonial'));

  const breadcrumbItems = [
    { name: 'Home', item: `${siteUrl}` },
    { name: 'Resources', item: `${siteUrl}/resources` },
    { name: 'Blog', item: `${siteUrl}/resources/blog` },
    { name: post.title, item: `${siteUrl}/resources/blog/${post.slug}` },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nexa Consultancy',
      url: siteUrl,
    },
    datePublished: post.date,
    url: `${siteUrl}/resources/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} className="py-8" />
      <section className="-mx-container-padding bg-muted/50 py-12 md:py-20">
        <div className="container max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">{post.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">{post.summary}</p>
          <div className="flex items-center space-x-4">
            <Avatar>
              {authorImage && <AvatarImage src={authorImage.imageUrl} alt={post.author} />}
              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{post.author}</p>
              <p className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {image && (
        <div className="container max-w-5xl mx-auto my-8 md:my-12">
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                <Image
                    src={image.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                />
            </div>
        </div>
      )}

      <section className="container max-w-4xl mx-auto py-8 md:py-12">
        <div
          className="prose lg:prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
    </>
  );
}
