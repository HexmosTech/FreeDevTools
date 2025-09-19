---
title: "Dolt Checkout - Manage Branches & Tables | Online Free DevTools by Hexmos"
name: dolt-checkout
path: /freedevtools/tldr/dolt/dolt-checkout
canonical: "https://hexmos.com/freedevtools/tldr/dolt/dolt-checkout/"
description: "Manage database branches and tables with Dolt Checkout. Revert changes, switch branches, and create new branches with ease. Free online tool, no registration required."
category: common
keywords:
- Dolt branch checkout
- Dolt table checkout
- Dolt version control
- Dolt database management
- Dolt command line
- Dolt revert changes
- Dolt create branch
- Git-like checkout tool
- SQL database checkout
- Dolt SQL version control
features:
- Switch between Dolt branches.
- Revert unstaged changes to a table.
- Create new branches based on the current state.
- Create new branches based on a specific commit.
- Manage database versions using command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dolt checkout

> Checkout the work tree or tables to a branch or commit.
> More information: <https://docs.dolthub.com/cli-reference/cli#dolt-checkout>.

- Switch to a branch:

`dolt checkout {{branch_name}}`

- Revert unstaged changes to a table:

`dolt checkout {{table}}`

- Create new branch and switch to it:

`dolt checkout -b {{branch_name}}`

- Create new branch based on a specified commit and switch to it:

`dolt checkout -b {{branch_name}} {{commit}}`
