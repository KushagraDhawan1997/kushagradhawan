#!/usr/bin/env node

/**
 * Quick optimization script - improved quality while maintaining performance
 * Usage: node scripts/quick-optimize.mjs
 */

import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs/promises";
import path from "path";

const execAsync = promisify(exec);
const sourceDir = "public/about-womp/final";
const targetDir = "public/about-womp/optimized";

// Process video files with better quality
async function processVideo(inputFile, outputFile) {
  console.log(`Processing video ${inputFile}...`);

  // Extract a frame at 1 second to use as thumbnail
  const thumbnailFile = outputFile.replace(".mp4", ".jpg");
  await execAsync(`ffmpeg -y -i "${inputFile}" -ss 00:00:01 -vframes 1 -vf "scale=1280:-2" -q:v 1 "${thumbnailFile}"`);

  // Create standard quality version
  console.log(`Creating standard quality version of ${inputFile}...`);
  await execAsync(`ffmpeg -y -i "${inputFile}" -vf "scale=1280:-2" -c:v libx264 -preset medium -crf 23 -an "${outputFile}"`);

  // Create low-res version for mobile
  const lowResFile = outputFile.replace(".mp4", "_low.mp4");
  await execAsync(`ffmpeg -y -i "${inputFile}" -vf "scale=720:-2" -c:v libx264 -preset medium -crf 28 -an "${lowResFile}"`);

  console.log(`Completed processing ${inputFile}`);
}

// Convert PNG to WebP with better quality
async function convertToWebP(inputFile, outputFile) {
  console.log(`Converting ${inputFile} to WebP...`);

  const webpFile = outputFile.replace(".png", ".webp");
  await execAsync(`ffmpeg -y -i "${inputFile}" -vf "scale=1280:-2" -q:v 80 "${webpFile}"`);

  console.log(`Converted ${inputFile} to WebP`);
}

// Get all files in the source directory
async function getAllFiles() {
  try {
    const files = await fs.readdir(sourceDir);
    return files.filter((file) => file.startsWith("AboutWomp"));
  } catch (err) {
    console.error(`Error reading source directory: ${err.message}`);
    return [];
  }
}

async function main() {
  console.log("Starting optimization with improved quality...");

  // Create target directory
  await fs.mkdir(targetDir, { recursive: true });

  try {
    const files = await getAllFiles();
    console.log(`Found ${files.length} files to process`);

    for (const file of files) {
      const inputPath = path.join(sourceDir, file);
      const outputPath = path.join(targetDir, file);

      try {
        // Check if file exists
        await fs.access(inputPath);

        // Process based on file type
        if (file.endsWith(".mp4")) {
          await processVideo(inputPath, outputPath);
        } else if (file.endsWith(".png")) {
          await convertToWebP(inputPath, outputPath);
        } else {
          console.log(`Skipping unsupported file type: ${file}`);
        }
      } catch (err) {
        console.error(`Error processing ${file}: ${err.message}`);
      }
    }

    console.log("Optimization completed successfully!");
  } catch (error) {
    console.error(`Error during optimization: ${error.message}`);
  }
}

main();
