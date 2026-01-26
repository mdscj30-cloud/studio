import { TEMPLATES_DATA } from '@/lib/templates-data';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight, NotebookPen } from 'lucide-react';

export const metadata = {
  title: 'Startup Templates & Checklists | Nexa Consultancy',
  description: 'Downloadable templates and checklists for Indian startups covering compliance, fundraising, financial planning, and more.',
};

export default function TemplatesHubPage() {
  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24 text-center">
          <div className="inline-block bg-primary-foreground/10 p-4 rounded-full mb-4">
            <NotebookPen className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Templates & Checklists</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Actionable resources to help you manage compliance, prepare for fundraising, and build a strong financial foundation for your startup.
          </p>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEMPLATES_DATA.map((template) => {
            const Icon = template.Icon;
            return (
              <Link href={`/templates/${template.slug}`} key={template.slug} className="group">
                <Card className="h-full flex flex-col transition-all duration-300 border group-hover:border-accent group-hover:shadow-xl group-hover:scale-105">
                  <CardHeader>
                    <div className="mb-3">
                      <div className="w-fit p-3 bg-primary/10 rounded-full text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{template.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{template.description}</CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <div className="text-sm font-semibold text-accent flex items-center">
                        View Template <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
