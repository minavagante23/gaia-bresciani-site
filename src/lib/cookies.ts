export interface CookieConsent {
  technical: true;
  functional: boolean;
  analytics: boolean;
  timestamp: number;
}

const COOKIE_NAME = 'cookie_consent';
const MAX_AGE = 15552000; // 180 days (~6 months) per Garante Privacy

function isValidConsent(value: unknown): value is CookieConsent {
  if (!value || typeof value !== 'object') return false;
  const c = value as Record<string, unknown>;
  return (
    c.technical === true &&
    typeof c.functional === 'boolean' &&
    typeof c.analytics === 'boolean' &&
    typeof c.timestamp === 'number'
  );
}

export function getConsent(): CookieConsent | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
  if (!match) return null;

  try {
    const parsed: unknown = JSON.parse(decodeURIComponent(match[1]));
    // Consensi pre-GA (senza flag analytics) non sono validi: ripresenta il banner
    if (!isValidConsent(parsed)) return null;
    const elapsed = Date.now() - parsed.timestamp;
    if (elapsed > MAX_AGE * 1000) return null;
    return parsed;
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

export function hasAnalyticsConsent(): boolean {
  return getConsent()?.analytics === true;
}
