---
title: "Compile C/C++ Code - Control GCC Compiler | Free DevTools"
name: gcc
path: /freedevtools/tldr/common/gcc
canonical: "https://hexmos.com/freedevtools/tldr/common/gcc/"
description: "Compile C/C++ code efficiently with GCC Compiler. Optimize performance, debug effectively, and manage libraries effortlessly using command line. Free online tool, no registration required."
category: common
keywords:
- C/C++ Compiler
- GCC compiler
- Source Code Compilation
- Executable Generation
- Compiler Optimization
- Linux Compilation
- macOS Compilation
- C++ Build Process
- C Compiler Flags
- GNU Compiler Collection
features:
- Compile multiple source files into a single executable
- Optimize compiled programs for maximum performance
- Generate assembly code from C/C++ source
- Include external libraries during compilation
- Debug code effectively with debugging symbols
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gcc

> Preprocess and compile C and C++ source files, then assemble and link them together.
> Part of GCC (GNU Compiler Collection).
> More information: <https://gcc.gnu.org/onlinedocs/gcc/>.

- Compile multiple source files into an executable:

`gcc {{path/to/source1.c path/to/source2.c ...}} {{[-o|--output]}} {{path/to/output_executable}}`

- Activate output of all errors and warnings:

`gcc {{path/to/source.c}} -Wall {{[-o|--output]}} {{output_executable}}`

- Show common warnings, debug symbols in output, and optimize without affecting debugging:

`gcc {{path/to/source.c}} -Wall {{[-g|--debug]}} -Og {{[-o|--output]}} {{path/to/output_executable}}`

- Include libraries from a different path:

`gcc {{path/to/source.c}} {{[-o|--output]}} {{path/to/output_executable}} -I{{path/to/header}} -L{{path/to/library}} -l{{library_name}}`

- Compile source code into Assembler instructions:

`gcc {{[-S|--assemble]}} {{path/to/source.c}}`

- Compile source code into an object file without linking:

`gcc {{[-c|--compile]}} {{path/to/source.c}}`

- Optimize the compiled program for performance:

`gcc {{path/to/source.c}} -O{{1|2|3|fast}} {{[-o|--output]}} {{path/to/output_executable}}`

- Display version:

`gcc --version`
