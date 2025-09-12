---
title: "DM-tool - Control Display Manager | Free DevTools"
name: dm-tool
path: /freedevtools/tldr/linux/dm-tool
canonical: "https://hexmos.com/freedevtools/tldr/linux/dm-tool/"
description: "Control Display Manager with dm-tool. Switch users, lock sessions and manage seats. Free online tool, no registration required."
category: linux
keywords:
- linux display manager control
- dm-tool session management
- display manager session locking
- linux user switching command
- lightdm seat management
- linux greeter control
- command line display utility
- dm-tool authentication prompt
- linux display configuration
- session restore command
features:
- Switch to the display manager greeter
- Lock the current user session
- Switch to a specified user account
- Add dynamic seats to a LightDM session
- Manage display manager from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dm-tool

> A tool to communicate with the display manager.
> More information: <https://manned.org/dm-tool>.

- Show the greeter while keeping current desktop session open and waiting to be restored upon authentication by logged in user:

`dm-tool switch-to-greeter`

- Lock the current session:

`dm-tool lock`

- Switch to a specific user, showing an authentication prompt if required:

`dm-tool switch-to-user {{username}} {{session}}`

- Add a dynamic seat from within a running LightDM session:

`dm-tool add-seat {{xlocal}} {{name}}={{value}}`
