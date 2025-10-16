---
title: "VLC Player - Play Multimedia Files | Online Free DevTools by Hexmos"
name: vlc
path: "/freedevtools/tldr/common/vlc/"
canonical: "https://hexmos.com/freedevtools/tldr/common/vlc/"
description: "Play multimedia files with VLC Media Player. Control video playback, audio settings, and stream online content. Free online tool, no registration required."
category: common
keywords:
- multimedia player
- vlc player
- video playback
- audio control
- command line player
- media streaming
- cross platform player
- linux media player
- macos media player
- windows media player
features:
- Play local media files from any directory
- Control playback in fullscreen mode
- Mute audio during playback
- Loop video or audio continuously
- Stream video directly from URLs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# vlc

> Cross-platform multimedia player.
> See also: `mpv`, `mplayer`, `ytfzf`.
> More information: <https://wiki.videolan.org/Documentation:Command_line/>.

- Play a file:

`vlc {{path/to/file}}`

- Play in fullscreen:

`vlc --fullscreen {{path/to/file}}`

- Play muted:

`vlc --no-audio {{path/to/file}}`

- Play repeatedly:

`vlc --loop {{path/to/file}}`

- Play video from a URL:

`vlc {{https://www.youtube.com/watch?v=oHg5SJYRHA0}}`
