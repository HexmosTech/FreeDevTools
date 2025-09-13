---
title: "Git Remote - Manage Remote Repositories | Free DevTools"
name: git-remote
path: /freedevtools/tldr/git/git-remote
canonical: "https://hexmos.com/freedevtools/tldr/git/git-remote/"
description: "Manage Git remote repositories with Git Remote. Control tracked repositories, add, remove, rename remotes with ease. Free online tool, no registration required."
category: common
keywords:
- git remote management
- git remote repository
- git remote add
- git remote remove
- git remote rename
- git remote URL
- git remote branch
- git remote origin
- git bash git remote
- git command line
features:
- List existing remote repositories with names and URLs.
- Show detailed information about a specific remote.
- Add new remote repositories to your local Git configuration.
- Change the URL of an existing remote repository.
- Remove remote repositories from your local Git configuration.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git remote

> Manage set of tracked repositories ("remotes").
> More information: <https://git-scm.com/docs/git-remote>.

- List existing remotes with their names and URLs:

`git remote {{[-v|--verbose]}}`

- Show information about a remote:

`git remote show {{remote_name}}`

- Add a remote:

`git remote add {{remote_name}} {{remote_url}}`

- Change the URL of a remote (use `--add` to keep the existing URL):

`git remote set-url {{remote_name}} {{new_url}}`

- Show the URL of a remote:

`git remote get-url {{remote_name}}`

- Remove a remote:

`git remote remove {{remote_name}}`

- Rename a remote:

`git remote rename {{old_name}} {{new_name}}`
