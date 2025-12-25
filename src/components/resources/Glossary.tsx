'use client';

import { GLOSSARY_DATA } from '@/lib/glossary-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useInView } from 'react-intersection-observer';
import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export function Glossary() {
  const groupedByLetter = GLOSSARY_DATA.reduce((acc, item) => {
    const letter = item.term[0].toUpperCase();
    if (!acc[letter]) {
      acc[letter] = [];
    }
    acc[letter].push(item);
    return acc;
  }, {} as Record<string, typeof GLOSSARY_DATA>);

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const [loadedLetters, setLoadedLetters] = useState<string[]>([]);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Load the first letter initially
    if (alphabet.length > 0) {
        setLoadedLetters([alphabet[0]]);
        setCurrentIndex(1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (inView && currentIndex < alphabet.length) {
      const nextIndex = currentIndex + 1;
      const nextLetter = alphabet[currentIndex];
      
      // Check if the next letter has glossary items before adding it
      if (groupedByLetter[nextLetter]) {
        setTimeout(() => {
            setLoadedLetters(prev => [...prev, nextLetter]);
        }, 200); // Small delay to create a smooth loading effect
      }
      setCurrentIndex(nextIndex);
    }
  }, [inView, currentIndex, alphabet, groupedByLetter]);


  return (
    <div className="max-w-4xl mx-auto">
        <Accordion type="multiple" className="w-full space-y-4">
            {loadedLetters.map(letter => {
                const items = groupedByLetter[letter];
                if (!items) return null;

                return (
                    <AccordionItem value={letter} key={letter} className="border-b-0">
                         <AccordionTrigger className="text-2xl font-bold text-primary py-4 px-6 bg-muted/50 rounded-lg hover:bg-muted/80 transition-colors">
                            {letter}
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                           <div className="space-y-6 pl-6">
                             {items.map(item => (
                                <div key={item.term}>
                                    <h3 className="font-semibold text-lg text-foreground">{item.term}</h3>
                                    <p className="text-muted-foreground mt-1">{item.definition}</p>
                                </div>
                             ))}
                           </div>
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
        </Accordion>
        
        {/* Intersection observer target and skeleton loaders */}
        {currentIndex < alphabet.length && (
             <div ref={ref} className="mt-8 space-y-4">
                <Skeleton className="h-16 w-full rounded-lg" />
                <Skeleton className="h-16 w-full rounded-lg" />
            </div>
        )}
    </div>
  );
}
