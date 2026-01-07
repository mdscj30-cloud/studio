import { VerticalTimeline } from '@/components/process/VerticalTimeline';
import { Lightbulb } from 'lucide-react';

export const metadata = {
  title: 'Our Process | Nexa Consultancy',
  description: 'A structured path to unlock your startup\'s full potential.',
};

export default function ProcessPage() {
  return (
    <>
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
