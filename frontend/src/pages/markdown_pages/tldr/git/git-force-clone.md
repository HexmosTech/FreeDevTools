---
title: "Force Clone Git - Reset Git Repositories | Free DevTools"
name: git-force-clone
path: /freedevtools/tldr/git/git-force-clone
canonical: "https://hexmos.com/freedevtools/tldr/git/git-force-clone/"
description: "Force clone with Git, effortlessly resetting existing Git repositories. Simplify repository management with this Git command-line tool. Free online tool, no registration required."
category: common
keywords:
- git force clone
- git reset repository
- git overwrite repository
- git clone existing directory
- git clone specific branch
- git command line tool
- git repository management
- git extras
- linux git clone
- macos git clone
features:
- Force-reset a local Git repository to match a remote.
- Clone a Git repository into an existing, non-empty directory.
- Clone a specific branch from a remote repository.
- Overwrite the local repository with the remote's content.
- Simplify repository synchronization and updates.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git force-clone

> Get the basic functionality of `git clone`, but if the destination Git repository already exists it will force-reset it to resemble a clone of the remote.
> Part of `git-extras`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-force-clone>.

- Clone a Git repository into a new directory:

`git force-clone {{remote_repository_location}} {{path/to/directory}}`

- Clone a Git repository into a new directory, checking out an specific branch:

`git force-clone {{[-b|--branch]}} {{branch_name}} {{remote_repository_location}} {{path/to/directory}}`

- Clone a Git repository into an existing directory of a Git repository, performing a force-reset to resemble it to the remote and checking out an specific branch:

`git force-clone {{[-b|--branch]}} {{branch_name}} {{remote_repository_location}} {{path/to/directory}}`
