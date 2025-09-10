---
title: base64
name: base64
path: /freedevtools/tldr/freebsd/base64
canonical: "https://hexmos.com/freedevtools/tldr/freebsd/base64/"
description: Encode or decode files or standard input to base64, to standard output or another file.
category: freebsd
keywords:
- base64 encoding and decoding
- data transformation utility
- command-line encoding tool
- encoding for data transmission
- decoding base64 strings
- file encoding and decoding operations
- data conversion utilities
- encoding standard input
- decoding base64 from files
- data integrity checks through encoding
features:
- encode files to base64 format
- decode base64 encoded files
- wrap encoded output at specified widths
- read from standard input for encoding
- write encoded/decoded output to files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# base64

> Encode or decode file or `stdin` to/from base64, to `stdout` or another file.
> More information: <https://man.freebsd.org/cgi/man.cgi?query=base64>.

- Encode a file to `stdout`:

`base64 {{[-i|--input]}} {{path/to/file}}`

- Encode a file to the specified output file:

`base64 {{[-i|--input]}} {{path/to/input_file}} {{[-o|--output]}} {{path/to/output_file}}`

- Wrap encoded output at a specific width (`0` disables wrapping):

`base64 {{[-b|--break]}} {{0|76|...}} {{path/to/file}}`

- Decode a file to `stdout`:

`base64 {{[-d|--decode]}} {{[-i|--input]}} {{path/to/file}}`

- Encode from `stdin` to `stdout`:

`{{command}} | base64`

- Decode from `stdin` to `stdout`:

`{{command}} | base64 {{[-d|--decode]}}`
