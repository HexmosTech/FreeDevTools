---
title: "Delete Git Branches - Remove Squashed Merged Branches | Online Free DevTools by Hexmos"
name: git-delete-squashed-branches
path: /freedevtools/tldr/git/git-delete-squashed-branches
canonical: "https://hexmos.com/freedevtools/tldr/git/git-delete-squashed-branches/"
description: "Delete Git branches that have been squashed-merged with Git Delete Squashed Branches. Clean up your repository with ease using this free online tool, no registration required."
category: common
keywords:
- git delete squashed branches
- git remove merged branches
- git cleanup branches
- git branch management
- git repository maintenance
- git command line tools
- git-extras
- squashed merge cleanup
- git branch automation
- delete local git branches
features:
- Deletes branches that were squash-merged.
- Targets deletion based on a specified branch.
- Defaults to the currently checked out branch if none is specified.
- Simplifies Git repository cleanup.
- Automates branch removal after squash merging.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git delete-squashed-branches

> Delete branches that have been "squashed-merged" into a specified branch and checkout. If no branch is specified, default to the currently checked out branch.
> Part of `git-extras`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-delete-squashed-branches>.

- Delete all branches that were "squash-merged" into the current checked out branch:

`git delete-squashed-branches`

- Delete all branches that were "squash-merged" into a specific branch:

`git delete-squashed-branches {{branch_name}}`
