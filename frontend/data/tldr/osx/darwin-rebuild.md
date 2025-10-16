---
title: "Darwin Rebuild - Generate macOS System Configuration | Online Free DevTools by Hexmos"
name: darwin-rebuild
path: "/freedevtools/tldr/osx/darwin-rebuild/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/darwin-rebuild/"
description: "Generate macOS system configuration with Darwin Rebuild. Easily switch and build Nix-based configurations for your macOS system. Free online tool, no registration required."
category: osx
keywords:
- darwin rebuild configuration
- macos system configuration
- nix darwin rebuild
- darwin flake configuration
- osx system builder
- macos configuration manager
- nix-darwin configuration
- darwin system switch
- darwin system build
- macos nix environment
features:
- Rebuild and switch to a new Darwin configuration using a flake.
- Build a Darwin configuration without switching.
- Manage macOS system configurations with Nix.
- Update macOS system with a Nix-based configuration.
- Easily switch between Darwin system configurations.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# darwin-rebuild

> Rebuild and switch to a Nix-based Darwin (macOS) system configuration.
> More information: <https://github.com/LnL7/nix-darwin>.

- Rebuild and switch to the specified Darwin configuration:

`darwin-rebuild switch --flake {{path/to/flake}}`

- Build the configuration but don't switch to it:

`darwin-rebuild build --flake {{path/to/flake}}`

- Display help:

`darwin-rebuild --help`
