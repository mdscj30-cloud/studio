import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { findImage } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Hero() {
  const heroImage = findImage('hero-background-2');

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center py-20 md:py-32">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover opacity-[0.03]"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="relative z-10 text-left md:col-span-2 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-primary">
              Strategic Guidance for Ambitious Startups
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We provide the expert advice and hands-on support you need to navigate challenges, accelerate growth, and achieve your vision.
            </p>
            <Button size="lg" asChild variant="accent">
                <Link href="/contact">Request a Consultation</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
