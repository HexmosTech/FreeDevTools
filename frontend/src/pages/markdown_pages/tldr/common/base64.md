---
title: "Base64 Encode/Decode - Format Data with base64 | Free DevTools"
name: base64
path: /freedevtools/tldr/common/base64
canonical: "https://hexmos.com/freedevtools/tldr/common/base64/"
description: "Encode and decode data with the base64 command-line tool.  Easily convert files or stdin/stdout data. Free online tool, no registration required."
category: common
keywords:
  - base64 encoding
  - base64 decoding
  - base64 command line
  - data encoding base64
  - data decoding base64
  - file encoding base64
  - file decoding base64
  - stdin base64 encode
  - stdin base64 decode
  - stdout base64
features:
  - Encodes files to base64 format.
  - Decodes base64 files to original format.
  - Wraps encoded output to a specified width.
  - Encodes data piped from stdin.
  - Decodes data piped from stdin.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# base64

> Encode or decode file or `stdin` to/from base64, to `stdout`.
> More information: <https://manned.org/base64>.

- Encode a file:

`base64 {{path/to/file}}`

- Wrap encoded output at a specific width (`0` disables wrapping):

`base64 {{[-w|--wrap]}} {{0|76|...}} {{path/to/file}}`

- Decode a file:

`base64 {{[-d|--decode]}} {{path/to/file}}`

- Encode from `stdin`:

`{{command}} | base64`

- Decode from `stdin`:

`{{command}} | base64 {{[-d|--decode]}}`
