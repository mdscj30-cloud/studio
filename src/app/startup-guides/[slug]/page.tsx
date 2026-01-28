
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

const contentMap = {
    'compliance': {
        'pre-seed': {
            problem: "At the pre-seed stage, your focus is entirely on your idea and product. Compliance feels like a distraction. However, choosing the wrong legal structure (e.g., a proprietorship instead of a Pvt Ltd), failing to get basic registrations like PAN/TAN, or neglecting a solid founders' agreement can create foundational cracks that are incredibly expensive and difficult to fix later. These early missteps can scare away your very first angel investors.",
            solution: "Our 'Business Setup' service is designed as a compliance 'launchpad' for pre-seed startups. We guide you in choosing the right legal entity (almost always a Private Limited Company if you plan to raise funds), handle the entire incorporation process, and secure your essential registrations like PAN, TAN, and Startup India (DPIIT). We also help you draft a robust founders' agreement with proper vesting clauses, ensuring your cap table is clean from day one."
        },
        'seed': {
            problem: "You've raised your seed round and hired your first employees. Congratulations! Your compliance obligations have now multiplied. You're now responsible for monthly payroll compliance (PF, ESI, TDS), professional tax, and adhering to various labor laws. Additionally, your investors expect formal board meetings with proper minutes. Trying to manage this yourself on spreadsheets is no longer viable and exposes you to significant legal and financial risk.",
            solution: "We act as your outsourced compliance department. Our team handles your entire monthly payroll and TDS compliance process. We manage your secretarial requirements, ensuring board meetings are correctly documented and all ROC filings are made on time. By professionalizing your compliance function post-seed, we help you build a solid, scalable operation that gives your investors confidence and lets you focus on achieving product-market fit."
        },
        'series-a': {
            problem: "At the Series A stage, compliance becomes even more complex. You are likely operating at a scale where a tax audit is mandatory. If you have international customers or use foreign software, you face complex regulations around FEMA and TDS on foreign payments. Your financial statements must be prepared for a higher level of scrutiny, and any non-compliance discovered during Series B due diligence can be a deal-breaker.",
            solution: "Our services scale with you. We manage the entire statutory and tax audit process, liaising with auditors on your behalf. We provide expert guidance on complex issues like transfer pricing and TDS on foreign remittances. We ensure your financials are always 'due diligence ready,' building a robust compliance framework that can support your journey to becoming a market leader."
        }
    },
    'fundraising-prep': {
        'pre-seed': {
            problem: "You have a great idea, but you're struggling to translate it into a narrative that investors will understand and get excited about. Your first pitch deck looks amateur, and building a financial model feels like pure guesswork. You know you need to show more than just a big idea to get that first angel check.",
            solution: "Our 'Pitch Deck & Financial Modelling' service is tailored for pre-seed founders. We don't just use a template; we work with you to craft a compelling story that highlights your unique insight into the problem. We then build a simple, assumption-driven financial model that shows how you'll use the initial capital to validate your key hypotheses, demonstrating to investors that you are a thoughtful and strategic founder."
        },
        'seed': {
            problem: "You've got some early traction and are preparing to raise a larger seed round from VCs. The bar is higher now. Investors expect to see a clean data room, a detailed financial model based on real metrics, and a deep understanding of your unit economics (LTV:CAC). Presenting a messy or incomplete picture is the fastest way to get a 'no'.",
            solution: "We prepare you for the rigor of a VC fundraise. Our team helps you assemble a professional virtual data room with all the required legal and financial documents. We build an investor-grade financial model based on your actual traction and help you calculate and present your key SaaS or D2C metrics in a compelling way. We ensure you enter every investor meeting with confidence and a data-backed story."
        },
        'series-a': {
            problem: "You're getting ready for your Series A. The focus now shifts from 'can you build it?' to 'can you scale it efficiently?'. Investors will perform deep diligence on your cohort analysis, net dollar retention, and the capital efficiency of your growth engine. You need to prove you have a repeatable, scalable go-to-market machine, and your financial story needs to reflect that.",
            solution: "Our Virtual CFO service is your strategic partner for your Series A raise. We conduct deep dives into your unit economics, prepare detailed cohort analyses, and build sophisticated financial models that demonstrate the scalability of your business. We help you craft the financial narrative for your Series A deck and manage the entire, intense due diligence process, positioning you for a successful fundraise at a strong valuation."
        }
    },
    'burn-rate-management': {
        'pre-seed': {
            problem: "You've put your own savings or a small friends-and-family round into the business. Every rupee is precious. You're spending money on building the product but have little to no revenue. Without a clear budget and cash flow forecast, you risk running out of money before you've even had a chance to validate your idea.",
            solution: "We help you instill financial discipline from day one. We build a simple but powerful cash flow forecast that tracks every expense and helps you manage your limited runway. We advise on key early decisions, such as how much to pay yourself as a founder and how to prioritize spending, ensuring you get the most out of every rupee."
        },
        'seed': {
            problem: "You have cash in the bank from your seed round, and the temptation is to spend it quickly to show growth. You've hired a team, and your monthly burn rate is now significant. Without rigorous tracking and a formal budget, your 18-month runway can evaporate in 12 months, putting you in a desperate position for your next fundraise.",
            solution: "We implement a formal budgeting and reporting process. We work with you to create an annual budget and then track your performance against it with a monthly 'Budget vs. Actuals' analysis. Our runway dashboards and regular cash flow reviews give you a clear, forward-looking view of your burn, enabling you to make data-driven decisions about hiring and spending."
        },
        'series-a': {
            problem: "At Series A, your team is growing rapidly with multiple departments. It's no longer possible for the founder to approve every expense. You need to empower department heads with their own budgets, but you also need to maintain overall financial control. Without a system for this, spending can spiral out of control, and capital efficiency can plummet.",
            solution: "We help you implement a scalable system for financial planning and analysis (FP&A). We work with you to create departmental budgets and hold monthly review meetings with department heads to ensure accountability. Our analysis helps you understand the ROI of your spending, particularly on sales and marketing, ensuring you are scaling efficiently and maintaining a healthy relationship between growth and burn."
        }
    }
};


export default function StartupGuidePage({ params }: Props) {
  const { slug } = params;
  const page = STAGE_PROBLEM_PAGES.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }
  
  const Icon = page.problem.Icon;
  // @ts-ignore
  const pageContent = contentMap[page.problem.id]?.[page.stage.id];
  const problemContent = pageContent?.problem || "Content coming soon.";
  const solutionContent = pageContent?.solution || "Content coming soon.";


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
