---
title: "Static Analyzer - Validate Code with Scan-build | Free DevTools"
name: scan-build
path: /freedevtools/tldr/common/scan-build
canonical: "https://hexmos.com/freedevtools/tldr/common/scan-build/"
description: "Validate code with Scan-build static analyzer. Find bugs and improve code quality before runtime. Free online tool, no registration required."
category: common
keywords:
- static analysis
- code analysis
- bug detection
- clang analyzer
- code validation
- software testing
- C++ analysis
- C analysis
- Objective-C analysis
- llvm scan-build
features:
- Analyzes code for potential bugs and vulnerabilities.
- Integrates with existing build systems.
- Identifies memory leaks and other common errors.
- Generates detailed reports of detected issues.
- Supports C, C++, and Objective-C languages.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# scan-build

> Run a static analyzer over a codebase as part of performing a regular build.
> More information: <https://clang-analyzer.llvm.org/scan-build.html>.

- Build and analyze the project in the current directory:

`scan-build {{make}}`

- Run a command and pass all subsequent options to it:

`scan-build {{command}} {{command_arguments}}`

- Display help:

`scan-build`
