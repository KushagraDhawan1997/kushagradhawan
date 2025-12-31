#!/usr/bin/env node

/**
 * Unified image optimization script for articles
 *
 * Generates optimized WebP variants for article images:
 * - Content images: 800w, 1200w (next to source)
 * - Hero images: 1200w, 1600w (in hero/ subdirectory)
 * - Thumbnails: 400w, 800w (in thumbs/ subdirectory)
 *
 * Only processes source images (PNG/JPG/JPEG), skips already-generated files.
 *
 * Usage:
 *   node scripts/optimize-images.mjs [--force] [--content-only] [--hero-only] [--thumbs-only]
 */

import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const ARTICLES_DIR = path.resolve("public/articles");
const HERO_DIR = path.join(ARTICLES_DIR, "hero");
const THUMBS_DIR = path.join(ARTICLES_DIR, "thumbs");

const SOURCE_EXTS = new Set([".png", ".jpg", ".jpeg"]);
const EXCLUDE_DIRS = new Set(["hero", "thumbs", "spark-update"]);

const FORCE = process.argv.includes("--force");
const CONTENT_ONLY = process.argv.includes("--content-only");
const HERO_ONLY = process.argv.includes("--hero-only");
const THUMBS_ONLY = process.argv.includes("--thumbs-only");

// Check if file is a source image (not already processed)
function isSourceImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!SOURCE_EXTS.has(ext)) return false;

  const basename = path.basename(filePath, ext);
  // Skip files that are already processed variants
  if (basename.includes("-content-") || basename.includes("-hero-") || basename.includes("-thumb-")) {
    return false;
  }

  return true;
}

// Check if directory should be excluded
function shouldExcludeDir(dirName) {
  return EXCLUDE_DIRS.has(dirName);
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function fileMTime(filePath) {
  try {
    const stat = await fs.stat(filePath);
    return stat.mtimeMs;
  } catch {
    return 0;
  }
}

// Recursively find all source images
async function findSourceImages(dir, relativePath = "") {
  const images = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.join(relativePath, entry.name);

    if (entry.isDirectory()) {
      if (!shouldExcludeDir(entry.name)) {
        images.push(...(await findSourceImages(fullPath, relPath)));
      }
    } else if (entry.isFile() && isSourceImage(fullPath)) {
      images.push({ fullPath, relPath, name: entry.name });
    }
  }

  return images;
}

function getBaseNameNoExt(filePath) {
  return filePath.replace(/\.(png|jpg|jpeg)$/i, "");
}

// Generate content variants (800w, 1200w) next to source
async function generateContentVariants(image) {
  if (CONTENT_ONLY || (!HERO_ONLY && !THUMBS_ONLY)) {
    const base = getBaseNameNoExt(image.fullPath);
    const inputTime = await fileMTime(image.fullPath);

    for (const width of [800, 1200]) {
      const outPath = `${base}-content-${width}.webp`;
      if (!FORCE) {
        const outTime = await fileMTime(outPath);
        if (outTime >= inputTime) continue;
      }

      await sharp(image.fullPath).resize({ width, withoutEnlargement: true }).webp({ quality: 90, effort: 4, smartSubsample: true }).toFile(outPath);

      console.log(`  ✓ Content ${width}w: ${path.relative(process.cwd(), outPath)}`);
    }
  }
}

// Generate hero variants (1200w, 1600w) in hero/ subdirectory
async function generateHeroVariants(image) {
  if (HERO_ONLY || (!CONTENT_ONLY && !THUMBS_ONLY)) {
    await ensureDir(HERO_DIR);
    const base = getBaseNameNoExt(image.name);
    const inputTime = await fileMTime(image.fullPath);

    for (const width of [1200, 1600]) {
      const outName = `${base}-hero-${width}.webp`;
      const outPath = path.join(HERO_DIR, outName);

      if (!FORCE) {
        const outTime = await fileMTime(outPath);
        if (outTime >= inputTime) continue;
      }

      await sharp(image.fullPath).resize({ width, withoutEnlargement: true }).webp({ quality: 90, effort: 4, smartSubsample: true }).toFile(outPath);

      console.log(`  ✓ Hero ${width}w: ${path.relative(process.cwd(), outPath)}`);
    }
  }
}

// Generate thumbnail variants (400w, 800w) in thumbs/ subdirectory
async function generateThumbVariants(image) {
  if (THUMBS_ONLY || (!CONTENT_ONLY && !HERO_ONLY)) {
    await ensureDir(THUMBS_DIR);
    const base = getBaseNameNoExt(image.name);
    const inputTime = await fileMTime(image.fullPath);

    for (const width of [400, 800]) {
      const outName = `${base}-thumb-${width}.webp`;
      const outPath = path.join(THUMBS_DIR, outName);

      if (!FORCE) {
        const outTime = await fileMTime(outPath);
        if (outTime >= inputTime) continue;
      }

      await sharp(image.fullPath).resize({ width, withoutEnlargement: true }).webp({ quality: 90, effort: 4, smartSubsample: true }).toFile(outPath);

      console.log(`  ✓ Thumb ${width}w: ${path.relative(process.cwd(), outPath)}`);
    }
  }
}

async function main() {
  console.log("Finding source images...");
  const images = await findSourceImages(ARTICLES_DIR);

  if (images.length === 0) {
    console.log("No source images found.");
    return;
  }

  console.log(`Found ${images.length} source image(s)\n`);

  for (const image of images) {
    console.log(`Processing: ${image.relPath}`);
    await generateContentVariants(image);
    await generateHeroVariants(image);
    await generateThumbVariants(image);
  }

  console.log("\n✓ Image optimization complete!");
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
