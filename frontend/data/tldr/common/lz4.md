---
title: "LZ4 Compressor - Compress and Decompress LZ4 Files | Online Free DevTools by Hexmos"
name: lz4
path: "/freedevtools/tldr/common/lz4/"
canonical: "https://hexmos.com/freedevtools/tldr/common/lz4/"
description: "Compress and decompress files with LZ4 Compressor. Efficiently manage LZ4 archives with this command-line utility. Free online tool, no registration required."
category: common
keywords:
- LZ4 compressor
- LZ4 decompressor
- LZ4 archive
- file compression
- data decompression
- command line compression
- linux compression
- macos compression
- lz4 cli
- fast compression algorithm
features:
- Compress files into LZ4 archives
- Decompress LZ4 files
- Decompress LZ4 to standard output
- Compress directories with tar and LZ4
- Use best compression level for optimal size
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lz4

> Compress or decompress .lz4 files.
> More information: <https://github.com/lz4/lz4>.

- Compress a file:

`lz4 {{path/to/file}}`

- Decompress a file:

`lz4 {{[-d|--decompress]}} {{file.lz4}}`

- Decompress a file and write to `stdout`:

`lz4 {{[-dc|--decompress --stdout]}} {{file.lz4}}`

- Package and compress a directory and its contents:

`tar cvf - {{path/to/directory}} | lz4 - {{dir.tar.lz4}}`

- Decompress and unpack a directory and its contents:

`lz4 {{[-dc|--decompress --stdout]}} {{dir.tar.lz4}} | tar -xv`

- Compress a file using the best compression:

`lz4 {{[-12|--best]}} {{path/to/file}}`
