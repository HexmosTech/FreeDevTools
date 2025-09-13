---
title: "Git Init - Create New Git Repository | Free DevTools"
name: git-init
path: /freedevtools/tldr/git/git-init
canonical: "https://hexmos.com/freedevtools/tldr/git/git-init/"
description: "Create a new Git repository with Git Init. Manage version control and track changes with this simple command. Free online tool, no registration required."
category: common
keywords:
- git init repository
- git init command
- git version control
- create git repo
- initialize git repository
- git initial branch
- git sha256 hash
- git bare repository
- git linux
- git macOS
features:
- Initialize a new local Git repository
- Specify an initial branch name
- Use SHA256 for object hashes
- Initialize a barebones repository
- Prepare a repository for remote use
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git init

> Initialize a new local Git repository.
> More information: <https://git-scm.com/docs/git-init>.

- Initialize a new local repository:

`git init`

- Initialize a repository with the specified name for the initial branch:

`git init {{[-b|--initial-branch]}} {{branch_name}}`

- Initialize a repository using SHA256 for object hashes (requires Git version 2.29+):

`git init --object-format sha256`

- Initialize a barebones repository, suitable for use as a remote over SSH:

`git init --bare`
