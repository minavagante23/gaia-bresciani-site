/** Header HTTP di sicurezza (richiedono Cloudflare o CDN davanti a GitHub Pages). */
export const HTTP_SECURITY_HEADERS = {
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-site',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'X-Frame-Options': 'SAMEORIGIN',
};

export function formatHeadersFile(headers = HTTP_SECURITY_HEADERS) {
  const lines = Object.entries(headers).map(([name, value]) => `  ${name}: ${value}`);
  return ['/*', ...lines, ''].join('\n');
}

export const REQUIRED_AUDIT_HEADERS = [
  'strict-transport-security',
  'cross-origin-opener-policy',
];

/** Verificato nel meta CSP HTML se assente come header HTTP (GitHub Pages). */
export const FRAME_CONTROL_CSP_DIRECTIVE = "frame-ancestors 'self'";
