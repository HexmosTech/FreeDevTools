---
title: "Octal Dump - Format File Content | Online Free DevTools by Hexmos"
name: od
path: "/freedevtools/tldr/common/od/"
canonical: "https://hexmos.com/freedevtools/tldr/common/od/"
description: "Format file content with Octal Dump. Display files in octal, decimal, or hexadecimal format, and customize the output. Free online tool, no registration required."
category: common
keywords:
- octal dump
- format file content
- hex dump
- octal display
- hexadecimal display
- decimal display
- file viewer
- file analyzer
- linux od
- coreutils od
features:
- Display file content in various formats (octal, decimal, hexadecimal).
- Customize the byte offsets displayed.
- Suppress duplicate lines in the output.
- Read specific byte ranges within a file.
- Control the output width for each line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# od

> Display file contents in octal, decimal or hexadecimal format.
> Optionally display the byte offsets and/or printable representation for each line.
> See also: `hexyl`, `xxd`, `hexdump`.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/od-invocation.html>.

- Display file using default settings: octal format, 8 bytes per line, byte offsets in octal, and duplicate lines replaced with `*`:

`od {{path/to/file}}`

- Display file in verbose mode, i.e. without replacing duplicate lines with `*`:

`od {{[-v|--output-duplicates]}} {{path/to/file}}`

- Display file in hexadecimal format (2-byte units), with byte offsets in decimal format:

`od {{[-t|--format]}} {{x}} {{[-A|--address-radix]}} {{d}} {{[-v|--output-duplicates]}} {{path/to/file}}`

- Display file in hexadecimal format (1-byte units), and 4 bytes per line:

`od {{[-t|--format]}} {{x1}} {{[-w|--width=]}}4 {{[-v|--output-duplicates]}} {{path/to/file}}`

- Display file in hexadecimal format along with its character representation, and do not print byte offsets:

`od {{[-t|--format]}} {{xz}} {{[-A|--address-radix]}} {{n}} {{[-v|--output-duplicates]}} {{path/to/file}}`

- Read only 100 bytes of a file starting from the 500th byte:

`od {{[-N|--read-bytes]}} 100 {{[-j|--skip-bytes]}} 500 {{[-v|--output-duplicates]}} {{path/to/file}}`
