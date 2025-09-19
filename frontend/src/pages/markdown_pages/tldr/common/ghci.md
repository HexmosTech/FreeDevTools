---
title: "Haskell REPL - Create Interactive Haskell Sessions | Online Free DevTools by Hexmos"
name: ghci
path: /freedevtools/tldr/common/ghci
canonical: "https://hexmos.com/freedevtools/tldr/common/ghci/"
description: "Create interactive Haskell sessions with ghci. Load source files, enable language options, and manage compiler warnings for efficient Haskell development. Free online tool, no registration required."
category: common
keywords:
- Haskell REPL
- Haskell interactive shell
- GHCi repl
- GHCi haskell
- Haskell compiler
- Haskell language
- Interactive Haskell programming
- Haskell development
- Haskell debugging
- Glasgow Haskell Compiler
features:
- Start an interactive Haskell REPL session
- Load and execute Haskell source files
- Enable specific Haskell language extensions
- Configure compiler warning levels
- Specify include directories for source files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ghci

> The Glasgow Haskell Compiler's interactive environment.
> More information: <https://downloads.haskell.org/ghc/latest/docs/html/users_guide/ghci.html>.

- Start a REPL (interactive shell):

`ghci`

- Start a REPL and load the specified Haskell source file:

`ghci {{source_file.hs}}`

- Start a REPL and enable a language option:

`ghci -X{{language_option}}`

- Start a REPL and enable some level of compiler warnings (e.g. `all` or `compact`):

`ghci -W{{warning_level}}`

- Start a REPL with a colon-separated list of directories for finding source files:

`ghci -i{{path/to/directory1:path/to/directory2:...}}`
