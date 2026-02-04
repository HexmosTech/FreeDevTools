# Cheatsheet Hash Mismatch RCA

## Summary
- **Total cheatsheets**: 1120
- **Correct hashes**: 1118 (99.8%)
- **Mismatched hashes**: 2 (0.2%)

## Mismatched Entries

1. **vim/vimrc**
   - DB hash: `4095870139484364985`
   - Calculated hash: `4652357505520022511`
   - Difference: `556487366035657526`

2. **ide_editors/Notepad++_Cheatsheet**
   - DB hash: `-6736905067116807177`
   - Calculated hash: `7934633921927497400`
   - Difference: `14671538989044304577`

## Root Cause

The hash calculation in the code is **correct** and matches 99.8% of entries. The 2 mismatches appear to be:

1. **Data corruption**: Entries inserted with incorrect hash values
2. **Manual insertion**: Entries added outside the normal build process
3. **Legacy data**: Entries from an older database migration that used different hash calculation

## Hash Calculation

Current (correct) method:
```python
combined = category + slug
hash_bytes = hashlib.sha256(combined.encode('utf-8')).digest()
hash_id = int.from_bytes(hash_bytes[:8], byteorder='big', signed=True)
```

This matches the Go implementation in `internal/db/cheatsheets/utils.go`.

## Solution

### Option 1: Fix Database Entries (Recommended)
Run the fix script to recalculate and update the hash_ids:
```bash
python3 scripts/fix_cheatsheet_hashes.py
```

### Option 2: Add Fallback Lookup
Add fallback to query by `category + slug` when hash lookup fails (already implemented but rejected for performance reasons).

## Impact

- **Performance**: Hash-based lookup is O(1) PRIMARY KEY lookup (fastest)
- **Fallback lookup**: Category+slug lookup uses unique index `idx_cheatsheet_category_slug` (still fast, O(log n))
- **Affected routes**: `/freedevtools/c/vim/vimrc/` and `/freedevtools/c/ide_editors/Notepad++_Cheatsheet/` return 404

## Verification

Check for mismatches:
```bash
python3 scripts/check_cheatsheet_hashes.py
```

