---
title: "Clementine Player - Control Music Playback | Online Free DevTools by Hexmos"
name: clementine
path: /freedevtools/tldr/common/clementine
canonical: "https://hexmos.com/freedevtools/tldr/common/clementine/"
description: "Control music playback with Clementine music player. Manage playlists, skip tracks, and pause/resume music with ease. Free online tool, no registration required."
category: common
keywords:
- Clementine music player
- Music player command line
- Audio playback control
- Playlist management tool
- Clementine command examples
- Linux music player
- macOS music player
- Audio library organizer
- Clementine audio player
- Music control CLI
features:
- Start Clementine GUI
- Begin playing music from a URL or path
- Toggle between pausing and playing audio
- Skip to the next or previous track in a playlist
- Create or load music playlists
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# clementine

> A modern music player and library organizer.
> See also: `audacious`, `qmmp`, `cmus`, `mpv`.
> More information: <https://manned.org/clementine>.

- Start the GUI or bring it to front:

`clementine`

- Start playing music:

`clementine {{url|path/to/music.ext}}`

- Toggle between pausing and playing:

`clementine {{[-t|--play-pause]}}`

- Stop playback:

`clementine {{[-s|--stop]}}`

- Skip to the next or previous track:

`clementine --{{next|previous}}`

- Create a new playlist with one or more music files or URLs:

`clementine {{[-c|--create]}} {{url1 url2 ...|path/to/music1.ext path/to/music2.ext ...}}`

- Load a playlist file:

`clementine {{[-l|--load]}} {{path/to/playlist.ext}}`

- Play a specific track in the currently loaded playlist:

`clementine {{[-k|--play-track]}} {{5}}`
