---
title: "Guix Package Manager - Manage Packages | Online Free DevTools by Hexmos"
name: guix-package
path: "/freedevtools/tldr/linux/guix-package/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/guix-package/"
description: "Manage Guix packages efficiently with the guix package command. Install, remove, search, and roll back package versions easily. Free online tool, no registration required."
category: linux
keywords:
  - guix package manager
  - guix package installation
  - guix package removal
  - guix package search
  - guix package rollback
  - linux package manager
  - guix system administration
  - guix package listing
  - guix software management
  - guix package control
features:
  - Install new Guix packages
  - Remove unwanted Guix packages
  - Search the Guix package database
  - List installed and available Guix packages
  - Roll back to previous package configurations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# guix package

> Install, upgrade and remove Guix packages, or rollback to previous configurations.
> More information: <https://guix.gnu.org/manual/en/guix.html#Invoking-guix-package>.

- Install a new package:

`guix package {{[-i|--install]}} {{package}}`

- Remove a package:

`guix package {{[-r|--remove]}} {{package}}`

- Search the package database for a `regex`:

`guix package {{[-s|--search]}} "{{search_pattern}}"`

- List installed packages:

`guix package {{[-I|--list-installed]}}`

- List generations:

`guix package {{[-l|--list-generations]}}`

- Roll back to the previous generation:

`guix package --roll-back`
