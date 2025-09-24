---
title: "KPackageTool5 - Manage Plasma Packages | Online Free DevTools by Hexmos"
name: kpackagetool5
path: /freedevtools/tldr/linux/kpackagetool5
canonical: "https://hexmos.com/freedevtools/tldr/linux/kpackagetool5/"
description: "Manage Plasma packages with KPackageTool5.  Install, update, list, and remove Plasma applets and other package types easily. Free online tool, no registration required."
category: linux
keywords:
  - plasma package manager
  - kpackagetool5 commands
  - linux package management
  - install plasma applets
  - remove plasma applets
  - update plasma packages
  - list plasma packages
  - kpackagetool5 tutorial
  - kde package management
  - linux software installation
features:
  - Install Plasma packages from directories.
  - Update existing Plasma packages.
  - List all installed Plasma applets (globally or per-user).
  - Remove Plasma applets by name.
  - List all known installable package types.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kpackagetool5

> KPackage Manager: install, list, remove Plasma packages.
> More information: <https://manned.org/kpackagetool5>.

- List all known package types that can be installed:

`kpackagetool5 --list-types`

- Install the package from a directory:

`kpackagetool5 {{[-t|--type]}} {{package_type}} {{[-i|--install]}} {{path/to/directory}}`

- Update installed package from a directory:

`kpackagetool5 {{[-t|--type]}} {{package_type}} {{[-u|--upgrade]}} {{path/to/directory}}`

- List installed plasmoids (`--global` for all users):

`kpackagetool5 {{[-t|--type]}} Plasma/Applet {{[-l|--list]}} {{[-g|--global]}}`

- Remove a plasmoid by name:

`kpackagetool5 {{[-t|--type]}} Plasma/Applet {{[-r|--remove]}} "{{name}}"`
