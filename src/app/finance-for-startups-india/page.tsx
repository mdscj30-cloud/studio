
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const metadata = {
  title: 'Finance for Startups in India – End to End | Nexa Consultancy',
  description: 'Your complete guide to startup finance in India. From accounting and GST to fundraising readiness, we cover it all.',
};

const pillarSections = [
  {
    id: 'accounting-for-startups',
    title: 'Accounting for Startups',
    description: 'Accurate books, on time, every time. We establish a rock-solid financial foundation for your startup, ensuring your books are clean, compliant, and decision-ready from day one.',
    serviceSlug: 'bookkeeping',
    features: [
      'End-to-end accounting & monthly close',
      'Daily transaction recording & reconciliation',
      'Accounts payable & receivable management',
      'Financial statement preparation (P&L, Balance Sheet)',
    ],
  },
  {
    id: 'virtual-cfo',
    title: 'Virtual CFO',
    description: 'Clarity on numbers, confidence in decisions. We act as your strategic finance partner, helping you plan for growth, manage cash flow, and handle investor reporting.',
    serviceSlug: 'virtual-cfo',
    features: [
        'Budgeting, forecasting & variance analysis',
        '13-week rolling cash flow forecasts',
        'KPI tracking and MIS dashboard',
        'Monthly investor updates & board-ready slides',
    ],
  },
  {
    id: 'gst-for-startups',
    title: 'GST for Startups',
    description: 'Compliant by default, optimized by design. We manage your GST compliance seamlessly—from filings to reconciliations—so there are no last-minute scrambles or surprise notices.',
    serviceSlug: 'regulatory-compliances',
    features: [
        'GSTR-1 & GSTR-3B filings (Monthly / QRMP)',
        'Sales, purchase & ITC reconciliations',
        'ITC optimization & mismatch resolution',
        'E-invoicing and E-way bill compliance',
    ],
  },
  {
    id: 'income-tax-tds',
    title: 'Income Tax & TDS',
    description: 'No missed deadlines, no unnecessary tax leakage. We ensure your direct tax obligations are handled accurately and on time, while keeping cash planning in mind.',
    serviceSlug: 'regulatory-compliances',
    features: [
        'Monthly TDS calculations & challan payments',
        'Quarterly TDS returns (24Q, 26Q)',
        'Advance tax planning & tracking',
        'Annual income tax return filing for company',
    ],
  },
  {
    id: 'roc-compliance',
    title: 'ROC & Compliance',
    description: 'Strong governance, zero penalties. We manage routine ROC filings, clean up past compliance gaps, and ensure your entity stays compliant year-round.',
    serviceSlug: 'corporate-law',
    features: [
        'Annual ROC filings (AOC-4, MGT-7)',
        'DIR-3 KYC & event-based filings',
        'Maintenance of statutory registers',
        'Compliance calendars & reminders',
    ],
  },
  {
    id: 'fundraising-readiness',
    title: 'Fundraising Readiness',
    description: 'From pitch deck to term sheet. We prepare you for every stage of the fundraising journey, ensuring you approach investors with confidence and a compelling story.',
    serviceSlug: 'fundraising',
    features: [
        'Investor-grade financial modeling',
        'Crafting a compelling pitch deck narrative',
        'Cap table management and scenario analysis',
        'Due diligence data room preparation',
    ],
  },
];


export default function PillarPage() {
  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold">Finance for Startups in India – End to End</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            A comprehensive hub for founders navigating the financial, legal, and compliance landscape in India.
          </p>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-4 gap-8">
            <aside className="md:col-span-1 md:sticky top-24 self-start">
                <h2 className="text-xl font-semibold text-primary mb-4">On This Page</h2>
                <ul className="space-y-2">
                    {pillarSections.map(section => (
                        <li key={section.id}>
                            <Link href={`#${section.id}`} className="text-muted-foreground hover:text-accent transition-colors">
                                {section.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>

            <main className="md:col-span-3 space-y-16">
                 {pillarSections.map(section => (
                    <section key={section.id} id={section.id} className="scroll-mt-20">
                        <Card className="border-accent bg-muted/20">
                            <CardHeader>
                                <CardTitle className="text-3xl text-primary">{section.title}</CardTitle>
                                <CardDescription className="text-lg !text-foreground/80 pt-2">{section.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 my-6">
                                    {section.features.map(feature => (
                                        <li key={feature} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button asChild variant="link" className="p-0 h-auto text-accent">
                                    <Link href={`/services/${section.serviceSlug}`}>
                                        Learn more about {section.title} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </section>
                ))}
            </main>
        </div>
      </div>
    </>
  );
}
