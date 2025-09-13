---
title: "Calculate SHA224 Checksums - Verify File Integrity | Free DevTools"
name: sha224sum
path: /freedevtools/tldr/common/sha224sum
canonical: "https://hexmos.com/freedevtools/tldr/common/sha224sum/"
description: "Calculate SHA224 checksums with sha224sum to verify file integrity. Ensure data authenticity and detect file modifications. Free online tool, no registration required."
category: common
keywords:
- SHA224 checksum generator
- File integrity verification
- Cryptographic checksum calculator
- SHA224 hash utility
- Linux SHA224 command
- macOS SHA224 checksum
- Data authenticity checker
- File integrity checker
- SHA224 checksum verification
- Hash value generation
features:
- Calculate SHA224 checksums for files
- Verify file integrity using SHA224 checksums
- Calculate SHA224 checksums from stdin input
- Check SHA224 checksums against known values
- Ignore missing files during verification
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sha224sum

> Calculate SHA224 cryptographic checksums.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/sha2-utilities.html>.

- Calculate the SHA224 checksum for one or more files:

`sha224sum {{path/to/file1 path/to/file2 ...}}`

- Calculate and save the list of SHA224 checksums to a file:

`sha224sum {{path/to/file1 path/to/file2 ...}} > {{path/to/file.sha224}}`

- Calculate a SHA224 checksum from `stdin`:

`{{command}} | sha224sum`

- Read a file of SHA224 checksums and filenames and verify all files have matching checksums:

`sha224sum {{[-c|--check]}} {{path/to/file.sha224}}`

- Only show a message for missing files or when verification fails:

`sha224sum {{[-c|--check]}} --quiet {{path/to/file.sha224}}`

- Only show a message when verification fails, ignoring missing files:

`sha224sum --ignore-missing {{[-c|--check]}} --quiet {{path/to/file.sha224}}`

- Check a known SHA224 checksum of a file:

`echo {{known_sha224_checksum_of_the_file}} {{path/to/file}} | sha224sum {{[-c|--check]}}`
