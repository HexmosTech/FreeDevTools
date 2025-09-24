---
title: "Ditto - Copy Files and Directories on macOS | Online Free DevTools by Hexmos"
name: ditto
path: /freedevtools/tldr/osx/ditto
canonical: "https://hexmos.com/freedevtools/tldr/osx/ditto/"
description: "Copy files with Ditto on macOS. Preserve file attributes and directory structure when duplicating data. Free online tool, no registration required."
category: osx
keywords:
- macOS file copy
- Ditto file transfer
- OSX directory clone
- macOS file backup
- Ditto preserve permissions
- macOS resource fork copy
- Ditto file mirroring
- macOS directory sync
- Ditto terminal command
- macOS command line copy
features:
- Overwrite destination directory with source directory contents.
- Display verbose output during the file copy process.
- Retain original file permissions during the copy operation.
- Copy specific files and directories on macOS.
- Mirror directory structures efficiently.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ditto

> Copy files and directories.
> More information: <https://keith.github.io/xcode-man-pages/ditto.1.html>.

- Overwrite contents of destination directory with contents of source directory:

`ditto {{path/to/source_directory}} {{path/to/destination_directory}}`

- Print a line to the Terminal window for every file that's being copied:

`ditto -V {{path/to/source_directory}} {{path/to/destination_directory}}`

- Copy a given file or directory, while retaining the original file permissions:

`ditto -rsrc {{path/to/source_directory}} {{path/to/destination_directory}}`
