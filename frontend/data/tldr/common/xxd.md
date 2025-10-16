---
title: "Hexdump - Create Hexadecimal Dumps with xxd | Online Free DevTools by Hexmos"
name: xxd
path: "/freedevtools/tldr/common/xxd/"
canonical: "https://hexmos.com/freedevtools/tldr/common/xxd/"
description: "Generate hexdumps with xxd. Convert binary files to hexadecimal representation or vice versa. Explore xxd functionalities with this free online tool, no registration required."
category: common
keywords:
- hexdump generator
- binary to hex converter
- hex to binary converter
- xxd command
- linux hexdump
- macos hexdump
- hexadecimal dump tool
- binary file analysis
- data representation tool
- file inspection
features:
- Generate hexadecimal representations of binary files
- Convert hexadecimal dumps back to binary files
- Customize output format with column control and autoskip
- Limit output length for specific data sections
- Revert postscript-style hexdumps to binary
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xxd

> Create a hexadecimal representation (hexdump) from a binary file, or vice-versa.
> See also: `hexyl`, `od`, `hexdump`.
> More information: <https://manned.org/xxd>.

- Generate a hexdump from a binary file and display the output:

`xxd {{input_file}}`

- Generate a hexdump from a binary file and save it as a text file:

`xxd {{input_file}} {{output_file}}`

- Display a more compact output, replacing consecutive zeros (if any) with a star:

`xxd {{[-a|-autoskip]}} {{input_file}}`

- Display the output with 10 columns of one octet (byte) each:

`xxd {{[-c|-cols]}} {{10}} {{input_file}}`

- Display output only up to a length of 32 bytes:

`xxd {{[-l|-len]}} {{32}} {{input_file}}`

- Display the output in plain mode, without any gaps between the columns:

`xxd {{[-p|-postscript]}} {{input_file}}`

- Revert a plaintext hexdump back into binary, and save it as a binary file:

`xxd {{[-r|-revert]}} {{[-p|-postscript]}} {{input_file}} {{output_file}}`
