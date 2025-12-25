'use client';

import { PROCESS_STEPS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const TimelineItem = ({
  step,
  index,
  isActive,
  isPassed,
}: {
  step: (typeof PROCESS_STEPS)[0];
  index: number;
  isActive: boolean;
  isPassed: boolean;
}) => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        'relative flex items-start md:grid md:grid-cols-2 md:gap-12 transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
    >
      {/* Timeline Dot with Step Number or Checkmark */}
      <div
        className={cn(
          'absolute left-6 top-1 h-10 w-10 rounded-full border-2 flex items-center justify-center -translate-x-[calc(50%+1px)] z-10 transition-all duration-300',
          isPassed
            ? 'bg-accent border-accent text-accent-foreground'
            : isActive
            ? 'bg-primary border-primary text-primary-foreground scale-110'
            : 'bg-background border-primary text-primary'
        )}
      >
        {isPassed ? (
          <Check className="w-6 h-6" />
        ) : (
          <span className="font-bold">{index + 1}</span>
        )}
      </div>

      {/* Content */}
      <div
        className={`w-full ${
          isEven ? 'md:col-start-1 md:text-right' : 'md:col-start-2 md:text-left'
        }`}
      >
        <div
          className={`pl-16 md:pl-0 md:pr-0 ${
            isEven ? 'md:pr-16' : 'md:pl-16'
          }`}
        >
          <div
            className={cn(
              'flex items-center gap-4 mb-2',
              isEven ? 'md:flex-row-reverse' : 'md:flex-row'
            )}
          >
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
};

export function VerticalTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLLIElement);
            setActiveStep(index);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Trigger when item is in the vertical center
        threshold: 0,
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="container max-w-5xl mx-auto">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          A Step-by-Step Path to Success
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          We follow a proven methodology to ensure your startup achieves its
          strategic objectives and unlocks sustainable growth.
        </p>
      </div>
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-6 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"
          aria-hidden="true"
        ></div>

        <ul className="relative space-y-16">
          {PROCESS_STEPS.map((step, index) => (
            <TimelineItem
              key={step.title}
              step={step}
              index={index}
              isActive={index === activeStep}
              isPassed={index < activeStep}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
