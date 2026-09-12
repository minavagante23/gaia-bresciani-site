/** Google Analytics 4 — caricato solo dopo consenso analitici */

export const GA_MEASUREMENT_ID = 'G-CE4E4BH1CY';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function loadGoogleAnalytics() {
  if (typeof window === 'undefined') return;
  if (document.getElementById('ga-gtag')) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(..._args: unknown[]) {
    // GA4 si aspetta l'oggetto Arguments nella coda (snippet ufficiale)
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure',
  });

  const script = document.createElement('script');
  script.id = 'ga-gtag';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function disableGoogleAnalytics() {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('consent', 'update', { analytics_storage: 'denied' });
}
