
import { CaseStudiesSection } from '@/components/resources/CaseStudiesSection';
import { BookOpen, Library, HandCoins, Rocket, ShieldCheck, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { BlogSection } from '@/components/resources/BlogSection';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const metadata = {
  title: 'Resources | Nexa Consultancy',
  description: 'Explore our insights, case studies, and articles on startup strategy, finance, and growth.',
};

const topicClusters = [
    {
        title: 'Startup Fundraising',
        description: 'Navigate the complex world of raising capital, from pitch decks to term sheets.',
        icon: HandCoins,
        href: '/resources/blog?category=Fundraising'
    },
    {
        title: 'SaaS Strategy',
        description: 'Master the metrics and strategies to build a high-growth SaaS business.',
        icon: Rocket,
        href: '/resources/blog?category=SaaS'
    },
    {
        title: 'Compliance & Due Diligence',
        description: 'Stay ahead of regulations and prepare for investor scrutiny with our expert guides.',
        icon: ShieldCheck,
        href: '/resources/blog?category=Due%20Diligence'
    },
    {
        title: 'Startup Finance',
        description: 'From cap tables to cash flow, get the financial essentials for your startup.',
        icon: DollarSign,
        href: '/resources/blog?category=Startup%20Finance'
    }
];

export default function ResourcesPage() {
  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24 text-center">
          <div className="inline-block bg-primary-foreground/10 p-4 rounded-full mb-4">
            <BookOpen className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Resources</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Insights, strategies, and success stories to help your startup thrive.
          </p>
        </div>
      </section>

      <div className="container py-16 md:py-24 space-y-24">
        <section id="glossary-link" className="bg-muted -mx-container-padding px-container-padding py-16">
            <div className="text-center">
                <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                    <Library className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Startup & Finance Glossary</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Your comprehensive guide to financial, tax, and startup terminology.
                </p>
                <Link href="/startup-finance-glossary" className="mt-6 inline-block bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold hover:bg-accent/90 transition-colors">
                    Explore the Glossary
                </Link>
            </div>
        </section>

        <section id="topic-clusters">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Explore by Topic</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Dive deep into subjects that matter most for your startup's success.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {topicClusters.map((cluster) => {
                    const Icon = cluster.icon;
                    return (
                        <Link href={cluster.href} key={cluster.title} className="group">
                            <Card className="h-full flex flex-col transition-all duration-300 border group-hover:border-accent group-hover:shadow-xl group-hover:scale-105">
                                <CardHeader className="flex-row items-center gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full">
                                        <Icon className="w-8 h-8 text-primary"/>
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{cluster.title}</CardTitle>
                                        <CardDescription className="pt-1">{cluster.description}</CardDescription>
                                    </div>
                                </CardHeader>
                            </Card>
                        </Link>
                    );
                })}
            </div>
        </section>

        <BlogSection />
        <CaseStudiesSection />
      </div>
    </>
  );
}
