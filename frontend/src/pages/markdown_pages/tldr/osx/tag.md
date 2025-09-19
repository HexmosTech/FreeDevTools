---
title: "Tag Files - Edit Tags on macOS | Online Free DevTools by Hexmos"
name: tag
path: /freedevtools/tldr/osx/tag
canonical: "https://hexmos.com/freedevtools/tldr/osx/tag/"
description: "Edit tags on macOS files with Tag. Add, remove, and match file tags using command-line. Free online tool, no registration required."
category: osx
keywords:
- macos file tag editor
- osx tag management
- command line tag tool
- macos tag command
- file tagging utility
- tag adder mac
- tag remover mac
- find files by tag mac
- mavericks tagging tool
- osx metadata editor
features:
- Add tags to files on macOS
- Remove specific tags from files
- Clear all tags from a file
- Search for files by tag name
- Manage file metadata using command-line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tag

> Edit tags on Mac OS X files (10.9 Mavericks and above).
> More information: <https://github.com/jdberry/tag/>.

- Add tags to a file:

`tag --add {{tag_name1,tag_name2,...}} {{path/to/file}}`

- Remove a tag:

`tag --remove {{tag_name}} {{path/to/file}}`

- Remove all tags from a file:

`tag --remove \* {{path/to/file}}`

- Show all files with a given tag:

`tag --match {{tag_name}}`
