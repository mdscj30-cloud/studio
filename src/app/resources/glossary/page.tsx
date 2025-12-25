
import { Glossary } from '@/components/resources/Glossary';
import { Library } from 'lucide-react';

export const metadata = {
  title: 'Financial Glossary | N consulting',
  description: 'A comprehensive glossary of terms related to accounting, tax, finance, and startups for founders and business owners.',
};

export default function GlossaryPage() {
  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24 text-center">
            <div className="inline-block bg-primary-foreground/10 p-4 rounded-full mb-4">
                <Library className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Financial & Startup Glossary</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
              Your A-Z guide to understanding the language of business, finance, and compliance.
            </p>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <Glossary />
      </section>
    </>
  );
}
