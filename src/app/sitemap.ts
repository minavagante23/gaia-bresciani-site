import type { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/articles';

const BASE = 'https://www.gaiabrescianipsicologa.it';
const DEFAULT_LASTMOD = '2026-04-08T00:00:00.000Z';
const BUILD_LASTMOD = new Date().toISOString();

const italianMonths: Record<string, number> = {
  gennaio: 0,
  febbraio: 1,
  marzo: 2,
  aprile: 3,
  maggio: 4,
  giugno: 5,
  luglio: 6,
  agosto: 7,
  settembre: 8,
  ottobre: 9,
  novembre: 10,
  dicembre: 11,
};

function toIsoDate(dateLabel: string): string {
  const parts = dateLabel.trim().toLowerCase().split(' ');
  if (parts.length !== 3) return DEFAULT_LASTMOD;

  const [dayRaw, monthRaw, yearRaw] = parts;
  const day = Number.parseInt(dayRaw, 10);
  const month = italianMonths[monthRaw];
  const year = Number.parseInt(yearRaw, 10);

  if (!Number.isInteger(day) || month === undefined || !Number.isInteger(year)) {
    return DEFAULT_LASTMOD;
  }

  return new Date(Date.UTC(year, month, day)).toISOString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const, lastModified: BUILD_LASTMOD },
    { path: '/chi-sono/', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: BUILD_LASTMOD },
    { path: '/terapia/', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: BUILD_LASTMOD },
    { path: '/emdr/', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: BUILD_LASTMOD },
    { path: '/approfondimenti/', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: BUILD_LASTMOD },
    { path: '/faq/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: BUILD_LASTMOD },
    { path: '/contatti/', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: BUILD_LASTMOD },
    { path: '/psicologa-sarnico/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: BUILD_LASTMOD },
    { path: '/psicologa-villongo/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: BUILD_LASTMOD },
    { path: '/psicologa-lago-iseo/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: BUILD_LASTMOD },
    { path: '/esperienza/', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: BUILD_LASTMOD },
    { path: '/privacy-policy/', priority: 0.2, changeFrequency: 'yearly' as const, lastModified: DEFAULT_LASTMOD },
    { path: '/cookie-policy/', priority: 0.2, changeFrequency: 'yearly' as const, lastModified: DEFAULT_LASTMOD },
  ];

  const articleRoutes = getAllArticles().map((article) => ({
    path: `/approfondimenti/${article.slug}/`,
    priority: 0.7 as const,
    changeFrequency: 'monthly' as const,
    lastModified: toIsoDate(article.date),
  }));

  return [...pages, ...articleRoutes].map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
