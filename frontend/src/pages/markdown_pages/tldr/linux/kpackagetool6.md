---
title: "Manage Plasma Packages - KPackageTool6 | Online Free DevTools by Hexmos"
name: kpackagetool6
path: /freedevtools/tldr/linux/kpackagetool6
canonical: "https://hexmos.com/freedevtools/tldr/linux/kpackagetool6/"
description: "Manage Plasma packages efficiently with KPackageTool6. Install, update, list, and remove Plasma applets and other package types easily. Free online tool, no registration required."
category: linux
keywords:
  - plasma package manager
  - kpackagetool6 commands
  - linux package management
  - plasmoid installation
  - applet management
  - kde package control
  - kpackagetool6 list
  - kpackagetool6 install
  - kpackagetool6 remove
  - linux applet manager
features:
  - Install Plasma packages from directories.
  - Update existing Plasma packages.
  - List all installed plasmoids (globally or per user).
  - Remove plasmoids by name.
  - List all known installable package types.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kpackagetool6

> KPackage Manager: install, list, remove Plasma packages.
> More information: <https://manned.org/kpackagetool6>.

- List all known package types that can be installed:

`kpackagetool6 --list-types`

- Install the package from a directory:

`kpackagetool6 {{[-t|--type]}} {{package_type}} {{[-i|--install]}} {{path/to/directory}}`

- Update installed package from a directory:

`kpackagetool6 {{[-t|--type]}} {{package_type}} {{[-u|--upgrade]}} {{path/to/directory}}`

- List installed plasmoids (`--global` for all users):

`kpackagetool6 {{[-t|--type]}} Plasma/Applet {{[-l|--list]}} {{[-g|--global]}}`

- Remove a plasmoid by name:

`kpackagetool6 {{[-t|--type]}} Plasma/Applet {{[-r|--remove]}} "{{name}}"`
