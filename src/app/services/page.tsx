import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: 'Our Services | N consulting',
  description: 'A one-stop shop for all your financial operations, so you can use your time more efficiently, make smarter decisions, and hit your goals.',
};

const serviceSections = [
    {
        title: "Virtual CFO & Finance Operations",
        description: "Clarity on numbers. Confidence in decisions.",
        details: "We act as your extended finance leadership—managing daily finance operations while helping you plan for growth.",
        handles: [
            "End-to-end accounting & monthly close",
            "P&L, Balance Sheet & Cash Flow reporting",
            "Budgeting, forecasting & variance analysis",
            "Burn rate, runway & margin tracking",
            "Founder-friendly dashboards & insights",
        ],
        idealFor: "Startups, D2C brands, manufacturing SMEs"
    },
    {
        title: "GST & Indirect Tax Management",
        description: "Compliant by default. Optimized by design.",
        details: "From filings to reconciliations, we manage your GST compliance seamlessly—so there are no last-minute scrambles or surprise notices.",
        handles: [
            "GSTR-1 & GSTR-3B filings (Monthly / Quarterly)",
            "Sales, purchase & ITC reconciliations",
            "GST liability computation & challans",
            "ITC optimization & mismatch resolution",
            "Ongoing GST compliance monitoring",
        ]
    },
    {
        title: "Income Tax & TDS Compliance",
        description: "No missed deadlines. No unnecessary tax leakage.",
        details: "We ensure your direct tax obligations are handled accurately and on time—while keeping cash planning in mind.",
        handles: [
            "Monthly TDS calculations & challans",
            "Quarterly TDS returns (24Q, 26Q)",
            "Form 16 / 16A issuance",
            "Advance tax planning & tracking",
            "Annual income tax return filing",
        ]
    },
    {
        title: "Company (ROC) & Statutory Compliance",
        description: "Strong governance. Zero penalties.",
        details: "We manage routine ROC filings and coordinate closely with Company Secretaries to ensure your entity stays compliant year-round.",
        handles: [
            "Annual ROC filings (AOC-4, MGT-7 / 7A)",
            "DIR-3 KYC",
            "Event-based filings support",
            "Compliance calendars & reminders",
            "Documentation & approvals coordination",
        ]
    },
    {
        title: "Payroll & Labor Compliance",
        description: "Reliable payroll. Fully compliant workforce.",
        details: "We ensure payroll runs smoothly while statutory obligations are met accurately.",
        handles: [
            "Payroll processing coordination",
            "PF / ESI compliance support",
            "Salary structure advisory",
            "Payroll reconciliations",
        ]
    },
    {
        title: "Cash Flow & Working Capital Advisory",
        description: "Always know where your cash is going.",
        details: "Especially critical for startups and manufacturing units with working capital cycles.",
        handles: [
            "13-week rolling cash flow forecasts",
            "Vendor payment planning",
            "Tax outflow visibility",
            "Scenario & stress testing",
        ]
    },
    {
        title: "Investor, Lender & Board Reporting",
        description: "Investor-ready, every month.",
        details: "We help founders communicate financial performance clearly and confidently to investors, banks, and boards.",
        handles: [
            "Monthly investor updates",
            "Board-ready financial slides",
            "KPI storytelling & narratives",
            "Data room financial support",
        ]
    },
    {
        title: "Compliance Cleanup & Financial Health Check",
        description: "Fix the past. Build forward with confidence.",
        details: "For businesses with delayed filings or messy books—we bring everything back on track.",
        handles: [
            "Accounting clean-ups",
            "Past GST & tax filing reviews",
            "Compliance gap analysis",
            "Penalty & risk exposure assessment",
        ]
    }
];

const howItWorks = [
    { title: "Discovery & compliance assessment" },
    { title: "Scope definition & retainer setup" },
    { title: "Finance & compliance onboarding" },
    { title: "Monthly execution & filings" },
    { title: "Quarterly review & planning" },
    { title: "Scale, optimize, or continue" },
];

const whyChooseUs = [
    "Built for startups & manufacturing businesses",
    "Fixed monthly retainers—no surprises",
    "Clear ownership & accountability",
    "Proactive compliance tracking",
    "Clear communication, no jargon",
];

const addOnServices = [
    "Fundraising & bank-ready financial models",
    "Tax audit & assessment support",
    "ESOP & equity accounting",
    "Multi-location GST advisory",
];

export default function ServicesPage() {
  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold">Finance, Tax & Compliance — Handled End-to-End</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            So You Can Focus on Building & Scaling. We partner with founders and operators to take complete ownership of finance, tax, and compliance—bringing structure, visibility, and peace of mind without adding internal overhead.
          </p>
          <p className="mt-4 text-base max-w-3xl mx-auto text-primary-foreground/60">
            Whether you’re an early-stage startup or a growing manufacturing business, we ensure your numbers are clean, compliant, and decision-ready.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container space-y-16">
            <div className="grid md:grid-cols-2 gap-8">
                {serviceSections.map(service => (
                    <Card key={service.title} className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                            <CardDescription className="!text-lg !text-accent font-semibold">{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                            <p className="text-muted-foreground mb-4">{service.details}</p>
                            <p className="font-semibold text-foreground mb-2">What we handle</p>
                            <ul className="space-y-2 text-sm text-muted-foreground flex-grow">
                                {service.handles.map(item => (
                                    <li key={item} className="flex items-start">
                                        <CheckCircle className="w-4 h-4 text-accent mr-3 mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                             {service.idealFor && (
                                <div className="mt-4 pt-4 border-t">
                                    <p className="text-xs text-muted-foreground"><span className="font-semibold text-primary">Ideal for:</span> {service.idealFor}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="bg-muted/50 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-primary mb-6 text-center">How We Work</h2>
                     <p className="text-center text-muted-foreground mb-8">Structured. Transparent. Founder-friendly.</p>
                    <ol className="relative border-l border-border space-y-8">
                        {howItWorks.map((step, index) => (
                           <li key={step.title} className="ml-6">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-accent rounded-full -left-4 text-accent-foreground font-bold">
                                    {index + 1}
                                </span>
                                <h3 className="font-semibold text-foreground">{step.title}</h3>
                            </li>
                        ))}
                    </ol>
                </div>
                 <div className="bg-card p-8 rounded-lg border">
                     <h2 className="text-3xl font-bold text-primary mb-6 text-center">Why Founders Choose Us</h2>
                    <ul className="space-y-4 mb-8">
                        {whyChooseUs.map(item => (
                            <li key={item} className="flex items-center text-lg">
                                <CheckCircle className="w-6 h-6 text-accent mr-4 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                     <h3 className="text-2xl font-bold text-primary mb-4 text-center">Optional Add-On Services</h3>
                     <ul className="space-y-3 text-center text-muted-foreground">
                        {addOnServices.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                     </ul>
                </div>
            </div>

        </div>
      </section>

       <section className="-mx-container-padding bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto text-center">
             <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Let’s Simplify Finance & Compliance</h2>
             <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">You focus on growth. We’ll handle the rest.</p>
             <Button size="lg" asChild variant="accent">
                <Link href="/contact">Book a Free Discovery Call <ArrowRight className="ml-2 h-4 w-4" /></Link>
             </Button>
        </div>
      </section>
    </>
  );
}
