---
title: "Nix Flake - Manage Dependencies with Nix | Online Free DevTools by Hexmos"
name: nix-flake
path: "/freedevtools/tldr/nix/nix-flake/"
canonical: "https://hexmos.com/freedevtools/tldr/nix/nix-flake/"
description: "Manage dependencies with Nix Flake. Update inputs, show outputs, and create new flakes. Streamline package management on any system. Free online tool, no registration required."
category: common
keywords:
- nix flake manager
- nix dependency management
- nix package manager
- nix reproducible builds
- nix package dependencies
- linux nix flake
- macos nix flake
- nixos package management
- declarative package management
- nix flake update
features:
- Initialize a new Nix flake from a template
- Update all flake input dependencies
- Update a specific flake input
- Display flake outputs from a repository
- Provide command-line help for nix flake
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nix flake

> Manage Nix flakes.
> More information: <https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html>.

- Create a new flake (just the `flake.nix` file) from the default template, in the current directory:

`nix flake init`

- Update all inputs (dependencies) of the flake in the current directory:

`nix flake update`

- Update a specific input (dependency) of the flake in the current directory:

`nix flake update {{input}}`

- Show all the outputs of a flake on github:

`nix flake show {{github:owner/repo}}`

- Display help:

`nix flake --help`
