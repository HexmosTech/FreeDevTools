---
title: "Haskell Compiler - Compile Haskell Code | Online Free DevTools by Hexmos"
name: ghc
path: /freedevtools/tldr/common/ghc
canonical: "https://hexmos.com/freedevtools/tldr/common/ghc/"
description: "Compile Haskell code efficiently with ghc, the Glasgow Haskell Compiler. Supports optimization, object file generation, and REPL interaction. Free online tool, no registration required."
category: common
keywords:
- Haskell compiler
- Glasgow Haskell Compiler
- Haskell code compilation
- Haskell REPL
- GHC optimization
- Haskell object files
- Haskell expression evaluation
- Linux Haskell compiler
- MacOS Haskell compiler
- Command line Haskell
features:
- Compile Haskell source files
- Generate optimized executables
- Produce object files for separate compilation
- Start an interactive Haskell REPL
- Evaluate single Haskell expressions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ghc

> The Glasgow Haskell Compiler.
> Compiles and links Haskell source files.
> More information: <https://downloads.haskell.org/ghc/latest/docs/users_guide/usage.html>.

- Find and compile all modules in the current directory:

`ghc Main`

- Compile a single file:

`ghc {{path/to/file.hs}}`

- Compile using extra optimization:

`ghc -O {{path/to/file.hs}}`

- Stop compilation after generating object files (.o):

`ghc -c {{path/to/file.hs}}`

- Start a REPL (interactive shell):

`ghci`

- Evaluate a single expression:

`ghc -e {{expression}}`
