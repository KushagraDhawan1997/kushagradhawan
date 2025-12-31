# Image Optimization Scripts

## Overview

This directory contains scripts for optimizing images used in articles. The main script is `optimize-images.mjs`, which replaces the previous separate scripts and prevents duplicate file generation.

## Main Script: `optimize-images.mjs`

A unified script that generates all optimized WebP variants for article images:

- **Content images**: 800w, 1200w (saved next to source)
- **Hero images**: 1200w, 1600w (saved in `hero/` subdirectory)
- **Thumbnails**: 400w, 800w (saved in `thumbs/` subdirectory)

### Features

- ✅ Only processes source images (PNG/JPG/JPEG)
- ✅ Skips already-generated files (prevents duplicates)
- ✅ Excludes subdirectories like `hero/`, `thumbs/`, `spark-update/`
- ✅ Incremental updates (only regenerates if source is newer)
- ✅ Can generate specific variants only

### Usage

```bash
# Generate all variants (content, hero, thumbs)
npm run optimize-images

# Generate only content variants
npm run optimize-images:content

# Generate only hero variants
npm run optimize-images:hero

# Generate only thumbnail variants
npm run optimize-images:thumbs

# Force regeneration of all files
npm run optimize-images -- --force
```

## Cleanup Script: `cleanup-duplicates.mjs`

Removes duplicate/nested generated files that were created by the old scripts.

### Usage

```bash
# Preview what would be deleted (dry run)
npm run cleanup-duplicates -- --dry-run

# Actually delete duplicate files
npm run cleanup-duplicates
```

## Migration from Old Scripts

The old scripts (`generate-thumbs.mjs`, `optimize-article-heroes.mjs`, `optimize-article-content.mjs`) are deprecated. Use `optimize-images.mjs` instead.

### Before (old way)

```bash
npm run thumbs
npm run hero-thumbs
npm run content-images
```

### After (new way)

```bash
npm run optimize-images
```

## How It Works

1. Scans `public/articles/` recursively for source images (PNG/JPG/JPEG)
2. Skips files that already have `-content-`, `-hero-`, or `-thumb-` in their name
3. Excludes subdirectories like `hero/`, `thumbs/`, `spark-update/`
4. Generates WebP variants with appropriate naming:
   - Source: `designer-owning-experience.png`
   - Content: `designer-owning-experience-content-800.webp`, `designer-owning-experience-content-1200.webp`
   - Hero: `hero/designer-owning-experience-hero-1200.webp`, `hero/designer-owning-experience-hero-1600.webp`
   - Thumbs: `thumbs/designer-owning-experience-thumb-400.webp`, `thumbs/designer-owning-experience-thumb-800.webp`

## Other Scripts

- `optimize-kookie-ui.mjs` - Optimizes KookieUI-specific images
- `optimize-single.mjs` - Optimizes a single file (for Womp images)
- `quick-optimize.mjs` - Quick optimization for Womp images
- `optimize-videos.mjs` - Video optimization (if needed)
