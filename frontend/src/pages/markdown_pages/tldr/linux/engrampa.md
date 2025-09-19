---
title: "Create Archives - Package Files with Engrampa | Online Free DevTools by Hexmos"
name: engrampa
path: /freedevtools/tldr/linux/engrampa
canonical: "https://hexmos.com/freedevtools/tldr/linux/engrampa/"
description: "Create archives with Engrampa, a package management tool for Linux. Compress and extract files using various formats. Free online tool, no registration required."
category: linux
keywords:
- tar archive creation
- zip archive creation
- linux archive manager
- engrampa archive tool
- compress files linux
- extract files linux
- mate desktop archiving
- linux file compression
- tar.gz file extraction
- archive file management
features:
- Create zip and tar archives
- Open and extract existing archives
- Add files and directories to archives recursively
- Extract files to a specific directory
- Support various archive formats like tar, zip, 7z
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# engrampa

> Package files into zip/tar file in MATE desktop environment.
> See also: `zip`, `tar`.
> More information: <https://github.com/mate-desktop/engrampa>.

- Start Engrampa:

`engrampa`

- Open specific archives:

`engrampa {{path/to/archive1.tar path/to/archive2.tar ...}}`

- Archive specific files and/or directories recursively:

`engrampa --add-to={{path/to/compressed.tar}} {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Extract files and/or directories from archives to a specific path:

`engrampa --extract-to={{path/to/directory}} {{path/to/archive1.tar path/to/archive2.tar ...}}`
