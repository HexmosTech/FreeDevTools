---
title: "Calculate B3SUM Checksums - Verify File Integrity | Online Free DevTools by Hexmos"
name: b3sum
path: /freedevtools/tldr/common/b3sum
canonical: "https://hexmos.com/freedevtools/tldr/common/b3sum/"
description: "Calculate file checksums with B3SUM. Verify file integrity and detect corruption easily. Free online tool, no registration required."
category: common
keywords:
- B3SUM checksum generator
- BLAKE3 hash calculator
- file integrity checker
- checksum verification tool
- command line checksum
- cryptographic checksum tool
- Linux checksum utility
- macOS checksum generator
- Windows checksum checker
- file integrity validation
features:
- Calculate BLAKE3 checksums for files
- Verify file integrity against known checksums
- Generate checksums from standard input
- Check checksums from a file list
- Suppress output except for errors and missing files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# b3sum

> Calculate BLAKE3 cryptographic checksums.
> More information: <https://github.com/BLAKE3-team/BLAKE3/tree/master/b3sum>.

- Calculate the BLAKE3 checksum for one or more files:

`b3sum {{path/to/file1 path/to/file2 ...}}`

- Calculate and save the list of BLAKE3 checksums to a file:

`b3sum {{path/to/file1 path/to/file2 ...}} > {{path/to/file.b3}}`

- Calculate a BLAKE3 checksum from `stdin`:

`{{command}} | b3sum`

- Read a file of BLAKE3 checksums and filenames and verify all files have matching checksums:

`b3sum {{[-c|--check]}} {{path/to/file.b3}}`

- Only show a message for missing files or when verification fails:

`b3sum {{[-c|--check]}} --quiet {{path/to/file.b3}}`

- Check a known BLAKE3 checksum of a file:

`echo {{known_blake3_checksum_of_the_file}} {{path/to/file}} | b3sum {{[-c|--check]}}`
