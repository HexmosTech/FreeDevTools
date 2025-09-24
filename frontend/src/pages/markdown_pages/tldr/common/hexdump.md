---
title: "Hexdump - Inspect Binary Data | Online Free DevTools by Hexmos"
name: hexdump
path: /freedevtools/tldr/common/hexdump
canonical: "https://hexmos.com/freedevtools/tldr/common/hexdump/"
description: "Inspect binary data with Hexdump. Analyze file contents in hexadecimal, decimal, octal, or ASCII formats for debugging. Free online tool, no registration required."
category: common
keywords:
- hexdump binary data
- hexadecimal file viewer
- binary file inspection
- data dump analysis
- debug output examination
- linux hexdump command
- macos hexdump utility
- file content analyzer
- binary format inspector
- ASCII data viewer
features:
- Display file contents in hexadecimal format
- Show offset and ASCII representation of data
- Limit the number of bytes displayed
- Print verbose output without duplicate line suppression
- Format output using printf-like format strings
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hexdump

> Display file contents in hexadecimal, decimal, octal, or ASCII.
> Useful for inspecting dump file, binary data, or debug output.
> See also: `hexyl`, `od`, `xxd`.
> More information: <https://manned.org/man/freebsd/hexdump.1>.

- Print the hexadecimal representation of a file, replacing duplicate lines by `*`:

`hexdump {{path/to/file}}`

- Display the input offset in hexadecimal and its ASCII representation in two columns:

`hexdump -C {{path/to/file}}`

- Display the hexadecimal representation of a file, but interpret only a specific number of bytes of the input:

`hexdump -C -n {{number_of_bytes}} {{path/to/file}}`

- Verbose - no suppression by `*` on duplicate lines:

`hexdump -v {{path/to/file}}`

- Format output using printf-like format string:

`hexdump -e '{{element_format .. end_format}}' {{path/to/file}}`
