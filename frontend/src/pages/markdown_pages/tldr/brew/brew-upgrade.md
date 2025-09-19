---
title: "Brew Upgrade - Upgrade Packages on macOS and Linux | Online Free DevTools by Hexmos"
name: brew-upgrade
path: /freedevtools/tldr/brew/brew-upgrade
canonical: "https://hexmos.com/freedevtools/tldr/brew/brew-upgrade/"
description: "Upgrade outdated formulae and casks with Brew Upgrade on macOS and Linux. Manage your software packages and dependencies efficiently. Free online tool, no registration required."
category: common
keywords:
- brew package upgrade
- homebrew upgrade macos
- cask upgrade command
- formula upgrade linux
- homebrew package manager
- brew update packages
- macos package upgrade
- linux package upgrade
- brew dry run upgrade
- brew package maintenance
features:
- Upgrade all outdated Homebrew formulae
- Upgrade specific Homebrew casks or formulae
- Simulate an upgrade with a dry run
- Manage software package dependencies
- Maintain current versions of installed software
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# brew upgrade

> Upgrade outdated formulae and casks.
> More information: <https://docs.brew.sh/Manpage#upgrade-options-installed_formulainstalled_cask->.

- Upgrade all outdated casks and formulae:

`brew upgrade`

- Upgrade a specific formula/cask:

`brew upgrade {{formula|cask}}`

- Print what would be upgraded, but don't actually upgrade anything:

`brew upgrade {{[-n|--dry-run]}}`
