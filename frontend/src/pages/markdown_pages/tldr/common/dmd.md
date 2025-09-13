---
title: "D Compiler - Build D Source Code | Free DevTools"
name: dmd
path: /freedevtools/tldr/common/dmd
canonical: "https://hexmos.com/freedevtools/tldr/common/dmd/"
description: "Build D source code with D compiler. Generate code, control bounds checking, and enable colored console output. Free online tool, no registration required."
category: common
keywords:
- D compiler
- D programming language
- D source code builder
- D language
- D application compiler
- dmd compiler
- command-line D compiler
- source code compiler
- software compilation
- cross-platform compiler
features:
- Build D source files into executables
- Generate code for all template instantiations
- Control bounds checking levels
- List available compiler checks
- Enable colored console output for improved readability
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dmd

> Official D compiler.
> More information: <https://dlang.org/dmd.html>.

- Build a D source file:

`dmd {{path/to/source.d}}`

- Generate code for all template instantiations:

`dmd -allinst`

- Control bounds checking:

`dmd -boundscheck={{on|safeonly|off}}`

- List information on all available checks:

`dmd -check={{h|help|?}}`

- Turn on colored console output:

`dmd -color`
