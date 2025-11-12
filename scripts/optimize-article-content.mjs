#!/usr/bin/env node

/**
 * Generate WebP variants for article content images (used inside MDX).
 * - Recursively scans public/articles
 * - Writes <name>-content-800.webp and <name>-content-1200.webp next to the source
 *
 * Usage:
 *   node scripts/optimize-article-content.mjs
 */

import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const ROOT_DIR = path.resolve("public/articles");
const INPUT_EXTS = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const WIDTHS = [800, 1200];

async function walk(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...(await walk(full)));
    } else if (e.isFile()) {
      out.push(full);
    }
  }
  return out;
}

function baseNoExt(filePath) {
  return filePath.replace(/\.(png|jpg|jpeg|webp)$/i, "");
}

async function fileMTime(filePath) {
  try {
    const stat = await fs.stat(filePath);
    return stat.mtimeMs;
  } catch {
    return 0;
  }
}

async function processImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!INPUT_EXTS.has(ext)) return;

  const inputTime = await fileMTime(filePath);
  const base = baseNoExt(filePath);

  for (const width of WIDTHS) {
    const outPath = `${base}-content-${width}.webp`;
    const outTime = await fileMTime(outPath);
    if (outTime >= inputTime) continue;
    await sharp(filePath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 90, effort: 4, smartSubsample: true })
      .toFile(outPath);
    // eslint-disable-next-line no-console
    console.log(`Generated ${path.relative(process.cwd(), outPath)}`);
  }
}

async function main() {
  const files = await walk(ROOT_DIR);
  for (const f of files) {
    await processImage(f);
  }
  console.log("Article content image optimization complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


