#!/usr/bin/env node

/**
 * Generate WebP hero variants for Kookie UI hero.
 * - Reads public/kookie-ui/hero.png (or .jpg/.webp)
 * - Writes hero-1200.webp and hero-1600.webp in the same folder
 *
 * Usage:
 *   node scripts/optimize-kookie-ui.mjs
 */

import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const DIR = path.resolve("public/kookie-ui");
const CANDIDATES = ["hero.png", "hero.jpg", "hero.jpeg", "hero.webp"];
const WIDTHS = [1200, 1600];

async function findSource() {
  for (const name of CANDIDATES) {
    const p = path.join(DIR, name);
    try {
      await fs.access(p);
      return p;
    } catch {
      // ignore
    }
  }
  return null;
}

async function fileMTime(filePath) {
  try {
    const stat = await fs.stat(filePath);
    return stat.mtimeMs;
  } catch {
    return 0;
  }
}

async function main() {
  const src = await findSource();
  if (!src) {
    console.error("No hero image found in public/kookie-ui (expected hero.png/jpg/jpeg/webp).");
    process.exit(1);
  }
  const srcTime = await fileMTime(src);
  for (const w of WIDTHS) {
    const out = path.join(DIR, `hero-${w}.webp`);
    const outTime = await fileMTime(out);
    if (outTime >= srcTime) continue;
    await sharp(src).resize({ width: w, withoutEnlargement: true }).webp({ quality: 90, effort: 4, smartSubsample: true }).toFile(out);
    // eslint-disable-next-line no-console
    console.log(`Generated ${path.relative(process.cwd(), out)}`);
  }
  console.log("Kookie UI hero optimization complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
