#!/usr/bin/env node

/**
 * Script to optimize video files for web performance
 *
 * Instructions for usage:
 * 1. Install ffmpeg if not already installed: `brew install ffmpeg`
 * 2. Run this script: `node scripts/optimize-videos.mjs`
 */

import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs/promises";
import path from "path";

const execAsync = promisify(exec);
const sourceDir = "public/about-womp/final";
const targetDir = "public/about-womp/optimized";

const optimizeVideo = async (inputFile, outputFile) => {
  try {
    console.log(`Optimizing ${inputFile}...`);

    // Create a lower quality version for mobile
    const lowQualityOutput = outputFile.replace(".mp4", "_low.mp4");

    // For standard quality (desktop), use better compression but maintain quality
    await execAsync(`ffmpeg -i ${inputFile} -vf "scale=720:-1" -c:v libx264 -preset slow -crf 26 -movflags +faststart -an ${outputFile}`);

    // For low quality (mobile), use more aggressive compression
    await execAsync(`ffmpeg -i ${inputFile} -vf "scale=480:-1" -c:v libx264 -preset slow -crf 30 -movflags +faststart -an ${lowQualityOutput}`);

    console.log(`Optimized ${inputFile} successfully`);
  } catch (error) {
    console.error(`Error optimizing ${inputFile}:`, error.message);
  }
};

const optimizeImage = async (inputFile, outputFile) => {
  try {
    console.log(`Optimizing ${inputFile}...`);

    // Convert PNG to WebP with 80% quality for better compression
    await execAsync(`ffmpeg -i ${inputFile} -c:v libwebp -quality 80 ${outputFile.replace(".png", ".webp")}`);

    console.log(`Optimized ${inputFile} successfully`);
  } catch (error) {
    console.error(`Error optimizing ${inputFile}:`, error.message);
  }
};

const checkFfmpeg = async () => {
  try {
    await execAsync("ffmpeg -version");
    return true;
  } catch (error) {
    console.error("ffmpeg is not installed. Please install it with:");
    console.error("  brew install ffmpeg (Mac)");
    console.error("  apt-get install ffmpeg (Linux)");
    console.error("  or download from https://ffmpeg.org/download.html (Windows)");
    return false;
  }
};

const main = async () => {
  // Check if ffmpeg is installed
  const ffmpegInstalled = await checkFfmpeg();
  if (!ffmpegInstalled) {
    return;
  }

  // Create target directory if it doesn't exist
  try {
    await fs.mkdir(targetDir, { recursive: true });
  } catch (error) {
    console.error("Error creating target directory:", error.message);
    return;
  }

  // Get the list of files in the source directory
  let files;
  try {
    files = await fs.readdir(sourceDir);
  } catch (error) {
    console.error("Error reading source directory:", error.message);
    return;
  }

  // Process each file
  console.log("Starting optimization...");
  for (const file of files) {
    const inputPath = path.join(sourceDir, file);
    const outputPath = path.join(targetDir, file);

    // Check file type
    if (file.endsWith(".mp4")) {
      await optimizeVideo(inputPath, outputPath);
    } else if (file.endsWith(".png")) {
      await optimizeImage(inputPath, outputPath);
    }
  }

  console.log("Optimization complete!");
};

main();
