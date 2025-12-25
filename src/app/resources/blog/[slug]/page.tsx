
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { DETAILED_BLOG_POSTS } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return DETAILED_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const post = DETAILED_BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | N consulting`,
    description: post.summary,
  };
}

export default function BlogPostPage({ params }: Props) {
  const { slug } = params;
  const post = DETAILED_BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find(img => img.id === post.imageId);
  const authorImage = PlaceHolderImages.find(img => img.id.includes('testimonial'));

  return (
    <>
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
                    priority
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
