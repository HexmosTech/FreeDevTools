---
title: "List Files - Analyze Image Files with fls | Free DevTools"
name: fls
path: /freedevtools/tldr/common/fls
canonical: "https://hexmos.com/freedevtools/tldr/common/fls/"
description: "Analyze image files with fls. Easily list files and directories within image files and devices, recover deleted files. Free online tool, no registration required."
category: common
keywords:
- image file analysis
- disk image forensics
- file system listing
- deleted file recovery
- forensic data recovery
- Sleuth Kit fls command
- Linux disk analysis
- macOS disk analysis
- Windows disk image
- disk image metadata
features:
- List files in an image file or device
- Recursively analyze a device to list paths
- Analyze a single partition with sector offset
- Analyze a single partition with timezone data
- Recover deleted files from image files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fls

> List files and directories in an image file or device.
> More information: <https://wiki.sleuthkit.org/index.php?title=Fls>.

- Build a recursive fls list over a device, output paths will start with C:

`fls -r -m {{C:}} {{/dev/loop1p1}}`

- Analyze a single partition, providing the sector offset at which the filesystem starts in the image:

`fls -r -m {{C:}} -o {{sector}} {{path/to/image_file}}`

- Analyze a single partition, providing the timezone of the original system:

`fls -r -m {{C:}} -z {{timezone}} {{/dev/loop1p1}}`
