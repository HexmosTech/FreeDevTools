---
title: "Control ncmpcpp - MPD Client | Online Free DevTools by Hexmos"
name: ncmpcpp
path: "/freedevtools/tldr/common/ncmpcpp/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ncmpcpp/"
description: "Control MPD client with ncmpcpp, a powerful music player interface. Manage music playback, playlists, and library effortlessly. Free online tool, no registration required."
category: common
keywords:
- mpd client control
- music player daemon
- ncmpcpp configuration
- command-line music player
- linux audio player
- terminal music manager
- mpd metadata display
- console music client
- mpd remote control
- music library management
features:
- Connect to a Music Player Daemon instance
- Display current song metadata to the console
- Use a custom configuration file
- Utilize a custom key bindings file
- Manage music playback from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ncmpcpp

> A music player client for the Music Player Daemon.
> See also: `mpd`, `mpc`, `qmmp`, `termusic`.
> More information: <https://rybczak.net/ncmpcpp>.

- Connect to a music player daemon on a given host and port:

`ncmpcpp --host {{ip}} --port {{port}}`

- Display metadata of the current song to console:

`ncmpcpp --current-song`

- Use a specified configuration file:

`ncmpcpp --config {{file}}`

- Use a different set of key bindings from a file:

`ncmpcpp --bindings {{file}}`
