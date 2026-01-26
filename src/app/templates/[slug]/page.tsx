
import { redirect } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export default function TemplatePage({ params }: Props) {
  redirect(`/resources/templates/${params.slug}`);
}
