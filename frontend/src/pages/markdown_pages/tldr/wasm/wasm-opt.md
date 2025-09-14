---
title: "Optimize WebAssembly - Optimize WASM Binary Files | Free DevTools"
name: wasm-opt
path: /freedevtools/tldr/wasm/wasm-opt
canonical: "https://hexmos.com/freedevtools/tldr/wasm/wasm-opt/"
description: "Optimize WebAssembly binary files with wasm-opt. Reduce file sizes and improve performance of WASM applications. Free online tool, no registration required."
category: common
keywords:
- WebAssembly optimization
- WASM optimizer
- Binaryen WASM tool
- WASM file size reduction
- WASM performance improvement
- WASM binary compression
- WASM code shrinker
- WASM module optimizer
- Command line WASM tools
- WASM code optimization
features:
- Reduce WebAssembly binary file sizes
- Improve WASM application performance
- Apply various optimization levels
- Print textual representation of WASM binaries
- Support size-optimized builds
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wasm-opt

> Optimize WebAssembly binary files.
> More information: <https://github.com/webassembly/binaryen>.

- Apply default optimizations and write to a given file:

`wasm-opt -O {{input.wasm}} {{[-o|--output]}} {{output.wasm}}`

- Apply all optimizations and write to a given file (takes more time, but generates optimal code):

`wasm-opt -O4 {{input.wasm}} {{[-o|--output]}} {{output.wasm}}`

- Optimize a file for size:

`wasm-opt -Oz {{input.wasm}} {{[-o|--output]}} {{output.wasm}}`

- Print the textual representation of the binary to console:

`wasm-opt {{input.wasm}} --print`
