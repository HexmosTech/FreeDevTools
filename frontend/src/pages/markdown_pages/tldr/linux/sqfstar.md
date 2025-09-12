---
title: "Create SquashFS - From Tar Archive | Free DevTools"
name: sqfstar
path: /freedevtools/tldr/linux/sqfstar
canonical: "https://hexmos.com/freedevtools/tldr/linux/sqfstar/"
description: "Create SquashFS filesystems with sqfstar. Compress and package directories into efficient archives. Free online tool, no registration required."
category: linux
keywords:
- squashfs creator
- squashfs from tar
- linux archive tool
- filesystem creation
- data compression
- tar to squashfs conversion
- archive management linux
- linux filesystem tool
- sqfstar command
- squashfs tool
features:
- Create squashfs filesystems from tar archives
- Compress filesystems using gzip, lzo, lz4, xz, zstd, or lzma
- Exclude specific files or file patterns from the filesystem
- Support for tar archives compressed with gzip, xz, zstd, and lz4
- Regex-based file exclusion for fine-grained control
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sqfstar

> Create a squashfs filesystem from a tar archive.
> More information: <https://manned.org/sqfstar>.

- Create a squashfs filesystem (compressed using `gzip` by default) from an uncompressed tar archive:

`sqfstar {{filesystem.squashfs}} < {{archive.tar}}`

- Create a squashfs filesystem from a tar archive compressed with `gzip`, and [comp]ress the filesystem using a specific algorithm:

`zcat {{archive.tar.gz}} | sqfstar -comp {{gzip|lzo|lz4|xz|zstd|lzma}} {{filesystem.squashfs}}`

- Create a squashfs filesystem from a tar archive compressed with `xz`, excluding some of the files:

`xzcat {{archive.tar.xz}} | sqfstar {{filesystem.squashfs}} {{file1 file2 ...}}`

- Create a squashfs filesystem from a tar archive compressed with `zstd`, excluding files ending with `.gz`:

`zstdcat {{archive.tar.zst}} | sqfstar {{filesystem.squashfs}} "{{*.gz}}"`

- Create a squashfs filesystem from a tar archive compressed with `lz4`, excluding files matching a `regex`:

`lz4cat {{archive.tar.lz4}} | sqfstar {{filesystem.squashfs}} -regex "{{regex}}"`
