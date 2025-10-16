---
title: "Wasm Objdump - Inspect WebAssembly Binaries | Online Free DevTools by Hexmos"
name: wasm-objdump
path: "/freedevtools/tldr/wasm/wasm-objdump/"
canonical: "https://hexmos.com/freedevtools/tldr/wasm/wasm-objdump/"
description: "Inspect WebAssembly binaries with Wasm Objdump. Analyze code, display headers, and examine sections of .wasm files using this free online tool, no registration required."
category: common
keywords:
- WebAssembly binary inspection
- WASM object file analysis
- Disassemble WebAssembly code
- WebAssembly section header display
- WebAssembly code reverse engineering
- WebAssembly file format examination
- Wasm module metadata retrieval
- WebAssembly import table analysis
- WebAssembly export table analysis
- WebAssembly debugging tool
features:
- Display WebAssembly section headers
- Disassemble WebAssembly code into text format
- Display detailed information about WebAssembly sections
- Inspect specific WebAssembly sections by name
- Analyze import and export tables of WebAssembly modules
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wasm-objdump

> Display information from WebAssembly binaries.
> More information: <https://github.com/WebAssembly/wabt>.

- Display the section headers of a given binary:

`wasm-objdump {{[-h|--headers]}} {{file.wasm}}`

- Display the entire disassembled output of a given binary:

`wasm-objdump {{[-d|--disassemble]}} {{file.wasm}}`

- Display the details of each section:

`wasm-objdump {{[-x|--details]}} {{file.wasm}}`

- Display the details of a given section:

`wasm-objdump {{[-j|--section]}} '{{import}}' {{[-x|--details]}} {{file.wasm}}`
