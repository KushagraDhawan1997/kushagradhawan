#!/usr/bin/env node

/**
 * Generate high-quality hero WebP variants for article images.
 * - Scans public/articles for images
 * - Outputs to public/articles/hero as <name>-hero-1200.webp and -hero-1600.webp
 *
 * Usage:
 *   node scripts/optimize-article-heroes.mjs
 */

import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const ARTICLES_DIR = path.resolve("public/articles");
const HERO_DIR = path.join(ARTICLES_DIR, "hero");
const INPUT_EXTS = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const HERO_WIDTHS = [1200, 1600];

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

async function generateHeroesFor(fileName) {
  const inputPath = path.join(ARTICLES_DIR, fileName);
  const base = getBaseNameNoExt(fileName);
  const inputTime = await fileMTime(inputPath);

  for (const width of HERO_WIDTHS) {
    const outName = `${base}-hero-${width}.webp`;
    const outPath = path.join(HERO_DIR, outName);
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
  await ensureDir(HERO_DIR);
  const images = await listArticleImages();
  if (images.length === 0) {
    console.log("No article images found in public/articles");
    return;
  }
  for (const img of images) {
    await generateHeroesFor(img);
  }
  console.log("Hero image optimization complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
