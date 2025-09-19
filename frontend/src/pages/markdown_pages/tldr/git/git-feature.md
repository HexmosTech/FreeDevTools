---
title: "Git Feature - Create and Merge Feature Branches | Online Free DevTools by Hexmos"
name: git-feature
path: /freedevtools/tldr/git/git-feature
canonical: "https://hexmos.com/freedevtools/tldr/git/git-feature/"
description: "Create Git feature branches with Git Feature, easily manage feature branch workflows. Streamline branching and merging, squash commits. Free online tool, no registration required."
category: common
keywords:
- git feature branch
- feature branch manager
- git workflow automation
- git branch merge
- git squash commits
- git remote branch
- git feature finish
- git create branch
- command line git
- version control git
features:
- Create and switch to a new feature branch
- Merge feature branch into current branch with merge commit
- Squash merge a feature branch into current branch
- Send feature branch changes to remote counterpart
- Manage feature branch workflow using CLI
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git feature

> Create or merge feature branches.
> Feature branches obey the format feature/name.
> More information: <https://manned.org/git-feature>.

- Create and switch to a new feature branch:

`git feature {{feature_branch}}`

- Merge a feature branch into the current branch creating a merge commit:

`git feature finish {{feature_branch}}`

- Merge a feature branch into the current branch squashing the changes into one commit:

`git feature finish --squash {{feature_branch}}`

- Send changes from a specific feature branch to its remote counterpart:

`git feature {{feature_branch}} {{[-r|--remote]}} {{remote_name}}`
