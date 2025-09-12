---
title: "Audacious Control - Manage Music Playback | Free DevTools"
name: audtool
path: /freedevtools/tldr/common/audtool
canonical: "https://hexmos.com/freedevtools/tldr/common/audtool/"
description: "Control your Audacious music player with audtool command line utility. Manage playback, adjust volume, and get song information easily. Free online tool, no registration required."
category: common
keywords:
- audacious control
- audio playback manager
- linux command line audio
- audacious command line tool
- music player control
- audio volume controller
- song info retriever
- audacious cli
- linux audacious
- audio control utility
features:
- Play and pause audio playback
- Display current song information
- Set audio volume level
- Advance to the next song in the playlist
- Show or hide the Audacious main window
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# audtool

> Control Audacious using commands.
> See also: `audacious`.
> More information: <https://manned.org/audtool>.

- Play/pause audio playback:

`audtool playback-playpause`

- Print artist, album, and song name of currently playing song:

`audtool current-song`

- Set volume of audio playback:

`audtool set-volume {{100}}`

- Skip to the next song:

`audtool playlist-advance`

- Print the bitrate of the current song in kilobits:

`audtool current-song-bitrate-kbps`

- Open Audacious in full-screen if hidden:

`audtool mainwin-show`

- Display help:

`audtool help`

- Display settings:

`audtool preferences-show`
