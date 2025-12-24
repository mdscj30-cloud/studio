import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { findImage } from '@/lib/constants';

export default function Hero() {
  const heroImage = findImage('hero-background');

  return (
    <section className="relative h-[600px] md:h-[700px] w-full flex items-center justify-center text-white">
      {heroImage && (
         <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
      )}
      <div className="absolute inset-0 bg-primary/70"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Strategic Counsel for India’s Ambitious Enterprises
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
          We provide disciplined business, finance, and tax advisory to empower Indian MSMEs and startups, transforming complex challenges into opportunities for sustainable growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-accent text-accent hover:bg-accent/10">
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
