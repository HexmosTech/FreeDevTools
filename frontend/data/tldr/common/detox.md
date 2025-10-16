---
title: "Detox Rename - Format Filenames with Detox | Online Free DevTools by Hexmos"
name: detox
path: "/freedevtools/tldr/common/detox/"
canonical: "https://hexmos.com/freedevtools/tldr/common/detox/"
description: "Format filenames with Detox, removing spaces and unwanted characters for cleaner file management. Simplify file organization on Linux and macOS with this free online tool, no registration required."
category: common
keywords:
- filename formatter
- detox rename
- linux filename
- macos filename
- batch rename files
- command line rename
- remove spaces filenames
- sanitize filenames
- filename cleaner
- command line tools
features:
- Remove spaces from filenames
- Replace undesirable characters in filenames
- Rename files recursively within directories
- Perform dry runs to preview changes
- Batch rename multiple files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# detox

> Renames files to make them easier to work with.
> It removes spaces and other such annoyances like duplicate underline characters.
> More information: <https://manned.org/detox>.

- Remove spaces and other undesirable characters from a file's name:

`detox {{path/to/file}}`

- Show how detox would rename all the files in a directory tree:

`detox {{[-n|--dry-run]}} -r {{path/to/directory}}`

- Remove spaces and other undesirable characters from all files in a directory tree:

`detox -r {{path/to/directory}}`
