---
title: "Compress Files - bzip3 Statistical Compression | Free DevTools"
name: bzip3
path: /freedevtools/tldr/common/bzip3
canonical: "https://hexmos.com/freedevtools/tldr/common/bzip3/"
description: "Compress files statistically with bzip3, a powerful file compression utility. Achieve efficient data archiving and reduce storage space on Linux. Free online tool, no registration required."
category: common
keywords:
- bzip3 compression
- statistical file compressor
- data archiving tool
- bzip3 linux command
- file compression utility
- bzip3 decompression
- compressed file integrity check
- bzip3 verbose output
- linux compression tools
- bzip3 command-line
features:
- Compress files using statistical methods
- Decompress bzip3 compressed files
- Test the integrity of compressed archives
- Display verbose compression ratio information
- Decompress files directly to standard output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bzip3

> An efficient statistical file compressor.
> More information: <https://manned.org/bzip3>.

- Compress a file:

`bzip3 {{path/to/file_to_compress}}`

- Decompress a file:

`bzip3 {{[-d|--decode]}} {{path/to/compressed_file.bz3}}`

- Decompress a file to `stdout`:

`bzip3 {{[-dc|--decode --stdout]}} {{path/to/compressed_file.bz3}}`

- Test the integrity of each file inside the archive file:

`bzip3 {{[-t|--test]}} {{path/to/compressed_file.bz3}}`

- Show the compression ratio for each file processed with detailed information:

`bzip3 {{[-v|--verbose]}} {{path/to/compressed_files.bz3}}`

- Decompress a file overwriting existing files:

`bzip3 {{[-d|--decode]}} {{[-f|--force]}} {{path/to/compressed_file.bz3}}`

- Display help:

`bzip3 {{[-h|--help]}}`
