---
title: "Head - Output File Headings | Online Free DevTools by Hexmos"
name: head
path: /freedevtools/tldr/osx/head
canonical: "https://hexmos.com/freedevtools/tldr/osx/head/"
description: "Output file headings effortlessly with Head command. Extract specific lines or bytes from files using command-line options. Free online tool, no registration required."
category: osx
keywords:
  - file head command
  - output file lines
  - output file bytes
  - linux head command
  - macos head command
  - head command usage
  - extract file segment
  - display file header
  - text file manipulation
  - command line file output
features:
  - Output specified number of lines
  - Output specified number of bytes
  - Exclude last lines from output
  - Exclude last bytes from output
  - Display file content header
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# head

> Output the first part of files.
> More information: <https://keith.github.io/xcode-man-pages/head.1.html>.

- Output the first few lines of a file:

`head {{[-n|--lines]}} {{8}} {{path/to/file}}`

- Output the first few bytes of a file:

`head {{[-c|--bytes]}} {{8}} {{path/to/file}}`

- Output everything but the last few lines of a file:

`head {{[-n|--lines]}} -{{8}} {{path/to/file}}`

- Output everything but the last few bytes of a file:

`head {{[-c|--bytes]}} -{{8}} {{path/to/file}}`
