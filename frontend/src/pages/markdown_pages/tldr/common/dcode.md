---
title: "Decode Strings - Recursively Decode Text Online | Free DevTools"
name: dcode
path: /freedevtools/tldr/common/dcode
canonical: "https://hexmos.com/freedevtools/tldr/common/dcode/"
description: "Decode strings online with dcode. Recursively detect and decode various encodings and hashes. Free online tool, no registration required."
category: common
keywords:
- string decoder online
- text decoder
- hex decoder
- base64 decoder
- caesar cipher solver
- md5 hash lookup
- sha1 hash lookup
- sha2 hash lookup
- url decoder
- encoding detection
features:
- Recursively detect and decode various encodings
- Rotate strings by specified or all offsets
- Reverse strings for decoding
- Decode hex, decimal, and binary encodings
- Perform MD5, SHA1, and SHA2 hash lookups (optional)
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dcode

> Recursively detect and decode strings, supporting hex, decimal, binary, base64, URL, FromChar encodings, Caesar ciphers, and MD5, SHA1, and SHA2 hashes.
> Warning: uses 3rd-party web services for MD5, SHA1 and SHA2 hash lookups. For sensitive data, use `-s` to avoid these services.
> More information: <https://github.com/s0md3v/Decodify>.

- Recursively detect and decode a string:

`dcode "{{NjM3YTQyNzQ1YTQ0NGUzMg==}}"`

- Rotate a string by the specified offset:

`dcode -rot {{11}} "{{spwwz hzcwo}}"`

- Rotate a string by all 26 possible offsets:

`dcode -rot {{all}} "{{bpgkta xh qtiitg iwpc sr}}"`

- Reverse a string:

`dcode -rev "{{hello world}}"`
