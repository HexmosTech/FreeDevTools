---
title: "Generate ISO Image - Create Filesystems | Online Free DevTools by Hexmos"
name: genisoimage
path: /freedevtools/tldr/linux/genisoimage
canonical: "https://hexmos.com/freedevtools/tldr/linux/genisoimage/"
description: "Generate ISO image files with genisoimage. Create ISO9660, Joliet, and HFS hybrid filesystems quickly. Free online tool, no registration required."
category: linux
keywords:
  - iso image generator
  - iso9660 generator
  - joliet filesystem
  - hfs filesystem
  - linux iso
  - command line iso
  - disk image creation
  - file system image
  - data image generator
  - iso creator
features:
  - Create ISO9660 filesystem images.
  - Create Joliet filesystem images.
  - Create HFS hybrid filesystem images.
  - Allow files larger than 2GiB.
  - Generate ISO image from directory.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# genisoimage

> Pre-mastering program to generate ISO9660/Joliet/HFS hybrid filesystems.
> More information: <https://manned.org/genisoimage.1>.

- Create an ISO image from the given source directory:

`genisoimage -o {{myimage.iso}} {{path/to/source_directory}}`

- Create an ISO image with files larger than 2GiB by reporting a smaller apparent size for ISO9660 filesystems:

`genisoimage -o -allow-limited-size {{myimage.iso}} {{path/to/source_directory}}`
