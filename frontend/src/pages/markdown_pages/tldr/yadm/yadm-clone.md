---
title: "Clone dotfiles - Manage configuration with yadm-clone | Online Free DevTools by Hexmos"
name: yadm-clone
path: /freedevtools/tldr/yadm/yadm-clone
canonical: "https://hexmos.com/freedevtools/tldr/yadm/yadm-clone/"
description: "Manage dotfiles with yadm-clone to clone and configure your repository. Automate bootstrap execution. Free online tool, no registration required."
category: common
keywords:
- dotfiles manager
- yadm dotfile clone
- configuration file manager
- version control config
- dotfiles backup
- git repository clone
- dotfiles synchronization
- yadm config management
- linux dotfiles
- macos dotfiles
features:
- Clone dotfiles repository from remote location
- Execute bootstrap script automatically during clone
- Specify worktree directory during cloning
- Override existing local branch during clone
- Clone specific branch from remote repository
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# yadm clone

> Works just like `git clone`. In addition you can pass extra flags to configure your repository.
> If there is a bootstrap file in the repository, you will be prompted to execute it.
> See also: `git clone`.
> More information: <https://yadm.io/docs/common_commands>.

- Clone an existing repository:

`yadm clone {{remote_repository_location}}`

- Clone an existing repository, then execute the bootstrap file:

`yadm clone {{remote_repository_location}} --bootstrap`

- Clone an existing repository and after cloning, do not execute the bootstrap file:

`yadm clone {{remote_repository_location}} --no-bootstrap`

- Change the worktree that `yadm` will use during cloning:

`yadm clone {{remote_repository_location}} --w {{worktree_file}}`

- Change the branch that `yadm` gets files from:

`yadm clone {{remote_repository_location}} -b {{branch}}`

- Override an existing repository local branch:

`yadm clone {{remote_repository_location}} -f`
