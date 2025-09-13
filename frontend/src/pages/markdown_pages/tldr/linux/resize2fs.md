---
title: "Resize2fs - Resize Linux Filesystems | Free DevTools"
name: resize2fs
path: /freedevtools/tldr/linux/resize2fs
canonical: "https://hexmos.com/freedevtools/tldr/linux/resize2fs/"
description: "Resize filesystems with Resize2fs. Adjust ext2/3/4 partition sizes. Free online tool, no registration required."
category: linux
keywords:
- filesystem resize linux
- ext2 resize linux
- ext3 resize linux
- ext4 resize linux
- resize2fs command
- linux filesystem management
- partition resize linux
- linux disk resize
- resize ext4 partition
- linux filesystem tools
features:
- Automatically resize filesystems to maximum size
- Resize filesystems to a specified size
- Shrink filesystems to minimum size
- Display progress during filesystem resizing
- Manage ext2, ext3, and ext4 filesystems
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# resize2fs

> Resize an ext2, ext3 or ext4 filesystem.
> Does not resize the underlying partition. The filesystem may have to be unmounted first, read the man page for more details.
> More information: <https://manned.org/resize2fs>.

- Automatically resize a filesystem to its maximum possible size:

`resize2fs {{/dev/sdXN}}`

- Resize the filesystem to a size of 40G, displaying a progress bar:

`resize2fs -p {{/dev/sdXN}} {{40G}}`

- Shrink the filesystem to its minimum possible size:

`resize2fs -M {{/dev/sdXN}}`
