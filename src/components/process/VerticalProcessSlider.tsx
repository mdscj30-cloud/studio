'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/lib/constants';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '../ui/button';

export function VerticalProcessSlider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  
  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };


  return (
    <div className="grid md:grid-cols-3 gap-12 items-center">
      <div className="md:col-span-1">
        <h2 className="text-3xl font-bold text-primary mb-6">A Step-by-Step Path to Success</h2>
        <div className="space-y-2">
            {PROCESS_STEPS.map((step, index) => (
                <Button
                    key={index}
                    variant={index + 1 === current ? "accent" : "ghost"}
                    className="w-full justify-start text-left h-auto py-3"
                    onClick={() => scrollTo(index)}
                >
                    <span className="text-accent font-bold text-lg mr-4">{`0${index + 1}`}</span>
                    <span className='text-base'>{step.title.substring(step.title.indexOf('.') + 2)}</span>
                </Button>
            ))}
        </div>
      </div>
      <div className="md:col-span-2">
        <Carousel 
            setApi={setApi} 
            orientation="vertical" 
            className="w-full"
            opts={{
                align: 'start',
            }}
        >
          <CarouselContent className="h-[400px]">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <CarouselItem key={index} className="pt-1 md:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col items-center justify-center text-center bg-card shadow-sm border-transparent hover:border-accent hover:shadow-lg transition-all duration-300">
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <div className="flex justify-center mb-4">
                          <div className="bg-primary/10 p-4 rounded-full">
                            <Icon className="w-10 h-10 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute -top-12 left-1/2 -translate-x-1/2 rotate-90" />
          <CarouselNext className="absolute -bottom-12 left-1/2 -translate-x-1/2 rotate-90" />
        </Carousel>
      </div>
    </div>
  );
}
