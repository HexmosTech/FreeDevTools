---
title: "CppClean - Find Unused C++ Code | Free DevTools"
name: cppclean
path: /freedevtools/tldr/common/cppclean
canonical: "https://hexmos.com/freedevtools/tldr/common/cppclean/"
description: "Find unused code with CppClean, a static analysis tool for C++ projects. Identify dead code, simplify your codebase, and improve maintainability. Free online tool, no registration required."
category: common
keywords:
- C++ code analysis
- static code analysis
- C++ unused code
- C++ dead code detection
- C++ code simplification
- C++ project cleaner
- Linux C++ tools
- macOS C++ tools
- cross-platform code analysis
- C++ codebase maintenance
features:
- Detects unused functions and variables
- Identifies redundant code blocks
- Simplifies complex C++ codebases
- Analyzes C++ project dependencies
- Supports multiple include paths
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cppclean

> Find unused code in C++ projects.
> More information: <https://github.com/myint/cppclean>.

- Run in a project's directory:

`cppclean {{path/to/project}}`

- Run on a project where the headers are in the `inc1/` and `inc2/` directories:

`cppclean {{path/to/project}} --include-path {{inc1}} --include-path {{inc2}}`

- Run on a specific file `main.cpp`:

`cppclean {{main.cpp}}`

- Run on the current directory, excluding the "build" directory:

`cppclean {{.}} --exclude {{build}}`
