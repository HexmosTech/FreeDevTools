---
title: "Git Remote - Manage Git Remotes | Free DevTools"
name: jj-git-remote
path: /freedevtools/tldr/jj/jj-git-remote
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-git-remote/"
description: "Manage Git remotes easily with Git Remote. Add, remove, rename, and change the URL of your Git remotes from the command line. Free online tool, no registration required."
category: common
keywords:
- Git remote manager
- Git remote command line
- jj git remote
- jj git management
- Version control remote
- Git repository remote
- Git URL manager
- jj remote rename
- jj remote add
- jj remote remove
features:
- List existing Git remotes
- Add new Git remotes with a specified URL
- Modify the URL of existing Git remotes
- Remove unwanted Git remotes from the configuration
- Rename existing Git remotes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jj git remote

> Manage Git remotes.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-git-remote>.

- List all Git remotes:

`jj git remote list`

- Add a Git remote:

`jj git remote add {{remote}} {{url}}`

- Change the URL of a Git remote:

`jj git remote set-url {{remote}} {{url}}`

- Remove a Git remote:

`jj git remote remove {{remote}}`

- Rename a Git remote:

`jj git remote rename {{old_name}} {{new_name}}`
