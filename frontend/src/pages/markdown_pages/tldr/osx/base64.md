---
title: "Base64 Encode/Decode - Convert Files Online | Free DevTools"
name: base64
path: /freedevtools/tldr/osx/base64
canonical: "https://hexmos.com/freedevtools/tldr/osx/base64/"
description: "Base64 encode and decode files with Base64. Easily convert data to and from Base64 format for secure data transfer. Free online tool, no registration required."
category: osx
keywords:
- Base64 encoder
- Base64 decoder
- File Base64 conversion
- Data encoding
- Data decoding
- macOS Base64 command
- Base64 string conversion
- Base64 file utility
- Encode to Base64
- Decode from Base64
features:
- Encode files to Base64 format
- Decode Base64-encoded files
- Specify output file for encoded/decoded data
- Wrap encoded output at a specific width
- Encode/decode from standard input/output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# base64

> Encode or decode file or `stdin` to/from base64, to `stdout` or another file.
> More information: <https://keith.github.io/xcode-man-pages/bintrans.1>.

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
