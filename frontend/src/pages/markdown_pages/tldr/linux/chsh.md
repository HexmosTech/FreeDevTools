---
title: "Change User Shell - Control Login Shell | Online Free DevTools by Hexmos"
name: chsh
path: /freedevtools/tldr/linux/chsh
canonical: "https://hexmos.com/freedevtools/tldr/linux/chsh/"
description: "Change user's shell with chsh. Modify login shell configurations securely and easily. Free online tool, no registration required."
category: linux
keywords:
  - change user shell
  - user shell configuration
  - login shell management
  - shell modification
  - util-linux shell command
  - command line shell editor
  - linux shell utility
  - shell path update
  - system shell setting
  - user account shell change
features:
  - Change the current user's login shell interactively
  - List available shells on the system
  - Set a specific login shell for the current user
  - Modify the login shell for a specific user using sudo
  - Configure user shell settings from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# chsh

> Change user's login shell.
> Part of `util-linux`.
> More information: <https://manned.org/chsh>.

- Set a specific login shell for the current user interactively:

`chsh`

- List available shells:

`chsh {{[-l|--list-shells]}}`

- Set a specific login shell for the current user:

`chsh {{[-s|--shell]}} {{path/to/shell}}`

- Set a login shell for a specific user:

`sudo chsh {{[-s|--shell]}} {{path/to/shell}} {{username}}`
