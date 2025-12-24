'use client';

import React from 'react';
import { PORTFOLIO_COMPANIES } from '@/lib/constants';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Portfolio() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Portfolio</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We are proud to have partnered with innovative startups across various industries.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {PORTFOLIO_COMPANIES.map((company) => (
              <CarouselItem key={company.name} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="p-4">
                    <div className="flex items-center justify-center p-2 h-20" title={company.name}>
                       <span className="text-2xl font-bold text-muted-foreground grayscale hover:grayscale-0 transition-all">{company.name}</span>
                    </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}