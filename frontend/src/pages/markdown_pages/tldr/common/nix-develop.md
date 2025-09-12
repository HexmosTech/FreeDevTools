---
title: "Nix Develop - Generate Shell Environments | Free DevTools"
name: nix-develop
path: /freedevtools/tldr/common/nix-develop
canonical: "https://hexmos.com/freedevtools/tldr/common/nix-develop/"
description: "Generate development shell environments with Nix Develop. Quickly build and configure software using dependency isolation for reproducible builds. Free online tool, no registration required."
category: common
keywords:
- nix development shell
- nix environment generation
- nix dependency isolation
- nix reproducible builds
- nix flake development
- linux development environment
- macos development environment
- nix package manager
- command line development
- software development environment
features:
- Launch a shell with package dependencies.
- Create isolated development environments.
- Build software in a reproducible environment.
- Configure build phases.
- Utilize nixpkgs packages directly.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nix develop

> Run a Bash shell that provides the build environment of a derivation.
> More information: <https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-develop.html>.

- Start a shell with all dependencies of a package from nixpkgs available:

`nix develop {{nixpkgs#pkg}}`

- Start a development shell for the default package in a flake in the current directory:

`nix develop`

- In that shell, configure and build the sources:

`configurePhase; buildPhase`
