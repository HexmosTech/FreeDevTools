---
title: "Git Clone - Download Repositories | Free DevTools"
name: git-clone
path: /freedevtools/tldr/git/git-clone
canonical: "https://hexmos.com/freedevtools/tldr/git/git-clone/"
description: "Download repositories with Git Clone. Easily copy remote Git repositories to your local machine for offline access and modification. Free online tool, no registration required."
category: common
keywords:
- git clone repository
- git clone command
- git clone remote
- git clone local
- git clone submodule
- git clone branch
- git clone depth
- git repository download
- git linux clone
- git windows clone
features:
- Clone a repository from a remote server.
- Clone a specific branch from a repository.
- Clone a repository including its submodules recursively.
- Clone a repository with limited commit history.
- Clone a local repository.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git clone

> Clone an existing repository.
> More information: <https://git-scm.com/docs/git-clone>.

- Clone an existing repository into a new directory (the default directory is the repository name):

`git clone {{remote_repository_location}} {{path/to/directory}}`

- Clone an existing repository and its submodules:

`git clone --recursive {{remote_repository_location}}`

- Clone only the `.git` directory of an existing repository:

`git clone {{[-n|--no-checkout]}} {{remote_repository_location}}`

- Clone a local repository:

`git clone {{[-l|--local]}} {{path/to/local_repository}}`

- Clone quietly:

`git clone {{[-q|--quiet]}} {{remote_repository_location}}`

- Clone an existing repository only fetching the 10 most recent commits on the default branch (useful to save time):

`git clone --depth 10 {{remote_repository_location}}`

- Clone an existing repository only fetching a specific branch:

`git clone {{[-b|--branch]}} {{name}} --single-branch {{remote_repository_location}}`

- Clone an existing repository using a specific SSH command:

`git clone {{[-c|--config]}} core.sshCommand="{{ssh -i path/to/private_ssh_key}}" {{remote_repository_location}}`
