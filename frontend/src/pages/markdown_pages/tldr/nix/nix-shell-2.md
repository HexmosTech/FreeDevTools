---
title: "Nix Shell - Generate Development Environments | Online Free DevTools by Hexmos"
name: nix-shell.2
path: /freedevtools/tldr/nix/nix-shell-2
canonical: "https://hexmos-com/freedevtools/tldr/nix/nix-shell-2/"
description: "Generate reproducible development environments with Nix Shell. Configure dependencies and create isolated shells for consistent builds. Free online tool, no registration required."
category: common
keywords:
- Nix environment
- Nix shell
- Nix package manager
- Development environment generator
- Reproducible builds
- Functional package management
- NixOS shell
- Nix configuration
- Isolated shell
- Dependency management
features:
- Create isolated development environments
- Manage project dependencies using Nix expressions
- Execute commands within a Nix-defined shell
- Load packages from nixpkgs
- Specify Nixpkgs revision for reproducibility
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nix-shell

> Start an interactive shell based on a Nix expression.
> See also: `nix shell.3`.
> More information: <https://nixos.org/manual/nix/stable/command-ref/nix-shell.html>.

- Start with nix expression in `shell.nix` or `default.nix` in the current directory:

`nix-shell`

- Run shell command in non-interactive shell and exit:

`nix-shell --run "{{command}} {{argument1 argument2 ...}}"`

- Start with expression in `default.nix` in the current directory:

`nix-shell {{default.nix}}`

- Start with packages loaded from nixpkgs:

`nix-shell {{[-p|--packages]}} {{package1 package2 ...}}`

- Start with packages loaded from specific nixpkgs revision:

`nix-shell {{[-p|--packages]}} {{package1 package2 ...}} {{[-I|--include]}} nixpkgs={{https://github.com/NixOS/nixpkgs/archive/nixpkgs_revision.tar.gz}}`

- Evaluate rest of file in specific interpreter, for use in `#!-scripts` (see <https://nixos.org/manual/nix/stable/#use-as-a-interpreter>):

`nix-shell -i {{interpreter}} {{[-p|--packages]}} {{package1 package2 ...}}`
