---
title: "Generate Ninja Builds - Fast Compilation | Online Free DevTools by Hexmos"
name: ninja
path: "/freedevtools/tldr/common/ninja/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ninja/"
description: "Generate optimized builds with Ninja, a fast and lightweight build system. Accelerate your software compilation process and improve development workflow. Free online tool, no registration required."
category: common
keywords:
- ninja build generator
- fast build system
- cmake ninja integration
- cross platform build tool
- ninja build tool linux
- ninja build tool windows
- ninja build tool macos
- high performance build
- dependency graph builder
- automated build process
features:
- Build projects in specified directories
- Execute builds with parallel jobs
- Display available build targets
- Show detailed help information
- Support cross-platform builds
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ninja

> A Build system designed to be fast.
> More information: <https://ninja-build.org/manual.html>.

- Build in the current directory:

`ninja`

- Build in the current directory, executing 4 jobs at a time in parallel:

`ninja -j {{4}}`

- Build a program in a given directory:

`ninja -C {{path/to/directory}}`

- Show targets (e.g. `install` and `uninstall`):

`ninja -t targets`

- Display help:

`ninja -h`
