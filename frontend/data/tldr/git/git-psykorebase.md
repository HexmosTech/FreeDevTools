---
title: "Git Psykorebase - Rebase Branches with Merge Commit | Online Free DevTools by Hexmos"
name: git-psykorebase
path: "/freedevtools/tldr/git/git-psykorebase/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-psykorebase/"
description: "Rebase branches with Git Psykorebase using merge commits, simplifying conflict resolution. Streamline your git workflow with this free online tool, no registration required."
category: common
keywords:
- git rebase merge
- rebase with merge commit
- git conflict resolution
- git branching strategy
- git workflow automation
- git history simplification
- psykorebase command line
- git rebase tool
- common git commands
- git psykorebase
features:
- Rebase branches with a merge commit
- Handle conflicts during rebase effectively
- Simplify rebase process using psykorebase
- Integrate changes from one branch to another
- Continue rebase after resolving conflicts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git psykorebase

> Rebase a branch on top of another using a merge commit and only one conflict handling.
> Part of `git-extras`.
> More information: <https://manned.org/git-psykorebase>.

- Rebase the current branch on top of another using a merge commit and only one conflict handling:

`git psykorebase {{upstream_branch}}`

- Continue after conflicts have been handled:

`git psykorebase --continue`

- Specify the branch to rebase:

`git psykorebase {{upstream_branch}} {{target_branch}}`
