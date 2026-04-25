import { getArticles } from '@/lib/articles'
import { getMockQuestions } from '@/lib/community-data'
import type { MetadataRoute } from 'next'

const BASE = 'https://www.sellerbuds.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles()
  const questions = getMockQuestions()

  const articleUrls: MetadataRoute.Sitemap = articles.map(a => ({
    url: `${BASE}/article/${a.slug}`,
    lastModified: new Date(a.published_at),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const categoryUrls: MetadataRoute.Sitemap = ['growth', 'marketing', 'pricing', 'photography', 'stories', 'digital'].map(cat => ({
    url: `${BASE}/category/${cat}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  const communityUrls: MetadataRoute.Sitemap = questions.map(q => ({
    url: `${BASE}/community/${q.id}`,
    lastModified: new Date(q.created_at),
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${BASE}/start-here`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/community`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.7 },
    { url: `${BASE}/newsletter`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/courses`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE}/search`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    ...categoryUrls,
    ...articleUrls,
    ...communityUrls,
  ]
}
