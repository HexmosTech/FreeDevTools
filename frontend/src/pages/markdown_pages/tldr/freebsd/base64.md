---
title: "Base64 Encode & Decode - Convert Data Online | Free DevTools"
name: base64
path: /freedevtools/tldr/freebsd/base64
canonical: "https://hexmos.com/freedevtools/tldr/freebsd/base64/"
description: "Encode and decode data with Base64. Securely transform information for transmission or storage, online and free. Free online tool, no registration required."
category: freebsd
keywords:
- base64 encoding
- base64 decoding
- data encoding freebsd
- freebsd base64 decoder
- freebsd base64 encoder
- base64 command line
- data conversion utility
- file encoding base64
- string encoding base64
- freebsd data transformation
features:
- Encode files to base64 strings
- Decode base64 strings to original data
- Wrap encoded output for readability
- Encode data from standard input
- Decode base64 from files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
