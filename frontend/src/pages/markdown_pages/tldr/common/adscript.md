---
title: "Adscript Compiler - Generate Executables | Online Free DevTools by Hexmos"
name: adscript
path: /freedevtools/tldr/common/adscript
canonical: "https://hexmos.com/freedevtools/tldr/common/adscript/"
description: "Generate code with Adscript Compiler. Create executables and object files from Adscript source. Free online tool, no registration required."
category: common
keywords:
- adscript compiler
- adscript executable generator
- adscript object file
- adscript llvm ir
- adscript cross compiler
- adscript linux
- adscript macos
- adscript windows
- adscript file compiler
- amplus adscript
features:
- Compile Adscript files to object code
- Generate standalone executable files
- Output LLVM IR for Adscript programs
- Cross-compile for different CPU architectures
- Support compiling for various operating systems
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# adscript

> Compiler for Adscript files.
> More information: <https://github.com/Amplus2/Adscript>.

- Compile a file to an object file:

`adscript --output {{path/to/file.o}} {{path/to/input_file.adscript}}`

- Compile and link a file to a standalone executable:

`adscript --executable --output {{path/to/file}} {{path/to/input_file.adscript}}`

- Compile a file to LLVM IR instead of native machine code:

`adscript --llvm-ir --output {{path/to/file.ll}} {{path/to/input_file.adscript}}`

- Cross-compile a file to an object file for a foreign CPU architecture or operating system:

`adscript --target-triple {{i386-linux-elf}} --output {{path/to/file.o}} {{path/to/input_file.adscript}}`
