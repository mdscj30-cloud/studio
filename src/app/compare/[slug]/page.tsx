
import { redirect } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export default function CompareSlugPageRedirect({ params }: Props) {
  redirect(`/resources/compare/${params.slug}`);
}
