---
title: "Manage Git Submodules - Update & Add Repos | Free DevTools"
name: git-submodule
path: /freedevtools/tldr/common/git-submodule
canonical: "https://hexmos.com/freedevtools/tldr/common/git-submodule/"
description: "Manage Git submodules with Git Submodule. Add repositories, update submodules, and keep dependencies current. Free online tool, no registration required."
category: common
keywords:
- git submodule management
- git submodule update
- git submodule add repository
- git submodule recursive update
- git submodule dependency management
- git submodule git pull
- git submodule command line
- git submodule repository integration
- git submodule initialization
- git submodule version control
features:
- Recursively initializes and updates submodules
- Adds a Git repository as a submodule to a project
- Adds a submodule to a specific directory
- Updates all submodules to their latest commits
- Executes commands in each submodule
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git submodule

> Inspects, updates and manages submodules.
> More information: <https://git-scm.com/docs/git-submodule>.

- Install a repository's specified submodules:

`git submodule update --init --recursive`

- Add a Git repository as a submodule:

`git submodule add {{repository_url}}`

- Add a Git repository as a submodule at the specified directory:

`git submodule add {{repository_url}} {{path/to/directory}}`

- Update every submodule to its latest commit:

`git submodule foreach git pull`
