#!/usr/bin/env node

/**
 * Generate article thumbnails in WebP for cards/grids.
 * - Scans public/articles for images
 * - Writes to public/articles/thumbs
 * - Outputs 400w and 800w variants: <name>-thumb-400.webp, <name>-thumb-800.webp
 *
 * Usage:
 *   node scripts/generate-thumbs.mjs
 */

import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const ARTICLES_DIR = path.resolve("public/articles");
const THUMBS_DIR = path.join(ARTICLES_DIR, "thumbs");
const INPUT_EXTS = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const OUTPUT_WIDTHS = [400, 800];

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

function getBaseNameNoExt(filename) {
  return filename.replace(/\.(png|jpg|jpeg|webp)$/i, "");
}

async function listArticleImages() {
  const entries = await fs.readdir(ARTICLES_DIR, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((name) => INPUT_EXTS.has(path.extname(name).toLowerCase()));
}

async function fileMTime(filePath) {
  try {
    const stat = await fs.stat(filePath);
    return stat.mtimeMs;
  } catch {
    return 0;
  }
}

async function generateThumbsFor(fileName) {
  const inputPath = path.join(ARTICLES_DIR, fileName);
  const base = getBaseNameNoExt(fileName);

  const inputTime = await fileMTime(inputPath);

  for (const width of OUTPUT_WIDTHS) {
    const outName = `${base}-thumb-${width}.webp`;
    const outPath = path.join(THUMBS_DIR, outName);
    const outTime = await fileMTime(outPath);
    if (outTime >= inputTime) {
      continue; // up-to-date
    }
    const pipeline = sharp(inputPath).resize({ width, withoutEnlargement: true }).webp({ quality: 90, effort: 4, smartSubsample: true });
    await pipeline.toFile(outPath);
    // eslint-disable-next-line no-console
    console.log(`Generated ${path.relative(process.cwd(), outPath)}`);
  }
}

async function main() {
  await ensureDir(THUMBS_DIR);
  const images = await listArticleImages();
  if (images.length === 0) {
    console.log("No article images found in public/articles");
    return;
  }
  for (const img of images) {
    await generateThumbsFor(img);
  }
  console.log("Thumbnail generation complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
