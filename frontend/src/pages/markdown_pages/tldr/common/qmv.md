---
title: "Qmv - Move Files Easily | Free DevTools"
name: qmv
path: /freedevtools/tldr/common/qmv
canonical: "https://hexmos.com/freedevtools/tldr/common/qmv/"
description: "Move files effortlessly with Qmv, a command-line tool for renaming files using your default text editor. Free online tool, no registration required."
category: common
keywords:
- file renamer
- directory renamer
- batch file rename
- batch directory rename
- command line rename
- terminal file move
- bulk file rename
- qmv file rename
- linux file rename
- macos file rename
features:
- Rename files using a text editor interface
- Move multiple files simultaneously
- Rename directories using a text editor interface
- Recursively move all files and directories within a directory
- Swap source and target filenames in the editor
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qmv

> Move files and directories using the default text editor to define the filenames.
> More information: <https://manned.org/qmv>.

- Move a single file (open an editor with the source filename on the left and the target filename on the right):

`qmv {{source_file}}`

- Move multiple JPEG files:

`qmv {{*.jpg}}`

- Move multiple directories:

`qmv {{[-d|--directory]}} {{path/to/directory1 path/to/directory2 path/to/directory3 ...}}`

- Move all files and directories inside a directory:

`qmv {{[-R|--recursive]}} {{path/to/directory}}`

- Move files, but swap the positions of the source and the target filenames in the editor:

`qmv {{[-o|--option]}} swap {{*.jpg}}`

- Rename all files and folders in the current directory, but show only target filenames in the editor (you can think of it as a kind of simple mode):

`qmv {{[-f|--format]}} do .`
