---
title: "Anime Downloader - Download Anime Easily | Online Free DevTools by Hexmos"
name: animdl
path: /freedevtools/tldr/common/animdl
canonical: "https://hexmos.com/freedevtools/tldr/common/animdl/"
description: "Download anime quickly with animdl, a powerful anime scraper. Effortlessly download episodes and manage your anime library. Free online tool, no registration required."
category: common
keywords:
- anime downloader
- anime scraper
- command line anime downloader
- animdl download anime
- anime episode downloader
- anime stream url grabber
- anime schedule viewer
- anime search tool
- anime streaming tool
- linux anime downloader
features:
- Download anime episodes by title
- Download anime by specifying episode ranges
- Specify a custom download directory
- Grab the stream URL for specific anime episodes
- Stream anime episodes directly from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# animdl

> A highly efficient, powerful and fast anime scraper.
> See also: `ani-cli`.
> More information: <https://github.com/justfoolingaround/animdl>.

- Download a specific anime:

`animdl download {{anime_title}}`

- Download a specific anime by specifying an episode range:

`animdl download {{anime_title}} {{[-r|--range]}} {{start_episode}}-{{end_episode}}`

- Download a specific anime by specifying a download directory:

`animdl download {{anime_title}} {{[-d|--download-dir]}} {{path/to/download_directory}}`

- Grab the stream URL for a specific anime:

`animdl grab {{anime_title}}`

- Display the upcoming anime schedule for the next week:

`animdl schedule`

- Search a specific anime:

`animdl search {{anime_title}}`

- Stream a specific anime:

`animdl stream {{anime_title}}`

- Stream the latest episode of a specific anime:

`animdl stream {{anime_title}} {{[-s|--special]}} latest`
