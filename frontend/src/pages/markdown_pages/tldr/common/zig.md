---
title: "Zig Compiler - Build and Format Code | Online Free DevTools by Hexmos"
name: zig
path: /freedevtools/tldr/common/zig
canonical: "https://hexmos.com/freedevtools/tldr/common/zig/"
description: "Build and format your projects with Zig Compiler. Compile, test, and translate C files to Zig code. Free online tool, no registration required."
category: common
keywords:
- zig compiler
- zig build tool
- zig format code
- zig cross compile
- zig c++ compiler
- zig translate c
- zig init project
- zig test build
- zig linux
- zig windows
features:
- Compile Zig projects
- Format Zig source code
- Cross-compile for different architectures
- Translate C code to Zig
- Initialize new Zig projects
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zig

> The Zig compiler and toolchain.
> More information: <https://ziglang.org>.

- Compile the project in the current directory:

`zig build`

- Compile and run the project in the current directory:

`zig build run`

- Initialize a `zig build` project with library and executable:

`zig init`

- Create and run a test build:

`zig test {{path/to/file.zig}}`

- Cross compile, build and run a project for `x86_64` architecture and `windows` operating system:

`zig build run -fwine -Dtarget=x86_64-windows`

- Reformat Zig source into canonical form:

`zig fmt {{path/to/file.zig}}`

- Translate a C file to `zig`:

`zig translate-c -lc {{path/to/file.c}}`

- Use Zig as a drop-in C++ compiler:

`zig c++ {{path/to/file.cpp}}`
