---
title: "WebTorrent - Download and Seed Torrents | Free DevTools"
name: webtorrent
path: /freedevtools/tldr/common/webtorrent
canonical: "https://hexmos.com/freedevtools/tldr/common/webtorrent/"
description: "Download torrents quickly with WebTorrent. Stream torrents to VLC and DLNA devices, and seed files easily. Free online tool, no registration required."
category: common
keywords:
- torrent downloader
- webtorrent cli
- magnet link downloader
- torrent streaming
- dlna torrent streaming
- vlc torrent streaming
- torrent seeder
- torrent info
- torrent file creator
- command line torrent
features:
- Download torrents from magnet links, URLs, info hashes, and .torrent files.
- Stream torrents directly to VLC media player.
- Stream torrents to DLNA-compatible devices.
- Seed files and directories using the command line.
- Create new .torrent files from existing files.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# webtorrent

> The interface for WebTorrent.
> Supports magnets, URLs, info hashes and `.torrent` files.
> More information: <https://github.com/webtorrent/webtorrent-cli>.

- Download a torrent:

`webtorrent download "{{torrent_id}}"`

- Stream a torrent to VLC media player:

`webtorrent download "{{torrent_id}}" --vlc`

- Stream a torrent to a Digital Living Network Alliance (DLNA) device:

`webtorrent download "{{torrent_id}}" --dlna`

- Display a list of files for a specific torrent:

`webtorrent download "{{torrent_id}}" --select`

- Specify a file index from the torrent to download:

`webtorrent download "{{torrent_id}}" --select {{index}}`

- Seed a specific file or directory:

`webtorrent seed {{path/to/file_or_directory}}`

- Create a new torrent file for the specified file path:

`webtorrent create {{path/to/file}}`

- Display information for a magnet URI or `.torrent` file:

`webtorrent info {{path/to/file_or_magnet}}`
