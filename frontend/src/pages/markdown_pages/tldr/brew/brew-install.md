---
title: "Brew Install - Install Packages on macOS | Free DevTools"
name: brew-install
path: /freedevtools/tldr/brew/brew-install
canonical: "https://hexmos.com/freedevtools/tldr/brew/brew-install/"
description: "Install packages with Brew Install on macOS. Effortlessly manage software dependencies and install applications using command-line interface. Free online tool, no registration required."
category: common
keywords:
- brew install macOS
- macOS package manager
- homebrew install
- brew cask install
- brew formula install
- command line package install
- macOS software installation
- terminal package install
- brew install command
- macOS developer tools
features:
- Installs Homebrew formulas
- Installs Homebrew casks
- Builds formulas from source
- Performs dry-run installations
- Downloads manifest files for installation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# brew install

> Install a Homebrew formula or cask.
> More information: <https://docs.brew.sh/Manpage#install-options-formulacask->.

- Install a formula/cask:

`brew install {{formula|cask}}`

- Build and install a formula from source (dependencies will still be installed from bottles):

`brew install {{[-s|--build-from-source]}} {{formula}}`

- Download the manifest, print what would be installed but don't actually install anything:

`brew install {{[-n|--dry-run]}} {{formula|cask}}`
