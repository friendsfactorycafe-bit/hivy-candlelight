#!/bin/bash
cd "/Applications/CAFE BUSINESS ALL WEBSITES/HIVY/HIVY CANDLELIGHT/public"
mkdir -p images/gallery

# Map real Gallery images to SEO-friendly names
# Selected diverse, high-quality images across different dates

cp "Gallery/IMG_20250605_110426.jpg" "images/gallery/rooftop-romantic-setup-surat-1.jpg"
cp "Gallery/IMG_20250728_132613.jpg" "images/gallery/romantic-rooftop-candlelight-dinner-surat-1.jpg"
cp "Gallery/IMG_20250605_110554.jpg" "images/gallery/candlelight-dinner-setup-surat-1.jpg"
cp "Gallery/IMG-20240329-WA0017.jpg" "images/gallery/birthday-surprise-decoration-surat-1.jpg"
cp "Gallery/IMG-20250311-WA0013.jpg" "images/gallery/anniversary-celebration-surat-1.jpg"
cp "Gallery/IMG_20251113_193623113.jpg" "images/gallery/romantic-table-decoration-surat-1.jpg"
cp "Gallery/IMG-20240329-WA0018.jpg" "images/gallery/birthday-balloon-decoration-surat-1.jpg"
cp "Gallery/IMG-20250311-WA0023.jpg" "images/gallery/anniversary-dinner-setup-surat-1.jpg"
cp "Gallery/IMG_20251113_193712005.jpg" "images/gallery/romantic-ambiance-cafe-surat-1.jpg"
cp "Gallery/IMG-20250626-WA0007.jpg" "images/gallery/couple-celebration-surat-1.jpg"
cp "Gallery/IMG_20251113_193757799.jpg" "images/gallery/evening-romantic-celebration-surat-1.jpg"
cp "Gallery/IMG_20251113_194119370.jpg" "images/gallery/glass-house-dinner-surat-1.jpg"
cp "Gallery/IMG_20251113_194124065.jpg" "images/gallery/night-romantic-setup-surat-1.jpg"
cp "Gallery/IMG-20250311-WA0027.jpg" "images/gallery/proposal-setup-surat-1.jpg"
cp "Gallery/IMG-20250615-WA0021.jpg" "images/gallery/day-celebration-surat-1.jpg"
cp "Gallery/IMG-20250626-WA0011.jpg" "images/gallery/surprise-party-surat-1.jpg"
cp "Gallery/IMG-20250626-WA0015.jpg" "images/gallery/romantic-dinner-date-surat-1.jpg"
cp "Gallery/IMG-20250303-WA0009.jpg" "images/gallery/valentines-day-celebration-surat-1.jpg"
cp "Gallery/IMG-20250303-WA0015.jpg" "images/gallery/valentines-dinner-surat-1.jpg"
cp "Gallery/IMG-20250303-WA0019.jpg" "images/gallery/valentines-romantic-setup-surat-1.jpg"
cp "Gallery/IMG-20250303-WA0023.jpg" "images/gallery/birthday-surprise-for-girlfriend-surat-1.jpg"
cp "Gallery/IMG-20250303-WA0031.jpg" "images/gallery/birthday-surprise-for-boyfriend-surat-1.jpg"
cp "Gallery/IMG-20250303-WA0033.jpg" "images/gallery/birthday-room-decoration-surat-1.jpg"
cp "Gallery/IMG-20250303-WA0039.jpg" "images/gallery/couple-birthday-party-surat-1.jpg"
cp "Gallery/IMG-20250303-WA0041.jpg" "images/gallery/surprise-date-surat-1.jpg"
cp "Gallery/IMG-20250304-WA0005.jpg" "images/gallery/couple-moment-surat-1.jpg"
cp "Gallery/IMG-20250304-WA0009.jpg" "images/gallery/pre-wedding-photoshoot-surat-1.jpg"
cp "Gallery/IMG-20250311-WA0011.jpg" "images/gallery/pre-wedding-shoot-surat-1.jpg"
cp "Gallery/IMG-20250311-WA0029.jpg" "images/gallery/baby-shower-decoration-surat-1.jpg"
cp "Gallery/IMG-20250311-WA0035.jpg" "images/gallery/baby-moments-celebration-surat-1.jpg"
cp "Gallery/IMG-20240228-WA0002.jpg" "images/gallery/candlelight-dinner-for-couples-surat-1.jpg"
cp "Gallery/IMG_20250728_133939.jpg" "images/gallery/rooftop-dinner-surat-1.jpg"
cp "Gallery/IMG_20251027_192943952.jpg" "images/gallery/private-dining-surat-1.jpg"
cp "Gallery/IMG_20251122_200409169.jpg" "images/gallery/romantic-venue-surat-1.jpg"
cp "Gallery/IMG_20251122_200713421.jpg" "images/gallery/celebration-venue-surat-1.jpg"

# Copy videos with SEO-friendly names
cp "Gallery/1000030805_edited.mp4" "videos/birthday-celebration-video-surat-1.mp4"
cp "Gallery/20240516_155804_9a82dd0b-8093-4d98-bd3d-2fd9b1fd7808.MP4" "videos/anniversary-celebration-video-surat-1.mp4"
cp "Gallery/20241108_170507_f93c7cf5-f786-456a-baeb-54af2f03872c.MP4" "videos/rooftop-celebration-reel-surat-1.mp4"

echo "Gallery copy complete! $(ls images/gallery/ | wc -l) images, $(ls videos/*.mp4 2>/dev/null | wc -l) videos"
