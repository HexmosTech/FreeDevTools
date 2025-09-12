---
title: "Anime Browser - Watch Anime from Command Line | Free DevTools"
name: ani-cli
path: /freedevtools/tldr/common/ani-cli
canonical: "https://hexmos.com/freedevtools/tldr/common/ani-cli/"
description: "Browse anime instantly with ani-cli. Download episodes and watch anime from the command line on Linux and macOS. Free online tool, no registration required."
category: common
keywords:
- anime cli browser
- anime downloader cli
- command line anime
- linux anime streaming
- macOS anime streaming
- watch anime command line
- ani-cli download
- ani-cli search
- anime episode downloader
- command line video player
features:
- Search for anime by name from the command line.
- Download individual anime episodes quickly.
- Download a range of anime episodes sequentially.
- Stream anime directly using VLC media player.
- Continue watching anime from your viewing history.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ani-cli

> A cli to browse and watch anime.
> More information: <https://manned.org/ani-cli>.

- Search anime by name:

`ani-cli "{{anime_name}}"`

- Download an episode:

`ani-cli {{[-d|--download]}} "{{anime_name}}"`

- Download a range of episodes:

`ani-cli {{[-d|--download]}} {{[-r|--range]}} "{{1 6}}" "{{anime_name}}"`

- Download the entire series (a range of all episodes):

`ani-cli {{[-d|--download]}} {{[-r|--range]}} "1 -1" "{{anime_name}}"`

- Use VLC as the media player:

`ani-cli {{[-v|-vlc]}} "{{anime_name}}"`

- Watch a specific episode:

`ani-cli {{[-e|--episode]}} {{episode_number}} "{{anime_name}}"`

- Continue watching anime from history:

`ani-cli {{[-c|--continue]}}`

- Update `ani-cli`:

`ani-cli {{[-U|--update]}}`
