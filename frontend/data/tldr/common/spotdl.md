---
title: "Download Spotify - Playlist Downloader with Spotdl | Online Free DevTools by Hexmos"
name: spotdl
path: "/freedevtools/tldr/common/spotdl/"
canonical: "https://hexmos.com/freedevtools/tldr/common/spotdl/"
description: "Download Spotify songs and playlists with Spotdl. Extract metadata and save tracks from Spotify. Free online tool, no registration required."
category: common
keywords:
- spotify downloader
- spotify playlist downloader
- spotify song downloader
- spotify metadata extractor
- spotify command line tool
- spotify audio downloader
- spotdl download
- spotdl metadata
- playlist downloader linux
- playlist downloader macos
features:
- Download Spotify songs and playlists by URL
- Embed metadata into downloaded songs
- Start a web interface for song downloads
- Save metadata without downloading audio
- Save extracted metadata to a file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# spotdl

> Download Spotify playlists and songs along with metadata.
> More information: <https://github.com/spotDL/spotify-downloader>.

- Download songs from the provided URLs and embed metadata:

`spotdl {{open.spotify.com/playlist/playlistId1 open.spotify.com/track/trackId2 ...}}`

- Start a web interface to download individual songs:

`spotdl web`

- Save only the metadata without downloading anything:

`spotdl save {{open.spotify.com/playlist/playlistId1 open.spotify.com/track/trackId2 ...}} --save-file {{path/to/save_file.spotdl}}`
