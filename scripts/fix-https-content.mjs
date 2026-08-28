import fs from 'node:fs';
import path from 'node:path';
import {
  buildContentSecurityPolicy,
  extractInlineScriptHashes,
  injectCspMeta,
} from './csp-policy.mjs';
import { formatHeadersFile } from './security-headers.mjs';

const outDir = path.join(process.cwd(), 'out');

// Never rewrite http://www.w3.org/2000/svg to https://. That string is the
// SVG namespace identifier, not a URL; changing it makes Lucide icons vanish.

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
      continue;
    }

    if (entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

function dedupeImagePreload(html) {
  const preloadPattern =
    /<link rel="preload" as="image" href="\/assets\/psicologa-sarnico-gaia-bresciani\.webp"[^>]*>/g;
  const matches = html.match(preloadPattern) ?? [];
  if (matches.length <= 1) return html;

  let seen = false;
  return html.replace(preloadPattern, (tag) => {
    if (seen) return '';
    seen = true;
    return tag;
  });
}

function applyCsp(html) {
  const scriptHashes = extractInlineScriptHashes(html);
  const policy = buildContentSecurityPolicy({ scriptHashes });
  return injectCspMeta(html, policy);
}

if (!fs.existsSync(outDir)) {
  console.log('Post-build optimizations skipped: out/ not found.');
  process.exit(0);
}

let updatedFiles = 0;

for (const file of walk(outDir)) {
  const original = fs.readFileSync(file, 'utf8');
  let next = original;

  next = dedupeImagePreload(next);
  next = applyCsp(next);

  if (next !== original) {
    fs.writeFileSync(file, next, 'utf8');
    updatedFiles += 1;
  }
}

const headersPath = path.join(outDir, '_headers');
fs.writeFileSync(headersPath, formatHeadersFile(), 'utf8');
console.log('Security headers template written to out/_headers (riferimento; non applicato da GitHub Pages).');

console.log(`Post-build optimizations applied to ${updatedFiles} file(s).`);
