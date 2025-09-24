---
title: "Encode Base32 - Encode/Decode Data | Online Free DevTools by Hexmos"
name: base32
path: /freedevtools/tldr/common/base32
canonical: "https://hexmos.com/freedevtools/tldr/common/base32/"
description: "Encode data with Base32. Convert files or standard input to Base32 format for secure data transmission. Free online tool, no registration required."
category: common
keywords:
- Base32 encoder
- Base32 decoder
- File Base32 encoding
- Stream Base32 encoding
- Data Base32 encoding
- Base32 command line
- Base32 linux
- Base32 macos
- Base32 common
- Base32 file converter
features:
- Encode files to Base32 format
- Decode Base32 encoded files
- Encode data from standard input
- Decode data from standard input
- Wrap encoded output to a specified width
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# base32

> Encode or decode file or `stdin` to/from Base32, to `stdout`.
> More information: <https://manned.org/base32>.

- Encode a file:

`base32 {{path/to/file}}`

- Wrap encoded output at a specific width (`0` disables wrapping):

`base32 {{[-w|--wrap]}} {{0|76|...}} {{path/to/file}}`

- Decode a file:

`base32 {{[-d|--decode]}} {{path/to/file}}`

- Encode from `stdin`:

`{{command}} | base32`

- Decode from `stdin`:

`{{command}} | base32 {{[-d|--decode]}}`
