---
title: "Graft Git Branch - Merge and Delete Branches | Online Free DevTools by Hexmos"
name: git-graft
path: /freedevtools/tldr/git/git-graft
canonical: "https://hexmos.com/freedevtools/tldr/git/git-graft/"
description: "Merge commits with Git Graft. Easily integrate changes and remove the source branch. Free online tool, no registration required. Simplify branching workflows."
category: common
keywords:
- git merge branch
- git delete branch
- git graft merge
- git branching strategy
- git refactoring
- git integration
- git workflow automation
- git branch management
- git source control
- command line git
features:
- Merge commits from one branch into another.
- Delete the source branch after merging.
- Simplify branch integration workflows.
- Integrate experimental or feature branches quickly.
- Improve Git repository organization.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git graft

> Merge commits from a branch into another branch and delete the source branch.
> Part of `git-extras`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-graft>.

- Merge all commits not present on the target branch from the source branch to target branch, and delete the source branch:

`git graft {{source_branch}} {{target_branch}}`
