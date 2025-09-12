---
title: "Control Version Control - Manage Repositories with vcsh | Free DevTools"
name: vcsh
path: /freedevtools/tldr/common/vcsh
canonical: "https://hexmos.com/freedevtools/tldr/common/vcsh/"
description: "Control your version control with vcsh, a home directory version management tool. Clone, list, and execute Git commands. Free online tool, no registration required."
category: common
keywords:
- version control system
- vcsh repository management
- home directory versioning
- git repository manager
- dotfiles management tool
- config file version control
- command-line version control
- repository cloning tool
- linux version control
- macos version control
features:
- Initialize new Git repositories
- Clone existing Git repositories
- List managed repositories
- Execute custom Git commands
- Write custom .gitignore files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vcsh

> Version Control System for the home directory using Git repositories.
> See also: `chezmoi`, `stow`, `tuckr`, `homeshick`.
> More information: <https://github.com/RichiH/vcsh>.

- Initialize an (empty) repository:

`vcsh init {{repository_name}}`

- Clone a repository into a custom directory name:

`vcsh clone {{git_url}} {{repository_name}}`

- List all managed repositories:

`vcsh list`

- Execute a Git command on a managed repository:

`vcsh {{repository_name}} {{git_command}}`

- Push/pull all managed repositories to/from remotes:

`vcsh {{push|pull}}`

- Write a custom `.gitignore` file for a managed repository:

`vcsh write-gitignore {{repository_name}}`
