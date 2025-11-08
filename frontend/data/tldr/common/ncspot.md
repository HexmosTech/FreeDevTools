---
title: "Control Spotify Music - ncspot TUI Client | Online Free DevTools by Hexmos"
name: ncspot
path: "/freedevtools/tldr/common/ncspot/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ncspot/"
description: "Control Spotify music with ncspot, a cross-platform terminal user interface client. Manage playlists, search songs, and enjoy ad-free listening. Free online tool, no registration required."
category: common
keywords:
- Spotify client command line
- TUI Spotify player
- ncspot music control
- Linux Spotify terminal
- macOS Spotify TUI
- Cross-platform Spotify client
- Terminal music player
- Spotify playlist manager
- Spotify command line interface
- ncspot configuration settings
features:
- Play Spotify music from the terminal
- Manage Spotify playlists and queue songs
- Search for artists, albums, and tracks
- Configure logging and debug settings
- Display available keybindings for navigation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ncspot

> Cross-platform TUI Spotify client.
> More information: <https://github.com/hrkfdn/ncspot/blob/main/doc/users.md>.

- Start `ncspot`:

`ncspot`

- Enable logging to the specified file:

`ncspot {{[-d|--debug]}} {{path/to/file}}`

- Display paths to the configuration and cache:

`ncspot info`

- Use a different configuration file (in the directory reported by `ncspot info`; default: `config.toml`):

`ncspot {{[-c|--config]}} {{file_name}}`

- Display a list of keybindings:

`<?>`
