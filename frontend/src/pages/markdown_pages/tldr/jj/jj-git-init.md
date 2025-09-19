---
title: "Create Git Jujutsu Repo - Initialize JJ Repo | Online Free DevTools by Hexmos"
name: jj-git-init
path: /freedevtools/tldr/jj/jj-git-init
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-git-init/"
description: "Create Git Jujutsu repository with jj-git-init. Initialize new repos, colocate with existing Git repos & manage version control. Free online tool, no registration required."
category: common
keywords:
- jujutsu git repository
- jj git init
- jj version control
- git backend jj repo
- colocate git jj
- jujutsu initialize
- jj repo manager
- git to jujutsu converter
- jj command line tool
- jujutsu version control system
features:
- Initialize a new Git-backed Jujutsu repository.
- Create a Jujutsu repo in a specified directory.
- Colocate Jujutsu with an existing Git repository.
- Initialize Jujutsu to be a valid Git repository.
- Back Jujutsu with an existing Git repository.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jj git init

> Create a new Git backed Jujutsu repo.
> Note: Unless `--colocate` is used, it is not a valid Git repository and `git` commands can't be used on it.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-git-init>.

- Create a new Git backed repo in the current directory:

`jj git init`

- Create a new Git backed repo in the given directory:

`jj git init {{path/to/directory}}`

- Initialize the Jujutsu repository as a valid Git repository (allowing the use of both `jj` and `git` commands in the same directory):

`jj git init --colocate`

- Initialize the Jujutsu repository backed by an existing Git repository:

`jj git init --git-repo {{git_repo}}`
