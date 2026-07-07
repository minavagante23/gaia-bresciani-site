import type { Metadata } from 'next';

export const SITE_URL = 'https://www.gaiabrescianipsicologa.it';

export const siteConfig = {
  url: SITE_URL,
  name: 'Gaia Bresciani Psicologa',
  locale: 'it_IT',
  ogImage: '/assets/og-share.webp',
  ogImageAlt:
    'Gaia Bresciani, psicologa e psicoterapeuta a Credaro vicino Sarnico e Lago d\'Iseo',
  author: 'Gaia Bresciani',
} as const;

const defaultOgImage = {
  url: siteConfig.ogImage,
  width: 1200,
  height: 630,
  alt: siteConfig.ogImageAlt,
};

function pageUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized.endsWith('/') ? normalized : `${normalized}/`}`;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  robots?: Metadata['robots'];
  openGraphType?: 'website' | 'article';
  publishedTime?: string;
  images?: NonNullable<NonNullable<Metadata['openGraph']>['images']>;
  twitterImage?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  robots,
  openGraphType = 'website',
  publishedTime,
  images,
  twitterImage,
}: PageMetadataOptions): Metadata {
  const url = pageUrl(path);
  const ogImages = images ?? [defaultOgImage];
  const resolvedTwitterImage = twitterImage ?? siteConfig.ogImage;

  return {
    title,
    description,
    authors: [{ name: siteConfig.author, url: SITE_URL }],
    creator: siteConfig.author,
    publisher: siteConfig.name,
    alternates: { canonical: path },
    robots,
    openGraph: {
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: openGraphType,
      images: ogImages,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [resolvedTwitterImage],
    },
  };
}
