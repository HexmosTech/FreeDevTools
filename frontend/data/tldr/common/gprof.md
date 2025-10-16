---
title: "Gprof Profiler - Analyze Program Performance | Online Free DevTools by Hexmos"
name: gprof
path: "/freedevtools/tldr/common/gprof/"
canonical: "https://hexmos.com/freedevtools/tldr/common/gprof/"
description: "Analyze program performance with Gprof Profiler. Profile function executions and optimize your code for better efficiency. Free online tool, no registration required."
category: common
keywords:
- program profiler
- function profiler
- gprof profiler
- c++ profiler
- code performance analysis
- linux profiler
- gnu profiler
- application performance
- performance optimization
- execution profiler
features:
- Profile function execution times
- Generate program call graphs
- Identify performance bottlenecks
- Analyze program runtime behavior
- Suppress profile field descriptions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gprof

> Performance analysis tool for many programming languages.
> It profiles the function executions of a program.
> More information: <https://ftp.gnu.org/old-gnu/Manuals/gprof/html_mono/gprof.html>.

- Compile binary to default `a.out` with gprof information and run it to get `gmon.out`:

`gcc {{[-p|-pg]}} {{program.c}} && ./a.out`

- Run gprof on default `a.out` and `gmon.out` to obtain profile output:

`gprof`

- Run gprof on a named binary:

`gprof {{path/to/binary}} {{path/to/gmon.out}}`

- Suppress profile field's description:

`gprof {{[-b|--brief]}}`

- Display routines that have zero usage:

`gprof {{[-bz|--brief --display-unused-functions]}}`
