---
title: "Extract RAR - Manage RAR Archives | Online Free DevTools by Hexmos"
name: unrar
path: /freedevtools/tldr/common/unrar
canonical: "https://hexmos.com/freedevtools/tldr/common/unrar/"
description: "Extract RAR archives with UnRAR. Easily manage compressed files and access their contents efficiently. Free online tool, no registration required."
category: common
keywords:
- RAR archive extraction
- RAR file management
- unrar linux
- unrar command line
- extract compressed files
- unrar macos
- rar archive opener
- unrar windows
- unrar tool
- rar file extractor
features:
- Extract RAR archives with directory structure
- Extract RAR archives to specific paths
- Extract RAR archives to the current directory
- Test integrity of RAR archive files
- List contents of RAR archives without extracting
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# unrar

> Extract RAR archives.
> More information: <https://manned.org/unrar>.

- Extract files with original directory structure:

`unrar x {{compressed.rar}}`

- Extract files to a specified path with the original directory structure:

`unrar x {{compressed.rar}} {{path/to/extract}}`

- Extract files into current directory, losing directory structure in the archive:

`unrar e {{compressed.rar}}`

- Test integrity of each file inside the archive file:

`unrar t {{compressed.rar}}`

- List files inside the archive file without decompressing it:

`unrar l {{compressed.rar}}`
