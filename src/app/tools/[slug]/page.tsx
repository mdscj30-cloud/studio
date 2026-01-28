
import { notFound } from 'next/navigation';
import { TOOLS_DATA } from '@/lib/tools-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import BurnRateCalculator from '@/components/tools/BurnRateCalculator';
import SaaSCalculator from '@/components/tools/SaaSCalculator';
import DueDiligenceChecklist from '@/components/tools/DueDiligenceChecklist';
import GstCalculator from '@/components/tools/GstCalculator';
import EsopCalculator from '@/components/tools/EsopCalculator';
import BreakevenCalculator from '@/components/tools/BreakevenCalculator';
import WorkingCapitalCalculator from '@/components/tools/WorkingCapitalCalculator';
import CompoundInterestCalculator from '@/components/tools/CompoundInterestCalculator';
import { RequestConsultation } from '@/components/layout/PartnerWithUs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return TOOLS_DATA.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const tool = TOOLS_DATA.find((t) => t.slug === params.slug);

  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: `${tool.title} | Nexa Consultancy`,
    description: tool.description,
  };
}

const componentMap: Record<string, React.ComponentType> = {
    'BurnRateCalculator': BurnRateCalculator,
    'SaaSCalculator': SaaSCalculator,
    'DueDiligenceChecklist': DueDiligenceChecklist,
    'GstCalculator': GstCalculator,
    'EsopCalculator': EsopCalculator,
    'BreakevenCalculator': BreakevenCalculator,
    'WorkingCapitalCalculator': WorkingCapitalCalculator,
    'CompoundInterestCalculator': CompoundInterestCalculator
}

export default function ToolPage({ params }: Props) {
  const tool = TOOLS_DATA.find((t) => t.slug === params.slug);

  if (!tool) {
    notFound();
  }

  const ToolComponent = componentMap[tool.component];
  const Icon = tool.Icon;
  const otherTools = TOOLS_DATA.filter(t => t.slug !== tool.slug);

  return (
    <>
      <section className="-mx-container-padding bg-muted/50 py-12">
        <div className="container mx-auto">
          <Button asChild variant="link" className="p-0 mb-8">
            <Link href="/tools">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Tools
            </Link>
          </Button>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary/10 p-3 rounded-full w-fit">
              <Icon className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">{tool.title}</h1>
          </div>
           <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">{tool.description}</p>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              {ToolComponent ? <ToolComponent /> : <p>Tool not found.</p>}
              
              {tool.explanation && (
                  <div className="mt-16">
                      <div
                          className="prose lg:prose-lg max-w-none"
                          dangerouslySetInnerHTML={{ __html: tool.explanation }}
                      />
                  </div>
              )}
            </div>
            <aside className="md:col-span-1">
                 <div className="sticky top-24 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Other Tools</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {otherTools.map(otherTool => {
                                    const OtherIcon = otherTool.Icon
                                    return (
                                        <li key={otherTool.slug}>
                                            <Link href={`/tools/${otherTool.slug}`} className="group flex items-start gap-3">
                                                <div className="bg-primary/10 p-2 rounded-lg mt-1 group-hover:bg-accent/10 transition-colors">
                                                  <OtherIcon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                                                </div>
                                                <div>
                                                  <p className="font-semibold text-primary group-hover:text-accent transition-colors">{otherTool.title}</p>
                                                  <p className="text-sm text-muted-foreground">{otherTool.description}</p>
                                                </div>
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
