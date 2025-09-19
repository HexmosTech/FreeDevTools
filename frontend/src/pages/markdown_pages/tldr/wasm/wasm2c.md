---
title: "Generate C Code - wasm2c WebAssembly to C | Online Free DevTools by Hexmos"
name: wasm2c
path: /freedevtools/tldr/wasm/wasm2c
canonical: "https://hexmos.com/freedevtools/tldr/wasm/wasm2c/"
description: "Generate C code with wasm2c. Easily convert WebAssembly binaries to readable C source and header files for cross-platform development. Free online tool, no registration required."
category: common
keywords:
- WebAssembly to C converter
- WASM to C code generation
- C source code generator
- Wasm2c compiler
- WebAssembly development
- Binary to C conversion
- Cross-platform C development
- WABT wasm2c
- WASM decompiler
- C header file creation
features:
- Convert WebAssembly binaries to C source code
- Generate corresponding C header files
- Output C code to the console
- Write C output to specified files
- Facilitate cross-platform development with C code
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wasm2c

> Convert a file from the WebAssembly binary format to a C source file and header.
> More information: <https://github.com/WebAssembly/wabt>.

- Convert a file to a C source file and header and display it to the console:

`wasm2c {{file.wasm}}`

- Write the output to a given file (`file.h` gets additionally generated):

`wasm2c {{file.wasm}} {{[-o|--output]}} {{file.c}}`
