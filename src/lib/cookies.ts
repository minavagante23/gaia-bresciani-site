export interface CookieConsent {
  technical: true;
  functional: boolean;
  timestamp: number;
}

const COOKIE_NAME = 'cookie_consent';
const MAX_AGE = 15552000; // 180 days (~6 months) per Garante Privacy

export function getConsent(): CookieConsent | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
  if (!match) return null;

  try {
    const consent: CookieConsent = JSON.parse(decodeURIComponent(match[1]));
    const elapsed = Date.now() - consent.timestamp;
    if (elapsed > MAX_AGE * 1000) return null;
    return consent;
  } catch {
    return null;
  }
}

export function setConsent(consent: CookieConsent) {
  const value = encodeURIComponent(JSON.stringify(consent));
  const secure = typeof location !== 'undefined' && location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${MAX_AGE}; SameSite=Lax${secure}`;
}

export function hasFunctionalConsent(): boolean {
  return getConsent()?.functional === true;
}
