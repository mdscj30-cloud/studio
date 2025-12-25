'use client';

import { GLOSSARY_DATA } from '@/lib/glossary-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

  return (
    <div className="max-w-4xl mx-auto">
        <Accordion type="multiple" className="w-full space-y-4">
            {alphabet.map(letter => {
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
    </div>
  );
}
