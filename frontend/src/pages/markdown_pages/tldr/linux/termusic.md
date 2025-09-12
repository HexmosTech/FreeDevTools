---
title: "Control Music with Termusic - Terminal Player | Free DevTools"
name: termusic
path: /freedevtools/tldr/linux/termusic
canonical: "https://hexmos.com/freedevtools/tldr/linux/termusic/"
description: "Control music playback directly from your terminal with Termusic, a Rust-based terminal music player. Manage your music library and playlists efficiently. Free online tool, no registration required."
category: linux
keywords:
- terminal music player
- linux music player
- command line music
- rust music player
- vim keybindings music
- cmus alternative
- ncmpcpp alternative
- audacious alternative
- console music manager
- linux audio control
features:
- Play music files from the terminal
- Navigate music library using vim-like keybindings
- Customize configuration via TOML file
- Disable album cover display for specific files
- Display help information for command options
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# termusic

> A terminal music player written in Rust that uses vim-like key bindings.
> See also: `cmus`, `ncmpcpp`, `audacious`.
> More information: <https://github.com/tramhao/termusic>.

- Open termusic to a specific directory. (It can be set permanently in `~/.config/termusic/config.toml`):

`termusic {{path/to/directory}}`

- Disable showing the album cover for a specific file:

`termusic -c {{path/to/music_file}}`

- Display help:

`termusic --help`
