---
title: "Git Config - Manage Git Configurations | Free DevTools"
name: git-config
path: /freedevtools/tldr/git/git-config
canonical: "https://hexmos.com/freedevtools/tldr/git/git-config/"
description: "Manage Git configurations easily with Git Config. Set global and local repository options, edit configurations, and revert to defaults. Free online tool, no registration required."
category: common
keywords:
- git configuration
- git global config
- git local config
- git alias configuration
- git config set
- git config list
- git config unset
- git repository configuration
- git user configuration
- git command line configuration
features:
- Set global or local Git configurations
- List existing configuration entries with file origins
- Define and manage Git aliases
- Revert configuration entries to their default values
- Edit Git configuration files directly in a text editor
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git config

> Manage custom configuration options for Git repositories.
> These configurations can be local (for the current repository) or global (for the current user).
> More information: <https://git-scm.com/docs/git-config>.

- Globally set your name or email (this information is required to commit to a repository and will be included in all commits):

`git config --global {{user.name|user.email}} "{{Your Name|email@example.com}}"`

- List local, global or system configuration entries and show their file location:

`git config {{[-l|--list]}} --{{local|global|system}} --show-origin`

- Set the global value of a given configuration entry (in this case an alias):

`git config --global {{alias.unstage}} "reset HEAD --"`

- Get the value of a given configuration entry:

`git config {{alias.unstage}}`

- Use an alias:

`git {{unstage}}`

- Revert a global configuration entry to its default value:

`git config --global --unset {{alias.unstage}}`

- Edit the local Git configuration (`.git/config`) in the default editor:

`git config {{[-e|--edit]}}`

- Edit the global Git configuration (`~/.gitconfig` by default or `$XDG_CONFIG_HOME/git/config` if such a file exists) in the default editor:

`git config --global {{[-e|--edit]}}`
