---
title: "Compress Files - Compress & Decompress XZ Files | Online Free DevTools by Hexmos"
name: xz
path: /freedevtools/tldr/common/xz
canonical: "https://hexmos.com/freedevtools/tldr/common/xz/"
description: "Compress files effortlessly with XZ. Decompress XZ and LZMA archives using this command line tool. Free online tool, no registration required."
category: common
keywords:
- XZ compression
- XZ decompression
- LZMA compression
- LZMA decompression
- Command line compression
- File archive compression
- Linux compression
- MacOS compression
- XZ archive extraction
- Data compression tool
features:
- Compress files using XZ format.
- Decompress XZ and LZMA archives.
- Compress files using LZMA format.
- Output decompressed file to standard output.
- Control compression level for speed and size.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xz

> Compress or decompress XZ and LZMA files.
> More information: <https://manned.org/xz>.

- Compress a file using xz:

`xz {{path/to/file}}`

- Decompress an XZ file:

`xz {{[-d|--decompress]}} {{path/to/file.xz}}`

- Compress a file using lzma:

`xz {{[-F|--format]}} lzma {{path/to/file}}`

- Decompress an LZMA file:

`xz {{[-d|--decompress]}} {{[-F|--format]}} lzma {{path/to/file.lzma}}`

- Decompress a file and write to `stdout` (implies `--keep`):

`xz {{[-d|--decompress]}} {{[-c|--stdout]}} {{path/to/file.xz}}`

- Compress a file, but don't delete the original:

`xz {{[-k|--keep]}} {{path/to/file}}`

- Compress a file using the fastest compression:

`xz -0 {{path/to/file}}`

- Compress a file using the best compression:

`xz -9 {{path/to/file}}`
