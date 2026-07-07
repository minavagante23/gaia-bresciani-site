import { REQUIRED_AUDIT_HEADERS } from './security-headers.mjs';

const siteUrl = process.env.SITE_URL ?? 'https://www.gaiabrescianipsicologa.it/';

async function fetchHead(url) {
  return fetch(url, { method: 'HEAD', redirect: 'follow' });
}

async function fetchHtml(url) {
  const response = await fetch(url, { redirect: 'follow' });
  return { url: response.url, status: response.status, html: await response.text() };
}

const head = await fetchHead(siteUrl);
const page = await fetchHtml(siteUrl);

console.log(`Checked: ${page.url} (${page.status})`);

let missing = 0;

for (const name of REQUIRED_AUDIT_HEADERS) {
  const value = head.headers.get(name);
  if (value) {
    console.log(`${name}: ${value}`);
  } else {
    console.error(`${name}: missing`);
    missing += 1;
  }
}

const httpCsp = head.headers.get('content-security-policy');
if (httpCsp) {
  console.log('content-security-policy (HTTP): present');
} else {
  console.log('content-security-policy (HTTP): missing (atteso su GitHub Pages)');
}

const metaCsp = page.html.match(
  /<meta http-equiv="Content-Security-Policy" content="([^"]+)"/i,
)?.[1]?.replace(/&quot;/g, '"');

if (metaCsp?.includes('frame-ancestors')) {
  console.log('frame-ancestors (meta CSP): present');
} else {
  console.error('frame-ancestors: missing (né header HTTP né meta CSP)');
  missing += 1;
}

if (metaCsp?.includes('require-trusted-types-for')) {
  console.log('require-trusted-types-for (meta CSP): present');
} else {
  console.error('require-trusted-types-for: missing');
  missing += 1;
}

if (metaCsp?.includes('trusted-types')) {
  console.log('trusted-types (meta CSP): present');
}

const xfo = head.headers.get('x-frame-options');
if (xfo) {
  console.log(`x-frame-options: ${xfo}`);
}

if (missing > 0) {
  console.error(
    'HSTS/COOP richiedono Cloudflare. frame-ancestors e attivo nel meta CSP dopo il deploy.',
  );
  process.exit(1);
}
