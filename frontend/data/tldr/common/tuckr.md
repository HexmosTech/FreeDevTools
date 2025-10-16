---
title: "Manage Dotfiles - Control Dotfile Configurations | Online Free DevTools by Hexmos"
name: tuckr
path: "/freedevtools/tldr/common/tuckr/"
canonical: "https://hexmos.com/freedevtools/tldr/common/tuckr/"
description: "Manage dotfiles with Tuckr, the Rust-based dotfile manager. Control configurations across systems, add, remove, and update dotfiles effortlessly. Free online tool, no registration required."
category: common
keywords:
- dotfile manager
- dotfile configuration
- rust dotfile manager
- tuckr dotfile
- linux dotfile management
- macos dotfile management
- cross-platform dotfile sync
- configuration file manager
- dotfiles repository
- version controlled dotfiles
features:
- Synchronize dotfiles across multiple machines
- Add and remove dotfiles with a single command
- Exclude specific programs during dotfile addition
- Run custom setup scripts for individual dotfiles
- Check dotfile status and identify changes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tuckr

> Dotfile manager written in Rust.
> See also: `chezmoi`, `vcsh`, `homeshick`, `stow`.
> More information: <https://github.com/RaphGL/Tuckr>.

- Check dotfile status:

`tuckr status`

- Add all dotfiles to system:

`tuckr add \*`

- Add all dotfiles except specified programs:

`tuckr add \* -e {{program1}},{{program2}}`

- Remove all dotfiles from the system:

`tuckr rm \*`

- Add a program dotfile and run its setup script:

`tuckr set {{program}}`
