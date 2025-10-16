---
title: "Nixos Rebuild - Control System Configuration | Online Free DevTools by Hexmos"
name: nixos-rebuild
path: "/freedevtools/tldr/linux/nixos-rebuild/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/nixos-rebuild/"
description: "Control system configuration with Nixos Rebuild. Manage boot entries, rollback changes, and test configurations. Free online tool, no registration required."
category: linux
keywords:
- nixos configuration management
- linux system configuration
- nixos rebuild switch
- nixos boot entry
- nixos rollback configuration
- nixos virtual machine build
- nixos generation list
- nixos configuration testing
- nixos boot management
- linux nix package manager
features:
- Switch to a new NixOS configuration
- Create named boot entries for configurations
- Rollback to a previous NixOS generation
- Build and test configurations in a virtual machine
- List available NixOS generations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nixos-rebuild

> Reconfigure a NixOS machine.
> More information: <https://nixos.org/nixos/manual/#sec-changing-config>.

- Build and switch to the new configuration, making it the boot default:

`sudo nixos-rebuild switch`

- Build and switch to the new configuration, making it the boot default and naming the boot entry:

`sudo nixos-rebuild switch {{[-p|--profile-name]}} {{name}}`

- Build and switch to the new configuration, making it the boot default and installing updates:

`sudo nixos-rebuild switch --upgrade`

- Rollback changes to the configuration, switching to the previous generation:

`sudo nixos-rebuild switch --rollback`

- Build the new configuration and make it the boot default without switching to it:

`sudo nixos-rebuild boot`

- Build and activate the new configuration, but don't make a boot entry (for testing purposes):

`sudo nixos-rebuild test`

- Build the configuration and open it in a virtual machine:

`sudo nixos-rebuild build-vm`

- List available generations similar to the boot loader menu:

`nixos-rebuild list-generations`
