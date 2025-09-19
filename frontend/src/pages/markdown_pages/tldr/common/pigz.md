---
title: "Compress Files - Pigz Multithreaded Compression | Online Free DevTools by Hexmos"
name: pigz
path: /freedevtools/tldr/common/pigz
canonical: "https://hexmos.com/freedevtools/tldr/common/pigz/"
description: "Compress files efficiently with Pigz, a multithreaded gzip implementation. Accelerate file compression and decompression on Linux and macOS. Free online tool, no registration required."
category: common
keywords:
- Gzip compression
- Multithreaded compression
- File compression
- Tar gzip archive
- Pigz command line
- Zlib compression utility
- Linux compression
- macOS compression
- Parallel compression
- Archive compression
features:
- Compress files using multiple processors for faster execution
- Decompress gzip archives easily
- List the contents of compressed archives
- Compress directories using tar and pigz together
- Control compression level for optimal size and speed
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pigz

> Multithreaded zlib compression utility.
> More information: <https://github.com/madler/pigz>.

- Compress a file with default options:

`pigz {{path/to/file}}`

- Compress a file using the best compression method:

`pigz {{[-9|--best]}} {{path/to/file}}`

- Compress a file using no compression and 4 processors:

`pigz -0 {{[-p|--processes]}} {{4}} {{path/to/file}}`

- Compress a directory using tar:

`tar cf - {{path/to/directory}} | pigz > {{path/to/file.tar.gz}}`

- Decompress a file:

`pigz {{[-d|--decompress]}} {{archive.gz}}`

- List the contents of an archive:

`pigz {{[-l|--list]}} {{archive.tar.gz}}`
