# Video Optimization Guide

Your video files are currently 75-108MB each, which is too large for:
- GitHub (100MB file limit)
- Vercel deployments (100MB file limit)
- Fast web delivery

## 🎯 Solution Options

### Option 1: Compress Videos Locally (Recommended)

**Best for:** Keeping videos self-hosted, reducing file sizes by 80-90%

1. **Install ffmpeg** (if not already installed):
   ```bash
   brew install ffmpeg  # macOS
   # or
   sudo apt-get install ffmpeg  # Linux
   ```

2. **Run the optimization script**:
   ```bash
   ./scripts/optimize-videos.sh
   ```

   This will:
   - Convert `.mov` files to optimized `.mp4` files
   - Reduce file size by ~80-90% (from 75-108MB to ~5-15MB)
   - Maintain good quality for web viewing
   - Create files in `public/videos/optimized/`

3. **Update video URLs** in `app/exercises/page.tsx`:
   - Change `/videos/tummy1.mov` → `/videos/optimized/tummy1.mp4`
   - Repeat for all videos

4. **Test locally**, then commit the optimized videos

### Option 2: Use a CDN/Video Hosting Service

**Best for:** Maximum performance, automatic optimization, no storage limits

#### Option 2A: Vercel Blob Storage
```bash
npm install @vercel/blob
```

Upload videos to Vercel Blob and use URLs in your code.

#### Option 2B: Cloudinary (Recommended for video)
1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Upload videos (they auto-optimize)
3. Get optimized URLs
4. Update `videoUrl` in exercises to use Cloudinary URLs

#### Option 2C: AWS S3 + CloudFront
For enterprise-scale video delivery.

### Option 3: YouTube/Vimeo Embedding

**Best for:** Zero storage costs, automatic optimization, built-in player

1. Upload videos to YouTube (unlisted) or Vimeo
2. Use embed URLs in your `ExerciseVideoModal` component
3. No file storage needed

## 📊 Expected Results

After optimization:
- **Original**: 75-108MB per video (823MB total)
- **Optimized**: 5-15MB per video (~80-120MB total)
- **Size reduction**: ~85-90%
- **Quality**: Still excellent for web viewing

## 🚀 Quick Start (Recommended)

```bash
# 1. Install ffmpeg
brew install ffmpeg

# 2. Optimize videos
./scripts/optimize-videos.sh

# 3. Update app/exercises/page.tsx to use optimized videos
# Change .mov to .mp4 and add /optimized/ path

# 4. Test locally
npm run dev

# 5. Commit optimized videos
git add public/videos/optimized/
git commit -m "Add optimized video files"
```

## 📝 Manual Compression (if script doesn't work)

```bash
ffmpeg -i public/videos/tummy1.mov \
  -c:v libx264 \
  -preset slow \
  -crf 28 \
  -vf "scale='min(1280,iw)':'min(720,ih)':force_original_aspect_ratio=decrease" \
  -r 30 \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  public/videos/optimized/tummy1.mp4
```

Repeat for each video file.

## ⚠️ Important Notes

- Keep original `.mov` files as backups (they're already excluded from git)
- Optimized videos can be committed to git (they're under 100MB)
- Test video quality before deleting originals
- Consider using a CDN for production for better performance
