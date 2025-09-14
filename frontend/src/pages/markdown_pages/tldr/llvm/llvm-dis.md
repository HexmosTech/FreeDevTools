---
title: "Generate LLVM IR - Disassemble Bitcode | Free DevTools"
name: llvm-dis
path: /freedevtools/tldr/llvm/llvm-dis
canonical: "https://hexmos.com/freedevtools/tldr/llvm/llvm-dis/"
description: "Generate LLVM Intermediate Representation (IR) with llvm-dis. Disassemble LLVM bitcode into human-readable format. Free online tool, no registration required."
category: common
keywords:
- LLVM IR generator
- Bitcode disassembler
- LLVM bytecode converter
- IR text translator
- LLVM IR code
- BC to LLVM IR
- LLVM compiler
- Compiler infrastructure
- Code analysis
- Low level virtual machine
features:
- Convert LLVM bitcode files to human-readable LLVM IR.
- Output disassembled LLVM IR to standard output.
- Save disassembled LLVM IR to a specified file.
- Disassemble bitcode files with the same filename as the IR.
- Generate human-readable IR from LLVM bytecode.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# llvm-dis

> Convert LLVM bitcode files into human-readable LLVM Intermediate Representation (IR).
> More information: <https://www.llvm.org/docs/CommandGuide/llvm-dis.html>.

- Convert a bitcode file as LLVM IR and write the result to `stdout`:

`llvm-dis {{path/to/input.bc}} -o -`

- Convert a bitcode file to an LLVM IR file with the same filename:

`llvm-dis {{path/to/file.bc}}`

- Convert a bitcode file to LLVM IR, writing the result to the specified file:

`llvm-dis {{path/to/input.bc}} -o {{path/to/output.ll}}`
