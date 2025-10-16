---
title: "Assemble LLVM Bitcode - Generate .bc Files | Online Free DevTools by Hexmos"
name: llvm-as
path: "/freedevtools/tldr/llvm/llvm-as/"
canonical: "https://hexmos.com/freedevtools/tldr/llvm/llvm-as/"
description: "Assemble LLVM Intermediate Representation with llvm-as. Convert .ll files to .bc bitcode. Easy compilation for developers. Free online tool, no registration required."
category: common
keywords:
- LLVM Bitcode Assembler
- IR to BC Converter
- LLVM Assembly Tool
- .ll to .bc Compiler
- Bitcode Generation Tool
- LLVM Compiler Frontend
- LLVM IR Assembler
- Linux LLVM Assembly
- MacOS LLVM Assembly
- IR Code Compilation
features:
- Assemble LLVM IR files into bitcode
- Include module hash in generated bitcode
- Read IR from standard input for assembly
- Convert .ll files to optimized .bc files
- Facilitate LLVM IR compilation workflow
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# llvm-as

> LLVM Intermediate Representation (`.ll`) to Bitcode (`.bc`) assembler.
> More information: <https://llvm.org/docs/CommandGuide/llvm-as.html>.

- Assemble an IR file:

`llvm-as -o {{path/to/out.bc}} {{path/to/source.ll}}`

- Assemble an IR file and include a module hash in the produced Bitcode file:

`llvm-as --module-hash -o {{path/to/out.bc}} {{path/to/source.ll}}`

- Read an IR file from `stdin` and assemble it:

`cat {{path/to/source.ll}} | llvm-as -o {{path/to/out.bc}}`
