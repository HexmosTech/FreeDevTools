---
title: "Brew List - Control Package Installations | Free DevTools"
name: brew-list
path: /freedevtools/tldr/brew/brew-list
canonical: "https://hexmos.com/freedevtools/tldr/brew/brew-list/"
description: "Control package installations with Brew List. Manage formulae and casks on macOS using command line. View installed packages and dependencies. Free online tool, no registration required."
category: common
keywords:
- brew package manager
- macOS package manager
- homebrew list
- homebrew cask list
- brew installed packages
- brew formula list
- brew cask artifacts
- list homebrew packages
- brew pinned packages
- brew list command
features:
- List all installed formulae and casks.
- Display files belonging to a specific installed formula.
- Show artifacts of a particular cask.
- Filter lists to show only formulae or only casks.
- List only pinned formulae.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# brew list

> List installed formulae/casks or their files.
> More information: <https://docs.brew.sh/Manpage#list-ls-options-installed_formulainstalled_cask->.

- List all installed formulae and casks:

`brew list`

- List files belonging to an installed formula:

`brew list {{formula}}`

- List artifacts of a cask:

`brew list {{cask}}`

- List only formulae:

`brew list --formula`

- List only casks:

`brew list --cask`

- List only pinned formulae:

`brew list --pinned`
