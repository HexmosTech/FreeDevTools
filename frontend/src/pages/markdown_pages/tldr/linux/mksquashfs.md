---
title: "Create Squashfs Filesystems - mksquashfs | Online Free DevTools by Hexmos"
name: mksquashfs
path: /freedevtools/tldr/linux/mksquashfs
canonical: "https://hexmos.com/freedevtools/tldr/linux/mksquashfs/"
description: "Create squashfs filesystems with mksquashfs. Compress, exclude files, and build customized archives quickly. Free online tool, no registration required."
category: linux
keywords:
- Squashfs image creation
- Linux filesystem builder
- Create compressed archives
- Mksquashfs command examples
- Squashfs file exclusion
- Linux archive tool
- Gzip compression squashfs
- LZ4 compression squashfs
- Filesystem image generator
- Linux archive management
features:
- Create Squashfs filesystems from files and directories.
- Apply different compression algorithms to Squashfs filesystems (gzip, lzo, lz4, xz, zstd, lzma).
- Exclude specific files or directories from the Squashfs filesystem.
- Use wildcards to exclude files based on patterns.
- Utilize regular expressions to exclude files for advanced filtering.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mksquashfs

> Create or append files and directories to squashfs filesystems.
> More information: <https://manned.org/mksquashfs>.

- Create or append files and directories to a squashfs filesystem (compressed using `gzip` by default):

`mksquashfs {{path/to/file_or_directory1 path/to/file_or_directory2 ...}} {{filesystem.squashfs}}`

- Create or append files and directories to a squashfs filesystem, using a specific [comp]ression algorithm:

`mksquashfs {{path/to/file_or_directory1 path/to/file_or_directory2 ...}} {{filesystem.squashfs}} -comp {{gzip|lzo|lz4|xz|zstd|lzma}}`

- Create or append files and directories to a squashfs filesystem, [e]xcluding some of them:

`mksquashfs {{path/to/file_or_directory1 path/to/file_or_directory2 ...}} {{filesystem.squashfs}} -e {{file|directory1 file|directory2 ...}}`

- Create or append files and directories to a squashfs filesystem, [e]xcluding those ending with gzip:

`mksquashfs {{path/to/file_or_directory1 path/to/file_or_directory2 ...}} {{filesystem.squashfs}} -wildcards -e "{{*.gz}}"`

- Create or append files and directories to a squashfs filesystem, [e]xcluding those matching a `regex`:

`mksquashfs {{path/to/file_or_directory1 path/to/file_or_directory2 ...}} {{filesystem.squashfs}} -regex -e "{{regex}}"`
