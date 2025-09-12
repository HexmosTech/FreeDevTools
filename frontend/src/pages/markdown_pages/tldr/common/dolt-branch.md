---
title: "Dolt Branch - Manage Database Branches | Free DevTools"
name: dolt-branch
path: /freedevtools/tldr/common/dolt-branch
canonical: "https://hexmos.com/freedevtools/tldr/common/dolt-branch/"
description: "Manage database branches with Dolt Branch. Create, rename, and delete branches with ease, improving database version control workflows. Free online tool, no registration required."
category: common
keywords:
- dolt branch management
- database branch tool
- dolt version control
- dolt database branching
- command line branch tool
- dolt cli branch
- sql database branch
- dolt branch rename
- dolt branch delete
- dolt branch create
features:
- List all local and remote Dolt branches
- Create new Dolt branches from current commit
- Rename existing Dolt branches efficiently
- Delete unwanted Dolt branches quickly
- Display the current active Dolt branch
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dolt branch

> Manage Dolt branches.
> More information: <https://docs.dolthub.com/cli-reference/cli#dolt-branch>.

- List local branches (current branch is highlighted by `*`):

`dolt branch`

- List all local and remote branches:

`dolt branch {{[-A|--all]}}`

- Create a new branch based on the current branch:

`dolt branch {{branch_name}}`

- Create a new branch with the specified commit as the latest:

`dolt branch {{branch_name}} {{commit}}`

- Rename a branch:

`dolt branch {{[-m|--move]}} {{branch_name1}} {{branch_name2}}`

- Duplicate a branch:

`dolt branch {{[-c|--copy]}} {{branch_name1}} {{branch_name2}}`

- Delete a branch:

`dolt branch {{[-d|--delete]}} {{branch_name}}`

- Display the name of the current branch:

`dolt branch --show-current`
