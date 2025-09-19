---
title: "Nix Profile - Manage Packages | Online Free DevTools by Hexmos"
name: nix-profile
path: /freedevtools/tldr/nix/nix-profile
canonical: "https://hexmos.com/freedevtools/tldr/nix/nix-profile/"
description: "Manage packages with Nix Profile. Install, update, and remove software packages using the Nix package manager. Free online tool, no registration required."
category: common
keywords:
- nix package manager
- nix package install
- nix profile install
- nix profile upgrade
- nix profile remove
- nix declarative package management
- nixos package management
- linux package management
- reproducible builds
- software deployment
features:
- Install packages from nixpkgs
- Install packages from flakes
- List installed packages
- Remove specific packages
- Upgrade packages to latest versions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nix profile

> Install, update and remove packages from Nix profiles.
> More information: <https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-profile.html>.

- Install some packages from nixpkgs into the default profile:

`nix profile install {{nixpkgs#pkg1 nixpkgs#pkg2 ...}}`

- Install a package from a flake on GitHub into a custom profile:

`nix profile install {{github:owner/repo/pkg}} --profile {{./path/to/directory}}`

- List packages currently installed in the default profile:

`nix profile list`

- Remove a package installed from nixpkgs from the default profile, by name:

`nix profile remove {{legacyPackages.x86_64-linux.pkg}}`

- Upgrade packages in the default to the latest available versions:

`nix profile upgrade`

- Rollback (cancel) the latest action on the default profile:

`nix profile rollback`
