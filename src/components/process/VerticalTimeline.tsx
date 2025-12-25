'use client';

import { PROCESS_STEPS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

function TimelineItem({ step, index }: { step: (typeof PROCESS_STEPS)[0], index: number }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLLIElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    
    const isEven = index % 2 === 0;
    const Icon = step.icon;

    return (
        <li 
          ref={ref}
          className={cn(
              "relative flex items-start md:grid md:grid-cols-2 md:gap-12 transition-all duration-700 ease-out",
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
            {/* Timeline Dot */}
            <div className="absolute left-6 top-1 h-6 w-6 rounded-full bg-background border-2 border-primary flex items-center justify-center -translate-x-[calc(50%+1px)] md:left-1/2">
              <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
            </div>

            {/* Content */}
            <div className={`w-full ${isEven ? 'md:col-start-1 md:text-right' : 'md:col-start-2 md:text-left'}`}>
                <div className={`pl-12 md:pl-0 md:pr-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className={cn("flex items-center gap-4 mb-2 md:justify-start", isEven ? 'md:flex-row-reverse' : '')}>
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 text-primary shrink-0">
                            <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                </div>
            </div>

            {/* Spacer for large screens */}
            <div className="hidden md:block"></div>
        </li>
    );
}

export function VerticalTimeline() {
  return (
    <div className="container max-w-5xl mx-auto">
       <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">A Step-by-Step Path to Success</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We follow a proven methodology to ensure your startup achieves its strategic objectives and unlocks sustainable growth.
          </p>
        </div>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2" aria-hidden="true"></div>

        <ul className="relative space-y-12">
          {PROCESS_STEPS.map((step, index) => (
            <TimelineItem key={step.title} step={step} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}
