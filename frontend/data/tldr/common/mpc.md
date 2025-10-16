---
title: "Control MPD - Music Player Client Command | Online Free DevTools by Hexmos"
name: mpc
path: "/freedevtools/tldr/common/mpc/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mpc/"
description: "Control music playback with MPC (Music Player Client). Manage MPD server, playlist, and queue. Free online tool, no registration required."
category: common
keywords:
- music player client
- mpd control
- mpd client
- linux audio player
- music player command line
- mpd command line
- mpc command
- music playback control
- playlist manager
- audio server control
features:
- Toggle between play and pause states.
- Stop music playback instantly.
- Display current song and player information.
- Skip to the next track in the playlist.
- Rewind to the previous track in the playlist.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mpc

> Music Player Client: control the Music Player Daemon (MPD).
> See also: `mpd`, `ncmpcpp`, `cmus`.
> More information: <https://www.musicpd.org/doc/mpc/html>.

- Toggle play/pause:

`mpc toggle`

- Stop playing:

`mpc stop`

- Show information about the currently playing song:

`mpc status`

- Play the next song:

`mpc next`

- Play the previous song:

`mpc prev`

- Seek `n` seconds forward (`+`) or backward (`-`):

`mpc {{+n|-n}}`
