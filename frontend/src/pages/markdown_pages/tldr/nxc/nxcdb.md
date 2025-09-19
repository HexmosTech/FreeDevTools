---
title: "NetExec Database - Interact with Data | Online Free DevTools by Hexmos"
name: nxcdb
path: /freedevtools/tldr/nxc/nxcdb
canonical: "https://hexmos.com/freedevtools/tldr/nxc/nxcdb/"
description: "Interact with the NetExec database using nxcdb. Manage workspaces, create new databases, and control your NetExec environment. Free online tool, no registration required."
category: common
keywords:
- NetExec database interaction
- nxcdb workspace management
- NetExec data control
- command-line database tool
- database session management
- network execution database
- data analysis tool
- NetExec data manipulation
- terminal database access
- Linux database command
features:
- Enter an interactive NetExec database session.
- Display the currently active workspace name.
- Create new NetExec database workspaces.
- Activate and switch between NetExec workspaces.
- Manage NetExec database environments from the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nxcdb

> Interact with the NetExec database.
> More information: <https://www.netexec.wiki/getting-started/database-general-usage>.

- Enter an interactive database session:

`nxcdb`

- Display the currently active workspace:

`nxcdb --get-workspace`

- Create a new workspace:

`nxcdb --create-workspace {{workspace_name}}`

- Activate the specified workspace:

`nxcdb --set-workspace {{workspace_name}}`
