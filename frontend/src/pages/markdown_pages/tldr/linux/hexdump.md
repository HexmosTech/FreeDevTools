---
title: "Hexdump - Format Data in Hexadecimal | Online Free DevTools by Hexmos"
name: hexdump
path: /freedevtools/tldr/linux/hexdump
canonical: "https://hexmos.com/freedevtools/tldr/linux/hexdump/"
description: "Format data with hexdump, displaying hexadecimal and ASCII representations of files.  View and analyze file contents in detail with various options. Free online tool, no registration required."
category: linux
keywords:
  - hexadecimal viewer
  - hexdump command
  - data formatting hex
  - file analysis hex
  - linux hexdump
  - ascii hex converter
  - byte analysis hex
  - offset display hex
  - data inspection hex
  - canonical hexdump
features:
  - Displays hexadecimal representation of files.
  - Shows input offset in hexadecimal and ASCII.
  - Allows specifying the number of bytes to interpret.
  - Supports suppressing duplicate line replacement.
  - Provides options for canonical output format.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hexdump

> An ASCII, decimal, hexadecimal, octal dump.
> See also: `hexyl`, `od`, `xxd`.
> More information: <https://manned.org/hexdump>.

- Print the hexadecimal representation of a file, replacing duplicate lines by '\*':

`hexdump {{path/to/file}}`

- Display the input offset in hexadecimal and its ASCII representation in two columns:

`hexdump {{[-C|--canonical]}} {{path/to/file}}`

- Display the hexadecimal representation of a file, but interpret only n bytes of the input:

`hexdump {{[-C|--canonical]}} {{[-n|--length]}} {{number_of_bytes}} {{path/to/file}}`

- Don't replace duplicate lines with '\*':

`hexdump {{[-v|--no-squeezing]}} {{path/to/file}}`
