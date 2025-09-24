---
title: "Generate MD5 Checksums - Verify File Integrity | Online Free DevTools by Hexmos"
name: md5sum
path: /freedevtools/tldr/common/md5sum
canonical: "https://hexmos.com/freedevtools/tldr/common/md5sum/"
description: "Generate MD5 checksums with md5sum for file integrity verification. Securely validate file contents and ensure data authenticity. Free online tool, no registration required."
category: common
keywords:
- MD5 checksum generator
- File integrity checker
- Hash calculator
- Data validation
- Linux md5sum command
- macOS md5sum command
- Cryptographic checksum tool
- File verification utility
- Command-line hash tool
- Secure file checksum
features:
- Calculate MD5 checksums for files
- Verify file integrity using checksums
- Generate checksums from standard input
- Check checksums against a file of checksums
- Ignore missing files during verification
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# md5sum

> Calculate MD5 cryptographic checksums.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/md5sum-invocation.html>.

- Calculate the MD5 checksum for one or more files:

`md5sum {{path/to/file1 path/to/file2 ...}}`

- Calculate and save the list of MD5 checksums to a file:

`md5sum {{path/to/file1 path/to/file2 ...}} > {{path/to/file.md5}}`

- Calculate an MD5 checksum from `stdin`:

`{{command}} | md5sum`

- Read a file of MD5 checksums and filenames and verify all files have matching checksums:

`md5sum {{[-c|--check]}} {{path/to/file.md5}}`

- Only show a message for missing files or when verification fails:

`md5sum {{[-c|--check]}} --quiet {{path/to/file.md5}}`

- Only show a message when verification fails, ignoring missing files:

`md5sum --ignore-missing {{[-c|--check]}} --quiet {{path/to/file.md5}}`

- Check a known MD5 checksum of a file:

`echo {{known_md5_checksum_of_the_file}} {{path/to/file}} | md5sum {{[-c|--check]}}`
