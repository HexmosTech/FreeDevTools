---
title: "JJ Git - Manage Git Repositories with JJ | Free DevTools"
name: jj-git
path: /freedevtools/tldr/jj/jj-git
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-git/"
description: "Manage Git repositories efficiently with JJ Git. Create, clone, fetch, and push Git repositories using the jj command line tool. Free online tool, no registration required."
category: common
keywords:
- jj git repository
- git with jj
- jj version control git
- jj git clone
- jj git push
- jj git fetch
- jj git init
- jj git bookmarks
- jj git remote
- version control with git
features:
- Create a new Git-backed repository.
- Clone an existing Git repository.
- Fetch changes from a Git remote.
- Push tracked bookmarks to a Git remote.
- Manage Git repositories from the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jj git

> Run Git-related commands for a `jj` repository.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-git>.

- Create a new Git backed repository:

`jj git init`

- Create a new repository backed by a clone of a Git repository:

`jj git clone {{source}}`

- Fetch from a Git remote:

`jj git fetch`

- Push all tracked bookmarks to Git remote:

`jj git push`

- Push given bookmark to Git remote:

`jj git push {{[-b|--bookmark]}} {{bookmark}}`
