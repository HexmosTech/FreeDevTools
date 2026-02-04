# Emoji Image Analysis Script

## Overview
This script analyzes the emoji database and compares it with the actual files on disk to identify missing images.

## Usage

```bash
# From project root
go run scripts/emojis/analyze_missing_images.go
```

## Output

The script generates:
1. **Console output**: Summary statistics and top missing files
2. **Detailed report file**: `scripts/emojis/missing_images_report.txt` containing:
   - Overall statistics (total, found, missing)
   - Statistics by image type (apple-vendor, twemoji-vendor, ms-fluentui)
   - Complete list of all missing files
   - Missing files grouped by emoji slug

## Report Statistics

- **Total Images in Database**: All image records in the `images` table
- **Images Found on Disk**: Files that actually exist in the `public/emojis/` directory
- **Images Missing from Disk**: Database records with no corresponding file

## Image Types Analyzed

- `apple-vendor`: Apple iOS emoji images
- `twemoji-vendor`: Twitter/Twemoji emoji images  
- `ms-fluentui`: Microsoft Fluent UI emoji images

## File Path Structure

The script checks for files at:
- Apple: `public/emojis/{emoji_slug}/apple-emojis/{filename}`
- Others: `public/emojis/{emoji_slug}/{filename}`

## Example Output

```
OVERALL STATISTICS
--------------------------------------------------------------------------------
Total Images in Database:      105345
Images Found on Disk:           49086 (46.60%)
Images Missing from Disk:       56259 (53.40%)

STATISTICS BY IMAGE TYPE
--------------------------------------------------------------------------------
Image Type                Total     Exists    Missing    Missing %
--------------------------------------------------------------------------------
apple-vendor              47331      23197      24134       50.99%
ms-fluentui                2442        967       1475       60.40%
twemoji-vendor            55572      24922      30650       55.15%
```

