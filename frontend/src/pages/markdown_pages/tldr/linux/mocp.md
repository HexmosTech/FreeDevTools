---
title: "mocp - Control Music Playback on Console | Free DevTools"
name: mocp
path: /freedevtools/tldr/linux/mocp
canonical: "https://hexmos.com/freedevtools/tldr/linux/mocp/"
description: "Control music playback effortlessly with mocp, the Music on Console player.  Manage playlists, add songs, and control playback from your terminal. Free online tool, no registration required."
category: linux
keywords:
  - console music player
  - terminal audio player
  - mocp command line
  - linux audio control
  - command-line music playback
  - terminal music player
  - mocp playlist management
  - background music server
  - enqueue audio files
  - mocp server control
features:
  - Launch and control a terminal-based music player.
  - Add individual songs or directories to the playback queue.
  - Manage the playback queue (clear, add, append).
  - Start and stop the mocp server in the background.
  - Control playback (play, stop) of the queued music.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mocp

> Music on Console (MOC) audio player.
> More information: <https://manned.org/mocp>.

- Launch the MOC terminal UI:

`mocp`

- Launch the MOC terminal UI in a specific directory:

`mocp {{path/to/directory}}`

- Start the MOC server in the background, without launching the MOC terminal UI:

`mocp {{[-S|--server]}}`

- Add a specific song to the play queue while MOC is in the background:

`mocp {{[-q|--enqueue]}} {{path/to/audio_file}}`

- Add songs recursively to the play queue while MOC is in the background:

`mocp {{[-a|--append]}} {{path/to/directory}}`

- Clear the play queue while MOC is in the background:

`mocp {{[-c|--clear]}}`

- Play or stop the currently queued song while MOC is in the background:

`mocp --{{play|stop}}`

- Stop the MOC server while it's in the background:

`mocp {{[-x|--exit]}}`
