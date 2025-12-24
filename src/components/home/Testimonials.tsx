'use client';

import Image from 'next/image';
import { TESTIMONIALS } from '@/lib/constants';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Achieve bigger milestones with N consulting</h2>
          <p className="mt-4 text-lg text-foreground/80">
            We help founders move ahead faster with confidence.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {TESTIMONIALS.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col bg-background">
                    <CardContent className="flex flex-col p-6 flex-grow">
                        <p className="text-sm text-foreground/70 mb-4">{testimonial.company}</p>
                        <blockquote className="text-base text-foreground/80 mb-4 border-l-4 border-accent pl-4 italic flex-grow">
                            "{testimonial.quote}"
                        </blockquote>
                       <div className="flex items-center mt-auto pt-4 border-t">
                        <Avatar className="h-12 w-12 mr-4">
                           <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                           <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-primary">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                           {testimonial.stage && <p className="text-sm font-bold text-accent">{testimonial.stage}</p>}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
