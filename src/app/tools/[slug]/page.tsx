import { notFound } from 'next/navigation';
import { TOOLS_DATA } from '@/lib/tools-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import BurnRateCalculator from '@/components/tools/BurnRateCalculator';
import SaaSCalculator from '@/components/tools/SaaSCalculator';
import DueDiligenceChecklist from '@/components/tools/DueDiligenceChecklist';

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
}

export default function ToolPage({ params }: Props) {
  const tool = TOOLS_DATA.find((t) => t.slug === params.slug);

  if (!tool) {
    notFound();
  }

  const ToolComponent = componentMap[tool.component];
  const Icon = tool.Icon;

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
        {ToolComponent ? <ToolComponent /> : <p>Tool not found.</p>}
      </div>
      
       <section className="-mx-container-padding bg-muted/50 py-16 md:py-24 mt-16">
        <div className="container mx-auto text-center">
             <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Need More Than a Tool?</h2>
             <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">These calculators provide a great starting point. For in-depth strategic financial planning and analysis, partner with our expert Virtual CFOs.</p>
             <Button size="lg" asChild variant="accent">
                <Link href="/contact">Request a Consultation</Link>
             </Button>
        </div>
      </section>
    </>
  );
}
