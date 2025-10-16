---
title: "Detect File Encoding - Convert Text Encodings | Online Free DevTools by Hexmos"
name: enca
path: "/freedevtools/tldr/common/enca/"
canonical: "https://hexmos.com/freedevtools/tldr/common/enca/"
description: "Detect file encoding with enca and convert text files to different encodings easily. Identify encoding and convert for cross-platform compatibility. Free online tool, no registration required."
category: common
keywords:
- text file encoding detector
- encoding conversion utility
- file encoding analyzer
- character set detection
- enca command line tool
- linux encoding converter
- text encoding identifier
- character encoding detection
- convert text encoding
- detect file encoding
features:
- Detect file encoding automatically based on system locale
- Convert files to specific encoding formats
- Identify encoding for multiple files simultaneously
- Specify language for accurate encoding detection
- Create new encoded copies of existing files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# enca

> Detect and convert the encoding of text files.
> More information: <https://github.com/nijel/enca>.

- Detect file(s) encoding according to the system's locale:

`enca {{path/to/file1 path/to/file2 ...}}`

- Detect file(s) encoding specifying a language in the POSIX/C locale format (e.g. zh_CN, en_US):

`enca {{[-L|--language]}} {{language}} {{path/to/file1 path/to/file2 ...}}`

- Convert file(s) to a specific encoding:

`enca {{[-L|--language]}} {{language}} {{[-x|--convert-to]}} {{to_encoding}} {{path/to/file1 path/to/file2 ...}}`

- Create a copy of an existing file using a different encoding:

`enca {{[-L|--language]}} {{language}} {{[-x|--convert-to]}} {{to_encoding}} < {{original_file}} > {{new_file}}`
