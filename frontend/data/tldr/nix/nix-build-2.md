---
title: "Nix Build - Create Nix Expressions | Online Free DevTools by Hexmos"
name: nix-build.2
path: "/freedevtools/tldr/nix/nix-build-2/"
canonical: "https://hexmos-com/freedevtools/tldr/nix/nix-build-2/"
description: "Create Nix expressions with Nix Build. Easily build software packages, and manage dependencies. Free online tool, no registration required."
category: common
keywords:
- nix expression builder
- nix package manager build
- reproducible builds linux
- declarative package management nix
- nixos build automation
- nix expression evaluation
- software deployment nix
- cross-platform build system
- linux package building
- functional package management
features:
- Build Nix expressions declaratively
- Manage software dependencies automatically
- Perform sandboxed builds for security
- Build packages cross-platform
- Evaluate Nix expressions consistently
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nix-build

> Build a Nix expression.
> See also: `nix build.3`.
> More information: <https://nixos.org/manual/nix/stable/command-ref/nix-build.html>.

- Build a Nix expression:

`nix-build '<nixpkgs>' {{[-A|--attr]}} {{firefox}}`

- Build a sandboxed Nix expression (on non-NixOS):

`nix-build '<nixpkgs>' {{[-A|--attr]}} {{firefox}} --option sandbox true`
