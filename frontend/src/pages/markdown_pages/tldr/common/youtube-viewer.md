---
title: "Youtube-viewer - Search and Play YouTube Videos | Free DevTools"
name: youtube-viewer
path: /freedevtools/tldr/common/youtube-viewer
canonical: "https://hexmos.com/freedevtools/tldr/common/youtube-viewer/"
description: "Search YouTube videos easily with youtube-viewer. Stream content, log in to your account, and specify playback quality. Free online tool, no registration required."
category: common
keywords:
- youtube video search
- youtube video player
- youtube command line
- youtube-viewer linux
- youtube-viewer macos
- youtube-viewer windows
- youtube video stream
- youtube search term
- youtube account login
- youtube video 720p
features:
- Search for YouTube videos by keyword
- Log in to a YouTube account
- Play videos using a specific URL
- Play videos in an external player (e.g., VLC)
- Display a search prompt for easy video selection
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# youtube-viewer

> Search and play videos from YouTube.
> See also: `you-get`, `ytfzf`, `yt-dlp`.
> More information: <https://github.com/trizen/youtube-viewer>.

- Search for a video:

`youtube-viewer {{search_term}}`

- Log in to your YouTube account:

`youtube-viewer --login`

- Watch a video with a specific URL in VLC:

`youtube-viewer --player={{vlc}} {{https://youtube.com/watch?v=dQw4w9WgXcQ}}`

- Display a search prompt and play the selected video in 720p:

`youtube-viewer -{{7}}`
