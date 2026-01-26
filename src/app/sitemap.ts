
import { MetadataRoute } from 'next'
import { getDetailedBlogPosts, getDetailedCaseStudies } from '@/lib/content'
import { SERVICES } from '@/lib/constants'
import { ALL_GLOSSARY_TERMS, GlossaryTerm } from '@/lib/glossary-data'
import { PROGRAMMATIC_PAGES_DATA } from '@/lib/programmatic-pages-data'
import { LOCATION_SERVICE_PAGES } from '@/lib/location-service-data'
import { STAGE_PROBLEM_PAGES } from '@/lib/startup-stage-data'
import { INDUSTRY_FINANCE_PAGES } from '@/lib/industry-finance-data'

const getGlossaryPriority = (term: GlossaryTerm): number => {
  switch (term.tier) {
    case 1:
      return 0.7; // High priority for top-tier terms
    case 2:
      return 0.6; // Medium priority
    default:
      return 0.5; // Low priority, but still indexed
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexaconsultancy.com';

  const mainPages: MetadataRoute.Sitemap = [
    // Core pages
    { url: `${siteUrl}/`, lastModified: new Date(), priority: 1.0, changeFrequency: 'daily' },
    { url: `${siteUrl}/about`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${siteUrl}/contact`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    
    // Hub pages - High priority
    { url: `${siteUrl}/services`, lastModified: new Date(), priority: 0.9, changeFrequency: 'weekly' },
    { url: `${siteUrl}/finance-for-startups-india`, lastModified: new Date(), priority: 0.9, changeFrequency: 'weekly' },
    { url: `${siteUrl}/resources`, lastModified: new Date(), priority: 0.9, changeFrequency: 'weekly' },
    { url: `${siteUrl}/blog`, lastModified: new Date(), priority: 0.8, changeFrequency: 'weekly' },
    { url: `${siteUrl}/case-studies`, lastModified: new Date(), priority: 0.8, changeFrequency: 'weekly' },
    { url: `${siteUrl}/startup-finance-glossary`, lastModified: new Date(), priority: 0.8, changeFrequency: 'weekly' },
    { url: `${siteUrl}/pricing`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${siteUrl}/process`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },

    // Legal/Admin pages - Low priority
    { url: `${siteUrl}/terms`, lastModified: new Date(), priority: 0.3, changeFrequency: 'yearly' },
    { url: `${siteUrl}/privacy`, lastModified: new Date(), priority: 0.3, changeFrequency: 'yearly' },
  ];

  const servicesPages: MetadataRoute.Sitemap = SERVICES.map(service => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = getDetailedBlogPosts().map(post => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = getDetailedCaseStudies().map(study => ({
    url: `${siteUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const glossaryPages: MetadataRoute.Sitemap = ALL_GLOSSARY_TERMS
    .filter(term => term.tier !== 3) // Exclude low-value tier 3 terms
    .map(term => ({
      url: `${siteUrl}/startup-finance-glossary/${term.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: getGlossaryPriority(term),
  }));

  const solutionsPages: MetadataRoute.Sitemap = PROGRAMMATIC_PAGES_DATA.map(page => ({
    url: `${siteUrl}/solutions/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8, // Important landing pages
  }));

  const indiaServicesPages: MetadataRoute.Sitemap = LOCATION_SERVICE_PAGES.map(page => ({
    url: `${siteUrl}/india-services/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7, // More specific, so slightly lower priority
  }));

  const startupGuidesPages: MetadataRoute.Sitemap = STAGE_PROBLEM_PAGES.map(page => ({
    url: `${siteUrl}/startup-guides/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const industryFinancePages: MetadataRoute.Sitemap = INDUSTRY_FINANCE_PAGES.map(page => ({
    url: `${siteUrl}/industry-finance/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
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
