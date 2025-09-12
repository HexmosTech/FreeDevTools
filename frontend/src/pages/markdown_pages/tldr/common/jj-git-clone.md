---
title: "Create JJ Git Clone - New Repo from Git | Free DevTools"
name: jj-git-clone
path: /freedevtools/tldr/common/jj-git-clone
canonical: "https://hexmos.com/freedevtools/tldr/common/jj-git-clone/"
description: "Create a new Jujutsu repository with JJ Git Clone.  Quickly establish a JJ repo backed by a Git repo for enhanced version control. Free online tool, no registration required."
category: common
keywords:
- jj git clone
- jj version control
- jujutsu git integration
- git repository clone
- jj new repo
- git to jj converter
- jj command line tool
- cross-platform version control
- distributed version control
- jj git remote
features:
- Create a JJ repo from a Git repo
- Clone Git repo with a specified remote name
- Limit fetch depth when cloning Git repos
- Colocate JJ and Git repos for simultaneous use
- Create a new directory for cloned repository
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jj git clone

> Create a new repo backed by a clone of a Git repo.
> Note: Unless `--colocate` is used, it is not a valid Git repository and `git` commands can't be used on it.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-git-clone>.

- Create a new repo backed by a clone of a Git repo into a new directory (the default directory is the repository name):

`jj git clone {{source}} {{path/to/directory}}`

- Create a clone and use the given name for newly created remote:

`jj git clone --remote {{remote_name}} {{source}}`

- Clone a Git repo, only fetching the 10 most recent commits:

`jj git clone --depth {{10}} {{source}}`

- Clone colocating the Jujutsu repo with the Git repo (allowing the use of both `jj` and `git` commands in the same directory):

`jj git clone --colocate {{source}}`
