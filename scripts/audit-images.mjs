#!/usr/bin/env node

/**
 * Image Audit Script
 *
 * Checks for:
 * 1. Missing files - image src references that don't exist
 * 2. Missing optimizations - images without srcSet that have optimized variants available
 * 3. Broken srcSet - srcSet references to non-existent files
 *
 * Usage: node scripts/audit-images.mjs
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const PUBLIC_DIR = path.resolve("public");

// Components that handle optimization internally
const AUTO_OPTIMIZED_COMPONENTS = new Set(["ArticleImage"]);

// ANSI colors
const RED = "\x1b[31m";
const YELLOW = "\x1b[33m";
const GREEN = "\x1b[32m";
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";

function fileExists(relativePath) {
    // Remove leading slash for path resolution
    const cleanPath = relativePath.startsWith("/") ? relativePath.slice(1) : relativePath;
    return fs.existsSync(path.join(PUBLIC_DIR, "..", cleanPath.startsWith("public") ? cleanPath : `public/${cleanPath}`));
}

// Find files containing image references
function findFilesToAudit() {
    try {
        const output = execSync("find components app content -type f \\( -name '*.tsx' -o -name '*.ts' -o -name '*.mdx' \\)", { encoding: "utf-8" });
        return output.trim().split("\n");
    } catch (err) {
        console.error("Error finding files:", err);
        return [];
    }
}

function getOptimizedVariants(basePath) {
    const match = basePath.match(/^\/articles\/([^\.]+)\.(png|jpg|jpeg|webp)$/i);
    if (!match) return null;

    const base = match[1];
    const variants = {
        content: [
            `/articles/${base}-content-800.webp`,
            `/articles/${base}-content-1200.webp`,
        ],
        hero: [
            `/articles/hero/${base}-hero-1200.webp`,
            `/articles/hero/${base}-hero-1600.webp`,
        ],
    };

    return {
        base,
        content: variants.content.filter(v => fileExists(v)),
        hero: variants.hero.filter(v => fileExists(v)),
    };
}

function auditFile(filePath) {
    const issues = {
        missingFiles: [],
        missingSrcSet: [],
        brokenSrcSet: [],
    };

    const content = fs.readFileSync(filePath, "utf-8");

    // Find all component usages that might have images
    // Matches <Image ... /> or <ArticleImage ... /> or image: "..."

    // 1. Check MDX frontmatter images
    const mdxMatches = content.matchAll(/image:\s*["']([^"']+)["']/g);
    for (const match of mdxMatches) {
        if (match[1].startsWith("/") && !fileExists(match[1])) {
            issues.missingFiles.push({ line: getLineNumber(content, match.index), path: match[1] });
        }
    }

    // 2. Check JSX components (Image, ArticleImage, img)
    // We capture the whole tag content to check for srcSet existence
    const tagRegex = /<(Image|ArticleImage|img|AIImageWithPrompt)([^>]*?)\/?>/gs;
    let tagMatch;

    while ((tagMatch = tagRegex.exec(content)) !== null) {
        const [fullTag, tagName, props] = tagMatch;
        const index = tagMatch.index;

        // Extract src
        const srcMatch = props.match(/src=["']([^"']+)["']/);
        const srcSetMatch = props.match(/srcSet=["']([^"']+)["']/);

        if (srcMatch) {
            const srcPath = srcMatch[1];

            // Check if file exists
            if (srcPath.startsWith("/") && !fileExists(srcPath)) {
                issues.missingFiles.push({ line: getLineNumber(content, index), path: srcPath });
            }

            // Check optimization opportunities
            // Skip if:
            // - Component handles it internally (ArticleImage)
            // - srcSet is present
            // - No optimized variants exist
            if (!AUTO_OPTIMIZED_COMPONENTS.has(tagName) && !srcSetMatch) {
                const variants = getOptimizedVariants(srcPath);
                if (variants && (variants.content.length > 0 || variants.hero.length > 0)) {
                    // One final check: implies srcSet might be passed via spread or logic we missed? 
                    // For now, if variants exist and explicit srcSet missing, flag it.
                    issues.missingSrcSet.push({
                        line: getLineNumber(content, index),
                        path: srcPath,
                        availableVariants: variants
                    });
                }
            }

            // Check broken srcSet if present
            if (srcSetMatch) {
                const paths = srcSetMatch[1].split(",").map(p => p.trim().split(/\s+/)[0]);
                for (const p of paths) {
                    if (p && !fileExists(p)) {
                        issues.brokenSrcSet.push({ line: getLineNumber(content, index), path: p });
                    }
                }
            }
        }
    }

    return issues;
}

function getLineNumber(content, index) {
    return content.substring(0, index).split("\n").length;
}

function printReport(allIssues) {
    console.log(`\n${BOLD}Image Audit Report${RESET}\n${"=".repeat(50)}\n`);

    let hasIssues = false;

    const flattenedIssues = {
        missingFiles: [],
        brokenSrcSet: [],
        missingSrcSet: []
    };

    for (const [file, issues] of Object.entries(allIssues)) {
        for (const issue of issues.missingFiles) flattenedIssues.missingFiles.push({ ...issue, file });
        for (const issue of issues.brokenSrcSet) flattenedIssues.brokenSrcSet.push({ ...issue, file });
        for (const issue of issues.missingSrcSet) flattenedIssues.missingSrcSet.push({ ...issue, file });
    }

    // Missing files
    if (flattenedIssues.missingFiles.length > 0) {
        hasIssues = true;
        console.log(`${RED}${BOLD}❌ Missing Files (${flattenedIssues.missingFiles.length})${RESET}`);
        for (const issue of flattenedIssues.missingFiles) {
            console.log(`   ${path.relative(process.cwd(), issue.file)}:${issue.line}`);
            console.log(`   ${RED}→ ${issue.path}${RESET}\n`);
        }
    }

    // Broken srcSet
    if (flattenedIssues.brokenSrcSet.length > 0) {
        hasIssues = true;
        console.log(`${RED}${BOLD}❌ Broken srcSet References (${flattenedIssues.brokenSrcSet.length})${RESET}`);
        for (const issue of flattenedIssues.brokenSrcSet) {
            console.log(`   ${path.relative(process.cwd(), issue.file)}:${issue.line}`);
            console.log(`   ${RED}→ ${issue.path}${RESET}\n`);
        }
    }

    // Missing srcSet
    if (flattenedIssues.missingSrcSet.length > 0) {
        hasIssues = true;
        console.log(`${YELLOW}${BOLD}⚠️  Missing srcSet (${flattenedIssues.missingSrcSet.length})${RESET}`);
        console.log(`   These images have optimized variants but no srcSet:\n`);
        for (const issue of flattenedIssues.missingSrcSet) {
            console.log(`   ${path.relative(process.cwd(), issue.file)}:${issue.line}`);
            console.log(`   ${YELLOW}→ ${issue.path}${RESET}`);
            // compact variance display
            const variants = [];
            if (issue.availableVariants.content.length) variants.push("content");
            if (issue.availableVariants.hero.length) variants.push("hero");
            console.log(`     Available: ${variants.join(", ")}\n`);
        }
    }

    if (!hasIssues) {
        console.log(`${GREEN}${BOLD}✓ All images OK!${RESET}\n`);
    }

    return hasIssues;
}

// Main execution
async function main() {
    const files = findFilesToAudit();
    const allIssues = {};

    for (const file of files) {
        const issues = auditFile(file);
        if (issues.missingFiles.length || issues.missingSrcSet.length || issues.brokenSrcSet.length) {
            allIssues[file] = issues;
        }
    }

    const hasIssues = printReport(allIssues);
    process.exit(hasIssues ? 1 : 0);
}

main().catch(console.error);
