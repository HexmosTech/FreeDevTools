---
title: "Create Dolt Repository - Initialize Data Repositories | Online Free DevTools by Hexmos"
name: dolt-init
path: /freedevtools/tldr/dolt/dolt-init
canonical: "https://hexmos.com/freedevtools/tldr/dolt/dolt-init/"
description: "Create Dolt repository with dolt-init. Initialize new repositories and manage data efficiently. Free online tool, no registration required."
category: common
keywords:
- Dolt repository initialization
- Dolt data version control
- Git-like data management
- Dolt database creation
- Dolt init command
- Data repository setup
- Version controlled database
- SQL data repository
- Branch initialization
- Dolt data management
features:
- Initialize a new Dolt data repository
- Create a repository with custom commit metadata
- Specify author name for initial commit
- Define author email for initial commit
- Set the initial branch name
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dolt init

> Create an empty Dolt data repository.
> More information: <https://docs.dolthub.com/cli-reference/cli#dolt-init>.

- Initialize a new Dolt data repository in the current directory:

`dolt init`

- Initialize a new Dolt data repository creating a commit with the specified metadata:

`dolt init --name "{{name}}" --email "{{email}}" --date "{{2021-12-31T00:00:00}}" {{[-b|--initial-branch]}} "{{branch_name}}"`
