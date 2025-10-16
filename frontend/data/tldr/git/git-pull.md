---
title: "Git Pull - Fetch and Merge Branch | Online Free DevTools by Hexmos"
name: git-pull
path: "/freedevtools/tldr/git/git-pull/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-pull/"
description: "Fetch and merge branches using Git Pull with this command-line tool. Download updates from remote repositories effortlessly. Free online tool, no registration required."
category: common
keywords:
- git pull command
- git fetch and merge
- remote repository update
- branch synchronization
- git fast forward
- git remote branch
- git command line
- linux git pull
- macos git pull
- version control
features:
- Fetch changes from a remote repository
- Merge remote changes into the local branch
- Use fast-forward for simpler updates
- Specify the remote repository and branch
- Update the local HEAD with remote changes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git pull

> Fetch branch from a remote repository and merge it to local repository.
> More information: <https://git-scm.com/docs/git-pull>.

- Download changes from default remote repository and merge it:

`git pull`

- Download changes from default remote repository and use fast-forward:

`git pull {{[-r|--rebase]}}`

- Download changes from given remote repository and branch, then merge them into HEAD:

`git pull {{remote_name}} {{branch}}`
