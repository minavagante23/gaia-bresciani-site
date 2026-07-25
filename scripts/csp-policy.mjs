import crypto from 'node:crypto';

const DOCPLANNER = 'https://platform.docplanner.com';
const MIODOTTORE = 'https://www.miodottore.it';
const FORMSPREE = 'https://formspree.io';

/**
 * Extract sha256 hashes for inline <script> without src (incl. JSON-LD).
 * With hashes present, browsers ignore 'unsafe-inline' for script-src.
 */
export function extractInlineScriptHashes(html) {
  const hashes = new Set();
  const re = /<script\b(?![^>]*\bsrc\s*=)[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    const content = match[1];
    const digest = crypto.createHash('sha256').update(content, 'utf8').digest('base64');
    hashes.add(`'sha256-${digest}'`);
  }
  return [...hashes];
}

/**
 * CSP for Next.js static export + MioDottore.
 * script-src uses per-page hashes instead of 'unsafe-inline'.
 * style-src keeps 'unsafe-inline' (React style attributes / Tailwind runtime).
 */
export function buildContentSecurityPolicy(options = {}) {
  const scriptHashes = options.scriptHashes ?? [];
  const scriptSrc = ["'self'", DOCPLANNER, ...scriptHashes].join(' ');

  return [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    `style-src 'self' 'unsafe-inline' ${DOCPLANNER}`,
    "frame-ancestors 'self'",
    "img-src 'self' data: https:",
    `font-src 'self' ${DOCPLANNER}`,
    `frame-src https://www.google.com https://maps.google.com ${MIODOTTORE} ${DOCPLANNER}`,
    `connect-src 'self' ${FORMSPREE} ${DOCPLANNER} ${MIODOTTORE}`,
    `form-action 'self' ${FORMSPREE} ${MIODOTTORE}`,
    "object-src 'none'",
    "base-uri 'self'",
    'upgrade-insecure-requests',
    'block-all-mixed-content',
  ].join('; ');
}

export function injectCspMeta(html, policy) {
  const escaped = policy.replace(/"/g, '&quot;');
  const meta = `<meta http-equiv="Content-Security-Policy" content="${escaped}" />`;

  if (/<meta http-equiv="Content-Security-Policy"/i.test(html)) {
    return html.replace(/<meta http-equiv="Content-Security-Policy"[^>]*>/i, meta);
  }

  return html.replace(/<head>/i, `<head>${meta}`);
}
