
import { redirect } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export default function CaseStudyPage({ params }: Props) {
  redirect(`/resources/case-studies/${params.slug}`);
}
