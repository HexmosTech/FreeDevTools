---
title: "Manage Dotfiles - Control Configuration Files with Chezmoi | Free DevTools"
name: chezmoi
path: /freedevtools/tldr/common/chezmoi
canonical: "https://hexmos.com/freedevtools/tldr/common/chezmoi/"
description: "Manage dotfiles efficiently with Chezmoi. Track, update, and deploy configuration files across multiple machines seamlessly. Free online tool, no registration required."
category: common
keywords:
- dotfile manager
- configuration management
- chezmoi dotfiles
- version control dotfiles
- multi-machine dotfiles
- dotfiles sync
- dotfile deployment
- git dotfiles
- linux dotfiles
- macos dotfiles
features:
- Initialize chezmoi repository from existing dotfiles
- Track and manage dotfiles across multiple machines
- Update repository with local dotfile changes
- Edit source state of tracked dotfiles
- Synchronize dotfiles with remote repository
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# chezmoi

> A multi-machine dotfile manager, written in Go.
> See also: `stow`, `tuckr`, `vcsh`, `homeshick`.
> More information: <https://chezmoi.io>.

- Setup up `chezmoi`, creating a Git repository in `~/.local/share/chezmoi`:

`chezmoi init`

- Set up `chezmoi` from existing dotfiles of a Git repository:

`chezmoi init {{repository_url}}`

- Start tracking one or more dotfiles:

`chezmoi add {{path/to/dotfile1 path/to/dotfile2 ...}}`

- Update repository with local changes:

`chezmoi re-add {{path/to/dotfile1 path/to/dotfile2 ...}}`

- Edit the source state of a tracked dotfile:

`chezmoi edit {{path/to/dotfile_or_symlink}}`

- See pending changes:

`chezmoi diff`

- Apply the changes:

`chezmoi -v apply`

- Pull changes from a remote repository and apply them:

`chezmoi update`
