#!/usr/bin/env node

/**
 * Video Optimization Script (Node.js alternative)
 * 
 * This script uses sharp and fluent-ffmpeg to optimize videos
 * Install dependencies: npm install fluent-ffmpeg
 * 
 * Alternative: Use the bash script (optimize-videos.sh) which uses ffmpeg directly
 */

const fs = require('fs');
const path = require('path');

const VIDEOS_DIR = path.join(__dirname, '../public/videos');
const OUTPUT_DIR = path.join(__dirname, '../public/videos/optimized');

// Create output directory
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log('📹 Video Optimization Script');
console.log('');
console.log('⚠️  This script requires ffmpeg to be installed.');
console.log('   Install with: brew install ffmpeg (macOS)');
console.log('');
console.log('💡 For best results, use the bash script: scripts/optimize-videos.sh');
console.log('   Or manually compress videos using:');
console.log('   ffmpeg -i input.mov -c:v libx264 -crf 28 -vf "scale=1280:-1" output.mp4');
console.log('');
