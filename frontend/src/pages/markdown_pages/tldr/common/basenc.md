---
title: "Encode/Decode Base - Convert Files with basenc | Online Free DevTools by Hexmos"
name: basenc
path: /freedevtools/tldr/common/basenc
canonical: "https://hexmos.com/freedevtools/tldr/common/basenc/"
description: "Convert files and standard input with basenc. Easily encode to base32 or base64 formats or decode them back. Free online tool, no registration required."
category: common
keywords:
- base64 encoder
- base64 decoder
- base32 encoder
- base32 decoder
- file encoder
- file decoder
- stream encoder
- stream decoder
- linux basenc
- basenc command
features:
- Encode files to base64.
- Decode base64 encoded files.
- Encode standard input to base32.
- Decode base32 encoded standard input.
- Control output column width during encoding.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# basenc

> Encode or decode file or `stdin` using a specified encoding, to `stdout`.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/basenc-invocation.html>.

- Encode a file with base64 encoding:

`basenc --base64 {{path/to/file}}`

- Decode a file with base64 encoding:

`basenc {{[-d|--decode]}} --base64 {{path/to/file}}`

- Encode from `stdin` with base32 encoding with 42 columns:

`{{command}} | basenc --base32 {{[-w|--wrap]}} 42`

- Encode from `stdin` with base32 encoding:

`{{command}} | basenc --base32`
