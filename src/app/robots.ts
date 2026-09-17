import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Nessun Disallow: sito statico (output: 'export'), niente /api/.
        // Le HTML legacy non vanno bloccate: devono essere scansionabili
        // cosi' Google vede noindex + canonical e consolida sulle URL nuove.
        // Non bloccare /_next/: serve a Google per il rendering.
      },
    ],
    host: 'https://www.gaiabrescianipsicologa.it',
    sitemap: 'https://www.gaiabrescianipsicologa.it/sitemap.xml',
  };
}
