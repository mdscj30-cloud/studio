
import { MetadataRoute } from 'next'
import { DETAILED_BLOG_POSTS, DETAILED_CASE_STUDIES } from '@/lib/content'
import { SERVICES } from '@/lib/constants'
import { ALL_GLOSSARY_TERMS } from '@/lib/glossary-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://nexaconsultancy.com'

  const mainPages = [
    '/',
    '/services',
    '/finance-for-startups-india',
    '/process',
    '/pricing',
    '/resources',
    '/startup-finance-glossary',
    '/about',
    '/contact',
    '/terms',
    '/privacy',
  ].map(route => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1.0 : route.startsWith('/finance') ? 0.9 : 0.8,
  }));

  const servicePages = SERVICES.map(service => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPosts = DETAILED_BLOG_POSTS.map(post => ({
    url: `${siteUrl}/resources/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const blogIndexPage = {
    url: `${siteUrl}/resources/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  };

  const caseStudies = DETAILED_CASE_STUDIES.map(study => ({
    url: `${siteUrl}/resources/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const glossaryTerms = ALL_GLOSSARY_TERMS.map(term => ({
    url: `${siteUrl}/startup-finance-glossary/${term.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...mainPages,
    ...servicePages,
    blogIndexPage,
    ...blogPosts,
    ...caseStudies,
    ...glossaryTerms
  ];
}
