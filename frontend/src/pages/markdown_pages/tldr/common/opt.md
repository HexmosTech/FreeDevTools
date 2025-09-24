---
title: "LLVM Optimizer - Run Optimizations | Online Free DevTools by Hexmos"
name: opt
path: "/freedevtools/tldr/common/opt"
canonical: "https://hexmos.com/freedevtools/tldr/common/opt/"
description: "Run LLVM optimizations with LLVM Optimizer. Analyze, transform, and optimize LLVM bitcode files using command line. Free online tool, no registration required."
category: common
keywords:
- LLVM bitcode optimizer
- LLVM optimization pass
- LLVM analysis tool
- LLVM compiler infrastructure
- bitcode transformation tool
- code optimization techniques
- LLVM IR analysis
- LLVM code generator
- cross-platform optimization
- command-line optimizer
features:
- Optimize LLVM bitcode files with various passes
- Generate Control Flow Graphs in DOT format
- Perform program optimization at different levels
- Analyze LLVM intermediate representation
- Transform bitcode using specified optimization techniques
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# opt

> Run optimizations and analyse LLVM source files.
> More information: <https://llvm.org/docs/CommandGuide/opt.html>.

- Run an optimization or analysis on a bitcode file:

`opt -{{passname}} {{path/to/file.bc}} -S -o {{file_opt.bc}}`

- Output the Control Flow Graph of a function to a `.dot` file:

`opt {{-dot-cfg}} -S {{path/to/file.bc}} -disable-output`

- Optimize the program at level 2 and output the result to another file:

`opt -O2 {{path/to/file.bc}} -S -o {{path/to/output_file.bc}}`
