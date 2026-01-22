import { MetadataRoute } from 'next'
import { DETAILED_BLOG_POSTS, DETAILED_CASE_STUDIES } from '@/lib/content'
import { NAV_LINKS, SERVICES } from '@/lib/constants'
import { ALL_GLOSSARY_TERMS } from '@/lib/glossary-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://nexaconsultancy.com'

  const staticPages = NAV_LINKS
    .filter(link => !link.href.includes('#')) // Exclude anchor links
    .map(link => ({
      url: `${siteUrl}${link.href}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: link.href === '/' ? 1 : 0.8,
    }));

  const servicePages = SERVICES.map(service => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPosts = DETAILED_BLOG_POSTS.map(post => ({
    url: `${siteUrl}/resources/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const caseStudies = DETAILED_CASE_STUDIES.map(study => ({
    url: `${siteUrl}/resources/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const otherResourcePages = [
    {
      url: `${siteUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/startup-finance-glossary`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }
  ];

  const glossaryTerms = ALL_GLOSSARY_TERMS.map(term => ({
    url: `${siteUrl}/glossary/${term.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...blogPosts,
    ...caseStudies,
    ...otherResourcePages,
    ...glossaryTerms
  ];
}
