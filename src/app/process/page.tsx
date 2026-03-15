import { VerticalTimeline } from '@/components/process/VerticalTimeline';
import { Lightbulb } from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/constants';

export const metadata = {
  title: 'How We Work — Our Process',
  description: 'Nexa Consultancy\'s 6-step onboarding and engagement process — from discovery and compliance assessment to monthly execution and quarterly reviews.',
  alternates: { canonical: '/process' },
  openGraph: {
    title: 'How We Work — Our Process | Nexa Consultancy',
    description: 'Our structured, transparent 6-step process for onboarding startups and delivering ongoing finance and compliance support.',
    url: '/process',
    type: 'website',
  },
};

export default function ProcessPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How Nexa Consultancy Onboards and Manages Your Finance & Compliance',
    description: 'A 6-step structured process to onboard startups and deliver ongoing finance, tax, and compliance support.',
    step: PROCESS_STEPS.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24 text-center">
            <div className="inline-block bg-primary-foreground/10 p-4 rounded-full mb-4">
                <Lightbulb className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Our Structured Process</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
              A structured path to unlock your startup's full potential.
            </p>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <VerticalTimeline />
      </section>
    </>
  );
}
