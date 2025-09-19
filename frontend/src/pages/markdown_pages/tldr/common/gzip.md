---
title: "Gzip - Compress and Decompress Files | Online Free DevTools by Hexmos"
name: gzip
path: /freedevtools/tldr/common/gzip
canonical: "https://hexmos.com/freedevtools/tldr/common/gzip/"
description: "Compress files with Gzip. Quickly archive, decompress, and manage files using the command line. Free online tool, no registration required. Secondary keyword: file compression."
category: common
keywords:
- gzip compression
- file compression utility
- compress files linux
- decompress gzip archive
- linux gzip command
- macos gzip command
- gzip archive management
- compress large files
- gzip command line
- file archiving tool
features:
- Compress files into gzip archives
- Decompress gzip archives back to original files
- Specify compression level for customized archiving
- Keep original files after compression with option
- Display compression statistics for detailed analysis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gzip

> Compress/uncompress files with `gzip` compression (LZ77).
> More information: <https://www.gnu.org/software/gzip/manual/gzip.html>.

- Compress a file, replacing it with a `gzip` archive:

`gzip {{path/to/file}}`

- Decompress a file, replacing it with the original uncompressed version:

`gzip {{[-d|--decompress]}} {{path/to/file.gz}}`

- Compress a file, keeping the original file:

`gzip {{[-k|--keep]}} {{path/to/file}}`

- Compress a file, specifying the output filename:

`gzip {{[-c|--stdout]}} {{path/to/file}} > {{path/to/compressed_file.gz}}`

- Decompress a `gzip` archive specifying the output filename:

`gzip {{[-c|--stdout]}} {{[-d|--decompress]}} {{path/to/file.gz}} > {{path/to/uncompressed_file}}`

- Specify the compression level. 1 is the fastest (low compression), 9 is the slowest (high compression), 6 is the default:

`gzip -{{1..9}} {{[-c|--stdout]}} {{path/to/file}} > {{path/to/compressed_file.gz}}`

- Display the name and reduction percentage for each file compressed or decompressed:

`gzip {{[-v|--verbose]}} {{[-d|--decompress]}} {{path/to/file.gz}}`
