---
title: "Git Update Ref - Create Git Refs | Online Free DevTools by Hexmos"
name: git-update-ref
path: /freedevtools/tldr/git/git-update-ref
canonical: "https://hexmos.com/freedevtools/tldr/git/git-update-ref/"
description: "Create Git refs easily with Git Update Ref. Manage Git branches and tags, delete refs, and update Git repository references. Free online tool, no registration required."
category: common
keywords:
- git update ref
- git refs management
- git branch update
- git tag update
- git delete ref
- git repository update
- git head update
- git ref pointer
- git ref command
- git soft reset
features:
- Delete Git refs efficiently
- Update Git refs with commit messages
- Soft reset Git repository
- Manage Git branches and tags
- Manipulate Git repository references
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git update-ref

> Git command for creating, updating, and deleting Git refs.
> More information: <https://git-scm.com/docs/git-update-ref>.

- Delete a ref, useful for soft resetting the first commit:

`git update-ref -d {{HEAD}}`

- Update ref with a message:

`git update-ref -m {{message}} {{HEAD}} {{4e95e05}}`
