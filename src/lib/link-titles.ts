export const LINK_TITLES = {
  '/': 'Gaia Bresciani - Psicologa e Psicoterapeuta',
  '/chi-sono': 'Chi sono - Gaia Bresciani Psicologa',
  '/esperienza': 'Esperienza clinica - Gaia Bresciani Psicologa',
  '/terapia': 'Terapia individuale e di coppia - Gaia Bresciani',
  '/emdr': 'Terapia EMDR - Gaia Bresciani Psicologa',
  '/approfondimenti': 'Approfondimenti psicologia - Gaia Bresciani',
  '/faq': 'Domande frequenti - Gaia Bresciani Psicologa',
  '/contatti': 'Contatti e primo colloquio - Gaia Bresciani',
  '/contatti/#contact-form': 'Compila il modulo di contatto',
  '/psicologa-sarnico': 'Psicologa vicino Sarnico',
  '/psicologa-villongo': 'Psicologa vicino Villongo e Val Calepio',
  '/psicologa-lago-iseo': 'Psicologa per la zona del Lago d\'Iseo',
  '/privacy-policy': 'Privacy Policy - Gaia Bresciani Psicologa',
  '/cookie-policy': 'Cookie Policy - Gaia Bresciani Psicologa',
  '#contatti': 'Vai alla sezione contatti',
  '#metodo': 'Scopri come funziona il percorso terapeutico',
  '#contact-form': 'Compila il modulo di contatto',
  'tel:+393408389958': 'Chiama Gaia Bresciani per un colloquio',
  'mailto:gaia.bresciani23@gmail.com': 'Scrivi una email a Gaia Bresciani',
} as const;

export function linkTitle(href: string, fallback?: string): string {
  const known = LINK_TITLES[href as keyof typeof LINK_TITLES];
  if (known) return known;
  if (href.startsWith('/approfondimenti/')) {
    return fallback ? `Leggi: ${fallback}` : 'Leggi l\'approfondimento';
  }
  return fallback ?? href;
}
