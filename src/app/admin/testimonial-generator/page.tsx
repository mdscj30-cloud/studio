import { GeneratorForm } from './GeneratorForm';

export const metadata = {
  title: 'Client Success Story Generator | Admin',
  description: 'Generate persuasive client success stories using AI.',
};

export default function TestimonialGeneratorPage() {
  return (
    <>
      <div className="-mx-32 bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold">AI Success Story Generator</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/80">
            Create persuasive, well-written client stories with potential ROI figures based on client data and industry benchmarks.
          </p>
        </div>
      </div>
      <div className="container py-12">
        <GeneratorForm />
      </div>
    </>
  );
}
