
import {
  Library,
  Newspaper,
  Briefcase,
  Wrench,
  NotebookPen,
  Scale,
  HandCoins,
  Map,
  BookCopy,
  DollarSign,
  Building2,
  Factory,
} from 'lucide-react';
import { ALL_GLOSSARY_TERMS } from '@/lib/glossary-data';
import { BLOG_POSTS } from '@/lib/constants';
import { CASE_STUDIES } from '@/lib/constants';
import { COMPARE_PAGES_DATA } from '@/lib/compare-pages-data';
import { INDUSTRY_FINANCE_PAGES } from '@/lib/industry-finance-data';
import { LOCATION_SERVICE_PAGES } from '@/lib/location-service-data';
import { PRICING_PAGES_DATA } from '@/lib/pricing-pages-data';
import { PROGRAMMATIC_PAGES_DATA } from '@/lib/programmatic-pages-data';
import { STAGE_PROBLEM_PAGES } from '@/lib/startup-stage-data';
import { TEMPLATES_DATA } from '@/lib/templates-data';
import { TOOLS_DATA } from '@/lib/tools-data';
import { WHO_WE_HELP_PAGES } from '@/lib/who-we-help-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const contentTypes = [
  {
    name: 'Glossary Terms',
    count: ALL_GLOSSARY_TERMS.length,
    Icon: Library,
  },
  {
    name: 'City-Service Pages',
    count: LOCATION_SERVICE_PAGES.length,
    Icon: Map,
  },
  {
    name: 'Comparison Guides',
    count: COMPARE_PAGES_DATA.length,
    Icon: Scale,
  },
  {
    name: 'Blog Posts',
    count: BLOG_POSTS.length,
    Icon: Newspaper,
  },
  {
    name: 'Founder Solution Guides',
    count: PROGRAMMATIC_PAGES_DATA.length,
    Icon: HandCoins,
  },
  {
    name: 'Templates & Checklists',
    count: TEMPLATES_DATA.length,
    Icon: NotebookPen,
  },
  {
    name: 'Pricing Guides',
    count: PRICING_PAGES_DATA.length,
    Icon: DollarSign,
  },
  {
    name: 'Tools & Calculators',
    count: TOOLS_DATA.length,
    Icon: Wrench,
  },
  {
    name: 'Who We Help Guides',
    count: WHO_WE_HELP_PAGES.length,
    Icon: Briefcase,
  },
  {
    name: 'Startup Stage Guides',
    count: STAGE_PROBLEM_PAGES.length,
    Icon: BookCopy,
  },
  {
    name: 'Case Studies',
    count: CASE_STUDIES.length,
    Icon: Building2,
  },
  {
    name: 'Industry Finance Guides',
    count: INDUSTRY_FINANCE_PAGES.length,
    Icon: Factory,
  },
];

const totalPageCount = contentTypes.reduce((sum, item) => sum + item.count, 0);

export default function ContentStats() {
  return (
    <section className="py-16 md:py-24 bg-muted/50 -mx-container-padding px-8">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Our Content Ecosystem at a Glance
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We are committed to building the most comprehensive knowledge base
            for Indian startups. Here's a look at our content by the numbers.
          </p>
        </div>
        
        <Card className="max-w-sm mx-auto mb-12 text-center shadow-lg border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-primary uppercase tracking-wider">Total Content Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-7xl font-bold text-accent drop-shadow-sm">{totalPageCount.toLocaleString('en-IN')}</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contentTypes.map(({ name, count, Icon }) => (
            <Card key={name} className="flex flex-col items-center justify-center p-4 text-center hover:border-accent/50 transition-colors group">
              <Icon className="w-8 h-8 text-primary mb-2 group-hover:text-accent transition-colors" />
              <p className="text-2xl font-bold text-foreground">{count.toLocaleString('en-IN')}</p>
              <p className="text-sm font-medium text-muted-foreground">{name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
