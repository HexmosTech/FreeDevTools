---
title: "Compare XZ Files - Check Compressed Files | Online Free DevTools by Hexmos"
name: xzcmp
path: "/freedevtools/tldr/common/xzcmp"
canonical: "https://hexmos.com/freedevtools/tldr/common/xzcmp/"
description: "Compare XZ files with xzcmp, verifying content of xz, lzma, gzip, bzip2, lzop, or zstd compressed archives. Lightweight CLI utility. Free online tool, no registration required."
category: common
keywords:
- XZ archive comparison
- LZMA file checker
- GZIP data verification
- BZIP2 content validation
- LZO file comparator
- ZSTD archive tester
- Compressed file comparison
- Linux file check
- macOS file verification
- CLI archive compare
features:
- Compares files compressed with xz algorithm.
- Supports lzma, gzip, bzip2, lzop, and zstd formats.
- Passes options directly to the `cmp` command.
- Verifies content of compressed archives.
- Provides a command-line interface for file comparison.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xzcmp

> Invokes `cmp` on files compressed with `xz`, `lzma`, `gzip`, `bzip2`, `lzop`, or `zstd`.
> All options specified are passed directly to `cmp`.
> More information: <https://manned.org/xzcmp>.

- Compare two specific files:

`xzcmp {{path/to/file1}} {{path/to/file2}}`
