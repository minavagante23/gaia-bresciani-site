import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Le pagine HTML legacy NON vanno bloccate qui: hanno gia' noindex +
        // canonical + redirect, e Google deve poterle scansionare per vederli
        // e consolidare i segnali sulle nuove URL. Bloccarle le lascerebbe
        // nell'indice come risultati senza snippet.
        // Niente disallow su /_next/: Google deve accedere a CSS/JS per il rendering.
        disallow: ['/api/'],
      },
    ],
    host: 'https://www.gaiabrescianipsicologa.it',
    sitemap: 'https://www.gaiabrescianipsicologa.it/sitemap.xml',
  };
}
