/** Google Analytics 4 — tag in pagina, cookie solo dopo consenso analitici */

export const GA_MEASUREMENT_ID = 'G-CE4E4BH1CY';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __gaPageviewSent?: boolean;
  }
}

/** Snippet in <head>: Consent Mode denied, pageview solo se il consenso è già salvato. */
export const GTAG_INIT_SCRIPT =
  `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;(function(){var g=false;try{var m=document.cookie.match(/(?:^|; )cookie_consent=([^;]*)/);if(m){var c=JSON.parse(decodeURIComponent(m[1]));g=c&&c.analytics===true;}}catch(e){}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:g?'granted':'denied',wait_for_update:500});gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{anonymize_ip:true,send_page_view:g});if(g)window.__gaPageviewSent=true;})();`;

export function loadGoogleAnalytics() {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('consent', 'update', { analytics_storage: 'granted' });
  if (window.__gaPageviewSent) return;
  window.__gaPageviewSent = true;
  window.gtag('event', 'page_view', { send_to: GA_MEASUREMENT_ID });
}

export function disableGoogleAnalytics() {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('consent', 'update', { analytics_storage: 'denied' });
}
