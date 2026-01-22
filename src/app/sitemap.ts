
import { MetadataRoute } from 'next'
import { DETAILED_BLOG_POSTS, DETAILED_CASE_STUDIES } from '@/lib/content'
import { SERVICES } from '@/lib/constants'
import { ALL_GLOSSARY_TERMS } from '@/lib/glossary-data'
import { PROGRAMMATIC_PAGES_DATA } from '@/lib/programmatic-pages-data'
import { LOCATION_SERVICE_PAGES } from '@/lib/location-service-data'
import { STAGE_PROBLEM_PAGES } from '@/lib/startup-stage-data'
import { INDUSTRY_FINANCE_PAGES } from '@/lib/industry-finance-data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexaconsultancy.com';

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
  ].map(route => {
      const hubPages = ['/services', '/finance-for-startups-india', '/resources', '/startup-finance-glossary'];
      const lowPriorityPages = ['/terms', '/privacy'];
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

  const servicesPages = SERVICES.map(service => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages = DETAILED_BLOG_POSTS.map(post => ({
    url: `${siteUrl}/resources/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const caseStudyPages = DETAILED_CASE_STUDIES.map(study => ({
    url: `${siteUrl}/resources/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const glossaryPages = ALL_GLOSSARY_TERMS.map(term => ({
    url: `${siteUrl}/startup-finance-glossary/${term.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const solutionsPages = PROGRAMMATIC_PAGES_DATA.map(page => ({
    url: `${siteUrl}/solutions/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const indiaServicesPages = LOCATION_SERVICE_PAGES.map(page => ({
    url: `${siteUrl}/india-services/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const startupGuidesPages = STAGE_PROBLEM_PAGES.map(page => ({
    url: `${siteUrl}/startup-guides/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const industryFinancePages = INDUSTRY_FINANCE_PAGES.map(page => ({
    url: `${siteUrl}/industry-finance/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [
    ...mainPages,
    ...servicesPages,
    ...blogPages,
    ...caseStudyPages,
    ...glossaryPages,
    ...solutionsPages,
    ...indiaServicesPages,
    ...startupGuidesPages,
    ...industryFinancePages,
  ];
}
