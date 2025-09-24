---
title: "List Files - Find Files with mdfind on macOS | Online Free DevTools by Hexmos"
name: mdfind
path: /freedevtools/tldr/osx/mdfind
canonical: "https://hexmos.com/freedevtools/tldr/osx/mdfind/"
description: "Find files instantly with mdfind. Search files by name, content, or location on macOS. Free online tool, no registration required."
category: osx
keywords:
- macos file search
- osx file finder
- mdfind file query
- command line file search
- terminal file locator
- mac spotlight alternative
- file content search mac
- filename search osx
- directory file lookup
- macos find by content
features:
- Find files by name matching a specific pattern.
- Search file contents for a specific query string.
- Limit search scope to a specific directory.
- Locate files on macOS using command line.
- Perform advanced file searches on osx systems.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mdfind

> List files matching a query.
> More information: <https://keith.github.io/xcode-man-pages/mdfind.1.html>.

- Find a file by its name:

`mdfind -name {{file}}`

- Find a file by its content:

`mdfind "{{query}}"`

- Find a file containing a string, in a given directory:

`mdfind -onlyin {{directory}} "{{query}}"`
