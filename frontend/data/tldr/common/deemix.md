---
title: "Deezer Downloader - Download Music | Online Free DevTools by Hexmos"
name: deemix
path: "/freedevtools/tldr/common/deemix/"
canonical: "https://hexmos.com/freedevtools/tldr/common/deemix/"
description: "Download Deezer music easily with Deemix. Download tracks, playlists, and albums in FLAC or MP3. Free online tool, no registration required."
category: common
keywords:
- Deezer downloader
- Deezer music downloader
- FLAC downloader
- MP3 downloader
- Music downloader CLI
- Linux music downloader
- MacOS music downloader
- Windows music downloader
- Deezer playlist downloader
- Deezer album downloader
features:
- Download tracks from Deezer
- Download playlists from Deezer
- Download albums from Deezer
- Specify bitrate for downloads
- Create portable configuration file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# deemix

> A barebone deezer downloader library built from the ashes of Deezloader Remix.
> It can be used as a standalone CLI app or implemented in a UI using the API.
> More information: <https://gitlab.com/RemixDev/deemix-py>.

- Download a track or playlist:

`deemix {{https://www.deezer.com/us/track/00000000}}`

- Download track/playlist at a specific bitrate:

`deemix --bitrate {{FLAC|MP3}} {{url}}`

- Download to a specific path:

`deemix --bitrate {{bitrate}} --path {{path}} {{url}}`

- Create a portable deemix configuration file in the current directory:

`deemix --portable --bitrate {{bitrate}} --path {{path}} {{url}}`
