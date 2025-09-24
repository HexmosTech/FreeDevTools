---
title: "Execute LLVM Bitcode - Run Programs with LLI | Online Free DevTools by Hexmos"
name: lli
path: /freedevtools/tldr/common/lli
canonical: "https://hexmos.com/freedevtools/tldr/common/lli/"
description: "Execute LLVM bitcode files with LLI. Run LLVM IR code directly and optimize performance. Free online tool, no registration required."
category: common
keywords:
- LLVM bitcode executor
- LLVM IR runner
- LLI bitcode execution
- LLI command line tool
- LLVM optimizer
- bitcode program runner
- IR code interpreter
- dynamic library linker
- cross-platform bitcode
- llvm linux
features:
- Execute LLVM bitcode directly from the command line
- Run LLVM IR files without compilation
- Optimize bitcode execution with various optimization levels
- Load dynamic libraries for linking during execution
- Pass command-line arguments to the executed bitcode
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lli

> Directly execute programs from LLVM bitcode.
> More information: <https://www.llvm.org/docs/CommandGuide/lli.html>.

- Execute a bitcode or IR file:

`lli {{path/to/file.ll}}`

- Execute with command-line arguments:

`lli {{path/to/file.ll}} {{argument1 argument2 ...}}`

- Enable all optimizations:

`lli -O3 {{path/to/file.ll}}`

- Load a dynamic library before linking:

`lli --dlopen={{path/to/library.dll}} {{path/to/file.ll}}`
