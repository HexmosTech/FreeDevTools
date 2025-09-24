---
title: "Secure Remove - Securely Delete Files with srm | Online Free DevTools by Hexmos"
name: srm
path: /freedevtools/tldr/common/srm
canonical: "https://hexmos.com/freedevtools/tldr/common/srm/"
description: "Securely delete files with srm, overwriting data for enhanced privacy. A secure alternative to 'rm' for Linux and macOS. Free online tool, no registration required."
category: common
keywords:
- secure file removal
- srm command linux
- securely delete file macOS
- file shredder
- data wiping tool
- secure erase utility
- srm overwrite files
- linux secure delete
- macOS secure remove
- command line file deletion
features:
- Securely overwrite files with random data
- Perform multiple-pass overwrites for enhanced security
- Recursively remove directories and their contents securely
- Prompt for confirmation before deleting each file
- Act as a drop-in replacement for the 'rm' command
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# srm

> Securely remove files or directories.
> Overwrites the existing data one or multiple times. Drop in replacement for rm.
> More information: <https://srm.sourceforge.net/srm.html>.

- Remove a file after a single-pass overwriting with random data:

`srm {{[-s|--simple]}} {{path/to/file}}`

- Remove a file after seven passes of overwriting with random data:

`srm -m {{path/to/file}}`

- Recursively remove a directory and its contents overwriting each file with a single-pass of random data:

`srm {{[-r|--recursive]}} {{[-s|--simple]}} {{path/to/directory}}`

- Prompt before every removal:

`srm {{[-i|--interactive]}} {{\*}}`
