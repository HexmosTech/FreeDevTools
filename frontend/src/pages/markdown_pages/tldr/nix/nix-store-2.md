---
title: "Nix Store - Control Package Storage | Online Free DevTools by Hexmos"
name: nix-store.2
path: /freedevtools/tldr/nix/nix-store-2
canonical: "https://hexmos-com/freedevtools/tldr/nix/nix-store-2/"
description: "Control Nix package storage with Nix Store. Optimize disk space, delete unused paths, and manage dependencies. Free online tool, no registration required."
category: common
keywords:
- nix package manager
- nix store management
- nix store garbage collection
- nix dependency tree
- nix store path deletion
- nix optimize disk space
- nix hard linking
- nixos package management
- nix store analysis
- linux package manager
features:
- Collect and remove unused store paths (garbage collection).
- Optimize disk space by hard-linking identical files.
- Delete specific store paths.
- Display the dependency tree of a store path.
- Show all store paths that depend on a given store path.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nix-store

> Manipulate or query the Nix store.
> See also: `nix store.3`.
> More information: <https://nixos.org/manual/nix/stable/command-ref/nix-store.html>.

- Collect garbage, such as removing unused paths:

`nix-store --gc`

- Hard-link identical files together to reduce space usage:

`nix-store --optimise`

- Delete a specific store path (must be unused):

`nix-store --delete /nix/store/{{checksum-package-version.ext}}`

- Show all dependencies of a store path (package), in a tree format:

`nix-store {{[-q|--query]}} --tree /nix/store/{{checksum-package-version.ext}}`

- Calculate the total size of a certain store path with all the dependencies:

`du {{[-cLsh|--total --dereference --summarize --human-readable]}} $(nix-store {{[-q|--query]}} --references /nix/store/{{checksum-package-version.ext}})`

- Show all dependents of a particular store path:

`nix-store {{[-q|--query]}} --referrers /nix/store/{{checksum-package-version.ext}}`
