---
title: "Nix-env - Manage Packages | Online Free DevTools by Hexmos"
name: nix-env
path: /freedevtools/tldr/nix/nix-env
canonical: "https://hexmos.com/freedevtools/tldr/nix/nix-env/"
description: "Manage packages with Nix-env. Install, uninstall, and upgrade software packages easily using the Nix package manager. Free online tool, no registration required."
category: common
keywords:
- nix package manager
- nix user environment
- package installation
- package uninstallation
- package upgrade
- declarative package management
- functional package management
- linux package manager
- nixos package manager
- nix expressions
features:
- List installed packages
- Query available packages
- Install packages from nixpkgs or URLs
- Uninstall existing packages
- Upgrade individual or all packages
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nix-env

> Manipulate or query Nix user environments.
> More information: <https://nixos.org/manual/nix/stable/#sec-nix-env>.

- List all installed packages:

`nix-env {{[-q|--query]}}`

- Query installed packages:

`nix-env {{[-q|--query]}} {{search_term}}`

- Query available packages:

`nix-env {{[-qa|--query --available]}} {{search_term}}`

- Install package:

`nix-env {{[-iA|--install --attr]}} nixpkgs.{{pkg_name}}`

- Install a package from a URL:

`nix-env {{[-i|--install]}} {{pkg_name}} {{[-f|--file]}} {{example.com}}`

- Uninstall package:

`nix-env {{[-e|--uninstall]}} {{pkg_name}}`

- Upgrade one package:

`nix-env {{[-u|--upgrade]}} {{pkg_name}}`

- Upgrade all packages:

`nix-env {{[-u|--upgrade]}}`
