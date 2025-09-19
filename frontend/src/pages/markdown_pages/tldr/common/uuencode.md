---
title: "Encode Files - Convert Binary to ASCII with uuencode | Online Free DevTools by Hexmos"
name: uuencode
path: /freedevtools/tldr/common/uuencode
canonical: "https://hexmos.com/freedevtools/tldr/common/uuencode/"
description: "Encode binary files efficiently with uuencode. Convert to ASCII format for reliable data transport across diverse mediums. Free online tool, no registration required."
category: common
keywords:
- binary file encoding
- ASCII conversion
- uuencode command
- file transport encoding
- data encoding linux
- binary to text converter
- Base64 encoding
- uuencode online
- command line encoding
- data transfer tool
features:
- Encode binary files into ASCII format.
- Convert data for transmission over ASCII-only channels.
- Support both uuencode and Base64 encoding methods.
- Write the encoded output to a specified file.
- Decode files with uudeview.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# uuencode

> Encode binary files into ASCII for transport via mediums that only support simple ASCII encoding.
> More information: <https://manned.org/uuencode>.

- Encode a file and print the result to `stdout`:

`uuencode {{path/to/input_file}} {{output_file_name_after_decoding}}`

- Encode a file and write the result to a file:

`uuencode -o {{path/to/output_file}} {{path/to/input_file}} {{output_file_name_after_decoding}}`

- Encode a file using Base64 instead of the default uuencode encoding and write the result to a file:

`uuencode {{[-m|--base64]}} -o {{path/to/output_file}} {{path/to/input_file}} {{output_file_name_after_decoding}}`
