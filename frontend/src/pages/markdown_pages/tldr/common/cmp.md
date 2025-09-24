---
title: "Compare Files - Verify Data Integrity with Cmp | Online Free DevTools by Hexmos"
name: cmp
path: /freedevtools/tldr/common/cmp
canonical: "https://hexmos.com/freedevtools/tldr/common/cmp/"
description: "Compare files effortlessly with Cmp, ensuring data integrity and identifying differences byte by byte. Free online tool, no registration required. Great for checksum verification."
category: common
keywords:
- file comparison tool
- byte-by-byte compare
- data integrity verification
- file difference checker
- cmp command linux
- cmp command macos
- linux file compare
- compare files terminal
- checksum verification
- binary file comparison
features:
- Identifies the first byte difference between two files
- Outputs detailed information about differences, including byte number and value
- Provides verbose output for all differences found
- Suppresses standard output and relies only on exit status
- Compares files byte by byte for accurate analysis
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cmp

> Compare two files byte by byte.
> More information: <https://www.gnu.org/software/diffutils/manual/diffutils.html#Invoking-cmp>.

- Output char and line number of the first difference between two files:

`cmp {{path/to/file1}} {{path/to/file2}}`

- Output info of the first difference: char, line number, bytes, and values:

`cmp {{[-b|--print-bytes]}} {{path/to/file1}} {{path/to/file2}}`

- Output the byte numbers and values of every difference:

`cmp {{[-l|--verbose]}} {{path/to/file1}} {{path/to/file2}}`

- Compare files but output nothing, yield only the exit status:

`cmp {{[-s|--quiet]}} {{path/to/file1}} {{path/to/file2}}`
