---
title: "Cheatshh - Manage CLI Cheatsheets | Free DevTools"
name: cheatshh
path: /freedevtools/tldr/common/cheatshh
canonical: "https://hexmos.com/freedevtools/tldr/common/cheatshh/"
description: "Manage CLI cheatsheets easily with Cheatshh. Customize descriptions and groups for quick reference. Free online tool, no registration required."
category: common
keywords:
- cli cheatsheet manager
- command line cheatsheet
- cheatsheet customizer
- cheatsheet group editor
- cli command organizer
- cheatsheet description manager
- tldr custom cheatsheets
- cheatshh commands
- bash cheatsheet tool
- zsh cheatsheet tool
features:
- Add new commands to your cheatsheet
- Edit descriptions of existing commands
- Delete commands from your cheatsheet
- Create new groups for commands
- Edit existing group names and descriptions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cheatshh

> CLI cheatsheet with customized descriptions, tldr and groups, to look into for your reference.
> Press `<Enter>` to a command to copy it to your clipboard and exit.
> More information: <https://github.com/AnirudhG07/cheatshh/blob/main/docs/man/cheatshh.1>.

- Add a new command to the cheatshheet:

`cheatshh {{[-a|--add]}}`

- Edit an existing command's description or group in the cheatshheet:

`cheatshh {{[-ec|--edit-command]}}`

- Delete an existing command from the cheatshheet:

`cheatshh {{[-dc|--delete-command]}}`

- Create a new group:

`cheatshh {{[-g|--group]}}`

- Edit an existing group's name or description in the cheatsheet:

`cheatshh {{[-eg|--edit-group]}}`

- Delete an existing group and it's sub commands from commands.json file:

`cheatshh {{[-dg|--delete-group]}}`

- Display man pages after tldr in the preview:

`cheatshh {{[-m|--man]}}`
