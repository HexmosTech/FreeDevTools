---
title: "Git Variable - Print Git Values | Free DevTools"
name: git-var
path: /freedevtools/tldr/common/git-var
canonical: "https://hexmos.com/freedevtools/tldr/common/git-var/"
description: "Print Git variables instantly with Git Var. Retrieve configuration values and list available variables easily. Free online tool, no registration required."
category: common
keywords:
- git variable printer
- git configuration value
- git environment variables
- git repository information
- git logical variable
- git config value retrieval
- git command line tool
- git bash variables
- git environment settings
- git custom variables
features:
- Print the value of specified Git variables
- List all available Git logical variables
- Retrieve Git configuration information
- Access Git environment settings
- Display custom defined variables in Git
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git var

> Print a Git logical variable's value.
> See `git config`, which is preferred over `git var`.
> More information: <https://git-scm.com/docs/git-var>.

- Print the value of a Git logical variable:

`git var {{GIT_AUTHOR_IDENT|GIT_COMMITTER_IDENT|GIT_EDITOR|GIT_PAGER}}`

- [l]ist all Git logical variables:

`git var -l`
