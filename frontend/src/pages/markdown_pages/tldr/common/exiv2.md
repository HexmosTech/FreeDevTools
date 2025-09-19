---
title: "Exiv2 Metadata Editor - Control Image Metadata | Online Free DevTools by Hexmos"
name: exiv2
path: /freedevtools/tldr/common/exiv2
canonical: "https://hexmos.com/freedevtools/tldr/common/exiv2/"
description: "Control image metadata with Exiv2 Metadata Editor. Extract, modify, and delete Exif, IPTC, and XMP data effortlessly. Free online tool, no registration required."
category: common
keywords:
- Image Metadata Editor
- Exif Data Manipulation
- IPTC Metadata Editor
- XMP Metadata Editor
- Image Metadata Remover
- Command Line Image Tools
- Image Metadata Viewer
- Linux Image Metadata
- MacOS Image Metadata
- Exiv2 Metadata Tool
features:
- Extract image metadata in various formats (Exif, IPTC, XMP)
- Delete all metadata from image files
- Rename files based on embedded date and time
- Print image metadata in interpreted or raw format
- Preserve file timestamps when deleting metadata
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# exiv2

> Image metadata manipulation tool.
> More information: <https://www.exiv2.org/manpage.html>.

- Print a summary of the image Exif metadata:

`exiv2 {{path/to/file}}`

- Print all metadata (Exif, IPTC, XMP) with interpreted values:

`exiv2 {{[-P|-Print]}} kt {{path/to/file}}`

- Print all metadata with raw values:

`exiv2 {{[-P|-Print]}} kv {{path/to/file}}`

- Delete all metadata from an image:

`exiv2 {{[-d|--delete]}} a {{path/to/file}}`

- Delete all metadata, preserving the file timestamp:

`exiv2 {{[-d|--delete]}} a {{[-k|--keep]}} {{path/to/file}}`

- Rename the file, prepending the date and time from metadata (not from the file timestamp):

`exiv2 {{[-r|--rename]}} {{'%Y%m%d_%H%M%S_:basename:'}} {{path/to/file}}`
