---
title: "Gcov - Generate Code Coverage Reports | Online Free DevTools by Hexmos"
name: gcov
path: /freedevtools/tldr/linux/gcov
canonical: "https://hexmos.com/freedevtools/tldr/linux/gcov/"
description: "Generate code coverage reports with Gcov. Analyze code execution and identify untested parts of your program. Free online tool, no registration required."
category: linux
keywords:
- code coverage report
- gcov code analysis
- linux code coverage
- c++ code coverage
- execution analysis
- gnu gcov
- code profiling linux
- program testing
- software testing
- untested code discovery
features:
- Generate code coverage reports for C/C++ programs.
- Analyze code execution frequency.
- Identify untested code segments.
- Write branch probabilities to output files.
- Provide function-level execution summaries.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gcov

> Code coverage analysis and profiling tool that discovers untested parts of a program.
> Also displays a copy of source code annotated with execution frequencies of code segments.
> More information: <https://gcc.gnu.org/onlinedocs/gcc/Invoking-Gcov.html>.

- Generate a coverage report named `file.cpp.gcov`:

`gcov {{path/to/file.cpp}}`

- Write individual execution counts for every basic block:

`gcov {{[-a|--all-blocks]}} {{path/to/file.cpp}}`

- Write branch frequencies to the output file and print summary information to `stdout` as a percentage:

`gcov {{[-b|--branch-probabilities]}} {{path/to/file.cpp}}`

- Write branch frequencies as the number of branches taken, rather than the percentage:

`gcov {{[-c|--branch-counts]}} {{path/to/file.cpp}}`

- Do not create a `gcov` output file:

`gcov {{[-n|--no-output]}} {{path/to/file.cpp}}`

- Write file level as well as function level summaries:

`gcov {{[-f|--function-summaries]}} {{path/to/file.cpp}}`
