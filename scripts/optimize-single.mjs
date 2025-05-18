#!/usr/bin/env node

/**
 * Script to optimize a single video file for web performance
 *
 * Usage: node scripts/optimize-single.mjs AboutWomp2.png
 */

import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs/promises";
import path from "path";

const execAsync = promisify(exec);
const sourceDir = "public/about-womp/final";
const targetDir = "public/about-womp/optimized";

async function main() {
  // Get the file name from command line args
  const fileName = process.argv[2];

  if (!fileName) {
    console.error("Please provide a file name to optimize");
    console.error("Example: node scripts/optimize-single.mjs AboutWomp2.png");
    process.exit(1);
  }

  console.log(`Will optimize file: ${fileName}`);

  // Make sure target directory exists
  await fs.mkdir(targetDir, { recursive: true });

  const inputPath = path.join(sourceDir, fileName);
  const outputPath = path.join(targetDir, fileName);

  try {
    // Check if the file exists
    await fs.access(inputPath);
    console.log(`File found: ${inputPath}`);

    // For MP4 files
    if (fileName.endsWith(".mp4")) {
      console.log("Optimizing MP4 file...");

      // Create standard quality version
      console.log("Creating standard quality version...");
      await execAsync(`ffmpeg -i "${inputPath}" -vf "scale=720:-1" -c:v libx264 -preset fast -crf 26 -movflags +faststart -an "${outputPath}"`);

      // Create low quality version
      const lowQualityOutput = outputPath.replace(".mp4", "_low.mp4");
      console.log("Creating low quality version...");
      await execAsync(`ffmpeg -i "${inputPath}" -vf "scale=480:-1" -c:v libx264 -preset fast -crf 30 -movflags +faststart -an "${lowQualityOutput}"`);

      // For PNG files
    } else if (fileName.endsWith(".png")) {
      console.log("Converting PNG to WebP...");

      // Convert to WebP
      const webpOutput = outputPath.replace(".png", ".webp");
      await execAsync(`ffmpeg -i "${inputPath}" -vf scale=720:-1 -c:v libwebp -quality 80 "${webpOutput}"`);
    }

    console.log("Optimization complete!");
  } catch (error) {
    console.error(`Error optimizing file: ${error.message}`);
  }
}

main();
