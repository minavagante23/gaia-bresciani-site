import fs from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'out');
const replacements = [
  ['http://www.w3.org/2000/svg', 'https://www.w3.org/2000/svg'],
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
      continue;
    }

    if (/\.(html|css|js|txt)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function makeCssNonBlocking(html) {
  const stylesheetPattern =
    /<link rel="stylesheet" href="(\/_next\/static\/css\/[^"]+\.css)"[^>]*\/?>/g;

  return html.replace(stylesheetPattern, (tag, href) => {
    if (tag.includes('onload=')) return tag;

    return [
      `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'" />`,
      `<noscript><link rel="stylesheet" href="${href}" /></noscript>`,
    ].join('');
  });
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

if (!fs.existsSync(outDir)) {
  console.log('Post-build optimizations skipped: out/ not found.');
  process.exit(0);
}

let updatedFiles = 0;

for (const file of walk(outDir)) {
  if (!file.endsWith('.html')) continue;

  const original = fs.readFileSync(file, 'utf8');
  let next = original;

  for (const [from, to] of replacements) {
    next = next.replaceAll(from, to);
  }

  next = makeCssNonBlocking(next);
  next = dedupeImagePreload(next);

  if (next !== original) {
    fs.writeFileSync(file, next, 'utf8');
    updatedFiles += 1;
  }
}

for (const file of walk(outDir)) {
  if (!/\.(css|js|txt)$/.test(file)) continue;

  const original = fs.readFileSync(file, 'utf8');
  let next = original;

  for (const [from, to] of replacements) {
    next = next.replaceAll(from, to);
  }

  if (next !== original) {
    fs.writeFileSync(file, next, 'utf8');
    updatedFiles += 1;
  }
}

console.log(`Post-build optimizations applied to ${updatedFiles} file(s).`);
