import { SERVICES } from "@/lib/constants";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: 'Our Services | N consulting',
  description: 'A one-stop shop for all your financial operations, so you can use your time more efficiently, make smarter decisions, and hit your goals.',
};

const VIRTUAL_CFO_FEATURES = [
    'Pitch deck and Financial Modelling',
    'MIS and KPI Tracking',
    'Budgeting and Forecasting',
    'Business Insights',
    'Investor network',
    'Due Diligence support'
];

const BOOKKEEPING_FEATURES = [
    'Monthly Bookkeeping',
    'Vendor Payments',
    'Payroll management',
    'Receivables management',
    'Secretarial compliances',
    'Tax compliances',
];


export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 xl:-mx-32 2xl:-mx-40 -ml-32">
        <div className="container text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold">One Stop Solution</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            A one-stop shop for all your financial operations, so you can use your time more efficiently, make smarter decisions, and hit your goals with a full suite of financial services.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="">
            {/* Virtual CFO & Bookkeeping */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <Card className="bg-muted/30 hover:scale-105 transition-transform duration-300">
                    <CardHeader>
                        <CardTitle className="text-3xl text-primary">Virtual CFO</CardTitle>
                        <CardDescription className="text-lg text-muted-foreground">Need help with Pitch deck, MIS, Budgeting, KPI tracking, or fundraising? Our CFO’s deploy simplified dashboards, deliver business insights, network with Investors, and help you close timely due diligence, saving significant founder's business time.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3 mb-6">
                            {VIRTUAL_CFO_FEATURES.map(item => (
                                <li key={item} className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-between items-center bg-primary/10 p-4 rounded-lg">
                            <div>
                                <p className="text-3xl font-bold text-primary">INR 50 cr+</p>
                                <p className="text-sm text-primary/80">Capital Raised</p>
                            </div>
                             <div>
                                <p className="text-3xl font-bold text-primary">25+</p>
                                <p className="text-sm text-primary/80">Due diligence completed</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-muted/30 hover:scale-105 transition-transform duration-300">
                    <CardHeader>
                        <CardTitle className="text-3xl text-primary">Bookkeeping</CardTitle>
                        <CardDescription className="text-lg text-muted-foreground">From early stage to growth stage companies, our tailored bookkeeping packages are suitable for all. Whether you are a team of 2 or 2000, our bookkeeping experts can manage your complex accounts and complete timely compliances.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3 mb-6">
                            {BOOKKEEPING_FEATURES.map(item => (
                                <li key={item} className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                         <div className="flex justify-between items-center bg-primary/10 p-4 rounded-lg">
                            <div>
                                <p className="text-3xl font-bold text-primary">INR 250 cr+</p>
                                <p className="text-sm text-primary/80">Annual Revenue managed</p>
                            </div>
                             <div>
                                <p className="text-3xl font-bold text-primary">8+</p>
                                <p className="text-sm text-primary/80">VC backed companies</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>


            {/* Other Services */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.filter(s => !['Virtual CFO', 'Bookkeeping'].includes(s.title)).map((service) => {
                const Icon = service.icon;
                return (
                  <Link href={`/services/${service.slug}`} key={service.slug} className="group">
                    <Card className="flex flex-col justify-between h-full hover:shadow-lg transition-all duration-300 border group-hover:scale-105">
                      <div>
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <div className="bg-accent/10 p-3 rounded-full">
                              <Icon className="w-6 h-6 text-accent" />
                            </div>
                            <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                      </div>
                       <div className="p-6 pt-0 mt-auto">
                          <div className="text-sm font-semibold text-primary group-hover:text-accent flex items-center">
                            Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
        </div>
      </section>
    </>
  );
}
