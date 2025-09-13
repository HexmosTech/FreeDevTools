---
title: "Compile C Code - Run C Scripts with TCC | Free DevTools"
name: tcc
path: /freedevtools/tldr/common/tcc
canonical: "https://hexmos.com/freedevtools/tldr/common/tcc/"
description: "Compile C code with TCC, a tiny C compiler and linker. Execute C scripts and build executables directly from source files. Free online tool, no registration required."
category: common
keywords:
- C compiler
- C script runner
- tiny C compiler
- command-line C compiler
- C code compilation
- C language execution
- linux C compiler
- macos C compiler
- tcc compiler
- portable C compiler
features:
- Compile C source code into executable files
- Execute C source files as scripts with arguments
- Interpret C source files with a shebang
- Link multiple C source files into a single executable
- Offer command-line options similar to gcc
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tcc

> A tiny C compiler that can run C source files as scripts and otherwise has command-line options similar to `gcc`.
> More information: <https://bellard.org/tcc/tcc-doc.html>.

- Compile and link 2 source files to generate an executable:

`tcc -o {{executable_name}} {{path/to/file1.c}} {{path/to/file2.c}}`

- Directly run an input file like a script and pass arguments to it:

`tcc -run {{path/to/source_file.c}} {{arguments}}`

- Interpret C source files with a shebang inside the file:

`#!/{{path/to/tcc}} -run`
