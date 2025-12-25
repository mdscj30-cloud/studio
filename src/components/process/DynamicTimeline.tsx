import { PROCESS_STEPS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

export function DynamicTimeline() {
  return (
    <div>
       <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">A Step-by-Step Path to Success</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We follow a proven, four-step methodology to ensure your startup achieves its strategic objectives and unlocks sustainable growth.
          </p>
        </div>
      <div className="relative">
        {/* The connecting line */}
        <div className="absolute left-0 top-1/2 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block" />

        <div className="relative grid md:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative group">
                <Card className="text-center h-full transition-all duration-300 border-2 border-transparent group-hover:border-accent group-hover:scale-105 group-hover:shadow-xl">
                  <CardHeader className="items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4 border-2 border-primary/20 group-hover:bg-accent/10 group-hover:border-accent/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <CardTitle className="text-lg text-primary">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm border-4 border-background transition-colors duration-300 group-hover:bg-accent">
                    {index + 1}
                </div>
                 {/* Connecting Chevron for smaller screens */}
                {index < PROCESS_STEPS.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                        <ChevronRight className="w-8 h-8 text-muted-foreground rotate-90" />
                    </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
