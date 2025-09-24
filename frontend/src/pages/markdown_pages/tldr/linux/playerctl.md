---
title: "Playerctl - Control Media Players via MPRIS | Online Free DevTools by Hexmos"
name: playerctl
path: /freedevtools/tldr/linux/playerctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/playerctl/"
description: "Control media players instantly with Playerctl. Manage playback, skip tracks, and display metadata using the command line. Free online tool, no registration required."
category: linux
keywords:
- mpris control linux
- media player control
- linux media control
- playerctl mpris
- command line media control
- linux playerctl command
- mpris player management
- control media playback linux
- linux mpris control command
- playerctl media metadata
features:
- Toggle media playback (play/pause)
- Skip to the next track
- Go back to the previous track
- Display media metadata (artist, album, title)
- Control specific or all media players
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# playerctl

> Control media players via MPRIS.
> More information: <https://github.com/altdesktop/playerctl>.

- Toggle play:

`playerctl play-pause`

- Skip to the next track:

`playerctl next`

- Go back to the previous track:

`playerctl previous`

- List all players:

`playerctl --list-all`

- Send a command to a specific player:

`playerctl --player {{player_name}} {{play-pause|next|previous|...}}`

- Send a command to all players:

`playerctl --all-players {{play-pause|next|previous|...}}`

- Display metadata about the current track:

`playerctl metadata --format "{{Now playing: \{\{artist\}\} - \{\{album\}\} - \{\{title\}\}}}"`
