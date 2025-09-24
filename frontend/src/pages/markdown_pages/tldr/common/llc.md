---
title: "Compile LLVM Code - Generate Assembly | Online Free DevTools by Hexmos"
name: llc
path: /freedevtools/tldr/common/llc
canonical: "https://hexmos.com/freedevtools/tldr/common/llc/"
description: "Compile LLVM Intermediate Representation with llc. Generate optimized assembly code for various target architectures with ease. Free online tool, no registration required."
category: common
keywords:
- LLVM assembly generation
- LLVM IR compiler
- Bitcode to assembly
- llc compiler
- Assembly code generation
- LLVM optimization
- Target specific assembly
- Compiler optimization flags
- Intermediate representation
- LLVM bitcode
features:
- Compile LLVM IR to assembly code
- Optimize assembly code generation
- Output assembly to a specific file
- Generate position independent code
- Enable all compiler optimizations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# llc

> Compiles LLVM Intermediate Representation or bitcode to target-specific assembly language.
> More information: <https://www.llvm.org/docs/CommandGuide/llc.html>.

- Compile a bitcode or IR file to an assembly file with the same base name:

`llc {{path/to/file.ll}}`

- Enable all optimizations:

`llc -O3 {{path/to/input.ll}}`

- Output assembly to a specific file:

`llc --output {{path/to/output.s}}`

- Emit fully relocatable, position independent code:

`llc -relocation-model=pic {{path/to/input.ll}}`
