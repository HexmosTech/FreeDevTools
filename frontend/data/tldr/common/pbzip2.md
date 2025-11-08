---
title: "Compress Files - Control pbzip2 Compression | Online Free DevTools by Hexmos"
name: pbzip2
path: "/freedevtools/tldr/common/pbzip2/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pbzip2/"
description: "Compress files efficiently with pbzip2, a parallel bzip2 implementation. Achieve faster compression rates with multi-core support. Free online tool, no registration required."
category: common
keywords:
- parallel bzip2 compression
- multi-core compression
- bzip2 file compressor
- linux file compression
- command line compression
- pbzip2 command usage
- bzip2 tar archive
- compressed file decompression
- parallel file compression
- bzip2 archive manager
features:
- Compress files in parallel using multiple processors.
- Decompress bzip2 archives quickly.
- Integrate with tar for compressed archives.
- Specify the number of processors to use.
- Display help information for command usage.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pbzip2

> A parallel implementation of the `bzip2` file compressor.
> See also: `bzip2`, `tar`.
> More information: <https://manned.org/pbzip2>.

- Compress a file:

`pbzip2 {{path/to/file}}`

- Compress a file using the specified number of processors:

`pbzip2 -p{{4}} {{path/to/file}}`

- Compress in combination with tar (options can be passed to `pbzip2`):

`tar -cf {{path/to/compressed_file}}.tar.bz2 {{[-I|--use-compress-program]}} "pbzip2 {{-option1 -option2 ...}}" {{path/to/file}}`

- Decompress a file:

`pbzip2 {{[-d|--decompress]}} {{path/to/compressed_file.bz2}}`

- Display help:

`pbzip2 {{[-h|--help]}}`
