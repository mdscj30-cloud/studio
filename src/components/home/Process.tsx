import { FileText, Lightbulb, TrendingUp, Award } from 'lucide-react';

const processSteps = [
  {
    icon: FileText,
    title: '1. Discovery & Assessment',
    description: 'We start with a deep dive into your business, market, and goals to understand your unique challenges and opportunities.',
  },
  {
    icon: Lightbulb,
    title: '2. Strategy Formulation',
    description: 'Our team crafts a bespoke, data-driven strategy and actionable roadmap tailored to your specific objectives.',
  },
  {
    icon: TrendingUp,
    title: '3. Implementation Support',
    description: 'We work alongside your team, providing hands-on support to ensure the strategy is executed flawlessly.',
  },
  {
    icon: Award,
    title: '4. Performance & Scaling',
    description: 'We continuously monitor performance, making data-backed adjustments to drive growth and scale your success.',
  },
];

export default function Process() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Process</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            A structured path to unlock your startup's full potential.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
