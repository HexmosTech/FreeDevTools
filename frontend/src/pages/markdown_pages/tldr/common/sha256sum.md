---
title: "Generate SHA256 Checksums - Verify File Integrity | Free DevTools"
name: sha256sum
path: /freedevtools/tldr/common/sha256sum
canonical: "https://hexmos.com/freedevtools/tldr/common/sha256sum/"
description: "Generate SHA256 hashes with sha256sum. Verify file integrity and ensure data authenticity using checksum comparison. Free online tool, no registration required."
category: common
keywords:
- SHA256 checksum generator
- file integrity verification
- cryptographic hash calculator
- sha256sum command line
- linux checksum utility
- macos checksum tool
- gnu coreutils sha256
- file hash verification
- data integrity check
- checksum validation tool
features:
- Calculate SHA256 checksums for files
- Verify file integrity against known checksums
- Generate checksums from standard input (stdin)
- Ignore missing files during checksum verification
- Check a known SHA256 checksum against a file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sha256sum

> Calculate SHA256 cryptographic checksums.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/sha2-utilities.html>.

- Calculate the SHA256 checksum for one or more files:

`sha256sum {{path/to/file1 path/to/file2 ...}}`

- Calculate and save the list of SHA256 checksums to a file:

`sha256sum {{path/to/file1 path/to/file2 ...}} > {{path/to/file.sha256}}`

- Calculate a SHA256 checksum from `stdin`:

`{{command}} | sha256sum`

- Read a file of SHA256 checksums and filenames and verify all files have matching checksums:

`sha256sum {{[-c|--check]}} {{path/to/file.sha256}}`

- Only show a message for missing files or when verification fails:

`sha256sum {{[-c|--check]}} --quiet {{path/to/file.sha256}}`

- Only show a message when verification fails, ignoring missing files:

`sha256sum --ignore-missing {{[-c|--check]}} --quiet {{path/to/file.sha256}}`

- Check a known SHA256 checksum of a file:

`echo {{known_sha256_checksum_of_the_file}} {{path/to/file}} | sha256sum {{[-c|--check]}}`
