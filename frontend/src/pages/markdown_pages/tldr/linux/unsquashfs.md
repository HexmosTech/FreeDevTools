---
title: "Unsquashfs - Extract Squashfs Filesystems | Online Free DevTools by Hexmos"
name: unsquashfs
path: /freedevtools/tldr/linux/unsquashfs
canonical: "https://hexmos.com/freedevtools/tldr/linux/unsquashfs/"
description: "Extract Squashfs filesystems with unsquashfs.  List and inspect files within Squashfs archives without extraction. Free online tool, no registration required."
category: linux
keywords:
  - squashfs extraction
  - squashfs command
  - squashfs listing
  - linux squashfs
  - unsquashfs linux
  - extract squashfs files
  - list squashfs files
  - inspect squashfs
  - filesystem extraction
  - command line squashfs
features:
  - Extract Squashfs filesystems to a specified directory.
  - List files within a Squashfs filesystem without extraction.
  - Display detailed file information during extraction.
  - Support for various extraction options and parameters.
  - Efficiently handle large Squashfs archives.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# unsquashfs

> Uncompress, extract and list files in squashfs filesystems.
> More information: <https://manned.org/unsquashfs>.

- Extract a squashfs filesystem to `squashfs-root` in the current working directory:

`unsquashfs {{filesystem.squashfs}}`

- Extract a squashfs filesystem to the specified directory:

`unsquashfs {{[-d|-dest]}} {{path/to/directory}} {{filesystem.squashfs}}`

- Display the names of files as they are extracted:

`unsquashfs {{[-i|-info]}} {{filesystem.squashfs}}`

- Display the names of files and their attributes as they are extracted:

`unsquashfs {{[-li|-linfo]}} {{filesystem.squashfs}}`

- List files inside the squashfs filesystem (without extracting):

`unsquashfs {{[-l|-ls]}} {{filesystem.squashfs}}`

- List files and their attributes inside the squashfs filesystem (without extracting):

`unsquashfs {{[-ll|-lls]}} {{filesystem.squashfs}}`
