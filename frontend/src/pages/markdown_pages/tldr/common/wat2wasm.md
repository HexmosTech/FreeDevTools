---
title: "Wat2wasm - Convert WebAssembly Text to Binary | Online Free DevTools by Hexmos"
name: wat2wasm
path: /freedevtools/tldr/common/wat2wasm
canonical: "https://hexmos.com/freedevtools/tldr/common/wat2wasm/"
description: "Convert WebAssembly text format to binary with Wat2wasm. Compile .wat files into optimized .wasm binaries instantly. Free online tool, no registration required."
category: common
keywords:
- WebAssembly text to binary
- WAT to WASM converter
- WebAssembly compiler
- WASM file generator
- WebAssembly file format
- WASM module creation
- command line WebAssembly
- wat2wasm linux
- wat2wasm macos
- wat2wasm online
features:
- Convert WebAssembly text (.wat) files to binary (.wasm) format.
- Validate WebAssembly syntax and report errors.
- Generate optimized WebAssembly binaries.
- Output verbose representations of the binary format.
- Specify the output file path for the compiled WebAssembly module.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wat2wasm

> Convert a file from the WebAssembly text format to the binary format.
> More information: <https://github.com/WebAssembly/wabt>.

- Parse and check a file for errors:

`wat2wasm {{file.wat}}`

- Write the output binary to a given file:

`wat2wasm {{file.wat}} {{[-o|--output]}} {{file.wasm}}`

- Display simplified representation of every byte:

`wat2wasm {{[-v|--verbose]}} {{file.wat}}`
