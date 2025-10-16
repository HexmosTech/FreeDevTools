---
title: "Clang-Tidy - Validate C/C++ Code | Online Free DevTools by Hexmos"
name: clang-tidy
path: "/freedevtools/tldr/clang/clang-tidy/"
canonical: "https://hexmos.com/freedevtools/tldr/clang/clang-tidy/"
description: "Validate C/C++ code with Clang-Tidy. Find style violations, bugs, and security flaws using static analysis. Free online tool, no registration required."
category: common
keywords:
- C++ code linter
- C static analyzer
- Clang-Tidy style checker
- C++ bug finder
- C security vulnerability scanner
- LLVM code analysis
- C++ code validation
- cross-platform linter
- code quality assurance
- C++ coding standards enforcement
features:
- Detect C++ code style violations
- Identify potential bugs in C++ code
- Scan for security vulnerabilities in C code
- Enforce coding standards across projects
- Perform static analysis on C/C++ source files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# clang-tidy

> An LLVM-based C/C++ linter to find style violations, bugs and security flaws through static analysis.
> More information: <https://clang.llvm.org/extra/clang-tidy/>.

- Run default checks on a source file:

`clang-tidy {{path/to/file.cpp}}`

- Don't run any checks other than the `cppcoreguidelines` checks on a file:

`clang-tidy {{path/to/file.cpp}} -checks={{-*,cppcoreguidelines-*}}`

- List all available checks:

`clang-tidy -checks={{*}} -list-checks`

- Specify defines and includes as compilation options (after `--`):

`clang-tidy {{path/to/file.cpp}} -- -I{{my_project/include}} -D{{definitions}}`
