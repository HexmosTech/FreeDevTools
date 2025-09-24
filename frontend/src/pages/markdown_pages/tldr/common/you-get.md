---
title: "Download Media - Download Videos and Audios with you-get | Online Free DevTools by Hexmos"
name: you-get
path: /freedevtools/tldr/common/you-get
canonical: "https://hexmos.com/freedevtools/tldr/common/you-get/"
description: "Download media content instantly with you-get. Download videos, audios, and images from various websites. Free online tool, no registration required."
category: common
keywords:
- media downloader
- video downloader
- audio downloader
- you-get download
- youtube downloader
- online video downloader
- command line video downloader
- linux video downloader
- macos video downloader
- you-get command
features:
- Download videos from URLs.
- Download audio from URLs.
- Search and download media from Google Videos.
- Specify output directory and filename for downloads.
- Download media using a proxy server.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# you-get

> Download media contents (videos, audios, images) from the Web.
> See also: `yt-dlp`, `youtube-viewer`, `instaloader`.
> More information: <https://you-get.org>.

- Print media information about a specific media on the web:

`you-get --info {{https://example.com/video?id=value}}`

- Download a media from a specific URL:

`you-get {{https://example.com/video?id=value}}`

- Search on Google Videos and download:

`you-get {{keywords}}`

- Download a media to a specific location:

`you-get --output-dir {{path/to/directory}} --output-filename {{filename}} {{https://example.com/watch?v=value}}`

- Download a media using a proxy:

`you-get --http-proxy {{proxy_server}} {{https://example.com/watch?v=value}}`
