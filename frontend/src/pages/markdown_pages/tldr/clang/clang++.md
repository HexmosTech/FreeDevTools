---
title: "Compile C++ Code - Create Executables with clang++ | Online Free DevTools by Hexmos"
name: clang++
path: /freedevtools/tldr/clang/clang++
canonical: "https://hexmos.com/freedevtools/tldr/clang/clang++/"
description: "Compile C++ source code with clang++. Create executables, optimize for performance and debug applications using this command line tool. Free online tool, no registration required."
category: common
keywords:
- c++ compiler
- cpp compiler
- c++ code compilation
- clang compiler
- llvm clang++
- c++ executable
- compile c++ linux
- compile c++ windows
- c++ optimization
- c++ debugging
features:
- Compile C++ source files into executable binaries.
- Enable all errors and warnings during compilation.
- Optimize compiled programs for performance.
- Generate LLVM Intermediate Representation (IR).
- Specify language standards during compilation (e.g., c++20).
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# clang++

> Compile C++ source files.
> Part of LLVM.
> More information: <https://clang.llvm.org>.

- Compile a set of source code files into an executable binary:

`clang++ {{path/to/source1.cpp path/to/source2.cpp ...}} {{[-o|--output]}} {{path/to/output_executable}}`

- Activate output of all errors and warnings:

`clang++ {{path/to/source.cpp}} -Wall {{[-o|--output]}} {{output_executable}}`

- Show common warnings, debug symbols in output, and optimize without affecting debugging:

`clang++ {{path/to/source.cpp}} -Wall {{[-g|--debug]}} -Og {{[-o|--output]}} {{path/to/output_executable}}`

- Choose a language standard to compile for:

`clang++ {{path/to/source.cpp}} -std={{c++20}} {{[-o|--output]}} {{path/to/output_executable}}`

- Include libraries located at a different path than the source file:

`clang++ {{path/to/source.cpp}} {{[-o|--output]}} {{path/to/output_executable}} -I{{path/to/header_path}} -L{{path/to/library_path}} -l{{path/to/library_name}}`

- Compile source code into LLVM Intermediate Representation (IR):

`clang++ {{[-S|--assemble]}} -emit-llvm {{path/to/source.cpp}} {{[-o|--output]}} {{path/to/output.ll}}`

- Optimize the compiled program for performance:

`clang++ {{path/to/source.cpp}} -O{{1|2|3|fast}} {{[-o|--output]}} {{path/to/output_executable}}`

- Display version:

`clang++ --version`
