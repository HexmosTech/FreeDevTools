---
title: "Git Merge Base - Find Common Ancestor | Online Free DevTools by Hexmos"
name: git-merge-base
path: "/freedevtools/tldr/git/git-merge-base/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-merge-base/"
description: "Find common ancestor commits with Git Merge Base. Trace commit history and streamline branching strategies. Free online tool, no registration required."
category: common
keywords:
- git merge base
- git common ancestor
- git commit history
- git branching
- git ancestry check
- common ancestor finder
- linux git command
- macos git command
- windows git command
- git revision control
features:
- Identify the best common ancestor of two commits
- Determine all common ancestors of two commits
- Verify if a commit is an ancestor of another commit
- Simplify branch management and conflict resolution
- Trace commit lineage for effective debugging
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git merge-base

> Find a common ancestor of two commits.
> More information: <https://git-scm.com/docs/git-merge-base>.

- Print the best common ancestor of two commits:

`git merge-base {{commit_1}} {{commit_2}}`

- Print all best common ancestors of two commits:

`git merge-base {{[-a|--all]}} {{commit_1}} {{commit_2}}`

- Check if a commit is an ancestor of a specific commit:

`git merge-base --is-ancestor {{ancestor_commit}} {{commit}}`
