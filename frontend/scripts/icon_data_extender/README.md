# Icon Data Extender

This directory contains scripts and data for adding SVG icons to the PNG icons database.

## Usage

### Step 1: Add SVG files

Place your SVG files in the `svgs/` directory:

```bash
scripts/icon_data_extender/svgs/your-icon.svg
```

### Step 2: Generate JSON using Cursor

Add the following prompt in Cursor and link the new SVG files as context:

```
I have SVG files in the svgs directory that need to be added to icons_data.json.

For each SVG file, I need you to:
1. Read the SVG file content
2. Convert it to base64
3. Extract the cluster and name from the path (format: /freedevtools/png_icons/{cluster}/{name}/)
4. Generate the URL hash using SHA256 (first 8 bytes as int64, matching Go implementation)
5. Look up similar icons from the same cluster in the database to get proper values for:
   - usecases: A descriptive sentence about where to use this icon
   - synonyms: Array of 4 alternative names/terms
   - tags: Array of relevant tags (include "png", "icon", "raster", plus descriptive tags)
   - industry: Description of applicable industries
   - emotional_cues: What the icon conveys emotionally
6. Create proper name (title case, underscores to spaces)
7. Create proper category (title case)
8. Generate description: "Free {proper_name} icon from {proper_category} category"
9. Generate img_alt: "{proper_name} icon"
10. Set updated_at to current ISO timestamp

The JSON structure should match the existing icons_data.json format with all required fields:
- cluster
- name
- base64
- url (without trailing slash)
- url_hash (as string)
- description
- usecases
- synonyms (array)
- tags (array)
- industry
- emotional_cues
- enhanced (0)
- img_alt
- updated_at

Add the new icon entries to the icons array in icons_data.json, maintaining the existing format.
```

**Important:** Make sure to:

- Link all the new SVG files in the `svgs/` directory as context
- Link the existing `icons_data.json` file as context
- Link the database query results or similar icons as reference

### Step 3: Run import script

After updating `icons_data.json`, run the import script:

```bash
cd scripts/icon_data_extender
python3 import_to_db.py
```

This will:

- Copy SVG files from `svgs/` to `public/svg_icons/{cluster}/{name}.svg`
- Import all icons from `icons_data.json` into the PNG icons database

### Step 4: Upload SVG files to B2 (optional)

After importing, upload the specific SVG files to Backblaze B2:

```bash
# Upload a specific file
make update-public-file-to-b2 file=public/svg_icons/interstellar/6180_the_moon.svg

# Or upload multiple files (one at a time)
make update-public-file-to-b2 file=public/svg_icons/service/3839_tool_service.svg
```

**Note:** The `update-public-to-b2` command uploads the entire public directory (takes hours), so use `update-public-file-to-b2` for individual files.

This will:

- Read `icons_data.json`
- Ensure the database schema has the `url_hash` column
- Insert all icons into the PNG icons database at `db/all_dbs/png-icons-db-v5.db`

## File Structure

```
scripts/icon_data_extender/
├── README.md           # This file
├── svgs/              # Place SVG files here
│   └── *.svg
└── icons_data.json    # Generated JSON with icon data
```

## Example

1. Add `moon.svg` to `svgs/` directory
2. Use Cursor prompt with `moon.svg` and `icons_data.json` as context
3. Cursor generates JSON entry with all required fields
4. Run `python3 import_to_db.py`
5. Icon is now in the database!

## Notes

- The `url_hash` is calculated from the URL (without trailing slash) using SHA256
- All fields should match the format of existing icons in the database
- Use `INSERT OR IGNORE` to avoid duplicates based on cluster/name combination
