---
title: "Control Packages - Nix Package Manager with CLI | Free DevTools"
name: nix-classic
path: /freedevtools/tldr/common/nix-classic
canonical: "https://hexmos.com/freedevtools/tldr/common/nix-classic/"
description: "Control packages reliably with Nix Package Manager, a powerful command-line tool. Build, install, and manage software declaratively. Free online tool, no registration required."
category: common
keywords:
- nix package manager
- package manager control
- nix build packages
- nix shell environment
- nix environment management
- declarative package management
- reproducible builds nix
- nix store dependencies
- nix channel update
- linux package management
features:
- Search packages within nixpkgs repositories
- Create isolated shell environments with specified packages
- Install packages permanently within user environments
- Display dependency trees for store paths
- Update channel repositories for package listings
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nix classic

> A classic, stable interface to a powerful package manager that makes package management reliable, reproducible, and declarative.
> Some Nix commands such as `nix-build`, `nix-shell`, `nix-env`, and `nix-store` have their own pages.
> See also: `nix`.
> More information: <https://nixos.org>.

- Search for a package in nixpkgs via its name:

`nix-env {{[-qaP|--query --available --attr-path]}} {{search_term_regex}}`

- Start a shell with the specified packages available:

`nix-shell {{[-p|--packages]}} {{pkg1 pkg2 pkg3 ...}}`

- Install some packages permanently:

`nix-env {{[-iA|--install --attr]}} {{nixpkgs.pkg1 nixpkgs.pkg2 ...}}`

- Show all dependencies of a store path (package), in a tree format:

`nix-store {{[-q|--query]}} --tree /nix/store/{{checksum-package-version.ext}}`

- Update the channels (repositories):

`nix-channel --update`

- Remove unused paths from Nix store:

`nix-collect-garbage`
