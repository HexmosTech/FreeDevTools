---
title: "SWC Compiler - Transpile JavaScript & TypeScript | Online Free DevTools by Hexmos"
name: swc
path: "/freedevtools/tldr/common/swc/"
canonical: "https://hexmos.com/freedevtools/tldr/common/swc/"
description: "Transpile JavaScript and TypeScript code with SWC Compiler. Enjoy lightning-fast compilation and modern syntax support with this Rust-based tool. Free online tool, no registration required."
category: common
keywords:
- JavaScript compiler
- TypeScript compiler
- SWC transpiler
- Rust compiler
- JavaScript transformer
- TypeScript transformer
- ECMA script compilation
- Code minification
- Syntax transformation
- Front-end optimization
features:
- Transpile JavaScript and TypeScript code
- Watch files for changes and re-compile
- Output transpiled code to a specific file
- Output transpiled code to a specific directory
- Ignore specified files or directories
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# swc

> JavaScript and TypeScript compiler written in Rust.
> More information: <https://swc.rs>.

- Transpile a specified input file and output to `stdout`:

`swc {{path/to/file}}`

- Transpile the input file every time it is changed:

`swc {{path/to/file}} --watch`

- Transpile a specified input file and output to a specific file:

`swc {{path/to/input_file}} --out-file {{path/to/output_file}}`

- Transpile a specified input directory and output to a specific directory:

`swc {{path/to/input_directory}} --out-dir {{path/to/output_directory}}`

- Transpile a specified input directory using a specific configuration file:

`swc {{path/to/input_directory}} --config-file {{path/to/.swcrc}}`

- Ignore files in a directory specified using glob path:

`swc {{path/to/input_directory}} --ignore {{path/to/ignored_file1 path/to/ignored_file2 ...}}`
