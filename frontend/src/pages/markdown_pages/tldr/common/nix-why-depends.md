---
title: "Show Nix Dependencies - Find Dependency Reasons | Free DevTools"
name: nix-why-depends
path: /freedevtools/tldr/common/nix-why-depends
canonical: "https://hexmos.com/freedevtools/tldr/common/nix-why-depends/"
description: "Show Nix dependencies with nix-why-depends. Identify the reasons a package depends on another, even build-time dependencies. Free online tool, no registration required."
category: common
keywords:
- nix dependency analysis
- nix package dependencies
- nix dependency tree
- nix why depends command
- nixos dependency inspector
- nix build dependencies
- nix store path dependencies
- nix package origin tracing
- linux package manager
- nix dependency graph
features:
- Show reasons for package dependencies
- Trace dependency chains in NixOS
- Identify build-time dependencies
- Analyze store path requirements
- Determine origin of package dependencies
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nix why-depends

> Show why a package depends on another package.
> More information: <https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-why-depends.html>.

- Show why the currently running NixOS system requires a certain store path:

`nix why-depends {{/run/current-system}} /nix/store/{{checksum-package-version.ext}}`

- Show why a package from nixpkgs requires another package as a _build-time_ dependency:

`nix why-depends --derivation {{nixpkgs#dependent}} {{nixpkgs#dependency}}`
