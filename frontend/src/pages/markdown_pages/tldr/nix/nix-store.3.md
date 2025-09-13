---
title: "Nix Store - Manage Package Store Paths | Free DevTools"
name: nix-store.3
path: /freedevtools/tldr/common/nix-store.3
canonical: "https://hexmos.com/freedevtools/tldr/common/nix-store.3/"
description: "Manage package store paths with Nix Store. Delete unused paths, optimize store, and compare versions. Free online tool, no registration required."
category: common
keywords:
- nix package manager
- nix store paths
- nix garbage collection
- nix store optimization
- nix store delete path
- nix store list contents
- nix store diff closures
- nix package management
- linux package manager
- nixos package manager
features:
- Collect garbage from the nix store to free up disk space
- Hard-link identical files in the nix store to reduce space usage
- Delete specific, unused store paths
- List the contents of a store path, including remote stores
- Show the differences in package versions between two store paths
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nix store

> Manipulate the Nix store.
> See also: `nix-store`.
> More information: <https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-store.html>.

- Collect garbage, i.e. remove unused paths to reduce space usage:

`nix store gc`

- Hard-link identical files together to reduce space usage:

`nix store optimise`

- Delete a specific store path (most be unused):

`nix store delete /nix/store/{{checksum-package-version.ext}}`

- List a contents of the store path, on a remote store:

`nix store --store {{https://cache.nixos.org}} ls /nix/store/{{checksum-package-version.ext}}`

- Show the differences in versions between two store paths, with their respective dependencies:

`nix store diff-closures /nix/store/{{checksum-package-version.ext}} /nix/store/{{checksum-package-version.ext}}`
