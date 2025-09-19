---
title: "Manage Bash Packages - Simplify Script Management | Online Free DevTools by Hexmos"
name: bpkg
path: /freedevtools/tldr/common/bpkg
canonical: "https://hexmos.com/freedevtools/tldr/common/bpkg/"
description: "Manage Bash packages easily with bpkg. Install, update, and run Bash scripts with a simple command-line interface. Free online tool, no registration required."
category: common
keywords:
- Bash package manager
- Bash script management
- bpkg package installer
- command-line package manager
- Linux package manager
- macOS package manager
- shell script manager
- global package install
- versioned package install
- Bash dependency manager
features:
- Update the local package index
- Install packages globally or locally
- Install specific package versions
- Show detailed package information
- Run commands with arguments
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bpkg

> A package manager for Bash scripts.
> More information: <https://github.com/bpkg/bpkg>.

- Update the local index:

`bpkg update`

- Install a package globally:

`bpkg install --global {{package}}`

- Install a package in a subdirectory of the current directory:

`bpkg install {{package}}`

- Install a specific version of a package globally:

`bpkg install {{package}}@{{version}} -g`

- Show details about a specific package:

`bpkg show {{package}}`

- Run a command, optionally specifying its arguments:

`bpkg run {{command}} {{argument1 argument2 ...}}`
