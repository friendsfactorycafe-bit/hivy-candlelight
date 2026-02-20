#!/bin/bash
# Unify color scheme to romantic wine-red + amber theme
# Replace yellow-* with rose-* across all FFC components

cd "/Applications/CAFE BUSINESS ALL WEBSITES/HIVY/HIVY CANDLELIGHT"

# Files to update (FFC components only, not domain-template files)
FILES=(
  "components/ffc-keyword-page.tsx"
  "components/ffc-blog-post-page.tsx"
  "components/ffc-virtual-tour-page.tsx"
  "components/ffc-package-detail-page.tsx"
  "components/ffc-reviews-slider.tsx"
  "components/ffc-home-page.tsx"
  "components/ffc-service-page.tsx"
  "components/ffc-contact-page.tsx"
)

for f in "${FILES[@]}"; do
  echo "Updating $f..."
  # Replace yellow shades with rose shades (primary brand color)
  sed -i '' 's/yellow-950/rose-950/g' "$f"
  sed -i '' 's/yellow-900/rose-950/g' "$f"
  sed -i '' 's/yellow-800/rose-900/g' "$f"
  sed -i '' 's/yellow-700/rose-800/g' "$f"
  sed -i '' 's/yellow-600/rose-700/g' "$f"
  sed -i '' 's/yellow-500/rose-600/g' "$f"
done

echo "Color update complete!"

# Count remaining yellow references
echo "Remaining yellow refs:"
grep -c 'yellow-' "${FILES[@]}" 2>/dev/null || echo "None"
