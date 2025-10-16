---
title: "ytfzf - Find YouTube Videos and Music | Online Free DevTools by Hexmos"
name: ytfzf
path: "/freedevtools/tldr/linux/ytfzf/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ytfzf/"
description: "Find videos and music with ytfzf, a command-line YouTube search tool. Quickly download, play audio, and explore trending content. Free online tool, no registration required."
category: linux
keywords:
  - youtube search command line
  - command line youtube downloader
  - youtube audio extractor
  - ytfzf youtube search
  - posix shell youtube
  - peertube command line
  - youtube trending videos cli
  - cli youtube music player
  - youtube video downloader linux
  - youtube search terminal
features:
  - Search YouTube videos with thumbnail previews
  - Play audio-only from YouTube search results
  - Download videos from YouTube history
  - Play all music from a YouTube search in a loop
  - Search for videos on PeerTube using the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ytfzf

> Find and download videos and music. Written in POSIX shell.
> See also: `youtube-dl`, `yt-dlp`, `instaloader`.
> More information: <https://github.com/pystardust/ytfzf>.

- Search for videos on YouTube with thumbnail previews:

`ytfzf --show-thumbnails {{search_pattern}}`

- Play only the audio of the first item in a loop:

`ytfzf --audio-only --auto-select --loop {{search_pattern}}`

- Download a video from the history:

`ytfzf --download --choose-from-history`

- Play all the music found in a search:

`ytfzf --audio-only --select-all {{search_pattern}}`

- See the trending videos in an external menu:

`ytfzf --trending --ext-menu {{search_pattern}}`

- Search on PeerTube instead of YouTube:

`ytfzf --peertube {{search_pattern}}`
