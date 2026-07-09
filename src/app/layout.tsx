import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DeferredChrome from '@/components/DeferredChrome';
import { getAggregateRatingSchema, getReviewsSchema } from '@/lib/reviews';
import { SITE_URL, siteConfig } from '@/lib/seo';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2D464C',
};

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  weight: ['500', '600', '700'],
  adjustFontFallback: true,
  preload: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500'],
  adjustFontFallback: true,
  preload: true,
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
});

const CRITICAL_CSS = `
  html,body{margin:0;background:#F9F7F2;color:#2D464C}
  body{font-family:var(--font-inter),system-ui,-apple-system,sans-serif;line-height:1.7}
  header{position:fixed;top:0;left:0;right:0;z-index:50;background:#fff;border-bottom:1px solid rgba(45,70,76,.1)}
  main{padding-top:4rem}
  h1,h2,h3,.heading-xl{font-family:var(--font-fraunces),Georgia,'Times New Roman',serif;color:#2D464C;line-height:1.25}
  .heading-xl{font-size:clamp(2.4rem,1.45rem + 4.2vw,4.25rem);font-weight:700;line-height:1.04;letter-spacing:-0.025em}
  .body-lg{font-size:1rem;line-height:1.82;color:rgba(45,70,76,.85)}
  img{max-width:100%;height:auto}
`.replace(/\s+/g, ' ').trim();

export const metadata: Metadata = {
  title: 'Psicologa a Credaro vicino Sarnico e Lago d\'Iseo | Gaia Bresciani',
  description:
    'Gaia Bresciani, psicologa e psicoterapeuta a Credaro, vicino a Sarnico e Lago d\'Iseo. Percorsi in presenza per ansia, relazioni, autostima e traumi.',
  metadataBase: new URL(SITE_URL),
  authors: [{ name: siteConfig.author, url: SITE_URL }],
  creator: siteConfig.author,
  publisher: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Psicologa a Credaro vicino Sarnico e Lago d\'Iseo | Gaia Bresciani',
    description:
      'Studio di psicologia a Credaro, comodo per Sarnico e basso Lago d\'Iseo. Primo colloquio per ansia, relazioni, autostima e traumi.',
    url: `${SITE_URL}/`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
      },
    ],
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psicologa a Credaro vicino Sarnico e Lago d\'Iseo | Gaia Bresciani',
    description:
      'Percorsi psicologici in presenza a Credaro, vicino a Sarnico e Lago d\'Iseo, con primo colloquio orientativo.',
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/assets/favicon.ico', sizes: 'any' },
      { url: '/assets/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/assets/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/assets/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  other: {
    'theme-color': '#F9F7F2',
    'color-scheme': 'light',
  },
};

function SchemaOrgJsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Gaia Bresciani',
    jobTitle: 'Psicologa e Psicoterapeuta',
    description:
      'Psicologa e Psicoterapeuta specializzata in Psicoterapia Psicodinamica Adleriana e Terapia EMDR. Studio a Credaro (BG), servizio per Sarnico, Lago d\'Iseo e dintorni.',
    url: SITE_URL,
    image: `${SITE_URL}/assets/psicologa-gaia-bresciani.webp`,
    email: 'gaia.bresciani23@gmail.com',
    telephone: '+393408389958',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Piave 7',
      addressLocality: 'Credaro',
      addressRegion: 'BG',
      postalCode: '24060',
      addressCountry: 'IT',
    },
    sameAs: [
      'https://www.facebook.com/StudioPrivatoViaPiave7CredaroBG/',
      'https://www.linkedin.com/in/gaia-bresciani-357aa8106/',
    ],
    knowsAbout: [
      'Psicoterapia',
      'Terapia EMDR',
      'Psicologia Clinica',
      'Terapia di Coppia',
      'Terapia Individuale',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Istituto Alfred Adler',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'Albo Professionale degli Psicologi e Psicoterapeuti della Lombardia',
      identifier: '22433',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['Psychologist', 'MedicalBusiness', 'LocalBusiness'],
    '@id': `${SITE_URL}/#localbusiness`,
    // Nome identico carattere per carattere alla scheda Google Business Profile:
    // ogni difformità indebolisce la riconciliazione dell'entità nel local pack.
    name: 'Psicologa Psicoterapeuta - Dr.ssa Gaia Bresciani',
    alternateName: [
      'Gaia Bresciani \u2013 Psicologa e Psicoterapeuta',
      'Studio Psicologia Gaia Bresciani',
    ],
    image: [
      `${SITE_URL}/assets/psicologa-gaia-bresciani.webp`,
      `${SITE_URL}/assets/psicologa-lago-iseo-sarnico.webp`,
    ],
    logo: `${SITE_URL}/assets/psicologa-gaia-bresciani.webp`,
    description:
      'Psicologa e Psicoterapeuta specializzata in Psicoterapia Psicodinamica Adleriana e Terapia EMDR. Studio a Credaro (BG) e Castenedolo (BS), servizio per Sarnico, Lago d\'Iseo e zone limitrofe.',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Via Piave 7',
        addressLocality: 'Credaro',
        addressRegion: 'BG',
        postalCode: '24060',
        addressCountry: 'IT',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Piazza Martiri della Libert\u00e0 7',
        addressLocality: 'Castenedolo',
        addressRegion: 'BS',
        postalCode: '25014',
        addressCountry: 'IT',
      },
    ],
    // Coordinate e CID identici al pin della scheda Google Business Profile.
    geo: { '@type': 'GeoCoordinates', latitude: '45.6595748', longitude: '9.9261865' },
    hasMap: 'https://maps.google.com/?cid=12753596495629000798',
    telephone: '+393408389958',
    email: 'gaia.bresciani23@gmail.com',
    url: SITE_URL,
    priceRange: '\u20ac70-\u20ac100',
    paymentAccepted: 'Cash, Bank Transfer',
    currenciesAccepted: 'EUR',
    sameAs: [
      'https://www.facebook.com/StudioPrivatoViaPiave7CredaroBG/',
      'https://www.linkedin.com/in/gaia-bresciani-357aa8106/',
      'https://www.opl.it/psicologi/22433/Bresciani-Gaia-Miriam-Teresa',
      'https://www.miodottore.it/gaia-miriam-teresa-bresciani/psicoterapeuta-psicologo-clinico-psicologo/brescia',
      'https://maps.google.com/?cid=12753596495629000798',
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Sarnico',
        sameAs: 'https://it.wikipedia.org/wiki/Sarnico',
        geo: { '@type': 'GeoCoordinates', latitude: '45.6690', longitude: '9.9615' },
      },
      ...['Lago d\'Iseo', 'Iseo', 'Paratico', 'Capriolo',
        'Villongo', 'Credaro', 'Castelli Calepio', 'Grumello del Monte',
        'Palazzolo sull\'Oglio', 'Bergamo', 'Brescia', 'Castenedolo',
      ].map((name) => ({ '@type': 'City', name })),
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: '45.6690', longitude: '9.9615' },
      geoRadius: '20000',
    },
    // Orari allineati alla scheda Google Business Profile (Lun-Ven 07-21, Sab 09-16:30):
    // un conflitto orari schema/GBP genera un segnale di entità incoerente.
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:30',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servizi di Psicologia e Psicoterapia',
      itemListElement: [
        { name: 'Terapia Individuale', description: 'Percorsi di psicoterapia individuale per adulti, adolescenti e bambini.' },
        { name: 'Terapia di Coppia', description: 'Supporto psicologico per coppie in difficolt\u00e0.' },
        { name: 'Terapia EMDR', description: 'Trattamento per traumi, ansia e blocchi emotivi con tecnica EMDR.' },
        { name: 'Consulenza Psicologica Online', description: 'Colloqui psicologici online sicuri ed efficaci.' },
      ].map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', ...s, provider: { '@type': 'Person', name: 'Gaia Bresciani' } },
        availability: 'https://schema.org/InStock',
      })),
    },
    medicalSpecialty: [
      'Psicologia Clinica',
      'Psicoterapia',
      'Terapia EMDR',
      'Psicoterapia Psicodinamica Adleriana',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional License',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Albo Professionale degli Psicologi e Psicoterapeuti della Lombardia',
        identifier: '22433',
      },
    },
    aggregateRating: getAggregateRatingSchema(),
    review: getReviewsSchema(),
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Gaia Bresciani Psicologa',
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#localbusiness` },
    inLanguage: 'it-IT',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: CRITICAL_CSS }} />
        <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <link
          rel="preload"
          as="image"
          href="/assets/psicologa-sarnico-gaia-bresciani.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="llms.txt" />
        <script src="/trusted-types.js" />
        <script src="/register-sw.js" defer />
      </head>
      <body className="bg-background text-primary antialiased">
        <a
          href="#main-content"
          title="Salta alla navigazione principale del contenuto"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Vai al contenuto principale
        </a>
        <Navbar />
        <DeferredChrome timeoutMs={3000} />
        <main id="main-content">{children}</main>
        <Footer />
        <SchemaOrgJsonLd />
      </body>
    </html>
  );
}
