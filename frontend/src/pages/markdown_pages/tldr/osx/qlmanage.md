---
title: "QuickLook Manager - Generate File Previews | Online Free DevTools by Hexmos"
name: qlmanage
path: /freedevtools/tldr/osx/qlmanage
canonical: "https://hexmos.com/freedevtools/tldr/osx/qlmanage/"
description: "Generate file previews with QuickLook Manager. View file contents and create thumbnails using this command-line tool. Free online tool, no registration required."
category: osx
keywords:
- file preview generator
- quicklook thumbnail creator
- osx quicklook management
- command line file viewer
- file content display tool
- macos file inspector
- quicklook reset command
- jpeg thumbnail generator
- quicklook file examination
- command-line preview tool
features:
- Display QuickLook previews for multiple files
- Generate thumbnails of image files
- Reset the QuickLook server
- Customize thumbnail sizes
- Preview file contents directly from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qlmanage

> QuickLook server tool.
> More information: <https://keith.github.io/xcode-man-pages/qlmanage.1.html>.

- Display QuickLook for one or multiple files:

`qlmanage -p {{path/to/file1 path/to/file2 ...}}`

- Compute 300px wide PNG thumbnails of all JPEGs in the current directory and put them in a directory:

`qlmanage {{*.jpg}} -t -s {{300}} {{path/to/directory}}`

- Reset QuickLook:

`qlmanage -r`
