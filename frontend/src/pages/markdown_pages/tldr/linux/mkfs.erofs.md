---
title: "Create EROFS Filesystem - Format Image | Online Free DevTools by Hexmos"
name: mkfs.erofs
path: /freedevtools/tldr/linux/mkfs.erofs
canonical: "https://hexmos.com/freedevtools/tldr/linux/mkfs.erofs/"
description: "Create EROFS filesystem with mkfs.erofs. Generate compressed images and control file ownership. Free online tool, no registration required."
category: linux
keywords:
  - erofs filesystem image
  - create erofs image
  - format erofs volume
  - compress erofs
  - erofs uuid specification
  - erofs root ownership
  - linux filesystem creation
  - filesystem image generator
  - mkfs erofs command
  - erofs archive tool
features:
  - Create an EROFS filesystem image from a directory
  - Specify a UUID for the generated EROFS image
  - Create a compressed EROFS filesystem image
  - Set all files in the EROFS image to be owned by root
  - Generate a read-only filesystem image
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mkfs.erofs

> Create an EROFS filesystem in an image.
> More information: <https://manned.org/mkfs.erofs>.

- Create an EROFS filesystem based on the root directory:

`mkfs.erofs image.erofs root/`

- Create an EROFS image with a specific UUID:

`mkfs.erofs -U {{UUID}} image.erofs root/`

- Create a compressed EROFS image:

`mkfs.erofs -zlz4hc image.erofs root/`

- Create an EROFS image where all files are owned by root:

`mkfs.erofs --all-root image.erofs root/`
