import type { MetadataRoute } from 'next';

const AI_SEARCH_BOTS = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'ClaudeBot',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',
  'GoogleOther',
  'Applebot-Extended',
  'Bytespider',
  'CCBot',
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      ...AI_SEARCH_BOTS.map((userAgent) => ({
        userAgent,
        allow: '/' as const,
      })),
    ],
    host: 'https://www.gaiabrescianipsicologa.it',
    sitemap: 'https://www.gaiabrescianipsicologa.it/sitemap.xml',
  };
}
