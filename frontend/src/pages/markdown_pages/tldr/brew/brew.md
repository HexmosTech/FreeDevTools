---
title: "Brew Package Manager - Control Packages on macOS/Linux | Online Free DevTools by Hexmos"
name: brew
path: /freedevtools/tldr/brew/brew
canonical: "https://hexmos.com/freedevtools/tldr/brew/brew/"
description: "Control packages on macOS and Linux with Brew Package Manager. Install, upgrade, search, and manage software effortlessly using command line. Free online tool, no registration required."
category: common
keywords:
- brew package manager
- macos package manager
- linux package manager
- brew install command
- brew upgrade command
- brew search command
- brew cask manager
- brew formula manager
- brew commands macos
- brew commands linux
features:
- Install software packages on macOS and Linux
- Upgrade existing packages to their latest versions
- Search for available packages in the Brew repository
- Display information about installed packages
- Update the Brew package list from the repository
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# brew

> Homebrew - a package manager for macOS and Linux.
> Some subcommands such as `install` have their own usage documentation.
> More information: <https://docs.brew.sh/Manpage>.

- Install the latest stable version of a formula or cask:

`brew install {{formula|cask}}`

- List all installed formulae and casks:

`brew list`

- Upgrade an installed formula or cask (if none is given, all installed formulae/casks are upgraded):

`brew upgrade {{formula|cask}}`

- Fetch the newest version of Homebrew and of all formulae and casks from the Homebrew source repository:

`brew update`

- Show formulae and casks that have a more recent version available:

`brew outdated`

- Search for available formulae (i.e. packages) and casks (i.e. native macOS `.app` packages):

`brew search {{text}}`

- Display information about a formula or a cask (version, installation path, dependencies, etc.):

`brew info {{formula|cask}}`

- Check the local Homebrew installation for potential problems:

`brew doctor`
