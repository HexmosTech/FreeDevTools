---
title: "iPlayer Downloader - Record BBC iPlayer Content | Free DevTools"
name: get_iplayer
path: /freedevtools/tldr/common/get_iplayer
canonical: "https://hexmos.com/freedevtools/tldr/common/get_iplayer/"
description: "Download BBC iPlayer shows with iPlayer Downloader. Record your favorite programs and subtitles effortlessly. Free online tool, no registration required."
category: common
keywords:
- iPlayer downloader
- BBC iPlayer recorder
- BBC Sounds downloader
- iPlayer subtitles download
- media downloader
- program recorder
- video downloader
- CLI iPlayer downloader
- linux iPlayer
- macos iPlayer
features:
- Search BBC iPlayer and BBC Sounds for programs
- Record programs by name or URL
- Download subtitles for iPlayer content
- Automate recording and subtitle download in one command
- Display help information for command options
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# get_iplayer

> Indexing tool and personal video recorder for BBC iPlayer and BBC Sounds.
> More information: <https://github.com/get-iplayer/get_iplayer/wiki/manpage>.

- Search programmes by name:

`get_iplayer "{{program_name}}"`

- Record programme by results of search:

`get_iplayer "{{program_name}}" {{[-g|--get]}}`

- Record programme by URL from the BBC iPlayer website:

`get_iplayer "https://www.bbc.co.uk/iplayer/episode/{{program_PID}}/{{name-of-show-episode-number-episode-title}}"`

- Download subtitles for a programme by results of search:

`get_iplayer "{{program_name}}" --subtitles-only`

- Search for a programme, record it and download subtitles:

`get_iplayer "{{program_name}}" {{[-g|--get]}} --subtitles`

- Display help:

`get_iplayer {{[-h|--help]}}`
