---
title: "Protontricks - Run Winetricks for Proton Games | Online Free DevTools by Hexmos"
name: protontricks
path: /freedevtools/tldr/linux/protontricks
canonical: "https://hexmos.com/freedevtools/tldr/linux/protontricks/"
description: "Manage Wine configurations for Proton games with Protontricks.  Easily run Winetricks commands and control game settings. Free online tool, no registration required."
category: linux
keywords:
  - proton winetricks commands
  - proton game configuration
  - linux wine management
  - protontricks appid lookup
  - wine tricks for games
  - manage proton settings
  - run winetricks commands
  - protontricks gui
  - linux gaming tools
  - proton installation management
features:
  - Run Winetricks commands within the Proton environment.
  - Easily manage game-specific Wine configurations.
  - Access a graphical user interface (GUI) for simplified usage.
  - Search for and find App IDs of games.
  - Execute commands directly within a game's installation directory.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# protontricks

> A simple wrapper that runs Winetricks commands for Proton enabled games.
> More information: <https://github.com/Matoking/protontricks>.

- Run the protontricks GUI:

`protontricks --gui`

- Run Winetricks for a specific game:

`protontricks {{appid}} {{winetricks_args}}`

- Run a command within a game's installation directory:

`protontricks -c {{command}} {{appid}}`

- [l]ist all installed games:

`protontricks -l`

- [s]earch for a game's App ID by name:

`protontricks -s {{game_name}}`

- Run an executable in the proton environment of a specific game:

`protontricks-launch --appid {{appid}} {{path/to/executable.exe}}`

- Display help:

`protontricks --help`
