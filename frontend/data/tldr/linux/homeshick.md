---
title: "Homesick - Synchronize Git Dotfiles | Online Free DevTools by Hexmos"
name: homeshick
path: "/freedevtools/tldr/linux/homeshick/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/homeshick/"
description: "Synchronize Git dotfiles easily with Homesick. Manage multiple configurations and streamline your workflow. Free online tool, no registration required."
category: linux
keywords:
  - git dotfile synchronization
  - homeshick configuration management
  - version control dotfiles
  - manage git dotfiles
  - dotfile management system
  - linux dotfile management
  - mac dotfile management
  - homeshick commands
  - clone dotfiles with homeshick
  - track dotfiles with homeshick
features:
  - Generate new dotfile configurations ("castles").
  - Track changes to existing dotfiles within castles.
  - Easily switch between different dotfile configurations.
  - Clone dotfile repositories from GitHub.
  - Symlink dotfiles to your home directory for seamless integration.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# homeshick

> Synchronize Git dotfiles.
> See also: `chezmoi`, `stow`, `tuckr`, `vcsh`.
> More information: <https://github.com/andsens/homeshick/wiki>.

- Create a new castle:

`homeshick generate {{castle_name}}`

- Add a file to your castle:

`homeshick track {{castle_name}} {{path/to/file}}`

- Go to a castle:

`homeshick cd {{castle_name}}`

- Clone a castle:

`homeshick clone {{github_username}}/{{repository_name}}`

- Symlink all files from a castle:

`homeshick link {{castle_name}}`
