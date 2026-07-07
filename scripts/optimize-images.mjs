import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const outAssetsDir = path.join(process.cwd(), 'out', 'assets');

const targets = [
  {
    file: 'psicologa-sarnico-gaia-bresciani.webp',
    width: 700,
    quality: 78,
  },
];

async function optimizeImage({ file, width, quality }) {
  const filePath = path.join(outAssetsDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipped ${file}: not found in out/assets.`);
    return;
  }

  const before = fs.statSync(filePath).size;
  const buffer = await sharp(filePath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toBuffer();

  try {
    fs.writeFileSync(filePath, buffer);
  } catch (err) {
    console.warn(`Could not optimize ${file}: ${err instanceof Error ? err.message : err}`);
    return;
  }

  const after = buffer.length;
  console.log(
    `Optimized ${file}: ${(before / 1024).toFixed(1)} KiB -> ${(after / 1024).toFixed(1)} KiB`,
  );
}

if (!fs.existsSync(outAssetsDir)) {
  console.log('Image optimization skipped: out/assets not found.');
  process.exit(0);
}

for (const target of targets) {
  await optimizeImage(target);
}
