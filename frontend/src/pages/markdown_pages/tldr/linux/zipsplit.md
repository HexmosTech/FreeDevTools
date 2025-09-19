---
title: "Zipsplit - Split Zip Archives into Smaller Parts | Online Free DevTools by Hexmos"
name: zipsplit
path: /freedevtools/tldr/linux/zipsplit
canonical: "https://hexmos.com/freedevtools/tldr/linux/zipsplit/"
description: "Split Zip archives with Zipsplit into smaller, manageable parts. Efficiently divide large archives for easier transfer and storage. Free online tool, no registration required."
category: linux
keywords:
- zip archive splitter
- split zip files
- zip file division
- zip archive partition
- linux zip utility
- command line zip split
- large zip file management
- split archive tool
- zipsplit linux command
- zip file processing
features:
- Splits a Zip archive into smaller parts based on size
- Allows specifying the maximum size for each split part
- Provides option to pause between creation of each part
- Enables outputting split archives to a specified directory
- Supports handling large Zip archives efficiently
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zipsplit

> Split a Zip archive into smaller Zip archives.
> More information: <https://manned.org/zipsplit>.

- Split Zip archive into parts that are no larger than 36000 bytes (36 MB):

`zipsplit {{path/to/archive.zip}}`

- Use a given [n]umber of bytes as the part limit:

`zipsplit -n {{size}} {{path/to/archive.zip}}`

- [p]ause between the creation of each part:

`zipsplit -p -n {{size}} {{path/to/archive.zip}}`

- Output the smaller Zip archives into a given directory:

`zipsplit -b {{path/to/output_directory}} -n {{size}} {{path/to/archive.zip}}`
