---
title: "Manage Home Configuration - Home-Manager User Environment | Online Free DevTools by Hexmos"
name: home-manager
path: /freedevtools/tldr/common/home-manager
canonical: "https://hexmos.com/freedevtools/tldr/common/home-manager/"
description: "Manage user home configuration with Home-Manager for declarative environment control. Build, switch, and rollback configurations effortlessly. Free online tool, no registration required."
category: common
keywords:
- nix home configuration management
- home-manager nixos
- declarative user environment
- linux home directory configuration
- nix package manager
- home environment management
- dotfiles manager
- nix flakes
- home-manager build
- home-manager switch
features:
- Build user environment configurations declaratively
- Switch to new or previous configuration generations
- Roll back to previous working configurations
- List available configuration generations
- Integrate with Nix flakes for improved reproducibility
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# home-manager

> Manage a per-user environment using Nix, allowing declarative configuration of the user's home.
> More information: <https://github.com/nix-community/home-manager>.

- Build the configuration defined in `~/.config/nixpkgs/home.nix` without applying it:

`home-manager build`

- Build and apply (switch to) the new configuration:

`home-manager switch`

- Roll back to a previous configuration generation:

`home-manager rollback`

- List all existing configuration generations:

`home-manager generations`

- When using flakes, run any operation that requires nix to run (build, switch, news) by passing the path to the flake:

`home-manager {{command}} --flake {{path/to/flake}}`
