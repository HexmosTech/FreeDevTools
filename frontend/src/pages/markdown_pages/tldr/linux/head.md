---
title: "Head Command - Output File Parts | Online Free DevTools by Hexmos"
name: head
path: /freedevtools/tldr/linux/head
canonical: "https://hexmos.com/freedevtools/tldr/linux/head/"
description: "Output file parts with Head Command. Extract initial lines or bytes. Control file content easily with this command line tool. Free online tool, no registration required."
category: linux
keywords:
  - Head Command
  - File Output Command
  - Text Extraction Command
  - Linux Head
  - macOS Head
  - Unix Head
  - File Preview Command
  - Command Line File Tool
  - Extract File First Lines
  - Extract File First Bytes
features:
  - Output the first few lines of a file.
  - Output the first few bytes of a file.
  - Exclude the last few lines of a file.
  - Exclude the last few bytes of a file.
  - Control file output through command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# head

> Output the first part of files.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/head-invocation.html>.

- Output the first few lines of a file:

`head {{[-n|--lines]}} {{count}} {{path/to/file}}`

- Output the first few bytes of a file:

`head {{[-c|--bytes]}} {{count}} {{path/to/file}}`

- Output everything but the last few lines of a file:

`head {{[-n|--lines]}} -{{count}} {{path/to/file}}`

- Output everything but the last few bytes of a file:

`head {{[-c|--bytes]}} -{{count}} {{path/to/file}}`
