---
title: "Raco Tool - Manage Racket Packages | Free DevTools"
name: raco
path: /freedevtools/tldr/common/raco
canonical: "https://hexmos.com/freedevtools/tldr/common/raco/"
description: "Manage Racket packages efficiently with Raco tool. Install, build, and test Racket projects using command line. Free online tool, no registration required."
category: common
keywords:
- racket package manager
- racket build tool
- racket test runner
- racket documentation search
- racket setup tool
- racket bytecode compiler
- racket executable builder
- racket metadata indexer
- racket dependency installer
- racket command line tools
features:
- Install Racket packages with automatic dependency resolution.
- Build bytecode, documentation, and executables for Racket collections.
- Run tests within Racket source files.
- Search local Racket documentation effectively.
- Install current directory as a Racket package.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# raco

> Racket tools.
> More information: <https://docs.racket-lang.org/raco/>.

- Install a package, automatically installing dependencies:

`raco pkg install --auto {{package_source}}`

- Install the current directory as a package:

`raco pkg install`

- Build (or rebuild) bytecode, documentation, executables, and metadata indexes for collections:

`raco setup {{collection1 collection2 ...}}`

- Run tests in files:

`raco test {{path/to/tests1.rkt path/to/tests2.rkt ...}}`

- Search local documentation:

`raco docs {{search_terms}}`

- Display help:

`raco help`
