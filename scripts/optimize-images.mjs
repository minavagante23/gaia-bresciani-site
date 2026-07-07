import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

function walkWebp(dir, files = [], base = dir) {
  if (!fs.existsSync(dir)) return files;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkWebp(fullPath, files, base);
      continue;
    }
    if (entry.name.endsWith('.webp')) {
      files.push({ fullPath, relative: path.relative(base, fullPath).replace(/\\/g, '/') });
    }
  }

  return files;
}

function getTarget(relativePath) {
  if (relativePath.startsWith('approfondimenti/')) {
    return { width: 960, quality: 76 };
  }

  if (relativePath === 'psicologa-sarnico-gaia-bresciani.webp') {
    return { width: 700, quality: 78 };
  }

  if (relativePath === 'og-share.webp') {
    return { width: 1200, quality: 82 };
  }

  return { width: 1280, quality: 78 };
}

function cleanupTempFiles(dir) {
  if (!fs.existsSync(dir)) return;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      cleanupTempFiles(fullPath);
      continue;
    }
    if (entry.name.endsWith('.tmp')) {
      fs.unlinkSync(fullPath);
    }
  }
}

async function optimizeFile(fullPath, relativePath) {
  const { width, quality } = getTarget(relativePath);
  const before = fs.statSync(fullPath).size;
  const metadata = await sharp(fullPath).metadata();

  let pipeline = sharp(fullPath).rotate();
  if ((metadata.width ?? 0) > width) {
    pipeline = pipeline.resize({ width, withoutEnlargement: true });
  }

  const buffer = await pipeline.webp({ quality, effort: 6 }).toBuffer();

  if (buffer.length >= before) {
    console.log(`Skipped ${relativePath}: already optimized (${(before / 1024).toFixed(1)} KiB)`);
    return;
  }

  const tempPath = `${fullPath}.tmp`;

  try {
    fs.writeFileSync(tempPath, buffer);
    fs.renameSync(tempPath, fullPath);
  } catch (err) {
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
    console.warn(`Could not optimize ${relativePath}: ${err instanceof Error ? err.message : err}`);
    return;
  }

  console.log(
    `Optimized ${relativePath}: ${(before / 1024).toFixed(1)} KiB -> ${(buffer.length / 1024).toFixed(1)} KiB`,
  );
}

async function optimizeAssetsRoot(rootDir, label) {
  if (!fs.existsSync(rootDir)) {
    console.log(`Image optimization skipped for ${label}: directory not found.`);
    return;
  }

  const files = walkWebp(rootDir);
  if (files.length === 0) {
    console.log(`Image optimization skipped for ${label}: no WebP files.`);
    return;
  }

  console.log(`Optimizing ${files.length} image(s) in ${label}...`);
  for (const file of files) {
    await optimizeFile(file.fullPath, file.relative);
  }
}

const roots = process.argv.includes('--out-only')
  ? [{ dir: path.join(process.cwd(), 'out', 'assets'), label: 'out/assets' }]
  : process.argv.includes('--public-only')
    ? [{ dir: path.join(process.cwd(), 'public', 'assets'), label: 'public/assets' }]
    : [
        { dir: path.join(process.cwd(), 'public', 'assets'), label: 'public/assets' },
        { dir: path.join(process.cwd(), 'out', 'assets'), label: 'out/assets' },
      ];

for (const { dir, label } of roots) {
  cleanupTempFiles(dir);
  await optimizeAssetsRoot(dir, label);
}
