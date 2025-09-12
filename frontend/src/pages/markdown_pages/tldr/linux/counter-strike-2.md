---
title: "Control CS2 Server - Host Dedicated Server | Free DevTools"
name: counter-strike-2
path: /freedevtools/tldr/linux/counter-strike-2
canonical: "https://hexmos.com/freedevtools/tldr/linux/counter-strike-2/"
description: "Control a Counter-Strike 2 server with CS2 Server Manager. Host dedicated servers, configure maps, and manage player limits. Free online tool, no registration required."
category: linux
keywords:
  - CS2 dedicated server
  - Counter-Strike 2 server control
  - CS2 server configuration
  - Linux CS2 server
  - macOS CS2 server
  - Game server hosting
  - CS2 map selection
  - CS2 player management
  - Headless CS2 server
  - Command-line CS2 server
features:
  - Launch a dedicated Counter-Strike 2 server.
  - Specify the game map for the server.
  - Configure the maximum number of players allowed.
  - Define the server's IP address and port.
  - Shut down the Counter-Strike 2 server gracefully.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Counter Strike 2

> Host a headless Counter Strike 2 server.
> More information: <https://developer.valvesoftware.com/wiki/Counter-Strike_2/Dedicated_Servers>.

- Run a game with one map:

`{{path/to/cs2}} -dedicated +map {{de_dust2}}`

- Run a game with specified maximum number of players:

`{{path/to/cs2}} -dedicated +map {{de_dust2}} -maxplayers {{64}}`

- Run a game with specified server IP and port:

`{{path/to/cs2}} -dedicated +map {{de_dust2}} -ip {{1.2.3.4}} -port {{27015}}`

- Shut the server down:

`quit`
