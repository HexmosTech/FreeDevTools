---
title: "Calculate BLAKE2 Checksums - Verify File Integrity | Online Free DevTools by Hexmos"
name: b2sum
path: "/freedevtools/tldr/common/b2sum/"
canonical: "https://hexmos.com/freedevtools/tldr/common/b2sum/"
description: "Calculate BLAKE2 checksums with b2sum for robust file integrity verification. Generate and check file checksums effortlessly. Free online tool, no registration required."
category: common
keywords:
- BLAKE2 checksum generator
- file integrity checker
- cryptographic checksum tool
- b2sum command line
- Linux checksum utility
- checksum verification
- file hash calculator
- BLAKE2 hash algorithm
- data integrity validation
- command line checksum tool
features:
- Calculate BLAKE2 checksums for files
- Verify file integrity using checksums
- Generate checksums from standard input
- Check checksums against a checksum file
- Ignore missing files during verification
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# b2sum

> Calculate BLAKE2 cryptographic checksums.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/b2sum-invocation.html>.

- Calculate the BLAKE2 checksum for one or more files:

`b2sum {{path/to/file1 path/to/file2 ...}}`

- Calculate and save the list of BLAKE2 checksums to a file:

`b2sum {{path/to/file1 path/to/file2 ...}} > {{path/to/file.b2}}`

- Calculate a BLAKE2 checksum from `stdin`:

`{{command}} | b2sum`

- Read a file of BLAKE2 checksums and filenames and verify all files have matching checksums:

`b2sum {{[-c|--check]}} {{path/to/file.b2}}`

- Only show a message for missing files or when verification fails:

`b2sum {{[-c|--check]}} --quiet {{path/to/file.b2}}`

- Only show a message when verification fails, ignoring missing files:

`b2sum --ignore-missing {{[-c|--check]}} --quiet {{path/to/file.b2}}`

- Check a known BLAKE2 checksum of a file:

`echo {{known_blake2_checksum_of_the_file}} {{path/to/file}} | b2sum {{[-c|--check]}}`
