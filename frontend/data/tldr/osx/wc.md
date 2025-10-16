---
title: "Count Words - Analyze Text Files with wc | Online Free DevTools by Hexmos"
name: wc
path: "/freedevtools/tldr/osx/wc/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/wc/"
description: "Analyze text files with wc. Count lines, words, characters, and bytes with this command-line tool. Free online tool, no registration required."
category: osx
keywords:
  - text file analyzer
  - word count tool
  - line count utility
  - character count tool
  - byte count tool
  - wc command line
  - linux wc
  - macos wc
  - text statistics tool
  - file size analyzer
features:
  - Count lines in a text file
  - Count words in a text file
  - Count bytes in a text file
  - Count characters in a text file
  - Process input from stdin
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wc

> Count lines, words, or bytes.
> More information: <https://keith.github.io/xcode-man-pages/wc.1.html>.

- Count lines in file:

`wc -l {{path/to/file}}`

- Count words in file:

`wc -w {{path/to/file}}`

- Count characters (bytes) in file:

`wc -c {{path/to/file}}`

- Count characters in file (taking multi-byte character sets into account):

`wc -m {{path/to/file}}`

- Use `stdin` to count lines, words and characters (bytes) in that order:

`{{find .}} | wc`
