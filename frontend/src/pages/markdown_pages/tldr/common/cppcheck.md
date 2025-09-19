---
title: "CPPCheck - Validate C/C++ Code | Online Free DevTools by Hexmos"
name: cppcheck
path: /freedevtools/tldr/common/cppcheck
canonical: "https://hexmos.com/freedevtools/tldr/common/cppcheck/"
description: "Validate C/C++ code with CPPCheck, a static analyzer that detects errors compilers miss. Improve code quality and reliability effortlessly. Free online tool, no registration required."
category: common
keywords:
- C/C++ static analysis
- code validation
- bug detection
- error checking
- software quality assurance
- cppcheck analysis
- c++ code review
- c code review
- code scanning
- source code analysis
features:
- Recursively check directories for errors
- Suppress specific tests during code analysis
- Specify include paths for external libraries
- Check Microsoft Visual Studio projects and solutions
- Enable different test categories (error, warning, style)
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cppcheck

> A static analysis tool for C/C++ code.
> Instead of syntax errors, it focuses on the types of bugs that compilers normally do not detect.
> More information: <https://cppcheck.sourceforge.net>.

- Recursively check the current directory, showing progress on the screen and logging error messages to a file:

`cppcheck . 2> cppcheck.log`

- Recursively check a given directory, and don't print progress messages:

`cppcheck {{[-q|--quiet]}} {{path/to/directory}}`

- Check a given file, specifying which tests to perform (by default only errors are shown):

`cppcheck --enable {{error|warning|style|performance|portability|information|all}} {{path/to/file.cpp}}`

- List available tests:

`cppcheck --errorlist`

- Check a given file, ignoring specific tests:

`cppcheck --suppress {{test_id1}} --suppress {{test_id2}} {{path/to/file.cpp}}`

- Check the current directory, providing paths for include files located outside it (e.g. external libraries):

`cppcheck -I {{include/directory_1}} -I {{include/directory_2}} .`

- Check a Microsoft Visual Studio project (`*.vcxproj`) or solution (`*.sln`):

`cppcheck --project {{path/to/project.sln}}`
