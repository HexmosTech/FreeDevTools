---
title: "Objdump - View Object File Information | Online Free DevTools by Hexmos"
name: objdump
path: /freedevtools/tldr/common/objdump
canonical: "https://hexmos.com/freedevtools/tldr/common/objdump/"
description: "View object file information with Objdump. Analyze binaries, examine headers, and disassemble code. Free online tool, no registration required."
category: common
keywords:
- object file analyzer
- binary file analysis
- disassembly tool
- executable header viewer
- symbol table reader
- linux object dump
- macos object dump
- elf file analysis
- pe file analysis
- object code disassembler
features:
- Display file header information
- Disassemble executable sections
- Show symbol tables
- Provide hex dumps of binary sections
- Display disassembled code in Intel syntax
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# objdump

> View information about object files.
> More information: <https://manned.org/objdump>.

- Display the file header information:

`objdump {{[-f|--file-headers]}} {{path/to/binary}}`

- Display all header information:

`objdump {{[-x|--all-headers]}} {{path/to/binary}}`

- Display the disassembled output of executable sections:

`objdump {{[-d|--disassemble]}} {{path/to/binary}}`

- Display the disassembled executable sections in Intel syntax:

`objdump {{[-M|--disassembler-options]}} intel {{[-d|--disassemble]}} {{path/to/binary}}`

- Display the symbol table:

`objdump {{[-t|--syms]}} {{path/to/binary}}`

- Display a complete binary hex dump of all sections:

`objdump {{[-s|--full-contents]}} {{path/to/binary}}`
