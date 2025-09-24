---
title: "Carp REPL - Build Carp Projects | Online Free DevTools by Hexmos"
name: carp
path: /freedevtools/tldr/common/carp
canonical: "https://hexmos.com/freedevtools/tldr/common/carp/"
description: "Build your Carp projects effortlessly with Carp REPL. Compile, transpile, and execute Carp code with ease. Free online tool, no registration required."
category: common
keywords:
- carp repl
- carp compiler
- carp build tool
- carp transpiler
- functional programming language
- compile to c
- carp language
- carp interactive shell
- carp optimizations
- repl environment
features:
- Start an interactive Carp REPL.
- Build Carp projects from the command line.
- Transpile Carp code to C code.
- Optimize Carp builds for performance.
- Execute Carp files directly.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# carp

> REPL and build tool for Carp.
> More information: <https://carp-lang.github.io/carp-docs/Manual.html>.

- Start a REPL (interactive shell):

`carp`

- Start a REPL with a custom prompt:

`carp --prompt "{{> }}"`

- Build a `carp` file:

`carp -b {{path/to/file.carp}}`

- Build and run a file:

`carp -x {{path/to/file.carp}}`

- Build a file with optimizations enabled:

`carp -b --optimize {{path/to/file.carp}}`

- Transpile a file to C code:

`carp --generate-only {{path/to/file.carp}}`
