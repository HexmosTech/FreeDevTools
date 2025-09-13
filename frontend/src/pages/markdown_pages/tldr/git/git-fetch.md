---
title: "Git Fetch - Download Objects | Free DevTools"
name: git-fetch
path: /freedevtools/tldr/git/git-fetch
canonical: "https://hexmos.com/freedevtools/tldr/git/git-fetch/"
description: "Download Git objects with Git Fetch. Manage remote branches, prune deleted references, and deepen shallow clones. Free online tool, no registration required."
category: common
keywords:
- git fetch remote
- git fetch all
- git fetch tags
- git fetch prune
- git fetch deepen
- git remote branch fetch
- git remote tracking
- git update remote
- git download updates
- git command line fetch
features:
- Download objects and refs from a remote repository
- Fetch updates from all remote repositories
- Fetch specific tags from a remote repository
- Prune local references to deleted remote branches
- Deepen current shallow branch by a specified number of commits
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git fetch

> Download objects and refs from a remote repository.
> More information: <https://git-scm.com/docs/git-fetch>.

- Fetch the latest changes from the default remote upstream repository (if set):

`git fetch`

- Fetch new branches from a specific remote upstream repository:

`git fetch {{remote_name}}`

- Fetch the latest changes from all remote upstream repositories:

`git fetch --all`

- Also fetch tags from the remote upstream repository:

`git fetch {{[-t|--tags]}}`

- Delete local references to remote branches that have been deleted upstream:

`git fetch {{[-p|--prune]}}`

- Deepen current shallow branch by 2 commits:

`git fetch --deepen 2`
