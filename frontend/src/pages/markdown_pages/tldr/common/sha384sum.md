---
title: "Generate SHA384 Checksum - Verify File Integrity | Free DevTools"
name: sha384sum
path: /freedevtools/tldr/common/sha384sum
canonical: "https://hexmos.com/freedevtools/tldr/common/sha384sum/"
description: "Generate SHA384 checksums with sha384sum for file integrity verification. Securely check file hashes and validate data authenticity. Free online tool, no registration required."
category: common
keywords:
- SHA384 checksum generator
- File integrity checker
- Hash verification tool
- SHA384 hash calculator
- Linux checksum utility
- MacOS sha384sum
- File authentication tool
- Cryptographic checksum generator
- Data integrity validation
- Secure file verification
features:
- Calculate SHA384 checksums for files
- Verify SHA384 checksums against a file
- Generate checksums from standard input
- Ignore missing files during verification
- Check known SHA384 checksums of files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sha384sum

> Calculate SHA384 cryptographic checksums.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/sha2-utilities.html>.

- Calculate the SHA384 checksum for one or more files:

`sha384sum {{path/to/file1 path/to/file2 ...}}`

- Calculate and save the list of SHA384 checksums to a file:

`sha384sum {{path/to/file1 path/to/file2 ...}} > {{path/to/file.sha384}}`

- Calculate a SHA384 checksum from `stdin`:

`{{command}} | sha384sum`

- Read a file of SHA384 checksums and filenames and verify all files have matching checksums:

`sha384sum {{[-c|--check]}} {{path/to/file.sha384}}`

- Only show a message for missing files or when verification fails:

`sha384sum {{[-c|--check]}} --quiet {{path/to/file.sha384}}`

- Only show a message when verification fails, ignoring missing files:

`sha384sum --ignore-missing {{[-c|--check]}} --quiet {{path/to/file.sha384}}`

- Check a known SHA384 checksum of a file:

`echo {{known_sha384_checksum_of_the_file}} {{path/to/file}} | sha384sum {{[-c|--check]}}`
