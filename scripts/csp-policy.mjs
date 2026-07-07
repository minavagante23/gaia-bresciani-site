import crypto from 'node:crypto';

const SHARED_DIRECTIVES = [
  "default-src 'self'",
  "frame-ancestors 'self'",
  "img-src 'self' data: https:",
  "font-src 'self'",
  'frame-src https://www.google.com https://maps.google.com https://www.miodottore.it',
  "connect-src 'self' https://formspree.io https://platform.docplanner.com",
  "form-action 'self' https://formspree.io https://www.miodottore.it",
  "object-src 'none'",
  "base-uri 'self'",
  "require-trusted-types-for 'script'",
  "trusted-types default",
  'upgrade-insecure-requests',
  'block-all-mixed-content',
];

function cspHash(content) {
  const digest = crypto.createHash('sha256').update(content, 'utf8').digest('base64');
  return `'sha256-${digest}'`;
}

export function collectScriptHashes(html) {
  const hashes = new Set();
  const pattern = /<script(\s[^>]*)?>([\s\S]*?)<\/script>/gi;
  let match;

  while ((match = pattern.exec(html)) !== null) {
    const attrs = match[1] ?? '';
    if (/src\s*=/i.test(attrs)) continue;
    if (/type\s*=\s*["']application\/ld\+json["']/i.test(attrs)) continue;

    const body = match[2].trim();
    if (!body) continue;

    hashes.add(cspHash(body));
  }

  return [...hashes];
}

export function collectStyleHashes(html) {
  const hashes = new Set();
  const pattern = /<style(\s[^>]*)?>([\s\S]*?)<\/style>/gi;
  let match;

  while ((match = pattern.exec(html)) !== null) {
    const body = match[2].trim();
    if (!body) continue;
    hashes.add(cspHash(body));
  }

  return [...hashes];
}

export function buildContentSecurityPolicy(scriptHashes, styleHashes) {
  const scriptSrc = [
    "'self'",
    "'strict-dynamic'",
    ...scriptHashes,
    'https://platform.docplanner.com',
  ];

  const styleSrc = [
    "'self'",
    ...styleHashes,
    'https://platform.docplanner.com',
  ];

  return [
    ...SHARED_DIRECTIVES.slice(0, 1),
    `script-src ${scriptSrc.join(' ')}`,
    `style-src ${styleSrc.join(' ')}`,
    ...SHARED_DIRECTIVES.slice(1),
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
