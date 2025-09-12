---
title: "Spotify Control - Manage Music with Spotify Player | Free DevTools"
name: spotify_player
path: /freedevtools/tldr/common/spotify_player
canonical: "https://hexmos.com/freedevtools/tldr/common/spotify_player/"
description: "Control Spotify music playback with Spotify Player. Manage tracks, themes, and configurations using command-line interface. Free online tool, no registration required."
category: common
keywords:
- spotify command line
- spotify player control
- spotify tui client
- linux spotify player
- macos spotify player
- spotify daemon control
- spotify theme manager
- spotify configuration manager
- spotify music control
- spotify track management
features:
- Start Spotify daemon for background playback
- Launch the Spotify TUI to control music
- Apply custom themes to the Spotify Player
- Load configuration files from specified directories
- Like the currently playing track on Spotify
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# spotify_player

> A TUI Spotify client that implements all features of the official Spotify app.
> More information: <https://github.com/aome510/spotify-player#commands>.

- Start a daemon that plays music in the background:

`spotify_player {{[-d|--daemon]}}`

- Start the TUI (controls the daemon if available, otherwise starts its own client):

`spotify_player`

- Use the specified theme:

`spotify_player {{[-t|--theme]}} {{theme_name}}`

- Use configuration files (`app.toml`, `keymap.toml` and `theme.toml`) in the specified directory:

`spotify_player {{[-c|--config-folder]}} {{path/to/directory}}`

- Like the currently playing track:

`spotify_player like`

- Display a list of keybindings:

`<?>`
