---
title: "Minecraft Server - Run Headless Minecraft Server | Free DevTools"
name: minecraft
path: /freedevtools/tldr/common/minecraft
canonical: "https://hexmos.com/freedevtools/tldr/common/minecraft/"
description: "Run a headless Minecraft server with Minecraft Server tool. Easily manage game server settings and start/stop server instances. Free online tool, no registration required."
category: common
keywords:
- minecraft server
- minecraft headless server
- java minecraft server
- minecraft server command line
- minecraft server linux
- minecraft server windows
- minecraft server configuration
- minecraft server manager
- minecraft server startup
- minecraft server memory management
features:
- Start a headless Minecraft server instance.
- Configure server memory allocation.
- Generate a new Minecraft world if it doesn't exist.
- Shut down a running Minecraft server.
- Start a Minecraft server with a graphical user interface.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Minecraft

> Run a headless Minecraft server.
> More information: <https://minecraft.wiki/w/Tutorial:Setting_up_a_Java_Edition_server>.

- Start a Minecraft server and generate a world if it doesn't exist:

`java -jar {{path/to/server.jar}} --nogui`

- Set the minimum and maximum amount of memory a server is allowed to have (Note: Setting them the same prevents lag caused by heap scaling):

`java -Xms{{1024M}} -Xmx{{2048M}} -jar {{path/to/server.jar}} --nogui`

- Start a server with a GUI:

`java -jar {{path/to/server.jar}}`

- Shut the server down:

`stop`
