---
title: "Nix Package Manager - Control Packages Declaratively | Online Free DevTools by Hexmos"
name: nix
path: /freedevtools/tldr/nix/nix
canonical: "https://hexmos.com/freedevtools/tldr/nix/nix/"
description: "Control packages reliably with Nix Package Manager. Manage dependencies, create reproducible builds, and simplify software deployments. Free online tool, no registration required."
category: common
keywords:
- nix package management
- declarative package manager
- reproducible builds nix
- nix command line
- functional package manager
- nixpkgs package search
- nix shell environment
- nix store garbage collection
- linux package management
- macos package management
features:
- Declaratively manage software dependencies
- Create reproducible build environments
- Search for packages in the nixpkgs repository
- Install and uninstall packages easily
- Start interactive Nix expression evaluation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nix

> A powerful package manager that makes package management reliable, reproducible, and declarative.
> `nix` is experimental and requires enabling experimental features.
> See also: `nix classic` for a classic, stable interface.
> Some subcommands such as `build`, `develop`, `flake`, `registry`, `profile`, `search`, `repl`, `store`, `edit`, `why-depends`, etc. have their own usage documentation.
> More information: <https://nix.dev/manual/nix/stable/command-ref/new-cli/nix>.

- Enable the `nix` command:

`mkdir {{[-p|--parents]}} ~/.config/nix; echo 'experimental-features = nix-command flakes' > ~/.config/nix/nix.conf`

- Search for a package in nixpkgs via its name or description:

`nix search nixpkgs {{search_term}}`

- Start a shell with the specified packages from nixpkgs available:

`nix shell {{nixpkgs#pkg1 nixpkgs#pkg2 nixpkgs#pkg3 ...}}`

- Install some packages from nixpkgs permanently:

`nix profile install {{nixpkgs#pkg1 nixpkgs#pkg2 nixpkgs#pkg3 ...}}`

- Remove unused paths from Nix store to free up space:

`nix store gc`

- Start an interactive environment for evaluating Nix expressions:

`nix repl`

- Display help for a specific subcommand:

`nix help {{subcommand}}`
