---
title: "Remove Files - Delete Files & Directories | Online Free DevTools by Hexmos"
name: rm
path: "/freedevtools/tldr/common/rm/"
canonical: "https://hexmos.com/freedevtools/tldr/common/rm/"
description: "Remove files with rm. Safely delete files and directories using the command line. Free online tool, no registration required. Also supports recursive directory removal."
category: common
keywords:
- file removal command
- delete file linux
- remove directory linux
- rm command linux
- remove files recursively
- linux file deletion
- macos file removal
- command line file deletion
- shell rm command
- linux rm directory
features:
- Remove files and directories
- Forcefully remove files, ignoring nonexistent ones
- Interactively prompt before removing each file
- Recursively remove directories and their contents
- Remove empty directories using the `-d` option
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rm

> Remove files or directories.
> See also: `rmdir`.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/rm-invocation.html>.

- Remove specific files:

`rm {{path/to/file1 path/to/file2 ...}}`

- Remove specific files ignoring nonexistent ones:

`rm {{[-f|--force]}} {{path/to/file1 path/to/file2 ...}}`

- Remove specific files interactively prompting before each removal:

`rm {{[-i|--interactive]}} {{path/to/file1 path/to/file2 ...}}`

- Remove specific files printing info about each removal:

`rm {{[-v|--verbose]}} {{path/to/file1 path/to/file2 ...}}`

- Remove specific files and directories recursively:

`rm {{[-r|--recursive]}} {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Remove empty directories (this is considered the safe method):

`rm {{[-d|--dir]}} {{path/to/directory}}`
