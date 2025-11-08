---
title: "Create Git Replaces - Manage Objects | Online Free DevTools by Hexmos"
name: git-replace
path: "/freedevtools/tldr/git/git-replace/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-replace/"
description: "Create Git replaces with git-replace. Manage objects, replace commits, and edit content interactively. Free online tool, no registration required."
category: common
keywords:
- git replace object
- git replace commit
- git replace ref
- git replace delete
- git replace edit
- git object replacement
- git commit manipulation
- git ref management
- git object history
- git replace command
features:
- Replace commits with different ones
- Delete existing replace refs
- Edit object content interactively
- Create replacements for objects
- List existing replace refs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git replace

> Create, list, and delete refs to replace objects.
> More information: <https://git-scm.com/docs/git-replace>.

- Replace any commit with a different one, leaving other commits unchanged:

`git replace {{object}} {{replacement}}`

- Delete existing replace refs for the given objects:

`git replace {{[-d|--delete]}} {{object}}`

- Edit an object's content interactively:

`git replace --edit {{object}}`
