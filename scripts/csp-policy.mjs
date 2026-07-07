const SHARED_DIRECTIVES = [
  "default-src 'self'",
  "frame-ancestors 'self'",
  "img-src 'self' data: https:",
  "font-src 'self' https://platform.docplanner.com",
  'frame-src https://www.google.com https://maps.google.com https://www.miodottore.it https://platform.docplanner.com',
  "connect-src 'self' https://formspree.io https://platform.docplanner.com https://www.miodottore.it",
  "form-action 'self' https://formspree.io https://www.miodottore.it",
  "object-src 'none'",
  "base-uri 'self'",
  'upgrade-insecure-requests',
  'block-all-mixed-content',
];

/** CSP compatibile con Next.js static export e widget MioDottore/Docplanner. */
export function buildContentSecurityPolicy() {
  return [
    ...SHARED_DIRECTIVES.slice(0, 1),
    "script-src 'self' 'unsafe-inline' https://platform.docplanner.com",
    "style-src 'self' 'unsafe-inline' https://platform.docplanner.com",
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
