import { GLOSSARY_DATA_BY_LETTER } from '@/lib/glossary-data';
import { Library } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Startup & Finance Glossary | Nexa Consultancy',
  description: 'Your A-Z guide to understanding the language of business, finance, and compliance. Explore definitions for key startup terminology.',
};

export default function StartupFinanceGlossaryPage() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24 text-center">
            <div className="inline-block bg-primary-foreground/10 p-4 rounded-full mb-4">
                <Library className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Startup & Finance Glossary</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
              Your A-Z guide to understanding the language of business, finance, and compliance.
            </p>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {alphabet.map(letter => (
              GLOSSARY_DATA_BY_LETTER[letter] ? (
                <a
                  key={letter}
                  href={`#${letter}`}
                  className="w-10 h-10 flex items-center justify-center rounded-md bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground font-bold transition-colors"
                >
                  {letter}
                </a>
              ) : (
                <span key={letter} className="w-10 h-10 flex items-center justify-center rounded-md bg-muted/50 text-muted-foreground/50 cursor-not-allowed">
                  {letter}
                </span>
              )
            ))}
          </div>

          <div className="space-y-12">
            {Object.keys(GLOSSARY_DATA_BY_LETTER).map(letter => (
              <div key={letter} id={letter} className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-primary border-b-2 border-accent pb-2 mb-6">
                  {letter}
                </h2>
                <ul className="columns-1 md:columns-2 lg:columns-3 gap-x-8">
                  {GLOSSARY_DATA_BY_LETTER[letter].map(item => (
                    <li key={item.term} className="mb-3">
                      <Link href={`/startup-finance-glossary/${item.slug}`} className="text-muted-foreground hover:text-accent hover:underline">
                        {item.term}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
