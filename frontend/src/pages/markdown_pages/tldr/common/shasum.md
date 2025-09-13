---
title: "Generate SHA Checksums - Verify File Integrity | Free DevTools"
name: shasum
path: /freedevtools/tldr/common/shasum
canonical: "https://hexmos.com/freedevtools/tldr/common/shasum/"
description: "Generate SHA checksums with Shasum. Quickly calculate and verify file integrity using various SHA algorithms. Free online tool, no registration required."
category: common
keywords:
- SHA checksum generator
- File integrity checker
- SHA1 checksum
- SHA256 checksum
- SHA512 checksum
- Cryptographic hash calculator
- Linux checksum tool
- MacOS checksum utility
- Command line checksum
- Hash value verification
features:
- Calculate SHA checksums for files
- Verify file integrity against known checksums
- Support various SHA algorithms (SHA1, SHA224, SHA256, SHA384, SHA512)
- Read checksums from stdin
- Check checksums against a file of SHA checksums
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# shasum

> Calculate SHA cryptographic checksums.
> More information: <https://manned.org/shasum>.

- Calculate the SHA1 checksum for one or more files:

`shasum {{path/to/file1 path/to/file2 ...}}`

- Calculate the SHA checksum for one or more files with the specified algorithm:

`shasum --algorithm {{1|224|256|384|512|512224|512256}} {{path/to/file1 path/to/file2 ...}}`

- Calculate a SHA1 checksum from `stdin`:

`{{command}} | shasum`

- Calculate and save the list of SHA256 checksums to a file:

`shasum --algorithm 256 {{path/to/file1 path/to/file2 ...}} > {{path/to/file.sha256}}`

- Read a file of SHA checksums and filenames and verify all files have matching checksums (the algorithm will be automatically detected):

`shasum {{[-c|--check]}} {{path/to/file}}`

- Only show a message for missing files or when verification fails:

`shasum {{[-c|--check]}} --quiet {{path/to/file}}`

- Only show a message when verification fails, ignoring missing files:

`shasum --ignore-missing {{[-c|--check]}} --quiet {{path/to/file}}`

- Check a known SHA checksum of a file:

`echo {{known_sha_checksum_of_the_file}} {{path/to/file}} | shasum {{[-c|--check]}}`
