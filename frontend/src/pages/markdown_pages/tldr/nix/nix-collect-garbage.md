---
title: "Delete Nix Garbage - Reclaim Disk Space | Free DevTools"
name: nix-collect-garbage
path: /freedevtools/tldr/nix/nix-collect-garbage
canonical: "https://hexmos.com/freedevtools/tldr/nix/nix-collect-garbage/"
description: "Delete Nix garbage and reclaim valuable disk space using nix-collect-garbage command. Remove unused store paths and manage Nix generations efficiently. Free online tool, no registration required."
category: common
keywords:
- nix garbage collection
- nix store optimization
- nix disk space recovery
- nix unused path removal
- nix generation management
- nixos garbage collection
- nix-store garbage
- nixos disk cleanup
- linux disk space
- nix package management
features:
- Delete unused Nix store paths
- Remove outdated Nix generations
- Simulate garbage collection with dry-run mode
- Delete store paths older than a specified age
- Reclaim disk space used by Nix
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nix-collect-garbage

> Delete unused and unreachable nix store paths.
> Generations can be listed using `nix-env --list-generations`.
> More information: <https://nixos.org/manual/nix/stable/command-ref/nix-collect-garbage.html>.

- Delete all store paths unused by current generations of each profile:

`sudo nix-collect-garbage {{[-d|--delete-old]}}`

- Simulate the deletion of old store paths:

`sudo nix-collect-garbage {{[-d|--delete-old]}} --dry-run`

- Delete all store paths older than 30 days:

`sudo nix-collect-garbage --delete-older-than 30d`
