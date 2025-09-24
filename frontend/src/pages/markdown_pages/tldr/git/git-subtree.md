---
title: "Manage Git Subtrees - Dependency Management | Online Free DevTools by Hexmos"
name: git-subtree
path: /freedevtools/tldr/git/git-subtree
canonical: "https://hexmos.com/freedevtools/tldr/git/git-subtree/"
description: "Manage Git subtrees efficiently with git-subtree. Integrate, update, and push project dependencies easily. Free online tool, no registration required."
category: common
keywords:
- git subtree management
- git dependency management
- git subtree add
- git subtree pull
- git subtree push
- git subtree split
- git monorepo management
- git subtree workflow
- git submodule alternative
- distributed version control
features:
- Add external Git repositories as subtrees
- Update subtrees to their latest commit
- Merge changes into subtrees
- Push commits to subtree repositories
- Extract a new project history from a subtree
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git subtree

> Manage project dependencies as subprojects.
> More information: <https://manned.org/git-subtree>.

- Add a Git repository as a subtree:

`git subtree add {{[-P|--prefix]}} {{path/to/directory}}/ --squash {{repository_url}} {{branch_name}}`

- Update subtree repository to its latest commit:

`git subtree pull {{[-P|--prefix]}} {{path/to/directory}}/ {{repository_url}} {{branch_name}}`

- Merge recent changes up to the latest subtree commit into the subtree:

`git subtree merge {{[-P|--prefix]}} {{path/to/directory}}/ --squash {{repository_url}} {{branch_name}}`

- Push commits to a subtree repository:

`git subtree push {{[-P|--prefix]}} {{path/to/directory}}/ {{repository_url}} {{branch_name}}`

- Extract a new project history from the history of a subtree:

`git subtree split {{[-P|--prefix]}} {{path/to/directory}}/ {{repository_url}} {{[-b|--branch]}} {{branch_name}}`
