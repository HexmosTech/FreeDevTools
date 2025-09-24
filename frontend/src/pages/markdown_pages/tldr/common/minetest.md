---
title: "Control Minetest - Manage Worlds and Logs | Online Free DevTools by Hexmos"
name: minetest
path: /freedevtools/tldr/common/minetest
canonical: "https://hexmos.com/freedevtools/tldr/common/minetest/"
description: "Control Minetest with ease. Manage worlds, logging, and server settings using simple command-line options. Free online tool, no registration required."
category: common
keywords:
- minetest command
- minetest server
- minetest world management
- minetest log configuration
- minetest linux
- minetest macos
- minetest windows
- minetest multiplayer
- minetest block sandbox
- minetest server management
features:
- Start Minetest in client mode
- Start Minetest in server mode with a specified world
- Write Minetest logs to a custom file
- Suppress console output, displaying only errors
- Manage Minetest server instances
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# minetest

> Multiplayer infinite-world block sandbox.
> See also: `minetestserver`, the server-only binary.
> More information: <https://wiki.minetest.org/Minetest>.

- Start Minetest in client mode:

`minetest`

- Start Minetest in server mode by hosting a specific world:

`minetest --server --world {{name}}`

- Write logs to a specific file:

`minetest --logfile {{path/to/file}}`

- Only write errors to the console:

`minetest --quiet`
