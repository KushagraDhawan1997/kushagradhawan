#!/usr/bin/env node

/**
 * Cleanup script to remove duplicate/nested generated image files
 *
 * Removes files that have nested suffixes like:
 * - *-content-*-content-*.webp
 * - *-hero-*-content-*.webp
 * - *-thumb-*-content-*.webp
 * etc.
 *
 * Usage:
 *   node scripts/cleanup-duplicates.mjs [--dry-run]
 */

import fs from "fs/promises";
import path from "path";

const ARTICLES_DIR = path.resolve("public/articles");
const DRY_RUN = process.argv.includes("--dry-run");

// Patterns that indicate a file is a duplicate/nested variant
const DUPLICATE_PATTERNS = [
  /-content-.*-content-/,
  /-hero-.*-content-/,
  /-thumb-.*-content-/,
  /-content-.*-hero-/,
  /-hero-.*-hero-/,
  /-thumb-.*-hero-/,
  /-content-.*-thumb-/,
  /-hero-.*-thumb-/,
  /-thumb-.*-thumb-/,
];

function isDuplicate(fileName) {
  return DUPLICATE_PATTERNS.some((pattern) => pattern.test(fileName));
}

async function walk(dir) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith(".webp")) {
      if (isDuplicate(entry.name)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

async function main() {
  console.log("Scanning for duplicate files...");
  const duplicates = await walk(ARTICLES_DIR);

  if (duplicates.length === 0) {
    console.log("No duplicate files found.");
    return;
  }

  console.log(`Found ${duplicates.length} duplicate file(s):\n`);

  for (const file of duplicates) {
    const relPath = path.relative(process.cwd(), file);
    console.log(`  - ${relPath}`);
  }

  if (DRY_RUN) {
    console.log("\n[DRY RUN] Files would be deleted. Run without --dry-run to delete.");
  } else {
    console.log("\nDeleting files...");
    for (const file of duplicates) {
      try {
        await fs.unlink(file);
        console.log(`  ✓ Deleted: ${path.relative(process.cwd(), file)}`);
      } catch (err) {
        console.error(`  ✗ Error deleting ${file}: ${err.message}`);
      }
    }
    console.log("\n✓ Cleanup complete!");
  }
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
