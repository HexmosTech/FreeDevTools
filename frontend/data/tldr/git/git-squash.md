---
title: "Git Squash - Combine Commits | Online Free DevTools by Hexmos"
name: git-squash
path: "/freedevtools/tldr/git/git-squash/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-squash/"
description: "Combine git commits efficiently with Git Squash. Merge multiple commits into a single commit and simplify your git history. Free online tool, no registration required."
category: common
keywords:
- git commit squash
- git squash merge
- squash commits git
- git history rewrite
- git commit combine
- linux git squash
- macos git squash
- windows git squash
- git interactive rebase
- git commit message editor
features:
- Squash multiple commits into one.
- Merge all commits from a branch into the current branch.
- Squash commits starting from a specific commit.
- Combine the `n` latest commits with a new message.
- Use an automatic message, based on existing commits, when squashing.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git squash

> Squash multiple commits into a single commit.
> Part of `git-extras`.
> More information: <https://manned.org/git-squash>.

- Merge all commits from a specific branch into the current branch as a single commit:

`git squash {{source_branch}}`

- Squash all commits starting with a specific commit on the current branch:

`git squash {{commit}}`

- Squash the `n` latest commits and commit with a message:

`git squash HEAD~{{n}} "{{message}}"`

- Squash the `n` latest commits and commit concatenating all individual messages:

`git squash --squash-msg HEAD~{{n}}`
