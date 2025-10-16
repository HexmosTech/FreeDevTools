---
title: "LLVM Config - Generate Compiler Flags | Online Free DevTools by Hexmos"
name: llvm-config
path: "/freedevtools/tldr/llvm/llvm-config/"
canonical: "https://hexmos.com/freedevtools/tldr/llvm/llvm-config/"
description: "Generate compiler flags with LLVM Config. Retrieve configuration information, link LLVM based programs, and manage LLVM installations. Free online tool, no registration required."
category: common
keywords:
- LLVM configuration
- compiler flags generator
- link LLVM programs
- LLVM targets
- build system integration
- clang++ compilation
- LLVM installation prefix
- Makefile integration
- configure scripts
- cross-platform LLVM
features:
- Generate compiler and linker flags
- Print LLVM installation prefix
- List supported LLVM targets
- Integrate with build systems (Makefiles, configure scripts)
- Configure compilation of LLVM based programs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# llvm-config

> Get various configuration information needed to compile programs which use LLVM.
> Typically called from build systems, like in Makefiles or configure scripts.
> More information: <https://llvm.org/docs/CommandGuide/llvm-config.html>.

- Compile and link an LLVM based program:

`clang++ $(llvm-config --cxxflags --ldflags --libs) --output {{path/to/output_executable}} {{path/to/source.cc}}`

- Print the `PREFIX` of your LLVM installation:

`llvm-config --prefix`

- Print all targets supported by your LLVM build:

`llvm-config --targets-built`
