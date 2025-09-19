---
title: "Assemble Machine Code - with llvm-mc | Online Free DevTools by Hexmos"
name: llvm-mc
path: /freedevtools/tldr/llvm/llvm-mc
canonical: "https://hexmos.com/freedevtools/tldr/llvm/llvm-mc/"
description: "Assemble machine code with llvm-mc. Convert assembly to machine code and disassemble object files with this command-line utility. Free online tool, no registration required."
category: common
keywords:
- llvm machine code assembler
- assembly code to machine code
- object file disassembler
- llvm bitcode compiler
- machine code encoder
- llvm target triple
- object file assembly
- llvm-mc command line
- assembly syntax
- machine code utilities
features:
- Assemble assembly code into object files
- Disassemble object files into assembly code
- Compile LLVM bitcode into assembly
- Encode assembly instructions to machine code
- Disassemble machine code for specific target triples
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# llvm-mc

> LLVM Machine Code Playground. It provides a set of tools for working with LLVM machine code.
> Part of LLVM.
> More information: <https://llvm.org/docs/CommandGuide/llvm-mc.html>.

- Assemble assembly code file into object file with machine code:

`llvm-mc --filetype=obj -o {{path/to/output.o}} {{path/to/input.s}}`

- Disassemble object file with machine code into assembly code file:

`llvm-mc --disassemble -o {{path/to/output.s}} {{path/to/input.o}}`

- Compile LLVM bit code file into assembly code:

`llvm-mc -o {{path/to/output.s}} {{path/to/input.bc}}`

- Assemble assembly code from standard input stream and show encoding to standard output stream:

`echo "{{addl %eax, %ebx}}" | llvm-mc -show-encoding -show-inst`

- Disassemble machine code from standard input stream for specified triple:

`echo "{{0xCD 0x21}}" | llvm-mc --disassemble -triple={{target_name}}`
