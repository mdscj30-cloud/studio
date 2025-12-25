'use client';

import { GLOSSARY_DATA_BY_LETTER, type GlossaryTerm } from '@/lib/glossary-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useInView } from 'react-intersection-observer';
import React, { useState, useEffect, useCallback } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export function Glossary() {
  const [loadedData, setLoadedData] = useState<Record<string, GlossaryTerm[]>>({});
  const [visibleLetters, setVisibleLetters] = useState<string[]>([]);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const loadLetter = useCallback(async (letter: string) => {
    if (loadedData[letter] || !GLOSSARY_DATA_BY_LETTER[letter]) {
      return;
    }
    
    // Simulate dynamic import for demonstration; in a real scenario this could be an API call
    // or dynamic import() if data was split into separate files.
    const items = GLOSSARY_DATA_BY_LETTER[letter] as GlossaryTerm[];
    setLoadedData(prev => ({ ...prev, [letter]: items }));
  }, [loadedData]);

  useEffect(() => {
    const lettersWithContent = alphabet.filter(letter => GLOSSARY_DATA_BY_LETTER[letter]);
    if (lettersWithContent.length > 0) {
      const firstLetter = lettersWithContent[0];
      setVisibleLetters([firstLetter]);
      loadLetter(firstLetter);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadLetter]);

  useEffect(() => {
    if (inView) {
      const lettersWithContent = alphabet.filter(letter => GLOSSARY_DATA_BY_LETTER[letter]);
      const nextIndex = visibleLetters.length;
      if (nextIndex < lettersWithContent.length) {
        const nextLetter = lettersWithContent[nextIndex];
        setVisibleLetters(prev => [...prev, nextLetter]);
        loadLetter(nextLetter);
      }
    }
  }, [inView, visibleLetters, loadLetter]);
  
  const lettersWithContent = alphabet.filter(letter => GLOSSARY_DATA_BY_LETTER[letter]);

  return (
    <div className="max-w-4xl mx-auto">
        <Accordion type="multiple" className="w-full space-y-4">
            {visibleLetters.map(letter => {
                const items = loadedData[letter];
                if (!items) {
                    return (
                        <div key={letter} className="space-y-4">
                            <Skeleton className="h-16 w-full rounded-lg" />
                        </div>
                    );
                }

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
        
        {visibleLetters.length < lettersWithContent.length && (
             <div ref={ref} className="mt-8 space-y-4">
                <Skeleton className="h-16 w-full rounded-lg" />
                <Skeleton className="h-16 w-full rounded-lg" />
            </div>
        )}
    </div>
  );
}
