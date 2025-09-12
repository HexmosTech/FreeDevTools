---
title: "Compile D Code - LDC D Compiler with LLVM | Free DevTools"
name: ldc
path: /freedevtools/tldr/common/ldc
canonical: "https://hexmos.com/freedevtools/tldr/common/ldc/"
description: "Compile D code efficiently with LDC D Compiler, using LLVM backend for optimized performance. Cross-compile, link, and generate executables. Free online tool, no registration required."
category: common
keywords:
- D programming compiler
- D language LLVM
- LDC compiler command line
- D code compilation
- cross-compilation D
- D executable generator
- LDC compiler flags
- compile D on linux
- compile D on macos
- compile D on windows
features:
- Compile D source code into executable binaries
- Compile D code without linking
- Select target architecture and operating system
- Display LDC compiler help information
- Display complete LDC compiler help, including hidden options
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ldc

> D compiler using LLVM as a backend.
> More information: <https://wiki.dlang.org/Using_LDC>.

- Compile a source code file into an executable binary:

`ldc2 {{path/to/source.d}} -of={{path/to/output_executable}}`

- Compile the source code file without linking:

`ldc2 -c {{path/to/source.d}}`

- Select the target architecture and OS:

`ldc -mtriple={{architecture_OS}} -c {{path/to/source.d}}`

- Display help:

`ldc2 -h`

- Display complete help:

`ldc2 -help-hidden`
