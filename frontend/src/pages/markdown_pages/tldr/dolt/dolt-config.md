---
title: "Dolt Config - Manage Dolt Configuration Variables | Online Free DevTools by Hexmos"
name: dolt-config
path: /freedevtools/tldr/dolt/dolt-config
canonical: "https://hexmos.com/freedevtools/tldr/dolt/dolt-config/"
description: "Manage Dolt configuration variables with Dolt Config. Read, write, and delete local and global configuration options. Free online tool, no registration required."
category: common
keywords:
- dolt config
- dolt configuration
- dolt config list
- dolt config get
- dolt config add
- dolt config unset
- dolt global config
- dolt local config
- database configuration
- version control configuration
features:
- List all local and global Dolt configuration options
- Display the value of a specific Dolt configuration variable
- Modify the value of a local Dolt configuration variable
- Modify the value of a global Dolt configuration variable
- Delete a Dolt configuration variable
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dolt config

> Read and write local (per repository) and global (per user) Dolt configuration variables.
> More information: <https://docs.dolthub.com/cli-reference/cli#dolt-config>.

- List all local and global configuration options and their values:

`dolt config --list`

- Display the value of a local or global configuration variable:

`dolt config --get {{name}}`

- Modify the value of a local configuration variable, creating it if it doesn't exist:

`dolt config --add {{name}} {{value}}`

- Modify the value of a global configuration variable, creating it if it doesn't exist:

`dolt config --global --add {{name}} {{value}}`

- Delete a local configuration variable:

`dolt config --unset {{name}}`

- Delete a global configuration variable:

`dolt config --global --unset {{name}}`
