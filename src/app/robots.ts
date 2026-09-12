import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          // Redirect HTML legacy: non devono entrare nell'indice
          '/approfondimenti-ansia-panico-sarnico.html',
          '/approfondimenti-social-network-adolescenza.html',
          '/cookie-policy.html',
          '/esperienza-psicologa-villongo.html',
          '/esperienza.html',
          '/faq-psicologa-sarnico.html',
          '/faq.html',
          '/privacy-policy.html',
          '/psicologa-lago-iseo.html',
          '/psicologa-sarnico-contatti.html',
          '/terapia-emdr-lago-iseo.html',
          '/terapia-psicologica-sarnico.html',
        ],
      },
    ],
    host: 'https://www.gaiabrescianipsicologa.it',
    sitemap: 'https://www.gaiabrescianipsicologa.it/sitemap.xml',
  };
}
