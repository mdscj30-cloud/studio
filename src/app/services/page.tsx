import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata = {
  title: "Our Services | N consulting",
  description:
    "A one-stop shop for all your financial operations, so you can use your time more efficiently, make smarter decisions, and hit your goals.",
};

const serviceSections = [
  {
    id: "virtual-cfo",
    title: "Virtual CFO & Finance Ops",
    description: "Clarity on numbers. Confidence in decisions.",
    details:
      "We act as your extended finance leadership—managing daily finance operations while helping you plan for growth.",
    handles: [
      "End-to-end accounting & monthly close",
      "P&L, Balance Sheet & Cash Flow reporting",
      "Budgeting, forecasting & variance analysis",
      "Burn rate, runway & margin tracking",
      "Founder-friendly dashboards & insights",
    ],
    idealFor: "Startups, D2C brands, manufacturing SMEs",
  },
  {
    id: "gst",
    title: "GST & Indirect Tax",
    description: "Compliant by default. Optimized by design.",
    details:
      "From filings to reconciliations, we manage your GST compliance seamlessly—so there are no last-minute scrambles or surprise notices.",
    handles: [
      "GSTR-1 & GSTR-3B filings (Monthly / Quarterly)",
      "Sales, purchase & ITC reconciliations",
      "GST liability computation & challans",
      "ITC optimization & mismatch resolution",
      "Ongoing GST compliance monitoring",
    ],
  },
  {
    id: "income-tax",
    title: "Income Tax & TDS",
    description: "No missed deadlines. No unnecessary tax leakage.",
    details:
      "We ensure your direct tax obligations are handled accurately and on time—while keeping cash planning in mind.",
    handles: [
      "Monthly TDS calculations & challans",
      "Quarterly TDS returns (24Q, 26Q)",
      "Form 16 / 16A issuance",
      "Advance tax planning & tracking",
      "Annual income tax return filing",
    ],
  },
  {
    id: "roc",
    title: "ROC & Statutory",
    description: "Strong governance. Zero penalties.",
    details:
      "We manage routine ROC filings and coordinate closely with Company Secretaries to ensure your entity stays compliant year-round.",
    handles: [
      "Annual ROC filings (AOC-4, MGT-7 / 7A)",
      "DIR-3 KYC",
      "Event-based filings support",
      "Compliance calendars & reminders",
      "Documentation & approvals coordination",
    ],
  },
  {
    id: "payroll",
    title: "Payroll & Labor",
    description: "Reliable payroll. Fully compliant workforce.",
    details:
      "We ensure payroll runs smoothly while statutory obligations are met accurately.",
    handles: [
      "Payroll processing coordination",
      "PF / ESI compliance support",
      "Salary structure advisory",
      "Payroll reconciliations",
    ],
  },
  {
    id: "cash-flow",
    title: "Cash Flow Advisory",
    description: "Always know where your cash is going.",
    details:
      "Especially critical for startups and manufacturing units with working capital cycles.",
    handles: [
      "13-week rolling cash flow forecasts",
      "Vendor payment planning",
      "Tax outflow visibility",
      "Scenario & stress testing",
    ],
  },
  {
    id: "reporting",
    title: "Investor Reporting",
    description: "Investor-ready, every month.",
    details:
      "We help founders communicate financial performance clearly and confidently to investors, banks, and boards.",
    handles: [
      "Monthly investor updates",
      "Board-ready financial slides",
      "KPI storytelling & narratives",
      "Data room financial support",
    ],
  },
  {
    id: "cleanup",
    title: "Compliance Cleanup",
    description: "Fix the past. Build forward with confidence.",
    details:
      "For businesses with delayed filings or messy books—we bring everything back on track.",
    handles: [
      "Accounting clean-ups",
      "Past GST & tax filing reviews",
      "Compliance gap analysis",
      "Penalty & risk exposure assessment",
    ],
  },
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
          <h1 className="text-4xl md:text-5xl font-bold">
            Finance, Tax & Compliance — Handled End-to-End
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            So You Can Focus on Building & Scaling. We partner with founders and
            operators to take complete ownership of finance, tax, and
            compliance.
          </p>
          <p className="mt-4 text-base max-w-3xl mx-auto text-primary-foreground/60">
            Whether you’re an early-stage startup or a growing manufacturing
            business, we ensure your numbers are clean, compliant, and
            decision-ready.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <Tabs defaultValue={serviceSections[0].id} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 h-auto mb-12">
              {serviceSections.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="text-xs sm:text-sm"
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {serviceSections.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <Card className="border-accent bg-muted/20">
                  <div className="grid md:grid-cols-2">
                    <div className="p-8">
                      <h2 className="text-2xl font-bold text-primary mb-2">
                        {service.title}
                      </h2>
                      <p className="text-lg font-semibold text-accent mb-4">
                        {service.description}
                      </p>
                      <p className="text-muted-foreground">
                        {service.details}
                      </p>
                      {service.idealFor && (
                        <div className="mt-4 pt-4 border-t">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-semibold text-primary">
                              Ideal for:
                            </span>{" "}
                            {service.idealFor}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="bg-muted/50 p-8 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
                      <h3 className="font-semibold text-foreground mb-4">
                        What we handle
                      </h3>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        {service.handles.map((item) => (
                          <li key={item} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-accent mr-3 mt-1 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-24 grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2 bg-muted/50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                How We Work
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Structured. Transparent. Founder-friendly.
              </p>
              <ol className="relative border-l border-border space-y-8">
                {howItWorks.map((step, index) => (
                  <li key={step.title} className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-accent rounded-full -left-4 text-accent-foreground font-bold">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-foreground pt-1.5">
                      {step.title}
                    </h3>
                  </li>
                ))}
              </ol>
            </div>
            <div className="md:col-span-3 bg-card p-8 rounded-lg border">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                Why Founders Choose Us
              </h2>
              <ul className="space-y-4 mb-8 grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-center text-lg">
                    <CheckCircle className="w-6 h-6 text-accent mr-4 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-8 border-t">
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                  Optional Add-On Services
                </h3>
                <ul className="space-y-3 text-center text-muted-foreground grid sm:grid-cols-2 gap-x-4 gap-y-2">
                  {addOnServices.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mx-container-padding bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Let’s Simplify Finance & Compliance
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            You focus on growth. We’ll handle the rest.
          </p>
          <Button size="lg" asChild variant="accent">
            <Link href="/contact">
              Book a Free Discovery Call{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
