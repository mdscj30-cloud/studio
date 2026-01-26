
import { redirect } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export default function BlogPostPage({ params }: Props) {
  redirect(`/resources/blog/${params.slug}`);
}
