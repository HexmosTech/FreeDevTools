---
title: "Disk Image Utility - Create & Manage Images | Online Free DevTools by Hexmos"
name: hdiutil
path: /freedevtools/tldr/osx/hdiutil
canonical: "https://hexmos.com/freedevtools/tldr/osx/hdiutil/"
description: "Create and manage disk images with hdiutil. Mount, unmount, and convert images easily with this command-line utility. Free online tool, no registration required."
category: osx
keywords:
- disk image utility
- disk image creation
- disk image management
- hdiutil macos
- iso image creation
- dmg file utility
- volume mounting tool
- disk image converter
- osx command line tools
- apple disk utility
features:
- Mount and unmount disk images
- Create ISO images from directories
- List all mounted disk images
- Convert between different disk image formats
- Verify and repair disk images
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hdiutil

> Utility to create and manage disk images.
> More information: <https://keith.github.io/xcode-man-pages/hdiutil.1.html>.

- Mount an image:

`hdiutil attach {{path/to/image_file}}`

- Unmount an image:

`hdiutil detach /Volumes/{{volume_file}}`

- List mounted images:

`hdiutil info`

- Create an ISO image from the contents of a directory:

`hdiutil makehybrid -o {{path/to/output_file}} {{path/to/directory}}`
