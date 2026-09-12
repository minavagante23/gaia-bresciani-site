'use client';

import { useEffect } from 'react';
import { hasAnalyticsConsent } from '@/lib/cookies';
import { disableGoogleAnalytics, loadGoogleAnalytics } from '@/lib/analytics';

export default function GoogleAnalytics() {
  useEffect(() => {
    const sync = () => {
      if (hasAnalyticsConsent()) {
        loadGoogleAnalytics();
      } else {
        disableGoogleAnalytics();
      }
    };

    sync();
    window.addEventListener('cookie-consent-change', sync);
    return () => window.removeEventListener('cookie-consent-change', sync);
  }, []);

  return null;
}
