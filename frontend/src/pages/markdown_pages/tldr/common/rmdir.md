---
title: "Rmdir - Remove Directories | Free DevTools"
name: rmdir
path: /freedevtools/tldr/common/rmdir
canonical: "https://hexmos.com/freedevtools/tldr/common/rmdir/"
description: "Remove empty directories with Rmdir. Easily clean up your file system and reclaim storage space using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- empty directory remover
- rmdir command
- linux rmdir
- macos rmdir
- remove directory linux
- remove directory macos
- directory cleanup
- command-line rmdir
- recursively remove empty directories
- delete empty folders
features:
- Remove specified empty directories
- Remove nested directories recursively
- Clean an entire directory of empty subdirectories
- Remove multiple directories at once
- Prevent deletion of non-empty directories
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rmdir

> Remove directories without files.
> See also: `rm`.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/rmdir-invocation.html>.

- Remove specific directories:

`rmdir {{path/to/directory1 path/to/directory2 ...}}`

- Remove specific nested directories recursively:

`rmdir {{[-p|--parents]}} {{path/to/directory1 path/to/directory2 ...}}`

- Clean a directory of empty directories:

`rmdir *`
