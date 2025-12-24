import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomeCTA() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build a Resilient Future for Your Business?
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-primary-foreground/80 mb-8">
          A strategic conversation today can redefine your tomorrow. Let's discuss how our expertise can align with your vision.
        </p>
        <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/contact">Initiate a Strategic Consultation</Link>
        </Button>
      </div>
    </section>
  );
}
