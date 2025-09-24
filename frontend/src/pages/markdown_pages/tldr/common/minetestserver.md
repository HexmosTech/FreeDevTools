---
title: "Minetest Server - Create Minecraft-like Worlds | Online Free DevTools by Hexmos"
name: minetestserver
path: /freedevtools/tldr/common/minetestserver
canonical: "https://hexmos.com/freedevtools/tldr/common/minetestserver/"
description: "Create and manage Minetest game servers with Minetest Server. Build infinite block worlds, specify game IDs, and configure ports for your server. Free online tool, no registration required."
category: common
keywords:
- minetest server
- block game server
- infinite world server
- minetest multiplayer
- linux game server
- minecraft-like server
- game server configuration
- game server management
- minetest mod server
- minetest server command line
features:
- Start and manage a Minetest game server.
- List available game worlds and load specific ones.
- Specify a custom game ID for the server.
- Configure the server to listen on a specific port.
- Migrate server data between different backends.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# minetestserver

> Multiplayer infinite-world block sandbox server.
> See also: `minetest`, the graphical client.
> More information: <https://wiki.minetest.org/Setting_up_a_server>.

- Start the server:

`minetestserver`

- List available worlds:

`minetestserver --world list`

- Load the specified world:

`minetestserver --world {{world_name}}`

- List the available game IDs:

`minetestserver --gameid list`

- Use the specified game:

`minetestserver --gameid {{game_id}}`

- Listen on a specific port:

`minetestserver --port {{34567}}`

- Migrate to a different data backend:

`minetestserver --migrate {{sqlite3|leveldb|redis}}`

- Start an interactive terminal after starting the server:

`minetestserver --terminal`
