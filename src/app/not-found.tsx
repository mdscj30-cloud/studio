import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, BookOpen, Wrench, Users } from 'lucide-react';

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist. Find what you need from our services, resources, and tools for Indian startups.',
  robots: { index: false, follow: true },
};

const helpfulLinks = [
  {
    icon: ArrowRight,
    label: 'Our Services',
    description: 'Finance, tax & compliance for startups',
    href: '/services',
  },
  {
    icon: Wrench,
    label: 'Free Tools',
    description: 'Burn rate, GST, ESOP calculators',
    href: '/tools',
  },
  {
    icon: BookOpen,
    label: 'Resources',
    description: 'Blog articles, case studies, templates',
    href: '/resources',
  },
  {
    icon: Users,
    label: 'Who We Help',
    description: 'SaaS, e-commerce, FinTech, and more',
    href: '/who-we-help',
  },
];

export default function NotFound() {
  return (
    <section className="container flex flex-col items-center justify-center text-center py-24 md:py-40 min-h-[60vh]">
      <p className="text-6xl font-bold text-primary/20 mb-4">404</p>
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        Page Not Found
      </h1>
      <p className="text-lg text-muted-foreground max-w-xl mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Here are some helpful starting points:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mb-10">
        {helpfulLinks.map(({ icon: Icon, label, description, href }) => (
          <Link
            key={href}
            href={href}
            className="flex items-start gap-3 p-4 rounded-lg border bg-card hover:border-accent hover:shadow-md transition-all text-left"
          >
            <Icon className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-primary">{label}</p>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </Link>
        ))}
      </div>

      <Button asChild variant="accent" size="lg">
        <Link href="/">
          Back to Home <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </section>
  );
}
