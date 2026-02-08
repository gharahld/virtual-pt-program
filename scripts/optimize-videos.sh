#!/bin/bash

# Video Optimization Script
# Converts .mov files to optimized .mp4 files for web delivery
# Requires ffmpeg: brew install ffmpeg (on macOS)

VIDEOS_DIR="public/videos"
OUTPUT_DIR="public/videos/optimized"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "🎬 Starting video optimization..."
echo ""

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ Error: ffmpeg is not installed."
    echo "Install it with: brew install ffmpeg"
    exit 1
fi

# Process each .mov file
for video in "$VIDEOS_DIR"/*.mov; do
    if [ -f "$video" ]; then
        filename=$(basename "$video" .mov)
        output="$OUTPUT_DIR/${filename}.mp4"
        
        echo "📹 Processing: $filename"
        
        # Convert to MP4 with optimization:
        # - H.264 codec (widely supported)
        # - CRF 28 (good quality/size balance)
        # - Scale to max 1280px width (maintains aspect ratio)
        # - 30fps (smooth playback)
        # - Optimized for web streaming
        ffmpeg -i "$video" \
            -c:v libx264 \
            -preset slow \
            -crf 28 \
            -vf "scale='min(1280,iw)':'min(720,ih)':force_original_aspect_ratio=decrease" \
            -r 30 \
            -c:a aac \
            -b:a 128k \
            -movflags +faststart \
            -y \
            "$output" 2>&1 | grep -E "(Duration|Stream|Output|error)" || true
        
        # Get file sizes
        original_size=$(du -h "$video" | cut -f1)
        new_size=$(du -h "$output" | cut -f1)
        
        echo "   ✅ Optimized: $original_size → $new_size"
        echo ""
    fi
done

echo "✨ Optimization complete!"
echo ""
echo "📊 Summary:"
echo "   Original videos: $VIDEOS_DIR/*.mov"
echo "   Optimized videos: $OUTPUT_DIR/*.mp4"
echo ""
echo "💡 Next steps:"
echo "   1. Test the optimized videos in your app"
echo "   2. Update video URLs in app/exercises/page.tsx to use /videos/optimized/"
echo "   3. Once confirmed, you can delete original .mov files to save space"
