---
title: "Git Reflog - Track Reference Changes | Online Free DevTools by Hexmos"
name: git-reflog
path: /freedevtools/tldr/git/git-reflog
canonical: "https://hexmos.com/freedevtools/tldr/git/git-reflog/"
description: "Track git reference changes with Git Reflog. Recover lost commits, explore historical branch states, and revert to previous states with ease. Free online tool, no registration required."
category: common
keywords:
- git reflog history
- git reflog recovery
- git reference log
- git commit history
- git branch history
- git reflog undo
- git reflog branch
- git reflog head
- git reflog command
- git reflog show
features:
- Display the reflog for HEAD
- Show the reflog for a specific branch
- Limit the number of reflog entries displayed
- Track changes to local references
- Recover lost commits
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git reflog

> Show a log of changes to local references like HEAD, branches or tags.
> More information: <https://git-scm.com/docs/git-reflog>.

- Show the reflog for HEAD:

`git reflog`

- Show the reflog for a given branch:

`git reflog {{branch_name}}`

- Show only the 5 latest entries in the reflog:

`git reflog {{[-n|--max-count]}} 5`
