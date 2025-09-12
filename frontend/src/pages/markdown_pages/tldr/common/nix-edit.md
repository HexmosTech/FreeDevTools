---
title: "Nix Edit - Modify Nix Expressions | Free DevTools"
name: nix-edit
path: /freedevtools/tldr/common/nix-edit
canonical: "https://hexmos.com/freedevtools/tldr/common/nix-edit/"
description: "Modify Nix expressions easily with Nix Edit. Directly open and edit Nix packages in your preferred editor. Free online tool, no registration required."
category: common
keywords:
- nix expression editor
- nix package modifier
- nix configuration editor
- nix package source code
- nixpkgs expression
- nixos configuration
- linux package management
- functional package editing
- declarative configuration
- nix expression debugging
features:
- Open and edit Nix expressions in your default editor
- Modify Nix package source code directly
- Inspect Nix package definitions
- Quickly access Nix configuration files
- Debug Nix expressions using $EDITOR
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nix edit

> Open the Nix expression of a Nix package in $EDITOR.
> More information: <https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-edit.html>.

- Open the source of the Nix expression of a package from nixpkgs in your `$EDITOR`:

`nix edit {{nixpkgs#pkg}}`

- Dump the source of a package to `stdout`:

`EDITOR=cat nix edit {{nixpkgs#pkg}}`
