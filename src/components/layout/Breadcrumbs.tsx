import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type BreadcrumbItem = {
  name: string;
  item: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className={cn('container', className)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex items-center space-x-1 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center space-x-1">
            {index > 0 && <ChevronRight className="h-4 w-4" />}
            <Link
              href={item.item}
              className={cn(
                'hover:text-primary transition-colors',
                index === items.length - 1 ? 'font-semibold text-primary' : ''
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
