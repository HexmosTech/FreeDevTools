---
title: "Create ISO Images - Generate ISO Files with mkisofs | Online Free DevTools by Hexmos"
name: mkisofs
path: "/freedevtools/tldr/linux/mkisofs/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/mkisofs/"
description: "Generate ISO images with mkisofs, a powerful command-line tool for creating ISO9660 disk images from directories.  Easily create custom ISO files. Free online tool, no registration required."
category: linux
keywords:
  - iso image creation
  - mkisofs command
  - iso9660 generator
  - linux iso creation
  - create iso from directory
  - genisoimage alternative
  - command-line iso creation
  - disk image creation
  - iso file generator
  - system image creation
features:
  - Creates ISO9660 compliant disk images.
  - Allows specifying a volume label for the ISO.
  - Supports creating ISOs from directories and files.
  - Enables customization of ISO image settings.
  - Provides a command-line interface for easy automation.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mkisofs

> Create ISO files from directories.
> Also aliased as `genisoimage`.
> More information: <https://manned.org/mkisofs>.

- Create an ISO from a directory:

`mkisofs -o {{filename.iso}} {{path/to/source_directory}}`

- Set the disc label when creating an ISO:

`mkisofs -o {{filename.iso}} -V "{{label_name}}" {{path/to/source_directory}}`
