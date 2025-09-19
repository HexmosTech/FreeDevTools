---
title: "Create Factorio Server - Manage Game Worlds | Online Free DevTools by Hexmos"
name: factorio
path: /freedevtools/tldr/linux/factorio
canonical: "https://hexmos.com/freedevtools/tldr/linux/factorio/"
description: "Create Factorio servers to manage complex game worlds. Use command-line options for custom map generation and settings. Free online tool, no registration required."
category: linux
keywords:
- factorio server create
- linux factorio server
- factorio dedicated server
- factorio headless server
- factorio map generator
- factorio save file
- factorio multiplayer server
- factorio server settings
- factorio command line
- factorio world management
features:
- Create new Factorio save games with custom settings.
- Start a Factorio dedicated server from the command line.
- Configure map generation and game settings.
- Gracefully shut down running Factorio servers.
- Display help information for all available commands.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Factorio

> Create and start a headless Factorio server.
> More information: <https://wiki.factorio.com/Multiplayer>.

- Create a new save file:

`{{path/to/factorio}} --create {{path/to/save_file.zip}}`

- Start a Factorio server:

`{{path/to/factorio}} --start-server {{path/to/save_file.zip}}`

- Create a new save file with specific settings:

`{{path/to/factorio}} --create {{path/to/save.zip}} --map-gen-settings {{path/to/map-gen-settings.json}} --map-settings {{path/to/map-settings.json}}`

- Shut the server gracefully:

`/quit`

- Display help:

`{{path/to/factorio}} {{[-h|--help]}}`
