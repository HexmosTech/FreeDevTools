---
title: "Flatpak Builder - Build App Dependencies | Online Free DevTools by Hexmos"
name: flatpak-builder
path: "/freedevtools/tldr/linux/flatpak-builder"
canonical: "https://hexmos.com/freedevtools/tldr/linux/flatpak-builder/"
description: "Build application dependencies with Flatpak Builder. Create and manage Flatpak packages, streamlining app distribution. Free online tool, no registration required."
category: linux
keywords:
  - flatpak builder
  - flatpak build
  - flatpak package
  - flatpak dependencies
  - flatpak repository
  - linux flatpak
  - app build tool
  - application packaging
  - software distribution
  - sandbox application
features:
  - Build Flatpak packages from manifests
  - Export Flatpaks to a specified repository
  - Install Flatpaks locally
  - Sign Flatpaks with GPG keys
  - Run a shell inside a Flatpak sandbox
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# flatpak-builder

> Help build application dependencies.
> More information: <https://docs.flatpak.org/en/latest/flatpak-builder-command-reference.html>.

- Build a Flatpak and export it to a new repository:

`flatpak-builder {{path/to/build_directory}} {{path/to/manifest}}`

- Build a Flatpak and export it to the specified repository:

`flatpak-builder --repo {{repository_name}} {{path/to/build_directory}} {{path/to/manifest}}`

- Build a Flatpak and install it locally:

`flatpak-builder --install {{path/to/build_directory}} {{path/to/manifest}}`

- Build and sign a Flatpak and export it to the specified repository:

`flatpak-builder --gpg-sign {{key_id}} --repo {{repository_name}} {{path/to/manifest}}`

- Run a shell inside of an application sandbox without installing it:

`flatpak-builder --run {{path/to/build_directory}} {{path/to/manifest}} {{sh}}`
