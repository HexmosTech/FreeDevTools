---
title: "Strip Tool - Discard Symbols from Executables | Online Free DevTools by Hexmos"
name: strip
path: /freedevtools/tldr/linux/strip
canonical: "https://hexmos.com/freedevtools/tldr/linux/strip/"
description: "Discard symbols from executables with Strip Tool. Reduce file size and protect your code. Free online tool, no registration required."
category: linux
keywords:
- executable stripper
- object file stripper
- linux strip command
- remove symbols linux
- strip debug symbols
- binary size reduction
- elf stripper
- executable compression
- linux optimization
- object file optimization
features:
- Remove symbols from executable files
- Reduce the size of object files
- Strip debug information from binaries
- Output stripped file to a specified location
- Replace original file with stripped version
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# strip

> Discard symbols from executables or object files.
> More information: <https://manned.org/strip>.

- Replace the input file with its stripped version:

`strip {{path/to/file}}`

- Strip symbols from a file, saving the output to a specific file:

`strip {{path/to/input_file}} -o {{path/to/output_file}}`

- Strip debug symbols only:

`strip {{[-d|--strip-debug]}} {{path/to/file.o}}`
