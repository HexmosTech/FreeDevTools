---
title: "Nix Search - Find Nix Packages | Online Free DevTools by Hexmos"
name: nix-search
path: /freedevtools/tldr/nix/nix-search
canonical: "https://hexmos.com/freedevtools/tldr/nix/nix-search/"
description: "Find Nix packages effortlessly with Nix Search. Explore package details, search nixpkgs and GitHub repositories, all through command line. Free online tool, no registration required."
category: common
keywords:
- nix package search
- nix flake search
- nixpkgs package finder
- github nix packages
- nix command line tool
- nix package manager
- linux package search
- macos package search
- cross platform package management
- nix package description
features:
- Search for packages in nixpkgs
- Display package descriptions from nixpkgs
- Find packages within GitHub flakes
- Search packages based on name and description
- Locate available packages from a flake
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nix search

> Search for packages in a Nix flake.
> See also: `nix flake` for information about flakes.
> More information: <https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-search.html>.

- Search `nixpkgs` for a package based on its name or description:

`nix search {{nixpkgs}} {{search_term}}`

- Show description of a package from nixpkgs:

`nix search {{nixpkgs#pkg}}`

- Show all packages available from a flake on github:

`nix search {{github:owner/repo}}`
