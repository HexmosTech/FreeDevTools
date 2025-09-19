---
title: "Hex Viewer - Inspect Files in Hex Format | Online Free DevTools by Hexmos"
name: hexyl
path: /freedevtools/tldr/common/hexyl
canonical: "https://hexmos.com/freedevtools/tldr/common/hexyl/"
description: "Inspect files in hex format with Hexyl. Analyze byte patterns, debug data structures, and understand file contents. Free online tool, no registration required."
category: common
keywords:
- hexadecimal file viewer
- hex dump analyzer
- binary data inspector
- colored hex output
- terminal hex viewer
- linux hex editor
- macos hex viewer
- windows hex analyzer
- file format analysis
- byte level inspection
features:
- View file content in hexadecimal format
- Colorize output to distinguish byte categories
- Specify byte range for inspection
- Read specific bytes starting at an offset
- Display file data directly in the terminal
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hexyl

> A simple hex viewer for the terminal. Uses colored output to distinguish different categories of bytes.
> See also: `od`, `xxd`, `hexdump`.
> More information: <https://github.com/sharkdp/hexyl>.

- Print the hexadecimal representation of a file:

`hexyl {{path/to/file}}`

- Print the hexadecimal representation of the first n bytes of a file:

`hexyl {{[-n|--length]}} {{n}} {{path/to/file}}`

- Print bytes 512 through 1024 of a file:

`hexyl -r {{512}}:{{1024}} {{path/to/file}}`

- Print 512 bytes starting at the 1024th byte:

`hexyl -r {{1024}}:+{{512}} {{path/to/file}}`
