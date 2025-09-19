---
title: "Stream Torrents - Peerflix Stream Media | Online Free DevTools by Hexmos"
name: peerflix
path: /freedevtools/tldr/common/peerflix
canonical: "https://hexmos.com/freedevtools/tldr/common/peerflix/"
description: "Stream torrent files directly with Peerflix, eliminating downloads. Play video and audio torrents online using media players. Free online tool, no registration required."
category: common
keywords:
- torrent streaming
- online video streaming
- peerflix command
- media torrent player
- torrent file player
- stream magnet links
- torrent file streaming
- vlc torrent streaming
- mplayer torrent streaming
- airplay torrents
features:
- Stream torrents directly to media players like VLC and MPlayer.
- List all streamable files within a torrent by its magnet link.
- Play torrents on Airplay-enabled devices.
- Support for subtitles when streaming to MPlayer.
- Stream audio and video torrents.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# peerflix

> Stream video- or audio-based torrents to a media player.
> More information: <https://github.com/mafintosh/peerflix>.

- Stream the largest media file in a torrent:

`peerflix "{{torrent_url|magnet_link}}"`

- List all streamable files contained in a torrent (given as a magnet link):

`peerflix "{{magnet:?xt=urn:btih:0123456789abcdef0123456789abcdef01234567}}" {{[-l|--list]}}`

- Stream the largest file in a torrent, given as a torrent URL, to VLC:

`peerflix "{{http://example.net/music.torrent}}" {{[-v|--vlc]}}`

- Stream the largest file in a torrent to MPlayer, with subtitles:

`peerflix "{{torrent_url|magnet_link}}" {{[-m|--mplayer]}} {{[-t|--subtitles]}} {{subtitle-file.srt}}`

- Stream all files from a torrent to Airplay:

`peerflix "{{torrent_url|magnet_link}}" {{[-a|--all]}} {{[-s|--airplay]}}`
