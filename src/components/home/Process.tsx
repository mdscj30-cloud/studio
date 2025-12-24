'use client';

import { PROCESS_STEPS } from '@/lib/constants';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export default function Process() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Process</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A structured path to unlock your startup's full potential.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col text-center bg-card shadow-sm border-transparent hover:border-accent hover:shadow-lg transition-all">
                      <CardContent className="flex flex-col p-6 flex-grow">
                          <div className="flex justify-center mb-4">
                            <div className="bg-primary/10 p-4 rounded-full">
                              <Icon className="w-8 h-8 text-primary" />
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                          <p className="text-muted-foreground flex-grow">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}