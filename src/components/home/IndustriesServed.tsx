import { INDUSTRIES } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function IndustriesServed() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Industry-Specific Expertise</h2>
          <p className="mt-4 text-lg text-foreground/80">
            We deliver tailored advisory services, leveraging deep insights into the unique challenges and opportunities of your sector.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;
            return (
              <div key={industry.title} className="text-center group">
                 <div className="flex items-center justify-center bg-card border rounded-lg h-28 w-full p-4 group-hover:bg-accent/10 group-hover:border-accent transition-all duration-300">
                    <Icon className="w-12 h-12 text-primary group-hover:text-accent transition-colors duration-300" />
                 </div>
                <h3 className="mt-4 font-semibold text-primary">{industry.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
