---
title: "Control Music Playback - MPD Command | Online Free DevTools by Hexmos"
name: mpd
path: "/freedevtools/tldr/common/mpd/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mpd/"
description: "Control music playback with MPD. Manage your music library, create playlists, and stream audio from the command line. Free online tool, no registration required."
category: common
keywords:
- music player daemon control
- mpd command line tool
- linux music server
- mpd music streaming
- mpd configuration
- music library manager
- mpc client
- ncmpcpp interface
- audio playlist manager
- mpd server administration
features:
- Start and stop the MPD server
- Control music playback from the command line
- Manage MPD configuration settings
- Kill existing MPD sessions
- Run MPD without configuration file loading
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mpd

> Music Player Daemon.
> See also: `mpc`, `ncmpcpp`.
> More information: <https://mpd.readthedocs.io/en/stable/mpd.1.html>.

- Start MPD:

`mpd`

- Start MPD but don't read from the configuration file:

`mpd --no-config`

- Start MPD and don't detach it from the console:

`mpd --no-daemon`

- Kill the currently running MPD session:

`mpd --kill`
