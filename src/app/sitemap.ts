
import { MetadataRoute } from 'next'
import { DETAILED_BLOG_POSTS, DETAILED_CASE_STUDIES } from '@/lib/content'
import { SERVICES } from '@/lib/constants'
import { ALL_GLOSSARY_TERMS } from '@/lib/glossary-data'
import { PROGRAMMATIC_PAGES_DATA } from '@/lib/programmatic-pages-data'
import { LOCATION_SERVICE_PAGES } from '@/lib/location-service-data'
import { STAGE_PROBLEM_PAGES } from '@/lib/startup-stage-data'
import { INDUSTRY_FINANCE_PAGES } from '@/lib/industry-finance-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexaconsultancy.com';

const sitemapCategories = [
  'main', 'services', 'blog', 'case-studies', 'glossary', 
  'solutions', 'india-services', 'startup-guides', 'industry-finance'
];

export async function generateSitemaps() {
  return sitemapCategories.map(id => ({ id }));
}

export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
  
  switch(id) {
    case 'main':
      const mainPages = [
        '/',
        '/services',
        '/finance-for-startups-india',
        '/process',
        '/pricing',
        '/resources',
        '/resources/blog',
        '/startup-finance-glossary',
        '/about',
        '/contact',
        '/terms',
        '/privacy',
      ];
      const hubPages = ['/services', '/finance-for-startups-india', '/resources', '/startup-finance-glossary'];
      const lowPriorityPages = ['/terms', '/privacy'];

      return mainPages.map(route => {
        const priority = route === '/' ? 1.0 :
                         hubPages.includes(route) ? 0.9 :
                         lowPriorityPages.includes(route) ? 0.7 :
                         0.8;
        return {
          url: `${siteUrl}${route}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: priority,
        }
      });

    case 'services':
      return SERVICES.map(service => ({
        url: `${siteUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      }));

    case 'blog':
      return DETAILED_BLOG_POSTS.map(post => ({
        url: `${siteUrl}/resources/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly',
        priority: 0.7,
      }));
    
    case 'case-studies':
        return DETAILED_CASE_STUDIES.map(study => ({
            url: `${siteUrl}/resources/case-studies/${study.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
          }));

    case 'glossary':
        return ALL_GLOSSARY_TERMS.map(term => ({
            url: `${siteUrl}/startup-finance-glossary/${term.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
          }));
          
    case 'solutions':
        return PROGRAMMATIC_PAGES_DATA.map(page => ({
            url: `${siteUrl}/solutions/${page.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
          }));

    case 'india-services':
        return LOCATION_SERVICE_PAGES.map(page => ({
            url: `${siteUrl}/india-services/${page.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
          }));

    case 'startup-guides':
        return STAGE_PROBLEM_PAGES.map(page => ({
            url: `${siteUrl}/startup-guides/${page.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
          }));

    case 'industry-finance':
        return INDUSTRY_FINANCE_PAGES.map(page => ({
            url: `${siteUrl}/industry-finance/${page.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
          }));

    default:
        return [];
  }
}
