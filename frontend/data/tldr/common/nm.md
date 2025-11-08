---
title: "List Symbols - Inspect Object Files with nm | Online Free DevTools by Hexmos"
name: nm
path: "/freedevtools/tldr/common/nm/"
canonical: "https://hexmos.com/freedevtools/tldr/common/nm/"
description: "List symbols quickly with nm. Inspect object files, identify undefined symbols, and demangle C++ names with this free online tool, no registration required."
category: common
keywords:
- object file symbols
- nm command
- list symbols
- undefined symbols
- demangle C++
- object file inspector
- linux symbols
- macos symbols
- elf symbols
- debugging symbols
features:
- List global function symbols
- Identify undefined symbols in a file
- Display all symbols, including debugging information
- Demangle C++ symbol names for readability
- Inspect object files for symbol information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nm

> List symbol names in object files.
> More information: <https://manned.org/nm>.

- List global (extern) functions in a file (prefixed with T):

`nm {{[-g|--extern-only]}} {{path/to/file.o}}`

- List only undefined symbols in a file:

`nm {{[-u|--undefined-only]}} {{path/to/file.o}}`

- List all symbols, even debugging symbols:

`nm {{[-a|--debug-syms]}} {{path/to/file.o}}`

- Demangle C++ symbols (make them readable):

`nm {{[-C|--demangle]}} {{path/to/file.o}}`
