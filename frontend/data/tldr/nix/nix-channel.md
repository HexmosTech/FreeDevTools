---
title: "Manage Nix Channels - Update Software Packages | Online Free DevTools by Hexmos"
name: nix-channel
path: "/freedevtools/tldr/nix/nix-channel/"
canonical: "https://hexmos.com/freedevtools/tldr/nix/nix-channel/"
description: "Manage Nix software channels with nix-channel. Update package lists, add new channels, and control software sources effortlessly. Free online tool, no registration required."
category: common
keywords:
- nix package manager
- nix channels management
- nixos software updates
- nix command line tool
- nix package versions
- nixos package repository
- linux package management
- declarative package management
- software channel configuration
- nix channel update
features:
- List available Nix channels
- Add new software update channels
- Update package lists from configured channels
- Configure software source repositories
- Manage package versions declaratively
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nix-channel

> Manage `nix` update channels.
> More information: <https://nixos.wiki/wiki/Nix_channels>.

- List current channels:

`nix-channel --list`

- Add a channel:

`nix-channel --add {{https://nixos.org/channels/nixpkgs-unstable}}`

- Update package list of all channels:

`nix-channel --update`
