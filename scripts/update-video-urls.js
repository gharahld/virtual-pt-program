#!/usr/bin/env node

/**
 * Helper script to update video URLs from .mov to optimized .mp4
 * Run this after optimizing videos with optimize-videos.sh
 */

const fs = require('fs');
const path = require('path');

const EXERCISES_FILE = path.join(__dirname, '../app/exercises/page.tsx');

// Mapping of original video URLs to optimized versions
const videoMapping = {
  '/videos/tummy1.mov': '/videos/optimized/tummy1.mp4',
  '/videos/side_lying2.mov': '/videos/optimized/side_lying2.mp4',
  '/videos/supporting_sitting_with_heard_control3.mov': '/videos/optimized/supporting_sitting_with_heard_control3.mp4',
  '/videos/rolling_practice4.mov': '/videos/optimized/rolling_practice4.mp4',
  '/videos/tummy_time_on_arms5.mov': '/videos/optimized/tummy_time_on_arms5.mp4',
  '/videos/supporting_sitting6.mov': '/videos/optimized/supporting_sitting6.mp4',
  '/videos/sitting%20to%20hands_and_knees7.mov': '/videos/optimized/sitting%20to%20hands_and_knees7.mp4',
  '/videos/supporting_standing8.mov': '/videos/optimized/supporting_standing8.mp4',
  '/videos/crawling_or_cruising9.mov': '/videos/optimized/crawling_or_cruising9.mov',
};

try {
  let content = fs.readFileSync(EXERCISES_FILE, 'utf8');
  let updated = false;

  // Replace each video URL
  for (const [oldUrl, newUrl] of Object.entries(videoMapping)) {
    if (content.includes(oldUrl)) {
      content = content.replace(new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newUrl);
      updated = true;
      console.log(`✓ Updated: ${oldUrl} → ${newUrl}`);
    }
  }

  if (updated) {
    fs.writeFileSync(EXERCISES_FILE, content, 'utf8');
    console.log('\n✨ Video URLs updated successfully!');
    console.log('💡 Test your app with: npm run dev');
  } else {
    console.log('ℹ️  No video URLs found to update.');
  }
} catch (error) {
  console.error('❌ Error updating video URLs:', error.message);
  process.exit(1);
}
