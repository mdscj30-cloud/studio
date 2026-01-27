
import { notFound } from 'next/navigation';
import { STAGE_PROBLEM_PAGES, StageProblemPage } from '@/lib/startup-stage-data';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import { ALL_GLOSSARY_TERMS } from '@/lib/glossary-data';
import { Button } from '@/components/ui/button';
import { RequestConsultation } from '@/components/layout/PartnerWithUs';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return STAGE_PROBLEM_PAGES.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const page = STAGE_PROBLEM_PAGES.find((p) => p.slug === params.slug);

  if (!page) {
    return {
      title: 'Guide Not Found',
    };
  }

  return {
    title: page.title,
    description: page.description,
  };
}

// Dummy content generator for now
const getProblemContent = (stage: StageProblemPage['stage'], problem: StageProblemPage['problem']) => {
    switch (problem.id) {
        case 'compliance':
            return `For ${stage.name.toLowerCase()}, the immediate challenge is setting up the correct legal and tax structure. Founders are often focused on building their product and can easily overlook critical first steps like company incorporation, GST registration, and setting up payroll. Making mistakes here can lead to penalties and complex cleanup work later on, wasting precious time and money.`;
        case 'fundraising-prep':
            return `When you're a ${stage.name.toLowerCase()}, your primary goal is to turn an idea into a compelling story for investors. You need more than just a good idea; you need a professional pitch deck and a believable financial model. Many founders struggle to quantify their vision, making it difficult to convince investors of the potential return.`;
        case 'burn-rate-management':
            return `${stage.name} run on a limited amount of capital. Every rupee counts. Without a clear understanding of your monthly burn rate and runway, you risk running out of cash unexpectedly. Managing expenses and forecasting cash flow is not just an accounting task—it's a survival skill.`;
        default:
            return 'Content coming soon.';
    }
}

const getSolutionContent = (stage: StageProblemPage['stage'], problem: StageProblemPage['problem']) => {
     switch (problem.id) {
        case 'compliance':
            return `Nexa Consultancy provides an all-in-one 'Business Setup' package designed for ${stage.name.toLowerCase()}. We handle your company incorporation, PAN/TAN, GST registration, and initial compliance setup, ensuring you start on a solid legal foundation from day one, allowing you to focus completely on your product.`;
        case 'fundraising-prep':
            return `Our 'Pitch Deck and Financial Modelling' service is tailored for ${stage.name.toLowerCase()}. We work with you to build a powerful narrative backed by a solid, driver-based financial model. We help you translate your vision into a language that investors understand and trust, dramatically increasing your chances of securing that crucial first check.`;
        case 'burn-rate-management':
            return `Our 'Virtual CFO' services for ${stage.name.toLowerCase()} provide you with essential financial discipline. We set up your bookkeeping, create a clear monthly burn report, and provide you with a runway forecast. This gives you the clarity needed to manage your cash effectively and make informed decisions about your spending.`;
        default:
            return 'Content coming soon.';
    }
}


export default function StartupGuidePage({ params }: Props) {
  const { slug } = params;
  const page = STAGE_PROBLEM_PAGES.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }
  
  const Icon = page.problem.Icon;
  const problemContent = getProblemContent(page.stage, page.problem);
  const solutionContent = getSolutionContent(page.stage, page.problem);


  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-foreground/10 p-3 rounded-full">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">{page.h1}</h1>
            </div>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl">{page.description}</p>
             <Button asChild variant="link" className="text-primary-foreground/80 hover:text-white transition-colors p-0 mt-6">
                <Link href="/finance-for-startups-india">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Startup Finance Guide
                </Link>
            </Button>
        </div>
      </section>

      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 py-16 md:py-24">
            <div className="md:col-span-2">
                <div className="prose lg:prose-lg max-w-none">
                    <h2 className="text-3xl font-bold text-primary mb-4">The Challenge: {page.problem.name} for {page.stage.name}</h2>
                    <p>{problemContent}</p>
                    
                    <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Our Solution: Targeted Support</h3>
                    <p>{solutionContent}</p>

                </div>
            </div>
            <aside className="md:col-span-1">
                 <div className="sticky top-24 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Related Services</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {page.problem.relatedServiceSlugs.map(slug => {
                                    const service = SERVICES.find(s => s.slug === slug);
                                    if (!service) return null;
                                    return (
                                        <li key={slug}>
                                            <Link href={`/services/${slug}`} className="font-semibold text-primary hover:text-accent transition-colors flex items-center gap-2">
                                                <service.icon className="w-5 h-5 text-accent" />
                                                {service.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>Related Glossary Terms</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <ul className="space-y-3">
                                {page.problem.relatedGlossarySlugs.map(slug => {
                                    const term = ALL_GLOSSARY_TERMS.find(t => t.slug === slug);
                                    if (!term) return null;
                                    return (
                                        <li key={slug}>
                                            <Link href={`/startup-finance-glossary/${slug}`} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                                                {term.term}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </CardContent>
                    </Card>
                 </div>
            </aside>
        </div>
      </div>

       <RequestConsultation />
    </>
  );
}
