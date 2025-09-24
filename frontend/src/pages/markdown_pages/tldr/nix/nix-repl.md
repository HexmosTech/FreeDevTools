---
title: "Nix Repl - Evaluate Nix Expressions | Online Free DevTools by Hexmos"
name: nix-repl
path: /freedevtools/tldr/nix/nix-repl
canonical: "https://hexmos.com/freedevtools/tldr/nix/nix-repl/"
description: "Evaluate Nix expressions effortlessly with Nix Repl. Start interactive Nix environments to build packages and manage dependencies. Free online tool, no registration required."
category: common
keywords:
- nix expression evaluation
- nix repl environment
- nix package building
- nix dependency management
- nix interactive shell
- nixos repl
- linux nix repl
- macos nix repl
- nix flake packages
- nix expression language
features:
- Evaluate Nix expressions interactively
- Load packages from a Nix flake
- Build packages from Nix expressions
- Start shells with available packages
- Start shells with package dependencies
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nix repl

> Start an interactive environment for evaluating Nix expressions.
> See <https://nixos.org/manual/nix/stable/language/index.html> for a description of the Nix expression language.
> More information: <https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-repl.html>.

- Start an interactive environment for evaluating Nix expressions:

`nix repl`

- Load all packages from a flake (e.g. `nixpkgs`) into scope:

`:lf {{nixpkgs}}`

- Build a package from an expression:

`:b {{expression}}`

- Start a shell with package from the expression available:

`:u {{expression}}`

- Start a shell with dependencies of the package from the expression available:

`:s {{expression}}`
