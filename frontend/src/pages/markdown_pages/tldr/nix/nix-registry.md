---
title: "Nix Registry - Manage Flake Registries | Online Free DevTools by Hexmos"
name: nix-registry
path: /freedevtools/tldr/nix/nix-registry
canonical: "https://hexmos.com/freedevtools/tldr/nix/nix-registry/"
description: "Manage Nix flake registries with Nix Registry. Pin revisions, add entries, and remove outdated configurations. Free online tool, no registration required."
category: common
keywords:
- nix flake registry management
- nix package pinning
- nix registry configuration
- nix configuration management
- nix registry entry update
- nix package manager
- nixos registry
- declarative package management
- nix registry command line
- nix registry automation
features:
- Pin Nixpkgs revision to current version
- Add new entries pointing to latest GitHub repository versions
- Remove outdated registry entries
- Pin registry entries to specific GitHub repository revisions
- Manage Nix flake registries from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nix registry

> Manage a Nix flake registry.
> See also: `nix flake` for information about flakes.
> More information: <https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-registry.html>.

- Pin the `nixpkgs` revision to the current version of the upstream repository:

`nix registry pin {{nixpkgs}}`

- Pin an entry to the latest version of the branch, or a particular reivision of a GitHub repository:

`nix registry pin {{entry}} {{github:owner/repo/branch_or_revision}}`

- Add a new entry that always points to the latest version of a GitHub repository, updating automatically:

`nix registry add {{entry}} {{github:owner/repo}}`

- Remove a registry entry:

`nix registry remove {{entry}}`

- See documentation about what Nix flake registries are:

`nix registry --help`
