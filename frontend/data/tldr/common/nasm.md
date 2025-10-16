---
title: "NASM Assembler - Assemble Code | Online Free DevTools by Hexmos"
name: nasm
path: "/freedevtools/tldr/common/nasm/"
canonical: "https://hexmos.com/freedevtools/tldr/common/nasm/"
description: "Assemble code with NASM Assembler. Convert assembly source code to machine code for x86 architectures. Free online tool, no registration required."
category: common
keywords:
- nasm assembler
- x86 assembler
- assembly code compiler
- object file generator
- assembly listing generator
- linux assembler
- windows assembler
- masm compatible assembler
- assembly syntax parser
- 8086 assembler
features:
- Assemble source code into binary files
- Generate assembly listing files for debugging
- Include custom directories in the search path
- Supports multiple output formats (bin, obj, elf)
- Parse and compile x86 assembly language
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nasm

> The Netwide Assembler, a portable 80x86 assembler.
> More information: <https://www.nasm.us/xdoc/2.16.03/html/nasmdoc2.html>.

- Assemble `source.asm` into a binary file `source`, in the (default) raw binary format:

`nasm {{source.asm}}`

- Assemble `source.asm` into a binary file `output_file`, in the specified format:

`nasm -f {{format}} {{source.asm}} -o {{output_file}}`

- List valid output formats (along with basic nasm help):

`nasm -hf`

- Assemble and generate an assembly listing file:

`nasm -l {{list_file}} {{source.asm}}`

- Add a directory (must be written with trailing slash) to the include file search path before assembling:

`nasm -i {{path/to/include_dir}}/ {{source.asm}}`
