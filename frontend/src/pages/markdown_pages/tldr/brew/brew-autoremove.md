---
title: "Brew Autoremove - Remove Unused Packages | Free DevTools"
name: brew-autoremove
path: /freedevtools/tldr/common/brew-autoremove
canonical: "https://hexmos.com/freedevtools/tldr/common/brew-autoremove/"
description: "Remove unused brew packages with Brew Autoremove. Clean up your system and free up disk space after uninstalling software. Free online tool, no registration required."
category: common
keywords:
- brew package manager
- brew autoremove command
- macos package cleaner
- homebrew cleanup
- brew dependency removal
- brew orphan package removal
- unused package remover
- macos dependency management
- brew disk space recovery
- command line package cleanup
features:
- Remove unused brew packages automatically
- Identify and list orphaned dependencies
- Perform a dry-run before removing packages
- Free up disk space by removing outdated packages
- Simplify brew package management
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# brew autoremove

> Remove unused formulae previously installed as dependencies.
> More information: <https://docs.brew.sh/Manpage#autoremove---dry-run>.

- Remove all unused formulae:

`brew autoremove`

- Print what would be removed, but don't actually remove anything:

`brew autoremove {{[-n|--dry-run]}}`
