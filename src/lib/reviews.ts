import { SITE_URL } from '@/lib/seo';

export interface Review {
  name: string;
  text: string;
  rating: number;
  source: string;
}

export const MIODOTTORE_REVIEWS_URL =
  'https://www.miodottore.it/gaia-miriam-teresa-bresciani/psicoterapeuta-psicologo-clinico-psicologo/brescia#opinions';

/** Recensioni visibili in homepage; allineate allo schema Review JSON-LD. */
export const reviews: Review[] = [
  {
    name: 'S.',
    text: 'Gaia mi ha dato uno spazio sicuro per esprimermi e mi ha sempre lasciato il tempo per elaborare i miei pensieri. La sua attenzione e cura non mancano mai. Mi guida nel ragionamento per affrontare e capire le tematiche affrontate.',
    rating: 5,
    source: 'MioDottore',
  },
  {
    name: 'C.C.',
    text: 'La dott.ssa Bresciani è stata fin da subito molto paziente e disponibile, in grado di aiutarmi a superare ottimamente degli eventi importanti della mia vita riuscendo ad affrontarli al meglio.',
    rating: 5,
    source: 'MioDottore',
  },
  {
    name: 'Anna',
    text: 'La Dottoressa è molto gentile, mi ha fatta sentire sempre a mio agio. Ha sempre ascoltato in maniera attenta, intervenendo in modo opportuno e comprensivo.',
    rating: 5,
    source: 'MioDottore',
  },
  {
    name: 'Daniele',
    text: 'Grazie alla sua professionalità ed empatia, sono riuscito a gestire meglio ansia e stress, superare un lutto familiare e persino alleviare dolori che non avevano cause fisiche. La sua guida mi ha permesso di raggiungere una maggiore consapevolezza di me stesso.',
    rating: 5,
    source: 'MioDottore',
  },
];

export function getAggregateRatingSchema() {
  const reviewCount = reviews.length;
  const ratingValue = reviews.reduce((sum, review) => sum + review.rating, 0) / reviewCount;

  return {
    '@type': 'AggregateRating',
    ratingValue: ratingValue.toFixed(1),
    reviewCount: String(reviewCount),
    bestRating: '5',
    worstRating: '1',
  };
}

export function getReviewsSchema() {
  return reviews.map((review, index) => ({
    '@type': 'Review',
    '@id': `${SITE_URL}/#review-${index + 1}`,
    author: {
      '@type': 'Person',
      name: review.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(review.rating),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: review.text,
    publisher: {
      '@type': 'Organization',
      name: review.source,
    },
    itemReviewed: {
      '@id': `${SITE_URL}/#localbusiness`,
    },
  }));
}
