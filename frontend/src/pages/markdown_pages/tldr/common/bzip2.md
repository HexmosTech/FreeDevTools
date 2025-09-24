---
title: "Compress Files - bzip2 Block-Sorting Compression | Online Free DevTools by Hexmos"
name: bzip2
path: /freedevtools/tldr/common/bzip2
canonical: "https://hexmos.com/freedevtools/tldr/common/bzip2/"
description: "Compress files efficiently with bzip2, a block-sorting compression tool. Reduce file sizes and improve storage utilization with this powerful command-line utility. Free online tool, no registration required."
category: common
keywords:
- bzip2 file compression
- block-sorting compression
- command-line compressor
- bz2 archive utility
- linux file compression
- unix bzip2 command
- file decompression tool
- bzip2 archive integrity check
- compress large files
- bzip2 verbose compression
features:
- Compress files using block-sorting compression
- Decompress bzip2 archives
- Test the integrity of compressed files
- Display compression ratio and verbose output
- Force decompression and overwrite existing files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bzip2

> A block-sorting file compressor.
> See also: `bzcat`, `bunzip2`, `bzip2recover`.
> More information: <https://manned.org/bzip2>.

- Compress a file:

`bzip2 {{path/to/file_to_compress}}`

- Decompress a file:

`bzip2 {{[-d|--decompress]}} {{path/to/compressed_file.bz2}}`

- Decompress a file to `stdout`:

`bzip2 {{[-dc|--decompress --stdout]}} {{path/to/compressed_file.bz2}}`

- Test the integrity of each file inside the archive file:

`bzip2 {{[-t|--test]}} {{path/to/compressed_file.bz2}}`

- Show the compression ratio for each file processed with detailed information:

`bzip2 {{[-v|--verbose]}} {{path/to/compressed_files.bz2}}`

- Decompress a file overwriting existing files:

`bzip2 {{[-f|--force]}} {{path/to/compressed_file.bz2}}`

- Display help:

`bzip2 {{[-h|--help]}}`
