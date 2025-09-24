---
title: "Inspect NixOS Configuration - List Options | Online Free DevTools by Hexmos"
name: nixos-option
path: /freedevtools/tldr/linux/nixos-option
canonical: "https://hexmos.com/freedevtools/tldr/linux/nixos-option/"
description: "Inspect NixOS configurations with nixos-option. List option keys, view boot modules, and manage user settings effortlessly. Free online tool, no registration required."
category: linux
keywords:
  - nixos configuration inspector
  - nixos option listing
  - nixos configuration management
  - linux configuration options
  - nixos module viewer
  - nixos user settings
  - nixos boot modules
  - nixos builder listing
  - nixos configuration details
  - nixos option subkeys
features:
  - List all subkeys of a NixOS option.
  - View current boot kernel modules.
  - List authorized keys for a specific user.
  - Display all remote builders.
  - Inspect options on a different NixOS configuration.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nixos-option

> Inspect a NixOS configuration.
> More information: <https://nixos.org/manual/nixos/stable/index.html#sec-modularity>.

- List all subkeys of a given option key:

`nixos-option {{option_key}}`

- List current boot kernel modules:

`nixos-option boot.kernelModules`

- List authorized keys for a specific user:

`nixos-option users.users.{{username}}.openssh.authorizedKeys.{{keyFiles|keys}}`

- List all remote builders:

`nixos-option nix.buildMachines`

- List all subkeys of a given key on another NixOS configuration:

`NIXOS_CONFIG={{path_to_configuration.nix}} nixos-option {{option_key}}`

- Show recursively all values of a user:

`nixos-option {{[-r|--recursive]}} users.users.{{user}}`
