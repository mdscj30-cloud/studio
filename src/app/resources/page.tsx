import { Newspaper, Briefcase, Library, ArrowRight, NotebookPen, Wrench } from 'lucide-react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

export const metadata = {
  title: 'Resources | Nexa Consultancy',
  description: 'Explore our comprehensive resources for startups, including expert blog articles, in-depth case studies, and a complete financial glossary.',
};

const resourceLinks = [
    {
        title: 'Nexa Insights Blog',
        description: 'Our expert analysis on startup finance, strategy, and sustainable growth.',
        href: '/blog',
        icon: Newspaper,
    },
    {
        title: 'Success Stories',
        description: 'Discover how we\'ve partnered with ambitious founders to navigate challenges and accelerate growth.',
        href: '/case-studies',
        icon: Briefcase,
    },
    {
        title: 'Startup Finance Glossary',
        description: 'Your complete guide to the language of Indian startups, with over 600 terms defined.',
        href: '/startup-finance-glossary',
        icon: Library,
    },
    {
        title: 'Tools & Calculators',
        description: 'Free financial calculators for burn rate, runway, LTV:CAC, and more to help you make data-driven decisions.',
        href: '/tools',
        icon: Wrench,
    },
    {
        title: 'Templates & Checklists',
        description: 'Downloadable checklists and templates for fundraising, compliance, and financial planning.',
        href: '/resources/templates',
        icon: NotebookPen,
    },
]

export default function ResourcesPage() {
  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Resources Hub</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Your central knowledge base for navigating the startup journey. Explore our expert insights, success stories, and financial glossary.
          </p>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceLinks.map((link) => {
                const Icon = link.icon;
                return (
                    <Link href={link.href} key={link.title} className="group">
                        <Card className="h-full flex flex-col transition-all duration-300 border-2 border-transparent group-hover:border-accent group-hover:shadow-xl group-hover:scale-105">
                            <CardHeader>
                                <div className="mb-4">
                                    <div className="w-fit p-3 bg-primary/10 rounded-full text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                </div>
                                <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors">{link.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardDescription>{link.description}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <div className="text-sm font-semibold text-accent flex items-center">
                                    Explore Section <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </CardFooter>
                        </Card>
                    </Link>
                );
            })}
        </div>
      </section>
    </>
  );
}
