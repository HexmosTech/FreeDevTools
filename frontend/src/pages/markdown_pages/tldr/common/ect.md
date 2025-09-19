---
title: "Compress Files - Efficient Compression Tool | Online Free DevTools by Hexmos"
name: ect
path: /freedevtools/tldr/common/ect
canonical: "https://hexmos.com/freedevtools/tldr/common/ect/"
description: "Compress files efficiently with Efficient Compression Tool (ECT). Optimize PNG, JPEG, gzip and Zip files seamlessly with multithreading. Free online tool, no registration required."
category: common
keywords:
- file compression
- efficient compression tool
- png compressor
- jpeg optimizer
- gzip compressor
- zip file optimizer
- command line compression
- lossless compression
- image optimization
- file size reduction
features:
- Compress files using command line interface
- Optimize PNG, JPEG, gzip, and Zip file formats
- Specify compression level and enable multithreading
- Recursively compress all files within a directory
- Preserve original file modification timestamps
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ect

> Efficient Compression Tool.
> File optimizer written in C++. It supports PNG, JPEG, gzip and Zip files.
> More information: <https://github.com/fhanau/Efficient-Compression-Tool>.

- Compress a file:

`ect {{path/to/file.png}}`

- Compress a file with specified compression level and multithreading (1=Fastest (Worst), 9=Slowest (Best), default is 3):

`ect -{{9}} --mt-deflate {{path/to/file.zip}}`

- Compress all files in a directory recursively:

`ect -recurse {{path/to/directory}}`

- Compress a file, keeping the original modification time:

`ect -keep {{path/to/file.png}}`

- Compress a file, stripping metadata:

`ect -strip {{path/to/file.png}}`
